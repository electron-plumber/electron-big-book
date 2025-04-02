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
If in the sequence $\left\{ a_n \right\}, \frac{a_{n+1}}{a_n}=q(constant) (n \in N_+)$, 
called the sequence $\left\{ a_n \right\}$ for Geometric sequence, __q__ is the common ratio.  

Essence: ratio value is constant (common ratio), relationship of multiples.  

| Sequences             | Multiples(Q) | __Q__ Law                                |
|-----------------------|--------------|------------------------------------------|
| $2,-6,18,-54,\dots$   | __-3__       | $q<0$ Alternation positive and negative. |
| $2,6,18,54,\dots$     | __3__        | $q>0$ Same Sign Operators.               |
| $-2,-6,-18,-54,\dots$ | __3__        | $q>0$ Same Sign Operators.               |



## 2.General term  
$$\mathbf{a_n=a_1q^{n-1}=a_{k}q^{n-k}=\frac{a_1}{q}q^n}$$

__Remark: If two elements are known, need to know determine a common ratio $\frac{a_n}{a_m}=q^{n-m}$__

### Formula derivations
$\mathbf{a_n=a_1q^{n-1}}$  

$
\begin{array}{ll}
\frac{a_{n+1}}{a_n}=q \\
\frac{\cancel{a_2}}{a_1}=q,\frac{\cancel{a_3}}{\cancel{a_2}}=q,\dots,\frac{a_n}{\cancel{a_{n-1}}}=q \\
\frac{a_n}{a_1}=q^{n-1} \\
a_n=a_1q^{n-1}
\end{array}
$

---

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

---

$\mathbf{a_n=\frac{a_1}{q}q^n}$

$
\begin{array}{ll}
a_n=a_1q^{n-1} \\
a_n=a_1 \frac{q^n}{q} \\
a_n=\frac{a_1}{q}q^n \\
\end{array}
$

---



| Formulas               | Descriptions                                                              | Usages               |
|------------------------|---------------------------------------------------------------------------|----------------------|
| $a_n=a_1q^{n-1}$       | Need to know $a_1$ to use                                                 | $a_5=a_1q^4$         |
| $a_n=a_kq^{n-k}$       | Knowing that any $a_n$ can be use, when $k=1$ it becomes $a_n=a_1q^{n-1}$ | $a_5=a_3q^2$         |
| $a_n=\frac{a_1}{q}q^n$ | Need to know $a_1$ and $q$ to use, No constant term                       | $a_n=2 \times 3^{n}$ |


## 3.Sum of the first n term  

$$
\mathbf{
S_n=
\begin{cases}
na_1 & q=1 \\
\frac{a_{1}(1-q^n)}{1-q}=\frac{a_{1}-a_{n}q}{1-q}=\frac{a_{1}-a_{n+1}}{1-q} & q \neq 1
\end{cases}
}
$$

### Formula derivations
$\mathbf{S_n=na_1}$

$
\begin{array}{ll}
S_n=a_1+a_1+a_1+\dots+a_n \; \text{Constant sequence} \\ 
S_n=na_1 \\
\end{array}
$

---
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

---
$\mathbf{S_n=\frac{a_{1}(1-q^n)}{1-q}}$

$
\begin{array}{ll}
S_n=\frac{a_1-a_nq}{1-q} \\
a_n=a_1q^{n-1} \\
S_n=\frac{a_1-a_1q^n}{1-q} \\
S_n=\frac{a_1(1-q^n)}{1-q} \lor S_n=\frac{a_1}{1-q}(1-q^n) \\
\end{array}
$

---


## 4.Important properties  

1. __If $m+n=k+t \,\fbox{Arithmetic sequence}$ then $a_ma_n=a_ka_t \, \fbox{Geometric sequence}$.__  
   $
   \begin{array}{ll}
   a_3·a_9=a_5·a_7 \\
   a_3·q^2=a_5 \\
   a_7·q^2=a_9 \\
   a_3·a_9=a_5·a_7=a_6^2 \\
   \end{array}
   $
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
3. __If $\left| q \right| < 1$,
   then the sum of all terms in the geometric sequence is $S=\lim\limits_{n \to \infty } S_n=\frac{a_1}{1-q}$.__  
   $
   \begin{array}{ll}
   \left| q \right| < 1 \implies n \to \infty \implies q^n \to 0 \\
   \left( \frac{1}{3} \right)^{100} \approx 0 \\
   S_n = \frac{a_10}{1-q} = \frac{a_1}{1-q}
   \end{array}
   $


## 5.Focus 1
__If three numbers $a,b,c$ form a geometric sequence, then b is called the geometric mean of a and c, that is $ac=b^2$.__  
- __Important note__  
  - $b = \pm \sqrt{ac}$  
  - $a,c$ same sign operators


### $\fbox{28}\:$If $\small \: 2, 2^x-1, 2^x+3 \:$form a geometric sequence, that is$\small \:x = \, \mathpunct{?}$.  
$
\begin{array}{lllll}
(\text{A}) \: \log_{2}5 & 
(\text{B}) \: \log_{2}6 & 
(\text{C}) \: \log_{2}7 &
(\text{D}) \: 3 &
(\text{E}) \: 4 & \\
\end{array}
$

#### Solution
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

#### Conclusion
- Derived Solution
  > $\mathbf{(A)}$  
  > According to the Solution, get $x=\log_{2}5$, so choose $A$.
- $t>0$   
  > $t=2^x=a^x$  
  > $a>0$ The range of the exponential function is $(0,\infty)$.   
  > $a=0$ The exponent is only useful when $x>0$, and a negative exponent of 0 is undefined.  
  > $a<0$ The result can be positive or negative.
- Formula used
  >$
  \begin{array}{ll}
  (a-b)^2=a^2-2ab+b^2 & \href{https://www.youtube.com/watch?v=Z3ZEPKVMXFI}{\text{Perfect Square Formula}} \\
  b^c=a \implies \log_{b}a=c & \href{https://en.wikipedia.org/wiki/Logarithm}{\text{Definition of Logarithm}} \\
  \end{array}
  >$
---




