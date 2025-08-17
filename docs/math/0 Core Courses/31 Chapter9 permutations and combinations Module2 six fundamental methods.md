---
title: Chapter9 Permutations and Combinations – Module2 Six Fundamental Methods
lang: en-US
---


# Module 9–02 Six Fundamental Methods

## 1.Adjacent Element Bundling Method

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Adjacency
- Bundle __the specified adjacent elements__ into __one group__ and treat it as __a single unit in the arrangement__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Fixed subgroup
- When __a fixed subgroup__ appears, apply __the same bundling method__ and treat it as __one unit for calculation__.


## 2.Focus 1
__The adjacent element bundling method__
- When applying __the bundling method__ to adjacent elements, be sure to consider __the internal arrangement within the bundle__.   
- Additionally, some problems may involve __bundling multiple groups__.

### $\fbox{11}\:$Three families of three people each are watching a show. They bought $\small 9$ consecutive seats in one row. How many different ways can they sit if each family sits together $\small \,\mathpunct{?}$.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{12}\:$Seven people are lined up. $\small A$ and $\small B$ must stand together, and so must $\small C$ and $\small D$. How many different arrangements are there$\small \,\mathpunct{?}$.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{13}\:$Using the digits $\small 1, 2, 3, 4$, and $\small 5$ without repetition, how many five-digit numbers can be formed where there are two digits between the odd digits $\small 1$ and $\small 5$, and both of those digits are even numbers $\small \,\mathpunct{?}$.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
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


### $\fbox{14}\:$Seven people are standing in a line for a photo. if $\small A, B$, and $\small C$ mustn't be adjacent to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
::: wrap  
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
- Show known conditions  
  - note that arranging non-adjacent elements first could lead to adjacency   

  ![Question six fundamental methods figure Q-14 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-14%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---

### $\fbox{15}\:$A performance has $\small 3$ dances, $\small 2$ dramas, and $\small 2$ solos. The dance performances can't appear consecutively. How many different sequences of performances are possible $\small \,\mathpunct{?}$.
::: wrap  
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
- Show known conditions  
  ![Question six fundamental methods figure Q-15 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-15%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---


### $\fbox{16}\:$The corridor has a row of $\small 8$ light bulbs. To save electricity without affecting the lighting, $\small 3$ bulbs must be turned off at the same time, but no adjacent bulbs can be turned off. How many ways are there to turn off the lights $\small \,\mathpunct{?}$.
::: wrap  
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
- Analyze the given conditions to solve the light-turning-off model problem     
  ![Question six fundamental methods figure Q-16 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-16%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 3
__The adjacent and non-adjacent cases appear together__   
- When both adjacent and non-adjacent cases appear,
  consider __the adjacent elements first__ — that is,
  __group them together first__, then handle __the non-adjacent elements__.



### $\fbox{17}\:$Seven people stand in a line. If $\small A$ and $\small B$ are adjacent, but neither of them is adjacent to $\small C$, how many different arrangements are there $\small \,\mathpunct{?}$.
::: wrap  
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
- Show known conditions  
  ![Question six fundamental methods figure Q-17 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-17%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
  \end{array}
  >$

  :::
---


### $\fbox{18}\:$Six people — three men and three women — stand in a line. If two of the women must stand next to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
::: wrap  
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
- Show known conditions    
  ![Question six fundamental methods figure Q-18 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-18%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_1-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  P_n^m=C_n^m \cdot m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#a-permutation-is-a-combination-followed-by-arrangement}{\textsf{permutation as an ordered combination}} \\
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


### $\fbox{19}\:$Six people — three men and three women — stand in a line. If the women aren't adjacent to each other and the men aren't adjacent to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
::: wrap  
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
- It must be ensured that the available space in the middle (purple) contains elements    
  ![Question six fundamental methods figure Q-19 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-19%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{20}\:$Seven people — four men and three women — stand in a line. If the women aren't adjacent to each other and the men aren't adjacent to each other, how many different arrangements are possible $\small \,\mathpunct{?}$.
::: wrap  
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
- For two groups with different quantities, __first arrange the larger group__, then insert the smaller group into __the available purple spaces in between__      
  ![Question six fundamental methods figure Q-20 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-20%20solve-1.svg)  
  ::: wrap  
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
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_3-alternating-element-insertion-method}{\textsf{alternating element insertion method}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
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

## 7.Divider Method with Identical Items (Stars and Bars)

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions for application  
- Elements are __identical__.
- Objects are __different__.
- __Each object is assigned at least one__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Principle of the method
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
  ![Divider method formula explanation.svg](../../public/math/Core%20Courses/Divider%20method%20formula%20explanation.svg)   
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


### $\fbox{21}\:$There are $\small 10$ athlete spots to be distributed among $\small 7$ classes, with each class receiving at least one. How many different distribution schemes are possible $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 84 &
\textsf{(B)} \: 124 &
\textsf{(C)} \: 254 &
\textsf{(D)} \: 258 &
\textsf{(E)} \: 304 & \\
\end{array}
$  
:::
#### Solution 
- Show known conditions    
  ![Question six fundamental methods figure Q-21 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-21%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  C_{10-1}^{7-1}=C_9^6=\frac{\bcancel{9}\times\bcancel{8}\times7\times\bcancel{6}\times\bcancel{5}\times\bcancel{4}}{\bcancel{6}\times\bcancel{5}\times\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}=\frac{3\times4\times7}{1}=84 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $C_{10-1}^{7-1}=84$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{22}\:$There are $\small 18$ athlete spots to be distributed among $\small 7$ classes, with each class receiving at least $\small 2$ spots. How many different distribution schemes are possible $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 94 &
\textsf{(B)} \: 124 &
\textsf{(C)} \: 168 &
\textsf{(D)} \: 210 &
\textsf{(E)} \: 240 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{first, assign one to each class} \\
18-7=11 \\
\textsf{then, assign one more to each class} \\
C_{11-1}^{7-1}=C_{10}^{6}=C_{10}^{4} \\
C_{10}^{4}=\frac{10\times\bcancel{9}\times\bcancel{8}\times7}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}=\frac{10\times3\times7}{1}=210 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $C_{11-1}^{7-1}=210$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  C_n^m=C_n^{n-m} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#property-of-combinations}{\textsf{property of combinations}} \\
  \end{array}
  >$

  :::
---


### $\fbox{23}\:$How many solutions in positive integers are there to the equation $\small x_1+x_2+x_3+x_4=12 \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 160 &
\textsf{(B)} \: 165 &
\textsf{(C)} \: 175 &
\textsf{(D)} \: 184 &
\textsf{(E)} \: 190 & \\
\end{array}
$  
:::
#### Solution 
- Treat $x_1,x_2,x_3,x_4$ as dividing 12 balls into 4 groups     
  ![Question six fundamental methods figure Q-22 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-22%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{let }x_1=1,x_2=3,x_3=4,x_4=4 \\
  C_{12-1}^{4-1}=C_{11}^{3}=\frac{11\times\bcancel{10}\times\bcancel{9}}{\bcancel{3}\times\bcancel{2}\times1}=\frac{11\times5\times3}{1}=165 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $C_{12-1}^{4-1}=165$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
- In addition, if the problem is about non-negative integers (i.e., __object can be empty__) 
  > ![Question six fundamental methods figure Q-22 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-22%20solve-1.svg)
  ::: wrap  
  >$
  \begin{array}{ll}
  \underbrace{x_1}_{\ge0}+\underbrace{x_2}_{\ge0}+\underbrace{x_3}_{\ge0}+\underbrace{x_4}_{\ge0}=12 \\
  \underbrace{\textsf{each object must receive at least one }}_{\ge 1} \\
  (x_1+1)+(x_2+1)+(x_3+1)+(x_4+1)=12+4 \\
  y_1+y_2+y_3+y_4=16 & \textsf{convert to positive integer solutions} \\
  C_{16-1}^{4-1}=C_{15}^{3} \Longleftrightarrow C_{n+m-1}^{m-1}=C_{12+4-1}^{4-1} \\
  \end{array}
  >$

  :::
---


### $\fbox{24}\:$Distribute $\small 10$ identical candies to $\small 4$ children. If each child receives at least one candy, there are $\small n$ ways to distribute them. If some children are allowed to receive none, there are $\small m$ ways. What is $\small m−n \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 160 &
\textsf{(B)} \: 164 &
\textsf{(C)} \: 175 &
\textsf{(D)} \: 184 &
\textsf{(E)} \: 202 & \\
\end{array}
$  
:::
#### Solution
::: wrap   
$
\begin{array}{ll}
n\ge1 \quad m\ge0 \\
n=C_{10-1}^{4-1}=C_{9}^{3}=\frac{\bcancel{9}\times\bcancel{8}\times7}{\bcancel{3}\times\bcancel{2}\times1}=\frac{3\times4\times7}{1}=84 \\
m=C_{10+4-1}^{4-1}=C_{13}^{3}=\frac{13\times\bcancel{12}\times11}{\bcancel{3}\times\bcancel{2}\times1}=\frac{13\times2\times11}{1}=286 \\
m-n=286-84=202 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $m-n=202$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  C_{n-1}^{m-1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{restricted stars and bars formula}} \\
  C_{n+m-1}^{m-1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#formula}{\textsf{unrestricted stars and bars formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 9.Exponentiation Method with Repeated Elements

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions for application
- Elements are __distinct__.  
- Objects are __distinct__.  
- Repetition is allowed (__common elements can be reused__).

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Introduction to the method
- The characteristic of __permutation problems with repetition allowed__ is __that elements are the objects of study__,
  and __their positions aren't constrained__.
  Each element can be __placed one by one__.
  In general,
  the number of ways to __arrange $\boldsymbol{n}$ different elements__ into __$\boldsymbol{m}$ different positions__ is $\boldsymbol{m^n}$.

### $\textcolor{#1E3A5F}{\fbox{3}}\:$Application of the method
1. There are $\boldsymbol{m^n}$ ways for __$\boldsymbol{n}$ people__ to go into __$\boldsymbol{m}$ different rooms__.
2. There are $\boldsymbol{m^n}$ ways to put __$\boldsymbol{n}$ different balls__ into __$\boldsymbol{m}$ different boxes__.
3. There are $\boldsymbol{m^n}$ ways to place __$\boldsymbol{n}$ different letters__ into __$\boldsymbol{m}$ different mailboxes__.

- __Derivation of the $m^n$ exponentiation method__  
  ::: wrap
  $
  \begin{array}{ll}
  n\textsf{ people} \quad m\textsf{ rooms}: \\
  \underbrace{C_m^1}_{1\textsf{st person}}\times\underbrace{C_m^1}_{2\textsf{nd person}}\times\underbrace{C_m^1}_{3\textsf{rd person}}\times\cdots\times\underbrace{C_m^1}_{n^\textsf{th}\textsf{ person}}=m^n \\
  \end{array}
  $  
  :::
  - Essence: multiply identical choices, resulting in exponentiation.   
  - $m^n = \textsf{container}^\textsf{items}$, $m$: shared, common, and reusable.   
  - $m$: __number of available options__ (supply).
  - $n$: __number of choosers__ (demand).

## 10.Focus 6
__The repeated-element exponentiation method__  
- You need to learn how to apply the formula and understand its usage. __Be careful not to mix up the base and the exponent__.


### $\fbox{25}\:$Five people are signing up for three different training courses, and each person signs up for only one course. How many different ways can they sign up $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 243 &
\textsf{(B)} \: 125 &
\textsf{(C)} \: 81 &
\textsf{(D)} \: 60 &
\textsf{(E)} \: 56 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^n=3^5=243 & \textsf{project}^\textsf{people} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $m^n=243$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  m^n & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#application-of-the-method}{\textsf{repeated-element exponentiation method}} \\
  \end{array}
  >$

  :::
- In addition, if the problem is that each person signs up for at least two courses   
  ::: wrap  
  >$
  \begin{array}{ll}
  C_3^2+C_3^3=3+1=4 & \textsf{ways for one of them to sign up} \\
  4\times4\times4\times4\times4=4^5 \\
  \end{array}
  >$

  :::
---


### $\fbox{26}\:$Five people sign up for three different competitions. Each competition has only one winner. How many different ways are there to assign the winners $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 243 &
\textsf{(B)} \: 125 &
\textsf{(C)} \: 81 &
\textsf{(D)} \: 60 &
\textsf{(E)} \: 54 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^n=C_5^1\times C_5^1\times C_5^1=5^3=125 & \textsf{person}^\textsf{competitions} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m^n=125$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  m^n & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#application-of-the-method}{\textsf{repeated-element exponentiation method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{27}\:$How many different ways are there to assign $\small 6$ interns to $\small 7$ workshops for their internships $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7^6 &
\textsf{(B)} \: 6^7 &
\textsf{(C)} \: 7! &
\textsf{(D)} \: 6! &
\textsf{(E)} \: C_7^6 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
m^n=7^6 & \textsf{workshop}^\textsf{people}\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $m^n=7^6$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  m^n & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#application-of-the-method}{\textsf{repeated-element exponentiation method}} \\
  \end{array}
  >$

  :::
---



## 11.Correct Matching and Incorrect Matching

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Conditions of application
- Elements are __different__.  
- Objects are __different__.  
- There is __a correspondence__ between elements and objects.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Introduction to the method
- Regardless of the number of elements, as long as they're __correctly matched__, there is __only one way__ to do it.
- For $n$ elements, if __$(n-1)$ elements are correctly matched__, it means __all the elements are correctly matched__.
- For incorrect matching arrangements, the number of methods is as follows:  
  - __$\boldsymbol{2}$ incorrect matches: $\boldsymbol{1}$ way__.
  - __$\boldsymbol{3}$ incorrect matches: $\boldsymbol{2}$ ways__.
  - __$\boldsymbol{4}$ incorrect matches: $\boldsymbol{9}$ ways__.
  - __$\boldsymbol{5}$ incorrect matches: $\boldsymbol{44}$ ways__.  
  - $6$ incorrect matches: $265$ ways.

  ![Incorrect matches of 2 and 3 elements.svg](../../public/math/Core%20Courses/Incorrect%20matches%20of%202%20and%203%20elements.svg)  


## 12.Focus 7
__The correct matching and incorrect matching__  
- When elements are __correctly matched__, there is __only one way to arrange them__.
  When they're __incorrectly matched__, you can __memorize the results__:
  $2$ incorrect matches: $1$ way,
  $3$ incorrect matches: $2$ ways,
  __$\boldsymbol{4}$ incorrect matches: $\boldsymbol{9}$ ways__,
  $5$ incorrect matches: $44$ ways.


### $\fbox{28}\:$There are $\small 5$ balls numbered $\small 1, 2, 3, 4, 5$ and $\small 5$ boxes also numbered $\small 1, 2, 3, 4, 5$. Each ball is to be placed into a box, with exactly one ball placed in the box that has the same number as the ball. Each box must contain exactly one ball. How many such arrangements are there in total $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 20 &
\textsf{(B)} \: 30 &
\textsf{(C)} \: 45 &
\textsf{(D)} \: 60 &
\textsf{(E)} \: 130 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question six fundamental methods figure Q-28 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-28%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  C_5^1 \times 9=45 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C_5^1 \times 9=45$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{4 incorrect matches: 9 ways}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{29}\:$There are $\small 6$ teachers, each teaching one of $\small 6$ classes. During the exam, two teachers proctor the classes they themselves teach. How many such proctoring arrangements are there $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 120 &
\textsf{(B)} \: 130 &
\textsf{(C)} \: 135 &
\textsf{(D)} \: 160 &
\textsf{(E)} \: 180 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question six fundamental methods figure Q-29 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-29%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  C_6^2 \times 9=\frac{6\times5}{2\times1}\times9=135 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C_6^2 \times 9=135$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{4 incorrect matches: 9 ways}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{30}\:$There are $\small 6$ teachers, each teaching one of $\small 6$ classes. During the exam, at least two teachers proctor the classes they themselves teach. How many such proctoring arrangements are there $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 170 &
\textsf{(B)} \: 180 &
\textsf{(C)} \: 190 &
\textsf{(D)} \: 191 &
\textsf{(E)} \: 192 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question six fundamental methods figure Q-30 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-30%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{at least two teachers} \Longleftrightarrow \ge2 \\
  \textcolor{#228B22}{\fbox{1}}\:\ge2 & \textsf{direct counting} \\
  C_6^2\times9 + C_6^3\times2 + C_6^4\times1 + C_6^6 \\
  \frac{6\times5}{2\times1}\times9 + \frac{\bcancel{6}\times5\times4}{\bcancel{3}\times\bcancel{2}\times1}\times2 + \frac{\bcancel{6}\times5\times\bcancel{4}\times3}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}\times1 + 1 \\
  15\times9 + 20\times2 + 15\times1 +1 = 191 \\
  \textcolor{#228B22}{\fbox{2}}\:\lt2 & \textsf{complementary counting} \\
  6!-C_6^1\times44-265 \\
  720-(6\times44)-265=191 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $191$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{all correct matches: 1 ways}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{2 incorrect matches: 1 ways}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{3 incorrect matches: 2 ways}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{4 incorrect matches: 9 ways}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{5 incorrect matches: 44 ways}} \\
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#introduction-to-the-method-1}{\textsf{6 incorrect matches: 265 ways}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  m! & \href{/math/0%20Core%20Courses/30%20Chapter9%20permutations%20and%20combinations%20Module1%20fundamental%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---


## 13.Exhaustive Listing Method

### $\textcolor{#1E3A5F}{\fbox{1}}\:$When to use
- When __elements interfere with each other__ or __can't be directly selected__,
  use __exhaustive listing__ to solve __the problem based on the requirements of the question__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Notes
- When listing, it's important to __establish a clear reference standard__;
  otherwise, it's easy to __overcount__ or __undercount__ the possibilities.


## 14.Focus 8
__The exhaustive listing method__  
- When the constraints on the elements make __it impossible to use combinations directly__,
  you need to list all possible cases __according to the given conditions__.
  If __direct (positive) listing involves too many cases__,
  you can solve the problem by __listing the complementary (negative) cases instead__.



### $\fbox{31}\:$There are $\small 9$ cards, each labeled with a natural number from $\small 1$ to $\small 9$. How many different ways are there to choose $\small 3$ cards such that the sum of the numbers on them is $\small 9 \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 5 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
- Start by establishing a reference standard the simple case $1$ to solve     
  ::: wrap  
  $
  \begin{array}{ll}
  \underbrace{1}_{\Delta}\quad2\quad3\quad4\quad5\quad6\quad7\quad8\quad9 \\
  \textsf{contains number }1
  \begin{cases}
  1+2+6=9 \\
  1+3+5=9 \\
  \end{cases} \\
  \textsf{contains number }2
  \begin{cases}
  2+3+4=9 \\
  \end{cases} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $3$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{32}\:$Using a balance scale and one each of $\small 1$ gram, $\small 3$ grams, and $\small 9$ grams weights (without using any other items as weights), how many different weights can be measured when the weights can only be placed on the same pan $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 7 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question six fundamental methods figure Q-32 solve-1.svg](../../public/math/Core%20Courses/Question%20six%20fundamental%20methods%20figure%20Q-32%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  1\;\textsf{gram} \quad 3\;\textsf{grams} \quad 9\;\textsf{grams} \\
  \textsf{choose }1\textsf{ item to combine}
  \begin{cases}
  1 \\
  3 \\
  9 \\
  \end{cases} \\
  \textsf{choose }2\textsf{ items to combine}
  \begin{cases}
  1+3 \\
  1+9 \\
  3+9 \\
  \end{cases} \\
  \textsf{choose }3\textsf{ items to combine}
  \begin{cases}
  1+3+9
  \end{cases} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $7$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{33}\:$Mike has $\small 1$ five-dollar bill, $\small 4$ two-dollar bills, and $\small 8$ one-dollar bills. Now, he wants to buy an 8-dollar novel. How many different ways can he pay $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 7 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{exact change only} \\
5 \quad [2, 2, 2, 2] \quad [1, 1, 1, 1, 1, 1, 1, 1] \\
\textsf{choose }3\textsf{ items to combine — sum=8}
\begin{cases}
5+2+1 \\
\end{cases} \\
\textsf{choose }2\textsf{ items to combine — sum=8}
\begin{cases}
5+1+1+1 \\
2+2+2+1+1 \\
2+2+1+1+1+1 \\
2+1+1+1+1+1+1 \\
\end{cases} \\
\textsf{choose }1\textsf{ item to combine — sum=8}
\begin{cases}
2+2+2+2 \\
1+1+1+1+1+1+1+1 \\
\end{cases} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $7$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---


### $\fbox{34}\:$Using 10-cent, 20-cent, and 50-cent coins (with no limit on the number of each coin), how many different ways can you make $\small 1$ dollar $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 7 &
\textsf{(D)} \: 8 &
\textsf{(E)} \: 10 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{number of each type of coin is unlimited} \\
\textsf{10-cent} = 0.1 \textsf{ USD} \\
\textsf{20-cent} = 0.2 \textsf{ USD} \\
\textsf{50-cent} = 0.5 \textsf{ USD} \\
\textsf{choose }1\textsf{ item to combine — sum=1}
\begin{cases}
0.1 \times 10 \\
0.2 \times 5 \\
0.5 \times 2 \\
\end{cases} \\
\textsf{choose }2\textsf{ items to combine — sum=1}
\begin{cases}
0.1\times2+0.2\times4 \\
0.1\times4+0.2\times3 \\
0.1\times5+0.5 \\
0.1\times6+0.2\times2 \\
0.1\times8+0.2 \\
\end{cases} \\
\textsf{choose }3\textsf{ items to combine — sum=1}
\begin{cases}
0.5+0.2\times2+0.1 \\
0.5+0.2+0.1\times3 \\
\end{cases} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $10$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20fundamental%20methods.html#_13-exhaustive-listing-method}{\textsf{exhaustive listing method}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                                      | Coursewares                                                       |
|-------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=AL5zf-Li0KE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                 | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuma?playlist=x9h6d2)                                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95i9-32-chapter9-permutations-and-combinations-module2-six-basic-methods.html) |                                                                   |

