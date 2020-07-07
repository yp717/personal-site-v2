---
path: /projects/project3
title: FuncyPy
date: 2020-03-30
thumbnail: "./thumbnail.png"
hero: "./hero.png"
tags: ['fsharp', 'fsharp', 'parser', 'computation expressions']
posttype: 'project'
published: true
description: Writing an interpreter for a tiny functional language
color: regal-blue
---

This project was quite different from anything I worked on before. The objective was to write an interpreter for a tiny functional programming language.

We called it FuncyPy because the idea was to use a friendly, python-like syntax for a functional programming language. All parts of the interpreter were written in fsharp. The idea was to make the syntax as simple as possible, so, as an example, here's what a simple factorial function would look like:

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

I worked primarily on developing the parser and integrating the parser with the lexer and combinator runtime. This meant writing lexer, parser and end-to-end unit tests to find edge cases and improve the code's ability to handle errors.

The parser architecture I think is quite interesting. It's a demonstration of how powerful functional programming concepts can be because of how extendable the language is. The development pattern used uses smaller building blocks to compose progressively more complicated Parsers that we combined to parse the tokenized input into the abstract syntax tree (AST).

There's definitely a lot that could be improved about this design, from the error handling to the efficiency of some of the implementations, as well as some repetitiveness in the code. However, given that this was my first real exposure to functional programming, parsing and the functional paradigm, I really enjoyed writing this parser. This project is the culmination of only 3 months of functional programming and 3 months of F#. F# has come with a lot of challenges, particularly the documentation, which I think is often quite frustrating and poor. However, its easy-to-use maps, computation expressions and parser combinators make it a versatile language that I enjoyed working with.

## Side Note

FSharp's Computation expressions are one of my favorite parts of the language. They make it really easy to build much more complex parsers, while using a standard functional programming pattern and making the functions we spend so long working through before really useful.

## Want to know more?

I tried to keep this post brief. If you're interested in finding out more about the project, don't hesitate to reach out somewhere in the footer. The git repository has to be kept private for now because this project was part of a course at Imperial in 2020, and publishing it may give some students an unfair advantage and goes against department guidelines. I'm happy to discuss any aspects of the project if you're interested in more of the details or building something similar.
