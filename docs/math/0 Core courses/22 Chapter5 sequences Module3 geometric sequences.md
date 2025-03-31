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

$$\text{Remark: If two elements are known, need to know determine a common ratio} \frac{a_n}{a_m}=q^{n-m}$$

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


## 4.Important property  

1. If $m+n=k+t \,\fbox{arithmetic sequence}$ then $a_ma_n=a_ka_t \, \fbox{geometric sequence}$.

2. $S_n$ is the sum of the first n term of a geometric sequence, then $S_n, S_{2n}-S_n, S_{3n}-S_{2n},\dots$ are still geometric sequences, and their common ratio is $q^n$.

3. If $\left| q \right| < 1$, then the sum of all terms in the geometric sequence is $S=\lim\limits_{n \to \infty } S_n=\frac{a_1}{1-q}$.



