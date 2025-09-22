---
title: Chapter7 Analytic Geometry – Module1 Cartesian Coordinate System, Module2 Straight Lines Upper
lang: en-US
---

# Module 7–01 Cartesian Coordinate System

## 1.Coordinate Relationship Between Two Points  
![Coordinate Relationship Between Two points.svg](../../public/math/Core%20Courses/Coordinate%20Relationship%20Between%20Two%20points.svg)   

- Points on the coordinate axis don't belong to any quadrant.   
  - points on x-axis $(x,0)$.
  - points on y-axis $(0,y)$.

## 2.The Coordinates of the Midpoint Between Two Points
- The coordinates of the midpoint between two points $p_1(x_1,y_1)$ and $p_2(x_2,y_2)$ are $(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2})\boxed{\textsf{Average}}$.
  - Special case: the midpoint between point $p_1(x_1,y_1)$ and the origin $(0,0)$ is $(\frac{x_1}{2},\frac{y_1}{2})$.
  - __Formula derivation__  
    ![Midpoint coordinates formula derivations.svg](../../public/math/Core%20Courses/Midpoint%20coordinates%20formula%20derivations.svg)       
    ::: wrap  
    $
    \begin{array}{ll}
    x_2-x=x-x_1 \\
    x=\frac{x_1+x_2}{2} \\
    y=\frac{y_1+y_2}{2} \\
    p_1+p_2=2p \\
    p=\frac{p_1+p_2}{2} \\
    \end{array}
    $  
    :::

## 3.Distance Formula Between Two Points
- The distance between two points $A(x_1,y_1)$ and $B(x_2,y_2)$ is $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.  
- Special case: the distance between point $A(x,y)$ and the origin $(0,0)$ is $d=\sqrt{x^2+y^2}$.  
- __Formula derivation__  
  ![Distance formula between two points derivations.svg](../../public/math/Core%20Courses/Distance%20formula%20between%20two%20points%20derivations.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  c^2=a^2+b^2 \Rightarrow c=\sqrt{a^2+b^2} & \textsf{pythagorean theorem} \\
  AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} \\
  \end{array}
  $  
  :::  

## 4.Focus 1
__The midpoint formula__   
- Analyze using the midpoint formula $(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2})$.


### $\fbox{1}\:$Given three points $\small A(x,5),B(-2,y)$, and $\small C(1,1)$, if point $\small C$ is the midpoint of segment $\small AB$, then $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: x=4, y=-3 &
\textsf{(B)} \: x=0, y=3 &
\textsf{(C)} \: x=0, y=-3 & \\
\textsf{(D)} \: x=-4, y=-3 &
\textsf{(E)} \: x=3, y=-4 & \\
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
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $\begin{cases} x=4 \\ y=-3 \\ \end{cases}$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}) & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-the-coordinates-of-the-midpoint-between-two-points}{\textsf{midpoint formula}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__The distance formula__  
- Analyze using the distance formula $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.


### $\fbox{2}\:$Given that the length of segment $\small AB$ is $\small 12$, point $\small A$ has coordinates $\small (-4, 8)$, and point $\small B$ has equal x- and y-coordinates, what are the coordinates of point $\small B \, \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (-4,-4) &
\textsf{(B)} \: (8,8) & \\
\textsf{(C)} \: (4,4) \lor (8,8) &
\textsf{(D)} \: (-4,-4) \lor (8,8) & \\
\textsf{(E)} \: (4,4) \lor (-8,-8) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{let }B=(x, x) \\
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
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=8 \lor x=-4 \\$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  x=\frac{-b\pm \sqrt{b^2-4ac}}{2a} & \href{https://en.wikipedia.org/wiki/Quadratic_formula}{\textsf{quadratic formula}} \\
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{3}\:$In an equilateral triangle $\small ABC$, two vertices are $\small A(2,0)$ and $\small B(5,3\sqrt{3})$. What are the coordinates of the third vertex $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: (8, 0) &
\textsf{(B)} \: (-8, 0) &
\textsf{(C)} \: (1, -3\sqrt{3}) & \\
\textsf{(D)} \: (8, 0) \lor (-1, 3\sqrt{3}) &
\textsf{(E)} \: (6, 0) \lor (-1, 3\sqrt{3}) & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  - equilateral triangle: $AB=AC=BC$    
  ![Question cartesian coordinate system figure Q-3 solve-1.svg](../../public/math/Core%20Courses/Question%20cartesian%20coordinate%20system%20figure%20Q-3%20solve-1.svg)  
  ::: wrap   
  $
  \begin{array}{ll}
  \textsf{let }C=(x, y) \\
  \sqrt{3^2+(3\sqrt{3})^2}=\sqrt{(x-2)^2+y^2}=\sqrt{(x-5)^2+(y-3\sqrt{3})^2} \\
  \sqrt{3^2+(3\sqrt{3})^2}=\sqrt{9+(9\times3)}=6\\
  \textsf{there are two equations and two unknowns, and solving them is too complicated, } \\
  \textsf{so it is better to substitute the options directly}\\
  \textsf{(A)}
  \begin{cases}
  \begin{array}{ll}
  \sqrt{(8-2)^2+0^2}=6 \\
  \sqrt{(8-5)^2+(0-3\sqrt{3})^2}\ne6 \\
  \end{array}
  \end{cases}\,❌\; \\
  \textsf{(D)}
  \begin{cases}
  \begin{array}{ll}
  \sqrt{(8-2)^2+0^2}=6 \\
  \sqrt{(-1-5)^2+(3\sqrt{3}-3\sqrt{3})^2}=6 \\
  \end{array}
  \end{cases}\,✅\; \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $AB=AC=BC=6$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#_16-equilateral-triangle}{\textsf{equilateral triangle}} \\
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-distance-formula-between-two-points}{\textsf{two-point distance formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is an isosceles right triangle  
  ::: wrap   
  >$
  \begin{array}{ll}
  \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#_15-isosceles-right-triangle}{\textsf{isosceles right triangle: }}AC=BC=\sqrt{2}AB \implies AB=\sqrt{2}AC=\sqrt{2}BC \\
  \textsf{let }C=(x, y) \\
  \sqrt{3^2+(3\sqrt{3})^2}=\sqrt{2}\times\sqrt{(x-2)^2+y^2}=\sqrt{2}\times\sqrt{(x-5)^2+(y-3\sqrt{3})^2} \\
  \textsf{after that, directly substitute the options}\\
  \end{array}
  >$

  :::
---

# Module 7–02 Straight Lines

## 1.Angle of Inclination
- __The angle__ formed between a straight line and __the positive direction of the x-axis__ is called __the angle of inclination__,
  denoted as $\boldsymbol{\alpha}$, where $\alpha \in [0, \pi)$.  
  ![Angle of inclination with x-axis figure 7-1.svg](../../public/math/Core%20Courses/Angle%20of%20inclination%20with%20x-axis%20figure%207-1.svg)      
- Note: when __a line is horizontal__, its __angle of inclination is $\boldsymbol{0^\circ}$__.
  When __a line is vertical__, its __angle of inclination is $\boldsymbol{90^\circ}$__.  
  - counterclockwise rotation increases $\alpha$.  
  - clockwise rotation decreases $\alpha$.  

  <ThemeAwareImage
    dark-src="/math/Core%20Courses/Angle%20of%20inclination%20with%20x-axis%20figure%207-1%20black%20solve-1.gif"
    light-src="/math/Core%20Courses/Angle%20of%20inclination%20with%20x-axis%20figure%207-1%20white%20solve-1.gif"
  />  


## 2.Definition of Slope
- The tangent of the inclination angle is the slope, denoted as $k=\textsf{tan}\alpha, \alpha=\frac{\pi}{2}$.  
  - $\boldsymbol{\alpha=\frac{\textsf{opposite}}{\textsf{adjacent}}}$  
  ![Tan alpha slope figure 7-2.svg](../../public/math/Core%20Courses/Tan%20alpha%20slope%20figure%207-2.svg)  
- __Remarks__  
  - When $\alpha=0, \boldsymbol{k=0}$; __zero numerator__.
  - When $0<\alpha<90^\circ, \boldsymbol{k>0}$.
  - When $\alpha=90^\circ$, __$\boldsymbol{k}$ is undefined__; __zero denominator__.
  - When $90^\circ<\alpha<180^\circ, \boldsymbol{k<0}$.  

  ![Tan alpha slope figure 7-2 solve-1.svg](../../public/math/Core%20Courses/Tan%20alpha%20slope%20figure%207-2%20solve-1.svg)  

## 3.Common Inclination Angles and Slope
- __Supplementary angles__: their tangents are __opposite numbers__.   
  - $\boldsymbol{\textsf{tan}(180^\circ-\theta)=-\textsf{tan}\theta}$   

| Inclination Angle $\boldsymbol{(\alpha)}$ | Slope $\boldsymbol{k=\textsf{tan}\alpha}$ |
|-------------------------------------------|-------------------------------------------|
| $0^\circ$                                 | $0$                                       |
| $30^\circ$                                | $\frac{\sqrt{3}}{3}$                      |
| $45^\circ$                                | $1$                                       |
| $60^\circ$                                | $\sqrt{3}$                                |
| $90^\circ$                                | $\infty \lor$undefined                    |
| $120^\circ$                               | $-\sqrt{3}$                               |
| $135^\circ$                               | $-1$                                      |
| $150^\circ$                               | $-\frac{\sqrt{3}}{3}$                     |
| $180^\circ$                               | $0$                                       |


## 4.Two-Point Slope Formula
- Let there be __two points $\boldsymbol{P_1(x_1,y_1)}$ and $\boldsymbol{P_2(x_2,y_2)}$__ in __a straight line $\boldsymbol{l}$__,
  then $k=\frac{y_2-y_1}{x_2-x_1}, \boldsymbol{x_1 \ne x_2}$.  
- __Special cases__   
  - If $y_2=y_1$, the line is __horizontal__, and $k=0$.
  - If $x_2=x_1$, the line is __vertical__, and $k=\infty\lor$undefined.  
  - ###### The slope between $(x,y)$ and $(0,0)$ is $k=\frac{y}{x}$.  

  ![Line slope two points.svg](../../public/math/Core%20Courses/Line%20slope%20two%20points.svg)


## 5.Focus 1
__The inclination angle and slope__  
- Pay attention to special inclination angels, __such as $\boldsymbol{90^\circ}$__, and observe __the sign and magnitude changes__ of the slope.  



### $\fbox{4}\:$How many correct statements are there about the inclination angle and slope $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{the greater the inclination angle, the greater the slope} & \\
\textsf{(2)} \: \textsf{when the inclination angle is }135^\circ\textsf{, the slope is }1 & \\ 
\textsf{(3)} \: \textsf{when the inclination angle is less than }90^\circ, \\
                \hspace{0.7cm} \textsf{the greater the inclination angle, the greater the slope} & \\
\textsf{(4)} \: \textsf{when the inclination angle is greater than }90^\circ, \\
                \hspace{0.7cm} \textsf{the larger the inclination angle, the smaller the slope} & \\
\textsf{(A)} \: 0 & \\
\textsf{(B)} \: 1 & \\
\textsf{(C)} \: 2 & \\
\textsf{(D)} \: 3 & \\
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \:
\begin{cases}
\alpha=45^\circ \Rightarrow k=1 \\
\alpha=135^\circ \Rightarrow k=-1 \\
\end{cases} \,❌\;\\
\textsf{(2)} \: \alpha>90^\circ \Rightarrow k<0 \,❌\;\\
\textsf{(3)} \: \boxed{0 \le \alpha<90^\circ} \implies \alpha \uparrow \,\Rightarrow k \uparrow \,✅\;\\
\textsf{(4)} \: \boxed{\alpha>90^\circ} \implies \alpha \uparrow \,\Rightarrow k \uparrow \,❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{(3)}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  0<\alpha<90^\circ, k>0 \\
  90^\circ<\alpha<180^\circ, k<0 \\
  \end{cases} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-definition-of-slope}{\textsf{definition of slope}} \\
  135^\circ=-1 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_3-common-inclination-angles-and-slope}{\textsf{inclination angle–slope}} \\
  \end{array}
  >$

  :::  
- $y=kx+b$ [Variation of the slope-intercept line](https://phet.colorado.edu/sims/html/graphing-slope-intercept/latest/graphing-slope-intercept_all.html)  
  ::: wrap  
  > counterclockwise rotation: $k\uparrow$.  
  > clockwise rotation: $k\downarrow$.  
  > - The size of $|k|$ indicates the steepness of the line.
  >   - The larger $|k|$ is, the steeper the line becomes.
  >   - The smaller $|k|$ is, the flatter the line becomes.

  :::
---


### $\fbox{5}\:$If the line $\small l$ intersects the line $\small y=1$ at point $\small P$ and the line $\small x=7$ at point $\small Q$, and the midpoint of segment $\small PQ$ has coordinates $\small (1,−1)$, find the slope of line $\small l$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{3} &
\textsf{(B)} \: -\frac{1}{3} &
\textsf{(C)} \: \frac{2}{3} &
\textsf{(D)} \: -\frac{2}{3} &
\textsf{(E)} \: \frac{3}{2} & \\
\end{array}
$  
:::
#### Solution
- Show known conditions    
  ![Question straight lines figure Q-5 solve-1.svg](../../public/math/Core%20Courses/Question%20straight%20lines%20figure%20Q-5%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  P(x,1) \quad Q(7,y) \\
  \begin{cases}
  x+7=1 \times 2 \\
  1+y=(-1) \times 2 \\
  \end{cases} \Rightarrow
  \begin{cases}
  x=-5 \\
  y=-3 \\
  \end{cases} \\
  P(-5,1) \quad Q(7,-3) \\
  k=\frac{1-(-3)}{-5-7}=\frac{4}{-12}=-\frac{1}{3} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $k=-\frac{1}{3}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  (\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}) & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-the-coordinates-of-the-midpoint-between-two-points}{\textsf{midpoint formula}} \\
  \end{array}
  >$

  :::
---

## 6. Equation of a Line

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Slope-intercept form
- If __the slope $\boldsymbol{k}$__ and the $\overbrace{\textsf{y-intercept }\boldsymbol{b}}^{\textsf{y-axis intersection}}$ are known, the equation of the line can be expressed as $y=kx+b$.  
- __Special cases__  
  - ###### $b=0: y=kx$ (passing through the origin)   
  - $k=0: y=b$ (horizontal line)   
- [slope-intercept demo](https://phet.colorado.edu/sims/html/graphing-slope-intercept/latest/graphing-slope-intercept_all.html)       
![Slope-intercept form.svg](../../public/math/Core%20Courses/Slope-intercept%20form.svg)  

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Point-slope form
- If __the slope $\boldsymbol{k}$__ and __a point $\boldsymbol{(x_0, y_0)}$__ are known,
  the equation of the line can be expressed as $y=y_0+k(x-x_0)$ or $\boldsymbol{\frac{y-y_0}{x-x_0}=k}$.  
- Special case: $(x_0, y_0) \longrightarrow (0,b)$ the point-slope form becomes the slope-intercept form.  
- [point-slope demo](https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html)  
- __Equation derivation__  
  ![Point-slope equation derivation.svg](../../public/math/Core%20Courses/Point-slope%20equation%20derivation.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  y=k(x-x_0)+y_0 \\
  \frac{y-y_0}{x-x_0}=k & \textsf{two-point slope formula} \\
  y=y_0+k(x-x_0) \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Intercept form
- If the x-axis and y-axis intercepts are known to be $a$ and $b$ respectively,
  the equation of the line can be expressed as $\boldsymbol{\frac{x}{a}+\frac{y}{b}=1,(a,b \ne 0)}$.  
![Intercept form.svg](../../public/math/Core%20Courses/Intercept%20form.svg)  


### $\textcolor{#1E3A5F}{\fbox{4}}\:$Two-point form
- If the coordinates of __two points $\boldsymbol{(x_1, y_1)}$ and $\boldsymbol{(x_2, y_2)}$__ are known,
  __the equation of the line__ can be expressed as $\boldsymbol{\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}}$.  
- __Special case__  
  - The intercept form is a special case of the two-point form. 
  - The two-point form can be changed into the point-slope form.
- __Equation derivation__  
  ![Two-point equation derivation.svg](../../public/math/Core%20Courses/Two-point%20equation%20derivation.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1} & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#in-similar-triangles-or-similar-figures-the-ratios-of-corresponding-sides-are-equal-called-the-similarity-ratio}{\textsf{similarity ratio}} \\
  y-y_1=\frac{x-x_1}{x_2-x_1}(y_2-y_1) \\
  y-y_1=\underbrace{\boxed{\frac{y_2-y_1}{x_2-x_1}}}_{k}(x-x_1) & \textsf{point-slope form} \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{5}}\:$General form
- The above equations can all be transformed into __the form of a linear equation $\boldsymbol{ax+by+c=0}$__,
  which is called __the general form of the equation of a line__.  
- ###### Remark: the general form is crucial, as it allows for quick calculation of the slope, $k=-\frac{a}{b}$.
  - __$k=-\frac{a}{b}$ derivation__   
    ::: wrap  
    $
    \begin{array}{ll}
    ax+by+c=0 \longrightarrow by=-ax-c \\
    y=\underbrace{-\boxed{\frac{a}{b}}}_{k}x-\frac{c}{b} \\
    \textsf{example: }4x+3y-5=0 \rightarrow k=-\frac{4}{3} \\
    \end{array}
    $  
    :::
- ###### Quickly calculate the intercept form  
  ![General form calculate intercept form.svg](../../public/math/Core%20Courses/General%20form%20calculate%20intercept%20form.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  y=0 
  \begin{cases}
  \begin{array}{ll}
  ax+b0+c=0 \\
  ax+c=0 \\
  ax=-c \\
  x=-\frac{c}{a}
  \end{array}
  \end{cases} \\
  x=0
  \begin{cases}
  \begin{array}{ll}
  a0+by+c=0 \\
  by+c=0 \\
  by=-c \\
  y=-\frac{c}{b} \\
  \end{array}
  \end{cases} \\
  \textsf{calculate the area of the triangle formed by the intercept form} \\
  \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-altitude-to-side}{S=\frac{1}{2}ah} \\
  S=\frac{1}{2} \times -\frac{c}{a} \times -\frac{c}{b} \\
  S=\frac{c^2}{2|ab|} \\
  \end{array}
  $  
  :::  
- __Special case__
  - ###### $a=0:\:by+c=0$ (horizontal line)
  - $b=0:\:ax+c=0$ (vertical line)
  - $c=0:\:ax+by=0$ (line passing through the origin)

## 7.Focus 2
__The equation of a line__  
- Master __the various forms__ of the equation of a line and __their applicable situations__,
  and understand __the differences between these forms__. 



### $\fbox{6}\:$How many of the following statements are correct $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{a line passing through the origin can be represented in intercept form} & \\
\textsf{(2)} \: \textsf{a horizontal line can't be represented in intercept form} & \\
\textsf{(3)} \: \textsf{a vertical line can be represented in point-slope form} & \\
\textsf{(4)} \: \textsf{all lines can be represented in general form} & \\
\textsf{(A)} \: 0 & \\
\textsf{(B)} \: 1 & \\
\textsf{(C)} \: 2 & \\
\textsf{(D)} \: 3 & \\
\textsf{(E)} \: 4 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \: \frac{x}{a}+\frac{y}{b}=0 \,❌\;\\
\textsf{(2)} \: \textsf{a horizontal line has no intersection with the x-axis} \,✅\;\\
\textsf{(3)} \: \textsf{the slope of a vertical line doesn't exist} \,❌\;\\
\textsf{(4)} \: \textsf{all lines can be transformed into the general form} \,✅\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{(2)},\textsf{(4)}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#intercept-form}{\textsf{intercept form}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#point-slope-form}{\textsf{point-slope form}} \\
  ax+by+c=0 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#general-form}{\textsf{general form of a line}} \\
  \end{array}
  >$

  :::
- Line representation of the equation of a straight line  
  > <br/>
  >
  >| Equations            | Horizontal Line  | Vertical Line  | Line Passing Through the Origin  |  Other Lines  |
  >|:---------------------|:----------------:|:--------------:|:--------------------------------:|:-------------:|
  >| Slope-intercept form |        ✅         |       ❌        |                ✅                 |       ✅       |
  >| Point-slope form     |        ✅         |       ❌        |                ✅                 |       ✅       |
  >| Intercept form       |        ❌         |       ❌        |                ❌                 |       ✅       | 
  >| Two-point form       |        ❌         |       ❌        |                ✅                 |       ✅       | 
  >| General form         |        ✅         |       ✅        |                ✅                 |       ✅       |
---


### $\fbox{7}\:$Given $\small A(-1, 2), B(2, 4), C (x, 3)$ and $\small A, B, C$ are collinear, then $\small x=\, \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{5} &
\textsf{(B)} \: \frac{1}{4} &
\textsf{(C)} \: \frac{1}{3} &
\textsf{(D)} \: \frac{1}{2} &
\textsf{(E)} \: 1 & \\
\end{array}
$  
:::
#### Solution
- collinearity of three points $\Leftrightarrow$ any two points have the same slope $\Leftrightarrow$ they can't form $\triangle$  
  ::: wrap   
  $
  \begin{array}{ll}
  k_{AB}=k_{BC}=k_{AC} \\
  k_{AB}=k_{BC} & \textsf{first find }k\textsf{ without unknowns} \\
  \frac{4-2}{2-(-1)}=\frac{4-3}{2-x} \\
  \frac{2}{3}=\frac{1}{2-x} \\
  4-2x=3 \\
  x=\frac{1}{2} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x=\frac{1}{2}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{8}\:$What is the equation of the line passing through the point $\small (5, 8)$ and having intercepts that are opposites of each other $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: x-y+3=0 &
\textsf{(B)} \: x+y+3=0 &
\textsf{(C)} \: -x-y+3=0 & \\
\textsf{(D)} \: x-y-3=0 &
\textsf{(E)} \: x-y+3=0 \lor 8x-5y=0 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{x}{a}+\frac{y}{b}=1 \xrightarrow{\textsf{opposite numbers}} b=-a \\
\frac{x}{a}-\frac{y}{a}=1 \Rightarrow x-y=a \\
(5, 8) \rightarrow 5-8=a \\
a=-3 \rightarrow \frac{x}{-3}-\frac{y}{-3}=1 \Rightarrow x-y+3=0 \\
\textsf{there is also a case where }\boldsymbol{(a,b=0)}\textsf{ is a line passing through the origin}\\
y=kx \quad k=\frac{y}{x} \\
(5, 8) \rightarrow y=\frac{8}{5}x \\
5y=8x \Rightarrow 8x-5y=0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $x-y+3=0 \lor 8x-5y=0$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#intercept-form}{\textsf{intercept form}} \\
  y=kx & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#passing-through-the-origin}{\textsf{passing through origin}} \\
  k=\frac{y}{x} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#the-slope-between-and-is}{\textsf{slope of line passing through origin}} \\
  \end{array}
  >$

  :::
- Opposite intercepts and equal intercepts  
  ::: wrap   
  >- The intercepts are opposites.    
     ![Opposite intercepts.svg](../../public/math/Core%20Courses/Opposite%20intercepts.svg)    
     ① $k=1$     
     ② passes through the origin     
  >- The intercepts are equal.   
     ![Equal intercepts.svg](../../public/math/Core%20Courses/Equal%20intercepts.svg)     
     ① $k=-1$    
     ② passes through the origin     

  :::  
---


### $\fbox{9}\:$What is the y-intercept of the line passing through the points $\small (1, -3)$ and $\small (3, 1) \, \mathpunct{?}$.
::: wrap   
$
\begin{array}{lllll}
\textsf{(A)} \: 5 &
\textsf{(B)} \: -2 &
\textsf{(C)} \: -3 &
\textsf{(D)} \: -4 &
\textsf{(E)} \: -5 & \\
\end{array}
$  
:::
#### Solution   
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the point-slope form     
  ::: wrap  
  $
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} \\
  k=\frac{4}{2}=2 \\
  y=y_0+k(x-x_0) \\
  y=-3+2(x-1) \Rightarrow y=2(x-1)-3 \\
  y=2x-5 \\
  y=kx+b \Rightarrow \textsf{y-intercept} = -5 \\
  \end{array}
  $  
  :::    
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the three-point collinearity method            
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{y-intercept}=(0,b) \\
  \textsf{collinearity of three points} \Leftrightarrow \textsf{any two points have the same slope} \\
  k=\frac{y_2-y_1}{x_2-x_1} \\
  \frac{1-(-3)}{3-1}=\frac{b-1}{0-3} \\
  2=\frac{b-1}{-3} \\
  b=-5 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $b=-5$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_4-two-point-slope-formula}{\textsf{two-point slope formula}} \\
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#intercept-form}{\textsf{intercept form}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#point-slope-form}{\textsf{point-slope form}} \\
  y=kx+b & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#slope-intercept-form}{\textsf{slope-intercept form}} \\
  \end{array}
  >$

  :::
---


### $\fbox{10}\:$What is the product of the x- and y-intercepts of the line $\small 2x-3y+12=0 \, \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: -48 &
\textsf{(B)} \: -24 &
\textsf{(C)} \: 24 &
\textsf{(D)} \: -12 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question straight lines figure Q-10 solve-1.svg](../../public/math/Core%20Courses/Question%20straight%20lines%20figure%20Q-10%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{12}{-3}=4 \\
  \textsf{x-intercept}=-\frac{c}{a}=-\frac{12}{2}=-6 \\
  4\times (-6)=-24 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $4\times (-6)=-24$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  ax+by+c=0 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#general-form}{\textsf{general form of a line}} \\
  \begin{cases}
  \textsf{y-intercept}=-\frac{c}{b} \\
  \textsf{x-intercept}=-\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#quickly-calculate-the-intercept-form}{\textsf{transform general form to intercept form}} \\
  \end{array}
  >$

  :::
- Additionally, If the problem is to calculate the area of the triangle formed by the intercept form    
  ::: wrap
  > ![Question straight lines figure Q-10 solve-2.svg](../../public/math/Core%20Courses/Question%20straight%20lines%20figure%20Q-10%20solve-2.svg)  
  >$
  \begin{array}{ll}
  2x-3y+12=0 \\
  \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#quickly-calculate-the-intercept-form}{S=\frac{c^2}{2|ab|}} \\
  S=\frac{12^2}{2|2\times-3|}=\frac{24}{12}=12 \\
  \end{array}
  >$

  :::
---

## 8.Focus 3
__The line passes through quadrants__  
- Analyze the graph based on __the slope and intercepts of the line__.   
- Remember the conclusion:
  when $\boldsymbol{k>0}$,
  the line must pass through __the first and third quadrants__;
  when $\boldsymbol{k<0}$,
  the line must pass through __the second and fourth quadrants__.   
  ![Line cross quadrants.svg](../../public/math/Core%20Courses/Line%20cross%20quadrants.svg)    


### $\fbox{11}\:$(Sufficiency judgment) Line $\small l:\: ax+bx+c=0$ definitely doesn't pass through the third quadrant.
::: wrap   
$
\begin{array}{lllll}
\textsf{(1)} \: ac \le 0, bc<0. &
\textsf{(2)} \: ab>0, c<0. & \\
\textsf{(A)} \: \textsf{(1)} &
\textsf{(B)} \: \textsf{(2)} & \\
\textsf{(C)} \: \textsf{(1)}+\textsf{(2)} &  
\textsf{(D)} \: \textsf{(1)},\textsf{(2)} & \\
\textsf{(E)} \: \varnothing & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#9333EA}{\textsf{verify condition }(1)}$   
  ![Question straight lines figure Q-11 solve-1.svg](../../public/math/Core%20Courses/Question%20straight%20lines%20figure%20Q-11%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  (ac<0 \lor ac=0),bc<0 \\ 
  ①\,
  \begin{cases}
  \begin{array}{ll}
  ac<0 \\
  bc<0 \\
  \end{array}
  \end{cases} \\
  \textsf{x-intercept}=-\frac{c}{a}=-\frac{9}{-3}=3 \\
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{9}{-3}=3 \\
  ②\,
  \begin{cases}
  \begin{array}{ll}
  a=0 & \textsf{must satisfy } bc<0 \\
  bc<0 \\
  \end{array}
  \end{cases} \\
  a=0 \longrightarrow by+c=0 \Rightarrow -\frac{c}{a}=0 \\
  \textsf{x-intercept}=-\frac{c}{a}=0 \\
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{9}{-3}=3 \\
  \end{array}
  $  
  :::     
- $\textcolor{#9333EA}{\textsf{verify condition }(2)}$  
  ![Question straight lines figure Q-11 solve-2.svg](../../public/math/Core%20Courses/Question%20straight%20lines%20figure%20Q-11%20solve-2.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  ab>0, c<0 \\
  k=-\frac{a}{b}=-\frac{9}{3}=-3 \\
  k<0 \Rightarrow 90^\circ<\alpha<180^\circ \\
  \begin{cases}
  \begin{array}{ll}
  ac & \textsf{unknown} \\
  bc & \textsf{unknown} \\
  \end{array}
  \end{cases} \\
  \textsf{x-intercept}=-\frac{c}{a}=-\frac{9}{3}=-3 \\
  \textsf{y-intercept}=-\frac{c}{b}=-\frac{9}{3}=-3 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $\textsf{(1)}\,✅\;,\textsf{(2)}\,❌\;$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  \textsf{y-intercept}=-\frac{c}{b} \\
  \textsf{x-intercept}=-\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#quickly-calculate-the-intercept-form}{\textsf{transform general form to intercept form}} \\
  a=0 \longrightarrow by+c=0 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#horizontal-line}{\textsf{horizontal line}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#remark-the-general-form-is-crucial-as-it-allows-for-quick-calculation-of-the-slope}{\textsf{convert general form to slope}} \\
  90^\circ<\alpha<180^\circ, k<0 & \href{/math/0%20Core%20Courses/26%20Chapter7%20analytic%20geometry%20Module1%20cartesian%20coordinate%20system%20Module2%20straight%20lines%20upper.html#_2-definition-of-slope}{\textsf{definition of slope}} \\
  \end{array}
  >$

  :::
---

| Platform   | Course                                                                                                              | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=RgN-VMM4lXA&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuhu?playlist=x9h6d2)                                                   |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95h9-27-chapter7-resolve-geometry-module1-rectangular-coordinate-system-module2-.html) |                                                                   |
