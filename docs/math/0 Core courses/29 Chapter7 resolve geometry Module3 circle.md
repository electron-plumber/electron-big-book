---
title: Chapter7 resolve geometry Module3 circle
lang: en-US
---
| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=Tzz3WDdaVEI&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsui2?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95hp-29-chapter7-resolve-geometry-module3-circle.html)                                    |                                                                   |



# Module 7–03 Circle

## 1.Equation of a Circle

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Standard Form  
- A circle with center $(x_0,y_0)$ and radius $r$ can be represented by the equation: $(x-x_0)^2+(y-y_0)^2=r^2$.
- __Equation derivations__   
  ::: wrap    
  ![Circle standard form derivation.svg](../../public/math/Core%20courses/Circle%20standard%20form%20derivation.svg)  

  $
  \begin{array}{ll}
  \sqrt{(x-x_0)^2+(y-y_0)^2} = r & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-distance-formula-between-two-points}{\text{Two-point distance formula}} \\
  (x-x_0)^2+(y-y_0)^2 = r^2 \\
  \text{Example:} \\
  (x+3)^2+(y-2)^2=4 \\
  \text{Center: }(-3,2) & \text{Letting }r=0\text{ makes the circle shrink to a point — the center} \\
  \text{Radius: }r=2 & 2^2=4 \\
  \end{array}
  $  
  :::

### $\textcolor{#1E3A5F}{\fbox{2}}\:$General Form  
- $x^2+y^2+ax+by+c=0$.  
- ###### It can be completed into the standard form: $(x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4}$.  
  - ###### Center: $(-\frac{a}{2},-\frac{b}{2})$.
  - Radius: $r=\frac{a^2+b^2-4c}{2}$.
- Special cases:
  - $a=0: x^2+y^2+by+c=0$. Center on the y-axis.
  - $b=0: x^2+y^2+ax+c=0$. Center on the x-axis. 
  - $c=0: x^2+y^2+ax+by+c=0$. The function passes through the origin.
- ###### Note: The condition for the general form to represent a circle is $a^2+b^2-4c>0$.  
- __Equation derivations__   
  ::: wrap    

  $
  \begin{array}{ll}
  (x-x_0)^2+(y-y_0)^2 = r^2 & \text{Standard form} \\
  x^2-2x_0x+x_0^2+y^2-2 y_0y+y_0^2 = r^2 & \text{Expand the perfect square} \\
  x^2+y^2-2x_0x-2y_0y+(x_0^2+y_0^2)=r^2 \\
  x^2+y^2-2x_0x-2y_0y+(x_0^2+y_0^2-r^2)=0 \\
  \text{Let }a=-2x_0 \quad b=-2y_0 \quad c=x_0^2+y_0^2-r^2 \\
  x^2+y^2+ax+by+c=0 \\
  \end{array}
  $  
  :::

## 2.Special Circles (Standard Form)  

|  	Special Circles   |         Equations         |                                                               Graphs                                                               |      Properties       |
|:-------------------:|:-------------------------:|:----------------------------------------------------------------------------------------------------------------------------------:|:---------------------:|
|       $x_0=0$       |    $x^2+(y-y_0)^2=r^2$    | ![Special circles standard form graph 1.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%201.svg) | Center on the y-axis  |
|       $y_0=0$       |    $(x-x_0)^2+y^2=r^2$    | ![Special circles standard form graph 2.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%202.svg) | Center on the x-axis  |
|     $x_0=y_0=0$     |       $x^2+y^2=r^2$       | ![Special circles standard form graph 3.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%203.svg) | Center at the origin  |
|     $\|y_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 4.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%204.svg) | Tangent to the x-axis |
|     $\|x_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 5.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%205.svg) | Tangent to the y-axis |
| $\|x_0\|=\|y_0\|=r$ | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 6.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%206.svg) | Tangent to both axes  |

## 3.Focus 1
__Equation of a circle__   
- Pay attention to the requirements of the circle's equation, as well as the forms of semicircle equations.


::: wrap
### $\fbox{22}\:$Given that $\small x^2+y^2-4x+6y+m=0$ represents a circle, what is the range of values for $\small m\, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: m<12 &
(\text{B}) \: m<13 &
(\text{C}) \: m\le12 &
(\text{D}) \: m\le13 &
(\text{E}) \: m>13 & \\
\end{array}
$  
:::
#### Solution
::: wrap
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by completing the square to convert the general form into the standard form  

  $
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} \\
  (x+\frac{-4}{2})^2+(y+\frac{6}{2})^2=\frac{(-4)^2+6^2-4m}{4} \\
  (x-2)^2+(y+3)^2=\frac{16+36-4m}{4}=\frac{52-4m}{4} \\
  (x-2)^2+(y+3)^2=13-m>0 & \text{Radius }> 0\text{ for a valid circle.}\\
  m<13 \\
  \end{array}
  $   
:::  
::: wrap
- $\textcolor{#228B22}{\fbox{2}}\:$Solve using the condition for the general form of a circle.

  $
  \begin{array}{ll}
  x^2+y^2+ax+by+c=0 \\
  a^2+b^2-4c>0 & \text{Necessary condition for a circle.} \\
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
  > $\mathbf{(B)}$  
  > According to the Solution, get $m<13$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#it-can-be-completed-into-the-standard-form}{\text{Complete to standard form}} \\
  x^2+y^2+ax+by+c=0 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#general-form}{\text{General form of a circle}} \\
  a^2+b^2-4c>0 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#note-the-condition-for-the-general-form-to-represent-a-circle-is}{\text{General form circle condition}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{23}\:$If the equation of a circle is $\small x^2+y^2=1$, then what is the equation of its right semicircle (the part located in the first and fourth quadrants)$\small \,\mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: y-\sqrt{1-x^2}=0 &
(\text{B}) \: x-\sqrt{1-y^2}=0 &
(\text{C}) \: y+\sqrt{1-x^2}=0 & \\
(\text{D}) \: x+\sqrt{1-y^2}=0 &
(\text{E}) \: x^2+y^2=\frac{1}{2} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions  
  ![Question circle figure Q-23 solve-1.svg](../../public/math/Core%20courses/Question%20circle%20figure%20Q-23%20solve-1.svg)  

  $
  \begin{array}{ll}
  x^2+y^2=1 \\
  x^2=1-y^2 \\
  x=\sqrt{1-y^2} & x > 0 \textsf{ since it's the right half.} \\
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
  > $\mathbf{(B)}$  
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
__Intersection of a circle and the coordinate axes__
- Let $y=0$ to find the points where the circle intersects the x-axis; 
  let $x=0$ to find the points where it intersects the y-axis.
  If the circle has only one point of intersection with an axis, then it is tangent to that axis.


::: wrap
### $\fbox{24}\:$What are the two points where the circle $\small x^2+(y-1)^2=4$ intersects the $x\text{-}$axis $\small\, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: (-\sqrt{5},0),(\sqrt{5},0) &
(\text{B}) \: (-2,0),(2,0) & \\
(\text{C}) \: (0,-\sqrt{5}),(0,\sqrt{5}) &
(\text{D}) \: (-\sqrt{3},0),(\sqrt{3},0) & \\
(\text{E}) \: (-\sqrt{2},-\sqrt{3}),(\sqrt{2},\sqrt{3}) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\text{Let }y=0 \\
x^2+(0-1)^2=4 \\
x^2+1=4 \\
x=\pm\sqrt{3} \Rightarrow (-\sqrt{3},0),(\sqrt{3},0)\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $x=\pm\sqrt{3} \Rightarrow (-\sqrt{3},0),(\sqrt{3},0)$, so choose $D$. 

  :::
---

::: wrap
### $\fbox{25}\:$What is the equation of the circle centered at $\small P(−2,3)$ and tangent to the $y\text{-}$axis$\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: (x-2)^2+(y+3)^2=4 &
(\text{B}) \: (x+2)^2+(y-3)^2=4 & \\
(\text{C}) \: (x-2)+(y+3)^2=9 &
(\text{D}) \: (x+2)^2+(y-3)^2=9 & \\
(\text{E}) \: (x-3)^2+(y+2)^2=9 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
|x_0|=r & \text{Tangent to the }y\text{-axis} \\
r=|-2|=2 \\
((-2)-x_0)^2+(3-y_0)^2=2^2 \\ 
(x+2)^2+(y-3)^2=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $(x+2)^2+(y-3)^2=4$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  |x_0|=r & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#_2-special-circles-standard-form}{\text{Special circles in standard form}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#standard-form}{\text{Standard form of a circle}} \\
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
  \lt r^2\text{ the point lies inside the circle.} \\
  =r^2\text{ the point lies on the circle.} \\
  \gt r^2\text{ the point lies outside the circle.} \\
  \end{cases}
  $  
  :::   
  ![Point circle relation.svg](../../public/math/Core%20courses/Point%20circle%20relation.svg)  

## 6.Relationship Between a Line and a Circle
- Given the line $l:\,y=kx+b$ and the circle $O:\,(x-x_0)^2+(y-y_0)^2=r^2$, let $d$
  be the distance from the center of the circle $(x_0,y_0)$ to the line $l$.

|          Line–Circle Position Relationship           |                                                          Diagram                                                           | Condition (Geometric Interpretation) |
|:----------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:------------------------------------:|
| __Line and circle are separate__<br/>No Intersection | ![Line circle relationship diagram 1.svg](../../public/math/Core%20courses/Line%20circle%20relationship%20diagram%201.svg) |                $d>r$                 |
| __Line tangent to circle__<br/>1 Intersection Point  | ![Line circle relationship diagram 2.svg](../../public/math/Core%20courses/Line%20circle%20relationship%20diagram%202.svg) |                $d=r$                 |
| __Line intersects circle__<br/>2 Intersection Points | ![Line circle relationship diagram 3.svg](../../public/math/Core%20courses/Line%20circle%20relationship%20diagram%203.svg) |                $d<r$                 |

- ###### Chord length of a circle   
  - Derived from the Pythagorean theorem.   
  - $\textsf{Chord length} = 2\sqrt{r^2-d^2}$.    
    ![Circle chord length.svg](../../public/math/Core%20courses/Circle%20chord%20length.svg)  


## 7.Relationship Between Two Circles  
- Let $O_1:\,(x-x_1)^2+(y-y_1)^2=r_1^2$, and $O_2:\,(x-x_2)^2+(y-y_2)^2=r_2^2$, where we may assume $r_1>r_2$. Let $d$ be the distance between the centers $(x_1, y_1)$ and $(x_2, y_2)$.

|       Circle–Circle Position Relationship       |                                                          Diagram                                                           | Condition (Geometric Interpretation) | 	Number of Common Internal Tangents | Number of Common External Tangents |
|:-----------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:------------------------------------:|:-----------------------------------:|:----------------------------------:|
|   __Externally separate__<br/>No Intersection   | ![Two circles relationship diagram 1.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%201.svg) |             $d>r_1+r_2$              |                  2                  |                 2                  |
| __Externally tangent__<br/>1 Intersection Point | ![Two circles relationship diagram 2.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%202.svg) |             $d=r_1+r_2$              |                  1                  |                 2                  |
|   __Intersecting__<br/>2 Intersection Points    | ![Two circles relationship diagram 3.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%203.svg) |    $\|r_1-r_2\|\lt d\lt r_1+r_2$     |                  0                  |                 2                  |
| __Internally tangent__<br/>1 Intersection Point | ![Two circles relationship diagram 4.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%204.svg) |           $d=\|r_1-r_2\|$            |                  0                  |                 1                  |
|  __Internally contained__<br/>No Intersection   | ![Two circles relationship diagram 5.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%205.svg) |          $d\lt \|r_1-r_2\|$          |                  0                  |                 0                  |

- ###### The range of the distance $d$ between the circles and their position relationship.       
  ![Circle distance range position axis.svg](../../public/math/Core%20courses/Circle%20distance%20range%20position%20axis.svg)   


## 8.Focus 3
__The positional relationship between a point and a circle__   
- First, substitute the point into the equation of the circle, then make the judgment.  


::: wrap
### $\fbox{26}\:$If the point $\small P(2m, m)$ is inside the circle $\small x^2+y^2-4x+2y+1=0$, what is the range of values for $\small m\,\mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: \frac{1}{5} < m < 1 &
(\text{B}) \: -\frac{1}{5} < m < 1 &
(\text{C}) \: m \lt \frac{1}{5} \lor m \gt 1 & \\
(\text{D}) \: -1 < m < \frac{1}{5} &
(\text{E}) \: -1 < m < -\frac{1}{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{The point is inside the circle}\Rightarrow < r^2 \\
P(2m, m) \\
4m^2+m^2-8m+2m+1<0 & \textsf{Substitute }P \\
5m^2-6m+1<0 \\
5m^2-6m+1\Rightarrow(1m-1)(5m-1)=0 \\
m=1 \lor m=\frac{1}{5} \\
\textsf{Parabola Analysis:}\\
5>0:\, \textsf{Opens upward} \\
\textsf{Roots}:\, \textsf{Intersects x-axis at }x=\frac{1}{5}\text{ and }x=1 \\
\textsf{Range}:\, f(x)<0\textsf{ between the two roots} \\
f(x)<0 \longrightarrow \frac{1}{5} < m < 1 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $f(x)<0 \longrightarrow \frac{1}{5} < m < 1$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x_p-x_0)^2+(y_p-y_0)^2
  \begin{cases}
  \lt r^2\text{ the point lies inside the circle.} \\
  =r^2\text{ the point lies on the circle.} \\
  \gt r^2\text{ the point lies outside the circle.} \\
  \end{cases} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#_5-position-of-a-point-relative-to-a-circle}{\text{Point-circle relationship}} \\
  \end{array}
  >$

  :::
---
  
## 9.Focus 4
__The positional relationship between a line and a circle__   
- First, find the distance d from the center of the circle to the line. 
  Then compare the sizes of d and r to determine their relationship. 
  The most important positional relationship is tangency. 
  Additionally, when the line intersects the circle, 
  you should be able to use __the Pythagorean theorem__ to find the chord length:
  $\textsf{Chord length} = 2\sqrt{r^2-d^2}$.

::: wrap
### $\fbox{27}\:$The line $\small y=k(x+2)$ is a tangent to the circle $\small x^2+y^2=1$. What is the value of $\small k\,\mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: \pm\frac{\sqrt{3}}{2} &
(\text{B}) \: \frac{\sqrt{3}}{3} &
(\text{C}) \: -\frac{\sqrt{3}}{3} &
(\text{D}) \: \pm\frac{\sqrt{3}}{3} &
(\text{E}) \: \pm\sqrt{3} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric method with $r=d$ to find the intersection point           

  $
  \begin{array}{ll}
  \textsf{To line's general form} \to \textsf{point-to-line distance formula.} \\
  y=k(x+2) \\
  y=kx+k2 \\
  0=kx-y+k2 \\
  \textsf{From center }(0,0) \to kx-y+k2=0 \\
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
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the algebraic method with simultaneous equations to find the intersection point         

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
  \Delta=0 & \textsf{Tangent} \\
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
::: wrap  
- $\textcolor{#228B22}{\fbox{3}}\:$ Solve by using graphical analysis to find the intersection point (only applicable in simple or special cases)       
  ![Question circle figure Q-27 solve-1.svg](../../public/math/Core%20courses/Question%20circle%20figure%20Q-27%20solve-1.svg)   

  $
  \begin{array}{ll}
  y=k(x+2) \\
  y=y_0+k(x_0+2) \\
  \overbrace{y_0=0 \Longrightarrow \textsf{the x-intercept of the line is (–2, 0)}}^{\textsf{Let both sides = 0}} \\
  \textsf{r=1} & (x-x_0)^2+(y-y_0)^2=r^2 \\
  1:\sqrt{3}:2 = 30^\circ,60^\circ,90^\circ & \textsf{Special right triangle} \\
  30^\circ=\frac{\sqrt{3}}{3} & \textsf{Angle–slope reference}\\
  k=\pm\frac{\sqrt{3}}{3} \\
  \end{array}
  $   
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $k=\pm\frac{\sqrt{3}}{3}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=r & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#_6-relationship-between-a-line-and-a-circle}{\text{Line circle relationship}} \\
  d=\frac{|c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_14-distance-from-a-point-to-a-line}{\text{Point-to-line distance formula}} \\
  ax+by+c=0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#general-form}{\text{General form of a line}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#point-slope-form}{\text{Point-slope form}} \\
  \Delta=b^2-4ac
  \begin{cases}
  \gt0:\,\textsf{Two distinct real roots → intersecting} \\
  =0:\,\textsf{One real root (a repeated root) → tangent} \\
  \lt0:\,\textsf{No real roots → separate} \\
  \end{cases} & \href{https://en.wikipedia.org/wiki/Discriminant}{\text{Quadratic discriminant}} \\
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \text{Perfect square formula} \\
  30^\circ=\frac{\sqrt{3}}{3} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-common-inclination-angles-and-slope}{\text{Inclination angle–slope reference}} \\
  1:\sqrt{3}:2 & \href{/math/0%20Core%20courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#in-a-triangle-with-angles-the-sides-are-always-in-the-ratio}{\text{Special right triangle: 30-60-90}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#standard-form}{\text{Standard form of a circle}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{28}\:$Given that the center of circle $\small C$ is the intersection point of the line $\small x-y+1=0$ and the x-axis, and that circle $\small C$ is tangent to the line $\small x+y+3=0$, what is the equation of circle $\small C \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: (x-1)^2+y^2=2 &
(\text{B}) \: (x+1)^2+y^2=2 & \\
(\text{C}) \: (x+1)^2+y^2=4 &
(\text{D}) \: x^2+(y+1)^2=2 & \\
(\text{E}) \: x^2+(y-1)^2=2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
x-y+1=0 \\
y=x+1 & \textsf{Slope-intercept form} \\
\overbrace{y=0 \Longrightarrow \textsf{the x-intercept of the line is (–1, 0)}}^{\textsf{Let both sides = 0}} & \textsf{Center} \\
x+y+3=0 \\
d=\frac{|-1+3|}{\sqrt{1+1}}=\frac{2\sqrt{2}}{2}=\sqrt{2} & \textsf{Substitute }(-1, 0) \\
r=\sqrt{2} \\
(x-(-1))^2+(y-0)^2=\sqrt{2}^2 \\
(x+1)^2+y^2=2 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $(x+1)^2+y^2=2$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  y=kx+b & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#slope-intercept-form}{\text{Slope-intercept form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_14-distance-from-a-point-to-a-line}{\text{Point-to-line distance formula}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#standard-form}{\text{Standard form of a circle}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{29}\:$What is the length of the chord of the circle $\small x^2+y^2-2x-4y=0$ intercepted by the line $\small x+2y-5+\sqrt{5}=0 \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: 1 &
(\text{B}) \: 2 &
(\text{C}) \: 4 &
(\text{D}) \: 6 &
(\text{E}) \: 4\sqrt{6} & \\
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
d=\frac{|(1\times 1)+(2\times 2)+(-5+\sqrt{5})|}{\sqrt{1^2+2^2}}=\frac{\sqrt{5}}{\sqrt{5}}=1 & \textsf{Substitute }(1,2) \\
\textsf{Chord length}=2\sqrt{\sqrt{5}^2-1^2}=2\sqrt{4}=4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(C)}$  
  > According to the Solution, get $\textsf{Chord length}=4$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#it-can-be-completed-into-the-standard-form}{\text{Complete to standard form}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_14-distance-from-a-point-to-a-line}{\text{Point-to-line distance formula}} \\
  2\sqrt{r^2-d^2} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#chord-length-of-a-circle}{\text{Chord length of the circle}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#center}{\text{Center of the standard-form circle}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{30}\:$If the line $\small x−y+1=0$ and the circle $\small (x-a)^2+y^2=2$ have a common point, then what is the range of values for the real number $\small a \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: [-4, 1] &
(\text{B}) \: [-3, 1] &
(\text{C}) \: (-3, 1) & \\
(\text{D}) \: [1, 4] &
(\text{E}) \: [-3, 3] & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the geometric method with $d \le r$ to find the intersection points

  $
  \begin{array}{ll}
  (x-a)^2+y^2=2 & r=\sqrt{2}\\
  (-\frac{a}{2}, -\frac{b}{2}) \longrightarrow (a, 0) \\
  \textsf{From center }(a, 0) \to x−y+1=0 \\
  d=\frac{|(1\times a)+(-1\times 0)+1|}{\sqrt{1^2+1^2}} \le \sqrt{2} \Longrightarrow |a+1| \le 2 & \textsf{Substitute }(a, 0) \\
  -2 \le a+1 \le 2  & ∣x∣ \le c \iff −c \le x \le c \\
  -2-1 \le a \le 2-1 \\
  -3 \le a \le 1 \\
  \end{array}
  $   
:::  
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the algebraic method with simultaneous equations to find the intersection points

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
  \Delta \gt 0 & \textsf{Tangent or intersect} \\
  \Delta=(2-2a)^2-8(a^2-1) \ge 0 \\
  4-8a+4a^2-8a^2+8 \ge 0 \\
  -4a^2-8a+12 \ge 0 \\
  a^2+2a-3 \le 0 \\
  a^2+2a-3\Rightarrow(a+3)(a-1)=0 \\
  a=-3 \lor a=1 \\
  \textsf{Parabola Analysis:}\\
  1>0:\, \textsf{Opens upward} \\
  \textsf{Roots}:\, \textsf{Intersects x-axis at }x=-3\text{ and }x=1 \\
  \textsf{Range}:\, f(x)\le0\textsf{ between the two roots} \\
  f(x)\le0 \longrightarrow -3 \le a \le 1 \\
  \end{array}
  $   
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $-3 \le a \le 1$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#center}{\text{Center of the standard-form circle}} \\
  d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}} & \href{/math/0%20Core%20courses/28%20Chapter7%20resolve%20geometry%20Module2%20straight%20line%20lower.html#_14-distance-from-a-point-to-a-line}{\text{Point-to-line distance formula}} \\
  ∣x∣ \le c \iff −c \le x \le c & \text{Absolute value inequality expansion} \\
  \Delta=b^2-4ac
  \begin{cases}
  \gt0:\,\textsf{Two distinct real roots → intersecting} \\
  =0:\,\textsf{One real root (a repeated root) → tangent} \\
  \lt0:\,\textsf{No real roots → separate} \\
  \end{cases} & \href{https://en.wikipedia.org/wiki/Discriminant}{\text{Quadratic discriminant}} \\
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \text{Perfect square formula} \\
  \end{array}
  >$

  :::
---

## 10.Focus 5
__The positional relationship between two circles__   
- First, find __the distance $\mathbf{d}$ between the centers of the two circles__,
  then __compare it with $\mathbf{r_1+r_2}$ and $\mathbf{|r_1-r_2|}$__ to determine their relationship.
  The most important cases are __internal tangency__ and __external tangency__.
  additionally,
  pay attention to how __these positional relationships__ correspond to __the number of common tangents__.

::: wrap
### $\fbox{31}\:$The radii of two circles are the roots of the equation $\small x^2-3x+2=0$, and the distance between their centers is $\small 3$. What is the positional relationship between the two circles $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: \textsf{Externally separate} &
(\text{B}) \: \textsf{Externally tangent} & 
(\text{C}) \: \textsf{Internally tangent} & \\
(\text{D}) \: \textsf{Intersecting} & 
(\text{E}) \: \textsf{Internally contained} & \\
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
d=3=r_1+r_2 \Longrightarrow \textsf{Externally tangent} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $d=r_1+r_2 \Longrightarrow \textsf{Externally tangent}$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=r_1+r_2 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#_7-relationship-between-two-circles}{\text{Two circles relationship}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{32}\:$The two circles $\small (x-a)^2+(y-b)^2=r^2$ and $\small (x-b)^2+(y-a)^2=r^2$ are tangent to each other, then $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: (a-b)^2=r^2 &
(\text{B}) \: (a-b)^2=2r^2 &
(\text{C}) \: (a+b)^2=r^2 & \\
(\text{D}) \: (a+b)^2=2r^2 &
(\text{E}) \: (a-b)^2=3r^2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Use the condition for the circles to be externally tangent $d=r_1+r_2$ to solve      
  - Note: $d=|r_1-r_2|=0$, no internal tangent — coincident centers merge into one circle.      

  $
  \begin{array}{ll}
  r_1=r_2=r & \textsf{Same radius} \\
  (a,b) \land (b,a) & \textsf{Centers of two circles}\\
  d=\sqrt{(a-b)^2+(b-a)^2}=r+r=2r \\
  2(a-b)^2=4r^2 \\
  (a-b)^2=2r^2 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $(a-b)^2=2r^2$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  d=r_1+r_2 \\
  d=|r_1-r_2| \\
  \end{cases} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#_7-relationship-between-two-circles}{\text{Two circles relationship}} \\
  (x-x_0)^2+(y-y_0)^2=r^2 & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#standard-form}{\text{Standard form of a circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-distance-formula-between-two-points}{\text{Two-point distance formula}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{33}\:$How many common tangents do the circles $\small C_1: x^2+y^2+2x+2y-2=0$ and $\small C_2: x^2+y^2-4x-2y+1=0$ have $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: 0 &
(\text{B}) \: 1 &
(\text{C}) \: 2 &
(\text{D}) \: 3 &
(\text{E}) \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} \\
C_1:\,(x+\frac{2}{2})^2+(y+\frac{2}{2})^2=\frac{2^2+2^2-4(-2)}{4} \\
(x+1)^2+(y+1)^2=4 \longrightarrow (-1, -1) \land r_1=2 \\
C_2:\,(x+\frac{-4}{2})^2+(y+\frac{-2}{2})^2=\frac{(-4)^2+(-2)^2-4(1)}{4} \\
(x-2)^2+(y-1)^2=4 \longrightarrow (2, 1) \land r_2=2 \\
d=\sqrt{(2-(-1))^2+(1-(-1))^2}=\sqrt{13} \approx 3.6 \\
r_1-r_2 \lt \sqrt{13} \lt r_1+r_2 \Longrightarrow \textsf{Intersecting} \\
\textsf{Intersecting} \Rightarrow \textsf{only 2 common tangents} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(C)}$  
  > According to the Solution, get $\textsf{Intersecting} \Rightarrow \textsf{only 2 common tangents}$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#it-can-be-completed-into-the-standard-form}{\text{Complete to standard form}} \\
  (-\frac{a}{2}, -\frac{b}{2}) & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#center}{\text{Center of the standard-form circle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-distance-formula-between-two-points}{\text{Two-point distance formula}} \\
  \textsf{Axis position diagram} & \href{/math/0%20Core%20courses/29%20Chapter7%20resolve%20geometry%20Module3%20circle.html#the-range-of-the-distance-between-the-circles-and-their-position-relationship}{\text{Distance range and positional relationship between circles}} \\
  \end{array}
  >$

  :::
---
