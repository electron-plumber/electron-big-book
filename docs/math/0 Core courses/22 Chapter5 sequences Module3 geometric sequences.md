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
a_n=a_1q^{n-1} \; \text{When k=1} \\
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


## 3.Sum of the first n term  
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
S_n=a_1+a_1+a_1+\dots+a_n \; \text{Constant sequence} \\ 
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
(S_n=a_1+a_2+\dots+a_{n-1}+a_n)-(qS_n=a_2+a_3+\dots+a_n+a_nq) \; \text{Displaced subtraction} \\
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
2. __$S_n$ is the sum of the first n term of a geometric sequence,
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
__If three numbers $a,b,c$ form a geometric sequence, then b is called the geometric mean of a and c, that is $ac=b^2$.__   
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
__No element in a geometric sequence can be 0, and the common ratio can't be 0.__  
- $
  \begin{array}{ll}
  a_n= \text{constants} \times \text{exponents}  \\
  q= \text{base} \\
  a_n= \text{constants} & \text{Special case } q=1
  \end{array}
  $  
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
- Currently, know the Expressions can use appearance feature analysis $a_n=\text{Constant} \times \text{Exponent}$.
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
  \begin{cases}
  \text{Use when know the Expressions} \\
  a_n=\text{Constant} \times \text{Exponent}
  \end{cases} 
  & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#formula-derivations}{\text{General term feature}} \\
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
(\text{1}) \: \text{The sequence} \: \left\{a_n^2 \right\} \: \text{is a geometric sequence.} & \\
(\text{2}) \: \text{The sequence} \: \left\{a_{2n} \right\} \: \text{is a geometric sequence.} & \\
(\text{3}) \: \text{The sequence} \: \left\{ \frac{1}{a_n} \right\} \: \text{is a geometric sequence.} & \\
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
  \frac{a_n+1}{a_n}=q & \href{/math/0%20Core%20courses/22%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_1-definition}{\text{Geometric sequence definition}} \; \text{Use when don't know the Expressions}\\
  \end{array}
  >$

  :::
- Reverse of a geometric sequence        
  ::: wrap
  >$
  \begin{array}{ll}
  (\text{1}) \: \left\{ a_n^2 \right\} & a_n^2=r \implies a_n= \pm\sqrt{r} \; ❌\\
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
  \begin{cases}
  \text{1.Sum of the roots} \\
  x_1 + x_2=-\frac{b}{a} \\
  \text{2.Product of the roots} \\
  x_1 \cdot x_2=\frac{c}{a}
  \end{cases}
  & \text{Vieta's formulas} \\
  b^c=a \implies \log_{b}a=c & \text{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \text{Definition of square root} \\
  a_n=a_{k}q^{n-k} & \text{General term} \\
  \end{array}
  >$

  :::
- $q \in \mathbb{z}$  
  > $|a_n|$ Monotonically increasing.
---
