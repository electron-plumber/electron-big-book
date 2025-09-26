---
title: Chapter5 Sequences – Module2 Arithmetic Sequences Lower
lang: en-US
---


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
  S_{14}=14a_1+\frac{14\cdot13}{2}d=70 \\
  S_{16}=16a_1+\frac{16\cdot15}{2}d=144 \\
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
- If $\boldsymbol{k\in\mathbb{Z_+}}$ and $\boldsymbol{m+n=k+t}$, then $\boldsymbol{a_m+a_n=a_k+a_t}$.

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


## 10.Focus 6
__The property of arithmetic series summation__
- If $S_n$ is __the sum of the first $\boldsymbol{n}$ terms of an arithmetic sequence__,
  then the sequence $\boldsymbol{S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots}$ also form __an arithmetic sequence__,
  with __common difference $\boldsymbol{n^2d}$__.
- __Essence__: after grouping the sums, __the results still form an arithmetic sequence__.
  The subscripts of $\boldsymbol{S_n}$ are in __a multiple relationship__.

### $\fbox{26}\:$In an arithmetic sequence $\small \left\{ a_n \right\}$, the sum of the first $\small 5$ terms is $\small S_5=15$, and the sum of the first $\small 15$ terms is $\small S_{15}=120$, then find the sum of the first $\small 10$ terms $\small S_{10}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 40 &
\textsf{(B)} \: 45 &
\textsf{(C)} \: 50 &
\textsf{(D)} \: 55 &
\textsf{(E)} \: 60 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the equivalently rewritten expression to find $a_1$ and $d$  
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  S_{5}=5a_1+\frac{5\cdot4}{2}d=15 \\
  S_{15}=15a_1+\frac{15\cdot14}{2}d=120 \\
  \end{cases} \\
  a_1=\frac{15-10d}{5} & ① \\
  15a_1+105d=120 & ② \\
  15\frac{15-10d}{5}+105d=120 & \textsf{substitute }a_1 \\
  3(15-10d)+105d=120 \\
  45-30d+105d=120 \\
  75d=75 \\
  d=\frac{75}{75}=1 \\
  a_1=\frac{15-10\cdot1}{5}=\frac{5}{5}=1 \\
  S_{10}=10\cdot1+\frac{10\cdot9}{2}1=10+45=55 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the arithmetic series sum common difference formula  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_{15}}{15}-\frac{S_{5}}{5}=\frac{15-5}{2}d \\
  \frac{120}{15}-\frac{15}{5}=5d \\
  5d=8-3=5 \\
  d=\frac{5}{5}=1 \\
  S_{5}=5a_1+\frac{5\cdot4}{2}d=15 \\
  a_1=\frac{15-10d}{5} \\
  a_1=\frac{15-10\cdot1}{5}=\frac{5}{5}=1 \\
  S_{10}=10\cdot1+\frac{10\cdot9}{2}1=10+45=55 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{3}}\:$Solve by using the arithmetic series sum formula with fractional index  
  ::: wrap  
  $
  \begin{array}{ll}
  S_5=5a_3=15 \\
  S_{15}=15a_8=120 \\
  a_3=\frac{15}{5}=3 \\
  a_8=\frac{120}{15}=8 \\
  d=\frac{8-3}{8-3}=1 \\
  S_{10}=10a_{5.5} \\
  a_{5.5}=a_3+2.5d=3+2.5=5.5 \\
  10\cdot5.5=55 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{4}}\:$Solve by using the property of the arithmetic series sum  
  ::: wrap  
  $
  \begin{array}{ll}
  \textcolor{#228B22}{\scriptsize\fbox{1}}\:\textsf{use }S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots & n^2d \\
  \underbrace{S_5}_{15} \; \underbrace{S_{10}-S_5}_{S_{10}-15} \; \underbrace{S_{15}-S_{10}}_{120-S_{10}} \;\dots & 5^2d \\
  15+120-S_{10}=2(S_{10}-15) & a+c=2b \\
  135-S_{10}=2S_{10}-30 \\
  3S_{10}=165 \\
  S_{10}=\frac{165}{3}=55 \\
  (S_{10}-S_5)-S_5=(55-15)-15=25 \\
  5^2d=25 \\
  d=\frac{25}{25}=1 \\
  \textcolor{#228B22}{\scriptsize\fbox{2}}\:\textsf{use }\frac{S_n}{n}, \frac{S_{2n}}{2n}, \frac{S_{3n}}{3n}, \cdots & \frac{n}{2}d \\
  \underbrace{\frac{S_5}{5}}_{\frac{15}{5}=3} \; \underbrace{\frac{S_{10}}{10}}_{\frac{S_{10}}{10}} \; \underbrace{\frac{S_{15}}{15}}_{\frac{120}{15}=8} \;\dots & \frac{5}{2}d \\
  3+8=2\frac{S_{10}}{10} & a+c=2b \\
  \frac{S_{10}}{5}=11 \\
  S_{10}=11\cdot5=55 \\
  \frac{S_{10}}{10}-\frac{S_5}{5}=\frac{55}{10}-3=2.5 \\
  \frac{5}{2}d=2.5 \\
  d=\frac{2.5}{2.5}=1 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S_{10}=55$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=na_1+\frac{n(n-1)}{2}d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \frac{S_n}{n}-\frac{S_m}{m}=\frac{n-m}{2}d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-the-sums-of-the-first-and-terms-are-known-then-the-common-difference-of-the-arithmetic-sequence-can-be-found-using}{\textsf{arithmetic series sum common difference formula}} \\
  S_n=na_{\frac{n+1}{2}} & \href{/math/0%20Core%20Courses/20%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20lower.html#_8-focus-4}{\textsf{arithmetic series sum formula with fractional index}} \\
  d=\frac{a_n-a_m}{n-m} & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-two-terms-are-known-the-common-ratio-can-be-found-by}{\textsf{common difference formula}} \\
  \begin{cases}
  \frac{S_n}{n}, \frac{S_{2n}}{2n}, \frac{S_{3n}}{3n}, \cdots \\
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots \\
  \end{cases} & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-is-the-sum-of-the-first-terms-of-an-arithmetic-sequence-then-also-form-an-arithmetic-sequence-with-common-difference}{\textsf{property of arithmetic series sum}} \\
  a+c=2b & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_5-focus-1}{\textsf{arithmetic mean}} \\
  \end{array}
  >$

  :::
---


### $\fbox{27}\:$Given that $\small S_n$ is the sum of the first $\small n$ terms of the arithmetic sequence $\small \left\{ a_n \right\}$, with $\small S_4=30$ and $\small S_8=90$, find the common difference $\small d$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{8}{15} &
\textsf{(B)} \: \frac{15}{2} &
\textsf{(C)} \: \frac{15}{8} &
\textsf{(D)} \: \frac{17}{8} &
\textsf{(E)} \: \frac{15}{4} & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{4}}\:$Solve by using the property of the arithmetic series sum  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots & n^2d \\
  \underbrace{S_4}_{30} \; \underbrace{S_8-S_4}_{90-30=60} \;\dots & 4^2d \\
  60-30=30 \\
  4^2d=30 \\
  d=\frac{30}{16}=\frac{15}{8} \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the arithmetic series sum common difference formula  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_n}{n}-\frac{S_m}{m}=\frac{n-m}{2}d \\
  \frac{S_8}{8}-\frac{S_4}{4}=\frac{8-4}{2}d \\
  \frac{90}{8}-\frac{30}{4}=2d \\
  2d=\frac{45}{4}-\frac{30}{4}=\frac{15}{4} \\
  d=\frac{\frac{15}{4}}{\frac{2}{1}}=\frac{15}{4}\cdot\frac{1}{2}=\frac{15}{8} \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $d=\frac{15}{8}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  \frac{S_n}{n}, \frac{S_{2n}}{2n}, \frac{S_{3n}}{3n}, \cdots \\
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots \\
  \end{cases} & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-is-the-sum-of-the-first-terms-of-an-arithmetic-sequence-then-also-form-an-arithmetic-sequence-with-common-difference}{\textsf{property of arithmetic series sum}} \\
  \frac{S_n}{n}-\frac{S_m}{m}=\frac{n-m}{2}d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-the-sums-of-the-first-and-terms-are-known-then-the-common-difference-of-the-arithmetic-sequence-can-be-found-using}{\textsf{arithmetic series sum common difference formula}} \\
  \end{array}
  >$

  :::
---


| Platform    | Course                                                                                            | Coursewares                                                       |
|-------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=UIfceZQcoHM&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)      | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvs2?playlist=x9h6d2)                                |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95cb-21-chapter5-sequences-module2-arithmetic-sequences-lower.html) |                                                                   |
