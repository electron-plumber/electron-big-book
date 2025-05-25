---
title: Chapter7 resolve geometry Module1 rectangular coordinate system Module2 straight line upper
lang: en-US
---
| Platforms   | Courses                                                                                                              | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=RgN-VMM4lXA&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuhu?playlist=x9h6d2)                                                   |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95h9-27-chapter7-resolve-geometry-module1-rectangular-coordinate-system-module2-.html) |                                                                   |


# Module 7-01 The Rectangular Coordinate Plane

## 1.Coordinate Relationships Between Two points  
![Coordinate Relationships Between Two points.svg](../../public/math/Core%20courses/Coordinate%20Relationships%20Between%20Two%20points.svg)   

- Points on the coordinate axis don't belong to any quadrant.   
  - Points on x-axis $(x,0)$.
  - Points on y-axis $(0,y)$.

## 2.Coordinates of The Midpoint Between Two Points
- The coordinates of the midpoint between two points $P_1(x_1,y_1)$ and $P_2(x_2,y_2)$ are $(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2})\boxed{\text{Average}}$.
  - Special case: The midpoint between point $p_1(x_1,y_1)$ and the origin $(0,0)$ is $(\frac{x_1}{2},\frac{y_1}{2})$.
  - __Formula derivations__   
    ::: wrap    
    ![Coordinates of the midpoint between two points.svg](../../public/math/Core%20courses/Coordinates%20of%20the%20midpoint%20between%20two%20points.svg)   

    $
    \begin{array}{ll}
    x_2-x=x-x_1 \\
    x=\frac{x_1+x_2}{2} \\
    y=\frac{y_1+y_2}{2} \\
    p_1+p_2=2P \\
    p=\frac{p_1+p_2}{2} \\
    \end{array}
    $  
    :::

## 3.Distance Formula Between Two Points
- The distance between two points $A(x_1,y_1)$ and $B(x_2,y_2$ is $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.  
- Special case: The distance between point $A(x,y)$ and the origin $(0,0)$ is $d=\sqrt{x^2+y^2}$.  
- __Formula derivations__   
  ::: wrap    
  ![Distance formula between two points.svg](../../public/math/Core%20courses/Distance%20formula%20between%20two%20points.svg)

  $
  \begin{array}{ll}
  c^2=a^2+b^2 \Rightarrow c=\sqrt{a^2+b^2} & \text{Pythagorean theorem} \\
  AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \\
  \end{array}
  $  
  :::  

## 4.Focus 1
__Midpoint formula__   
- Analyze using the midpoint formula $(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2})$.

::: wrap
### $\fbox{1}\:$Given three points $\small A(x,5),B(-2,y)$, and $\small C(1,1)$, if point $\small C$ is the midpoint of segment $\small AB$, then $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: x=4, y=-3 &
(\text{B}) \: x=0, y=3 &
(\text{C}) \: x=0, y=-3 & \\
(\text{D}) \: x=-4, y=-3 &
(\text{E}) \: x=3, y=-4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
A+B=2C \\
\begin{cases}
x-2=1\times 2 \\
5+y=1\times 2 \\
\end{cases}\Rightarrow
\begin{cases}
x=4 \\
y=-3 \\
\end{cases}
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $\begin{cases} x=4 \\ y=-3 \\ \end{cases}$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_2-coordinates-of-the-midpoint-between-two-points}{\text{Midpoint formula}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__Distance formula__  
- Analyze using the distance formula $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.

::: wrap
### $\fbox{2}\:$Given that the length of segment $\small AB$ is $\small 12$, and the coordinates of point $\small A$ are $\small (-4, 8)$, while point $\small B$ has equal $\small x$- and $\small y$-coordinates, then the coordinates of point $\small B$ are $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: (-4,-4) &
(\text{B}) \: (8,8) & \\
(\text{C}) \: (4,4) \lor (8,8) &
(\text{D}) \: (-4,-4) \lor (8,8) & \\
(\text{E}) \: (4,4) \lor (-8,-8) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\text{Let }B=(x, x) \\
AB=\sqrt{(x+4)^2+(x-8)^2}=12 \\
\sqrt{(x+4)^2+(x-8)^2}^2=12^2 \\
(x+4)^2+(x-8)^2=144 \\
(x+4)^2=x^2+8x+16 \\
(x-8)^2=x^2-16x+64 \\
x^2+8x+16+x^2-16x+64=144 \\
2x^2-8x+80=144 \\
2x^2-8x+80-144=0 \\
2x^2-8x-64=0 \\
\frac{2x^2-8x-64}{2}=\frac{0}{2} \\
x^2-4x-32=0 \\
x=\frac{-b\pm \sqrt{b^2-4ac}}{2a} \\
\Delta=(-4)^2-4\times1\times(-32)=16+128=144 \\
x=\frac{4\pm \sqrt{144}}{2}=\frac{4\pm 12}{2} \\
x=\frac{4+12}{2}=8 \lor x=\frac{4-12}{2}=-4 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(D)}$  
  > According to the Solution, get $x=8 \lor x=-4 \\$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-distance-formula-between-two-points}{\text{Distance formula}} \\
  x=\frac{-b\pm \sqrt{b^2-4ac}}{2a} & \href{https://en.wikipedia.org/wiki/Quadratic_formula}{\text{Quadratic formula}} \\
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \href{https://www.geeksforgeeks.org/perfect-squares/}{\text{Perfect square formula}} \\
  \end{array}
  >$

  :::
---
