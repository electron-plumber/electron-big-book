---
title: Chapter11 data description
lang: en-US
---
| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=e1eWN0PrWu0&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gx64s?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95if-34-chapter11-data-description.html)                       |                                                                   |


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
  and __the value in the middle position__ (or __the average of the two middle values_) is called __the median of the data set__.


## 4.Focus 1
__The basic concepts__  
- Analyze and make judgments based on __the concepts of mean, mode, and median__.


::: wrap
### $\fbox{1}\:$Which of the following statements are incorrect $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
(\text{1}) \: \textsf{in a data set, there is only one mode}. & \\
(\text{2}) \: \textsf{the median and mode can never be equal}. & \\
(\text{3}) \: \textsf{the mean and median of a data set can never be equal}. & \\
(\text{4}) \: \textsf{the mean, mode, and median can be equal}. & \\
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
(\text{2}) \: [3,3,3,3]\;\textsf{the median can be equal to the mode}  \,❌\;\\
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
  & \href{/math/0%20Core%20courses/34%20Chapter11%20data%20description.html#_2-mode}{\textsf{mode}} \\
  & \href{/math/0%20Core%20courses/34%20Chapter11%20data%20description.html#_3-median}{\textsf{median}} \\
  \overline{x}=\frac{x_1+x_2+\cdots+x_n}{n} & \href{/math/0%20Core%20courses/34%20Chapter11%20data%20description.html#_1-mean}{\textsf{mean}} \\
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


::: wrap
### $\fbox{2}\:$In a singing competition, the scores given by $\small 8$ judges are shown in the table below:  

| Judge | $1$   | $2$   | $3$   | $4$   | $5$   | $6$   | $7$   | $8$   |  
|-------|-------|-------|-------|-------|-------|-------|-------|-------|  
| Score | $9.3$ | $9.5$ | $9.4$ | $9.6$ | $9.5$ | $9.6$ | $9.5$ | $9.7$ |  

#### (1) What is the mode of the $\small 8$ judges' scores $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 9.3 &
\textsf{(B)} \: 9.4 &
\textsf{(C)} \: 9.5 &
\textsf{(D)} \: 9.6 &
\textsf{(E)} \: 9.7 & \\
\end{array}
$
#### (2) What is the median of the $\small 8$ judges' scores $\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 9.3 &
\textsf{(B)} \: 9.4 &
\textsf{(C)} \: 9.5 &
\textsf{(D)} \: 9.6 &
\textsf{(E)} \: 9.7 & \\
\end{array}
$
#### (3) According to the competition rules, after removing the highest and lowest scores, the final score is the average of the remaining $\small 6$ judges' scores. What is the contestant's final score $\small \,\mathpunct{?}$ (answer rounded to two decimal places).
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
[(9.4-9.5),(9.5-9.5),(9.5-9.5),(9.5-9.5),(9.6-9.5),(9.6-9.5)] \\
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
  & \href{/math/0%20Core%20courses/34%20Chapter11%20data%20description.html#_2-mode}{\textsf{mode}} \\
  & \href{/math/0%20Core%20courses/34%20Chapter11%20data%20description.html#_3-median}{\textsf{median}} \\
  \overline{x}=\frac{x_1+x_2+\cdots+x_n}{n} & \href{/math/0%20Core%20courses/34%20Chapter11%20data%20description.html#_1-mean}{\textsf{mean}} \\
  \end{array}
  >$

  :::
---
