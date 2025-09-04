---
title: Chapter5 Sequences – Module3 Geometric Sequences
lang: en-US
---

# Module 5-03 Geometric Sequences

## 1.Definition
- If in a sequence $\left\{ a_n \right\}$, $\boldsymbol{\frac{a_{n+1}}{a_n}=q}$ ($\textsf{constant}$, $n \in \mathbb{N}_+$),
  then the sequence $\left\{ a_n \right\}$ is called __a geometric sequence__, and $\boldsymbol{q}$ is called __the common ratio__.
- Essence: the ratio is constant __(common ratio)__ — __a multiplicative relationship__.  

  | Sequences              | Multiples($q$) | Rule($q$)                           |
  |------------------------|----------------|-------------------------------------|
  | $2,-6,18,-54,\cdots$   | __-3__         | $q<0:$ __terms alternate in sign__  |
  | $2,6,18,54,\cdots$     | __3__          | $q>0:$ __terms have the same sign__ |
  | $-2,-6,-18,-54,\cdots$ | __3__          | $q>0:$ __terms have the same sign__ |
  


## 2.General Term
- $a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n$
- Note: if __two terms are known__, __the common ratio__ can be found by $\boldsymbol{\frac{a_n}{a_m}=q^{n-m}}$.

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Derivations
- Derivation of $\boldsymbol{a_n=a_1q^{n-1}}$  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{a_{n+1}}{a_n}=q \\
  \frac{\cancel{a_2}}{a_1}=q,\frac{\cancel{a_3}}{\cancel{a_2}}=q,\dots,\frac{a_n}{\cancel{a_{n-1}}}=q \\
  \frac{a_n}{a_1}=q^{n-1} \\
  a_n=a_1q^{n-1}
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{a_n=a_{k}q^{n-k}}$
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{a_{n+1}}{a_n}=q \\
  \frac{\cancel{a_5}}{a_k}=q,\frac{\cancel{a_6}}{\cancel{a_5}}=q,\dots,\frac{a_n}{\cancel{a_{n-1}}}=q\\
  \frac{a_n}{a_k}=q^{n-k} \\
  a_n=a_kq^{n-k} \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{a_n=\frac{a_1}{q}q^n}$
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=a_1q^{n-1} \\
  a_n=a_1 \frac{q^n}{q} \\
  a_n=\frac{a_1}{q}q^n \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{\frac{a_n}{a_m}=q^{n-m}}$
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=a_{k}q^{n-k} \\
  a_m=a_{k}q^{m-k} \\
  \frac{a_n}{a_m}=\frac{a_{k}q^{n-k}}{a_{k}q^{m-k}}=\frac{q^n}{q^m}=q^{n-m} \\
  \end{array}
  $  
  :::

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Applications

| Formula                | Conditions for Use                                            | Example Usage        |
|------------------------|---------------------------------------------------------------|----------------------|
| $a_n=a_1q^{n-1}$       | Requires $a_1$                                                | $a_5=a_1q^4$         |
| $a_n=a_kq^{n-k}$       | Works with any $a_k$; when $k=1$, it becomes $a_n=a_1q^{n-1}$ | $a_5=a_3q^2$         |
| $a_n=\frac{a_1}{q}q^n$ | Requires $a_1$                                                | $a_n=2 \times 3^{n}$ |


## 3.Sum of the First $n$ Terms
::: wrap  
- $
  S_n=
  \begin{cases}
  \begin{array}{ll}
  na_1 & q=1 \\
  \frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \ne 1 \\
  \end{array}
  \end{cases}
  $
:::

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Derivations
- Derivation of $\boldsymbol{S_n=na_1}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=a_1+a_1+a_1+\dots+a_1 & \textsf{constant sequence} \\
  S_n=na_1 \\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{S_n=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q}}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=a_1+a_2+\dots+a_{n-1}+a_n & \textsf{geometric sequence}\\
  qS_n=a_2+a_3+\dots+a_n+a_nq \\
  S_n-qS_n & \textsf{term-shifting subtraction} \\
  (1-q)S_n=a_1-a_nq \\
  S_n=\frac{a_1-a_nq}{1-q} \lor S_n=\frac{a_1-a_{n+1}}{1-q}\\
  \end{array}
  $  
  :::
- Derivation of $\boldsymbol{S_n=\frac{a_{1}(1-q^n)}{1-q}}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n=\frac{a_1-a_nq}{1-q} \\
  a_n=a_1q^{n-1} \\
  S_n=\frac{a_1-a_1q^n}{1-q} \\
  S_n=\frac{a_1(1-q^n)}{1-q} \lor S_n=\frac{a_1}{1-q}(1-q^n) \\
  \end{array}
  $  
  :::


## 4.Important Properties

### $\textcolor{#1E3A5F}{\fbox{1}}\:$If $\small m+n=k+t$, then $\small a_ma_n=a_ka_t$
- __Property derivation__  
  ::: wrap  
  $
  \begin{array}{ll}
  a_3·a_9=a_5·a_7 \\
  a_3·q^2=a_5 \\
  a_7·q^2=a_9 \\
  a_3·a_9=a_5·a_7=a_6^2 \\
  \end{array}
  $  
  :::  


### $\textcolor{#1E3A5F}{\fbox{2}}\:$If $\small S_n$ is the sum of the first $\small n$ terms of a geometric sequence, then $\small S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots$ also form a geometric sequence with common ratio $\small q^n$
- __Property derivation__ by grouping and summation  
  ::: wrap  
  $
  \begin{array}{ll}
  \underbrace{a_1 a_2 a_3}_{S_3} \hspace{0.3cm} \underbrace{a_4 a_5 a_6}_{S_6-S_3} \hspace{0.3cm}
  \underbrace{a_7 a_8 a_9}_{S_9-S_6} \hspace{0.3cm} \cdots \\
  \frac{a_4+a_5+a_6}{a_1+a_2+a_3}=\frac{(a_1+a_2+a_3)q^3}{a_1+a_2+a_3}=q^3
  \end{array}
  $
  :::  
- __Property derivation__ using $S_n=\frac{a_{1}(1-q^n)}{1-q}$  
  ::: wrap  
  $
  \begin{array}{ll} 
  S_n = \frac{a_1(1-q^n)}{1-q} \longrightarrow \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} \\
  \textsf{when }S_m = S_{2n} \\
  \frac{S_{2n}}{S_n} = \frac{1-q^{2n}}{1-q^n} = \frac{(1-q^n)(1+q^n)}{1-q^n} = 1+q^n \\
  \textsf{verify common ratio} \\
  \frac{S_{2n}-S_n}{S_n} = \frac{S_{2n}}{S_n}-1 = 1+q^n-1 = q^n
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{3}}\:$If $\small \left| q \right| < 1$, then the sum of all terms of the geometric sequence is $\small S=\lim\limits_{n \to \infty }S_n=\frac{a_1}{1-q}$
- __Property derivation__  
  ::: wrap  
  $
  \begin{array}{ll}
  \left| q \right| < 1 \implies n \to \infty \implies q^n \to 0 \\
  \left( \frac{1}{3} \right)^{100} \approx 0 \\
  S_n = \frac{a_1(1-q^n)}{1-q} \\
  S_n = \frac{a_1(1-0)}{1-q} = \frac{a_1}{1-q} \\
  \end{array}
  $  
  :::


## 5.Focus 1
__The identification and definition of sequences__
- If __three numbers $\boldsymbol{a,b,c}$__ form a geometric sequence, then $\boldsymbol{b}$ is called __the geometric mean of $\boldsymbol{a}$ and $\boldsymbol{c}$__, i.e., $\boldsymbol{ac=b^2}$.   
  - $b = \pm \sqrt{ac}$
  - $a,c$ same sign



### $\fbox{28}\:$If $\small 2, 2^x-1, 2^x+3$ form a geometric sequence, then $\small x=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \log_{2}5 & 
\textsf{(B)} \: \log_{2}6 & 
\textsf{(C)} \: \log_{2}7 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap
$
\begin{array}{ll}
2 \times (2^x+3) = (2^x-1)^2 & ac=b^2 \\ 
2(t+3)=(t-1)^2 & t=2^x \land t>0 \\
2t+6=t^2-2t+1 \\
t^2-4t-5=0 \\
(t-5)(t+1)=0 \\
t= 5 \lor -1 & t \ne -1 \\
t=5 \\
2^x=5 \\
x=\log_{2}5 & b^c=a \longrightarrow \log_{b}a=c \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $x=\log_{2}5$, so choose $A$.
  
  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  ac=b^2 & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_5-focus-1}{\textsf{geometric mean}} \\
  (a-b)^2=a^2-2ab+b^2 & \textsf{perfect square formula} \\
  b^c=a \longrightarrow \log_{b}a=c & \href{https://en.wikipedia.org/wiki/Logarithm}{\textsf{definition of logarithm}} \\
  \end{array}
  >$

  :::
- Properties of the exponential function  
  ::: wrap
  > $\boldsymbol{f(x)=a^x}$  
  > $a>0$: range is $(0, \infty)$.   
  > $a=0$: defined only for $x>0$; $0$ with a negative exponent is undefined.  
  > $a<0$: result may be positive or negative.

  :::
---


## 6.Focus 2
__The general term of a geometric sequence__
- $a_n=a_1q^{n-1}=a_{k}q^{n-k}=\boldsymbol{\frac{a_1}{q}}q^n$
- In a geometric sequence, __no term can be zero__, and __the common ratio can't be zero__.
  ::: wrap  
  $
  \begin{array}{ll}
  a_n=\textsf{constant} \times \textsf{exponent} \\
  q=\textsf{base} \\
  a_n= \textsf{constant} & q=1 \\
  \end{array}
  $  
  :::



### $\fbox{29}\:$How many of the following can serve as the general term of a geometric sequence $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: a_n=n^3 &
\textsf{(2)} \: a_n=3^n &
\textsf{(3)} \: a_n=\frac{1}{3} &
\textsf{(4)} \: a_n=\frac{2^n}{3} & \\
\textsf{(5)} \: a_n=3^{-n} &
\textsf{(6)} \: a_n=(-1)^n &
\textsf{(7)} \: a_n=2^n-1 & \\
\textsf{(A)} \: 2 &
\textsf{(B)} \: 3 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 5 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
- Find the expression using the feature $a_n=\textsf{constant} \times \textsf{exponent}$  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{(1)} \: \textsf{power function} \,❌\;\\
  \textsf{(2)} \: 1 \times 3^n \longrightarrow q=3  \,✅\;\\
  \textsf{(3)} \: \frac{1}{3} \times 1^n \longrightarrow q=1 \,✅\;\\
  \textsf{(4)} \: \frac{1}{3} \times 2^n \longrightarrow q=2 \,✅\;\\
  \textsf{(5)} \: 1 \times (\frac{1}{3})^n \longrightarrow q=\frac{1}{3} \,✅\;\\
  \textsf{(6)} \: 1 \times (-1)^n \longrightarrow q=-1 \,✅\;\\
  \textsf{(7)} \: \textsf{exponential term} + \textsf{constant} \,❌\;\\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(3)},\textsf{(4)},\textsf{(5)},\textsf{(6)}$, so choose $D$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=\textsf{constant} \times \textsf{exponent} & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_6-focus-2}{\textsf{general term expression}} \\
  a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_2-general-term}{\textsf{general term formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{30}\:$If $\small \left\{ a_n \right\}$ is a geometric sequence, how many of the following are correct $\small \mathpunct{?}$.  
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \: \textsf{the sequence }\left\{a_n^2 \right\}\textsf{ is a geometric sequence} &
\textsf{(2)} \: \textsf{the sequence }\left\{a_{2n} \right\}\textsf{ is a geometric sequence} & \\
\textsf{(3)} \: \textsf{the sequence }\left\{ \frac{1}{a_n} \right\}\textsf{ is a geometric sequence} &
\textsf{(4)} \: \textsf{the sequence }\left\{ |a_n| \right\}\textsf{ is a geometric sequence} & \\
\end{array}
$
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &  
\textsf{(B)} \: 1 & 
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
- Identify a geometric sequence using the feature $\frac{a_n+1}{a_n}=q$  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{(1)} \: \frac{a_{n+1}^2}{a_n^2}=(\frac{a_{n+1}}{a_n})^2=q^2 \,✅\;\\
  \textsf{(2)} \: \frac{a_{2(n+1)}}{a_{2n}}=q^2 \,✅\;\\
  \textsf{(3)} \: \frac{\frac{1}{a_{n+1}}}{\frac{1}{a_n}}=\frac{a_n}{a_{n+1}}=\frac{1}{q} \,✅\;\\
  \textsf{(4)} \: \frac{|a_{n+1}|}{|a_n|}=\left| \frac{a_{n+1}}{a_n} \right|=|q| \,✅\;\\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\textsf{(1)},\textsf{(2)},\textsf{(3)},\textsf{(4)}$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{a_{n+1}}{a_n}=q & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_1-definition}{\textsf{definition of geometric sequence}} \\
  \frac{a_m}{a_n}=q^{m-n} & \textsf{term ratio formula} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is __reverse reasoning that $\left\{ a_n \right\}$ is a geometric sequence__    
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{(1)} \: \left\{ a_n^2 \right\} & \left\{ a_n \right\}=\left\{1,-2,4,8,\cdots\right\} \;\textsf{not necessarily a geometric sequence} \,❌\;\\
  \textsf{(2)} \: \left\{ a_{2n} \right\} & \left\{ a_n \right\}=\left\{1,2,1,2,\cdots\right\} \;\textsf{not necessarily a geometric sequence} \,❌\;\\
  \textsf{(3)} \: \left\{ \frac{1}{a_n} \right\} & \frac{a_n}{a_{n+1}}=\frac{1}{q} \;\textsf{necessarily a geometric sequence} \,✅\;\\
  \textsf{(4)} \: \left\{ |a_n| \right\} & \left\{ a_n \right\}=\left\{1,-2,4,8,\cdots\right\} \;\textsf{not necessarily a geometric sequence} \,❌\;\\
  \end{array}
  >$

  :::
---



### $\fbox{31}\:$In the geometric sequence $\small \left\{ a_n \right\}$, if $\small a_4a_7=-512,a_3+a_8=124$, and the common ratio $\small q \in \mathbb{Z}$, then find $\small a_{10}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 124 &
\textsf{(B)} \: 64 &
\textsf{(C)} \: 512 &
\textsf{(D)} \: -124 &
\textsf{(E)} \: -512 & \\
\end{array}
$  
:::
#### Solution
::: wrap
$
\begin{array}{ll}
\begin{cases} 
a_4a_7=a_3a_8=-512 \\
a_3+a_8=124 \\
\end{cases} & a_ma_n=a_ka_t \\
x^2-124x-512=0 & 
\begin{cases}
x_1 + x_2=-\frac{b}{a} \\
x_1 \cdot x_2=\frac{c}{a} \\
\end{cases} \\
(x+4)(x-128)=0 \\
x=-4 \lor 128 \\
\begin{cases}
a_3=-4 \\
a_8=128 \\
\end{cases} & q \in \mathbb{Z} \\ 
\frac{a_8}{a_3}=\frac{128}{-4}=-32=q^5 \\
q^5=-32 \longrightarrow \sqrt[5]{-32} \\
q=-2 \\
a_{10}=a_8q^2=128 \times (-2)^2=512 \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a_{10}=512$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_ma_n=a_ka_t & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#if-then}{\textsf{geometric sequence product property}} \\
  \begin{cases}
  x_1 + x_2=-\frac{b}{a} \\
  x_1 \cdot x_2=\frac{c}{a} \\
  \end{cases} & \textsf{vieta's formulas} \\
  \frac{a_m}{a_n}=q^{m-n} & \textsf{term ratio formula} \\
  x^3=a \longrightarrow x=\sqrt[3]{a} & \textsf{definition of cube root} \\
  a_n=a_{k}q^{n-k} & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_2-general-term}{\textsf{general term formula}}
  \end{array}
  >$

  :::
- Monotonicity of $|a_n|$  
  ::: wrap
  >$
  \begin{array}{ll}
  q \in \mathbb{Z} & \textsf{monotonically increasing} \\
  \end{array}
  >$

  :::
---



### $\fbox{32}\:$Given a geometric sequence $\small \left\{ a_n \right\}$ with $\small a_3+a_9=130$ and $\small a_3-a_9=-126$, find the common ratio $\small q$.
::: wrap
$
\begin{array}{lllll}
\textsf{(A)} \: 2 \lor -2 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 3 &
\textsf{(D)} \: -3 &
\textsf{(E)} \: -2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
a_3+a_9=130 \\
a_3-a_9=-126 \\
\end{cases} \\
a_3+a_9+a_3-a_9=130-126 \\
2a_3=4 \\ 
a_3=\frac{4}{2}=2 \\
2+a_9=130 \\
a_9=130-2=128 \\
\frac{a_9}{a_3}=\frac{128}{2}=64=q^6 \\
q^6=64 \longrightarrow \pm\sqrt[6]{64} \\
q=\pm2 \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $q=\pm2$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{a_m}{a_n}=q^{m-n} & \textsf{term ratio formula} \\
  x^2=a \longrightarrow x=\pm\sqrt{a} & \textsf{definition of square root} \\
  \end{array}
  >$

  :::
---

## 7.Focus 3
__The summation of a geometric sequence__  
::: wrap
- Using the formula:
  $
  S_n=
  \begin{cases}
  na_1 & q=1 \\
  \frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \ne 1
  \end{cases}
  $ to solve.  
:::
- Note: there are __two cases__, $\boldsymbol{q=1}$ and $\boldsymbol{q \ne 1}$.  
::: wrap
- ###### Properties of $S_n$
  - When $\boldsymbol{q=1}$: $S_n=na_1$ __(a linear function)__
  - When $\boldsymbol{q\ne1}$: $S_n=\frac{a_1}{1-q} \times (1-q^n)=k(1-q^n)=\boldsymbol{k-k}q^n$
:::
- Case analysis of $S_n=k-kq^n$ ($\boldsymbol{q\ne1}$)  
  - $\boldsymbol{S_n=A+B \cdot q^n}$     
  - If $A+B\ne0$: it __is not $\boldsymbol{S_n}$__; the sequence becomes $S_n$ __only from $\boldsymbol{a_2}$ onward__
  - If $A+B=0$: it __is $\boldsymbol{S_n}$__



### $\fbox{33}\:$How many of the following can serve as the sum of the first $\small n$ terms of a geometric sequence $\small \mathpunct{?}$.
::: wrap
$
\begin{array}{lllll}
\textsf{(1)} \: S_n=\frac{1}{3} &
\textsf{(2)} \: S_n=2n &
\textsf{(3)} \: S_n=2n-1 &
\textsf{(4)} \: S_n=2^n & \\
\textsf{(5)} \: S_n=2^n-1 &
\textsf{(6)} \: S_n=2^n+1 &
\textsf{(7)} \: S_n=3(2^n-1) & \\
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
  S_n=na_1 & q=1 \\
  S_n=k-kq^n & q \ne 1 \\
  \end{cases}
  $  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{(1)} \: S_n\textsf{ cannot be constant} \,❌\;\\
  \textsf{(2)} \: n2 \longrightarrow q=1 \,✅\;\\
  \textsf{(3)} \: \textsf{no }q^n\textsf{ exponential} \,❌\;\\
  \textsf{(4)} \: \textsf{not of the form "exponential term + constant"} \,❌\;\\
  \textsf{(5)} \: 1-1 \cdot 2^n \longrightarrow q=2 \,✅\;\\
  \textsf{(6)} \: \textsf{not }k-k=0 \,❌\;\\
  \textsf{(7)} \: 3-3 \cdot 2^n \longrightarrow q=2 \,✅\;\\
  \end{array}
  $  
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(5)},\textsf{(7)}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  S_n=na_1 & q=1 \\
  S_n=k-kq^n & q \ne 1 \\
  \end{cases}
  & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#properties-of}{\textsf{properties of geometric series sum formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is reverse reasoning $S_n \Longrightarrow a_n$  
  ::: wrap  
  >$
  \begin{array}{ll}
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases} & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#given-find}{\textsf{formula for relationship between }a_n\textsf{ and }S_n} \\
  \end{array}
  >$

  >$
  \begin{array}{ll}
  \textsf{(1)} \: S_n=\frac{1}{3} & \boxed{a_n=\begin{cases} \frac{1}{3} & n=1 \\ 0 & n \ge 2 \\ \end{cases}} \\
  \textsf{(2)} \: S_n=2n & \boxed{a_n=2} \\
  \textsf{(3)} \: S_n=2n-1 & \boxed{a_n=\begin{cases} 1 & n=1 \\ 2 & n \ge 2 \\ \end{cases}} \\
  \textsf{(4)} \: S_n=2^n & \boxed{a_n=\begin{cases} 2 & n=1 \\ 2^n-2^{n-1}=(2 \cdot 2^{n-1})-2^{n-1}=2^{n-1} & n \ge 2 \\ \end{cases}} \\
  \textsf{(5)} \: S_n=2^n-1 & \boxed{a_n=1 \times 2^{n-1}} \hspace{1.2cm} a_n=a_1q^{n-1} \\
  \textsf{(6)} \: S_n=2^n+1 & \boxed{a_n=\begin{cases} 3 & n=1 \\ 2^{n-1} & n \ge 2 \\ \end{cases}} \\
  \textsf{(7)} \: S_n=3(2^n-1) & \boxed{a_n=3 \times 2^{n-1}} \hspace{1.2cm} a_n=a_1q^{n-1} \\
  \end{array}
  >$  
  :::
---



### $\fbox{34}\:$Given $\small S_n$ is the sum of the first $\small n$ terms of the geometric sequence $\small \left\{ a_n \right\}$, if $\small S_2+S_5=2S_8$, then the common ratio is $\small q=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 \lor -2 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 1 \lor -\frac{\sqrt[3]{4}}{2} & \\
\textsf{(D)} \: -\frac{\sqrt[3]{4}}{2} &
\textsf{(E)} \: -2 \lor -\frac{\sqrt[3]{4}}{2} & \\
\end{array}
$  
:::
#### Solution
::: wrap
$
\begin{array}{ll}
\boldsymbol{q=1} \\
\boxed{
\begin{array}{ll}
2a_1+5a_1=2 \times 8a_1 \\
7a_1=16a_1 \\
0=9a_1 \\
a_1=\frac{0}{9}=0 & \textsf{no term of a geometric sequence can be zero}  \,❌\;\\
\end{array}
} \\
\boldsymbol{q\ne1} \\
\boxed{
\begin{array}{ll}
\frac{a_1(1-q^2)}{1-q}+\frac{a_1(1-q^5)}{1-q}=\frac{2a_1(1-q^8)}{1-q} \\
1-q^2+1-q^5=2(1-q^8) & S_n=\bcancel{\frac{a_1}{1-q}}(1-q^n)\\
q^2+q^5=2q^8 \\
\frac{q^2+q^5}{q^2}=\frac{2q^8}{q^2} & \textsf{simplify by }q^2 \textsf{ (} q\ne0 \textsf{)} \\
\frac{q^2}{q^2}+\frac{q^2+q^3}{q^2}=\frac{2(q^2+q^6)}{q^2} \\
1+q^3=2q^6 \\
2t^2-t-1=0 & t=q^3 \\
(1t-1)(2t+1)=0 \\
t=1 \lor -\frac{1}{2} & t\ne1 \textsf{ (} t=1 \Longrightarrow q=1 \textsf{)} \\
q^3=-\frac{1}{2} \\
q=-\frac{1}{\sqrt[3]{2}}=-\frac{1\times\sqrt[3]{4}}{\sqrt[3]{2}\times\sqrt[3]{4}}=-\frac{\sqrt[3]{4}}{\sqrt[3]{8}}=-\frac{\sqrt[3]{4}}{2} \\
\end{array}
} \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $q=-\frac{\sqrt[3]{4}}{2}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  na_1 & q=1 \\
  \frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \ne 1
  \end{cases} & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_3-sum-of-the-first-terms}{\textsf{geometric series sum formula}} \\
  S_n=\frac{a_1}{1-q} \times (1-q^n)=k(1-q^n) & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#properties-of}{\textsf{properties of geometric series sum formula}} \\
  x^3=a \longrightarrow x=\sqrt[3]{a} & \textsf{definition of cube root} \\
  \end{array}
  >$

  :::
---


## 8.Focus 4
__The properties of terms in a geometric sequence__  
- If $\boldsymbol{k \in\mathbb{Z_+}}$ and $\boldsymbol{m+n=k+t}$, then $\boldsymbol{a_m \cdot a_n=a_k \cdot a_t}$.



### $\fbox{35}\:$In the geometric sequence $\small \left\{ a_n \right\}$, $\small a_3$ and $\small a_8$ are the two roots of the equation $\small 3x^2+2x-18=0$. Find $\small a_4a_7$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -9 &
\textsf{(B)} \: -8 &
\textsf{(C)} \: -6 &
\textsf{(D)} \: 6 &
\textsf{(E)} \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x_1 \cdot x_2=\frac{c}{a} \\
a_4a_7=a_3a_8=\frac{-18}{3}=-6 & \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a_4a_7=-6$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_ma_n=a_ka_t & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#if-then}{\textsf{geometric sequence product property}} \\
  \begin{cases}
  x_1 + x_2=-\frac{b}{a} \\
  x_1 \cdot x_2=\frac{c}{a} \\
  \end{cases} & \textsf{vieta's formulas} \\
  \end{array}
  >$

  :::
---



### $\fbox{36}\:$If the geometric sequence $\small \left\{ a_n \right\}$ satisfies $\small a_2a_4+2a_3a_5+a_2a_8=25$ with $\small a_1 > 0$, then find $\small a_3+a_5$. 
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 8 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: -2 &
\textsf{(E)} \: -5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_3^2+2a_3a_5+a_5^2=25 & ac=b^2\\
(a_3+a_5)^2=25 \\
\sqrt{(a_3+a_5)^2}=\sqrt{25} \\
a_3+a_5=\pm5 & \ne-5 \textsf{ (} a_1>0 \Longrightarrow a_n\in\mathbb{Z_+} \textsf{)} \\
a_3+a_5=5 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $a_3+a_5=5$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  ac=b^2 & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_5-focus-1}{\textsf{geometric mean}} \\
  x^2=a \longrightarrow x=\pm\sqrt{a} & \textsf{definition of square root} \\
  \end{array}
  >$

  :::
- Same-sign property of a geometric sequence     
  ::: wrap  
  >$
  \begin{array}{ll}
  a_1,a_3,a_5,\cdots \Longrightarrow a_1,a_1q^2,a_1q^4,\cdots & \textsf{same sign}\\
  a_2,a_4,a_6,\cdots \Longrightarrow a_2,a_2q^2,a_2q^4,\cdots & \textsf{same sign}\\
  \end{array}
  >$

  :::
- Solve using the special case $q=1$  
  ::: wrap  
  >$
  \begin{array}{ll}
  a_3^2+2a_3a_5+a_5^2=25 \\
  a_1^2+2a_1^2+a_1^2=25 & q=1 \\
  a_1^2=\frac{25}{4} \\
  \sqrt{a_1^2}=\sqrt{\frac{25}{4}} \\
  a_1=\frac{5}{2} \\
  a_3+a_5=a_1+a_1=\frac{10}{2}=5 \\
  \end{array}
  >$

  :::
---


## 9.Focus 5
__The property of geometric series summation__
- If $S_n$ is __the sum of the first $\boldsymbol{n}$ terms of a geometric sequence__,
  then the sequence $\boldsymbol{S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots}$ also form __a geometric sequence__,
  with __common ratio $\boldsymbol{q^n}$__.




### $\fbox{37}\:$In a geometric sequence $\small \left\{ a_n \right\}$, it is given that $\small S_n=36$ and $\small S_{2n}=54$. Find $\small S_{3n}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 63 &
\textsf{(B)} \: 68 &
\textsf{(C)} \: 76 &
\textsf{(D)} \: 89 &
\textsf{(E)} \: 92 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\underbrace{S_n}_{36} \; \underbrace{S_{2n}-S_n}_{54-36=18} \; \underbrace{S_{3n}-S_{2n}}_{\frac{18}{2}=9} \; \dots\\
S_3=S_{2n}+9 \lor \bcancel{S_n}+\cancel{S_{2n}}-\bcancel{S_n}+S_{3n}-\cancel{S_{2n}} \\
S_3=54+9 \lor 36+18+9 \\
S_3=63 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $S_3=63$, so choose $A$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#if-is-the-sum-of-the-first-terms-of-a-geometric-sequence-then-also-form-a-geometric-sequence-with-common-ratio}{\textsf{property of geometric series sum}} \\
  \end{array}
  >$

  :::
---


### $\fbox{38}\:$Given that $\small S_n$ is the sum of the first $\small n$ terms of a geometric sequence $\small \left\{ a_n \right\}$, and $\small S_4=30, S_8=150$, find the common ratio $\small q$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \pm2 &
\textsf{(B)} \: \sqrt{2} &
\textsf{(C)} \: \pm\sqrt{2} &
\textsf{(D)} \: \pm\frac{1}{2} &
\textsf{(E)} \: -\sqrt{2}& \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$For subscripts of $S_n$ in a multiple relationship, solve using $S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots & q^n \\
  \underbrace{S_4}_{30} \; \underbrace{S_8-S_4}_{150-30=120} \; \dots & q^4 \\
  \frac{120}{30}=4 \\
  q^4=4 \\
  \sqrt{q^{2^2}}=\sqrt{2^2} \\
  q^2=2 \\
  q=\pm\sqrt{2}
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$For subscripts of $S_n$ not in a multiple relationship, solve using $\frac{S_m}{S_n} = \frac{1-q^m}{1-q^n}$  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} \\
  \frac{S_{2n}}{S_n} = 1+q^n & S_m=S_{2n} \\
  \frac{S_8}{S_4}=1+q^4  \\
  \frac{150}{30}=5 \\
  5=1+q^4 \\
  q^4=4 \\
  \sqrt{q^{2^2}}=\sqrt{2^2} \\
  q^2=2 \\
  q=\pm\sqrt{2}
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $q=\pm\sqrt{2}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} \\
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\cdots\\
  \end{cases} & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#if-is-the-sum-of-the-first-terms-of-a-geometric-sequence-then-also-form-a-geometric-sequence-with-common-ratio}{\textsf{property of geometric series sum}} \\
  x^2=a \longrightarrow x=\pm\sqrt{a} & \textsf{definition of square root} \\  
  \end{array}
  >$

  :::
---

| Platform    | Course                                                                                       | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=8Bum9KaQM4o&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gncjm?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95cd-22-chapter5-sequences-module3-geometric-sequences.html)   |                                                                   |
