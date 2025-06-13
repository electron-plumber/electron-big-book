---
title: Chapter7 resolve geometry Module1 rectangular coordinate system Module2 straight line upper
lang: en-US
---

# Module 7–01 Rectangular Coordinate System

## 1.Coordinate Relationships Between Two Points  
![Coordinate Relationships Between Two points.svg](../../public/math/Core%20courses/Coordinate%20Relationships%20Between%20Two%20points.svg)   

- Points on the coordinate axis don't belong to any quadrant.   
  - Points on x-axis $(x,0)$.
  - Points on y-axis $(0,y)$.

## 2.Coordinates of the Midpoint Between Two Points
- The coordinates of the midpoint between two points $p_1(x_1,y_1)$ and $p_2(x_2,y_2)$ are $(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2})\boxed{\text{Average}}$.
  - Special case: The midpoint between point $p_1(x_1,y_1)$ and the origin $(0,0)$ is $(\frac{x_1}{2},\frac{y_1}{2})$.
  - __Formula derivations__   
    ::: wrap    
    ![Midpoint coordinates formula derivations.svg](../../public/math/Core%20courses/Midpoint%20coordinates%20formula%20derivations.svg)       

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
- Special case: The distance between point $A(x,y)$ and the origin $(0,0)$ is $d=\sqrt{x^2+y^2}$.  
- __Formula derivations__   
  ::: wrap    
  ![Distance formula between two points derivations.svg](../../public/math/Core%20courses/Distance%20formula%20between%20two%20points%20derivations.svg)  

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
### $\fbox{2}\:$Given that the length of a segment $\small AB$ is $\small 12$, and the coordinates of point $\small A$ are $\small (-4, 8)$, while point $\small B$ has equal $\small x$- and $\small y$-coordinates, then the coordinates of point $\small B$ are $\small \, \mathpunct{?}$.
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

::: wrap
### $\fbox{3}\:$In an equilateral triangle $\small ABC$, two vertices are $\small A(2,0)$ and $\small B(5,3\sqrt{3})$. The coordinates of the third vertex are $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: (8, 0) &
(\text{B}) \: (-8, 0) &
(\text{C}) \: (1, -3\sqrt{3}) & \\
(\text{D}) \: (8, 0) \lor (-1, 3\sqrt{3}) &
(\text{E}) \: (6, 0) \lor (-1, 3\sqrt{3}) & \\
\end{array}
$  
:::
#### Solution
::: wrap  
![Question rectangular coordinate system figure Q-3 solve-1.svg](../../public/math/Core%20courses/Question%20rectangular%20coordinate%20system%20figure%20Q-3%20solve-1.svg)  

$
\begin{array}{ll}
\href{/math/0%20Core%20courses/25%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#_16-equilateral-triangle}{\text{Equilateral triangle: }}AB=AC=BC \\
\text{Let }C=(x, y) \\
\sqrt{3^2+(3\sqrt{3})^2}=\sqrt{(x-2)^2+y^2}=\sqrt{(x-5)^2+(y-3\sqrt{3})^2} \\
\sqrt{3^2+(3\sqrt{3})^2}=\sqrt{9+(9\times3)}=6\\
\text{There are two equations and two unknowns, and solving them is too complicated, } \\
\text{so it is better to substitute the options directly.}\\
(\text{A}):(8, 0)
\begin{cases}
\begin{array}{ll}
\sqrt{(8-2)^2+0^2}=6 \\
\sqrt{(8-5)^2+(0-3\sqrt{3})^2}\ne6 \\
\end{array}
\end{cases}\,❌\; \\
(\text{D}) \: (8, 0) \lor (-1, 3\sqrt{3})
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
  > $\mathbf{(D)}$  
  > According to the Solution, get $\sqrt{(x-2)^2+y^2}=\sqrt{(x-5)^2+(y-3\sqrt{3})^2}=6$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-distance-formula-between-two-points}{\text{Distance formula}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is an isosceles right triangle  
  ::: wrap
  >$
  \begin{array}{ll}
  \href{/math/0%20Core%20courses/25%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#_15-isosceles-right-triangle}{\text{Isosceles right triangle:
  > }}AC=BC=\sqrt{2}AB \implies AB=\sqrt{2}AC=\sqrt{2}BC \\
  \text{Let }C=(x, y) \\
  \sqrt{3^2+(3\sqrt{3})^2}=\sqrt{2}\times\sqrt{(x-2)^2+y^2}=\sqrt{2}\times\sqrt{(x-5)^2+(y-3\sqrt{3})^2} \\
  \text{After that, directly substitute the options.}\\
  \end{array}
  >$

  :::
---

# Module 7–02 Straight Line

## 1.Angle of Inclination
- The angle formed between a straight line and the positive direction of the $x$-axis is called the angle of inclination, denoted as $\alpha$, where $\alpha \in [0, \pi)$.  
  ![Angle of inclination with x-axis figure 7-1.svg](../../public/math/Core%20courses/Angle%20of%20inclination%20with%20x-axis%20figure%207-1.svg)      
- Note: When a line is horizontal, its angle of inclination is $0^\circ$.
  When a line is vertical, its angle of inclination is $90^\circ$.  
  - Counterclockwise rotation increases $\alpha$.  
  - Clockwise rotation decreases $\alpha$.  

  <ThemeAwareImage
    dark-src="/math/Core%20courses/Angle%20of%20inclination%20with%20x-axis%20figure%207-1%20black%20solve-1.gif"
    light-src="/math/Core%20courses/Angle%20of%20inclination%20with%20x-axis%20figure%207-1%20white%20solve-1.gif"
  />  


## 2.Definition of Slope
- The tangent of the inclination angle is the slope, denoted as $k=tan\alpha, \alpha=\frac{\pi}{2}$.  
  - $\mathbf{\alpha=\frac{\text{opposite}}{\text{adjacent}}}$  
  ![Tan alpha slope figure 7-2.svg](../../public/math/Core%20courses/Tan%20alpha%20slope%20figure%207-2.svg)  
- Remarks: 
  - When $\alpha=0, k=0$; __Zero numerator__
  - When $0<\alpha<90^\circ, k>0$;
  - When $\alpha=90^\circ$, $k$ is undefined; __Zero denominator__
  - When $90^\circ<\alpha<180^\circ, k<0$;  

  ![Tan alpha slope figure 7-2 solve-1.svg](../../public/math/Core%20courses/Tan%20alpha%20slope%20figure%207-2%20solve-1.svg)  

## 3.Common Inclination Angles and Slope
- Supplementary angles: their tangents are opposite numbers.
  - $tan(180^\circ- \theta)=-tan\theta$.

| Inclination Angle $(\alpha)$ | Slope $k=tan\alpha$    |
|------------------------------|------------------------|
| $0^\circ$                    | $0$                    |
| $30^\circ$                   | $\frac{\sqrt{3}}{3}$   |
| $45^\circ$                   | $1$                    |
| $60^\circ$                   | $\sqrt{3}$             |
| $90^\circ$                   | $\infty \lor$undefined |
| $120^\circ$                  | $-\sqrt{3}$            |
| $135^\circ$                  | $-1$                   |
| $150^\circ$                  | $-\frac{\sqrt{3}}{3}$  |
| $180^\circ$                  | $0$                    |


## 4.Two-Point Slope Formula
- Let there be two points $P_1(x_1,y_1)$ and $P_2(x_2,y_2)$ in a straight line $l$, then $k=\frac{y_2-y_1}{x_2-x_1}, \mathbf{x_1 \ne x_2}$.  
- Special cases:
  - If $y_2=y_1$, the line is __horizontal__, and $k=0$.
  - If $x_2=x_1$, the line is __vertical__, and $k=\infty\lor$undefined.  
  - ###### The slope between $(x,y)$ and $(0,0)$ is $k=\frac{y}{x}$.  

  ![Line slope two points.svg](../../public/math/Core%20courses/Line%20slope%20two%20points.svg)


## 5.Focus 1
__Inclination angle and slope__  
- Pay attention to special inclination angels, such as $90^\circ$, and observe the sign and magnitude changes of the slope.  


::: wrap
### $\fbox{4}\:$Regarding inclination angles and slope, the correct statement is $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{1}) \: \text{The greater the inclination angle, the greater the slope}; & \\
(\text{2}) \: \text{When the inclination angle is }135^\circ\text{, the slope is }1; & \\ 
(\text{3}) \: \text{When the inclination angle is less than }90^\circ, \\\quad\; \text{ the greater the inclination angle, the greater the slope}; & \\
(\text{4}) \: \text{When the inclination angle is greater than}90^\circ, \\\quad\; \text{ the larger the inclination angle, the smaller the slope}; & \\
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
(\text{1}) \: \begin{cases}
              \alpha=45^\circ \Rightarrow k=1 \\
              \alpha=135^\circ \Rightarrow k=-1 \\
              \end{cases} \,❌\;\\
(\text{2}) \: \alpha>90^\circ \Rightarrow k<0 \,❌\;\\
(\text{3}) \: \boxed{0 \le \alpha<90^\circ} \implies \alpha \uparrow \,\Rightarrow k \uparrow \,✅\;\\
(\text{4}) \: \boxed{\alpha>90^\circ} \implies \alpha \uparrow \,\Rightarrow k \uparrow \,❌\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $(\text{3})$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  0<\alpha<90^\circ, k>0 \\
  90^\circ<\alpha<180^\circ, k<0 \\
  \end{cases} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_2-definition-of-slope}{\text{Definition of slope}} \\
  135^\circ=-1 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_3-common-inclination-angles-and-slope}{\text{Common inclination angles and slope}} \\
  \end{array}
  >$

  :::  
::: wrap
- $\href{https://phet.colorado.edu/sims/html/graphing-slope-intercept/latest/graphing-slope-intercept_all.html}{\text{Variation of the slope-intercept line:
  } y = kx + b}$  
  > Counterclockwise rotation: $k\uparrow$.  
  > Clockwise rotation: $k\downarrow$.  
  > - The size of $|k|$ indicates the steepness of the line.
  >   - The larger $|k|$ is, the steeper the line becomes.
  >   - The smaller $|k|$ is, the flatter the line becomes.

  :::
---

::: wrap
### $\fbox{5}\:$If the line $\small l$ intersects the lines $\small y=1$ and $\small x=7$ at points $\small P$ and $\small Q$ respectively, and the midpoint of the segment $\small PQ$ has coordinates $\small (1,−1)$, what is the slope of the line $\small l \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: \frac{1}{3} &
(\text{B}) \: -\frac{1}{3} &
(\text{C}) \: \frac{2}{3} &
(\text{D}) \: -\frac{2}{3} &
(\text{E}) \: \frac{3}{2} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions    
  ![Question straight line figure Q-5 solve-1.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-5%20solve-1.svg)  

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
  > $\mathbf{(B)}$  
  > According to the Solution, get $k=-\frac{1}{3}$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_4-two-point-slope-formula}{\text{Two-point slope formula}} \\
  (\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_2-coordinates-of-the-midpoint-between-two-points}{\text{Midpoint coordinates}} \\
  \end{array}
  >$

  :::
---

## 6. Equation of a Line

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Slope-intercept form
- If the slope $k$ and the $\overbrace{\text{y-intercept }b}^{\text{y-axis intersection}}$ are known, the equation of the line can be expressed as $y=kx+b$.  
- Special cases:  
  - ###### $b=0: y=kx$ (Passing through the origin)   
  - $k=0: y=b$ (Horizontal line)   

![Slope-intercept form.svg](../../public/math/Core%20courses/Slope-intercept%20form.svg)  
$\href{https://phet.colorado.edu/sims/html/graphing-slope-intercept/latest/graphing-slope-intercept_all.html}{\text{Slope-intercept demo}}$  

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Point-slope form
- If the slope $k$ and a point $(x_0, y_0)$ are known,
the equation of the line can be expressed as $y=y_0+k(x-x_0)$ or $\frac{y-y_0}{x-x_0}=k$.  
- Special case: $(x_0, y_0) \longrightarrow (0,b)$ The point-slope form becomes the slope-intercept form.  
- __Equation derivations__   
  ::: wrap    
  ![Point-slope equation derivations.svg](../../public/math/Core%20courses/Point-slope%20equation%20derivations.svg)  

  $
  \begin{array}{ll}
  y=k(x-x_0)+y_0 \\
  \frac{y-y_0}{x-x_0}=k & \text{Two-point slope formula} \\
  y=y_0+k(x-x_0) \\
  \end{array}
  $  
  :::

$\href{https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html}{\text{Point-slope demo}}$

### $\textcolor{#1E3A5F}{\fbox{3}}\:$Intercept form
If the x-axis and y-axis intercepts are known to be $a$ and $b$ respectively,
the equation of the line can be expressed as $\frac{x}{a}+\frac{y}{b}=1,\mathbf{(a,b \ne 0)}$.  
![Intercept form.svg](../../public/math/Core%20courses/Intercept%20form.svg)  

### $\textcolor{#1E3A5F}{\fbox{4}}\:$Two-point form
If the coordinates of two points $(x_1, y_1)$ and $x_2,
y_2$ are known, the equation of the line can be expressed as $\frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1}$.  
- Special case: 
  - The intercept form is a special case of the two-point form. 
  - The two-point form can be changed into the point-slope form.
- __Equation derivations__   
  ::: wrap    
  ![Two-point equation derivations.svg](../../public/math/Core%20courses/Two-point%20equation%20derivations.svg)  

  $
  \begin{array}{ll}
  \frac{x-x_1}{x_2-x_1}=\frac{y-y_1}{y_2-y_1} & \href{/math/0%20Core%20courses/25%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#in-similar-triangles-the-ratios-of-corresponding-sides-are-equal}{\text{Similarity ratio}} \\
  y-y_1=\frac{x-x_1}{x_2-x_1}(y_2-y_1) \\
  y-y_1=\underbrace{\boxed{\frac{y_2-y_1}{x_2-x_1}}}_{k}(x-x_1) & \text{Point-slope form} \\
  \end{array}
  $  
  :::


### $\textcolor{#1E3A5F}{\fbox{5}}\:$General form
- The above equations can all be transformed into a linear function $ax+by+c=0$,
which is called the general form of the equation of a line.  
- ###### Remark: The general form is very important, as it allows you to quickly calculate the slope $k=-\frac{a}{b}$.
  - __$k=-\frac{a}{b}$ derivations__   
    ::: wrap    

    $
    \begin{array}{ll}
    ax+by+c=0 \longrightarrow by=-ax-c \\
    y=\underbrace{-\boxed{\frac{a}{b}}}_{k}x-\frac{c}{b} \\
    \text{Example:} \\
    4x+3y-5=0 \rightarrow k=-\frac{4}{3} \\
    \end{array}
    $  
    :::
- ###### Quickly calculate the Intercept form  
  ![General form calculate Intercept form.svg](../../public/math/Core%20courses/General%20form%20calculate%20Intercept%20form.svg)  

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
  \text{Calculate the area of the triangle formed by the intercept form:} \\
  \href{/math/0%20Core%20courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-height-of-side}{S=\frac{1}{2}ah} \\
  S=\frac{1}{2} \times -\frac{c}{a} \times -\frac{c}{b} \\
  S=\frac{c^2}{2|ab|} \\
  \end{array}
  $  
  :::  
- Special case:
  - ###### $a=0:\:by+c=0$ (Horizontal line)
  - $b=0:\:ax+c=0$ (Vertical line)
  - $c=0:\:ax+by=0$ (Line passing through the origin)

## 7.Focus 2
__Equation of a line__  
- Master the various forms of the equation of a line and their applicable situations, and understand the differences between the different forms of the equation. 

::: wrap
### $\fbox{6}\:$How many of the following statements are correct$\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{1}) \: \text{A line passing through the origin can be represented in intercept form}. & \\
(\text{2}) \: \text{A horizontal line can't be represented in intercept form}. & \\
(\text{3}) \: \text{A vertical line can be represented in point-slope form}. & \\
(\text{4}) \: \text{All lines can be represented in general form}. & \\
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
(\text{1}) \: \frac{x}{a}+\frac{y}{b}=0 \,❌\;\\
(\text{2}) \: \text{A horizontal line has no intersection with the x-axis} \,✅\;\\
(\text{3}) \: \text{The slope of a vertical line doesn't exist} \,❌\;\\
(\text{4}) \: \text{All lines can be transformed into the general form} \,✅\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(C)}$  
  > According to the Solution, get $(\text{2}),(\text{4})$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#intercept-form}{\text{Intercept form}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#point-slope-form}{\text{Point-slope form}} \\
  ax+by+c=0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#general-form}{\text{General form}} \\
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

::: wrap
### $\fbox{7}\:$Given $\small A(-1, 2), B(2, 4), C (x, 3)$ and $\small A, B, C$ are collinear, then $\small x=\, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: \frac{1}{5} &
(\text{B}) \: \frac{1}{4} &
(\text{C}) \: \frac{1}{3} &
(\text{D}) \: \frac{1}{2} &
(\text{E}) \: 1 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Collinearity of three points $\Leftrightarrow$ Any two points have the same slope $\Leftrightarrow$ They Can't form $\triangle$  

  $
  \begin{array}{ll}
  k_{AB}=k_{BC}=k_{AC} \\
  k_{AB}=k_{BC} & \text{First find }k\text{ without unknowns} \\
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
  > $\mathbf{(D)}$  
  > According to the Solution, get $x=\frac{1}{2}$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_4-two-point-slope-formula}{\text{Two-point slope formula}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{8}\:$What is the equation of the line passing through the point $\small (5, 8)$ and having intercepts that are opposites of each other $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
(\text{A}) \: x-y+3=0 &
(\text{B}) \: x+y+3=0 &
(\text{C}) \: -x-y+3=0 & \\
(\text{D}) \: x-y-3=0 &
(\text{E}) \: x-y+3=0 \lor 8x-5y=0 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{x}{a}+\frac{y}{b}=1 \xrightarrow{\text{Opposite numbers}} b=-a \\
\frac{x}{a}-\frac{y}{a}=1 \Rightarrow x-y=a \\
(5, 8) \rightarrow 5-8=a \\
a=-3 \rightarrow \frac{x}{-3}-\frac{y}{-3}=1 \Rightarrow x-y+3=0 \\
\text{There is also a case where }\mathbf{(a,b=0)}\text{ is a line passing through the origin.}\\
y=kx \quad k=\frac{y}{x} \\
(5, 8) \rightarrow y=\frac{8}{5}x \\
5y=8x \Rightarrow 8x-5y=0 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(E)}$  
  > According to the Solution, get $x-y+3=0 \lor 8x-5y=0$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#intercept-form}{\text{Intercept form}} \\
  y=kx & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#passing-through-the-origin}{\text{Passing through the origin}} \\
  k=\frac{y}{x} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#the-slope-between-and-is}{\text{Slope of the line passing through the origin}} \\
  \end{array}
  >$

  :::
- Opposite intercepts and equal Intercepts  
  ::: wrap   
  >- The intercepts are opposites.    
     ![Opposite Intercepts.svg](../../public/math/Core%20courses/Opposite%20Intercepts.svg)    
     ① $k=1$.  
     ② Passes through the origin.  
  >- The intercepts are equal.   
     ![Equal Intercepts.svg](../../public/math/Core%20courses/Equal%20Intercepts.svg)     
     ① $k=-1$.  
     ② Passes through the origin.   

  :::  
---

::: wrap
### $\fbox{9}\:$What is the y-intercept of the line passing through the points $\small (1, -3)$ and $\small (3, 1) \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: 5 &
(\text{B}) \: -2 &
(\text{C}) \: -3 &
(\text{D}) \: -4 &
(\text{E}) \: -5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve using the point-slope form     

  $
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} \\
  k=\frac{4}{2}=2 \\
  y=y_0+k(x-x_0) \\
  y=-3+2(x-1) \Rightarrow y=2(x-1)-3 \\
  y=2x-5 \\
  y=kx+b \Rightarrow \text{y-intercept} = -5 \\
  \end{array}
  $  
:::   
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve using the three-point collinearity method            

  $
  \begin{array}{ll}
  \text{y-intercept}=(0,b) \\
  \text{Collinearity of three points} \Leftrightarrow \text{Any two points have the same slope} \\
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
  > $\mathbf{(E)}$  
  > According to the Solution, get $b=-5$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  k=\frac{y_2-y_1}{x_2-x_1} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_4-two-point-slope-formula}{\text{Two-point slope formula}} \\
  \frac{x}{a}+\frac{y}{b}=1 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#intercept-form}{\text{Intercept form}} \\
  y=y_0+k(x-x_0) & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#point-slope-form}{\text{Point-slope form}} \\
  y=kx+b & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#slope-intercept-form}{\text{Slope-intercept form}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{10}\:$What is the product of the x- and y-intercepts of the line $\small 2x-3y+12=0 \, \mathpunct{?}.$
$
\begin{array}{lllll}
(\text{A}) \: -48 &
(\text{B}) \: -24 &
(\text{C}) \: 24 &
(\text{D}) \: -12 &
(\text{E}) \: 12 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions  
  ![Question straight line figure Q-10 solve-1.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-10%20solve-1.svg)  

  $
  \begin{array}{ll}
  \text{y-intercept}=-\frac{c}{b}=-\frac{12}{-3}=4 \\
  \text{x-intercept}=-\frac{c}{a}=-\frac{12}{2}=-6 \\
  4\times (-6)=-24 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(B)}$  
  > According to the Solution, get $4\times (-6)=-24$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  ax+by+c=0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#general-form}{\text{General form}} \\
  \begin{cases}
  \text{y-intercept}=-\frac{c}{b} \\
  \text{x-intercept}=-\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#quickly-calculate-the-intercept-form}{\text{Quickly convert the general form to the intercept form}} \\
  \end{array}
  >$

  :::
- Additionally, If the problem is to calculate the area of the triangle formed by the intercept form    
  ::: wrap
  > ![Question straight line figure Q-10 solve-2.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-10%20solve-2.svg)  
  >$
  \begin{array}{ll}
  2x-3y+12=0 \\
  \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#quickly-calculate-the-intercept-form}{S=\frac{c^2}{2|ab|}} \\
  S=\frac{12^2}{2|2\times-3|}=\frac{24}{12}=12 \\
  \end{array}
  >$

  :::
---

## 8.Focus 3
__The line passes through quadrants__  
- Analyze the graph based on the slope and intercepts of the line.   
- Remember the conclusion: When $k>0$, the line must pass through the first and third quadrants; 
when $k<0$, the line must pass through the second and fourth quadrants.  
  ![Line cross quadrants.svg](../../public/math/Core%20courses/Line%20cross%20quadrants.svg)    

::: wrap
### $\fbox{11}\:$(Sufficiency judgment) Line $\small l:\: ax+bx+c=0$ definitely doesn't pass through the third quadrant.
$
\begin{array}{lllll}
(\text{1}) \: ac \le 0, bc<0. &
(\text{2}) \: ab>0, c<0. & \\
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
- $\textcolor{#9333EA}{\text{Verify condition }(1)}$   
  ![Question straight line figure Q-11 solve-1.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-11%20solve-1.svg)  

  $
  \begin{array}{ll}
  (ac<0 \lor ac=0),bc<0 \\ 
  ① \begin{cases}
  \begin{array}{ll}
  ac<0 \\
  bc<0 \\
  \end{array}
  \end{cases} \\
  \text{x-intercept}=-\frac{c}{a}=-\frac{9}{-3}=3 \\
  \text{y-intercept}=-\frac{c}{b}=-\frac{9}{-3}=3 \\
  ② \begin{cases}
  \begin{array}{ll}
  a=0 & \text{Must satisfy } bc<0 \\
  bc<0 \\
  \end{array}
  \end{cases} \\
  a=0 \longrightarrow by+c=0 \Rightarrow -\frac{c}{a}=0 \\
  \text{x-intercept}=-\frac{c}{a}=0 \\
  \text{y-intercept}=-\frac{c}{b}=-\frac{9}{-3}=3 \\
  \end{array}
  $  
:::  
::: wrap  
- $\textcolor{#9333EA}{\text{Verify condition }(2)}$  
  ![Question straight line figure Q-11 solve-2.svg](../../public/math/Core%20courses/Question%20straight%20line%20figure%20Q-11%20solve-2.svg)  

  $
  \begin{array}{ll}
  ab>0, c<0 \\
  k=-\frac{a}{b}=-\frac{9}{3}=-3 \\
  k<0 \Rightarrow 90^\circ<\alpha<180^\circ \\
  \begin{cases}
  \begin{array}{ll}
  ac & \text{Unknown} \\
  bc & \text{Unknown} \\
  \end{array}
  \end{cases} \\
  \text{x-intercept}=-\frac{c}{a}=-\frac{9}{3}=-3 \\
  \text{y-intercept}=-\frac{c}{b}=-\frac{9}{3}=-3 \\
  \end{array}
  $  
:::  

[//]: # (- Verify conditions &#40;1&#41; and &#40;2&#41; together)
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\mathbf{(A)}$  
  > According to the Solution, get $(\text{1})\,✅\;,(\text{2})\,❌\;$, so choose $A$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  \text{y-intercept}=-\frac{c}{b} \\
  \text{x-intercept}=-\frac{c}{a} \\
  \end{cases} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#quickly-calculate-the-intercept-form}{\text{Quickly convert the general form to the intercept form}} \\
  a=0 \longrightarrow by+c=0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#horizontal-line}{\text{Horizontal line}} \\
  k=-\frac{a}{b} & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#remark-the-general-form-is-very-important-as-it-allows-you-to-quickly-calculate-the-slope}{\text{Quickly convert the general form to the slope}} \\
  90^\circ<\alpha<180^\circ, k<0 & \href{/math/0%20Core%20courses/27%20Chapter7%20resolve%20geometry%20Module1%20rectangular%20coordinate%20system%20Module2%20straight%20line%20upper.html#_2-definition-of-slope}{\text{Definition of slope}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                                              | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=RgN-VMM4lXA&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuhu?playlist=x9h6d2)                                                   |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95h9-27-chapter7-resolve-geometry-module1-rectangular-coordinate-system-module2-.html) |                                                                   |
