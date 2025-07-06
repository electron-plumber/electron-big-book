---
title: Chapter9 permutations and combinations Module1 basic theoretical knowledge
lang: en-US
---
| Platforms   | Courses                                                                                                              | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=BKL0JLJVS5U&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuac?playlist=x9h6d2)                                                   |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95i3-31-chapter9-permutations-and-combinations-module1-basic-theoretical-knowled.html) |                                                                   |


# Fundamental theoretical knowledge

## 1.Principle of Counting by Classification (Addition Principle)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
If there are __$\boldsymbol{n}$ types__ of ways to complete a task,
and choosing __any one method__ from __any of these types__ can complete the task,
then suppose the first type has $\boldsymbol{m_1}$ different methods,
the second type has $\boldsymbol{m_2}$ different methods, and so on,
with the n‑th type having $\boldsymbol{m_n}$ different methods.
Then the total number of __different ways__ to complete this task is $\boldsymbol{N=m_1+m_2+\cdots+m_n}$.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Explanation
When applying the addition principle to counting,
the key is to __classify reasonably__,
ensuring __no overlaps and no omissions__.
__Each method__ within a category must be __independently capable__ of completing the task;
the specific methods in different categories must be __mutually exclusive__
(i.e., __the classification is non-overlapping__);
and every possible way of completing the task must fall into __one of these categories__
(i.e., __the classification is exhaustive__).
Determining __a reasonable classification__ is often __the challenging part__
of applying the addition principle to solve problems.
__The criteria for classification vary__ from problem to problem,
so __building up experience__ is important.

## 2.Principle of Counting by Steps (Multiplication Principle)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
If completing a task requires __sequentially carrying out $\boldsymbol{n}$ consecutive steps__,
then is __the task considered complete__,
and if there are $\boldsymbol{m_1}$ different ways to complete the first step,
$\boldsymbol{m_2}$ different ways to complete the second step, and so on,
with $\boldsymbol{m_n}$ different ways to complete the n‑th step,
then the total number of __different ways__
to complete the task is $\boldsymbol{N=m_1\times m_2\times\cdots\times m_n}$.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Explanation
When applying the multiplication principle for counting,
the key is to __break the task into reasonable steps__.
Completing the task requires __performing all $\boldsymbol{n}$ steps in sequence__,
where the steps are __related__: 
__no single step alone can complete the task__ — all __$\boldsymbol{n}$ steps__ must be finished in __order__ to do so.
The counts for each step are __independent of one another__.
As long as __the method used in any one step differs__,
__the corresponding way of completing the entire task is considered different__.


## 3.The Difference and Connection Between the Two Principles

1. Grasp the fundamental distinction between these two basic principles and avoid confusing them:
   - When you have __different types of methods__,
     each of which can complete the task from start to finish on its own,
     __you add the counts of these methods together__.
   - When you have __different steps__,
     where each method only completes part of the task,
     __you multiply the counts of these methods across the steps__.

2. When studying the number of different ways to complete a task, you must follow the principle of __no overlaps and no omissions__. 
   - For example:   
   - When selecting several products from a group for inspection,
     if you classify the selection methods in
     which there are __at most two defective products__ into two categories —
     the first category being selections with __two defective products__,
     and the second category being selections with __one defective product__ —
     then this classification clearly misses the case
     where the selection contains no defective products.
     - __At most $\boldsymbol{\Leftrightarrow \le}$__. 
     - __At least $\boldsymbol{\Leftrightarrow \ge}$__.
   - If you classify numbers divisible by 2, 3, or 6 into three categories —
     the first being numbers divisible by 2,
     the second being numbers divisible by 3,
     and the third being numbers divisible by 6 —
     then the first and second categories both overlap with the third category.
     This classification is therefore incorrect.
     
3. When applying the multiplication principle, you must note that all the steps must be completed in order for the task itself to be considered complete.  

  | Content     | Addition Principle                                                                                                                                                                | Multiplication Principle                                                                              |
  |-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
  | Essence     | Each category __can independently complete__ the task                                                                                                                             | If __any step is missing__, the task __cannot be completed__                                          |
  | Feature     | __The number of categories__ determines __the number of terms to add__                                                                                                            | __The number of steps__ determines __the number of terms to multiply__                                |
  | Symbol      | Plus sign $\boldsymbol{(+)}$                                                                                                                                                      | Multiplication sign $\boldsymbol{(\times)}$                                                           |
  | Application | When there is __uncertainty__ or __interference__ between methods, use __classification__                                                                                         | When __several processes or stages__ are required to complete the task, use __step-by-step counting__ |
  | Coexistence | When both __classification__ and __step-by-step__ processes __appear together__, you should first __classify at a macro level__, then __break down into steps at a micro level__	 |

