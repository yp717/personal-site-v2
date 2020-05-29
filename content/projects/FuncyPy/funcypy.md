---
path: /projects/project3
title: FuncyPy
date: 2020-03-30
thumbnail: "./thumbnail.png"
tags: ['fsharp', 'fsharp', 'parser', 'computation expressions']
posttype: 'project'
published: true
description: Writing an interpreter for a tiny functional language
color: regal-blue
---

This project was quite different from anything I worked on before. We called it FuncyPy because the idea was to use a python-like syntax for a functional programming language. All parts of the interpreter were written in fsharp, and I specifically worked on the Parser.

The project codebase was broken down into different modules following the structure below. All major functions are tested using automated test cases and property-based tests where possible.

Helper Module (Common) | Includes common type definitions and common helper functions that are used across modules, such as functions that convert between types, and printing functions for debugging.
Lexer Module (James) | Lexer: string -> List Tokens | Tokenizes inputs into specific types to be evaluated by the parser into an Abstract Syntax Tree. Tokens include types such as identifiers, keywords, sperators, operators, literals and comments.

Parser Module (Yannis) | Parser: Token list -> Result | Uses parser combinators and computation expressions to design a flexible language grammar. Parser was initially based on the more generic type parser (similar to Tick 3 extension) with parser combinators and now parses a stream of tokens from the lexer into an abstract syntax tree.

Combinator Runtime System (Aimilios) | CombinatorRS: AstT -> ‘T | Evaluates expressions with arguments first, except for if-else conditionals which will evaluate condition-first. Input to the run-time is AST output from parser. All functions will be Curried as lambdas, with memoization used throughout reduction (no function applied twice to same arguments).

The idea was to make the syntax as simple as possible, so, as an example, here's what a simple factorial function would look like:

```fsharp 
def factorial x:
    if (x==0):
        1 
    else:
        x * (factorial (x-1))

y = 3
y + (factorial 4)

>> 27
```

I worked primarily on developing the parser and integrating the parser with the lexer and combinator runtime. This meant writing lexer, parser, and end-to-end unit tests to find edge cases and improve the code's ability to handle errors.

*DISCLAIMER: This post requires quite a bit of familiarity with F# and may not make much sense without some practice or background with the language. If you have any questions feel free to get in touch and we can discuss any parts of the code or talk about potential improvements. (I wrote this as an exercise to learn about F# and parsing so there are definetely a lot of improvements to be made).*

## How I built the Parser

The parser architecture I think is quite interesting. It's a demonstration of how powerful functional programming concepts can be because of how extendable the language is. You'll see as we go through this how we used smaller building blocks to compose progressively more complicated Parsers that we combined to parse the tokensied input into the abstract syntax tree (AST). 

Here we define a Parser of *T* as a **Type** that takes a *string* and an *int* (a position within that string), and returns an **Option** which is a tuple of (*T* and *int*).

First, we define a Parser of type *T* as a **Type** that takes a list of Tokens as input and an *int* (a position within that Token list), and returns an **Option** which is a tuple of type (*T* and *int*).

```fsharp
/// Single Case D.U. used as a wrapper to create a type
type Parser<'T> = P of (list<Token> -> int -> Option<'T * int>)
```

Next we start with the simplest building block *pToken* that takes in a token list and an index *i* and returns either some tuple of the token at *i* and the incrememnted *i* or None

```fsharp
let pToken: Parser<Token> =
    P <| fun tokenList i ->
        if i < tokenList.Length then Some(tokenList.[i], i + 1) else None
```

At this stage it would also be useful to have a helper function to run our parsers easily so we know they're behaving as we expect. *pRun* does exactly that and is a helper function that "helps" run *aParser* easily.

```fsharp
let pRun (P aParser) tokL = aParser tokL 0
```

Before we move on, let's define one more helper function that takes in a *Token* and simply always returns Some tuple of *Token* and an unaltered index *i*. Some of you will have an idea but to most I imagine it may not make much sense why we need these just yet. It didn't make much sense to me either and I didn't do this in the most logical order when I wrote the code because it was quite hacky intially 🤓.

```fsharp
let pReturn tok: Parser<'T> = P <| fun t i -> Some(tok, i)
```

One more and then I promise we're done with these helpers. This helper is almost exactly the same as the last one. From the name, *pFail*, you can probably guess that it takes in a unit and always returns None.

```fsharp
let pFail(): Parser<'T> = P <| fun t i -> None
```

The next step is to start making parsers that combine other parsers in interesting ways. Following a standard functional pattern, this next parser takes the output of one parser and feeds it as an input to another parser. This is useful because it's how we're going to chain multiple parsers together. Here *ufunc* is a function that takes a type T and returns a parser of some type U and *tparser* is a parser of the same type U

```fsharp
let pBind (ufunc: 'T -> Parser<'U>) (P tparser): Parser<'U> =
    P <| fun tokenList i ->
        match tparser tokenList i with
        | None -> None
        | Some(tvalue, newI) ->
            let (P uparser) = ufunc tvalue
            uparser tokenList newI
```

This next parser essentially combines two parsers together. Which should be a little easier to visualize. I highly recommend if anyone is following through this that you actually try to play with and test these parsers as you go through this. It's not the most obvious thing to see, but the end result shows that when you combine these "building blocks", we can build a powerful, extendible, functional language.

```fsharp
let pCombine (uParser: Parser<'U>) (tParser: Parser<'T>): Parser<'U> = tParser |> pBind (fun _ -> uParser)
```

Bear with me. It will all make sense in the end. The next two parsers apply two parsers in sequence but with one key difference. The first parser applies two parsers and only keeps the result of the right parser. Meanwhile the second parser applies two parsers and only keeps the result of the left parser.

```fsharp
let pKeepRight uParser tParser = pCombine uParser tParser

let pKeepLeft (uParser: Parser<'U>) (tParser: Parser<'T>): Parser<'T> =
    tParser |> pBind (fun tokenValue -> uParser |> pBind (fun _ -> pReturn tokenValue))
```

We're almost at the light at the end of the tunnel. We've looked at combining two parsers but if you think about the expressions that you find in programming language, often they have more than two parts.

*pMany* is a parser that takes a list of *tparser* and returns Some tuple of values and the index *i* at which the parser fails (if it does!) This can be used to parse sequences of tokens and consume larger token streams.

```fsharp
let pMany (P t): Parser<'T list> =
    P <| fun tokL index ->
        // define tail recursive "loop"
        let rec loop lst i =
            match t tokL i with
            | None -> Some(List.rev lst, i)
            | Some(tokValue, tpos) -> loop (tokValue :: lst) tpos
        loop [] index // call the loop
```

Some token sequences need at least one token to start, say, for example, an If statement. That's exactly why we need this next parser *pMany* which requires the parser to succeed at least ones. The inner loop inside this function is tail recursive and so is optimized for fsharp.

```fsharp
let pChainlMin1 (term: Parser<'T>) (sep: Parser<'T -> 'T -> 'T>): Parser<'T> =
    let (P termfun) = term
    let (P sepfun) = sep
    P <| fun tok i ->
        let rec loop aggr currentI =
            match sepfun tok currentI with
            | None -> Some(aggr, currentI)
            | Some(sepCombiner, sepI) ->
                match termfun tok sepI with
                | None -> None
                | Some(termValue, termI) -> loop (sepCombiner aggr termValue) termI
        match termfun tok i with
        | None -> None
        | Some(termValue, termI) -> loop termValue termI
```

FSharp's Computation expressions are one of my favorite parts of the language. They make it really easy to build much more complex parsers, while using a standard functional programming pattern and making the functions we spend so long working through before really useful.

```fsharp
type ParserBuilder() =
    class
        member x.Bind(t, uf) = pBind uf t // Enables let!
        member x.Combine(t, u) = pCombine u t // Enables do!
        member x.Return v = pReturn v // Enables return
        member x.ReturnFrom p: Parser<'T> = p // Enables return!
        member x.Zero() = pReturn() // allows if x then expr with no else
    end

let parser = ParserBuilder()
```

The next couple of functions are just a bunch of simple type checking functions that we're going to have to use to unpack the annotation noise of the tokens. It would have been much more efficient not to pass a token list to the parser and instead deal with characters directly. However, there's also a benefit to splitting up the tokenizing and parsing work into different separate and identifiable modules. The names should be pretty intuitive. *isLiteral* simply checks the token type passed as input

```fsharp
let isLiteral (tok: Token) =
    match tok with
    | TokLit _ -> true
    | _ -> false

let isIdentifier (tok: Token) =
    match tok with
    | TokIdentifier _ -> true
    | _ -> false
```

*pSatisfy* parses a token and if it satisfies the parser evaluates to true and returns the token, else it returns fail.

```fsharp
let pSatisfy (satisfy: Token -> bool): Parser<Token> =
    parser {
        let! tok = pToken
        if satisfy tok then return tok else return! pFail()
    }
```

*pMap* also makes use of the power computation expression structure, just like *pSatisfy* and it takes mapping function that maps a type T to a type U and a parser of type T.

```fsharp
let pMap mappingFunc tParser =
    parser {
        let! tokenType = tParser
        return mappingFunc tokenType     
    }
```

Following the same pattern, the next stages combine two parsers into a parser of a pair, combine two parsers such that if one parser fails, it tries another, and even an AND combinator that applies a first parser to the source stream and then applies the second parser to the remaining part of the stream. 

```fsharp
let pPair uParser tParser =
    parser {
        let! first = tParser
        let! second = uParser
        return first, second 
    }

let pOrElse (P uParser) (P tParser) =
    P <| fun str pos ->
        match tParser str pos with
        | None -> uParser str pos
        | Some(tvalue, tpos) -> Some(tvalue, tpos)

let pAnd (P uParser) (P tParser) =
    P <| fun str pos ->
        match tParser str pos with
        | Some(tvalue, tpos) -> uParser tvalue tpos
        | _ -> None

/// Similar to pMany but requires 1 or more 'T instead of 0 or more
let pManyMin1 tparser =
    parser {
        let! head = tparser
        let! tail = pMany tparser
        return head::tail
    }
```

At this stage, its time to define the combinators. I used a static member here to attach methods specifically to the Parser type. The *member* keyword shows that this is a member function (i.e. a method). After this stage, we can express parsers using parser combinators to make things even more readable!

```fsharp
type Parser<'T> with
    static member (>>=) (t, uf) = pBind uf t
    static member (>>.) (t, u) = pKeepRight u t
    static member (.>>) (t, u) = pKeepLeft u t
    static member (.>>.) (t, u) = pPair u t
    static member (|>>) (t, m) = pMap m t
    static member (<|>) (t, u) = pOrElse u t
    static member (<&>) (t, u) = pAnd u t
```

Sometimes with specific constructs like if statements that we might want to have in our tiny functional language, we might want to skip some tokens - for example, the if key word in an if statement. *pSkipToken* skips a specific token given as input.

```fsharp
let pSkipToken tok =
    parser {
        let! token = pToken
        if tok = token then return () else return! pFail()
    }
```



```fsharp
/// Like pSkipToken but fails if the token is missing with specific error message
let pSkipTokenOrFail tok = 
    parser {
        let! token = pToken
        if tok = token then return () else return! failwithf "missing %A" tok 
    }    
```

```fsharp
/// Get AST Type from Literal (Const), Identifier (Var)
let pConst = pSatisfy isLiteral |>> fun tok ->
    match tok with
    | TokLit(Bool x) -> (Bool x) |> Literal
    | TokLit(Int x) -> (Int x) |> Literal
    | TokLit(Double x) -> (Double x) |> Literal
    | TokLit (String x) -> (String x) |> Literal
    | _ -> failwith "Expected Literal but did not receive literal"
```

```fsharp
let pVariable = pSatisfy isIdentifier |>> fun tok ->
    match tok with
    | TokIdentifier str -> str |> Variable
    | _ -> failwith "Expected Identifier but did not receive Identifier"
```

```fsharp
let ignoreList =
    let reducer list =
        match list with
        | [] -> ()
        | lst -> lst |> List.reduce (fun a b -> ())
    pMap reducer
```

```fsharp
let combineLambdas args body =
    let rec addLambda lambdas definition =
        match lambdas with
        | [] -> definition
        | (Variable hd)::tl -> addLambda tl (Lambda(hd, definition))
        | _ -> failwithf "Shouldn't happen"
    addLambda (List.rev args) body
```

```fsharp
let combineCalls left right =
    let rec addArgs l r =
        match r with
        | [] -> l
        | hd::tl -> addArgs (DCall(l, hd)) tl
    addArgs left right
```

```fsharp
let combinePairs left right =
    let rec addPair l r =
        match r with
        | [] -> DPair(l, Null)
        | hd::tl -> DPair(l, addPair hd tl)
    addPair left right
```

The entire language was run from one top level abstract syntax tree parser that parses a token stream given as input and returns the complete abstract syntax tree to be evaluated by the runtime.

```fsharp
let rec pAst: Parser<Ast> =
    let pFuncDefExp =
        parser {
            do! pMany (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            do! pSkipToken (TokSpecOp DEF)
            let! (Variable name) = pVariable
            let! arguments = pMany pVariable
            do! pSkipTokenOrFail (TokSpecOp COLON)
            do! pMany (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            let! body = pAst
            do! pManyMin1 (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            let! expr = pAst 
            let definition = combineLambdas arguments body
            return FuncDefExp(name, definition, expr)
        }

    let pBracketed =
        parser {
            do! pSkipToken (TokSpecOp LRB)
            let! e = pAst
            do! pSkipTokenOrFail (TokSpecOp RRB)
            return e
        }

    let pLambda =
        parser {
            do! pSkipToken (TokSpecOp LAMBDA)
            let! (Variable id) = pVariable
            do! pSkipTokenOrFail (TokSpecOp COLON)
            let! body = pAst
            return Lambda(id, body)
        }

    ...

    let pOperatorApp =
        parser {
            // pOp Skips the operator and builds an OperatorApp AST (operators applied to 2 arguments)
            let pOp opTok operator =
                pSkipToken opTok |>> fun c leftTree rightTree -> DCall(DCall((BuiltInFunc operator), leftTree), rightTree)
            let pAdd = pOp (TokBuiltInOp (Arithm Add)) (Arithm Add)
            let pSubtract = pOp (TokBuiltInOp (Arithm Subtract)) (Arithm Subtract)
            let pMultiply = pOp (TokBuiltInOp (Arithm Multiply)) (Arithm Multiply)
            let pDivide = pOp (TokBuiltInOp (Arithm Divide)) (Arithm Divide)

            let pLessThan = pOp (TokBuiltInOp (Comp Lt)) (Comp Lt)
            let pLessThanOrEq = pOp (TokBuiltInOp (Comp Le)) (Comp Le)
            let pGreaterThan = pOp (TokBuiltInOp (Comp Gt)) (Comp Gt)
            let pGreaterThanOrEq = pOp (TokBuiltInOp (Comp Ge)) (Comp Ge)
            let pEqualTo = pOp (TokBuiltInOp (Comp Eq)) (Comp Eq)
            let pNotEqualTo = pOp (TokBuiltInOp (Comp Ne)) (Comp Ne)

            // Define precedence of basic BuiltInType operators
            let pAllOp = pMultiply <|> pDivide <|> pAdd <|> pSubtract
            let pSubTerm = pBracketed <|> pListFunctionApp <|> pVariable <|> pConst
            let pChainOperatorApp = pChainlMin1 pSubTerm pAllOp
            let pCompOps = pLessThan <|> pLessThanOrEq <|> pGreaterThan <|> pGreaterThanOrEq <|> pEqualTo <|> pNotEqualTo

            let pChainedFuncApps = pChainlMin1 pChainOperatorApp pCompOps
            let! res = pChainedFuncApps
            return res
        }

    let pIfThenElse =
        parser {
            do! pSkipToken (TokSpecOp IF)
            let! condition = pVariable <|> pConst <|> pBracketed
            do! pSkipTokenOrFail (TokSpecOp COLON)
            do! pMany (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            let! ifTrue = pAst
            do! pMany (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            do! pSkipTokenOrFail (TokSpecOp ELSE)
            do! pSkipTokenOrFail (TokSpecOp COLON)
            do! pMany (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            let! ifFalse = pAst
            return DCall(DCall(DCall(BuiltInFunc IfThenElse, condition), ifTrue), ifFalse)
        }

    let pVariableDef = 
        parser {
            let! (Variable name) = pVariable
            do! pSkipToken (TokSpecOp EQUALS)
            do! pMany (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            let! definition = pAst
            do! pManyMin1 (pSkipToken (TokWhitespace LineFeed)) |> ignoreList
            let! expr = pAst
            return FuncDefExp(name, definition, expr)
        }

    let pCall = 
        parser {
            let! left = pVariable <|> pBracketed
            let! right = pManyMin1 (pConst <|> pVariable <|> pFullPair <|> pHalfPair <|> pEmptyPair <|> pBracketed)
            return combineCalls left right
        }

    (pFuncDefExp <|> pIfThenElse <|> pLambda <|> pCall <|> pVariableDef <|> pOperatorApp <|> pListAppend <|> pListInsert
     <|> pListFunctionApp <|> pBracketed <|> pFullPair <|> pHalfPair <|> pEmptyPair <|> pConst <|> pVariable)
```

There's definitely a lot that could be improved about this design, from the error handling to the efficiency of some of the implementations, as well as some repetitiveness in the code. However, given that this was my first real exposure to functional programming, parsing and the functional paradigm, I really enjoyed writing this parser. F# has come with a lot of challenges, particularly the documentation, which I think is often quite frustrating and poor. However, its easy to use maps, computation expressions and parser combinators make it a versatile language that I enjoyed working with.
