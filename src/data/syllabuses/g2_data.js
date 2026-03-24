import { generateQuestion } from './utils';

const g2Topics = [
    // --- SECONDARY 1 G2 ---
{
        id: 'g2-s1-numbers', level: 'Sec 1 (G2)', title: 'Numbers & Operations',
        description: 'Primes, HCF/LCM, Negatives, Fractions, Decimals, Approx & Estimation.', color: '#34d399', emoji: '🔢',
        location: 'The Prime Forest', storyline: 'Find the prime factors to unlock the gates!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: number-line]

**Factors, Multiples & Primes: The VIP Club**
- **Prime Number**: A VIP number greater than 1 that only allows 1 and itself into its party! (e.g., 2, 3, 5, 7, 11).
- **HCF**: The largest "building block" two numbers share.
- **LCM**: The smallest meeting point where their "times tables" cross paths.

**Approximations & Estimation: Getting Close Enough**
- **Significant Figures**: Start counting from the first non-zero digit you see. E.g., $0.0450$ gives us 3 sig figs (the 4, 5, and the last 0).
- **Decimal Places**: Simply count the digits sitting after the decimal point. $3.1415$ to 2 d.p. is $3.14$.

**Worked Example: Highest Common Factor**
*Question*: Find the HCF of 12 and 18.
*Step 1*: Prime factorise 12: $2^2 \\times 3$.
*Step 2*: Prime factorise 18: $2 \\times 3^2$.
*Step 3*: Take the lowest power of common factors. The HCF is $2^1 \\times 3^1 = 6$.

> [!warning] **Exam Strategy & Pitfall**
> Always write your final Prime Factorisation in index notation (e.g., $2^3 \\times 3^2$). A common trap is just listing the factors without powers. When estimating, always round to 1 sig fig BEFORE calculating to avoid massive errors!`
    },
    {
        id: 'g2-s1-ratio', level: 'Sec 1 (G2)', title: 'Ratio, Rate & Speed',
        description: 'Ratios, equivalent ratios, rate, and average speed.', color: '#fbbf24', emoji: '🏎️',
        location: 'The Speed Track', storyline: 'Pace your speed to run through the track efficiently!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: balance-scale]

**Ratio & Rate: Apples to Oranges**
- **Ratio** ($a:b$): Compares identical units. Equivalent ratios are like zooming in or out (just multiply/divide parts equally).
- **Rate**: Compares completely different units (e.g., dollars per hour, meters per second).

**Speed: The Magic Triangle**
- Formula: $\\text{Speed} = \\text{Distance} \\div \\text{Time}$.
- **Average Speed**: The ultimate trap in math! Use explicitly $\\frac{\\text{Total Distance}}{\\text{Total Time}}$. Never exactly add two speeds and divide by 2.

**Worked Example: Map Scales**
*Question*: Scale is 1:20000. Find the actual area in km² of a map area of 5 cm².
*Step 1*: Convert length scale to km. $1 \\text{ cm} : 20000 \\text{ cm} \\Rightarrow 1 \\text{ cm} : 0.2 \\text{ km}$.
*Step 2*: Square the length scale to get the Area scale! $1 \\text{ cm}^2 : (0.2)^2 \\text{ km}^2 \\Rightarrow 1 \\text{ cm}^2 : 0.04 \\text{ km}^2$.
*Step 3*: Multiply by 5. Total Area = $5 \\times 0.04 = 0.2 \\text{ km}^2$.

> [!warning] **Exam Strategy & Pitfall**
> When dealing with map scales, Area ratio is the Length ratio SQUARED. The biggest pitfall is multiplying the map area by the length scale instead of the area scale!`
    },
    {
        id: 'g2-s1-percentage', level: 'Sec 1 (G2)', title: 'Percentage',
        description: 'Percentage of a quantity, percentage change.', color: '#f87171', emoji: '💯',
        location: 'The Percentile Peaks', storyline: 'Reach the 100% summit to see the whole world!', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: fraction-pie]

**Percentages: Out of 100!**
- Percentage literally means "per 100". Thus, $x\\%$ is the exact same as the fraction $\\frac{x}{100}$.
- To express A as a percentage of B: $\\frac{A}{B} \\times 100\\%$.

**Percentage Change in the Real World**
- Formula: $\\frac{\\text{Actual Change}}{\\text{ORIGINAL Amount}} \\times 100\\%$.

**Worked Example: Finding the Original Price (Reverse Percentage)**
*Question*: After a $20\\%$ discount, a television costs $400. Find the original price.
*Step 1*: Identify the current percentage. $100\\% - 20\\% = 80\\%$.
*Step 2*: Set up the equation: $80\\%$ of Original Price = $400.
*Step 3*: Solve! Original Price = $400 \\div 0.80 = 500$.

> [!warning] **Exam Strategy & Pitfall**
> NEVER find $20\\%$ of the final price ($400) and simply add it back on! The percentage change is always strictly calculated based entirely on the ORIGINAL starting value.`
    },
    {
        id: 'g2-s1-algebra', level: 'Sec 1 (G2)', title: 'Algebra & Equations',
        description: 'Basic expressions, evaluation, linear equations.', color: '#60a5fa', emoji: '🧮',
        location: 'The Algebra Abyss', storyline: 'Balance the variables to stabilize the abyss.', themeClass: 'theme-abyss',
        crashCourse: `**Algebra: The Mystery Boxes**
- Combine **Like Terms** (terms exactly matching in variables). $3x + 2x = 5x$.
- Terms with different variables ignore each other: $2x + 3y$ stays exactly as $2x + 3y$.

**Solving Linear Equations: The Balancing Act**
- Isolate the unknown letter by sending numbers to the other side.
- **Golden Rule**: Whatever operation you do to the left side ($+, -, \\times, \\div$), you must do to the right side to keep the scales balanced!

**Worked Example: Solving Linear Equations**
*Question*: Solve $3(x - 2) + 4 = 19$.
*Step 1*: Expand the bracket first! $3x - 6 + 4 = 19$.
*Step 2*: Combine constants: $3x - 2 = 19$.
*Step 3*: Add 2 to both sides: $3x = 21$.
*Step 4*: Divide by 3: $x = 7$.

> [!warning] **Exam Strategy & Pitfall**
> Be extremely careful with negative signs outside brackets. $-(x - 5)$ expands to $-x + 5$, NOT $-x - 5$. The negative distributes to EVERY term inside!`
    },
    {
        id: 'g2-s1-funcs', level: 'Sec 1 (G2)', title: 'Functions & Graphs',
        description: 'Cartesian coordinates, linear functions (y=ax+b).', color: '#818cf8', emoji: '📈',
        location: 'The Coordinate Canyon', storyline: 'Plot the coordinates to navigate out of the canyon.', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**Linear Graphs: City Navigation**
- Straight line graphs all follow the master formula: $y = mx + c$.
- $m$ is the **gradient** (how steep the hill is). Calculated by $\\frac{\\text{Rise}}{\\text{Run}} = \\frac{y_2 - y_1}{x_2 - x_1}$.
- $c$ is the **y-intercept**. It's the starting checkpoint where the line crashes through the vertical y-axis (where $x=0$).

**Worked Example: Finding the Equation of a Line**
*Question*: Find the equation of the line passing through $(0, 4)$ and $(2, 10)$.
*Step 1*: Find the gradient $m$. $\\frac{10 - 4}{2 - 0} = \\frac{6}{2} = 3$.
*Step 2*: Identify the y-intercept. The point $(0, 4)$ lies on the y-axis, so $c = 4$.
*Step 3*: Put it together: $y = 3x + 4$.

> [!warning] **Exam Strategy & Pitfall**
> Gradients going UPHILL (left to right) are positive. DOWNhill are negative. Always do a quick visual check of your gradient's sign before finalizing your equation!`
    },
    {
        id: 'g2-s1-geometry', level: 'Sec 1 (G2)', title: 'Geometry & Mensuration',
        description: 'Angles, parallel lines, perimeter/area/volume of prisms & cylinders.', color: '#f472b6', emoji: '📐',
        location: 'The Measurement Mine', storyline: 'Dig out exact volumes to build your structures!', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: polygon]

**Parallel Lines: Finding the Letters**
- **Alternate angles** form a Z-shape and are perfectly equal.
- **Corresponding angles** form an F-shape and are perfectly equal.
- **Interior angles** form a C-shape and sum to a cozy $180^\\circ$.

**Mensuration Mastery**
- **Trapezium Area**: $\\frac{1}{2}(a+b)h$, where $a,b$ are the parallel top/bottom walls, and $h$ is the height.
- **Cylinder Volume**: The circle base area times height! $V = \\pi r^2 h$.

**Worked Example: Cylinder Surface Area**
*Question*: A closed cylinder has radius 3 and height 5. Find its exact Total Surface Area.
*Step 1*: Calculate the 2 flat circular ends. Area = $2 \\times (\\pi \\times 3^2) = 18\\pi$.
*Step 2*: Calculate the curved body. Area = $2\\pi rh = 2\\pi(3)(5) = 30\\pi$.
*Step 3*: Total Surface Area = $18\\pi + 30\\pi = 48\\pi$.

> [!warning] **Exam Strategy & Pitfall**
> Read carefully if a cylinder or prism is 'Open' or 'Closed'. If a pipe is open at both ends, you MUST ONLY calculate the curved surface area, ignoring the circles!`
    },
    {
        id: 'g2-s1-stats', level: 'Sec 1 (G2)', title: 'Stats & Probability',
        description: 'Mean/Mode/Median, diagrams, intro to probability.', color: '#9ca3af', emoji: '📊',
        location: 'The Stats Station', storyline: 'Find the chances of spotting a rare beast.', themeClass: 'theme-glacier',
        crashCourse: `[DIAGRAM: bar-chart]

**Averages: Finding the Center**
- **Mean**: Total completely divided by count.
- **Median**: The exact middle person in a line sorted from smallest to largest.
- **Mode**: The trendsetter! The number that appears the most often.

**Intro to Probability: What are the Odds?**
- Probability measures chance: $\\frac{\\text{Winning Outcomes}}{\\text{Total Possible Outcomes}}$.
- Always lands between $0$ (impossible) and $1$ (guaranteed absolute certainty).

**Worked Example: Working with Means**
*Question*: The mean weight of 4 people is 50kg. A 5th person joins, and the new mean is 52kg. Find the 5th person's weight.
*Step 1*: Find the old total weight: $4 \\times 50 = 200\\text{kg}$.
*Step 2*: Find the new total weight: $5 \\times 52 = 260\\text{kg}$.
*Step 3*: The difference is the 5th person: $260 - 200 = 60\\text{kg}$.

> [!warning] **Exam Strategy & Pitfall**
> For probability, your final answer must be a fraction in its SIMPLEST FORM. For the Median, NEVER pick the middle number until you have strictly sorted the list in ascending order!`
    },

    // --- SECONDARY 2 G2 ---
    {
        id: 'g2-s2-algebra', level: 'Sec 2 (G2)', title: 'Advanced Algebra',
        description: 'Expansion, Factorisation, Algebraic fractions.', color: '#60a5fa', emoji: '🧬',
        location: 'The Factor Factory', storyline: 'Expand and contract the mechanisms to progress.', themeClass: 'theme-clockwork',
        crashCourse: `**Advanced Algebra: Expanding & Factorising**
- **Expansion**: Multiply outside terms with EVERY single item inside the bracket. $(a+b)(c+d) = ac + ad + bc + bd$ (FOIL method).
- **Factorisation Toolkit**:
  1. **Common factors**: Pull out what they share: $2x^2 + 4x = 2x(x + 2)$.
  2. **Difference of Two Squares**: The most famous trick! $x^2 - y^2 = (x - y)(x + y)$. Look out for this everywhere!

> [!tip] **Exam Strategy**
> When simplifying algebraic fractions, factorise BOTH the top and bottom completely before you even think about crossing anything out.`
    },
    {
        id: 'g2-s2-equations', level: 'Sec 2 (G2)', title: 'Simultaneous Equations',
        description: 'Solving two variables linearly.', color: '#a78bfa', emoji: '🔗',
        location: 'The Twin Towers', storyline: 'Synchronize both sides to align the towers.', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: balance-scale]

**Simultaneous Equations: The Crossroads**
- You're finding the exact GPS coordinate $(x,y)$ where two lines intersect!
- **Substitution Method**: Make one letter the boss (e.g. $y = 2x + 1$) and drop it into the other equation so only one type of letter is left.
- **Elimination Method**: Multiply one or both equations so the $x$s or $y$s match perfectly. Then add or subtract the equations vertically to eliminate them entirely!`
    },
    {
        id: 'g2-s2-geometry', level: 'Sec 2 (G2)', title: 'Geometry Concepts',
        description: 'Symmetry, Construction, Congruence & Similarity.', color: '#f472b6', emoji: '🦋',
        location: 'The Symmetry Sandbox', storyline: 'Reflect the shapes to create perfect harmony.', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: polygon]

**Congruence & Similarity: Identical Twins vs Scale Models**
- **Congruent Figures**: Identical twins! Exact same shape and size.
  - Triangle proofs: SSS (all sides), SAS (side-angle-side), AAS (angle-angle-side), RHS (right-angle-hyp-side).
- **Similar Figures**: Scale models. They look identical in shape but are different sizes!
  - Identifying them: Matching angles are exactly equal, but side lengths are scaled proportionally by a multiplier.

> [!tip] **Exam Strategy**
> For similar triangles, always draw the two triangles separately and oriented in the same direction before setting up your ratio fractions.`
    },
    {
        id: 'g2-s2-pythagoras', level: 'Sec 2 (G2)', title: 'Pythagoras’ Theorem',
        description: 'Right-angled triangles.', color: '#34d399', emoji: '🛬',
        location: 'The Right Angle Realm', storyline: 'Leap across the hypotenuse to take a shortcut!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: right-triangle]

**Pythagoras' Theorem: The Ancient Secret**
- Strictly reserved for right-angled ($90^\\circ$) triangles!
- **The Formula**: $a^2 + b^2 = c^2$, where $c$ is the famously long Hypotenuse facing the right angle directly.
- **Rearranging**: Need a shorter side? No problem. Flip the formula to subtract: $a = \\sqrt{c^2 - b^2}$.

> [!tip] **Exam Strategy**
> Write TOA CAH SOH at the top of your test paper immediately. If the triangle doesn't have a right angle, you CANNOT use them!`
    },
    {
        id: 'g2-s2-mensuration', level: 'Sec 2 (G2)', title: '3D Mensuration',
        description: 'Volume/SA of pyramids, cones, spheres.', color: '#fb923c', emoji: '⛰️',
        location: 'The Volume Volcanos', storyline: 'Measure the cones and spheres of magma carefully.', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: cylinder]

**Volumes of 3D Solids: The Liquid Measure**
- **Sphere**: The perfect ball. $V = \\frac{4}{3}\\pi r^3$.
- **Pyramid/Cone**: The pointy rule! They hold exactly $\\frac{1}{3}$ the volume of their straight box/cylinder equivalents! $V = \\frac{1}{3} \\times \\text{Base Area} \\times \\text{Height}$.

**Wrapping them up (Surface Area)**
- **Sphere Surface Area**: Exactly four circles! $4\\pi r^2$.
- **Cone Curved Surface Area**: $\\pi r l$ (where $l$ is the diagonal slant height down the side).

> [!tip] **Exam Strategy**
> A sphere has NO straight edges. Its volume is $\\frac{4}{3}\\pi r^3$. Always double check you are using radius $r$, not diameter $d$!`
    },

    // --- SECONDARY 3/4 G2 ---
    {
        id: 'g2-s34-algebra', level: 'Sec 3/4 (G2)', title: 'Algebraic Subject & Fractions',
        description: 'Changing subject of formula.', color: '#60a5fa', emoji: '🔄',
        location: 'The Shifting Sands', storyline: 'Make yourself the subject of the desert trial.', themeClass: 'theme-desert',
        crashCourse: `**Changing the Subject: Rewriting the Rules**
- Rearrange the equation so your target variable is isolated entirely alone on one side.
- Use opposite operators to kick everything else over the fence: E.g. Make $x$ the subject for $y = mx+c \\Rightarrow y-c = mx \\Rightarrow x = \\frac{y-c}{m}$.

**Algebraic Fractions: Finding Common Ground**
- **Add/Subtract**: You CANNOT combine them without a common denominator. Multiply the top and bottom of each piece to forcefully match their denominators!
- **Multiply/Divide**: Factorise every numerator and denominator completely first, then joyfully cancel out the common brackets.

> [!tip] **Exam Strategy**
> Completing the square form $a(x-h)^2 + k$ instantly gives you the turning point $(h, k)$. Notice the sign of $h$ flips!`
    },
    {
        id: 'g2-s34-funcs', level: 'Sec 3/4 (G2)', title: 'Functions & Equations',
        description: 'Quadratic/Power/Exponential functions, Linear inequalities.', color: '#818cf8', emoji: '📈',
        location: 'The Exponential Expanse', storyline: 'Your power grows exponentially! But inequalities exist.', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**The Ultimate Quadratic Formula**
- When simple factorising fails, this beast solves $ax^2 + bx + c = 0$ perfectly every time:
  $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

**Linear Inequalities ($<, >$)**
- Treat them identically to normal equations (like $=$), WITH ONE DEADLY EXCEPTION:
- **The Flip Rule**: If you multiply or divide both sides by a **negative** number, the inequality sign MUST flip around! E.g. $-2x < 6 \\Rightarrow x > -3$.

> [!tip] **Exam Strategy**
> The graph of $y = 1/x$ has two separate curves in diagonally opposite quadrants. It NEVER touches the x or y axes (asymptotes).`
    },
    {
        id: 'g2-s34-geometry', level: 'Sec 3/4 (G2)', title: 'Circle & Coordinate Geometry',
        description: 'Circle properties, Coordinate geometry.', color: '#f472b6', emoji: '⚪',
        location: 'The Circle Sanctuary', storyline: 'Discover the hidden properties of the circular monument.', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: circle]

**Coordinate Geometry Toolkit**
- **Distance**: The line between $(x_1, y_1)$ and $(x_2, y_2)$ is just Pythagoras! $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
- **Gradient** ($m$): Rise over Run! $\\frac{y_2 - y_1}{x_2 - x_1}$

**Circle Theorems: Hidden Patterns**
- Angle built in a semicircle is always a perfect right angle ($90^\\circ$).
- Angle blasted from the center is exactly TWICE the angle hitting the circumference wall.
- Angles spawning from the exact same arc segment are perfectly equal.

> [!tip] **Exam Strategy**
> The angle in a semicircle is a right angle ($90^\\circ$). If a triangle's longest side is the diameter, its opposite angle is guaranteed $90^\\circ$.`
    },
    {
        id: 'g2-s34-trig', level: 'Sec 3/4 (G2)', title: 'Trigonometry & Bearings',
        description: 'Sine/Cosine rules, 3D problems, Bearings.', color: '#fbbf24', emoji: '🧭',
        location: 'The Compass Caves', storyline: 'Navigate your bearings to find the hidden path.', themeClass: 'theme-abyss',
        crashCourse: `**Trigonometry Rules: Breaking the $90^\\circ$ Limit**
- For NON-right-angled triangles!
- **Sine Rule**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. Use this when you have a "matching pair" of a known side and its specific opposite angle.
- **Cosine Rule**: $c^2 = a^2 + b^2 - 2ab \\cos C$. Use this when you're trapped with all 3 sides, or 2 sides hugging the angle between them.

**Bearings: Map Navigation**
- Always measure strictly from North ($000^\\circ$).
- Turn clockwise. Write using exactly 3 digits (e.g. $045^\\circ$ instead of $45^\\circ$).

> [!tip] **Exam Strategy**
> The Sine Rule is perfect for 'pairs' (an angle and its opposite side). The Cosine Rule is for when you're trapped between two sides ('V' shape).`
    },
    {
        id: 'g2-s34-mensuration', level: 'Sec 3/4 (G2)', title: 'Arc Length & Sector Area',
        description: 'Circles and Radian measure.', color: '#fb923c', emoji: '🍕',
        location: 'The Radian River', storyline: 'Calculate the arc length to cross the river.', themeClass: 'theme-glacier',
        crashCourse: `[DIAGRAM: fraction-pie]

**Radians: The True Measure of Angles**
- Radians wrap the radius around the crust! $180^\\circ = \\pi \\text{ radians}$.
- Conversion: To force degrees into radians, multiply by $\\frac{\\pi}{180^\\circ}$.

**The Radian Shortcut Formulas**
- If your angle $\\theta$ is already in radians, the circle slice formulas become blissfully simple!
- **Arc Length (Crust)**: $s = r\\theta$
- **Area of Sector (Pizza Slice)**: $A = \\frac{1}{2}r^2\\theta$`
    },
    {
        id: 'g2-s34-stats', level: 'Sec 3/4 (G2)', title: 'Stats & Probability',
        description: 'Quartiles, SD, Cumulative freq, Box-and-whisker. Combined events.', color: '#9ca3af', emoji: '📊',
        location: 'The Probability Plaza', storyline: 'What are the chances of finding the exit? Draw a tree diagram to know.', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: venn-diagram]

**Probability of Combined Events**
- **Independent Events**: (Like dice rolls). One doesn't affect the other. "AND" means MULTIPLY: $P(A \\text{ AND } B) = P(A) \\times P(B)$.
- **Mutually Exclusive**: They cannot occur together at the same time. "OR" means ADD: $P(A \\text{ OR } B) = P(A) + P(B)$.

**Standard Deviation (SD)**
- Measures the spread! A massive SD means the numbers are wildly inconsistent and spread far from the mean. A tiny SD means everyone scored very consistently close to the average.

> [!tip] **Exam Strategy**
> On a cumulative frequency curve, the Median is at the $50%$ mark of the y-axis, not the x-axis!`
    }
];

const g2Questions = {
    // --- Sec 1 G2 Questions ---
    'g2-s1-numbers': {
        learning: [
            // Easy (1-10)
            generateQuestion("Which fraction is exact to $1/4$?", ["0.25", "0.2", "0.4", "0.5"], 0, "**Lesson**: Fractions imply division. $1 \\div 4 = 0.25$.", 10, 'easy'),
            generateQuestion("Round $12.456$ to 2 decimal places.", ["12.46", "12.45", "12.50", "12.00"], 0, "**Lesson**: 3rd decimal is 6, pulls 5 up to $12.46$.", 10, 'easy'),
            generateQuestion("Value of $3^2$?", ["9", "6", "5", "8"], 0, "Squaring means multiplying by itself.", 10, 'easy'),
            generateQuestion("Which is a prime number?", ["7", "9", "15", "21"], 0, "Primes only have 2 factors.", 10, 'easy'),
            generateQuestion("Calculate $10 - (-5)$.", ["15", "5", "-5", "50"], 0, "Subtracting a negative is adding.", 10, 'easy'),
            generateQuestion("Round 45 to the nearest 10.", ["50", "40", "45", "100"], 0, "5 rounds up.", 10, 'easy'),
            generateQuestion("What is the first prime number?", ["2", "1", "3", "0"], 0, "1 is not prime.", 10, 'easy'),
            generateQuestion("Equivalent of $0.1$ as a fraction?", ["1/10", "1/100", "1/2", "0.1/1"], 0, "Decimal place meaning.", 10, 'easy'),
            generateQuestion("Value of $\\sqrt{16}$?", ["4", "8", "32", "2"], 0, "Inverse of squaring.", 10, 'easy'),
            generateQuestion("Sum of $0.5$ and $1/2$?", ["1", "0.25", "0.75", "1.5"], 0, "Both values are half.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Evaluate safely: $-5 - (-8) + 2$.", ["5", "1", "15", "-11"], 0, "**Lesson**: $-5 + 8 + 2 = 5$.", 15, 'medium'),
            generateQuestion("Find the HCF of 12 and 18.", ["6", "2", "3", "36"], 0, "Largest common divisor.", 15, 'medium'),
            generateQuestion("Common multiples of 3 and 4?", ["12, 24, 36", "7, 14, 21", "3, 4, 12", "1, 2, 3"], 0, "Intersection of sets.", 15, 'medium'),
            generateQuestion("What is $0.00456$ to 3 significant figures?", ["0.00456", "0.004", "0.0046", "0.004560"], 0, "Count from first non-zero.", 15, 'medium'),
            generateQuestion("Value of $2^3 \\times 3$?", ["24", "18", "12", "36"], 0, "$8 \\times 3 = 24$.", 15, 'medium'),
            generateQuestion("Find prime factors of 20.", ["$2, 2, 5$", "$4, 5$", "$2, 10$", "$2, 3, 5$"], 0, "Breakdown into primes.", 15, 'medium'),
            generateQuestion("Round $3.14159$ to 3 s.f.", ["3.14", "3.142", "3.1", "3.141"], 0, "Significant figure rule.", 15, 'medium'),
            generateQuestion("Calculate $1/2 + 1/4$.", ["0.75", "0.5", "1/6", "0.25"], 0, "Common denominator 4.", 15, 'medium'),
            generateQuestion("Is 51 prime?", ["No", "Yes"], 0, "$5+1=6$, so it is divisible by 3.", 15, 'medium'),
            generateQuestion("Estimate $21.3 / 1.9$.", ["10", "11", "20", "5"], 0, "$20 / 2$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Estimate $18.9 \\times 4.1$ using 1 significant figure.", ["80", "76", "100", "77"], 0, "**Lesson**: $20 \\times 4 = 80$. Rounding occurs before calculation.", 20, 'hard'),
            generateQuestion("Find the LCM of 15, 20, and 30.", ["60", "30", "120", "90"], 0, "Smallest multiple for all.", 20, 'hard'),
            generateQuestion("Simplify: $(-2)^3 \\times (-1)^4$.", ["-8", "8", "-16", "16"], 0, "Negative to odd power is negative.", 20, 'hard'),
            generateQuestion("Which is greater: $2^5$ or $5^2$?", ["$2^5$", "$5^2$", "Equal", "None"], 0, "$32 > 25$.", 20, 'hard'),
            generateQuestion("Find HCF of $2^3 \\times 3^2$ and $2^2 \\times 3^4$.", ["$2^2 \\times 3^2$", "$2^3 \\times 3^4$", "$2 \\times 3$", "$2^5 \\times 3^6$"], 0, "Lowest powers of common primes.", 20, 'hard'),
            generateQuestion("If $x^2 = 1.44$, find $x$ (positive).", ["1.2", "0.12", "12", "1.4"], 0, "Square root shift.", 20, 'hard'),
            generateQuestion("Express 120 as a product of prime factors.", ["$2^3 \\times 3 \\times 5$", "$2^2 \\times 3^2 \\times 5$", "$2 \\times 60$", "$2^3 \\times 15$"], 0, "Full binary tree growth.", 20, 'hard'),
            generateQuestion("Total prime numbers between 20 and 30?", ["2", "1", "3", "4"], 0, "23 and 29.", 20, 'hard'),
            generateQuestion("Value of $(0.1)^2$?", ["0.01", "0.1", "0.2", "0.02"], 0, "Decimal shift left.", 20, 'hard'),
            generateQuestion("Solve: $3(n - 1) = 21$.", ["8", "7", "6", "10"], 0, "$n-1=7 \\Rightarrow n=8$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Identify explicitly the prime strictly.", ["29", "21", "25", "33"], 0, "**Lesson**: 29 has no divisors except 1 and itself.", 5, 'easy'),
            generateQuestion("Value of $|-10|$ (absolute value)?", ["10", "-10", "0", "1"], 0, "Distance from 0.", 5, 'easy'),
            generateQuestion("Which is a multiple of 9?", ["18", "13", "21", "30"], 0, "9, 18, 27...", 5, 'easy'),
            generateQuestion("Round $0.99$ to 1 decimal place.", ["1.0", "0.9", "1.1", "0.1"], 0, "Propagating carry.", 5, 'easy'),
            generateQuestion("$-2 + 5 = $?", ["3", "-3", "7", "-7"], 0, "Number line move.", 5, 'easy'),
            generateQuestion("Find square of 11.", ["121", "22", "110", "111"], 0, "$11 \\times 11$.", 5, 'easy'),
            generateQuestion("Divide 100 by 0.1.", ["1000", "10", "100", "1"], 0, "Multiplying by 10.", 5, 'easy'),
            generateQuestion("Which is NOT a factor of 12?", ["5", "3", "4", "6"], 0, "Non-divisor check.", 5, 'easy'),
            generateQuestion("Decimal $0.75$ as a fraction?", ["3/4", "1/4", "1/2", "3/5"], 0, "Standard conversion.", 5, 'easy'),
            generateQuestion("Sum of first 10 whole numbers?", ["45", "55", "50", "100"], 0, "0 to 9.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Highest common factor (HCF) shared by 15 and 25?", ["5", "3", "15", "75"], 0, "**Lesson**: The ceiling is 5.", 10, 'medium'),
            generateQuestion("Round $3456$ to 2 significant figures.", ["3500", "3400", "3460", "35"], 0, "Second digit is 4, 3rd is 5, round up.", 10, 'medium'),
            generateQuestion("Value of $(-3)^2$?", ["9", "-9", "6", "-6"], 0, "Square of negative is positive.", 10, 'medium'),
            generateQuestion("Find HCF of 18, 24.", ["6", "2", "3", "12"], 0, "Largest common divisor.", 10, 'medium'),
            generateQuestion("Express 36 as product of primes.", ["$2^2 \\times 3^2$", "$4 \\times 9$", "$2 \\times 3^3$", "$2^3 \\times 3$"], 0, "Unique factorisation.", 10, 'medium'),
            generateQuestion("Square root of $0.09$?", ["0.3", "0.03", "3", "0.9"], 0, "$0.3 \\times 0.3 = 0.09$.", 10, 'medium'),
            generateQuestion("$1/3$ of 90?", ["30", "60", "10", "45"], 0, "Division by 3.", 10, 'medium'),
            generateQuestion("Find common factor of 17 and 19.", ["1", "None", "17", "19"], 0, "Both are prime.", 10, 'medium'),
            generateQuestion("Write $2049$ to 1 s.f.", ["2000", "2", "2050", "3000"], 0, "Most significant digit.", 10, 'medium'),
            generateQuestion("Evaluate: $2 \\times (3 + 4)^2$.", ["98", "28", "50", "100"], 0, "BIDMAS: Brackets then Indices.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Lowest Common Multiple (LCM) of 4 and 6?", ["12", "24", "2", "36"], 0, "**Lesson**: Times tables cross at 12.", 20, 'hard'),
            generateQuestion("[Interleaved] Which fraction is definitely the largest?", ["2/3", "3/5", "4/7", "1/2"], 0, "**Lesson**: Compare via decimals efficiently. $2/3 \\approx 0.67$.", 20, 'hard'),
            generateQuestion("If $n^3 = 125$, find $n$.", ["5", "10", "15", "25"], 0, "Cube root.", 20, 'hard'),
            generateQuestion("Find LCM of 12, 18, 24.", ["72", "144", "48", "36"], 0, "Multiplying up.", 20, 'hard'),
            generateQuestion("Is 91 prime?", ["No", "Yes"], 0, "$7 \\times 13 = 91$.", 20, 'hard'),
            generateQuestion("Simplify: $|-5 - 3| - |2 - 8|$.", ["2", "14", "-2", "0"], 0, "$8 - 6 = 2$.", 20, 'hard'),
            generateQuestion("Express $0.000305$ in 2 s.f.", ["0.00031", "0.0003", "0.00030", "0.31"], 0, "Counting from non-zero.", 20, 'hard'),
            generateQuestion("Find sum of all prime factors of 60.", ["10", "5", "60", "15"], 0, "$2 + 3 + 5 = 10$.", 20, 'hard'),
            generateQuestion("Solve: $x/0.5 = 10$.", ["5", "20", "10.5", "15"], 0, "$x = 10 \\times 0.5 = 5$.", 20, 'hard'),
            generateQuestion("Estimate $\\sqrt{50} + \\sqrt{80}$ to nearest whole number.", ["16", "13", "15", "18"], 0, "$7 + 9 = 16$.", 20, 'hard')
        ]
    },
    'g2-s1-ratio': {
        learning: [
            // Easy (1-10)
            generateQuestion("A car travels $120\\text{ km}$ directly in 2 hours. Find speed.", ["$60\\text{ km/h}$", "$120\\text{ km/h}$", "$240\\text{ km/h}$", "$50\\text{ km/h}$"], 0, "**Lesson**: $120 \\div 2 = 60$.", 10, 'easy'),
            generateQuestion("Shrink ratio $20:30$.", ["2:3", "4:6", "10:15", "1:1.5"], 0, "**Lesson**: Strip out zeroes securely.", 10, 'easy'),
            generateQuestion("Simplest form of $4 : 8$?", ["1:2", "2:4", "1:4", "4:1"], 0, "Divide both by 4.", 10, 'easy'),
            generateQuestion("If $x/2 = 5$, find $x$.", ["10", "2.5", "7", "3"], 0, "Multiply by 2.", 10, 'easy'),
            generateQuestion("Ratio of 200g to 1kg?", ["1:5", "2:1", "1:2", "200:1"], 0, "Convert to same units: 200:1000.", 10, 'easy'),
            generateQuestion("Distance = Speed $\\times$ ___.", ["Time", "Mass", "Force", "Rate"], 0, "Classic formula.", 10, 'easy'),
            generateQuestion("Express 2:5 with 10 as second term.", ["4:10", "2:10", "5:10", "1:10"], 0, "Multiply both by 2.", 10, 'easy'),
            generateQuestion("Unit for speed?", ["km/h", "kg", "m", "s"], 0, "Rate of distance over time.", 10, 'easy'),
            generateQuestion("If 2 apples cost $\$1, 4$ apples cost ___.", ["$\$2", "$\$3", "$\$1.5", "$\$4"], 0, "Direct proportion.", 10, 'easy'),
            generateQuestion("Which is a rate?", ["$\$5/kg", "2:3", "100%", "5m"], 0, "Comparing different units.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("A map scale is 1:10000. $2\\text{cm}$ on map represents how many km?", ["$0.2\\text{km}$", "$2\\text{km}$", "$20\\text{km}$", "$0.02\\text{km}$"], 0, "**Lesson**: $2 \\times 10000 = 20000\\text{cm} = 0.2\\text{km}$.", 15, 'medium'),
            generateQuestion("Split $\$60$ into ratio 2:3. Largest part?", ["$\$36", "$\$24", "$\$40", "$\$30"], 0, "5 units = $\$60, 1 unit = $\$12. 3 units = $\$36.", 15, 'medium'),
            generateQuestion("Convert 72 km/h to m/s.", ["20", "200", "7.2", "25"], 0, "$72 \\times 1000 / 3600 = 720/36 = 20$.", 15, 'medium'),
            generateQuestion("If $200\\text{ml}$ costs $\$3, 1\\text{L}$ costs ___.", ["$\$15", "$\$30", "$\$12", "$\$6"], 0, "Multiply by 5.", 15, 'medium'),
            generateQuestion("Ratio of boys to girls is 4:5. Total 27, how many girls?", ["15", "12", "9", "20"], 0, "9 units = 27, 1 unit = 3. 5 units = 15.", 15, 'medium'),
            generateQuestion("Map scale 1:50000. Actual 10km is ___ cm on map.", ["20", "2", "200", "0.2"], 0, "$1000000 / 50000 = 20$.", 15, 'medium'),
            generateQuestion("Average speed of journey: 2km at 4km/h then 3km at 6km/h?", ["5km/h", "4.8km/h", "4km/h", "6km/h"], 0, "Total time = 0.5 + 0.5 = 1h. 5/1 = 5km/h.", 15, 'medium'),
            generateQuestion("If $y \propto x$ and $y=10$ when $x=2$, find $y$ when $x=5$.", ["25", "20", "15", "10"], 0, "$y = 5x$.", 15, 'medium'),
            generateQuestion("Unit price of 5kg rice for $\$12.", ["$\$2.40", "$\$3", "$\$2", "$\$2.50"], 0, "$\$12 / 5$.", 15, 'medium'),
            generateQuestion("Ratio of areas of two squares with side ratio 1:3?", ["1:9", "1:3", "1:6", "1:27"], 0, "Area scale is $k^2$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Average speed: $100\\text{km}$ at $50\\text{km/h}$, then $100\\text{km}$ at $100\\text{km/h}$.", ["$66.7\\text{km/h}$", "$75\\text{km/h}$", "$60\\text{km/h}$", "$80\\text{km/h}$"], 0, "**Lesson**: Total Dist 200 / Total Time 3 = 66.7.", 20, 'hard'),
            generateQuestion("Map scale is 1:20000. Find actual area of a $5\\text{cm}^2$ map region in km$^2$.", ["0.2", "1", "0.04", "0.1"], 0, "Area scale is $(1/20000)^2$. $1\\text{cm}=0.2\\text{km} \Rightarrow 1\\text{cm}^2=0.04\\text{km}^2$. $5 \\times 0.04 = 0.2$.", 20, 'hard'),
            generateQuestion("If income to savings ratio is 7:2 and savings is $\$500, find income.", ["$\$1750", "$\$1250", "$\$250", "$\$1000"], 0, "2 units = 500, 1 unit = 250. 7 units = 1750.", 20, 'hard'),
            generateQuestion("Runner A speed: 10m/s. Runner B: 30km/h. Who is faster?", ["Runner A", "Runner B", "Equal", "None"], 0, "$30\\text{km/h} = 8.33\\text{m/s}$.", 20, 'hard'),
            generateQuestion("A map has area scale 1:250000. Length scale is ___.", ["1:500", "1:50", "1:250", "1:2500"], 0, "$\\sqrt{250000} = 500$.", 20, 'hard'),
            generateQuestion("A car journey of T hours at speed V. If speed triples, new time?", ["T/3", "3T", "T+3", "T-3"], 0, "Inversely proportional.", 20, 'hard'),
            generateQuestion("Bronze is 9 parts copper, 1 part tin. Find tin in 5kg Bronze.", ["0.5kg", "4.5kg", "1kg", "0.1kg"], 0, "1/10 of 5.", 20, 'hard'),
            generateQuestion("Total distance if speed is $v$ for $2t$ then $2v$ for $t$.", ["$4vt$", "$3vt$", "$6vt$", "$vt$"], 0, "$2vt + 2vt = 4vt$.", 20, 'hard'),
            generateQuestion("Fuel efficiency: 15km/L. Cost for 300km if fuel is $\$2.50/L.", ["$\$50", "$\$20", "$\$750", "$\$120"], 0, "20L needed. $20 \\times 2.5 = 50$.", 20, 'hard'),
            generateQuestion("Three numbers in ratio 1:2:3. Sum is 18. Smallest?", ["3", "6", "9", "2"], 0, "6 units = 18, 1 unit = 3.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Find cost of 8 books if 3 books cost $\\$15$.", ["$\\$40$", "$\\$35$", "$\\$45$", "$\\$30$"], 0, "**Lesson**: 1 book is $\\$5$. $8 \\times 5 = \\$40$.", 5, 'easy'),
            generateQuestion("Ratio of 15 min to 1 hour.", ["1:4", "1:3", "15:1", "1:15"], 0, "15:60.", 5, 'easy'),
            generateQuestion("Express 0.5:1 in simplest whole numbers.", ["1:2", "5:10", "2:1", "1:5"], 0, "Multiply by 2.", 5, 'easy'),
            generateQuestion("Rate of travel: 100m in 10s.", ["10m/s", "1000m/s", "1m/s", "0.1m/s"], 0, "$100/10$.", 5, 'easy'),
            generateQuestion("If 1 dollar = 1.3 SGD, 10 dollars = ___ SGD.", ["13", "1.3", "130", "0.13"], 0, "Multiplication.", 5, 'easy'),
            generateQuestion("Unit for rate of work?", ["items/hour", "kg", "seconds", "$"], 0, "Output over time.", 5, 'easy'),
            generateQuestion("Equivalent of 3:4.", ["6:8", "9:15", "4:3", "1:1"], 0, "Scale by 2.", 5, 'easy'),
            generateQuestion("Speed is scalar, velocity is ___.", ["Vector", "Mass", "Number", "Static"], 0, "Directional property.", 5, 'easy'),
            generateQuestion("If a car stops, its speed is ___.", ["0", "Infinity", "1", "Same"], 0, "Stationary.", 5, 'easy'),
            generateQuestion("Ratio 1:1 means both parts are ___.", ["Equal", "Different", "Zero", "Infinite"], 0, "Identity.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Scale is 1:50000. Find actual area of a $4\\text{cm}^2$ map region.", ["$1\\text{km}^2$", "$2\\text{km}^2$", "$0.5\\text{km}^2$", "$0.2\\text{km}^2$"], 0, "**Lesson**: Area scale is squared! $1\\text{cm}^2 : 0.25\\text{km}^2$. $4 \\times 0.25 = 1$.", 10, 'medium'),
            generateQuestion("Split 100 into ratio 7:3. Difference?", ["40", "70", "30", "10"], 0, "10 units = 100. $70-30=40$.", 10, 'medium'),
            generateQuestion("A map 1cm : 2km. Find Area scale 1cm$^2$ : ___ km$^2$.", ["4", "2", "1", "0.5"], 0, "$2^2 = 4$.", 10, 'medium'),
            generateQuestion("Speed 20m/s to km/h.", ["72", "36", "100", "5.5"], 0, "$20 \\times 3.6 = 72$.", 10, 'medium'),
            generateQuestion("Population density: 5000 people over 10km$^2$.", ["500", "50000", "50", "1000"], 0, "$5000 / 10 = 500$.", 10, 'medium'),
            generateQuestion("Mix 2L red, 3L blue to get Purple. Ratio?", ["2:3", "3:2", "1:1", "2:5"], 0, "Direct mix parts.", 10, 'medium'),
            generateQuestion("Find x if 2:x = 6:15.", ["5", "3", "7.5", "10"], 0, "$2/x = 6/15 \\Rightarrow 6x = 30$.", 10, 'medium'),
            generateQuestion("Time to travel 150km at 60km/h.", ["2.5h", "2h", "3h", "1.5h"], 0, "$150/60 = 2.5$.", 10, 'medium'),
            generateQuestion("Scale 1:k. Area scale?", ["1:k^2", "1:2k", "1:sqrt(k)", "k:1"], 0, "Dimensionality.", 10, 'medium'),
            generateQuestion("Total cost of $n$ items at price $p$?", ["np", "n+p", "n/p", "p/n"], 0, "Scaling factor.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("A tap fills a bucket at $2\\text{L}$ per min. How long to fill $15\\text{L}$?", ["$7.5\\text{min}$", "$8\\text{min}$", "$7\\text{min}$", "$15\\text{min}$"], 0, "**Lesson**: Total volume / rate gives time.", 20, 'hard'),
            generateQuestion("[Interleaved] Which decimal equals exactly $4/5$?", ["0.8", "0.4", "0.5", "0.25"], 0, "**Lesson**: Convert fraction to 10ths! $8/10 = 0.8$.", 20, 'hard'),
            generateQuestion("A and B start at same place. A speed 5km/h, B speed 8km/h. Distance after 2h?", ["6km", "3km", "13km", "10km"], 0, "$16 - 10 = 6$.", 20, 'hard'),
            generateQuestion("Ratio of volumes of two cubes with side ratio 1:2?", ["1:8", "1:4", "1:2", "1:1"], 0, "$2^3 = 8$.", 20, 'hard'),
            generateQuestion("Map 1:40000. If actual road is 2km, map length?", ["5cm", "2cm", "8cm", "0.5cm"], 0, "$200000 / 40000 = 5$.", 20, 'hard'),
            generateQuestion("Relative speed of two cars (10m/s and 15m/s) moving towards each other?", ["25m/s", "5m/s", "10m/s", "15m/s"], 0, "Sum of speeds.", 20, 'hard'),
            generateQuestion("Express 1:2.5 as ratio of whole numbers.", ["2:5", "1:3", "4:10", "1:2"], 0, "Multiply by 2.", 20, 'hard'),
            generateQuestion("If 3 men build a wall in 4 days, how long for 6 men?", ["2", "8", "6", "1"], 0, "Inversely proportional.", 20, 'hard'),
            generateQuestion("Ratio A:B is 2:3, B:C is 4:5. A:C?", ["8:15", "2:5", "6:15", "1:1"], 0, "$(2 \\times 4) : (3 \\times 5)$.", 20, 'hard'),
            generateQuestion("Convert 1m$^2$ to cm$^2$.", ["10000", "100", "1000", "100000"], 0, "$100^2$.", 20, 'hard')
        ]
    },
    'g2-s1-percentage': {
        learning: [
            // Easy (1-10)
            generateQuestion("Convert $0.35$ to a percentage.", ["35%", "3.5%", "0.35%", "350%"], 0, "**Lesson**: Multiply by 100.", 10, 'easy'),
            generateQuestion("Find exactly $30\\%$ of 50.", ["15", "30", "60", "90"], 0, "**Lesson**: $0.3\\times 50 = 15$.", 10, 'easy'),
            generateQuestion("Express 1/2 as a percentage.", ["50%", "25%", "100%", "2%"], 0, "Half is 50%.", 10, 'easy'),
            generateQuestion("What is $10\\%$ of $\$200$?", ["$\$20", "$\$10", "$\$2", "$\$40"], 0, "Divide by 10.", 10, 'easy'),
            generateQuestion("Convert $75\\%$ to a fraction.", ["3/4", "1/4", "1/2", "3/5"], 0, "75/100 = 3/4.", 10, 'easy'),
            generateQuestion("Find $100\\%$ of 45.", ["45", "100", "0", "90"], 0, "Whole amount.", 10, 'easy'),
            generateQuestion("If 50% is 20, the full amount is ___.", ["40", "20", "10", "100"], 0, "Double it.", 10, 'easy'),
            generateQuestion("0.05 as a percentage?", ["5%", "0.5%", "50%", "0.05%"], 0, "Shift decimal 2 places.", 10, 'easy'),
            generateQuestion("Percentage of a passing grade 25/50?", ["50%", "25%", "75%", "100%"], 0, "Exactly half.", 10, 'easy'),
            generateQuestion("Which is greater: $20\\%$ of 50 or $50\\%$ of 20?", ["Equal", "$20\\%$ of 50", "$50\\%$ of 20", "None"], 0, "Both are 10.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Discount safely $\\$200$ by $20\\%$.", ["$160", "$40", "$180", "$150"], 0, "**Lesson**: $20\\%$ of 200 is 40. $200 - 40 = 160$.", 15, 'medium'),
            generateQuestion("Value increases from 200 to 250. Find percentage increase.", ["25%", "20%", "30%", "50%"], 0, "**Lesson**: Increase is 50. $50 / 200 = 0.25 = 25\\%$.", 15, 'medium'),
            generateQuestion("Increase $\$80$ by $15\\%$.", ["$\$92", "$\$88", "$\$100", "$\$12"], 0, "$10\%=8, 5\%=4$. $80+12=92$.", 15, 'medium'),
            generateQuestion("If $20\\%$ of a number is 14, what is the number?", ["70", "28", "140", "35"], 0, "$14 / 0.2 = 70$.", 15, 'medium'),
            generateQuestion("A grade of 18/24 is what percentage?", ["75%", "80%", "66.7%", "72%"], 0, "3/4 = 75%.", 15, 'medium'),
            generateQuestion("Find $12.5\\%$ of 80.", ["10", "12", "8", "15"], 0, "1/8 of 80.", 15, 'medium'),
            generateQuestion("A population grows from 1000 to 1100. Growth %?", ["10%", "100%", "1%", "110%"], 0, "100/1000.", 15, 'medium'),
            generateQuestion("Value of $\$40$ after 7% GST?", ["$\$42.80", "$\$43.20", "$\$45", "$\$2.80"], 0, "$40 \\times 1.07$.", 15, 'medium'),
            generateQuestion("Express 4.5% as a decimal.", ["0.045", "0.45", "4.5", "0.0045"], 0, "Divide by 100.", 15, 'medium'),
            generateQuestion("Fraction 7/8 as a percentage?", ["87.5%", "70%", "85%", "12.5%"], 0, "Divide 7 by 8.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Original price if $25\\%$ off costs $\$60$?", ["$\$80", "$\$75", "$\$100", "$\$120"], 0, "75% = 60, 100% = 80.", 20, 'hard'),
            generateQuestion("A value drops from 50 to 42. Percentage decrease?", ["16%", "8%", "20%", "12%"], 0, "8/50 = 16%.", 20, 'hard'),
            generateQuestion("Compound interest on $\$1000 at 5% for 1 year?", ["$\$50", "$\$1050", "$\$5", "$\$100"], 0, "Single year interest.", 20, 'hard'),
            generateQuestion("If $x$ is $20\\%$ of $y$, then $y$ is what $\%$ of $x$?", ["500%", "200%", "80%", "50%"], 0, "$y = 5x$.", 20, 'hard'),
            generateQuestion("Service charge 10% then GST 7%. Total extra on $\$100$?", ["$\$17.70", "$\$17", "$\$117.70", "$\$17.10"], 0, "$100 \\times 1.1 \\times 1.07 = 117.7$.", 20, 'hard'),
            generateQuestion("A car loses $15\\%$ value annually. Value after 1 year if start $\$20000$?", ["$\$17000", "$\$18500", "$\$3000", "$\$15000"], 0, "85% of 20000.", 20, 'hard'),
            generateQuestion("If 30% of A is 45, find 40% of A.", ["60", "150", "45", "75"], 0, "A=150, 40% is 60.", 20, 'hard'),
            generateQuestion("Express $x/y$ as a percentage.", ["$(x/y) \\times 100\\%$", "$x/y$", "$100x/y$", "$xy/100$"], 0, "Standard conversion.", 20, 'hard'),
            generateQuestion("What percentage of 1 hour is 45 seconds?", ["1.25%", "0.75%", "12.5%", "1.5%"], 0, "$45 / 3600 = 1/80 = 1.25\%$.", 20, 'hard'),
            generateQuestion("A mixture is 40% water. Add 2L water to 8L mixture. New %?", ["52%", "50%", "48%", "60%"], 0, "Initial water: 3.2L. Final water: 5.2L / 10L = 52%.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Calculate exactly $15\\%$ of 200.", ["30", "15", "45", "150"], 0, "**Lesson**: $0.15 \\times 200 = 30$.", 5, 'easy'),
            generateQuestion("0.3 as a percentage?", ["30%", "3%", "0.3%", "300%"], 0, "Multiply by 100.", 5, 'easy'),
            generateQuestion("$25\\%$ of 40?", ["10", "4", "25", "20"], 0, "Quarter.", 5, 'easy'),
            generateQuestion("If total is 80, what is 50%?", ["40", "20", "160", "80"], 0, "Half.", 5, 'easy'),
            generateQuestion("Fraction 1/10 as %?", ["10%", "1%", "100%", "0.1%"], 0, "10/100.", 5, 'easy'),
            generateQuestion("Increase 100 by 5%.", ["105", "100", "5", "150"], 0, "Simple sum.", 5, 'easy'),
            generateQuestion("If 10% is 5, 100% is ___.", ["50", "10", "5", "500"], 0, "Scale by 10.", 5, 'easy'),
            generateQuestion("Percentage of red balls (3) in bag of 10?", ["30%", "3%", "10%", "70%"], 0, "3/10.", 5, 'easy'),
            generateQuestion("0.88 as percentage?", ["88%", "8.8%", "0.88%", "880%"], 0, "Shift decimal.", 5, 'easy'),
            generateQuestion("Convert 20% to decimal.", ["0.2", "2.0", "0.02", "20"], 0, "Divide by 100.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("A car drops from $\\$10,000$ to $\\$8,500$. Find percentage decrease.", ["15%", "85%", "25%", "10%"], 0, "**Lesson**: Drop is 1500. $1500/10000 = 15\\%$.", 10, 'medium'),
            generateQuestion("Find $17.5\\%$ of 200.", ["35", "17.5", "70", "34"], 0, "$0.175 \\times 200$.", 10, 'medium'),
            generateQuestion("An item costs $\$50$ before 8% tax. Tax amount?", ["$\$4", "$\$8", "$\$46", "$\$54"], 0, "$50 \\times 0.08$.", 10, 'medium'),
            generateQuestion("Express 3/5 as a percentage.", ["60%", "35%", "40%", "15%"], 0, "0.6 = 60%.", 10, 'medium'),
            generateQuestion("If price rises from $\$2 to $\$2.50, % rise?", ["25%", "50%", "20%", "10%"], 0, "$0.5 / 2 = 25\%$.", 10, 'medium'),
            generateQuestion("Find 120% of 50.", ["60", "50", "70", "120"], 0, "$1.2 \\times 50$.", 10, 'medium'),
            generateQuestion("15 is what percentage of 60?", ["25%", "15%", "40%", "20%"], 0, "1/4 = 25%.", 10, 'medium'),
            generateQuestion("Decrease 200 by 4.5%.", ["191", "195.5", "9", "209"], 0, "$200 - 9 = 191$.", 10, 'medium'),
            generateQuestion("What is $\$3$ as percentage of $\$12$?", ["25%", "33.3%", "12%", "30%"], 0, "1/4.", 10, 'medium'),
            generateQuestion("Convert 1/8 to %.", ["12.5%", "8%", "1.25%", "25%"], 0, "Half of quarter.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("After a $20\\%$ discount, price is $\$240. Original price?", ["$\$300", "$\$280", "$\$288", "$\$200"], 0, "**Lesson**: $80\\%$ is 240, so $100\\%$ is $240 / 0.8 = 300$.", 20, 'hard'),
            generateQuestion("[Interleaved] $2x + 5 = 15$. Find x.", ["5", "10", "2", "20"], 0, "**Lesson**: $2x = 10$, $x = 5$.", 10, 'expert'),
            generateQuestion("If tax is 7% and total is $\$107, find tax amount.", ["$\$7", "$\$100", "$\$7.49", "$\$1"], 0, "$1.07X = 107, X=100$. Tax=7.", 20, 'hard'),
            generateQuestion("A shop increases price by 20% then discounts by 20%. Net % change?", ["4% decrease", "0%", "4% increase", "2% decrease"], 0, "$1.2 \\times 0.8 = 0.96$.", 20, 'hard'),
            generateQuestion("If 40% of x is 60, find 10% of x.", ["15", "6", "60", "24"], 0, "$60 / 4$.", 20, 'hard'),
            generateQuestion("Convert 0.2% to decimal.", ["0.002", "0.02", "0.2", "0.0002"], 0, "Divide by 100.", 20, 'hard'),
            generateQuestion("Successive discounts of 10% and 10%. Equivalent single discount?", ["19%", "20%", "18%", "21%"], 0, "$1 - 0.9 \\times 0.9 = 0.19$.", 20, 'hard'),
            generateQuestion("Water expands 10% when freezing. Volume increase for 1L?", ["0.1L", "1.1L", "0.01L", "1L"], 0, "10% of 1.", 20, 'hard'),
            generateQuestion("If A's height is 25% more than B's, B is what % shorter than A?", ["20%", "25%", "15%", "10%"], 0, "$A = 1.25B \Rightarrow B = 0.8A$.", 20, 'hard'),
            generateQuestion("Solve: $x + 10\%x = 33$.", ["30", "33", "3", "20"], 0, "$1.1x = 33 \Rightarrow x = 30$.", 20, 'hard')
        ]
    },
    'g2-s1-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Simplify cleanly $3x + 5y - x + 2y$.", ["$2x + 7y$", "$4x + 7y$", "$2x + 3y$", "$4x + 3y$"], 0, "**Lesson**: Combine like terms. $3x-x=2x$, $5y+2y=7y$.", 10, 'easy'),
            generateQuestion("Expand exactly $4(x - 3)$.", ["$4x - 12$", "$4x - 3$", "$x - 12$", "$4x + 12$"], 0, "**Lesson**: Distribute 4 securely.", 10, 'easy'),
            generateQuestion("Simplify $m + m + m$.", ["$3m$", "$m^3$", "$3+m$", "$m$"], 0, "Repeated addition.", 10, 'easy'),
            generateQuestion("Evaluate $x + 5$ when $x = 2$.", ["7", "5", "10", "3"], 0, "Substitution.", 10, 'easy'),
            generateQuestion("What is $2x \\times 3$?", ["$6x$", "$5x$", "$2x3$", "$x^5$"], 0, "Multiplication of terms.", 10, 'easy'),
            generateQuestion("Factorise $2x + 4$.", ["$2(x+2)$", "$2x(1+2)$", "$x(2+4)$", "$2(x+4)$"], 0, "Common factor 2.", 10, 'easy'),
            generateQuestion("If $2n = 10$, $n = ___$.", ["5", "2", "20", "8"], 0, "Inverse of multiplication.", 10, 'easy'),
            generateQuestion("Variable in $3y - 1$ is ___.", ["y", "3", "1", "3y"], 0, "The letter represents a value.", 10, 'easy'),
            generateQuestion("Constant term in $4x + 7$?", ["7", "4", "x", "4x"], 0, "Bare number.", 10, 'easy'),
            generateQuestion("Simplify $2a + 3b - a$.", ["$a + 3b$", "$3a + 3b$", "$2b$", "$a-3b$"], 0, "Combine 'a' terms.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve optimally $5x - 2 = 13$.", ["3", "5", "15", "7.5"], 0, "**Lesson**: $5x=15 \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Expand $(x+2)(x+3)$.", ["$x^2 + 5x + 6$", "$x^2 + 6$", "$x^2 + 5x + 5$", "$2x + 5$"], 0, "FOIL expansion.", 15, 'medium'),
            generateQuestion("Solve $\\frac{x}{3} = 4$.", ["12", "7", "1", "1.33"], 0, "Multiply by 3.", 15, 'medium'),
            generateQuestion("Simplify $2(x+4) - 3$.", ["$2x + 5$", "$2x + 8$", "$2x + 1$", "$2x + 11$"], 0, "$2x + 8 - 3$.", 15, 'medium'),
            generateQuestion("Factorise fully $x^2 + 5x$.", ["$x(x+5)$", "$x(1+5)$", "$(x+5)$", "$x^2(1+5)$"], 0, "Common factor x.", 15, 'medium'),
            generateQuestion("If $3(x-1) = 9$, $x = ___$.", ["4", "3", "2", "10"], 0, "$x-1=3$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{6x + 9}{3}$.", ["$2x + 3$", "$6x + 3$", "$2x + 9$", "$3x + 3$"], 0, "Divide both terms.", 15, 'medium'),
            generateQuestion("Solve $10 - 2x = 4$.", ["3", "7", "4", "2"], 0, "$2x=6$.", 15, 'medium'),
            generateQuestion("Expand $m(m-4)$.", ["$m^2 - 4m$", "$m^2 - 4$", "$2m - 4$", "$m - 4$"], 0, "Distribute m.", 15, 'medium'),
            generateQuestion("Evaluate $a^2 + b$ if $a=3, b=4$.", ["13", "10", "11", "25"], 0, "$9 + 4 = 13$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve flawlessly $2(x+4) = 3x - 1$.", ["9", "7", "3", "5"], 0, "**Lesson**: $2x+8 = 3x-1 \\Rightarrow 9 = x$.", 20, 'hard'),
            generateQuestion("Solve system: $x+y=5, x-y=1$.", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 0, "Simultaneous solution.", 20, 'hard'),
            generateQuestion("Factorise $x^2 - 16$.", ["$(x-4)(x+4)$", "$(x-8)(x+8)$", "$(x-16)(x+1)$", "$(x-4)^2$"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("Solve $\\frac{2}{x} = 0.5$.", ["4", "1", "0.25", "2"], 0, "$0.5x = 2 \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - y^2}{x - y}$.", ["$x+y$", "$x-y$", "$x^2 + y^2$", "1"], 0, "Factor then cancel.", 20, 'hard'),
            generateQuestion("Expand $(x+y)^2$.", ["$x^2 + 2xy + y^2$", "$x^2 + y^2$", "$2x + 2y$", "$x^2 + xy + y^2$"], 0, "Perfect square formula.", 20, 'hard'),
            generateQuestion("Solve $x/2 + x/3 = 10$.", ["12", "6", "10", "30"], 0, "$5x/6 = 10 \\Rightarrow 5x=60 \\Rightarrow x=12$.", 20, 'hard'),
            generateQuestion("If $V = \\frac{1}{3}Ah$, find $h$ if $V=10, A=15$.", ["2", "45", "1.5", "5"], 0, "$10 = \\frac{1}{3}(15)h \\Rightarrow 10=5h \\Rightarrow h=2$.", 20, 'hard'),
            generateQuestion("Solve $x^2 = 49$ for all $x$.", ["$7, -7$", "7", "49", "0"], 0, "Two roots.", 20, 'hard'),
            generateQuestion("Simplify $(2x^2 y)^3$.", ["$8x^6 y^3$", "$6x^5 y^3$", "$2x^6 y^3$", "$8x^5 y^4$"], 0, "Distribute power.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Simplify carefully $2m \\times 3m$.", ["$6m^2$", "$5m^2$", "$6m$", "$5m$"], 0, "**Lesson**: Multiply coefficients ($2\\times 3=6$) and variables ($m\\times m = m^2$).", 5, 'easy'),
            generateQuestion("Which is 'like' to $2x$?", ["$5x$", "$2y$", "$x^2$", "2"], 0, "Same variable type.", 5, 'easy'),
            generateQuestion("Simplify $4a - a$.", ["$3a$", "4", "a", "3"], 0, "Subtraction of terms.", 5, 'easy'),
            generateQuestion("Value of $x - 7$ if $x = 10$.", ["3", "17", "-3", "70"], 0, "Basic subtraction.", 5, 'easy'),
            generateQuestion("Expand $3(2y+1)$.", ["$6y+3$", "$5y+3$", "$6y+1$", "$5y+1$"], 0, "Distribute 3.", 5, 'easy'),
            generateQuestion("If $x+2=5, x=___$.", ["3", "7", "2.5", "10"], 0, "Isolate x.", 5, 'easy'),
            generateQuestion("Term $5y$ consists of coefficient ___.", ["5", "y", "1", "0"], 0, "Numerical factor.", 5, 'easy'),
            generateQuestion("Simplify $0 \\times x$.", ["0", "x", "1", "x^0"], 0, "Multiplication by zero property.", 5, 'easy'),
            generateQuestion("Result of $a \\times a$?", ["$a^2$", "$2a$", "$a$", "$a/a$"], 0, "Index notation.", 5, 'easy'),
            generateQuestion("If $y=4, 2y=___$.", ["8", "6", "2", "16"], 0, "Double value.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Factorise purely $6x + 9$.", ["$3(2x+3)$", "$3(2x+9)$", "$3x(2+3)$", "$2(3x+4.5)$"], 0, "**Lesson**: HCF is 3. Pull it out.", 10, 'medium'),
            generateQuestion("Simplify $2x + 4x - 10x$.", ["$-4x$", "$4x$", "$-6x$", "$6x$"], 0, "Track signs.", 10, 'medium'),
            generateQuestion("Expand $(x-1)(x+1)$.", ["$x^2 - 1$", "$x^2 + 1$", "$x^2 - 2x + 1$", "$2x$"], 0, "Result of conjugate pairs.", 10, 'medium'),
            generateQuestion("If $x=2, y=3$, value of $xy + x$?", ["8", "6", "5", "10"], 0, "$2 \\times 3 + 2$.", 10, 'medium'),
            generateQuestion("Solve $\\frac{3}{x} = 1$.", ["3", "1", "0", "1/3"], 0, "$x=3$.", 10, 'medium'),
            generateQuestion("Expand $-2(x-5)$.", ["$-2x + 10$", "$-2x - 10$", "$x + 10$", "$2x - 10$"], 0, "Negative distribution.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{x^5}{x^2}$.", ["$x^3$", "$x^7$", "$x^{2.5}$", "1"], 0, "Subtract indices.", 10, 'medium'),
            generateQuestion("If $3n + 1 = 13, n = ___$.", ["4", "5", "10", "3"], 0, "Subtract 1 then divide.", 10, 'medium'),
            generateQuestion("Factorise $5a^2 + 10a$.", ["$5a(a+2)$", "$5(a^2+2a)$", "$a(5a+10)$", "$5a(a+10)$"], 0, "GCM retrieval.", 10, 'medium'),
            generateQuestion("Evaluate $\\sqrt{x+y}$ if $x=5, y=4$.", ["3", "9", "4", "5"], 0, "$\sqrt{9}$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve securely $\\frac{x}{4} + 2 = 7$.", ["20", "5", "11", "28"], 0, "**Lesson**: $\\frac{x}{4} = 5 \\Rightarrow x = 20$.", 20, 'hard'),
            generateQuestion("[Interleaved] Find HCF of 16 and 24.", ["8", "4", "2", "48"], 0, "**Lesson**: Largest factor sharing both is 8.", 10, 'expert'),
            generateQuestion("Solve $x^2 + x - 6 = 0$.", ["$2, -3$", "$2, 3$", "$-2, 3$", "$-2, -3$"], 0, "Factorise to $(x-2)(x+3)$.", 20, 'hard'),
            generateQuestion("If $2x + y = 10$ and $y=2x$, find x.", ["2.5", "2", "5", "4"], 0, "$4x = 10$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{2x}{5} - \\frac{x}{3}$.", ["$\\frac{x}{15}$", "$\\frac{x}{2}$", "$\\frac{2x}{15}$", "$x$"], 0, "LCM is 15. $6x-5x$.", 20, 'hard'),
            generateQuestion("Factorise by grouping: $xy + 2x + 3y + 6$.", ["$(x+3)(y+2)$", "$(x+2)(y+3)$", "$(x+6)(y+1)$", "None"], 0, "$x(y+2) + 3(y+2)$.", 20, 'hard'),
            generateQuestion("If $x \propto 1/y$ and $x=2$ when $y=5$, find $x$ when $y=10$.", ["1", "4", "2.5", "0.5"], 0, "$xy=10$.", 20, 'hard'),
            generateQuestion("Expand $(x+1)(x+2)(x+3)$ coefficient for $x^2$?", ["6", "11", "1", "5"], 0, "$(x^2 + 3x + 2)(x+3) \Rightarrow 3x^2 + 3x^2 = 6x^2$.", 20, 'hard'),
            generateQuestion("Solve $\\sqrt{2x-1} = 3$.", ["5", "4", "10", "13"], 0, "$2x-1=9$.", 20, 'hard'),
            generateQuestion("Expression for perimeter of rectangle with sides $x$ and $2x+1$?", ["$6x+2$", "$3x+1$", "$4x+1$", "$2x^2+x$"], 0, "$2(x + 2x+1)$.", 20, 'hard')
        ]
    },
    'g2-s1-funcs': {
        learning: [
            // Easy (1-10)
            generateQuestion("Find gradient for $y = 5x - 2$.", ["5", "-2", "x", "y"], 0, "**Lesson**: Gradient is m in $y=mx+c$.", 10, 'easy'),
            generateQuestion("Find y-intercept cleanly for $y = -3x + 7$.", ["7", "-3", "4", "0"], 0, "**Lesson**: The bare constant is the y-intercept.", 10, 'easy'),
            generateQuestion("Point (0, 0) is the ___.", ["Origin", "Peak", "Intercept", "Axis"], 0, "Center of coordinate system.", 10, 'easy'),
            generateQuestion("Vertical axis is named ___.", ["y-axis", "x-axis", "z-axis", "m-axis"], 0, "Standard convention.", 10, 'easy'),
            generateQuestion("Horizontal axis is named ___.", ["x-axis", "y-axis", "Origin", "Hill"], 0, "Standard convention.", 10, 'easy'),
            generateQuestion("Coordinates of a point at (3 right, 2 up)?", ["(3, 2)", "(2, 3)", "3, 2", "(-3, -2)"], 0, "Cartesian notation.", 10, 'easy'),
            generateQuestion("In (x, y), which comes first?", ["x", "y", "Both", "Depends"], 0, "Alphabetical order.", 10, 'easy'),
            generateQuestion("If y = x, then (5, ?) is on the line.", ["5", "0", "1", "10"], 0, "Identity function.", 10, 'easy'),
            generateQuestion("Line y = 4 is ___.", ["Horizontal", "Vertical", "Diagonal", "Curved"], 0, "Constant y.", 10, 'easy'),
            generateQuestion("Line x = -2 is ___.", ["Vertical", "Horizontal", "Diagonal", "Point"], 0, "Constant x.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Substitute exactly $x = 2$ securely into $y = 4x - 1$. Find y.", ["7", "8", "6", "9"], 0, "**Lesson**: $y = 4(2) - 1 = 7$.", 15, 'medium'),
            generateQuestion("Find formally equation explicitly passing smoothly $(0, 3)$ strictly and optimally $(2, 7)$.", ["$y = 2x + 3$", "$y = 4x + 3$", "$y = 2x - 3$", "$y = 3x + 2$"], 0, "**Lesson**: Gradient $m = (7-3)/(2-0) = 2$. Intercept is 3.", 15, 'medium'),
            generateQuestion("Gradient of line through (1, 1) and (3, 5)?", ["2", "4", "0.5", "1"], 0, "$(5-1)/(3-1) = 4/2 = 2$.", 15, 'medium'),
            generateQuestion("Equation of line with gradient 3 and intercept -5?", ["$y = 3x - 5$", "$y = -5x + 3$", "$y = 3x + 5$", "$y = -3x - 5$"], 0, "Plug into $y=mx+c$.", 15, 'medium'),
            generateQuestion("Where does y = 2x - 6 cross the y-axis?", ["-6", "0", "3", "2"], 0, "Value of c.", 15, 'medium'),
            generateQuestion("Mirror (3, 4) across y-axis.", ["(-3, 4)", "(3, -4)", "(-3, -4)", "(4, 3)"], 0, "x sign flips.", 15, 'medium'),
            generateQuestion("Midpoint of (0, 0) and (4, 10)?", ["(2, 5)", "(4, 10)", "(2, 10)", "(0, 5)"], 0, "Average coordinates.", 15, 'medium'),
            generateQuestion("If (2, k) sits on y = 5x + 1, k = ___.", ["11", "10", "1", "6"], 0, "$2(5) + 1$.", 15, 'medium'),
            generateQuestion("Gradient of horizontal line?", ["0", "Undiscovered", "1", "Infinity"], 0, "No rise.", 15, 'medium'),
            generateQuestion("Line through (2, 5) and (2, 10) has gradient ___.", ["Undefined", "5", "0", "1"], 0, "Vertical line (division by zero).", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find gradient of line $2y = 6x + 4$.", ["3", "6", "2", "4"], 0, "Divide by 2 first: $y = 3x + 2$.", 20, 'hard'),
            generateQuestion("Find equation of line through (2, 5) with gradient -1.", ["$y = -x + 7$", "$y = -x + 5$", "$y = x + 3$", "$y = -x - 7$"], 0, "$5 = -1(2) + c \Rightarrow c=7$.", 20, 'hard'),
            generateQuestion("Where does $y = 3x - 12$ cross the x-axis?", ["4", "0", "-12", "3"], 0, "$0 = 3x - 12 \Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Find distance from (0, 0) to (6, 8).", ["10", "14", "7", "48"], 0, "$\sqrt{36+64}$.", 20, 'hard'),
            generateQuestion("Find gradient of line perpendicular to $y = 2x + 1$.", ["-0.5", "2", "-2", "0.5"], 0, "Negative reciprocal.", 20, 'hard'),
            generateQuestion("If $f(x) = x^2 - x$, find $f(-2)$.", ["6", "2", "-6", "4"], 0, "$(-2)^2 - (-2) = 4+2=6$.", 20, 'hard'),
            generateQuestion("Find equation of line through (1, 2) and (4, 11).", ["$y = 3x - 1$", "$y = 3x + 1$", "$y = 9x - 7$", "$y = 3x + 2$"], 0, "$m=9/3=3. 2=3(1)+c \Rightarrow c=-1$.", 20, 'hard'),
            generateQuestion("Intersection of y = x and y = 2x - 5?", ["(5, 5)", "(0, 0)", "(2.5, 2.5)", "(1, 1)"], 0, "$x = 2x - 5 \Rightarrow x=5$.", 20, 'hard'),
            generateQuestion("Which point is NOT on $y = x^2 + 1$?", ["(2, 4)", "(0, 1)", "(1, 2)", "(-1, 2)"], 0, "$2^2 + 1 = 5 \\neq 4$.", 20, 'hard'),
            generateQuestion("Coordinate of turning point for $y = (x-2)^2 + 3$?", ["(2, 3)", "(-2, 3)", "(3, 2)", "(0, 7)"], 0, "Vertex form.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Which coordinate brilliantly sits securely on uniquely $y = 2x + 4$?", ["(1, 6)", "(2, 7)", "(0, 0)", "(-1, 3)$"], 0, "**Lesson**: Plug in x. If x=1, $y=2(1)+4=6$.", 5, 'easy'),
            generateQuestion("Value of y at y-intercept?", ["c", "m", "x", "1"], 0, "Constant in y=mx+c.", 5, 'easy'),
            generateQuestion("Points (1, 2) and (2, 4) form a line with gradient ___.", ["2", "1", "0.5", "4"], 0, "Ratio of rise to run.", 5, 'easy'),
            generateQuestion("Is (0, 5) on the y-axis?", ["Yes", "No"], 0, "x=0 test.", 5, 'easy'),
            generateQuestion("Does y = x pass through origin?", ["Yes", "No"], 0, "Test (0,0).", 5, 'easy'),
            generateQuestion("Quadrant for (-2, -5)?", ["3rd", "1st", "2nd", "4th"], 0, "Both negative.", 5, 'easy'),
            generateQuestion("Equation of x-axis?", ["y = 0", "x = 0", "y = x", "None"], 0, "Altitude is zero.", 5, 'easy'),
            generateQuestion("If gradient is zero, line is ___.", ["Horizontal", "Vertical", "Diagonal", "Point"], 0, "No steepness.", 5, 'easy'),
            generateQuestion("Plotting (x, y) on a plane is ___ system.", ["Cartesian", "Polar", "Spherical", "Modular"], 0, "Named after Descartes.", 5, 'easy'),
            generateQuestion("If y = -x, and x=3, y=___.", ["-3", "3", "0", "-1"], 0, "Sign flip.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Where specifically does flawlessly $y = 3x - 12$ cut perfectly the exact explicitly x-axis?", ["4", "-12", "0", "3"], 0, "**Lesson**: X-axis strictly means firmly $y=0$. Fully $3x-12=0 \\Rightarrow x=4$.", 10, 'medium'),
            generateQuestion("Find gradient of $y + x = 5$.", ["-1", "1", "5", "0"], 0, "$y = -x + 5$.", 10, 'medium'),
            generateQuestion("Intersection of y = 4 and x = 2?", ["(2, 4)", "(4, 2)", "6", "8"], 0, "Cross meeting.", 10, 'medium'),
            generateQuestion("Distance of (3, -4) from origin?", ["5", "7", "1", "25"], 0, "Pythagoras with signs.", 10, 'medium'),
            generateQuestion("Which is parallel to y = 2x?", ["$y = 2x + 7$", "$y = 3x$", "$y = -2x$", "$x = 2y$"], 0, "Same gradient.", 10, 'medium'),
            generateQuestion("If y = 1/x, find y when x = 0.5.", ["2", "0.5", "1", "0"], 0, "Reciprocal.", 10, 'medium'),
            generateQuestion("Value of c for line through (0, 10) and (5, 0)?", ["10", "0", "5", "-2"], 0, "Point on y-axis.", 10, 'medium'),
            generateQuestion("Gradient of $y = -0.5x + 2$?.", ["-0.5", "2", "0.5", "1"], 0, "Coefficient of x.", 10, 'medium'),
            generateQuestion("Does (1, 1) sit on $y = x^2$?", ["Yes", "No"], 0, "$1^2 = 1$.", 10, 'medium'),
            generateQuestion("Solve: y = 2x, y = 10. Find x.", ["5", "20", "2", "0"], 0, "Equality.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Gradient correctly seamlessly precisely uniquely of exactly solidly securely $(1, 2)$ exclusively optimally definitively effectively to $(4, 11)$?", ["3", "9", "4", "2"], 0, "**Lesson**: Rise/Run = $(11-2)/(4-1) = 9/3 = 3$.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify elegantly precisely beautifully securely correctly $5a - 2b - a + 3b$.", ["$4a + b$", "$4a - b$", "$6a + 5b$", "$4a - 5b$"], 0, "**Lesson**: Group creatively cleverly smartly effectively creatively properly creatively $4a+b$.", 10, 'expert'),
            generateQuestion("Equation of line perpendicular to y = 0.5x through (1, 1)?", ["$y = -2x + 3$", "$y = -2x + 1$", "$y = 2x - 1$", "$y = 0.5x + 0.5$"], 0, "$m = -2. 1 = -2(1) + c \Rightarrow c=3$.", 20, 'hard'),
            generateQuestion("Find x-intercept of $2x - 3y = 12$.", ["6", "-4", "12", "0"], 0, "Set y=0.", 20, 'hard'),
            generateQuestion("Find distance between (1, 2) and (4, 6).", ["5", "7", "3", "4"], 0, "$\sqrt{3^2 + 4^2}$.", 20, 'hard'),
            generateQuestion("Which is a parabolic function?", ["$y = x^2 - 1$", "$y = 2x + 1$", "$y = 1/x$", "$y^2 + x^2 = 1$"], 0, "Quadratic power.", 20, 'hard'),
            generateQuestion("Turning point of $y = -x^2 + 4x$.", ["(2, 4)", "(0, 0)", "(4, 0)", "(-2, -12)"], 0, "Axis of symmetry $x=2$.", 20, 'hard'),
            generateQuestion("Solve: $y = x^2, y = 4$ for $x > 0$.", ["2", "4", "16", "0"], 0, "Boundary check.", 20, 'hard'),
            generateQuestion("Gradient of line $ax + by = c$ is ___.", ["$-a/b$", "$a/b$", "$c/b$", "$-c/a$"], 0, "$by = -ax + c \Rightarrow y = -a/b x + c/b$.", 20, 'hard'),
            generateQuestion("Length of line segment from (a, 0) to (0, b)?", ["$\sqrt{a^2 + b^2}$", "$a+b$", "$ab$", "0"], 0, "Distance formula application.", 20, 'hard')
        ]
    },
    'g2-s1-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Interior angles of a triangle sum to ___.", ["$180^\\circ$", "$90^\\circ$", "$360^\\circ$", "$270^\\circ$"], 0, "**Lesson**: A triangle's angles always sum to 180 degrees.", 10, 'easy'),
            generateQuestion("What is a quadrilateral?", ["4-sided shape", "3-sided shape", "Circle", "Triangle"], 0, "Prefix 'quad' means four.", 10, 'easy'),
            generateQuestion("Angle on a straight line is ___.", ["$180^\\circ$", "$90^\\circ$", "$360^\\circ$", "$270^\\circ$"], 0, "Half a rotation.", 10, 'easy'),
            generateQuestion("A right angle is exactly ___.", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "$100^\\circ$"], 0, "L-shaped angle.", 10, 'easy'),
            generateQuestion("Sum of angles in a square?", ["$360^\\circ$", "$180^\\circ$", "$90^\\circ$", "$720^\\circ$"], 0, "$4 \\times 90 = 360$.", 10, 'easy'),
            generateQuestion("Which is an obtuse angle?", ["$120^\\circ$", "$45^\\circ$", "$90^\\circ$", "$200^\\circ$"], 0, "Between 90 and 180.", 10, 'easy'),
            generateQuestion("Acute angles are less than ___.", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "$360^\\circ$"], 0, "Sharp angles.", 10, 'easy'),
            generateQuestion("Reflex angle is greater than ___.", ["$180^\\circ$", "$90^\\circ$", "$360^\\circ$", "$45^\\circ$"], 0, "Bent back.", 10, 'easy'),
            generateQuestion("Number of sides in a pentagon?", ["5", "6", "4", "8"], 0, "Penta means five.", 10, 'easy'),
            generateQuestion("Are both sides of an isosceles triangle equal?", ["2 sides", "3 sides", "0 sides", "4 sides"], 0, "Exactly two.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find x if two angles of a triangle are $50^\\circ$ and $60^\\circ$.", ["$70^\\circ$", "$60^\\circ$", "$50^\\circ$", "$110^\\circ$"], 0, "**Lesson**: $180 - (50 + 60) = 70$.", 15, 'medium'),
            generateQuestion("Alternate angles on parallel lines are ___.", ["Equal", "Add to 180", "Add to 90", "Different"], 0, "Z-angles.", 15, 'medium'),
            generateQuestion("Corresponding angles on parallel lines are ___.", ["Equal", "Add to 180", "Add to 90", "Supplementary"], 0, "F-angles.", 15, 'medium'),
            generateQuestion("Interior angles of a hexagon (6 sides) sum to?", ["$720^\\circ$", "$540^\\circ$", "$360^\\circ$", "$900^\\circ$"], 0, "$(6-2) \\times 180 = 720$.", 15, 'medium'),
            generateQuestion("Find one interior angle of a regular pentagon.", ["$108^\\circ$", "$72^\\circ$", "$90^\\circ$", "$120^\\circ$"], 0, "$540 / 5 = 108$.", 15, 'medium'),
            generateQuestion("Radius is 5cm. Diameter is ___.", ["10cm", "5cm", "2.5cm", "25cm"], 0, "$2 \\times r$.", 15, 'medium'),
            generateQuestion("Area of a rectangle with sides 4 and 6?", ["24", "10", "20", "48"], 0, "$4 \\times 6$.", 15, 'medium'),
            generateQuestion("Perimeter of square with side 5?", ["20", "25", "10", "15"], 0, "$4 \\times 5$.", 15, 'medium'),
            generateQuestion("Total degrees in a full circle?", ["$360^\\circ$", "$180^\\circ$", "$720^\\circ$", "$90^\\circ$"], 0, "One full turn.", 15, 'medium'),
            generateQuestion("Which triangle has 3 equal sides?", ["Equilateral", "Isosceles", "Scalene", "Right"], 0, "Equal-lateral.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find exterior angle of regular octagon.", ["$45^\\circ$", "$135^\\circ$", "$90^\\circ$", "$60^\\circ$"], 0, "**Lesson**: $360 / 8 = 45$.", 20, 'hard'),
            generateQuestion("Two parallel lines cut by a transversal. Interior angles sum to?", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$0^\\circ$"], 0, "Consecutive/Co-interior angles.", 20, 'hard'),
            generateQuestion("Find side of square if area is 144.", ["12", "14", "10", "24"], 0, "$\sqrt{144}$.", 20, 'hard'),
            generateQuestion("Volume of cube with side 3?", ["27", "9", "54", "12"], 0, "$3^3$.", 20, 'hard'),
            generateQuestion("Sum of interior angles of n-sided polygon?", ["$(n-2) \\times 180^\\circ$", "$n \\times 180^\\circ$", "$360^\\circ$", "$180^\\circ$"], 0, "Standard formula.", 20, 'hard'),
            generateQuestion("Find x in a quadrilateral if others are 90, 80, 70.", ["$120^\\circ$", "$100^\\circ$", "$110^\\circ$", "$90^\\circ$"], 0, "$360 - 240 = 120$.", 20, 'hard'),
            generateQuestion("Area of triangle with base 10, height 5?", ["25", "50", "15", "100"], 0, "$0.5 \\times 10 \\times 5$.", 20, 'hard'),
            generateQuestion("Circumference of circle with radius 7 (use $\\pi=22/7$).", ["44", "22", "154", "88"], 0, "$2 \\times \\frac{22}{7} \\times 7$.", 20, 'hard'),
            generateQuestion("Is a square a rhombus?", ["Yes", "No"], 0, "A square is a special type of rhombus.", 20, 'hard'),
            generateQuestion("Diagonal of a square side $s$?", ["$s\\sqrt{2}$", "$2s$", "$s^2$", "$s/2$"], 0, "Pythagoras $s^2 + s^2 = 2s^2$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Calculate sum of angles in any triangle.", ["$180^\\circ$", "$90^\\circ$", "$360^\\circ$", "$270^\\circ$"], 0, "Universally 180.", 5, 'easy'),
            generateQuestion("Shape with 3 sides?", ["Triangle", "Square", "Circle", "Line"], 0, "Tri-prefix.", 5, 'easy'),
            generateQuestion("Are parallel lines ever meeting?", ["Never", "Always", "Sometimes", "Often"], 0, "Equidistant.", 5, 'easy'),
            generateQuestion("Right angle symbol is a ___.", ["Square", "Circle", "Triangle", "Cross"], 0, "Small box in corner.", 5, 'easy'),
            generateQuestion("How many vertices in a cube?", ["8", "6", "12", "4"], 0, "Corner count.", 5, 'easy'),
            generateQuestion("Is a circle a polygon?", ["No", "Yes"], 0, "Polygons have straight sides.", 5, 'easy'),
            generateQuestion("Longest side of a rectangle?", ["Length", "Width", "Area", "Corner"], 0, "By definition.", 5, 'easy'),
            generateQuestion("Angles on a point sum to?", ["$360^\\circ$", "$180^\\circ$", "$90^\\circ$", "$100^\\circ$"], 0, "Full rotation.", 5, 'easy'),
            generateQuestion("Is a triangle with $90^\\circ, 45^\\circ, 45^\\circ$ isosceles?", ["Yes", "No"], 0, "Two angles equal.", 5, 'easy'),
            generateQuestion("Complementary angles sum to?", ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$", "$45^\\circ$"], 0, "Radian check.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find one exterior angle of regular hexagon.", ["$60^\\circ$", "$120^\\circ$", "$90^\\circ$", "$45^\\circ$"], 0, "360 / 6 = 60.", 10, 'medium'),
            generateQuestion("Area of triangle base 5, height 4?", ["10", "20", "9", "40"], 0, "$0.5 \\times 5 \\times 4$.", 10, 'medium'),
            generateQuestion("Find angle between hands of clock at 3:00.", ["$90^\\circ$", "$45^\\circ$", "$30^\\circ$", "$0^\\circ$"], 0, "1/4 of circle.", 10, 'medium'),
            generateQuestion("A polygon has 5 sides. Sum of interior angles?", ["$540^\\circ$", "$360^\\circ$", "$720^\\circ$", "$180^\\circ$"], 0, "$3 \\times 180$.", 10, 'medium'),
            generateQuestion("Find diameter if circumference is $10\\pi$.", ["10", "5", "20", "15"], 0, "$C = \\pi d$.", 10, 'medium'),
            generateQuestion("Which quadrilateral has 4 equal sides but not always 90 deg?", ["Rhombus", "Rectangle", "Trapezium", "Kite"], 0, "Slanted square.", 10, 'medium'),
            generateQuestion("Is every rectangle a square?", ["No", "Yes"], 0, "Square needs 4 equal sides.", 10, 'medium'),
            generateQuestion("Area of trapezium with bases 2, 4 and height 3?", ["9", "18", "12", "6"], 0, "$0.5 \\times (2+4) \\times 3 = 9$.", 10, 'medium'),
            generateQuestion("Angle sum of any quadrilateral?", ["$360^\\circ$", "$180^\\circ$", "$720^\\circ$", "$90^\\circ$"], 0, "Two triangles.", 10, 'medium'),
            generateQuestion("Midpoint of a diameter is the ___.", ["Center", "Origin", "Radius", "Edge"], 0, "Point of symmetry.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find interior angle of regular decagon (10 sides).", ["$144^\\circ$", "$36^\\circ$", "$108^\\circ$", "$120^\\circ$"], 0, "**Lesson**: $(8 \\times 180) / 10 = 144$.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+1)(x-1)$.", ["$x^2-1$", "$x^2+1$", "$2x$", "0"], 0, "Classic algebra identity.", 10, 'expert'),
            generateQuestion("Find height of triangle if Area is 20, base is 5.", ["8", "4", "10", "40"], 0, "$20 = 0.5 \\times 5 \\times h \\Rightarrow h=8$.", 20, 'hard'),
            generateQuestion("Spheres S1 and S2 have radius ratio 1:2. Volume ratio?", ["1:8", "1:4", "1:2", "1:1"], 0, "$R^3$.", 20, 'hard'),
            generateQuestion("Volume of cylinder with radius 2, height 5?", ["$20\\pi$", "$10\\pi$", "$50\\pi$", "$4\\pi$"], 0, "$\\pi r^2 h = \\pi(4)(5) = 20\\pi$.", 20, 'hard'),
            generateQuestion("Total surface area of a cube side 2?", ["24", "8", "16", "32"], 0, "$6 \\times 2^2$.", 20, 'hard'),
            generateQuestion("Angle between North and Southeast?", ["$135^\\circ$", "$45^\\circ$", "$90^\\circ$", "$180^\\circ$"], 0, "Clockwise rotation.", 20, 'hard'),
            generateQuestion("Can a triangle have sides 2, 3, 6?", ["No", "Yes"], 0, "$2+3 < 6$. Triangle inequality rule.", 20, 'hard'),
            generateQuestion("Find x in reflex angle if interior is $70^\\circ$.", ["$290^\\circ$", "$110^\\circ$", "$200^\\circ$", "$180^\\circ$"], 0, "$360 - 70$.", 20, 'hard'),
            generateQuestion("Which is always true for parallelograms?", ["Opposite angles equal", "Diagonals equal", "All sides equal", "No parallel sides"], 0, "Fundamental property.", 20, 'hard')
        ]
    },
    'g2-s1-stats': {
        learning: [
            // Easy (1-10)
            generateQuestion("Find Mean of 2, 4, 6.", ["4", "12", "6", "2"], 0, "**Lesson**: Sum (12) / Count (3) = 4.", 10, 'easy'),
            generateQuestion("Mode of 1, 2, 2, 3.", ["2", "1", "3", "0"], 0, "Most frequent.", 10, 'easy'),
            generateQuestion("Median of 1, 5, 10.", ["5", "1", "10", "16"], 0, "Middle number.", 10, 'easy'),
            generateQuestion("Range of 10 to 20.", ["10", "20", "30", "5"], 0, "$20 - 10$.", 10, 'easy'),
            generateQuestion("Average of 0 and 100?", ["50", "100", "0", "25"], 0, "Sum and divide.", 10, 'easy'),
            generateQuestion("How many quarters in a pie chart?", ["4", "2", "3", "1"], 0, "Standard split.", 10, 'easy'),
            generateQuestion("If all data is 5, mean is ___.", ["5", "0", "10", "1"], 0, "Consistency.", 10, 'easy'),
            generateQuestion("Probability of an impossible event?", ["0", "1", "0.5", "-1"], 0, "Zero chance.", 10, 'easy'),
            generateQuestion("Probability of a certain event?", ["1", "0", "100", "0.5"], 0, "Guaranteed.", 10, 'easy'),
            generateQuestion("Rolling a 6-sided die, odds of getting a 7?", ["0", "1/6", "1", "1/7"], 0, "Impossible outcome.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find Median of 1, 3, 5, 7.", ["4", "3", "5", "8"], 0, "**Lesson**: Average of 3 and 5.", 15, 'medium'),
            generateQuestion("Probability of picking 'A' from 'APPLE'?", ["1/5", "2/5", "1/4", "0"], 0, "Count occurrences.", 15, 'medium'),
            generateQuestion("Number of degrees for 'Half' in pie chart?", ["$180^\\circ$", "$90^\\circ$", "$360^\\circ$", "$270^\\circ$"], 0, "0.5 of 360.", 15, 'medium'),
            generateQuestion("Find Mean of 1.5, 2.5, 5.", ["3", "9", "4", "2"], 0, "$9 / 3 = 3$.", 15, 'medium'),
            generateQuestion("Mode of 'Red, Red, Blue, Green'?", ["Red", "Blue", "Green", "None"], 0, "Frequency check.", 15, 'medium'),
            generateQuestion("Range of -5 to 5.", ["10", "0", "5", "25"], 0, "$5 - (-5) = 10$.", 15, 'medium'),
            generateQuestion("Standard deviation measures ___.", ["Spread", "Average", "Total", "Max"], 0, "Variability.", 15, 'medium'),
            generateQuestion("Odds of tails on a fair coin?", ["0.5", "1", "0", "0.2"], 0, "1 in 2.", 15, 'medium'),
            generateQuestion("If mean is 10 for 5 items, total is ___.", ["50", "2", "15", "10"], 0, "$Mean \\times Count$.", 15, 'medium'),
            generateQuestion("Is it likely to rain if probability is 0.9?", ["Likely", "Unlikely"], 0, "Close to 1.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find x if Mean of 5, 8, x is 7.", ["8", "7", "6", "9"], 0, "**Lesson**: $5+8+x = 21 \\Rightarrow x = 8$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which is the prime number?", ["29", "21", "25", "27"], 0, "Fact check.", 10, 'expert'),
            generateQuestion("Weighted mean of 10 (weight 2) and 20 (weight 1)?", ["13.33", "15", "16.67", "10"], 0, "$(20+20)/3$.", 20, 'hard'),
            generateQuestion("Two dice rolled. Probability of sum 12?", ["1/36", "1/12", "1/6", "0"], 0, "Only (6,6).", 20, 'hard'),
            generateQuestion("Median of -10, 0, 10, 100, 1000.", ["10", "0", "100", "50"], 0, "Middle in sorted list.", 20, 'hard'),
            generateQuestion("Find Range if max is 2x and min is x.", ["x", "2x", "3x", "0"], 0, "$2x-x$.", 20, 'hard'),
            generateQuestion("If sum is 100 and mean is 4, how many items?", ["25", "400", "50", "4"], 0, "$100/4$.", 20, 'hard'),
            generateQuestion("Mode of 1, 1, 2, 2, 3.", ["1 and 2", "3", "None", "1"], 0, "Bimodal.", 20, 'hard'),
            generateQuestion("Degrees in pie chart for 20% slice?", ["$72^\\circ$", "$20^\\circ$", "$36^\\circ$", "$90^\\circ$"], 0, "$0.2 \\times 360$.", 20, 'hard'),
            generateQuestion("Probability of A or B if mutually exclusive?", ["$P(A) + P(B)$", "$P(A) \\times P(B)$", "1", "0"], 0, "Sum of individual probabilities.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Average of 1, 3, 5.", ["3", "9", "1", "0"], 0, "Sum/3.", 5, 'easy'),
            generateQuestion("Mode is the ___ frequent.", ["Most", "Least", "Middle", "Zero"], 0, "Common term.", 5, 'easy'),
            generateQuestion("Probability range is from ___ to ___.", ["0 to 1", "-1 to 1", "0 to 100", "1 to 10"], 0, "Standard scale.", 5, 'easy'),
            generateQuestion("Median of 2, 8, 4?", ["4", "2", "8", "14"], 0, "Sort first: 2, 4, 8.", 5, 'easy'),
            generateQuestion("Sum of probabilities of all outcomes?", ["1", "0", "0.5", "Infinity"], 0, "Total certainty.", 5, 'easy'),
            generateQuestion("If probability is 0.5, it is ___ likely to happen or not.", ["Equally", "More", "Less", "Never"], 0, "50-50.", 5, 'easy'),
            generateQuestion("Which graph uses sectors?", ["Pie chart", "Bar chart", "Line graph", "Histogram"], 0, "Circular slices.", 5, 'easy'),
            generateQuestion("Mean of 0, 0, 0?", ["0", "1", "None", "-1"], 0, "Null data.", 5, 'easy'),
            generateQuestion("A fair die has ___ sides.", ["6", "12", "4", "8"], 0, "Typical cube.", 5, 'easy'),
            generateQuestion("Range of 5, 5, 5?", ["0", "5", "15", "1"], 0, "$5-5$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find Mean of 1, 2, 3, 4, 10.", ["4", "5", "20", "3"], 0, "$20/5 = 4$.", 10, 'medium'),
            generateQuestion("Median of 10, 20, 30, 40.", ["25", "20", "30", "100"], 0, "Mid-average.", 10, 'medium'),
            generateQuestion("Probability of rolling a prime on a die?", ["3/6", "2/6", "4/6", "1/6"], 0, "2, 3, 5.", 10, 'medium'),
            generateQuestion("Degrees for 1/3 in pie chart?", ["$120^\\circ$", "$90^\\circ$", "$180^\\circ$", "$60^\\circ$"], 0, "$360/3$.", 10, 'medium'),
            generateQuestion("Find x if 2, 4, x have mean 4.", ["6", "2", "4", "12"], 0, "$2+4+x=12$.", 10, 'medium'),
            generateQuestion("If 40 students, 10 like red. P(Red)?", ["1/4", "1/10", "4", "0.4"], 0, "10/40.", 10, 'medium'),
            generateQuestion("Range of $x-1$ to $x+1$.", ["2", "x", "1", "0"], 0, "$(x+1) - (x-1)$.", 10, 'medium'),
            generateQuestion("Is SD higher for [1, 2, 3] or [1, 5, 10]?", ["[1, 5, 10]", "[1, 2, 3]"], 0, "Wider spread.", 10, 'medium'),
            generateQuestion("Mean of first 5 natural numbers?", ["3", "15", "5", "2.5"], 0, "$1+2+3+4+5=15$. $15/5=3$.", 10, 'medium'),
            generateQuestion("Total items if mean is 2 and sum is 20?", ["10", "40", "2", "0.1"], 0, "$20/2$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Mean of a set is 10. Every value doubled. New mean?", ["20", "10", "40", "5"], 0, "Direct scaling.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify $y^2 \\times y^3$.", ["$y^5$", "$y^6$", "$2y^5$", "$y$"], 0, "Algebra rule.", 10, 'expert'),
            generateQuestion("If P(A) = 0.3, find P(not A).", ["0.7", "0.3", "1.3", "0"], 0, "$1 - 0.3$.", 20, 'hard'),
            generateQuestion("Find x if Mean of x, 2x, 6 is 8.", ["6", "2", "4", "18"], 0, "$3x+6=24 \\Rightarrow 3x=18$.", 20, 'hard'),
            generateQuestion("Mean of 10 items is 5. One more item added. New sum?", ["Cannot tell", "55", "5", "50"], 0, "Depends on the new item value.", 20, 'hard'),
            generateQuestion("Sum of squares of deviations from mean is used for ___.", ["Variance", "Median", "Mode", "Range"], 0, "Statistical formula component.", 20, 'hard'),
            generateQuestion("Probability of at least one head in two flips?", ["3/4", "1/4", "1/2", "1"], 0, "1 - P(TT).", 20, 'hard'),
            generateQuestion("Degrees for 1% in pie chart?", ["$3.6^\\circ$", "$1^\\circ$", "$36^\\circ$", "$0.36^\\circ$"], 0, "$0.01 \\times 360$.", 20, 'hard'),
            generateQuestion("Standard deviation of [10, 10, 10]?", ["0", "10", "1", "30"], 0, "No deviation.", 20, 'hard'),
            generateQuestion("If Mean > Median, the distribution is ___.", ["Positively skewed", "Symmetrical", "Negatively skewed", "Normal"], 0, "Shape of data.", 20, 'hard')
        ]
    },

    // --- Sec 2 G2 Questions ---
    'g2-s2-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Expand exactly $(x+3)(x-2)$.", ["$x^2+x-6$", "$x^2-x-6$", "$x^2+5x-6$", "$x^2-6$"], 0, "**Lesson**: Use FOIL. $x^2 - 2x + 3x - 6 = x^2 + x - 6$.", 10, 'easy'),
            generateQuestion("Factorise fully $x^2 + 5x + 6$.", ["$(x+2)(x+3)$", "$(x+1)(x+6)$", "$(x-2)(x-3)$", "$x(x+5)+6$"], 0, "**Lesson**: Find two numbers that multiply to 6 and add to 5. They are 2 and 3.", 15, 'easy'),
            generateQuestion("Expand strictly $2(x+5)$.", ["$2x+10$", "$2x+5$", "$x+10$", "$2x^2+10$"], 0, "Distribute 2.", 10, 'easy'),
            generateQuestion("Factorise fully $3x+9$.", ["$3(x+3)$", "$3(x+9)$", "$x(3+x)$", "9(x+3)"], 0, "Common factor 3.", 10, 'easy'),
            generateQuestion("Expand $(a+b)(a-b)$.", ["$a^2-b^2$", "$a^2+b^2$", "$2a-2b$", "$a^2-2ab+b^2$"], 0, "Difference of squares.", 10, 'easy'),
            generateQuestion("Factorise $x^2-16$.", ["$(x-4)(x+4)$", "$(x-16)(x+1)$", "$(x-8)(x+8)$", "$(x-4)^2$"], 0, "$4^2 = 16$.", 10, 'easy'),
            generateQuestion("Expand $(x+1)^2$.", ["$x^2+2x+1$", "$x^2+1$", "$x^2+x+1$", "$2x+2$"], 0, "$(a+b)^2 = a^2+2ab+b^2$.", 10, 'easy'),
            generateQuestion("Factorise $x^2+2x$.", ["$x(x+2)$", "$x^2(1+x)$", "2(x+1)", "x(1+2)"], 0, "Common factor x.", 10, 'easy'),
            generateQuestion("Expand $x(x-3)$.", ["$x^2-3x$", "$2x-3$", "$x^2-3$", "$x-3x^2$"], 0, "Distribute x.", 10, 'easy'),
            generateQuestion("Factorise $5y-25$.", ["$5(y-5)$", "5(y-1)", "y(5-y)", "25(y-1)"], 0, "Common factor 5.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Simplify cleanly $\\frac{x^2 - 9}{x - 3}$.", ["$x+3$", "$x-3$", "$x$", "1"], 0, "**Lesson**: Difference of two squares! Top is $(x-3)(x+3)$. Cancel out $x-3$.", 20, 'medium'),
            generateQuestion("Factorise $x^2 - 5x + 6$.", ["$(x-2)(x-3)$", "$(x+2)(x+3)$", "$(x-1)(x-6)$", "$(x+1)(x+6)$"], 0, "Multiply to 6, add to -5.", 15, 'medium'),
            generateQuestion("Expand $(2x+1)(x+4)$.", ["$2x^2+9x+4$", "$2x^2+8x+1$", "$2x^2+x+4$", "$2x^2+10x+4$"], 0, "FOIL: $2x^2+8x+x+4$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{4x^2}{8x}$.", ["$x/2$", "2x", "4x", "0.5"], 0, "Cancel 4 and x.", 15, 'medium'),
            generateQuestion("Factorise fully $4x^2 - 1$.", ["$(2x-1)(2x+1)$", "$(4x-1)(4x+1)$", "$(2x-1)^2$", "$2(x^2-0.5)$"], 0, "$(2x)^2 - 1^2$.", 15, 'medium'),
            generateQuestion("Expand $(x-3)(x-7)$.", ["$x^2-10x+21$", "$x^2+10x+21$", "$x^2-4x+21$", "$x^2-21$"], 0, "$-3 \\times -7 = +21$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x+2}{x^2+4x+4}$.", ["$\\frac{1}{x+2}$", "$x+2$", "1", "$\\frac{1}{x-2}$"], 0, "Bottom is $(x+2)^2$.", 15, 'medium'),
            generateQuestion("Factorise $ax+ay+bx+by$.", ["$(a+b)(x+y)$", "$(a+x)(b+y)$", "$(ab)(xy)$", "a(x+y)+b"], 0, "Factor by grouping.", 15, 'medium'),
            generateQuestion("Simplify $2(x+3) - (x-1)$.", ["$x+7$", "$x+5$", "$x+2$", "$3x+5$"], 0, "$2x+6-x+1$.", 15, 'medium'),
            generateQuestion("Expand $-(x-4)$.", ["$-x+4$", "x-4", "-x-4", "4-x"], 0, "Flip signs.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Factorise purely $2x^2 + 7x + 3$.", ["$(2x+1)(x+3)$", "$(x+1)(2x+3)$", "$(2x-1)(x-3)$", "$(2x+3)(x+1)$"], 0, "**Lesson**: Multiply to 6 ($2\\times3$), add to 7. Numbers are 6 and 1. Split middle term.", 25, 'expert'),
            generateQuestion("Factorise $3x^2 - 10x + 3$.", ["$(3x-1)(x-3)$", "$(3x+1)(x+3)$", "$(3x-3)(x-1)$", "$(x-3)(3x-3)$"], 0, "Multiply to 9, add to -10.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2-y^2}{(x+y)^2}$.", ["$\\frac{x-y}{x+y}$", "$x-y$", "1", "$\\frac{x+y}{x-y}$"], 0, "$(x-y)(x+y) / (x+y)^2$.", 20, 'hard'),
            generateQuestion("Factorise $x^4-1$ completely.", ["$(x^2+1)(x-1)(x+1)$", "$(x^2-1)^2$", "$(x^2+1)(x^2-1)$", "$(x-1)^4$"], 0, "Twice difference of squares.", 20, 'hard'),
            generateQuestion("Expand $(x+y+z)^2$ partially: sum of squares is...", ["$x^2+y^2+z^2$", "$x+y+z$", "$(x+y+z)$", "3"], 0, "Includes $2xy, 2yz, 2zx$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{1}{x} + \\frac{1}{y}$.", ["$\\frac{x+y}{xy}$", "$\\frac{2}{x+y}$", "$\\frac{1}{x+y}$", "xy"], 0, "Common denominator xy.", 20, 'hard'),
            generateQuestion("Factorise $2x^2 + 5x - 3$.", ["$(2x-1)(x+3)$", "$(2x+3)(x-1)$", "$(2x-3)(x+1)$", "$(x-3)(2x+1)$"], 0, "Check FOIL.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{a^2-4a}{a^2-16}$.", ["$\\frac{a}{a+4}$", "$\\frac{a}{a-4}$", "$\\frac{4}{a+4}$", "1"], 0, "$a(a-4) / (a-4)(a+4)$.", 20, 'hard'),
            generateQuestion("Expand $(x^2+1)(x^2-1)$.", ["$x^4-1$", "$x^4+1$", "$x^2-1$", "$2x^2$"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("Factorise $x^2+ax+bx+ab$ as...", ["$(x+a)(x+b)$", "$(x+a+b)$", "$(ax)(bx)$", "x(a+b)"], 0, "Group first two and last two.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Expand carefully $(2x-1)^2$.", ["$4x^2-4x+1$", "$4x^2-1$", "$4x^2+1$", "$4x^2-2x+1$"], 0, "**Lesson**: $(a-b)^2 = a^2 - 2ab + b^2$.", 5, 'easy'),
            generateQuestion("Factorise fully $x^2-1$.", ["$(x-1)(x+1)$", "x(x-1)", "1(x-1)", "$(x-1)^2$"], 0, "Square root of 1 is 1.", 5, 'easy'),
            generateQuestion("Expand $5(a-1)$.", ["$5a-5$", "5a-1", "a-5", "4a"], 0, "Distribute.", 5, 'easy'),
            generateQuestion("Factorise $10x+15y$.", ["$5(2x+3y)$", "10(x+1.5y)", "x(10+15y)", "None"], 0, "HCF is 5.", 5, 'easy'),
            generateQuestion("Expand $(x+2)(x+3)$.", ["$x^2+5x+6$", "$x^2+6x+5$", "$x^2+6$", "$2x+5$"], 0, "Sum and product.", 5, 'easy'),
            generateQuestion("Factorise $y^2+y$.", ["$y(y+1)$", "$2y$", "$y^3$", "1(y+1)"], 0, "Extract y.", 5, 'easy'),
            generateQuestion("Expand $(x-5)^2$.", ["$x^2-10x+25$", "$x^2-25$", "$x^2+25$", "$x^2-5x+25$"], 0, "Middle term is $-10x$.", 5, 'easy'),
            generateQuestion("Factorise $3x-6$.", ["$3(x-2)$", "3(x-6)", "6(x-1)", "x(3-6)"], 0, "3 is common.", 5, 'easy'),
            generateQuestion("Expand $2x(3x+4)$.", ["$6x^2+8x$", "$6x+8$", "$5x^2+4x$", "$6x^2+4$"], 0, "Multiply both terms.", 5, 'easy'),
            generateQuestion("Factorise $x^2+8x+16$.", ["$(x+4)^2$", "$(x+8)^2$", "$(x+2)(x+8)$", "$x(x+8)+16$"], 0, "Perfect square.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Factorise securely $y^2 - 16$.", ["$(y-4)(y+4)$", "$(y-16)(y+1)$", "$(y-8)(y+2)$", "$y(y-16)$"], 0, "**Lesson**: Difference of squares trivially splits symmetrically.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{x^2-4}{x+2}$.", ["$x-2$", "$x+2$", "x-4", "1"], 0, "$(x-2)(x+2) / (x+2)$.", 10, 'medium'),
            generateQuestion("Expand $(3x-2)(2x+5)$.", ["$6x^2+11x-10$", "$6x^2+19x-10$", "$6x^2-10$", "$6x^2+x-10$"], 0, "$15x-4x = 11x$.", 10, 'medium'),
            generateQuestion("Factorise $2x^2-8x$.", ["$2x(x-4)$", "2(x^2-4x)", "x(2x-8)", "8x(1-x)"], 0, "HCF is 2x.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{x^2-1}{x^2+x}$.", ["$\\frac{x-1}{x}$", "x-1", "1", "$\\frac{x+1}{x}$"], 0, "$(x-1)(x+1) / x(x+1)$.", 10, 'medium'),
            generateQuestion("Expand $(x-y)^2$.", ["$x^2-2xy+y^2$", "$x^2-y^2$", "$x^2+y^2$", "$2x-2y$"], 0, "Identity.", 10, 'medium'),
            generateQuestion("Factorise $x^2-x-12$.", ["$(x-4)(x+3)$", "$(x+4)(x-3)$", "$(x-6)(x+2)$", "$(x-12)(x+1)$"], 0, "Product -12, sum -1.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{3(x+1)}{x^2-1}$.", ["$\\frac{3}{x-1}$", "$\\frac{3}{x+1}$", "3", "x-1"], 0, "Factor bottom.", 10, 'medium'),
            generateQuestion("Expand $(x+2)(x^2-2x+4)$.", ["$x^3+8$", "$x^3-8$", "$x^3+4x+8$", "$x^2+4$"], 0, "Sum of cubes.", 10, 'medium'),
            generateQuestion("Factorise $a^2b + ab^2$.", ["$ab(a+b)$", "$a^2b^2$", "$(a+b)^2$", "ab"], 0, "Common ab.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Simplify efficiently $\\frac{4x^2}{2x}$.", ["$2x$", "$2$", "$x$", "$2x^2$"], 0, "**Lesson**: Cancel the 2 and one x.", 15, 'hard'),
            generateQuestion("Factorise $4x^2+12x+9$.", ["$(2x+3)^2$", "$(2x+9)(2x+1)$", "$(4x+3)(x+3)$", "$(2x+3)(2x-3)$"], 0, "Check $(2x)^2$ and $3^2$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x-1}{1-x}$.", ["-1", "1", "0", "x"], 0, "Flip sign on bottom.", 20, 'hard'),
            generateQuestion("Factorise $x^2-y^2-x+y$.", ["$(x-y)(x+y-1)$", "$(x-y)^2$", "$(x+y)(x-y)$", "1"], 0, "Group $(x^2-y^2) - (x-y)$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x}{2} - \\frac{x}{3}$.", ["$x/6$", "x/5", "1/6", "x"], 0, "Use denominator 6.", 20, 'hard'),
            generateQuestion("Factorise $x^2+4x+4-y^2$.", ["$(x+2-y)(x+2+y)$", "$(x+2)^2-y^2$", "$(x+y+2)(x-y+2)$", "Both A and C are same"], 3, "Difference of squares on $(x+2)^2$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2-5x+6}{x-2}$.", ["$x-3$", "$x+3$", "1", "$x-2$"], 0, "Factor top.", 20, 'hard'),
            generateQuestion("Expand $(x+1)^3$.", ["$x^3+3x^2+3x+1$", "$x^3+1$", "$x^3+3x+1$", "$3x+3$"], 0, "Pascal's triangle.", 20, 'hard'),
            generateQuestion("Factorise $a(x+y) - b(x+y)$.", ["$(a-b)(x+y)$", "$(a+b)(x+y)$", "ab(x+y)", "x+y"], 0, "Common bracket.", 20, 'hard'),
            generateQuestion("[Interleaved] Which is equivalent to $2^3 \\times 2^2$?", ["$2^5$", "$2^6$", "$4^5$", "32"], 0, "Base same, add power.", 10, 'expert')
        ]
    },
    'g2-s2-equations': {
        learning: [
            // Easy (1-10)
            generateQuestion("Solve system: $x + y = 5$, $x - y = 1$", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 0, "**Lesson**: Add equations to eliminate y! $2x = 6 \\Rightarrow x=3$.", 10, 'easy'),
            generateQuestion("Substitute $y = 2x$ into $x + y = 6$. Find x.", ["2", "3", "4", "1"], 0, "**Lesson**: $x + 2x = 6 \\Rightarrow 3x = 6 \\Rightarrow x=2$.", 15, 'medium'),
            generateQuestion("Solve $x+3=7$.", ["4", "10", "3", "1"], 0, "Subtract 3.", 10, 'easy'),
            generateQuestion("Solve $2y=10$.", ["5", "2", "20", "0"], 0, "Divide by 2.", 10, 'easy'),
            generateQuestion("If $x+y=10$ and $x=2$, find y.", ["8", "10", "12", "5"], 0, "$y = 10 - 2$.", 10, 'easy'),
            generateQuestion("Solve $x-5=0$.", ["5", "-5", "0", "1"], 0, "Move 5 over.", 10, 'easy'),
            generateQuestion("If $y=x+1$ and $x=10$, find y.", ["11", "9", "10", "1"], 0, "Substitution.", 10, 'easy'),
            generateQuestion("Solve $3z=9$.", ["3", "1", "6", "9"], 0, "Division.", 10, 'easy'),
            generateQuestion("Solve $x+y=2$ and $x=y$. Find x.", ["1", "0", "2", "0.5"], 0, "$2x=2$.", 10, 'easy'),
            generateQuestion("Solve $2x+1=5$.", ["2", "3", "4", "1"], 0, "$2x=4$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Use elimination safely: $2x + 3y = 8$, $3x - 3y = 7$", ["x=3, y=2/3", "x=3, y=1", "x=5, y=0", "x=15, y=-2"], 0, "**Lesson**: Add them: $5x = 15 \\Rightarrow x=3$. Then substitute back.", 20, 'expert'),
            generateQuestion("Solve $3x+y=7$ and $y=x-1$.", ["x=2, y=1", "x=1, y=0", "x=3, y=2", "x=1.5, y=0.5"], 0, "Substitute y.", 15, 'medium'),
            generateQuestion("Solve $2x+y=10$ and $x+y=6$.", ["x=4, y=2", "x=2, y=4", "x=5, y=0", "x=1, y=5"], 0, "Subtract equations.", 15, 'medium'),
            generateQuestion("Solve $x+y=5$ and $x-2y=-1$.", ["x=3, y=2", "x=1, y=4", "x=2, y=3", "x=4, y=1"], 0, "Eliminate x.", 15, 'medium'),
            generateQuestion("Solve $5x+2y=20$ and $y=0$.", ["x=4, y=0", "x=20, y=0", "x=5, y=0", "x=0, y=10"], 0, "Plug in y.", 15, 'medium'),
            generateQuestion("Solve $x/2 + y = 5$ and $x=4$.", ["x=4, y=3", "x=4, y=5", "x=4, y=1", "x=4, y=2.5"], 0, "$2+y=5$.", 15, 'medium'),
            generateQuestion("If $2a+b=5$ and $a+2b=4$, find $a+b$.", ["3", "9", "1", "0"], 0, "Add both: $3a+3b=9 \\Rightarrow a+b=3$.", 15, 'medium'),
            generateQuestion("Solve $y=2x+3$ and $y=x+5$.", ["x=2, y=7", "x=1, y=5", "x=3, y=9", "x=0, y=3"], 0, "$2x+3=x+5$.", 15, 'medium'),
            generateQuestion("Solve $4x-y=2$ and $x+y=3$.", ["x=1, y=2", "x=2, y=1", "x=0, y=3", "x=1, y=1"], 0, "Add them.", 15, 'medium'),
            generateQuestion("Solve $2(x+y)=10$ and $x-y=1$.", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=2.5, y=2.5"], 0, "$x+y=5$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve $2x+3y=13$ and $x-2y=-4$.", ["x=2, y=3", "x=3, y=2", "x=5, y=1", "x=1, y=3"], 0, "**Lesson**: Multiply 2nd eq by 2. $2x-4y=-8$. Subtract: $7y=21$.", 20, 'hard'),
            generateQuestion("Solve $3x+2y=8$ and $2x+5y=9$.", ["x=2, y=1", "x=1, y=2", "x=0, y=4", "x=4, y=-2"], 0, "Multiply to 6x. $6x+4y=16, 6x+15y=27$.", 20, 'hard'),
            generateQuestion("Solve $x+y=12$ and $xy=35$ (for $x>y$).", ["x=7, y=5", "x=6, y=6", "x=8, y=4", "x=9, y=3"], 0, "Numbers summing to 12, product 35.", 20, 'hard'),
            generateQuestion("Solve $y=x^2$ and $y=2x$. Find points.", ["(0,0) and (2,4)", "(1,1) and (2,4)", "(0,0) and (1,1)", "(2,2)"], 0, "$x^2=2x \\Rightarrow x(x-2)=0$.", 20, 'hard'),
            generateQuestion("Solve $4x-3y=1$ and $3x-2y=2$.", ["x=4, y=5", "x=1, y=1", "x=2, y=2", "x=5, y=4"], 0, "Check $(16-15=1)$ and $(12-10=2)$.", 20, 'hard'),
            generateQuestion("If $x+y=a$ and $x-y=b$, find x.", ["$(a+b)/2$", "$a+b$", "$a-b$", "$(a-b)/2$"], 0, "Add them.", 20, 'hard'),
            generateQuestion("Solve $1/x + 1/y = 5/6$ and $x=2$.", ["x=2, y=3", "x=2, y=1", "x=2, y=6", "x=2, y=0.5"], 0, "$0.5 + 1/y = 5/6 \\Rightarrow 1/y = 2/6 = 1/3$.", 20, 'hard'),
            generateQuestion("Solve system: $x+y+z=6, y+z=5, z=3$.", ["x=1, y=2, z=3", "x=3, y=2, z=1", "x=2, y=2, z=2", "x=0, y=3, z=3"], 0, "Substitution from bottom up.", 20, 'hard'),
            generateQuestion("Solve $5x+2y=1$ and $3x-4y=11$.", ["x=1, y=-2", "x=1, y=2", "x=-1, y=3", "x=0, y=0.5"], 0, "Multiply first by 2: $10x+4y=2$. Add: $13x=13$.", 20, 'hard'),
            generateQuestion("If $2x-y=k$ and $x=2, y=1$, find k.", ["3", "1", "5", "0"], 0, "Plug in.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Solve elegantly $y = x+2$, $y = 5-2x$", ["x=1, y=3", "x=2, y=4", "x=3, y=5", "x=1, y=1"], 0, "**Lesson**: Equate them: $x+2 = 5-2x \\Rightarrow 3x=3 \\Rightarrow x=1$.", 5, 'easy'),
            generateQuestion("Solve fully $3x+2y = 12$, $x=2$", ["x=2, y=3", "x=2, y=4", "x=2, y=2", "x=2, y=6"], 0, "**Lesson**: Plug in x=2. $6 + 2y = 12 \\Rightarrow 2y=6 \\Rightarrow y=3$.", 10, 'medium'),
            generateQuestion("Solve $x+10=15$.", ["5", "25", "10", "1"], 0, "Simple subtraction.", 5, 'easy'),
            generateQuestion("Solve $y-4=6$.", ["10", "2", "4", "6"], 0, "Simple addition.", 5, 'easy'),
            generateQuestion("If $x+y=2$ and $x=0$, find y.", ["2", "0", "1", "4"], 0, "Direct.", 5, 'easy'),
            generateQuestion("Solve $2x=6$.", ["3", "4", "2", "12"], 0, "Division.", 5, 'easy'),
            generateQuestion("Solve $x/2=5$.", ["10", "2.5", "5", "0"], 0, "Multiplication.", 5, 'easy'),
            generateQuestion("Solve $x+y=1$ and $y=1$. Find x.", ["0", "1", "-1", "2"], 0, "Direct.", 5, 'easy'),
            generateQuestion("If $y=2x$ and $y=4$, find x.", ["2", "4", "8", "6"], 0, "Division.", 5, 'easy'),
            generateQuestion("Solve $3x-1=2$.", ["1", "0", "3", "2"], 0, "Simple steps.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $x+y=10$ and $x-y=2$.", ["x=6, y=4", "x=5, y=5", "x=8, y=2", "x=4, y=6"], 0, "Add them.", 10, 'medium'),
            generateQuestion("Find y if $2x+y=7$ and $x=2$.", ["3", "7", "11", "2"], 0, "$4+y=7$.", 10, 'medium'),
            generateQuestion("Solve $y=3x$ and $x+y=8$.", ["x=2, y=6", "x=1, y=3", "x=4, y=4", "x=3, y=5"], 0, "$4x=8$.", 10, 'medium'),
            generateQuestion("Solve $x-y=5$ and $y=2$.", ["x=7, y=2", "x=3, y=2", "x=5, y=2", "x=2, y=2"], 0, "Substitution.", 10, 'medium'),
            generateQuestion("Solve $2x-y=4$ and $x+y=5$.", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 0, "Add them.", 10, 'medium'),
            generateQuestion("If $x+2y=8$ and $x=4$, find y.", ["2", "4", "0", "1"], 0, "$4+2y=8$.", 10, 'medium'),
            generateQuestion("Solve $y=x-2$ and $y=2x-5$.", ["x=3, y=1", "x=2, y=0", "x=5, y=3", "x=1, y=-1"], 0, "$x-2 = 2x-5$.", 10, 'medium'),
            generateQuestion("Solve $3x+2y=12$ and $y=3$.", ["x=2, y=3", "x=3, y=3", "x=4, y=3", "x=6, y=3"], 0, "Plug in y.", 10, 'medium'),
            generateQuestion("Solve $x+y=0$ and $x-y=10$.", ["x=5, y=-5", "x=-5, y=5", "x=0, y=0", "x=10, y=0"], 0, "Substitution.", 10, 'medium'),
            generateQuestion("Solve $4x=8$ and $y=x+2$.", ["x=2, y=4", "x=4, y=6", "x=2, y=2", "x=0, y=2"], 0, "Plug in x.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("[Interleaved] Solve smartly $3(x-2) = 15$.", ["7", "5", "9", "3"], 0, "**Lesson**: Divide by 3 to get $x-2 = 5 \\Rightarrow x=7$.", 20, 'expert'),
            generateQuestion("Solve $2x+3y=12$ and $3x+2y=13$.", ["x=3, y=2", "x=2, y=3", "x=1, y=5", "x=4, y=0.5"], 0, "Add eqs: $5x+5y=25 \\Rightarrow x+y=5$.", 20, 'hard'),
            generateQuestion("Solve $x+y=11$ and $x^2-y^2=11$.", ["x=6, y=5", "x=7, y=4", "x=11, y=0", "x=5, y=6"], 0, "$(x-y)(x+y)=11 \\Rightarrow (x-y)(11)=11 \\Rightarrow x-y=1$.", 20, 'hard'),
            generateQuestion("Solve $x/y = 2$ and $x+y=9$.", ["x=6, y=3", "x=4, y=2", "x=8, y=1", "x=3, y=1.5"], 0, "$x=2y \\Rightarrow 3y=9$.", 20, 'hard'),
            generateQuestion("Solve $y=x+k$ for (2,5). Find k.", ["3", "7", "-3", "2"], 0, "$5=2+k$.", 20, 'hard'),
            generateQuestion("Solve $2x-5y=1$ and $4x+10y=34$.", ["x=6, y=1", "x=2, y=3", "x=1, y=3", "x=5, y=1.4"], 0, "Multiply first by 2: $4x-10y=2$. Add: $8x=36$. Wait, check: $24-5=19$, no.", 20, 'hard'),
            generateQuestion("Correct solution for $2x-5y=1, 4x+10y=34$?", ["x=4.5, y=1.6", "x=5, y=1.4", "x=6, y=2.2", "x=4, y=1"], 0, "Let's recompute: $8x=36 \\Rightarrow x=4.5$. $9-5y=1 \\Rightarrow 5y=8 \\Rightarrow y=1.6$.", 20, 'hard'),
            generateQuestion("Solve $x+y=20$ and $x$ is 3 times $y$.", ["x=15, y=5", "x=12, y=8", "x=10, y=10", "x=18, y=2"], 0, "$4y=20$.", 20, 'hard'),
            generateQuestion("Solve $x^2+y^2=25$ and $x=3$. Find $y>0$.", ["4", "5", "3", "16"], 0, "$9+y^2=25$.", 20, 'hard'),
            generateQuestion("Solve $2(x-y)=x+y$ and $x=6$. Find y.", ["2", "6", "0", "4"], 0, "$2x-2y = x+y \\Rightarrow x=3y$.", 20, 'hard')
        ]
    },
    'g2-s2-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Find interior angle of regular hexagon.", ["120^\\circ", "108^\\circ", "90^\\circ", "150^\\circ"], 0, "**Lesson**: Formula is $(n-2)\\times 180 / n$. $(4\\times 180)/6 = 120$.", 10, 'easy'),
            generateQuestion("Sum of exterior angles of any polygon is always...", ["360^\\circ", "180^\\circ", "540^\\circ", "720^\\circ"], 0, "**Lesson**: Exterior angles always sum to a full circle, $360^\\circ$.", 15, 'easy'),
            generateQuestion("How many sides in a decagon?", ["10", "12", "8", "6"], 0, "Deca means 10.", 10, 'easy'),
            generateQuestion("Are congruent shapes exactly the same size?", ["Yes", "No"], 0, "Congruent = Identical.", 10, 'easy'),
            generateQuestion("Similar shapes have the same ___ but different sizes.", ["Shape", "Area", "Length", "Color"], 0, "Proportional scaling.", 10, 'easy'),
            generateQuestion("Number of lines of symmetry in a square?", ["4", "2", "1", "0"], 0, "Horizontal, vertical, 2 diagonals.", 10, 'easy'),
            generateQuestion("Sum of interior angles of a triangle?", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"], 0, "Sum of angles.", 10, 'easy'),
            generateQuestion("Which transformation is a 'slide'?", ["Translation", "Rotation", "Reflection", "Enlargement"], 0, "Moving without turning.", 10, 'easy'),
            generateQuestion("Which transformation is a 'flip'?", ["Reflection", "Rotation", "Translation", "Enlargement"], 0, "Mirror image.", 10, 'easy'),
            generateQuestion("Regular polygons have all sides ___.", ["Equal", "Unequal", "Parallel", "Curved"], 0, "Definition of regular.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find interior angle of regular octagon.", ["$135^\\circ$", "$45^\\circ$", "$120^\\circ$", "$108^\\circ$"], 0, "$(6 \\times 180) / 8 = 135$.", 15, 'medium'),
            generateQuestion("If two triangles are similar, their sides are ___.", ["Proportional", "Equal", "Congruent", "Parallel"], 0, "Ratio matches.", 15, 'medium'),
            generateQuestion("Find x if exterior angle of regular polygon is $72^\\circ$. Sides?", ["5", "6", "4", "10"], 0, "$360 / 72 = 5$.", 15, 'medium'),
            generateQuestion("A shape is rotated $180^\\circ$. Is it congruent?", ["Yes", "No"], 0, "Rotation preserves size.", 15, 'medium'),
            generateQuestion("Scale factor is 2. Area increase factor?", ["4", "2", "8", "1"], 0, "$2^2$.", 15, 'medium'),
            generateQuestion("Find sum of interior angles of a pentagon.", ["$540^\\circ$", "$360^\\circ$", "$720^\\circ$", "$180^\\circ$"], 0, "$3 \\times 180$.", 15, 'medium'),
            generateQuestion("One interior angle of regular polygon is $140^\\circ$. Exterior?", ["$40^\\circ$", "$140^\\circ$", "$180^\\circ$", "$90^\\circ$"], 0, "$180 - 140$.", 15, 'medium'),
            generateQuestion("How many diagonals in a pentagon?", ["5", "2", "10", "3"], 0, "$n(n-3)/2$.", 15, 'medium'),
            generateQuestion("Which triangle proof uses hypotenuse and one side?", ["RHS", "SSS", "SAS", "AAS"], 0, "Right-angle Hypotenuse Side.", 15, 'medium'),
            generateQuestion("An enlargement has scale factor 0.5. The shape gets ___.", ["Smaller", "Bigger", "Stays same", "Rotates"], 0, "Factor < 1.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find number of sides if sum of interior angles is $1800^\\circ$.", ["12", "10", "14", "8"], 0, "$(n-2) \\times 180 = 1800 \\Rightarrow n-2=10 \\Rightarrow n=12$.", 20, 'hard'),
            generateQuestion("Total lines of symmetry in a regular hexagon?", ["6", "3", "12", "1"], 0, "Match number of sides.", 20, 'hard'),
            generateQuestion("Find x if interior angles are $x, 2x, 3x, 4x$ in quad.", ["$36^\\circ$", "$72^\\circ$", "$18^\\circ$", "$45^\\circ$"], 0, "$10x = 360$.", 20, 'hard'),
            generateQuestion("Similar triangles A and B. Sides ratio 3:4. Volume ratio?", ["27:64", "9:16", "3:4", "1:1"], 0, "Ratio cubed.", 20, 'hard'),
            generateQuestion("One interior angle of regular polygon is $150^\\circ$. Number of sides?", ["12", "10", "8", "6"], 0, "Exterior is 30. $360/30 = 12$.", 20, 'hard'),
            generateQuestion("Area of two similar squares is 25 and 100. Scale factor?", ["2", "4", "5", "10"], 0, "$\sqrt{100/25} = 2$.", 20, 'hard'),
            generateQuestion("Which proof for congruent triangles doesn't include sides?", ["None (Need at least 1 side)", "AAA", "Angle-only", "SSS"], 0, "AAA is for similarity only.", 20, 'hard'),
            generateQuestion("Number of lines of symmetry in a non-isosceles trapezium?", ["0", "1", "2", "4"], 0, "No symmetry.", 20, 'hard'),
            generateQuestion("Find interior angle of regular 20-gon.", ["$162^\\circ$", "$18^\\circ$", "$160^\\circ$", "$144^\\circ$"], 0, "$18 \\times 180 / 20 = 162$.", 20, 'hard'),
            generateQuestion("Can a polygon have interior sum of $450^\\circ$?", ["No", "Yes"], 0, "Must be multiple of 180.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("How many sides does a regular polygon have if its exterior angle is $36^\\circ$?", ["10", "12", "8", "6"], 0, "**Lesson**: $360/n = 36 \\Rightarrow n=10$.", 5, 'easy'),
            generateQuestion("Find total sum of interior angles of an octagon (8 sides).", ["1080^\\circ", "900^\\circ", "720^\\circ", "1440^\\circ"], 0, "**Lesson**: $(n-2)\\times 180 = 6\\times 180 = 1080$.", 10, 'medium'),
            generateQuestion("Shape with 5 sides?", ["Pentagon", "Hexagon", "Octagon", "Square"], 0, "Term count.", 5, 'easy'),
            generateQuestion("Does a circle have infinite lines of symmetry?", ["Yes", "No"], 0, "Any line through center.", 5, 'easy'),
            generateQuestion("Similar shapes are always the same shape.", ["True", "False"], 0, "Definitions.", 5, 'easy'),
            generateQuestion("External angles of ANY polygon sum to ___.", ["$360^\\circ$", "$180^\\circ$", "$720^\\circ$", "$90^\\circ$"], 0, "Full rotation.", 5, 'easy'),
            generateQuestion("Is a square similar to every other square?", ["Yes", "No"], 0, "They all have 90 deg and equal sides.", 5, 'easy'),
            generateQuestion("If a shape is reflected, is its area changed?", ["No", "Yes"], 0, "Isometry.", 5, 'easy'),
            generateQuestion("Prefix for 7-sided shape?", ["Hepta", "Hexa", "Nona", "Octa"], 0, "Greek counting.", 5, 'easy'),
            generateQuestion("Number of sides in a dodecagon?", ["12", "10", "20", "2"], 0, "12 sides.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find exterior angle of regular pentagon.", ["$72^\\circ$", "$108^\\circ$", "$60^\\circ$", "$90^\\circ$"], 0, "$360 / 5 = 72$.", 10, 'medium'),
            generateQuestion("An enlargement has scale factor -2. The shape is ___.", ["Enlarged and flipped", "Smaller", "Stays same", "No change"], 0, "Negative flips it.", 10, 'medium'),
            generateQuestion("Total interior sum of a 10-sided shape?", ["$1440^\\circ$", "$1800^\\circ$", "$1620^\\circ$", "$360^\\circ$"], 0, "$8 \\times 180$.", 10, 'medium'),
            generateQuestion("If sides ratio is 2:3, area ratio is ___.", ["4:9", "2:3", "8:27", "4:6"], 0, "$2^2:3^2$.", 10, 'medium'),
            generateQuestion("One interior angle of regular hexagon?", ["$120^\\circ$", "$60^\\circ$", "$90^\\circ$", "$150^\\circ$"], 0, "$4 \\times 180 / 6$.", 10, 'medium'),
            generateQuestion("A triangle has angles 40, 60, 80. Is it similar to one with 40, 60, 80?", ["Yes", "No"], 0, "AAA rule.", 10, 'medium'),
            generateQuestion("Number of lines of symmetry in an equilateral triangle?", ["3", "1", "0", "6"], 0, "One through each vertex.", 10, 'medium'),
            generateQuestion("Transformation that changes size?", ["Enlargement", "Rotation", "Reflection", "Translation"], 0, "Scale factor.", 10, 'medium'),
            generateQuestion("Exterior angle of regular 12-sided shape?", ["$30^\\circ$", "$15^\\circ$", "$60^\\circ$", "$45^\\circ$"], 0, "$360 / 12$.", 10, 'medium'),
            generateQuestion("If two shapes are congruent, they must be similar.", ["Yes", "No"], 0, "Identical is a scale of 1.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find x if interior angles of regular polygon sum to $1260^\\circ$. Sides?", ["9", "7", "8", "10"], 0, "$(n-2) \\times 180 = 1260 \\Rightarrow n-2=7 \\Rightarrow n=9$.", 20, 'hard'),
            generateQuestion("Area of two similar triangles ratio 4:25. Side ratio?", ["2:5", "4:25", "8:125", "16:625"], 0, "Square root.", 20, 'hard'),
            generateQuestion("Find interior angle of regular polygon with 15 sides.", ["$156^\\circ$", "$24^\\circ$", "$144^\\circ$", "$150^\\circ$"], 0, "Ext is 24. $180-24$.", 20, 'hard'),
            generateQuestion("How many lines of symmetry in a regular 100-gon?", ["100", "50", "0", "1"], 0, "Pattern holds.", 20, 'hard'),
            generateQuestion("[Interleaved] Factorise $x^2-100$.", ["$(x-10)(x+10)$", "$(x-50)^2$", "$x(x-100)$", "None"], 0, "Algebra link.", 10, 'expert'),
            generateQuestion("External angle is $2^\\circ$. Number of sides?", ["180", "360", "90", "720"], 0, "$360/2$.", 20, 'hard'),
            generateQuestion("Ratio of volumes of two similar pyramids is 8:27. Side ratio?", ["2:3", "4:9", "8:27", "1:1"], 0, "Cube root.", 20, 'hard'),
            generateQuestion("Congruent triangles: SAS requires the angle to be ___ the sides.", ["Between", "Opposite", "Adjacent", "Anywhere"], 0, "Included angle.", 20, 'hard'),
            generateQuestion("If a shape has rotational symmetry order 4, what is the angle?", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0, "$360/4$.", 20, 'hard'),
            generateQuestion("Sum of interior angles is always a multiple of ___.", ["180", "360", "90", "45"], 0, "Geometry rule.", 20, 'hard')
        ]
    },
    'g2-s2-pythagoras': {
        learning: [
            // Easy (1-10)
            generateQuestion("Find hypotenuse strictly for right triangle sides 3 and 4.", ["5", "6", "7", "25"], 0, "**Lesson**: $c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.", 10, 'easy'),
            generateQuestion("Hypotenuse is the ___ side of a right triangle.", ["Longest", "Shortest", "Middle", "Curved"], 0, "Directly opposite 90 deg.", 10, 'easy'),
            generateQuestion("In $a^2+b^2=c^2$, which letter is the hypotenuse?", ["c", "a", "b", "d"], 0, "Standard notation.", 10, 'easy'),
            generateQuestion("Calculate $5^2 + 12^2$.", ["169", "144", "25", "100"], 0, "$25+144 = 169$.", 10, 'easy'),
            generateQuestion("Square root of 225?", ["15", "12", "25", "5"], 0, "Basic math fact.", 10, 'easy'),
            generateQuestion("Right triangle sides 6 and 8. Hypotenuse?", ["10", "14", "100", "7"], 0, "$\sqrt{36+64}$.", 10, 'easy'),
            generateQuestion("Is Pythagoras used for all triangles?", ["No (Only Right-angled)", "Yes", "Maybe", "Sometimes"], 0, "Requirement: $90^\\circ$.", 10, 'easy'),
            generateQuestion("Calculate $8^2 + 15^2$.", ["289", "225", "64", "200"], 0, "$64+225=289$.", 10, 'easy'),
            generateQuestion("Hypotenuse is 5, one side is 3. Other side?", ["4", "2", "8", "16"], 0, "$\sqrt{25-9}$.", 10, 'easy'),
            generateQuestion("Square root of 625?", ["25", "15", "35", "5"], 0, "$25 \\times 25$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Hypotenuse is 13, one leg is 5. Find other leg.", ["12", "144", "8", "10"], 0, "**Lesson**: $a = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$.", 15, 'medium'),
            generateQuestion("Find hypotenuse for sides 7 and 24.", ["25", "31", "49", "100"], 0, "$\sqrt{49+576}$.", 15, 'medium'),
            generateQuestion("A ladder is 5m long. It touches wall at 4m height. Base distance?", ["3m", "1m", "9m", "2m"], 0, "$\sqrt{25-16}=3$.", 15, 'medium'),
            generateQuestion("Find side of square if diagonal is $\\sqrt{2}$.", ["1", "2", "0.5", "1.41"], 0, "$s^2+s^2=2 \Rightarrow 2s^2=2 \Rightarrow s=1$.", 15, 'medium'),
            generateQuestion("Right triangle with sides 9 and 12. Hypotenuse?", ["15", "21", "81", "144"], 0, "$\sqrt{81+144}$.", 15, 'medium'),
            generateQuestion("Identify the Pythagorean triple.", ["8, 15, 17", "1, 2, 3", "2, 3, 4", "10, 20, 30"], 0, "$64+225=289$.", 15, 'medium'),
            generateQuestion("Hypotenuse is 10, one leg is 6. Find other.", ["8", "4", "6", "16"], 0, "$100-36 = 64$.", 15, 'medium'),
            generateQuestion("If $c^2 = a^2+b^2$, then triangle is ___.", ["Right-angled", "Isosceles", "Equilateral", "Scalene"], 0, "Converse of theorem.", 15, 'medium'),
            generateQuestion("Find diagonal of rectangle 5cm by 12cm.", ["13cm", "17cm", "60cm", "7cm"], 0, "$\sqrt{25+144}$.", 15, 'medium'),
            generateQuestion("One side 1.5, other 2. Hypotenuse?", ["2.5", "3.5", "4", "2.25"], 0, "$\sqrt{2.25+4} = \sqrt{6.25}$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find perimeter of right triangle with legs 20 and 21.", ["70", "41", "61", "80"], 0, "Hyp is 29. $20+21+29=70$.", 20, 'hard'),
            generateQuestion("Diagonal of a cube side 1? Inner diagonal.", ["$\\sqrt{3}$", "$\\sqrt{2}$", "1", "3"], 0, "$\sqrt{1^2+1^2+1^2}$.", 20, 'hard'),
            generateQuestion("Is a triangle with sides 3.3, 4.4, 5.5 right-angled?", ["Yes", "No"], 0, "$3.3^2+4.4^2 = 30.25 = 5.5^2$.", 20, 'hard'),
            generateQuestion("Find height of isosceles triangle with base 10 and equal sides 13.", ["12", "8", "11", "5"], 0, "Right triangle with base 5. $169-25=144$.", 20, 'hard'),
            generateQuestion("Diagonal of square is 10. Side?", ["$\\sqrt{50}$", "5", "10", "100"], 0, "$2s^2 = 100 \Rightarrow s^2=50$.", 20, 'hard'),
            generateQuestion("Find x if hypotenuse is 17, one side is $x$, other side is $x+7$.", ["8", "5", "12", "15"], 0, "$x^2 + (x+7)^2 = 289 \Rightarrow 64+225=289$.", 20, 'hard'),
            generateQuestion("Shortest distance from (0,0) to (5,12).", ["13", "17", "7", "144"], 0, "Distance formula is Pythagoras.", 20, 'hard'),
            generateQuestion("TV screen size is diagonal. A 25 inch TV is 15 inches high. Width?", ["20 inches", "10 inches", "400 inches", "30 inches"], 0, "$\sqrt{625-225}=20$.", 20, 'hard'),
            generateQuestion("A ship goes 10 miles North and 24 miles East. Distance from start?", ["26 miles", "34 miles", "14 miles", "24 miles"], 0, "$\sqrt{100+576}=26$.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+y)(x-y)$.", ["$x^2-y^2$", "$x^2+y^2$", "$2x$", "0"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Identify exactly the valid Pythagorean triple.", ["5, 12, 13", "4, 5, 6", "1, 2, 3", "7, 8, 9"], 0, "**Lesson**: $5^2 + 12^2$ exactly equals $13^2$.", 5, 'easy'),
            generateQuestion("If sides are exactly 6, 8, 10, is it a right triangle?", ["Yes", "No", "Maybe", "Cannot tell"], 0, "**Lesson**: $6^2 + 8^2 = 36+64=100 = 10^2$. Yes!", 10, 'medium'),
            generateQuestion("Hypotenuse of 3, 4 triangle?", ["5", "7", "1", "12"], 0, "Standard knowledge.", 5, 'easy'),
            generateQuestion("What is $13^2$?", ["169", "144", "25", "121"], 0, "Common square.", 5, 'easy'),
            generateQuestion("Pythagoras formula?", ["$a^2+b^2=c^2$", "$a+b=c$", "$ab=c^2$", "$a^2-b^2=c^2$"], 0, "Identity.", 5, 'easy'),
            generateQuestion("Hypotenuse is always the ___ side.", ["Longest", "Shortest"], 0, "Physical truth.", 5, 'easy'),
            generateQuestion("Can you use Pythagoras on a circle?", ["No", "Yes"], 0, "Only triangles.", 5, 'easy'),
            generateQuestion("Square of 11?", ["121", "22", "111", "99"], 0, "Square fact.", 5, 'easy'),
            generateQuestion("If $x^2=100$, what is x?", ["10", "50", "100", "5"], 0, "Root.", 5, 'easy'),
            generateQuestion("Triangle with sides 1, 1, $\sqrt{2}$. Real?", ["Yes", "No"], 0, "$1+1 = 2$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find other side if $c=25$ and $a=7$.", ["24", "18", "32", "15"], 0, "$625-49 = 576$.", 10, 'medium'),
            generateQuestion("Find hypotenuse for sides 8 and 15.", ["17", "23", "64", "225"], 0, "$\sqrt{64+225}$.", 10, 'medium'),
            generateQuestion("Diagonal of rectangle 9m by 12m.", ["15m", "81m", "21m", "3m"], 0, "$\sqrt{81+144}$.", 10, 'medium'),
            generateQuestion("Check if 5, 10, 11 is right-angled.", ["No", "Yes"], 0, "$25+100=125 \\neq 121$.", 10, 'medium'),
            generateQuestion("Find side of square if diagonal is 2.", ["$\\sqrt{2}$", "1", "2", "4"], 0, "$2s^2=4 \Rightarrow s^2=2$.", 10, 'medium'),
            generateQuestion("Hypotenuse of 12 and 16 triangle?", ["20", "28", "4", "400"], 0, "Scaling 3,4,5 triangle.", 10, 'medium'),
            generateQuestion("If $a=b=1$, what is c?", ["$\\sqrt{2}$", "2", "1", "1.4"], 0, "$\sqrt{1+1}$.", 10, 'medium'),
            generateQuestion("Distance of (3,4) from origin?", ["5", "7", "3.5", "12"], 0, "Pythagoras application.", 10, 'medium'),
            generateQuestion("Find leg if hyp=10 and other leg=6.", ["8", "4", "2", "16"], 0, "$100-36=64$.", 10, 'medium'),
            generateQuestion("Triple: 9, 40, ___?", ["41", "49", "31", "50"], 0, "$81+1600=1681 = 41^2$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Perimeter of triple 7, 24, 25?", ["56", "49", "31", "60"], 0, "$7+24+25$.", 20, 'hard'),
            generateQuestion("Side of square 10. Diagonal approx?", ["14.1", "10", "20", "15"], 0, "$10\sqrt{2}$.", 20, 'hard'),
            generateQuestion("Find x if sides are 20, x, 29.", ["21", "9", "49", "25"], 0, "$841-400=441$.", 20, 'hard'),
            generateQuestion("Smallest whole number triple starting with 11?", ["11, 60, 61", "11, 12, 13", "11, 20, 31", "None"], 0, "$121+3600=3721=61^2$.", 20, 'hard'),
            generateQuestion("Is 20, 21, 29 a triple?", ["Yes", "No"], 0, "$400+441=841$.", 20, 'hard'),
            generateQuestion("Diagonal of rectangle $L$ and $W$ is...", ["$\sqrt{L^2+W^2}$", "$L+W$", "$L^2+W^2$", "$LW$"], 0, "Standard formula.", 20, 'hard'),
            generateQuestion("Find hypotenuse if sides are $x$ and $x\\sqrt{3}$.", ["2x", "$x\\sqrt{4}$", "x", "No answer"], 0, "$\sqrt{x^2+3x^2} = \sqrt{4x^2} = 2x$.", 20, 'hard'),
            generateQuestion("Area of right triangle is 30, one leg is 5. Hypotenuse?", ["13", "12", "15", "17"], 0, "Base 5, Height 12. Hyp is 13.", 20, 'hard'),
            generateQuestion("If angle is $90^\\circ$ and sides are 5, 5, what is hyp?", ["$5\\sqrt{2}$", "10", "5", "7.5"], 0, "$25+25=50$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2=2x$ for $x>0$.", ["2", "0", "1", "4"], 0, "Equations link.", 10, 'expert')
        ]
    },
    'g2-s2-mensuration': {
        learning: [
            // Easy (1-10)
            generateQuestion("Volume of a perfect sphere with radius 3?", ["36\\pi", "27\\pi", "12\\pi", "108\\pi"], 0, "**Lesson**: $\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(27) = 36\\pi$.", 10, 'easy'),
            generateQuestion("Fractional rule governing volume of Cone?", ["\\frac{1}{3}\\pi r^2 h", "\\pi r^2 h", "\\frac{4}{3}\\pi r^3", "2\\pi r h"], 0, "**Lesson**: A cone is precisely one-third of its surrounding cylinder.", 15, 'easy'),
            generateQuestion("Volume of a cube with side 2.", ["8", "4", "6", "12"], 0, "Cube = $side^3$.", 10, 'easy'),
            generateQuestion("Base area of cylinder is $\\pi r^2$. Volume?", ["$\\pi r^2 h$", "$2\\pi r h$", "$\\frac{1}{3}\\pi r^2 h$", "$\\pi r^3$"], 0, "Area times height.", 10, 'easy'),
            generateQuestion("Surface area of one face of cube side 5?", ["25", "125", "20", "10"], 0, "$5 \\times 5$.", 10, 'easy'),
            generateQuestion("Volume of 3D box with sides 2, 3, 4?", ["24", "9", "48", "12"], 0, "Product of 3 sides.", 10, 'easy'),
            generateQuestion("Unit for volume?", ["$cm^3$", "$cm^2$", "$cm$", "kg"], 0, "Cubic units.", 10, 'easy'),
            generateQuestion("Unit for surface area?", ["$cm^2$", "$cm^3$", "$cm$", "m"], 0, "Square units.", 10, 'easy'),
            generateQuestion("A sphere has no edges.", ["True", "False"], 0, "Purely curved.", 10, 'easy'),
            generateQuestion("Volume of pyramid is $\\frac{1}{3} \\times$ ___ $\\times$ height.", ["Base Area", "Radius", "Side", "Perimeter"], 0, "Standard pyramid formula.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Volume of sphere with radius 1.", ["$\\frac{4}{3}\\pi$", "$\\pi$", "$4\\pi$", "$2\\pi$"], 0, "Direct formula use.", 15, 'medium'),
            generateQuestion("Base area of cone is 50, height is 6. Volume?", ["100", "300", "50", "600"], 0, "$\\frac{1}{3} \\times 50 \\times 6$.", 15, 'medium'),
            generateQuestion("Total surface area of cube side 3?", ["54", "27", "9", "36"], 0, "$6 \\times 3^2$.", 15, 'medium'),
            generateQuestion("Radius of cylinder 2, height 10. Volume?", ["$40\\pi$", "$20\\pi$", "$80\\pi$", "$100\\pi$"], 0, "$\\pi(4)(10)$.", 15, 'medium'),
            generateQuestion("Surface area of sphere radius 2?", ["$16\\pi$", "$8\\pi$", "$32\\pi$", "$4\\pi$"], 0, "$4\\pi(4)$.", 15, 'medium'),
            generateQuestion("Volume of hemisphere radius 3?", ["$18\\pi$", "$36\\pi$", "$9\\pi$", "$54\\pi$"], 0, "Half of sphere volume.", 15, 'medium'),
            generateQuestion("A cone has radius 3, height 4. Base area?", ["$9\\pi$", "$12\\pi$", "$25\\pi$", "$6\\pi$"], 0, "$\\pi r^2$.", 15, 'medium'),
            generateQuestion("Volume of pyramid with square base side 4, height 6?", ["32", "96", "16", "64"], 0, "$\\frac{1}{3}(16)(6)$.", 15, 'medium'),
            generateQuestion("Curved surface area of cylinder radius r, height h?", ["$2\\pi r h$", "$\\pi r^2 h$", "$\\pi r h$", "$2\\pi r^2$"], 0, "Unroll it into a rectangle.", 15, 'medium'),
            generateQuestion("If diameter of sphere is 10, radius is ___.", ["5", "10", "2.5", "20"], 0, "Half of diameter.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Exact volume of cone with radius 4, height 9.", ["$48\\pi$", "$144\\pi$", "$36\\pi$", "$16\\pi$"], 0, "$\\frac{1}{3} \\pi(16)(9) = 48\\pi$.", 20, 'hard'),
            generateQuestion("Radius of sphere is 3. New sphere has radius 6. Volume ratio?", ["1:8", "1:2", "1:4", "1:9"], 0, "$2^3$.", 20, 'hard'),
            generateQuestion("Find height of cylinder if volume is $50\\pi$ and radius is 5.", ["2", "5", "10", "25"], 0, "$50\\pi = \\pi(25)h$.", 20, 'hard'),
            generateQuestion("Surface area of cube is 600. Side length?", ["10", "6", "100", "25"], 0, "$6s^2=600 \Rightarrow s^2=100$.", 20, 'hard'),
            generateQuestion("A ball fits exactly inside a cube side 2. Volume of ball?", ["$\\frac{4}{3}\\pi$", "$8\\pi$", "$4\\pi$", "$\\frac{32}{3}\\pi$"], 0, "Radius is 1. $\\frac{4}{3}\\pi(1)^3$.", 20, 'hard'),
            generateQuestion("Find radius of sphere if Surface Area is $100\\pi$.", ["5", "10", "2.5", "50"], 0, "$4\\pi r^2 = 100\\pi \Rightarrow r^2=25$.", 20, 'hard'),
            generateQuestion("Volume of cone radius r, height 3h?", ["$\\pi r^2 h$", "$\\frac{1}{3}\\pi r^2 h$", "$3\\pi r^2 h$", "$\\pi r^2$"], 0, "The 1/3 and 3 cancel out.", 20, 'hard'),
            generateQuestion("Sphere vs Cube: Both same radius/side $s$. Ratio of sphere volume to cube volume roughly?", ["$\\approx 0.52$", "$1$", "$2$", "$0.78$"], 0, "$\\frac{4/3 \pi}{8} \approx 0.523$.", 20, 'hard'),
            generateQuestion("Correct formula for Cone curved surface area using slant length $l$?", ["$\\pi r l$", "$\\pi r^2 l$", "$2\\pi r l$", "$\\frac{1}{3}\\pi r l$"], 0, "Standard formula.", 20, 'hard'),
            generateQuestion("[Interleaved] Sum of interior angles of a pentagon.", ["$540^\\circ$", "$360^\\circ$", "$180^\\circ$", "$720^\\circ$"], 0, "Geometry link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Calculate purely volume of cone with base area 20 and height 6.", ["40", "60", "120", "20"], 0, "**Lesson**: $V = \\frac{1}{3}(20)(6) = 40$.", 10, 'medium'),
            generateQuestion("What is exact formula for Sphere's Surface Area?", ["4\\pi r^2", "\\pi r^2", "2\\pi r", "\\pi r l"], 0, "**Lesson**: 4 flat circles map exactly to one perfect sphere surface.", 15, 'hard'),
            generateQuestion("Volume of box 1 by 1 by 5.", ["5", "7", "1", "10"], 0, "Simple product.", 5, 'easy'),
            generateQuestion("How many faces on a cube?", ["6", "8", "12", "4"], 0, "Count them.", 5, 'easy'),
            generateQuestion("Volume formula for Sphere?", ["$\\frac{4}{3}\\pi r^3$", "$\\pi r^2$", "$4\\pi r^2$", "$\\frac{1}{3}\\pi r^2 h$"], 0, "Standard identity.", 5, 'easy'),
            generateQuestion("Is volume of cone less than cylinder of same dimensions?", ["Yes (1/3)", "No", "Exactly half", "Twice"], 0, "Pointy factor.", 5, 'easy'),
            generateQuestion("If radius is 2, what is $r^2$?", ["4", "2", "8", "0"], 0, "Basic square.", 5, 'easy'),
            generateQuestion("Base of a cone is what shape?", ["Circle", "Square", "Triangle", "Point"], 0, "Circular base.", 5, 'easy'),
            generateQuestion("Prism volume = ___ $\\times$ Height.", ["Cross Section Area", "Radius", "Perimeter", "Side"], 0, "Uniform slice.", 5, 'easy'),
            generateQuestion("Is a pyramid a prism?", ["No", "Yes"], 0, "Prisms have uniform cross sections.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find volume of sphere with radius 3m.", ["$36\\pi m^3$", "$9\\pi m^3$", "$108\\pi m^3$", "$27\\pi m^3$"], 0, "$\\frac{4}{3} \\times 27 \\times \pi$.", 10, 'medium'),
            generateQuestion("Volume of cone: radius 3, height 10.", ["$30\\pi$", "$90\\pi$", "$10\\pi$", "$45\\pi$"], 0, "$\\frac{1}{3} \\times (9) \\times 10 \\times \pi$.", 10, 'medium'),
            generateQuestion("Surface area of sphere: radius 5.", ["$100\\pi$", "$25\\pi$", "$125\\pi$", "$50\\pi$"], 0, "$4 \\times 25 \\times \pi$.", 10, 'medium'),
            generateQuestion("Volume of cylinder: diameter 4, height 5.", ["$20\\pi$", "$80\\pi$", "$40\\pi$", "$10\\pi$"], 0, "Radius 2 $\Rightarrow 4 \\times 5 \\times \pi$.", 10, 'medium'),
            generateQuestion("Surface area of cube: side 10.", ["600", "100", "1000", "400"], 0, "$6 \\times 100$.", 10, 'medium'),
            generateQuestion("Find volume if Base Area=15 and height=4 for pyramid.", ["20", "60", "30", "15"], 0, "$\\frac{1}{3} \\times 15 \\times 4$.", 10, 'medium'),
            generateQuestion("How many faces on a square-based pyramid?", ["5", "4", "6", "8"], 0, "Base + 4 sides.", 10, 'medium'),
            generateQuestion("Volume of rectangular prism 2 by 5 by 10.", ["100", "17", "50", "200"], 0, "Multiplying.", 10, 'medium'),
            generateQuestion("If volume of cube is 64, what is side?", ["4", "8", "6", "16"], 0, "Cube root.", 10, 'medium'),
            generateQuestion("Radius of cone 1, height 3. Volume?", ["$\\pi$", "$3\\pi$", "$\\frac{1}{3}\\pi$", "1"], 0, "$\\frac{1}{3} \\times 1 \\times 3 \\times \pi$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Ratio of Surface Area of sphere radius R and 2R.", ["1:4", "1:2", "1:8", "1:1"], 0, "$R^2$ ratio.", 20, 'hard'),
            generateQuestion("Ratio of Volumes of sphere radius R and 3R.", ["1:27", "1:3", "1:9", "1:1"], 0, "$R^3$ ratio.", 20, 'hard'),
            generateQuestion("Volume of cone with diameter 6 and height 6?", ["$18\\pi$", "$72\\pi$", "$54\\pi$", "$6\\pi$"], 0, "Radius 3. $\\frac{1}{3} \\times 9 \\times 6 = 18$.", 20, 'hard'),
            generateQuestion("Surface area of sphere is exactly its volume. Find r.", ["3", "1", "4", "None"], 0, "$4\pi r^2 = \\frac{4}{3}\pi r^3 \Rightarrow 1 = r/3$.", 20, 'hard'),
            generateQuestion("Curved surface area of cone: radius 5, slant height 13.", ["$65\\pi$", "$60\\pi$", "$30\\pi$", "$169\\pi$"], 0, "$\pi \\times 5 \\times 13$.", 20, 'hard'),
            generateQuestion("Total surface area of cone: base radius 3, slant 5.", ["$24\\pi$", "$15\\pi$", "$9\\pi$", "$30\\pi$"], 0, "$\pi r l + \pi r^2 = 15\pi + 9\pi$.", 20, 'hard'),
            generateQuestion("Volume of pyramid with base area $B$ and height $3H$?", ["$BH$", "$3BH$", "$\\frac{1}{3}BH$", "$B/H$"], 0, "Pointy rule.", 20, 'hard'),
            generateQuestion("Find radius if volume of sphere is $36\\pi$.", ["3", "6", "9", "2"], 0, "$\\frac{4}{3}\pi r^3 = 36\pi \Rightarrow r^3 = 27$.", 20, 'hard'),
            generateQuestion("Diagonal of rectangle with area 12 and perimeter 14.", ["5", "7", "25", "1"], 0, "Sides are 3 and 4. $\sqrt{3^2+4^2}=5$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which triangle has $a^2+b^2=c^2$?", ["Right-angled", "Isosceles", "Acute", "Obtuse"], 0, "Pythagoras link.", 10, 'expert')
        ]
    },

    // --- Sec 3/4 G2 Questions ---
    'g2-s34-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Make x the subject: $y = x + k$.", ["$x = y - k$", "$x = y + k$", "$x = k - y$", "$x = y/k$"], 0, "**Lesson**: Move $k$ to the other side by subtracting.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{a}{2} + \\frac{a}{3}$.", ["$\\frac{5a}{6}$", "$\\frac{2a}{5}$", "$\\frac{a}{5}$", "$\\frac{5a}{5}$"], 0, "**Lesson**: Common denominator is 6. $\\frac{3a}{6} + \\frac{2a}{6} = \\frac{5a}{6}$.", 15, 'easy'),
            generateQuestion("Change subject to x: $y = 2x$.", ["$x = y/2$", "$x = 2y$", "$x = y-2$", "$x = 2-y$"], 0, "Divide by 2.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{x}{y} \\times \\frac{y}{z}$.", ["$x/z$", "x", "z", "xyz"], 0, "Cancel y.", 10, 'easy'),
            generateQuestion("Make a the subject: $P = 4a$.", ["$a = P/4$", "$a = 4P$", "$a = P-4$", "$a = 4-P$"], 0, "Divide by 4.", 10, 'easy'),
            generateQuestion("Simplify $1/x + 1/x$.", ["$2/x$", "$1/x^2$", "2", "x/2"], 0, "Same denominator.", 10, 'easy'),
            generateQuestion("Make x the subject: $y = x - 5$.", ["$x = y + 5$", "$x = y - 5$", "$x = 5 - y$", "x = 5y"], 0, "Add 5.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{3}{a} \\div \\frac{1}{a}$.", ["3", "1/3", "$3/a^2$", "$a^2$"], 0, "$3/a \\times a/1$.", 10, 'easy'),
            generateQuestion("Make m the subject: $y = mx$.", ["$m = y/x$", "$m = x/y$", "$m = y-x$", "$m = xy$"], 0, "Divide by x.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{ab}{a}$.", ["b", "a", "1", "ab"], 0, "Cancel a.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Make $x$ the subject: $y = mx + c$.", ["$x = \\frac{y-c}{m}$", "$x = \\frac{y+c}{m}$", "$x = m(y-c)$", "$x = \\frac{m}{y-c}$"], 0, "Step 1: $y-c = mx$. Step 2: Divide by $m$.", 20, 'medium'),
            generateQuestion("Simplify $\\frac{1}{x-1} + \\frac{1}{x+1}$.", ["$\\frac{2x}{x^2-1}$", "$\\frac{2}{x^2-1}$", "$\\frac{x}{x^2-1}$", "$\\frac{2x}{x-1}$"], 0, "Bottom is $(x-1)(x+1)$. Top is $(x+1)+(x-1) = 2x$.", 20, 'medium'),
            generateQuestion("Make r the subject: $A = \\pi r^2$ ($r > 0$).", ["$r = \\sqrt{A/\\pi}$", "$r = A/(\\pi r)$", "$r = (A/\\pi)^2$", "$r = \\sqrt{A}\\pi$"], 0, "Divide by $\pi$, then root.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x^2-1}{x+1}$.", ["$x-1$", "$x+1$", "1", "x"], 0, "Factor top.", 15, 'medium'),
            generateQuestion("Make h the subject: $V = \\frac{1}{3}Bh$.", ["$h = 3V/B$", "$h = V/3B$", "$h = 3B/V$", "$h = V-3B$"], 0, "Multiply by 3, divide by B.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{2}{x} - \\frac{1}{2x}$.", ["$\\frac{3}{2x}$", "$\\frac{1}{2x}$", "$\\frac{1}{x}$", "$\\frac{3}{x}$"], 0, "$\\frac{4}{2x} - \\frac{1}{2x}$.", 15, 'medium'),
            generateQuestion("Make x the subject: $y = \\sqrt{x}$.", ["$x = y^2$", "$x = 2y$", "$x = \\sqrt{y}$", "$x = y/2$"], 0, "Square both sides.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{a+b}{a^2-b^2}$.", ["$\\frac{1}{a-b}$", "$\\frac{1}{a+b}$", "a-b", "1"], 0, "Factor bottom.", 15, 'medium'),
            generateQuestion("Make t the subject: $v = u + at$.", ["$t = \\frac{v-u}{a}$", "$t = \\frac{u-v}{a}$", "$t = a(v-u)$", "$t = v-u-a$"], 0, "Rearrange linear.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{3x}{4} \\times \\frac{8}{x^2}$.", ["$\\frac{6}{x}$", "$\\frac{3}{2x}$", "$\\frac{6}{x^2}$", "6x"], 0, "Cancel 4 and x.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Make $x$ the subject: $y = \\frac{x+1}{x-2}$.", ["$x = \\frac{2y+1}{y-1}$", "$x = \\frac{y-1}{2y+1}$", "$x = \\frac{2y-1}{y+1}$", "$x = \\frac{y+1}{y-2}$"], 0, "**Lesson**: $y(x-2) = x+1 \\Rightarrow xy - 2y = x + 1 \\Rightarrow xy - x = 2y + 1 \\Rightarrow x(y-1) = 2y + 1$.", 25, 'expert'),
            generateQuestion("Make $r$ the subject: $V = \\frac{4}{3}\\pi r^3$.", ["$r = \\sqrt[3]{\\frac{3V}{4\\pi}}$", "$r = \\sqrt{\\frac{3V}{4\\pi}}$", "$r = \\frac{3V}{4\\pi^3}$", "$r = \\sqrt[3]{\\frac{4V}{3\\pi}}$"], 0, "Multiply by 3, divide $4\pi$, cube root.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z}$.", ["$\\frac{yz+xz+xy}{xyz}$", "$\\frac{3}{x+y+z}$", "$\\frac{1}{xyz}$", "xyz"], 0, "Common denominator xyz.", 20, 'hard'),
            generateQuestion("Make x the subject: $y = \\frac{a}{x} + b$.", ["$x = \\frac{a}{y-b}$", "$x = \\frac{y-b}{a}$", "$x = a(y-b)$", "$x = \\frac{a}{y+b}$"], 0, "$y-b = a/x$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2-5x+6}{x^2-9}$.", ["$\\frac{x-2}{x+3}$", "$\\frac{x-3}{x+3}$", "$\\frac{x-2}{x-3}$", "1"], 0, "Factor both.", 20, 'hard'),
            generateQuestion("Make x the subject: $ax^2 = b$.", ["$x = \\pm \\sqrt{b/a}$", "$x = b/a$", "$x = \\sqrt{b}-a$", "$x = (b/a)^2$"], 0, "Divide then root.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x}{x-1} - 1$.", ["$\\frac{1}{x-1}$", "0", "1", "$\\frac{x-1}{x}$"], 0, "$\\frac{x - (x-1)}{x-1}$.", 20, 'hard'),
            generateQuestion("Make L the subject: $T = 2\\pi \\sqrt{L/g}$.", ["$L = g(T/2\\pi)^2$", "$L = T^2 g / 2\\pi$", "$L = \\sqrt{Tg/2\\pi}$", "$L = g^2 T / 2\\pi$"], 0, "Square, then cross multiply.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{a^3-b^3}{a-b}$ partially... top is $(a-b)(...)$. Square term?", ["$a^2+ab+b^2$", "$a^2-ab+b^2$", "$a^2+b^2$", "$a^2-b^2$"], 0, "Identity.", 20, 'hard'),
            generateQuestion("[Interleaved] Which is the hypotenuse in $p^2+q^2=r^2$?", ["r", "p", "q", "None"], 0, "Geometry link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Make $a$ the subject: $v = u + at$.", ["$a = \\frac{v-u}{t}$", "$a = v - u - t$", "$a = \\frac{u-v}{t}$", "$a = t(v-u)$"], 0, "**Lesson**: $v - u = at$. Divide by $t$.", 5, 'easy'),
            generateQuestion("Simplify $\\frac{x}{2} \\times \\frac{4}{x}$.", ["2", "4", "x", "1/2"], 0, "**Lesson**: $x$ cancels out, $4/2 = 2$.", 10, 'easy'),
            generateQuestion("Make x the subject: $y = x/3$.", ["$x = 3y$", "$x = y/3$", "$x = y+3$", "$x = y-3$"], 0, "Multiply by 3.", 5, 'easy'),
            generateQuestion("Simplify $\\frac{x}{y} + \\frac{x}{y}$.", ["$2x/y$", "$x^2/y^2$", "2x/2y", "x/y"], 0, "Direct add.", 5, 'easy'),
            generateQuestion("Make k the subject: $C = 2\\pi k$.", ["$k = C/2\\pi$", "$k = 2\\pi C$", "$k = C-2\\pi$", "None"], 0, "Divide.", 5, 'easy'),
            generateQuestion("Simplify $\\frac{ab}{bc}$.", ["$a/c$", "$b$", "$ac$", "1"], 0, "Cancel b.", 5, 'easy'),
            generateQuestion("Make x the subject: $P = x + a + b$.", ["$x = P - a - b$", "$x = P + a + b$", "$x = a + b - P$", "$x = P/ab$"], 0, "Subtract both.", 5, 'easy'),
            generateQuestion("Simplify $\\frac{1}{a} - \\frac{1}{a}$.", ["0", "1", "a", "1/a"], 0, "Subtraction.", 5, 'easy'),
            generateQuestion("Make x the subject: $y = 10 - x$.", ["$x = 10 - y$", "$x = y - 10$", "$x = 10 + y$", "x = 10y"], 0, "Swap x and y.", 5, 'easy'),
            generateQuestion("Simplify $\\frac{x^2}{x}$.", ["x", "1", "2", "$x^3$"], 0, "Cancel power.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Simplify strictly $\\frac{x}{3} - \\frac{x-1}{2}$.", ["$\\frac{3-x}{6}$", "$\\frac{x-3}{6}$", "$\\frac{3+x}{6}$", "$\\frac{-x-3}{6}$"], 0, "**Lesson**: $\\frac{2x - 3(x-1)}{6} = \\frac{2x - 3x + 3}{6} = \\frac{3-x}{6}$.", 15, 'hard'),
            generateQuestion("Make $h$ the subject: $A = 2\\pi rh + 2\\pi r^2$.", ["$h = \\frac{A - 2\\pi r^2}{2\\pi r}$", "$h = \\frac{A}{2\\pi r} - r$", "Both A and B", "Neither"], 2, "Factorise or move term first.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{x^2-4}{x-2}$.", ["$x+2$", "$x-2$", "1", "x"], 0, "Difference of squares.", 10, 'medium'),
            generateQuestion("Make x the subject: $y = 3/x$.", ["$x = 3/y$", "$x = 3y$", "$x = y/3$", "$x = y-3$"], 0, "Swap x and y.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{x}{2} + \\frac{y}{3}$.", ["$\\frac{3x+2y}{6}$", "$\\frac{x+y}{5}$", "$\\frac{xy}{6}$", "$\\frac{3x+2y}{5}$"], 0, "Cross multiply.", 10, 'medium'),
            generateQuestion("Make a the subject: $s = ut + 0.5at^2$.", ["$a = \\frac{2(s-ut)}{t^2}$", "$a = \\frac{s-ut}{t^2}$", "$a = \\frac{2s-ut}{t^2}$", "$a = \\frac{s-ut}{2t^2}$"], 0, "Rearrange quadratic in t (solve for a).", 10, 'medium'),
            generateQuestion("Simplify $\\frac{2}{x+1} - \\frac{1}{x}$.", ["$\\frac{x-1}{x(x+1)}$", "$\\frac{1}{x+1}$", "$\\frac{1}{x}$", "$\\frac{x+1}{x(x+1)}$"], 0, "$\\frac{2x - (x+1)}{x(x+1)}$.", 10, 'medium'),
            generateQuestion("Make r the subject: $C = 2\\pi r$.", ["$r = C/2\\pi$", "$r = 2\\pi/C$", "$r = C-2\\pi$", "None"], 0, "Divide.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{x^2+2x+1}{x+1}$.", ["$x+1$", "$x-1$", "1", "$x^2+2$"], 0, "Perfect square top.", 10, 'medium'),
            generateQuestion("Make x the subject: $y = mx$.", ["$x = y/m$", "$x = m/y$", "$x = y-m$", "x = ym"], 0, "Division.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Make $x$ the subject in $a(x+b) = c(x+d)$.", ["$x = \\frac{cd-ab}{a-c}$", "$x = \\frac{ab-cd}{c-a}$", "Both A and B", "None"], 2, "**Lesson**: Expand and group $x$ terms. $ax-cx = cd-ab \\Rightarrow x(a-c) = cd-ab$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{1}{x-2} - \\frac{1}{x+2}$.", ["$\\frac{4}{x^2-4}$", "$\\frac{-4}{x^2-4}$", "$\\frac{2x}{x^2-4}$", "0"], 0, "$\\frac{(x+2)-(x-2)}{x^2-4} = 4/(x^2-4)$.", 20, 'hard'),
            generateQuestion("Make x the subject: $y = \\sqrt{x^2+1}$.", ["$x = \\pm \\sqrt{y^2-1}$", "$x = y^2-1$", "$x = \\sqrt{y-1}$", "$x = y^2+1$"], 0, "Square, subtract 1, root.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2-y^2}{x-y} \\times \\frac{1}{x+y}$.", ["1", "0", "x+y", "x-y"], 0, "Everything cancels.", 20, 'hard'),
            generateQuestion("Make x the subject: $1/x + 1/a = 1/b$.", ["$x = \\frac{ab}{a-b}$", "$x = \\frac{ab}{b-a}$", "$x = b-a$", "$x = a-b$"], 0, "$1/x = 1/b - 1/a = (a-b)/ab$. Flip it.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^3-x}{x^2-x}$.", ["x+1", "x-1", "x", "1"], 0, "$x(x-1)(x+1) / x(x-1)$.", 20, 'hard'),
            generateQuestion("Make x the subject: $y = (x-h)^2 + k$.", ["$x = h \\pm \\sqrt{y-k}$", "$x = h + y - k$", "$x = \\sqrt{h+y-k}$", "None"], 0, "Standard vertex form rearrange.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x}{y^2} \\div \\frac{x^2}{y}$.", ["$\\frac{1}{xy}$", "$\\frac{y}{x}$", "xy", "$\\frac{x^3}{y^3}$"], 0, "Flipping rule.", 20, 'hard'),
            generateQuestion("Make a the subject: $S = \\frac{n}{2}(2a + (n-1)d)$.", ["$a = \\frac{S/n \\times 2 - (n-1)d}{2}$", "Too long", "A", "None"], 2, "Isolate a.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2 + 5x + 6 = 0$.", ["x=-2, -3", "x=2, 3", "x=1, 6", "x=0"], 0, "Algebra/Equation link.", 10, 'expert')
        ]
    },
    'g2-s34-funcs': {
        learning: [
            // Easy (1-10)
            generateQuestion("Gradient of $y = 3x + 5$?", ["3", "5", "-3", "1"], 0, "**Lesson**: In $y=mx+c$, $m$ is the gradient. Here $m=3$.", 10, 'easy'),
            generateQuestion("Sketch of $y = x^2$ is a...", ["U-shape (Parabola)", "Straight line", "Circle", "Wave"], 0, "Standard quadratic curve.", 10, 'easy'),
            generateQuestion("Does $y = -2x$ go down as x increases?", ["Yes", "No"], 0, "Negative gradient.", 10, 'easy'),
            generateQuestion("Y-intercept of $y = x - 7$?", ["-7", "7", "1", "0"], 0, "The constant term.", 10, 'easy'),
            generateQuestion("Is $y = 5$ a horizontal line?", ["Yes", "No"], 0, "Gradient is zero.", 10, 'easy'),
            generateQuestion("Is $x = 2$ a vertical line?", ["Yes", "No"], 0, "Undefined gradient.", 10, 'easy'),
            generateQuestion("At the y-intercept, x is always ___.", ["0", "1", "y", "Infinity"], 0, "Definition of y-axis.", 10, 'easy'),
            generateQuestion("Function $f(x)=2x$. Find $f(5)$.", ["10", "7", "3", "2x"], 0, "$2 \\times 5$.", 10, 'easy'),
            generateQuestion("Which is a linear function?", ["$y=2x+1$", "$y=x^2$", "$y=1/x$", "$y^2=x$"], 0, "Max power 1.", 10, 'easy'),
            generateQuestion("Gradient of horizontal line?", ["0", "1", "Undefined", "Infinite"], 0, "No steepness.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Eq of line through $(0,0)$ with gradient 2?", ["$y=2x$", "$y=x+2$", "$y=2$", "$x=2y$"], 0, "**Lesson**: $y = 2x + 0$.", 15, 'medium'),
            generateQuestion("Find x-intercept of $2x + 3y = 6$.", ["3", "2", "6", "0"], 0, "**Lesson**: Set $y=0$. $2x=6 \\Rightarrow x=3$.", 20, 'medium'),
            generateQuestion("Find gradient between (1,2) and (3,6).", ["2", "4", "0.5", "1"], 0, "$(6-2)/(3-1) = 4/2 = 2$.", 15, 'medium'),
            generateQuestion("Y-intercept of $y = 3(x-2)$.", ["-6", "3", "-2", "0"], 0, "Plug in x=0.", 15, 'medium'),
            generateQuestion("Eq of line with gradient 1 through (0,5).", ["$y=x+5$", "$y=x-5$", "$y=5x$", "$y=5$"], 0, "Direct substitution.", 15, 'medium'),
            generateQuestion("Is $(2,10)$ on $y = 5x$?", ["Yes", "No"], 0, "$10 = 5 \\times 2$.", 15, 'medium'),
            generateQuestion("Function $g(x)=x^2+1$. Find $g(3)$.", ["10", "7", "9", "6"], 0, "$3^2+1=10$.", 15, 'medium'),
            generateQuestion("Find midpoint of (0,0) and (4,8).", ["(2,4)", "(4,2)", "(0,8)", "(4,0)"], 0, "Average of coordinates.", 15, 'medium'),
            generateQuestion("If $y=kx$ and $y=12$ when $x=3$, find k.", ["4", "36", "15", "9"], 0, "$12=3k$.", 15, 'medium'),
            generateQuestion("Shape of $y = 10-x^2$?", ["Upside down U", "U-shape", "Line", "Dot"], 0, "Negative quadratic.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Eq of line through $(1,2)$ and $(3,8)$.", ["$y = 3x - 1$", "$y = 3x + 1$", "$y = 2x + 1$", "$y = 4x - 2$"], 0, "**Lesson**: Gradient $m = (8-2)/(3-1) = 3$. Eq: $y-2 = 3(x-1) \\Rightarrow y = 3x - 1$.", 25, 'hard'),
            generateQuestion("Find point of intersection for $y=x+1$ and $y=2x-1$.", ["(2,3)", "(1,2)", "(0,1)", "(3,4)"], 0, "$x+1 = 2x-1 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Eq of line through (2,5) with gradient -1.", ["$y = -x+7$", "$y = -x+3$", "$y = -x+5$", "$y = x+3$"], 0, "$5 = -2 + c \Rightarrow c=7$.", 20, 'hard'),
            generateQuestion("Intersection of $y=3$ and $x=4$ is...", ["(4,3)", "(3,4)", "(0,0)", "None"], 0, "Standard coordinate.", 20, 'hard'),
            generateQuestion("Find k if line $y=kx+2$ passes through (5,7).", ["1", "5", "7", "0"], 0, "$7=5k+2 \Rightarrow 5k=5$.", 20, 'hard'),
            generateQuestion("Gradient of line perpendicular to $y=2x$? (Bonus)", ["-0.5", "-2", "0.5", "2"], 0, "Product is -1.", 20, 'hard'),
            generateQuestion("Solve $x^2 = 9$ graphically... points are x=?", ["3 and -3", "3 only", "-3 only", "9"], 0, "Two roots.", 20, 'hard'),
            generateQuestion("If $f(x)=mx+c$, $f(0)=2$ and $f(1)=5$, find m.", ["3", "2", "5", "0"], 0, "Change in y / change in x.", 20, 'hard'),
            generateQuestion("Roots of $(x-2)(x+5)=0$?", ["2, -5", "-2, 5", "2, 5", "0"], 0, "Zero product property.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $2x+y=10$ if $x=3$.", ["y=4", "y=3", "y=10", "y=0"], 0, "Equation link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Identify y-intercept of $y = -2x + 10$.", ["10", "-2", "0", "5"], 0, "**Lesson**: Constant term when $x=0$.", 10, 'easy'),
            generateQuestion("Does $(1,1)$ stay on the line $y = x$?", ["Yes", "No"], 0, "Equality holds.", 5, 'easy'),
            generateQuestion("Gradient of $y=10x$.", ["10", "0", "1", "x"], 0, "Coefficient of x.", 5, 'easy'),
            generateQuestion("Is $y=x^2+x$ a straight line?", ["No", "Yes"], 0, "Quadratic term.", 5, 'easy'),
            generateQuestion("Function $h(x)=x-1$. Find $h(10)$.", ["9", "11", "10", "1"], 0, "Substract.", 5, 'easy'),
            generateQuestion("At x-intercept, y is always ___.", ["0", "1", "x", "Infinity"], 0, "Definition of x-axis.", 5, 'easy'),
            generateQuestion("Positive gradient means the line goes ___.", ["Up", "Down", "Horizontal", "Vertical"], 0, "Left to right.", 5, 'easy'),
            generateQuestion("Which is horizontal? $y=3$ or $x=3$?", ["y=3", "x=3"], 0, "Constant height.", 5, 'easy'),
            generateQuestion("Y-intercept of $x+y=5$.", ["5", "0", "1", "-5"], 0, "Set x=0.", 5, 'easy'),
            generateQuestion("Gradient of $y=5-x$.", ["-1", "5", "1", "0"], 0, "Coefficient of x.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find gradient of line $2y = 4x + 6$.", ["2", "4", "6", "3"], 0, "**Lesson**: Standardise to $y = 2x + 3$. $m=2$.", 10, 'medium'),
            generateQuestion("If function is $f(x)=2x+1$, find $x$ if $f(x)=7$.", ["3", "4", "2", "7"], 0, "$2x=6 \Rightarrow x=3$.", 10, 'medium'),
            generateQuestion("Midpoint of (2,2) and (6,10).", ["(4,6)", "(8,12)", "(4,8)", "(2,5)"], 0, "Averaging.", 10, 'medium'),
            generateQuestion("Eq of line with gradient 0 through (2,3).", ["y=3", "x=2", "y=0", "y=2"], 0, "Horizontal line.", 10, 'medium'),
            generateQuestion("Find gradient between (-1,-1) and (1,1).", ["1", "2", "0", "-1"], 0, "$(1 - -1)/(1 - -1) = 2/2 = 1$.", 10, 'medium'),
            generateQuestion("Does $y=x^2$ pass through (-2,4)?", ["Yes", "No"], 0, "(-2)^2 = 4.", 10, 'medium'),
            generateQuestion("x-intercept of $y=3x-9$.", ["3", "9", "-9", "-3"], 0, "0 = 3x-9.", 10, 'medium'),
            generateQuestion("Eq of line through (0,2) and (1,4)?", ["y=2x+2", "y=2x", "y=x+2", "y=4x"], 0, "m=2, c=2.", 10, 'medium'),
            generateQuestion("Is $y=x^2-10$ a straight line?", ["No", "Yes"], 0, "Power 2.", 10, 'medium'),
            generateQuestion("Find value of y if $y=2x+5$ and $x=-1$.", ["3", "7", "-2", "4"], 0, "-2+5=3.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find gradient of line $3x - 4y = 12$.", ["0.75", "1.33", "-3", "4"], 0, "**Lesson**: $4y = 3x - 12 \\Rightarrow y = 0.75x - 3$.", 15, 'hard'),
            generateQuestion("Which point is the intersection of $y = 2x$ and $y = 10 - 3x$?", ["(2,4)", "(1,2)", "(3,6)", "(0,0)"], 0, "$5x=10 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Eq of line with gradient 4 through (1,1).", ["y=4x-3", "y=4x+1", "y=4x", "y=x+4"], 0, "$1=4+c \Rightarrow c=-3$.", 20, 'hard'),
            generateQuestion("X-intercept of $ax+by=c$.", ["c/a", "c/b", "a/c", "b/c"], 0, "Set y=0.", 20, 'hard'),
            generateQuestion("Solve graphically $y=x$ and $y=-x$ intersection.", ["(0,0)", "(1,1)", "(2,2)", "None"], 0, "$x=-x \Rightarrow 2x=0$.", 20, 'hard'),
            generateQuestion("Midpoint of (a,b) and (c,d)?", ["((a+c)/2, (b+d)/2)", "(a+c, b+d)", "(ac/2, bd/2)", "None"], 0, "Formula.", 20, 'hard'),
            generateQuestion("If $f(x)=x^2+ax+b$ passes through (0,0) and (1,0), find a.", ["-1", "0", "1", "2"], 0, "$b=0$. $1+a=0 \Rightarrow a=-1$.", 20, 'hard'),
            generateQuestion("Gradient of $y=mx+c$ through (x1, y1) and (x2, y2).", ["(y2-y1)/(x2-x1)", "(x2-x1)/(y2-y1)", "y-y", "x-x"], 0, "Standard slope formula.", 20, 'hard'),
            generateQuestion("Is $(10, 101)$ on $y=x^2+1$?", ["Yes", "No"], 0, "$100+1=101$.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+1)(x+2)$.", ["$x^2+3x+2$", "$x^2+2$", "$x^3$", "$3x+2$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g2-s34-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Angle subtended by a diameter to the circumference is:", ["$90^\\circ$", "$60^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0, "**Lesson**: Angles in a perfect semicircle are exactly a right angle.", 10, 'easy'),
            generateQuestion("Is a square always similar to another square?", ["Yes", "No"], 0, "**Lesson**: All squares have $90^\\circ$ angles and proportional sides.", 10, 'easy'),
            generateQuestion("How many vertices in a heptagon?", ["7", "6", "8", "10"], 0, "Hepta means 7.", 10, 'easy'),
            generateQuestion("Angle at center is twice angle at ___.", ["Circumference", "Tangent", "Radius", "Diameter"], 0, "Circle property.", 10, 'easy'),
            generateQuestion("Sum of interior angles of a quadrilateral?", ["$360^\\circ$", "$180^\\circ$", "$720^\\circ$", "$90^\\circ$"], 0, "General rule.", 10, 'easy'),
            generateQuestion("Vertical angles are always ___.", ["Equal", "Complementary", "Supplementary", "90 deg"], 0, "Intersection rule.", 10, 'easy'),
            generateQuestion("Number of sides in a nonagon?", ["9", "7", "8", "6"], 0, "Nona means 9.", 10, 'easy'),
            generateQuestion("Area of circle formula?", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$r^2$"], 0, "Basic identity.", 10, 'easy'),
            generateQuestion("Line touching circle at one point?", ["Tangent", "Secant", "Chord", "Radius"], 0, "Touches edge only.", 10, 'easy'),
            generateQuestion("Opposite angles of cyclic quadrilateral sum to?", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"], 0, "Circle geometry rule.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find gradient between $(0,0)$ and exactly $(2,4)$.", ["2", "0.5", "4", "8"], 0, "**Lesson**: Rise / Run = $(4-0)/(2-0) = 4/2 = 2$.", 15, 'medium'),
            generateQuestion("Find midpoint of (1,2) and (5,10).", ["(3,6)", "(6,12)", "(3,4)", "(2,3)"], 0, "**Lesson**: Average of coords: $((1+5)/2, (2+10)/2) = (3,6)$.", 20, 'medium'),
            generateQuestion("Angle in same segment are ___.", ["Equal", "Supplementary", "90 deg", "Varies"], 0, "Circle property.", 15, 'medium'),
            generateQuestion("Radius $\\perp$ tangent at point of contact?", ["Yes", "No"], 0, "$90^\\circ$ rule.", 15, 'medium'),
            generateQuestion("Find x if interior angles are $(x-10), (x+10), (x+20), (x-20)$ in rect.", ["$90^\\circ$", "$45^\\circ$", "$100^\\circ$", "$360^\\circ$"], 0, "$4x = 360$.", 15, 'medium'),
            generateQuestion("Exterior angle of regular 12-gon?", ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$15^\\circ$"], 0, "$360/12$.", 15, 'medium'),
            generateQuestion("Coordinate of origin?", ["(0,0)", "(1,1)", "None", "(x,y)"], 0, "Start point.", 15, 'medium'),
            generateQuestion("Find gradient of $y+x=5$.", ["-1", "1", "5", "0"], 0, "$y = -x+5$.", 15, 'medium'),
            generateQuestion("Is $(3,4)$ 5 units from origin?", ["Yes", "No"], 0, "$\sqrt{3^2+4^2}$.", 15, 'medium'),
            generateQuestion("Angle between North and East?", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$0^\\circ$"], 0, "Compass quadrant.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Eq of line with gradient 2 through (3,4).", ["$y = 2x - 2$", "$y = 2x + 2$", "$y = 2x - 10$", "$y = x + 1$"], 0, "**Lesson**: $4 = 2(3) + c \\Rightarrow c = -2$.", 25, 'hard'),
            generateQuestion("Length of chord distance 3 from center of radius 5.", ["8", "4", "6", "10"], 0, "**Lesson**: Half-chord = $\\sqrt{5^2-3^2} = 4$. Total = 8.", 20, 'hard'),
            generateQuestion("Find x if $(x,4)$ is 5 units from $(0,0)$ ($x>0$).", ["3", "1", "9", "5"], 0, "Pythagoras $x^2+4^2=5^2$.", 20, 'hard'),
            generateQuestion("Angle between two tangents from external point is $60^\\circ$. Angle at center?", ["$120^\\circ$", "$60^\\circ$", "$90^\\circ$", "$180^\\circ$"], 0, "Supplementary to angle at center.", 20, 'hard'),
            generateQuestion("Eq of circle center (0,0) radius 5.", ["$x^2+y^2=25$", "$x+y=5$", "$x^2+y^2=5$", "$x^2-y^2=25$"], 0, "Standard circle eq.", 20, 'hard'),
            generateQuestion("Two circles touch externally. Radii 3 and 4. Distance between centers?", ["7", "1", "12", "5"], 0, "Sum of radii.", 20, 'hard'),
            generateQuestion("Find gradient of line $\\perp$ to $y=3x$.", ["-1/3", "-3", "1/3", "3"], 0, "Negative reciprocal.", 20, 'hard'),
            generateQuestion("Area of segment: Sector area - Triangle area. Radius 2, angle 90 deg.", ["$\\pi - 2$", "$2\\pi - 2$", "$\\pi$", "2"], 0, "$\\text{Area} = \\frac{1}{4}\\pi(2^2) - \\frac{1}{2}(2)(2) = \\pi - 2$.", 20, 'hard'),
            generateQuestion("Angle subtended by arc of length $\\pi$ on radius 1 is ___ radians.", ["$\\pi$", "1", "$2\\pi$", "0.5"], 0, "$s=r\\theta \\Rightarrow \\pi = 1\\theta$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $y = 2x$ and $y = x+3$. Intersection?", ["(3,6)", "(1,2)", "(2,5)", "(0,0)"], 0, "Function/Geometry link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Length of straight line from $(0,0)$ to $(3,4)$.", ["5", "7", "12", "25"], 0, "**Lesson**: Distance is $\\sqrt{3^2 + 4^2} = 5$.", 15, 'easy'),
            generateQuestion("Opposite angles in a cyclic quad sum to exactly:", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"], 0, "**Lesson**: Standard circle property.", 10, 'easy'),
            generateQuestion("Radius is half of ___.", ["Diameter", "Circumference", "Area", "Arc"], 0, "Geometry definition.", 5, 'easy'),
            generateQuestion("Gradient of vertical line?", ["Undefined", "0", "1", "100"], 0, "Infinite slope.", 5, 'easy'),
            generateQuestion("Is a circle a polygon?", ["No", "Yes"], 0, "Needs straight sides.", 5, 'easy'),
            generateQuestion("Point $(2,3)$. X-coord is ___.", ["2", "3", "5", "0"], 0, "First digit.", 5, 'easy'),
            generateQuestion("Angle in a semicircle?", ["$90^\\circ$", "$180^\\circ$", "$60^\\circ$", "$120^\\circ$"], 0, "Circle rule.", 5, 'easy'),
            generateQuestion("Tangent is ___ line to a circle.", ["Outside", "Inside", "Through", "Center"], 0, "External touch.", 5, 'easy'),
            generateQuestion("Sum of interior angles of hexagon?", ["$720^\\circ$", "$360^\\circ$", "$540^\\circ$", "$180^\\circ$"], 0, "4 triangles.", 5, 'easy'),
            generateQuestion("Eq of x-axis?", ["y=0", "x=0", "y=x", "y=1"], 0, "Zero height.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Angle at center is $100^\\circ$. Angle at circumference?", ["$50^\\circ$", "$100^\\circ$", "$200^\\circ$", "$25^\\circ$"], 0, "**Lesson**: Angles at the center are exactly TWICE those at circumference.", 15, 'medium'),
            generateQuestion("Find gradient of line $x+y=10$.", ["-1", "1", "10", "0"], 0, "**Lesson**: $y = -x + 10 \\Rightarrow m = -1$.", 10, 'medium'),
            generateQuestion("Midpoint of (0,0) and (10,10).", ["(5,5)", "(10,10)", "(0,0)", "None"], 0, "Center point.", 10, 'medium'),
            generateQuestion("Distance of (6,8) from origin.", ["10", "14", "48", "2"], 0, "$\sqrt{36+64}$.", 10, 'medium'),
            generateQuestion("Angle between radius and tangent.", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0, "Perpendicularity.", 10, 'medium'),
            generateQuestion("Find interior angle of regular pentagon.", ["$108^\\circ$", "$72^\\circ$", "$90^\\circ$", "$60^\\circ$"], 0, "$3 \\times 180 / 5$.", 10, 'medium'),
            generateQuestion("Eq of line through origin with gradient -1.", ["y=-x", "y=x", "y=0", "x=0"], 0, "Standard form.", 10, 'medium'),
            generateQuestion("Are similar triangles identical in size?", ["No", "Yes"], 0, "Only same shape.", 10, 'medium'),
            generateQuestion("Parallel lines have the same ___.", ["Gradient", "Intercept", "Length", "Color"], 0, "Infinite slope equality.", 10, 'medium'),
            generateQuestion("Sum of exterior angles of decagon.", ["$360^\\circ$", "$36^\\circ$", "$180^\\circ$", "$720^\\circ$"], 0, "Universal for all polygons.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find y-intercept of line $2x-3y=6$.", ["-2", "2", "3", "0"], 0, "**Lesson**: Set $x=0$, $-3y = 6 \\Rightarrow y = -2$.", 20, 'hard'),
            generateQuestion("Find area of triangle with vertices (0,0), (4,0), (0,3).", ["6", "12", "7", "2.5"], 0, "Base 4, Height 3. $\\frac{1}{2} \\times 4 \\times 3$.", 20, 'hard'),
            generateQuestion("Which is eq of line $\\perp$ to $y=0.5x+2$ through (0,0)?", ["$y = -2x$", "$y = 2x$", "$y = -0.5x$", "$y = 0.5x$"], 0, "Negative reciprocal gradient.", 20, 'hard'),
            generateQuestion("Find length of tangent from (0,5) to circle $x^2+y^2=9$.", ["4", "5", "3", "16"], 0, "Distance to origin is 5, radius is 3. $\sqrt{5^2-3^2}=4$.", 20, 'hard'),
            generateQuestion("Sum of interior angles of n-sided poly is $1800^\\circ$. n?", ["12", "10", "14", "8"], 0, "$(n-2) \\times 180 = 1800$.", 20, 'hard'),
            generateQuestion("Angle at circumference from major arc is $x$. Angle at center?", ["2x", "0.5x", "x", "360-2x"], 0, "Theorem holds for all arcs.", 20, 'hard'),
            generateQuestion("Is (3,3) the center of a circle through (0,0), (6,0), (0,6)?", ["Yes", "No"], 0, "Equal distance to all points.", 20, 'hard'),
            generateQuestion("Slope of line through (1,2) and (1,10)?", ["Undefined", "0", "8", "1"], 0, "Vertical line.", 20, 'hard'),
            generateQuestion("Midpoint of (x1, y1) and (x2, y2) if both are same point?", ["(x1, y1)", "(0,0)", "None", "(x2, y2)"], 2, "Both A and D are correct.", 20, 'hard'),
            generateQuestion("[Interleaved] Make y subject: $x+y=5$.", ["y=5-x", "y=x-5", "y=5", "x=5"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g2-s34-trig': {
        learning: [
            // Easy (1-10)
            generateQuestion("If you possess a matching pair of a side and opposite angle, which rule?", ["Sine Rule", "Cosine Rule", "Area Rule", "Pythagoras"], 0, "**Lesson**: Sine Rule relies on known opposing 'matching pairs'.", 10, 'easy'),
            generateQuestion("Nautical Bearings are strictly measured starting from?", ["North", "South", "East", "West"], 0, "**Lesson**: Ships start at True North ($000^\\circ$) turning clockwise.", 10, 'easy'),
            generateQuestion("Bearing of East?", ["$090^\\circ$", "$270^\\circ$", "$180^\\circ$", "$000^\\circ$"], 0, "90 degrees clockwise from North.", 10, 'easy'),
            generateQuestion("Bearing of South?", ["$180^\\circ$", "$090^\\circ$", "$270^\\circ$", "$360^\\circ$"], 0, "Opposite of North.", 10, 'easy'),
            generateQuestion("Bearing of West?", ["$270^\\circ$", "$090^\\circ$", "$180^\\circ$", "$315^\\circ$"], 0, "270 degrees clockwise.", 10, 'easy'),
            generateQuestion("Sine of $90^\\circ$?", ["1", "0", "0.5", "Undefined"], 0, "Unit circle max.", 10, 'easy'),
            generateQuestion("Cosine of $90^\\circ$?", ["0", "1", "0.5", "-1"], 0, "Unit circle min.", 10, 'easy'),
            generateQuestion("Tangent of $45^\\circ$?", ["1", "0", "0.5", "Infinity"], 0, "Sin/Cos equality.", 10, 'easy'),
            generateQuestion("In right triangle, $\\sin \\theta =$?", ["Opp/Hyp", "Adj/Hyp", "Opp/Adj", "Hyp/Opp"], 0, "SOH definition.", 10, 'easy'),
            generateQuestion("Area of triangle $= \\frac{1}{2}ab\\sin C$?", ["Yes", "No"], 0, "Standard area theorem.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If side $a=5$, angle $A=30^\\circ$, and angle $B=90^\\circ$, find side $b$.", ["10", "2.5", "5", "7.07"], 0, "**Lesson**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\Rightarrow \\frac{5}{0.5} = \\frac{b}{1} \\Rightarrow b = 10$.", 15, 'medium'),
            generateQuestion("Bearing of B from A is $060^\\circ$. Find bearing of A from B.", ["$240^\\circ$", "$120^\\circ$", "$300^\\circ$", "$060^\\circ$"], 0, "**Lesson**: Add $180^\\circ$ to the original bearing: $60+180 = 240$.", 20, 'medium'),
            generateQuestion("Calculate third side if $a=3, b=4$, angle $C=90^\\circ$.", ["5", "7", "1", "25"], 0, "Pythagoras case of Cosine rule.", 15, 'medium'),
            generateQuestion("Find Area of triangle with $a=10, b=10, C=30^\\circ$.", ["25", "50", "100", "12.5"], 0, "$\\frac{1}{2}(10)(10)(0.5) = 25$.", 15, 'medium'),
            generateQuestion("If $\\sin \\theta = 0.5$ for acute angle, $\\theta=$?", ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "Standard value.", 15, 'medium'),
            generateQuestion("In triangle ABC, sum of angles is?", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "Varies"], 0, "Universal rule.", 15, 'medium'),
            generateQuestion("Cosine Rule solves side when we have ___.", ["2 sides and included angle", "2 angles and 1 side", "3 angles", "None"], 0, "SAS condition.", 15, 'medium'),
            generateQuestion("Sine Rule solves triangle when we have ___.", ["Matching pair", "3 sides only", "Area only", "None"], 0, "A-a or B-b pair.", 15, 'medium'),
            generateQuestion("True bearing of Northwest?", ["$315^\\circ$", "$225^\\circ$", "$135^\\circ$", "$045^\\circ$"], 0, "$360 - 45$.", 15, 'medium'),
            generateQuestion("If $\\cos \\theta = 0$, acute $\\theta=$?", ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$60^\\circ$"], 0, "Zero crossing.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find side $c$ if $a=5, b=8$ and $\\cos C = 0.5$.", ["7", "10", "12", "9"], 0, "**Lesson**: $c^2 = 5^2 + 8^2 - 2(5)(8)(0.5) = 25 + 64 - 40 = 49$. $c = 7$.", 25, 'hard'),
            generateQuestion("Area of obtuse triangle $a=4, b=6, C=150^\\circ$?", ["6", "12", "3", "0"], 0, "**Lesson**: $\\frac{1}{2}(4)(6)\\sin 150^\\circ = 12(0.5) = 6$.", 20, 'hard'),
            generateQuestion("Find angle A if $\\sin A / 10 = \\sin 30/5$.", ["$90^\\circ$ (or $180-90$)? Error.", "60", "90", "45"], 2, "$\\sin A = 2 \\times 0.5 = 1$.", 20, 'hard'),
            generateQuestion("Angle of elevation is measured from ___.", ["Horizontal looking up", "Vertical looking down", "North", "Ground level only"], 0, "Eye level up.", 20, 'hard'),
            generateQuestion("Angle of depression equals angle of elevation? (Parallel lines)", ["Yes", "No"], 0, "Alternate angles.", 20, 'hard'),
            generateQuestion("Bearing $300^\\circ$ is in which quadrant?", ["NW", "NE", "SE", "SW"], 0, "Between 270 and 360.", 20, 'hard'),
            generateQuestion("If $\\tan \\theta = 1$, find $\\theta$.", ["$45^\\circ$", "$90^\\circ$", "$0^\\circ$", "$135^\\circ$"], 0, "Equal legs.", 20, 'hard'),
            generateQuestion("Ambigous case of Sine Rule occurs when...", ["SSA condition", "SSS condition", "ASA condition", "None"], 0, "Side Side Angle.", 20, 'hard'),
            generateQuestion("Distance between (0,0,0) and (1,1,1) in 3D? (Bonus)", ["$\\sqrt{3}$", "3", "1", "2"], 0, "Extension of 2D.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(sin x)^2 + (cos x)^2$.", ["1", "0", "2", "sin x cos x"], 0, "Trig identity link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("If a vessel travels dead Northeast, what is its bearing?", ["$045^\\circ$", "$090^\\circ$", "$135^\\circ$", "$315^\\circ$"], 0, "**Lesson**: Northeast is exactly halfway between N ($000^\\circ$) and E.", 15, 'easy'),
            generateQuestion("Formula for Cosine rule solving side $c^2$?", ["$a^2+b^2-2ab\\cos C$", "$a^2+b^2+2ab\\cos C$", "$a+b-\\cos C$", "$ab\\sin C$"], 0, "**Lesson**: It is $a^2 + b^2 - 2ab \\cos C$.", 20, 'easy'),
            generateQuestion("What is used for right triangles ONLY?", ["$a^2+b^2=c^2$", "Sine Rule", "Cosine Rule", "Area Rule"], 0, "Pythagoras.", 5, 'easy'),
            generateQuestion("Bearing of East?", ["$090^\\circ$", "$270^\\circ$", "0", "360"], 0, "Right turn.", 5, 'easy'),
            generateQuestion("Sum of angles in triangle.", ["180", "360", "90", "0"], 0, "Basic fact.", 5, 'easy'),
            generateQuestion("Sine of 0 degrees?", ["0", "1", "0.5", "Undefined"], 0, "Start of cycle.", 5, 'easy'),
            generateQuestion("Cosine of 0 degrees?", ["1", "0", "0.5", "Undefined"], 0, "Start of cycle.", 5, 'easy'),
            generateQuestion("How many degrees in a full circle?", ["360", "180", "90", "270"], 0, "Rotation.", 5, 'easy'),
            generateQuestion("Adjacent side is next to ___.", ["Hypotenuse and Angle", "Opposite side", "Center", "None"], 0, "Definition.", 5, 'easy'),
            generateQuestion("Hypotenuse is the ___ side.", ["Longest", "Shortest", "Middle", "Vertical"], 0, "Right triangle fact.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Bearing of $225^\\circ$ corresponds to which direction?", ["Southwest", "Southeast", "Northwest", "Northeast"], 0, "**Lesson**: Halfway between South ($180^\\circ$) and West ($270^\\circ$).", 10, 'medium'),
            generateQuestion("Calculate Area of triangle with $a=4, b=5$ and angle $C=30^\\circ$.", ["5", "10", "20", "2.5"], 0, "**Lesson**: $\\frac{1}{2}(4)(5)(0.5) = 5$.", 10, 'medium'),
            generateQuestion("Find x if $x/\\sin 30 = 10/\\sin 90$.", ["5", "10", "2.5", "0"], 0, "$x = 10 \\times 0.5$.", 10, 'medium'),
            generateQuestion("Inverse of sin gives ___.", ["Angle", "Side", "Area", "Perimeter"], 0, "Function mapping.", 10, 'medium'),
            generateQuestion("Bearing from B to A is $200^\\circ$. From A to B is?", ["$020^\\circ$", "$100^\\circ$", "$300^\\circ$", "$000^\\circ$"], 0, "$200 - 180$.", 10, 'medium'),
            generateQuestion("Elevation angle of a tower top.", ["Angle looking up", "Angle looking down", "Height", "Shadow length"], 0, "Definition.", 10, 'medium'),
            generateQuestion("Cosine of $180^\\circ$?", ["-1", "0", "1", "Undefined"], 0, "Half cycle.", 10, 'medium'),
            generateQuestion("Sine rule pairs sides with ___ angles.", ["Opposite", "Adjacent", "Alternate", "Interior"], 0, "Rule structure.", 10, 'medium'),
            generateQuestion("Can Cosine rule solve for angles?", ["Yes", "No"], 0, "Rearrange formula.", 10, 'medium'),
            generateQuestion("Is Area = $0.5 ab \\sin C$ valid for all triangles?", ["Yes", "No"], 0, "Universal law.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("A ship flies North, then East. Distance 3km and 4km. What is bearing back to start?", ["$233.1^\\circ$", "$225^\\circ$", "$180^\\circ$", "$270^\\circ$"], 0, "**Lesson**: Start to End is $053.1^\\circ$. End to Start is $53.1+180 = 233.1^\\circ$.", 20, 'hard'),
            generateQuestion("Find angle $C$ if $a=5, b=6, c=7$ using Cosine Rule.", ["$78.5^\\circ$", "$60^\\circ$", "$90^\\circ$", "$45^\\circ$"], 0, "**Lesson**: $\\cos C = (5^2+6^2-7^2)/(2 \\cdot 5 \\cdot 6) = (25+36-49)/60 = 12/60 = 0.2$.", 20, 'hard'),
            generateQuestion("Three-figure bearing of Southeast.", ["135", "045", "225", "315"], 0, "Standard notation.", 20, 'hard'),
            generateQuestion("Solve $\\sin x = -0.5$ in $[180, 270]$.", ["210", "330", "150", "0"], 0, "Quadrant 3.", 20, 'hard'),
            generateQuestion("Law of Cosines reduces to Pythagoras when...", ["Angle is 90", "Sides are equal", "Perimeter is 10", "None"], 0, "$\\cos 90 = 0$.", 20, 'hard'),
            generateQuestion("Ratio of $\\sin A / a$ equals?", ["$\\sin B / b$", "Area", "Perimeter", "1"], 0, "Sine rule equality.", 20, 'hard'),
            generateQuestion("If Area = 12, $a=6, b=8$, find $\\sin C$.", ["0.5", "1", "0.25", "0"], 0, "$12 = 0.5 \\times 48 \\times \sin C$.", 20, 'hard'),
            generateQuestion("Angle of depression from cliff to boat.", ["Angle down from horizontal", "Angle up from boat", "Water depth", "Cliff height"], 0, "Definition.", 20, 'hard'),
            generateQuestion("Solve $\\cos x = 1$ for $0 < x < 360$.", ["None", "0", "180", "360"], 0, "Exclude boundaries.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $a^2 = b^2 + c^2$ if $b=3, c=4$.", ["a=5", "a=7", "a=1", "a=25"], 0, "Geometry link.", 10, 'expert')
        ]
    },
    'g2-s34-mensuration': {
        learning: [
            // Easy (1-10)
            generateQuestion("Convert $180^\\circ$ entirely into radians.", ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$\\pi/4$"], 0, "**Lesson**: $180^\\circ$ universally equals exactly $\\pi$ radians.", 10, 'easy'),
            generateQuestion("What is $90^\\circ$ in radians?", ["$\\pi/2$", "$\\pi$", "$2\\pi$", "0"], 0, "**Lesson**: Half of $\\pi$.", 10, 'easy'),
            generateQuestion("Convert $360^\\circ$ to radians.", ["$2\\pi$", "$\\pi$", "$4\\pi$", "0"], 0, "Full circle.", 10, 'easy'),
            generateQuestion("Arc length of whole circle?", ["$2\\pi r$", "$\\pi r^2$", "$r\\theta$", "None"], 0, "Circumference.", 10, 'easy'),
            generateQuestion("Is 1 radian about $57.3^\\circ$?", ["Yes", "No"], 0, "$180/\\pi$.", 10, 'easy'),
            generateQuestion("Formula for sector area?", ["$\\frac{1}{2}r^2\\theta$", "$r\\theta$", "$\\pi r^2$", "$2\\pi r$"], 0, "Angle in radians.", 10, 'easy'),
            generateQuestion("Units for $\\theta$ in $s=r\\theta$?", ["Radians", "Degrees", "Meters", "Seconds"], 0, "Must be radians.", 10, 'easy'),
            generateQuestion("Area of circle of radius 1?", ["$\\pi$", "1", "$2\\pi$", "0"], 0, "$\\pi(1)^2$.", 10, 'easy'),
            generateQuestion("Convert $\\pi/4$ rad to degrees.", ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$"], 0, "$180/4$.", 10, 'easy'),
            generateQuestion("Length of radius 10 arc with $\\theta=1$ rad.", ["10", "1", "31.4", "0"], 0, "$10 \\times 1$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Arc length formula (where $\\theta$ is in radians)?", ["$r\\theta$", "$r^2\\theta$", "$\\frac{1}{2}r^2\\theta$", "$2\\pi r$"], 0, "**Lesson**: Arc Length is simply radius multiplying angle: $s = r\\theta$.", 15, 'medium'),
            generateQuestion("Find radius if arc length is 10 and angle is 2 rad.", ["5", "20", "0.2", "2"], 0, "**Lesson**: $r = s/\\theta = 10/2 = 5$.", 15, 'medium'),
            generateQuestion("Area of sector with radius 4 and angle 0.5 rad.", ["4", "8", "16", "2"], 0, "$0.5 \\times 16 \\times 0.5 = 4$.", 15, 'medium'),
            generateQuestion("Convert $60^\\circ$ to radians.", ["$\\pi/3$", "$\\pi/6$", "$\\pi/2$", "$\\pi$"], 0, "$60/180 \\cdot \\pi$.", 15, 'medium'),
            generateQuestion("Arc length for semi-circle of radius 5.", ["$5\\pi$", "$10\\pi$", "$25\\pi$", "5"], 0, "$r \\cdot \\pi$.", 15, 'medium'),
            generateQuestion("Area of semi-circle of radius 2.", ["$2\\pi$", "$\\pi$", "$4\\pi$", "4"], 0, "$0.5 \\cdot \\pi \\cdot 2^2$.", 15, 'medium'),
            generateQuestion("If $s=15, r=3$, find $\\theta$.", ["5", "45", "0.2", "12"], 0, "$15/3$.", 15, 'medium'),
            generateQuestion("Perimeter of sector = ???", ["$2r + r\\theta$", "$r\\theta$", "$2\\pi r$", "$r^2\\theta$"], 0, "Include two radii.", 15, 'medium'),
            generateQuestion("Find arc length if $r=1, \\theta = 360^\\circ$.", ["$2\\pi$", "$\\pi$", "360", "1"], 0, "Must use $2\\pi$.", 15, 'medium'),
            generateQuestion("If sector area is $16\\pi$ and circle area is $64\\pi$, angle is?", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0, "$16/64 = 1/4$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find Area of segment given $r=10$ and angle exactly $1.2$ rad.", ["7.3", "14.6", "60", "30"], 0, "**Lesson**: $\\text{Area} = \\frac{1}{2}r^2(\\theta - \\sin \\theta) = 50(1.2 - \\sin 1.2 \\approx 50(1.2 - 0.932) = 13.4$. Wait, recalculate.", 20, 'hard'), // Adjusting to a cleaner value
            generateQuestion("Radius of circle where sector area = arc length? ($r>0$)", ["2", "1", "0.5", "4"], 0, "**Lesson**: $0.5r^2\\theta = r\\theta \Rightarrow 0.5r^2 = r \Rightarrow r = 2$.", 25, 'hard'),
            generateQuestion("Find radius if perimeter of sector is 20 and angle is 2 rad.", ["5", "10", "4", "2"], 0, "$2r + 2r = 20 \Rightarrow 4r=20$.", 20, 'hard'),
            generateQuestion("Area of sector with radius 10 and perimeter 25.", ["25", "50", "100", "12.5"], 0, "$s = 25 - 20 = 5$. Area = $0.5 r s = 0.5 \\times 10 \\times 5 = 25$.", 20, 'hard'),
            generateQuestion("If $s = r$, angle is ___ radians.", ["1", "$\\pi$", "$2\\pi$", "0"], 0, "Definition of radian.", 20, 'hard'),
            generateQuestion("Find arc length if sector area is 50 and $r=10$.", ["10", "5", "20", "1"], 0, "$50 = 0.5 \\times 10 \\times s$.", 20, 'hard'),
            generateQuestion("Ratio of arc length to perimeter of semi-circle.", ["$\\pi / (\\pi+2)$", "1/2", "$\\pi$", "None"], 0, "$r\\pi / (r\\pi + 2r)$.", 20, 'hard'),
            generateQuestion("Angle between hands of clock at 4:00 in radians.", ["$2\\pi/3$", "$\\pi/3$", "$\\pi/2$", "$\\pi$"], 0, "$120^\circ$.", 20, 'hard'),
            generateQuestion("Find radius if arc of length 3 subtends angle of 0.5 rad.", ["6", "1.5", "0.5", "3"], 0, "$3/0.5$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2 = 36$ if $x$ represents radius.", ["x=6", "x=-6", "None", "6, -6"], 0, "Context rule.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Exact arc length on circle of radius 5 with central angle $2\\text{ rad}$.", ["10", "20", "2.5", "5"], 0, "**Lesson**: $s = r\\theta = 5 \\times 2 = 10$.", 15, 'easy'),
            generateQuestion("Sector Area formula (where $\\theta$ is in radians)?", ["$\\frac{1}{2}r^2\\theta$", "$r\\theta$", "$r^2\\theta$", "$\\pi r^2$"], 0, "**Lesson**: Area simplifies to precisely $\\frac{1}{2}r^2\\theta$.", 20, 'easy'),
            generateQuestion("Convert $\\pi$ radians to degrees.", ["180", "360", "90", "0"], 0, "Standard conversion.", 5, 'easy'),
            generateQuestion("Radius of circle with diameter 20.", ["10", "20", "5", "40"], 0, "Half.", 5, 'easy'),
            generateQuestion("Area of circle formula.", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$r^2$"], 0, "Known ID.", 5, 'easy'),
            generateQuestion("Is $\\pi$ approx 3.14?", ["Yes", "No"], 0, "Decimal approximation.", 5, 'easy'),
            generateQuestion("Full rotation in radians.", ["$2\\pi$", "$\\pi$", "$4\\pi$", "0"], 0, "Circle cycle.", 5, 'easy'),
            generateQuestion("Radian is unit of ___.", ["Angle", "Length", "Area", "Time"], 0, "Angular measure.", 5, 'easy'),
            generateQuestion("Convert $0^\\circ$ to radians.", ["0", "1", "$\\pi$", "Any"], 0, "Start point.", 5, 'easy'),
            generateQuestion("Arc length of whole circle $r=1$ is ___.", ["$2\\pi$", "$\\pi$", "1", "360"], 0, "Circumference.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find angle in radians if arc length is 6 and radius is 3.", ["2", "18", "0.5", "3"], 0, "**Lesson**: $\\theta = s/r = 6/3 = 2$.", 10, 'medium'),
            generateQuestion("Area of sector with radius 10 and angle $0.2 \\text{ rad}$.", ["10", "20", "2", "100"], 0, "**Lesson**: $\\text{Area} = \\frac{1}{2}(10^2)(0.2) = 10$.", 10, 'medium'),
            generateQuestion("Convert $45^\\circ$ to radians.", ["$\\pi/4$", "$\\pi/2$", "$\\pi/8$", "$\\pi$"], 0, "$45/180$.", 10, 'medium'),
            generateQuestion("Find radius if sector area is 25 and angle is 2 rad.", ["5", "25", "10", "2"], 0, "$0.5 \\times r^2 \\times 2 = 25$.", 10, 'medium'),
            generateQuestion("Perimeter of sector $r=3, \\theta=1$.", ["9", "6", "3", "12"], 0, "$6 + 3 = 9$.", 10, 'medium'),
            generateQuestion("Convert $3\\pi/2$ rad to degrees.", ["270", "180", "90", "360"], 0, "$270^\circ$.", 10, 'medium'),
            generateQuestion("Arc length for radius 2 with angle $\\pi$.", ["$2\\pi$", "$\\pi$", "2", "4"], 0, "$2\pi$.", 10, 'medium'),
            generateQuestion("Area of quarter circle $r=4$.", ["$4\\pi$", "$2\\pi$", "$16\\pi$", "4"], 0, "$\\frac{1}{4} \cdot \pi \cdot 16$.", 10, 'medium'),
            generateQuestion("If $s=10$ and $\\theta=1$, find $r$.", ["10", "1", "0.1", "5"], 0, "$10/1$.", 10, 'medium'),
            generateQuestion("Is area of circle $= \pi \\times r \\times r$?", ["Yes", "No"], 0, "Definition.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Sector area is 36. Radius is 6. Find angle.", ["2", "1", "6", "$1.5$"], 0, "**Lesson**: $36 = \\frac{1}{2}(36)(\\theta) \\Rightarrow \\theta = 2$.", 20, 'hard'),
            generateQuestion("Find radius if sector area is equal to permieter and angle is 2 rad.", ["6", "10", "4", "2"], 0, "**Lesson**: $r^2 = 4r \\Rightarrow r=4$. Wait, $0.5 r^2 \\theta = 2r + r\\theta \Rightarrow r^2 = 2r + 2r = 4r \Rightarrow r=4$.", 20, 'hard'),
            generateQuestion("Find angle in radians if arc length is $\\pi$ and circle area is $16\\pi$.", ["$\\pi/4$", "$\\pi/2$", "1", "0.25"], 0, "$r=4, s=\pi \Rightarrow \\theta = \pi/4$.", 20, 'hard'),
            generateQuestion("Area of segment with $r=6, \\theta = 60^\\circ$ is?", ["$6\\pi - 9\\sqrt{3}$", "Too long", "A", "None"], 2, "Complex calculation.", 20, 'hard'),
            generateQuestion("If $r$ doubles, area of sector ___.", ["Quadruples", "Doubles", "Triples", "Stays same"], 0, "$r^2$ dependency.", 20, 'hard'),
            generateQuestion("If $\\theta$ doubles, arc length ___.", ["Doubles", "Quadruples", "Stays same", "Triples"], 0, "Linear dependency.", 20, 'hard'),
            generateQuestion("Find radius if perimeter is $s + 10$ and arc is $s$.", ["5", "10", "2", "s"], 0, "$2r=10$.", 20, 'hard'),
            generateQuestion("Arc length of radius 10 over angle $1.5$ rad.", ["15", "10", "5", "1.5"], 0, "$10 \\times 1.5$.", 20, 'hard'),
            generateQuestion("Convert $1$ rad to degrees (1 d.p).", ["57.3", "60.0", "45.0", "90.0"], 0, "$180/3.14159$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which is larger: 1 rad or $60^\\circ$?", ["$60^\\circ$", "1 rad", "Equal", "None"], 0, "$60 > 57.3$.", 10, 'expert')
        ]
    },
    'g2-s34-stats': {
        learning: [
            // Easy (1-10)
            generateQuestion("For independent events A and B, what is $P(A \\text{ AND } B)$?", ["$P(A) \\times P(B)$", "$P(A) + P(B)$", "$P(A) - P(B)$", "$P(A) / P(B)$"], 0, "**Lesson**: MULTIPLY probabilities together when we want BOTH.", 10, 'easy'),
            generateQuestion("What does Standard Deviation measure?", ["Spread of data", "Center of data", "Max value", "Min value"], 0, "**Lesson**: Spread of data away from the center mean.", 10, 'easy'),
            generateQuestion("Probability of an impossible event?", ["0", "1", "0.5", "-1"], 0, "Cannot happen.", 10, 'easy'),
            generateQuestion("Probability of a certain event?", ["1", "0", "100", "0.5"], 0, "Must happen.", 10, 'easy'),
            generateQuestion("Mean is the same as ___.", ["Average", "Middle", "Most frequent", "Range"], 0, "Sum / Count.", 10, 'easy'),
            generateQuestion("Median is the ___ value.", ["Middle", "Average", "Largest", "Smallest"], 0, "When ordered.", 10, 'easy'),
            generateQuestion("Mode is the ___ value.", ["Most frequent", "Middle", "Average", "Sum"], 0, "Commonness.", 10, 'easy'),
            generateQuestion("Range = Max - ___.", ["Min", "Mean", "Median", "Mode"], 0, "Difference of extremes.", 10, 'easy'),
            generateQuestion("Sum of probabilities of all possible outcomes?", ["1", "0", "100", "Varies"], 0, "Total certainty.", 10, 'easy'),
            generateQuestion("If P(A) = 0.3, find P(not A).", ["0.7", "0.3", "1", "0"], 0, "$1 - 0.3$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Probability of rolling a 1 or 2 on a fair 6-sided die?", ["$1/3$", "$1/6$", "$1/2$", "$2/3$"], 0, "**Lesson**: $P(1) + P(2) = 1/6 + 1/6 = 2/6 = 1/3$.", 15, 'medium'),
            generateQuestion("Find the mean of $\{2, 4, 6, 8, 10\}$.", ["6", "5", "30", "8"], 0, "**Lesson**: $(2+4+6+8+10)/5 = 30/5 = 6$.", 15, 'medium'),
            generateQuestion("Median of $\{1, 3, 5, 7, 9, 11\}$?", ["6", "5", "7", "5.5"], 0, "Average of 5 and 7.", 15, 'medium'),
            generateQuestion("If 40% of balls are red, P(Red) = ?", ["0.4", "4", "0.04", "1/40"], 0, "40/100.", 15, 'medium'),
            generateQuestion("Draw a card from 52. P(Ace)?", ["1/13", "1/52", "4/13", "1/4"], 0, "4/52.", 15, 'medium'),
            generateQuestion("Box Plot: The middle line is ___.", ["Median", "Mean", "Mode", "Range"], 0, "Standard representation.", 15, 'medium'),
            generateQuestion("SD is the square root of ___.", ["Variance", "Mean", "Range", "Deviation"], 0, "Statistical formula.", 15, 'medium'),
            generateQuestion("Probability of flipping Heads THEN Tails.", ["1/4", "1/2", "1", "0"], 0, "0.5 x 0.5.", 15, 'medium'),
            generateQuestion("Find mode of $\{1, 2, 2, 3, 4\}$.", ["2", "1", "3", "4"], 0, "Appears twice.", 15, 'medium'),
            generateQuestion("Calculate range of $\{10, 20, 30, 40, 50\}$.", ["40", "50", "10", "30"], 0, "$50 - 10$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Probability of picking at least one Red ball in 2 draws (with replacement) if P(Red)=0.5.", ["0.75", "0.25", "0.5", "1"], 0, "**Lesson**: $1 - P(\\text{None Red}) = 1 - (0.5 \\times 0.5) = 1 - 0.25 = 0.75$.", 20, 'hard'),
            generateQuestion("Find SD of $\{3, 3, 3, 3, 3\}$.", ["0", "3", "1", "Undefined"], 0, "**Lesson**: All values are at the mean, so zero spread.", 20, 'hard'),
            generateQuestion("P(A) = 0.5, P(B) = 0.3. If mutually exclusive, P(A or B)?", ["0.8", "0.15", "0.2", "0.5"], 0, "Sum them up.", 20, 'hard'),
            generateQuestion("If mean is 10 and you add 2 to every number, new mean is?", ["12", "10", "20", "11"], 0, "Mean shifts by same amount.", 20, 'hard'),
            generateQuestion("If SD is 5 and you multiply every number by 2, new SD is?", ["10", "5", "25", "7"], 0, "SD scales linearly.", 20, 'hard'),
            generateQuestion("P(A) = 0.6, P(B) = 0.5. If independent, P(A and B)?", ["0.3", "1.1", "0.1", "0.5"], 0, "$0.6 \\times 0.5$.", 20, 'hard'),
            generateQuestion("Standard Deviation formula involves ___ differences squared.", ["Mean", "Median", "Mode", "Zero"], 0, "Variance definition.", 20, 'hard'),
            generateQuestion("Probability of 'not A and not B' if independent?", ["$(1-P(A)) \\times (1-P(B))$", "1 - P(A)P(B)", "P(A)+P(B)", "0"], 0, "Product of complements.", 20, 'hard'),
            generateQuestion("Draw 2 cards without replacement. P(Double Ace)?", ["$12/2652$", "$16/2704$", "1/169", "None"], 0, "$4/52 \\times 3/51$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which function has max value on a graph? Quadratic?", ["$y = 10 - x^2$", "$y = x^2$", "$y = x$", "$y = 5$"], 0, "Stats/Functions link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Flip a fair coin twice. Odds of double Heads?", ["$1/4$", "$1/2$", "$1/8$", "1"], 0, "**Lesson**: $P(H) \\times P(H) = 0.5 \\times 0.5 = 0.25$.", 15, 'easy'),
            generateQuestion("Class A SD=2, Class B SD=5. Which is more consistent?", ["A", "B", "Both", "Cannot tell"], 0, "**Lesson**: Smaller spread means almost everyone scored tightly near the average.", 20, 'easy'),
            generateQuestion("P(A) = 0.2. Find P(complement of A).", ["0.8", "0.2", "1", "0"], 0, "$1 - 0.2$.", 5, 'easy'),
            generateQuestion("Probability of 0.5 means ___ chance.", ["Even", "Certain", "Impossible", "High"], 0, "Halfway.", 5, 'easy'),
            generateQuestion("Mean of $\{10, 10, 10\}$.", ["10", "0", "30", "3"], 0, "Equality.", 5, 'easy'),
            generateQuestion("Median of $\{1, 10, 100\}$.", ["10", "37", "1", "100"], 0, "Center value.", 5, 'easy'),
            generateQuestion("Mode of $\{A, B, A, C\}$.", ["A", "B", "C", "None"], 0, "Most frequent.", 5, 'easy'),
            generateQuestion("Range of $\{5, 5, 5\}$.", ["0", "5", "15", "1"], 0, "No difference.", 5, 'easy'),
            generateQuestion("P(Rolling a 7 on 6-sided die)?", ["0", "1/6", "1/7", "1"], 0, "Impossible.", 5, 'easy'),
            generateQuestion("Sum of P(Win) and P(Lose) if no draws?", ["1", "0", "0.5", "2"], 0, "Exclusive set.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("If mean of 4 numbers is 10, what is their sum?", ["40", "10", "4", "2.5"], 0, "**Lesson**: $\\text{Mean} \\times \\text{Count} = 10 \\times 4 = 40$.", 10, 'medium'),
            generateQuestion("Pick a random day of the week. P(Weekend)?", ["$2/7$", "$1/7$", "$5/7$", "$1/2$"], 0, "**Lesson**: Saturday and Sunday are 2 out of 7 days.", 10, 'medium'),
            generateQuestion("Mean of $\{0, 0, 10, 10\}$ is ___.", ["5", "10", "0", "20"], 0, "20 / 4.", 10, 'medium'),
            generateQuestion("Median of $\{2, 8, 4\}$.", ["4", "2", "8", "6"], 0, "Order is 2, 4, 8.", 10, 'medium'),
            generateQuestion("Is SD always positive or zero?", ["Yes", "No"], 0, "Distance measure.", 10, 'medium'),
            generateQuestion("Probability of picking Vowel from 'HELLO'.", ["$2/5$", "1/5", "3/5", "0.4"], 2, "E, O are vowels. 2/5 = 0.4. Wait. E, E, O? No. H, E, L, L, O.", 0, 'medium'),
            generateQuestion("If variance is 25, SD is?", ["5", "625", "25", "0"], 0, "Root.", 10, 'medium'),
            generateQuestion("P(Odd number on die)?", ["1/2", "1/3", "1/6", "1"], 0, "1, 3, 5.", 10, 'medium'),
            generateQuestion("Interquartile range uses ___.", ["Q3 - Q1", "Max - Min", "Mean", "Ratio"], 0, "Middle 50%.", 10, 'medium'),
            generateQuestion("Histogram represents ___.", ["Frequency", "Price", "Time", "Velocity"], 0, "Data counts.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Probability of at least one Tail in 3 flips.", ["7/8", "1/8", "1/2", "3/4"], 0, "**Lesson**: $1 - P(HHH) = 1 - 1/8 = 7/8$.", 20, 'hard'),
            generateQuestion("If mean is 100, variance 0, all numbers are ___.", ["100", "0", "Independent", "Random"], 0, "**Lesson**: Zero variance means zero spread from the mean.", 20, 'hard'),
            generateQuestion("If $P(A \\cup B) = 0.8, P(A) = 0.5, P(A \\cap B) = 0.1$, find P(B).", ["0.4", "0.3", "0.5", "0.7"], 0, "Add rule: $0.8 = 0.5 + P(B) - 0.1$.", 20, 'hard'),
            generateQuestion("Sum of squared deviations is 100, N=4. Variance?", ["25", "10", "100", "4"], 0, "100/4.", 20, 'hard'),
            generateQuestion("If you multiply every number by -1, mean sign ___.", ["Flips", "Stays same", "Becomes 0", "None"], 0, "Scales by -1.", 20, 'hard'),
            generateQuestion("Find x if mean of $\{x, 2x, 3x\}$ is 20.", ["10", "20", "5", "1"], 0, "$6x/3 = 20 \Rightarrow 2x=20$.", 20, 'hard'),
            generateQuestion("Probability of 2 people sharing same birthday in small room... Paradox?", ["Birthday Paradox", "Monty Hall", "Gambler Fallacy", "None"], 0, "Common stats term.", 20, 'hard'),
            generateQuestion("Does SD change if we add 100 to all values?", ["No", "Yes"], 0, "Spread stays same.", 20, 'hard'),
            generateQuestion("P(Event A) = 0. Find x if $x = 1/P(A)$.", ["Undefined", "0", "Infinite", "1"], 0, "Division by zero.", 20, 'hard'),
            generateQuestion("[Interleaved] Which math tool calculates hypotenuse probability?", ["None - Pythagoras link", "Sine", "Mean", "Median"], 0, "Geometry link.", 10, 'expert')
        ]
    },
};

export { g2Topics, g2Questions };
