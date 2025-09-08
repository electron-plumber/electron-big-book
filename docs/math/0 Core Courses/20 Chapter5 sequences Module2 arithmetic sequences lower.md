---
title: Chapter5 Sequences – Module2 Arithmetic Sequences Lower
lang: en-US
---

| Platform    | Course                                                                                            | Coursewares                                                       |
|-------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=UIfceZQcoHM&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)      | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvs2?playlist=x9h6d2)                                |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95cb-21-chapter5-sequences-module2-arithmetic-sequences-lower.html) |                                                                   |


## 8.Focus 4
__The non-standard method for summation__  
- The indices of sequence terms are __normally positive integers__,
  but sometimes __introducing a fractional index such as $\boldsymbol{0.5}$ can make the solution more convenient__.
  The formula $\boldsymbol{S_n=\frac{a_1+a_n}{2}n}$ can be __equivalently rewritten as $\boldsymbol{S_n=na_{\frac{n+1}{2}}}$__
  (when $\boldsymbol{n}$ is __even__, __a fractional index may be used__).
  For example, $S_{10}= 10a_{5.5}$.
  Similarly, $\boldsymbol{a_m+a_n=2a_{\frac{m+n}{2}}}$,
  for example, $a_3+a_8=2a_{5.5}$.


### $\fbox{21}\:$For the arithmetic sequence $\small \left\{ a_n \right\}$ with sum of the first $\small n$ terms, if $\small S_{14}=70$ and $\small S_{16}=144$, then what is the common difference of the sequence $\small \left\{ a_n \right\}\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 5 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the arithmetic series sum formula  
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  S_{14}=14a_1+\frac{14\times13}{2}d=70 \\
  S_{16}=16a_1+\frac{16\times15}{2}d=144 \\
  \end{cases} \\
  14a_1+91d=70 & ① \\
  16a_1+120d=144 & ② \\
  (16a_1+120d)-(14a_1+91d)=144-70 & ②\,-① \\
  2a_1+29d=74 \\
  a_1=\frac{74-29d}{2} \\
  14\frac{74-29d}{2}+91d=70 & \textsf{substitute }a_1 \\
  7(74-29d)+91d=70 \\
  518-203d+91d=70 \\
  -112d=-448 \\
  d=\frac{-448}{-112}=4 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the arithmetic series sum common difference formula  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_{16}}{16}-\frac{S_{14}}{14}=\frac{16-14}{2}d \\
  \frac{144}{16}-\frac{70}{14}=d \\
  d=9-5=4 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{3}}\:$Solve by using the arithmetic series sum formula with fractional index  
  ::: wrap  
  $
  \begin{array}{ll}
  S_{14}=14a_{7.5}=70 \\
  S_{16}=16a_{8.5}=144 \\
  a_{7.5}=\frac{70}{14}=5 \\
  a_{8.5}=\frac{144}{16}=9 \\
  d=a_{8.5}-a_{7.5}=9-5=4 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $d=4$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=na_1+\frac{n(n-1)}{2}d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \frac{S_n}{n}-\frac{S_m}{m}=\frac{n-m}{2}d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-the-sums-of-the-first-and-terms-are-known-then-the-common-difference-of-the-arithmetic-sequence-can-be-found-using}{\textsf{arithmetic series sum common difference formula}} \\
  S_n=na_{\frac{n+1}{2}} & \href{/math/0%20Core%20Courses/20%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20lower.html#_8-focus-4}{\textsf{arithmetic series sum formula with fractional index}} \\
  a_{n+1}-a_n=d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_1-definition}{\textsf{definition of common difference}} \\
  \end{array}
  >$

  :::
---

### $\fbox{22}\:$The sum of the first $\small n$ terms of the arithmetic sequence $\small \left\{ a_n \right\}$ is $\small S_n$. If $\small a_5+a_8=16$ and $\small S_{18}=90$, then find $S_{32}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -16 &
\textsf{(B)} \: -32 &
\textsf{(C)} \: -54 &
\textsf{(D)} \: -58 &
\textsf{(E)} \: -64 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the equivalently rewritten expression to find $a_1$ and $d$  
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  a_5+a_8=a_1+4d+a_1+7d=2a_1+11d=16 \\
  S_{18}=18a_1+\frac{18\cdot17}{2}d=90 \\
  \end{cases} \\
  a_1=\frac{16-11d}{2} & ① \\
  18a_1+153d=90 & ② \\
  18\frac{16-11d}{2}+153d=90 & \textsf{substitute }a_1 \\
  9(16-11d)+153d=90 \\
  144-99d+153d=90 \\
  54d=-54 \\
  d=-\frac{54}{54}=-1 \\
  a_1=\frac{16-11(-1)}{2}=\frac{27}{2}=13.5 \\
  S_{32}=32 \cdot 13.5+\frac{32\cdot31}{2}(-1)=432-496=-64 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the arithmetic sequence terms property with fractional index  
  ::: wrap  
  $
  \begin{array}{ll}
  a_5+a_8=2a_{6.5}=16 \\
  S_{18}=18a_{9.5}=90 \\
  a_{6.5}=\frac{16}{2}=8 \\
  a_{9.5}=\frac{90}{18}=5 \\
  d=\frac{5-8}{9.5-6.5}=-1 \\
  S_{32}=32a_{16.5} \\
  a_{16.5}=a_{9.5}+7d=5-7=-2 \\
  32\cdot-2=-64 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $S_{32}=-64$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence terms property}} \\
  S_n=na_1+\frac{n(n-1)}{2}d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \begin{cases}
  a_m+a_n=2a_{\frac{m+n}{2}} \\
  S_n=na_{\frac{n+1}{2}} \\
  \end{cases} & \href{/math/0%20Core%20Courses/20%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20lower.html#_8-focus-4}{\textsf{arithmetic sequence terms property with fractional index}} \\
  d=\frac{a_n-a_m}{n-m} & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-two-terms-are-known-the-common-ratio-can-be-found-by}{\textsf{common difference formula}} \\
  \end{array}
  >$

  :::
---

## 9.Focus 5
__The property of terms in an arithmetic sequence__  
- If $\boldsymbol{k\in\mathbb{Z}_+}$ and $\boldsymbol{m+n=k+t}$, then $\boldsymbol{a_m+a_n=a_k+a_t}$.

### $\fbox{23}\:$In the arithmetic sequence $\small \left\{ a_n \right\}$, $\small a_1$ and $\small a_{10}$ are the two roots of the equation $\small x^2-3x-5=0$. Find $\small a_3+a_8$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3 \lor -3 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 3 &
\textsf{(D)} \: -3 &
\textsf{(E)} \: -4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_3+a_8=a_1+a_{10}=-\frac{-3}{1}=3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a_3+a_8=3$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence terms property}} \\
  \begin{cases}
  x_1 + x_2=-\frac{b}{a} \\
  x_1 \cdot x_2=\frac{c}{a} \\
  \end{cases} & \textsf{vieta's formulas} \\
  \end{array}
  >$

  :::
---

### $\fbox{24}\:$In an arithmetic sequence $\small \left\{ a_n \right\}$, if $\small a_2+a_3+a_{10}+a_{11} =48$, find $\small S_{12}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 96 &
\textsf{(B)} \: 48 &
\textsf{(C)} \: 144 &
\textsf{(D)} \: 160 &
\textsf{(E)} \: 240 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the arithmetic sequence terms property with fractional index  
  ::: wrap  
  $
  \begin{array}{ll}
  a_2+a_3+a_{10}+a_{11}=4a_{\frac{26}{4}}=4a_{6.5}=48 \\
  a_{6.5}=\frac{48}{4}=12 \\
  S_{12}=12a_{6.5}=12\cdot12=144 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the arithmetic series sum formula  
  ::: wrap  
  $
  \begin{array}{ll}
  S_{12}=\frac{a_1+a_{12}}{2}12 \\
  a_1+a_{12}=a_2+a_{11}=a_3+a_{10}=\frac{48}{2}=24 \\
  \frac{24}{2}12=12\cdot12=144 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{3}}\:$Solve by letting $d=0$  
  ::: wrap  
  $
  \begin{array}{ll}
  a_2=a_3=a_{10}=a_{11}=\frac{48}{4}=12 \Longrightarrow a_1=12 \\
  S_{12}=12\cdot12=144 & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#special-case-is-a-linear-function}{S_n=na_1} \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $S_{12}=144$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  a_m+a_n=2a_{\frac{m+n}{2}} \\
  S_n=na_{\frac{n+1}{2}} \\
  \end{cases} & \href{/math/0%20Core%20Courses/20%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20lower.html#_8-focus-4}{\textsf{arithmetic sequence terms property with fractional index}} \\
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence terms property}} \\
  S_n=\frac{a_1+a_n}{2}n & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{25}\:$In an arithmetic sequence $\small \left\{ a_n \right\}$, it is given that $\small a_7+a_8=21$. Find $\small S_{14}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 132 &
\textsf{(B)} \: 144 &
\textsf{(C)} \: 147 &
\textsf{(D)} \: 154 &
\textsf{(E)} \: 157 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the arithmetic sequence terms property with fractional index  
  ::: wrap  
  $
  \begin{array}{ll}
  a_7+a_8=2a_{7.5}=21 \\
  a_{7.5}=\frac{21}{2} \\
  S_{14}=14a_{7.5}=14\frac{21}{2}=\frac{294}{2}=147 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the arithmetic series sum formula  
  ::: wrap  
  $
  \begin{array}{ll}
  S_{14}=\frac{a_1+a_{14}}{2}14 \\
  a_1+a_{14}=a_7+a_8=21 \\
  \frac{21}{2}14=\frac{294}{2}=147 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{3}}\:$Solve by letting $d=0$  
  ::: wrap  
  $
  \begin{array}{ll}
  a_7+a_8=\frac{21}{2} \Longrightarrow a_1=\frac{21}{2} \\
  S_{14}=14\frac{21}{2}=\frac{294}{2}=147 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $S_{14}=147$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  a_m+a_n=2a_{\frac{m+n}{2}} \\
  S_n=na_{\frac{n+1}{2}} \\
  \end{cases} & \href{/math/0%20Core%20Courses/20%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20lower.html#_8-focus-4}{\textsf{arithmetic sequence terms property with fractional index}} \\
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence terms property}} \\
  S_n=\frac{a_1+a_n}{2}n & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \end{array}
  >$

  :::
---
