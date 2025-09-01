---
title: Chapter5 Sequences – Module1 Definition of Sequences
lang: en-US
---

| Platform    | Course                                                                                       | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=qzTFCMGohoM&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvry?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95bz-19-chapter5-sequence-module1-sequence-definition.html)    |                                                                   |


# Module 5-01 Sequences

## 1.Definition
- A sequence is __a list of numbers__ arranged in __a certain order__.
  - $\left\{ a_n \right\}=\left\{1,3,5,7,9,\cdots \right\}$
- General form: $\boldsymbol{a_1,a_2,a_3,\cdots,a_n,\cdots}$, abbreviated as $\boldsymbol{\left\{ a_n \right\}}$.
- Note: a sequence can be __regarded as a function__ whose __domain is the set of positive integers__ (or __one of its finite subsets__).
  Analyzing and solving sequence problems from __the perspective of functions__ is __a fundamental approach__.
  __Recurrence (recursive relations)__ is __a distinctive representation of sequences__,
  as it better reflects __their characteristics__.
  - recursive relation: $\boldsymbol{a_{n+2}=a_{n+1}+a_n}$
  - $\left\{ a_n \right\}=\left\{1,3,4,7,11,18,\cdots \right\}$
- Representation of sequences
  - Enumeration: $\boldsymbol{1,3,5,7,\cdots}$
  - General term: $\boldsymbol{a_n=2n-1}$
  - Recurrence: __relation between successive terms__


## 2.General Term Formula
- $a_n=f(n)$: a functional relationship between __the $\boldsymbol{n}$-th term $\boldsymbol{a_n}$__ and __the index $\boldsymbol{n}$__.  
  $
  \begin{array}{ll}
  a_n=3n-1=f(n) \\
  a_1=3-1=2 \\
  a_2=3\times2-1=5 \\
  a_8=3\times8-1=23 \\
  \end{array}
  $
- Note: not every sequence can be __expressed by a general term formula__; and for __some sequences, the general term formula is not unique__.


## 3.Sum of the First $n$ Terms
- The sum of the first $n$ terms of a sequence is denoted by $\boldsymbol{S_n=a_1+a_2+a_3+\cdots+a_n}$.
- Note: the sum of the first $n$ terms must __start from $\boldsymbol{a_1}$__.
  $a_n$ represents __an individual term__, while $S_n$ represents __the whole sum__.
- Derivation of $\boldsymbol{S_n-S_{n-1}=a_n}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_1=a_1 & n=1 \\
  S_2=a_1+a_2 & n=2 \\
  S_7=\underbrace{a_1+a_2+\cdots+a_6}_{S_6}+a_7=S_6+a_7 & n=7 \\
  S_n=S_{n-1}+a_n \\
  a_n=S_n-S_{n-1} & (n\ge2) \textsf{ (} S_0=\textsf{undefined)} \\
  \end{array}
  $  
  :::


## 4.Formulas for the Relationship between
- Given $a_n$, find $S_n$   
  $S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i$
- ###### Given $S_n$, find $a_n$    

  $
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 1 \\
  \end{cases}
  $  


## 5.Focus 1
__For the given $S_n$, find $a_n$__  
- Use the formula
  $
  \boldsymbol{
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 1 \\
  \end{cases}}
  $
  to analyze and solve.



