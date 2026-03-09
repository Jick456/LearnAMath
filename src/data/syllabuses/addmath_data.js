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
- **Quadratic factors**: $\\frac{1}{x^2+c} = \\frac{Ax+B}{x^2+c}$

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
        crashCourse: `[DIAGRAM: circle]

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
        crashCourse: `[DIAGRAM: circle]

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
            generateQuestion("Find the discriminant ($b^2 - 4ac$) for the explosive equation $2x^2 - 3x + 5 = 0$.", ["-31", "31", "49", "-49"], 0, "**Lesson**: $b^2 - 4ac = (-3)^2 - 4(2)(5) = 9 - 40 = -31$. A deeply negative result meaning no real roots exist!", 10, 'easy'),
            generateQuestion("If a curve is entirely floating above the x-axis, its discriminant must purely be:", ["$< 0$", "$> 0$", "$= 0$", "$\\ge 0$"], 0, "**Lesson**: Floating means no intersections with the x-axis, so naturally zero real exact roots exist ($< 0$).", 10, 'easy')
        ],
        testing: [
            generateQuestion("Find the sum of roots $\\alpha + \\beta$ for the quadratic $3x^2 + 6x - 2 = 0$.", ["-2", "2", "-2/3", "6"], 0, "**Lesson**: The sum of roots is simply $-b/a = -6/3 = -2$. Pure efficiency!", 15, 'medium'),
            generateQuestion("Find the range of $k$ if $x^2 + kx + 9 = 0$ confidently possesses two distinct real roots.", ["$k < -6 \\text{ or } k > 6$", "$-6 < k < 6$", "$k > 6$", "$k \\le -6$"], 0, "**Lesson**: $k^2 - 36 > 0$, forcing $k^2 > 36$. It fiercely escapes outward: $k < -6$ or $k > 6$.", 25, 'hard')
        ]
    },
    'am-alg-eq': {
        learning: [
            generateQuestion("Solve the clean modulus equation $|x - 3| = 5$.", ["x=8 or x=-2", "x=8", "x=-2", "x=2 or x=-8"], 0, "**Lesson**: Branch it out safely! $x - 3 = 5 \\Rightarrow 8$. AND $x - 3 = -5 \\Rightarrow -2$.", 15, 'easy'),
            generateQuestion("Where does the inequality curve $(x-2)(x-4) < 0$ cleanly dip below the axis?", ["$2 < x < 4$", "$x < 2 \\text{ or } x > 4$", "$x > 4$", "$x < 2$"], 0, "**Lesson**: The smiling U-shape naturally dips strictly below the surface between the roots 2 and 4.", 15, 'medium')
        ],
        testing: [
            generateQuestion("Solve $|2x - 1| = x + 3$ bravely. Check for ghost solutions!", ["x=4 or x=-2/3", "x=4", "x=-2/3", "No solution"], 0, "**Lesson**: $2x-1 = x+3 \\Rightarrow x=4$. $2x-1 = -x-3 \\Rightarrow 3x = -2 \\Rightarrow x=-2/3$. Both flawlessly check out!", 20, 'medium'),
            generateQuestion("Solve the complex system: $y = x+1$ and $y^2 = x^2 + 5$.", ["x=2, y=3", "x=2, y=-3", "x=-2, y=1", "x=3, y=4"], 0, "**Lesson**: Sub into the second: $(x+1)^2 = x^2+5 \\Rightarrow x^2+2x+1 = x^2+5 \\Rightarrow 2x=4 \\Rightarrow x=2$. Which makes y=3.", 25, 'hard')
        ]
    },
    'am-alg-surds': {
        learning: [
            generateQuestion("Extract perfection from $\\sqrt{48}$. Simplify it down.", ["$4\\sqrt{3}$", "$2\\sqrt{12}$", "$16\\sqrt{3}$", "$3\\sqrt{4}$"], 0, "**Lesson**: Find the largest hidden square: $48 = 16 \\times 3$. So $\\sqrt{16}\\sqrt{3} = 4\\sqrt{3}$.", 10, 'easy'),
            generateQuestion("What is the perfect conjugate shield for the denominator $3 - \\sqrt{2}$?", ["$3 + \\sqrt{2}$", "$3 - \\sqrt{2}$", "$\\sqrt{2}$", "$-3 + \\sqrt{2}$"], 0, "Perfect! Multiplying by the exact same terms but with a flipped middle sign fiercely creates the difference of two squares.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Expand carefully and simplify $(2\\sqrt{3} + 1)(2\\sqrt{3} - 1)$.", ["11", "13", "12", "10"], 0, "**Lesson**: Difference of squares! $(2\\sqrt{3})^2 - 1^2 = (4 \\times 3) - 1 = 12 - 1 = 11$.", 15, 'medium'),
            generateQuestion("Rationalise the dangerous fraction $\\frac{\\sqrt{3}}{\\sqrt{3}-1}$.", ["$\\frac{3+\\sqrt{3}}{2}$", "$\\frac{3-\\sqrt{3}}{2}$", "$3+\\sqrt{3}$", "$\\frac{3}{2}$"], 0, "**Lesson**: Multiply strictly by $(\\sqrt{3}+1)$ top and bottom. $\\frac{3+\\sqrt{3}}{3-1} = \\frac{3+\\sqrt{3}}{2}$. Pure mastery!", 25, 'hard')
        ]
    },
    'am-alg-poly': {
        learning: [
            generateQuestion("Find the pure remainder when $P(x) = x^2 - 5x + 7$ is violently divided by $(x-1)$.", ["3", "7", "0", "13"], 0, "**Lesson**: The Remainder Theorem lets you just plug in $x=1$. $1 - 5 + 7 = 3$. Clean logic!", 10, 'easy'),
            generateQuestion("If $(x+2)$ is a guaranteed perfect factor of $P(x)$, then $P(-2)$ MUST logically evaluate strictly to:", ["0", "2", "-2", "1"], 0, "**Lesson**: The Factor Theorem brilliantly dictates that a perfect factor leaves zero remainder.", 10, 'easy')
        ],
        testing: [
            generateQuestion("When $P(x) = x^3 + kx - 2$ holds $(x-2)$ as a factor, find $k$.", ["-3", "3", "5", "-5"], 0, "**Lesson**: $P(2) = 0$. $2^3 + 2k - 2 = 8 + 2k - 2 = 6 + 2k = 0$, leading fiercely to $k = -3$.", 20, 'medium'),
            generateQuestion("Identify the required dummy partial fraction structure specifically for $\\frac{1}{x(x^2+4)}$.", ["$\\frac{A}{x} + \\frac{Bx+C}{x^2+4}$", "$\\frac{A}{x} + \\frac{B}{x^2+4}$", "$\\frac{A}{x} + \\frac{B}{x+2} + \\frac{C}{x-2}$", "$\\frac{Ax+B}{x(x^2+4)}$"], 0, "**Lesson**: The irreducible quadratic factor $(x^2+4)$ strictly demands a linear $Bx+C$ shield on top.", 25, 'hard')
        ]
    },
    'am-alg-binomial': {
        learning: [
            generateQuestion("Evaluate exactly the combination matrix value of $\\binom{6}{2}$ (or 6C2) from Pascal's triangle.", ["15", "30", "12", "720"], 0, "**Lesson**: Formula is $\\frac{6!}{2!4!} = \\frac{6 \\times 5}{2} = 15$. Very commonly tested coefficient!", 10, 'easy'),
            generateQuestion("Identify the exact exponent structure of the general hunting term $T_{r+1}$ for $(a+b)^n$.", ["$\\binom{n}{r} a^{n-r} b^r$", "$\\binom{n}{r} a^r b^{n-r}$", "$\\binom{n}{r} a^n b^r$", "$\\binom{n}{r} a^r b^r$"], 0, "**Lesson**: The first term's power heavily drops down $n-r$, while the second term smartly climbs up starting at $r$.", 15, 'easy')
        ],
        testing: [
            generateQuestion("Find exclusively the coefficient of $x^2$ hiding deep within $(1+3x)^4$.", ["54", "36", "108", "27"], 0, "**Lesson**: Term is precisely $\\binom{4}{2} (1)^2 (3x)^2 = 6 \\times 1 \\times 9x^2 = 54x^2$. Clean snipe!", 20, 'medium'),
            generateQuestion("In the wild expansion of $(x + \\frac{2}{x})^6$, what is the exact term independent of $x$ ($x^0$)?", ["160", "20", "64", "120"], 0, "**Lesson**: Using $T_{r+1}$, we find $x^{6-2r} = x^0 \\Rightarrow r=3$. The term is $\\binom{6}{3}(2)^3 = 20 \\times 8 = 160$.", 30, 'expert')
        ]
    },
    'am-alg-log': {
        learning: [
            generateQuestion("Convert the strange logarithmic statement $\\log_2 32 = 5$ completely back into its raw exponential true form.", ["$2^5 = 32$", "$5^2 = 32$", "$32^2 = 5$", "$2^{32} = 5$"], 0, "**Lesson**: Logarithms are just powers! The base is 2, the power is 5. It magically evaluates to 32.", 10, 'easy'),
            generateQuestion("Use the core laws to effortlessly pull down the exponent: simplify $\\ln(x^4)$.", ["$4 \\ln x$", "$\\ln 4x$", "$\\frac{1}{4} \\ln x$", "$(\\ln x)^4$"], 0, "**Lesson**: The Power Rule lets the heavyweight exponent $4$ drop down smoothly to the pure front.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Solve flawlessly $\\log_3(x) + \\log_3(x-8) = 2$.", ["9", "9, -1", "-1", "8"], 0, "**Lesson**: $\\log_3(x(x-8)) = 2 \\Rightarrow x^2-8x = 3^2 = 9 \\Rightarrow x^2-8x-9=0$. Roots are 9 and -1. Reject -1 completely!", 25, 'hard'),
            generateQuestion("Solve exactly $e^{2x} - 3e^x + 2 = 0$ by treating it like a disguised quadratic.", ["x=0, x=\\ln 2", "x=1, x=2", "x=e, x=2e", "No real roots"], 0, "**Lesson**: Let $Y = e^x$. Then $Y^2 - 3Y + 2 = (Y-1)(Y-2) = 0$. $e^x=1 \\Rightarrow x=0$. $e^x=2 \\Rightarrow x=\\ln 2$.", 30, 'expert')
        ]
    },
    // --- GEOM & TRIG ---
    'am-geom-trig': {
        learning: [
            generateQuestion("Identify the core foundational identity that bravely links Tangent directly to Sine and Cosine.", ["$\\tan x = \\sin x / \\cos x$", "$\\tan x = \\cos x / \\sin x$", "$\\tan x = 1 / \\sin x$", "$\\tan x = \\sin^2 x$"], 0, "**Lesson**: Tan is fundamentally the steep ratio of Opposite over Adjacent, which is cleanly Sine strictly divided by Cosine.", 10, 'easy'),
            generateQuestion("Which exact formula universally halves the Double Angle $\\sin(2A)$ perfectly down?", ["$2\\sin A \\cos A$", "$\\cos^2 A - \\sin^2 A$", "$1 - 2\\sin^2 A$", "$2\\sin A$"], 0, "**Lesson**: $\\sin(2A) = 2 \\sin A \\cos A$. The ultimate double angle splitting manipulation!", 15, 'easy')
        ],
        testing: [
            generateQuestion("Prove or simplify exactly: $\\frac{1 - \\cos^2 x}{\\cos x}$ cleanly to a single clean function.", ["$\\tan x \\sin x$", "$\\tan^2 x$", "$\\cot x$", "$\\sin x$"], 0, "**Lesson**: $1 - \\cos^2 x$ is the master disguise for $\\sin^2 x$. Then $\\sin^2 x / \\cos x = \\sin x (\\sin x / \\cos x) = \\sin x \\tan x$.", 20, 'medium'),
            generateQuestion("Solve $\\cos(2x) = 0.5$ for $0^\\circ \\le x \\le 180^\\circ$. What are the ONLY exact valid solutions?", ["$30^\\circ, 150^\\circ$", "$60^\\circ, 120^\\circ$", "$30^\\circ, 330^\\circ$", "$60^\\circ, 300^\\circ$"], 0, "**Lesson**: Domain becomes $0^\\circ \\le 2x \\le 360^\\circ$. $2x = 60^\\circ$ or $300^\\circ$. Dividing by 2 yields $30^\\circ$ and $150^\\circ$.", 30, 'hard')
        ]
    },
    'am-geom-coord': {
        learning: [
            generateQuestion("If an aggressive straight line strictly has a steep gradient of 3, its perpendicular enemy must have:", ["-1/3", "-3", "1/3", "3"], 0, "**Lesson**: Perpendiculars cross paths severely with a negative reciprocal gradient: $3 \\times (-1/3) = -1$.", 10, 'easy'),
            generateQuestion("Locate the exact beating heart centre of the flawless circle $(x-5)^2 + (y+2)^2 = 36$.", ["(5, -2)", "(-5, 2)", "(5, 2)", "(-5, -2)"], 0, "**Lesson**: Because the standard formula is deeply $(x-a)^2 + (y-b)^2 = r^2$, the centre lies precisely at $a=5$, $b=-2$.", 15, 'medium')
        ],
        testing: [
            generateQuestion("What is the exact powerful radius stretching out from the circle $x^2 + y^2 - 10x + 24 = 0$?", ["1", "5", "24", "10"], 0, "**Lesson**: Complete the square purely: $(x-5)^2 - 25 + y^2 + 24 = 0 \\Rightarrow (x-5)^2 + y^2 = 1$. The radius is strictly $\\sqrt{1} = 1$.", 25, 'hard'),
            generateQuestion("Using the Shoelace crossing algorithm, calculate the area firmly enclosed by $(0,0), (4,0), (0,3)$.", ["6", "12", "7", "5"], 0, "**Lesson**: Half base times height intuitively gives $0.5 \\times 4 \\times 3 = 6$. The Shoelace formula mathematically proves it exactly!", 15, 'medium')
        ]
    },
    'am-geom-proofs': {
        learning: [
            generateQuestion("A tangent skimming the edge of a circle is mathematically always entirely ___ to the radius drawn precisely at the point of contact.", ["Perpendicular", "Parallel", "Equal", "Bisecting"], 0, "**Lesson**: The Tangent-Radius Property rigorously dictates a flawless perfect $90^\\circ$ right angle intersection.", 10, 'easy'),
            generateQuestion("A powerful straight line drawn squarely from the circle's centre, perpendicularly striking a chord, will completely:", ["Bisect the chord", "Tangent the chord", "Double the chord", "Curve the chord"], 0, "**Lesson**: It ruthlessly chops the chord perfectly in half down the exact absolute middle. Symmetrical precision!", 15, 'easy')
        ],
        testing: [
            generateQuestion("Which precise theorem actively links an angle formed strictly between a tangent and chord firmly to an internal angle?", ["Alternate Segment Theorem", "Angle at Centre", "Intersecting Chords", "Cyclic Quadrilateral"], 0, "**Lesson**: The magnificent Alternate Segment Theorem correctly mirrors the angle completely to the far opposite protective wall.", 20, 'medium'),
            generateQuestion("If two triangles successfully pass the AAA test flawlessly, they are definitively mathematically:", ["Similar but not necessarily congruent", "Congruent", "Equilateral", "Isosceles"], 0, "**Lesson**: AAA only ensures the internal angles match uniformly (scale models). They urgently need at least one exact matching Side length (SSS, SAS...) to confidently be pure clones.", 20, 'medium')
        ]
    },
    // --- CALCULUS ---
    'am-calc-diff': {
        learning: [
            generateQuestion("Differentiate aggressively $y = 4x^3$ violently hunting for the instantaneous gradient $\\frac{dy}{dx}$.", ["$12x^2$", "$4x^2$", "$12x^4$", "$x^4$"], 0, "**Lesson**: The exponent heavy 3 smoothly drops down, multiplying the 4. The power shrinks cleanly down to 2.", 10, 'easy'),
            generateQuestion("Which exact foundational rule confidently handles the differentiation nightmare of a fraction heavily stacked like $\\frac{x^2}{x-1}$?", ["Quotient Rule", "Chain Rule", "Product Rule", "Sum Rule"], 0, "**Lesson**: A fraction is natively a quotient. Thus, the rigid Quotient Rule fiercely governs it.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Extract the turning checkpoint coordinates (Stationary Point) for the smooth curve $y = x^2 - 6x + 8$.", ["(3, -1)", "(3, 8)", "(6, 8)", "(0, 8)"], 0, "**Lesson**: $\\frac{dy}{dx} = 2x - 6 = 0 \\Rightarrow x=3$. Plug safely back carefully into original $y$ to cleanly locate $y = -1$.", 20, 'medium'),
            generateQuestion("Use the powerful Chain Rule flawlessly exactly on $y = (2x - 5)^4$. What is $\\frac{dy}{dx}$?", ["$8(2x-5)^3$", "$4(2x-5)^3$", "$2(2x-5)^3$", "$8x(2x-5)^3$"], 0, "**Lesson**: The outside 4 heavily drops down, inside severely stays. THEN decisively multiply by exactly 2 (the inside strictly differentiated). $4(2) = 8$.", 25, 'hard')
        ]
    },
    'am-calc-int': {
        learning: [
            generateQuestion("Reverse the universe! Integrate purely $\\int 6x^2 \\,dx$.", ["$2x^3 + C$", "$12x + C$", "$3x^3 + C$", "$6x^3 + C$"], 0, "**Lesson**: Raise the exponent fully to 3, then divide the 6 cleanly by 3 giving 2. Don't ever forget the $+C$!", 15, 'easy'),
            generateQuestion("In pure Kinematics motion, if you successfully securely integrate the Velocity function perfectly, you strictly obtain:", ["Displacement", "Acceleration", "Time", "Speed"], 0, "**Lesson**: Calculus cleanly maps motion! Displacement $\\Rightarrow$ diff factors Velocity $\\Rightarrow$ diff finds Acceleration. Integration reverses this!", 10, 'easy')
        ],
        testing: [
            generateQuestion("Evaluate safely the strict Definite Integral boundary exactly strictly $\\int_1^2 3x^2 \\,dx$.", ["7", "8", "6", "9"], 0, "**Lesson**: Integration cleanly yields $x^3$. Plugging upper 2 gives 8, lower 1 gives 1. $8 - 1 = 7$.", 20, 'medium'),
            generateQuestion("Integrate the powerful exponential wave completely exactly $\\int e^{3x} \\,dx$.", ["$\\frac{1}{3}e^{3x} + C$", "$3e^{3x} + C$", "$e^{3x} + C$", "$\\frac{1}{3}e^x + C$"], 0, "**Lesson**: The formidable exponential confidently remains severely identical, but you MUST safely decisively divide strictly by the exact inside derivative 3.", 25, 'hard')
        ]
    }
};

export { addMathTopics, addMathQuestions };
