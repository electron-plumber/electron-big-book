---
title: Chapter8 solid geometry
lang: en-US
---

# Module 8–01 Cuboid

## 1.Cuboid  
![Cuboid figure 8-1.svg](../../public/math/Core%20courses/Cuboid%20figure%208-1.svg)  
- Let the three adjacent edges have lengths $a$, $b$, and $c$.  
  ###### 1. Volume: $V=abc$. 
  ###### 2. Total surface area: $F=2(ab + bc +ac)$.
  ###### 3. Space diagonal (body diagonal): $d=\sqrt{a^2+b^2+c^2}$.
  ###### 4. Sum of edge lengths: $l=4(a+b+c)$.
- Constituent parts:
  - $6$ faces.
  - $8$ vertices.
  - $12$ edges.
  - $4$ space diagonals. 


## 2.Cube
- Let the edge length be $a$.  
  ###### 1. Volume: $V=a^3$.
  ###### 2. Total surface area: $F=6a^2$.
  ###### 3. Space diagonal (body diagonal): $d=\sqrt{3}a$.
  ###### 4. Sum of edge lengths: $l=12a$.

## 3.Focus 1
__The cuboid__   
- Master the formulas for the __space diagonal__, __surface area__, and __volume__ of a cuboid.

::: wrap
### $\fbox{1}\:$The ratio of the length to the width of a cuboid is $\small 2:1$, and the ratio of the width to the height is $\small 3:2$. If the total length of all the edges of the cuboid is $\small 220$ cm, what is its volume $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 2880\textsf{ cm}^3 &
\textsf{(B)} \: 7200\textsf{ cm}^3 &
\textsf{(C)} \: 4600\textsf{ cm}^3 &
\textsf{(D)} \: 4500\textsf{ cm}^3 &
\textsf{(E)} \: 3600\textsf{ cm}^3 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\begin{cases}
\textsf{length}:\textsf{width}=2:1 \\
\textsf{width}:\textsf{height}=3:2 \\
\end{cases} \Rightarrow \textsf{length}:\textsf{width}:\textsf{height}=6:3:2 \\
6:3:2 \rightarrow 6k:3k:2k & k:\textsf{scale factor} \\
l=4(6k+3k+2k)=220 \\
4 \times 11k=220 \\
k=\frac{220}{44}=5 \\
\textsf{length}:\textsf{width}:\textsf{height}=30:15:10 \\
V=30\times15\times10=4500 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $V=4500$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  l=4(a+b+c) & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_4-sum-of-edge-lengths}{\textsf{sum of edge lengths of a cuboid}} \\
  V=abc & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_1-volume}{\textsf{volume of a cuboid}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{2}\:$The three adjacent edge lengths of a cuboid are in the ratio $\small 3:2:1$, and its surface area is $\small 88$. What is the length of the longest edge $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 8 &
\textsf{(B)} \: 11 &
\textsf{(C)} \: 12 &
\textsf{(D)} \: 14 &
\textsf{(E)} \: 6 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
3:2:1 \rightarrow 3k:2k:k & k:\textsf{scale factor} \\
S=2(3k\times2k + 3k\times k + 2k\times k)=2(6k^2+3k^2+2k^2) \\
22k^2=88 \\
k=\sqrt{4}=2 \\
\textsf{longest}=3k=3\times2=6 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\textsf{longest}=6$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  F=2(ab + bc +ac) & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_4-sum-of-edge-lengths}{\textsf{total surface area of a cuboid}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{3}\:$The areas of three adjacent faces of a cuboid are $\small 2, 6$, and $\small 3$, respectively. What is the volume of the cuboid $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 4 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 6 &
\textsf{(D)} \: 7.5 &
\textsf{(E)} \: 9 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the substitution method (only applicable in simple cases)      

  $
  \begin{array}{ll}
  \begin{cases}
  ab=2 \\
  bc=6 \\
  ac=3 \\
  \end{cases} \\
  b=\frac{2}{a} \\
  c=\frac{3}{a} \\
  bc=\frac{2}{a} \times \frac{3}{a}=6 \\
  \frac{6}{a^2}=6 \Longrightarrow a^2=1 \Longrightarrow a=1 \\
  b=\frac{2}{1}=2 \\
  c=\frac{3}{1}=3 \\
  V=1\times2\times3=6 \\
  \end{array}
  $   
:::  
::: wrap  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the volume formula (suitable for special cases)    

  $
  \begin{array}{ll}
  V=abc=\sqrt{a^2 \cdot b^2 \cdot c^2}=\sqrt{ab \cdot bc \cdot ac} \\
  \sqrt{2 \cdot 6 \cdot 3}=\sqrt{36}=6 & \textsf{substitute }[ab=2, bc=6, ac=3] \\
  \end{array}
  $   
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $V=6$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  F=2(ab + bc +ac) & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_4-sum-of-edge-lengths}{\textsf{total surface area of a cuboid}} \\
  V=abc & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_1-volume}{\textsf{volume of a cuboid}} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The cube__  
- A cube is relatively simple; master the formulas for __its space diagonal, surface area, and volume__.


::: wrap
### $\fbox{4}\:$Given that the space diagonal of a cube is $\small 3$, what is its total surface area $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 16 &
\textsf{(B)} \: 18 &
\textsf{(C)} \: 20 &
\textsf{(D)} \: 22 &
\textsf{(E)} \: 24 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
d=\sqrt{3}a=3 \\
a=\frac{3}{\sqrt{3}}=\frac{3\times\sqrt{3}}{\sqrt{3}\times\sqrt{3}}=\sqrt{3} \\
S=6\sqrt{3}^2=6\times3=18 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $S=18$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  d=\sqrt{3}a & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_3-space-diagonal-body-diagonal-1}{\textsf{body diagonal of a cube}} \\
  F=6a^2 & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_2-total-surface-area-1}{\textsf{total surface area of a cube}} \\
  \end{array}
  >$

  :::
---

# Module 8–02 Prisms and Cylinders

## 1.General Formulas 
- The lateral surface of a prism or cylinder, when laid out in its developed form, is __a rectangle__ whose one side equals __the perimeter of the base__ and whose other side equals __the height of the solid__.        
- ###### Lateral surface area: $S=\textsf{base perimeter} \times \textsf{height}$.
  - The area of the developed rectangle.   
- ###### Volume: $V=\textsf{base area} \times \textsf{height}$.   

![Prisms and cylinders general formulas.svg](../../public/math/Core%20courses/Prisms%20and%20cylinders%20general%20formulas.svg)   

## 2.Formulas for Cylinders
![Cylinder formulas.svg](../../public/math/Core%20courses/Cylinder%20formulas.svg)   
- Let the height be $h$ and the base radius be $r$.
- ###### Volume: $V=\pi r^2h$. 
- ###### Lateral surface area: $S=2\pi rh$. 
  - The lateral surface in its developed form is a rectangle with length $2πr$ and width $h$.  
- ###### Total surface area: $F=S_{\textsf{lateral}}+2S_{\textsf{base}}=2\pi rh+2\pi r^2$.

## 3.Focus 1
__The cylinders__   
- Master the formulas for calculating the __lateral surface area__,
  __total surface area__, and __volume__ of a cylinder,
  with particular attention to __the special case of an equilateral cylinder__.  
- ###### Equilateral cylinder: the axial section is a square $(h=2r)$.  
  ![Equilateral cylinder.svg](../../public/math/Core%20courses/Equilateral%20cylinder.svg)  

::: wrap
### $\fbox{5}\:$If the height of a cylinder is increased to $\small 3$ times its original height, and its base radius is increased to $\small 1.5$ times its original radius, then by what factor does its volume increase compared to the original volume $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 4.5 &
\textsf{(B)} \: 6.75 &
\textsf{(C)} \: 9 &
\textsf{(D)} \: 12.5 &
\textsf{(E)} \: 15 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
V_{\textsf{old}}=\pi r^2h \\
V_{\textsf{new}}=\pi (1.5r)^2(3h)=\pi \cdot 2.25r^2 \cdot 3h=\pi r^2h \cdot (2.25 \cdot 3) = \pi r^2h\cdot 6.75 \\
\textsf{scale factor}=\frac{V_{\textsf{new}}}{V_{\textsf{old}}}=\frac{\pi r^2h\cdot 6.75}{\pi r^2h}=6.75 \\ 
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{scale factor}=6.75$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  V=\pi r^2h & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#volume}{\textsf{volume of a cylinder}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{6}\:$If the lateral development of a cylinder is a square, then its lateral surface area is how many times the area of its base $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 2 &
\textsf{(B)} \: 4 &
\textsf{(C)} \: 4\pi &
\textsf{(D)} \: \pi &
\textsf{(E)} \: 2\pi & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Solve by using the method of assigning specific values     
  ![Question prisms and cylinders figure Q-6 solve-1.svg](../../public/math/Core%20courses/Question%20prisms%20and%20cylinders%20figure%20Q-6%20solve-1.svg)   

  $
  \begin{array}{ll}
  \textsf{let }r=1 \quad c=2\pi \longrightarrow h=2\pi & \textsf{lateral development = square} \\
  \frac{S_{\textsf{lateral}}}{S_{\textsf{base}}}=\frac{(2\pi)^2}{\pi\times1^2}=4\pi \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\frac{S_{\textsf{lateral}}}{S_{\textsf{base}}}=4\pi$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\pi r^2 & \textsf{circle area formula} \\
  S=a^2 & \href{/math/0%20Core%20courses/26%20Chapter6%20plane%20geometry%20Module3%20quadrilaterals.html#_4-square}{\textsf{square area formula}} \\
  \end{array}
  >$

  :::
---

## 4.Focus 2
__The prisms__   
- Master the formulas for calculating the __surface area__ and __volume__ of common __triangular and quadrangular prisms__.

::: wrap
### $\fbox{7}\:$Figure 8–3, if the top and bottom faces of a right triangular prism are right triangles, what is the surface area of the triangular prism $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 28 &
\textsf{(B)} \: 30 &
\textsf{(C)} \: 32 &
\textsf{(D)} \: 36 &
\textsf{(E)} \: 38 & \\
\end{array}
$  
:::  
![Question prisms and cylinders figure 8-3.svg](../../public/math/Core%20courses/Question%20prisms%20and%20cylinders%20figure%208-3.svg)   
#### Solution
::: wrap  
- Show known conditions       
  ![Question prisms and cylinders figure 8-3 solve-1.svg](../../public/math/Core%20courses/Question%20prisms%20and%20cylinders%20figure%208-3%20solve-1.svg)   

  $
  \begin{array}{ll}
  S=S_{\textsf{lateral}}+2S_{\textsf{base}} \\
  S_{\textsf{lateral}}=(3+4+5)\times2=24 \\
  2S_{\textsf{base}}=2(\frac{1}{2}\times 4 \times 3)=12 \\
  S=24+12=36 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S=36$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  (3,4,5) & \href{/math/0%20Core%20courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#right-triangle}{\textsf{commonly used pythagorean numbers}} \\
  S=\textsf{base perimeter} \times \textsf{height} & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#lateral-surface-area}{\textsf{lateral area of a prism or cylinder}} \\
  S=\frac{1}{2}ah & \href{/math/0%20Core%20courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-height-of-side}{\textsf{triangle area formula}} \\
  F=S_{\textsf{lateral}}+2S_{\textsf{base}} & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#total-surface-area}{\textsf{total surface area of a prism or cylinder}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{8}\:$A quadrangular prism has a lateral development in the shape of a square with a side length of $\small 40$, and its base is also a square. What is its volume $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 2800 &
\textsf{(B)} \: 4000 &
\textsf{(C)} \: 4200 &
\textsf{(D)} \: 4800 &
\textsf{(E)} \: 5000 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions    
  ![Question prisms and cylinders figure Q-8 solve-1.svg](../../public/math/Core%20courses/Question%20prisms%20and%20cylinders%20figure%20Q-8%20solve-1.svg)   
  
  $
  \begin{array}{ll}
  V=10^2 \times 40=4000 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $V=4000$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=a^2 & \href{/math/0%20Core%20courses/26%20Chapter6%20plane%20geometry%20Module3%20quadrilaterals.html#_4-square}{\textsf{square area formula}} \\
  V=\textsf{base area} \times \textsf{height} & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#volume}{\textsf{volume of a prism or cylinder}} \\
  \end{array}
  >$

  :::
---

# Module 8–01 Sphere

## 1.Volume and Surface Area
- Let the radius of the sphere be $r$. Then its __volume is $\boldsymbol{V=\frac{4}{3}\pi r^3}$__, and its __surface area is $\boldsymbol{S=4\pi r^2}$__.

## 2.Section of a Sphere
- Figure 8–4,
  the line connecting the center of the sphere to the center of the circular section is perpendicular to the section.
  Let the distance from the center of the sphere to the section be $d$,
  the radius of the sphere be $R$, and the radius of the section be $r$, then: $r^2+d^2=R^2$.       
  ![Sphere section figure 8-4.svg](../../public/math/Core%20courses/Sphere%20section%20figure%208-4.svg)   

## 3.Circumscribed Sphere and Inscribed Sphere
- Let the radius of the cylinder's base be $r$, the radius of the sphere be $R$, and the height of the cylinder be $h$.  

| Solid             | Inscribed Sphere (conditional)                                                                | Circumscribed Sphere (unconditional)                                      |
|-------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Rectangular Prism | None (__only a cube has one__)                                                                | Body diagonal $\boldsymbol{l=2R}$                                         |
| Cube              | Edge length $\boldsymbol{a=2R}$                                                               | Body diagonal $\boldsymbol{l=2R}$  (that is, $\boldsymbol{2R=\sqrt{3}a}$) |
| Cylinder          | Only a cylinder whose __axial section__ is __a square__ has one, where $\boldsymbol{2r=h=2R}$ | Body diagonal $\boldsymbol{\sqrt{h^2+(2r)^2}=2R}$                         |

![Solid circumscribed sphere and inscribed sphere.svg](../../public/math/Core%20courses/Solid%20circumscribed%20sphere%20and%20inscribed%20sphere.svg)

- Notes:
  - In these relationships, be sure to make use of __the axial section of the solid__ when identifying geometric relationships.
  - The relationships are reciprocal: you can describe the circumscribed sphere of a cube, or the inscribed cube of a sphere — essentially, they're the same.  

## 4.Focus 1
__The basic formulas of a sphere__   
- Master the basic formulas for the __volume__ and __surface area__ of a sphere. 
- ###### Note that __the surface area is proportional to the square of the radius__, and __the volume is proportional to the cube of the radius__. 
  - $\frac{S_1}{S_2}=(\frac{r_1}{r_2})^2$. 
  - $\frac{V_1}{V_2}=(\frac{r_1}{r_2})^3$.

::: wrap
### $\fbox{9}\:$If the surface area of a sphere increases to $\small 9$ times its original value, what its volume $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{increase to }9\textsf{ times the original} &
\textsf{(B)} \: \textsf{increase to }27\textsf{ times the original} & \\
\textsf{(C)} \: \textsf{increase to }3\textsf{ times the original} &
\textsf{(D)} \: \textsf{increase to }6\textsf{ times the original} & \\
\textsf{(E)} \: \textsf{increase to }8\textsf{ times the original} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{S_1}{S_2}=(\frac{r_1}{r_2})^2 \\
S_2=S_1\times9 \\
\frac{S_2}{S_1}=9 \\
(\frac{r_1}{r_2})^2=9 \longrightarrow \frac{r_1}{r_2}=3 \\
\frac{V_1}{V_2}=(\frac{r_1}{r_2})^3 \\
\frac{V_2}{V_1}=(3)^3=27 \\
V_2=V_1\times27 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $V_2=V_1\times27$, so choose $B$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{S_1}{S_2}=(\frac{r_1}{r_2})^2 & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#note-that-the-surface-area-is-proportional-to-the-square-of-the-radius-and-the-volume-is-proportional-to-the-cube-of-the-radius}{\textsf{surface area proportionality relation}} \\
  \frac{V_1}{V_2}=(\frac{r_1}{r_2})^3 & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#note-that-the-surface-area-is-proportional-to-the-square-of-the-radius-and-the-volume-is-proportional-to-the-cube-of-the-radius}{\textsf{volume proportionality relation}} \\
  \end{array}
  >$

  :::
---

## 5.Focus 2
__The circumscribed sphere and the inscribed sphere__   
- Master the formulas for the __circumscribed sphere__ of a cuboid, cube, and cylinder,
  and the formulas for the __inscribed sphere__ of a cube and an equilateral cylinder.     


::: wrap
### $\fbox{10}\:$If a cuboid is inscribed in a sphere and its edge lengths are $\small 1, 2$, and $\small 3$, what is the surface area of the sphere $\small\,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{7\sqrt{14}}{6}\pi &
\textsf{(B)} \: 7\pi &
\textsf{(C)} \: \frac{7\sqrt{14}}{3}\pi &
\textsf{(D)} \: 14\pi &
\textsf{(E)} \: 28\pi & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
r=\frac{d=\sqrt{a^2+b^2+c^2}}{2}=\frac{\sqrt{1^2+2^2+3^2}}{2}=\frac{\sqrt{14}}{2} \\
S=4\pi r^2 = 4\pi \times \frac{14}{4} = 14\pi \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S=14\pi$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  l=2R & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_3-circumscribed-sphere-and-inscribed-sphere}{\textsf{circumscribed sphere diameter of a rectangular prism}} \\
  d=\sqrt{a^2+b^2+c^2} & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_3-space-diagonal-body-diagonal-1}{\textsf{body diagonal of a cuboid}} \\
  S=4\pi r^2 & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_1-volume-and-surface-area}{\textsf{surface area of a sphere}} \\ 
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{11}\:$What is the minimum value of the ratio between the volume of an equilateral cylinder (excluding its inscribed sphere) and the volume of that sphere $\small \, \mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{3}{4} &
\textsf{(B)} \: \frac{2}{3} &
\textsf{(C)} \: \frac{1}{2} &
\textsf{(D)} \: \frac{1}{4} &
\textsf{(E)} \: \frac{1}{3} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions    
  ![Question sphere figure Q-11 solve-1.svg](../../public/math/Core%20courses/Question%20sphere%20figure%20Q-11%20solve-1.svg)  

  $
  \begin{array}{ll}
  \textsf{let }r=1 \\
  h=2r=2 \\
  \frac{S_{\textsf{removed}}}{S_{\textsf{sphere}}}=\frac{\pi r^2h-\frac{4}{3}\pi r^3}{\frac{4}{3}\pi r^3}=\frac{\pi\cdot1^2\cdot2-\frac{4}{3}\pi\cdot1^3}{\frac{4}{3}\pi\cdot1^3} \\
  \frac{2\pi-\frac{4}{3}\pi}{\frac{4}{3}\pi} = \frac{\frac{2}{3}\pi}{\frac{4}{3}\pi}=\frac{2}{3}\times\frac{3}{4}=\frac{6}{12}=\frac{1}{2} \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\frac{S_{\textsf{removed}}}{S_{\textsf{sphere}}}=\frac{1}{2}$, so choose $C$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  h=2r & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#equilateral-cylinder-the-axial-section-is-a-square}{\textsf{axial section height (equilateral cylinder)}} \\
  V=\pi r^2h & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#volume}{\textsf{volume of a cylinder}} \\
  V=\frac{4}{3}\pi r^3 & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_1-volume-and-surface-area}{\textsf{volume of a sphere}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{12}\:$If a hemisphere is cut into a cylinder with a base radius half of the hemisphere's radius, what is the ratio of the volume of the hemisphere to the volume of the cylinder $\small\,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 4:1 &
\textsf{(B)} \: 8:3 &
\textsf{(C)} \: 16:3 &
\textsf{(D)} \: 16:3\sqrt{2} &
\textsf{(E)} \: 16:3\sqrt{3} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Show known conditions  
  ![Question sphere figure Q-12 solve-1.svg](../../public/math/Core%20courses/Question%20sphere%20figure%20Q-12%20solve-1.svg)   

  $
  \begin{array}{ll}
  \textsf{let }r=1 \\
  1:\sqrt{3}:2 \longrightarrow 
  \begin{cases}
  r=1 \\
  R=2 \\
  h=\sqrt{3} \\
  \end{cases} \\
  V_{\textsf{hemisphere}}=\frac{\frac{4}{3}\pi r^3}{2} = \frac{4}{3}\pi r^3 \times \frac{1}{2} = \frac{4}{6}\pi r^3=\frac{2}{3}\pi r^3 \\
  \frac{V_{\textsf{hemisphere}}}{V_{\textsf{cylinder}}}=\frac{\frac{2}{3}\pi r^3}{\pi r^2h}=\frac{\frac{2}{3}\pi\times2^3}{\pi\times1^2\times\sqrt{3}} \\
  \frac{\frac{2}{3}\pi\times2^3}{\pi\times1^2\times\sqrt{3}}=\frac{\frac{16}{3}\pi}{\sqrt{3}\pi}=\frac{\frac{16}{3}}{\sqrt{3}}=\frac{16}{3}\times\frac{1}{\sqrt{3}}=\frac{16}{3\sqrt{3}} \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\frac{V_{\textsf{hemisphere}}}{V_{\textsf{cylinder}}}=16:3\sqrt{3}$, so choose $E$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  1:\sqrt{3}:2 & \href{/math/0%20Core%20courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#in-a-triangle-with-angles-the-sides-are-always-in-the-ratio}{\textsf{special right triangle: 30-60-90}} \\
  V=\frac{4}{3}\pi r^3 & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#_1-volume-and-surface-area}{\textsf{volume of a sphere}} \\
  V=\pi r^2h & \href{/math/0%20Core%20courses/30%20Chapter8%20solid%20geometry.html#volume}{\textsf{volume of a cylinder}} \\
  \end{array}
  >$

  :::
---

## 6.Focus 3
__The section of a sphere__  
- Let the distance from the center of the sphere to the section be $d$,
  the radius of the sphere be $R$, and the radius of the section be $r$.
  According to the __Pythagorean theorem__, then: $r^2+d^2=R^2$. 


::: wrap
### $\fbox{13}\:$Two parallel planes intersect a sphere of radius $\small 5$, creating circular cross-sections with areas $\small 9\pi$ and $\small 16\pi$. What is the distance between these two planes $\small\,\mathpunct{?}$.
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: 7 &
\textsf{(C)} \: 3 \lor 4 &
\textsf{(D)} \: 1 \lor 7 &
\textsf{(E)} \: 3 \lor 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
- Both cross-sections may lie on the same side of the sphere or on opposite sides        
  ![Question sphere figure Q-13 solve-1.svg](../../public/math/Core%20courses/Question%20sphere%20figure%20Q-13%20solve-1.svg)  

  $
  \begin{array}{ll}
  S=\pi r^2 \\
  \begin{cases}
  \textsf{cross-section}_1=9\pi \\
  \textsf{cross-section}_2=16\pi \\
  \end{cases} \Rightarrow
  \begin{cases}
  r_1=3 \\
  r_2=4 \\
  \end{cases} \\
  \begin{cases}
  (3,5) \\
  (4,5) \\
  \end{cases} \longrightarrow (3,4,5) \\
  d_{\textsf{opposite sides}}=4+3=7 \\
  d_{\textsf{same side}}= 4-3=1 \\
  \end{array}
  $  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $d=1\lor7$, so choose $D$. 

  :::
- Formula used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\pi r^2 & \textsf{circle area formula} \\
  (3,4,5)& \href{/math/0%20Core%20courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#right-triangle}{\textsf{commonly used pythagorean numbers}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=vuODkDgkk_U&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuam?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95hx-30-chapter8-solid-geometry.html)                          |                                                                   |
