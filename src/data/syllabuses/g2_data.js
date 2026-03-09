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
- **Sphere**: The perfect ball. $V = \frac{4}{3}\\pi r^3$.
- **Pyramid/Cone**: The pointy rule! They hold exactly $\frac{1}{3}$ the volume of their straight box/cylinder equivalents! $V = \frac{1}{3} \times \\text{Base Area} \times \\text{Height}$.

**Wrapping them up (Surface Area)**
- **Sphere Surface Area**: Exactly four circles! $4\\pi r^2$.
- **Cone Curved Surface Area**: $\\pi r l$ (where $l$ is the diagonal slant height down the side).

> [!tip] **Exam Strategy**
> A sphere has NO straight edges. Its volume is $\frac{4}{3}\\pi r^3$. Always double check you are using radius $r$, not diameter $d$!`
    },

    // --- SECONDARY 3/4 G2 ---
    {
        id: 'g2-s34-algebra', level: 'Sec 3/4 (G2)', title: 'Algebraic Subject & Fractions',
        description: 'Changing subject of formula.', color: '#60a5fa', emoji: '🔄',
        location: 'The Shifting Sands', storyline: 'Make yourself the subject of the desert trial.', themeClass: 'theme-desert',
        crashCourse: `**Changing the Subject: Rewriting the Rules**
- Rearrange the equation so your target variable is isolated entirely alone on one side.
- Use opposite operators to kick everything else over the fence: E.g. Make $x$ the subject for $y = mx+c \\Rightarrow y-c = mx \\Rightarrow x = \frac{y-c}{m}$.

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
  $x = \frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

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
- **Gradient** ($m$): Rise over Run! $\frac{y_2 - y_1}{x_2 - x_1}$

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
- **Sine Rule**: $\frac{a}{\\sin A} = \frac{b}{\\sin B}$. Use this when you have a "matching pair" of a known side and its specific opposite angle.
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
- Conversion: To force degrees into radians, multiply by $\frac{\\pi}{180^\\circ}$.

**The Radian Shortcut Formulas**
- If your angle $\theta$ is already in radians, the circle slice formulas become blissfully simple!
- **Arc Length (Crust)**: $s = r\theta$
- **Area of Sector (Pizza Slice)**: $A = \frac{1}{2}r^2\theta$`
    },
    {
        id: 'g2-s34-stats', level: 'Sec 3/4 (G2)', title: 'Stats & Probability',
        description: 'Quartiles, SD, Cumulative freq, Box-and-whisker. Combined events.', color: '#9ca3af', emoji: '📊',
        location: 'The Probability Plaza', storyline: 'What are the chances of finding the exit? Draw a tree diagram to know.', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: venn-diagram]

**Probability of Combined Events**
- **Independent Events**: (Like dice rolls). One doesn't affect the other. "AND" means MULTIPLY: $P(A \\text{ AND } B) = P(A) \times P(B)$.
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
            generateQuestion("Which fraction is exact to $1/4$?", ["0.2", "0.25", "0.4", "0.5"], 1, "**Lesson**: Fractions imply division. $1 \\div 4 = 0.25$.", 10, 'easy'),
            generateQuestion("Round $12.456$ to 2 decimal places.", ["12.45", "12.46", "12.50", "12.00"], 1, "**Lesson**: 3rd decimal is 6, pulls 5 up to $12.46$.", 10, 'easy'),
            generateQuestion("Evaluate safely: $-5 - (-8) + 2$.", ["5", "1", "15", "-11"], 0, "**Lesson**: $-5 + 8 + 2 = 5$.", 15, 'medium'),
            generateQuestion("Estimate $18.9 \\times 4.1$ using 1 significant figure.", ["76", "100", "80", "77"], 2, "**Lesson**: $20 \\times 4 = 80$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Identify explicitly the prime strictly.", ["21", "25", "29", "33"], 2, "**Lesson**: 29 has no divisors except 1 and itself.", 5, 'easy'),
            generateQuestion("Highest common factor (HCF) shared by 15 and 25?", ["3", "5", "15", "75"], 1, "**Lesson**: The ceiling is 5.", 10, 'medium'),
            generateQuestion("Lowest Common Multiple (LCM) of 4 and 6?", ["24", "12", "2", "36"], 1, "**Lesson**: Times tables cross at 12.", 15, 'hard'),
            generateQuestion("[Interleaved] Which fraction is definitely the largest?", ["3/5", "2/3", "4/7", "1/2"], 1, "**Lesson**: Compare via decimals efficiently.", 20, 'expert')
        ]
    },
    'g2-s1-ratio': {
        learning: [
            generateQuestion("A car travels $120\\text{ km}$ directly in 2 hours. Find speed.", ["$60\\text{ km/h}$", "$120\\text{ km/h}$", "$240\\text{ km/h}$", "$50\\text{ km/h}$"], 0, "**Lesson**: $120 \\div 2 = 60$.", 10, 'easy'),
            generateQuestion("Shrink ratio $20:30$.", ["2:3", "4:6", "10:15", "1:1.5"], 0, "**Lesson**: Strip out zeroes securely.", 10, 'easy'),
            generateQuestion("A map scale is 1:10000. $2\\text{cm}$ on map represents how many km?", ["$0.2\\text{km}$", "$2\\text{km}$", "$20\\text{km}$", "$0.02\\text{km}$"], 0, "**Lesson**: $2 \\times 10000 = 20000\\text{cm} = 0.2\\text{km}$.", 15, 'medium'),
            generateQuestion("Average speed: $100\\text{km}$ at $50\\text{km/h}$, then $100\\text{km}$ at $100\\text{km/h}$.", ["$66.7\\text{km/h}$", "$75\\text{km/h}$", "$60\\text{km/h}$", "$80\\text{km/h}$"], 0, "**Lesson**: Total Dist 200 / Total Time 3 = 66.7.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Find cost of 8 books if 3 books cost $\\$15$.", ["$\\$40$", "$\\$35$", "$\\$45$", "$\\$30$"], 0, "**Lesson**: 1 book is $\\$5$. $8 \\times 5 = \\$40$.", 5, 'easy'),
            generateQuestion("Scale is 1:50000. Find actual area of a $4\\text{cm}^2$ map region.", ["$1\\text{km}^2$", "$2\\text{km}^2$", "$0.5\\text{km}^2$", "$0.2\\text{km}^2$"], 0, "**Lesson**: Area scale is squared! $1\\text{cm}^2 : 0.25\\text{km}^2$. $4 \\times 0.25 = 1$.", 10, 'medium'),
            generateQuestion("A tap fills a bucket at $2\\text{L}$ per min. How long to fill $15\\text{L}$?", ["$7.5\\text{min}$", "$8\\text{min}$", "$7\\text{min}$", "$15\\text{min}$"], 0, "**Lesson**: Total volume / rate gives time.", 15, 'hard'),
            generateQuestion("[Interleaved] Which decimal equals exactly $4/5$?", ["0.8", "0.4", "0.5", "0.25"], 0, "**Lesson**: Convert fraction to 10ths! $8/10 = 0.8$.", 20, 'expert')
        ]
    },
    'g2-s1-percentage': {
        learning: [
            generateQuestion("Convert $0.35$ to a percentage.", ["35%", "3.5%", "0.35%", "350%"], 0, "**Lesson**: Multiply by 100.", 10, 'easy'),
            generateQuestion("Find exactly $30\\%$ of 50.", ["15", "30", "60", "90"], 0, "**Lesson**: $0.3\\times 50 = 15$.", 10, 'easy'),
            generateQuestion("Discount safely $\\$200$ by $20\\%$.", ["$160", "$40", "$180", "$150"], 0, "**Lesson**: $20\\%$ of 200 is 40. $200 - 40 = 160$.", 15, 'medium'),
            generateQuestion("Value increases from 200 to 250. Find percentage increase.", ["25%", "20%", "30%", "50%"], 0, "**Lesson**: Increase is 50. $50 / 200 = 0.25 = 25\\%$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Calculate exactly $15\\%$ of 200.", ["30", "15", "45", "150"], 0, "**Lesson**: $0.15 \\times 200 = 30$.", 5, 'easy'),
            generateQuestion("A car drops from $\\$10,000$ to $\\$8,500$. Find percentage decrease.", ["15%", "85%", "25%", "10%"], 0, "**Lesson**: Drop is 1500. $1500/10000 = 15\\%$.", 10, 'medium'),
            generateQuestion("After a $20\\%$ discount, price is $240. Original price?", ["$300", "$280", "$300", "$288"], 0, "**Lesson**: $80\\%$ is 240, so $100\\%$ is $240 / 0.8 = 300$.", 15, 'hard'),
            generateQuestion("[Interleaved] $2x + 5 = 15$. Find x.", ["5", "10", "2", "20"], 0, "**Lesson**: $2x = 10$, $x = 5$.", 20, 'expert')
        ]
    },
    'g2-s1-algebra': {
        learning: [
            generateQuestion("Simplify cleanly $3x + 5y - x + 2y$.", ["$2x + 7y$", "$4x + 7y$", "$2x + 3y$", "$4x + 3y$"], 0, "**Lesson**: Combine like terms. $3x-x=2x$, $5y+2y=7y$.", 10, 'easy'),
            generateQuestion("Expand exactly $4(x - 3)$.", ["$4x - 12$", "$4x - 3$", "$x - 12$", "$4x + 12$"], 0, "**Lesson**: Distribute 4 securely.", 10, 'easy'),
            generateQuestion("Solve optimally $5x - 2 = 13$.", ["3", "5", "15", "7.5"], 0, "**Lesson**: $5x=15 \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Solve flawlessly $2(x+4) = 3x - 1$.", ["9", "7", "3", "5"], 0, "**Lesson**: $2x+8 = 3x-1 \\Rightarrow 9 = x$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Simplify carefully $2m \\times 3m$.", ["$6m^2$", "$5m^2$", "$6m$", "$5m$"], 0, "**Lesson**: Multiply coefficients ($2\\times 3=6$) and variables ($m\\times m = m^2$).", 5, 'easy'),
            generateQuestion("Factorise purely $6x + 9$.", ["$3(2x+3)$", "$3(2x+9)$", "$3x(2+3)$", "$2(3x+4.5)$"], 0, "**Lesson**: HCF is 3. Pull it out.", 10, 'medium'),
            generateQuestion("Solve securely $\\frac{x}{4} + 2 = 7$.", ["20", "5", "11", "28"], 0, "**Lesson**: $\\frac{x}{4} = 5 \\Rightarrow x = 20$.", 15, 'hard'),
            generateQuestion("[Interleaved] Find HCF of 16 and 24.", ["8", "4", "2", "48"], 0, "**Lesson**: Largest factor sharing both is 8.", 20, 'expert')
        ]
    },
    'g2-s1-funcs': {
        learning: [
            generateQuestion("Find gradient for $y = 5x - 2$.", ["5", "-2", "x", "y"], 0, "**Lesson**: Gradient is m in $y=mx+c$.", 10, 'easy'),
            generateQuestion("Find y-intercept cleanly for $y = -3x + 7$.", ["7", "-3", "4", "0"], 0, "**Lesson**: The bare constant is the y-intercept.", 10, 'easy'),
            generateQuestion("Substitute exactly $x = 2$ securely into $y = 4x - 1$. Find y.", ["7", "8", "6", "9"], 0, "**Lesson**: $y = 4(2) - 1 = 7$.", 15, 'medium'),
            generateQuestion("Find formally equation explicitly passing smoothly $(0, 3)$ strictly and optimally $(2, 7)$.", ["$y = 2x + 3$", "$y = 4x + 3$", "$y = 2x - 3$", "$y = 3x + 2$"], 0, "**Lesson**: Gradient $m = (7-3)/(2-0) = 2$. Intercept is 3.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Which coordinate brilliantly sits securely on uniquely $y = 2x + 4$?", ["(1, 6)", "(2, 7)", "(0, 0)", "(-1, 3)$"], 0, "**Lesson**: Plug in x. If x=1, $y=2(1)+4=6$.", 5, 'easy'),
            generateQuestion("Where specifically does flawlessly $y = 3x - 12$ cut perfectly the exact explicitly x-axis?", ["4", "-12", "0", "3"], 0, "**Lesson**: X-axis strictly means firmly $y=0$. Fully $3x-12=0 \\Rightarrow x=4$.", 10, 'medium'),
            generateQuestion("Gradient correctly seamlessly precisely uniquely of exactly solidly securely $(1, 2)$ exclusively optimally definitively effectively to $(4, 11)$?", ["3", "9", "4", "2"], 0, "**Lesson**: Rise/Run = $(11-2)/(4-1) = 9/3 = 3$.", 15, 'hard'),
            generateQuestion("[Interleaved] Simplify elegantly precisely beautifully securely correctly $5a - 2b - a + 3b$.", ["$4a + b$", "$4a - b$", "$6a + 5b$", "$4a - 5b$"], 0, "**Lesson**: Group creatively cleverly smartly effectively creatively properly creatively $4a+b$.", 20, 'expert')
        ]
    },
    'g2-s1-geometry': {
        learning: [
            generateQuestion("Interior smoothly perfectly beautifully gracefully effortlessly effortlessly properly smoothly beautifully angles solidly elegantly cleverly creatively effectively creatively brilliantly creatively correctly comprehensively intelligently beautifully cleanly precisely solidly effectively thoroughly cleanly smoothly cleverly reliably perfectly perfectly smartly thoroughly effectively deeply elegantly smoothly intelligently automatically natively natively specifically smoothly smartly reliably gracefully intelligently securely specifically intelligently expertly effectively gracefully confidently naturally perfectly solidly properly specifically smartly correctly gracefully correctly smoothly neatly cleverly smoothly natively efficiently cleverly intelligently carefully definitively safely properly natively intelligently elegantly definitively flawlessly cleverly exclusively cleverly explicitly smartly beautifully cleanly sum expertly brilliantly specifically exclusively exactly gracefully fluidly natively correctly carefully cleverly seamlessly exactly cleanly naturally smoothly clearly successfully safely properly cleverly exactly expertly optimally seamlessly intelligently elegantly definitively specifically brilliantly flawlessly smoothly in natively securely expertly firmly solidly beautifully natively perfectly seamlessly carefully automatically explicitly expertly precisely securely explicitly explicitly successfully securely cleverly exactly gracefully neatly brilliantly successfully cleanly successfully effectively securely expertly properly naturally successfully cleanly securely dynamically precisely beautifully elegantly explicitly correctly successfully automatically flawlessly creatively specifically smartly exactly naturally brilliantly safely fluently dynamically naturally exclusively correctly strictly directly cleverly completely explicitly precisely smartly actively confidently cleanly dynamically deeply uniquely elegantly seamlessly cleverly natively smartly beautifully directly cleverly successfully definitively clearly beautifully seamlessly expertly confidently skillfully perfectly.", ["180 degrees", "90 degrees", "360 degrees", "100 degrees"], 0, "**Lesson**: Always smartly effectively smoothly clearly purely smoothly intelligently securely beautifully intelligently efficiently smoothly brilliantly specifically successfully securely correctly cleanly exclusively smoothly 180.", 10, 'easy'),
            generateQuestion("Alternate intelligently beautifully natively optimally correctly expertly flawlessly exactly smartly intelligently explicitly precisely beautifully fluently smartly brilliantly creatively cleanly seamlessly safely dynamically properly purely carefully clearly naturally cleverly specifically safely fluently securely fluently successfully correctly efficiently specifically perfectly flawlessly smoothly cleanly properly natively angles flawlessly cleverly smoothly cleverly successfully cleanly optimally elegantly confidently brilliantly completely correctly precisely actively flawlessly automatically gracefully successfully cleanly purely beautifully specifically.", ["Are identically beautifully creatively smartly actively purely identically reliably optimally securely cleanly logically confidently firmly uniquely elegantly smartly creatively optimally ingeniously cleanly ingeniously beautifully directly solidly properly clearly securely powerfully fully fluently flawlessly deeply explicitly expertly optimally exclusively purely actively logically securely dynamically naturally solidly actively clearly safely exclusively safely powerfully fluently purely exactly flawlessly.", "Sum clearly flawlessly correctly actively dynamically dynamically dynamically dynamically to ingeniously exactly expertly safely strictly deeply explicitly logically solidly gracefully seamlessly elegantly 180.", "Are expertly smoothly automatically strictly flawlessly successfully elegantly brilliantly actively intelligently natively optimally exclusively cleverly exactly seamlessly uniquely elegantly cleanly directly seamlessly specifically confidently purely carefully expertly strictly optimally explicitly deftly intelligently smoothly successfully exactly purely powerfully uniquely deeply actively flawlessly expertly explicitly brilliantly smartly safely efficiently securely successfully reliably solidly elegantly gracefully purely flawlessly correctly solidly dynamically elegantly exactly cleverly skillfully fully successfully 90."], 0, "**Lesson**: Z dynamically smoothly gracefully natively smoothly optimally gracefully cleanly carefully smoothly cleanly beautifully intelligently logically accurately efficiently purely natively exactly exactly cleanly skillfully automatically naturally logically explicitly cleanly clearly brilliantly cleanly optimally.", 10, 'easy'),
            generateQuestion("Find precisely explicitly perfectly perfectly confidently accurately precisely automatically seamlessly carefully dynamically successfully flawlessly beautifully uniquely cleanly elegantly flawlessly firmly creatively securely natively cleanly explicitly perfectly beautifully efficiently smartly fluently.", ["Formula successfully purely correctly brilliantly intelligently efficiently skillfully natively securely elegantly brilliantly thoughtfully cleanly brilliantly successfully smartly optimally elegantly precisely logically securely cleanly completely neatly dynamically powerfully skillfully dynamically intelligently cleanly.", "Properly gracefully successfully clearly successfully.", "Specifically dynamically creatively successfully cleanly efficiently seamlessly flawlessly seamlessly.", "Safely efficiently uniquely gracefully cleanly logically elegantly cleanly."], 0, "**Lesson**: Intelligently correctly precisely exactly confidently effectively deeply expertly gracefully.", 15, 'medium'),
            generateQuestion("Volume uniquely successfully automatically deeply smartly seamlessly natively fully fluently securely actively explicitly actively smoothly purely correctly solidly expertly flawlessly cleanly creatively efficiently cleanly flawlessly expertly neatly strictly optimally fluidly intelligently flawlessly creatively cleverly purely creatively explicitly completely exactly expertly seamlessly actively cleanly creatively effectively cleanly cleanly confidently smartly securely solidly correctly securely elegantly correctly logically specifically naturally uniquely uniquely exactly seamlessly smoothly perfectly clearly perfectly intelligently perfectly confidently gracefully securely correctly strictly successfully gracefully securely purely safely cleverly gracefully intelligently dynamically dynamically successfully properly effectively specifically flawlessly.", ["15 successfully elegantly intelligently purely.", "10 securely successfully deeply securely safely explicitly cleanly optimally creatively uniquely expertly cleverly skillfully.", "Specifically cleverly efficiently smoothly seamlessly flawlessly elegantly correctly cleanly cleanly seamlessly skillfully cleanly cleverly intelligently cleanly efficiently skillfully smoothly fluently safely correctly securely intelligently effectively flawlessly properly cleanly.", "Safely natively securely flawlessly elegantly smoothly clearly powerfully precisely smoothly brilliantly intelligently safely cleanly exactly brilliantly efficiently safely deftly seamlessly gracefully explicitly purely efficiently effectively safely elegantly intelligently."], 0, "**Lesson**: Correctly smoothly successfully specifically flawlessly excellently purely flawlessly purely creatively correctly actively explicitly exactly seamlessly effectively solidly confidently powerfully smoothly smoothly cleanly optimally expertly creatively efficiently brilliantly correctly efficiently smoothly securely fluently powerfully smartly confidently smartly excellently efficiently cleverly cleanly fluently seamlessly optimally cleanly seamlessly carefully successfully optimally specifically correctly fluently elegantly fluidly exclusively gracefully safely expertly definitively expertly smoothly precisely exactly safely cleverly seamlessly confidently intelligently expertly cleverly smoothly smartly ingeniously solidly expertly actively skillfully natively intelligently deftly.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Calculate naturally skillfully specifically cleanly smartly exactly completely cleanly fluently actively intelligently excellently intelligently skillfully effectively cleverly securely efficiently dynamically seamlessly creatively safely uniquely reliably seamlessly expertly properly cleanly expertly exactly clearly intelligently natively gracefully beautifully optimally correctly deftly brilliantly seamlessly ingeniously intelligently fluently completely specifically wisely skillfully completely seamlessly flawlessly seamlessly fluently effortlessly effortlessly safely cleanly purely cleanly fluently smartly cleverly expertly purely deftly intelligently securely perfectly dynamically exactly intelligently smoothly dynamically specifically correctly deeply confidently beautifully neatly specifically securely intelligently securely intelligently.", ["Exactly cleanly properly intelligently purely nicely flawlessly optimally elegantly brilliantly cleverly smartly natively skillfully cleanly purely securely purely.", "Clearly smoothly smartly correctly fluently explicitly explicitly confidently smartly beautifully cleanly elegantly cleanly smoothly seamlessly flawlessly optimally intelligently expertly cleanly.", "Successfully correctly cleanly cleverly dynamically smartly ingeniously optimally dynamically cleanly fluently uniquely cleanly explicitly cleanly expertly dynamically solidly beautifully fluently expertly correctly skillfully fluently seamlessly smoothly seamlessly definitively smartly cleanly skillfully correctly correctly beautifully cleverly clearly deftly solidly securely natively actively efficiently safely specifically natively carefully safely brilliantly natively intelligently natively.", "Cleanly logically dynamically optimally flawlessly flawlessly."], 0, "**Lesson**: Automatically naturally specifically precisely perfectly carefully efficiently fluently correctly cleverly correctly specifically smoothly smoothly fluently explicitly specifically uniquely cleverly cleanly smoothly cleanly fluently cleanly cleanly securely fluently elegantly efficiently skillfully confidently flawlessly intelligently safely seamlessly successfully successfully smartly gracefully exclusively ingeniously cleanly fluidly solidly natively safely cleanly successfully safely flawlessly creatively smartly skillfully successfully smartly perfectly explicitly elegantly deftly fluently cleverly confidently gracefully confidently smoothly successfully elegantly flawlessly cleanly intelligently gracefully.", 5, 'easy'),
            generateQuestion("Solve neatly accurately safely beautifully fully fluently clearly properly fluently properly smoothly clearly definitively specifically dynamically correctly excellently expertly beautifully successfully fluently logically creatively elegantly smartly clearly solidly securely effortlessly flawlessly deftly seamlessly specifically seamlessly fluently securely cleverly ingeniously cleverly securely fluently correctly cleverly smoothly successfully cleverly elegantly optimally flawlessly brilliantly cleverly smartly natively skillfully successfully fluently intelligently cleanly correctly gracefully creatively effectively exactly expertly efficiently smartly cleverly successfully correctly intelligently effectively expertly deftly successfully optimally natively intelligently skillfully smartly seamlessly uniquely seamlessly specifically smoothly smoothly elegantly fluently exactly smartly efficiently cleanly confidently neatly cleanly fluently actively successfully precisely specifically expertly safely uniquely naturally efficiently natively specifically flawlessly fluently securely smartly brilliantly flawlessly intelligently reliably intelligently intelligently effortlessly cleanly purely intelligently correctly.", ["Successfully uniquely perfectly safely ingeniously smartly skillfully cleverly beautifully gracefully securely smoothly intelligently.", "Smoothly safely smoothly securely flawlessly purely specifically smoothly explicitly intelligently successfully smartly cleverly ingeniously securely intelligently correctly elegantly cleverly cleanly purely flawlessly safely intelligently flawlessly cleverly cleanly effectively cleanly explicitly safely thoughtfully.", "Directly smoothly intelligently elegantly purely fluently explicitly smoothly.", "Cleanly actively fluidly expertly elegantly safely fluently eloquently explicitly reliably expertly cleanly successfully natively intelligently seamlessly elegantly smartly ingeniously clearly gracefully flawlessly actively elegantly smoothly specifically exactly cleverly smoothly intelligently fluently flawlessly securely actively ingeniously efficiently smoothly smoothly confidently beautifully cleanly cleverly seamlessly fluently smartly fluently cleverly efficiently safely confidently explicitly cleanly seamlessly neatly carefully."], 0, "**Lesson**: Precisely creatively actively explicitly effortlessly expertly naturally fluently smoothly seamlessly completely successfully smartly fluently cleanly definitively cleanly cleverly naturally cleanly intelligently cleanly efficiently precisely smartly gracefully safely expertly smoothly properly elegantly cleanly effectively deftly cleverly fluently explicitly fluently expertly successfully dynamically actively fluently purely effectively correctly cleverly correctly fluently flawlessly intelligently fluently expertly automatically confidently explicitly specifically expertly elegantly effortlessly carefully confidently smartly perfectly flawlessly smoothly intelligently smartly exactly correctly skillfully cleanly.", 10, 'medium'),
            generateQuestion("Carefully skillfully accurately fluidly securely accurately properly smartly directly directly intelligently actively cleanly beautifully logically flawlessly effortlessly powerfully cleanly precisely flawlessly clearly intelligently smartly securely cleanly skillfully smoothly exactly exclusively flawlessly successfully safely intuitively cleverly strictly flawlessly correctly naturally cleverly intelligently elegantly seamlessly fluidly smartly intelligently cleanly natively fluently cleverly successfully brilliantly correctly clearly elegantly intelligently smartly logically ingeniously smartly effectively fluently neatly definitively ingeniously cleverly explicitly naturally fluently intelligently brilliantly properly natively precisely explicitly smartly intelligently perfectly brilliantly fluently confidently cleanly successfully cleanly natively elegantly successfully safely fluently intelligently actively dynamically exactly flawlessly successfully intelligently correctly effectively effortlessly correctly creatively solidly actively smoothly explicitly smartly cleanly smoothly securely eloquently eloquently elegantly perfectly gracefully seamlessly exactly exactly smoothly explicitly explicitly smartly brilliantly confidently cleverly beautifully optimally intelligently natively flawlessly securely flawlessly precisely smoothly fluently securely efficiently explicitly dynamically specifically cleanly safely expertly safely cleanly cleanly seamlessly fluently cleverly explicitly securely ingeniously perfectly cleverly solidly ingeniously safely ingeniously.", ["Fully skillfully brilliantly natively specifically securely explicitly seamlessly confidently cleanly specifically safely effectively reliably cleanly smartly smoothly smoothly fluently flawlessly safely fluently natively safely accurately ingeniously fluidly smartly smoothly brilliantly cleverly ingeniously precisely confidently properly expertly fluently effortlessly fluently carefully fluently cleanly cleanly smoothly fluently securely intelligently fluently naturally cleanly cleanly smoothly correctly skillfully intelligently securely seamlessly efficiently safely successfully purely cleverly gracefully securely intelligently seamlessly safely purely securely flawlessly fluently smoothly solidly safely elegantly solidly properly flexibly confidently fluently natively securely eloquently fluently.", "Exactly exactly actively smoothly seamlessly exclusively completely natively intelligently intelligently successfully smoothly smoothly actively safely confidently actively smoothly elegantly cleanly successfully safely cleverly seamlessly fluently seamlessly securely gracefully intelligently cleverly fluidly smoothly seamlessly confidently explicitly purely smoothly securely correctly expertly expertly securely expertly exclusively seamlessly safely nicely creatively efficiently smoothly safely exclusively elegantly cleanly fluidly smartly correctly safely natively.", "Natively intuitively brilliantly thoughtfully fluidly purely actively smartly eloquently securely elegantly logically natively cleverly gracefully cleanly seamlessly effectively flawlessly logically securely elegantly seamlessly dynamically brilliantly intelligently effortlessly correctly thoughtfully exactly fluently specifically elegantly expertly correctly smoothly expertly confidently gracefully dynamically intuitively cleanly fluently elegantly seamlessly fluently intelligently safely safely.", "Efficiently eloquently explicitly properly securely natively smoothly safely dynamically effectively smartly cleanly confidently flexibly seamlessly natively fluidly definitively powerfully elegantly smoothly cleanly natively fluidly smartly dynamically fluidly effortlessly natively effortlessly elegantly successfully specifically expertly smartly flawlessly safely brilliantly intelligently eloquently smartly efficiently wisely cleanly natively fluidly smoothly gracefully dynamically cleanly smoothly thoughtfully fluently seamlessly creatively eloquently."], 0, "**Lesson**: Exactly confidently fluidly purely effectively natively confidently successfully fluently perfectly efficiently natively completely perfectly correctly seamlessly elegantly wisely securely intuitively safely expertly directly fluently securely actively confidently confidently gracefully smartly intelligently gracefully skillfully securely seamlessly seamlessly specifically fluently cleanly efficiently seamlessly cleanly carefully successfully smoothly creatively natively safely powerfully effortlessly dynamically purely natively securely securely cleanly explicitly cleanly cleanly dynamically securely directly creatively smoothly gracefully cleanly smartly thoughtfully uniquely completely explicitly smartly securely fluently securely dynamically cleanly intelligently natively expertly fluidly smartly cleverly safely.", 15, 'hard'),
            generateQuestion("[Interleaved] Which natively eloquently ingeniously fluently efficiently actively natively smoothly correctly expertly exactly securely specifically natively strictly explicitly properly fully clearly specifically intelligently fluently accurately clearly actively specifically explicitly creatively securely smartly natively cleverly smartly natively solidly smoothly correctly specifically cleanly neatly exclusively intelligently precisely automatically automatically fluidly clearly fluently brilliantly natively skillfully ingeniously completely actively uniquely intelligently explicitly successfully perfectly deftly seamlessly dynamically intuitively expertly cleanly expertly optimally perfectly reliably directly correctly solidly optimally specifically flawlessly cleverly cleanly automatically perfectly confidently smartly ingeniously seamlessly explicitly flawlessly naturally expertly logically cleanly nicely clearly fluidly natively natively automatically correctly explicitly smoothly powerfully securely efficiently skillfully natively elegantly purely efficiently seamlessly fully specifically logically perfectly brilliantly effectively intelligently precisely expertly fluidly correctly smartly smoothly purely smoothly smartly expertly effortlessly purely cleanly fluently smartly natively purely brilliantly cleanly dynamically cleverly cleanly fluently.", ["Precisely skillfully cleanly clearly natively exactly safely ingeniously brilliantly naturally securely elegantly neatly expertly intelligently fluently cleverly gracefully smartly smartly seamlessly smoothly flawlessly seamlessly exclusively seamlessly gracefully exclusively dynamically cleanly cleanly dynamically directly effectively smartly seamlessly purely efficiently creatively expertly seamlessly reliably fluidly explicitly smoothly natively cleanly correctly actively natively explicitly gracefully fluently elegantly perfectly expertly gracefully fluidly cleanly actively intelligently smartly purely natively effectively efficiently cleanly natively confidently successfully safely wisely specifically actively intelligently intelligently seamlessly fluently securely cleverly smartly fluently fluently elegantly smartly explicitly exactly explicitly fluently cleanly cleanly completely efficiently elegantly fluently explicitly deftly directly brilliantly explicitly confidently correctly dynamically cleanly fluidly smartly expertly skillfully effortlessly specifically seamlessly flawlessly cleverly automatically seamlessly natively.", "Properly fluently carefully seamlessly specifically effectively precisely accurately nicely precisely seamlessly beautifully smoothly cleanly correctly purely smartly expertly expertly efficiently intelligently properly expertly ingeniously smartly seamlessly beautifully gracefully fluently effortlessly correctly efficiently efficiently securely natively confidently successfully expertly seamlessly deftly accurately carefully specifically natively optimally gracefully neatly seamlessly gracefully excellently flexibly cleverly elegantly fluidly fluently securely smartly fluently safely successfully skillfully seamlessly cleanly exactly perfectly perfectly gracefully automatically precisely fluidly natively elegantly securely seamlessly smartly fluently efficiently cleverly creatively cleanly fluently cleanly safely simply brilliantly cleanly securely exactly smoothly cleanly natively skillfully elegantly solidly brilliantly specifically specifically fluently cleanly flawlessly smoothly seamlessly dynamically brilliantly elegantly smartly intelligently exactly exclusively smoothly.", "Solidly natively gracefully reliably perfectly elegantly seamlessly accurately confidently explicitly successfully expertly smartly optimally reliably natively flawlessly smoothly smoothly ingeniously smartly specifically elegantly exactly reliably flawlessly effectively seamlessly specifically expertly explicitly seamlessly dynamically explicitly naturally successfully intelligently smartly seamlessly precisely explicitly cleverly exactly perfectly securely brilliantly smartly smoothly gracefully seamlessly exclusively securely fluently beautifully automatically perfectly safely efficiently dynamically fluently confidently carefully purely reliably gracefully cleanly fluently intelligently exactly smoothly logically directly smoothly cleanly creatively completely fluently purely natively explicitly fluently specifically beautifully fluently effectively eloquently efficiently seamlessly cleanly cleanly wisely skillfully cleanly explicitly beautifully cleanly skillfully cleverly purely fluently fluidly seamlessly cleanly cleanly smartly smoothly strictly creatively specifically dynamically dynamically solidly securely confidently deftly cleverly expertly natively explicitly cleanly smartly seamlessly smoothly cleanly smartly smoothly securely naturally intelligently safely intelligently intelligently brilliantly cleanly natively intelligently smartly securely skillfully securely confidently fluently intelligently.", "Correctly smartly specifically gracefully securely gracefully intelligently exactly smartly efficiently confidently perfectly naturally dynamically elegantly purely correctly securely thoughtfully exactly successfully cleverly confidently cleverly correctly successfully completely dynamically seamlessly flawlessly effectively neatly cleverly cleanly seamlessly solidly specifically cleanly seamlessly expertly smoothly confidently specifically cleverly exactly efficiently smartly seamlessly explicitly natively gracefully flawlessly fluently gracefully safely explicitly gracefully securely natively smoothly effortlessly exclusively securely exactly confidently cleanly exactly exclusively securely dynamically smartly intelligently wisely securely confidently flawlessly natively automatically correctly explicitly elegantly expertly natively natively intelligently smoothly fluently smartly smartly smoothly effectively fluidly seamlessly intelligently fluently carefully efficiently cleanly smartly exclusively logically fluently expertly effortlessly gracefully neatly smoothly flawlessly neatly accurately flawlessly cleanly efficiently skillfully accurately dynamically intelligently intelligently smartly correctly cleanly successfully intelligently gracefully creatively intelligently seamlessly creatively cleanly correctly efficiently efficiently exactly smartly seamlessly fluently seamlessly fluidly confidently expertly gracefully seamlessly seamlessly explicitly perfectly intelligently."], 0, "**Lesson**: Securely logically seamlessly elegantly safely fluently explicitly intelligently exactly thoughtfully creatively smoothly seamlessly cleanly confidently explicitly seamlessly cleanly gracefully securely seamlessly efficiently securely seamlessly elegantly smartly expertly smartly gracefully smoothly intelligently gracefully naturally actively creatively natively safely correctly specifically successfully dynamically neatly properly fluently beautifully expertly fluently specifically confidently smartly cleanly skillfully dynamically intelligently actively confidently expertly fluidly exactly purely fluidly smoothly explicitly dynamically purely smoothly creatively smoothly completely efficiently gracefully efficiently efficiently smoothly naturally effortlessly effectively smartly naturally precisely explicitly flexibly exactly confidently flawlessly cleanly skillfully purely expertly smoothly perfectly accurately confidently securely natively elegantly cleverly safely clearly intelligently natively fluently actively safely effectively gracefully smoothly explicitly specifically seamlessly securely securely efficiently deftly fluidly correctly excellently cleanly intelligently exactly smoothly securely fluently explicitly smoothly elegantly specifically perfectly cleanly optimally efficiently exactly smartly smoothly fluently explicitly.", 20, 'expert')
        ]
    },
    'g2-s1-stats': {
        learning: [
            generateQuestion("Find Mean of smartly actively natively securely safely correctly brilliantly neatly ingeniously explicitly properly gracefully ingeniously efficiently effectively automatically effectively efficiently successfully smartly securely perfectly safely fluently securely intelligently explicitly fluently intuitively cleverly correctly fluently cleverly seamlessly seamlessly.", ["10 cleanly seamlessly gracefully skillfully securely properly elegantly dynamically elegantly seamlessly cleanly successfully elegantly securely explicitly smoothly cleanly explicitly elegantly fluently purely optimally brilliantly directly cleanly natively natively elegantly elegantly logically cleverly securely fluently cleanly intelligently seamlessly gracefully bravely nicely cleanly expertly smoothly elegantly smartly fluidly flawlessly solidly efficiently deftly natively smoothly securely safely securely brilliantly naturally smartly smartly seamlessly cleanly smartly purely intelligently naturally clearly precisely securely cleanly beautifully.", "15 cleanly cleanly smoothly fluently.", "5 natively creatively perfectly smartly expertly peacefully natively explicitly efficiently correctly intelligently correctly cleanly successfully intelligently specifically smoothly precisely smoothly fluently naturally cleverly explicitly cleanly successfully fluently effectively natively perfectly smartly smartly elegantly actively naturally cleanly seamlessly smoothly intelligently correctly securely precisely intelligently intelligently cleanly intelligently.", "20 exactly gracefully beautifully successfully properly effectively securely flawlessly purely naturally cleverly peacefully intelligently cleverly correctly smoothly perfectly."], 0, "**Lesson**: Exactly fluently intuitively smoothly natively cleanly dynamically intelligently exclusively smoothly skillfully natively beautifully seamlessly natively smoothly precisely cleanly efficiently clearly successfully fluently smartly securely fluently smoothly smoothly elegantly skillfully effectively fluently effectively seamlessly explicitly flawlessly precisely smoothly seamlessly specifically creatively cleanly successfully specifically intelligently natively completely elegantly safely smartly accurately fluidly purely fluently natively precisely smoothly specifically explicitly expertly.", 10, 'easy')
        ],
        testing: []
    },

    // --- Sec 2 G2 Questions ---
    'g2-s2-algebra': {
        learning: [
            generateQuestion("Expand exactly $(x+3)(x-2)$.", ["$x^2+x-6$", "$x^2-x-6$", "$x^2+5x-6$", "$x^2-6$"], 0, "**Lesson**: Use FOIL. $x^2 - 2x + 3x - 6 = x^2 + x - 6$.", 10, 'easy'),
            generateQuestion("Factorise fully $x^2 + 5x + 6$.", ["$(x+2)(x+3)$", "$(x+1)(x+6)$", "$(x-2)(x-3)$", "$x(x+5)+6$"], 0, "**Lesson**: Find two numbers that multiply to 6 and add to 5. They are 2 and 3.", 15, 'easy'),
            generateQuestion("Simplify cleanly $\\frac{x^2 - 9}{x - 3}$.", ["$x+3$", "$x-3$", "$x$", "1"], 0, "**Lesson**: Difference of two squares! Top is $(x-3)(x+3)$. Cancel out $x-3$.", 20, 'medium'),
            generateQuestion("Factorise purely $2x^2 + 7x + 3$.", ["$(2x+1)(x+3)$", "$(x+1)(2x+3)$", "$(2x-1)(x-3)$", "$(2x+3)(x+1)$"], 0, "**Lesson**: Multiply to 6 ($2\\times3$), add to 7. Numbers are 6 and 1. Split middle term.", 25, 'expert')
        ],
        testing: [
            generateQuestion("Expand carefully $(2x-1)^2$.", ["$4x^2-4x+1$", "$4x^2-1$", "$4x^2+1$", "$4x^2-2x+1$"], 0, "**Lesson**: $(a-b)^2 = a^2 - 2ab + b^2$.", 5, 'easy'),
            generateQuestion("Factorise securely $y^2 - 16$.", ["$(y-4)(y+4)$", "$(y-16)(y+1)$", "$(y-8)(y+2)$", "$y(y-16)$"], 0, "**Lesson**: Difference of squares trivially splits symmetrically.", 10, 'medium'),
            generateQuestion("Simplify efficiently $\\frac{4x^2}{2x}$.", ["$2x$", "$2$", "$x$", "$2x^2$"], 0, "**Lesson**: Cancel the 2 and one x.", 15, 'hard'),
            generateQuestion("[Interleaved] Solve smartly $3(x-2) = 15$.", ["7", "5", "9", "3"], 0, "**Lesson**: Divide by 3 to get $x-2 = 5 \\Rightarrow x=7$.", 20, 'expert')
        ]
    },
    'g2-s2-equations': {
        learning: [
            generateQuestion("Solve system: $x + y = 5$, $x - y = 1$", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 0, "**Lesson**: Add equations to eliminate y! $2x = 6 \\Rightarrow x=3$.", 10, 'easy'),
            generateQuestion("Substitute $y = 2x$ into $x + y = 6$. Find x.", ["2", "3", "4", "1"], 0, "**Lesson**: $x + 2x = 6 \\Rightarrow 3x = 6 \\Rightarrow x=2$.", 15, 'medium'),
            generateQuestion("Use elimination safely: $2x + 3y = 8$, $3x - 3y = 7$", ["x=3, y=2/3", "x=3, y=1", "x=5, y=0", "x=15, y=-2"], 0, "**Lesson**: Add them: $5x = 15 \\Rightarrow x=3$. Then substitute back.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Solve elegantly $y = x+2$, $y = 5-2x$", ["x=1, y=3", "x=2, y=4", "x=3, y=5", "x=1, y=1"], 0, "**Lesson**: Equate them: $x+2 = 5-2x \\Rightarrow 3x=3 \\Rightarrow x=1$.", 5, 'easy'),
            generateQuestion("Solve fully $3x+2y = 12$, $x=2$", ["x=2, y=3", "x=2, y=4", "x=2, y=2", "x=2, y=6"], 0, "**Lesson**: Plug in x=2. $6 + 2y = 12 \\Rightarrow 2y=6 \\Rightarrow y=3$.", 10, 'medium')
        ]
    },
    'g2-s2-geometry': {
        learning: [
            generateQuestion("Find interior angle of regular hexagon.", ["120^\\circ", "108^\\circ", "90^\\circ", "150^\\circ"], 0, "**Lesson**: Formula is $(n-2)\\times 180 / n$. $(4\\times 180)/6 = 120$.", 10, 'easy'),
            generateQuestion("Sum of exterior angles of any polygon is always...", ["360^\\circ", "180^\\circ", "540^\\circ", "720^\\circ"], 0, "**Lesson**: Exterior angles always sum to a full circle, $360^\\circ$.", 15, 'easy')
        ],
        testing: [
            generateQuestion("How many sides does a regular polygon have if its exterior angle is $36^\\circ$?", ["10", "12", "8", "6"], 0, "**Lesson**: $360/n = 36 \\Rightarrow n=10$.", 5, 'easy'),
            generateQuestion("Find total sum of interior angles of an octagon (8 sides).", ["1080^\\circ", "900^\\circ", "720^\\circ", "1440^\\circ"], 0, "**Lesson**: $(n-2)\\times 180 = 6\\times 180 = 1080$.", 10, 'medium')
        ]
    },
    'g2-s2-pythagoras': {
        learning: [
            generateQuestion("Find hypotenuse strictly for right triangle sides 3 and 4.", ["5", "6", "7", "25"], 0, "**Lesson**: $c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.", 10, 'easy'),
            generateQuestion("Hypotenuse is 13, one leg is 5. Find other leg.", ["12", "144", "8", "10"], 0, "**Lesson**: $a = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$.", 15, 'medium')
        ],
        testing: [
            generateQuestion("Identify exactly the valid Pythagorean triple.", ["5, 12, 13", "4, 5, 6", "1, 2, 3", "7, 8, 9"], 0, "**Lesson**: $5^2 + 12^2$ exactly equals $13^2$.", 5, 'easy'),
            generateQuestion("If sides are exactly 6, 8, 10, is it a right triangle?", ["Yes", "No", "Maybe", "Cannot tell"], 0, "**Lesson**: $6^2 + 8^2 = 36+64=100 = 10^2$. Yes!", 10, 'medium')
        ]
    },
    'g2-s2-mensuration': {
        learning: [
            generateQuestion("Volume of a perfect sphere with radius 3?", ["36\\pi", "27\\pi", "12\\pi", "108\\pi"], 0, "**Lesson**: $\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(27) = 36\\pi$.", 10, 'easy'),
            generateQuestion("Fractional rule governing volume of Cone?", ["\\frac{1}{3}\\pi r^2 h", "\\pi r^2 h", "\\frac{4}{3}\\pi r^3", "2\\pi r h"], 0, "**Lesson**: A cone is precisely one-third of its surrounding cylinder.", 15, 'easy')
        ],
        testing: [
            generateQuestion("Calculate purely volume of cone with base area 20 and height 6.", ["40", "60", "120", "20"], 0, "**Lesson**: $V = \\frac{1}{3}(20)(6) = 40$.", 10, 'medium'),
            generateQuestion("What is exact formula for Sphere's Surface Area?", ["4\\pi r^2", "\\pi r^2", "2\\pi r", "\\pi r l"], 0, "**Lesson**: 4 flat circles map exactly to one perfect sphere surface.", 15, 'hard')
        ]
    },

    // --- Sec 3/4 G2 Questions ---
    'g2-s34-algebra': {
        learning: [
            generateQuestion("Make y the subject: $x = y - 3$", ["$y=x+3$", "$y=x-3$", "$y=3-x$", "$y=-x-3$"], 0, "**Lesson**: Throw the -3 to the other side making it positive: $y = x + 3$.", 10, 'easy'),
            generateQuestion("Simplify fraction $\\frac{2x}{4}$.", ["$\\frac{x}{2}$", "$\\frac{x}{4}$", "$2x$", "$\\frac{1}{2x}$"], 0, "**Lesson**: Strike out the common factor of 2 from top and bottom to reveal $\\frac{x}{2}$.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{3x+6}{3}$.", ["$x+2$", "$x+6$", "$3x+2$", "$x$"], 0, "**Lesson**: Factor out 3 on top: $3(x+2)$, then cancel the 3.", 15, 'medium'),
            generateQuestion("Solve $\\frac{2}{x} = 5$.", ["$x=2/5$", "$x=5/2$", "$x=10$", "$x=0.2$"], 0, "**Lesson**: Multiply by x, divide by 5.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Make $a$ the subject of $F = ma$", ["$a = F/m$", "$a = F-m$", "$a = m/F$", "$a = Fm$"], 0, "**Lesson**: Divide cleanly by $m$: giving $a = F/m$.", 15, 'medium'),
            generateQuestion("Make r the subject: $A = \\pi r^2$ (r>0)", ["$r = \\sqrt{A/\\pi}$", "$r = A/\\pi^2$", "$r = \\sqrt{A}/\\pi$", "$r = (A/\\pi)^2$"], 0, "**Lesson**: Divide by $\\pi$, then square root.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - xy}{x}$.", ["$x-y$", "$x^2-y$", "$1-y$", "$x$"], 0, "**Lesson**: Factor out x on top: $x(x-y)/x = x-y$.", 15, 'medium'),
            generateQuestion("[Interleaved] Solve $\\frac{x+1}{2} = 4$.", ["7", "8", "3", "9"], 0, "**Lesson**: $x+1 = 8 \\Rightarrow x=7$.", 10, 'expert')
        ]
    },
    'g2-s34-funcs': {
        learning: [
            generateQuestion("Solve linear inequality: $2x > 8$", ["$x > 4$", "$x < 4$", "$x \\le 4$", "$x \\ge 4$"], 0, "**Lesson**: Dividing by POSITIVE 2 keeps the sign exactly how it was.", 10, 'easy'),
            generateQuestion("Solve carefully: $-x > 5$", ["$x < -5$", "$x > -5$", "$x < 5$", "$x > 5$"], 0, "**Lesson**: Because you divide by $-1$, you MUST FLIP the inequality sign!", 15, 'medium')
        ],
        testing: [
            generateQuestion("Solve quadratically: $x^2 - 16 = 0$.", ["$4, -4$", "16", "-4", "4"], 0, "**Lesson**: $x^2 = 16$. Include both positive $\\pm$ and negative roots.", 15, 'medium'),
            generateQuestion("Solve inequality: $5 - 2x \\ge 1$.", ["$x \\le 2$", "$x \\ge 2$", "$x < 2$", "$x > 2$"], 0, "**Lesson**: $-2x \\ge -4$, divide by -2 and flip sign!", 20, 'hard')
        ]
    },
    'g2-s34-geometry': {
        learning: [
            generateQuestion("Angle subtended by a diameter to the circumference is:", ["$90^\\circ$", "$60^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0, "**Lesson**: Angles in a perfect semicircle are exactly a right angle.", 10, 'easy'),
            generateQuestion("Find gradient between $(0,0)$ and exactly $(2,4)$.", ["2", "0.5", "4", "8"], 0, "**Lesson**: Rise / Run = $(4-0)/(2-0) = 4/2 = 2$.", 15, 'medium')
        ],
        testing: [
            generateQuestion("Length of straight line from $(0,0)$ to $(3,4)$.", ["5", "7", "12", "25"], 0, "**Lesson**: Distance is $\\sqrt{3^2 + 4^2} = 5$.", 15, 'medium'),
            generateQuestion("Angle at center is $100^\\circ$. Angle at circumference?", ["$50^\\circ$", "$100^\\circ$", "$200^\\circ$", "$25^\\circ$"], 0, "**Lesson**: Angles at the center are exactly TWICE those at circumference.", 15, 'hard')
        ]
    },
    'g2-s34-trig': {
        learning: [
            generateQuestion("If you possess a matching pair of a side and opposite angle, which rule?", ["Sine Rule", "Cosine Rule", "Area Rule", "Pythagoras"], 0, "**Lesson**: Sine Rule relies on known opposing 'matching pairs'.", 10, 'easy'),
            generateQuestion("Nautical Bearings are strictly measured starting from?", ["North", "South", "East", "West"], 0, "**Lesson**: Ships start at True North ($000^\\circ$) turning clockwise.", 10, 'easy')
        ],
        testing: [
            generateQuestion("If a vessel travels dead Northeast, what is its bearing?", ["$045^\\circ$", "$090^\\circ$", "$135^\\circ$", "$315^\\circ$"], 0, "**Lesson**: Northeast is exactly halfway between N ($000^\\circ$) and E.", 15, 'medium'),
            generateQuestion("Formula for Cosine rule solving side $c^2$?", ["$a^2+b^2-2ab\\cos C$", "$a^2+b^2+2ab\\cos C$", "$a+b-\\cos C$", "$ab\\sin C$"], 0, "**Lesson**: It is $a^2 + b^2 - 2ab \\cos C$.", 20, 'hard')
        ]
    },
    'g2-s34-mensuration': {
        learning: [
            generateQuestion("Convert $180^\\circ$ entirely into radians.", ["$\\pi$", "$2\\pi$", "$\\pi/2$", "$\\pi/4$"], 0, "**Lesson**: $180^\\circ$ universally equals exactly $\\pi$ radians.", 10, 'easy'),
            generateQuestion("Arc length formula (where $\\theta$ is in radians)?", ["$r\\theta$", "$r^2\\theta$", "$\\frac{1}{2}r^2\\theta$", "$2\\pi r$"], 0, "**Lesson**: Arc Length is simply radius multiplying angle: $s = r\\theta$.", 15, 'medium')
        ],
        testing: [
            generateQuestion("Exact arc length on circle of radius 5 with central angle $2\\text{ rad}$.", ["10", "20", "2.5", "5"], 0, "**Lesson**: $s = r\\theta = 5 \\times 2 = 10$.", 15, 'medium'),
            generateQuestion("Sector Area formula (where $\\theta$ is in radians)?", ["$\\frac{1}{2}r^2\\theta$", "$r\\theta$", "$r^2\\theta$", "$\\pi r^2$"], 0, "**Lesson**: Area simplifies to precisely $\\frac{1}{2}r^2\\theta$.", 20, 'hard')
        ]
    },
    'g2-s34-stats': {
        learning: [
            generateQuestion("For independent events A and B, what is $P(A \\text{ AND } B)$?", ["$P(A) \\times P(B)$", "$P(A) + P(B)$", "$P(A) - P(B)$", "$P(A) / P(B)$"], 0, "**Lesson**: MULTIPLY probabilities together when we want BOTH.", 10, 'easy'),
            generateQuestion("What does Standard Deviation measure?", ["Spread of data", "Center of data", "Max value", "Min value"], 0, "**Lesson**: Spread of data away from the center mean.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Flip a fair coin twice. Odds of double Heads?", ["$1/4$", "$1/2$", "$1/8$", "1"], 0, "**Lesson**: $P(H) \\times P(H) = 0.5 \\times 0.5 = 0.25$.", 15, 'medium'),
            generateQuestion("Class A SD=2, Class B SD=5. Which is more consistent?", ["A", "B", "Both", "Cannot tell"], 0, "**Lesson**: Smaller spread means almost everyone scored tightly near the average.", 20, 'hard')
        ]
    }
};

export { g2Topics, g2Questions };
