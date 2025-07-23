---
title: Chapter9 permutations and combinations Module2 six basic methods
lang: en-US
---

| Platforms   | Courses                                                                                                      | Coursewares                                                       |
|-------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=AL5zf-Li0KE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                 | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuma?playlist=x9h6d2)                                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95i9-32-chapter9-permutations-and-combinations-module2-six-basic-methods.html) |                                                                   |


# Module 9–02 Six Basic Methods

## 1.Adjacent Element Bundling Method 

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Adjacency
- Bundle __the specified adjacent elements__ into __one group__ and treat it as __a single unit in the arrangement__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Fixed subgroup
- When __a fixed subgroup__ appears, apply __the same bundling method__ and treat it as __one unit for calculation__.


## 2.Focus 1
__The adjacent element bundling method__
- When applying __the bundling method__ to adjacent elements, be sure to consider __the internal arrangement within the bundle__.   
- Additionally, some problems may involve __bundling multiple groups__.

::: wrap
### $\fbox{11}\:$Three families of three people each are watching a show. They bought $\small 9$ consecutive seats in one row. How many different ways can they sit if each family sits together $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: (3!)^2\textsf{ ways} &
\textsf{(B)} \: (3!)^3\textsf{ ways} &
\textsf{(C)} \: 3(3!)^3\textsf{ ways} & \\
\textsf{(D)} \: (3!)^4\textsf{ ways} &
\textsf{(E)} \: 9!\textsf{ ways} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
3!
\begin{cases}
[3\,\textsf{people}]=3! \\
[3\,\textsf{people}]=3! \\
[3\,\textsf{people}]=3! \\
\end{cases} \\
\underbrace{3!\times3!\times3!}_{\textsf{internal arrangement}}\times\underbrace{3!}_{\textsf{external arrangement}}=(3!)^4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $3!\times3!\times3!\times3!=(3!)^4$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{12}\:$Seven people are lined up. $\small A$ and $\small B$ must stand together, and so must $\small C$ and $\small D$. How many different arrangements are there$\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 480 &
\textsf{(B)} \: 460 &
\textsf{(C)} \: 420 &
\textsf{(D)} \: 408 &
\textsf{(E)} \: 390 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
5!
\begin{cases}
[A, B]=2! \\
[C, D]=2! \\
3\,\textsf{people} \\
\end{cases} \\
2!\times2!\times5!=4\times120=480 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $2!\times2!\times5!=480$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{13}\:$Using the digits $\small 1, 2, 3, 4$, and $\small 5$ without repetition, how many five-digit numbers can be formed where there are two digits between the odd digits $\small 1$ and $\small 5$, and both of those digits are even numbers $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 8 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 10 &
\textsf{(D)} \: 12 &
\textsf{(E)} \: 14 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\underbrace{1\,\boxed{2}\,\boxed{4}\,5}_{\textsf{fixed subgroup}}3 \\
2!
\begin{cases}
\begin{cases}
[2,4]=2! \\
[1,5]=2! \\
\end{cases} \\
3 \\
\end{cases} \\
2!\times2!\times2!=8 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $2!\times2!\times2!=8$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---

## 3.Alternating Element Insertion Method
- For problems where certain elements must be separated (i.e., not adjacent),
  first arrange the elements __without position restrictions__ in __all possible orders__.
  Then insert __the specified separated elements__ into the available spaces __between and at both ends of the arranged elements__.

## 4.Focus 2
__The alternating element insertion method__   
- First __arrange the other elements__, then insert the elements __that mustn't be adjacent__ into __the available gaps__.


::: wrap
### $\fbox{14}\:$Seven people are standing in a line for a photo. if $\small A, B$, and $\small C$ mustn't be adjacent to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 1020 &
\textsf{(B)} \: 1040 &
\textsf{(C)} \: 1140 &
\textsf{(D)} \: 1220 &
\textsf{(E)} \: 1440 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions  
  - note that arranging non-adjacent elements first could lead to adjacency  

  ![Question six basic methods figure Q-14 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-14%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{insert }A, B\textsf{, and }C \textsf{ into the available spaces} \\
  \begin{cases}
  [D, E, F, G]=4! \\
  C_{[?,?,?,?,?]}^{A, B, C}=C_5^3 \\
  [A, B, C]=3! \\
  \end{cases} \\
  4!\times C_5^3\times3!=\frac{5\times4\times3}{3\times2\times1}\times144=1440 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $4!\times C_5^3\times3!=1440$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{15}\:$A performance has $\small 3$ dances, $\small 2$ dramas, and $\small 2$ solos. The dance performances can't appear consecutively. How many different sequences of performances are possible $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 1020 &
\textsf{(B)} \: 1040 &
\textsf{(C)} \: 1140 &
\textsf{(D)} \: 1220 &
\textsf{(E)} \: 1440 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions  
  ![Question six basic methods figure Q-15 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-15%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{insert }3\textsf{ dances into the available spaces}\\
  \begin{cases}
  [\textsf{drama}, \textsf{drama}, \textsf{solo}, \textsf{solo}]=4! \\
  C_{[?,?,?,?,?]}^{\textsf{dance}, \textsf{dance}, \textsf{dance}}=C_5^3 \\
  [\textsf{dance}, \textsf{dance}, \textsf{dance}]=3! \\
  \end{cases} \\
  4!\times C_5^3\times3!=\frac{5\times4\times3}{3\times2\times1}\times144=1440 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $4!\times C_5^3\times3!=1440$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---


::: wrap
### $\fbox{16}\:$The corridor has a row of $\small 8$ light bulbs. To save electricity without affecting the lighting, $\small 3$ bulbs must be turned off at the same time, but no adjacent bulbs can be turned off. How many ways are there to turn off the lights $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 16 &
\textsf{(B)} \: 18 &
\textsf{(C)} \: 20 &
\textsf{(D)} \: 22 &
\textsf{(E)} \: 24 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Analyze the given conditions to solve the light-turning-off model problem     
  ![Question six basic methods figure Q-16 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-16%20solve-1.svg)  

  $
  \begin{array}{ll}
  8 \textsf{ lights}
  \begin{cases}
  \textsf{on}:5 \\
  \textsf{off (not adjacent)}:3 \\
  \end{cases} \\
  \textsf{the lights (on or off) don't require sorting because they're the same} \\
  C_{[?,?,?,?,?,?]}^{\textsf{off}, \textsf{off}, \textsf{off}}=C_6^3 \\
  C_6^3=\frac{6\times5\times4}{3\times2\times1}=20 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C_6^3=20$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 3
__The adjacent and non-adjacent cases appear together__   
- When both adjacent and non-adjacent cases appear,
  consider __the adjacent elements first__ — that is,
  __group them together first__, then handle __the non-adjacent elements__.


::: wrap
### $\fbox{17}\:$Seven people stand in a line. If $\small A$ and $\small B$ are adjacent, but neither of them is adjacent to $\small C$, how many different arrangements are there $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 940 &
\textsf{(B)} \: 960 &
\textsf{(C)} \: 980 &
\textsf{(D)} \: 1100 &
\textsf{(E)} \: 1200 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions  
  ![Question six basic methods figure Q-17 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-17%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{insert the package }[A, B]\textsf{ and }C\textsf{ into the available spaces} \\
  \begin{cases}
  [A, B]=2! \\
  [D, E, F, G]=4! \\
  C_{[?,?,?,?,?]}^{[A, B], C}=C_5^2 \\
  [[A, B], C]=2! \\
  \end{cases} \\
  2!\times4!\times C_5^2 \times 2!= \frac{5\times4}{2\times1}\times96=960 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $2!\times4!\times C_5^2 \times 2!=960$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{18}\:$Six people — three men and three women — stand in a line. If two of the women must stand next to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 940 &
\textsf{(B)} \: 960 &
\textsf{(C)} \: 980 &
\textsf{(D)} \: 1100 &
\textsf{(E)} \: 1200 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions    
  ![Question six basic methods figure Q-18 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-18%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{insert the package }[\textsf{female}, \textsf{female}]\textsf{ and }\textsf{female}\textsf{ into the available spaces} \\
  \begin{cases}
  [\textsf{male}, \textsf{male}, \textsf{male}]=3! \\
  \underbrace{\boxed{
  \begin{array}{ll}
  C_{[\textsf{female}, \textsf{female}, \textsf{female}]}^{\textsf{female}, \textsf{female}}=C_3^2 \\
  [\textsf{female}, \textsf{female}] = 2! \\
  \end{array}
  }}_{\textsf{unknown female elements, need arrangement}} \\
  C_{[?,?,?,?]}^{[\textsf{female}, \textsf{female}], \textsf{female}}=C_4^2 \\
  [[\textsf{female}, \textsf{female}], \textsf{female}]=2! \\
  \end{cases} \\
  3!\times C_3^2\times2! \times C_4^2 \times 2!=\frac{3\times2}{2\times1}\times\frac{4\times3}{2\times1}\times24=432 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $3!\times C_3^2\times2! \times C_4^2 \times 2!=432$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 4
__The case where both types are non-adjacent__  
- When the two types of elements __mustn't be adjacent__, first __arrange one type__,
  then __insert the other into the gaps__
  — making sure __all the available positions in between__ are __filled__.
- Alternating arrangement  
  $
  \begin{cases}
  [A, B, A, B] \\
  [B, A, B, A] \\
  \end{cases}
  $

::: wrap
### $\fbox{19}\:$Six people — three men and three women — stand in a line. If the women aren't adjacent to each other and the men aren't adjacent to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 64 &
\textsf{(B)} \: 68 &
\textsf{(C)} \: 72 &
\textsf{(D)} \: 80 &
\textsf{(E)} \: 90 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- It must be ensured that the available space in the middle (purple) contains elements    
  ![Question six basic methods figure Q-19 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-19%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{insert the }3\textsf{ females into the available spaces} \\
  \begin{cases}
  [\textsf{male}, \textsf{male}, \textsf{male}]=3! \\
  [\textsf{female}, \textsf{female}, \textsf{female}]=3! \\
  \underbrace{
  \begin{cases}
  [\textsf{female},\textsf{male},\textsf{female},\textsf{male}] \\
  [\textsf{male},\textsf{female},\textsf{male},\textsf{female}] \\
  \end{cases}}_{2\textsf{ alternating arrangements}} = 2 \\
  \end{cases} \\
  3!\times3!\times2=72 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $3!\times3!\times2=72$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{20}\:$Seven people — four men and three women — stand in a line. If the women aren't adjacent to each other and the men aren't adjacent to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 104 &
\textsf{(B)} \: 112 &
\textsf{(C)} \: 124 &
\textsf{(D)} \: 128 &
\textsf{(E)} \: 144 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- For two groups with different quantities, __first arrange the larger group__, then insert the smaller group into __the available purple spaces in between__      
  ![Question six basic methods figure Q-20 solve-1.svg](../../public/math/Core%20courses/Question%20six%20basic%20methods%20figure%20Q-20%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{insert the }3\textsf{ females into the available spaces} \\
  \begin{cases}
  [\textsf{male}, \textsf{male}, \textsf{male}, \textsf{male}]=4! \\
  [\textsf{female}, \textsf{female}, \textsf{female}]=3! \\
  \end{cases} \\
  4!\times3!=144 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $4!\times3!=144$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
- Alternating arrangement formulas   
  ::: wrap  
  >$
  \begin{array}{ll}
  n!\times n!\times2 & n\textsf{ males and }n\textsf{ females alternating arrangement} \\
  (n+1)!\times n! & (n+1)\textsf{ males and }n\textsf{ females alternating arrangement} \\
  \end{array}
  >$

  :::  
---

## 7.Identical Items with Divider Method (Stars and Bars)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions of Application  
- Elements are __identical__.
- Objects are __different__.
- __Each object is assigned at least one__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Principle of the Method
- Since __the items are identical__,
  __each object__ is __distinguished__ only by __the quantity assigned to it__.
  Therefore, by adjusting __the distribution quantity__ using __dividers__,
  __the number of ways to place the dividers__ represents __the number of possible distributions__.


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Formula
- For $n$ identical elements and $m$ distinct distribution objects,
  if __the distribution objects are non-empty__ (i.e., __each object must receive at least one__),
  there are $\boldsymbol{C_{n-1}^{m-1}}$ ways.
  - $C_{n-1}^{m-1}=C_{\textsf{number of dividers}}^{\textsf{number of gaps}}$
- Explanation: Arrange __the $\boldsymbol{n}$ identical elements in a row__, which creates $n−1$ gaps between them.
  By __inserting $\boldsymbol{m−1}$ dividers__, the elements can be divided into $m$ parts.
  Thus, the formula is $C_{n-1}^{m-1}$.
  If the distribution objects can be empty,
  treat __the elements as $\boldsymbol{m+n}$ items__ and apply the divider method.
  In this case, there are $C_{n+m-1}^{m-1}$ ways.   
  ![Divider method formula explanation.svg](../../public/math/Core%20courses/Divider%20method%20formula%20explanation.svg)   
- In the divider method, dividers can't be placed before the first element or after the last element,
  nor can two dividers be placed in the same gap.

## 8.Focus 5
__The identical elements divider method__  
- Conditions for using the divider method:
  ① __The $n$ elements must be identical__.
  ② __The $m$ recipients (or groups) must be distinct__.
  If __no group is allowed to be empty__ (i.e., each group must receive at least one element),
  then there are $\boldsymbol{C_{n-1}^{m-1}}$ ways.
  If __empty groups are allowed__, then there are $\boldsymbol{C_{n+m-1}^{m-1}}$ ways.

