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
- A circle with center $(x_0,y_0)$ and radius $r$ can be represented by the equation: $(x-x_0)^2+(y-y_0)^2=r^2.$
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
- $x^2+y^2+ax+by+c=0.$  
- ###### It can be completed into the standard form: $(x+\frac{a}{2})^2+(y+\frac{b}{2})^2=\frac{a^2+b^2-4c}{4}.$  
  - Center: $(-\frac{a}{2},-\frac{b}{2}).$
  - Radius: $r=\frac{a^2+b^2-4c}{2}.$
- Special cases:
  - $a=0: x^2+y^2+by+c=0.$ Center on the $y$-axis.
  - $b=0: x^2+y^2+ax+c=0.$ Center on the $x$-axis. 
  - $c=0: x^2+y^2+ax+by+c=0.$ The function passes through the origin.
- ###### Note: The condition for the general form to represent a circle is $a^2+b^2-4c>0.$  
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

|  	Special Circles   |         Equations         |                                                               Graphs                                                               |       Properties        |
|:-------------------:|:-------------------------:|:----------------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|
|       $x_0=0$       |    $x^2+(y-y_0)^2=r^2$    | ![Special circles standard form graph 1.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%201.svg) | Center on the $y$-axis  |
|       $y_0=0$       |    $(x-x_0)^2+y^2=r^2$    | ![Special circles standard form graph 2.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%202.svg) | Center on the $x$-axis  |
|     $x_0=y_0=0$     |       $x^2+y^2=r^2$       | ![Special circles standard form graph 3.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%203.svg) |  Center at the origin   |
|     $\|y_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 4.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%204.svg) | Tangent to the $x$-axis |
|     $\|x_0\|=r$     | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 5.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%205.svg) | Tangent to the $y$-axis |
| $\|x_0\|=\|y_0\|=r$ | $(x-x_0)^2+(y-y_0)^2=r^2$ | ![Special circles standard form graph 6.svg](../../public/math/Core%20courses/Special%20circles%20standard%20form%20graph%206.svg) |  Tangent to both axes   |

## 3.Focus 1
__Equation of a Circle__   
- Pay attention to the requirements of the circle's equation, as well as the forms of semicircle equations.


::: wrap
### $\fbox{22}\:$Given that $\small x^2+y^2-4x+6y+m=0$ represents a circle, what is the range of values for $\small m\, \mathpunct{?}.$
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
### $\fbox{23}\:$If the equation of a circle is $\small x^2+y^2=1$, then what is the equation of its right semicircle (the part located in the first and fourth quadrants)$\small \,\mathpunct{?}.$
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
- Let $y=0$ to find the points where the circle intersects the $x$-axis; 
  let $x=0$ to find the points where it intersects the $y$-axis.
  If the circle has only one point of intersection with an axis, then it is tangent to that axis.


::: wrap
### $\fbox{24}\:$What are the two points where the circle $\small x^2+(y-1)^2=4$ intersects the $x\text{-}$axis $\small\, \mathpunct{?}.$
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
### $\fbox{25}\:$What is the equation of the circle centered at $\small P(−2,3)$ and tangent to the $y\text{-}$axis$\small \, \mathpunct{?}.$
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
- solve  

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
  be the distance from the center of the circle $(x_0,y_0)$ to the line $l.$

|          Line–Circle Position Relationship           |                                                          Diagram                                                           | Condition (Geometric Interpretation) |
|:----------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:------------------------------------:|
| __Line and circle are separate__<br/>No Intersection | ![Line circle relationship diagram 1.svg](../../public/math/Core%20courses/Line%20circle%20relationship%20diagram%201.svg) |                $d>r$                 |
| __Line tangent to circle__<br/>1 Intersection Point  | ![Line circle relationship diagram 2.svg](../../public/math/Core%20courses/Line%20circle%20relationship%20diagram%202.svg) |                $d=r$                 |
| __Line intersects circle__<br/>2 Intersection Points | ![Line circle relationship diagram 3.svg](../../public/math/Core%20courses/Line%20circle%20relationship%20diagram%203.svg) |                $d<r$                 |

- Chord length of a circle   
  - Derived from the Pythagorean theorem.   
  - $\textsf{Chord length} = 2\sqrt{r^2-d^2}.$    
    ![Circle chord length.svg](../../public/math/Core%20courses/Circle%20chord%20length.svg)  


## 7.Relationship Between Two Circles  
- Let $O_1:\,(x-x_1)^2+(y-y_1)^2=r_1^2,$ and $O_2:\,(x-x_2)^2+(y-y_2)^2=r_2^2,$ where we may assume $r_1>r_2.$ Let $d$ be the distance between the centers $(x_1, y_1)$ and $(x_2, y_2).$

|      Circle–Circle Position Relationship       |                                                          Diagram                                                           | Condition (Geometric Interpretation) | 	Number of Common Internal Tangents | Number of Common External Tangents |
|:----------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:------------------------------------:|:-----------------------------------:|:----------------------------------:|
|        __Separate__<br/>No Intersection        | ![Two circles relationship diagram 1.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%201.svg) |             $d>r_1+r_2$              |                  2                  |                 2                  |
| __External Tangency__<br/>1 Intersection Point | ![Two circles relationship diagram 2.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%202.svg) |             $d=r_1+r_2$              |                  1                  |                 2                  |
|   __Intersection__<br/>2 Intersection Points   | ![Two circles relationship diagram 3.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%203.svg) |    $\|r_1-r_2\|\lt d\lt r_1+r_2$     |                  0                  |                 2                  |
| __Internal Tangency__<br/>1 Intersection Point | ![Two circles relationship diagram 4.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%204.svg) |           $d=\|r_1-r_2\|$            |                  0                  |                 1                  |
|      __Containment__<br/>No Intersection       | ![Two circles relationship diagram 5.svg](../../public/math/Core%20courses/Two%20circles%20relationship%20diagram%205.svg) |          $d\lt \|r_1-r_2\|$          |                  0                  |                 0                  |
