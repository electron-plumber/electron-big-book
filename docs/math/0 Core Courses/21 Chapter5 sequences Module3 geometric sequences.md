---
title: Chapter5 Sequences – Module3 Geometric Sequences
lang: en-US
---

# Module 5-03 Geometric Sequences

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



## 2.General Term  
::: wrap  
$$\boldsymbol{a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n}$$

__Remark: If two elements are known, need to know determine a common ratio $\frac{a_n}{a_m}=q^{n-m}$__.  
:::

### Formula derivations
::: wrap  
$\boldsymbol{a_n=a_1q^{n-1}}$  

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
$\boldsymbol{a_n=a_{k}q^{n-k}}$

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
$\boldsymbol{a_n=\frac{a_1}{q}q^n}$

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


## 3.Sum of the First N Terms  
::: wrap  
$$
\boldsymbol{
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
$\boldsymbol{S_n=na_1}$

$
\begin{array}{ll}
S_n=a_1+a_1+a_1+\dots+a_n & \textsf{Constant sequence} \\ 
S_n=na_1 \\
\end{array}
$  
:::
---
::: wrap  
$\boldsymbol{S_n=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q}}$

$
\begin{array}{ll}
S_n=a_1+a_2+\dots+a_{n-1}+a_n \\
qS_n=q(a_1+a_2+\dots+a_{n-1}+a_n) \\
qS_n=a_2+a_3+\dots+a_n+a_nq \\
(S_n=a_1+a_2+\dots+a_{n-1}+a_n)-(qS_n=a_2+a_3+\dots+a_n+a_nq) & \textsf{Displaced subtraction} \\
(1-q)S_n=a_1-a_nq \\
S_n=\frac{a_1-a_nq}{1-q} \lor S_n=\frac{a_1-a_{n+1}}{1-q}\\
\end{array}
$  
:::
---
::: wrap  
$\boldsymbol{S_n=\frac{a_{1}(1-q^n)}{1-q}}$

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


## 4.Important Properties
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
   \textsf{Special case} \: S_m = S_{2n}. \\
   \frac{S_{2n}}{S_n} = \frac{1-q^{2n}}{1-q^n} = \frac{(1-q^n)(1+q^n)}{1-q^n} = 1+q^n \\
   \textsf{Proof common ratio}. \\
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
- If three numbers $a,b,c$ form a geometric sequence, then b is called the geometric mean of a and c, that is $ac=b^2$.   
  - $b = \pm \sqrt{ac}$  
  - $a,c$ same sign operators  
:::

::: wrap
### $\fbox{28}\:$If $\small 2, 2^x-1, 2^x+3$ form a geometric sequence, that is $\small x = \, \mathpunct{?}$.
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
- $\boldsymbol{2, 2^x-1, 2^x+3}$ form a geometric sequence; it means $\boldsymbol{a+c=b^2}$

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
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $x=\log_{2}5$, so choose $A$.
  
  :::
- $t>0$   
  ::: wrap
  > $t=2^x=a^x$  
  > $a>0$ The range of the exponential function is $(0,\infty)$.   
  > $a=0$ The exponent is only useful when $x>0$, and a negative exponent of 0 is undefined.  
  > $a<0$ The result can be positive or negative.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (a-b)^2=a^2-2ab+b^2 & \textsf{Perfect square formula} \\
  b^c=a \implies \log_{b}a=c & \href{https://en.wikipedia.org/wiki/Logarithm}{\textsf{Definition of logarithm}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 2
__General term of geometric sequence.__  
::: wrap  
$\boldsymbol{a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n}$  
- No element in a geometric sequence can be 0, and the common ratio can't be 0.    
  - $a_n= \textsf{constants} \times \textsf{exponents}$   
  - $q= \textsf{base}$  
  - $a_n= \textsf{constants} \quad \textsf{Special case } q=1$  
:::

::: wrap  
### $\fbox{29}\:$Following there are $\small \mathpunct{?} \:$that can be used as general term in geometric sequence.
$
\begin{array}{lllll}
\textsf{(1)} \: a_n=n^3 &
\textsf{(2)} \: a_n=3^n &
\textsf{(3)} \: a_n=\frac{1}{3} &
\textsf{(4)} \: a_n=\frac{2_n}{3} & \\
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
::: wrap
- Currently, know the Expressions can use characterization analysis $a_n=\textsf{Constant} \times \textsf{Exponent}$

  $
  \begin{array}{ll}
  \textsf{(1)} \: a_n=n^3 & \textsf{This is a power function} \; ❌\\
  \textsf{(2)} \: a_n=3^n & \boxed{1 \times 3^n} \; q=3 \; ✅\\
  \textsf{(3)} \: a_n=\frac{1}{3} & \boxed{\frac{1}{3} \times 1^{n-1}} \; q=1 \; ✅\\
  \textsf{(4)} \: a_n=\frac{2_n}{3} & \boxed{\frac{1}{3} \times 2_n} \; q=2 \; ✅\\
  \textsf{(5)} \: a_n=3^{-n} & \boxed{1 \times (\frac{1}{3})^n} \; q=\frac{1}{3} \; ✅\\
  \textsf{(6)} \: a_n=(-1)^n & \boxed{1 \times (-1)^n} \; q=-1 \; ✅\\
  \textsf{(7)} \: a_n=2^n-1 & \textsf{There is a constant term -1 after the exponent} \; ❌\\
  \end{array}
  $  
:::
#### Conclusion

- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(3)},\textsf{(4)},\textsf{(5)},\textsf{(6)}$ correct, so choose $D$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=
  \begin{cases}
  \textsf{Use when know the Expressions} \\
  a_n=\textsf{Constant} \times \textsf{Exponent}
  \end{cases} 
  & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#formula-derivations}{\textsf{General term characteristics}} \\
  \left\{ a_n \right\}=
  \begin{cases}
  \textsf{Use when don't know the Expressions} \\
  \frac{a_n+1}{a_n}=q
  \end{cases}
  & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_1-definition}{\textsf{Geometric sequence definition}} \\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{30}\:$If $\small \left\{ a_n \right\}$ is a geometric sequence, among the following four statements, the number of correct statements is $\small \mathpunct{?}$.  
$
\begin{array}{ll}
\textsf{(1)} \: \textsf{The sequence} \: \left\{a_n^2 \right\} \: \textsf{is a geometric sequence.} &
\textsf{(2)} \: \textsf{The sequence} \: \left\{a_{2n} \right\} \: \textsf{is a geometric sequence.} & \\
\textsf{(3)} \: \textsf{The sequence} \: \left\{ \frac{1}{a_n} \right\} \: \textsf{is a geometric sequence.} &
\textsf{(4)} \: \textsf{The sequence} \: \left\{ |a_n| \right\} \: \textsf{is a geometric sequence.} & \\
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
::: wrap  
- Currently, don't know the Expressions, can use Geometric sequence definition analysis $\frac{a_n+1}{a_n}=q$  

  $
  \begin{array}{ll}
  \textsf{(1)} \: \left\{ a_n^2 \right\} & \boxed{\frac{a_{n+1}^2}{a_n^2}=(\frac{a_{n+1}}{a_n})^2=q^2} \; ✅\\
  \textsf{(2)} \: \left\{ a_{2n} \right\} & \boxed{\frac{a_{2(n+1)}}{a_{2n}}=q^2} \; ✅\\
  \textsf{(3)} \: \left\{ \frac{1}{a_n} \right\} & \boxed{\frac{\frac{1}{a_{n+1}}}{\frac{1}{a_n}}=\frac{a_n}{a_{n+1}}=\frac{1}{q}} \; ✅\\
  \textsf{(4)} \: \left\{ |a_n| \right\} & \boxed{\frac{|a_{n+1}|}{|a_n|}=\left| \frac{a_{n+1}}{a_n} \right|=|q|} \; ✅\\
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
  \frac{a_n+1}{a_n}=q & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_1-definition}{\textsf{Geometric sequence definition}} \\
  \end{array}
  >$

  :::
- Reverse of a geometric sequence        
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{(1)} \: \left\{ a_n^2 \right\} & a_n^2=x \implies a_n= \pm\sqrt{x} \; ❌\\
  \textsf{(2)} \: \left\{ a_{2n} \right\} & a_0,a_1,a_2,a_3,a_4,\dots \implies a_{2n} = a_0,a_2,a_4,a_6,\dots \; ❌\\
  \textsf{(3)} \: \left\{ \frac{1}{a_n} \right\} & a_n=\frac{1}{\frac{1}{a_n}}=a_n \; ✅\\
  \textsf{(4)} \: \left\{ |a_n| \right\} & a_n=\begin{cases} a_n \quad \textsf{If} a_n \ge 0 \\ -a_n \: \textsf{If} a_n < 0 \end{cases} \; ❌\\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{31}\:$In the geometric sequence $\small \left\{ a_n \right\}$, if $\small a_4a_7=-512,a_3+a_8=124$ and the is common ratio is $\small q \in \mathbb{Z}$, then $\small a_{10} = \, \mathpunct{?}$.
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
- According to the characteristics of Vieta's formulas, rearrange the equation  

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
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a_{10}=512$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{Vieta's formulas}
  \begin{cases}
  \textsf{1.Sum of the roots} \\
  x_1 + x_2=-\frac{b}{a} \\
  \textsf{2.Product of the roots} \\
  x_1 \cdot x_2=\frac{c}{a}
  \end{cases} \\
  b^c=a \implies \log_{b}a=c & \textsf{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \textsf{Definition of square root} \\
  a_n=a_{k}q^{n-k} & \textsf{General term} \\
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
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $q=\pm2$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  b^c=a \implies \log_{b}a=c & \textsf{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \textsf{Definition of square root} \\
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
\boldsymbol{
S_n=
\begin{cases}
na_1 & q=1 \\
\frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \neq 1
\end{cases}
}
$  
- __$q=1$__
  - $S_n=na_1 \quad \textsf{linear function}$
- __$q \neq 1$__
  - $S_n=\frac{a_1}{1-q} \times (1-q^n)=k(1-q^n)=\boxed{k-kq^n}$    
- __$S_n=a+bq^n$__  
  - $a+b \neq 0 \quad \textsf{it is not }S_n$  
    - Form $a_2$ onwards it is still a geometric sequence.  
  - $a+b=0 \quad \textsf{it is }S_n$   
    - $S_n=3-3q^n$ ✅$\quad k-k=0$  
    - $S_n=5-3q^n$ ❌$\quad k-k\neq0$   
:::

::: wrap
### $\fbox{33}\:$Following there are $\small \mathpunct{?}$ that can be used as a sum of the first n terms of a geometric sequence.
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
::: wrap  
- Currently, know the Expressions can use characterization analysis  

  $
  S_n=
  \begin{cases}
  S_n=na_1 & q=1 \\
  S_n=k-kq^n & q \neq 1 \\
  \end{cases}
  $

  $
  \begin{array}{ll}
  \textsf{(1)} \: S_n=\frac{1}{3} & S_n \,\textsf{cannot be a constant, but } a_n \,\textsf{can be a constant} \; ❌\\
  \textsf{(2)} \: S_n=2n & \boxed{n2} \; q=1 \; ✅\\
  \textsf{(3)} \: S_n=2n-1 & 2n-1 \,\textsf{is not the } q^n \,\textsf{exponential} \; ❌\\
  \textsf{(4)} \: S_n=2^n & \textsf{There is no constant term after }2^n \; ❌\\
  \textsf{(5)} \: S_n=2^n-1 & \boxed{1-1 \cdot 2^n} \; q=2 \; ✅\\
  \textsf{(6)} \: S_n=2^n+1 & \textsf{Doesn't satisfy } k-k=0 \; ❌\\
  \textsf{(7)} \: S_n=3(2^n-1) & \boxed{3-3 \cdot 2^n} \; q=2 \; ✅\\
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
  S_n=k-kq^n & q \neq 1 \\
  \end{cases}
  & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_7-focus-3}{\textsf{Characteristics of the sum of the first n terms}} \\
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
  \textsf{(1)} \: S_n=\frac{1}{3} & \boxed{a_n=\begin{cases} \frac{1}{3} & n=1 \\ 0 & n \ge 1 \\ \end{cases}} \\
  \textsf{(2)} \: S_n=2n & \boxed{a_n=2} \\
  \textsf{(3)} \: S_n=2n-1 & \boxed{a_n=\begin{cases} 1 & n=1 \\ 2 & n \ge 1 \\ \end{cases}} \\
  \textsf{(4)} \: S_n=2^n & \boxed{a_n=\begin{cases} 2 & n=1 \\ 2^n-2^{n-1}=(2 \times 2^{n-1})-2^{n-1}=2^{n-1} & n \ge 1 \\ \end{cases}} \\
  \textsf{(5)} \: S_n=2^n-1 & \boxed{a_n=1 \times 2^{n-1}} \\
  \textsf{(6)} \: S_n=2^n+1 & \boxed{a_n=\begin{cases} 3 & n=1 \\ 2^{n-1} & n \ge 1 \\ \end{cases}} \\
  \textsf{(7)} \: S_n=3(2^n-1) & \boxed{a_n=3 \times 2^{n-1}} \\
  \end{array}
  >$  
  :::
---
::: wrap
### $\fbox{34}\:$It is known that $\small S_n$ is the sum of the first n terms of the geometric sequence $\small \left\{ a_n \right\}$, if $\small S_2+S_5=2S_8$, then common ratio $\small q= \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 1 \lor -2 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 1 \lor -\frac{\sqrt[3]{4}}{2} &
\textsf{(D)} \: -\frac{\sqrt[3]{4}}{2} &
\textsf{(E)} \: -2 \lor -\frac{\sqrt[3]{4}}{2} & \\
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
  a_1=\frac{0}{9}=0 & \textsf{No any element in a geometric sequence can be 0} \; ❌\\
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
  \frac{q^2+q^5}{q^2}=\frac{2q^8}{q^2} & q \,\textsf{is not 0, divide both sides by } q^2, \textsf{similar to } q^{\frac{\log_{10}x}{\log_{10}2}} \\
  \frac{q^2}{q^2}+\frac{q^2+q^3}{q^2}=\frac{2(q^2+q^6)}{q^2} \\
  1+q^3=2q^6 \\
  2t^2-t-1=0 & t=q^3 \\
  (1t-1)(2t+1)=0 \\
  t=1 \lor -\frac{1}{2} & t \ne 1 \,\textsf{if }t=1 \,\textsf{then } q=1 \\
  q^3=-\frac{1}{2} \\
  q=-\frac{1}{\sqrt[3]{2}}=-\frac{\sqrt[3]{4}}{\sqrt[3]{8}}=-\frac{\sqrt[3]{4}}{2} \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $q=-\frac{\sqrt[3]{4}}{2} \,\textsf{in } q \ne 1$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  na_1 & q=1 \\
  \frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \neq 1
  \end{cases} & \textsf{Sum of the first n terms} \\ 
  b^c=a \implies \log_{b}a=c & \textsf{Definition of logarithm} \\
  y^2=x \implies \sqrt[2]{x} & \textsf{Definition of square root} \\
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
a_4a_7=a_3a_8=\frac{-18}{3}=-6 \\
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
  \textsf{Vieta's formulas}
  \begin{cases}
  \textsf{1.Sum of the roots} \\
  x_1 + x_2=-\frac{b}{a} \\
  \textsf{2.Product of the roots} \\
  x_1 \cdot x_2=\frac{c}{a}
  \end{cases} \\
  a_n=a_1q^{n-1} & \textsf{General term} \\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{36}\:$If the geometric sequence a satisfies $\small a_2a_4+2a_3a_5+a_2a_8=25$ and $\small a_1 > 0$, then $\small a_3+a_5=\,\mathpunct{?}$. 
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
a_3^2+2a_3a_5+a_5^2=25 \\
(a_3+a_5)^2=25 \\
\sqrt{(a_3+a_5)^2}=\sqrt{25} \\
a_3+a_5=\pm5 \\
a_3+a_5=5 & a_1>0 \,\textsf{so }a_1q^{n-1}>0 \\
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
  ac=b^2 & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_5-focus-1}{\textsf{Geometric mean}} \\
  a_n=a_1q^{n-1} & \textsf{General term} \\
  \end{array}
  >$

  :::
- Characteristics of Same sign operators in a geometric sequence   
  ::: wrap  
  >$
  \begin{array}{ll}
  a_1,a_3,a_5,\dots \\
  a_1,a_1q^2,a_1q^4,\dots & \textsf{Same sign operators}\\
  a_2,a_4,a_6,\dots \\
  a_1q,a_1q^3,a_1q^5,\dots & \textsf{Same sign operators}\\
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
- If $S_n$ is the sum of the first n terms of a geometric sequence,
  then $S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots$ are still geometric sequences$\fbox{Segment summation}$,
  and their common ratio is $q^n$.     
:::

::: wrap
### $\fbox{37}\:$In the geometric sequence $\small \left\{ a_n \right\}$, knew $\small S_n=36,S_{2n}=54$, then $\small S_{3n}=\,\mathpunct{?}$.
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
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_4-important-properties}{\textsf{The property that }S_n \,\textsf{is the sum of the first n terms}} \\
  \end{array}
  >$

  :::
---
::: wrap
### $\fbox{38}\:$It is known that $\small S_n$ is the sum of the first n terms of the geometric sequence $\small \left\{ a_n \right\}$, if $\small S_4=30,S_8=150$, then common ratio $\small q= \, \mathpunct{?}$.
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
::: wrap  
- $\textcolor{#228B22}{\fbox{1}}\:$All indexs in $S_{\textsf{index}}$ are even numbers  

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
- $\textcolor{#228B22}{\fbox{2}}\:$All indexs in $S_{\textsf{index}}$ aren't even numbers   

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
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $q=\pm\sqrt{2}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S_n=
  \begin{cases}
  \frac{S_{2n}}{S_n} = 1+q^n & S_m=S_{2n} \\
  \frac{S_m}{S_n} = \frac{1-q^m}{1-q^n} & S_m \neq S_{2n}
  \end{cases} & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_4-important-properties}{\textsf{The property that }S_n \,\textsf{is the sum of the first n terms}} \\\\
  S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots & \href{/math/0%20Core%20Courses/21%20Chapter5%20sequences%20Module3%20geometric%20sequences.html#_4-important-properties}{\textsf{The property that }S_n \,\textsf{is the sum of the first n terms}} \\
  y^2=x \implies \sqrt[2]{x} & \textsf{Definition of square root} \\  
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=8Bum9KaQM4o&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gncjm?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95cd-22-chapter5-sequences-module3-geometric-sequences.html)   |                                                                   |
