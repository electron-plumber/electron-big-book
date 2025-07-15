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


## 2.Focus 6
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
\underbrace{\boxed{3\,\textsf{people}}\;\boxed{3\,\textsf{people}}\;\boxed{3\,\textsf{people}}}_{3\,\textsf{families — each family has 3 people}} \\
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
\begin{cases}
[A,B] \\
[C,D] \\
3\,\textsf{people} \\
\end{cases} \\
2!\times2!\times5!=120\times4=480 \\
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

## 4.Focus 7
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
  4!\times C_5^3\times3!=24 \times \frac{5\times4\times3}{3\times2\times1}\times6=24\times60=1440 \\
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
