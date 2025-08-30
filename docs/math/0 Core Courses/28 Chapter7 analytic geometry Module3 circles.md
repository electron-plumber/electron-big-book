---
title: Chapter7 Analytic Geometry – Module3 Circles
lang: en-US
---

# Module 7–03 Circles

## 1.Equation of a Circle

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Standard form  
- A circle with center $\boldsymbol{(x_0,y_0)}$ and radius $r$ can be represented by the equation: $(x-x_0)^2+(y-y_0)^2=r^2$.
- __Equation derivation__   
  ::: wrap    
  ![Circle standard form derivation.svg](../../public/math/Core%20Courses/Circle%20standard%20form%20derivation.svg)  

  $
  \begin{array}{ll}
  \sqrt{(x-x_0)^2+(y-y_0)^2} = r & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  (x-x_0)^2+(y-y_0)^2 = r^2 \\
  \boldsymbol{\textsf{example: }}(x+3)^2+(y-2)^2=4 \\
  \textsf{center: }(-3,2) & \textsf{let }r=0\textsf{ to shrink the circle to a point — the center} \\
  \textsf{radius: }r=2 & 2^2=4 \\
  \end{array}
  $  
  :::

### $\textcolor{#1E3A5F}{\fbox{2}}\:$General form  
- $x^2+y^2+ax+by+c=0$  
- ###### It can be __completed into the standard form__: $(x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4}$.  
  - ###### Center: $(-\frac{a}{2},-\frac{b}{2})$.
  - Radius: $r=\frac{a^2+b^2-4c}{2}$.
::: wrap
- Special cases:   
  - $a=0: x^2+y^2+by+c=0$. Center on the y-axis.
  - $b=0: x^2+y^2+ax+c=0$. Center on the x-axis.
  - $c=0: x^2+y^2+ax+by+c=0$. The function passes through the origin.
:::   
- ###### Note: the condition for the general form to represent a circle is $a^2+b^2-4c>0$.  
- __Equation derivation__   
  ::: wrap    

  $
  \begin{array}{ll}
  (x-x_0)^2+(y-y_0)^2 = r^2 & \textsf{standard form} \\
  x^2-2x_0x+x_0^2+y^2-2 y_0y+y_0^2 = r^2 & \textsf{expand the perfect square} \\
  x^2+y^2-2x_0x-2y_0y+(x_0^2+y_0^2)=r^2 \\
  x^2+y^2-2x_0x-2y_0y+(x_0^2+y_0^2-r^2)=0 \\
  \textsf{Let }a=-2x_0 \quad b=-2y_0 \quad c=x_0^2+y_0^2-r^2 \\
  x^2+y^2+ax+by+c=0 \\
  \end{array}
  $  
  :::

## 2.Special Circles (Standard Form)  

|  	Special Circles   |         Equations         |                                                               Graphs                                                               |      Properties       |
|:-------------------:|:-------------------------:|:----------------------------------------------------------------------------------------------------------------------------------:|:---------------------:|
|       $x_0=0$       |    $x^2+(y-y_0)^2=r^2$    | ![Special circles standard form graph 1.svg](../../public/math/Core%20Courses/Special%20circles%20standard%20form%20graph%201.svg) | Center on the y-axis  |
|       $y_0=0$       |    $(x-x_0)^2+y^2=r^2$    | ![Special circles standard form graph 2.svg](../../public/math/Core%20Courses/Special%20circles%20standard%20form%20graph%202.svg) | Center on the x-axis  |
|     $x_0=y_0=0$     |       $x^2+y^2=r^2$       | ![Special circles standard form graph 3.svg](../../public/math/Core%20Courses/Special%20circles%20standard%20form%20graph%203.svg) | Center at the origin  |
|     $\|y_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 4.svg](../../public/math/Core%20Courses/Special%20circles%20standard%20form%20graph%204.svg) | Tangent to the x-axis |
|     $\|x_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 5.svg](../../public/math/Core%20Courses/Special%20circles%20standard%20form%20graph%205.svg) | Tangent to the y-axis |
| $\|x_0\|=\|y_0\|=r$ | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 6.svg](../../public/math/Core%20Courses/Special%20circles%20standard%20form%20graph%206.svg) | Tangent to both axes  |

## 3.Focus 1
__The equation of a circle__   
- Pay attention to __the requirements of the circle's equation__, as well as __the forms of semicircle equations__.


### $\fbox{22}\:$Given that $\small x^2+y^2-4x+6y+m=0$ represents a circle. What is the range of values for $\small m\, \mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: m<12 &
\textsf{(B)} \: m<13 &
\textsf{(C)} \: m\le12 &
\textsf{(D)} \: m\le13 &
\textsf{(E)} \: m>13 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by completing the square to convert the general form into the standard form    
  ::: wrap   
  $
  \begin{array}{ll}
  (x+\frac{-4}{2})^2+(y+\frac{6}{2})^2=\frac{(-4)^2+6^2-4m}{4} \\
  (x-2)^2+(y+3)^2=\frac{16+36-4m}{4}=\frac{52-4m}{4} \\
  (x-2)^2+(y+3)^2=13-m>0 & \textsf{radius }> 0\textsf{ for a valid circle}\\
  m<13 \\
  \end{array}
  $   
  :::    
- $\textcolor{#228B22}{\fbox{2}}\:$Solve using the condition for the general form of a circle   
  ::: wrap   
  $
  \begin{array}{ll}
  a^2+b^2-4c>0 & \textsf{necessary condition for a circle} \\
  (-4)^2+6^2-4m>0 \\
  16+36-4m>0 \\
  52-4m>0 \\
  \frac{52}{4}>m \\
  m<13 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $m<13$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#it-can-be-completed-into-the-standard-form}{\textsf{complete to standard form}} \\
  x^2+y^2+ax+by+c=0 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#general-form}{\textsf{general form of a circle}} \\
  a^2+b^2-4c>0 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#note-the-condition-for-the-general-form-to-represent-a-circle-is}{\textsf{general form circle condition}} \\
  \end{array}
  >$

  :::
---


### $\fbox{23}\:$If the equation of the circle is $\small x^2+y^2=1$, then the equation of its right semicircle (the part located in the first and fourth quadrants) $\small \mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: y-\sqrt{1-x^2}=0 &
\textsf{(B)} \: x-\sqrt{1-y^2}=0 &
\textsf{(C)} \: y+\sqrt{1-x^2}=0 & \\
\textsf{(D)} \: x+\sqrt{1-y^2}=0 &
\textsf{(E)} \: x^2+y^2=\frac{1}{2} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question circles figure Q-23 solve-1.svg](../../public/math/Core%20Courses/Question%20circles%20figure%20Q-23%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  x^2+y^2=1 \\
  x^2=1-y^2 \\
  x=\sqrt{1-y^2} & x > 0 \textsf{ since it's the right half} \\
  x-\sqrt{1-y^2}=0 & \textsf{right semicircle}\\
  y-\sqrt{1-x^2}=0 \rightarrow y=\sqrt{1-x^2} & y \in \mathbb{R}^{+} \textsf{ upper semicircle} \\
  y+\sqrt{1-x^2}=0 \rightarrow y=-\sqrt{1-x^2} & y \in \mathbb{R}^{-} \textsf{ lower semicircle} \\
  x+\sqrt{1-y^2}=0 \rightarrow x=-\sqrt{1-y^2} & x \in \mathbb{R}^{-} \textsf{ left semicircle} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $x-\sqrt{1-y^2}=0$, so choose $B$. 

  :::
- Additionally, if the problem is a standard form equation of a circle  
  ::: wrap
  >$
  \begin{array}{ll}
  (x-x_0)^2+(y-y_0)^2=r^2 \\
  (x-x_0)^2=r^2-(y-y_0)^2 \\
  x=x_0+\sqrt{r^2-(y-y_0)^2} & \textsf{left semicircle} \\
  x=x_0-\sqrt{r^2-(y-y_0)^2} & \textsf{right semicircle} \\
  (y-y_0)^2=r^2-(x-x_0)^2 \\
  y=y_0+\sqrt{r^2-(x-x_0)^2} & \textsf{upper semicircle} \\
  y=y_0-\sqrt{r^2-(x-x_0)^2} & \textsf{lower semicircle} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The intersection of a circle and the coordinate axes__
- Let $\boldsymbol{y=0}$ to find the points where __the circle intersects the x-axis__; 
  let $\boldsymbol{x=0}$ to find the points where __it intersects the y-axis__.
  If the circle has only one point of intersection with an axis, then it is __tangent to that axis__.



### $\fbox{24}\:$The two intersection points of the circle $\small x^2+(y-1)^2=4$ with the x-axis are $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (-\sqrt{5},0),(\sqrt{5},0) &
\textsf{(B)} \: (-2,0),(2,0) & \\
\textsf{(C)} \: (0,-\sqrt{5}),(0,\sqrt{5}) &
\textsf{(D)} \: (-\sqrt{3},0),(\sqrt{3},0) & \\
\textsf{(E)} \: (-\sqrt{2},-\sqrt{3}),(\sqrt{2},\sqrt{3}) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{let }y=0 \\
x^2+(0-1)^2=4 \\
x^2+1=4 \\
x=\pm\sqrt{3} \Rightarrow (-\sqrt{3},0),(\sqrt{3},0)\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=\pm\sqrt{3} \Rightarrow (-\sqrt{3},0),(\sqrt{3},0)$, so choose $D$. 

  :::
---


### $\fbox{25}\:$The equation of a circle with center at $\small P(−2,3)$ and tangent to the y-axis is $\small \mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: (x-2)^2+(y+3)^2=4 &
\textsf{(B)} \: (x+2)^2+(y-3)^2=4 & \\
\textsf{(C)} \: (x-2)+(y+3)^2=9 &
\textsf{(D)} \: (x+2)^2+(y-3)^2=9 & \\
\textsf{(E)} \: (x-3)^2+(y+2)^2=9 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
|x_0|=r & \textsf{tangent to the y-axis} \\
r=|-2|=2 \\
((-2)-x_0)^2+(3-y_0)^2=2^2 \\ 
(x+2)^2+(y-3)^2=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $(x+2)^2+(y-3)^2=4$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  |x_0|=r & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_2-special-circles-standard-form}{\textsf{special circles in standard form}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{standard form of a circle}} \\
  \end{array}
  >$

  :::
---

## 5.Position of a Point Relative to a Circle
- Let $P(x_p, y_p)$ be a point, and let the circle be defined by $(x-x_0)^2+(y-y_0)^2=r^2$,   
  Substitute the point into the circle's equation:  
  ::: wrap  
  $
  (x_p-x_0)^2+(y_p-y_0)^2
  \begin{cases}
  \lt r^2\textsf{ the point lies inside the circle} \\
  =r^2\textsf{ the point lies on the circle} \\
  \gt r^2\textsf{ the point lies outside the circle} \\
  \end{cases}
  $  
  :::   
  ![Point circle relation.svg](../../public/math/Core%20Courses/Point%20circle%20relation.svg)  

## 6.Relationship Between a Line and a Circle
- Given the line $l:\,y=kx+b$ and the circle $O:\,(x-x_0)^2+(y-y_0)^2=r^2$, let $d$
  be the distance from the center of the circle $(x_0,y_0)$ to the line $l$.

|          Line–Circle Position Relationship           |                                                          Diagram                                                           | Condition (Geometric Interpretation) |
|:----------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:------------------------------------:|
| __Line and circle are separate__<br/>No Intersection | ![Line circle relationship diagram 1.svg](../../public/math/Core%20Courses/Line%20circle%20relationship%20diagram%201.svg) |                $d>r$                 |
| __Line tangent to circle__<br/>1 Intersection Point  | ![Line circle relationship diagram 2.svg](../../public/math/Core%20Courses/Line%20circle%20relationship%20diagram%202.svg) |                $d=r$                 |
| __Line intersects circle__<br/>2 Intersection Points | ![Line circle relationship diagram 3.svg](../../public/math/Core%20Courses/Line%20circle%20relationship%20diagram%203.svg) |                $d<r$                 |

- ###### Chord length of a circle   
  - Derived from the pythagorean theorem.   
  - $\textsf{chord length} = 2\sqrt{r^2-d^2}$      
    ![Circle chord length.svg](../../public/math/Core%20Courses/Circle%20chord%20length.svg)  


## 7.Relationship Between Two Circles  
- Let $O_1:\,(x-x_1)^2+(y-y_1)^2=r_1^2$, and $O_2:\,(x-x_2)^2+(y-y_2)^2=r_2^2$, where we may assume $r_1>r_2$. Let $d$ be the distance between the centers $(x_1, y_1)$ and $(x_2, y_2)$.

|       Circle–Circle Position Relationship       |                                                          Diagram                                                           | Condition (Geometric Interpretation) | 	Number of Common Internal Tangents | Number of Common External Tangents |
|:-----------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:------------------------------------:|:-----------------------------------:|:----------------------------------:|
|   __Externally separate__<br/>No Intersection   | ![Two circles relationship diagram 1.svg](../../public/math/Core%20Courses/Two%20circles%20relationship%20diagram%201.svg) |             $d>r_1+r_2$              |                  2                  |                 2                  |
| __Externally tangent__<br/>1 Intersection Point | ![Two circles relationship diagram 2.svg](../../public/math/Core%20Courses/Two%20circles%20relationship%20diagram%202.svg) |             $d=r_1+r_2$              |                  1                  |                 2                  |
|   __Intersecting__<br/>2 Intersection Points    | ![Two circles relationship diagram 3.svg](../../public/math/Core%20Courses/Two%20circles%20relationship%20diagram%203.svg) |    $\|r_1-r_2\|\lt d\lt r_1+r_2$     |                  0                  |                 2                  |
| __Internally tangent__<br/>1 Intersection Point | ![Two circles relationship diagram 4.svg](../../public/math/Core%20Courses/Two%20circles%20relationship%20diagram%204.svg) |           $d=\|r_1-r_2\|$            |                  0                  |                 1                  |
|  __Internally contained__<br/>No Intersection   | ![Two circles relationship diagram 5.svg](../../public/math/Core%20Courses/Two%20circles%20relationship%20diagram%205.svg) |          $d\lt \|r_1-r_2\|$          |                  0                  |                 0                  |

- ###### The range of the distance $d$ between the circles and their position relationship.       
  ![Circle distance range position axis.svg](../../public/math/Core%20Courses/Circle%20distance%20range%20position%20axis.svg)   


## 8.Focus 3
__The positional relationship between a point and a circle__   
- First, substitute the point into the equation of the circle, then make the judgment.  



### $\fbox{26}\:$If the point $\small P(2m, m)$ lies inside the circle $\small x^2+y^2-4x+2y+1=0$, what is the range of values for $\small m\,\mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{5} < m < 1 &
\textsf{(B)} \: -\frac{1}{5} < m < 1 &
\textsf{(C)} \: m \lt \frac{1}{5} \lor m \gt 1 & \\
\textsf{(D)} \: -1 < m < \frac{1}{5} &
\textsf{(E)} \: -1 < m < -\frac{1}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{the point is inside the circle}\Rightarrow < r^2 \\
P(2m, m) \\
4m^2+m^2-8m+2m+1<0 & \textsf{substitute }P \\
5m^2-6m+1<0 \\
5m^2-6m+1\Rightarrow(1m-1)(5m-1)=0 \\
m=1 \lor m=\frac{1}{5} \\
\textsf{parabola analysis} \\
5>0:\, \textsf{opens upward} \\
\textsf{roots}:\, \textsf{intersects x-axis at }x=\frac{1}{5}\textsf{ and }x=1 \\
\textsf{range}:\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow \frac{1}{5} < m < 1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $f(x)<0 \longrightarrow \frac{1}{5} < m < 1$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x_p-x_0)^2+(y_p-y_0)^2
  \begin{cases}
  \lt r^2\textsf{ the point lies inside the circle} \\
  =r^2\textsf{ the point lies on the circle} \\
  \gt r^2\textsf{ the point lies outside the circle} \\
  \end{cases} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_5-position-of-a-point-relative-to-a-circle}{\textsf{point-circle relationship}} \\
  \end{array}
  >$

  :::
---
  
## 9.Focus 4
__The positional relationship between a line and a circle__   
- First, find __the distance $\boldsymbol{d}$ from the center of the circle to the line__. 
  Then compare __the sizes of $\boldsymbol{d}$ and $\boldsymbol{r}$__ to __determine their relationship__. 
  The most important positional relationship is tangency. 
  Additionally, when the line intersects the circle, 
  you should be able to use __the pythagorean theorem to find the chord length__:
  $\textsf{chord length} = \boldsymbol{2\sqrt{r^2-d^2}}$.


### $\fbox{27}\:$If the line $\small y=k(x+2)$ is a tangent to the circle $\small x^2+y^2=1$, then what is the value of $\small k\,\mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: \pm\frac{\sqrt{3}}{2} &
\textsf{(B)} \: \frac{\sqrt{3}}{3} &
\textsf{(C)} \: -\frac{\sqrt{3}}{3} &
\textsf{(D)} \: \pm\frac{\sqrt{3}}{3} &
\textsf{(E)} \: \pm\sqrt{3} & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric method with $r=d$ to find the intersection point           
  ::: wrap   
  $
  \begin{array}{ll}
  \textsf{to line's general form} \to \textsf{point-to-line distance formula} \\
  y=k(x+2) \\
  y=kx+k2 \\
  0=kx-y+k2 \\
  \textsf{from center }(0,0) \to kx-y+k2=0 \\
  d=\frac{|2k|}{\sqrt{k^2+1^2}}=1 & \textsf{r=1} \\
  |2k|=\sqrt{k^2+1} \\
  (2k)^2=(\sqrt{k^2+1})^2 \\
  4k^2=k^2+1 \\
  3k^2=1 \\
  k^2=\frac{1}{3} \\
  k=\pm\frac{1}{\sqrt{3}} \\
  \frac{1}{\sqrt{3}} \times \frac{\sqrt{3}}{\sqrt{3}}=\frac{\sqrt{3}}{3} \\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
  :::     
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the algebraic method with simultaneous equations to find the intersection point         
  ::: wrap   
  $
  \begin{array}{ll}
  \begin{cases}
  y=k(x+2) \\
  x^2+y^2=1 \\
  \end{cases} \\
  x^2+k^2(x+2)^2=1 \\
  x^2+k^2(x^2+4x+4)=1 \\
  x^2+k^2x^2+4k^2x+4k^2=1 \\
  (1+k^2)x^2+4k^2x+(4k^2-1)=0 \\
  \Delta=0 & \textsf{tangent} \\
  \Delta=(4k^2)^2-4(1+k^2)(4k^2-1)=0 \\
  16k^4-4(1+k^2)(4k^2-1)=0 \\
  16k^4-4[(1)(4k^2-1)+k^2(4k^2-1)]=0 \\
  16k^4-4[4k^2-1+4k^4-k^2]=0 \\
  16k^4-4[3k^2+4k^4-1]=0 \\
  16k^4-[12k^2+16k^4-4]=0 \\
  16k^4-16k^4-12k^2+4=0 \\
  -12k^2+4=0 \\
  k^2=\frac{-4}{-12}=\frac{1}{3} \\
  k=\pm\frac{1}{\sqrt{3}} \\
  \frac{1}{\sqrt{3}} \times \frac{\sqrt{3}}{\sqrt{3}}=\frac{\sqrt{3}}{3} \\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{3}}\:$ Solve by using graphical analysis to find the intersection point (only applicable in simple or special cases)       
  ![Question circles figure Q-27 solve-1.svg](../../public/math/Core%20Courses/Question%20circles%20figure%20Q-27%20solve-1.svg)   
  ::: wrap   
  $
  \begin{array}{ll}
  y=k(x+2) \\
  y=y_0+k(x_0+2) \\
  \overbrace{y_0=0 \Longrightarrow \textsf{the x-intercept of the line is (–2, 0)}}^{\textsf{let both sides = 0}} \\
  \textsf{r=1} & (x-x_0)^2+(y-y_0)^2=r^2 \\
  1:\sqrt{3}:2 = 30^\circ,60^\circ,90^\circ & \textsf{special right triangle} \\
  30^\circ=\frac{\sqrt{3}}{3} & \textsf{angle–slope reference}\\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $k=\pm\frac{\sqrt{3}}{3}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=r & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_6-relationship-between-a-line-and-a-circle}{\textsf{line circle relationship}} \\
  d=\frac{|c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20Courses/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20lower.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  ax+by+c=0 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#general-form}{\textsf{general form of a line}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#point-slope-form}{\textsf{point-slope form}} \\
  \Delta=b^2-4ac
  \begin{cases}
  \gt0:\,\textsf{two distinct real roots → intersecting} \\
  =0:\,\textsf{one real root (a repeated root) → tangent} \\
  \lt0:\,\textsf{no real roots → separate} \\
  \end{cases} & \href{https://en.wikipedia.org/wiki/Discriminant}{\textsf{quadratic discriminant}} \\
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \textsf{perfect square formula} \\
  30^\circ=\frac{\sqrt{3}}{3} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-common-inclination-angles-and-slope}{\textsf{inclination angle–slope}} \\
  1:\sqrt{3}:2 & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#in-a-right-triangle-the-ratio-of-the-three-sides-is}{\textsf{30-60-90 right triangle}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{standard form of a circle}} \\
  \end{array}
  >$

  :::
---


### $\fbox{28}\:$Given that the center of the circle $\small C$ is the intersection point of the line $\small x-y+1=0$ and the x-axis, and that the circle $\small C$ is tangent to the line $\small x+y+3=0$, find the equation of the circle $\small C$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: (x-1)^2+y^2=2 &
\textsf{(B)} \: (x+1)^2+y^2=2 & \\
\textsf{(C)} \: (x+1)^2+y^2=4 &
\textsf{(D)} \: x^2+(y+1)^2=2 & \\
\textsf{(E)} \: x^2+(y-1)^2=2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x-y+1=0 \\
y=x+1 & \textsf{slope-intercept form} \\
\overbrace{y=0 \Longrightarrow \textsf{the x-intercept of the line is (–1, 0)}}^{\textsf{let both sides = 0}} & \textsf{center} \\
x+y+3=0 \\
d=\frac{|-1+3|}{\sqrt{1+1}}=\frac{2\sqrt{2}}{2}=\sqrt{2} & \textsf{substitute }(-1, 0) \\
r=\sqrt{2} \\
(x-(-1))^2+(y-0)^2=\sqrt{2}^2 \\
(x+1)^2+y^2=2 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $(x+1)^2+y^2=2$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  y=kx+b & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#slope-intercept-form}{\textsf{slope-intercept form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20Courses/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20lower.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{standard form of a circle}} \\
  \end{array}
  >$

  :::
---


### $\fbox{29}\:$What is the length of the chord cut from the circle $\small x^2+y^2-2x-4y=0$ by the line $\small x+2y-5+\sqrt{5}=0 \, \mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 4 &
\textsf{(D)} \: 6 &
\textsf{(E)} \: 4\sqrt{6} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x^2+y^2-2x-4y=0 \\
(x+\frac{-2}{2})^2+(y+\frac{-4}{2})^2=\frac{(-2)^2+(-4)^2-4\times0}{4} \\
(x-1)^2+(y-2)^2=5 & r=\sqrt{5} \\
(-\frac{a}{2}, -\frac{b}{2}) \longrightarrow (1,2) \\
x+2y-5+\sqrt{5}=0 \\
d=\frac{|(1\times 1)+(2\times 2)+(-5+\sqrt{5})|}{\sqrt{1^2+2^2}}=\frac{\sqrt{5}}{\sqrt{5}}=1 & \textsf{substitute }(1,2) \\
\textsf{chord length}=2\sqrt{\sqrt{5}^2-1^2}=2\sqrt{4}=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{chord length}=4$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#it-can-be-completed-into-the-standard-form}{\textsf{complete to standard form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20Courses/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20lower.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  2\sqrt{r^2-d^2} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#chord-length-of-a-circle}{\textsf{chord length of the circle}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#center}{\textsf{center of the standard-form circle}} \\
  \end{array}
  >$

  :::
---


### $\fbox{30}\:$If the line $\small x−y+1=0$ and the circle $\small (x-a)^2+y^2=2$ have a common point, then what is the range of values for the real number $\small a \, \mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: [-4, 1] &
\textsf{(B)} \: [-3, 1] &
\textsf{(C)} \: (-3, 1) & \\
\textsf{(D)} \: [1, 4] &
\textsf{(E)} \: [-3, 3] & \\
\end{array}
$  
:::
#### Solution
- Have a common point $\Longrightarrow$ __tangent__ and __intersecting__   
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric method with $d \le r$ to find the intersection points  
  ::: wrap   
  $
  \begin{array}{ll}
  (x-a)^2+y^2=2 & r=\sqrt{2}\\
  (-\frac{a}{2}, -\frac{b}{2}) \longrightarrow (a, 0) \\
  \textsf{from center }(a, 0) \to x−y+1=0 \\
  d=\frac{|(1\times a)+(-1\times 0)+1|}{\sqrt{1^2+1^2}} \le \sqrt{2} \Longrightarrow |a+1| \le 2 & \textsf{substitute }(a, 0) \\
  -2 \le a+1 \le 2  & ∣x∣ \le c \iff −c \le x \le c \\
  -2-1 \le a \le 2-1 \\
  -3 \le a \le 1 \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the algebraic method with simultaneous equations to find the intersection points
  ::: wrap   
  $
  \begin{array}{ll}
  \begin{cases}
  x−y+1=0 \rightarrow y=x+1\\
  (x-a)^2+y^2=2 \\
  \end{cases} \\
  (x-a)^2+(x+1)^2=2 \\
  x^2-2ax+a^2+x^2+2x+1=2 \\
  2x^2+(-2a+2)x+(a^2+1)=2 \\
  2x^2+(-2a+2)x+(a^2+1-2)=0 \\
  2x^2+(2-2a)x+a^2-1=0 \\
  \Delta \gt 0 & \textsf{tangent or intersect} \\
  \Delta=(2-2a)^2-8(a^2-1) \ge 0 \\
  4-8a+4a^2-8a^2+8 \ge 0 \\
  -4a^2-8a+12 \ge 0 \\
  a^2+2a-3 \le 0 \\
  a^2+2a-3\Rightarrow(a+3)(a-1)=0 \\
  a=-3 \lor a=1 \\
  \textsf{parabola analysis} \\
  1>0:\, \textsf{opens upward} \\
  \textsf{roots}:\, \textsf{intersects x-axis at }x=-3\textsf{ and }x=1 \\
  \textsf{range}:\, f(x)\le0\textsf{ between the two roots} \\
  f(x)\le0 \longrightarrow -3 \le a \le 1 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $-3 \le a \le 1$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#center}{\textsf{center of the standard-form circle}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20Courses/27%20Chapter7%20analytic%20geometry%20Module2%20straight%20lines%20lower.html#_14-distance-from-a-point-to-a-line}{\textsf{point-to-line distance formula}} \\
  ∣x∣ \le c \iff −c \le x \le c & \textsf{absolute value inequality expansion} \\
  \Delta=b^2-4ac
  \begin{cases}
  \gt0:\,\textsf{two distinct real roots → intersecting} \\
  =0:\,\textsf{one real root (a repeated root) → tangent} \\
  \lt0:\,\textsf{no real roots → separate} \\
  \end{cases} & \href{https://en.wikipedia.org/wiki/Discriminant}{\textsf{quadratic discriminant}} \\
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \textsf{perfect square formula} \\
  \end{array}
  >$

  :::
---

## 10.Focus 5
__The positional relationship between two circles__   
- First, find __the distance $\boldsymbol{d}$ between the centers of the two circles__,
  then __compare it with $\boldsymbol{r_1+r_2}$ and $\boldsymbol{|r_1-r_2|}$__ to __determine their relationship__.
  The most important cases are __internal tangency__ and __external tangency__.
  additionally,
  pay attention to how __these positional relationships__ correspond to __the number of common tangents__.


### $\fbox{31}\:$The radii of two circles are the two roots of the equation $\small x^2-3x+2=0$, and the distance between the centers of the two circles is $\small 3$. What is the positional relationship between the two circles $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{externally separate} &
\textsf{(B)} \: \textsf{externally tangent} & 
\textsf{(C)} \: \textsf{internally tangent} & \\
\textsf{(D)} \: \textsf{intersecting} & 
\textsf{(E)} \: \textsf{internally contained} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x^2-3x+2=0 \\
(x-1)(x-2)=0 \\
r_1=1 \lor r_2=2 \\
d=3=r_1+r_2 \Longrightarrow \textsf{externally tangent} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $d=r_1+r_2 \Longrightarrow \textsf{externally tangent}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=r_1+r_2 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_7-relationship-between-two-circles}{\textsf{two circles relationship}} \\
  \end{array}
  >$

  :::
---


### $\fbox{32}\:$The two circles $\small (x-a)^2+(y-b)^2=r^2$ and $\small (x-b)^2+(y-a)^2=r^2$ are tangent to each other, then $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (a-b)^2=r^2 &
\textsf{(B)} \: (a-b)^2=2r^2 &
\textsf{(C)} \: (a+b)^2=r^2 & \\
\textsf{(D)} \: (a+b)^2=2r^2 &
\textsf{(E)} \: (a-b)^2=3r^2 & \\
\end{array}
$  
:::
#### Solution
 
- Tangent to each other $\Longrightarrow$ __internally tangent__ and __externally tangent__   
  - Note: $d=|r_1-r_2|=0$, no internal tangent — coincident centers merge into one circle   
- Use the condition for the circles to be externally tangent $d=r_1+r_2$ to solve    
  ::: wrap   
  $
  \begin{array}{ll}
  r_1=r_2=r & \textsf{same radius} \\
  (a,b) \land (b,a) & \textsf{centers of two circles}\\
  d=\sqrt{(a-b)^2+(b-a)^2}=r+r=2r \\
  2(a-b)^2=4r^2 \\
  (a-b)^2=2r^2 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $(a-b)^2=2r^2$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  d=r_1+r_2 \\
  d=|r_1-r_2| \\
  \end{cases} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#_7-relationship-between-two-circles}{\textsf{two circles relationship}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{standard form of a circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{33}\:$How many common tangents do the circles $\small C_1: x^2+y^2+2x+2y-2=0$ and $\small C_2: x^2+y^2-4x-2y+1=0$ have $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 0 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: 3 &
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
C_1:\,(x+\frac{2}{2})^2+(y+\frac{2}{2})^2=\frac{2^2+2^2-4(-2)}{4} \\
(x+1)^2+(y+1)^2=4 \longrightarrow (-1, -1) \land r_1=2 \\
C_2:\,(x+\frac{-4}{2})^2+(y+\frac{-2}{2})^2=\frac{(-4)^2+(-2)^2-4(1)}{4} \\
(x-2)^2+(y-1)^2=4 \longrightarrow (2, 1) \land r_2=2 \\
d=\sqrt{(2-(-1))^2+(1-(-1))^2}=\sqrt{13} \approx 3.6 \\
r_1-r_2 \lt \sqrt{13} \lt r_1+r_2 \Longrightarrow \textsf{intersecting} \\
\textsf{intersecting} \Rightarrow \textsf{only 2 common tangents} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{intersecting} \Rightarrow \textsf{only 2 common tangents}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#it-can-be-completed-into-the-standard-form}{\textsf{complete to standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#center}{\textsf{center of the standard-form circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  \textsf{axis position diagram} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#the-range-of-the-distance-between-the-circles-and-their-position-relationship}{\textsf{distance range and positional relationship between circles}} \\
  \end{array}
  >$

  :::
---

::: wrap   
### $\fbox{34}\:$If circle $\small C_1:\,(x-2)^2+(y-1)^2=r^2 (r>0)$ and circle $\small C_2:\,x^2-6x+y^2-8y=0$ have intersection points, then what is the range of values for $\small r \, \mathpunct{?}$.
:::   
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 5-\sqrt{10}\lt r\lt 5 &
\textsf{(B)} \: 5-\sqrt{10}\lt r\lt 5+\sqrt{10} & \\
\textsf{(C)} \: 5-\sqrt{10}\le r\le 5+\sqrt{10} &
\textsf{(D)} \: 5-\sqrt{10}\le r\le 5 & \\
\textsf{(E)} \: 5\le r \le 5+\sqrt{10} & \\
\end{array}
$  
:::
#### Solution
- Have intersection points $\Longrightarrow$ __intersecting__ and __internally tangent__ and __externally tangent__        
  ::: wrap  
  $
  \begin{array}{ll}
  C_2:\,(x+\frac{-6}{2})^2+(y+\frac{-8}{2})^2=\frac{(-6)^2+(-8)^2+(-4\times0)}{4} \\
  (x-3)^2+(y-4)^2=25 \longrightarrow (3, 4) \land r_2=5 \\
  C_1:\,(x-2)^2+(y-1)^2=r^2 \longrightarrow (2, 1) \land r_1=r \textsf{ unknown} \\
  d=\sqrt{(3-2)^2+(4-1)^2}=\sqrt{10}\approx 3.16 \\
  |r_1-r_2| \le d \le r_1+r_2 \\
  |r-5| \le d \le r+5 \\
  d \le r+5 & \textsf{inequality holds directly} \\
  |r-5| \le d \\
  -\sqrt{10} \le r-5 \le \sqrt{10}  & ∣x∣ \le c \iff −c \le x \le c \\
  5-\sqrt{10} \le r \le 5+\sqrt{10}
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $5-\sqrt{10} \le r \le 5+\sqrt{10}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#it-can-be-completed-into-the-standard-form}{\textsf{complete to standard form}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#standard-form}{\textsf{standard form of a circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  \textsf{axis position diagram} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#the-range-of-the-distance-between-the-circles-and-their-position-relationship}{\textsf{distance range and positional relationship between circles}} \\
  ∣x∣ \le c \iff −c \le x \le c & \textsf{absolute value inequality expansion} \\
  \end{array}
  >$

  :::   
- Logical relationship between __having intersection points__ and __intersecting__    
  ::: wrap
  >$
  \begin{array}{ll}
  \underset{1 \lor 2 \textsf{ intersection points}}{\textsf{having intersection points}} \underset{✅}{\overset{❌}{\Longleftrightarrow}} \underset{2 \textsf{ intersection points}}{\textsf{intersecting}} \\
  \underset{0 \textsf{ intersection points}}{\textsf{no intersection points}} \underset{❌}{\overset{✅}{\Longleftrightarrow}} \underset{0 \lor 1 \textsf{ intersection points}}{\textsf{no intersecting}} \\
  \end{array}
  >$

  :::
---


### $\fbox{35}\:$How many common tangents do the circles $\small C_1: x^2+y^2-4x+2y+1=0$ and $\small C_2: x^2+y^2+4x-4y-1=0$ have $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 &
\textsf{(C)} \: 3 &
\textsf{(D)} \: 4 &
\textsf{(E)} \: 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap   
$
\begin{array}{ll}
C_1:\,(x+\frac{-4}{2})^2+(y+\frac{2}{2})^2=\frac{(-4)^2+2^2-4(1)}{4} \\
(x-2)^2+(y+1)^2=4 \longrightarrow (2, -1) \land r_1=2 \\
C_2:\,(x+\frac{4}{2})^2+(y+\frac{-4}{2})^2=\frac{4^2+(-4)^2-4(-1)}{4} \\
(x+2)^2+(y-2)^2=9 \longrightarrow (-2, 2) \land r_2=3 \\
d=\sqrt{(-2-2)^2+(2-(-1))^2}=\sqrt{25}=5 \\
5=r_1+r_2 \Longrightarrow \textsf{externally tangent} \\
\textsf{externally tangent} \Rightarrow \textsf{only 3 common tangents} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{externally tangent} \Rightarrow \textsf{only 3 common tangents}$,
  > so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#it-can-be-completed-into-the-standard-form}{\textsf{complete to standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#center}{\textsf{center of the standard-form circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  \textsf{axis position diagram} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#the-range-of-the-distance-between-the-circles-and-their-position-relationship}{\textsf{distance range and positional relationship between circles}} \\
  \end{array}
  >$

  :::
---


### $\fbox{36}\:$If the circle $\small x^2+y^2=4$ and the circle $\small x^2+y^2-2ax+a^2-1=0$ are internally tangent, then what is the value of $\small a \, \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -1 &
\textsf{(B)} \: 1 &
\textsf{(C)} \: 2 &
\textsf{(D)} \: \pm1 &
\textsf{(E)} \: \pm2 & \\
\end{array}
$  
:::
#### Solution 
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric method with the two-point distance formula to find $a$      
  ::: wrap  
  $
  \begin{array}{ll}
  C_2:\,(x+\frac{-2a}{2})^2+(y+\frac{0}{2})^2=\frac{(-2a)^2+0^2-4(a^2-1)}{4} \\
  (x-a)^2+y^2=1 \longrightarrow (a, 0) \land r_2=1 \\
  C_1:\,x^2+y^2=4 \longrightarrow (0, 0) \land r_1=2 \\
  d=\sqrt{a^2+0^2}=|a|=2-1=1 \\
  |a|=1 \\
  a=\pm1 \\
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using graphical analysis to find $a$ (only applicable in simple cases)    
  ![Question circles figure Q-36 solve-1.svg](../../public/math/Core%20Courses/Question%20circles%20figure%20Q-36%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  C_2:\,(x+\frac{-2a}{2})^2+(y+\frac{0}{2})^2=\frac{(-2a)^2+0^2-4(a^2-1)}{4} \\
  (x-a)^2+y^2=1 \longrightarrow (a, 0) \land r_2=1 \\
  C_1:\,x^2+y^2=4 \longrightarrow (0, 0) \land r_1=2 \\
  \end{array}
  $   
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $a=\pm1$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#it-can-be-completed-into-the-standard-form}{\textsf{complete to standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20Courses/28%20Chapter7%20analytic%20geometry%20Module3%20circles.html#center}{\textsf{center of the standard-form circle}} \\
  d=\sqrt{x^2+y^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  \end{array}
  >$

  :::
---  

| Platform   | Course                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=Tzz3WDdaVEI&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsui2?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95hp-29-chapter7-resolve-geometry-module3-circle.html)         |                                                                   |

