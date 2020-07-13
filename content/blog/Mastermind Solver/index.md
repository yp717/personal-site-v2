---
path: /projects/mastermind
title: How to make a clever Mastermind-Solver (in C++)
date: 2018-03-18
thumbnail: "./thumbnail.png"
hero: "./hero.png"
tags: ['mastermind', 'code breaking', 'C++']
posttype: 'blog'
published: true
description: A clever but simple Mastermind Solver in C++ using Knuth's MinMax algorithm
---

This project was actually a first year assignment at Imperial College which asked students to write a solver in C++ for the popular game Mastermind. For this reason, a complete solution is not included in the rest of this post because the assignment may still be in use and I do not want to encourage any form of cheating or shortcuts. Instead, what follows is a description of my approach to building the solver, and an outline of the methods and techniques I used as well as a comparison with existing implementations.

If you've never played the game, before reading the rest of this post I highly recommend you [check it out](https://en.wikipedia.org/wiki/Mastermind_(board_game)). For a more mathematical description of the problem and the game, you could also check out [this paper](http://www.cs.uni.edu/~wallingf/teaching/cs3530/resources/knuth-mastermind.pdf) by Donald E. Knuth of the Computer Science Department at Stanford University.

For those that don't want to navigate to another page, here's a brief explanation.

The game mastermind was initially developed by Mordecai Meirowitz in 1970.[1] One player, which we can call the ‘Code Maker’, selects a secret code that a second player, which we can call the ‘Code Breaker’ must attempt to break in the smallest number of attempts possible. In the original game, a code consists of 4 positions or ‘pegs’, each with six possible numbers or ‘colours’. Repeated colours are permitted in the codes so there are a total of 64 = 1296 possible codes that the Code Maker could generate.

After each guess, the Code Maker gives the Code Breaker feedback on their attempt in the form of black and white pegs, where a black peg indicates that one of the elements in the guess has both the correct position and colour, and a white peg indicates that an element in the guess has the correct colour but wrong position. If no black or white pegs are obtained with a guess, then none of the pegs in the guess have the correct colour. The goal of the Code Breaker is to use the information provided in the feedback to minimize the number of attempts required to break the code and obtain four black pegs. Sounds simple enough...

<div class="text-align-center margin-top-bottom-2">
    <img src="https://media.giphy.com/media/l3fZLMbuCOqJ82gec/giphy.gif" width="50%" />
</div>

Starting from a rather ineffective implementation for the solver that just makes random guesses, I developed an improved solver that used dynamic programming. An effective solution would use the smallest number of attempts to solve the instance of the game. A timeout of 10 seconds was also set to ensure that the proposed solutions were also computationally efficient.

The Mastermind Satisfiability Problem (MSP) has been shown to be NP-complete[3]. This means that there are intrinsic computational properties that make solving this problem interesting and challenging, including that, firstly, the MSP is NP-hard, meaning that nothing is harder and, secondly, the MSP is NP, meaning that it is the hardest in the set.

This means that the MSP cannot be solved in polynomial-time, however, given a solution, a polynomial-time algorithm can check the validity of a potential solution. This next part is going to get a bit more mathematical for those interested.

Two parameters define every game of Mastermind: one is the number k of colours, and the other l is the length of the sequence. Provided that l and k are finite, for every pair of parameters (k,l), only a finite number of possible guesses exist without repeating guesses. An optimal algorithm will remove all but one of the possible codes from the list of possible codes in the smallest number of attempts using feedback from each guess to inform the next guess or determine the solution.

## Algorithms (Theoretical Background)

There are several methods and algorithms, each with their advantages, disadvantages and levels of complexity to find a secret code in Mastermind. In the early stages of developing this algorithm, the upper limit for the number of guesses assuming that guesses would not be repeated was established using the number of possible codes for the Code Maker to generate as

$$Number of possible codes = k^l$$.

Therefore, an algorithm that would sequentially test every possible code until it finds the secret code could have a maximum of kl attempts, and therefore any solution that decreases the number of attempts from this brute force approach is an improvement to the worst case scenario. The algorithm presented in this paper uses Knuth’s method of assigning scores to the possible feedbacks for every value in the full list, where a score represents how many values this score would remove from the list. The minimum score of the possible feedbacks for each value in the full list is then assigned to the index of each code and the maximum of these minimum scores and its corresponding guess is chosen as the next attempt if the guess is still on the list of possible solutions. It has been shown both experimentally and theoretically using this method that for the original game case with k = 6 and l = 4, more than five attempts are never needed to determine the secret code. However, the effectivity of Knuth’s and many other algorithms to find the secret code is limited by the algorithm’s heavy reliance on a large number of computations (see section IV). For example,consider the l = 4, k = 6 case of the original game: there are 16 different possible feedbacks for every value, and to assign minimum scores at each index of the full list, the number of feedbacks is, f = 161296 = 20, 736 combinations.

Further, this number does not increase linearly with larger game cases, and as the game size increases, the number of computations makes Knuth’s algorithm too slow to be considered effcient, despite its near optimal average number of guesses. For this reason, at a cut-off determined through experimental testing, the algorithm described in this paper switches from Knuth’s ’MINMAX’ method to another method that uses randomised attempts and their feedbacks to eliminate possibilities from the full list until the code is found.

## Experimental Testing

The specific implementation of the algorithm in this post has been left out because this project is still in use in the department at Imperial so it would be wrong to post a complete solution. If you came here looking for one, this is not the place. 😉

For experimental testing, the main of the program and the function generate sequence (in the structure mm code maker) were modified so that the testing could be run by automation. The main used took from the user an input to determine what specific case should be tested for the variables length and num, and then the main used a for loop to attempt to break every code in the full list generated by the length and num parameters.

Two additional libraries - chrono and ctime - were included to include timers to measure the time efficiency of the algorithm implemented for the assignment. One of the two timers, the timer from the ctime library, measures the time taken to find each secret code and the other timer, from the chrono library, times the time it takes to find all of the secret codes that are tested. Once the total time was measured, the average was then computed by dividing the total time taken to break all of the codes by the number of codes that are tested by the main.

To time the total time taken for all the tests the following statements were used, with the first statement where the timer should begin, the second where it should end, and the third as a variable declaration for the total time, which was used to compute the average.

```c++
auto start_all_tests = std::chrono::high_resolution_clock::now();
auto finish_all_tests = std::chrono::high_resolution_clock::now();
std::chrono::duration<double> total_time = finish_all_tests - start_all_tests;
```

The time taken for a single secret code to be found by the algorithm used the fol- lowing timer where the first statement indicates the point at which the timer started and the second timer indicated when the timer stopped and printed the output for the elapsed time.

```c++
const clock_t begin_time = clock();
std::cout << "ELAPSED TIME: " << float( clock () - begin_time ) / CLOCKS_PER_SEC;
```

## Results

The experimental data shows that there is, naturally, positive correlation between the average number of attempts with the length and num variables. This positive cor- relation is a consequence of an increased number of possible codes. As the number of colours (numbers) or positions (lengths) increases, the number of codes that the ‘Code Maker’ could choose is larger and as there are more codes, more attempts are required to eliminate all but one of the codes from the list of possible codes.

![table of results](/table1.png)

The linear relationship between the number of attempts and length for each value of num that was tested could also potentially allow for the prediction of larger order games with larger values of num and length that could not be tested due to time constraints. It is important to note that wherever there is no * in the table of results all possible codes that the Code Maker could generate were tested. For example, with a length of four and six colours (numbers), 1296 sequences were tested by the code-breaker algorithm, and for a length of six with seven possible colours, 117649 sequences were tested.

When the value of length was less than or equal to four and the value of num was less than or equal to six, Knuth’s MINMAX method could solve the sequences in an optimum number of attempts without a significant time increase as most tests could be carried out on average in less than one second. For the original game conditions, with a length of 4 and six possible colours (numbers), Knuth’s algorithm is cited to have an average of 4.4776 attempts and a maximum of 5 attempts. After repeatedly testing this case, the experimentally obtained average, in this case, was 4.47608. Within one standard deviation, the results of this algorithm compared to existing data available on the effciency regarding the number of attempts for Knuth’s algorithm.

The full testing results for the algorithm described in this report are summarised in the tables and figures below.

![Second table of results](/table2_3.png)

When either the length was greater than 4 or the number of possible colours was greater than 6, the algorithm implemented no longer uses Knuth’s MINIMAX method as it would require too many computations to generate the scores for each of the possible feedbacks.

![Graph of average number of attempts](/fig2.png)

Therefore, instead of generating scores for all of the sequences in the full list, another method is used, which chooses the next guess randomly and uses the feedback received from this guess to reduce the size of the possible list. The primary difference is that in the implementation of Knuth’s algorithm, the guess selected is the best of the worst-case scenarios and more possibilities are likely to be removed with a single attempt than with the random method. However, to attempt to avoid timing out in the final testing, this method was implemented because it is faster than Knuth’s algorithm.

![Graph of average elapsed time](/fig3.png)

The peak in the graph at length 4, which is the cut-off point, after which, the alternative method is used in the algorithm, clearly shows the significant time increase that arises due to MINMAX. Although using random guesses slightly increased the average number of guesses in experimental testing, the time for the algorithm to find each sequence generated by the Code Maker was significantly lower, as the data above shows.

![Performance of other approaches](/table4.png)

It is also important to consider the limitations of the time testing that was carried out. Firstly, the two clocks used did not have the same level of precision, and this introduces random error in the experimental testing results. Further, for the initial test case with a length of two and two colours (numbers), the sum of the time for each of the tests was calculated manually, and the average was computed manually as well before the timer was included for the full test with all sequences. The manually computed total time was not equal to the total time measured by the clock, and so there was a discrepancy between the two means as well by the two methods. A possible reason for this is that there is a very small delay between iterations of the for loop and so this is another limitation of the timing methods used with the clocks. However, for longer sequences with more codes, it was not feasible to manually compute the mean-time, so despite an initial awareness of this systematic error, the tests were still carried out with the clocks.


Given more time and fewer constraints, this algorithm could be improved by including an alternative algorithm that is more efficient regarding the average number of guesses than the random guessing algorithm used for higher order games. Specifically, the primary aim of an alternative algorithm for higher order games would be improved computational efficiency (speed). An example of such a program is Koyama and Lai’s ‘depth-first back-tracking’ algorithm [5], which based on background research had the
optimal average number of attempts with only 4.3403.

- [1] T. Nelson. A Brief History of the Master Mind Board Game. 2000.
- [2] Google Photos. “Mastermind Game.” WoodworkingTalk.com, 2015, https://goo.gl/images/79nAXd.
- [3] J. Stuckman and G.Q. Zhang (2006) Mastermind is NP-Complete. INFOCOMP J. Comput. Sci., 5, 25–28
- [4] D.E. Knuth. The computer as Master Mind. Journal of Recreational Math- ematics, 9(1):1–6, 1976.
- [5] K. Koyama and T. W. Lai. An optimal Mastermind Strategy. Journal of Recreational Mathematics, 25(4):251–256, 1993.
- [6] Shan-Tai Chen and Shun-Shii Lin. Optimal Algorithms for 2 n Master- mind Games – A Graph-Partition Approach. The Computer Journal, 47 (5):602–611, 2004.
- [7] R. W. Irving. Towards and optimum mastermind strategy. Journal of Recreational Mathematics, 11(2):81–87, 1978.
- [8] E. Neuwirth. Some strategies for mastermind. Mathematical Methods of Operations Research, 26(1):B257–B278, 1982.
- [9] R. Rosu. Analysis of the game of mastermind – the mn case. Technical report, Undergraduate thesis, North Carolina State University, 1997.
URL http://www.csc.ncsu.edu/academics/undergrad/Reports/ rtrosu/index.html.
- [10] W. Goddard. Mastermind revisited. Journal of Combinatorial Mathematics and Combinatorial Computing, 51:215–220, 2004. URL http://www.cs. clemson.edu/ god- dard/papers/mastermindRevisited.pdf.