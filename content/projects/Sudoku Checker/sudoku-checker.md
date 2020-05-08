---
path: /projects/sudoku-checker
title: Sudoku Checker
date: 2018-11-29
thumbnail: "./thumbnail.png"
tags: ['mathematics', 'introduction', 'cute']
posttype: 'project'
published: true
description: subtitle could go here
color: regal-blue
---

This project was actually a first year assignment at Imperial College which asked students to write a program which checks whether a certain input is a valid nxn sudoku or not. An nxn sudoku is defined as a collection of numbers organised in rows, columns and subsquares. Each of the rows, columns and subsquares have n elements, where n is a square number greater than 1. This means that n could be 4, 9, 16 and so on. While the assignment was relatively simple it was probably my first exposure to programming in C++ and an interesting exercise. 
<br/><br/>
To provide a little more detail it may be best to give an example. If we were to set $n=4$, this would mean that we are dealing with a 4x4 sudoku with 16 elements. Likewise, if $n=9$ it would have 81 elements and so on. The input to the program was a string of the following format as an example for the 4x4 case

```c++
1 2 3 4
4 3 2 1
2 3 4 1
3 4 2 1
```
It's easy to identify the rows as [1 2 3 4 ; 4 3 2 1 ; 2 3 4 1 ; 3 4 2 1], the columns as [1 4 2 3 ; 2 3 3 4 ; 3 2 4 2 ; 4 1 1 1] and the subsquares as [1 2 4 3 ; 3 4 2 1 ; 2 3 3 4 ; 4 1 2 1].

An nxn sudoku is said to be valid if each of the rows, columns and subsquares contains all the numbers from 1 to n, just as in the original game (though in the original typically n=9). The above example clearly isn't valid, but the following 9x9 sample is perfectly valid

```c++
3 1 5 8 2 7 9 4 6
4 6 8 9 1 5 7 3 2
7 2 9 3 4 6 5 1 8 
9 4 6 5 3 8 1 2 7
5 7 1 6 9 2 4 8 3 
8 3 2 1 7 4 6 9 5
6 9 3 2 5 1 8 7 4 
2 5 7 4 8 9 3 6 1
1 8 4 7 6 3 2 5 9
```

![Kitten Two](/thumbnail.png)