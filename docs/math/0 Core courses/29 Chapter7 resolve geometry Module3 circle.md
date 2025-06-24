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

## 1. Equation of a Circle

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

## 2. Special Circles (Standard Form)  

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
