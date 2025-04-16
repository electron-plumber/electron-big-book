---
title: Chapter5 sequences Module3 geometric sequences
lang: en-US
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=8Bum9KaQM4o&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gncjm?playlist=x9h6d2)                           |                                                                   |


# Module 5-03 Geometric sequence

## 1.Definition  
::: wrap  
If in the sequence $\left\{ a_n \right\}, \frac{a_{n+1}}{a_n}=q(constant) (n \in N_+)$, 
called the sequence $\left\{ a_n \right\}$ for Geometric sequence, __q__ is the common ratio.  
:::

Essence: ratio value is constant (common ratio), relationship of multiples.  

| Sequences             | Multiples(Q) | __Q__ Law                                |
|-----------------------|--------------|------------------------------------------|
| $2,-6,18,-54,\dots$   | __-3__       | $q<0$ Alternation positive and negative. |
| $2,6,18,54,\dots$     | __3__        | $q>0$ Same Sign Operators.               |
| $-2,-6,-18,-54,\dots$ | __3__        | $q>0$ Same Sign Operators.               |



## 2.General term  
::: wrap  
$$\mathbf{a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n}$$

__Remark: If two elements are known, need to know determine a common ratio $\frac{a_n}{a_m}=q^{n-m}$__  
:::

### Formula derivations
::: wrap  
$\mathbf{a_n=a_1q^{n-1}}$  

$
\begin{array}{ll}
\frac{a_{n+1}}{a_n}=q \\
\frac{\cancel{a_2}}{a_1}=q,\frac{\cancel{a_3}}{\cancel{a_2}}=q,\dots,\frac{a_n}{\cancel{a_{n-1}}}=q \\
\frac{a_n}{a_1}=q^{n-1} \\
a_n=a_1q^{n-1}
\end{array}
$  
:::
---
::: wrap  
$\mathbf{a_n=a_{k}q^{n-k}}$

$
\begin{array}{ll}
\frac{a_{n+1}}{a_n}=q \\
\frac{\cancel{a_2}}{a_k}=q,\frac{\cancel{a_3}}{\cancel{a_2}}=q,\dots,\frac{a_n}{\cancel{a_{n-1}}}=q\\
\frac{a_n}{a_k}=q^{n-k} \\
a_n=a_kq^{n-k} \\
a_n=a_1q^{n-1} & k=1 \\
\end{array}
$  
:::
---
::: wrap  
$\mathbf{a_n=\frac{a_1}{q}q^n}$

$
\begin{array}{ll}
a_n=a_1q^{n-1} \\
a_n=a_1 \frac{q^n}{q} \\
a_n=\frac{a_1}{q}q^n \\
\end{array}
$  
:::
---



| Formulas               | Descriptions                                                              | Usages               |
|------------------------|---------------------------------------------------------------------------|----------------------|
| $a_n=a_1q^{n-1}$       | Need to know $a_1$ to use                                                 | $a_5=a_1q^4$         |
| $a_n=a_kq^{n-k}$       | Knowing that any $a_n$ can be use, when $k=1$ it becomes $a_n=a_1q^{n-1}$ | $a_5=a_3q^2$         |
| $a_n=\frac{a_1}{q}q^n$ | Need to know $a_1$ and $q$ to use, No constant term                       | $a_n=2 \times 3^{n}$ |


## 3.Sum of the first n terms  
::: wrap  
$$
\mathbf{
S_n=
\begin{cases}
na_1 & q=1 \\
\frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \neq 1
\end{cases}
}
$$  
:::

### Formula derivations
::: wrap  
$\mathbf{S_n=na_1}$

$
\begin{array}{ll}
S_n=a_1+a_1+a_1+\dots+a_n & \text{Constant sequence} \\ 
S_n=na_1 \\
\end{array}
$  
:::
---
::: wrap  
$\mathbf{S_n=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q}}$

$
\begin{array}{ll}
S_n=a_1+a_2+\dots+a_{n-1}+a_n \\
qS_n=q(a_1+a_2+\dots+a_{n-1}+a_n) \\
qS_n=a_2+a_3+\dots+a_n+a_nq \\
(S_n=a_1+a_2+\dots+a_{n-1}+a_n)-(qS_n=a_2+a_3+\dots+a_n+a_nq) & \text{Displaced subtraction} \\
(1-q)S_n=a_1-a_nq \\
S_n=\frac{a_1-a_nq}{1-q} \lor S_n=\frac{a_1-a_{n+1}}{1-q}\\
\end{array}
$  
:::
---
::: wrap  
$\mathbf{S_n=\frac{a_{1}(1-q^n)}{1-q}}$

$
\begin{array}{ll}
S_n=\frac{a_1-a_nq}{1-q} \\
a_n=a_1q^{n-1} \\
S_n=\frac{a_1-a_1q^n}{1-q} \\
S_n=\frac{a_1(1-q^n)}{1-q} \lor S_n=\frac{a_1}{1-q}(1-q^n) \\
\end{array}
$  
:::
---


## 4.Important properties
::: wrap  
1. __If $m+n=k+t \,\fbox{Arithmetic sequence}$ then $a_ma_n=a_ka_t \, \fbox{Geometric sequence}$.__
   $
   \begin{array}{ll}
   a_3·a_9=a_5·a_7 \\
   a_3·q^2=a_5 \\
   a_7·q^2=a_9 \\
   a_3·a_9=a_5·a_7=a_6^2 \\
   \end{array}
   $  
:::  
::: wrap  
2. __$S_n$ is the sum of the first n terms of a geometric sequence,
   then $S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots$ are still geometric sequences$\fbox{Segment summation}$,
   and their common ratio is $q^n$.__  
   $
   \boxed{
   \begin{array}{ll}
   \underbrace{a_1 a_2 a_3}_{S_3} \; \underbrace{a_4 a_5 a_6}_{S_6-S_3} \;
   \underbrace{a_7 a_8 a_9}_{S_9-S_6} \; \dots \\
   \frac{a_4+a_5+a_6}{a_1+a_2+a_3}=\frac{(a_1+a_2+a_3)q^3}{a_1+a_2+a_3}=q^3
   \end{array}
   }
   $

   $
   \boxed{
   \begin{array}{ll} 
   S_n = \frac{a_1(1-q^n)}{1-q} \to \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} \\
   \text{Special case} \: S_m = S_{2n}. \\
   \frac{S_{2n}}{S_n} = \frac{1-q^{2n}}{1-q^n} = \frac{(1-q^n)(1+q^n)}{1-q^n} = 1+q^n \\
   \text{Proof common ratio}. \\
   \frac{S_{2n}-S_n}{S_n} = \frac{S_{2n}}{S_n}-1 = 1+q^n-1 = q^n
   \end{array}
   }
   $  
:::  
::: wrap  
3. __If $\left| q \right| < 1$,
   then the sum of all terms in the geometric sequence is $S=\lim\limits_{n \to \infty } S_n=\frac{a_1}{1-q}$.__  
   $
   \begin{array}{ll}
   \left| q \right| < 1 \implies n \to \infty \implies q^n \to 0 \\
   \left( \frac{1}{3} \right)^{100} \approx 0 \\
   S_n = \frac{a_10}{1-q} = \frac{a_1}{1-q}
   \end{array}
   $  
:::

## 5.Focus 1
__Determination and definition of Geometric sequence.__  
::: wrap  
- __If three numbers $a,b,c$ form a geometric sequence, then b is called the geometric mean of a and c, that is $ac=b^2$.__   
  - $b = \pm \sqrt{ac}$  
  - $a,c$ same sign operators  
:::

::: wrap
### $\fbox{28}\:$If $\small 2, 2^x-1, 2^x+3$ form a geometric sequence, that is $\small x = \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: \log_{2}5 & 
(\text{B}) \: \log_{2}6 & 
(\text{C}) \: \log_{2}7 &
(\text{D}) \: 3 &
(\text{E}) \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\mathbf{2, 2^x-1, 2^x+3}$ form a geometric sequence; it means $\mathbf{a+c=b^2}$.

  $
  \begin{array}{ll}
  2 \times (2^x+3) = (2^x-1)^2 \\ 
  2(t+3)=(t-1)^2 & t=2^x (t>0) \\
  2(t+3)=t^2-2t+1 & (a-b)^2=a^2-2ab+b^2 \\
  2t+6=t^2-2t+1 \\
  t^2-4t-5=0 \\
  (t-5)(t+1)=0 \\
  t= 5 \lor -1 & t \ne -1 \\
  t=5 \\
  2^x=5 \\
  x=\log_{2}5 & b^c=a \implies \log_{b}a=c \\
  \end{array}
  $  
:::
#### Conclusion

- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $x=\log_{2}5$, so choose $A$.
  
  :::
- $t>0$   
  ::: wrap
  > $t=2^x=a^x$  
  > $a>0$ The range of the exponential function is $(0,\infty)$.   
  > $a=0$ The exponent is only useful when $x>0$, and a negative exponent of 0 is undefined.  
  > $a<0$ The result can be positive or negative.

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (a-b)^2=a^2-2ab+b^2 & \href{https://www.youtube.com/watch?v=Z3ZEPKVMXFI}{\text{Perfect square formula}} \\
  b^c=a \implies \log_{b}a=c & \href{https://en.wikipedia.org/wiki/Logarithm}{\text{Definition of logarithm}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 2
__General term of geometric sequence.__  
::: wrap  
$\mathbf{a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n}$  
- __No element in a geometric sequence can be 0, and the common ratio can't be 0.__  
  - $a_n= \text{constants} \times \text{exponents}$   
  - $q= \text{base}$  
  - $a_n= \text{constants} \quad \text{Special case } q=1$  
:::

::: wrap  
### $\fbox{29}\:$Following there are $\small \mathpunct{?} \:$that can be used as general term in geometric sequence.
$
\begin{array}{lllll}
(\text{1}) \: a_n=n^3 &
(\text{2}) \: a_n=3^n &
(\text{3}) \: a_n=\frac{1}{3} &
(\text{4}) \: a_n=\frac{2_n}{3} & \\
(\text{5}) \: a_n=3^{-n} &
(\text{6}) \: a_n=(-1)^n &
(\text{7}) \: a_n=2^n-1 & \\
(\text{A}) \: 2 &
(\text{B}) \: 3 &
(\text{C}) \: 4 &
(\text{D}) \: 5 &
(\text{E}) \: 6 & \\
\end{array}
$  
:::
#### Solution
::: wrap
- Currently, know the Expressions can use characterization analysis $a_n=\text{Constant} \times \text{Exponent}$.

  $
  \begin{array}{ll}
  (\text{1}) \: a_n=n^3 & \text{This is a power function} \; ❌\\
  (\text{2}) \: a_n=3^n & \boxed{1 \times 3^n} \; q=3 \; ✅\\
  (\text{3}) \: a_n=\frac{1}{3} & \boxed{\frac{1}{3} \times 1^{n-1}} \; q=1 \; ✅\\
  (\text{4}) \: a_n=\frac{2_n}{3} & \boxed{\frac{1}{3} \times 2_n} \; q=2 \; ✅\\
  (\text{5}) \: a_n=3^{-n} & \boxed{1 \times (\frac{1}{3})^n} \; q=\frac{1}{3} \; ✅\\
  (\text{6}) \: a_n=(-1)^n & \boxed{1 \times (-1)^n} \; q=-1 \; ✅\\
  (\text{7}) \: a_n=2^n-1 & \text{There is a constant term -1 after the exponent} \; ❌\\
  \end{array}
  $  
:::
#### ConclusionS

- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $(\text{2}),(\text{3}),(\text{4}),(\text{5}),(\text{6})$ correct, so choose $D$.

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=
  \begin{cases}
  \text{Use when know the Expressions} \\
  a_n=\text{Constant} \times \text{Exponent}
  \end{cases} 
  & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#formula-derivations}{\text{General term characteristics}} \\
  \left\{ a_n \right\}=
  \begin{cases}
  \text{Use when don't know the Expressions} \\
  \frac{a_n+1}{a_n}=q
  \end{cases}
  & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_1-definition}{\text{Geometric sequence definition}} \\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{30}\:$If $\small \left\{ a_n \right\}$ is a geometric sequence, among the following four statements, the number of correct statements is $\small \mathpunct{?}$.  
$
\begin{array}{ll}
(\text{1}) \: \text{The sequence} \: \left\{a_n^2 \right\} \: \text{is a geometric sequence.} &
(\text{2}) \: \text{The sequence} \: \left\{a_{2n} \right\} \: \text{is a geometric sequence.} & \\
(\text{3}) \: \text{The sequence} \: \left\{ \frac{1}{a_n} \right\} \: \text{is a geometric sequence.} &
(\text{4}) \: \text{The sequence} \: \left\{ |a_n| \right\} \: \text{is a geometric sequence.} & \\
\end{array}
$

$
\begin{array}{lllll}
(\text{A}) \: 0 &  
(\text{B}) \: 1 & 
(\text{C}) \: 2 &
(\text{D}) \: 3 &
(\text{E}) \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Currently, don't know the Expressions, can use Geometric sequence definition analysis $\frac{a_n+1}{a_n}=q$.  

  $
  \begin{array}{ll}
  (\text{1}) \: \left\{ a_n^2 \right\} & \boxed{\frac{a_{n+1}^2}{a_n^2}=(\frac{a_{n+1}}{a_n})^2=q^2} \; ✅\\
  (\text{2}) \: \left\{ a_{2n} \right\} & \boxed{\frac{a_{2(n+1)}}{a_{2n}}=q^2} \; ✅\\
  (\text{3}) \: \left\{ \frac{1}{a_n} \right\} & \boxed{\frac{\frac{1}{a_{n+1}}}{\frac{1}{a_n}}=\frac{a_n}{a_{n+1}}=\frac{1}{q}} \; ✅\\
  (\text{4}) \: \left\{ |a_n| \right\} & \boxed{\frac{|a_{n+1}|}{|a_n|}=\left| \frac{a_{n+1}}{a_n} \right|=|q|} \; ✅\\
  \end{array}
  $  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(E)}$  
  > According to the Solution, get $(\text{1}),(\text{2}),(\text{3}),(\text{4})$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{a_n+1}{a_n}=q & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_1-definition}{\text{Geometric sequence definition}} \\
  \end{array}
  >$

  :::
- Reverse of a geometric sequence        
  ::: wrap
  >$
  \begin{array}{ll}
  (\text{1}) \: \left\{ a_n^2 \right\} & a_n^2=x \implies a_n= \pm\sqrt{x} \; ❌\\
  (\text{2}) \: \left\{ a_{2n} \right\} & a_0,a_1,a_2,a_3,a_4,\dots \implies a_{2n} = a_0,a_2,a_4,a_6,\dots \; ❌\\
  (\text{3}) \: \left\{ \frac{1}{a_n} \right\} & a_n=\frac{1}{\frac{1}{a_n}}=a_n \; ✅\\
  (\text{4}) \: \left\{ |a_n| \right\} & a_n=\begin{cases} a_n \quad \text{If} a_n \ge 0 \\ -a_n \: \text{If} a_n < 0 \end{cases} \; ❌\\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{31}\:$In the geometric sequence $\small \left\{ a_n \right\}$, if $\small a_4a_7=-512,a_3+a_8=124$ and the is common ratio is $\small q \in \mathbb{Z}$, then $\small a_{10} = \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: 124 &
(\text{B}) \: 64 &
(\text{C}) \: 512 &
(\text{D}) \: -124 &
(\text{E}) \: -512 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- According to the characteristics of Vieta's formulas, rearrange the equation.  

  $
  \begin{array}{ll}
  x^2-124x-512=0
  \begin{cases} 
  a_4a_7=a_3a_8=-512 \\
  a_3+a_8=124
  \end{cases} \\
  (1+4)(1-128)=0 \\
  x=-4 \lor 128 \\
  q \in \mathbb{z} 
  \begin{cases}
  a_3=-4 \\
  a_8=128
  \end{cases} \\ 
  \frac{a_8}{a_3}=\frac{128}{-4}=-32=q^{\frac{\log32}{\log2}}=q^5 \\
  q^5=-32 \implies \sqrt[5]{-32} \\
  q=-2 \\
  a_{10}=a_8q^2=128 \times (-2)^2=512 \\
  \end{array}
  $  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(C)}$  
  > According to the Solution, get $a_{10}=512$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \text{Vieta's formulas}
  \begin{cases}
  \text{1.Sum of the roots} \\
  x_1 + x_2=-\frac{b}{a} \\
  \text{2.Product of the roots} \\
  x_1 \cdot x_2=\frac{c}{a}
  \end{cases} \\
  b^c=a \implies \log_{b}a=c & \text{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \text{Definition of square root} \\
  a_n=a_{k}q^{n-k} & \text{General term} \\
  \end{array}
  >$

  :::
- $q \in \mathbb{z}$  
  > $|a_n|$ Monotonically increasing.
---
::: wrap
### $\fbox{32}\:$In the known geometric sequence $\small \left\{ a_n \right\}$, if $\small a_3+a_9=130,a_3-a_9=-126$, then common ratio $\small q= \, \mathpunct{?}$.  
$
\begin{array}{lllll}
(\text{A}) \: 2 \lor -2 &
(\text{B}) \: 2 &
(\text{C}) \: 3 &
(\text{D}) \: -3 &
(\text{E}) \: -2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_3+a_9+a_3-a_9=130-126
\begin{cases}
a_3+a_9=130 \\
a_3-a_9=-126
\end{cases} \\ 
2a_3=4 \\ 
a_3=\frac{4}{2}=2 \\
a_3+a_9=130 \\
2+a_9=130 \\
a_9=130-2=128 \\
\frac{a_9}{a_3}=\frac{128}{2}=64=q^{\frac{\log64}{\log2}}=q^6 \\
q^6=64 \implies \pm\sqrt[6]{64} \\
q=\pm2 \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $q=\pm2$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  b^c=a \implies \log_{b}a=c & \text{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \text{Definition of square root} \\
  \end{array}
  >$

  :::
- Even powers are $\pm\sqrt{x}$  
  ::: wrap  
  >$
  \begin{array}{ll}
  x^2=\pm\sqrt{x} & 3^2=9 \land -3^2=9 \\
  x^3=\sqrt{x} & 3^3=27 \lor -3^3=-27 \\
  \end{array}
  >$

  :::
---

## 7.Focus 3
__Sum of the first n terms of geometric sequence.__  
::: wrap  
$
\mathbf{
S_n=
\begin{cases}
na_1 & q=1 \\
\frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \neq 1
\end{cases}
}
$  
- __$q=1$__
  - $S_n=na_1 \quad \text{linear function}$
- __$q \neq 1$__
  - $S_n=\frac{a_1}{1-q} \times (1-q^n)=k(1-q^n)=\boxed{k-kq^n}$    
- __$S_n=a+bq^n$__  
  - $a+b \neq 0 \quad \text{it is not }S_n$  
    - Form $a_2$ onwards it is still a geometric sequence.  
  - $a+b=0 \quad \text{it is }S_n$   
    - $S_n=3-3q^n$ ✅$\quad k-k=0$  
    - $S_n=5-3q^n$ ❌$\quad k-k\neq0$   
:::

::: wrap
### $\fbox{33}\:$Following there are $\small \mathpunct{?}$ that can be used as a sum of the first n terms of a geometric sequence.
$
\begin{array}{lllll}
(\text{1}) \: S_n=\frac{1}{3} &
(\text{2}) \: S_n=2n &
(\text{3}) \: S_n=2n-1 &
(\text{4}) \: S_n=2^n & \\
(\text{5}) \: S_n=2^n-1 &
(\text{6}) \: S_n=2^n+1 &
(\text{7}) \: S_n=3(2^n-1) & \\
(\text{A}) \: 2 &
(\text{B}) \: 3 &
(\text{C}) \: 4 &
(\text{D}) \: 5 &
(\text{E}) \: 6 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Currently, know the Expressions can use characterization analysis.  

  $
  S_n=
  \begin{cases}
  S_n=na_1 & q=1 \\
  S_n=k-kq^n & q \neq 1 \\
  \end{cases}
  $

  $
  \begin{array}{ll}
  (\text{1}) \: S_n=\frac{1}{3} & S_n \,\text{cannot be a constant, but } a_n \,\text{can be a constant} \; ❌\\
  (\text{2}) \: S_n=2n & \boxed{n2} \; q=1 \; ✅\\
  (\text{3}) \: S_n=2n-1 & 2n-1 \,\text{is not the } q^n \,\text{exponential} \; ❌\\
  (\text{4}) \: S_n=2^n & \text{There is no constant term after }2^n \; ❌\\
  (\text{5}) \: S_n=2^n-1 & \boxed{1-1 \cdot 2^n} \; q=2 \; ✅\\
  (\text{6}) \: S_n=2^n+1 & \text{Does not satisfy } k-k=0 \; ❌\\
  (\text{7}) \: S_n=3(2^n-1) & \boxed{3-3 \cdot 2^n} \; q=2 \; ✅\\
  \end{array}
  $  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $(\text{2}),(\text{5}),(\text{7})$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  S_n=na_1 & q=1 \\
  S_n=k-kq^n & q \neq 1 \\
  \end{cases}
  & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_7-focus-3}{\text{Characteristics of the sum of the first n terms}} \\
  \end{array}
  >$

  :::
- $S_n$ corresponds $a_n$  
  ::: wrap  
  >$
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 1 \\
  \end{cases}
  >$

  >$
  \begin{array}{ll}
  (\text{1}) \: S_n=\frac{1}{3} & \boxed{a_n=\begin{cases} \frac{1}{3} & n=1 \\ 0 & n \ge 1 \\ \end{cases}} \\
  (\text{2}) \: S_n=2n & \boxed{a_n=2} \\
  (\text{3}) \: S_n=2n-1 & \boxed{a_n=\begin{cases} 1 & n=1 \\ 2 & n \ge 1 \\ \end{cases}} \\
  (\text{4}) \: S_n=2^n & \boxed{a_n=\begin{cases} 2 & n=1 \\ 2^n-2^{n-1}=(2 \times 2^{n-1})-2^{n-1}=2^{n-1} & n \ge 1 \\ \end{cases}} \\
  (\text{5}) \: S_n=2^n-1 & \boxed{a_n=1 \times 2^{n-1}} \\
  (\text{6}) \: S_n=2^n+1 & \boxed{a_n=\begin{cases} 3 & n=1 \\ 2^{n-1} & n \ge 1 \\ \end{cases}} \\
  (\text{7}) \: S_n=3(2^n-1) & \boxed{a_n=3 \times 2^{n-1}} \\
  \end{array}
  >$  
  :::
---
::: wrap
### $\fbox{34}\:$It is known that $\small S_n$ is the sum of the first n terms of the geometric sequence $\small \left\{ a_n \right\}$, if $\small S_2+S_5=2S_8$, then common ratio $\small q= \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: 1 \lor -2 &
(\text{B}) \: 2 &
(\text{C}) \: 1 \lor -\frac{\sqrt[3]{4}}{2} &
(\text{D}) \: -\frac{\sqrt[3]{4}}{2} &
(\text{E}) \: -2 \lor -\frac{\sqrt[3]{4}}{2} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $q=1$  

  $
  \begin{array}{ll}
  2a_1+5a_1=2 \times 8a_1 \\
  7a_1=16a_1 \\
  0=9a_1 \\
  a_1=\frac{0}{9}=0 & \text{No any element in a geometric sequence can be 0} \; ❌\\
  \end{array}
  $ 
:::  
::: wrap  
- $q \ne 1$  

  $
  \begin{array}{ll}
  \frac{a_1(1-q^2)}{1-q}+\frac{a_1(1-q^5)}{1-q}=\frac{2a_1(1-q^8)}{1-q} \\
  1-q^2+1-q^5=2(1-q^8) \\
  q^2+q^5=2q^8 \\
  \frac{q^2+q^5}{q^2}=\frac{2q^8}{q^2} & q \,\text{is not 0, divide both sides by } q^2, \text{similar to } q^{\frac{\log_{10}x}{\log_{10}2}} \\
  \frac{q^2}{q^2}+\frac{q^2+q^3}{q^2}=\frac{2(q^2+q^6)}{q^2} \\
  1+q^3=2q^6 \\
  2t^2-t-1=0 & t=q^3 \\
  (1t-1)(2t+1)=0 \\
  t=1 \lor -\frac{1}{2} & t \ne 1 \,\text{if }t=1 \,\text{then } q=1 \\
  q^3=-\frac{1}{2} \\
  q=-\frac{1}{\sqrt[3]{2}}=-\frac{\sqrt[3]{4}}{\sqrt[3]{8}}=-\frac{\sqrt[3]{4}}{2} \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $q=-\frac{\sqrt[3]{4}}{2} \,\text{in } q \ne 1$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  na_1 & q=1 \\
  \frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \neq 1
  \end{cases} & \text{Sum of the first n terms} \\ 
  b^c=a \implies \log_{b}a=c & \text{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \text{Definition of square root} \\
  \end{array}
  >$

  :::
---

## 8.Focus 4
__Properties of geometric sequence elements.__  
::: wrap  
- __If $k \in \mathbb{z_+},m+n=k+t$, then $a_m \cdot a_n = a_k \cdot a_t$__.   
:::

::: wrap
### $\fbox{35}\:$In the geometric sequence $\small \left\{ a_n \right\}$, $\small a_3,a_8$ are the two roots of the equation $\small 3^x+2x-18=0$, then $\small a_4a_7= \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: -9 &
(\text{B}) \: -8 &
(\text{C}) \: -6 &
(\text{D}) \: 6 &
(\text{E}) \: 8 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_4a_7=a_3a_8=\frac{-18}{3}=-6 \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(C)}$  
  > According to the Solution, get $a_4a_7=-6$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \text{Vieta's formulas}
  \begin{cases}
  \text{1.Sum of the roots} \\
  x_1 + x_2=-\frac{b}{a} \\
  \text{2.Product of the roots} \\
  x_1 \cdot x_2=\frac{c}{a}
  \end{cases} \\
  a_n=a_1q^{n-1} & \text{General term} \\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{36}\:$If the geometric sequence a satisfies $\small a_2a_4+2a_3a_5+a_2a_8=25$ and $\small a_1 > 0$, then $\small a_3+a_5=\,\mathpunct{?}$. 
$
\begin{array}{lllll}
(\text{A}) \: 8 &
(\text{B}) \: 5 &
(\text{C}) \: 2 &
(\text{D}) \: -2 &
(\text{E}) \: -5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_3^2+2a_3a_5+a_5^2=25 \\
(a_3+a_5)^2=25 \\
\sqrt{(a_3+a_5)^2}=\sqrt{25} \\
a_3+a_5=\pm5 \\
a_3+a_5=5 & a_1>0 \,\text{so }a_1q^{n-1}>0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $a_3+a_5=5$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  ac=b^2 & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_5-focus-1}{\text{Geometric mean}} \\
  a_n=a_1q^{n-1} & \text{General term} \\
  \end{array}
  >$

  :::
- Characteristics of Same sign operators in a geometric sequence   
  ::: wrap  
  >$
  \begin{array}{ll}
  a_1,a_3,a_5,\dots \\
  a_1,a_1q^2,a_1q^4,\dots & \text{Same sign operators}\\
  a_2,a_4,a_6,\dots \\
  a_1q,a_1q^3,a_1q^5,\dots & \text{Same sign operators}\\
  \end{array}
  >$

  :::
- Trick solution  
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
__The sum property of the first n terms of geometric sequence.__  
::: wrap  
- __If $S_n$ is the sum of the first n terms of a geometric sequence,
  then $S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots$ are still geometric sequences$\fbox{Segment summation}$,
  and their common ratio is $q^n$.__     
:::

::: wrap
### $\fbox{37}\:$In the geometric sequence $\small \left\{ a_n \right\}$, knew $\small S_n=36,S_{2n}=54$, then $\small S_{3n}=\,\mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: 63 &
(\text{B}) \: 68 &
(\text{C}) \: 76 &
(\text{D}) \: 89 &
(\text{E}) \: 92 & \\
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
  > $\mathbf{(A)}$  
  > According to the Solution, get $S_3=63$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_4-important-properties}{\text{The property that }S_n \,\text{is the sum of the first n terms}} \\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{38}\:$It is known that $\small S_n$ is the sum of the first n terms of the geometric sequence $\small \left\{ a_n \right\}$, if $\small S_4=30,S_8=150$, then common ratio $\small q= \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: \pm2 &
(\text{B}) \: \sqrt{2} &
(\text{C}) \: \pm\sqrt{2} &
(\text{D}) \: \pm\frac{1}{2} &
(\text{E}) \: -\sqrt{2}& \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\fbox{1}\:$All indexs in $S_{\text{index}}$ are even numbers.  

  $
  \begin{array}{ll}
  \underbrace{S_4}_{30} \; \underbrace{S_8-S_4}_{150-30=120} \; \dots & q^4\\
  \frac{120}{30}=4 \\
  q^4=4 \\
  \sqrt{q^{2^2}}=\sqrt{2^2} \\
  q^2=2 \\
  q=\pm\sqrt{2}
  \end{array}
  $   
:::  
::: wrap  
- $\fbox{2}\:$All indexs in $S_{\text{index}}$ aren't even numbers.   

  $
  \begin{array}{ll}
  \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} \\
  \frac{S_8}{S_4}=1+q^4 & S_m=S_{2n} \\
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
  > $\mathbf{(C)}$  
  > According to the Solution, get $q=\pm\sqrt{2}$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  \frac{S_{2n}}{S_n} = 1+q^n & S_m=S_{2n} \\
  \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} & S_m \neq S_{2n}
  \end{cases} & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_4-important-properties}{\text{The property that }S_n \,\text{is the sum of the first n terms}} \\\\
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_4-important-properties}{\text{The property that }S_n \,\text{is the sum of the first n terms}} \\
  y^2=x \implies \sqrt[2]{x} & \text{Definition of square root} \\  
  \end{array}
  >$

  :::
---
