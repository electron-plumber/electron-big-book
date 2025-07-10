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
- If there are __$\boldsymbol{n}$ types__ of ways to complete a task,
and choosing __any one method__ from __any of these types__ can complete the task,
then suppose the first type has $\boldsymbol{m_1}$ different methods,
the second type has $\boldsymbol{m_2}$ different methods, and so on,
with the n‑th type having $\boldsymbol{m_n}$ different methods.
Then the total number of __different ways__ to complete this task is $\boldsymbol{N=m_1+m_2+\cdots+m_n}$.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Explanation
- When applying the addition principle to counting,
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
- If completing a task requires __sequentially carrying out $\boldsymbol{n}$ consecutive steps__,
then is __the task considered complete__,
and if there are $\boldsymbol{m_1}$ different ways to complete the first step,
$\boldsymbol{m_2}$ different ways to complete the second step, and so on,
with $\boldsymbol{m_n}$ different ways to complete the n‑th step,
then the total number of __different ways__
to complete the task is $\boldsymbol{N=m_1\times m_2\times\cdots\times m_n}$.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Explanation
- When applying the multiplication principle for counting,
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


## 4.Focus 1
__The addition principle__  
- When encountering problems that require classification, apply the addition principle.


::: wrap
### $\fbox{1}\:$Student A plans to travel from Sonoma to Cupertino for a trip. On that day, there are $\small 3$ trains, $\small 2$ ferries, and $\small 5$ flights available from Sonoma to Cupertino. How many different travel options does Student A have $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 3 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 5 &
\textsf{(D)} \: 10 &
\textsf{(E)} \: 30 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Each category is completed independently    

  $
  \begin{array}{ll}
  [
  \textsf{train}\mapsto3,\;
  \textsf{ferry}\mapsto2,\;
  \textsf{airplane}\mapsto5
  ] \\
  N=m_1+m_2+\cdots+m_n \\
  N=3+2+5=10 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $N=10$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1+m_2+\cdots+m_n & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{2}\:$How many three-digit numbers have digits whose sum is $\small 24 \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 8 &
\textsf{(D)} \: 10 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve using enumeration  

  $
  \begin{array}{ll}
  \frac{24}{3}=8 \\
  [888, 996, 789] \\
  888\in\underbrace{[888]}_{1} \\
  996\in\underbrace{[996,969,699]}_{3} \\
  789\in\underbrace{[789,798,879,897,978,987]}_{6} \\
  N=m_1+m_2+\cdots+m_n \\
  N=1+3+6=10 \\
  \end{array}
  $   
:::  
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve using the permutation formula    

  $
  \begin{array}{ll}
  \frac{24}{3}=8 \\
  [888, 996, 789] \\
  888 \Longrightarrow 1 \\
  996 \longrightarrow
  \boxed{
  \begin{array}{ll}
  ①: C_3^2=\frac{3!}{2!(3-2)!}=\frac{6}{2}=3 \\
  ②: \frac{3!}{2!\times 1!}=\frac{6}{2}=3 \\
  \end{array}
  } \\
  789 \longrightarrow 
  \frac{3!}{1!\times 1!\times 1!}=\frac{6}{1}=6 \\
  N=m_1+m_2+\cdots+m_n \\
  N=1+3+6=10 \\
  \end{array}
  $   
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $N=10$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1+m_2+\cdots+m_n & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
- Ways to arrange elements   
  ::: wrap  
  > - All identical elements: __only $1$ arrangement__.  
  > - Some identical elements:  
  >   1. Enumeration (list all possibilities)  
  >   2. __Basic permutation formula__ (order matters, remove duplicates from swapping identical elements)  
  >      $\boldsymbol{\frac{n!}{k_1!\times k_2!\times\cdots \times k_m!}}$  
  >      - $n$: total number of available items   
  >      - $k_i$: number of identical elements of type $i$, where $k_1+k_2+\cdots+k_m=n$  
  >      - __Example__:   
  > $
           \begin{array}{ll}
           [7,8,9] \\
           n=3 \\
           \textsf{each of 7, 8, 9 appears once} \\
           k_i=1\times1\times1 & 1+1+1=3 \\
           \frac{3!}{1!\times 1!\times 1!}=\frac{6}{1}=6 \\
           6
           \begin{cases}
           [7,8,9] \\
           [7,9,8] \\
           [8,7,9] \\
           [8,9,7] \\
           [9,7,8] \\
           [9,8,7] \\
           \end{cases} \\
           \end{array}
  > $
  >   3. ###### __Combination formula__ (order doesn't matter, remove duplicates caused by different orders)
  >      $\boldsymbol{C_n^k=\frac{n!}{k!(n-k)!}}$   
  >      - $n$: total number of available items (supply)   
  >      - $k$: number of elements to choose (demand, order does not matter)    
  >      - __Example__:   
  > $
           \begin{array}{ll}
           [9,9,6] \\
           n=3 \\
           k=2 & \textsf{number of elements chosen in a combination} \\
           C_3^2=\frac{3!}{2!\times1!}=3 \\
           3
           \begin{cases}
           [9_1, 9_2] \\
           [9_1, 6] \\
           [9_2, 6] \\
           \end{cases} \\
           \end{array}
  > $
  > - All distinct elements (__combination formula not applicable__ — ignores order, eliminates ordered duplicates):  
  >   1. __Basic permutation formula__     
  >      $\boldsymbol{\frac{n!}{k_1!\times k_2!\times\cdots \times k_m!}}$  

  :::  

---

## 5.Focus 2
__The multiplication principle__   
- When encountering multi-step problems, apply the multiplication principle.

::: wrap
### $\fbox{3}\:$A class is participating in a $\small 400\textsf{m}$ relay at the school sports meet. Two students can run the first leg, three the second, two the third, and one the final leg. The total number of possible running orders is $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 8 &
\textsf{(D)} \: 7 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- The task requires collaboration     

  $
  \begin{array}{ll}
  \begin{cases}
  \textsf{part}_1\mapsto2 \\
  \textsf{part}_2\mapsto3 \\
  \textsf{part}_3\mapsto2 \\
  \textsf{part}_4\mapsto1 \\
  \end{cases}\\
  N=m_1\times m_2\times\cdots\times m_n \\
  N=2\times 3\times 2\times 1=12 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $N=12$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1\times m_2\times\cdots\times m_n & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#_2-principle-of-counting-by-steps-multiplication-principle}{\textsf{multiplication principle}} \\
  \end{array}
  >$

  :::
- Determine: addition or multiplication  
  ::: wrap
  >$
  \textsf{task}
  \begin{cases}
  \textsf{incomplete} \to \times \\
  \textsf{completed} \to + \\
  \end{cases}
  >$

  :::
---

## 6.Focus 3
__The addition and multiplication coexist__
- When both classification and step-by-step processes appear together, you should __first classify at a macro level__, then __break down into steps at a micro level__.  

::: wrap
### $\fbox{4}\:$From $\small 5$ sketches, $\small 3$ oil paintings, and $\small 2$ watercolors, how many different ways can you select two pieces of artwork of different types to decorate the classroom $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 35 &
\textsf{(B)} \: 33 &
\textsf{(C)} \: 32 &
\textsf{(D)} \: 31 &
\textsf{(E)} \: 30 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
[[\textsf{sketch}, \textsf{oil painting}], [\textsf{sketch}, \textsf{watercolor}], [\textsf{oil painting}, \textsf{watercolor}]] \\
[\textsf{sketch}, \textsf{oil painting}] 
\begin{cases}
\begin{array}{ll}
\textsf{part}_1\mapsto C_5^1=\frac{5!}{1!(5-1)!}=\frac{120}{24}=5 \\
\textsf{part}_2\mapsto C_3^1=\frac{3!}{1!(3-1)!}=\frac{6}{2}=3 \\
\end{array}
\end{cases} \\
[\textsf{sketch}, \textsf{watercolor}]
\begin{cases}
\begin{array}{ll}
\textsf{part}_1\mapsto C_5^1=\frac{5!}{1!(5-1)!}=\frac{120}{24}=5 \\
\textsf{part}_2\mapsto C_2^1=\frac{2!}{1!(2-1)!}=\frac{2}{1}=2 \\
\end{array}
\end{cases} \\
[\textsf{oil painting}, \textsf{watercolor}]
\begin{cases}
\begin{array}{ll}
\textsf{part}_1\mapsto C_3^1=\frac{3!}{1!(3-1)!}=\frac{6}{2}=3 \\
\textsf{part}_2\mapsto C_2^1=\frac{2!}{1!(2-1)!}=\frac{2}{1}=2 \\
\end{array}
\end{cases} \\
N=m_1\times m_2\times\cdots\times m_n & \textsf{subprocess} \\
N=m_1+m_2+\cdots+m_n & \textsf{main process} \\
N=(5\times3)+(5\times2)+(3\times2)=31 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $N=31$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  N=m_1\times m_2\times\cdots\times m_n & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#_2-principle-of-counting-by-steps-multiplication-principle}{\textsf{multiplication principle}} \\
  C_n^k=\frac{n!}{k!(n-k)!} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#combination-formula-order-doesn-t-matter-remove-duplicates-caused-by-different-orders}{\textsf{combination formula}} \\
  N=m_1+m_2+\cdots+m_n & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#definition}{\textsf{addition principle}} \\
  \end{array}
  >$

  :::
---

## 7.Permutations

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition of permutation
- A permutation refers to __selecting $\boldsymbol{m}$ elements $\boldsymbol{(m \le n)}$__ from __$\boldsymbol{n}$ distinct elements__ and arranging them in __a specific order__.
This is called __a permutation__ of $m$ elements from __$\boldsymbol{n}$ distinct elements__.


### $\textcolor{#1E3A5F}{\fbox{2}}\:$Number of permutations
- The number of permutations refers to __the total number of different ways__ to select and arrange $m$ elements $(m \le n)$ from $n$ distinct elements.
It is denoted as $\boldsymbol{P_n^m}$ or $\boldsymbol{A_n^m}$.
When $m=n$, it is called __a full permutation__, written as $\boldsymbol{P_n^n}$ or $\boldsymbol{A_n^n}$.
- Note: It is important to distinguish between a permutation and the number of permutations
  - __A permutation__ is one specific arrangement of $m$ elements selected from $n$ distinct elements.
    It is __not a number__.
  - __The number of permutations__ is __the total count__ of all such possible arrangements.
    It is __a numerical value__.
    Therefore, the notation $P_n^m$ represents only __the number of permutations__,
    __not the specific arrangements themselves__.


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Formula for the number of permutations
- $Р_n^m=А_n^m=n(n-1)(n-2)\cdots(n-m+1)=\frac{n!}{(n-m)!}$   
- $n$: total number of available items (supply).
- $m$: number of items to arrange (demand, order matters).
- Example:    
  $
  \begin{array}{ll}
  A_6^3=\underbrace{6\times5\times4}_{3 \textsf{ numbers}}=120 \\
  \end{array}
  $


## 8.Combinations

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition of combination
- Selecting $m$ elements $(m \le n)$ from $n$ distinct elements and __grouping them together__ (regardless of order)
is called __a combination__ of $m$ elements from $n$ distinct elements.
 
### $\textcolor{#1E3A5F}{\fbox{2}}\:$Number of combinations
- The number of combinations refers to __the total number of ways__ to choose $m$ elements $(m \le n)$ from $n$ distinct elements.
It is denoted as $\boldsymbol{C_n^m}$.
  - ###### __Formula for the number of combinations__: $C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1}=\frac{n!}{m!(n-m)!}=\boldsymbol{\frac{A_n^m}{m!}}$.
    - $n$: total number of available items (supply).
    - $m$: number of elements to choose (demand, order does not matter).   
    - All identical elements only 1 arrangement: $C_n^n=1$.
    - Example:  
      $
      \begin{array}{ll}
      C_7^3=\frac{7\times6\times5}{3\times2\times1}=\frac{210}{6}=35 \\
      C_7^4=\frac{7\times6\times5\times4}{4\times3\times2\times1}=\frac{840}{24}=35 \\
      \end{array}
      $
  - A permutation is __a combination__ followed by __arrangement__: $A_n^m=C_n^m \boldsymbol{\cdot} A_m^m=\boldsymbol{C_n^m \cdot m!}$.
    - Example: $A_4^3=C_4^3\times3!$

### $\textcolor{#1E3A5F}{\fbox{3}}\:$Property of combinations
- $C_n^m=C_n^{n-m}$
- Example: $C_9^6=C_9^3$


## 9.Problem-Solving Rules
- Permutations $A_n^m=C_n^m \cdot A_m^m=C_n^m \cdot m!$.
  A permutation is __a combination__ followed by __arrangement__, so $\boldsymbol{A_n^m}$ can be __expressed as $\boldsymbol{C_n^m \cdot m!}$__.
- Use combinations $\boldsymbol{C_n^m}$ when __selecting elements or positions__.
- Use factorial $\boldsymbol{m!}$ when __arranging (sorting) elements__.
- Break down all problems into a process of __selection__ and __arrangement__ and then __write expressions accordingly__.


## 10.Focus 4
__The calculation of permutations and combinations__  
- The calculation of permutations and combinations is based on their definitions and __formulas__. 

::: wrap
### $\fbox{5}\:$What is the value of $\small C_8^4-C_7^3\,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 25 &
\textsf{(B)} \: 28 &
\textsf{(C)} \: 30 &
\textsf{(D)} \: 32 &
\textsf{(E)} \: 35 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} \\
C_8^4=\frac{\bcancel{8}\times7\times\bcancel{6}\times5}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}=\frac{2\times7\times5}{1}=70 \\
C_7^3=\frac{7\times\bcancel{6}\times5}{\bcancel{3}\times\bcancel{2}\times1}=\frac{7\times5}{1}=35 \\
70-35=35 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $70-35=35$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---
