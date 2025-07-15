---
title: Chapter9 permutations and combinations Module2 six basic methods
lang: en-US
---

| Platforms   | Courses                                                                                                      | Coursewares                                                       |
|-------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=AL5zf-Li0KE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                 | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuma?playlist=x9h6d2)                                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95i9-32-chapter9-permutations-and-combinations-module2-six-basic-methods.html) |                                                                   |


## 12.Adjacent Element Bundling Method 

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Adjacency
- Bundle __the specified adjacent elements__ into __one group__ and treat it as __a single unit in the arrangement__.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Fixed subgroup
- When __a fixed subgroup__ appears, apply __the same bundling method__ and treat it as __one unit for calculation__.


## 13.Focus 6
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
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_12-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
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
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_12-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
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
  & \href{/math/0%20Core%20courses/32%20Chapter9%20permutations%20and%20combinations%20Module2%20six%20basic%20methods.html#_12-adjacent-element-bundling-method}{\textsf{adjacent element bundling method}} \\
  m! & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#basic-permutation-formula-order-matters-remove-duplicates-from-swapping-identical-elements}{\textsf{basic permutation formula}} \\
  \end{array}
  >$

  :::
---
