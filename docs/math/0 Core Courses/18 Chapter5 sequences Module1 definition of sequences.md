---
title: Chapter5 Sequences – Module1 Definition of Sequences
lang: en-US
---

# Module 5-01 Sequences

## 1.Definition
- A sequence is __a list of numbers__ arranged in __a certain order__.
  - $\left\{ a_n \right\}=\left\{1,3,5,7,9,\cdots \right\}$
- General form: $\boldsymbol{a_1,a_2,a_3,\cdots,a_n,\cdots}$, abbreviated as $\boldsymbol{\left\{ a_n \right\}}$.
- Note: a sequence can be __regarded as a function__ whose __domain is the set of positive integers__ (or __one of its finite subsets__).
  Analyzing and solving sequence problems from __the perspective of functions__ is __a fundamental approach__.
  __Recurrence (recursive relations)__ is __a distinctive representation of sequences__,
  as it better reflects __their characteristics__.
  - recursive relation: $\boldsymbol{a_{n+2}=a_{n+1}+a_n}$
  - $\left\{ a_n \right\}=\left\{1,3,4,7,11,18,\cdots \right\}$
- Representation of sequences
  - Enumeration: $\boldsymbol{1,3,5,7,\cdots}$
  - General term: $\boldsymbol{a_n=2n-1}$
  - Recurrence: __relation between successive terms__


## 2.General Term
- $a_n=f(n)$: a functional relationship between __the $\boldsymbol{n}$-th term $\boldsymbol{a_n}$__ and __the index $\boldsymbol{n}$__.  
  $
  \begin{array}{ll}
  a_n=3n-1=f(n) \\
  a_1=3-1=2 \\
  a_2=3\times2-1=5 \\
  a_8=3\times8-1=23 \\
  \end{array}
  $
- Note: not every sequence can be __expressed by a general term formula__; and for __some sequences, the general term formula is not unique__.


## 3.Sum of the First $n$ Terms
- The sum of the first $n$ terms of a sequence is denoted by $\boldsymbol{S_n=a_1+a_2+a_3+\cdots+a_n}$.
- Note: the sum of the first $n$ terms must __start from $\boldsymbol{a_1}$__.
  $a_n$ represents __an individual term__, while $S_n$ represents __the whole sum__.
- Derivation of $\boldsymbol{S_n-S_{n-1}=a_n}$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_1=a_1 & n=1 \\
  S_2=a_1+a_2 & n=2 \\
  S_7=\underbrace{a_1+a_2+\cdots+a_6}_{S_6}+a_7=S_6+a_7 & n=7 \\
  S_n=S_{n-1}+a_n \\
  a_n=S_n-S_{n-1} & (n\ge2) \textsf{ (} S_0=\textsf{undefined)} \\
  \end{array}
  $  
  :::


## 4.Formulas for the Relationship between
- Given $a_n$, find $S_n$   
  $S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i$
- ###### Given $S_n$, find $a_n$    
  - __The constant term__ in $S_n$ __only affects $\boldsymbol{a_1}$__, but __doesn't affect the other terms__.   

  $
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases}
  $  


## 5.Focus 1
__For the given $S_n$, find $a_n$__  
- Use the formula
  $
  \boldsymbol{
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases}}
  $
  to analyze and solve.



### $\fbox{1}\:$Given that the sum of the first $\small n$ terms of the sequence $\small \left\{ a_n \right\}$ is $\small S_n=n^2+1$, find $\small a_5$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 9 &
\textsf{(B)} \: 8 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 4 &
\textsf{(E)} \: 16 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_5=S_5-S_4=(5^2\bcancel{+1})-(4^2\bcancel{+1})=9 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $a_5=9$, so choose $A$. 

  :::
- Formulas used  
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

  :::
---

### $\fbox{2}\:$Given that the sum of the first $\small n$ terms of the sequence $\small \left\{ a_n \right\}$ satisfies $\small \log_{2}(S_n+1)=n+1$, find $\small a_6$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 32 &
\textsf{(B)} \: 12 &
\textsf{(C)} \: 64 &
\textsf{(D)} \: 72 &
\textsf{(E)} \: 24 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\log_{2}(S_n+1)=n+1 \longrightarrow 2^{n+1}=S_n+1 \\
S_n=2^{n+1}-1 \\
a_6=S_6-S_5=2^7-2^6=(2\cdot2^6)-2^6=2^6=64 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $a_6=64$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  b^c=a \longrightarrow \log_{b}a=c & \href{https://en.wikipedia.org/wiki/Logarithm}{\textsf{definition of logarithm}} \\
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases} & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#given-find}{\textsf{formula for relationship between }a_n\textsf{ and }S_n} \\
  \end{array}
  >$

  :::
---


### $\fbox{3}\:$Given the sequence $\small \left\{ a_n \right\}$ with the sum of the first $\small n$ terms $\small S_n=n^3$, find $\small a_6+a_7+a_8+a_9+a_{10}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 725 &
\textsf{(B)} \: 775 &
\textsf{(C)} \: 825 &
\textsf{(D)} \: 855 &
\textsf{(E)} \: 875 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_m+a_{m+1}+\cdots+a_k=S_k-S_{m-1} & k>m \\
a_6+a_7+\cdots+a_{10}=S_{10}-S_5 \\
10^3-5^3=1000-125=875 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $a_6+a_7+\cdots+a_{10}=875$, so choose $E$. 

  :::
- Formulas used  
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

  :::
---

### $\fbox{4}\:$Given the sequence $\small \left\{ a_n \right\}$ with the sum of the first $\small n$ terms $\small S_n=10^n-1$, find the general term $\small a_n$.

#### Solution
::: wrap  
$
\begin{array}{ll}
a_1=S_1=10-1=9 & n=1 \\
a_n=S_n-S_{n-1}=10^n-10^{n-1} & n \ge 2 \\
(10\cdot10^{n-1})-10^{n-1}=9\cdot10^{n-1} \\
a_1=9\cdot10^{1-1}=9\cdot1=9 & \textsf{substitute }a_1 \textsf{ to verify} \\
a_n=a_1=9\cdot10^{n-1} \\
\end{array}
$  
:::  
#### Conclusion
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=
  \begin{cases}
  a_1=S_1 & n=1 \\
  S_n-S_{n-1} & n \ge 2 \\
  \end{cases} & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#given-find}{\textsf{formula for relationship between }a_n\textsf{ and }S_n} \\
  a_n=f(n) & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_2-general-term}{\textsf{definition of general term}} \\
  \end{array}
  >$

  :::
---


## 6.Focus 2
__For the given $a_n$, find $S_n$__
- Use the formula $\boldsymbol{S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i}$ together with __the decomposition of the general term__,
  we apply __the method of telescoping sums__ (__cancellation method__).
  This is a concrete application of __the idea of decomposition and recombination in summing sequences__.
  The essence of the telescoping method is __to decompose each term (the general term) of the sequence__,
  then __recombine them__ so that __certain terms cancel out__,
  __ultimately yielding the sum__.
  


### $\fbox{5}\:$In the sequence $\small \left\{ a_n \right\}$, $\small a_n＝\frac{n}{2}$. Define $\small b_n=\frac{2}{a_n \cdot a_{n+1}}$. Find the sum of the first $\small 99$ terms of the sequence $\small {b_n}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{99}{25} &
\textsf{(B)} \: \frac{101}{25} &
\textsf{(C)} \: \frac{202}{25} &
\textsf{(D)} \: \frac{198}{25} &
\textsf{(E)} \: \frac{298}{25} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_n＝\frac{n}{2} \\
b_n=\frac{2}{\frac{n}{2} \cdot \frac{n+1}{2}}=\frac{2}{\frac{n(n+1)}{4}}=\frac{8}{n(n+1)} \\
8\cdot\frac{1}{n(n+1)}=8(\frac{1}{n}-\frac{1}{n+1}) & \frac{1}{n(n+k)}=\frac{1}{k}(\frac{1}{n}-\frac{1}{n+k}) \\
S_{99}=8[(1-\bcancel{\frac{1}{2}})+(\bcancel{\frac{1}{2}}-\bcancel{\frac{1}{3}})+\cdots+(\bcancel{\frac{1}{99}}-\frac{1}{100})]=8(1-\frac{1}{100}) \\
8(1-\frac{1}{100})=8\cdot\frac{99}{100}=\frac{792}{100}=\frac{198}{25} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S_{99}=\frac{198}{25}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{1}{n(n+k)}=\frac{1}{k}(\frac{1}{n}-\frac{1}{n+k}) & \textsf{partial fraction telescoping identity} \\
  S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_3-sum-of-the-first-terms}{\textsf{sum of first }n\textsf{ terms}} \\
  \end{array}
  >$

  :::
---

### $\fbox{6}\:$In the sequence $\small \left\{ a_n \right\}$, the general term is $\small a_n=\frac{1}{\sqrt{n}+\sqrt{n+1}}$. If the sum of the first $\small n$ terms equals $\small 10$, find $\small n$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 119 &
\textsf{(B)} \: 120 &
\textsf{(C)} \: 121 &
\textsf{(D)} \: 122 &
\textsf{(E)} \: 124 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_n=\frac{1}{\sqrt{n}+\sqrt{n+1}}=\sqrt{n+1}-\sqrt{n} & \frac{1}{\sqrt{n}+\sqrt{n+k}}=\frac{1}{k}(\sqrt{n+k}-\sqrt{n}) \\
S_n=(\bcancel{\sqrt{2}}-1)+(\bcancel{\sqrt{3}}-\bcancel{\sqrt{2}})+\cdots+(\sqrt{n+1}-\bcancel{\sqrt{n}})=10 \\
\sqrt{n+1}-1=10 \\
\sqrt{n+1}=11 \\
(\sqrt{n+1})^2=11^2 \\
n+1=121 \\
n=120 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $n=120$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{1}{\sqrt{n}+\sqrt{n+k}}=\frac{1}{k}(\sqrt{n+k}-\sqrt{n}) & \textsf{square-root telescoping identity} \\
  S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_3-sum-of-the-first-terms}{\textsf{sum of first }n\textsf{ terms}} \\
  \end{array}
  >$

  :::
---

### $\fbox{7}\:$Find the value of $S_{99}=\frac{1}{2!}+\frac{2}{3!}+\frac{3}{4!}+\cdots+\frac{99}{100!}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1-\frac{1}{100!} &
\textsf{(B)} \: 2-\frac{1}{100!} &
\textsf{(C)} \: \frac{1}{2}-\frac{1}{100!} &
\textsf{(D)} \: 1-\frac{1}{99!} &
\textsf{(E)} \: 1-\frac{99}{100!} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_n=\frac{n}{(n+1)!}=\frac{1}{n!}-\frac{1}{(n+1)!} \\
S_{99}=(\frac{1}{1!}-\bcancel{\frac{1}{2!}})+(\bcancel{\frac{1}{2!}}-\bcancel{\frac{1}{3!}})+\cdots+(\bcancel{\frac{1}{99!}}-\frac{1}{100!})=1-\frac{1}{100!} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $S_{99}=1-\frac{1}{100!}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=f(n) & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_2-general-term}{\textsf{definition of general term}} \\
  \frac{n}{(n+1)!}=\frac{1}{n!}-\frac{1}{(n+1)!} & \textsf{factorial fraction telescoping identity} \\
  S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_3-sum-of-the-first-terms}{\textsf{sum of first }n\textsf{ terms}} \\
  \end{array}
  >$

  :::
---

### $\fbox{8}\:$Find the value of $\small S_{99}=1\times1!+2\times2!+3\times3!+\cdots+99\times99!$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 100!-2 &
\textsf{(B)} \: 100!+1 &
\textsf{(C)} \: 100!-1 &
\textsf{(D)} \: 99!-1 &
\textsf{(E)} \: 99!-2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_n=n \cdot n!=(n+1)!-n! & n \times n! = (n+1)!-n! \\
S_{99}=(\bcancel{2!}-1!)+(\bcancel{3!}-\bcancel{2!})+\cdots+(100!-\bcancel{99!})=100!-1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $S_{99}=100!-1$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_n=f(n) & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_2-general-term}{\textsf{definition of general term}} \\
  n \times n! = (n+1)!-n! & \textsf{factorial difference telescoping identity} \\
  S_n=a_1+a_2+\cdots+a_n=\sum_{i=1}^{n}a_i & \href{/math/0%20Core%20Courses/18%20Chapter5%20sequences%20Module1%20definition%20of%20sequences.html#_3-sum-of-the-first-terms}{\textsf{sum of first }n\textsf{ terms}} \\
  \end{array}
  >$

  :::
---


| Platform    | Course                                                                                       | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=qzTFCMGohoM&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvry?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95bz-19-chapter5-sequence-module1-sequence-definition.html)    |                                                                   |
