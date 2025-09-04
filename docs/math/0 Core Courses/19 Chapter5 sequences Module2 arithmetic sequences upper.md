---
title: Chapter5 Sequences – Module2 Arithmetic Sequences Upper
lang: en-US
---

| Platform    | Course                                                                                            | Coursewares                                                       |
|-------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=TXfq-SIghJE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)      | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvs4?playlist=x9h6d2)                                |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95c7-20-chapter5-sequences-module2-arithmetic-sequences-upper.html) |                                                                   |


# Module 5-01 Arithmetic Sequences

## 1.Definition
- in the sequence $\boldsymbol{\left\{ a_n \right\}}$,
  $\boldsymbol{a_{n+1}-a_n=d}$ ($\textsf{constant}$, $n\in\mathbb{N}_+$),
  then the sequence $\boldsymbol{\left\{ a_n \right\}}$ is called __an arithmetic sequence__,
  and $\boldsymbol{d}$ is called __the common difference__.
- Essence: obtaining __the constant difference__ through __the recurrence relation__.  
  $
  \begin{array}{ll}
  \left\{ a_n \right\}=\left\{ 1,4,7,10,13,\cdots \right\} \\
  a_2-a_1=4-1=3 & a_{n+1}-a_n=d\\
  \end{array}
  $


## 2.General Term
- $a_n=a_1+(n-1)d=a_k+(n-k)d=nd+a_1-d$
- Note: if __two terms are known__, __the common ratio__ can be found by $\boldsymbol{d=\frac{a_n-a_m}{n-m}}$.
- $\boldsymbol{a_n=nd+a_1-d}$ can be regarded as __a linear function $\href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#slope-intercept-form}{\boldsymbol{y=kx+b}}$__.  
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
- $S_n=\frac{d}{2}n^2+(a_1-\frac{d}{2})n$ can be regarded as __a quadratic function $\boldsymbol{y=ax^2+bx+c}$__.  
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


