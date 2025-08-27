---
title: Chapter6 Plane Geometry – Module2 Triangles Middle
lang: en-US
---

## 5.Basic Area Formulas

### $\textcolor{#1E3A5F}{\fbox{1}}\: \small S=\frac{1}{2}ah$, where $\small h$ is the altitude to side $\small a$
- Application: when __the base and the height__ are known, this formula can be __used to find the area__.  


### $\textcolor{#1E3A5F}{\fbox{2}}\: \small S=\frac{1}{2}ab\textsf{sin}C$, where $\small C$ is the included angle between sides $\small a$ and $\small b$
- __angle-sine table__   

  | $\boldsymbol{C}$ | $\boldsymbol{30^\circ \, \lor \, 150^\circ}$ | $\boldsymbol{45^\circ \, \lor \, 135^\circ}$ | $\boldsymbol{60^\circ \, \lor \, 120^\circ}$ | $\boldsymbol{90^\circ}$ |
  |------------------|:--------------------------------------------:|:--------------------------------------------:|:--------------------------------------------:|:-----------------------:|
  | $\textsf{sin}C$  |                $\frac{1}{2}$                 |             $\frac{\sqrt{2}}{2}$             |             $\frac{\sqrt{3}}{2}$             |    $\boldsymbol{1}$     |

- Application: when __two sides and the included angle__ are known, this formula can be __used to find the area__.  
  ![Triangle Area formula two sides angle.svg](../../public/math/Core%20Courses/Triangle%20Area%20formula%20two%20sides%20angle.svg)     

::: wrap  
### $\textcolor{#1E3A5F}{\fbox{3}\:}\: \small S=\sqrt{p(p-a)(p-b)(p-c)}$, where $\small p=\frac{1}{2}(a+b+c)$
:::  
- Application: when __all three sides of the triangle__ are known, this formula can be __used to find the area__.    
  ![Triangle area formula three sides.svg](../../public/math/Core%20Courses/Triangle%20area%20formula%20three%20sides.svg)      

  

## 6.Focus 3
__The calculating area using the base–height relationship__  
- When two triangles have __the same height__, __the ratio of their areas equals the ratio of their bases__.    
  ![Ratio of areas of two triangles with same height.svg](../../public/math/Core%20Courses/Ratio%20of%20areas%20of%20two%20triangles%20with%20same%20height.svg)      
- When two triangles have __the same base__, __the ratio of their areas equals the ratio of their heights__.   
  ![Ratio of areas of two triangles with same base.svg](../../public/math/Core%20Courses/Ratio%20of%20areas%20of%20two%20triangles%20with%20same%20base.svg)      
- When two triangles have __the same base and the same height__, __their areas are equal__.  
  ::: wrap  
  $
  \begin{array}{ll}
  S=\frac{1}{2}ah
  \begin{cases}
  \frac{S_1}{S_2}=\frac{a_1}{a_2} & h\textsf{ are equal} \\
  \frac{S_1}{S_2}=\frac{h_1}{h_2} & a\textsf{ are equal} \\
  S_1=S_2 & a,h\textsf{ are equal} \\
  \end{cases}
  \end{array}  
  $  
  :::



### $\fbox{12}\:$Figure 6–13, if the area of $\small \triangle ABC$ is $\small 1$, and the areas of $\small \triangle AEC, \triangle DEC$, and $\small \triangle BED$ are equal, then what is the area of $\small \triangle AED \,\mathpunct{?}$.
![Question triangles figure 6-13.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-13.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{1}{3} &
\textsf{(B)} \: \frac{1}{6} &
\textsf{(C)} \: \frac{1}{5} &
\textsf{(D)} \: \frac{1}{4} &
\textsf{(E)} \: \frac{2}{5} & \\
\end{array}
$  
:::  
#### Solution
- Show known conditions  
  ![Question triangles figure 6-13 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-13%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  S_{\triangle AEC} = S_{\triangle DEC} = S_{\triangle BED} = \frac{1}{3} \\
  \end{array}
  $  
  :::  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the position of point $D$  
  ::: wrap  
  $
  \begin{array}{ll}
  S_{\triangle BDE}=S_{\triangle CDE} \Longrightarrow D\textsf{ is the midpoint of }BC & S_1=S_2\\
  S_{\triangle ABD}=\frac{1}{2}S_{\triangle ABC}=\frac{1}{2} & AD\textsf{ is the median of }\triangle ABC\\
  S_{\triangle AED}=\frac{1}{2}-\frac{1}{3}=\frac{1}{6} \\
  \end{array}
  $  
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the position of point $E$    
  ::: wrap
  $
  \begin{array}{ll}
  S_{\triangle BCE}=2S_{\triangle ACE} \\
  BE=2AE & \frac{S_1}{S_2}=\frac{a_1}{a_2} h\textsf{ are equal}\\
  S_{\triangle AED}=\frac{1}{2}S_{\triangle BDE}=\frac{1}{6} & \frac{S_1}{S_2}=\frac{a_1}{a_2}  h\textsf{ are equal}\\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $S_{\triangle AED}=\frac{1}{6}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\frac{1}{2}ah
  \begin{cases}
  \frac{S_1}{S_2}=\frac{a_1}{a_2} & h\textsf{ are equal} \\
  \frac{S_1}{S_2}=\frac{h_1}{h_2} & a\textsf{ are equal} \\
  S_1=S_2 & a,h\textsf{ are equal} \\
  \end{cases} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#_6-focus-3}{\textsf{properties of triangle area formula}} \\
  \end{array}
  >$

  :::
---



### $\fbox{13}\:$Figure 6–14, given that $\small CD=5, DE=7, EF=15$, and $\small FG=6$, the line segment $\small AB$ divides the figure into two parts. The area of the left part is 38, and the area of the right part is 65. Find the area of triangle $\small ADG$.
![Question triangles figure 6-14.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-14.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 40 &
\textsf{(B)} \: 35 &
\textsf{(C)} \: 33 &
\textsf{(D)} \: 32 &
\textsf{(E)} \: 31 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions and set the unknown area variables       
  ![Question triangles figure 6-14 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-14%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \triangle ADE=x \quad \triangle BCE=y \\
  \triangle AEG=\frac{15+6}{7}x=3x \\
  \triangle BEG=\frac{15}{7+5}y=\frac{5}{4}y \\
  \begin{cases}
  x+y=38 \\
  3x+\frac{5}{4}y=65 \\
  \end{cases} \\
  y=38-x \\
  3x+\frac{5}{4}(38-x)=65 \\
  3x+\frac{5}{4}\times 38 -\frac{5}{4}\times x= 65 \\
  3x+\frac{190}{4}-\frac{5}{4}x=65 \\
  4(3x)+4(\frac{190}{4})-4(\frac{5}{4}x)=4(65) \\
  12x-5x+190=260 \\
  7x=260-190 \\
  7x=70 \\
  x=\frac{70}{7}=10 \\ 
  y=38-10=28 \\
  S_{\triangle ADG}=x+3x=4\times10=40
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $S_{\triangle ADG}=40$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\frac{1}{2}ah
  \begin{cases}
  \frac{S_1}{S_2}=\frac{a_1}{a_2} & h\textsf{ are equal} \\
  \frac{S_1}{S_2}=\frac{h_1}{h_2} & a\textsf{ are equal} \\
  S_1=S_2 & a,h\textsf{ are equal} \\
  \end{cases} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#_6-focus-3}{\textsf{properties of triangle area formula}} \\
  \end{array}
  >$

  :::
---

## 7.Focus 4
__The using the included angle to find the area__  
- If __two sides and the included angle of a triangle__ are known,
  the area can be found using the formula: $\boldsymbol{S=\frac{1}{2}ab\textsf{sin}C}$.
  It is necessary to remember __the trigonometric values of common angles__.



### $\fbox{14}\:$If a triangle has two sides of lengths $\small 4$ and $\small 6$, and its area is $\small 6\sqrt{2}$, then what is the included angle between these two sides $\small \mathpunct{?}$. 
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 30^\circ &
\textsf{(B)} \: 45^\circ \lor 135^\circ &
\textsf{(C)} \: 60^\circ \lor 120^\circ &
\textsf{(D)} \: 75^\circ &
\textsf{(E)} \: 90^\circ & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
S=\frac{1}{2}\times 4 \times 6 \times \textsf{sin}C = 6\sqrt{2} \\
12\textsf{sin}C=6\sqrt{2} \\
\textsf{sin}C=\frac{6\sqrt{2}}{12}=\frac{√2}{2} \\
\textsf{sin}C=\frac{√2}{2}=45^\circ \lor 135^\circ \\ 
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $\textsf{sin}C=45^\circ \lor 135^\circ$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\frac{1}{2}ab\textsf{sin}C & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-included-angle-between-sides-and}{\textsf{triangle area formula (included angle)}} \\
  \end{array}
  >$

  :::
---



### $\fbox{15}\:$If a triangle has two sides of lengths $\small 4$ and $\small 6$, and the third side length varies, then what is the maximum possible area of the triangle $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 18 &
\textsf{(B)} \: 16 &
\textsf{(C)} \: 14 &
\textsf{(D)} \: 12 &
\textsf{(E)} \: 10 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
S_{\textsf{max}}=\frac{1}{2}\times 4 \times 6 \times \textsf{sin}90^\circ \\
\textsf{sin}90^\circ= 12 & \textsf{max area when }\textsf{sin}C=1 \longrightarrow C=90^\circ \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S_{\textsf{max}}=\textsf{sin}90^\circ=12$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\frac{1}{2}ab\textsf{sin}C & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-included-angle-between-sides-and}{\textsf{triangle area formula (included angle)}} \\
  \end{array}
  >$

  :::
---


## 8.Focus 5
__The using three sides to find the area__
- When __the three sides of a triangle__ are known, the area can be found using the formula: $\boldsymbol{S=\sqrt{p(p-a)(p-b)(p-c)}}$,
  where $\boldsymbol{p=\frac{1}{2}(a+b+c)}$. 



### $\fbox{16}\:$If the three sides of a triangle are $\small 7, 8$, and $\small 9$, then the area of the triangle is $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 16\sqrt{2} &
\textsf{(B)} \: 12\sqrt{3} &
\textsf{(C)} \: 18\sqrt{3} &
\textsf{(D)} \: 12\sqrt{5} &
\textsf{(E)} \: 18\sqrt{5} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
p=\frac{7+8+9}{2}=12 \\
S=\sqrt{12(12-7)(12-8)(12-9)} \\
S=\sqrt{12\times5\times4\times3}=12\sqrt{5} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S=12\sqrt{5}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  S=\sqrt{p(p-a)(p-b)(p-c)} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where}{\textsf{heron's formula}} \\
  \end{array}
  >$

  :::
---

## 9.Special Triangles and Their Areas 

### $\textcolor{#1E3A5F}{\fbox{1}}\:$ Right triangles
- Pythagorean theorem: $a^2+b^2=c^2$      
- ###### __Common Pythagorean triples__: $\boldsymbol{(3,4,5)}$, $\boldsymbol{(6,8,10)}$, $\boldsymbol{(5,12,13)}$, $\boldsymbol{(7,24,25)}$, $\boldsymbol{(8,15,17)}$, $\boldsymbol{(9,12,15)}$    
  - __The proportional (scaled) pythagorean triple__ equation is $\boldsymbol{(ka)^2+(kb)^2=(kc)^2}$, where $k\in\mathbb{Z}^+$.  
- In __an isosceles right triangle__, the ratio of the three sides is $\boldsymbol{1:1:\sqrt{2}}$.  
  ![Side ratio of isosceles right triangle.svg](../../public/math/Core%20Courses/Side%20ratio%20of%20isosceles%20right%20triangle.svg)   
- The area of an isosceles right triangle is $S=\frac{1}{2}a^2=\frac{1}{4}c^2$, where __$\boldsymbol{a}$ is the length of a leg__ and __$\boldsymbol{c}$ is the hypotenuse__.     
- ###### In __a $\boldsymbol{30^\circ,60^\circ,90^\circ}$ right triangle__, the ratio of the three sides is $\boldsymbol{1:\sqrt{3}:2}$.   
  ![Triangle 30-60-90 side ratio.svg](../../public/math/Core%20Courses/Triangle%2030-60-90%20side%20ratio.svg)    

### $\textcolor{#1E3A5F}{\fbox{2}}\:$ Equilateral triangles
- __The ratio of the height to the side__ is $\boldsymbol{\sqrt{3}:2=\frac{\sqrt{3}}{2}:1}$.   
  - $h=\frac{\sqrt{3}}{2}a$  
- ###### The area of an equilateral triangle is $\boldsymbol{S=\frac{\sqrt{3}}{4}a^2}$, where __$\boldsymbol{a}$ is the side length__.
  - $S=\frac{1}{2}a\times\frac{\sqrt{3}}{2}a=\frac{\sqrt{3}}{4}a^2$   

![Area of equilateral triangle.svg](../../public/math/Core%20Courses/Area%20of%20equilateral%20triangle.svg)  



## 10.Area Ratio Theorem for Common-Angle Triangles
::: wrap  
- If two triangles have $\overbrace{\textsf{angle that is equal or supplementary}}^{\href{https://www.mathsisfun.com/sine-cosine-tangent.html}{\textsf{same sine value}}}$, they're called __common-angle triangles__.
:::  
- For common-angle triangles, __the ratio of their areas equals the ratio of the products of the two sides enclosing the equal (or supplementary) angle__.
::: wrap  
- Figure 6–11, in $\angle ABC$ and $\angle ADE$, since __the sine of $\boldsymbol{\angle A}$ has the same sine value__, $\boldsymbol{S_{\triangle ABC}:S_{\triangle ADE}=(AB \cdot AC):(AD \cdot AE)}$.     
  ![Common angle area ratio theorem figure 6-11.svg](../../public/math/Core%20Courses/Common%20angle%20area%20ratio%20theorem%20figure%206-11.svg)  
:::  
- __Theorem derivation__     
  ::: wrap  
  $
  \begin{array}{ll}
  S=\frac{1}{2}ab\textsf{sin}C & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-included-angle-between-sides-and}{\textsf{triangle area formula (included angle)}} \\
  \frac{S_{\triangle ADE}}{S_{\triangle ABC}}=\frac{\cancel{\frac{1}{2}}AD\times AE \times \cancel{\textsf{sin}A}}{\cancel{\frac{1}{2}}AB\times AC \times \cancel{\textsf{sin}A}}=\frac{AD\times AE}{AB \times AC} \\
  \end{array}
  $  
  :::




## 11.Focus 6
__The use of the area ratio theorem for common-angle triangles__   
- If triangles with __a common or equal angle appear__,
  __the area ratio theorem for common-angle triangles__ can be applied:
  __the ratio of their areas equals the ratio of the products of the two sides enclosing the equal (or supplementary) angle__.



::: wrap  
### $\fbox{17}\:$Figure 6–15, in $\small \triangle ABC$, points $\small D$ and $\small E$ lie on $\small AB$ and $\small AC$, respectively. Given that $\small AD:AB=2:5, AE:AC=4:7, S_{\triangle ADE}=16$, find the area of $\small \triangle ABC$.
:::  
![Question triangles figure 6-15.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-15.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 56 &
\textsf{(B)} \: 65 &
\textsf{(C)} \: 66 &
\textsf{(D)} \: 70 &
\textsf{(E)} \: 72 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question triangles figure 6-15 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-15%20solve-1.svg)   
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_{\triangle ADE}}{S_{\triangle ABC}}=\frac{AD\times AE}{AB \times AC}=\frac{2}{5}\times \frac{4}{7}= \frac{8}{35} \\
  S_{\triangle ADE}=16 \\  
  \frac{16}{S_{\triangle ABC}}=\frac{8}{35} \\
  16\times 35=S_{\triangle ABC}\times 8 \\
  560 = S_{\triangle ABC}\times 8 \\
  S_{\triangle ABC}=\frac{560}{8}=70 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $S_{\triangle ABC}=70$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{S_{\triangle ADE}}{S_{\triangle ABC}}=\frac{AD\times AE}{AB \times AC} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#_10-area-ratio-theorem-for-common-angle-triangles}{\textsf{common-angle triangles – area ratio theorem}} \\
  \end{array}
  >$

  :::
---


::: wrap  
### $\fbox{18}\:$Figure 6–15, in $\small \triangle ABC$, point $\small D$ lies on the extension of $\small BA$, and point $\small E$ lies on $\small AC$. Given that $AB: AD=5:2, AE: EC=3:2, S_{\triangle ADE}=12$, find the area of $\small \triangle ABC$.
:::  
![Question triangles figure 6-16.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-16.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 30 &
\textsf{(B)} \: 35 &
\textsf{(C)} \: 43 &
\textsf{(D)} \: 48 &
\textsf{(E)} \: 50 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question triangles figure 6-16 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-16%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_{\triangle ADE}}{S_{\triangle ABC}}=\frac{AD \times AE}{AB \times AC}=\frac{2 \times 3}{5 \times(3+2)}=\frac{6}{25} \\
  S_{\triangle ADE}=12 \\
  \frac{12}{S_{\triangle ABC}}=\frac{6}{25} \\
  12\times 25=S_{\triangle ABC}\times 6 \\
  300=S_{\triangle ABC}\times 6 \\
  S_{\triangle ABC}=\frac{300}{6}=50 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $S_{\triangle ABC}=50$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{S_{\triangle ADE}}{S_{\triangle ABC}}=\frac{AD\times AE}{AB \times AC} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#_10-area-ratio-theorem-for-common-angle-triangles}{\textsf{common-angle triangles – area ratio theorem}} \\
  \end{array}
  >$

  :::
---


## 12.Area Ratio Theorem for Concurrent Cevians
- Figure 6–12, in $\triangle ABC$,
  if __cevians $\boldsymbol{AD, AE}$, and $\boldsymbol{CF}$__ are __concurrent at a single point $\boldsymbol{O}$__,
  then $\boldsymbol{S_{\triangle ABO}:S_{\triangle ACO}=BD:DC}$.  
  ![Cevians area ratio theorem figure 6-12.svg](../../public/math/Core%20Courses/Cevians%20area%20ratio%20theorem%20figure%206-12.svg)
- This theorem provides __a way to transform an area ratio into a segment ratio__.
  It is widely used in many geometry problems.
  Its special feature is __that it holds in any triangle__,
  establishing __a connection between the areas of sub-triangles and the corresponding base segments__.
- __Theorem derivation__     
  ![Cevians area ratio theorem derivation.svg](../../public/math/Core%20Courses/Cevians%20area%20ratio%20theorem%20derivation.svg)    
  ::: wrap  
  $
  \begin{array}{ll}
  S=\frac{1}{2}ah
  \begin{cases}
  \frac{S_1}{S_2}=\frac{a_1}{a_2} & h\textsf{ are equal} \\
  \end{cases} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#_6-focus-3}{\textsf{property of triangle area formula}} \\
  S_{\triangle ABD}:S_{\triangle ACD} = BD:CD & \triangle ABD \textsf{ and } \triangle ACD \textsf{ have equal altitude} \\
  S_{\triangle BOD}:S_{\triangle COD} = BD:CD & \triangle BOD \textsf{ and } \triangle COD \textsf{ have equal altitude} \\
  \frac{S_{\triangle ABD}}{S_{\triangle ACD}}= \frac{S_{\triangle BOD}}{S_{\triangle COD}}=\frac{BD}{CD} \\
  \frac{S_{\triangle ABD}-S_{\triangle BOD}}{S_{\triangle ACD}-S_{\triangle COD}}=\frac{S_{\triangle AOB}}{S_{\triangle AOC}} \\
  (S_{\triangle ABD}-S_{\triangle BOD}):(S_{\triangle ACD}-S_{\triangle COD})=BD:CD \\
  S_{\triangle AOB}:S_{\triangle AOC}=BD:CD \\
  \end{array}
  $  
  :::


## 13.Focus 7
__The use of the area ratio theorem for concurrent cevians__
- If __a point inside a triangle__ is __connected to all three vertices__,
  __the area ratio theorem for concurrent cevians__ can be applied.


::: wrap  
### $\fbox{19}\:$Figure 6–17, in $\small \triangle ABC$, $\small BD:DC=4:9, CE:EA=4:3$, then $\small AF:FB=\,\mathpunct{?}$.
:::  
![Question triangles figure 6-17.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-17.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 27:17 &
\textsf{(B)} \: 27:14 &
\textsf{(C)} \: 25:16 &
\textsf{(D)} \: 28:15 &
\textsf{(E)} \: 27:16 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question triangles figure 6-17 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-17%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  ① \;\, \frac{BD}{CD}=\frac{S_{\triangle AOB}}{S_{\triangle AOC}} \\
  ② \;\, \frac{CE}{AE}=\frac{S_{\triangle BOC}}{S_{\triangle AOB}} \\
  ③ \;\, \frac{AF}{BF}=\frac{S_{\triangle AOC}}{S_{\triangle BOC}} \\
  \frac{BD}{CD}\times \frac{CE}{AE}\times \frac{AF}{BF}=\frac{\cancel{S_{\triangle AOB}}}{\cancel{S_{\triangle AOC}}}\times \frac{\cancel{S_{\triangle BOC}}}{\cancel{S_{\triangle AOB}}}\times \frac{\cancel{S_{\triangle AOC}}}{\cancel{S_{\triangle BOC}}}=1 \\
  \frac{4}{9}\times \frac{4}{3}\times \frac{AF}{BF}=1 \\
  \frac{16}{27} \times \frac{AF}{BF}=1 \Longrightarrow \frac{AF}{BF}=\frac{27}{16} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\frac{AF}{BF}=\frac{27}{16}$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{S_{\triangle AOB}}{S_{\triangle AOC}}=\frac{BD}{CD} & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#_12-area-ratio-theorem-for-concurrent-cevians}{\textsf{concurrent cevians – area ratio theorem}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=sf9bIkN-UaE&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsuaa?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95gh-24-chapter6-plane-geometry-module2-triangles-middle.html) |                                                                   |
