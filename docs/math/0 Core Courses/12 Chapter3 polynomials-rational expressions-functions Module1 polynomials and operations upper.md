---
title: Chapter3 Polynomials, Rational Expressions, and Functions – Module1 Polynomials and Operations Upper
lang: en-US
---

# Module 3-01 Polynomials and Operations

## 1.Six Fundamental Formulas
1. __Difference of squares formula__: $a^2-b^2=(a+b)(a-b)$
2. __Perfect square formula__: $(a\pm b)^2=a^2\pm2ab+b^2$
::: wrap  
3. __Perfect square formula for three terms__: $(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc$
:::  
::: wrap  
4. __Completing the square formula__: $a^2+b^2+c^2\pm ab \pm ac \pm bc=\frac{1}{2}[(a\pm b)^2+(b\pm c)^2+(a\pm c)^2]$
:::  
5. __Sum and difference of cubes formula__: $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$
   - __Formula derivation__  
     ::: wrap  
     $
     \begin{array}{ll}
     (a+b)(a^2-ab+b^2) & a^3+b^3 \\
     a(a^2-ab+b^2)+b(a^2-ab+b^2) \\
     a^3\bcancel{-a^2b}\bcancel{+ab^2}\bcancel{+a^2b}\bcancel{-ab^2}+b^3 \\
     a^3+b^3 \\
     (a-b)(a^2+ab+b^2) & a^3-b^3 \\
     a(a^2+ab+b^2)-b(a^2+ab+b^2) \\
     a^3\bcancel{+a^2b}\bcancel{+ab^2}\bcancel{-a^2b}\bcancel{-ab^2}-b^3 \\
     a^3-b^3 \\
     \end{array}
     $  
     ::: 
6. __Cube of a sum/difference formula__: $(a\pm b)^3=a^3\pm3a^2b+3ab^2\pm b^3$
   - __Formula derivation__  
     ::: wrap  
     $
     \begin{array}{ll}
     (a+b)^2(a+b) & (a+b)^3 \\
     (a^2+2ab+b^2)(a+b) \\
     a(a^2+2ab+b^2)+b(a^2+2ab+b^2) \\
     a^3+2a^2b+ab^2+a^2b+2ab^2+b^3 \\
     a^3+3a^2b+3ab^2+b^3 \\
     (a-b)^2(a-b) & (a-b)^3 \\
     (a^2-2ab+b^2)(a-b) \\
     a(a^2-2ab+b^2)-b(a^2-2ab+b^2) \\
     a^3-2a^2b+ab^2-a^2b+2ab^2-b^3 \\
     a^3-3a^2b+3ab^2-b^3 \\
     \end{array}
     $  
     :::


## 2.Focus 1
__The difference of squares formula__  
- For the difference of squares formula,
  it is important to master its two applications:
  one is __rationalization when square roots appear__,
  and the other is __simplification of the multiplication of long strings of numbers__.
- Example of rationalizing a square root  
  ::: wrap  
  $
  \begin{array}{ll}
  a^2-b^2=(a+b)(a-b) \\
  (\sqrt{a}+\sqrt{b})(\sqrt{a}-\sqrt{b})=a-b & \textsf{(}a,b\ge0\textsf{)} \\
  \textsf{special case: reciprocals of each other} \\
  (\sqrt{n+1}+\sqrt{n})(\sqrt{n+1}-\sqrt{n})=1 \\
  \frac{1}{\sqrt{n+1}+\sqrt{n}}=\frac{1}{\sqrt{n+1}+\sqrt{n}}\cdot\frac{\sqrt{n+1}-\sqrt{n}}{\sqrt{n+1}-\sqrt{n}}=\frac{\sqrt{n+1}-\sqrt{n}}{(n+1)-n}=\sqrt{n+1}-\sqrt{n} \\
  \end{array}
  $  
  :::


### $\fbox{1}\:$Regarding $\small \frac{\sqrt{3}}{3-\sqrt{3}}$, which of the following statements is correct $\small \mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \textsf{value is a rational number} &
\textsf{(B)} \: \textsf{value is less than }1 & \\
\textsf{(C)} \: \textsf{value is greater than }\frac{\sqrt{3}+1}{2} &
\textsf{(D)} \: \textsf{value is greater than }2 & \\
\textsf{(E)} \: \textsf{value is greater than }1\textsf{ but less than }2 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{\sqrt{3}}{3-\sqrt{3}}=\frac{\sqrt{3}(3+\sqrt{3})}{(3-\sqrt{3})(3+\sqrt{3})}=\frac{3\sqrt{3}+3}{3^2-\sqrt{3}^2}=\frac{3\sqrt{3}+3}{6}=\frac{\sqrt{3}+1}{2}\approx\frac{1.7+1}{2}=1.3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(E)}$  
  > According to the Solution, get $\frac{\sqrt{3}}{3-\sqrt{3}}=\frac{\sqrt{3}+1}{2}=1.3$, so choose $E$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a^2-b^2=(a+b)(a-b) & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{difference of squares formula}} \\
  \end{array}
  >$

  :::
---

::: wrap  
### $\fbox{2}\:$If the real number $\small a\ne1$, then $\small (a+1)(a^2+1)(a^4+1)\cdots(a^{64}+1)=\,\mathpunct{?}$.
:::  
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \frac{a^{128}+1}{a-1} &
\textsf{(B)} \: \frac{a^{128}-1}{a+1} &
\textsf{(C)} \: \frac{a^{128}+1}{a+1} &
\textsf{(D)} \: -\frac{a^{128}-1}{a-1} &
\textsf{(E)} \: \frac{a^{128}-1}{a-1} & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{(a-1)(a+1)(a^2+1)(a^4+1)\cdots(a^{64}+1)}{a-1} \\
\frac{\bcancel{(a^2-1)(a^2+1)}\bcancel{(a^4+1)\cdots}(a^{64}+1)}{a-1}=\frac{(a^{64}-1)(a^{64}+1)}{a-1}=\frac{(a^{64})^2-1^2}{a-1}=\frac{a^{128}-1}{a-1} \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $\frac{(a-1)(a+1)(a^2+1)(a^4+1)\cdots(a^{64}+1)}{a-1}=\frac{a^{128}-1}{a-1}$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  a^2-b^2=(a+b)(a-b) & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{difference of squares formula}} \\
  (a^m)^n=a^{m\cdot n} & \textsf{power of a power rule} \\
  \end{array}
  >$

  :::
---

## 3.Focus 2
__The perfect square formulas for two terms__  
::: wrap  
- For the perfect square formulas involving two terms, one must learn to __flexibly transform and apply them__:  
  $a^2+b^2=(a\pm b)^2\mp2ab$,  
  $(a+b)^2+(a-b)^2=2a^2+2b^2$,  
  $ab=\frac{(a+b)^2-(a^2+b^2)}{2}=\frac{(a^2+b^2)-(a-b)^2}{2}=\frac{(a+b)^2-(a-b)^2}{4}$,  
  $(a+b)^2-(a-b)^2=4ab$.  
  Additionally, __special applications should be noted when reciprocals appear__.
:::  
- Special applications involving reciprocals: $\boldsymbol{x^2+\frac{1}{x^2}=(x\pm\frac{1}{x})^2\mp2}$.


### $\fbox{3}\:$Given $\small (x+2y)^2=40$ and $\small xy=2$, then $(x-2y)^2=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 36 &
\textsf{(B)} \: 32 &
\textsf{(C)} \: 30 &
\textsf{(D)} \: 24 &
\textsf{(E)} \: 22 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
(a-b)^2=(a+b)^2-4ab \\
(x-2y)^2=(x+2y)^2-4\cdot x \cdot 2y \\
xy=2\cdot1=2 \\
40-4\cdot2\cdot2=40-16=24 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $(x-2y)^2=24$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (a+b)^2-(a-b)^2=4ab & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_3-focus-2}{\textsf{perfect square formula for two terms}} \\
  \end{array}
  >$

  :::
---

### $\fbox{4}\:$Given $\small x+\frac{1}{x}=3$.
#### (1) Then $x^2+\frac{1}{x^2}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 30 &
\textsf{(D)} \: 47 &
\textsf{(E)} \: 49 & \\
\end{array}
$  
:::  
#### (2) Then $x^4+\frac{1}{x^4}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 30 &
\textsf{(D)} \: 47 &
\textsf{(E)} \: 49 & \\
\end{array}
$  
:::  
#### (3) Then $x^3+\frac{1}{x^3}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 9 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 55 &
\textsf{(D)} \: 24 &
\textsf{(E)} \: 18 & \\
\end{array}
$  
:::  
#### (4) Then $|x-\frac{1}{x}|=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \sqrt{2} &
\textsf{(B)} \: \sqrt{3} &
\textsf{(C)} \: \sqrt{4} &
\textsf{(D)} \: \sqrt{5} &
\textsf{(E)} \: \sqrt{6} & \\
\end{array}
$
:::  
#### Solution
::: wrap   
$
\begin{array}{ll}
(1)\; x^2+\frac{1}{x^2}=(x+\frac{1}{x})^2-2=3^2-2=7 \\
(2)\; x^4+\frac{1}{x^4}=(x^2+\frac{1}{x^2})^2-2=7^2-2=47 \\
(3)\; x^3+\frac{1}{x^3}=(x+\frac{1}{x})(x^2-1+\frac{1}{x^2})=(x+\frac{1}{x})[(x+\frac{1}{x})^2-3] \\
\hspace{0.7cm} (x+\frac{1}{x})^3-3(x+\frac{1}{x})=3^3-3\cdot3=27-9=18 \\
(4)\; |x-\frac{1}{x}|=\sqrt{(x-\frac{1}{x})^2}=\sqrt{(x+\frac{1}{x})^2-4}=\sqrt{3^2-4}=\sqrt{5} \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(E)}$  
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x^2+\frac{1}{x^2}=7,x^4+\frac{1}{x^4}=47,x^3+\frac{1}{x^3}=18,|x-\frac{1}{x}|=\sqrt{5}$,
    so choose $(1)\rightarrow A,(2)\rightarrow D,(3)\rightarrow E,(4)\rightarrow D$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x^2+\frac{1}{x^2}=(x\pm\frac{1}{x})^2\mp2 \\
  (a+b)^2-(a-b)^2=4ab \\
  \end{cases} & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_3-focus-2}{\textsf{perfect square formulas for two terms}} \\
  a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2) & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{sum and difference of cubes formula}} \\
  |a|=\sqrt{a^2} & \textsf{definition of absolute value} \\
  \end{array}
  >$

  :::
- Identities derived from $x+\frac{1}{x}=a$  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{①} \;\, x^2+\frac{1}{x^2}=(x+\frac{1}{x})^2-2=a^2-2 \\
  \textsf{②} \;\, x^4+\frac{1}{x^4}=(x^2+\frac{1}{x^2})^2-2=(a^2-2)^2-2 \\
  \textsf{③} \;\, x^3+\frac{1}{x^3}=(x+\frac{1}{x})[(x+\frac{1}{x})^2-3]=(x+\frac{1}{x})^3-3(x+\frac{1}{x})=a^3-3a \\
  \textsf{④} \;\, |x-\frac{1}{x}|=\sqrt{(x+\frac{1}{x})^2-4}=\sqrt{a^2-4} \\
  \end{array}
  >$

  :::
---

### $\fbox{5}\:$Given $\small x-\frac{1}{x}=3$.
#### (1) Then $x^2+\frac{1}{x^2}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 11 &
\textsf{(D)} \: 119 &
\textsf{(E)} \: 123 & \\
\end{array}
$  
:::
#### (2) Then $x^4+\frac{1}{x^4}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 11 &
\textsf{(D)} \: 119 &
\textsf{(E)} \: 123 & \\
\end{array}
$  
:::
#### (3) Then $x^3-\frac{1}{x^3}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 9 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: 55 &
\textsf{(D)} \: 24 &
\textsf{(E)} \: 36 & \\
\end{array}
$  
:::
#### (4) Then $|x+\frac{1}{x}|=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: \sqrt{10} &
\textsf{(B)} \: \sqrt{11} &
\textsf{(C)} \: \sqrt{12} &
\textsf{(D)} \: \sqrt{13} &
\textsf{(E)} \: \sqrt{14} & \\
\end{array}
$
:::
#### Solution
::: wrap   
$
\begin{array}{ll}
(1)\; x^2+\frac{1}{x^2}=(x-\frac{1}{x})^2+2=3^2+2=11 \\
(2)\; x^4+\frac{1}{x^4}=(x^2+\frac{1}{x^2})^2-2=11^2-2=119 \\
(3)\; x^3-\frac{1}{x^3}=(x-\frac{1}{x})(x^2+1+\frac{1}{x^2})=(x-\frac{1}{x})[(x-\frac{1}{x})^2+3] \\
\hspace{0.7cm} (x-\frac{1}{x})^3+3(x-\frac{1}{x})=3^3+3\cdot3=27+9=36 \\
(4)\; |x+\frac{1}{x}|=\sqrt{(x+\frac{1}{x})^2}=\sqrt{(x-\frac{1}{x})^2+4}=\sqrt{3^2+4}=\sqrt{13} \\
\end{array}
$  
:::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > $\boldsymbol{(D)}$  
  > $\boldsymbol{(E)}$  
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $x^2+\frac{1}{x^2}=11,x^4+\frac{1}{x^4}=119,x^3-\frac{1}{x^3}=36,|x+\frac{1}{x}|=\sqrt{13}$,
  so choose $(1)\rightarrow C,(2)\rightarrow D,(3)\rightarrow E,(4)\rightarrow D$.

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  \begin{cases}
  x^2+\frac{1}{x^2}=(x\pm\frac{1}{x})^2\mp2 \\
  (a+b)^2-(a-b)^2=4ab \\
  \end{cases} & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_3-focus-2}{\textsf{perfect square formulas for two terms}} \\
  a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2) & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{sum and difference of cubes formula}} \\
  |a|=\sqrt{a^2} & \textsf{definition of absolute value} \\
  \end{array}
  >$

  :::
- Identities derived from $x-\frac{1}{x}=a$  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{①} \;\, x^2+\frac{1}{x^2}=(x-\frac{1}{x})^2+2=a^2+2 \\
  \textsf{②} \;\, x^4+\frac{1}{x^4}=(x^2+\frac{1}{x^2})^2-2=(a^2+2)^2-2 \\
  \textsf{③} \;\, x^3-\frac{1}{x^3}=(x-\frac{1}{x})[(x-\frac{1}{x})^2+3]=(x-\frac{1}{x})^3+3(x-\frac{1}{x})=a^3+3a \\
  \textsf{④} \;\, |x+\frac{1}{x}|=\sqrt{(x-\frac{1}{x})^2+4}=\sqrt{a^2+4} \\
  \end{array}
  >$

  :::
---

### $\fbox{6}\:$Given $\small x^2-3x+1=0$, then $x^2+\frac{1}{x^2}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 7 &
\textsf{(B)} \: 9 &
\textsf{(C)} \: 11 &
\textsf{(D)} \: 119 &
\textsf{(E)} \: 123 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{x^2-3x+1}{x}=\frac{0}{x} \\
x-3+\frac{1}{x}=0 \\
x+\frac{1}{x}=3 \\
x^2+\frac{1}{x^2}=(x+\frac{1}{x})^2-2=3^2-2=7 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(A)}$  
  > According to the Solution, get $x^2+\frac{1}{x^2}=7$, so choose $A$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  x^2+\frac{1}{x^2}=(x\pm\frac{1}{x})^2\mp2 & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_3-focus-2}{\textsf{perfect square formula for two terms}} \\
  \end{array}
  >$

  :::
- Identities derived from $x\pm\frac{1}{x}=a$  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{①} \;\, x^2-ax+1=0 \longrightarrow x+\frac{1}{x}=a \\
  \textsf{②} \;\, x^2-ax-1=0 \longrightarrow x-\frac{1}{x}=a \\
  \end{array}
  >$

  :::
---

### $\fbox{7}\:$Given $\small x^4-7x^2+1=0$, then $x+\frac{1}{x}=\,\mathpunct{?}$.
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 3 &
\textsf{(B)} \: 5 &
\textsf{(C)} \: \pm3 &
\textsf{(D)} \: \pm5 &
\textsf{(E)} \: -5 & \\
\end{array}
$  
:::
#### Solution
::: wrap  
$
\begin{array}{ll}
\frac{x^4-7x^2+1}{x^2}=\frac{0}{x^2} \\
x^2-7+\frac{1}{x^2}=0 \\
x^2+\frac{1}{x^2}=7 \\
(x+\frac{1}{x})^2=x^2+2x^2\frac{1}{x^2}+\frac{1}{x^2} \\
x^2+\frac{1}{x^2}+2x^2\frac{1}{x^2}=7+2x^2\frac{1}{x^2} \\
(x+\frac{1}{x})^2=9 \longrightarrow x+\frac{1}{x}=\pm3 \\
\end{array}
$  
:::  
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(C)}$  
  > According to the Solution, get $x+\frac{1}{x}=\pm3$, so choose $C$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  x^2=a \longrightarrow x=\pm\sqrt{a} & \textsf{definition of square root} \\
  \end{array}
  >$

  :::
- Identities derived from $x^2\pm\frac{1}{x^2}=a$  
  ::: wrap
  >$
  \begin{array}{ll}
  \textsf{①} \;\, x^4-ax^2+1=0 \longrightarrow x^2+\frac{1}{x^2}=a \\
  \textsf{②} \;\, x^4-ax^2-1=0 \longrightarrow x^2-\frac{1}{x^2}=a \\
  \end{array}
  >$

  :::
---

## 4.Focus 3
__The perfect square formulas for three terms__  
::: wrap  
- For the perfect square formulas involving three terms, one must learn to __flexibly transform and apply them__:  
  $a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ac)$,  
  $2(ab+bc+ac)=(a+b+c)^2-(a^2+b^2+c^2)$.  
  Additionally, __note a special application involving reciprocals__:
  when $\boldsymbol{\frac{1}{a}+\frac{1}{b}+\frac{1}{c}=0}$,
  it follows that $\boldsymbol{ab+bc+ac=0}$,
  and hence $\boldsymbol{a^2+b^2+c^2=(a+b+c)^2}$.
:::  


### $\fbox{8}\:$Expression $\small (a-b+c)^2+(a-b-c)^2=\,\mathpunct{?}$
::: wrap  
$
\begin{array}{lllll}
\textsf{(A)} \: 2(a-b)^2-2c^2 &
\textsf{(B)} \: 2(a+b)^2+2c^2 &
\textsf{(C)} \: 2(a+b)^2-2c^2 & \\
\textsf{(D)} \: 2(a-b)^2+2c^2 &
\textsf{(E)} \: 2(a-c)^2+2b^2 & \\
\end{array}
$  
:::
#### Solution
- $\textcolor{#228B22}{\fbox{1}}\:$Solve by using the perfect square formula for three terms  
  ::: wrap  
  $
  \begin{array}{ll}
  (a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc \\
  (a-b+c)^2+(a-b-c)^2 \\
  (a-b+c)^2=a^2+b^2+c^2-2ab+2ac-2bc \\
  (a-b-c)^2=a^2+b^2+c^2-2ab-2ac+2bc \\
  a^2+b^2+c^2-2ab\bcancel{+2ac}\bcancel{-2bc}+a^2+b^2+c^2-2ab\bcancel{-2ac}\bcancel{+2bc} \\
  2a^2+2b^2-4ab+2c^2 \\
  2(a-b)^2+2c^2 \\
  \end{array}
  $   
  :::
- $\textcolor{#228B22}{\fbox{2}}\:$Solve by using the formula $(a+b)^2+(a-b)^2=2a^2+2b^2$  
  ::: wrap  
  $
  \begin{array}{ll}
  (a-b+c)^2+(a-b-c)^2 \\
  [(a-b)+c]^2+[(a-b)-c]^2=2(a-b)^2+2c^2 \\
  \end{array}
  $   
  :::
#### Conclusion
- Derived Solution  
  ::: wrap
  > $\boldsymbol{(D)}$  
  > According to the Solution, get $2(a-b)^2+2c^2$, so choose $D$. 

  :::
- Formulas used  
  ::: wrap
  >$
  \begin{array}{ll}
  (a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2bc & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula for three terms}} \\
  (a\pm b)^2=a^2\pm2ab+b^2 & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_1-six-fundamental-formulas}{\textsf{perfect square formula}} \\
  (a+b)^2+(a-b)^2=2a^2+2b^2 & \href{/math/0%20Core%20Courses/12%20Chapter3%20polynomials-rational%20expressions-functions%20Module1%20polynomials%20and%20operations%20upper.html#_3-focus-2}{\textsf{perfect square formula for two terms}} \\
  \end{array}
  >$

  :::
---

| Platform    | Course                                                                                                               | Coursewares                                                       |
|-------------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| YouTube     | [Watch](https://www.youtube.com/watch?v=b5nQJVdbtbo&list=PLm0MFkgiW1JgKq1kku2WxmrElFbDl7p_s)                         | [Courseware](../../public/math/Core%20Courses/pdf/Courseware.pdf) |
| Dailymotion | [Watch](https://www.dailymotion.com/video/x9glvrq?playlist=x9h6d2)                                                   |                                                                   |
| Rumble      | [Watch](https://rumble.com/v6s95af-13-chapter3-polynomials-rational-expressions-functions-module1-polynomials-.html) |                                                                   |

