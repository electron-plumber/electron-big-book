---
title: Chapter10 probability preliminary
lang: en-US
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=Taex9rTMDq8&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuai?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95id-33-chapter10-probability-preliminary.html)                |                                                                   |


# Module 10–01 Classical Probability Model

## 1.Random Experiment
- If an experiment satisfies the following conditions:  
  __(1)__ The experiment can be __repeated__ under the same conditions;  
  __(2)__ The experiment __has many possible outcomes__;  
  __(3)__ The result of the experiment __can't be determined in advance__, only __the set of all possible outcomes is known__.  
- Such an experiment is called a random experiment, abbreviated as $E$.

## 2. Random Event
- An event __that may or may not occur__ under certain conditions is called __a random event__. It is commonly denoted as $\boldsymbol{A, B, C},\cdots$.
- Event = Experiment + Specified outcome  
  - $=$ Specified outcome: occurrence (success)  
  - $\ne$ Specified outcome: non-occurrence (failure)  
    - $\lt \lor \gt$ Specified outcome: non-occurrence (failure)

## 3. Basic Event, Certain Event, Impossible Event
- __A single-point set composed of one sample point__ is called __a basic event__,
  also known as __a sample point__.
  __The sample space contains all sample points__.
- ###### An event that always occurs in every trial is called __a certain event__.
- ###### An event that never occurs in any trial is called __an impossible event__. denoted as $\varnothing$.
- Note: Every possible outcome (event $A$) that may occur in a single trial is called __a basic event__.
  These three types of events __occur under certain conditions__,
  and when __the conditions change__,
  __the nature of the event may also change__.


## 4. Definition of Probability
- __The measure of the likelihood__ of a random event $A$ occurring is called __the probability of event $\boldsymbol{A}$__,
  denoted as $\boldsymbol{P(A)}$.


## 5. Properties of Probability
- ###### Let $A_1,A_2,\cdots,A_n$ be a finite set of __mutually exclusive events__, then $\boldsymbol{P(\bigcup_{i=1}^n A_i)=\sum_{i=1}^{n}P(A_i)}$.
- ###### Let $\overline{A}$ be the complement of event $A$, then $\boldsymbol{P(\overline{A})=1-P(A)}$.


## 6. Classical Probability Model
- A random experiment $E$ has the following two characteristics:   
  __(1)__ The elements of the sample space (i.e., basic events) are __finite in number__ (__countable__);   
  __(2)__ $\boldsymbol{P(A)+P(\overline{A})=1}$ Each basic event has __an equal probability of occurring__ (__fair__).    
    
- Such an experiment is called a classical probability experiment.  

## 7. Calculation Formula
- In __the classical probability model__, the probability of event $A$ is defined as    
  $P(A)=\frac{k=\textsf{number of basic events contained in event }A}{n=\textsf{total number of basic events in the sample space}}$

## 8. Understanding
- For classical probability,
  it is necessary to use permutations and combinations to calculate __the number of cases for both the numerator and the denominator__,
  and then __express the probability as a ratio__.
  __The denominator__ in a classical probability model corresponds to __the total number of possible outcomes__,
  which is __relatively easy to calculate__,
  while __the numerator__,
  representing __the favorable outcomes__,
  is often __more challenging to determine__.

## 9.Focus 1
__The basic concepts__
- Analyze based on __the definition of events__,
  especially since __the certain event__ and __the impossible event__ are __two special cases__.


::: wrap
### $\fbox{1}\:$Which of the following events is a certain event $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{turning on the TV, and it is broadcasting an advertisement} & \\
\textsf{(B)} \: \textsf{opening the math book, and landing exactly on page }50 & \\
\textsf{(C)} \: \textsf{tossing a fair coin, and it is landing heads up} & \\
\textsf{(D)} \: \textsf{a day has }24\textsf{ hours} & \\
\textsf{(E)} \: \textsf{winning the lottery} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(\textsf{A}) \: \textsf{random event} & ❌\;\\
(\textsf{B}) \: \textsf{random event} & ❌\;\\
(\textsf{C}) \: \textsf{random event} & ❌\;\\
(\textsf{D}) \: \textsf{certain event} & ✅\;\\
(\textsf{E}) \: \textsf{random event} & ❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $D\;✅\;$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#an-event-that-always-occurs-in-every-trial-is-called-a-certain-event}{\textsf{certain event}} \\
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_2-random-event}{\textsf{random event}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{2}\:$Which of the following events is an impossible event $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{tossing a fair coin twice, and getting at least one tails} & \\
\textsf{(B)} \: \textsf{it will snow in cupertino this winter} & \\
\textsf{(C)} \: \textsf{tossing two fair dice, and the sum of the numbers on top being }1 & \\
\textsf{(D)} \: \textsf{a spinner is divided into }6\textsf{ sections, arranged as red, white, white, red, red, white.} \\
\quad\;\;\, \textsf{the pointer stops on the red section} & \\
\textsf{(E)} \: \textsf{a flight from sonoma to cupertino will be delayed} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(\textsf{A}) \: \textsf{random event} & ❌\;\\
(\textsf{B}) \: \textsf{random event} & ❌\;\\
(\textsf{C}) \: \textsf{impossible event} & ✅\;\\
(\textsf{D}) \: \textsf{random event} & ❌\;\\
(\textsf{E}) \: \textsf{random event} & ❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $C\;✅\;$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#an-event-that-never-occurs-in-any-trial-is-called-an-impossible-event-denoted-as}{\textsf{impossible event}} \\
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_2-random-event}{\textsf{random event}} \\
  \end{array}
  >$

  :::
---

## 10.Sampling Methods
- ###### __Sequential sampling__ (by default, one element is taken each time)  
  - With replacement: __the sample remains unchanged__.  
  - Without replacement: __the sample decreases progressively__.  
- ###### Single sampling: __the order of the selected elements doesn't matter__.  


## 11.Sampling with Numbered Samples
- When __numbered operations are involved__, it is often analyzed __using the enumeration method__.   


## 12.Focus 2
__The sampling methods__  
- The sampling methods are divided into __sequential sampling__
  (with replacement, without replacement) and __single sampling__.
  In __sequential sampling, the order matters__, while in __single sampling, the order doesn't__.
  __The probability of sequential sampling without replacement is equal to the probability of single sampling__.


::: wrap
### $\fbox{3}\:$A bag contains $\small 8$ balls of the same size and shape, $\small 5$ black balls and $\small 3$ white balls.
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{if two balls are randomly drawn from the bag,} & \\
\quad\;\, \textsf{find the probability that both drawn balls are black} \\
\textsf{(2)} \: \textsf{if two balls are drawn without replacement, one ball at a time,} & \\
\quad\;\, \textsf{find the probability that both drawn balls are black} \\
\textsf{(3)} \: \textsf{if two balls are drawn with replacement, one ball at a time,} & \\
\quad\;\, \textsf{find the probability that at least one of the drawn balls is black} \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(\textsf{1}) \: P_1=\frac{C_5^2}{C_8^2}=\frac{\frac{5\times\bcancel{4}}{\bcancel{2}\times1}}{\frac{\bcancel{8}\times7}{\bcancel{2}\times1}}=\frac{5\times\bcancel{2}}{\bcancel{4}\times7}=\frac{5}{2\times7}=\frac{5}{14} \\
(\textsf{2}) \: P_2=\frac{C_5^1C_4^1}{C_8^1C_7^1}=\frac{5\times\bcancel{4}}{\bcancel{8}\times7}=\frac{5}{2\times7}=\frac{5}{14} \\
\textsf{use the complement (no black balls) for simpler calculation} \\
(\textsf{3}) \: P_3=1-\frac{C_3^1C_2^1}{C_8^1C_8^1}=1-\frac{3\times\bcancel{2}}{\bcancel{8}\times8}=1-\frac{3}{4\times8}=\frac{32}{32}-\frac{3}{32}=\frac{29}{32}  \\
\end{array}
$  
:::  
#### Conclusion
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#single-sampling-the-order-of-the-selected-elements-doesn-t-matter}{\textsf{single sampling}} \\
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#sequential-sampling-by-default-one-element-is-taken-each-time}{\textsf{sequential sampling}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  P(A)+P(\overline{A})=1 & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_6-classical-probability-model}{\textsf{classical probability model}} \\
  P(\overline{A})=1-P(A) & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#let-be-the-complement-of-event-then}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
- Note: for probability problems, it is assumed that the samples are distinct by default.    
---

## 13.Focus 3
__The ball drawing score__  
- Discuss __the situation of the drawn samples__ based on __the score__ and then write __the probability expression__.


::: wrap
### $\fbox{4}\:$A bag contains $\small 6$ red balls and $\small 4$ black balls. Four balls are randomly drawn from the bag. If drawing a red ball scores $\small 2$ points and drawing a black ball scores $\small 1$ point, what is the probability that the total score is no more than $\small 6$ points $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{23}{42} &
\textsf{(B)} \: \frac{4}{7} &
\textsf{(C)} \: \frac{25}{42} &
\textsf{(D)} \: \frac{13}{21} &
\textsf{(E)} \: \frac{11}{21} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\le6\Longleftrightarrow\textsf{no more than 6 points} \\
\begin{cases}
4\textsf{ black balls}: 4\textsf{ points} \\
3\textsf{ black} + 1\textsf{ red ball}: 5\textsf{ points} \\
2\textsf{ black} + 2\textsf{ red balls}: 6\textsf{ points} \\
\end{cases} \\
P=\frac{C_4^4+C_4^3C_6^1+C_4^2C_6^2}{C_{10}^{4}} \\
\frac{1+\frac{4\times\bcancel{3}\times\bcancel{2}}{\bcancel{3}\times\bcancel{2}\times1}\cdot6+\frac{\bcancel{4}\times3}{\bcancel{2}\times1}\cdot\frac{\bcancel{6}\times5}{\bcancel{2}\times1}}{\frac{10\times\bcancel{9}\times\bcancel{8}\times7}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}}=\frac{1+4\times6+\frac{2\times3}{1}\times\frac{3\times5}{1}}{\frac{10\times3\times7}{1}}=\frac{115}{210}=\frac{23}{42} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $P=\frac{23}{42}$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(\bigcup_{i=1}^n A_i) & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#let-be-a-finite-set-of-mutually-exclusive-events-then}{\textsf{union of disjoint events}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 14.Focus 4
__The sampling with numbers__   
- When dealing with __numbered sampling__,
  it often involves operations with __numbers__,
  which can be analyzed using __enumeration methods__.


::: wrap
### $\fbox{5}\:$A bag contains eight balls, each with a distinct number: $1,2,3,4,5,6,7,8$. One ball is drawn from the bag each time with replacement, and two draws are made. What is the probability that the sum of the numbers on the two drawn balls is at least $\small 15\,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{32} &
\textsf{(B)} \: \frac{1}{64} &
\textsf{(C)} \: \frac{2}{32} &
\textsf{(D)} \: \frac{3}{64} &
\textsf{(E)} \: \frac{5}{64} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\ge15\Longleftrightarrow\textsf{at least 15} \\
?+?\ge15 & \textsf{with replacement} \\
\begin{cases}
7+8=15 \\
8+7=15 \\
8+8=16 \\
\end{cases} \\
P=\frac{3}{C_8^1C_8^1}=\frac{3}{8\times8}=\frac{3}{64} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $P=\frac{3}{64}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_11-sampling-with-numbered-samples}{\textsf{sampling with numbers enumeration method}} \\
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#sequential-sampling-by-default-one-element-is-taken-each-time}{\textsf{sequential sampling}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is sequential sampling without replacement or single sampling     
  ::: wrap  
  >$
  \begin{array}{ll}
  ?+?\ge15 & \textsf{without replacement} \\
  \begin{cases}
  7+8=15 \\
  8+7=15 \\
  \end{cases} \\
  P=\frac{2}{C_8^1C_7^1}=\frac{2}{8\times7}=\frac{2}{56}=\frac{1}{28} \\
  ?+?\ge15 & \textsf{single sampling} \\
  \begin{cases}
  7+8=15 \lor 8+7=15 \\
  \end{cases} \\
  P=\frac{1}{C_8^2}=\frac{1}{\frac{\bcancel{8}\times7}{\bcancel{2}\times1}}=\frac{1}{4\times7}=\frac{1}{28} \\
  \end{array}
  >$

  :::  
---

::: wrap
### $\fbox{6}\:$From $\small 10$ balls numbered $\small 1,2,\cdots,10$, all the same size, $\small 4$ balls are drawn at random. What is the probability that the largest number among the $\small 4$ balls is $\small 6\,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{84} &
\textsf{(B)} \: \frac{3}{5} &
\textsf{(C)} \: \frac{2}{5} &
\textsf{(D)} \: \frac{1}{21} &
\textsf{(E)} \: \frac{1}{20} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{largest number is }6
\begin{cases}
6 \\
1\sim5 \\
\end{cases} \\
4\textsf{ balls taken} - 1\textsf{ ball numbered 6} = 3\textsf{ balls} \\
P=\frac{C_5^3}{C_{10}^4}=\frac{\frac{5\times\bcancel{4}\times\bcancel{3}}{\bcancel{3}\times\bcancel{2}\times1}}{\frac{10\times\bcancel{9}\times\bcancel{8}\times7}{\bcancel{4}\times\bcancel{3}\times\bcancel{2}\times1}}\frac{\bcancel{5}\times\bcancel{2}}{\bcancel{10}\times3\times7}=\frac{1}{21} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $P=\frac{1}{21}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap  
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_11-sampling-with-numbered-samples}{\textsf{sampling with numbers enumeration method}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
- Rules for when the largest or smallest number is $k$  
  ::: wrap  
  >$
  \begin{array}{ll}
  \textsf{largest number is }k
  \begin{cases}
  k\textsf{ must be included} \\
  \textsf{all others are less than }k \\
  \end{cases} \\
  \textsf{smallest number is }k
  \begin{cases}
  k\textsf{ must be included} \\
  \textsf{all others are greater than }k \\
  \end{cases} \\
  \end{array}
  >$

  :::  
---
