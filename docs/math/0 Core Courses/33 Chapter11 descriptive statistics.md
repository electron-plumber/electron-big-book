---
title: Chapter11 Descriptive Statistics
lang: en-US
---

# Module 11-01 Average Value

## 1.Mean
- Let $n$ numbers be $x_1,x_2,\cdots,x_n$.
  The quantity $\overline{x}=\frac{x_1+x_2+\cdots+x_n}{n}$ is called __the mean of these $\boldsymbol{n}$ numbers__.  
  - $\boldsymbol{\overline{×}}=\frac{\textsf{sum}}{\textsf{count}}$
  - $\textsf{sum}=\boldsymbol{\overline{×}}\times\textsf{count}$

## 2.Mode
- In a set of data,
  the value __that appears most frequently__ is called __the mode of the data set__.  

## 3.Median
- Arrange a set of data in __ascending order__,
  and __the value in the middle position__ (or __the average of the two middle values__) is called __the median of the data set__.

## 4.Focus 1
__The basic concepts__  
- Analyze and make judgments based on __the concepts of mean, mode, and median__.

### $\fbox{1}\:$Which of the following statements are incorrect $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
(\text{1}) \: \textsf{in a data set, there is only one mode} & \\
(\text{2}) \: \textsf{the median and mode can never be equal} & \\
(\text{3}) \: \textsf{the mean and median of a data set can never be equal} & \\
(\text{4}) \: \textsf{the mean, mode, and median can be equal} & \\
(\text{A}) \: 0 & \\
(\text{B}) \: 1 & \\
(\text{C}) \: 2 & \\
(\text{D}) \: 3 & \\
(\text{E}) \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(\text{1}) \: \textsf{most frequent value, may have multiple modes}\,❌\;\\
(\text{2}) \: [3,3,3,3]\;\textsf{the median can be equal to the mode} \,❌\;\\
(\text{3}) \: [3,3,3,3,3]\;\textsf{the mean can be equal to the median} \,❌\;\\
(\text{4}) \: ✅\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $(\text{1}),(\text{2}),(\text{3})$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_2-mode}{\textsf{mode}} \\
  & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_3-median}{\textsf{median}} \\
  \overline{x}=\frac{x_1+x_2+\cdots+x_n}{n} & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_1-mean}{\textsf{mean}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__The calculation of the average value for a set of numbers__  
- Based on __the definition of the average__,
  first __find the sum__,
  then divide by __the count to get the average__.
  __To simplify__ the calculation,
  you can subtract $m$ from each number,
  find __the average of the remaining numbers__,
  and then add $m$ back.


### $\fbox{2}\:$In a singing competition, the scores given by $\small 8$ judges are shown in the table below:  

| Judge | $1$   | $2$   | $3$   | $4$   | $5$   | $6$   | $7$   | $8$   |  
|-------|-------|-------|-------|-------|-------|-------|-------|-------|  
| Score | $9.3$ | $9.5$ | $9.4$ | $9.6$ | $9.5$ | $9.6$ | $9.5$ | $9.7$ |  

#### (1) What is the mode of the $\small 8$ judges' scores $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 9.3 &
\textsf{(B)} \: 9.4 &
\textsf{(C)} \: 9.5 &
\textsf{(D)} \: 9.6 &
\textsf{(E)} \: 9.7 & \\
\end{array}
$  
:::  
#### (2) What is the median of the $\small 8$ judges' scores $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 9.3 &
\textsf{(B)} \: 9.4 &
\textsf{(C)} \: 9.5 &
\textsf{(D)} \: 9.6 &
\textsf{(E)} \: 9.7 & \\
\end{array}
$  
:::
#### (3) According to the competition rules, after removing the highest and lowest scores, the final score is the average of the remaining $\small 6$ judges' scores. What is the contestant's final score $\small \,\mathpunct{?}$ (answer rounded to two decimal places).
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 9.42 &
\textsf{(B)} \: 9.52 &
\textsf{(C)} \: 9.53 &
\textsf{(D)} \: 9.54 &
\textsf{(E)} \: 9.56 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(1)\;
\begin{cases}
9.3\rightarrow1 \\
9.4\rightarrow1 \\
9.5\rightarrow3 \\
9.6\rightarrow2 \\
9.7\rightarrow1 \\
\end{cases} \\
(2)\; [9.3,9.4,9.5,\boxed{9.5,9.5},9.6,9.6,9.7] & \textsf{asc} \\
\frac{9.5+9.5}{2}=9.5 \\
(3)\; [\bcancel{9.3},9.4,9.5,9.5,9.5,9.6,9.6,\bcancel{9.7}] \\
\textsf{let }m=9.5 & \textsf{simplify mean calculation} \\
[(9.4-m),(9.5-m),(9.5-m),(9.5-m),(9.6-m),(9.6-m)] \\
[-0.1,0,0,0,0.1,0.1] \\
\overline{x}=\frac{-0.1+0+0+0+0.1+0.1}{6}+9.5=0.016+9.5\approx9.52 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > $\boldsymbol{(C)}$  
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $9.5\rightarrow3,\frac{9.5+9.5}{2}=9.5,\overline{x}\approx9.52$, so choose $(1)\rightarrow C,(2)\rightarrow C,(3)\rightarrow B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_2-mode}{\textsf{mode}} \\
  & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_3-median}{\textsf{median}} \\
  \overline{x}=\frac{x_1+x_2+\cdots+x_n}{n} & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_1-mean}{\textsf{mean}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 3
__The weighted average calculation__  
- If the average values of different parts and their respective quantities are known,
  __the overall average__ can be calculated __using the weighted average formula__.

  
### $\fbox{3}\:$Let the prices of sugars $a,b$, and $c$ be $\small 18$ dollars/kg, $\small 24$ dollars/kg, $\small 36$ dollars/kg, respectively. If the mixing ratio is $\small 3:2:1$, what is the reasonable price of the mixed sugar per kilogram $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 20 &
\textsf{(B)} \: 21 &
\textsf{(C)} \: 22 &
\textsf{(D)} \: 23 &
\textsf{(E)} \: 24 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\overline{x}=\frac{18\times\frac{3}{6}+24\times\frac{2}{6}+36\times\frac{1}{6}}{1} \\
\textsf{let }m=24 & \textsf{simplify mean calculation} \\
(18-m)\times\frac{3}{6}+(24-m)\times\frac{2}{6}+(36-m)\times\frac{1}{6} \\
-6\times\frac{1}{2}+0+12\times\frac{1}{6}+24=-3+2+24=23 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\overline{x}=23$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \overline{x}=\frac{\sum_{i=1}^{n}w_ix_i}{\sum_{i=1}^{n}w_i} & \textsf{weighted average formula} \\
  \end{array}
  >$

  :::
---

### $\fbox{4}\:$In a game competition, Class $\small A$ has $\small 20$ participants with an average score of $\small 80$, and Class $\small B$ has $\small 30$ participants with an average score of $\small 70$. What is the overall average score of all participants from both classes $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 76 &
\textsf{(B)} \: 75 &
\textsf{(C)} \: 74 &
\textsf{(D)} \: 73 &
\textsf{(E)} \: 72 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\overline{x}=\frac{80\times\frac{2}{5}+70\times\frac{3}{5}}{1} \\
\textsf{let }m=70 \\
80-m\times\frac{2}{5}+70-m\times\frac{3}{5} \\
10\times\frac{2}{5}+0+70=4+70=74 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\overline{x}=74$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \overline{x}=\frac{\sum_{i=1}^{n}w_ix_i}{\sum_{i=1}^{n}w_i} & \textsf{weighted average formula} \\
  \end{array}
  >$

  :::
---

## 7.Focus 4
__The comparison of averages__  
- The average values can be __calculated separately__ and __compared__,
  or the comparison can be made by analyzing __the weight of high and low scores__.
- Increasing high scores or decreasing low scores: the average increases.
- Decreasing high scores or increasing low scores: the average decreases.


### $\fbox{5}\:$The students from Classes $\small A, B$, and $\small C$ participate in an evaluation, and the number of students and their scores are shown in the table below:  
![Question average value figure Q-5 solve-1.svg](../../public/math/Core%20Courses/Question%20average%20value%20figure%20Q-5%20solve-1.svg)  
#### What is the ranking of the three classes based on their average scores, from highest to lowest $\small \,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: B,C,A &
\textsf{(B)} \: B,A,C &
\textsf{(C)} \: A,C,B & \\
\textsf{(D)} \: C,A,B &
\textsf{(E)} \: C,B,A & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by analyzing and comparing the proportion of people       
  ::: wrap  
  $
  \begin{array}{ll}
  A=10+10+10+10=40 \\
  B=15+15+10+20=60 \\
  C=10+10+15+15=50 \\
  \hspace{1.5cm} A \hspace{1.4cm} B \hspace{1.4cm} C\\
  6:[\frac{10}{40}=\frac{1}{4},\frac{15}{60}=\frac{1}{4},\frac{10}{50}=\frac{1}{5}] \\
  7:[\frac{10}{40}=\frac{1}{4},\frac{15}{60}=\frac{1}{4},\frac{10}{50}=\frac{1}{5}] \\
  8:[\frac{10}{40}=\frac{1}{4},\frac{10}{60}=\frac{1}{6},\frac{15}{50}=\frac{3}{10}] \\
  9:[\frac{10}{40}=\frac{1}{4},\frac{20}{60}=\frac{1}{3},\frac{15}{50}=\frac{3}{10}] \\
  A\textsf{ compared to } B: \\
  \begin{cases}
  6:\frac{1}{4}=\frac{1}{4} \\
  7:\frac{1}{4}=\frac{1}{4} \\
  8:\frac{1}{4}\gt\frac{1}{6} \\
  9:\frac{1}{4}\lt\frac{1}{3} \\
  \end{cases} \Longrightarrow B \gt A \\
  B\textsf{ compared to } C: \\
  \begin{cases}
  6:\frac{1}{4}\gt\frac{1}{5} \\
  7:\frac{1}{4}\gt\frac{1}{5} \\
  8:\frac{1}{6}\lt\frac{3}{10} \\
  9:\frac{1}{3}\approx\frac{3}{10} \\
  \end{cases}  \Longrightarrow C \gt B \\
  (B \gt A) \land (C \gt B) \Longrightarrow C,B,A
  \end{array}
  $  
  :::   
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by applying the weighted average formula  
  ::: wrap  
  $
  \begin{array}{ll}
  A=10+10+10+10=40 \\
  B=15+15+10+20=60 \\
  C=10+10+15+15=50 \\
  \hspace{1.5cm} A \hspace{1.4cm} B \hspace{1.4cm} C \\
  6:[\frac{10}{40}=\frac{1}{4},\frac{15}{60}=\frac{1}{4},\frac{10}{50}=\frac{1}{5}] \\
  7:[\frac{10}{40}=\frac{1}{4},\frac{15}{60}=\frac{1}{4},\frac{10}{50}=\frac{1}{5}] \\
  8:[\frac{10}{40}=\frac{1}{4},\frac{10}{60}=\frac{1}{6},\frac{15}{50}=\frac{3}{10}] \\
  9:[\frac{10}{40}=\frac{1}{4},\frac{20}{60}=\frac{1}{3},\frac{15}{50}=\frac{3}{10}] \\
  \textsf{let }m=7 \\
  \begin{cases}
  6-m=-1 \\
  7-m=0 \\
  8-m=1 \\
  9-m=2 \\
  \end{cases} \\
  \overline{x}_A=\frac{-1\times\frac{1}{4}+0\times\frac{1}{4}+1\times\frac{1}{4}+2\times\frac{1}{4}}{1} \\
  \frac{-1+0+1+2}{4}+7=0.5+7=7.5 \\
  \overline{x}_B=\frac{-1\times\frac{1}{4}+0\times\frac{1}{4}+1\times\frac{1}{6}+2\times\frac{1}{3}}{1} \\
  \frac{-1+0}{4}+\frac{1}{6}+\frac{2}{3}+7 \\
  \frac{-3}{12}+\frac{2}{12}+\frac{8}{12}+7=\frac{7}{12}+\frac{84}{12}=\frac{91}{12}\approx7.58 \\
  \overline{x}_C=\frac{-1\times\frac{1}{5}+0\times\frac{1}{5}+1\times\frac{3}{10}+2\times\frac{3}{10}}{1} \\
  \frac{-1+0}{5}+\frac{3}{10}+\frac{6}{10}+7 \\
  \frac{-2}{10}+\frac{3}{10}+\frac{6}{10}+7=0.7+7=7.7 \\
  7.7\gt7.58\gt7.5 \Longrightarrow C,B,A
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $C\gt B\gt A$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
   & \href{/math/0%20Core%20Courses/34%20Chapter11%20data%20description.html#_7-focus-4}{\textsf{comparison of averages}} \\
  \overline{x}=\frac{\sum_{i=1}^{n}w_ix_i}{\sum_{i=1}^{n}w_i} & \textsf{weighted average formula} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=e1eWN0PrWu0&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gx64s?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95if-34-chapter11-data-description.html)                       |                                                                   |
