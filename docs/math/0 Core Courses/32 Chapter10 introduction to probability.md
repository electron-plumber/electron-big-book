---
title: Chapter10 Introduction to Probability
lang: en-US
---


# Module 10–01 Classical Probability Model

## 1.Random Experiment
- If an experiment satisfies the following conditions:  
  __(1)__ The experiment can be __repeated__ under the same conditions;  
  __(2)__ The experiment __has many possible outcomes__;  
  __(3)__ The result of the experiment __can't be determined in advance__, only __the set of all possible outcomes is known__.  
- Such an experiment is called a random experiment, abbreviated as $E$.

## 2. Random Event
- An event __that may or may not occur__ under certain conditions is called __a random event__. It is commonly denoted as $\boldsymbol{A, B, C},\cdots$.
- Event = experiment + specified outcome  
  - $=$ specified outcome: occurrence (success).  
  - $\ne$ specified outcome: non-occurrence (failure).  
    - $\lt \lor \gt$ specified outcome: non-occurrence (failure).

## 3. Basic Event, Certain Event, Impossible Event
- __A single-point set composed of one sample point__ is called __a basic event__,
  also known as __a sample point__.
  __The sample space contains all sample points__.
- ###### An event that always occurs in every trial is called __a certain event__.
- ###### An event that never occurs in any trial is called __an impossible event__. denoted as $\varnothing$.
- Note: every possible outcome (event $A$) that may occur in a single trial is called __a basic event__.
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
::: wrap  
- In __the classical probability model__, the probability of event $A$ is defined as    
  $P(A)=\frac{k=\textsf{number of basic events contained in event }A}{n=\textsf{total number of basic events in the sample space}}$
:::  

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


### $\fbox{1}\:$Which of the following events is a certain event $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{turning on the tv, and it is broadcasting an advertisement} & \\
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
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#an-event-that-always-occurs-in-every-trial-is-called-a-certain-event}{\textsf{certain event}} \\
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_2-random-event}{\textsf{random event}} \\
  \end{array}
  >$

  :::
---

### $\fbox{2}\:$Which of the following events is an impossible event $\small \,\mathpunct{?}$.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#an-event-that-never-occurs-in-any-trial-is-called-an-impossible-event-denoted-as}{\textsf{impossible event}} \\
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_2-random-event}{\textsf{random event}} \\
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


### $\fbox{3}\:$A bag contains $\small 8$ balls of the same size and shape, $\small 5$ black balls and $\small 3$ white balls.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#single-sampling-the-order-of-the-selected-elements-doesn-t-matter}{\textsf{single sampling}} \\
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#sequential-sampling-by-default-one-element-is-taken-each-time}{\textsf{sequential sampling}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  P(A)+P(\overline{A})=1 & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_6-classical-probability-model}{\textsf{cpm characteristics}} \\
  P(\overline{A})=1-P(A) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#let-be-the-complement-of-event-then}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
- Note: for probability problems, it is assumed that the samples are distinct by default.    
---

## 13.Focus 3
__The ball drawing score__  
- Discuss __the situation of the drawn samples__ based on __the score__ and then write __the probability expression__.


### $\fbox{4}\:$A bag contains $\small 6$ red balls and $\small 4$ black balls. Four balls are randomly drawn from the bag. If drawing a red ball scores $\small 2$ points and drawing a black ball scores $\small 1$ point, what is the probability that the total score is no more than $\small 6$ points $\small \,\mathpunct{?}$.
::: wrap  
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
  P(\bigcup_{i=1}^n A_i) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#let-be-a-finite-set-of-mutually-exclusive-events-then}{\textsf{union of disjoint events}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
  \end{array}
  >$

  :::
---

## 14.Focus 4
__The sampling with numbers__   
- When dealing with __numbered sampling__,
  it often involves operations with __numbers__,
  which can be analyzed using __enumeration methods__.


### $\fbox{5}\:$A bag contains eight balls, each with a distinct number: $1,2,3,4,5,6,7,8$. One ball is drawn from the bag each time with replacement, and two draws are made. What is the probability that the sum of the numbers on the two drawn balls is at least $\small 15\,\mathpunct{?}$.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_11-sampling-with-numbered-samples}{\textsf{sampling with numbers enumeration method}} \\
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#sequential-sampling-by-default-one-element-is-taken-each-time}{\textsf{sequential sampling}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
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


### $\fbox{6}\:$From $\small 10$ balls numbered $\small 1,2,\cdots,10$, all the same size, $\small 4$ balls are drawn at random. What is the probability that the largest number among the $\small 4$ balls is $\small 6\,\mathpunct{?}$.
::: wrap  
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
  & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_11-sampling-with-numbered-samples}{\textsf{sampling with numbers enumeration method}} \\
  P(A) = \frac{k}{n} & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_7-calculation-formula}{\textsf{classical probability model formula}} \\
  C_n^m=\frac{n(n-1)\cdots(n-m+1)}{m(m-1)\cdots\,\boldsymbol{\cdot} 2\boldsymbol{\cdot} 1} & \href{/math/0%20Core%20Courses/31%20Chapter9%20permutations%20and%20combinations%20Module1%20basic%20theoretical%20knowledge.html#formula-for-the-number-of-combinations}{\textsf{combination formula}} \\
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

# Module 10–02 Independent Events

## 1.Concept of Independent Events
- If the occurrence of either of two events __doesn't affect the probability of the other__,
  then __these two events are said to be independent__.  

## 2.Mathematical Definition
- If $\boldsymbol{P(AB)=P(A)P(B)}$, then events $A$ and $B$ are __said to be independent__.

## 3.Understanding
- The probability of independent events __occurring simultaneously__ is __the product of the probabilities of each event occurring__.  
- __Example__   
  ::: wrap    
  $
  \begin{array}{ll}
  A: 0.8 \quad B: 0.9 \\
  0.8\times0.9=0.72 & \textsf{both }A\textsf{ and }B\textsf{ succeed} \\
  \end{array}
  $
  :::   

## 4.Common Conclusions  
::: wrap  
- ###### If events $A_1,A_2,\cdots,A_n$ are __mutually independent__, then __the probability that all $\boldsymbol{n}$ events occur__ is the product of their individual probabilities: $P(A_1A_2 \cdots A_n)=P(A_1) \cdot P(A_2)\boldsymbol{\cdot}\cdots\boldsymbol{\cdot}P(A_n)$.
- If events $A_1,A_2,\cdots,A_n$ are __mutually independent__,
  then __the probability that none of them occur__ is the product of their individual non-occurrence probabilities:
  $P(\overline{A_1}\:\overline{A_2} \cdots \overline{A_n})=P(\overline{A_1}) \cdot P(\overline{A_2})\boldsymbol{\cdot}\cdots\boldsymbol{\cdot}P(\overline{A_n})$.
- If events $A_1,A_2,\cdots,A_n$ are __mutually independent__,
  then __the probability that at least one of them occurs__ can be found __using the complement rule__.
  It equals __$\boldsymbol{1}$ minus the product of the probabilities that none of them occur__:
  $P(A_1+A_2+\cdots+A_n)=1-P(\overline{A_1}) \cdot P(\overline{A_2})\boldsymbol{\cdot}\cdots\boldsymbol{\cdot}P(\overline{A_n})$.
:::  

## 5.Focus 1
__The template for two independent events__  
- The probabilities of success for $A$ and $B$ are $P_1$ and $P_2$, respectively:   
  __(1)__ The probability __that both $\boldsymbol{A}$ and $\boldsymbol{B}$ succeed__: $P_1 \cdot P_2$;  
  __(2)__ The probability __that neither $\boldsymbol{A}$ nor $\boldsymbol{B}$ succeeds__: $(1-P_1)\cdot(1-P_2)$;  
  ###### __(3)__ The probability __that at least one of $\boldsymbol{A}$ or $\boldsymbol{B}$ succeeds__: $1-(1-P_1)\cdot(1-P_2)$;   
  ###### __(4)__ The probability __that exactly one of $\boldsymbol{A}$ or $\boldsymbol{B}$ succeeds__: $P_1 \cdot (1-P_2)+(1-P_1) \cdot P_2$.  


### $\fbox{7}\:\small A$ and $\small B$ participate in a basketball shooting game. Given that the probabilities of $\small A$ and $\small B$ making a shot are $\small 0.6$ and $\small 0.75$ respectively, if $\small A$ and $\small B$ each take one shot, what is the probability that exactly one of them makes the shot $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.4 &
\textsf{(B)} \: 0.45 &
\textsf{(C)} \: 0.5 &
\textsf{(D)} \: 0.55 &
\textsf{(E)} \: 0.65 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
P=0.6\times(1-0.75)+(1-0.6)\times0.75 \\
0.6\times0.25+0.4\times0.75=0.15+0.30=0.45 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $P=0.45$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_1 \cdot (1-P_2)+(1-P_1) \cdot P_2 & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_4-the-probability-that-exactly-one-of-or-succeeds}{\textsf{exactly-one succeed probability}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 2
__The template for three independent events__  
::: wrap   
- The probabilities of success for $A,B$, and $C$ are $P_1,P_2$, and $P_3$, respectively:  
  __(1)__ The probability __that all three succeed__: $P_1 \cdot P_2 \cdot P_3$;  
  __(2)__ The probability __that none succeed__: $(1-P_1) \cdot (1-P_2) \cdot (1-P_3)$;  
  ###### __(3)__ The probability __that at least one succeeds__: $1-(1-P_1) \cdot (1-P_2) \cdot (1-P_3)$;  
  __(4)__ The probability __that exactly two succeed__: $P_1 \cdot P_2 \cdot (1-P_3) + P_1 \cdot (1-P_2) \cdot P_3 + (1-P_1) \cdot P_2 \cdot P_3$;  
  ###### __(5)__ The probability __that at most two succeed__: $1-P_1 \cdot P_2 \cdot P_3$.  
:::   

### $\fbox{8}\:$In a set-point shooting contest involving $A,B$, and $C$, the shooting accuracies are $0.9,0.8$, and $0.7$, respectively. Each person shoots once. What is the probability that at most two of them make the shot $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.456 &
\textsf{(B)} \: 0.496 &
\textsf{(C)} \: 0.516 &
\textsf{(D)} \: 0.528 &
\textsf{(E)} \: 0.542 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
P=1-0.9\times0.8\times0.7=1-0.504=0.496 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $P=0.496$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  1-P_1 \cdot P_2 \cdot P_3 & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_5-the-probability-that-at-most-two-succeed}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
---

## 7.Focus 3
__The implicit "at least one" template__  
- In problems involving __code-breaking__, __fire alarms__, __hitting enemy aircraft__, or __winning a prize__,
  the statement may not explicitly say __at least one__, but it is __implied__.
  In such cases, the problem should be solved __using the complement approach__.

### $\fbox{9}\:$A department assigns $\small A$ and $\small B$ to decrypt a code. Whether each can decrypt the code is independent. The probabilities that $\small A$ and $\small B$ can independently decrypt the code are $\small \frac{1}{3}$ and $\small \frac{1}{4}$, respectively.
#### (1) What is the probability that exactly one of them decrypts the code $\small \,\mathpunct{?}$.  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{6} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{1}{5} &
\textsf{(D)} \: \frac{5}{12} &
\textsf{(E)} \: \frac{7}{12} & \\
\end{array}
$  
:::  
#### (2) What is the probability that they decrypt the code $\small \,\mathpunct{?}$.  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{4} &
\textsf{(B)} \: \frac{1}{3} &
\textsf{(C)} \: \frac{1}{2} &
\textsf{(D)} \: \frac{3}{5} &
\textsf{(E)} \: \frac{2}{3} & \\
\end{array}
$  
:::  
#### Solution
::: wrap  
$
\begin{array}{ll}
(1)\;P_1=\frac{1}{3}\times(1-\frac{1}{4})+(1-\frac{1}{3})\times\frac{1}{4} \\
\frac{1}{3}\times\frac{3}{4}+\frac{2}{3}\times\frac{1}{4}=\frac{3}{12}+\frac{2}{12}=\frac{5}{12} \\
(2)\;P_2=1-(1-\frac{1}{3})\times(1-\frac{1}{4}) & \textsf{at least one success} \\
1-\frac{2}{3}\times\frac{3}{4}=1-\frac{6}{12}=\frac{6}{12}=\frac{1}{2} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $P_1=\frac{5}{12},P_2=\frac{1}{2}$, so choose $(1)\rightarrow D,(2)\rightarrow C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  P_1 \cdot (1-P_2)+(1-P_1) \cdot P_2 & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_4-the-probability-that-exactly-one-of-or-succeeds}{\textsf{exactly-one succeed probability}} \\
  1-(1-P_1)\cdot(1-P_2) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_3-the-probability-that-at-least-one-of-or-succeeds}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
---

### $\fbox{10}\:$An archives building is equipped with three smoke detectors, whose probabilities of triggering an alarm when there is smoke or fire are $0.9,0.8$, and $0.7$, respectively. If smoke or fire occurs, what is the probability that an alarm will be triggered $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.996 &
\textsf{(B)} \: 0.995 &
\textsf{(C)} \: 0.994 &
\textsf{(D)} \: 0.96 &
\textsf{(E)} \: 0.94 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
P=1-(1-0.9)\times(1-0.8)\times(1-0.7) & \textsf{at least one success} \\
1-0.1\times0.2\times0.3=1-0.006=0.994 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $P=0.994$, so choose $C$.  

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  1-(1-P_1) \cdot (1-P_2) \cdot (1-P_3) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_3-the-probability-that-at-least-one-succeeds}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
---


### $\fbox{11}\:$There are two anti-aircraft guns, each with a probability of $\small 0.6$ of hitting an airplane.
#### (1) What is the probability that the airplane will be hit if both guns fire one shell simultaneously $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0.64 &
\textsf{(B)} \: 0.72 &
\textsf{(C)} \: 0.82 &
\textsf{(D)} \: 0.84 &
\textsf{(E)} \: 0.86 & \\
\end{array}
$
:::  
#### (2) If an enemy aircraft intrudes, and we require at least a $\small 99\%$ probability of hitting it, what is the minimum number of anti-aircraft guns needed $\small \,\mathpunct{?}\,(2^{10}=1024)$.
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
(1)\;P_1=1-(1-0.6)\times(1-0.6) \\
1-0.4\times0.4=1-0.16=0.84 \\
(2)\;P_2=1-(1-0.6)^n \ge 0.99 & \textsf{let }n\textsf{ number of aa guns required} \\
1-0.4^n \ge 0.99 \\
-0.4^n \ge 0.99-1 \\
-0.4^n \ge -0.01 \\
0.4^n \le 0.01 \\
2^{10}=4^5=1024 \\
0.4^5=0.01024 \gt 0.01 \Longrightarrow n\ge6
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $P_1=0.84,n\ge6$, so choose $(1)\rightarrow D,(2)\rightarrow C$.

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  1-(1-P_1) \cdot (1-P_2) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_3-the-probability-that-at-least-one-of-or-succeeds}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
---

## 8.Focus 4
__The competition template__  
- For __competition problems__,
  first draw __the result diagram__ for __each round of the competition__,
  then write __the corresponding probabilities__.


### $\fbox{12}\:$In a guessing game with $\small 5$ rounds, if a player passes $\small 2$ consecutive rounds, they're considered to have successfully completed the challenge. The probability of Mike passing each round is $\small \frac{1}{2}$. What is the probability that he successfully completes the challenge $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{8} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{3}{8} &
\textsf{(D)} \: \frac{1}{2} &
\textsf{(E)} \: \frac{19}{32} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
1\quad2\quad3\quad4\quad5 \\
✅\quad✅ \\
❌\quad✅\quad✅ \\
❌\quad❌\quad✅\quad✅ \\
✅\quad❌\quad✅\quad✅ \\
❌\quad✅\quad❌\quad✅\quad✅ \\
✅\quad❌\quad❌\quad✅\quad✅ \\
❌\quad❌\quad❌\quad✅\quad✅ \\
P=(\frac{1}{2})^2+(\frac{1}{2})^3+(\frac{1}{2})^4\times2+(\frac{1}{2})^5\times3 \\
\frac{1}{4}+\frac{1}{8}+\frac{1}{16}\times2+\frac{1}{32}\times3 \\
\frac{1}{4}+\frac{1}{8}+\frac{2}{16}+\frac{3}{32} \\
\frac{8}{32}+\frac{4}{32}+\frac{4}{32}+\frac{3}{32}=\frac{19}{32} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $P=\frac{19}{32}$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(\bigcup_{i=1}^n A_i) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#let-be-a-finite-set-of-mutually-exclusive-events-then}{\textsf{union of disjoint events}} \\
  \end{array}
  >$

  :::
---


### $\fbox{13}\:\small A, B$, and $\small C$ are participating in a competition where two players compete in each round with no draws; the probability of $\small A$ defeating $\small B$ is $\small \frac{3}{5}$, $\small A$ defeating $\small C$ is $\small \frac{4}{5}$, and $\small B$ defeating $\small C$ is $\small \frac{3}{5}$, with the rule that the first round is between $\small A$ and $\small B$, and the winner of each round competes with the player who didn't participate in that round in the next round, and the competition ends when one player wins two rounds.
#### (1) What is the probability that $\small A$ wins the competition after only two rounds $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7}{25} &
\textsf{(B)} \: \frac{9}{25} &
\textsf{(C)} \: \frac{12}{25} &
\textsf{(D)} \: \frac{18}{25} &
\textsf{(E)} \: \frac{19}{25} & \\
\end{array}
$
:::  
#### (2) What is the probability that the competition ends after only two rounds $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7}{25} &
\textsf{(B)} \: \frac{9}{25} &
\textsf{(C)} \: \frac{12}{25} &
\textsf{(D)} \: \frac{18}{25} &
\textsf{(E)} \: \frac{19}{25} & \\
\end{array}
$
:::  
#### (3) What is the probability that $\small A$ wins the entire competition $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{8} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{3}{8} &
\textsf{(D)} \: \frac{4}{8} &
\textsf{(E)} \: \frac{3}{5} & \\
\end{array}
$
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve problem __(1)__ by drawing a competition tree diagram   
  ![Question independent events figure Q-13 solve-1.svg](../../public/math/Core%20Courses/Question%20independent%20events%20figure%20Q-13%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  P=\frac{3}{5} & A\textsf{ defeats }B \\
  P=\frac{4}{5} & A\textsf{ defeats }C \\
  P_1=\frac{3}{5}\times\frac{4}{5}=\frac{12}{25} \\
  \end{array}
  $  
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve problem __(2)__ by drawing a competition tree diagram  
  ![Question independent events figure Q-13 solve-2.svg](../../public/math/Core%20Courses/Question%20independent%20events%20figure%20Q-13%20solve-2.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  P=\frac{3}{5} & A\textsf{ defeats }B \\
  P=\frac{4}{5} & A\textsf{ defeats }C \\
  P=\frac{3}{5} & B\textsf{ defeats }C \\
  P_2=\frac{3}{5}\times\frac{4}{5}+\frac{2}{5}\times\frac{3}{5}=\frac{12}{25}+\frac{6}{25}=\frac{18}{25} \\
  \end{array}
  $  
  :::   
- $\textcolor{#228B22}{\fbox{3}}\:$Solve problem __(3)__ by drawing a competition tree diagram  
  ![Question independent events figure Q-13 solve-3.svg](../../public/math/Core%20Courses/Question%20independent%20events%20figure%20Q-13%20solve-3.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  P=\frac{3}{5} & A\textsf{ defeats }B \\
  P=\frac{4}{5} & A\textsf{ defeats }C \\
  P=\frac{3}{5} & B\textsf{ defeats }C \\
  P_3=\frac{3}{5}\times\frac{4}{5}+\frac{3}{5}\times\frac{1}{5}\times\frac{3}{5}\times\frac{3}{5}+\frac{2}{5}\times\frac{2}{5}\times\frac{4}{5}\times\frac{3}{5} \\
  \frac{12}{25}+\frac{27}{625}+\frac{48}{625} \\
  \frac{300}{625}+\frac{27}{625}+\frac{48}{625}=\frac{375}{625}=\frac{3}{5} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $P_1=\frac{12}{25},P_2=\frac{18}{25},P_3=\frac{3}{5}$,
  > so choose $(1)\rightarrow C,(2)\rightarrow D,(3)\rightarrow E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(A_1A_2 \cdots A_n)=P(A_1) \cdot P(A_2)\boldsymbol{\cdot}\cdots\boldsymbol{\cdot}P(A_n) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#if-events-are-mutually-independent-then-the-probability-that-all-events-occur-is-the-product-of-their-individual-probabilities}{\textsf{all succeed probability}} \\
  P(\bigcup_{i=1}^n A_i) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#let-be-a-finite-set-of-mutually-exclusive-events-then}{\textsf{union of disjoint events}} \\
  \end{array}
  >$

  :::
- Competition format (three main types of questions)     
  ::: wrap  
  > 1. Fixed number of rounds, fixed players (easy).
  > 2. Fixed number of rounds, __variable players__ (medium).
  > 3. __Variable number of rounds__, fixed players (hard).

  :::  
---

## 9.Focus 5
__The circuit template__    
- For a series circuit, the probability that the system functions normally is equal to the product of the probabilities that each circuit functions normally.   
  - Normal (all working): $P_1 \times P_2 \times P_3$  
  ![Circuit series system probability.svg](../../public/math/Core%20Courses/Circuit%20series%20system%20probability.svg)  
- For a parallel circuit, the probability that the system functions normally is equal to 1 minus the product of the probabilities that each circuit doesn't function normally.  
  - At least one normal (working): $1-(1-P_1)(1-P_2)(1-P_3)$  
  ![Circuit parallel system probability.svg](../../public/math/Core%20Courses/Circuit%20parallel%20system%20probability.svg)  


### $\fbox{14}\:$Figure 10–1, the letters represent the types of components, and components with the same letter but different subscripts belong to the same type. Given that the probabilities of components $\small A, B, C$, and $\small D$ functioning normally are $\small p,q,r$, and $s$ respectively, and the components work independently, what is the probability that the system functions normally $\small \,\mathpunct{?}$.
![Question independent events figure 10-1.svg](../../public/math/Core%20Courses/Question%20independent%20events%20figure%2010-1.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: s^2pqr &
\textsf{(B)} \: s^2(p+q+r) &
\textsf{(C)} \: s^2(1-pqr) & \\
\textsf{(D)} \: 1-(1-pqr)(1-s)^2 &
\textsf{(E)} \: s^2[1-(1-p)(1-q)(1-r)] & \\
\end{array}
$  
:::  
#### Solution
- Show known conditions  
  ![Question independent events figure 10-1 solve-1.svg](../../public/math/Core%20Courses/Question%20independent%20events%20figure%2010-1%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  P=s^2\times[1-(1-p)(1-q)(1-r)] \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $P=s^2\times[1-(1-p)(1-q)(1-r)]$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  P(A_1A_2 \cdots A_n)=P(A_1) \cdot P(A_2)\boldsymbol{\cdot}\cdots\boldsymbol{\cdot}P(A_n) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#if-events-are-mutually-independent-then-the-probability-that-all-events-occur-is-the-product-of-their-individual-probabilities}{\textsf{all succeed probability}} \\
  1-(1-P_1) \cdot (1-P_2) \cdot (1-P_3) & \href{/math/0%20Core%20Courses/33%20Chapter10%20probability%20preliminary.html#_3-the-probability-that-at-least-one-succeeds}{\textsf{complementary probability}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=Taex9rTMDq8&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuai?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95id-33-chapter10-probability-preliminary.html)                |                                                                   |

