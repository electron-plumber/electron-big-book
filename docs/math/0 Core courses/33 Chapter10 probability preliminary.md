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

## 1.Random experiment
- If an experiment satisfies the following conditions:  
  __(1)__ The experiment can be __repeated__ under the same conditions;  
  __(2)__ The experiment __has many possible outcomes__;  
  __(3)__ The result of the experiment __cannot be determined in advance__, only __the set of all possible outcomes is known__.  
- Such an experiment is called a random experiment, abbreviated as $E$.

## 2. Random event
- An event __that may or may not occur__ under certain conditions is called __a random event__. It is commonly denoted as $\boldsymbol{A, B, C},\cdots$.
- Event = Experiment + Specified outcome  
  - $=$ Specified outcome: occurrence (success)  
  - $\ne$ Specified outcome: non-occurrence (failure)  
    - $\lt \lor \gt$ Specified outcome: non-occurrence (failure)

## 3. Basic event, certain event, impossible event
- __A single-point set composed of one sample point__ is called __a basic event__,
  also known as __a sample point__.
  __The sample space contains all sample points__.
- ###### An event that always occurs in every trial is called __a certain event__.
- ###### An event that never occurs in any trial is called __an impossible event__. denoted as $\varnothing$.
- Note: Every possible outcome (event $A$) that may occur in a single trial is called __a basic event__.
  These three types of events __occur under certain conditions__,
  and when __the conditions change__,
  __the nature of the event may also change__.


## 4. Definition of probability
- __The measure of the likelihood__ of a random event $A$ occurring is called __the probability of event $\boldsymbol{A}$__,
  denoted as $\boldsymbol{P(A)}$.


## 5. Properties of probability
- Let $A_1,A_2,\cdots,A_n$ be a finite set of __mutually exclusive events__, then $\boldsymbol{P(\bigcup_{i=1}^n A_i)=\sum_{i=1}^{n}P(A_i)}$.
- Let $\overline{A}$ be the complement of event $A$, then $\boldsymbol{P(\overline{A})=1-P(A)}$.


## 6. Classical probability model
- A random experiment $E$ has the following two characteristics:   
  __(1)__ The elements of the sample space (i.e., basic events) are __finite in number__ (__countable__);   
  __(2)__ Each basic event has __an equal probability of occurring__ (__fair__).    
- Such an experiment is called a classical probability experiment.  

## 7. Calculation formula
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
\textsf{(A)} \: \textsf{turning on the tv, and it is broadcasting an advertisement} & \\
\textsf{(B)} \: \textsf{opening the math book, and landing exactly on page }50 & \\
\textsf{(C)} \: \textsf{tossing a fair coin, and it's landing heads up} & \\
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
