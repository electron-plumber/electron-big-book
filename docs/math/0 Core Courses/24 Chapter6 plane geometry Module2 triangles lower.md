---
title: Chapter6 Plane Geometry – Module2 Triangles Lower
lang: en-US
---

## 14.Right Triangle
- It can be identified using __the pythagorean theorem $\boldsymbol{a^2+b^2=c^2}$__ or by __having one angle of $\boldsymbol{90^\circ}$__.

## 15.Isosceles Right Triangle
- The ratio of the sides is $\boldsymbol{1:1:\sqrt{2}}$, or it is __a right triangle with two equal sides__.


## 16.Equilateral Triangle
- __All three sides are equal__, or __all three interior angles are equal__, or __the four centers coincide__.


## 17.Isosceles Triangle
- A triangle with __two equal sides__ or __two equal angles__.



## 18.Focus 8
__The triangle identification__  
- This mainly involves using __the internal angle relationships__ and __the conditions that satisfy the side lengths of the triangle__,
  along with __the properties of the triangle__ to determine __its shape__.
  Focus on mastering the characteristics of __equilateral triangles__, __isosceles triangles__, __right triangles__, and __isosceles right triangles__.
  When the given condition in a problem is __the side lengths of a triangle__,
  the key to determining its shape is using __identity transformations__ to find __the relationship between $\boldsymbol{a,b,c}$__.




### $\fbox{20}\:$For triangle $\small \triangle ABC$, if its sides $\small a, b$, and $\small c$ satisfy the equation $\small 1+\frac{b}{c}=\frac{b+c}{b+c-a}$, then what type of triangle is it $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{isosceles triangle with }a\textsf{ as the leg} &
\textsf{(B)} \: \textsf{isosceles triangle with }a\textsf{ as the base} & \\
\textsf{(C)} \: \textsf{equilateral triangle} &
\textsf{(D)} \: \textsf{right triangle} & \\
\textsf{(E)} \: \textsf{obtuse triangle} & \\
\end{array}
$  
:::
#### Solution
::: wrap
$
\begin{array}{ll}
\frac{b+c}{c}=\frac{b+c}{b+c-a} \\
a+b>c\textsf{ holds, numerator} \ne 0 \\
\frac{\cancel{b+c}}{c}=\frac{\cancel{b+c}}{b+c-a}=b+c-a=c \\
b=a \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $b=a$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a+b>c & \href{/math/0%20Core%20Courses/22%20Chapter6%20plane%20geometry%20Module1%20parallel%20lines%20Module2%20triangles%20upper.html#_2-relationship-between-the-three-sides-of-a-triangle}{\textsf{triangle inequality}} \\
  \end{array}
  >$

  :::
- Additionally, if the problem is $\frac{b}{c}-1=\frac{b-c}{b+c-a}$  
  ::: wrap
  >$
  \begin{array}{ll}
  \frac{b-c}{c}=\frac{b-c}{b+c-a} \\
  ① \;\, \frac{b-c}{\cancel{c}}=\frac{b-c}{\cancel{b+c-a}} = b-c=0 & \textsf{let }b-c=0  \\
  ② \;\, \frac{\cancel{b-c}}{c}=\frac{\cancel{b-c}}{b+c-a} = c=b+c-a & \textsf{let }b-c\ne0  \\
  b=c \lor a=b \\
  \end{array}
  >$

  :::  
---

::: wrap  
### $\fbox{21}\:$For triangle $\small \triangle ABC$, if its sides $\small a, b$, and $\small c$, and they satisfy the equation $\small 4a^2+4b^2+13c^2-8ac-12bc=0$, then what type of triangle is $\small \triangle ABC =\, \mathpunct{?}$.
:::  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{right triangle} &
\textsf{(B)} \: \textsf{isosceles triangle} &
\textsf{(C)} \: \textsf{equilateral triangle} & \\
\textsf{(D)} \: \textsf{isosceles right triangle} &
\textsf{(E)} \: \textsf{acute triangle} & \\
\end{array}
$  
:::
#### Solution
- Solve it by completing the square and by observing the non-negativity property of $(x)^2 \ge 0$   
  ![Question triangles figure Q-21 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%20Q-21%20solve-1.svg)     
  ::: wrap  
  $
  \begin{array}{ll}
  4a^2-8ac+4c^2 \\
  4b^2-12bc+9c^2 \\
  4a^2-8ac+4c^2+4b^2-12bc+9c^2=0 \\
  4(a-c)^2+(2b-3c)^2=0 \\
  a=c \land 2b=3c & (x)^2=0 \\
  \end{array}
  $
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $a=c \land 2b=3c$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (a-b)^2=a^2-2ab+b^2 & \textsf{perfect square formula} \\
  \end{array}
  >$

  :::
---

::: wrap   
### $\fbox{22}\:$For triangle $\small \triangle ABC$, if its sides $\small a, b$, and $\small c$, and they satisfy the equation $\small a^2+2bc=b^2+2ac=c^2+2ab=27$, then what type of triangle is $\small \triangle ABC =\, \mathpunct{?}$. 
:::   
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{isosceles triangle} &
\textsf{(B)} \: \textsf{isosceles right triangle} &
\textsf{(C)} \: \textsf{obtuse triangle} & \\
\textsf{(D)} \: \textsf{right triangle} &
\textsf{(E)} \: \textsf{equilateral triangle} & \\
\end{array}
$  
:::
#### Solution
::: wrap   
$
\begin{array}{ll}
\begin{cases}
a^2+2bc=27 \; ①\\
b^2+2ac=27 \; ②\\
c^2+2ab=27 \; ③\\
\end{cases} \\
\textsf{add all terms together to form a perfect square} \\
a^2+b^2+c^2+2ab+2ac+2bc=27\times3 \\
(a+b+c)^2=81 \\
a+b+c=\sqrt{81}=9 \\
(a^2+2bc)-(b^2+2ac)=27-27 & ①\,-② \\
a^2-b^2+2bc-2ac=0 \\
(a+b)(a-b)+2c(b-a)=0 \\
(a-b)(a+b-2c)=0 \\
a=b \lor a+b=2c \\
\begin{cases}
a+b+c=9  \\
\boxed{
\begin{array}{ll}
c+2a=9 \;\\
a^2+2ac=27 & ② \;\\
c^2+2a^2=27 & ③ \;\\
(c^2+2a^2)-(a^2+2ac)=27-27 & ③\,-② \;\\
c^2-2ac+a^2=0 \;\\
(c-a)^2=0 \;\\
c=a \;\\
c+2c=9 & a=c \;\\
3c=9 \;\\
c=\frac{9}{3}=3 \;\\
a=b=c=3 \;\\
\end{array}}
\end{cases} & a=b \\
\begin{cases}
a+b+c=9  \\
\boxed{
\begin{array}{ll}
2c+c=9 \;\\
3c=9 \;\\
c=\frac{9}{3}=3 \;\\
a+b=6 \;\\
b^2+6a=27 &  ② \;\; c=3 \;\\
9+2ab=27 & ③ \;\; c=3 \;\\
ab=\frac{18}{2}=9 & ③ \;\\
6 \ge 2\sqrt{9} & a+b \ge 2\sqrt{ab} \;\\
6=6 \;\\
\boxed{(a=b) \land (a+b)}=6 \;\\
a=b=3 \;\\
a=b=c=3 \;\\
\end{array}}
\end{cases} & a+b=2c \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $a=b=c=3$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  (a+b)^2=a^2+2ab+b^2 \\
  (a-b)^2=a^2-2ab+b^2
  \end{cases} & \textsf{perfect square formula} \\
  a^2-b^2=(a-b)(a+b) & \textsf{difference of squares formula} \\
  a+b \ge 2\sqrt{ab} & \textsf{arithmetic mean-geometric mean inequality} \\
  \end{array}
  >$

  :::
---

## 19.Congruence of Triangles

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
- Two triangles are __said to be congruent__ if they have __the same shape__ and __the same size__.


### $\textcolor{#1E3A5F}{\fbox{2}}\:$Identification
- Congruence can be determined by the following conditions:
  - __Side-Side-Side (SSS)__
  - __Side-Angle-Side (SAS)__
  - __Angle-Side-Angle (ASA)__
  - __Angle-Angle-Side (AAS)__


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Properties
- If two triangles are congruent,
  then __their corresponding sides, corresponding angles, and areas are all equal__.
  In __mathematical terms__, two congruent triangles are __equivalent__,
  sharing __the same side lengths, angles, and area__.


### $\textcolor{#1E3A5F}{\fbox{4}}\:$Applications
- Congruence can be applied in situations __involving folding, symmetry, or rotation__.


## 20.Similarity of Triangles

### $\textcolor{#1E3A5F}{\fbox{1}}\:$Definition
- Two triangles are __said to be similar__ if they have __the same shape__ and __their sizes are in proportional__.
- A ratio of $1$ implies congruence.

### $\textcolor{#1E3A5F}{\fbox{2}}\:$Identification
- Two triangles are similar if they have __two pairs of corresponding angles equal__. 
  ![Triangles similarity identification.svg](../../public/math/Core%20Courses/Triangles%20similarity%20identification.svg)     


### $\textcolor{#1E3A5F}{\fbox{3}}\:$Properties
1. ###### In similar triangles (or similar figures), __the ratios of corresponding sides are equal__, called the similarity ratio: $\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}=\boldsymbol{k}$.
2. In similar triangles (or similar figures), __the ratios of corresponding altitudes, medians, and angle bisectors are also equal__ to __the similarity ratio__.     
   ![Triangles similarity properties.svg](../../public/math/Core%20Courses/Triangles%20similarity%20properties.svg)       
3. The ratio of __the perimeters of two similar triangles__ (or similar figures) equals __the similarity ratio__: $\frac{C_1}{C_2}=\boldsymbol{k}$.
4. ###### The ratio of __the areas of two similar triangles__ (or similar figures) equals __the square of the similarity ratio__: $\frac{S_1}{S_2}=\boldsymbol{k^2}$.


### $\textcolor{#1E3A5F}{\fbox{4}}\:$Applications
- When __parallel lines appear__, __similarity can be used__ for analysis.
- Remark: the properties of similar triangles can be __fully extended to other similar figures__, such as __quadrilaterals__.   
  ![Triangles similarity applications.svg](../../public/math/Core%20Courses/Triangles%20similarity%20applications.svg)      



## 21.Focus 9
__The congruent triangles__   
- When dealing with __folding__, __symmetry__, or __reflection__, use __congruence analysis__.



### $\fbox{23}\:$Figure 6–19, in triangle $\small \triangle ABC$, $\small AD \perp BC$ at point $\small D$, $\small CE \perp AB$ at point $\small E$, $\small AD$ and $\small CE$ intersect at point $\small H$, if $\small EH=EB=3, AE=4$, then $\small CH=\, \mathpunct{?}$.
![Question triangles figure 6-19.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-19.svg)     
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 1 &
\textsf{(B)} \: \frac{4}{3} &
\textsf{(C)} \: \frac{5}{3} &
\textsf{(D)} \: \sqrt{3} &
\textsf{(E)} \: 2 & \\
\end{array}
$  
:::
#### Solution
- Find __the corresponding equal sides and equal (acute) angles__ of two congruent right triangles.
  ![Question triangles figure 6-19 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-19%20solve-1.svg)    
  ::: wrap  
  $
  \begin{array}{ll}
  \begin{cases}
  \boxed{
  \begin{array}{ll}
  \angle 1 +\angle 2 = 90^\circ \\
  \angle 3 +\angle 4 = 90^\circ \\
  \angle 2 = \angle 3 & \textsf{vertical angles are equal} \;\\
  \end{array}}
  \end{cases} \implies \angle 1 = \angle 4 & \textsf{equal (acute) angles}\\
  \begin{cases}
  \boxed{
  \begin{array}{ll}
  EH=EB
  \end{array}}
  \end{cases} \implies \triangle AEH \cong \triangle CEB & \textsf{equal sides}\\
  AE=CE=4 \\
  CH=CE-EH=4-3=1 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $CH=1$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  \textsf{find one side and an acute angle }0^\circ \sim 90^\circ \\
  \textsf{find two sides (pythagorean theorem already holds)} \\
  \end{cases} & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#identification}{\textsf{right triangles congruence}} \\
  \end{array}
  >$

  :::
---

### $\fbox{24}\:$Figure 6–20, in right triangle $\small ABC$, the hypotenuse $\small AB=13$ and the leg $\small AC=5$. Fold $\small AC$ onto $\small AB$ so that they overlap, with point $\small C$ coinciding with point $\small E$. The crease is $\small AD$. Find the area of the shaded region.  
![Question triangles figure 6-20.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-20.svg)   
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 20 &
\textsf{(B)} \: \frac{40}{3} &
\textsf{(C)} \: \frac{38}{3} &
\textsf{(D)} \: 14 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question triangles figure 6-20 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-20%20solve-1.svg)    
  ::: wrap  
  $
  \begin{array}{ll}
  BC=12 & \textsf{5,12,13} \\ 
  \triangle ACD \cong \triangle AED \\  
  AE=AC=5 \\
  BE=13-5=8 \\ 
  \end{array}
  $   
  :::  
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by analyzing the length of $ED$ using the similarity ratio   
  ::: wrap
  $
  \begin{array}{ll}
  \triangle BDE \sim \triangle BAC \\
  \frac{DE}{AC}=\frac{BE}{BC} \Rightarrow \frac{DE}{5}=\frac{8}{12} \\
  DE \times 12 = 8 \times 5 \\
  DE \times 12 = 40 \\ 
  DE=\frac{40}{12}=\frac{10}{3} \\
  S_{\triangle BDE}=\frac{1}{2} \times \frac{10}{3} \times 8 = \frac{80}{6} = \frac{40}{3} \\
  \end{array}
  $  
  :::  
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by analyzing that the area ratio equals the square of the similarity ratio   
  ::: wrap  
  $
  \begin{array}{ll}
  \frac{S_{\triangle BDE}}{S_{\triangle BAC}}=(\frac{8}{12})^2=(\frac{2}{3})^2=\frac{4}{9} \\
  S_{\triangle BAC}=\frac{1}{2} \times 5 \times 12 = 30 \\
  \frac{S_{\triangle BDE}}{30}=\frac{4}{9} \\
  S_{\triangle BDE} \times 9 = 30 \times 4 \\
  S_{\triangle BDE} \times 9 = 120 \\
  S_{\triangle BDE} = \frac{120}{9} = \frac{40}{3} \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(B)}$  
  > According to the Solution, get $S_{\triangle BDE}=\frac{40}{3}$, so choose $B$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (5,12,13)& \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#common-pythagorean-triples}{\textsf{common pythagorean triples}} \\
  \frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}=k & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#in-similar-triangles-or-similar-figures-the-ratios-of-corresponding-sides-are-equal-called-the-similarity-ratio}{\textsf{similar triangles sides ratio formula}} \\
  \frac{S_1}{S_2}=k^2 & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#the-ratio-of-the-areas-of-two-similar-triangles-or-similar-figures-equals-the-square-of-the-similarity-ratio}{\textsf{similar triangles area ratio formula}} \\
  S=\frac{1}{2}ah & \href{/math/0%20Core%20Courses/23%20Chapter6%20plane%20geometry%20Module2%20triangles%20middle.html#where-is-the-altitude-to-side}{\textsf{triangle area formula}} \\
  \end{array}
  >$

  :::
---

## 22.Focus 10
__The similar triangles__  
- When __parallel lines are involved__, __similarity analysis is used__.
  For __the similar figure__, __the area ratio is equal to the square of the similarity ratio__. 
- Congruent shapes __look at the sides__.   
- Similar shapes __look at angles__.  



### $\fbox{25}\:$Which of the following statements is correct $\small \, \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(1)} \: \textsf{all right triangles are similar} &
\textsf{(2)} \: \textsf{all isosceles triangles are similar} & \\
\textsf{(3)} \: \textsf{all parallelograms are similar} &
\textsf{(4)} \: \textsf{all equilateral triangles are similar} & \\
\textsf{(5)} \: \textsf{all trapezoids are similar} & 
\textsf{(6)} \: \textsf{all squares are similar} & \\
\textsf{(7)} \: \textsf{all rectangles are similar} &   
\textsf{(8)} \: \textsf{all circles are similar} & \\
\textsf{(A)} \: 1 &
\textsf{(B)} \: 2 & \\
\textsf{(C)} \: 3 &  
\textsf{(D)} \: 4 & \\
\textsf{(E)} \: 5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\textsf{(1)} \: \triangle30^\circ60^\circ90^\circ \neq \triangle45^\circ45^\circ90^\circ \;\textsf{two pairs of corresponding angles unequal} \,❌\;\\
\textsf{(2)} \: \textsf{two pairs of corresponding angles unequal} \,❌\;\\
\textsf{(3)} \: \textsf{four pairs of corresponding angles unequal} \,❌\;\\
\textsf{(4)} \: \triangle60^\circ60^\circ60^\circ = \triangle60^\circ60^\circ60^\circ \;\textsf{two pairs of corresponding angles unequal} \,✅\;\\
\textsf{(5)} \: \textsf{corresponding angles unequal, corresponding sides not proportional} \,❌\;\\
\textsf{(6)} \: 90^\circ \;\textsf{four pairs of corresponding angles equal} \,✅\;\\
\textsf{(7)} \: \textsf{corresponding sides not proportional} \,❌\;\\
\textsf{(8)} \: \textsf{these circles are similar in shape, differing only in size} \,✅\;\\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $\textsf{(4)},\textsf{(6)},\textsf{(8)}$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#identification-1}{\textsf{similar triangles identification}} \\
  \frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}=k & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#in-similar-triangles-or-similar-figures-the-ratios-of-corresponding-sides-are-equal-called-the-similarity-ratio}{\textsf{similar triangles sides ratio formula}} \\
  \end{array}
  >$

  :::
---

::: wrap
### $\fbox{26}\:$Figure 6–21, in triangle $\small \triangle ABC$, $DE, FG$, and $BC$ are parallel to each other, and $\small AD=DF=FB$. What is the ratio of the areas $S_{\triangle ADE}:S_{\textsf{quadrilateral}\,DEGF}:S_{\textsf{quadrilateral}\,FGCB} \,\mathpunct{?}$.
:::  
::: wrap  
![Question triangles figure 6-21.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-21.svg)  
$
\begin{array}{lllll}
\textsf{(A)} \: 1:3:5 &
\textsf{(B)} \: 1:2:5 &
\textsf{(C)} \: 1:3:4 &
\textsf{(D)} \: 1:3:6 &
\textsf{(E)} \: 2:3:5 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question triangles figure 6-21 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-21%20solve-1.svg)  
  ::: wrap  
  $
  \begin{array}{ll}
  \triangle ADE \sim \triangle AFG \sim \triangle ABC \\
  S_{\triangle ADE}:S_{\triangle AFG}:S_{\triangle ABC}=AD^2:AF^2:AB^2 \\
  S_{\triangle ADE}:S_{\triangle AFG}:S_{\triangle ABC}=1^2:2^2:3^2=1:4:9 \\
  S_{\triangle ADE}:S_{\textsf{quadrilateral}\,DEGF}:S_{\textsf{quadrilateral}\,FGCB}=1:(4-1):(9-4) \\
  S_{\triangle ADE}:S_{\textsf{quadrilateral}\,DEGF}:S_{\textsf{quadrilateral}\,FGCB}=1:3:5 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $1:3:5$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#definition-1}{\textsf{similar triangles definition}} \\
  \frac{S_1}{S_2}=k^2 & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#the-ratio-of-the-areas-of-two-similar-triangles-or-similar-figures-equals-the-square-of-the-similarity-ratio}{\textsf{similar triangles area ratio formula}} \\
  \end{array}
  >$

  :::
---


### $\fbox{27}\:$Figure 6–22, in triangle $\small \triangle ABC$, points $\small D, E$, and $\small F$ lie on sides $\small AB, AC$, and $\small BC$, respectively, and $\small DE \parallel BC, EF \parallel AB$. Given that $\small AD:DB=2:3$, and $\small BC=20$, what is the length of $\small CF \,\mathpunct{?}$. 
![Question triangles figure 6-22.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-22.svg)  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 15 &
\textsf{(B)} \: \frac{40}{3} &
\textsf{(C)} \: \frac{38}{3} &
\textsf{(D)} \: 14 &
\textsf{(E)} \: 12 & \\
\end{array}
$  
:::
#### Solution
- Show known conditions  
  ![Question triangles figure 6-22 solve-1.svg](../../public/math/Core%20Courses/Question%20triangles%20figure%206-22%20solve-1.svg)  
  ::: wrap
  $
  \begin{array}{ll}
  DEFB = \textsf{parallelogram} \\
  \triangle ADE \sim \triangle ABC \\
  \frac{DE}{BC}=\frac{AD}{AB} \\
  \frac{DE}{20}=\frac{2}{5} \\
  DE \times 5 = 2 \times 20 \\
  DE \times 5 = 40 \\
  DE=\frac{40}{5}=8 \\
  BF=DE=8 \\
  CF=BC-BF=20-8=12 \\
  \end{array}
  $  
  :::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $CF=12$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#applications-1}{\textsf{similar triangles applications}} \\
  \frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}=k & \href{/math/0%20Core%20Courses/24%20Chapter6%20plane%20geometry%20Module2%20triangles%20lower.html#in-similar-triangles-or-similar-figures-the-ratios-of-corresponding-sides-are-equal-called-the-similarity-ratio}{\textsf{similar triangles sides ratio formula}} \\
  \end{array}
  >$

  :::
---

| Platforms   | Courses                                                                                      | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=N06rtVZbOeo&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s) | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9gsua6?playlist=x9h6d2)                           |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95gn-25-chapter6-plane-geometry-module2-triangles-lower.html)  |                                                                   |
