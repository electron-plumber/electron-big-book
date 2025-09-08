---
title: Chapter5 Sequences – Module2 Arithmetic Sequences Upper
lang: en-US
---


# Module 5-01 Arithmetic Sequences

## 1.Definition
- in the sequence $\boldsymbol{\left\{ a_n \right\}}$,
  $\boldsymbol{a_{n+1}-a_n=d}$ ($\textsf{constant}$, $n\in\mathbb{N}_+$),
  then the sequence $\boldsymbol{\left\{ a_n \right\}}$ is called __an arithmetic sequence__,
  and $\boldsymbol{d}$ is called __the common difference__.
- Essence: obtaining __the constant difference__ through __the recurrence relation__.  
  ::: wrap  
  $
  \begin{array}{ll}
  \left\{ a_n \right\}=\left\{ 1,4,7,10,13,\cdots \right\} \\
  a_2-a_1=4-1=3 & a_{n+1}-a_n=d\\
  \end{array}
  $  
  :::


## 2.General Term
::: wrap
- $a_n=a_1+(n-1)d=a_k+(n-k)d=nd+a_1-d$
:::
- ###### Note: if __two terms are known__, __the common ratio__ can be found by $\boldsymbol{d=\frac{a_n-a_m}{n-m}}$.
- Special case: $\boldsymbol{d=0}$, $a_n$ is __a constant__.
- ###### $\boldsymbol{a_n=nd+a_1-d}$ can be regarded as __a linear function $\href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#slope-intercept-form}{\boldsymbol{y=kx+b}}$__.  
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=nd+a_1-d \longrightarrow y=xd+a_1-d \\
  a_n=4n-3 \longrightarrow y=4x-3 \\
  d=4 \\
  a_1=1 \\
  \end{array}
  $  
  :::

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Derivations
- Derivation of $\boldsymbol{a_n=a_1+(n-1)d}$  
  ::: wrap  
  $
  \begin{array}{ll}
  a_{n+1}-a_n=d \\
  \begin{cases}
  \begin{array}{ll}
  \bcancel{a_2}-a_1=d & a_1 \\
  \bcancel{a_3}-\bcancel{a_2}=d & a_2 \\
  \cdots \\
  a_n-\bcancel{a_{n-1}}=d & a_n \\
  \end{array}
  \end{cases} \\
  a_n-a_1=(n-1)d \\
  a_n=a_1+(n-1)d \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{a_n=a_k+(n-k)d}$
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=a_1+(n-1)d \\
  a_k=a_1+(k-1)d \\
  a_n-a_k=[a_1+(n-1)d]-[a_1+(k-1)d] \\
  a_n-a_k=(n-k)d \\
  a_n=a_k+(n-k)d \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{a_n=nd+a_1-d}$  
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=a_1+(n-1)d \\
  a_n=nd+a_1-d \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{d=\frac{a_n-a_m}{n-m}}$  
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=a_k+(n-k)d \\
  a_m=a_k+(m-k)d \\
  a_n-a_m=[a_k+(n-k)d]-[a_k+(m-k)d] \\
  a_n-a_m=(n-m)d \\
  d=\frac{a_n-a_m}{n-m} \\
  \end{array}
  $  
  :::

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Applications

| Formula          | Conditions for Use                                            | Example Usage |
|------------------|---------------------------------------------------------------|---------------|
| $a_n=a_1+(n-1)d$ | Requires $a_1$                                                | $a_5=a_1+4d$  |
| $a_n=a_k+(n-k)d$ | Works with any $a_k$; when $k=1$, it becomes $a_n=a_1+(n-1)d$ | $a_5=a_3+2d$  |
| $a_n=nd+a_1-d$   | Requires $a_1$                                                | $a_n=3n-2$    |


## 3.Sum of the First $n$ Terms
::: wrap  
- $S_n=\frac{a_1+a_n}{2}n=na_1+\frac{n(n-1)}{2}d=\frac{d}{2}n^2+(a_1-\frac{d}{2})n$  
:::
- Special case: $\boldsymbol{d=0}$, $S_n=na_1$ is __a linear function__.
- ###### $S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n$ can be regarded as __a quadratic function $\boldsymbol{y=ax^2+bx+c}$__.  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n \longrightarrow y=\frac{d}{2}x^2+(a_1-\frac{d}{2})x \\
  S_n=3n^2-5n \longrightarrow y=3x^2-5x \\
  d=6 \\
  S_1=a_1=-2 \\
  \end{array}
  $  
  :::



### $\textcolor{#1E3A5F}{\fbox{1}}\:$Derivations
- Derivation of $\boldsymbol{S_n=\frac{a_1+a_n}{2}n}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=a_1+a_2+\cdots+a_n=\frac{a_1+a_n}{2}n & \href{https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation}{\textsf{gauss summation}} \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{S_n=na_1+\frac{n(n-1)}{2}d}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=\frac{a_1+a_n}{2}n \\
  a_n=a_1+(n-1)d \\
  S_n=\frac{a_1+(a_1+(n-1)d)}{2}n \\
  \frac{2a_1+(n-1)d}{2}n \\
  \frac{n\cdot2a_1}{2}+\frac{n\cdot(n-1)d}{2} \\
  S_n=na_1+\frac{n(n-1)}{2}d \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=na_1+\frac{n(n-1)}{2}d \\
  \frac{n(n-1)}{2}d=\frac{d}{2}(n(n-1))=\frac{d}{2}(n^2-n)=\frac{d}{2}n^2-\frac{d}{2}n \\
  na_1+(\frac{d}{2}n^2-\frac{d}{2}n) \\
  \frac{d}{2}n^2+(na_1-\frac{d}{2}n) \\
  S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n \\
  \end{array}
  $  
  :::


## 4.Important Properties

### $\textcolor{#1E3A5F}{\fbox{1}}\:$If $\small m+n=k+t$, then $\small a_m+a_n=a_k+a_t$
- __Property derivation__  
  ::: wrap  
  $
  \begin{array}{ll}
  a_3+a_9=a_5+a_7 \\
  a_3+2d=a_5 \\
  a_7+2d=a_9 \\
  a_3·a_9=a_5·a_7=2a_6 \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{2}}\:$If $\small S_n$ is the sum of the first $\small n$ terms of an arithmetic sequence, then $\small S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots$ also form an arithmetic sequence with common difference $\small n^2d$
- __Property derivation__ by grouping and summation  
  ::: wrap  
  $
  \begin{array}{ll}
  \underbrace{a_1 a_2 a_3}_{S_3} \hspace{0.3cm} \underbrace{a_4 a_5 a_6}_{S_6-S_3} \hspace{0.3cm}
  \underbrace{a_7 a_8 a_9}_{S_9-S_6} \hspace{0.3cm} \cdots \\
  (a_4+a_5+a_6)-(a_1+a_2+a_3)=3\cdot 3d=3^2d \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{3}}\:$For two arithmetic sequences $\small \left\{ a_n \right\}$ and $\small \left\{ b_n \right\}$, if their first $\small n$-term sums are denoted by $\small S_n$ and $\small T_n$ respectively, then $\small \frac{a_k}{b_k}=\frac{S_{2k-1}}{T_{2k-1}}$
- __Property derivation__  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=\frac{a_1+a_n}{2}n \\
  \frac{S_{2k-1}}{T_{2k-1}}=\frac{\frac{a_1+a_{2k-1}}{2}(2k-1)}{\frac{b_1+b_{2k-1}}{2}(2k-1)} \\
  a_1+a_{2k-1}=2a_k & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence sum property}} \\
  \frac{\frac{\bcancel{2}a_k}{\bcancel{2}}\bcancel{(2k-1)}}{\frac{\bcancel{2}b_k}{\bcancel{2}}\bcancel{(2k-1)}}=\frac{a_k}{b_k} \\
  \end{array}
  $  
  :::


## 5.Focus 1
__The identification and definition of sequences__
- If __three numbers $\boldsymbol{a,b,c}$__ form an arithmetic sequence, then $\boldsymbol{b}$ is called __the arithmetic mean of $\boldsymbol{a}$ and $\boldsymbol{c}$__, i.e., $\boldsymbol{a+c=2b}$.


### $\fbox{9}\:$Let $\small 3^a=4, 3^b= 8, 3^c=16$. Then $\small a,b,c$ are $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{a geometric sequence but not an arithmetic sequence} & \\
\textsf{(B)} \: \textsf{an arithmetic sequence but not a geometric sequence} & \\
\textsf{(C)} \: \textsf{both a geometric sequence and an arithmetic sequence} & \\
\textsf{(D)} \: \textsf{neither a geometric sequence nor an arithmetic sequence} & \\
\textsf{(E)} \: \textsf{cannot be determined} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\left\{ a_n \right\}=\left\{ 4,8,16 \right\} \\
4\cdot16=8^2 \\
3^a \cdot 3^c=(3^b)^2 \\
\bcancel{3}^{a+c}=\bcancel{3}^{2b} \\
a+c=2b \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $a+c=2b$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a^m\cdot a^n=a^{m+n} & \textsf{product of powers rule} \\
  (a^m)^n=a^{m\cdot n} & \textsf{power of a power rule} \\
  a+c=2b & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_5-focus-1}{\textsf{arithmetic mean}} \\
  \end{array}
  >$

  :::
---


## 6.Focus 2
__The general term of an arithmetic sequence__  
::: wrap
- $a_n=a_1+(n-1)d=\boldsymbol{a_k+(n-k)d}=nd+a_1-d$
:::


### $\fbox{10}\:$How many of the following can serve as the general term of an arithmetic sequence $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: a_n=\frac{1}{n}&
\textsf{(2)} \: a_n=\frac{1}{3} &
\textsf{(3)} \: a_n=2n &
\textsf{(4)} \: a_n=\frac{n^2-1}{n+1} & \\
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
- Find the expression using the feature $a_n=d\cdot n+b$  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{(1)} \: \textsf{reciprocal function} \,❌\;\\
  \textsf{(2)} \: 0n + \frac{1}{3} \longrightarrow d=0 \,✅\;\\
  \textsf{(3)} \: 2n + 0 \longrightarrow d=2 \,✅\;\\
  \textsf{(4)} \: \frac{(n-1)(n+1)}{n+1}=1n-1 \longrightarrow d=1 \,✅\;\\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(3)},\textsf{(4)}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=d\cdot n+b & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#can-be-regarded-as-a-linear-function}{\textsf{general term as a linear function}} \\
  a_n=a_1+(n-1)d=a_k+(n-k)d=nd+a_1-d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_2-general-term}{\textsf{general term formula}} \\
  a^2-b^2=(a-b)(a+b) & \textsf{difference of squares formula} \\
  \end{array}
  >$

  :::
---

### $\fbox{11}\:$In an arithmetic sequence, if $\small a_1=3，a_n=21，d=2$, then find $\small n$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 10 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: 12 &
\textsf{(D)} \: 15 &
\textsf{(E)} \: 20 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
3+(n-1)2=21 & a_n=a_1+(n-1)d \\
2n-2=18 \\
2n=20 \\
n=\frac{20}{2}=10 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $n=10$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=a_1+(n-1)d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_2-general-term}{\textsf{general term formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is to find $S_n$  
  ::: wrap
  >$
  \begin{array}{ll}
  n=10 \\
  S_n=\frac{a_1+a_n}{2}n \\
  S_10=\frac{3+21}{2}\cdot10=120 \\
  \end{array}
  >$

  :::
---

### $\fbox{12}\:$If $\small \lg2, \lg(x-1), \lg(x+3)$ form an arithmetic sequence, then find $\small x$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2 &
\textsf{(B)} \: 6 &
\textsf{(C)} \: -1 \lor 5 &
\textsf{(D)} \: 2 \lor 6 &
\textsf{(E)} \: 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\lg2+\lg(x+3)=2\lg(x-1) & a+c=2b \\
lg^{2(x+3)}=lg^{(x-1)^2} \\
2(x+3)=(x-1)^2 \\
2x+6=x^2-2x+1 \\
x^2-4x-5=0 \\
(x-5)(x+1)=0 \\
x=5 \lor -1 \\
x=-1 \Longrightarrow \log_{10}(-a)=c \longrightarrow  10^c=-a  & x\ne-1 \\
x=5 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $x=5$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a+c=2b & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_5-focus-1}{\textsf{arithmetic mean}} \\
  \log_b (a \cdot c) = \log_b a + \log_b c & \textsf{logarithm product rule} \\
  \log_b (a^k) = k \cdot \log_b a & \textsf{logarithm power rule} \\
  (a-b)^2=a^2-2ab+b^2 & \textsf{perfect square formula} \\
  b^c=a \longrightarrow \log_{b}a=c & \href{https://en.wikipedia.org/wiki/Logarithm}{\textsf{definition of logarithm}} \\
  \end{array}
  >$

  :::
---

### $\fbox{13}\:$Given that $\small \left\{ a_n \right\}$ is an arithmetic sequence, $\small a_1+a_5=14, a_3+a_7=26$, then find $\small a_3+a_5$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 30 &
\textsf{(B)} \: 27 &
\textsf{(C)} \: 23 &
\textsf{(D)} \: 20 &
\textsf{(E)} \: 15 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_1+a_5=2a_3=14 \\
a_3+a_7=2a_5=26 \\
a_3=\frac{14}{2}=7 \\
a_5=\frac{26}{2}=13 \\
a_3+a_5=7+13=20 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $a_3+a_5=20$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence sum property}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is to find $a_4+a_5$   
  ::: wrap
  >$
  \begin{array}{ll}
  a_3=7 \\
  a_5=13 \\
  d=\frac{13-7}{5-3}=\frac{6}{2}=3 & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-two-terms-are-known-the-common-ratio-can-be-found-by}{\textsf{common difference formula}} \\
  a_4=7+(4-3)3=10 & a_n=a_k+(n-k)d \\
  a_4+a_5=10+13=23 \\
  \end{array}
  >$

  :::
---

### $\fbox{14}\:$In an arithmetic sequence, if $\small a_1=2$ and $\small a_4+a_5 =-3$, what is the common difference $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -2 &
\textsf{(B)} \: -1 &
\textsf{(C)} \: 1 &
\textsf{(D)} \: 2 &
\textsf{(E)} \: 3 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_4+a_5=a_1+3d+a_1+4d=2a_1+7d=-3 \\
2\cdot2+7d=-3 \\
7d=-7 \\
d=\frac{-7}{7}=-1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $d=-1$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence sum property}} \\
  \end{array}
  >$

  :::
---


### $\fbox{15}\:$The sum of the first $\small n$ terms of the sequence $\small \left\{ a_n \right\}$ is $\small S_n=4n^2+n-2$, then what is its general term $\small a_n\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 8n-3 &
\textsf{(B)} \: 4n+1 &
\textsf{(C)} \: 8n-2 &
\textsf{(D)} \: 8n-5 &
\textsf{(E)} \: 
\begin{cases}
3 & n=1 \\
8n-3 & n\ge2 \\
\end{cases}& \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the formula from $S_n$ to the general term $a_n$ (general case)  
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases} \\
  a_1=S_1=4+1-2=3 \\
  a_n=S_n-S_{n-1}=4n^2+n-[4(n-1)^2+(n-1)] \\
  4(n-1)^2+(n-1)=4(n^2-2n+1)+n-1 \\
  4n^2-8n+4+n-1 \\
  4n^2-7n+3 \\
  a_n=4n^2+n-(4n^2-7n+3) \\
  4n^2+n-4n^2+7n-3 \\
  8n-3 \\
  a_n=a_1=8\cdot1-3=5 & \textsf{substitute }a_1 \textsf{ to verify} \\
  a_n=
  \begin{cases}
  a_1=3 & n=1 \\
  8n-3 & n \ge 2 \\
  \end{cases} \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the formula from quadratic $S_n$ to linear $a_n$ (for quadratic case)  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=4n^2+n-2 & c\ne0 \\
  a_n=
  \begin{cases}
  S_1=a+b+c & n=1 \\
  2an+(b-a) & n \ge 2 \\
  \end{cases} \\
  a_1=S_1=4+1-2=3 \\
  a_n=S_n=8n+(1-4)=8n+3 \\
  a_n=
  \begin{cases}
  a_1=3 & n=1 \\
  8n-3 & n \ge 2 \\
  \end{cases} \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get
  >$
  a_n=
  \begin{cases}
  a_1=3 & n=1 \\
  8n-3 & n \ge 2 \\
  \end{cases} \\  
  >$, so choose $E$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases} & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#given-find}{S_n\textsf{ to general term }a_n\textsf{ formula}} \\
  (a-b)^2=a^2-2ab+b^2 & \textsf{perfect square formula} \\
  a_n=
  \begin{cases}
  S_1=a+b+c & n=1 \\
  2an+(b-a) & n \ge 2 \\
  \end{cases} & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#derivation-of-the-formula-from-quadratic-to-linear}{\textsf{quadratic }S_n\textsf{ to linear }a_n\textsf{ formula}} \\
  \end{array}
  >$

  :::
- ###### Derivation of the formula from quadratic $S_n$ to linear $a_n$  
  ::: wrap  
  >$
  \begin{array}{ll}
  S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n & S_n=a\cdot n^2+b\cdot n \\
  a_n=nd+a_1-d & a_n=2an+(b-a) \\
  d=2\cdot\frac{d}{2} & d\textsf{ in }a_n\textsf{ is twice that in }S_n \\
  \frac{\frac{d}{2}n^2+(a_1-\frac{d}{2})n}{n}=\frac{d}{2}n+(a_1-\frac{d}{2}) & \textsf{reduce power} \\
  2\frac{d}{2}n+a_1-(2\frac{d}{2}) \\
  a_n=2\frac{d}{2}n+(a_1-\frac{d}{2})-\frac{d}{2} & a_n=nd+a_1-d \\
  a_n=2an+(b-a) \\
  \boldsymbol{c\ne0\textsf{: }S_n}\textsf{ is not an arithmetic series sum} \\
  S_n=an^2+bn+c \\
  a_n=
  \begin{cases}
  S_1=a+b+c & n=1 \\
  2an+(b-a) & n \ge 2 \\
  \end{cases} \\
  \boldsymbol{c=0\textsf{: }S_n}\textsf{ is an arithmetic series sum} \\
  S_n=an^2+bn \longrightarrow a_n=2an+(b-a) \\
  \end{array}
  >$

  :::
---

## 7.Focus 3
__The summation of an arithmetic sequence__
::: wrap  
- Using the formula: $S_n=\frac{a_1+a_n}{2}n=na_1+\frac{n(n-1)}{2}d=\frac{d}{2}n^2+(a_1-\frac{d}{2})n$ to solve.  
:::

### $\fbox{16}\:$How many of the following can serve as the sum of the first $\small n$ terms of an arithmetic sequence $\small \mathpunct{?}$.
::: wrap
$
\begin{array}{lllll}
\textsf{(1)} \: S_n=\frac{1}{n} &
\textsf{(2)} \: S_n=\frac{1}{3} &
\textsf{(3)} \: S_n=2n &
\textsf{(4)} \: S_n=2n-1 & \\
\textsf{(5)} \: S_n=2n^2-n &
\textsf{(6)} \: S_n=n^2 &
\textsf{(7)} \: S_n=n^2-1 & \\
\textsf{(A)} \: 2 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 5 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
- Find the expression using the feature
  $
  S_n=
  \begin{cases}
  S_n=na_1 & d=0 \\
  an^2+bn & d \ne 0 \\
  \end{cases}
  $  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{(1)} \: \textsf{reciprocal function} \,❌\;\\
  \textsf{(2)} \: \textsf{constant term} \,❌\;\\
  \textsf{(3)} \: 2n \longrightarrow d=0 \,✅\;\\
  \textsf{(4)} \: +\textsf{constant term} \,❌\;\\
  \textsf{(5)} \: \frac{4}{2}n^2-n \longrightarrow d=4,a_n=4n-3 \,✅\;\\
  \textsf{(6)} \: \frac{2}{2}n^2 \longrightarrow d=2,a_n=2n-1 \,✅\;\\
  \textsf{(7)} \: +\textsf{constant term} \,❌\;\\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{(3)},\textsf{(5)},\textsf{(6)}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  S_n=na_1 & d=0 \\
  an^2+bn & d \ne 0 \\
  \end{cases}
  & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#can-be-regarded-as-a-quadratic-function}{\textsf{arithmetic series sum as a quadratic function}} \\
  S_n=an^2+bn \longrightarrow a_n=2an+(b-a) & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#derivation-of-the-formula-from-quadratic-to-linear}{\textsf{quadratic }S_n\textsf{ to linear }a_n\textsf{ formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{17}\:$Insert $\small n$ numbers between $\small -12$ and $\small 6$ so that these $\small n+2$ numbers form an arithmetic sequence with sum $\small -21$. Find $\small n$.
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
S_{n+2}=\frac{-12+6}{2}(n+2)=-21 \\
-3(n+2)=-21 \\
-3n-6=-21 \\
-3n=-15 \\
n=\frac{-15}{-3}=5 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $n=5$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=\frac{a_1+a_n}{2}n & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{18}\:$In the arithmetic sequence $\small \left\{ a_n \right\}$, if $\small a_4=9$ and $\small a_9=-6$, then for which values of $\small n$ does $\small S_n=54$ hold $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 4\lor9 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 9 &
\textsf{(D)} \: 3\lor8 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
d=\frac{-6-9}{9-4}=\frac{-15}{5}=-3 \\
a_1=9+(1-4)\cdot-3=9+9=18 \\
S_n=\frac{-3}{2}n^2+(18-\frac{-3}{2})n=54 \\
18-\frac{-3}{2}=\frac{18\cdot2}{2}+\frac{3}{2}=\frac{39}{2} \\
\frac{-3}{2}n^2+\frac{39}{2}n=54 \\
-3n^2+39n=108 \\
\frac{-3n^2+39n-108}{-3}=\frac{0}{-3} \\
n^2-13n+36=0 \\
(n-4)(n-9)=0 \\
n=4 \lor 9 \\
\textsf{parabola analysis} \\
-3>0\textsf{:}\, \textsf{opens downward} \\
c=0\textsf{:}\, \textsf{passes through origin }(0, 0) \\
\end{array}
$  
:::
![Question arithmetic sequences figure Q-18 solve-1.svg](../../public/math/Core%20Courses/Question%20arithmetic%20sequences%20figure%20Q-18%20solve-1.svg)  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $n=4 \lor 9$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\frac{a_n-a_m}{n-m} & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#note-if-two-terms-are-known-the-common-ratio-can-be-found-by}{\textsf{common difference formula}} \\
  a_n=a_k+(n-k)d & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_2-general-term}{\textsf{general term formula}} \\
  S_n=na_1+\frac{n(n-1)}{2}d=\frac{d}{2}n^2+(a_1-\frac{d}{2})n & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \end{array}
  >$

  :::
---

### $\fbox{19}\:$In the arithmetic sequence $\small \left\{ a_n \right\}$, let $\small S_n$ denote the sum of the first $\small n$ terms. If $\small a_1=13$ and $\small S_3=S_{11}$, then what is the maximum value of $\small S_n \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 42 &
\textsf{(B)} \: 49 &
\textsf{(C)} \: 59 &
\textsf{(D)} \: 133 &
\textsf{(E)} \: \textsf{none} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question arithmetic sequences figure Q-19 solve-1.svg](../../public/math/Core%20Courses/Question%20arithmetic%20sequences%20figure%20Q-19%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n \\
  \textsf{parabola analysis} \\
  S_n=\textsf{maximum:}\, \textsf{opens downward} \\
  c=0\textsf{:}\, \textsf{passes through origin }(0, 0) \\
  \textsf{axis of symmetry:}\, -\frac{a_1-\frac{d}{2}}{2\frac{d}{2}}=\frac{-a_1+\frac{d}{2}}{d}=\frac{-a_1}{d}+\frac{\frac{d}{2}}{d}=\frac{1}{2}-\frac{a_1}{d} \\
  S_3=S_{11} \Longrightarrow \frac{1}{2}-\frac{a_1}{d}=\frac{3+11}{2}=7 \\
  \frac{1}{2}-\frac{13}{d}=7 & \textsf{substitute }a_1=13 \\
  -\frac{13}{d}=7-\frac{1}{2} \\
  -\frac{13}{d}=\frac{13}{2} \\
  -13\cdot2=13d \\
  d=-\frac{26}{13}=-2 \\
  S_7=7\cdot13+\frac{7(7-1)}{2}(-2) \\
  91+\frac{42}{2}(-2) \\
  S_7=91-42=49 \\
  3+11=0+14 \Longrightarrow S_{14}=0 \
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $S_7=49$, so choose $B$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=na_1+\frac{n(n-1)}{2}d=\frac{d}{2}n^2+(a_1-\frac{d}{2})n & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  x=-\frac{b}{2a} & \textsf{axis of symmetry formula} \\
  \end{array}
  >$

  :::
- Symmetry properties of arithmetic series sums  
  ::: wrap
  >$
  \begin{array}{ll}
  S_m=S_k & \textsf{(} d\ne0 \textsf{)} \\
  ① \;\, \frac{m+k}{2}=\frac{1}{2}-\frac{a_1}{d} & \textsf{axis of symmetry formula} \\
  ② \;\, S_{m+k}=0 \\
  \end{array}
  >$

  :::
---

### $\fbox{20}\:$In the arithmetic sequence $\small \left\{ a_n \right\}$, $\small a_5<0$, $\small a_6>0$, and $\small a_6>|a_5|$. Let $\small S_n$ denote the sum of the first $\small n$ terms. Then:
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: S_1,S_2,S_3\textsf{ are all less than }0\textsf{, while }S_4,S_5,\cdots\textsf{ are all greater than }0 & \\
\textsf{(B)} \: S_1,S_2,\cdots,S_5\textsf{ are all less than }0\textsf{, while }S_6,S_7,\cdots\textsf{ are all greater than }0 & \\
\textsf{(C)} \: S_1,S_2,\cdots,S_9\textsf{ are all less than }0\textsf{, while }S_{10},S_{11},\cdots\textsf{ are all greater than }0 & \\
\textsf{(D)} \: S_1,S_2,\cdots,S_{10}\textsf{ are all less than }0\textsf{, while }S_{11},S_{12},\cdots\textsf{ are all greater than }0 & \\
\textsf{(E)} \: \textsf{none} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_5<0 \quad a_6>0 \\
a_6>|a_5| \Longrightarrow a_5+a_6>0 \\
a_5+a_6=a_1+a_{10} >0 \\
a_1+a_{10} \Longrightarrow S_n=\frac{a_1+a_n}{2}n \\
S_{10}=\frac{a_1+a_{10}}{2}10>0 \\
S_9=\frac{a_1+a_9}{2}9=9a_5<0 & a_5<0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get
  >$
  \begin{cases}
  S_9<0 \\
  S_{10}>0 \\
  \end{cases} \\  
  >$, so choose $C$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_m+a_n=a_k+a_t & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#if-then}{\textsf{arithmetic sequence sum property}} \\
  S_n=\frac{a_1+a_n}{2}n & \href{/math/0%20Core%20Courses/19%20Chapter5%20sequences%20Module2%20arithmetic%20sequences%20upper.html#_3-sum-of-the-first-terms}{\textsf{arithmetic series sum formula}} \\
  \end{array}
  >$

  :::
---

| Platform    | Course                                                                                            | Coursewares                                                       |
|-------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=TXfq-SIghJE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)      | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvs4?playlist=x9h6d2)                                |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95c7-20-chapter5-sequences-module2-arithmetic-sequences-upper.html) |                                                                   |
