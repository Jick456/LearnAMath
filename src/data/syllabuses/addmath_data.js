import { generateQuestion } from './utils';

const addMathTopics = [
    {
        id: 'am-alg-quad', level: 'Add Math', title: 'Quadratic Equations',
        description: 'Discriminants, roots, and nature of roots.', color: '#34d399', emoji: '📉',
        location: 'The Quadratic Cavern', storyline: 'Find the peak of the parabola to master the cavern!', themeClass: 'theme-abyss',
        crashCourse: `[DIAGRAM: parabola]

**The Discriminant ($b^2 - 4ac$): The Fate Predictor**
- **$b^2 - 4ac > 0$**: The parabola aggressively smashes through the x-axis twice. Two real and distinct roots!
- **$b^2 - 4ac = 0$**: The parabola gently kisses the x-axis exactly once. Two real and equal roots (a perfect square).
- **$b^2 - 4ac < 0$**: The parabola safely floats entirely above or below the x-axis. No real roots exist!

**Sum and Product of Roots $\\alpha$ and $\\beta$**
- Sum of roots: $\\alpha + \\beta = -\\frac{b}{a}$
- Product of roots: $\\alpha\\beta = \\frac{c}{a}$
- To forge a new quadratic entirely from scratch: $x^2 - (\\text{Sum})x + (\\text{Product}) = 0$.

> [!tip] **Exam Strategy**
> If a question says a line is a "tangent" to a curve, set their equations equal to each other and safely force the discriminant $b^2 - 4ac = 0$.`
    },
    {
        id: 'am-alg-eq', level: 'Add Math', title: 'Equations & Inequalities',
        description: 'Simultaneous, modulus, and quadratic inequalities.', color: '#fbbf24', emoji: '⚖️',
        location: 'The Crossroads', storyline: 'Solve the intersections of destiny!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: number-line]

**Quadratic Inequalities: The Danger Zones**
- NEVER simply square root an inequality. Factorise it cleanly to find the critical roots.
- Sketch the U-shape or n-shape curve.
- For $>0$, highlight the 'wings' completely above the sea level (x-axis).
- For $<0$, highlight the 'valley' safely submerged below the sea level.

**Modulus (Absolute Value) $|x|$**
- $|x|$ acts as a magical shield; whatever goes inside, a positive number emerges.
- To solve $|A| = B$, branch it securely into two paths: $A = B$ OR $A = -B$.
- **CRITICAL**: Always forcefully check your final answers by substituting them back in. Sometimes the math generates 'extraneous' ghost solutions!

> [!tip] **Exam Strategy**
> For $|2x-1| = x+3$, always sub your final $x$ values back into the original equation to weed out any fake solutions.`
    },
    {
        id: 'am-alg-surds', level: 'Add Math', title: 'Surds',
        description: 'Simplifying roots and rationalising denominators.', color: '#f87171', emoji: '⚡',
        location: 'The Root Reactor', storyline: 'Extract the hidden power of the roots!', themeClass: 'theme-volcano',
        crashCourse: `**Mastering Surds: The Irrational Beasts**
- Multiplication rule: $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$.
- Division rule: $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$.
- Addition/Subtraction: You can ONLY merge identical matching surds! $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$. ($3\\sqrt{2} + \\sqrt{3}$ cannot be merged).

**Rationalising the Denominator: The Cleansing**
- We despise leaving a surd down in the basement fraction!
- If the basement is strictly $\\sqrt{a}$, multiply top and bottom fiercely by $\\sqrt{a}$.
- If the basement is $a + \\sqrt{b}$, multiply top and bottom fiercely by the protective 'Conjugate': $a - \\sqrt{b}$. That creates a Difference of Squares and completely destroys the root!

> [!tip] **Exam Strategy**
> Always fully simplify the surd first. Don't leave $\\sqrt{12}$ running around when it cleanly reduces down to $2\\sqrt{3}$.`
    },
    {
        id: 'am-alg-poly', level: 'Add Math', title: 'Polynomials & Partial Fractions',
        description: 'Factor theorem, remainder theorem, partial decomposition.', color: '#60a5fa', emoji: '🧩',
        location: 'The Fraction Factory', storyline: 'Break apart the giant polynomials!', themeClass: 'theme-clockwork',
        crashCourse: `**The Remainder & Factor Theorems**
- **Remainder Theorem**: If you brutally divide $P(x)$ by $(ax - b)$, the remainder left behind is simply exactly $P(\\frac{b}{a})$.
- **Factor Theorem**: If $(x-a)$ is a perfect factor, then the polynomial cleanly evaluates to zero: $P(a) = 0$.

**Partial Fractions: The Great Disassembly**
- Before starting, if the top power (degree of numerator) $\\ge$ bottom power, you MUST forcefully perform Long Division first to extract the whole number polynomial.
- **Linear factors**: $\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$
- **Repeated factors**: $\\frac{1}{(x-a)^2} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2}$
- **Non factorisable quadratic factors**: $\\frac{1}{x^2+c} = \\frac{Ax+B}{x^2+c}$

> [!tip] **Exam Strategy**
> Long Division is your safety net. Always check the highest exponent on the top vs bottom before decomposing into A, B, C fractions.`
    },
    {
        id: 'am-alg-binomial', level: 'Add Math', title: 'Binomial Expansions',
        description: 'Combinatorics, Pascal Triangle, general term.', color: '#818cf8', emoji: '💥',
        location: 'The Expanding Universe', storyline: 'Calculate the massive expanding terms!', themeClass: 'theme-sky',
        crashCourse: `**The Binomial Theorem: Controlled Explosions**
- The full expansion of $(a+b)^n$ unleashes a massive wave of terms.
- The powers of $a$ steadily rapidly strictly decrease, while the powers of $b$ simultaneously increase. The sum of powers always perfectly equals $n$.

**The Powerful General Term Formula**
- Instead of expanding everything, snipe the exact term you desperately need:
- $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$
- 'r' strictly starts counting from 0 (so the very first term runs $r=0$).
- If they request the "term independent of x", set the final combined $x$-power violently to 0.

> [!tip] **Exam Strategy**
> To find the term independent of x, write the general term formula, gather all the x powers together safely, and set their sum instantly to 0.`
    },
    {
        id: 'am-alg-log', level: 'Add Math', title: 'Exponentials & Logarithms',
        description: 'Base $e$, natural log $\\ln$, laws of logarithms.', color: '#a78bfa', emoji: '📈',
        location: 'The Log Lodge', storyline: 'Solve the exponential growth logs!', themeClass: 'theme-forest',
        crashCourse: `**Logarithmic Translations**
- The ultimate translation: If $y = a^x$, then magically $x = \\log_a(y)$. Log is just a question: "What power do I need?"
- '$\\ln x$' is strictly the natural log, meaning exactly $\\log_e(x)$.

**The Three Sacred Log Laws**
1. **Product**: $\\log(xy) = \\log(x) + \\log(y)$
2. **Quotient**: $\\log(\\frac{x}{y}) = \\log(x) - \\log(y)$
3. **Power Drop**: $\\log(x^k) = k \\log(x)$. The exponent heavily drops down securely to the front.

> [!tip] **Exam Strategy**
> You CANNOT ever take the logarithm of a negative number or zero. Always safely reject negative answers mathematically obtained inside $\\log(x)$.`
    },
    {
        id: 'am-geom-trig', level: 'Add Math', title: 'Trig Identities & Solving',
        description: 'ASTC, Double Angles, R-Formula, exact values.', color: '#f472b6', emoji: '📐',
        location: 'The Trig Tower', storyline: 'Prove the identities to scale the tower!', themeClass: 'theme-glacier',
        crashCourse: `[DIAGRAM: angle]

**The ASTC Rule (All Students Take Calculus)**
- Identifies which trig functions are strictly positive in which 90-degree quadrant ($1^{st}$: All, $2^{nd}$: Sine, $3^{rd}$: Tangent, $4^{th}$: Cosine).

**Core Identities to Memorize**
- $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$
- $\\sin^2 \\theta + \\cos^2 \\theta = 1$
- $\\sec^2 \\theta = 1 + \\tan^2 \\theta$

**Double Angle Formulae**
- $\\sin(2A) = 2\\sin A\\cos A$
- $\\cos(2A) = \\cos^2 A - \\sin^2 A$ (or $2\\cos^2 A - 1$, or $1 - 2\\sin^2 A$)

> [!tip] **Exam Strategy**
> When solving trig equations like $\\sin(2x) = 0.5$ for $0^\\circ \\le x \\le 360^\\circ$, first change your domain fiercely to $0^\\circ \\le 2x \\le 720^\\circ$ before solving!`
    },
    {
        id: 'am-geom-coord', level: 'Add Math', title: 'Coordinate Geometry',
        description: 'Perpendicular lines, Area of polygons, Circles.', color: '#38bdf8', emoji: '🎯',
        location: 'The Circle Citadel', storyline: 'Find the centre radius to unlock the gates.', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: circle-coord]

**Shoelace Area Formula**
- To forcefully find the area of ANY polygon, list its vertices securely anti-clockwise:
- $\\text{Area} = \\frac{1}{2} |(x_1y_2 + x_2y_3 + ...) - (y_1x_2 + y_2x_3 + ...)|$.
- You MUST bravely close the loop and write the very first point again at the bottom!

**Equation of a Perfect Circle**
- Standard Form: $(x-a)^2 + (y-b)^2 = r^2$, where the heart is precisely at $(a, b)$ and the span is $r$.
- Expanded General Form: $x^2 + y^2 + 2gx + 2fy + c = 0$. The centre is at $(-g, -f)$ and $r = \\sqrt{g^2 + f^2 - c}$.

> [!tip] **Exam Strategy**
> Perpendicular lines have negative reciprocal gradients ($m_1 \\times m_2 = -1$). For a circle, radius and tangent are strictly perpendicular at the contact point.`
    },
    {
        id: 'am-geom-proofs', level: 'Add Math', title: 'Geometry Proofs',
        description: 'Plane geometry, similar triangles, tangents.', color: '#fb923c', emoji: '⭕',
        location: 'The Proof Plaza', storyline: 'Prove tangents and angles flawlessly!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: circle-proof]

**Critical Circle Theorems**
- **Alternate Segment Theorem**: The exact angle forged between a magical Tangent and a rigid Chord strictly equals the angle swimming inside the alternate segment of the circle. This theorem is heavily tested!
- **Tangent from External Point**: Two tangents fired from the exact identical external point to a circle are perfectly identical in length.

**Similar Triangles (Formal Proof)**
- To formally formally prove similarity, securely show AAA (three perfectly identical matching angles). You must list your exact reasoning (e.g., 'Alternate angles, $AB \\parallel CD$').

> [!tip] **Exam Strategy**
> Never simply write "angles are equal." Always explicitly boldly declare the exact theorem you used as your weapon, e.g., "Alternate Segment Theorem" or "Angles in same segment."`
    },
    {
        id: 'am-calc-diff', level: 'Add Math', title: 'Differentiation',
        description: 'Chain, Product, Quotient rules. Max/Min problems.', color: '#9ca3af', emoji: '🎢',
        location: 'The Gradient Gorge', storyline: 'Find the exact turning point to survive!', themeClass: 'theme-abyss',
        crashCourse: `**The Calculus Rulebook**
- **Chain Rule**: Handle the outside, then dive inside! $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$.
- **Product Rule** (for $uv$): $u'v + uv'$. Keep one safe, attack the other, then switch.
- **Quotient Rule** (for $u/v$): $\\frac{u'v - uv'}{v^2}$. Bottom squared, top gets the negative sign!

**Stationary Points (Turning Points)**
- Step 1: Forcefully set $\\frac{dy}{dx} = 0$ to hunt them down.
- Step 2: Use the Second Derivative test $\\frac{d^2y}{dx^2}$.
- If $\\frac{d^2y}{dx^2} > 0$, it's a happy curving minimum valley. If $<0$, it's a sad curving maximum peak!

> [!tip] **Exam Strategy**
> When asked if a function is "increasing", you must confidently prove mathematically that its derivative $\\frac{dy}{dx}$ is strictly $> 0$ for all values of $x$.`
    },
    {
        id: 'am-calc-int', level: 'Add Math', title: 'Integration',
        description: 'Definite integrals, area, kinematics (displacement / velocity).', color: '#fbbf24', emoji: '🌊',
        location: 'The Area Arena', storyline: 'Integrate the entire space to win.', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: parabola]

**Integration Rules: The Great Reverse**
- Polynomial: Increase power $n$ by 1, then fiercely divide by the new power! $\\int x^n \\,dx = \\frac{x^{n+1}}{n+1} + c$.
- Exponential: $\\int e^{kx} \\,dx = \\frac{1}{k} e^{kx} + c$.
- Trig: $\\int \\cos(kx) \\,dx = \\frac{1}{k} \\sin(kx) + c$. (Sine integrates severely to negative Cosine!)

**Area Under Curves**
- The elegant Definite Integral strictly calculates the total mathematical area violently trapped between the curve and the $x$-axis.
- Watch out! Areas physically dipping safely below the $x$-axis actively evaluate as negative numbers. You must calculate them separately and instantly flip their sign to positive.

> [!tip] **Exam Strategy**
> In Kinematics, differentiating Displacement($s$) gives Velocity($v$), and differentiating Velocity($v$) gives Acceleration($a$). Integration reverses this entire chain perfectly!`
    }
];

const addMathQuestions = {

    'am-alg-quad': {
        learning: [
            // Easy (1-10)
            generateQuestion("Find discriminant ($b^2 - 4ac$) for $2x^2 - 3x + 5 = 0$.", ["-31", "31", "49", "-49"], 0, "**Lesson**: $(-3)^2 - 4(2)(5) = 9 - 40 = -31$. No real roots exist!", 10, 'easy'),
            generateQuestion("If a curve is floating above the x-axis, its discriminant must purely be:", ["$< 0$", "$> 0$", "$= 0$", "$\\ge 0$"], 0, "**Lesson**: Floating means no intersections with the x-axis, zero real roots.", 10, 'easy'),
            generateQuestion("Condition for two real, distinct roots?", ["$b^2-4ac > 0$", "$b^2-4ac = 0$", "$b^2-4ac < 0$", "$b^2-4ac \\ge 0$"], 0, "Discriminant positive.", 10, 'easy'),
            generateQuestion("Condition for two real, equal roots?", ["$b^2-4ac = 0$", "$b^2-4ac > 0$", "$b^2-4ac < 0$", "$b^2-4ac \\le 0$"], 0, "Discriminant purely zero.", 10, 'easy'),
            generateQuestion("Condition for no real roots?", ["$b^2-4ac < 0$", "$b^2-4ac = 0$", "$b^2-4ac > 0$", "$b^2-4ac \\ge 0$"], 0, "Discriminant strictly negative.", 10, 'easy'),
            generateQuestion("Sum of roots formula for $ax^2+bx+c=0$?", ["$-b/a$", "$c/a$", "$b/a$", "$-c/a$"], 0, "Alpha plus Beta.", 10, 'easy'),
            generateQuestion("Product of roots formula?", ["$c/a$", "$-b/a$", "$-c/a$", "$b/a$"], 0, "Alpha times Beta.", 10, 'easy'),
            generateQuestion("If discriminant is exactly 0, the curve is a ___ to the x-axis.", ["Tangent", "Secant", "Normal", "Chord"], 0, "Kisses it exactly once.", 10, 'easy'),
            generateQuestion("Sum of roots of $x^2 - 5x + 6 = 0$?", ["5", "-5", "6", "-6"], 0, "$-(-5)/1 = 5$.", 10, 'easy'),
            generateQuestion("Product of roots of $2x^2 + 3x - 4 = 0$?", ["-2", "2", "-4", "-1.5"], 0, "$-4/2 = -2$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find sum of roots $\\alpha + \\beta$ for $3x^2 + 6x - 2 = 0$.", ["-2", "2", "-2/3", "6"], 0, "$-b/a = -6/3 = -2$.", 15, 'medium'),
            generateQuestion("Find roots product $\\alpha\\beta$ for $3x^2 + 6x - 2 = 0$.", ["-2/3", "-2", "2", "6"], 0, "$c/a = -2/3$.", 15, 'medium'),
            generateQuestion("Form equation with roots 2 and 3.", ["$x^2-5x+6=0$", "$x^2+5x+6=0$", "$x^2-6x+5=0$", "$x^2-5x-6=0$"], 0, "Sum = 5, Prod = 6. $x^2 - (Sum)x + Prod = 0$.", 15, 'medium'),
            generateQuestion("If roots are $\\alpha, \\beta$. Find $\\alpha^2 + \\beta^2$.", ["$(\\alpha+\\beta)^2 - 2\\alpha\\beta$", "$(\\alpha\\beta)^2$", "$(\\alpha+\\beta)^2$", "$\\alpha^2\\beta^2$"], 0, "Standard expansion manipulation.", 15, 'medium'),
            generateQuestion("For $x^2 - 4x + k = 0$ to have equal roots, k=?", ["4", "-4", "16", "-16"], 0, "$16 - 4k = 0 \\Rightarrow k=4$.", 15, 'medium'),
            generateQuestion("For $2x^2 + kx + 2 = 0$ to have equal roots, positive k=?", ["4", "2", "8", "16"], 0, "$k^2 - 16 = 0 \\Rightarrow k=4$.", 15, 'medium'),
            generateQuestion("If line $y=2x+c$ is tangent to $y=x^2$. Find c.", ["-1", "1", "0", "-2"], 0, "$x^2 = 2x+c \\Rightarrow x^2-2x-c=0$. $\\Delta = 4-4(-c)=0 \\Rightarrow 4+4c=0 \\Rightarrow c=-1$.", 15, 'medium'),
            generateQuestion("Roots are $\\alpha, \\beta$. Equation with roots $2\\alpha, 2\\beta$?", ["$x^2-2(\\alpha+\\beta)x + 4\\alpha\\beta=0$", "$x^2-(\\alpha+\\beta)x + 2\\alpha\\beta=0$", "Cannot be found", "$2x^2 ...$"], 0, "New Sum = $2(\\alpha+\\beta)$. New Prod = $4\\alpha\\beta$.", 15, 'medium'),
            generateQuestion("If discriminant > 0 and curve touches y=3 at one point, it means?", ["Vertex is at y=3", "It floating", "Discriminant=0", "Roots are equal"], 0, "Tangent line logic.", 15, 'medium'),
            generateQuestion("Roots $1/\\alpha + 1/\\beta = $?", ["$(\\alpha+\\beta)/(\\alpha\\beta)$", "$1/(\\alpha+\\beta)$", "$1/(\\alpha\\beta)$", "$\\alpha\\beta$"], 0, "Common denominator.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find range of $k$ if $x^2 + kx + 9 = 0$ possesses distinct real roots.", ["$k < -6 \\text{ or } k > 6$", "$-6 < k < 6$", "$k > 6$", "$k \\le -6$"], 0, "$k^2 - 36 > 0 \\Rightarrow k^2 > 36$.", 20, 'hard'),
            generateQuestion("If $ax^2+bx+c=0$ has roots $\\alpha, \\beta$. Roots of $cx^2+bx+a=0$ are?", ["$1/\\alpha, 1/\\beta$", "$-\\alpha, -\\beta$", "$\\alpha^2, \\beta^2$", "$\\alpha+1, \\beta+1$"], 0, "Classic identity! Reversing coefficients inverses the roots.", 20, 'hard'),
            generateQuestion("Line $y=mx+1$ tangents $y=x^2-x+2$. Positive m?", ["1", "-3", "3", "2"], 0, "$x^2-(1+m)x+1=0$. $(1+m)^2 - 4 = 0 \\Rightarrow 1+m=2 \\Rightarrow m=1$.", 20, 'hard'),
            generateQuestion("If roots differ by 1, then $(\\alpha-\\beta)^2 = $?", ["1", "0", "2", "-1"], 0, "Difference is 1, so perfectly squared is 1. $(Sum)^2 - 4(Prod) = 1$.", 20, 'hard'),
            generateQuestion("Curve $y=kx^2+4x+(k-3)$ is always completely positive. Range of k?", ["$k > 4$", "$k < -1$", "$-1 < k < 4$", "$k < 4$"], 0, "$k>0$ AND $16 - 4k(k-3) < 0 \\Rightarrow 16 - 4k^2 + 12k < 0 \\Rightarrow k^2-3k-4 > 0 \\Rightarrow k>4$.", 20, 'hard'),
            generateQuestion("If the sum of squares of roots of $x^2-px+8=0$ is 9. Positive p?", ["5", "3", "4", "25"], 0, "$\\alpha^2+\\beta^2 = p^2 - 16 = 9 \\Rightarrow p^2=25 \\Rightarrow p=5$.", 20, 'hard'),
            generateQuestion("Find $k$ if one root is explicitly double the other for $2x^2+3x+k=0$.", ["1", "2", "3", "4"], 0, "$\\alpha+2\\alpha = 3\\alpha = -3/2 \\Rightarrow \\alpha=-1/2$. Prod = $2\\alpha^2 = k/2 \\Rightarrow 2(1/4) = k/2 \\Rightarrow k=1$.", 20, 'hard'),
            generateQuestion("Line passing through origin is tangent to $y=x^2-4x+4$. Equations?", ["$y=0, y=-8x$", "$y=4x, y=-4x$", "$y=2x, y=-2x$", "$y=0$"], 0, "$y=mx$. $x^2-(4+m)x+4=0 \\Rightarrow (4+m)^2-16=0 \\Rightarrow 4+m=\\pm 4 \\Rightarrow m=0, -8$.", 20, 'hard'),
            generateQuestion("Condition for $ax^2+bx+c > 0$ strictly for ALL real x?", ["$a>0, b^2-4ac<0$", "$a>0, b^2-4ac>0$", "$a<0, b^2-4ac<0$", "$a>0, b^2-4ac \\le 0$"], 0, "U shaped and floating fully above.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+y)^3$.", ["$x^3+3x^2y+3xy^2+y^3$", "$x^3+y^3$", "$x^3-y^3$", "$x^3+3xy+y^3$"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Discriminant of $x^2+4x+4=0$?", ["0", "16", "4", "-16"], 0, "$16-16=0$.", 10, 'easy'),
            generateQuestion("Discriminant of $x^2+x+1=0$?", ["-3", "3", "1", "-1"], 0, "$1-4=-3$.", 10, 'easy'),
            generateQuestion("Roots are real. Means?", ["$\\Delta \\ge 0$", "$\\Delta > 0$", "$\\Delta = 0$", "$\\Delta < 0$"], 0, "Can be distinct or equal.", 10, 'easy'),
            generateQuestion("Sum of roots of $3x^2+12x-7=0$?", ["-4", "4", "12", "-12"], 0, "$-12/3 = -4$.", 10, 'easy'),
            generateQuestion("Product of roots of $5x^2-2x-10=0$?", ["-2", "2", "10", "-10"], 0, "$-10/5 = -2$.", 10, 'easy'),
            generateQuestion("Does $y=x^2+1$ have root?", ["No", "Yes"], 0, "Floating above.", 10, 'easy'),
            generateQuestion("Does $y=-x^2-1$ have root?", ["No", "Yes"], 0, "Floating below.", 10, 'easy'),
            generateQuestion("Equation for roots 1 and -1?", ["$x^2-1=0$", "$x^2+1=0$", "$x^2-x-1=0$", "$x^2+x-1=0$"], 0, "Sum=0, Prod=-1.", 10, 'easy'),
            generateQuestion("Equation for roots 0 and 2?", ["$x^2-2x=0$", "$x^2+2x=0$", "$x^2-2=0$", "$x^2=0$"], 0, "Sum=2, Prod=0.", 10, 'easy'),
            generateQuestion("If sum=3, prod=2, eq?", ["$x^2-3x+2=0$", "$x^2+3x+2=0$", "$x^2-2x+3=0$", "$x^2+3x-2=0$"], 0, "$x^2-Sum(x)+Prod=0$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If $\\alpha+\\beta = 4, \\alpha\\beta=5$, find $\\alpha^2+\\beta^2$.", ["6", "16", "26", "11"], 0, "$4^2 - 2(5) = 16 - 10 = 6$.", 15, 'medium'),
            generateQuestion("If $x^2-kx+9=0$ has equal roots, pos k?", ["6", "3", "9", "18"], 0, "$k^2-36=0$.", 15, 'medium'),
            generateQuestion("Roots $1/\\alpha, 1/\\beta$ for $2x^2+3x+4=0$ sum?", ["-3/4", "3/4", "-3/2", "3/2"], 0, "New sum = $(\\alpha+\\beta)/\\alpha\\beta = (-3/2)/(4/2) = -3/4$.", 15, 'medium'),
            generateQuestion("Curve $y=kx^2-2x+k$ touches x-axis. Pos k?", ["1", "2", "4", "0.5"], 0, "$4-4k^2=0 \\Rightarrow k=1$.", 15, 'medium'),
            generateQuestion("Difference of roots for $x^2-5x+6=0$?", ["1", "5", "6", "2"], 0, "Roots are 3 and 2. Diff is 1.", 15, 'medium'),
            generateQuestion("Find pos $k$ if $y=x^2+kx+1$ is strictly $>0$.", ["$k<2$", "$k>2$", "$k<4$", "$k>4$"], 0, "Need purely $k^2-4<0$, positive k means $0 < k < 2$. (So $k<2$ captures the boundary)", 15, 'medium'),
            generateQuestion("Form eq with roots $-1/2$ and $1/3$.", ["$6x^2+x-1=0$", "$6x^2-x-1=0$", "$x^2+x-6=0$", "$6x^2-x+1=0$"], 0, "Sum = $-1/6$. Prod = $-1/6$. $x^2 + 1/6 x - 1/6 = 0 \\Rightarrow 6x^2+x-1=0$.", 15, 'medium'),
            generateQuestion("Line $y=4x-4$ and $y=x^2$ intersect at?", ["(2,4)", "(4,16)", "(-2,4)", "(0,0)"], 0, "$x^2-4x+4=0 \\Rightarrow (x-2)^2=0$. Tangent at x=2, y=4.", 15, 'medium'),
            generateQuestion("If equation has roots $\\alpha, \\beta$, eq with roots $-\\alpha, -\\beta$?", ["$ax^2-bx+c=0$", "$ax^2+bx+c=0$", "$cx^2+bx+a=0$", "$cx^2-bx+a=0$"], 0, "Flips the middle sign.", 15, 'medium'),
            generateQuestion("If pure quadratic has no x term, roots are?", ["Equal and opposite", "Equal", "Irrational", "Zero"], 0, "$Sum = 0$, so $\\alpha = -\\beta$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Determine $k$ if roots of $x^2-8x+k=0$ are in perfectly ratio 1:3.", ["12", "16", "24", "4"], 0, "$\\alpha+3\\alpha = 8 \\Rightarrow \\alpha=2$. Prod = $3\\alpha^2 = 12 = k$.", 20, 'hard'),
            generateQuestion("$a,b$ roots of $x^2-3x-1=0$. Value of $a^3+b^3$?", ["36", "27", "18", "9"], 0, "$(a+b)(a^2-ab+b^2) = (3)(11 - (-1)) = 3(12) = 36$.", 20, 'hard'),
            generateQuestion("Condition for line $y=mx+c$ to NOT intersect $y=ax^2+bx$.", ["$(b-m)^2 - 4a(-c) < 0$", "$(b-m)^2 - 4ac < 0$", "$(b-m)^2 + 4ac < 0$", "Depends"], 0, "$ax^2+(b-m)x-c=0$. $\\Delta < 0$.", 20, 'hard'),
            generateQuestion("If one root is square of the other for $x^2-px+8=0$. Find p.", ["6", "4", "9", "5"], 0, "$\\alpha^3 = 8 \\Rightarrow \\alpha=2$. Roots are 2,4. Sum = 6 = p.", 20, 'hard'),
            generateQuestion("Range of $k$ if $2x^2+kx+(k-2) > 0$ for all real x?", ["Cannot exist", "k > 4", "k < 4", "0 < k < 4"], 0, "$k^2 - 8(k-2) < 0 \\Rightarrow k^2-8k+16 < 0 \\Rightarrow (k-4)^2 < 0$. Impossible!", 20, 'hard'),
            generateQuestion("If $y=x^2-kx+k$ is tangent to $y=1$. Posi $k$?", ["2", "4", "1", "0"], 0, "$x^2-kx+(k-1)=0$. $k^2-4k+4=0 \\Rightarrow k=2$.", 20, 'hard'),
            generateQuestion("Value of $\\alpha^4 + \\beta^4$?", ["$(\\alpha^2+\\beta^2)^2 - 2\\alpha^2\\beta^2$", "Too long", "$(\\alpha+\\beta)^4$", "$(\\alpha^2-\\beta^2)^2$"], 0, "Recursive identity.", 20, 'hard'),
            generateQuestion("Maximum value of $-2x^2+4x-5$?", ["-3", "5", "-5", "4"], 0, "Completing square: $-2(x^2-2x) - 5 = -2(x-1)^2 - 3$. Max is -3.", 20, 'hard'),
            generateQuestion("Coordinates of vertex for previous?", ["(1, -3)", "(-1, -3)", "(1, 3)", "(-1, 3)"], 0, "From fully completed square.", 20, 'hard'),
            generateQuestion("[Interleaved] Which is an arithmetic progression?", ["2, 4, 6, 8", "2, 4, 8, 16", "1, 4, 9, 16", "1, 1, 2, 3"], 0, "Sequences link.", 10, 'expert')
        ]
    },
    'am-alg-eq': {
        learning: [
            // Easy (1-10)
            generateQuestion("Solve cleanly $|x - 3| = 5$.", ["x=8 or x=-2", "x=8", "x=-2", "x=2 or x=-8"], 0, "Branch it out! $x-3=5 \\Rightarrow 8$. AND $x-3=-5 \\Rightarrow -2$.", 10, 'easy'),
            generateQuestion("Where does $(x-2)(x-4) < 0$ cleanly dip below axis?", ["$2 < x < 4$", "$x < 2 \\text{ or } x > 4$", "$x > 4$", "$x < 2$"], 0, "Smiling U-shape dips below surface between the roots.", 10, 'easy'),
            generateQuestion("Modulus ALWAYS outputs a ___ number (or zero).", ["Positive", "Negative", "Fraction", "Integer"], 0, "It strips away negativity.", 10, 'easy'),
            generateQuestion("Solve $|x| = 7$.", ["7, -7", "7", "-7", "49"], 0, "Distance from zero is 7.", 10, 'easy'),
            generateQuestion("Solve $|x| = -3$.", ["No real solution", "3, -3", "3", "-3"], 0, "Modulus cannot be negative physically.", 10, 'easy'),
            generateQuestion("For $(x-1)(x-5) > 0$, the set is?", ["$x<1$ or $x>5$", "$1<x<5$", "$x>5$", "$x<1$"], 0, "Above the x axis, outside the roots.", 10, 'easy'),
            generateQuestion("Shape of strictly $-x^2+4x-3$?", ["n-shape", "U-shape", "Line", "S-shape"], 0, "Negative quadratic is an arch.", 10, 'easy'),
            generateQuestion("Solve $x^2 - 16 \\le 0$.", ["$-4 \\le x \\le 4$", "$x \\ge 4$ or $x \\le -4$", "$x \\le 4$", "$x \\ge -4$"], 0, "Dip between -4 and 4.", 10, 'easy'),
            generateQuestion("Solve $|2x| = 10$.", ["5, -5", "5", "10, -10", "20"], 0, "2x=10 or 2x=-10.", 10, 'easy'),
            generateQuestion("Solve $x^2 > 9$.", ["$x > 3$ or $x < -3$", "$x > 3$", "$-3 < x < 3$", "$x < 9$"], 0, "Wings outside -3 and 3.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $|2x - 1| = 5$.", ["3, -2", "3, 2", "3", "2, -3"], 0, "$2x-1=5 \\Rightarrow x=3$. $2x-1=-5 \\Rightarrow x=-2$.", 15, 'medium'),
            generateQuestion("Solve $|x+2| = 2x-1$.", ["3", "3, -1/3", "-1/3", "1/3"], 0, "$x+2=2x-1 \\Rightarrow x=3$. $x+2=-2x+1 \\Rightarrow 3x=-1 \\Rightarrow x=-1/3$. BUT sub -1/3 back: $|5/3| = -5/3$ FALSE! Ghost solution.", 15, 'medium'),
            generateQuestion("Solve $x^2 - 5x + 6 < 0$.", ["$2 < x < 3$", "$x < 2$ or $x > 3$", "$1 < x < 6$", "$x < 6$"], 0, "$(x-2)(x-3) < 0$. Between roots.", 15, 'medium'),
            generateQuestion("Solve $2x^2 - x - 1 > 0$.", ["$x < -0.5$ or $x > 1$", "$-0.5 < x < 1$", "$x > 1$", "$x < -0.5$"], 0, "$(2x+1)(x-1) > 0$. Outside roots.", 15, 'medium'),
            generateQuestion("Simultaneous: $y=x+1, xy=2$. Posi x?", ["1", "2", "0.5", "3"], 0, "$x(x+1)=2 \\Rightarrow x^2+x-2=0 \\Rightarrow (x+2)(x-1)=0$. Pos root is 1.", 15, 'medium'),
            generateQuestion("Solve $|3x-2| = |x+4|$. Pos solution?", ["3", "1", "4", "2"], 0, "Square both or branch. Branch 1: $3x-2 = x+4 \\Rightarrow 2x=6 \\Rightarrow x=3$. Branch 2: $3x-2 = -x-4 \\Rightarrow 4x=-2 \\Rightarrow -0.5$. Pos is 3.", 15, 'medium'),
            generateQuestion("Graph of $y = |x|$ looks like?", ["V shape", "U shape", "Line", "N shape"], 0, "Bounces sharply off origin.", 15, 'medium'),
            generateQuestion("Intersection of $y=|x|$ and $y=2$?", ["(-2,2) & (2,2)", "(0,2)", "(2,0)", "(2,-2)"], 0, "x can be 2 or -2.", 15, 'medium'),
            generateQuestion("Solve $-x^2+6x-5 > 0$.", ["$1 < x < 5$", "$x < 1$ or $x > 5$", "$x > 5$", "$x < 1$"], 0, "Multiply by -1: $x^2-6x+5 < 0$. So $(x-1)(x-5) < 0$.", 15, 'medium'),
            generateQuestion("Solve inequality exactly $x(x-2) \\ge 3$.", ["$x \\le -1$ or $x \\ge 3$", "$-1 \\le x \\le 3$", "$x \\ge 3$", "$x \\le -1$"], 0, "$x^2-2x-3 \\ge 0 \\Rightarrow (x-3)(x+1) \\ge 0$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve $|2x - 1| = x + 3$ bravely. Ghost solutions check!", ["x=4 or x=-2/3", "x=4", "x=-2/3", "No solution"], 0, "**Lesson**: $2x-1 = x+3 \\Rightarrow x=4$. $2x-1 = -x-3 \\Rightarrow 3x = -2 \\Rightarrow x=-2/3$. Both flawlessly check out!", 20, 'hard'),
            generateQuestion("Complex system: $y = x+1$ and $y^2 = x^2 + 5$.", ["x=2, y=3", "x=2, y=-3", "x=-2, y=1", "x=3, y=4"], 0, "Sub into second: $(x+1)^2 = x^2+5 \\Rightarrow x^2+2x+1 = x^2+5 \\Rightarrow 2x=4 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{2}{x-1} > 1$.", ["$1 < x < 3$", "$x > 3$", "$x < 1$", "$-1 < x < 1$"], 0, "Multiply by $(x-1)^2$ strictly. $2(x-1) > (x-1)^2 \\Rightarrow (x-1)(2 - x + 1) > 0 \\Rightarrow (x-1)(3-x) > 0$. Between 1 and 3.", 20, 'hard'),
            generateQuestion("Solve $|x^2-4| = 5$.", ["3, -3", "3, -3, 1, -1", "1, -1", "None"], 0, "$x^2-4=5 \\Rightarrow x^2=9 \\Rightarrow x=\\pm 3$. $x^2-4=-5 \\Rightarrow x^2=-1$ (reject).", 20, 'hard'),
            generateQuestion("Solve $|x-2| > 3$.", ["$x > 5$ or $x < -1$", "$-1 < x < 5$", "$x > 5$", "$x < 5$"], 0, "Distance from 2 is greater than 3. Means beyond 5, or below -1.", 20, 'hard'),
            generateQuestion("Intersection of $x^2+y^2=25$ and $y=x-1$. First quadrant?", ["(4,3)", "(3,4)", "(5,0)", "(0,5)"], 0, "$x^2+(x-1)^2=25 \\Rightarrow 2x^2-2x-24=0 \\Rightarrow x^2-x-12=0 \\Rightarrow (x-4)(x+3)=0$. pos x = 4. series $y=3$.", 20, 'hard'),
            generateQuestion("Solve $|2x-5| < |x+1|$.", ["$4/3 < x < 6$", "$x < 4/3$ or $x > 6$", "$x < 6$", "$x > 4/3$"], 0, "Square both. $4x^2-20x+25 < x^2+2x+1 \\Rightarrow 3x^2-22x+24 < 0 \\Rightarrow (3x-4)(x-6) < 0$.", 20, 'hard'),
            generateQuestion("Solve $x^3 - 4x > 0$.", ["$-2<x<0$ or $x>2$", "$0<x<2$", "$x>2$", "$x<-2$"], 0, "$x(x-2)(x+2) > 0$. Wave curve.", 20, 'hard'),
            generateQuestion("Determine $k$ if $x+y=k$ intersects $xy=4$ purely once.", ["4 or -4", "4", "2", "16"], 0, "$x(k-x)=4 \\Rightarrow x^2-kx+4=0$. $k^2-16=0 \\Rightarrow k=4, -4$.", 20, 'hard'),
            generateQuestion("[Interleaved] Complete the square purely for $x^2-6x$.", ["$(x-3)^2-9$", "$(x-3)^2$", "$(x-3)^2+9$", "$(x-6)^2-36$"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Extra tests for equality & inequalities
            generateQuestion("Solve cleanly $|x + 1| = 4$.", ["3, -5", "3, 5", "-3, 5", "3"], 0, "$x+1=4 \\Rightarrow 3$. $x+1=-4 \\Rightarrow -5$.", 10, 'easy'),
            generateQuestion("Where does $(x-1)(x-5) < 0$ cleanly dip below axis?", ["$1 < x < 5$", "$x < 1 \\text{ or } x > 5$", "$x > 5$", "$x < 1$"], 0, "Between 1 and 5.", 10, 'easy'),
            generateQuestion("Solve $|x| = 2$.", ["2, -2", "2", "-2", "4"], 0, "Distance from zero is 2.", 10, 'easy'),
            generateQuestion("Solve $|x| = -1$.", ["No real solution", "1, -1", "1", "-1"], 0, "Modulus cannot be negative.", 10, 'easy'),
            generateQuestion("For $(x+2)(x-3) > 0$, the set is?", ["$x<-2$ or $x>3$", "$-2<x<3$", "$x>3$", "$x<-2$"], 0, "Outside the roots.", 10, 'easy'),
            generateQuestion("Solve $|3x| = 12$.", ["4, -4", "4", "12, -12", "36"], 0, "3x=12 or 3x=-12.", 10, 'easy'),
            generateQuestion("Solve $x^2 > 16$.", ["$x > 4$ or $x < -4$", "$x > 4$", "$-4 < x < 4$", "$x < 16$"], 0, "Wings outside -4 and 4.", 10, 'easy'),
            generateQuestion("Solve $|3x+2| = 8$.", ["2, -10/3", "2", "2, 10/3", "-2, 10/3"], 0, "$3x+2=8 \\Rightarrow x=2$. $3x+2=-8 \\Rightarrow 3x=-10 \\Rightarrow -10/3$.", 15, 'medium'),
            generateQuestion("Solve $|x-3| = 2x-9$.", ["6", "6, 4", "4", "No solution"], 0, "$x-3=2x-9 \\Rightarrow x=6$. $x-3=-2x+9 \\Rightarrow 3x=12 \\Rightarrow x=4$. BUT sub 4 back: $|1| = -1$ FALSE! Only 6.", 15, 'medium'),
            generateQuestion("Solve $x^2 - 7x + 10 < 0$.", ["$2 < x < 5$", "$x < 2$ or $x > 5$", "$2 < x < 7$", "$x < 5$"], 0, "$(x-2)(x-5) < 0$. Between roots.", 15, 'medium'),
            generateQuestion("Solve $2x^2 + 5x - 3 > 0$.", ["$x < -3$ or $x > 0.5$", "$-3 < x < 0.5$", "$x > 0.5$", "$x < -3$"], 0, "$(2x-1)(x+3) > 0$. Outside roots.", 15, 'medium'),
            generateQuestion("Simultaneous: $y=x-2, xy=3$. Posi x?", ["3", "1", "3, -1", "-1"], 0, "$x(x-2)=3 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0$. Pos root is 3.", 15, 'medium'),
            generateQuestion("Solve $|x-5| = |2x+1|$. Pos solution?", ["4/3", "4", "2", "-6"], 0, "Branch 1: $x-5 = 2x+1 \\Rightarrow x=-6$. Branch 2: $x-5 = -2x-1 \\Rightarrow 3x=4 \\Rightarrow 4/3$. Pos is 4/3.", 15, 'medium'),
            generateQuestion("Solve $-x^2+8x-15 > 0$.", ["$3 < x < 5$", "$x < 3$ or $x > 5$", "$x > 5$", "$x < 3$"], 0, "Multiply by -1: $x^2-8x+15 < 0$. So $(x-3)(x-5) < 0$.", 15, 'medium'),
            generateQuestion("Solve inequality exactly $x(x-4) \\ge 5$.", ["$x \\le -1$ or $x \\ge 5$", "$-1 \\le x \\le 5$", "$x \\ge 5$", "$x \\le -1$"], 0, "$x^2-4x-5 \\ge 0 \\Rightarrow (x-5)(x+1) \\ge 0$.", 15, 'medium'),
            generateQuestion("Complex system: $y = 2x$ and $x^2 + y^2 = 20$. Positive (x,y)?", ["(2,4)", "(4,2)", "(2,2)", "(4,8)"], 0, "$x^2+4x^2=20 \\Rightarrow 5x^2=20 \\Rightarrow x^2=4 \\Rightarrow x=2$. y=4.", 20, 'hard'),
            generateQuestion("Solve $\\frac{3}{x+2} < 1$.", ["$x<-2$ or $x>1$", "$-2 < x < 1$", "$x > 1$", "$-1 < x < -2$"], 0, "Multiply by $(x+2)^2$. $3(x+2) < (x+2)^2 \\Rightarrow (x+2)(x+2-3)>0 \\Rightarrow (x+2)(x-1)>0$.", 20, 'hard'),
            generateQuestion("Solve $|x^2-1| = 8$.", ["3, -3", "3, -3, $\\sqrt{7}, -\\sqrt{7}$", "9, -9", "None"], 0, "$x^2-1=8 \\Rightarrow x^2=9 \\Rightarrow x=\\pm 3$. $x^2-1=-8 \\Rightarrow x^2=-7$ (reject).", 20, 'hard'),
            generateQuestion("Solve $|x-4| < 2$.", ["$2 < x < 6$", "$x > 6$ or $x < 2$", "$x < 6$", "$x > 2$"], 0, "Distance from 4 is less than 2. Between 2 and 6.", 20, 'hard'),
            generateQuestion("Intersection of $x^2+y^2=13$ and $y=x+1$. First quadrant?", ["(2,3)", "(3,2)", "(1,2)", "No intersection"], 0, "$x^2+(x+1)^2=13 \\Rightarrow 2x^2+2x-12=0 \\Rightarrow x^2+x-6=0 \\Rightarrow (x+3)(x-2)=0$. pos x = 2. y=3.", 20, 'hard')
        ]
    },
    'am-alg-surds': {
        learning: [
            // Easy (1-10)
            generateQuestion("Extract perfection from $\\sqrt{48}$. Simplify it down.", ["$4\\sqrt{3}$", "$2\\sqrt{12}$", "$16\\sqrt{3}$", "$3\\sqrt{4}$"], 0, "**Lesson**: $48 = 16 \\times 3$. So $\\sqrt{16}\\sqrt{3} = 4\\sqrt{3}$.", 10, 'easy'),
            generateQuestion("Perfect conjugate shield for $3 - \\sqrt{2}$?", ["$3 + \\sqrt{2}$", "$3 - \\sqrt{2}$", "$\\sqrt{2}$", "$-3 + \\sqrt{2}$"], 0, "**Lesson**: Flip middle sign to create difference of two squares.", 10, 'easy'),
            generateQuestion("Simplify $\\sqrt{2} \\times \\sqrt{8}$.", ["4", "16", "$\\sqrt{10}$", "2"], 0, "$\\sqrt{16} = 4$.", 10, 'easy'),
            generateQuestion("Simplify $\\sqrt{50}$.", ["$5\\sqrt{2}$", "$2\\sqrt{25}$", "$10\\sqrt{5}$", "$25\\sqrt{2}$"], 0, "$\\sqrt{25 \\times 2}$.", 10, 'easy'),
            generateQuestion("Simplify $\\sqrt{12} + \\sqrt{27}$.", ["$5\\sqrt{3}$", "$\\sqrt{39}$", "$3\\sqrt{3}$", "$2\\sqrt{3}$"], 0, "$2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$.", 10, 'easy'),
            generateQuestion("Conjugate of $\\sqrt{5} + 2$?", ["$\\sqrt{5} - 2$", "$2 - \\sqrt{5}$", "$-\\sqrt{5} - 2$", "$\\sqrt{5} + 2$"], 0, "Flip the middle sign.", 10, 'easy'),
            generateQuestion("Can you simplify $\\sqrt{2} + \\sqrt{3}$?", ["No", "Yes"], 0, "Roots do not match.", 10, 'easy'),
            generateQuestion("Simplify $( \\sqrt{3} )^2$.", ["3", "9", "$\\sqrt{3}$", "6"], 0, "Squaring destroys the square root.", 10, 'easy'),
            generateQuestion("Simplify $2\\sqrt{5} \\times 3\\sqrt{5}$.", ["30", "5", "6", "$6\\sqrt{5}$"], 0, "$6 \\times 5 = 30$.", 10, 'easy'),
            generateQuestion("Rationalise $1/\\sqrt{2}$.", ["$\\sqrt{2}/2$", "$\\sqrt{2}$", "$2/\\sqrt{2}$", "1"], 0, "Multiply top/bottom by root 2.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Expand and simplify $(2\\sqrt{3} + 1)(2\\sqrt{3} - 1)$.", ["11", "13", "12", "10"], 0, "Difference of squares! $(2\\sqrt{3})^2 - 1^2 = 12 - 1 = 11$.", 15, 'medium'),
            generateQuestion("Rationalise fraction $\\frac{\\sqrt{3}}{\\sqrt{3}-1}$.", ["$\\frac{3+\\sqrt{3}}{2}$", "$\\frac{3-\\sqrt{3}}{2}$", "$3+\\sqrt{3}$", "$\\frac{3}{2}$"], 0, "Multiply by $(\\sqrt{3}+1)$. $\\frac{3+\\sqrt{3}}{3-1} = \\frac{3+\\sqrt{3}}{2}$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{10}{\\sqrt{5}}$.", ["$2\\sqrt{5}$", "$5\\sqrt{2}$", "$5\\sqrt{5}$", "2"], 0, "$10\\sqrt{5}/5 = 2\\sqrt{5}$.", 15, 'medium'),
            generateQuestion("Simplify $(1 + \\sqrt{2})^2$.", ["$3+2\\sqrt{2}$", "3", "5", "$1+2\\sqrt{2}$"], 0, "$1 + 2\\sqrt{2} + 2$.", 15, 'medium'),
            generateQuestion("Find $x$ exactly: $\\sqrt{x} = 2\\sqrt{3}$.", ["12", "6", "9", "3"], 0, "Square both. $x = 4 \\times 3 = 12$.", 15, 'medium'),
            generateQuestion("Solve $\\frac{4}{2+\\sqrt{2}}$ purely.", ["$4-2\\sqrt{2}$", "$2-\\sqrt{2}$", "$2+\\sqrt{2}$", "$4+2\\sqrt{2}$"], 0, "$\\frac{4(2-\\sqrt{2})}{4-2} = \\frac{4(2-\\sqrt{2})}{2} = 2(2-\\sqrt{2}) = 4-2\\sqrt{2}$.", 15, 'medium'),
            generateQuestion("Area of rectangle sides $\\sqrt{6}$ and $\\sqrt{24}$?", ["12", "$\\sqrt{30}$", "30", "6"], 0, "$\\sqrt{6} \\times 2\\sqrt{6} = 2(6) = 12$.", 15, 'medium'),
            generateQuestion("Solve precisely $\\sqrt{75} - \\sqrt{27}$.", ["$2\\sqrt{3}$", "$\\sqrt{48}$", "$8\\sqrt{3}$", "$\\sqrt{3}$"], 0, "$5\\sqrt{3} - 3\\sqrt{3} = 2\\sqrt{3}$.", 15, 'medium'),
            generateQuestion("Simplify $\\sqrt{45} / \\sqrt{5}$.", ["3", "9", "$\\sqrt{9}$", "5"], 0, "$\\sqrt{9} = 3$.", 15, 'medium'),
            generateQuestion("Rationalise $\\frac{1+\\sqrt{2}}{1-\\sqrt{2}}$.", ["$-3-2\\sqrt{2}$", "$3+2\\sqrt{2}$", "-1", "1"], 0, "$(1+\\sqrt{2})^2 / (-1) = (3+2\\sqrt{2})/-1$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve carefully exactly $x\\sqrt{2} = x + 1$.", ["$\\sqrt{2}+1$", "$\\sqrt{2}-1$", "1", "$\\sqrt{2}$"], 0, "$x(\\sqrt{2}-1) = 1 \\Rightarrow x = \\frac{1}{\\sqrt{2}-1} = \\sqrt{2}+1$.", 20, 'hard'),
            generateQuestion("Simplify completely $\\sqrt{7 + \\sqrt{48}}$.", ["$2+\\sqrt{3}$", "$3+\\sqrt{2}$", "$\\sqrt{7}+\\sqrt{2}$", "$1+\\sqrt{6}$"], 0, "Assume $(a+\\sqrt{b})^2 = a^2+b + 2a\\sqrt{b}$. $48=16\\times3 = 4\\sqrt{3} = 2(2)(\\sqrt{3})$. So $a=2, \\sqrt{b}=\\sqrt{3}$. $2+\\sqrt{3}$.", 20, 'hard'),
            generateQuestion("Given $(a-\\sqrt{b})^2 = 11 - 4\\sqrt{7}$. Find positive integer $a$.", ["2", "3", "7", "4"], 0, "$(2-\\sqrt{7})^2 = 4-4\\sqrt{7}+7=11-4\\sqrt{7}$. So $a=2$.", 20, 'hard'),
            generateQuestion("Rationalise heavily $\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{5}+\\sqrt{3}}$.", ["$4-\\sqrt{15}$", "$4+\\sqrt{15}$", "1", "$8-2\\sqrt{15}$"], 0, "$(\\sqrt{5}-\\sqrt{3})^2 / (5-3) = (5 - 2\\sqrt{15} + 3)/2 = (8-2\\sqrt{15})/2 = 4-\\sqrt{15}$.", 20, 'hard'),
            generateQuestion("Volume of cuboid $l=1+\\sqrt{2}, w=\\sqrt{2}-1, h=3$.", ["3", "-3", "3\\sqrt{2}", "$1-2\\sqrt{2}$"], 0, "Volume = $(\\sqrt{2}+1)(\\sqrt{2}-1) \\times 3 = (2-1) \\times 3 = 3$.", 20, 'hard'),
            generateQuestion("Solve $x(1-\\sqrt{2}) = 2$.", ["$-2-2\\sqrt{2}$", "$2+2\\sqrt{2}$", "-2", "$\\sqrt{2}$"], 0, "$x = \\frac{2}{1-\\sqrt{2}} = \\frac{2(1+\\sqrt{2})}{-1} = -2-2\\sqrt{2}$.", 20, 'hard'),
            generateQuestion("Area of triangle sides $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$.", ["$\\sqrt{1.5}$", "1.5", "$\\sqrt{3}$", "$\\sqrt{5}$"], 0, "It's a right triangle! $(\\sqrt{2})^2 + (\\sqrt{3})^2 = 5$. Area = $0.5 \\times \\sqrt{2} \\times \\sqrt{3} = \\sqrt{1.5}$.", 20, 'hard'),
            generateQuestion("Find x if $4^x = 2\\sqrt{2}$.", ["3/4", "1/2", "3/2", "1"], 0, "$2^{2x} = 2^{1.5} \\Rightarrow 2x = 1.5 \\Rightarrow x=0.75$.", 20, 'hard'),
            generateQuestion("What is precisely $\\sqrt{2}^{\\sqrt{2}^{\\sqrt{2}}} ...$ to infinity if it equals $y$?", ["2", "4", "$\\sqrt{2}$", "Infinity"], 0, "$\\sqrt{2}^y = y \\Rightarrow y=2$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which represents inverse proportion?", ["$y=k/x$", "$y=kx$", "$y=kx^2$", "$y=k+x$"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Copy learning but with variations
            generateQuestion("Extract perfection from $\\sqrt{32}$. Simplify it down.", ["$4\\sqrt{2}$", "$2\\sqrt{8}$", "$16\\sqrt{2}$", "$2\\sqrt{16}$"], 0, "$32 = 16 \\times 2$. So $\\sqrt{16}\\sqrt{2} = 4\\sqrt{2}$.", 10, 'easy'),
            generateQuestion("Perfect conjugate shield for $4 - \\sqrt{3}$?", ["$4 + \\sqrt{3}$", "$4 - \\sqrt{3}$", "$\\sqrt{3}$", "$-4 + \\sqrt{3}$"], 0, "Flip middle sign to create difference of two squares.", 10, 'easy'),
            generateQuestion("Simplify $\\sqrt{3} \\times \\sqrt{12}$.", ["6", "36", "$\\sqrt{15}$", "3"], 0, "$\\sqrt{36} = 6$.", 10, 'easy'),
            generateQuestion("Simplify $\\sqrt{72}$.", ["$6\\sqrt{2}$", "$2\\sqrt{36}$", "$36\\sqrt{2}$", "$9\\sqrt{8}$"], 0, "$\\sqrt{36 \\times 2}$.", 10, 'easy'),
            generateQuestion("Simplify $2\\sqrt{8} + \\sqrt{18}$.", ["$7\\sqrt{2}$", "$\\sqrt{50}$", "$5\\sqrt{2}$", "$4\\sqrt{2}$"], 0, "$4\\sqrt{2} + 3\\sqrt{2} = 7\\sqrt{2}$.", 10, 'easy'),
            generateQuestion("Conjugate of $\\sqrt{7} + 3$?", ["$\\sqrt{7} - 3$", "$3 - \\sqrt{7}$", "$-\\sqrt{7} - 3$", "$\\sqrt{7} + 3$"], 0, "Flip the middle sign.", 10, 'easy'),
            generateQuestion("Simplify $( \\sqrt{5} )^2$.", ["5", "25", "$\\sqrt{5}$", "10"], 0, "Squaring destroys the square root.", 10, 'easy'),
            generateQuestion("Simplify $3\\sqrt{2} \\times 4\\sqrt{2}$.", ["24", "12", "7", "$12\\sqrt{2}$"], 0, "$12 \\times 2 = 24$.", 10, 'easy'),
            generateQuestion("Rationalise $2/\\sqrt{3}$.", ["$2\\sqrt{3}/3$", "$\\sqrt{3}$", "$3/\\sqrt{3}$", "2"], 0, "Multiply top/bottom by root 3.", 10, 'easy'),
            generateQuestion("Expand and simplify $(\\sqrt{5} + 2)(\\sqrt{5} - 2)$.", ["1", "9", "5", "4"], 0, "Difference of squares! $5 - 4 = 1$.", 15, 'medium'),
            generateQuestion("Rationalise fraction $\\frac{\\sqrt{2}}{\\sqrt{2}-1}$.", ["$2+\\sqrt{2}$", "$2-\\sqrt{2}$", "$\\sqrt{2}+1$", "$\\frac{2}{2}$"], 0, "Multiply by $(\\sqrt{2}+1)$. $\\frac{2+\\sqrt{2}}{2-1} = 2+\\sqrt{2}$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{14}{\\sqrt{7}}$.", ["$2\\sqrt{7}$", "$7\\sqrt{2}$", "$7\\sqrt{7}$", "2"], 0, "$14\\sqrt{7}/7 = 2\\sqrt{7}$.", 15, 'medium'),
            generateQuestion("Simplify $(2 + \\sqrt{3})^2$.", ["$7+4\\sqrt{3}$", "7", "1", "$4+4\\sqrt{3}$"], 0, "$4 + 4\\sqrt{3} + 3 = 7+4\\sqrt{3}$.", 15, 'medium'),
            generateQuestion("Find $x$ exactly: $\\sqrt{x} = 3\\sqrt{2}$.", ["18", "12", "6", "9"], 0, "Square both. $x = 9 \\times 2 = 18$.", 15, 'medium'),
            generateQuestion("Solve $\\frac{6}{3+\\sqrt{3}}$ purely.", ["$3-\\sqrt{3}$", "$3+\\sqrt{3}$", "$2-\\sqrt{3}$", "$6-2\\sqrt{3}$"], 0, "$\\frac{6(3-\\sqrt{3})}{9-3} = \\frac{6(3-\\sqrt{3})}{6} = 3-\\sqrt{3}$.", 15, 'medium'),
            generateQuestion("Area of rectangle sides $\\sqrt{8}$ and $\\sqrt{18}$?", ["12", "$\\sqrt{144}$", "144", "24"], 0, "$\\sqrt{8 \\times 18} = \\sqrt{144} = 12$.", 15, 'medium'),
            generateQuestion("Solve precisely $\\sqrt{108} - \\sqrt{48}$.", ["$2\\sqrt{3}$", "$\\sqrt{60}$", "$10\\sqrt{3}$", "$\\sqrt{3}$"], 0, "$6\\sqrt{3} - 4\\sqrt{3} = 2\\sqrt{3}$.", 15, 'medium'),
            generateQuestion("Rationalise $\\frac{2+\\sqrt{3}}{2-\\sqrt{3}}$.", ["$7+4\\sqrt{3}$", "$7-4\\sqrt{3}$", "-1", "1"], 0, "$(2+\\sqrt{3})^2 / (4-3) = 7+4\\sqrt{3}$.", 15, 'medium'),
            // Hard
            generateQuestion("Solve carefully exactly $x\\sqrt{3} = x + 2$.", ["$\\sqrt{3}+1$", "$\\sqrt{3}-1$", "2", "$2\\sqrt{3}$"], 0, "$x(\\sqrt{3}-1) = 2 \\Rightarrow x = \\frac{2}{\\sqrt{3}-1} = \\sqrt{3}+1$.", 20, 'hard'),
            generateQuestion("Simplify completely $\\sqrt{8 + \\sqrt{60}}$.", ["$\\sqrt{5}+\\sqrt{3}$", "$4+\\sqrt{15}$", "$\\sqrt{7}+\\sqrt{1}$", "$\\sqrt{6}+\\sqrt{2}$"], 0, "$60=4\\times15$. $2\\sqrt{15}$. $5+3=8, 5\\times3=15$. So $\\sqrt{5}+\\sqrt{3}$.", 20, 'hard'),
            generateQuestion("Given $(a-\\sqrt{b})^2 = 14 - 6\\sqrt{5}$. Find positive integer $a$.", ["3", "4", "5", "6"], 0, "$(3-\\sqrt{5})^2 = 9-6\\sqrt{5}+5=14-6\\sqrt{5}$. So $a=3$.", 20, 'hard'),
            generateQuestion("Rationalise heavily $\\frac{\\sqrt{7}-\\sqrt{2}}{\\sqrt{7}+\\sqrt{2}}$.", ["$\\frac{9-2\\sqrt{14}}{5}$", "$\\frac{9+2\\sqrt{14}}{5}$", "1", "$\\frac{5-2\\sqrt{14}}{9}$"], 0, "$(\\sqrt{7}-\\sqrt{2})^2 / (7-2) = (9 - 2\\sqrt{14})/5$.", 20, 'hard'),
            generateQuestion("Volume of cuboid $l=2+\\sqrt{3}, w=\\sqrt{3}-2$. Wait, that is negative. Make it $w=2-\\sqrt{3}, h=4$.", ["4", "16", "$\\sqrt{3}$", "$4\\sqrt{3}$"], 0, "Volume = $(2+\\sqrt{3})(2-\\sqrt{3}) \\times 4 = (4-3) \\times 4 = 4$.", 20, 'hard'),
            generateQuestion("Solve $x(\\sqrt{2}-1) = 3$.", ["$3\\sqrt{2}+3$", "$3\\sqrt{2}-3$", "-3", "$\\sqrt{2}$"], 0, "$x = \\frac{3}{\\sqrt{2}-1} = 3(\\sqrt{2}+1) = 3\\sqrt{2}+3$.", 20, 'hard'),
            generateQuestion("Area of triangle sides $\\sqrt{5}, \\sqrt{11}, 4$.", ["$\\sqrt{13.75}$", "4", "$\\sqrt{11}$", "$\\sqrt{5}$"], 0, "Right triangle! $(\\sqrt{5})^2 + (\\sqrt{11})^2 = 16 = 4^2$. Area = $0.5 \\times \\sqrt{5} \\times \\sqrt{11} = 0.5\\sqrt{55} = \\sqrt{55/4} = \\sqrt{13.75}$.", 20, 'hard'),
            generateQuestion("Find x if $9^x = 3\\sqrt{3}$.", ["3/4", "1/2", "3/2", "1"], 0, "$3^{2x} = 3^{1.5} \\Rightarrow 2x = 1.5 \\Rightarrow x=0.75$.", 20, 'hard'),
            generateQuestion("What is $\\sqrt{x\\sqrt{x\\sqrt{x...}}} = 5$?", ["5", "25", "$\\sqrt{5}$", "125"], 0, "$\\sqrt{x \\times 5} = 5 \\Rightarrow 5x = 25 \\Rightarrow x=5$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which represents inverse proportion?", ["$y=k/x$", "$y=kx$", "$y=kx^2$", "$y=k+x$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'am-alg-poly': {
        learning: [
            // Easy (1-10)
            generateQuestion("Remainder Theorem: If $P(x)$ is divided by $(x-a)$, the remainder is:", ["$P(a)$", "$P(-a)$", "0", "$a$"], 0, "**Lesson**: Simply evaluating the polynomial at $x=a$ gives the remainder directly.", 10, 'easy'),
            generateQuestion("Factor Theorem: If $(x-a)$ is a factor of $P(x)$, then:", ["$P(a) = 0$", "$P(a) = \\text{rem}$", "$P(-a) = 0$", "$P(0) = a$"], 0, "**Lesson**: A perfect factor leaves exactly zero remainder.", 10, 'easy'),
            generateQuestion("Remainder when $x^2 + 5x + 6$ is divided by $(x-1)$?", ["12", "0", "6", "2"], 0, "$1^2 + 5(1) + 6 = 12$.", 10, 'easy'),
            generateQuestion("If $P(2) = 0$, which of these is a factor?", ["$(x-2)$", "$(x+2)$", "$x$", "2"], 0, "Evaluate root 2 gives $(x-2)$.", 10, 'easy'),
            generateQuestion("Partial Fraction setup for $\\frac{1}{(x-1)(x-2)}$?", ["$\\frac{A}{x-1} + \\frac{B}{x-2}$", "$\\frac{A}{(x-1)(x-2)}$", "$\\frac{A}{x-1} + \\frac{Bx+C}{x-2}$", "$\\frac{Ax+B}{(x-1)(x-2)}$"], 0, "Distinct linear factors.", 10, 'easy'),
            generateQuestion("In long division, if the degree of remainder is less than the divisor, do you:", ["Stop", "Continue", "Multiply", "Square"], 0, "You've reached the final remainder.", 10, 'easy'),
            generateQuestion("Degree of $x^3 - 2x + 1$?", ["3", "1", "0", "2"], 0, "Highest power of x.", 10, 'easy'),
            generateQuestion("If $P(-3) = 0$, what is the factor?", ["$(x+3)$", "$(x-3)$", "$(x+0.3)$", "$-3$"], 0, "Sign flips in brackets.", 10, 'easy'),
            generateQuestion("Remainder of $k$ (a constant) divided by $(x-1)$?", ["$k$", "0", "1", "$x$"], 0, "A constant polynomial always evaluates to $k$.", 10, 'easy'),
            generateQuestion("Is $\\frac{x^2}{x-1}$ a proper fraction?", ["No", "Yes"], 0, "Degree of top $\ge$ degree of bottom.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find $k$ if $(x-1)$ is a factor of $x^3 - kx + 2$.", ["3", "1", "2", "0"], 0, "$1 - k + 2 = 0 \Rightarrow k = 3$.", 15, 'medium'),
            generateQuestion("Find remainder when $2x^3 - x^2 + 5$ is divided by $(2x-1)$.", ["5", "0", "6", "4"], 0, "Plug in $x=0.5$. $2(0.125) - 0.25 + 5 = 0.25 - 0.25 + 5 = 5$.", 15, 'medium'),
            generateQuestion("PF setup for $\\frac{1}{(x-1)^2(x+2)}$?", ["$\\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+2}$", "$\\frac{A}{x-1} + \\frac{B}{x+2}$", "$\\frac{Ax+B}{(x-1)^2} + \\frac{C}{x+2}$", "$\\frac{A}{(x-1)^2} + \\frac{B}{x+2}$"], 0, "Repeated linear factor.", 15, 'medium'),
            generateQuestion("PF setup for $\\frac{1}{x(x^2+1)}$?", ["$\\frac{A}{x} + \\frac{Bx+C}{x^2+1}$", "$\\frac{A}{x} + \\frac{B}{x^2+1}$", "$\\frac{A}{x} + \\frac{Bx}{x^2+1}$", "$\\frac{A}{x} + \\frac{B}{x+1} + \\frac{C}{x-1}$"], 0, "Irreducible quadratic factor.", 15, 'medium'),
            generateQuestion("If $P(x) = (x-1)Q(x) + 5$, then $P(1)$ is:", ["5", "0", "1", "Undefined"], 0, "Quotient term vanishes.", 15, 'medium'),
            generateQuestion("Find $k$ if $(x-1)$ factor of $x^3+kx^2-k-1$.", ["Any value of k", "1", "-1", "0"], 0, "Rem $= 1+k-k-1 = 0$ works for all k.", 15, 'medium'),
            generateQuestion("Solve $\\frac{2x+3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$. Find A.", ["5/3", "1/3", "2", "1"], 0, "Cover up rule: Put $x=1$ into $(\dots)/(x+2) = 5/3$.", 15, 'medium'),
            generateQuestion("Find B in previous question.", ["1/3", "-1/3", "2/3", "1"], 0, "Cover up rule: Put $x=-2$ into $(2x+3)/(x-1) = (-4+3)/(-3) = 1/3$.", 15, 'medium'),
            generateQuestion("Factorise $x^3 - 7x + 6$ completely given $(x-1)$ is a factor.", ["$(x-1)(x-2)(x+3)$", "$(x-1)(x+2)(x-3)$", "$(x-1)(x^2+x-6)$", "$(x-1)^3$"], 0, "Division gives $x^2+x-6 = (x+3)(x-2)$.", 15, 'medium'),
            generateQuestion("If $P(1) = 3$ and $P(-1) = 5$, find remainder when dividing by $x^2-1$.", ["$-x+4$", "$x+2$", "4", "8"], 0, "$ax+b = R(x) \Rightarrow a+b=3, -a+b=5 \Rightarrow 2b=8, b=4, a=-1$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Perform long division on $\\frac{x^2}{x^2-1}$ to find the integer part.", ["1", "x", "0", "-1"], 0, "Proper vs Improper. $x^2 / (x^2-1) = 1 + \\frac{1}{x^2-1}$.", 20, 'hard'),
            generateQuestion("PF for $\\frac{x^2+1}{(x-1)(x+2)}$ starts with which constant?", ["1", "0", "2", "A"], 0, "Degrees are equal, so divide first. $x^2 / x^2 = 1$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{5x^2-2x+1}{(x-1)^2(x+1)} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+1}$. Find B.", ["2", "4", "1", "-1"], 0, "Cover up x=1: $(5-2+1)/(1+1) = 4/2 = 2$.", 20, 'hard'),
            generateQuestion("Find C in previous question.", ["2", "4", "1", "-1"], 0, "Cover up $x=-1$: $(5+2+1)/(-1-1)^2 = 8/4 = 2$.", 20, 'hard'),
            generateQuestion("A polynomial $P(x)$ leaves rem 3 when divided by $(x-1)$ and rem 5 when divided by $(x-2)$. Rem when divided by $(x-1)(x-2)$?", ["$2x+1$", "$x+2$", "$2x-1$", "8"], 0, "$R(x) = ax+b$. $a+b=3, 2a+b=5 \Rightarrow a=2, b=1$.", 20, 'hard'),
            generateQuestion("If $(x-a)^2$ is a factor of $P(x)$, then which is also true?", ["$P'(a) = 0$", "$P(a) = a$", "$P''(a) = 0$", "$P(2a)=0$"], 0, "Double root means derivative is also zero at that point.", 20, 'hard'),
            generateQuestion("Setup PF for $\\frac{1}{x^2(x^2+1)}$.", ["$\\frac{A}{x} + \\frac{B}{x^2} + \\frac{Cx+D}{x^2+1}$", "$\\frac{A}{x^2} + \\frac{B}{x^2+1}$", "$\\frac{Ax+B}{x^2} + \\frac{C}{x^2+1}$", "$\\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1} + \\frac{D}{x-1}$"], 0, "Repeated linear (x) and irreducible quadratic.", 20, 'hard'),
            generateQuestion("Find sum of roots of $x^3 - 3x^2 + 4x - 5 = 0$.", ["3", "-3", "4", "5"], 0, "Vieta's formula: $-b/a = -(-3)/1 = 3$.", 20, 'hard'),
            generateQuestion("Does $x^2+x+1$ have any real linear factors?", ["No", "Yes"], 0, "Discriminant is negative.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $|x-3|=2$.", ["5, 1", "5", "1", "No solution"], 0, "Modulus link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Degree of a constant (like 7)?", ["0", "1", "Undefined", "7"], 0, "$7 = 7x^0$.", 10, 'easy'),
            generateQuestion("If $P(x) = x^3 - 1$, what is $P(1)$?", ["0", "-1", "1", "2"], 0, "Shows $(x-1)$ is a factor.", 10, 'easy'),
            generateQuestion("If $P(x) = x^3 - 1$, rem when divided by $(x+1)$?", ["-2", "0", "2", "-1"], 0, "$(-1)^3 - 1 = -2$.", 10, 'easy'),
            generateQuestion("PF type for $\\frac{x}{(x-3)(x+4)}$?", ["Distinct linear", "Repeated linear", "Quadratic", "Improper"], 0, "Denominator degree 2 > Top 1.", 10, 'easy'),
            generateQuestion("Can $\\frac{1}{x-1}$ be decomposed into partial fractions?", ["No", "Yes"], 0, "Already as simple as possible.", 10, 'easy'),
            generateQuestion("If $P(x)$ has degree 5, and $D(x)$ has degree 2, the quotient $Q(x)$ has degree:", ["3", "7", "2.5", "5"], 0, "$5 - 2 = 3$.", 10, 'easy'),
            generateQuestion("$P(x) = x^2$. Factor $(x-1)$?", ["No", "Yes"], 0, "$1^2 \\ne 0$.", 10, 'easy'),
            generateQuestion("Long division: $x$ goes into $x^3$ how many times?", ["$x^2$", "$x^3$", "$3$", "$1$"], 0, "Basic step.", 10, 'easy'),
            generateQuestion("Evaluate $P(x) = 2x - 3$ at $x=4$.", ["5", "8", "11", "1"], 0, "Plug in.", 10, 'easy'),
            generateQuestion("Is $x^3 + 1$ a quadratic?", ["No", "Yes"], 0, "It is cubic.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("$(x-2)$ is a factor of $x^2+kx-6$. Find k.", ["1", "3", "-1", "0"], 0, "$4+2k-6=0 \Rightarrow 2k=2 \Rightarrow k=1$.", 15, 'medium'),
            generateQuestion("Remainder of $x^{100}$ divided by $(x-1)$?", ["1", "0", "100", "-1"], 0, "$1^{100} = 1$.", 15, 'medium'),
            generateQuestion("Remainder when $x^3 + 2x^2 - x - 2$ is divided by $(x+2)$?", ["0", "1", "-1", "2"], 0, "$-8 + 8 + 2 - 2 = 0$.", 15, 'medium'),
            generateQuestion("Solve $\\frac{1}{x^2-x} = \\frac{A}{x} + \\frac{B}{x-1}$. Find A.", ["-1", "1", "0", "2"], 0, "$1/(0-1) = -1$.", 15, 'medium'),
            generateQuestion("Find B in previous.", ["1", "-1", "0", "0.5"], 0, "$1/1 = 1$.", 15, 'medium'),
            generateQuestion("If $P(x)$ has degree 3, how many linear factors (real or complex) does it have?", ["3", "1", "2", "Undefined"], 0, "Fundamental Theorem of Algebra.", 15, 'medium'),
            generateQuestion("Is $\\frac{x^3+x}{x^2+1}$ an improper fraction?", ["Yes", "No"], 0, "Degree 3 > 2.", 15, 'medium'),
            generateQuestion("Integer part of $\\frac{x^3+x}{x^2+1}$ after division?", ["x", "1", "0", "$x^2$"], 0, "Division gives x.", 15, 'medium'),
            generateQuestion("Given $x-a$ is a factor, what is root?", ["$x=a$", "$x=-a$", "$0$", "$1/a$"], 0, "Setting bracket to zero.", 15, 'medium'),
            generateQuestion("If $P(1) = 0$, what is $(x-1)$?", ["Factor", "Remainder", "Quotient", "Polynomial"], 0, "Definition.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If a cubic polynomial has roots 1, 2, 3, Eq is?", ["$(x-1)(x-2)(x-3)$", "$(x+1)(x+2)(x+3)$", "$x^3-6$", "$x^3-123$"], 0, "Product of linear factors.", 20, 'hard'),
            generateQuestion("Find $k$ if $x^2-4$ is factor of $x^3+kx^2-4x-4k$.", ["Any k", "0", "1", "4"], 0, "Check $P(2)$ and $P(-2)$.", 20, 'hard'),
            generateQuestion("Convert $\\frac{x^4}{x^2-1}$ to polynomial + proper fraction.", ["$x^2+1 + \\frac{1}{x^2-1}$", "$x^2-1 + \\frac{1}{x^2-1}$", "$x^2 + \\frac{x^2}{x^2-1}$", "$x^2$"], 0, "Long division.", 20, 'hard'),
            generateQuestion("Find A in $\\frac{x^2+1}{(x-1)(x+2)} = A + \\frac{B}{x-1} + \\frac{C}{x+2}$.", ["1", "0", "2", "3"], 0, "Leading coefficient.", 20, 'hard'),
            generateQuestion("If $P(x)$ divided by $x^2-1$ leaves rem $x+5$. Find $P(1)$.", ["6", "5", "4", "1"], 0, "$P(1) = 6$.", 20, 'hard'),
            generateQuestion("In PF $\\frac{3x+1}{(x-1)^2} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2}$. Find B.", ["4", "3", "1", "0"], 0, "Cover up x=1.", 20, 'hard'),
            generateQuestion("Find A in previous.", ["3", "4", "1", "0"], 0, "Coefficient of x.", 20, 'hard'),
            generateQuestion("Which PF setup is for repeated quadratic $\\frac{1}{(x^2+1)^2}$?", ["$\\frac{Ax+B}{x^2+1} + \\frac{Cx+D}{(x^2+1)^2}$", "$\\frac{A}{x^2+1} + \\frac{B}{(x^2+1)^2}$", "$\\frac{Ax+B}{(x^2+1)^2}$", "Too complex"], 0, "Standard repeated quadratic rule.", 20, 'hard'),
            generateQuestion("Remainder of $x^3-2x^2+x-7$ divided by $x-k$?", ["$k^3-2k^2+k-7$", "0", "k", "Undefined"], 0, "Remainder theorem.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify $\\sqrt{48}$.", ["$4\\sqrt{3}$", "$16\\sqrt{3}$", "$2\\sqrt{12}$", "$4\\sqrt{12}$"], 0, "Surds link.", 10, 'expert')
        ]
    },
    'am-alg-binomial': {
        learning: [
            // Easy (1-10)
            generateQuestion("Symbol $\\binom{n}{r}$ or $nCr$ represents:", ["Combinations", "Permutations", "Multiplication", "Addition"], 0, "**Lesson**: It counts how many ways to pick $r$ items from $n$.", 10, 'easy'),
            generateQuestion("Calculate $\\binom{4}{2}$.", ["6", "4", "12", "24"], 0, "$\\frac{4 \\times 3}{2 \\times 1} = 6$.", 10, 'easy'),
            generateQuestion("Value of $\\binom{n}{0}$?", ["1", "0", "n", "Infinite"], 0, "Only one way to pick zero items.", 10, 'easy'),
            generateQuestion("Value of $\\binom{n}{n}$?", ["1", "0", "n", "Infinite"], 0, "Only one way to pick all items.", 10, 'easy'),
            generateQuestion("Sum of powers in each term of $(a+b)^n$ is:", ["n", "n+1", "2n", "0"], 0, "The total count of factors is always n.", 10, 'easy'),
            generateQuestion("Total number of terms in expansion of $(a+b)^5$?", ["6", "5", "4", "10"], 0, "$n+1$.", 10, 'easy'),
            generateQuestion("General term formula $T_{r+1}$ is:", ["$\\binom{n}{r} a^{n-r} b^r$", "$\\binom{n}{r} a^r b^r$", "$a^{n-r} b^r$", "$\\binom{n}{r} ab^n$"], 0, "Standard indexing.", 10, 'easy'),
            generateQuestion("To find the 3rd term, what is the value of 'r'?", ["2", "3", "1", "0"], 0, "r starts at 0, so 3rd term has $r=2$.", 10, 'easy'),
            generateQuestion("Coefficient of $x^n$ in $(1+x)^n$?", ["1", "n", "0", "n!"], 0, "Last term is always $1x^n$.", 10, 'easy'),
            generateQuestion("Pattern of powers in $(a+b)^n$: a power ___ and b power ___.", ["Decreases, Increases", "Increases, Decreases", "Increases, Increases", "Decreases, Decreases"], 0, "Starts with $a^n b^0$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Coefficient of $x^2$ in $(1+2x)^4$?", ["24", "6", "12", "4"], 0, "$\\binom{4}{2} (1)^2 (2x)^2 = 6 \\times 4 = 24$.", 15, 'medium'),
            generateQuestion("Find the middle term of $(a+b)^4$.", ["$6a^2b^2$", "$4a^3b$", "$4ab^3$", "$a^4$"], 0, "3rd term ($r=2$): $\\binom{4}{2} a^2 b^2 = 6a^2b^2$.", 15, 'medium'),
            generateQuestion("Find the coefficient of $x^3$ in $(1-x)^6$.", ["-20", "20", "15", "-15"], 0, "$\\binom{6}{3} (1)^3 (-x)^3 = 20 \\times (-1) = -20$.", 15, 'medium'),
            generateQuestion("First 3 terms of $(1+x)^5$?", ["$1+5x+10x^2$", "$1+x+x^2$", "$1+5x+5x^2$", "$5+5x+5x^2$"], 0, "$\\binom{5}{0}, \\binom{5}{1}, \\binom{5}{2}$.", 15, 'medium'),
            generateQuestion("Calculate $\\binom{7}{3}$.", ["35", "21", "70", "15"], 0, "$(7 \\times 6 \\times 5) / (3 \\times 2 \\times 1) = 35$.", 15, 'medium'),
            generateQuestion("Is $\\binom{n}{r} = \\binom{n}{n-r}$ always true?", ["Yes", "No"], 0, "Symmetry of Pascal's triangle.", 15, 'medium'),
            generateQuestion("Coefficient of $x$ in $(1+3x)^5$?", ["15", "5", "1", "405"], 0, "$\\binom{5}{1} (1)^4 (3x) = 5 \\times 3 = 15$.", 15, 'medium'),
            generateQuestion("Constant term in expansion of $(x + 1/x)^2$?", ["2", "1", "0", "x"], 0, "$x^2 + 2x(1/x) + 1/x^2 = x^2 + 2 + 1/x^2$.", 15, 'medium'),
            generateQuestion("Find power of x in $T_{r+1}$ of $(x^2 + 1/x)^n$.", ["$2n-3r$", "$2n-2r$", "$n-r$", "$3r$"], 0, "$(x^2)^{n-r} (x^{-1})^r = x^{2n-2r-r}$.", 15, 'medium'),
            generateQuestion("Find $\\binom{5}{2}$ using Pascal's triangle row 1 4 6 4 1.", ["10", "5", "6", "1"], 0, "Next row: 1 5 10 10 5 1. Index 2 is 10.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Term independent of $x$ in $(x^2 + \\frac{1}{x})^6$?", ["15", "20", "6", "1"], 0, "$12-3r=0 \Rightarrow r=4$. Coeff $= \\binom{6}{4} = 15$.", 20, 'hard'),
            generateQuestion("Coefficient of $x$ in $(1+x)(1-x)^5$?", ["-4", "4", "5", "-5"], 0, "$(1-x)^5 = 1 - 5x + \dots$. Product is $(1+x)(1-5x) = 1 - 5x + x = 1 - 4x$.", 20, 'hard'),
            generateQuestion("If coefficient of $x^2$ in $(1+kx)^6$ is 60, find positive $k$.", ["2", "4", "1", "$\\sqrt{2}$"], 0, "$\\binom{6}{2} k^2 = 60 \Rightarrow 15k^2 = 60 \Rightarrow k^2=4 \Rightarrow k=2$.", 20, 'hard'),
            generateQuestion("Term independent of $x$ in $(x - \\frac{2}{x})^8$.", ["1120", "20", "64", "120"], 0, "$8-2r=0 \Rightarrow r=4$. $\\binom{8}{4} (1)^4 (-2)^4 = 70 \\times 16 = 1120$.", 20, 'hard'),
            generateQuestion("Coefficient of $x^3$ in $(x^2 - 1/x)^6$?", ["-20", "20", "15", "-15"], 0, "$12-3r=3 \Rightarrow 3r=9 \Rightarrow r=3$. $\\binom{6}{3}(-1)^3 = -20$.", 20, 'hard'),
            generateQuestion("Expansion of $(1+x+x^2)^4$. Coefficient of $x^2$?", ["10", "4", "6", "8"], 0, "$...+4x+4x^2 + (4 \\times 3 / 2)x^2 = 10x^2$.", 20, 'hard'),
            generateQuestion("Find $n$ if coeff of $x^2$ in $(1+x)^n$ is 21.", ["7", "6", "5", "8"], 0, "$n(n-1)/2 = 21 \Rightarrow n^2-n-42=0 \Rightarrow (n-7)(n+6)=0 \Rightarrow 7$.", 20, 'hard'),
            generateQuestion("Max coefficient in $(1+x)^{10}$ is?", ["$\\binom{10}{5}$", "$\\binom{10}{4}$", "10", "1"], 0, "Middle coefficient is always the greatest.", 20, 'hard'),
            generateQuestion("Find $k$ if $x^2$ coeff in $(1-kx)^4$ is 24.", ["2", "4", "1", "0"], 0, "$4C2 * (-k)^2 = 24 \Rightarrow 6k^2 = 24 \Rightarrow k=2$.", 20, 'hard'),
            generateQuestion("[Interleaved] Factorise $x^2-7x+6$.", ["(x-1)(x-6)", "(x-2)(x-3)", "(x-1)(x+6)", "x(x-7)"], 0, "Polynomial link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Pascal's Triangle row 3 is 1 3 3 1. What is row 4?", ["1 4 6 4 1", "1 5 10 10 5 1", "1 2 1", "1 3 4 3 1"], 0, "Add adjacent terms.", 10, 'easy'),
            generateQuestion("Evaluate 5C1.", ["5", "1", "10", "120"], 0, "Pick 1 from 5.", 10, 'easy'),
            generateQuestion("Evaluating $nCr$: $n$ must be a ___ integer.", ["Positive", "Negative", "Real", "Irrational"], 0, "Natural number count.", 10, 'easy'),
            generateQuestion("Coefficient of $a^n$ in $(a+b)^n$?", ["1", "n", "0", "ab"], 0, "First term.", 10, 'easy'),
            generateQuestion("How many terms in $(x+y)^9$?", ["10", "9", "8", "11"], 0, "n+1.", 10, 'easy'),
            generateQuestion("General term $r$-value for the LAST term?", ["n", "n+1", "r", "0"], 0, "r goes from 0 to n.", 10, 'easy'),
            generateQuestion("$\\binom{10}{2}$ equals?", ["45", "90", "20", "10"], 0, "10*9/2.", 10, 'easy'),
            generateQuestion("$\\binom{10}{8}$ equals?", ["45", "90", "10", "1"], 0, "Same as 10C2.", 10, 'easy'),
            generateQuestion("Coefficient of $x^3$ in $(1+x)^4$?", ["4", "6", "1", "12"], 0, "4C3 = 4C1 = 4.", 10, 'easy'),
            generateQuestion("In $(x-y)^n$, terms have ___ signs.", ["Alternating", "Positive", "Negative", "Zero"], 0, "Due to $(-y)^r$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Coefficient of $x^2$ in $(1+3x)^3$?", ["27", "9", "1", "3"], 0, "3C2 * 1 * (3x)^2 = 3 * 9 = 27.", 15, 'medium'),
            generateQuestion("Find middle term of $(x+y)^6$.", ["$20x^3y^3$", "$15x^4y^2$", "$6x^5y$", "$x^6$"], 0, "4th term ($r=3$): 6C3 = 20.", 15, 'medium'),
            generateQuestion("Coeff of $x^2$ in $(2-x)^5$?", ["80", "-80", "40", "-40"], 0, "5C2 * (2)^3 * (-1)^2 = 10 * 8 * 1 = 80.", 15, 'medium'),
            generateQuestion("First 3 terms of $(1-x)^4$?", ["$1-4x+6x^2$", "$1+4x+6x^2$", "$1-4x-6x^2$", "$1-x+x^2$"], 0, "Alternating signs.", 15, 'medium'),
            generateQuestion("Value of $\\binom{8}{3}$.", ["56", "28", "8", "3"], 0, "8*7*6 / 3*2*1.", 15, 'medium'),
            generateQuestion("Coefficient of $x^4$ in $(1+x)^{10}$?", ["210", "120", "45", "10"], 0, "10C4 = 210.", 15, 'medium'),
            generateQuestion("Constant term of $(2x + 1/x)^2$?", ["4", "2", "1", "x"], 0, "$4x^2 + 4x(1/x) \\times 2$ (Wait, $2ab = 4$). Result 4.", 15, 'medium'),
            generateQuestion("Power of x in $T_{r+1}$ of $(x^3 + 1/x^2)^5$.", ["$15-5r$", "$15-2r$", "15", "0"], 0, "$3(5-r) - 2r = 15-3r-2r$.", 15, 'medium'),
            generateQuestion("If term independent of x is found, x power is?", ["0", "1", "n", "r"], 0, "$x^0 = 1$.", 15, 'medium'),
            generateQuestion("Coefficient of $x$ in $(1+2x)^5$?", ["10", "5", "80", "1"], 0, "5C1 * 2 = 10.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Term independent of $x$ in $(x + 2/x)^4$?", ["24", "6", "16", "8"], 0, "4-2r=0 => r=2. 4C2 * 2^2 = 6 * 4 = 24.", 20, 'hard'),
            generateQuestion("Coefficient of $x^2$ in $(1-2x)(1+x)^4$?", ["-2", "6", "4", "0"], 0, "$(1+x)^4 = 1+4x+6x^2$. Product gives $6-8=-2$.", 20, 'hard'),
            generateQuestion("Find positive $k$ if $x^2$ coeff in $(1+kx)^4$ is 54.", ["3", "9", "1", "2"], 0, "4C2 * k^2 = 54 => 6k^2 = 54 => k^2=9 => 3.", 20, 'hard'),
            generateQuestion("Coefficient of $x^3$ in $(2x - 1/x)^5$?", ["80", "40", "-80", "20"], 0, "$5-2r=3 \Rightarrow 2r=2 \Rightarrow r=1$. 5C1 * (2)^4 * (-1)^1 = -80.", 20, 'hard'),
            generateQuestion("Coefficient of $x^4$ in $(1+x+x^2)^3$?", ["6", "3", "1", "0"], 0, "Expansion check.", 20, 'hard'),
            generateQuestion("Find $n$ if $\\binom{n}{2} = 45$.", ["10", "9", "11", "12"], 0, "n(n-1)=90.", 20, 'hard'),
            generateQuestion("How many terms in $(1+x)^n$ have coeff 1?", ["2", "1", "n", "0"], 0, "First and last.", 20, 'hard'),
            generateQuestion("Sum of all coefficients in $(1+x)^n$ is?", ["$2^n$", "n", "0", "1"], 0, "Set x=1.", 20, 'hard'),
            generateQuestion("Term independent of $x$ in $(x^2 - 1/x)^3$?", ["-3", "3", "1", "-1"], 0, "3C2 * (-1)^2 = 3.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2+k=0$ has no real roots if:", ["$k>0$", "$k<0$", "$k=0$", "Any k"], 0, "Quadratics link.", 10, 'expert')
        ]
    },
    'am-alg-log': {
        learning: [
            // Easy (1-10)
            generateQuestion("If $y = a^x$, then $x$ is equal to:", ["$\\log_a y$", "$\\log_y a$", "$a^y$", "$x^a$"], 0, "**Lesson**: The logarithm is the exponent you raise the base to.", 10, 'easy'),
            generateQuestion("Log Law: $\\log A + \\log B = $", ["$\\log(AB)$", "$\\log(A+B)$", "$\\log A \\times \\log B$", "$\\log(A/B)$"], 0, "Addition of logs is multiplication of arguments.", 10, 'easy'),
            generateQuestion("Log Law: $\\log A - \\log B = $", ["$\\log(A/B)$", "$\\log(A-B)$", "$\\log A / \\log B$", "$\\log(AB)$"], 0, "Subtraction of logs is division of arguments.", 10, 'easy'),
            generateQuestion("Log Law: $n \\log A = $", ["$\\log(A^n)$", "$\\log(nA)$", "$(\\log A)^n$", "$n^A$"], 0, "Coefficient becomes the power.", 10, 'easy'),
            generateQuestion("What is $\\log_b 1$ always?", ["0", "1", "$b$", "Undefined"], 0, "Anything to the power 0 is 1.", 10, 'easy'),
            generateQuestion("What is $\\log_b b$?", ["1", "0", "$b^2$", "Undefined"], 0, "Base power 1 is the base.", 10, 'easy'),
            generateQuestion("Value of $\\ln e$?", ["1", "0", "e", "10"], 0, "Natural log is base e.", 10, 'easy'),
            generateQuestion("Value of $\\log_{10} 100$?", ["2", "10", "1", "100"], 0, "$10^2 = 100$.", 10, 'easy'),
            generateQuestion("Change of base: $\\log_a b = $", ["$\\frac{\\log_k b}{\\log_k a}$", "$\\frac{\\log_k a}{\\log_k b}$", "$\\log(b/a)$", "$\\log b - \\log a$"], 0, "Standard formula.", 10, 'easy'),
            generateQuestion("The graph of $y = e^x$ passes through which y-intercept?", ["(0,1)", "(1,0)", "(0,0)", "(e,1)"], 0, "$e^0 = 1$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $e^{x} = 5$.", ["$x = \\ln 5$", "$x = e^5$", "$x = \\log 5$", "$x = 5$"], 0, "Take natural log of both sides.", 15, 'medium'),
            generateQuestion("Solve $\\log_2 (x+1) = 3$.", ["7", "8", "9", "2"], 0, "$x+1 = 2^3 = 8 \\Rightarrow x=7$.", 15, 'medium'),
            generateQuestion("Simplify $\\log 2 + \\log 5$.", ["1", "10", "7", "0"], 0, "$\\log(10) = 1$ (assuming base 10).", 15, 'medium'),
            generateQuestion("Simplify $2 \\log 3$.", ["$\\log 9$", "$\\log 6$", "9", "6"], 0, "$\\log(3^2) = \\log 9$.", 15, 'medium'),
            generateQuestion("Solve $10^{2x} = 1000$.", ["1.5", "1", "2", "3"], 0, "$2x = 3 \\Rightarrow x=1.5$.", 15, 'medium'),
            generateQuestion("Value of $\\log_2 0.5$?", ["-1", "1", "0", "0.5"], 0, "$2^{-1} = 1/2$.", 15, 'medium'),
            generateQuestion("If $\\log_x 64 = 3$, $x = $?", ["4", "8", "16", "2"], 0, "$x^3 = 64 \\Rightarrow x=4$.", 15, 'medium'),
            generateQuestion("Simplify $\\ln(1/e)$.", ["-1", "1", "0", "$e$"], 0, "$\\ln(e^{-1}) = -1$.", 15, 'medium'),
            generateQuestion("Find $x$ if $2^x = 10$.", ["$x = \\log_2 10$", "$x = 5$", "$x = \\sqrt{10}$", "$x = 2.5$"], 0, "Definition of log.", 15, 'medium'),
            generateQuestion("Solve $\\log(2x) = \\log(x+3)$.", ["3", "1", "0", "No solution"], 0, "$2x = x+3 \\Rightarrow x=3$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve $\\log_2 x + \\log_2 (x-2) = 3$.", ["4", "2", "-2", "8"], 0, "$\\log_2(x^2-2x)=3 \\Rightarrow x^2-2x-8=0 \\Rightarrow (x-4)(x+2)=0$. Reject $x=-2$.", 20, 'hard'),
            generateQuestion("Solve $(\\ln x)^2 = \\ln(x^2)$.", ["$1, e^2$", "e", "$1, e$", "No solution"], 0, "$(\\ln x)^2 = 2\\ln x \\Rightarrow \\ln x(\\ln x - 2) = 0 \\Rightarrow \\ln x=0, 2 \\Rightarrow x=1, e^2$.", 20, 'hard'),
            generateQuestion("Solve $3^{x+1} = 2^x$.", ["$x = \\frac{\\ln 3}{\\ln(2/3)}$", "$x = \\ln(2/3)$", "$x = 3$", "$x = 2$"], 0, "$(x+1)\\ln 3 = x\\ln 2 \\Rightarrow x(\\ln 3 - \\ln 2) = -\\ln 3 \\Rightarrow x = \\frac{\\ln 3}{\\ln(2/3)}$.", 20, 'hard'),
            generateQuestion("Solve $\\log_x 3 = \\log_3 x$.", ["3, 1/3", "3", "9", "1"], 0, "$1/\\log_3 x = \\log_3 x \\Rightarrow (\\log_3 x)^2 = 1$.", 20, 'hard'),
            generateQuestion("Solve $e^{2x} - 4e^x + 3 = 0$.", ["$\\ln 1, \\ln 3$", "1, 3", "0", "e"], 0, "Let $u=e^x$. $u^2-4u+3=0 \\Rightarrow (u-1)(u-3)=0 \\Rightarrow e^x=1$ or $e^x=3$.", 20, 'hard'),
            generateQuestion("Find $x$ in $\\ln(x-1) + \\ln(x+1) = \\ln 3$.", ["$\\sqrt{4} = 2$", "2", "3", "No solution"], 0, "$\\ln(x^2-1) = \\ln 3 \\Rightarrow x^2=4 \\Rightarrow x=2$. (Reject -2)", 20, 'hard'),
            generateQuestion("Solve $2^x \\times 3^x = 36$.", ["2", "3", "log 6", "1"], 0, "$6^x = 36 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("If $a^b = c^d$, then $b \\ln a = $?", ["$d \\ln c$", "$\\ln(c+d)$", "$d/c$", "$a/b$"], 0, "Power law.", 20, 'hard'),
            generateQuestion("[Interleaved] Coefficient of $x^n$ in $(1+x)^n$?", ["1", "n", "0", "n!"], 0, "Binomial link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Value of $\\log_2 8$?", ["3", "4", "2", "8"], 0, "$2^3 = 8$.", 10, 'easy'),
            generateQuestion("Value of $\\log_3 9$?", ["2", "3", "1", "9"], 0, "$3^2 = 9$.", 10, 'easy'),
            generateQuestion("Value of $\\log_5 1$?", ["0", "1", "5", "Undefined"], 0, "log(1) is always 0.", 10, 'easy'),
            generateQuestion("Log Law: $\\log(A/B) = $?", ["$\\log A - \\log B$", "$\\log A / \\log B$", "$\\log A + \\log B$", "$\\log(A-B)$"], 0, "Quotient to difference.", 10, 'easy'),
            generateQuestion("Log Law: $\\log(A^k) = $?", ["$k \\log A$", "$\\log(kA)$", "$(\\log A)^k$", "$k^A$"], 0, "Power to coefficient.", 10, 'easy'),
            generateQuestion("Base of natural logarithm $\\ln$?", ["e", "10", "2", "1"], 0, "Euler's number.", 10, 'easy'),
            generateQuestion("Base of common logarithm $\\log$?", ["10", "e", "2", "1"], 0, "Standard base.", 10, 'easy'),
            generateQuestion("If $10^x = 1000$, $x = $?", ["3", "2", "4", "10"], 0, "$10^3 = 1000$.", 10, 'easy'),
            generateQuestion("$\\ln (e^2) = $?", ["2", "e", "1", "0"], 0, "Property of inverse functions.", 10, 'easy'),
            generateQuestion("Is $\\log(0)$ defined?", ["No", "Yes", "Only for base 0", "Zero"], 0, "Args must be positive.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $2^x = 16$.", ["4", "8", "2", "16"], 0, "$2^4 = 16$.", 15, 'medium'),
            generateQuestion("Solve $\\log_3 x = 2$.", ["9", "6", "3", "1"], 0, "$3^2 = 9$.", 15, 'medium'),
            generateQuestion("Simplify $\\log 4 + \\log 25$.", ["2", "100", "29", "1"], 0, "$\\log(100) = 2$.", 15, 'medium'),
            generateQuestion("Simplify $\\log 50 - \\log 5$.", ["1", "10", "45", "0"], 0, "$\\log(10) = 1$.", 15, 'medium'),
            generateQuestion("Simplify $3 \\log 2$.", ["$\\log 8$", "$\\log 6$", "8", "6"], 0, "$2^3 = 8$.", 15, 'medium'),
            generateQuestion("Value of $\\ln(1)$?", ["0", "1", "e", "-1"], 0, "$e^0 = 1$.", 15, 'medium'),
            generateQuestion("Solve $e^x = 1$.", ["0", "1", "e", "No solution"], 0, "Exp 0 is 1.", 15, 'medium'),
            generateQuestion("If $\\log_4 x = 1.5$, $x = $?", ["8", "6", "4", "16"], 0, "$4^{1.5} = (\\sqrt{4})^3 = 2^3 = 8$.", 15, 'medium'),
            generateQuestion("Simplify $\\log_2 (1/8)$.", ["-3", "3", "0.125", "4"], 0, "$2^{-3} = 1/8$.", 15, 'medium'),
            generateQuestion("Solve $\\ln x = -1$.", ["$1/e$", "0", "1", "-e"], 0, "$x = e^{-1}$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve $\\log_3 x + \\log_3 (x-6) = 3$.", ["9", "3", "-3", "27"], 0, "$x^2-6x=27 \\Rightarrow x^2-6x-27=0 \\Rightarrow (x-9)(x+3)=0$. Reject -3.", 20, 'hard'),
            generateQuestion("Solve $e^{2x} = 9$.", ["$\\ln 3$", "$\\ln 9$", "$1.5$", "3"], 0, "$2x = \\ln 9 = 2 \\ln 3 \\Rightarrow x = \\ln 3$.", 20, 'hard'),
            generateQuestion("Solve $5^x = 7$.", ["$\\frac{\\ln 7}{\\ln 5}$", "$\\ln(7/5)$", "$1.4$", "log 7"], 0, "Take ln of both sides.", 20, 'hard'),
            generateQuestion("Solve $(\\log x)^2 - \\log x = 2$.", ["100, 0.1", "10, 0.1", "100, 10", "2, -1"], 0, "$(u-2)(u+1)=0 \\Rightarrow u=2, -1 \\Rightarrow x=100, 0.1$.", 20, 'hard'),
            generateQuestion("Solve $\\log_x 4 = 2$.", ["2", "4", "16", "1.414"], 0, "$x^2=4 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Solve $e^x + e^{-x} = 2$.", ["0", "1", "e", "-1"], 0, "$u + 1/u = 2 \\Rightarrow u^2-2u+1=0 \\Rightarrow (u-1)^2=0 \\Rightarrow e^x=1$.", 20, 'hard'),
            generateQuestion("Find $x$ if $2^{x+1} = 5^x$.", ["$x = \\frac{\\ln 2}{\\ln 2.5}$", "$x = \\ln 2.5$", "$x = 2$", "$1$"], 0, "$(x+1)\\ln 2 = x \\ln 5 \\Rightarrow x(\\ln 5 - \\ln 2) = \\ln 2$.", 20, 'hard'),
            generateQuestion("Simplify $\\log_a b \\times \\log_b c$.", ["$\\log_a c$", "$\\log_b (ac)$", "1", "$\\log_{ab} c$"], 0, "Change of base product rule.", 20, 'hard'),
            generateQuestion("Solve $\\log x = \\ln x$ (if bases differ).", ["1", "e", "10", "0"], 0, "Only $\\log 1 = \\ln 1 = 0$.", 20, 'hard'),
            generateQuestion("[Interleaved] Remainder of $P(x)$ divided by $(x-a)$?", ["$P(a)$", "$P(-a)$", "0", "a"], 0, "Polynomial link.", 10, 'expert')
        ]
    },
    'am-geom-trig': {
        learning: [
            // Easy (1-10)
            generateQuestion("Identity: $\\tan x$ equivalent?", ["$\\sin x / \\cos x$", "$\\cos x / \\sin x$", "$1/\\sin x$", "$\\sin x$"], 0, "Basic tan definition.", 10, 'easy'),
            generateQuestion("Identity: $\\sin^2 x + \\cos^2 x = ?$", ["1", "0", "2", "$\\tan x$"], 0, "Pythagorean identity.", 10, 'easy'),
            generateQuestion("Identity: $1 + \\tan^2 x = ?$", ["$\\sec^2 x$", "$\\csc^2 x$", "1", "$\\cot^2 x$"], 0, "Second Pythagorean identity.", 10, 'easy'),
            generateQuestion("Identity: $1 + \\cot^2 x = ?$", ["$\\csc^2 x$", "$\\sec^2 x$", "0", "1"], 0, "Third Pythagorean identity.", 10, 'easy'),
            generateQuestion("Reciprocal: $1/\\sin x = ?$", ["$\\csc x$", "$\\sec x$", "$\\cot x$", "$\\cos x$"], 0, "Cosecant is inverse sine.", 10, 'easy'),
            generateQuestion("Reciprocal: $1/\\cos x = ?$", ["$\\sec x$", "$\\csc x$", "$\\tan x$", "$\\sin x$"], 0, "Secant is inverse cosine.", 10, 'easy'),
            generateQuestion("Sine of $90^\\circ$?", ["1", "0", "0.5", "$\\infty$"], 0, "Max value of sine wave.", 10, 'easy'),
            generateQuestion("Cosine of $90^\\circ$?", ["0", "1", "-1", "0.5"], 0, "Min value of positive cos wave.", 10, 'easy'),
            generateQuestion("Tangent of $45^\\circ$?", ["1", "$\\sqrt{3}$", "$\\sqrt{3}/3$", "0"], 0, "Opposite equals adjacent.", 10, 'easy'),
            generateQuestion("Sign of Sine in 2nd Quadrant?", ["Positive", "Negative", "Zero"], 0, "ASTC rule: Sine is pos in Q2.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Double Angle: $\\sin 2x = ?$", ["$2\\sin x \\cos x$", "$\\cos^2 x - \\sin^2 x$", "$\\sin x$", "$2\\sin x$"], 0, "Sin double angle formula.", 15, 'medium'),
            generateQuestion("Double Angle: $\\cos 2x$ using only cos?", ["$2\\cos^2 x - 1$", "$1 - 2\\sin^2 x$", "$\\cos^2 x - \\sin^2 x$", "$2\\cos x$"], 0, "Cos double angle version 2.", 15, 'medium'),
            generateQuestion("Double Angle: $\\cos 2x$ using only sin?", ["$1 - 2\\sin^2 x$", "$2\\cos^2 x - 1$", "$2\\sin^2 x - 1$", "$2\\sin x$"], 0, "Cos double angle version 3.", 15, 'medium'),
            generateQuestion("Solve $\\sin x = 0.5$ for $0 < x < 180$.", ["$30, 150$", "$30, 210$", "$30$", "150"], 0, "$x=30$ and $180-30 = 150$.", 15, 'medium'),
            generateQuestion("Period of $\\sin(4x)$?", ["$90^\\circ$", "$360^\\circ$", "$180^\\circ$", "$45^\\circ$"], 0, "$360/4 = 90$.", 15, 'medium'),
            generateQuestion("Amplitude of $3\\cos(x) + 2$?", ["3", "2", "5", "1"], 0, "Coefficient of cos.", 15, 'medium'),
            generateQuestion("Maximum value of $5\\sin x - 1$?", ["4", "5", "6", "-1"], 0, "$5 - 1 = 4$.", 15, 'medium'),
            generateQuestion("R-formula: $3\\sin x + 4\\cos x = R\\sin(x+\\alpha)$. Find $R$.", ["5", "7", "1", "25"], 0, "$R = \\sqrt{3^2 + 4^2} = 5$.", 15, 'medium'),
            generateQuestion("Find $\\tan \\alpha$ for previous question.", ["4/3", "3/4", "12", "0.5"], 0, "$\\tan \\alpha = 4/3$ (coeff of cos / coeff of sin).", 15, 'medium'),
            generateQuestion("Solve $\\cos x = -1$ for $0 \\le x \\le 360$.", ["$180$", "$0, 360$", "$90, 270$", "0"], 0, "Lowest point of cos wave.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Identify $\\cos(A+B)$ formula.", ["$\\cos A \\cos B - \\sin A \\sin B$", "$\\cos A \\cos B + \\sin A \\sin B$", "$\\sin A \\cos B + \\cos A \\sin B$", "..."], 0, "Addition formula for Cosine.", 20, 'hard'),
            generateQuestion("Identify $\\sin(A-B)$ formula.", ["$\\sin A \\cos B - \cos A \\sin B$", "$\\sin A \\sin B$", "...", "..."], 0, "Addition formula for Sine.", 20, 'hard'),
            generateQuestion("Express $\\tan 2x$ in terms of $\\tan x$.", ["$\\frac{2\\tan x}{1-\\tan^2 x}$", "$\\frac{2\\tan x}{1+\\tan^2 x}$", "$2\\tan x$", "$\\tan^2 x$"], 0, "Tan double angle.", 20, 'hard'),
            generateQuestion("Simplify $\\sin(x) \\cot(x)$.", ["$\\cos x$", "$\\sin^2 x$", "$\\tan x$", "1"], 0, "$\\sin x \\times (\\cos x / \\sin x) = \\cos x$.", 20, 'hard'),
            generateQuestion("Solve $2\\cos^2 x + \sin x - 1 = 0$ for $0 < x < 360$.", ["$90, 210, 330$", "$90, 180$", "$210, 330$", "270"], 0, "$2(1-\\sin^2 x) + \\sin x - 1 = 0 \\Rightarrow 2\\sin^2 x - \\sin x - 1 = 0 \\Rightarrow (2\\sin x + 1)(\\sin x - 1) = 0$.", 20, 'hard'),
            generateQuestion("Find EXACT value of $\\sin(75^\\circ)$.", ["$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}}{2}$", "0.5"], 0, "$\\sin(45+30) = \\sin 45 \\cos 30 + \\cos 45 \\sin 30$.", 20, 'hard'),
            generateQuestion("Find EXACT value of $\\cos(75^\\circ)$.", ["$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{1}{2}$", "0"], 0, "$\\cos(45+30) = \\cos 45 \\cos 30 - \\sin 45 \\sin 30$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}$.", ["$2\\csc x$", "$2\\sec x$", "$2\\tan x$", "$2$"], 0, "$\\frac{\\sin^2 x + 1 + 2\\cos x + \\cos^2 x}{\\sin x(1+\\cos x)} = \\frac{2+2\\cos x}{\\sin x(1+\\cos x)} = 2/\\sin x$.", 20, 'hard'),
            generateQuestion("Period of $|\\tan x|$?", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "None"], 0, "Absolute tan matches tan period.", 20, 'hard'),
            generateQuestion("Solve $3\\cos x + 4\\sin x = 5$. Find smallest positive $x$.", ["$53.1^\\circ$", "$36.9^\\circ$", "$90^\\circ$", "$0^\\circ$"], 0, "$5\\sin(x+36.9) = 5 \\Rightarrow x+36.9 = 90 \\Rightarrow x=53.1$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which log property is $\\log(AB)$?", ["$\\log A + \\log B$", "$\\log A - \\log B$", "$B\\log A$", "AB"], 0, "Expert algebra link.", 10, 'expert')
        ],
        testing: [
            // Extra tests for Trigo
            generateQuestion("Reflex angle for $x=200^\\circ$?", ["$160^\\circ$", "$200^\\circ$", "$20^\\circ$", "$340^\\circ$"], 0, "Actually 200 is already reflex (>180).", 10, 'easy'),
            generateQuestion("Secant is reciprocal of?", ["Cosine", "Sine", "Tangent", "None"], 0, "Core vocab.", 10, 'easy'),
            generateQuestion("Formula for area of triangle with 2 sides a, b and angle C?", ["$0.5ab \\sin C$", "$0.5ab \\cos C$", "ab", "$0.5bh$"], 0, "Trig area formula.", 10, 'easy'),
            generateQuestion("Identify Sine rule.", ["$a/\\sin A = b/\\sin B$", "$c^2 = a^2+b^2$", "Both", "None"], 0, "Ratio logic.", 10, 'easy'),
            generateQuestion("Identify Cosine rule.", ["$a^2 = b^2+c^2 - 2bc\\cos A$", "...", "...", "..."], 0, "Extension of Pythagoras.", 10, 'easy'),
            generateQuestion("$\sin(-\\theta) = $?", ["$-\\sin \\theta$", "$\\sin \\theta$", "$\cos \\theta$", "0"], 0, "Sine is odd function.", 10, 'easy'),
            generateQuestion("$\cos(-\\theta) = $?", ["$\\cos \\theta$", "$-\\cos \\theta$", "1", "0"], 0, "Cosine is even function.", 10, 'easy'),
            generateQuestion("$\sin(180-\\theta) = $?", ["$\\sin \\theta$", "$-\\sin \\theta$", "$\\cos \\theta$", "0"], 0, "Quadrant 2 property.", 10, 'easy'),
            generateQuestion("$\cos(180-\\theta) = $?", ["$-\\cos \\theta$", "$\\cos \\theta$", "0", "1"], 0, "Quadrant 2 cosine is neg.", 10, 'easy'),
            generateQuestion("$\\tan(180-\\theta) = $?", ["$-\\tan \\theta$", "$\\tan \\theta$", "1", "0"], 0, "Quadrant 2 tan is neg.", 10, 'easy')
        ]
    },
    'am-geom-coord': {
        learning: [
            // Easy (1-10)
            generateQuestion("Gradient of line passing through $(1,2)$ and $(3,8)$?", ["3", "2", "6", "4"], 0, "**Lesson**: $m = (8-2)/(3-1) = 6/2 = 3$.", 10, 'easy'),
            generateQuestion("Distance between $(0,0)$ and $(3,4)$?", ["5", "7", "$\\sqrt{7}$", "25"], 0, "**Lesson**: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.", 10, 'easy'),
            generateQuestion("Midpoint of $(2,10)$ and $(8,4)$?", ["(5,7)", "(10,14)", "(3,3)", "(6,-6)"], 0, "**Lesson**: $((2+8)/2, (10+4)/2) = (5,7)$.", 10, 'easy'),
            generateQuestion("If line $y = 2x + 1$ is parallel to line $L$, gradient of $L$ is:", ["2", "-1/2", "1", "0"], 0, "Parallel lines have identical gradients.", 10, 'easy'),
            generateQuestion("If line has gradient -4, its perpendicular buddy has:", ["1/4", "4", "-1/4", "-4"], 0, "Negative reciprocal.", 10, 'easy'),
            generateQuestion("Equation of line with gradient 2 passing through origin?", ["$y=2x$", "$y=x+2$", "$y=2$", "$x=2y$"], 0, "$y-0 = 2(x-0) \Rightarrow y=2x$.", 10, 'easy'),
            generateQuestion("Intercept on y-axis for $2x + 3y = 12$?", ["4", "6", "12", "0"], 0, "Put $x=0 \Rightarrow 3y=12 \Rightarrow y=4$.", 10, 'easy'),
            generateQuestion("Is $(1,1)$ on the line $y=x$?", ["Yes", "No"], 0, "$1=1$ is true.", 10, 'easy'),
            generateQuestion("Radius of $x^2 + y^2 = 49$?", ["7", "49", "14", "3.5"], 0, "$\\sqrt{49} = 7$.", 10, 'easy'),
            generateQuestion("Center of circle $(x-3)^2 + (y+5)^2 = 100$?", ["(3, -5)", "(-3, 5)", "(3, 5)", "(30, 50)"], 0, "Extract values from $(x-a)^2 + (y-b)^2$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Calculate area of triangle with vertices $(0,0), (4,0), (0,3)$ using Shoelace.", ["6", "12", "24", "7"], 0, "$0.5 |(0+12+0) - (0+0+0)| = 6$.", 15, 'medium'),
            generateQuestion("Find equation of perpendicular bisector of $(1,1)$ and $(3,3)$.", ["$y = -x + 4$", "$y = x$", "$y = -x$", "$x + y = 2$"], 0, "Midpoint $(2,2)$, grad=1, perp grad=-1. $y-2 = -1(x-2) \Rightarrow y = -x+4$.", 15, 'medium'),
            generateQuestion("Points $A(1,1), B(2,k), C(4,7)$ are collinear. Find k.", ["3", "2", "4", "5"], 0, "Grad AB = Grad BC. $(k-1)/(2-1) = (7-k)/(4-2) \Rightarrow k-1 = (7-k)/2 \Rightarrow 2k-2 = 7-k \Rightarrow 3k=9 \Rightarrow k=3$.", 15, 'medium'),
            generateQuestion("Circle $x^2 + y^2 - 4x + 6y - 12 = 0$. Center?", ["(2, -3)", "(-2, 3)", "(4, -6)", "(-4, 6)"], 0, "Completing square for x and y.", 15, 'medium'),
            generateQuestion("Radius of previous circle?", ["5", "25", "$\\sqrt{12}$", "7"], 0, "$(x-2)^2-4 + (y+3)^2-9 - 12 = 0 \Rightarrow r^2 = 25 \Rightarrow 5$.", 15, 'medium'),
            generateQuestion("Does $(5,5)$ lie on circle $(x-2)^2 + (y-2)^2 = 18$?", ["Yes", "No"], 0, "$(5-2)^2 + (5-2)^2 = 9+9 = 18$. Match!", 15, 'medium'),
            generateQuestion("Find point $P$ dividing $A(1,2)$ and $B(4,8)$ in ratio 1:2.", ["(2,4)", "(3,6)", "(2.5, 5)", "(1.5, 3)"], 0, "Formula $((1 \cdot 4 + 2 \cdot 1)/3, (1 \cdot 8 + 2 \cdot 2)/3) = (6/3, 12/3) = (2,4)$.", 15, 'medium'),
            generateQuestion("Find 4th vertex D of parallelogram ABCD: A(0,0), B(4,0), C(5,3).", ["(1,3)", "(9,3)", "(4,3)", "(6,3)"], 0, "Vector AB = Vector DC. $(4,0) = (5-x, 3-y) \Rightarrow x=1, y=3$.", 15, 'medium'),
            generateQuestion("Intersection of $y=2x$ and $x+y=6$?", ["(2,4)", "(4,2)", "(1,2)", "(3,3)"], 0, "$x+2x=6 \Rightarrow 3x=6 \Rightarrow x=2$.", 15, 'medium'),
            generateQuestion("Gradient of normal to $y=x^2$ at $(2,4)$?", ["-1/4", "4", "1/4", "-4"], 0, "Tangent grad is $dy/dx = 2x = 4$. Normal grad is -1/4.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find eq of tangent to $x^2+y^2=25$ at $(3,4)$.", ["$3x+4y=25$", "$4x-3y=25$", "$3x-4y=25$", "$y-4 = 3/4(x-3)$"], 0, "Radius grad = 4/3. Tangent grad = -3/4. $y-4 = -3/4(x-3) \Rightarrow 4y-16 = -3x+9 \Rightarrow 3x+4y=25$.", 20, 'hard'),
            generateQuestion("Circle passes through $(0,0), (4,0), (0,6)$. Find its center.", ["(2,3)", "(3,2)", "(4,6)", "(0,0)"], 0, "Right angle at origin meant $(4,0)$ and $(0,6)$ are ends of diameter. Center is midpoint $(2,3)$.", 20, 'hard'),
            generateQuestion("Find value of k if $y=x+k$ is tangent to $x^2+y^2=8$.", ["4 or -4", "2", "8", "16"], 0, "$x^2+(x+k)^2=8 \Rightarrow 2x^2+2kx+k^2-8=0$. $\Delta = 4k^2 - 8(k^2-8) = 0 \Rightarrow -4k^2+64=0 \Rightarrow k^2=16$.", 20, 'hard'),
            generateQuestion("Distance from $(0,0)$ to line $3x+4y=10$?", ["2", "10", "5", "1"], 0, "$|3(0)+4(0)-10| / \sqrt{3^2+4^2} = 10/5 = 2$.", 20, 'hard'),
            generateQuestion("Intersection points of line $y=x-1$ and $x^2+y^2=25$.", ["(4,3) and (-3,-4)", "(3,2) and (0,-1)", "(5,4) and (-4,-5)", "None"], 0, "$x^2+(x-1)^2=25 \Rightarrow 2x^2-2x-24=0 \Rightarrow x^2-x-12=0 \Rightarrow (x-4)(x+3)=0$. Pairs (4,3), (-3,-4).", 20, 'hard'),
            generateQuestion("Equation of circle with center $(2,3)$ touching x-axis?", ["$(x-2)^2 + (y-3)^2 = 9$", "$(x-2)^2 + (y-3)^2 = 4$", "... = 13", "... = 5"], 0, "Radius must be vertical distance to axis = 3.", 20, 'hard'),
            generateQuestion("Find k if area of triangle $(0,0), (2,0), (1,k)$ is 5.", ["5 or -5", "10", "2.5", "1"], 0, "$0.5 |2k| = 5 \Rightarrow |k|=5$.", 20, 'hard'),
            generateQuestion("Normal to $(x-1)^2 + (y-2)^2 = 5$ at $(2,4)$ always passes through:", ["(1,2)", "(0,0)", "(2,4)", "(1,1)"], 0, "Normal to any circle always passes through the center.", 20, 'hard'),
            generateQuestion("Eq of line thru $(1,2)$ making angle $45^\circ$ with x-axis?", ["$y=x+1$", "$y=2x$", "$y=x+2$", "$y=-x+3$"], 0, "$m = \\tan 45^\circ = 1$. $y-2=1(x-1) \Rightarrow y=x+1$.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+1)^2$.", ["$x^2+2x+1$", "$x^2+1$", "$x^2+2x-1$", "2x+2"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Extra tests for Coordinate Geometry
            generateQuestion("Gradient of $y = 5x - 2$?", ["5", "-2", "0", "1/5"], 0, "y = mx + c.", 10, 'easy'),
            generateQuestion("Midpoint of $(0,0)$ and $(10,10)$?", ["(5,5)", "(0,10)", "(10,0)", "(7,7)"], 0, "Average them.", 10, 'easy'),
            generateQuestion("Equation of x-axis?", ["y=0", "x=0", "y=x", "x=1"], 0, "No vertical height.", 10, 'easy'),
            generateQuestion("Distance of $(0,3)$ to $(4,0)$?", ["5", "7", "1", "12"], 0, "Pythagoras.", 10, 'easy'),
            generateQuestion("Grad of line perpendicular to $y=x$?", ["-1", "1", "0", "Infinity"], 0, "Negative reciprocal.", 10, 'easy'),
            generateQuestion("Center of $x^2+y^2=1$?", ["(0,0)", "(1,1)", "(1,0)", "(0,1)"], 0, "Origin.", 10, 'easy'),
            generateQuestion("Equation of circle radius 2, center (0,0)?", ["$x^2+y^2=4$", "$x^2+y^2=2$", "$x+y=2$", "$x^2-y^2=4$"], 0, "Standard form.", 10, 'easy'),
            generateQuestion("Y-intercept of $y=mx+c$?", ["c", "m", "x", "y"], 0, "Definition.", 10, 'easy'),
            generateQuestion("Value of $r^2$ for $(x-1)^2+(y+1)^2=25$?", ["25", "5", "50", "1"], 0, "Right side of equation.", 10, 'easy'),
            generateQuestion("Gradient of line $x+y=5$?", ["-1", "1", "5", "0"], 0, "$y = -x + 5$.", 10, 'easy'),
            generateQuestion("Eq of line through $(2,3)$ parallel to $y=2x$.", ["$y=2x-1$", "$y=2x+3$", "$y=x+1$", "$y=2x$"], 0, "$y-3 = 2(x-2) \Rightarrow y=2x-1$.", 15, 'medium'),
            generateQuestion("Shoelace area $(1,1), (3,1), (1,4)$?", ["3", "6", "1.5", "4"], 0, "Base=2, Height=3. Area = 3.", 15, 'medium'),
            generateQuestion("Center of $x^2+y^2+2x-4y=0$?", ["(-1, 2)", "(1, -2)", "(2, -4)", "(-2, 4)"], 0, "Complete square.", 15, 'medium'),
            generateQuestion("Radius of $x^2+y^2-6x=0$?", ["3", "9", "6", "36"], 0, "$(x-3)^2 + y^2 = 9$.", 15, 'medium'),
            generateQuestion("Intersection of $y=3$ and $y=x^2-1$?", ["(2,3), (-2,3)", "(3,8), (3,0)", "(2,3)", "None"], 0, "$x^2=4 \Rightarrow x=2, -2$.", 15, 'medium'),
            generateQuestion("Find grad given intercepts at x=2, y=4.", ["-2", "2", "0.5", "-0.5"], 0, "$(4-0)/(0-2) = -2$.", 15, 'medium'),
            generateQuestion("Bisector of $(0,0)$ and $(0,4)$?", ["y=2", "x=2", "y=x", "y=0"], 0, "Horizontal cut at height 2.", 15, 'medium'),
            generateQuestion("Perp grad to $3x-2y=6$?", ["-2/3", "3/2", "2/3", "-3/2"], 0, "Original grad=3/2. Perp=-2/3.", 15, 'medium'),
            generateQuestion("Distance from origin to $(a,b)$?", ["$\\sqrt{a^2+b^2}$", "$a+b$", "$ab$", "$a^2+b^2$"], 0, "Pythagoras.", 15, 'medium'),
            generateQuestion("Shoelace formula starts and ends with?", ["Same point", "Different points", "Origin", "1/2"], 0, "Cycle back to start to close the shape.", 15, 'medium'),
            generateQuestion("Equation of tangent to $x^2+y^2=10$ at $(1,3)$.", ["$x+3y=10$", "$3x-y=0$", "$x-3y=10$", "$3x+y=10$"], 0, "Grad r=3, Grad t=-1/3. $y-3 = -1/3(x-1) \Rightarrow 3y-9 = -x+1$.", 20, 'hard'),
            generateQuestion("Find center of circle thru $(1,2), (1,6), (3,2)$. Right triangle!", ["(2,4)", "(1,4)", "(2,2)", "(1,2)"], 0, "Hypotenuse ends (1,6) and (3,2). Midpoint is (2,4).", 20, 'hard'),
            generateQuestion("Value of k if $y=4$ is tangent to $(x-1)^2+(y-k)^2=9$.", ["7 or 1", "4", "3", "None"], 0, "Radius is 3. Center height k must be 3 away from 4.", 20, 'hard'),
            generateQuestion("Line thru $(2,5)$ perp to $y=2x$. Points on it?", ["(4,4)", "(0,6)", "(2,5)", "All listed"], 3, "(Wait, let's verify. $y-5 = -1/2(x-2) \Rightarrow y = -0.5x + 6$. (2,5) is on it. (4,4) is on it. (0,6) is on it. Choice 3 is 'All listed' if I add it). Let's use (0,6).", 2, 'hard'),
            generateQuestion("Points on $y = -0.5x + 6$?", ["(0,6)", "(2,5)", "(4,4)", "None"], 0, "Simple check.", 20, 'hard'),
            generateQuestion("Area of triangle $(0,4), (4,0), (0,0)$?", ["8", "16", "4", "12"], 0, "0.5 * 4 * 4.", 20, 'hard'),
            generateQuestion("Find point on x-axis equidistant from $(1,2)$ and $(3,4)$.", ["6.5", "5", "4", "0"], 0, "$(x-1)^2+4 = (x-3)^2+16 \Rightarrow x^2-2x+5 = x^2-6x+25 \Rightarrow 4x=20 \Rightarrow 5$.", 20, 'hard'),
            generateQuestion("Is long division and coordinate geometry related?", ["Generally No", "Yes", "Always", "Only for circles"], 0, "Different fields usually.", 10, 'expert'),
            generateQuestion("[Interleaved] Solve $\\ln x = 0$.", ["1", "0", "e", "Undefined"], 0, "Log link.", 10, 'expert')
        ]
    },
    'am-geom-proofs': {
        learning: [
            // Easy (1-10)
            generateQuestion("Angles in the same segment of a circle are:", ["Equal", "Supplementary", "90 degrees", "Proportional"], 0, "**Lesson**: All angles standing on the same arc at the circumference are identical.", 10, 'easy'),
            generateQuestion("Angle in a semi-circle is always:", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "Variable"], 0, "**Lesson**: Thales' Theorem! The diameter subtends a right angle.", 10, 'easy'),
            generateQuestion("Opposite angles in a cyclic quadrilateral are:", ["Supplementary ($180^\\circ$)", "Equal", "Complementary", "Zero"], 0, "They add up to a straight line.", 10, 'easy'),
            generateQuestion("Angle at center is ___ the angle at circumference.", ["Double", "Half", "Equal", "Square of"], 0, "Standard circle theorem.", 10, 'easy'),
            generateQuestion("A chord and its perpendicular from center. The chord is:", ["Bisected", "Parallel", "Doubled", "Vanished"], 0, "Symmetry splits it.", 10, 'easy'),
            generateQuestion("Exterior angle of cyclic quad is equal to:", ["Interior opposite angle", "Complementary angle", "180", "90"], 0, "Straight line logic + cyclic rule.", 10, 'easy'),
            generateQuestion("Two tangents from an external point to a circle are:", ["Equal in length", "Perpendicular", "Parallel", "Ratios"], 0, "Forming congruent triangles.", 10, 'easy'),
            generateQuestion("Tangent-Radius angle is:", ["$90^\circ$", "$0^\circ$", "$180^\circ$", "$45^\circ$"], 0, "Perpendicularity.", 10, 'easy'),
            generateQuestion("The line joining centers of two circles that touch is:", ["Collinear with touch point", "Parallel", "Perpendicular", "Square"], 0, "Passes through point of contact.", 10, 'easy'),
            generateQuestion("Total angle in a full circle?", ["$360^\circ$", "$180^\circ$", "$2\\pi$ rad", "Both 360 and 2pi"], 3, "Units vary.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Alternate Segment Theorem relates angle between tangent/chord to:", ["Angle in alt segment", "Angle at center", "90 degrees", "Angle at tangent"], 0, "Mirrored angle.", 15, 'medium'),
            generateQuestion("SAS property for triangle congruence stands for:", ["Side-Angle-Side", "Side-Side-Side", "Angle-Angle-Angle", "Side-Area-Side"], 0, "Order matters.", 15, 'medium'),
            generateQuestion("If two triangles are similar (AAA), their side lengths are:", ["In same ratio", "Equal", "Sum to 180", "Parallel"], 0, "Proportional expansion/contraction.", 15, 'medium'),
            generateQuestion("Tangent $OT$ and chord $AB$. If $O$ is center, triangle $OAB$ is always:", ["Isosceles", "Equilateral", "Right-angled", "Scalene"], 0, "$OA=OB$ (radii).", 15, 'medium'),
            generateQuestion("Intersecting chord theorem: $AP \cdot PB = $?", ["$CP \cdot PD$", "$CP + PD$", "1", "0"], 0, "Product of segments is constant for intersecting chords.", 15, 'medium'),
            generateQuestion("Angle subtended by minor arc vs major arc at same points sum to:", ["$180^\circ$", "$360^\circ$", "$90^\circ$", "Variable"], 0, "Cyclic quad logic.", 15, 'medium'),
            generateQuestion("Can AAA prove congruence?", ["No", "Yes"], 0, "Triangles can be different sizes.", 15, 'medium'),
            generateQuestion("RHS congruence requires:", ["Right-angle, Hypotenuse, Side", "Radius, Height, Slope", "Rectangle, Height, Side", "None"], 0, "Specific to right triangles.", 15, 'medium'),
            generateQuestion("Area ratio of similar triangles is ___ of the side ratio.", ["Square", "Same", "Cube", "Half"], 0, "Area scales by $k^2$ if side scales by $k$.", 15, 'medium'),
            generateQuestion("Definition of a Chord?", ["Line joining 2 points on circle", "Radius", "Diameter only", "Tangent"], 0, "Basic component.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Prove PQ is tangent to circle if $\angle PQR = \angle QSR$. Which theorem?", ["Converse of Alt Segment Theorem", "Thales Theorem", "Tangent Chord Power", "Cyclic Quad Proof"], 0, "Working backwards from the similarity.", 20, 'hard'),
            generateQuestion("If $PA$ and $PB$ are tangents from $P$ to circle center $O$, then $PAOB$ is:", ["Cyclic quadrilateral", "Rectangle", "Rhombus", "Parallelogram"], 0, "Opposite angles $90+90=180$.", 20, 'hard'),
            generateQuestion("Intersecting Secants: $PA \cdot PB = PC \cdot PD$. P is ___.", ["Outside circle", "Inside circle", "On circle", "Center"], 0, "Secants from external point.", 20, 'hard'),
            generateQuestion("In triangle $ABC$, if $AB^2+BC^2=AC^2$, $\angle ABC$ is:", ["$90^\circ$", "$60^\circ$", "Obtuse", "Acute"], 0, "Converse of Pythagoras.", 20, 'hard'),
            generateQuestion("Angle between 2 chords $AB$ and $CD$ intersecting at $P$ inside circle is:", ["$0.5(\\text{Arc } AC + \\text{Arc } BD)$", "90", "Equal to arc", "Sum of arcs"], 0, "External angle of triangle proof.", 20, 'hard'),
            generateQuestion("Ptolemy's Theorem for cyclic quad $ABCD$: $AC \cdot BD = $?", ["$AB \cdot CD + BC \cdot AD$", "$AB+BC+CD+AD$", "Area", "1"], 0, "Magnificent identity for product of diagonals.", 20, 'hard'),
            generateQuestion("Simson's Line relates a point on circle to:", ["Feet of perpendiculars to sides", "Center", "Tangent", "Shoelace"], 0, "Advanced geometry property.", 20, 'hard'),
            generateQuestion("Condition for triangle side lengths 3, 4, x to exist?", ["$1 < x < 7$", "$x=5$", "$x<7$", "$x>1$"], 0, "Sum of two sides > Third side.", 20, 'hard'),
            generateQuestion("Euler's line passes through which 3 centers?", ["Centroid, Circumcenter, Orthocenter", "Incenter, Centroid, Circumcenter", "All 4", "Origin"], 0, "The heavenly straight line of a triangle.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2-1=0$.", ["1, -1", "1", "0", "No solution"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Extra tests for proofs
            generateQuestion("Angles on same segment are match?", ["Yes", "No"], 0, "Theorem.", 10, 'easy'),
            generateQuestion("Angle at center vs circumference ratio?", ["2:1", "1:1", "1:2", "3:1"], 0, "Center is double.", 10, 'easy'),
            generateQuestion("Cyclic quad opposite angle sum?", ["180", "360", "90", "0"], 0, "Supplementary.", 10, 'easy'),
            generateQuestion("Radius and tangent angle?", ["90", "0", "45", "180"], 0, "Perpendicular.", 10, 'easy'),
            generateQuestion("Tangent length from same point?", ["Equal", "Ratio 2:1", "Varied", "Sum to 10"], 0, "Equal lengths.", 10, 'easy'),
            generateQuestion("Angle in semicircle?", ["90", "180", "45", "60"], 0, "Right angle.", 10, 'easy'),
            generateQuestion("Bisect chord theorem needs:", ["Perp from center", "Parallel line", "Tangent", "Arc"], 0, "Radius-Chord property.", 10, 'easy'),
            generateQuestion("SSS congruence stands for?", ["Side-Side-Side", "Sum-Sum-Sum", "Secret", "None"], 0, "Standard.", 10, 'easy'),
            generateQuestion("Similar triangles have same angles?", ["Yes", "Angle size increases", "No", "Only 1 angle"], 0, "AAA implies similarity.", 10, 'easy'),
            generateQuestion("Sum of interior angles of triangle?", ["180", "360", "540", "90"], 0, "Constant.", 10, 'easy'),
            generateQuestion("Alt Segment Theorem relates to:", ["Tangent and Chord", "Two tangents", "Two chords", "Radius"], 0, "Specific combo.", 15, 'medium'),
            generateQuestion("Intersecting Chords segments product match?", ["Yes", "No", "Only for diameter", "Only for radius"], 0, "PA*PB = PC*PD.", 15, 'medium'),
            generateQuestion("RHS congruence applies to:", ["Right triangles", "Equilateral", "Scalene", "Isosceles only"], 0, "Hypotenuse constraint.", 15, 'medium'),
            generateQuestion("Congruent means:", ["Clones (Same everything)", "Similar", "Opposite", "Touching"], 0, "Identical size and shape.", 15, 'medium'),
            generateQuestion("Area ratio $A1/A2$ for side ratio $1:3$?", ["1:9", "1:3", "1:6", "1:27"], 0, "Square it.", 15, 'medium'),
            generateQuestion("Volume ratio $V1/V2$ for side ratio $1:2$?", ["1:8", "1:4", "1:2", "1:16"], 0, "Cube it.", 15, 'medium'),
            generateQuestion("Common Tangent lengths match between circles?", ["Often equal", "Never", "Always", "Zero"], 0, "Depends on setup but external tangents from a point always match.", 15, 'medium'),
            generateQuestion("Property of Incenter?", ["Equidistant from sides", "Equidistant from vertices", "On Euler line", "Outside"], 0, "Bisectors of angles.", 15, 'medium'),
            generateQuestion("Property of Circumcenter?", ["Equidistant from vertices", "Equidistant from sides", "Center of mass", "None"], 0, "Perp bisectors of sides.", 15, 'medium'),
            generateQuestion("Property of Centroid?", ["Medians intersection", "Heights intersection", "Angle bisectors", "Shoelace"], 0, "Center of gravity.", 15, 'medium'),
            generateQuestion("Orthocenter is where ___ meet.", ["Altitudes", "Medians", "Bisectors", "Tangents"], 0, "Hardest center to spot.", 20, 'hard'),
            generateQuestion("If $AB$ is diameter, any point $C$ on circle makes $ABC$:", ["Right angled", "Isosceles", "Equilateral", "Scalene always"], 0, "Thales theorem.", 20, 'hard'),
            generateQuestion("Ptolemy theorem applies to:", ["Cyclic Quadrilaterals", "Regular Pentagons", "Triangles", "Any shape"], 0, "Circle constraint.", 20, 'hard'),
            generateQuestion("Can two triangles be similar but not congruent?", ["Yes", "No"], 0, "Different scale.", 20, 'hard'),
            generateQuestion("Exterior angle of triangle equals:", ["Sum of 2 interior opposites", "180", "Interior adjacent", "90"], 0, "Tri-Theorem.", 20, 'hard'),
            generateQuestion("Angle between 2 tangents from $(0,10)$ to $x^2+y^2=25$?", ["$60^\\circ$", "$90^\\circ$", "$120^\\circ$", "$45^\\circ$"], 0, "Sin theta = 5/10 = 0.5. Theta=30. Total=60.", 20, 'hard'),
            generateQuestion("Sum of interior angles of n-sided polygon?", ["$(n-2)180$", "$n \\cdot 180$", "$360$", "Variable"], 0, "General formula.", 20, 'hard'),
            generateQuestion("Simson Line existence proof depends on:", ["Point on circumcircle", "Point at center", "Shoelace", "Algebra"], 0, "Geometric constellation.", 20, 'hard'),
            generateQuestion("Are circle proofs fun?", ["Fiercely Yes", "No", "Maybe", "Depends on k"], 0, "Subjective but encouraging.", 10, 'expert'),
            generateQuestion("[Interleaved] Gradient of $y=3x$?", ["3", "1/3", "0", "Infinity"], 0, "Coordinate link.", 10, 'expert')
        ]
    },
    'am-calc-diff': {
        learning: [
            // Easy (1-10)
            generateQuestion("Derivative of $x^n$ is:", ["$nx^{n-1}$", "$x^{n+1}$", "$nx^n$", "$n^x$"], 0, "**Lesson**: Bring power down, subtract 1 from exponent.", 10, 'easy'),
            generateQuestion("Derivative of $4x^3$?", ["$12x^2$", "$4x^2$", "$12x^4$", "$x^4$"], 0, "$4 \\times 3 = 12$.", 10, 'easy'),
            generateQuestion("Derivative of a constant (e.g., 7)?", ["0", "7", "1", "x"], 0, "Constants don't change, so rate is zero.", 10, 'easy'),
            generateQuestion("The notation $dy/dx$ represents:", ["Gradient of tangent", "Area", "Intercept", "Arc length"], 0, "Instantaneous rate of change.", 10, 'easy'),
            generateQuestion("Derivative of $2x + 5$?", ["2", "5", "x", "0"], 0, "Linear slope.", 10, 'easy'),
            generateQuestion("Second derivative notation?", ["$d^2y/dx^2$", "$dy^2/dx^2$", "$dy/dx \\times 2$", "$f''(x)$"], 0, "Standard notation.", 10, 'easy'),
            generateQuestion("Rule for differentiating $(u+v)$?", ["$u' + v'$", "$u'v'$", "$uv' + vu'$", "$u/v$"], 0, "Sum rule.", 10, 'easy'),
            generateQuestion("Which rule for $y = (3x+1)^2$?", ["Chain Rule", "Product Rule", "Quotient Rule", "Sum Rule"], 0, "Function within a function.", 10, 'easy'),
            generateQuestion("Stationary points occur when $dy/dx$ is:", ["0", "1", "Positive", "Negative"], 0, "Zero gradient at peaks and valleys.", 10, 'easy'),
            generateQuestion("Derivative of $1/x$?", ["$-x^{-2}$", "$x^{-2}$", "$\\ln x$", "1"], 0, "Write as $x^{-1}$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Product Rule: Derivative of $(uv)$?", ["$uv' + vu'$", "$u'v'$", "$uv' - vu'$", "$u' + v'$"], 0, "Standard rule.", 15, 'medium'),
            generateQuestion("Quotient Rule: Derivative of $(u/v)$?", ["$(vu' - uv')/v^2$", "$(uv' - vu')/v^2$", "$u'v - v'u$", "$u'/v'$"], 0, "Low d-High minus High d-Low.", 15, 'medium'),
            generateQuestion("Find stationary point of $y = x^2 - 4x + 5$.", ["(2, 1)", "(2, 0)", "(4, 5)", "(0, 5)"], 0, "$2x-4=0 \\Rightarrow x=2, y=4-8+5=1$.", 15, 'medium'),
            generateQuestion("Nature of stationary point for $y = x^2$ at origin?", ["Minimum", "Maximum", "Inflexion", "None"], 0, "$d^2y/dx^2 = 2 > 0$ (Minimum).", 15, 'medium'),
            generateQuestion("Eq of tangent to $y=x^2$ at $(2,4)$?", ["$y=4x-4$", "$y=2x$", "$y=4x+4$", "$y=x+2$"], 0, "$m=4, y-4=4(x-2)$.", 15, 'medium'),
            generateQuestion("Derivative of $\\sin x$?", ["$\\cos x$", "$-\\cos x$", "$\\sin x$", "1"], 0, "Trig identity.", 15, 'medium'),
            generateQuestion("Derivative of $\\ln x$?", ["$1/x$", "$e^x$", "1", "0"], 0, "Natural log derivative.", 15, 'medium'),
            generateQuestion("Small change formula: $\\delta y \\approx $", ["$(dy/dx) \\delta x$", "$(dx/dy) \\delta y$", "$\\delta x / \\delta y$", "$\\delta x^2$"], 0, "Linear approximation.", 15, 'medium'),
            generateQuestion("Rate of change of Area $A$ with radius $r$?", ["$dA/dr$", "$dr/dA$", "$A/r$", "$2\\pi r$"], 0, "Definition.", 15, 'medium'),
            generateQuestion("If $d^2y/dx^2 < 0$, the point is a:", ["Maximum", "Minimum", "Inflexion", "Root"], 0, "Curve bending downwards.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find max area of rectangle with perimeter 40.", ["100", "40", "400", "80"], 0, "Sides $x, 20-x$. Area $= 20x-x^2$. Max when $x=10$. Area=100.", 20, 'hard'),
            generateQuestion("Rate of change: If $r$ increases at 2cm/s, find $dA/dt$ when $r=5$.", ["$20\\pi$", "$10\\pi$", "$2\\pi$", "10"], 0, "$dA/dt = dA/dr \\cdot dr/dt = 2\\pi r \\cdot 2 = 4\\pi(5) = 20\\pi$.", 20, 'hard'),
            generateQuestion("Differentiate $y = e^{x^2}$.", ["$2xe^{x^2}$", "$e^{x^2}$", "$2e^x$", "None"], 0, "Chain rule on exponent.", 20, 'hard'),
            generateQuestion("Inflexion point occurs when:", ["$d^2y/dx^2 = 0$ and changes sign", "$dy/dx = 0$", "$y=0$", "Always"], 0, "Curvature flip.", 20, 'hard'),
            generateQuestion("Differentiate $\\tan x$.", ["$\\sec^2 x$", "$\\cos^2 x$", "$\\sec x$", "1"], 0, "Trig identity.", 20, 'hard'),
            generateQuestion("Find x-coordinate of stationary point for $y = x \\ln x$.", ["$1/e$", "e", "1", "0"], 0, "$1 \\cdot \\ln x + x \\cdot 1/x = \\ln x + 1 = 0 \\Rightarrow x = 1/e$.", 20, 'hard'),
            generateQuestion("If $y = 3x^2 - kx + 2$ has stationary point at $x=1, k=$?", ["6", "3", "1", "0"], 0, "$6x-k = 0 \\Rightarrow 6-k=0$.", 20, 'hard'),
            generateQuestion("Increasing function means $dy/dx$ is:", ["$> 0$", "$< 0$", "0", "Constant"], 0, "Climbing upwards.", 20, 'hard'),
            generateQuestion("Stationary point of $y = x^3 - 3x$ at $x=1$ is a:", ["Minimum", "Maximum", "Inflexion", "Root"], 0, "$f' = 3x^2-3$, $f'' = 6x$. At $x=1, f''=6>0$.", 20, 'hard'),
            generateQuestion("[Interleaved] Gradient of line between $(1,1)$ and $(2,3)$?", ["2", "3", "1", "0.5"], 0, "Coordinate link.", 10, 'expert')
        ],
        testing: [
            // Extra tests for Differentiation
            generateQuestion("Power Rule: $(x^5)' = $?", ["$5x^4$", "$4x^5$", "5", "x"], 0, "Standard.", 10, 'easy'),
            generateQuestion("Derivative of $x$?", ["1", "0", "x", "2"], 0, "Slope is 1.", 10, 'easy'),
            generateQuestion("Derivative of $x^2 + 3x + 4$?", ["$2x+3$", "2x", "5", "$x^2$"], 0, "Term by term.", 10, 'easy'),
            generateQuestion("Find gradient of $y=x^2$ at $x=3$.", ["6", "9", "3", "2"], 0, "$2x = 6$.", 10, 'easy'),
            generateQuestion("Stationary point of $y=10$?", ["Everywhere", "None", "(0,10)", "Undefined"], 0, "$dy/dx$ is always 0.", 10, 'easy'),
            generateQuestion("Notation for derivative of $f(x)$?", ["$f'(x)$", "$f''(x)$", "$df/dx$", "Both 0 & 2"], 3, "Common styles.", 10, 'easy'),
            generateQuestion("Chain rule is for:", ["Functions of functions", "Products", "Quotients", "Constants"], 0, "Nested logic.", 10, 'easy'),
            generateQuestion("If $y=x^3$, $dy/dx$ at $x=1$?", ["3", "1", "0", "2"], 0, "3*1^2 = 3.", 10, 'easy'),
            generateQuestion("Does differentiation find volume?", ["No", "Yes", "Only for cubes", "Sometimes"], 0, "Usually finds rates.", 10, 'easy'),
            generateQuestion("Derivative of $5x - 7$?", ["5", "-7", "0", "x"], 0, "Linear.", 10, 'easy'),
            generateQuestion("Product rule for $y = x \\sin x$?", ["$\\sin x + x \\cos x$", "$\\cos x$", "$x \\cos x$", "$x \\sin x$"], 0, "$1 \\cdot \\sin x + x \\cdot \\cos x$.", 15, 'medium'),
            generateQuestion("Derivative of $e^{3x}$?", ["$3e^{3x}$", "$e^{3x}$", "3", "$x e^{3x}$"], 0, "Chain rule exponent.", 15, 'medium'),
            generateQuestion("Nature of stationary point $d^2y/dx^2=0$?", ["Inconclusive/Inflexion test", "Max", "Min", "Root"], 0, "Need more testing.", 15, 'medium'),
            generateQuestion("Derivative of $10/x$?", ["$-10/x^2$", "$10x$", "$\\ln 10$", "10"], 0, "$-10x^{-2}$.", 15, 'medium'),
            generateQuestion("Find stationary $x$ for $y = x^2 - 6x$.", ["3", "6", "0", "-1"], 0, "$2x-6=0$.", 15, 'medium'),
            generateQuestion("Tangent at stationary point is ___ to x-axis.", ["Parallel", "Perpendicular", "At 45 deg", "Vertical"], 0, "Horizontal line.", 15, 'medium'),
            generateQuestion("Normal is ___ to tangent.", ["Perpendicular", "Parallel", "Equal", "Opposite"], 0, "Definition.", 15, 'medium'),
            generateQuestion("Derivative of $\\cos x$?", ["$-\\sin x$", "$\\sin x$", "$\\cos x$", "0"], 0, "Trig identity.", 15, 'medium'),
            generateQuestion("If $x$ increases, $y$ increases? Rule?", ["$dy/dx > 0$", "$dy/dx < 0$", "0", "None"], 0, "Increasing function.", 15, 'medium'),
            generateQuestion("Approximation: $1.01^2 \\approx 1 + 2(0.01) = $", ["1.02", "1.01", "2.01", "1"], 0, "Using $1+2x$.", 15, 'medium'),
            generateQuestion("Maximize $xy$ given $x+2y=20$.", ["$x=10, y=5$", "$x=5, y=10$", "$x=20, y=0$", "$0$"], 0, "$x=20-2y$, Area $= 20y-2y^2$. $20-4y=0 \\Rightarrow y=5, x=10$.", 20, 'hard'),
            generateQuestion("Sphere volume $V = \\frac{4}{3}\\pi r^3$. $dV/dr$?", ["$4\\pi r^2$", "$3\\pi r^2$", "$4\\pi r$", "Vol"], 0, "Surface area formula!", 20, 'hard'),
            generateQuestion("Solve $\\ln(dy/dx) = 0$. What is $dy/dx$?", ["1", "0", "e", "x"], 0, "$e^0 = 1$.", 20, 'hard'),
            generateQuestion("Find stationary $x$ for $y = e^x - x$.", ["0", "1", "$\\ln 2$", "None"], 0, "$e^x - 1 = 0 \\Rightarrow e^x=1 \\Rightarrow x=0$.", 20, 'hard'),
            generateQuestion("Differentiate $1/(\\sin x)$.", ["$-\\csc x \\cot x$", "$\\cos x$", "$\\csc^2 x$", "1"], 0, "Reciprocal trig.", 20, 'hard'),
            generateQuestion("Increasing function on $(a,b)$. Endpoints?", ["$f(b) > f(a)$", "$f(a) > f(b)$", "Equal", "Zero"], 0, "By definition.", 20, 'hard'),
            generateQuestion("Derivative of $x^x$?", ["$x^x(1+\\ln x)$", "$x \\cdot x^{x-1}$", "$\\ln x$", "None"], 0, "Using logarithmic differentiation.", 10, 'expert'),
            generateQuestion("Relationship between diff and integration?", ["Inverse", "Symmetric", "Parallel", "None"], 0, "Fundamental Theorem of Calculus.", 10, 'expert'),
            generateQuestion("[Interleaved] Solve $\\binom{n}{0}$.", ["1", "0", "n", "n!"], 0, "Binomial link.", 10, 'expert')
        ]
    },
    'am-calc-int': {
        learning: [
            // Easy (1-10)
            generateQuestion("Integration is the reverse of:", ["Differentiation", "Addition", "Squaring", "Division"], 0, "**Lesson**: It finds the anti-derivative.", 10, 'easy'),
            generateQuestion("Integral of $x^n$ is:", ["$\\frac{x^{n+1}}{n+1} + C$", "$nx^{n-1}$", "$x^n$", "$\\log x$"], 0, "Add 1 to power, divide by new power.", 10, 'easy'),
            generateQuestion("Symbol $\\int$ stands for:", ["Summation/Integral", "Product", "Root", "Limit"], 0, "Infinite sum.", 10, 'easy'),
            generateQuestion("Integral of $3x^2$?", ["$x^3 + C$", "$3x^3 + C$", "$6x + C$", "$x^2$"], 0, "$3(x^3/3) = x^3$.", 10, 'easy'),
            generateQuestion("Why $+C$ in indefinite integrals?", ["Accounts for lost constant", "It's cool", "Matches derivative", "Radius"], 0, "Derivative of any constant is zero.", 10, 'easy'),
            generateQuestion("Integral of a constant $k$?", ["$kx + C$", "0", "$k$", "$x$"], 0, "Anti-derivative of $k$ is $kx$.", 10, 'easy'),
            generateQuestion("Integral of $1/x$?", ["$\\ln |x| + C$", "$-1/x^2$", "1", "0"], 0, "The exceptional case for power rule.", 10, 'easy'),
            generateQuestion("Definite integral $\\int_a^b f(x)dx$ equals:", ["$F(b) - F(a)$", "$F(a) - F(b)$", "$F(b) + F(a)$", "$F(ab)$"], 0, "Evaluation at boundaries.", 10, 'easy'),
            generateQuestion("Area below x-axis has integral value:", ["Negative", "Positive", "Zero", "Complex"], 0, "Height is $-y$.", 10, 'easy'),
            generateQuestion("Integral of $x$?", ["$0.5x^2 + C$", "$x^2$", "1", "0"], 0, "Power rule.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Integral of $(2x+1)^3$?", ["$\\frac{(2x+1)^4}{8} + C$", "$\\frac{(2x+1)^4}{4}$", "$4(2x+1)^4$", ".../2"], 0, "Divide by new power (4) AND inside derivative (2). $4 \\times 2 = 8$.", 15, 'medium'),
            generateQuestion("Find $C$ if $\\int (2x)dx = y$ and $y=5$ when $x=1$.", ["4", "5", "0", "1"], 0, "$x^2 + C = y \\Rightarrow 1+C=5 \\Rightarrow C=4$.", 15, 'medium'),
            generateQuestion("Area between $y=x$, $x=0$, $x=2$ and x-axis?", ["2", "4", "1", "0"], 0, "Right triangle $0.5 \\times 2 \\times 2 = 2$. Or $\\int_0^2 xdx = [0.5x^2] = 2$.", 15, 'medium'),
            generateQuestion("Integral of $e^x$?", ["$e^x + C$", "$e^{x+1}$", "$\\ln x$", "$x e^x$"], 0, "Most persistent function.", 15, 'medium'),
            generateQuestion("Integral of $\\cos x$?", ["$\\sin x + C$", "$-\\sin x + C$", "$\\cos x$", "1"], 0, "Reverses differentiated sin.", 15, 'medium'),
            generateQuestion("Displacement $s$ from velocity $v$?", ["$\\int v \\,dt$", "$dv/dt$", "$v \\cdot t$", "None"], 0, "Integration of velocity.", 15, 'medium'),
            generateQuestion("Velocity $v$ from acceleration $a$?", ["$\\int a \\,dt$", "$da/dt$", "$a \\cdot t$", "None"], 0, "Integration of accel.", 15, 'medium'),
            generateQuestion("Evaluate $\\int_0^1 e^x dx$.", ["$e - 1$", "$e$", "1", "0"], 0, "$[e^x]_0^1 = e^1 - e^0 = e-1$.", 15, 'medium'),
            generateQuestion("Integral of $1/(3x+2)$?", ["$\\frac{1}{3}\\ln|3x+2| + C$", "$\\ln|3x+2|$", "$-1/(3x+2)^2$", "3"], 0, "Divide by coefficient of x.", 15, 'medium'),
            generateQuestion("Area between $y=x^2$ and $x$-axis from 0 to 3?", ["9", "27", "81", "3"], 0, "$[x^3/3]_0^3 = 27/3 = 9$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Volume of revolution about x-axis formula?", ["$\\pi \\int y^2 dx$", "$\\int y dx$", "$2\\pi \\int x y dx$", "$\\pi \\int x^2 dy$"], 0, "Summing discs $\\pi r^2 t$.", 20, 'hard'),
            generateQuestion("Area between $y=x^2$ and $y=x$?", ["1/6", "1/2", "1/3", "1"], 0, "$\\int_0^1 (x - x^2)dx = [0.5x^2 - x^3/3] = 0.5 - 1/3 = 1/6$.", 20, 'hard'),
            generateQuestion("Find volume if $y=\\sqrt{x}$ revolves from 0 to 4 around x-axis.", ["$8\\pi$", "$16\\pi$", "$4\\pi$", "$2\\pi$"], 0, "$\\pi \\int_0^4 x dx = \\pi [0.5x^2] = 8\\pi$.", 20, 'hard'),
            generateQuestion("Integral of $\\sin^2 x$? (Hint: use double angle cos2x)", ["$0.5x - 0.25\\sin 2x + C$", "$-\\cos^2 x$", "$\\sin^3 x/3$", "x"], 0, "$\\sin^2 x = 0.5(1 - \\cos 2x)$.", 20, 'hard'),
            generateQuestion("If $\\int_1^k 2x dx = 8$ and $k>0$, find k.", ["3", "4", "2", "9"], 0, "$[x^2]_1^k = k^2-1 = 8 \\Rightarrow k^2=9 \\Rightarrow 3$.", 20, 'hard'),
            generateQuestion("Find area of region shaded between $y^2=x$ and $x=4$.", ["32/3", "16/3", "8", "4"], 0, "$2 \\int_0^4 \\sqrt{x} dx = 2 [x^{1.5}/1.5] = 2 [8 / (2/3)] = 2 \\cdot 16/3 = 32/3$.", 20, 'hard'),
            generateQuestion("Integral of $\\ln x$ (via integration by parts)?", ["$x \\ln x - x + C$", "$1/x$", "$x \\ln x$", "No integral"], 0, "Integral of $1 \\cdot \\ln x$.", 20, 'hard'),
            generateQuestion("Kinematics: If $a=2t$, $s=0$ and $v=0$ at $t=0$, find $s$ at $t=3$.", ["9", "18", "27", "3"], 0, "$v=t^2, s=t^3/3 \\Rightarrow 27/3 = 9$.", 20, 'hard'),
            generateQuestion("Area between $y=e^x$ and $y=e$ for $x \\in [0,1]$?", ["1", "$e-1$", "$2e-1$", "0"], 0, "$\\int_0^1 (e - e^x)dx = [ex - e^x] = (e-e) - (0-1) = 1$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $dy/dx = 4x^3$ if $y=0, x=0$.", ["$y=x^4$", "$y=12x^2$", "$y=4x^4$", "$y=x^3$"], 0, "Calculus link.", 10, 'expert')
        ],
        testing: [
            // Extra tests for Integration
            generateQuestion("Antiderivative of $x^4$?", ["$x^5/5$", "$4x^3$", "$5x^5$", "x"], 0, "+C assumed.", 10, 'easy'),
            generateQuestion("Integral of $0$?", ["C", "x", "0", "Undefined"], 0, "Derivative of any constant is 0.", 10, 'easy'),
            generateQuestion("Integral of $10x^9$?", ["$x^{10}$", "$90x^8$", "10", "x"], 0, "Standard power.", 10, 'easy'),
            generateQuestion("Integral of $x^3/3$?", ["$x^4/12$", "$x^4/4$", "x", "1"], 0, "Divide 1/3 by 4.", 10, 'easy'),
            generateQuestion("Integral of $1$?", ["$x$", "$0$", "$C$", "$x^2/2$"], 0, "Slope of x is 1.", 10, 'easy'),
            generateQuestion("Evaluating $\\int_1^3 2 dx$?", ["4", "6", "2", "0"], 0, "$[2x]_1^3 = 6-2=4$.", 10, 'easy'),
            generateQuestion("Integral of $x+1$?", ["$0.5x^2+x$", "$x^2+x$", "2", "1"], 0, "Term by term.", 10, 'easy'),
            generateQuestion("Meaning of $+C$?", ["Constant of integration", "Center", "Circle", "Coefficient"], 0, "Vocabulary.", 10, 'easy'),
            generateQuestion("Is differentiation easier than integration?", ["Subjectively Yes", "No", "Always", "Bases match"], 0, "Usually more direct rules.", 10, 'easy'),
            generateQuestion("Integral of $2x$?", ["$x^2$", "$x$", "2", "..."], 0, "Standard.", 10, 'easy'),
            generateQuestion("Integral of $(x+2)^2$?", ["$(x+2)^3/3$", "$2(x+2)$", "$x^2/2+4x$", "None"], 0, "Chain rule inverse.", 15, 'medium'),
            generateQuestion("Area between $y=x^2$ and x-axis from $x=1$ to $x=2$?", ["7/3", "3", "1", "4"], 0, "$[x^3/3]_1^2 = 8/3 - 1/3 = 7/3$.", 15, 'medium'),
            generateQuestion("Integral of $e^{2x}$?", ["$0.5e^{2x}$", "$2e^{2x}$", "$e^{2x}$", "x"], 0, "Divide by 2.", 15, 'medium'),
            generateQuestion("Integral of $\\sin x$?", ["$-\\cos x$", "$\\cos x$", "$\\sin x$", "0"], 0, "Minus sign needed.", 15, 'medium'),
            generateQuestion("If $v=10$, $s=10t+C$. If $s=0$ at $t=0, C=$?", ["0", "10", "-10", "5"], 0, "Boundary condition.", 15, 'medium'),
            generateQuestion("Velocity is integral of accel?", ["Yes", "No"], 0, "Mapped motion.", 15, 'medium'),
            generateQuestion("Area bounded by $y=1/x$, $x=1$, $x=e$ and x-axis?", ["1", "$e$", "$0$", "0.5"], 0, "$[\\ln x]_1^e = 1 - 0 = 1$.", 15, 'medium'),
            generateQuestion("Definite integral of $3x^2$ from -1 to 1?", ["2", "0", "1", "3"], 0, "$[x^3]_{-1}^1 = 1 - (-1) = 2$.", 15, 'medium'),
            generateQuestion("If a graph is symmetric about y-axis, $\\int_{-a}^a f(x)dx = $?", ["$2 \\int_0^a f(x)dx$", "0", "1", "$a$"], 0, "Property of even functions.", 15, 'medium'),
            generateQuestion("If a graph is odd, $\\int_{-a}^a f(x)dx = $?", ["0", "$2 \\int$", "1", "a"], 0, "Cancelation of positive/negative area.", 15, 'medium'),
            generateQuestion("Volume of $y=x$ revolved around x-axis from 0 to 1?", ["$\\pi/3$", "$\\pi/2$", "$\\pi$", "$1/3$"], 0, "$\\pi \\int_0^1 x^2 dx = \\pi/3$.", 20, 'hard'),
            generateQuestion("Area between $y=\\sqrt{x}$ and $y=x$?", ["1/6", "1/3", "1/2", "1"], 0, "$\\int_0^1 (\\sqrt{x}-x)dx = [x^{1.5}/1.5 - 0.5x^2] = 2/3 - 1/2 = 1/6$.", 20, 'hard'),
            generateQuestion("Find $s$ at $t=2$ if $v=3t^2$ and $s(0)=1$.", ["9", "8", "7", "2"], 0, "$s=t^3+C \\Rightarrow 0+C=1. s(2) = 8+1=9$.", 20, 'hard'),
            generateQuestion("Integral of $\\sec^2 x$?", ["$\\tan x$", "$-\\cot x$", "$\\sec^3 x$", "1"], 0, "Reverses differentiated tan.", 20, 'hard'),
            generateQuestion("Integral of $\\ln(x)$ is $x \\ln x - x$. What is $\\int \\ln(2x) dx$?", ["$x \\ln(2x) - x$", "$2(x \\ln x - x)$", "x", "None"], 0, "Substitution $u=2x$ or parts.", 20, 'hard'),
            generateQuestion("$dA/dt = 10$. If $t$ goes from 0 to 5, change in area is?", ["50", "10", "2", "60"], 0, "$\\int_0^5 10 dt = 50$.", 20, 'hard'),
            generateQuestion("Integration constant C represents:", ["Family of curves", "A specific point", "The center", "Zero"], 0, "Different vertical shifts.", 20, 'hard'),
            generateQuestion("Area of circle via integration of $\\sqrt{r^2-x^2}$ from $-r$ to $r$?", ["$0.5\\pi r^2$", "$\\pi r^2$", "$2\\pi r$", "r"], 0, "It's the upper semicircle area.", 20, 'hard'),
            generateQuestion("Physics link: Force is derivative of?", ["Energy (Potential)", "Power", "Momentum", "Velocity"], 0, "Classical mechanics link (F=dp/dt or F=-dU/dx).", 10, 'expert'),
            generateQuestion("[Interleaved] Solve $\\binom{5}{2}$.", ["10", "5", "6", "20"], 0, "Binomial link.", 10, 'expert')
        ]
    }
};

export { addMathTopics, addMathQuestions };
