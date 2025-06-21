---
title: Chapter7 resolve geometry Module2 straight line lower
lang: en-US
---

## 9. Positional Relationships Between Two Lines

| Positional Relationship | Slope-Intercept Form<br/>$\mathbf{l_1:\;y=k_1x+b_1}$<br/>$\mathbf{l_2:\;y=k_2x+b_2}$ |          General Form<br/>$\mathbf{l_1:\;a_1x+b_1y+c_1=0}$<br/>$\mathbf{l_2:\;a_2x+b_2y+c_2=0}$          |
|:-----------------------:|:------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------:|
|        Parallel         |               $l_1 \parallel l_2 \Leftrightarrow k_1=k_2,b_1 \ne b_2$                |         $l_1 \parallel l_2 \Leftrightarrow \frac{a_1}{a_2}=\frac{b_1}{b_2} \ne \frac{c_1}{c_2}$          |
|      Intersecting       |                                    $k_1 \ne k_2$                                     |                                  $\frac{a_1}{a_2} \ne \frac{b_1}{b_2}$                                   |
|      Perpendicular      |                      $l_1 \perp l_2 \Leftrightarrow k_1k_2=-1$                       | $l_1 \perp l_2 \Leftrightarrow \frac{a_1}{b_1} \cdot \frac{a_2}{b_2}=-1 \Leftrightarrow a_1a_2+b_1b_2=0$ |

__Examples__  
- Slope-Intercept Form
  - Parallel  
    $
    \begin{array}{ll}
    y=2x-1 \\
    y=2x+3 \\
    k \rightarrow 2=2 \\
    b \rightarrow -1 \ne 3 & \text{Not coincident}\\
    \end{array}
    $
  - Perpendicular  
    $
    \begin{array}{ll}
    y=-\frac{1}{2}x-1 \\
    y=2x+3 \\
    k_1k_2=-1 \rightarrow (-\frac{1}{2})\times 2=-1 \\
    \end{array}
    $
- General Form
  - Parallel  
    $
    \begin{array}{ll}
    2x-3y+1=0 \\
    4x-6y+5=0 \\
    \frac{a_1}{a_2}=\frac{b_1}{b_2}\rightarrow \frac{2}{4}=\frac{-3}{-6} \\
    \frac{b_1}{b_2} \ne \frac{c_1}{c_2}\rightarrow 0.5 \ne \frac{1}{5} & \text{Not coincident}\\
    \end{array}
    $
  - Perpendicular  
    $
    \begin{array}{ll}
    3x+4y-1=0 \\
    4x-3y+2=0 \\
    a_1a_2+b_1b_2=0 \rightarrow 3\times4+(4\times-3)=0 \\
    \end{array}
    $

## 10.Focus 4
__Two lines are parallel__  
- Analyze parallelism based on equal slopes, paying attention to the cases where the slope is $0$ or undefined. 


::: wrap
### $\fbox{12}\:$Given that the line $\small l_1:\;(k-3)x+(4-k)y+1=0$ is parallel to the line $\small l_2:\;2(k-3)x-2y+3=0$, what is the value of $\small k \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: 3 &
(\text{B}) \: 5 &
(\text{C}) \: 1 &
(\text{D}) \: -1 &
(\text{E}) \: 3 \lor 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Substitute the options to verify the equation    

  $
  \begin{array}{ll}
  \frac{a_1}{a_2}=\frac{b_1}{b_2} \ne \frac{c_1}{c_2} \\
  \frac{k-3}{2(k-3)}=\frac{4-k}{-2} \ne \frac{1}{3} \\
  \text{Pay attention to the special case where }k=3 \\
  k=3
  \begin{cases}
  \begin{array}{ll}
  l_1:\; y+1=0 & \text{Horizontal line }a=0 \\
  l_2:\; -2y+3=0 & \text{Horizontal line }a=0 \\
  \end{array}
  \end{cases} \\
  k=3 \longrightarrow l_1\text{ and }l_2\text{ are parallel} \\
  \frac{1}{2}=\frac{4-k}{-2} \ne \frac{1}{3} \\
  \text{Substitute }k=5 \\
  \frac{1}{2}=\frac{4-5}{-2} \\
  \frac{1}{2}=\frac{1}{2} \ne \frac{1}{3} \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(E)}$  
  > According to the Solution, get $k=3,k=5 \; l_1\text{ and }l_2\text{ are parallel}$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  l_1 \parallel l_2 \Leftrightarrow \frac{a_1}{a_2}=\frac{b_1}{b_2} \ne \frac{c_1}{c_2} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_9-positional-relationships-between-two-lines}{\text{Parallel positional relationship}} \\
  a=0 \longrightarrow by+c=0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#horizontal-line}{\text{Horizontal line}} \\
  \end{array}
  >$

  :::
---

## 11.Focus 5
__Two lines are perpendicular__   
- When the product of the slopes of two lines is -1,
  or when their slopes are negative reciprocals of each other, the two lines are perpendicular.
  Note the special cases when the slope is 0 or undefined.    

::: wrap
### $\fbox{13}\:$(Sufficiency judgment) Determine whether the condition that the lines $\small (m +2)x+3my+1=0$ and $\small (m-2)x+(m+2)y-3=0$ are perpendicular is sufficient.
$
\begin{array}{lllll}
(\text{1}) \: m=\frac{1}{2}. &
(\text{2}) \: m=-2. & \\
(\text{A}) \: (\text{1}) &
(\text{B}) \: (\text{2}) & \\
(\text{C}) \: (\text{1})+(\text{2}) &  
(\text{D}) \: (\text{1}),(\text{2}) & \\
(\text{E}) \: \varnothing & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_1a_2+b_1b_2=0 \\
(m+2)(m-2)+3m(m+2)=0 \\
\textcolor{#9333EA}{\text{Verify condition }(1)} \\
(\frac{1}{2}+2)(\frac{1}{2}-2)+3\frac{1}{2}(\frac{1}{2}+2)=0 \\
(\frac{5}{2} \times -(\frac{3}{2})) + (3 \times \frac{5}{4})=0 \\
-\frac{15}{4}+\frac{15}{4}=0 \\
\textcolor{#9333EA}{\text{Verify condition }(2)} \\
(-2+2)(-2-2)+3(-2)(-2+2)=0 \\
(0\times (-4))+(-6 \times 0)=0 \\
0+0=0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $(\text{1})\,✅\;,(\text{2})\,✅\;$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_1a_2+b_1b_2=0 & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_9-positional-relationships-between-two-lines}{\text{Perpendicular positional relationship}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{14}\:$If the line $\small mx+3y+5=0$ is perpendicular to the line $\small nx−2y+1=0$, how many sets of positive integer solutions $\small (m,n)$ satisfy this condition $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: 1 &
(\text{B}) \: 2 &
(\text{C}) \: 3 &
(\text{D}) \: 4 &
(\text{E}) \: 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
a_1a_2+b_1b_2=0 \\
mn+3\times (-2)=0 \\
mn=6 \\
6=1\times6 \\
6=6\times1 \\
6=2\times3 \\
6=3\times2 \\
\end{array}
$   
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $4 \text{ sets}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  a_1a_2+b_1b_2=0 & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_9-positional-relationships-between-two-lines}{\text{Perpendicular positional relationship}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{15}\:$Given point $\small A(1, -2)$ and point $\small B(m, 2)$, and the equation of the perpendicular bisector of line segment $\small AB$ is $\small x+2y−2=0$, what is the value of the real number $\small m \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: 3 &
(\text{B}) \: 4 &
(\text{C}) \: 5 &
(\text{D}) \: 6 &
(\text{E}) \: 7 & \\
\end{array}
$  
:::
#### Solution
::: wrap
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by setting up equations  
  ![Question straight line figure Q-15 solve-1.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-15%20solve-1.svg)  

  $
  \begin{array}{ll}
  (\frac{m+1}{2},0) & \text{Midpoint} \\
  \frac{m+1}{2}+0-2=0 \\
  m+1+0-2=2 \\
  m+1=4 \\
  m=3 \\
  \end{array}
  $  
:::  
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve using slopes  

  $
  \begin{array}{ll}
  k_{AB}=\frac{2-(-2)}{m-1} \\
  k=-\frac{a}{b} \\
  x+2y−2=0 \longrightarrow k=-\frac{1}{2} \\
  \text{The slope of }AB\text{ and the slope of the line }x+2y−2=0 \\
  \text{are negative reciprocals of each other, since }AB\text{ is perpendicular to }x+2y−2=0.\\
  k_{AB} \Rightarrow \frac{2}{1} \\
  k_{AB}=\frac{4}{m-1}=2 \\
  4=2m-2 \\
  \frac{6}{2}=m \\
  m=3 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $m=3$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_2-coordinates-of-the-midpoint-between-two-points}{\text{Midpoint formula}} \\
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_4-two-point-slope-formula}{\text{Two-point slope formula}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#remark-the-general-form-is-very-important-as-it-allows-you-to-quickly-calculate-the-slope}{\text{Quickly convert the general form to the slope}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{16}\:$Given that the equation of line $\small l$ is $\small x+2y−4=0$, and point $\small A$ has coordinates $\small (5,7)$, a line is drawn through point $\small A$ perpendicular to line $\small l$. What is the x-coordinate of the foot of the perpendicular $\small \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: 6 &
(\text{B}) \: 5 &
(\text{C}) \: 2 &
(\text{D}) \: -2 &
(\text{E}) \: -1 & \\
\end{array}
$  
:::
#### Solution
::: wrap
- Show known conditions  
  ![Question straight line figure Q-16 solve-1.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-16%20solve-1.svg)  

  $
  \begin{array}{ll}
  k=-\frac{a}{b} \\
  l=x+2y−4=0 \longrightarrow k=-\frac{1}{2} \\
  \end{array}
  $  
:::   
::: wrap
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the two-point slope formula to write a system of equations and find the point of intersection   

  $
  \begin{array}{ll}
  \text{Let }B=(x_0,y_0) \\
  k:\,l=-\frac{1}{2} \longrightarrow AB=\frac{2}{1}=2 \\
  \begin{cases}
  \begin{array}{ll}
  x_0+2y_0-4=0 & \text{Point }B\text{ on line }l \\
  \frac{y_0-7}{x_0-5}=2 & \text{The inclination from }A\text{ to }B \\
  \end{array}
  \end{cases} \\
  x_0+2y_0-4=0 & \text{Simplify equation }1 \\
  x_0=4-2y_0 \\
  \frac{y_0-7}{x_0-5}=2 & \text{Simplify equation }2 \\
  y_0-7=2(x_0-5) \\
  y_0-7=2x_0-10 \\
  y_0=2x_0-3 \\
  y_0=2(4-2y_0)-3 & \text{Substitute }x_0 \\
  y_0=8-4y_0-3 \\
  y_0=5-4y_0 \\
  5y_0=5 \\
  y_0=1 \\
  x_0=4-2\times1 & \text{Substitute }y_0 \\
  x_0=2 \\
  \end{array}
  $  
:::  
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the point-slope form to write a system of equations and find the point of intersection    

  $
  \begin{array}{ll}
  k:\,l=-\frac{1}{2} \longrightarrow AB=\frac{2}{1}=2 \\
  y=2(x-5)+7=2x-3 & \text{The equation of the line }AB \\
  \begin{cases}
  x+2y−4=0 \\
  y=2x-3 \\
  \end{cases} \\
  x+2(2x-3)−4=0 & \text{Substitute }y \\
  x+4x-6-4=0 \\
  5x-10=0 \\
  5x=10 \\
  x=2 \\
  \end{array}
  $  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(C)}$  
  > According to the Solution, get $x=2$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_4-two-point-slope-formula}{\text{Two-point slope formula}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#remark-the-general-form-is-very-important-as-it-allows-you-to-quickly-calculate-the-slope}{\text{Quickly convert the general form to the slope}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#point-slope-form}{\text{Point-slope form}} \\
  \end{array}
  >$

  :::
---

## 12.Focus 6
__Two lines intersect__  
- When the slopes of two lines aren't equal, the lines intersect.
  Additionally, you should know how to find the coordinates of the intersection point.
- Intersection point $=$ Solve the system of equations formed by the two lines.

::: wrap
### $\fbox{17}\:$(Sufficiency judgment) Determine whether the condition that the lines $\small (m+1)x+3y+1=0$ and $\small 2x+my−3=0$ intersect is sufficient.
$
\begin{array}{lllll}
(\text{1}) \: m>\frac{1}{2}. &
(\text{2}) \: m<-4. & \\
(\text{A}) \: (\text{1}) &
(\text{B}) \: (\text{2}) & \\
(\text{C}) \: (\text{1})+(\text{2}) &  
(\text{D}) \: (\text{1}),(\text{2}) & \\
(\text{E}) \: \varnothing & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{a_1}{a_2} \ne \frac{b_1}{b_2} & \text{Intersect} \rightarrow \text{Not proportional} \\
\frac{m+1}{2} \ne \frac{3}{m} \\
m^2+m-6 \ne 0 \\
m^2+m-6=(m-2)(m+3)=0 \\
m=2 \lor m=-3 \longrightarrow m\ne2 \land m\ne-3 \\
m \in \mathbb{R} \setminus \{2, -3\} \\
\textcolor{#9333EA}{\text{Verify condition }(1)} \\
m>\frac{1}{2} \Rightarrow m=2 \\
\textcolor{#9333EA}{\text{Verify condition }(2)} \\
m<-4 \Rightarrow m\ne2 \land m\ne-3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $m<-4 \Rightarrow m\ne2 \land m\ne-3$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{a_1}{a_2} \ne \frac{b_1}{b_2} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_9-positional-relationships-between-two-lines}{\text{Intersecting positional relationship}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{18}\:$What is the distance from the intersection point of the lines $\small 2x+3y+4=0$ and $\small 3x+y−1=0$ to the origin $\small \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: \sqrt{2} &
(\text{B}) \: \sqrt{3} &
(\text{C}) \: 2 &
(\text{D}) \: \sqrt{5} &
(\text{E}) \: \sqrt{7} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
2x+3y+4=0 \\
3x+y-1=0 \longrightarrow 9x+3y-3=0 \\
\end{cases} \\
(9x+3y-3)-(2x+3y+4) = 0-0 \\
7x-7=0 \\
x=1 \\
3\times 1+y-1=0 & \text{Substitute }x \\
y=-2 \\
\text{The distance from }(1, -2)\text{ to the origin.} \\
d=\sqrt{(1-0)^2+(-2-0)^2} = \sqrt{5} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $d=\sqrt{5}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-distance-formula-between-two-points}{\text{Distance formula}} \\
  \end{array}
  >$

  :::
---

## 13.Positional Relationship Between a Point and a Line
- For a point $(x_0, y_0)$ and a line $l: \,y=kx+b$     
  ::: wrap  
  $
  y_0
  \begin{cases}
  \gt kx_0+b,\text{ the point lies above the line.} \\
  =kx_0+b,\text{ the point lies on the line.} \\
  \lt kx_0+b,\text{ the point lies below the line.} \\
  \end{cases}
  $  
  :::  
  ![Point line relation.svg](../../public/math/Core%20courses/Point%20line%20relation.svg)  


## 14.Distance from a Point to a Line 
- For the line $l:\,ax+by+c=0,$ the distance from the point $(x_0, y_0)$ to the line is $d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.$  
- Special case: The distance from $(0, 0)$ to the line $l$ is $d=\frac{|c|}{\sqrt{a^2+b^2}}.$   
![Point line distance.svg](../../public/math/Core%20courses/Point%20line%20distance.svg)  


## 15.Distance Between Two Parallel Lines
- Given two parallel lines: $l_1: ax+by+c_1=0; l_2: ax+by+c_2=0.$ The distance between $l_1$ and $l_2$ is $d=\frac{|c_1-c_2|}{\sqrt{a^2+b^2}}.$  
- Remark: The derivation process involves selecting an arbitrary point on one of the lines and then using the formula for the distance from a point to a line to calculate the distance between the two parallel lines.  
  ![Parallel lines distance.svg](../../public/math/Core%20courses/Parallel%20lines%20distance.svg)  


## 16.Focus 7
__Positional Relationship Between a Point and a Line__   
- First, convert the line into the form $y=kx+b$, then substitute the point into the equation to make a determination.
- Note: Make sure the coefficient of $y$ is positive; otherwise, the result of the judgment will be reversed.
- General form: $ax+by+c=0$  
  ::: wrap  
  $
  \begin{array}{ll}
  b>0
  \begin{cases}
  \begin{array}{ll}
  ax+by+c>0 & \text{The point is above the line.} \\
  ax+by+c<0 & \text{The point is below the line.} \\
  \end{array}
  \end{cases} \\
  b<0
  \begin{cases}
  \begin{array}{ll}
  ax+by+c>0 & \text{The point is below the line.} \\
  ax+by+c<0 & \text{The point is above the line.} \\
  \end{array}
  \end{cases}
  \end{array}
  $  
  :::

::: wrap
### $\fbox{19}\:$Given the equation of line $\small l:\,x+2y-4=0,$ and the coordinates of point $\small A$ are $\small (5-m, m).$ If point $\small A$ is above the line $\small l,$  what is the range of values for $\small m \, \mathpunct{?}.$ 
$
\begin{array}{lllll}
(\text{A}) \: m>1 &
(\text{B}) \: m>-1 &
(\text{C}) \: m>-2 &
(\text{D}) \: m>-\frac{1}{2} &
(\text{E}) \: m<-1 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
A:(5-m, m) \\
5-m+2m-4 > 0 \\
(5-4)+(-m+2m) > 0 \\
1+m>0 \\
m>-1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $m>-1$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  y=kx+b & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_16-focus-7}{\text{Point-line position}} \\
  \end{array}
  >$

  :::
---

## 17.Focus 8
__Distance from a Point to a Line__  
- First, convert the line equation into general form, then apply the point-to-line distance formula.


::: wrap
### $\fbox{20}\:$Given point $\small C(2,−3)$, and points $\small M(5,5), N(−3,−1)$, what is the distance from point $\small C$ to the line $\small MN \,\mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: \frac{23}{5} &
(\text{B}) \: \frac{22}{5} &
(\text{C}) \: \frac{21}{5} &
(\text{D}) \: \frac{19}{5} &
(\text{E}) \: \frac{18}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
K_{MN}=\frac{5-(-1)}{5-(-3)}=\frac{6}{8}=\frac{3}{4} \\
3x-4y+c=0 & \text{Reverse-derive the general formula for }k=-\frac{a}{b} \\
3 \times 5-4 \times 5+c=0 & \text{Substitute }M \lor N \\
15-20+c=0 \\
c=5 \\
3x-4y+5=0 \\
3\times 2-4\times (-3)+5=0 & \text{Substitute }C \\
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} \\
d=\frac{6+12+5}{\sqrt{3^2+4^2}}=\frac{23}{5} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $d=\frac{23}{5}$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_4-two-point-slope-formula}{\text{Two-point slope formula}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#remark-the-general-form-is-very-important-as-it-allows-you-to-quickly-calculate-the-slope}{\text{Quickly convert the general form to the slope}} \\
  ax+by+c=0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#general-form}{\text{General form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_14-distance-from-a-point-to-a-line}{\text{point-to-line distance formula}} \\
  \end{array}
  >$

  :::
---

## 18.Focus 9
__Distance Between Two Parallel Lines__
- To apply the distance formula between two parallel lines, make sure to first unify the coefficients of $x$ and $y$ in both equations, and then proceed with the calculation.


::: wrap
### $\fbox{21}\:$Given $\small l_1: 3x-4y+2=0, l_2: 6x-8y+9=0$, What is the distance between $\small l_1$ and $\small l_2 \,\mathpunct{?}.$ 
$
\begin{array}{lllll}
(\text{A}) \: \frac{7}{10} &
(\text{B}) \: \frac{1}{4} &
(\text{C}) \: \frac{1}{3} &
(\text{D}) \: \frac{1}{2} &
(\text{E}) \: \frac{7}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Unify the $x$ and $y$ coefficients of the two parallel lines before solving    

  $
  \begin{array}{ll}
  l_1: 3x-4y+2=0 \rightarrow 6x-8y+4=0 & \text{Multiply both sides by }2 \\
  l_2: 6x-8y+9=0 \\
  d=\frac{|c_1-c_2|}{\sqrt{a^2+b^2}} \\
  d=\frac{|9-4|}{\sqrt{6^2+8^2}} = \frac{5}{10} = \frac{1}{2}\\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $d=\frac{1}{2}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\frac{|c_1-c_2|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_15-distance-between-two-parallel-lines}{\text{Parallel Lines Distance Formula}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                           | Coursewares                                                       |
|-------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=rzjADVpR2JQ&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)      | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuak?playlist=x9h6d2)                                |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95hb-28-chapter7-resolve-geometry-module2-straight-line-lower.html) |                                                                   |
