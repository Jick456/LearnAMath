import { generateQuestion } from './utils';

const g3Topics = [
    // --- SECONDARY 1 G3 ---
    {
        id: 'g3-s1-numbers', level: 'Sec 1 (G3)', title: 'Numbers & Operations',
        description: 'Primes, HCF/LCM, Rational numbers, Approx & Estimation.', color: '#34d399', emoji: '🔢',
        location: 'The Prime Forest', storyline: 'Find the prime factors to unlock the gates!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: number-line]

**Prime Factors, HCF & LCM: The Building Blocks**
- **Prime Number**: Only divisible cleanly by 1 and itself (e.g., 2, 3, 5, 7, 11). Note: 1 is NOT a prime because it only has one factor!
- **HCF (Highest Common Factor)**: The largest "building block" number that divides evenly into two or more numbers. (Greatest shared power).
- **LCM (Lowest Common Multiple)**: Smallest meeting point where their "times tables" cross paths.

**Approximation & Estimation**
- **Significant Figures**: Start counting strictly from the first non-zero digit. Example: $0.0450$ possesses exactly 3 sig figs (the 4, the 5, and the trailing 0).

> [!tip] **Exam Strategy**
> Always write approximation answers (significant figures) to the requested precision. If $3.00$ is the answer to 3 sig figs, writing just $3$ will cost you a mark!`
    },
    {
        id: 'g3-s1-ratio-pct', level: 'Sec 1 (G3)', title: 'Ratio, Percentage, Rate',
        description: 'Ratios, equivalent ratios, percentage change, speed.', color: '#fbbf24', emoji: '🏎️',
        location: 'The Speed Track', storyline: 'Pace your speed to run through the track efficiently!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: fraction-pie]

**Ratio & Rate**
- **Ratio** ($a:b$): Compares quantities with the EXACT SAME units. Simplify blindly by dividing by their HCF.
- **Rate**: Compares quantities with completely DIFFERENT units (e.g., $km/h$, $kg/m^3$, $$ /kg$).

**Speed: The Magic Triangle**
- Formula: $\\text{Speed} = \\text{Distance} \\div \\text{Time}$.
- **Average Speed** = $\\frac{\\text{Total Distance}}{\\text{Total Time}}$. Never ever simply average two different speeds!

**Percentage Changes**
- Formula for the real world: $\\frac{\\text{Actual Change}}{\\text{Original Amount}} \\times 100%$.

> [!tip] **Exam Strategy**
> For percentage increase/decrease, the denominator is ALWAYS the original amount, never the new amount.`
    },
    {
        id: 'g3-s1-algebra', level: 'Sec 1 (G3)', title: 'Algebra & Equations',
        description: 'Basic expressions, linear equations and linear inequalities.', color: '#60a5fa', emoji: '🧮',
        location: 'The Algebra Abyss', storyline: 'Balance the variables and flip the inequalities!', themeClass: 'theme-abyss',
        crashCourse: `[DIAGRAM: balance-scale]

**Algebraic Operations: Organizing the Chaos**
- **Combine Like Terms**: Only identical twins can merge! $3x + 2x = 5x$.
- **Expansion**: Distribute the outside guard to everyone inside! $a(b + c) = ab + ac$.

**Solving Linear Equations & Inequalities**
- Isolate the elusive variable $x$ completely on one side of the scale.
- **CRITICAL INEQUALITY RULE**: Whenever you multiply or divide BOTH sides of a $<, >$ inequality by a **negative** number, you MUST violently flip the inequality sign!
- Example: $-2x > 6 \\Rightarrow x < -3$.

> [!tip] **Exam Strategy**
> Expanding brackets? Draw arrows from the outside term to EVERY inside term. $-2(x - 3)$ becomes $-2x + 6$, not $-2x - 3$.`
    },
    {
        id: 'g3-s1-funcs', level: 'Sec 1 (G3)', title: 'Functions & Graphs',
        description: 'Cartesian coordinates, linear functions.', color: '#818cf8', emoji: '📈',
        location: 'The Coordinate Canyon', storyline: 'Plot the linear paths out of the canyon.', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**Linear Graphs: City Grid Navigation**
- Standard straight-line form: $y = mx + c$.
- **Gradient ($m$)**: Represents hill steepness. Formula: $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$.
- **y-intercept ($c$)**: The exact coordinate where the line violently crosses the vertical y-axis (i.e. where $x = 0$).

> [!tip] **Exam Strategy**
> If a point $(x,y)$ 'lies on' a line, you can substitute the $x$ and $y$ values directly into the line's equation to test it or find an unknown.`
    },
    {
        id: 'g3-s1-geometry', level: 'Sec 1 (G3)', title: 'Geometry & Mensuration',
        description: 'Angles, parallel lines, perimeter/area/volume of prisms.', color: '#f472b6', emoji: '📐',
        location: 'The Measurement Mine', storyline: 'Dig out exact volumes to build your structures!', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: polygon]

**Angles & Parallel Lines**
- **Alternate angles** form a Z-shape and are perfectly equal.
- **Corresponding angles** form an F-shape and are perfectly equal.
- **Interior angles** form a C-shape and confidently sum to $180^\\circ$.

**Mensuration of Prisms: Building Blocks**
- **Volume of any uniform Prism**: Base Floor Area $\\times$ Length (or Height).
- A cylinder is essentially just a circular prism: $V = \\pi r^2 h$.
- **Area of Trapezium**: Average of the parallel walls $\\times$ height: $\\frac{1}{2} (a+b) h$.

> [!tip] **Exam Strategy**
> Angles on a straight line ($180^\\circ$) and angles around a point ($360^\\circ$) are explicit reasoning. State them clearly in your proofs.`
    },
    {
        id: 'g3-s1-stats', level: 'Sec 1 (G3)', title: 'Stats & Probability',
        description: 'Mean/Mode/Median, diagrams, intro to probability.', color: '#9ca3af', emoji: '📊',
        location: 'The Stats Station', storyline: 'Find the chances of spotting a rare beast.', themeClass: 'theme-glacier',
        crashCourse: `[DIAGRAM: bar-chart]

**Average Measures: Finding the True Center**
- **Mean**: Total Sum completely divided by the Total Count.
- **Median**: The singular middle value of perfectly sorted data.
- **Mode**: The trendiest, most frequent value.

**Intro to Probability: What are the Odds?**
- Calculated purely as $\\frac{\\text{No. of Favorable Outcomes}}{\\text{Total Possible Outcomes}}$.
- Always lands rigidly between $0$ (impossible dream) and $1$ (absolute certainty).

> [!tip] **Exam Strategy**
> Mean is affected heavily by crazy outliers, but the Median stays grounded and stable. Use median when data is skewed!`
    },

    // --- SECONDARY 2 G3 ---
    // --- SECONDARY 2 G3 ---
    {
        id: 'g3-s2-algebra', level: 'Sec 2 (G3)', title: 'Advanced Algebra',
        description: 'Expansion, Factorisation, Algebraic fractions.', color: '#60a5fa', emoji: '🧬',
        location: 'The Factor Factory', storyline: 'Expand and contract the mechanisms to progress.', themeClass: 'theme-clockwork',
        crashCourse: `**Factorisation Methods: Breaking it down**
- **Common Factors**: Pull out the shared DNA! $3x^2 + 6x = 3x(x + 2)$
- **Difference of Two Squares**: The legendary trick! $a^2 - b^2 = (a-b)(a+b)$
- **Grouping in Fours**: Group them 2 by 2! $ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y)$

**Algebraic Fractions: The Great Merging**
- **Multiply/Divide**: Factorise literally everything first! Then joyfully cancel matching top/bottom factors.
- **Add/Subtract**: You CANNOT merge them without finding a common algebraic denominator first!

> [!tip] **Exam Strategy**
> Factorising by grouping requires 4 terms. Split them down the middle and factorise the left pair and right pair separately.`
    },
    {
        id: 'g3-s2-quadratics', level: 'Sec 2 (G3)', title: 'Quadratics & Simultaneous',
        description: 'Quad graphs, solving by factorization, simultaneous linear.', color: '#a78bfa', emoji: '🔗',
        location: 'The Twin Parabola', storyline: 'Cross the curved peaks of the quadratic curves.', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**Quadratic Equations: U-Turns**
- Standard curved form: $ax^2 + bx + c = 0$.
- **Solving by Factorisation**: Find two mystery numbers that magically multiply to $c$ AND concurrently add to $b$.
- **Graphs**: $y = x^2$ is a smiling U-shaped parabola. $y = -x^2$ is a frowning/inverted n-shaped parabola.

**Simultaneous Linear Equations: The Crossroads**
- **Substitution**: Isolate one variable as the boss, and seamlessly substitute it into the other equation.
- **Elimination**: Match the coefficients of one variable perfectly, then subtract/add both full equations to annihilate it.

> [!tip] **Exam Strategy**
> When solving quadratic graphs, the $x$-intercepts are literally the 'roots' or solutions to $ax^2+bx+c=0$.`
    },
    {
        id: 'g3-s2-geometry', level: 'Sec 2 (G3)', title: 'Geometry Concepts',
        description: 'Symmetry, Construction, Congruence & Similarity.', color: '#f472b6', emoji: '🦋',
        location: 'The Symmetry Sandbox', storyline: 'Reflect the shapes to create perfect harmony.', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: right-triangle]

**Congruence & Similarity: Clones vs Scale Models**
- **Congruent ($=$)**: Exact 1:1 identical clones (same size AND shape). Triangle tests: SSS, SAS, AAS, RHS.
- **Similar ($\\sim$)**: Scale models; exact same shape, but sides are proportionally stretched. Triangle tests: SSS (proportional ratios), SAS (ratio match + exact included angle), AA (matching angles).

**Scale Factors of Similar Shapes**
- Lengths ratio: $k$
- Areas ratio: squares! ($k^2$)
- Volumes ratio: cubes! ($k^3$)

> [!tip] **Exam Strategy**
> Length Ratio = $k$. Area Ratio = $k^2$. Volume Ratio = $k^3$. Write this holy trinity on your paper before starting similarity questions.`
    },
    {
        id: 'g3-s2-pythagoras', level: 'Sec 2 (G3)', title: 'Pythagoras & Trig',
        description: 'Pythagoras rule, and basic Trig (Sine, Cos, Tan).', color: '#34d399', emoji: '🛬',
        location: 'The Right Angle Realm', storyline: 'Use TOA CAH SOH to scale the walls!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: right-triangle]

**Right-Angled Triangles ONLY: The Ancient Secrets**
- **Pythagoras Theorem**: $a^2 + b^2 = c^2$, where $c$ is the long diagonal hypotenuse facing the $90^\\circ$ corner.

**Trigonometric Ratios (TOA CAH SOH)**
- **Tangent**: $\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}}$
- **Cosine**: $\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$
- **Sine**: $\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$

> [!tip] **Exam Strategy**
> When doing multi-step trigonometry, keep the exact value (using the 'ANS' button or a long decimal) until the very final step to avoid rounding errors.`
    },
    {
        id: 'g3-s2-mensuration', level: 'Sec 2 (G3)', title: '3D Mensuration',
        description: 'Volume/SA of pyramids, cones, spheres.', color: '#fb923c', emoji: '⛰️',
        location: 'The Volume Volcanos', storyline: 'Measure the cones and spheres of magma carefully.', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: cylinder]

**3D Shapes Formulas: Filling the Void**
- **Pyramid/Cone Volume**: They hold exactly $1/3$ of a straight prism. $V = \\frac{1}{3} \\times \\text{Base Area} \\times \\text{Height}$.
- **Sphere Volume**: The perfect orb. $V = \\frac{4}{3}\\pi r^3$.

**Surface Area: Wrapping Paper**
- **Sphere Surface Area**: Exactly 4 flat circles! $4\\pi r^2$.
- **Cone Curved Surface Area**: $\\pi r l$ (where $l$ is the diagonal slant height pouring down the side).

> [!tip] **Exam Strategy**
> A cone and a cylinder with the EXACT same base area and height. The cone's volume is precisely $1/3$ of the cylinder's.`
    },

    // --- SECONDARY 3/4 G3 ---
    {
        id: 'g3-s34-algebra', level: 'Sec 3/4 (G3)', title: 'Fractions & Formulating',
        description: 'Fractional equations and formulating quadratics.', color: '#60a5fa', emoji: '🔄',
        location: 'The Shifting Sands', storyline: 'Formulate the quadratic equation to cross the sandstorm.', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: balance-scale]

**Fractional Equations: The Cleansing**
- Multiply the entire full equation by the LCM of all denominators to instantly annihilate all fractions on the board!

**Formulating Equations: Translation**
- Translate English word problems directly into mathematical algebra. Let $x$ confidently represent the unknown.
- **Speed problems** notoriously result in quadratic equations: e.g., $\\frac{D}{x} - \\frac{D}{x+2} = 1\\text{ hour}$ difference!

> [!tip] **Exam Strategy**
> If $D/x - D/(x+2) = 1$, multiply EVERYTHING by $x(x+2)$ to instantly wipe out the fractions and reveal a quadratic equation.`
    },
    {
        id: 'g3-s34-funcs', level: 'Sec 3/4 (G3)', title: 'Functions',
        description: 'Quadratic/Power/Exponential functions.', color: '#818cf8', emoji: '📈',
        location: 'The Exponential Expanse', storyline: 'Your power grows exponentially!', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**The Ultimate Quadratic Formula**
- The heavy artillery solver: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- **The Discriminant ($b^2 - 4ac$)**: It predicts the future! If $>0$ (two real roots), if $=0$ (one touching root), if $<0$ (graph floats, no real roots).

**Other Strange Graphs**
- **Exponential**: $y = a^x$. Curve shoots upwards to infinity rapidly, approaching but never fully touching the $x$-axis.
- **Reciprocal/Power**: $y = \\frac{k}{x}$. Curve splits into asymptotes (invisible forcefield lines it approaches but can never touch).

> [!tip] **Exam Strategy**
> Exponential curves ($y=2^x$) rocket upwards and never cross the x-axis. Reciprocal curves ($y=1/x$) break into pieces across asymptotes.`
    },
    {
        id: 'g3-s34-sets', level: 'Sec 3/4 (G3)', title: 'Set Language & Notation',
        description: 'Union, intersection, and Venn diagrams.', color: '#10b981', emoji: '🏮',
        location: 'The Set Sanctuary', storyline: 'Groups are overlapping in the sanctuary. Find the common ground!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: venn-diagram]

**Set Operations: The Sorting Hat**
- **Union ($\\cup$)**: Elements existing in A **OR** B (or both simultaneously). The ultimate joining of two sets together.
- **Intersection ($\\cap$)**: Elements strictly in A **AND** B. Only the overlapping middle ground section.
- **Complement ($A'$)**: Everything completely **OUTSIDE** the walls of A.
- **Subset ($\\subseteq$)**: $A \\subseteq B$ implies every single element living inside A also firmly lives inside B.

> [!tip] **Exam Strategy**
> In Venn Diagrams, shade the requested regions lightly with pencil. Intersection $\\cap$ means 'only what overlaps'. Union $\\cup$ means 'color everything'.`
    },
    {
        id: 'g3-s34-matrices', level: 'Sec 3/4 (G3)', title: 'Matrices',
        description: 'Addition, subtraction, multiplication.', color: '#f59e0b', emoji: '📊',
        location: 'The Matrix Maze', storyline: 'The world is made of rows and columns. Navigate through them to escape!', themeClass: 'theme-abyss',
        crashCourse: `**Matrix Basics: The Data Grids**
- **Order**: Always strictly measured as $\\text{Rows} \\times \\text{Columns}$ (RC cola!).

**Matrix Operations**
- **Add/Subtract**: Matrices MUST possess the exact identical order. Add/subtract directly matching elements position by position.
- **Multiplication**: The trickiest maneuver! To violently multiply Matrix A $\\times$ Matrix B, the number of COLUMNS standing in A must perfectly equal the number of ROWS laying in B. Multiply row of first into column of second.

> [!tip] **Exam Strategy**
> You can only multiply matrices if the inner dimensions match $(M \\times N)$ and $(N \\times P)$ $\\Rightarrow$ results in an $(M \\times P)$ matrix.`
    },
    {
        id: 'g3-s34-vectors', level: 'Sec 4 (G3)', title: 'Vectors in 2D',
        description: 'Magnitude, direction, and operations.', color: '#ec4899', emoji: '➡️',
        location: 'The Vector Valley', storyline: 'Forces are pushing you in every direction. Calculate your path!', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: number-line]

**Vectors Properties: Force & Direction**
- Vectors represent BOTH magnitude (length/power) and direction simultaneously.
- **Addition**: Triangle or Parallelogram law. Placed smoothly head-to-tail to find the resultant path.
- **Scalar multiplication**: $k\\mathbf{a}$ changes the magnitude. If $k$ is negative, the direction violently reverses $180^\\circ$.

**Vector Calculations**
- If $\\mathbf{v} = \\begin{pmatrix} x \\ y \\end{pmatrix}$, its pure Length/Magnitude $|\\mathbf{v}| = \\sqrt{x^2 + y^2}$ (it's just Pythagoras!).

> [!tip] **Exam Strategy**
> Magnitude $|v|$ is just Pythagoras: $\\sqrt{x^2 + y^2}$. Vector direction matters, $\\vec{AB}$ is exactly $-\\vec{BA}$.`
    },
    {
        id: 'g3-s34-geometry', level: 'Sec 3/4 (G3)', title: 'Circle & Coordinate Geomp',
        description: 'Circle properties, Coordinate geometry.', color: '#f472b6', emoji: '⚪',
        location: 'The Circle Sanctuary', storyline: 'Discover the hidden properties of the circular monument.', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: circle]

**Circle Theorems: The Hidden Laws**
- Angle fired from centre = $2 \\times$ angle fired at circumference.
- Angles locked in the identical same arc segment are perfectly equal.
- Angle captured inside a perfect semicircle = absolutely $90^\\circ$.
- Opposite angles trapped inside a cyclic quadrilateral sum beautifully to $180^\\circ$.

**Coordinate Geometry Basics**
- **Distance**: $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ (Rise and Run Pythagoras)
- **Gradient**: $m = \\frac{y_2 - y_1}{x_2 - x_1}$

> [!tip] **Exam Strategy**
> Any triangle drawn inside a semicircle that touches the edge will have a perfect $90^\\circ$ angle opposite the diameter.`
    },
    {
        id: 'g3-s34-trig', level: 'Sec 3/4 (G3)', title: 'Advanced Trig & Bearings',
        description: 'Sine/Cosine for obtuse, Sine/Cosine rules, 3D problems, Bearings.', color: '#fbbf24', emoji: '🧭',
        location: 'The Compass Caves', storyline: 'Navigate your bearings in 3D to find the hidden path.', themeClass: 'theme-abyss',
        crashCourse: `**Advanced Trigonometry: Any Triangle**
- **Sine Rule**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
- **Cosine Rule**: $c^2 = a^2 + b^2 - 2ab\\cos C$
- **Area of ANY Triangle**: $\\frac{1}{2}ab\\sin C$

**Bearings & 3D Space**
- Bearings are strictly measured starting from North ($000^\\circ$) turning purely clockwise.
- For 3D Trig, don't panic! Always mentally slice the 3D object to extract the 2D flat right-angled triangle you urgently need to solve first.

> [!tip] **Exam Strategy**
> For 3D trigonometry (pyramids, cuboids), ALWAYS isolate and sketch the 2D right-angled triangle you need before calculating.`
    },
    {
        id: 'g3-s34-mensuration', level: 'Sec 3/4 (G3)', title: 'Arc Length & Sector Area',
        description: 'Circles and Radian measure.', color: '#fb923c', emoji: '🍕',
        location: 'The Radian River', storyline: 'Calculate the arc length to cross the river.', themeClass: 'theme-glacier',
        crashCourse: `[DIAGRAM: fraction-pie]

**Using Pure Radians**
- Radians are the true measure of a circle. $\\pi \\text{ radians} = 180^\\circ$.
- To convert to radians: Multiply by $\\frac{\\pi}{180^\\circ}$.
- **Arc Length**: $s = r\\theta$ (where $\\theta$ MUST be in radians!)
- **Sector Area**: $A = \\frac{1}{2}r^2\\theta$ (radians only!)

**(If forced to use Degrees)**
- Arc Length = $\\frac{\\theta}{360} \\times 2\\pi r$
- Sector Area = $\\frac{\\theta}{360} \\times \\pi r^2$

> [!tip] **Exam Strategy**
> Circle formulas $s = r\\theta$ and Area $= 0.5r^2\\theta$ ONLY work if your calculator is set strictly to RADIANS mode.`
    },
    {
        id: 'g3-s34-stats', level: 'Sec 3/4 (G3)', title: 'Stats & Probability',
        description: 'Quartiles, SD, Cumulative freq, Box-and-whisker. Combined events.', color: '#9ca3af', emoji: '📊',
        location: 'The Probability Plaza', storyline: 'Use tree diagrams to calculate dependent probabilities.', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: bar-chart]

**Statistics: Analyzing the Spread**
- **Cumulative Frequency curve**: An S-curve showing running totals. Excellent for reading the Median and Quartiles from the y-axis.
- **Box-and-whisker plot**: A brilliant visual summary: Min, Lower Quartile, Median, Upper Quartile, Max.
- **Standard Deviation**: Actively measures data consistency (smaller SD = numbers clumped consistently together).

**Probability Rules**
- $P(A \\cup B) = P(A) + P(B)$ if strictly mutually exclusive.
- $P(A \\cap B) = P(A) \\times P(B)$ if completely independent.

> [!tip] **Exam Strategy**
> When finding the interquartile range from a box plot, it's just the Upper Quartile minus the Lower Quartile. It forms the width of the box.`
    }
];

const g3Questions = {
    // --- Sec 1 G3 ---
    'g3-s1-numbers': {
        learning: [
            // Easy (1-10)
            generateQuestion("Which specific mystery number is a Prime?", ["1", "4", "9", "11"], 3, "**Lesson**: 11 is prime. 1 isn't prime because it only has one factor.", 10, 'easy'),
            generateQuestion("Find the highest common 'building block' (HCF) of 12 and 18.", ["2", "3", "6", "36"], 2, "**Lesson**: The largest integer dividing both is 6.", 10, 'easy'),
            generateQuestion("Is 2 a prime number?", ["Yes", "No"], 0, "Yes, 2 is the ONLY even prime number.", 10, 'easy'),
            generateQuestion("Which of these is a multiple of 7?", ["17", "27", "35", "45"], 2, "35 = 7 x 5.", 10, 'easy'),
            generateQuestion("A factor of 15 is...", ["30", "5", "0", "2"], 1, "15 / 5 = 3 perfectly.", 10, 'easy'),
            generateQuestion("Which is NOT a rational number?", ["1/2", "0", "pi", "4"], 2, "Pi cannot be written as a simple fraction.", 10, 'easy'),
            generateQuestion("Estimate $9.9 \\times 4.1$.", ["40", "50", "36", "400"], 0, "10 x 4 = 40.", 10, 'easy'),
            generateQuestion("Round 3.45 to 1 decimal place.", ["3.4", "3.5", "3.0", "4.0"], 1, "The 5 rounds the 4 up to 5.", 10, 'easy'),
            generateQuestion("What is the LCM of 2 and 3?", ["1", "5", "6", "12"], 2, "Both 2 and 3 go into 6.", 10, 'easy'),
            generateQuestion("Is 0 a positive number?", ["Yes", "No", "Both", "None"], 1, "0 is neither positive nor negative.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("What is the lowest meeting point (LCM) for the 4 and 6 times tables?", ["2", "12", "24", "10"], 1, "**Lesson**: 12 is the smallest number that both 4 and 6 can reach.", 15, 'medium'),
            generateQuestion("Round the constant 3.14159 to 3 significant figures.", ["3.14", "3.142", "3.141", "3.10"], 0, "**Lesson**: Count 3, 1, 4. Since next digit starts with 1, it stays 3.14.", 15, 'medium'),
            generateQuestion("Find the HCF of 24 and 36.", ["6", "12", "72", "4"], 1, "12 goes into both 24 and 36.", 15, 'medium'),
            generateQuestion("Prime factorization of 20?", ["$2^2 \\times 5$", "$4 \\times 5$", "$2 \\times 10$", "$20 \\times 1$"], 0, "Must be prime bases only.", 15, 'medium'),
            generateQuestion("Estimate $\\sqrt{50}$.", ["7", "7.1", "5", "10"], 0, "Closest square is 49 ($\\sqrt{49}=7$).", 15, 'medium'),
            generateQuestion("Which equals $1/3$?", ["0.3", "0.33", "0.333...", "0.34"], 2, "Repeating decimal.", 15, 'medium'),
            generateQuestion("Round 0.0456 to 2 sig figs.", ["0.04", "0.045", "0.046", "0.05"], 2, "Start counting at 4. Next is 5. Next is 6, so round 5 up to 6.", 15, 'medium'),
            generateQuestion("LCM of 5 and 7?", ["12", "35", "1", "70"], 1, "Both are prime, so multiply them.", 15, 'medium'),
            generateQuestion("Convert 5/8 to decimal.", ["0.625", "0.58", "0.85", "0.6"], 0, "5 divided by 8.", 15, 'medium'),
            generateQuestion("Is $\\sqrt{16}$ rational?", ["Yes", "No"], 0, "Yes, it equals exactly 4.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Two bells ring every 15 min and 20 min. If they ring together at 12:00, when again?", ["12:35", "13:00", "12:20", "13:30"], 1, "**Lesson**: LCM of 15 and 20 is 60 minutes.", 20, 'hard'),
            generateQuestion("Find HCF of $2^3 \\times 3^2$ and $2^2 \\times 3^3$.", ["$2^2 \\times 3^2$", "$2^3 \\times 3^3$", "$2 \\times 3$", "36"], 0, "**Lesson**: Take the lowest powers of common primes.", 20, 'hard'),
            generateQuestion("Find LCM of $2^3 \\times 3^2$ and $2^2 \\times 3^3$.", ["$2^2 \\times 3^2$", "$2^3 \\times 3^3$", "72", "216"], 1, "Take the highest powers of all primes.", 20, 'hard'),
            generateQuestion("Round 999.9 to 3 sig figs.", ["999", "1000", "100.", "100"], 1, "The 9 rounds up, cascading all the way to 1000.", 20, 'hard'),
            generateQuestion("If a number is rounded to 50 (to 1 sig fig), what is its max possible value?", ["54.99...", "55", "50.4", "49"], 0, "Anything below 55 rounds to 50.", 20, 'hard'),
            generateQuestion("Which fraction is terminating?", ["1/3", "1/7", "3/8", "2/9"], 2, "Denominator 8 $= 2^3$, only 2s or 5s mean terminating.", 20, 'hard'),
            generateQuestion("Estimate $(4.98 \\times 2.01) / 0.51$.", ["10", "20", "5", "1"], 1, "$(5 \\times 2) / 0.5 = 10 / 0.5 = 20$.", 20, 'hard'),
            generateQuestion("HCF of 45, 60, 75?", ["5", "10", "15", "30"], 2, "15 divides all evenly.", 20, 'hard'),
            generateQuestion("LCM of 4, 6, 8?", ["24", "48", "12", "96"], 0, "Lowest number divisible by all.", 20, 'hard'),
            generateQuestion("[Interleaved] Which algebra expression is equivalent to $x+x+x$?", ["$x^3$", "$3x$", "$3+x$", "$x/3$"], 1, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Is 9 a prime number?", ["Yes", "No"], 1, "**Lesson**: No, it's divisible by 3.", 10, 'easy'),
            generateQuestion("What is a factor of 10?", ["20", "5", "0", "15"], 1, "**Lesson**: 10 is divisible by 5.", 10, 'easy'),
            generateQuestion("Which is a multiple of 8?", ["4", "16", "20", "2"], 1, "8 x 2 = 16.", 10, 'easy'),
            generateQuestion("HCF of 4 and 8? ", ["2", "4", "8", "1"], 1, "4 is the largest number dividing both.", 10, 'easy'),
            generateQuestion("LCM of 3 and 5?", ["8", "2", "15", "30"], 2, "15 is the smallest multiple.", 10, 'easy'),
            generateQuestion("Round 5.6 to nearest whole number.", ["5", "6", "5.5", "6.0"], 1, "The 6 makes it round up.", 10, 'easy'),
            generateQuestion("Estimate $19 \\times 5$.", ["100", "95", "90", "105"], 0, "20 x 5 = 100.", 10, 'easy'),
            generateQuestion("Is -5 an integer?", ["Yes", "No"], 0, "Integers are whole numbers, including negatives.", 10, 'easy'),
            generateQuestion("Which is rational?", ["$\\sqrt{2}$", "$\\pi$", "3/4", "e"], 2, "Fraction of integers.", 10, 'easy'),
            generateQuestion("How many sig figs in 0.05?", ["1", "2", "3", "0"], 0, "Only the 5 counts.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find LCM of 6 and 9.", ["18", "36", "54", "3"], 0, "**Lesson**: 18 is the lowest common multiple.", 15, 'medium'),
            generateQuestion("HCF of 28 and 42?", ["14", "7", "2", "28"], 0, "**Lesson**: 14 goes into both perfectly.", 15, 'medium'),
            generateQuestion("Prime factorization of 18?", ["$2 \\times 9$", "$3 \\times 6$", "$2 \\times 3^2$", "$18 \\times 1$"], 2, "Only prime bases.", 15, 'medium'),
            generateQuestion("Round 0.0805 to 2 sig figs.", ["0.08", "0.081", "0.080", "0.09"], 1, "Start at 8, next is 0, next is 5 so round up.", 15, 'medium'),
            generateQuestion("Round 14.56 to 1 decimal place.", ["14.5", "14.6", "15.0", "14.0"], 1, "The 6 rounds the 5 up.", 15, 'medium'),
            generateQuestion("Estimate $\\sqrt{80}$.", ["8", "9", "8.9", "10"], 1, "Closest perfect square is 81.", 15, 'medium'),
            generateQuestion("Convert 3/5 to percentage.", ["30%", "50%", "60%", "75%"], 2, "3/5 = 60/100.", 15, 'medium'),
            generateQuestion("Which is a terminating decimal?", ["1/3", "1/6", "1/4", "1/9"], 2, "Denominator has only prime factor 2.", 15, 'medium'),
            generateQuestion("Is zero an even number?", ["Yes", "No"], 0, "It is an integer multiple of 2 (2 x 0).", 15, 'medium'),
            generateQuestion("Is $\\pi$ roughly 3.14?", ["Yes", "No"], 0, "Standard approximation.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("HCF of $2^2 \\times 5$ and $2 \\times 5^2$?", ["10", "20", "50", "100"], 0, "**Lesson**: Lowest powers: $2^1 \\times 5^1 = 10$.", 20, 'hard'),
            generateQuestion("Three buses leave at 8:00. Frequencies: 10, 15, 20 mins. When all together?", ["8:30", "9:00", "8:45", "9:20"], 1, "**Lesson**: LCM of 10, 15, 20 is 60 mins.", 20, 'hard'),
            generateQuestion("Round 0.004050 to 3 sig figs.", ["0.00405", "0.004", "0.0041", "0.004050"], 0, "Start at 4, keep next two: 405.", 20, 'hard'),
            generateQuestion("Estimate $(9.9^2) / \\sqrt{24}$.", ["20", "100", "50", "25"], 0, "Approx $100 / 5 = 20$.", 20, 'hard'),
            generateQuestion("Lower bound of 50 rounded to nearest 10?", ["45", "49", "40", "49.5"], 0, "Halfway down the unit of rounding.", 20, 'hard'),
            generateQuestion("Which fraction gives a repeating decimal?", ["1/8", "3/16", "5/12", "7/20"], 2, "Denominator has prime factor 3.", 20, 'hard'),
            generateQuestion("If $HCF=6$ and $LCM=36$ for two numbers, and one is 12, what is the other?", ["18", "6", "36", "24"], 0, "Product = HCF x LCM = 216. 216 / 12 = 18.", 20, 'hard'),
            generateQuestion("Find LCM of $x^2y$ and $xy^3$.", ["$xy$", "$x^2y^3$", "$x^3y^4$", "$x^2y$"], 1, "Highest powers of each variable.", 20, 'hard'),
            generateQuestion("Is $\\sqrt{2} \\times \\sqrt{8}$ rational?", ["Yes", "No"], 0, "Equals $\\sqrt{16} = 4$.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify $2a + 3b - a + b$.", ["$a + 4b$", "$3a + 4b$", "$a - 2b$", "$ab$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g3-s1-ratio-pct': {
        learning: [
            // Easy (1-10)
            generateQuestion("Shrink the ratio $15:25$ down to its simplest form.", ["3:5", "5:3", "1:2", "3:4"], 0, "**Lesson**: Dividing both by 5 reveals the core $3:5$ ratio.", 10, 'easy'),
            generateQuestion("If a jet travels 150km in 3 hours, what is its average speed?", ["450 km/h", "50 km/h", "153 km/h", "30 km/h"], 1, "**Lesson**: Speed = Distance / Time. $150 / 3 = 50$.", 10, 'easy'),
            generateQuestion("Write 50% as a simple fraction.", ["1/2", "1/4", "1/50", "2"], 0, "50/100 = 1/2.", 10, 'easy'),
            generateQuestion("What is 10% of 200?", ["20", "10", "200", "2"], 0, "200 / 10 = 20.", 10, 'easy'),
            generateQuestion("Convert 0.25 to a percentage.", ["25%", "2.5%", "250%", "0.25%"], 0, "0.25 x 100%.", 10, 'easy'),
            generateQuestion("Ratio of 20 cents to $1?", ["1:5", "20:1", "5:1", "1:20"], 0, "20 : 100 = 1 : 5.", 10, 'easy'),
            generateQuestion("A machine makes 5 toys in 1 hour. How many in 3 hours?", ["15", "8", "5/3", "20"], 0, "5 x 3 = 15.", 10, 'easy'),
            generateQuestion("If 2 apples cost $4, cost of 1 apple?", ["$2", "$1", "$4", "$8"], 0, "4 / 2 = 2.", 10, 'easy'),
            generateQuestion("Convert 3/4 to a percentage.", ["75%", "34%", "43%", "133%"], 0, "3/4 * 100%.", 10, 'easy'),
            generateQuestion("Are 1:2 and 2:4 equivalent ratios?", ["Yes", "No"], 0, "Multiplying both parts of 1:2 by 2 gives 2:4.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Divide $50 in ratio 2:3. What is the smaller share?", ["$20", "$30", "$10", "$25"], 0, "**Lesson**: Total 5 parts. 1 part = $10. Smaller share is 2 parts = $20.", 15, 'medium'),
            generateQuestion("A $50 item is increased by 20%. What's the new price?", ["$60", "$70", "$52", "$10"], 0, "**Lesson**: $20\\%$ of 50 is 10. Adding it to the original gives $60.", 15, 'medium'),
            generateQuestion("Travel 100km at 50km/h, then 100km at 100km/h. Total time?", ["3h", "2h", "4h", "2.5h"], 0, "100/50 + 100/100 = 2 + 1 = 3h.", 15, 'medium'),
            generateQuestion("Convert 1.5 hours to minutes.", ["90", "150", "60", "100"], 0, "1.5 * 60 = 90 mins.", 15, 'medium'),
            generateQuestion("Ratio A:B is 1:2. B:C is 2:3. Ratio A:C?", ["1:3", "1:2", "2:3", "3:1"], 0, "Since B is the same (2), A:C is directly 1:3.", 15, 'medium'),
            generateQuestion("If 5 workers build a wall in 4 days, how long for 10 workers?", ["2 days", "8 days", "20 days", "1 day"], 0, "Inverse proportion. Double workers = half the time.", 15, 'medium'),
            generateQuestion("A car drops in value from $10,000 to $8,000. % decrease?", ["20%", "25%", "80%", "10%"], 0, "Change is 2000. 2000/10000 = 20%.", 15, 'medium'),
            generateQuestion("Find x if 2:5 = x:15.", ["6", "10", "2", "5"], 0, "Multiply by 3.", 15, 'medium'),
            generateQuestion("A map scale is 1:1000. 2cm on map is ___ real meters?", ["20m", "2000m", "2m", "0.2m"], 0, "2 * 1000 = 2000cm = 20m.", 15, 'medium'),
            generateQuestion("What is 150% of 40?", ["60", "20", "100", "80"], 0, "1.5 * 40.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Price is $120 AFTER a 20% discount. Original price?", ["$150", "$144", "$100", "$96"], 0, "**Lesson**: 80% of Original = 120. Original = 120 / 0.8 = 150.", 20, 'hard'),
            generateQuestion("Average speed: 60km/h for 2hrs, 90km/h for 2hrs.", ["75", "70", "80", "150"], 0, "Total distance = 120 + 180 = 300. Total time = 4. 300/4 = 75.", 20, 'hard'),
            generateQuestion("A:B = 2:3, B:C = 4:5. Find A:B:C.", ["8:12:15", "2:3:5", "2:12:5", "8:7:15"], 0, "Make B match: 8:12 and 12:15.", 20, 'hard'),
            generateQuestion("Population grows 10% per year. After 2 years, total % growth?", ["21%", "20%", "121%", "100%"], 0, "1.1 * 1.1 = 1.21 => 21% increase.", 20, 'hard'),
            generateQuestion("A tap fills a tank in 2h. Another in 3h. Together?", ["1.2h", "5h", "2.5h", "1h"], 0, "1/2 + 1/3 = 5/6 tank per hour. So 6/5 = 1.2 hrs.", 20, 'hard'),
            generateQuestion("Map area is 4cm^2. Scale 1:1000. Actual area in m^2?", ["400", "40", "4", "4000"], 0, "Area scale = 1:1000000. 4cm^2 = 4000000 cm^2 = 400 m^2.", 20, 'hard'),
            generateQuestion("If 3 cats catch 3 mice in 3 mins, how many mins for 100 cats to catch 100 mice?", ["3", "100", "9", "300"], 0, "Rate is 1 mouse/cat per 3 mins.", 20, 'hard'),
            generateQuestion("Speed is 10 m/s. Convert to km/h.", ["36", "100", "3.6", "60"], 0, "10 * 3.6 = 36.", 20, 'hard'),
            generateQuestion("Price includes 10% tax, totals $55. Price before tax?", ["$50", "$45", "$49.5", "$65"], 0, "110% = 55. 100% = 50.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve for $x$: $3x = 12$.", ["4", "9", "36", "15"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Simplify 10:30.", ["1:3", "3:1", "10:3", "100:300"], 0, "**Lesson**: Divide both by 10.", 10, 'easy'),
            generateQuestion("What is 20% of 50?", ["10", "2", "20", "5"], 0, "20/100 * 50 = 10.", 10, 'easy'),
            generateQuestion("Convert 1/5 to percentage.", ["20%", "5%", "50%", "15%"], 0, "1/5 * 100%.", 10, 'easy'),
            generateQuestion("Average speed = 100km in 2 hours.", ["50km/h", "200km/h", "100km/h", "25km/h"], 0, "100/2.", 10, 'easy'),
            generateQuestion("Ratio of 50cm to 1m.", ["1:2", "50:1", "2:1", "1:50"], 0, "50cm : 100cm.", 10, 'easy'),
            generateQuestion("Write 0.75 as a fraction.", ["3/4", "1/4", "7/5", "75/10"], 0, "75/100 = 3/4.", 10, 'easy'),
            generateQuestion("What is 100% of 42?", ["42", "420", "0", "1"], 0, "Whole amount.", 10, 'easy'),
            generateQuestion("If 4 identical pens cost $8, cost of 1 pen?", ["$2", "$4", "$32", "$8"], 0, "8 / 4 = 2.", 10, 'easy'),
            generateQuestion("A car travels 60km/h for 1 hour. Distance?", ["60km", "600km", "6km", "30km"], 0, "Speed x Time = Distance.", 10, 'easy'),
            generateQuestion("Convert 50% to a decimal.", ["0.5", "5.0", "0.05", "50.0"], 0, "50/100.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Divide 40 in ratio 1:3. Larger part?", ["30", "10", "20", "40"], 0, "**Lesson**: 4 parts total. 1 part = 10. Larger is 30.", 15, 'medium'),
            generateQuestion("A $100 item is discounted by 15%. New price?", ["$85", "$115", "$15", "$80"], 0, "100 - 15 = 85.", 15, 'medium'),
            generateQuestion("Convert 72 km/h to m/s.", ["20", "7.2", "720", "2"], 0, "72 / 3.6 = 20.", 15, 'medium'),
            generateQuestion("A map scale is 1:50000. 2cm represents ___ km?", ["1", "10", "2", "0.1"], 0, "2 * 50000 = 100000cm = 1km.", 15, 'medium'),
            generateQuestion("Population was 200, is now 250. % increase?", ["25%", "50%", "20%", "250%"], 0, "Increase is 50. 50/200 = 25%.", 15, 'medium'),
            generateQuestion("If 4 men take 6 days, how long for 3 men?", ["8 days", "4.5 days", "2 days", "24 days"], 0, "Inverse proportion. 24 man-days total. 24/3 = 8.", 15, 'medium'),
            generateQuestion("What is 5% of 600?", ["30", "300", "50", "6"], 0, "10% is 60, half is 30.", 15, 'medium'),
            generateQuestion("Ratio of boys to girls is 2:5. If 10 boys, how many girls?", ["25", "10", "4", "50"], 0, "Multiplier is 5.", 15, 'medium'),
            generateQuestion("Travel 5 hours at 80km/h. Distance?", ["400km", "800km", "16km", "40km"], 0, "5 * 80.", 15, 'medium'),
            generateQuestion("Convert 2.25 to a percentage.", ["225%", "2.25%", "22.5%", "0.225%"], 0, "Multiply by 100.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Price included 8% GST totals $108. Price before GST?", ["$100", "$92", "$100.8", "$99.36"], 0, "**Lesson**: 108% = $108. 100% = $100.", 20, 'hard'),
            generateQuestion("Train A is 100m long, speed 20m/s. Crosses a pole in?", ["5s", "200s", "0.2s", "10s"], 0, "Time = Distance / Speed = 100 / 20.", 20, 'hard'),
            generateQuestion("A:B = 1:2. C:B = 3:4. A:C?", ["2:3", "1:3", "3:2", "4:3"], 0, "A:B = 2:4. So A:B:C = 2:4:3. A:C = 2:3.", 20, 'hard'),
            generateQuestion("Invest $1000 at 5% compound int for 2 years. Total?", ["$1102.50", "$1100", "$1050", "$1200"], 0, "$1000 * 1.05^2 = 1102.5.", 20, 'hard'),
            generateQuestion("Map scale 1:2000. Real area 40,000 m^2. Map area in cm^2?", ["100", "400", "10", "20"], 0, "Real area = 400,000,000 cm^2. Divide by 2000^2 (4,000,000) = 100.", 20, 'hard'),
            generateQuestion("Mixing 2kg of $3/kg with 3kg of $5/kg. Price per kg?", ["$4.20", "$4.00", "$4.50", "$3.50"], 0, "Total cost = 6 + 15 = 21. Total weight = 5. Average = 21/5 = 4.2.", 20, 'hard'),
            generateQuestion("Two cars meet. Car A 60km/h, Car B 40km/h, dist 200km.", ["Meet in 2h", "Meet in 5h", "Meet in 10h", "Meet in 1h"], 0, "Combined speed = 100km/h. 200/100 = 2h.", 20, 'hard'),
            generateQuestion("A tap fills in 3h, leak empties in 4h. Fill time?", ["12h", "1h", "7h", "1.2h"], 0, "Rate = 1/3 - 1/4 = 1/12 per hour.", 20, 'hard'),
            generateQuestion("If $x$ is increased by 20% then decreased by 20%, result?", ["0.96x", "x", "1.04x", "0.8x"], 0, "1.2 * 0.8 = 0.96.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify the expression $3x - (x - 2)$.", ["$2x + 2$", "$2x - 2$", "$4x - 2$", "$2x$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g3-s1-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Organize this expression: $4x + 3y - x$.", ["4x + 2y", "3x + 3y", "2xy", "3x - 3y"], 1, "**Lesson**: Group the $x$ terms ($4x - x = 3x$), leaving the $3y$ alone.", 10, 'easy'),
            generateQuestion("If $2x = 10$, what is $x$?", ["2", "5", "8", "12"], 1, "**Lesson**: Divide both sides by 2 to find that $x = 5$.", 10, 'easy'),
            generateQuestion("Simplify $a + a + a$.", ["$a^3$", "$3a$", "$3+a$", "$a/3$"], 1, "Adding the same variable 3 times gives 3a.", 10, 'easy'),
            generateQuestion("Expand $2(x+3)$.", ["$2x+3$", "$2x+6$", "$x+6$", "$2x+5$"], 1, "Multiply 2 by both x and 3.", 10, 'easy'),
            generateQuestion("Solve $x-4=10$.", ["6", "14", "-6", "2.5"], 1, "Add 4 to both sides.", 10, 'easy'),
            generateQuestion("Simplify $5y - 2y$.", ["$3y$", "$7y$", "$3$", "$10y$"], 0, "5 minus 2 is 3.", 10, 'easy'),
            generateQuestion("Solve $x/3 = 4$.", ["12", "7", "4/3", "1"], 0, "Multiply by 3.", 10, 'easy'),
            generateQuestion("Expand $x(x+2)$.", ["$2x+2$", "$x^2+2$", "$x^2+2x$", "$x^2+x$"], 2, "$x \\times x = x^2$.", 10, 'easy'),
            generateQuestion("If $x=2, y=3$, evaluate $2x+y$.", ["7", "8", "5", "12"], 0, "2(2) + 3 = 4 + 3 = 7.", 10, 'easy'),
            generateQuestion("Simplify $xy + yx$.", ["$2xy$", "$x^2y^2$", "$0$", "$xy$"], 0, "$xy$ is the same as $yx$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve this 2-step mystery: $3x - 4 = 11$.", ["4", "5", "15", "7"], 1, "**Lesson**: Add 4 to get $3x = 15$, then divide by 3 to find $x = 5$.", 15, 'medium'),
            generateQuestion("Expand $-2(x-3)$.", ["$-2x-6$", "$-2x-3$", "$-2x+6$", "$2x-6$"], 2, "**Lesson**: Negative times negative is positive: $-2 \\times -3 = +6$.", 15, 'medium'),
            generateQuestion("Solve $5 - 2x = 1$.", ["2", "-2", "3", "1.5"], 0, "$2x = 4 \\Rightarrow x=2$.", 15, 'medium'),
            generateQuestion("Simplify $2x - (x - 5)$.", ["$x-5$", "$3x-5$", "$x+5$", "$-x+5$"], 2, "Distribute the negative: $-x+5$.", 15, 'medium'),
            generateQuestion("Solve $x+2 < 5$.", ["$x < 7$", "$x > 3$", "$x < 3$", "$x=3$"], 2, "Subtract 2 from both sides.", 15, 'medium'),
            generateQuestion("Expand and simplify $3(x+1) + 2(x-1)$.", ["$5x+5$", "$5x+1$", "$5x-1$", "$5x+2$"], 1, "$3x+3 + 2x-2 = 5x+1$.", 15, 'medium'),
            generateQuestion("Solve $2(x-1) = 6$.", ["3", "4", "2", "8"], 1, "Divide by 2, then add 1.", 15, 'medium'),
            generateQuestion("If $A = \\pi r^2$, make $\\pi$ the subject.", ["$\\pi = A/r^2$", "$\\pi = A-r^2$", "$\\pi = r^2/A$", "$\\pi = \\sqrt{A/r}$"], 0, "Divide by $r^2$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{6x^2}{3x}$.", ["$2x$", "$3x$", "$2$", "$x/2$"], 0, "6/3=2, $x^2/x = x$.", 15, 'medium'),
            generateQuestion("Solve $x/2 + 1 = 4$.", ["3", "6", "1.5", "5"], 1, "$x/2 = 3 \\Rightarrow x=6$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("CRITICAL: Solve the inequality $-2x > 8$.", ["$x > 4$", "$x > -4$", "$x < -4$", "$x < 4$"], 2, "**Lesson**: Because you divided by a negative number, you flipped the sign! $x < -4$.", 20, 'hard'),
            generateQuestion("Solve $3(x-2) = 2(x+5)$.", ["16", "4", "1", "12"], 0, "**Lesson**: $3x-6 = 2x+10 \\Rightarrow x = 16$.", 20, 'hard'),
            generateQuestion("Expand and simplify $(x-1)(x+2) - x^2$.", ["$x-2$", "$x+2$", "$3x-2$", "$-x-2$"], 0, "$x^2+x-2 - x^2 = x-2$.", 20, 'hard'),
            generateQuestion("Solve $5 - 3x \\le 11$.", ["$x \\le -2$", "$x \\ge -2$", "$x \\le 2$", "$x \\ge 2$"], 1, "$-3x \\le 6 \\Rightarrow x \\ge -2$.", 20, 'hard'),
            generateQuestion("Make $x$ the subject: $y = 2x - 5$.", ["$x = y+5/2$", "$x = (y+5)/2$", "$x = 2y-5$", "$x = y-5/2$"], 1, "Add 5, then divide all by 2.", 20, 'hard'),
            generateQuestion("Solve for $x$: $x/3 - 1/2 = 1/6$.", ["1", "2", "3", "0.5"], 1, "Multiply by 6: $2x - 3 = 1 \\Rightarrow 2x=4 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("If $2^{x} = 16$, then $x=$?", ["4", "8", "3", "2"], 0, "$2^4 = 16$.", 20, 'hard'),
            generateQuestion("Solve $2(3-x) = -4x+10$.", ["2", "-2", "4", "-4"], 0, "$6-2x = -4x+10 \\Rightarrow 2x = 4$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - 4}{x-2}$.", ["$x+2$", "$x-2$", "$x-4$", "1"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("[Interleaved] Find the gradient of line $y = 3x - 5$.", ["-5", "3", "x", "y"], 1, "Functions link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Simplify $2a + 3b + 4a$.", ["$6a+3b$", "$5a+4b$", "$9ab$", "$6ab$"], 0, "**Lesson**: Combine the 'a' terms.", 10, 'easy'),
            generateQuestion("Solve $x + 5 = 12$.", ["7", "17", "-7", "60"], 0, "**Lesson**: Subtract 5.", 10, 'easy'),
            generateQuestion("Expand $3(2x+1)$.", ["$6x+3$", "$6x+1$", "$5x+3$", "$6x+4$"], 0, "Multiply 3 by both.", 10, 'easy'),
            generateQuestion("Evaluate $x^2$ if $x=-3$.", ["-9", "9", "6", "-6"], 1, "Negative times negative is positive.", 10, 'easy'),
            generateQuestion("Simplify $10y - y$.", ["$10$", "$9y$", "$11y$", "$y$"], 1, "$10y - 1y = 9y$.", 10, 'easy'),
            generateQuestion("Solve $4x = 20$.", ["5", "24", "16", "80"], 0, "Divide by 4.", 10, 'easy'),
            generateQuestion("Solve $x-7 = -2$.", ["5", "-9", "-5", "9"], 0, "Add 7.", 10, 'easy'),
            generateQuestion("Write \"3 times x plus 2\" algebraically.", ["$3x+2$", "$3(x+2)$", "$x^3+2$", "$3x^2$"], 0, "Translate directly.", 10, 'easy'),
            generateQuestion("Simplify $x \\times x \\times x$.", ["$3x$", "$x^3$", "$3^x$", "$x+3$"], 1, "Multiply means powers.", 10, 'easy'),
            generateQuestion("Solve $x/5 = 2$.", ["10", "2.5", "7", "3"], 0, "Multiply by 5.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $4x - 5 = 7$.", ["3", "0.5", "12", "4"], 0, "**Lesson**: $4x = 12 \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Expand $-3(x-4)$.", ["$-3x-12$", "$-3x+12$", "$3x-12$", "$-3x-4$"], 1, "**Lesson**: $-3 \\times -4 = +12$.", 15, 'medium'),
            generateQuestion("Solve $10 - 3x = x - 2$.", ["3", "4", "2", "8"], 0, "$12 = 4x \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Simplify $5x - (2x + 1)$.", ["$3x+1$", "$3x-1$", "$7x+1$", "$7x-1$"], 1, "Distribute the negative.", 15, 'medium'),
            generateQuestion("Solve $2x+1 > 7$.", ["$x > 3$", "$x < 3$", "$x > 4$", "$x < 4$"], 0, "$2x > 6 \\Rightarrow x > 3$.", 15, 'medium'),
            generateQuestion("Expand $x(2x-3)$.", ["$2x^2-3x$", "$2x-3x$", "$2x^2-3$", "$x^2-3x$"], 0, "Multiply x in.", 15, 'medium'),
            generateQuestion("Solve $3(x-1) = 9$.", ["2", "4", "3", "12"], 1, "Divide by 3, then add 1.", 15, 'medium'),
            generateQuestion("Make m the subject: $F = ma$.", ["$m = F/a$", "$m = a/F$", "$m = F-a$", "$m=Fa$"], 0, "Divide by a.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{10x^3}{2x^2}$.", ["$5x$", "$5x^2$", "$8x$", "$5$"], 0, "10/2=5, $x^3/x^2 = x$.", 15, 'medium'),
            generateQuestion("Solve $(x-2)/3 = 4$.", ["14", "10", "12", "6"], 0, "$x-2 = 12 \\Rightarrow x=14$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve inequality $-3x+2 < -10$.", ["$x > 4$", "$x < 4$", "$x > -4$", "$x < -4$"], 0, "**Lesson**: $-3x < -12$. Divide by -3, flip sign -> $x > 4$.", 20, 'hard'),
            generateQuestion("Solve $4(x-1) = 3(x+2)$.", ["10", "2", "5", "7"], 0, "**Lesson**: $4x-4 = 3x+6 \\Rightarrow x = 10$.", 20, 'hard'),
            generateQuestion("Expand and simplify $(x+3)(x-2) - x^2$.", ["$x-6$", "$x+6$", "$-x-6$", "$-x+6$"], 0, "$x^2+x-6 - x^2 = x-6$.", 20, 'hard'),
            generateQuestion("Solve $10 - 2x \\ge 16$.", ["$x \\le -3$", "$x \\ge -3$", "$x \\le 3$", "$x \\ge 3$"], 0, "$-2x \\ge 6 \\Rightarrow x \\le -3$.", 20, 'hard'),
            generateQuestion("Make y the subject: $2x + 3y = 6$.", ["$y = (6-2x)/3$", "$y = 2-2x$", "$y = 6-2x/3$", "$y = (2x-6)/3$"], 0, "Isolate y.", 20, 'hard'),
            generateQuestion("Solve $x/2 + x/3 = 5$.", ["6", "5", "1", "10"], 0, "Multiply by 6: $3x + 2x = 30 \\Rightarrow 5x=30 \\Rightarrow x=6$.", 20, 'hard'),
            generateQuestion("If $3^{x-1} = 27$, find $x$.", ["4", "3", "2", "5"], 0, "$3^3 = 27$, so $x-1 = 3 \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Solve $3(2-x) = -x + 10$.", ["-2", "2", "-4", "4"], 0, "$6-3x = -x+10 \\Rightarrow -2x = 4$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - 9}{x+3}$.", ["$x-3$", "$x+3$", "$x-9$", "1"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("[Interleaved] Find the gradient of line passing through (0,0) and (2,4).", ["2", "4", "0", "0"], 0, "Functions link.", 10, 'expert')
        ]
    },
    'g3-s1-funcs': {
        learning: [
            // Easy (1-10)
            generateQuestion("Where does the line $y = 2x - 5$ cross the vertical y-axis?", ["2", "-5", "5", "x"], 1, "**Lesson**: In $y=mx+c$, the $c$ value (-5) is our starting intercept on the y-axis.", 10, 'easy'),
            generateQuestion("What is the steepness (gradient) of the path $y = 3x + 1$?", ["3", "1", "x", "y"], 0, "**Lesson**: The number 3 sitting next to $x$ tells us exactly how steep the line is.", 10, 'easy'),
            generateQuestion("Find gradient of $y = -x + 4$.", ["-1", "1", "4", "0"], 0, "The coefficient of x is -1.", 10, 'easy'),
            generateQuestion("If $y = 5x$, what is the y-intercept?", ["5", "0", "1", "x"], 1, "There is no constant, so c=0.", 10, 'easy'),
            generateQuestion("Does (1,3) lie on $y = x + 2$?", ["Yes", "No"], 0, "3 = 1 + 2.", 10, 'easy'),
            generateQuestion("A horizontal line has a gradient of...", ["1", "0", "Undefined", "-1"], 1, "No rise means 0 steepness.", 10, 'easy'),
            generateQuestion("Which axis is horizontal?", ["x-axis", "y-axis", "z-axis", "none"], 0, "x runs left-right.", 10, 'easy'),
            generateQuestion("What is the y-coordinate of (4, 7)?", ["4", "7", "0", "11"], 1, "Coordinates are (x, y).", 10, 'easy'),
            generateQuestion("Gradient of $y = 10 - 2x$?", ["10", "-2", "2", "0"], 1, "The number with x is -2.", 10, 'easy'),
            generateQuestion("Which is steeper: $y = 2x$ or $y = 5x$?", ["$y = 5x$", "$y = 2x$"], 0, "Higher gradient = steeper.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Which coordinate point lies on the line $y = x + 4$?", ["(0, 0)", "(1, 4)", "(2, 6)", "(3, 8)"], 2, "**Lesson**: If we plug $x=2$ in, $y = 2+4=6$, so (2,6) fits perfectly.", 15, 'medium'),
            generateQuestion("Find the gradient passing through (1,2) and (3,8).", ["2", "3", "4", "6"], 1, "**Lesson**: $\\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$. Rise over run!", 15, 'medium'),
            generateQuestion("Gradient between (0,5) and (2,1)?", ["2", "-2", "3", "-4"], 1, "(1 - 5) / (2 - 0) = -4 / 2 = -2.", 15, 'medium'),
            generateQuestion("Line passes through (0,2) with gradient 3. Equation?", ["$y=2x+3$", "$y=3x+2$", "$y=3x$", "$y=x+2$"], 1, "m=3, c=2.", 15, 'medium'),
            generateQuestion("Graph $y = 4$ is a...", ["Horizontal line", "Vertical line", "Diagonal line", "Curve"], 0, "y is always 4, no matter x.", 15, 'medium'),
            generateQuestion("Find x-intercept of $y = 2x - 6$.", ["6", "-3", "3", "0"], 2, "Set y=0: $0 = 2x-6 \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Are $y=2x$ and $y=2x+5$ parallel?", ["Yes", "No"], 0, "Parallel lines have the exact same gradient.", 15, 'medium'),
            generateQuestion("Line runs through origin and (2,10). Gradient?", ["5", "10", "2", "8"], 0, "(10-0)/(2-0) = 5.", 15, 'medium'),
            generateQuestion("Find y-intercept of $2y = 4x + 8$.", ["8", "4", "2", "6"], 1, "Divide by 2: $y = 2x + 4$.", 15, 'medium'),
            generateQuestion("A vertical line has a gradient of...", ["0", "1", "100", "Undefined"], 3, "Infinite steepness.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Line $L$ has gradient 2 and passes (1, 5). Find equation.", ["$y=2x+5$", "$y=2x+3$", "$y=x+5$", "$y=3x+2$"], 1, "**Lesson**: $y-5 = 2(x-1) \\Rightarrow y = 2x+3$.", 20, 'hard'),
            generateQuestion("Find equation of line through (1,1) and (3,7).", ["$y=3x-2$", "$y=2x+1$", "$y=4x-3$", "$y=3x$"], 0, "m=(7-1)/(3-1) = 3. $y-1 = 3(x-1) \\Rightarrow y=3x-2$.", 20, 'hard'),
            generateQuestion("Are $2y = 4x+1$ and $y = 2x-5$ parallel?", ["Yes", "No"], 0, "Divide first by 2 -> gradient is 2. Yes they match.", 20, 'hard'),
            generateQuestion("If (k, 9) lies on $y = 4x - 3$, find k.", ["12", "3", "2", "4"], 1, "$9 = 4k - 3 \\Rightarrow 12 = 4k \\Rightarrow k = 3$.", 20, 'hard'),
            generateQuestion("Find the x-intercept of $3x + 2y = 12$.", ["4", "6", "12", "3"], 0, "Set y=0: $3x=12 \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Line crosses y-axis at (0,4) and x-axis at (2,0). Equation?", ["$y=-2x+4$", "$y=2x+4$", "$y=-0.5x+4$", "$y=4x$"], 0, "m=(0-4)/(2-0) = -2. Intercept=4.", 20, 'hard'),
            generateQuestion("Rewrite $y - 3x = 5$ in standard form $y=mx+c$.", ["$y = -3x+5$", "$y = 3x+5$", "$y = 3x-5$", "$y = 5-3x$"], 1, "Add 3x to both sides.", 20, 'hard'),
            generateQuestion("A graph shows cost = $20 + $5/km. Gradient is?", ["20", "5", "25", "15"], 1, "The rate of change is 5.", 20, 'hard'),
            generateQuestion("Find gradient between (-2, -5) and (4, 7).", ["12", "6", "2", "0.5"], 2, "(7 - -5) / (4 - -2) = 12 / 6 = 2.", 20, 'hard'),
            generateQuestion("[Interleaved] Which geometric shape has 3 sides?", ["Square", "Circle", "Triangle", "Hexagon"], 2, "Geometry link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Find y-intercept of $y = x - 10$.", ["10", "-10", "1", "0"], 1, "**Lesson**: The constant is -10.", 10, 'easy'),
            generateQuestion("Find gradient of $y = -5x$.", ["5", "-5", "0", "x"], 1, "The coefficient of x.", 10, 'easy'),
            generateQuestion("Does (0,-2) lie on $y = x - 2$?", ["Yes", "No"], 0, "-2 = 0 - 2.", 10, 'easy'),
            generateQuestion("Gradient of a line falling from left to right?", ["Positive", "Negative", "Zero", "Undefined"], 1, "Going down means negative rise.", 10, 'easy'),
            generateQuestion("Which axis is vertical?", ["x-axis", "y-axis", "z-axis", "none"], 1, "y goes up and down.", 10, 'easy'),
            generateQuestion("What is the x-coordinate of (8, 2)?", ["8", "2", "6", "10"], 0, "First number is x.", 10, 'easy'),
            generateQuestion("Gradient of $y = 3 + x$? ", ["3", "1", "0", "x"], 1, "x means 1x.", 10, 'easy'),
            generateQuestion("Which is flatter: $y = x$ or $y = 0.5x$?", ["$y = x$", "$y = 0.5x$"], 1, "0.5 is closer to 0 (flat).", 10, 'easy'),
            generateQuestion("Equation of the x-axis?", ["$y=0$", "$x=0$", "$y=x$", "$y=1$"], 0, "Every point on x-axis has y=0.", 10, 'easy'),
            generateQuestion("Equation of the y-axis?", ["$x=0$", "$y=0$", "$x=y$", "$x=1$"], 0, "Every point on y-axis has x=0.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Gradient between (2,4) and (5,10)?", ["2", "6", "3", "4"], 0, "**Lesson**: (10-4)/(5-2) = 6/3 = 2.", 15, 'medium'),
            generateQuestion("Equation with m=-1, c=5.", ["$y=5x-1$", "$y=x+5$", "$y=-x+5$", "$y=5-x$ (both c and d)"], 3, "y=-x+5", 15, 'medium'),
            generateQuestion("Graph $x = -2$ is a...", ["Horizontal line", "Vertical line", "Diagonal line", "Curve"], 1, "x is always -2, up and down.", 15, 'medium'),
            generateQuestion("Find y-intercept of $3y = 9x - 12$.", ["-12", "9", "-4", "3"], 2, "Divide by 3: $y = 3x - 4$.", 15, 'medium'),
            generateQuestion("Are $y=3x+1$ and $y=-3x+1$ parallel?", ["Yes", "No"], 1, "Gradients 3 and -3 are not equal.", 15, 'medium'),
            generateQuestion("Gradient of line passing origin and (-2, -8)?", ["4", "-4", "16", "-16"], 0, "(-8-0) / (-2-0) = -8/-2 = 4.", 15, 'medium'),
            generateQuestion("Find x-intercept of $y = -x + 5$.", ["-5", "5", "0", "1"], 1, "0 = -x + 5 -> x=5.", 15, 'medium'),
            generateQuestion("If (2, y) lies on $y = 3x - 1$, find y.", ["5", "6", "7", "8"], 0, "y = 3(2) - 1 = 5.", 15, 'medium'),
            generateQuestion("Rewrite $y + 2x = 7$ in standard form.", ["$y=2x+7$", "$y=-2x+7$", "$y=7x-2$", "$y=x+7$"], 1, "Subtract 2x from both sides.", 15, 'medium'),
            generateQuestion("Line goes down 4 units for every 2 across. Gradient?", ["-2", "2", "-4", "-0.5"], 0, "Rise = -4, Run = 2. -4/2 = -2.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find equation of line through (0,2) and (4,14).", ["$y=3x+2$", "$y=4x+14$", "$y=3x+14$", "$y=4x+2$"], 0, "**Lesson**: m=(14-2)/(4-0)=3. Intercept is 2.", 20, 'hard'),
            generateQuestion("Line has gradient -0.5 and passes (4, 1). Equation?", ["$y = -0.5x+3$", "$y = -0.5x+1$", "$y = -0.5x-1$", "$y = 0.5x+2$"], 0, "1 = -0.5(4) + c -> 1 = -2 + c -> c=3.", 20, 'hard'),
            generateQuestion("Find y-intercept of $4x - 2y = 10$.", ["-5", "5", "10", "2.5"], 0, "Set x=0 -> -2y = 10 -> y=-5.", 20, 'hard'),
            generateQuestion("Are $y=0.5x$ and $2y=x+4$ parallel?", ["Yes", "No"], 0, "Second is y = 0.5x + 2. Gradients match.", 20, 'hard'),
            generateQuestion("Find gradient between (-3, 6) and (1, -2).", ["-2", "2", "-0.5", "0.5"], 0, "(-2-6) / (1 - -3) = -8 / 4 = -2.", 20, 'hard'),
            generateQuestion("If (p, p) lies on $y = 2x - 5$. Find p.", ["5", "-5", "2", "3"], 0, "p = 2p - 5 -> p=5.", 20, 'hard'),
            generateQuestion("Line L crosses x-axis at -3. Gradient is 2. y-intercept?", ["6", "-6", "3", "-3"], 0, "Passes (-3,0). 0 = 2(-3) + c -> 0 = -6 + c -> c=6.", 20, 'hard'),
            generateQuestion("Tank starts with 50L. Loses 2L/min. Equation for volume V?", ["$V = 50 - 2t$", "$V = 50 + 2t$", "$V = 2 - 50t$", "$V = 50t - 2$"], 0, "Start at 50, drop by 2 each unit t.", 20, 'hard'),
            generateQuestion("Gradient of line $x+y = 100$?", ["-1", "1", "100", "0"], 0, "y = -x + 100.", 20, 'hard'),
            generateQuestion("[Interleaved] Which geometric shape has 4 sides?", ["Triangle", "Pentagon", "Quadrilateral", "Hexagon"], 2, "Geometry link.", 10, 'expert')
        ]
    },
    'g3-s1-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Are alternate 'Z' angles always equal for parallel lines?", ["Yes", "No", "Only if $90^\\circ$", "They sum to $180^\\circ$"], 0, "**Lesson**: Alternate angles between parallel lines are perfectly equal.", 10, 'easy'),
            generateQuestion("Angles on a straight line add up to...", ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], 1, "A straight line is a half-turn.", 10, 'easy'),
            generateQuestion("Corresponding 'F' angles are...", ["Equal", "Add to 180", "Add to 90", "Different"], 0, "They are perfectly matching.", 10, 'easy'),
            generateQuestion("Interior 'C' angles add up to...", ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$", "Are equal"], 1, "They are supplementary.", 10, 'easy'),
            generateQuestion("Angles around a single point add to...", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"], 1, "A full circle.", 10, 'easy'),
            generateQuestion("Area of a rectangle?", ["$L-W$", "$2L+2W$", "$L \\times W$", "$L/W$"], 2, "Length times Width.", 10, 'easy'),
            generateQuestion("Sum of angles in any triangle?", ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$", "$270^\\circ$"], 1, "Every triangle holds 180 degrees.", 10, 'easy'),
            generateQuestion("Volume of a cuboid?", ["$L+W+H$", "$L \\times W \\times H$", "$2(LW + WH + HL)$", "$LWH/3$"], 1, "Multiply all three dimensions.", 10, 'easy'),
            generateQuestion("Vertically opposite angles are...", ["Always equal", "Add to 180", "Add to 90", "Never equal"], 0, "The 'X' shape means they mirror each other.", 10, 'easy'),
            generateQuestion("Area of a triangle?", ["$b \\times h$", "$1/2 b \\times h$", "$2 b \\times h$", "$b+h$"], 1, "Half base times height.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Area of a trapezium with parallel walls 4 and 6, and a height of 5.", ["20", "24", "25", "50"], 2, "**Lesson**: $\\frac{1}{2}(4+6) \\times 5 = 25$. You've averaged the walls beautifully.", 15, 'medium'),
            generateQuestion("Volume of any uniform Prism?", ["Base Area $\\times$ Height", "$\\frac{1}{2}$ Base $\\times$ Height", "$\\pi r^2 h$", "Length $\\times$ Width"], 0, "**Lesson**: You simply multiply the floor area by how high the prism rises.", 15, 'medium'),
            generateQuestion("Find volume of prism: Base Area=10, Height=8.", ["80", "40", "18", "160"], 0, "10 * 8 = 80.", 15, 'medium'),
            generateQuestion("Area of circle with radius 3? (Leave mostly in terms of $\\pi$)", ["$6\\pi$", "$9\\pi$", "$3\\pi$", "$12\\pi$"], 1, "$\\pi r^2 = 9\\pi$.", 15, 'medium'),
            generateQuestion("Circumference of circle with diameter 10?", ["$5\\pi$", "$10\\pi$", "$100\\pi$", "$25\\pi$"], 1, "$C = \\pi D$.", 15, 'medium'),
            generateQuestion("A triangle has angles $50^\\circ$ and $60^\\circ$. Third angle?", ["$70^\\circ$", "$90^\\circ$", "$180^\\circ$", "$60^\\circ$"], 0, "180 - 50 - 60 = 70.", 15, 'medium'),
            generateQuestion("A straight line is split into x and 30. x = ?", ["60", "150", "90", "120"], 1, "180 - 30 = 150.", 15, 'medium'),
            generateQuestion("Sum of interior angles of a quadrilateral?", ["$180^\\circ$", "$360^\\circ$", "$540^\\circ$", "$90^\\circ$"], 1, "Two triangles fit inside.", 15, 'medium'),
            generateQuestion("Area of parallelogram, base 8, height 4.", ["32", "16", "12", "64"], 0, "Area = base * perpendicular height.", 15, 'medium'),
            generateQuestion("If an isosceles triangle has one angle of $100^\\circ$, find a base angle.", ["$40^\\circ$", "$80^\\circ$", "$50^\\circ$", "$100^\\circ$"], 0, "(180-100)/2 = 40.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Volume of a cylinder with radius 3 and height 10. (Use $\\pi \\approx 3.14$)", ["282.6", "94.2", "188.4", "942"], 0, "**Lesson**: $\\pi \\times 3^2 \\times 10 = 282.6$. That's a lot of space!", 20, 'hard'),
            generateQuestion("Sum of interior angles of a pentagon?", ["$360^\\circ$", "$540^\\circ$", "$720^\\circ$", "$900^\\circ$"], 1, "(n-2) * 180 -> 3 * 180 = 540.", 20, 'hard'),
            generateQuestion("Each interior angle of a regular hexagon?", ["$120^\\circ$", "$108^\\circ$", "$135^\\circ$", "$150^\\circ$"], 0, "Sum=720. 720/6 = 120.", 20, 'hard'),
            generateQuestion("Curved surface area of cylinder radius 2, height 5.", ["$20\\pi$", "$10\\pi$", "$40\\pi$", "$2\\pi$"], 0, "$2\\pi r h = 20\\pi$.", 20, 'hard'),
            generateQuestion("Area of semicircle radius 4?", ["$16\\pi$", "$8\\pi$", "$4\\pi$", "$12\\pi$"], 1, "Half of $16\\pi$.", 20, 'hard'),
            generateQuestion("A prism holds 300cm^3. Height is 15cm. Base area?", ["20", "10", "4500", "50"], 0, "Area = 300 / 15 = 20.", 20, 'hard'),
            generateQuestion("Perimeter of semicircle radius 5?", ["$5\\pi + 10$", "$5\\pi$", "$10\\pi$", "$2.5\\pi$"], 0, "Arc length + straight edge = $5\\pi + 10$.", 20, 'hard'),
            generateQuestion("Each exterior angle of a regular octagon?", ["$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$36^\\circ$"], 0, "360 / 8 = 45.", 20, 'hard'),
            generateQuestion("Line joining 2 parallel lines cuts them. Alternate angle is $3x$, other is $120$. Find $x$.", ["40", "30", "60", "20"], 0, "3x = 120, so x = 40.", 20, 'hard'),
            generateQuestion("[Interleaved] What is the mean of 2, 4, 6?", ["2", "4", "6", "12"], 1, "Stats link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Two angles on a straight line are supplementary. What does that mean?", ["Sum to $90^\\circ$", "Sum to $180^\\circ$", "Are equal", "Sum to $360^\\circ$"], 1, "**Lesson**: Supplementary means adding to 180.", 10, 'easy'),
            generateQuestion("A right angle is exactly...", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "$0^\\circ$"], 0, "**Lesson**: The corner of a square.", 10, 'easy'),
            generateQuestion("Complementary angles add to...", ["$180^\\circ$", "$360^\\circ$", "$90^\\circ$", "$100^\\circ$"], 2, "Angles that make a right angle.", 10, 'easy'),
            generateQuestion("Perimeter of a square with side 5?", ["20", "25", "10", "15"], 0, "5+5+5+5.", 10, 'easy'),
            generateQuestion("Area of a square with side 6?", ["24", "36", "12", "18"], 1, "6 x 6.", 10, 'easy'),
            generateQuestion("Volume of a cube with side 3?", ["9", "27", "18", "6"], 1, "3 x 3 x 3.", 10, 'easy'),
            generateQuestion("Angles around a point sum to...", ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], 3, "A full circle.", 10, 'easy'),
            generateQuestion("Equivalent of 'C' angles?", ["Interior", "Alternate", "Corresponding", "Opposite"], 0, "They are interior angles.", 10, 'easy'),
            generateQuestion("Equivalent of 'Z' angles?", ["Alternate", "Corresponding", "Interior", "Straight"], 0, "They are alternate angles.", 10, 'easy'),
            generateQuestion("Equivalent of 'F' angles?", ["Corresponding", "Alternate", "Interior", "Opposite"], 0, "They are corresponding.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find volume of prism: Base 12, Height 5.", ["60", "30", "17", "120"], 0, "**Lesson**: Base area x Height = 60.", 15, 'medium'),
            generateQuestion("Find area of a trapezium: parallel sides 2 and 4, height 3.", ["9", "18", "6", "12"], 0, "**Lesson**: 0.5(2+4)*3 = 9.", 15, 'medium'),
            generateQuestion("Triangle with angles 80, 20. Third angle?", ["$80^\\circ$", "$100^\\circ$", "$60^\\circ$", "$90^\\circ$"], 0, "180 - 100 = 80.", 15, 'medium'),
            generateQuestion("Straight line has angles $2x$ and $x$. Size of $x$?", ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "3x = 180 -> x=60.", 15, 'medium'),
            generateQuestion("Area of circle diameter 10? (Leave $\\pi$)", ["$25\\pi$", "$100\\pi$", "$10\\pi$", "$5\\pi$"], 0, "r=5 -> $25\\pi$.", 15, 'medium'),
            generateQuestion("Rectangle length 8, diagonal 10. Width?", ["6", "12", "2", "8"], 0, "Pythagoras: $\\sqrt{10^2 - 8^2} = 6$.", 15, 'medium'),
            generateQuestion("Interior 'C' angles between parallel lines are 120 and y. y=?", ["$60^\\circ$", "$120^\\circ$", "$90^\\circ$", "$180^\\circ$"], 0, "180 - 120 = 60.", 15, 'medium'),
            generateQuestion("An equilateral triangle has angles of...", ["$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$180^\\circ$"], 0, "180/3 = 60.", 15, 'medium'),
            generateQuestion("Area of parallelogram: base 5, height 10.", ["50", "25", "15", "100"], 0, "5 * 10.", 15, 'medium'),
            generateQuestion("Volume of a cuboid 2 by 3 by 4?", ["24", "9", "14", "48"], 0, "2 * 3 * 4 = 24.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Find total surface area of closed cylinder $r=3, h=4$.", ["$42\\pi$", "$24\\pi$", "$18\\pi$", "$30\\pi$"], 0, "**Lesson**: $2\\pi r h + 2\\pi r^2 = 24\\pi + 18\\pi = 42\\pi$.", 20, 'hard'),
            generateQuestion("Sum of exterior angles of any convex polygon is...", ["$360^\\circ$", "$180^\\circ$", "$540^\\circ$", "$720^\\circ$"], 0, "**Lesson**: Exterior angles always sum to 360.", 20, 'hard'),
            generateQuestion("If an interior angle of regular polygon is $144^\\circ$, how many sides?", ["10", "8", "12", "6"], 0, "Exterior is 36. 360/36 = 10.", 20, 'hard'),
            generateQuestion("Volume of triangular prism: Triangle base 4, height 3, length 10.", ["60", "120", "30", "40"], 0, "Area = 0.5*4*3 = 6. Vol = 6*10=60.", 20, 'hard'),
            generateQuestion("Cross-section area is 15. Volume is 45. Find length.", ["3", "30", "675", "15"], 0, "45 / 15 = 3.", 20, 'hard'),
            generateQuestion("Composite form: cube of side 2 on top of cube of side 3. Total volume?", ["35", "13", "27", "8"], 0, "8 + 27 = 35.", 20, 'hard'),
            generateQuestion("A quadrant (quarter circle) radius 6. Area?", ["$9\\pi$", "$36\\pi$", "$18\\pi$", "$12\\pi$"], 0, "36pi / 4 = 9pi.", 20, 'hard'),
            generateQuestion("An angle and its alternate are $(3x-10)$ and $(2x+20)$. Find $x$.", ["30", "10", "20", "40"], 0, "Set equal: 3x-10=2x+20 -> x=30.", 20, 'hard'),
            generateQuestion("Find volume of cylinder diam 8, height 5.", ["$80\\pi$", "$40\\pi$", "$160\\pi$", "$320\\pi$"], 0, "$r=4$. V=$16\\pi \\times 5 = 80\\pi$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which average is just throwing all the values together and dividing?", ["Mean", "Median", "Mode", "Range"], 0, "Stats link.", 10, 'expert')
        ]
    },
    'g3-s1-stats': {
        learning: [
            // Easy (1-10)
            generateQuestion("Which average represents the most 'trendy' or frequent value?", ["Mean", "Median", "Mode", "Range"], 2, "**Lesson**: The 'Mode' is the value that appears most often in the data fashion show.", 10, 'easy'),
            generateQuestion("What is the probability of rolling a '7' on a standard 6-sided die?", ["1", "1/6", "0", "1/2"], 2, "**Lesson**: It's an impossible dream, so the probability is zero.", 10, 'easy'),
            generateQuestion("Highest probability an event can have?", ["1", "100", "Infinite", "0.5"], 0, "1 means 100% absolute certainty.", 10, 'easy'),
            generateQuestion("Find the Mode: 1, 2, 2, 3.", ["2", "1", "3", "1.5"], 0, "2 appears most often.", 10, 'easy'),
            generateQuestion("What is the 'Range' of data?", ["Max - Min", "Sum / Count", "Middle number", "Most common"], 0, "The gap between highest and lowest.", 10, 'easy'),
            generateQuestion("A coin is flipped. Probability of Heads?", ["1/2", "1", "1/4", "0"], 0, "One favorable out of two possible.", 10, 'easy'),
            generateQuestion("Probability of spinning Red on a spinner with 4 equal colors?", ["1/4", "1/2", "3/4", "1"], 0, "1 out of 4.", 10, 'easy'),
            generateQuestion("Total probability of all possible outcomes equals?", ["1", "0", "100", "0.5"], 0, "It encompasses everything.", 10, 'easy'),
            generateQuestion("Which average requires adding everything up and dividing?", ["Mean", "Median", "Mode", "Range"], 0, "That is the mathematical mean.", 10, 'easy'),
            generateQuestion("Probability of an impossible event?", ["0", "1", "-1", "0.5"], 0, "It can never happen.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find the median (truest center) of: 3, 1, 4, 1, 5", ["1", "3", "4", "5"], 1, "**Lesson**: Arranged as 1, 1, 3, 4, 5, the center value is exactly 3.", 15, 'medium'),
            generateQuestion("The mean of 4 numbers is 5. What must their total sum be?", ["1.25", "9", "20", "4"], 2, "**Lesson**: If the average for 4 items is 5, the total has to be $4 \\times 5 = 20$.", 15, 'medium'),
            generateQuestion("Median of 2, 6, 8, 10?", ["6", "7", "8", "6.5"], 1, "Middle of 6 and 8 is 7.", 15, 'medium'),
            generateQuestion("A bag has 3 red and 2 blue balls. Prob of red?", ["3/5", "2/5", "1/3", "1/2"], 0, "3 red out of 5 total.", 15, 'medium'),
            generateQuestion("Range of 2, 9, 3, 8?", ["7", "6", "2", "3"], 0, "9 - 2 = 7.", 15, 'medium'),
            generateQuestion("If P(rain) = 0.3, find P(no rain).", ["0.7", "0.3", "0", "1"], 0, "1 - 0.3 = 0.7.", 15, 'medium'),
            generateQuestion("Mean of 2, 4, 6?", ["4", "3", "5", "12"], 0, "12 / 3 = 4.", 15, 'medium'),
            generateQuestion("Prob of picking an Ace from a deck of 52 cards?", ["4/52", "1/13", "Both a and b", "1/52"], 2, "There are 4 Aces. 4/52 simplifies to 1/13.", 15, 'medium'),
            generateQuestion("A die is rolled. Prob of an even number?", ["1/2", "1/3", "1/6", "1"], 0, "Rolls 2, 4, 6. Total 3 out of 6.", 15, 'medium'),
            generateQuestion("If sum is 50 and mean is 10. How many numbers?", ["5", "500", "40", "10"], 0, "50 / Count = 10 -> Count = 5.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Three numbers have mean 10. A fourth number is 18. New mean?", ["12", "14", "10", "28"], 0, "**Lesson**: Old sum = 30. New sum = 48. New mean = 48/4 = 12.", 20, 'hard'),
            generateQuestion("Data set: 2, 4, x, 8. Mean is 5. Find x.", ["6", "5", "4", "7"], 0, "Sum must be 20. 2+4+8 = 14. x = 6.", 20, 'hard'),
            generateQuestion("Given the frequencies of scores 1 to 3 are 2, 5, 3. Find mean.", ["2.1", "2.0", "2.5", "1.5"], 0, "Sum = 1(2)+2(5)+3(3) = 21. Total freq = 10. Mean = 2.1.", 20, 'hard'),
            generateQuestion("If median of sorted data 2, x, 8 is 5. Find x.", ["5", "4", "6", "3"], 0, "Since it is already sorted length 3, the middle is x=5.", 20, 'hard'),
            generateQuestion("Cards 1 to 10. Prob of picking a prime number?", ["4/10", "3/10", "5/10", "2/10"], 0, "Primes: 2,3,5,7. = 4/10.", 20, 'hard'),
            generateQuestion("Spin a coin twice. Prob of getting 2 Heads?", ["1/4", "1/2", "3/4", "1"], 0, "H-H is 1 out of 4 outcomes.", 20, 'hard'),
            generateQuestion("A die is biased. P(6)=0.3. If rolled 100 times, expect how many 6s?", ["30", "16", "50", "20"], 0, "100 * 0.3 = 30.", 20, 'hard'),
            generateQuestion("A class has 10 boys with mean 60, 20 girls with mean 75. Overall mean?", ["70", "67.5", "75", "135"], 0, "(600+1500)/30 = 2100/30 = 70.", 20, 'hard'),
            generateQuestion("A letter is chosen from 'STATISTICS'. Prob it's 'T'?", ["3/10", "2/10", "1/10", "4/10"], 0, "3 T's out of 10 letters.", 20, 'hard'),
            generateQuestion("[Interleaved] Factorise $x^2 + 2x + 1$.", ["$(x+1)^2$", "$(x-1)^2$", "$(x+2)(x+1)$", "$(x+1)(x-1)$"], 0, "Sec 2 preview.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Which average is found by picking the middle element of a sorted list?", ["Median", "Mean", "Mode", "Range"], 0, "**Lesson**: Median literally means the middle.", 10, 'easy'),
            generateQuestion("Prob of rolling a number < 7 on a 6-sided die?", ["1", "0", "1/6", "5/6"], 0, "**Lesson**: An absolute certainty always has a probability of 1.", 10, 'easy'),
            generateQuestion("Find Range of 10, 20, 30.", ["20", "10", "30", "0"], 0, "30 - 10 = 20.", 10, 'easy'),
            generateQuestion("Find Mean of 1, 3, 5.", ["3", "1", "5", "9"], 0, "9 / 3 = 3.", 10, 'easy'),
            generateQuestion("Lowest possible probability?", ["0", "-1", "0.1", "1"], 0, "Cannot be less than 0.", 10, 'easy'),
            generateQuestion("If a spinner has 5 parts and 1 is green. Prob(green)?", ["1/5", "1/4", "4/5", "0.5"], 0, "1 out of 5.", 10, 'easy'),
            generateQuestion("Which of these represents 'Even Chance'?", ["0.5", "0", "1", "0.9"], 0, "Half and half.", 10, 'easy'),
            generateQuestion("What is the mode of 7, 7, 8, 9?", ["7", "8", "9", "No mode"], 0, "7 appears twice.", 10, 'easy'),
            generateQuestion("Does adding an outlier heavily affect the median?", ["No", "Yes"], 0, "Median is resistant to outliers.", 10, 'easy'),
            generateQuestion("Find median of 10, 11, 12.", ["11", "10", "12", "10.5"], 0, "The number in the center is 11.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Median of 1, 9, 3, 5?", ["4", "3", "5", "4.5"], 0, "**Lesson**: Sort it first: 1, 3, 5, 9. Middle is (3+5)/2 = 4.", 15, 'medium'),
            generateQuestion("If P(win) = 2/5, and P(draw) = 1/5. Prob of losing?", ["2/5", "3/5", "1/5", "0"], 0, "1 - 2/5 - 1/5 = 2/5.", 15, 'medium'),
            generateQuestion("Mean length of 2 snakes is 2 meters. If one is 3m, the other is?", ["1m", "2m", "0m", "4m"], 0, "Total sum = 4. 4 - 3 = 1m.", 15, 'medium'),
            generateQuestion("Draw 1 card. Prob of a Heart?", ["1/4", "1/13", "1/2", "13/54"], 0, "13 hearts out of 52 = 1/4.", 15, 'medium'),
            generateQuestion("Range of -5, 0, 5?", ["10", "5", "0", "-10"], 0, "Max is 5, Min is -5. 5 - (-5) = 10.", 15, 'medium'),
            generateQuestion("Find mode: 2, 4, 4, 6, 6, 6, 8.", ["6", "4", "8", "2"], 0, "6 appears three times.", 15, 'medium'),
            generateQuestion("Prob of not picking a vowel from 'A, B, C'?", ["2/3", "1/3", "1", "0"], 0, "B and C are consonants. 2 out of 3.", 15, 'medium'),
            generateQuestion("Mean of 0, 0, 0, 4?", ["1", "0", "4", "2"], 0, "Sum is 4. Items = 4. 4/4 = 1.", 15, 'medium'),
            generateQuestion("Is it possible for P(A) to be 1.2?", ["No", "Yes"], 0, "Probabilities cap at 1.0 (100%).", 15, 'medium'),
            generateQuestion("Average of 1.5 and 2.5?", ["2.0", "4.0", "1.0", "3.0"], 0, "4.0 / 2 = 2.0.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Four people have mean weight 50kg. A 60kg person joins. New mean?", ["52", "55", "50", "110"], 0, "**Lesson**: Total = 200kg + 60kg = 260kg. 260/5 = 52.", 20, 'hard'),
            generateQuestion("P(A) = 0.4. P(B) = 0.5. If independent, P(A and B)?", ["0.2", "0.9", "0.1", "0.4"], 0, "0.4 x 0.5 = 0.20.", 20, 'hard'),
            generateQuestion("Freq Table: Score 1 (freq 3), Score 2 (freq 2). Find mean.", ["1.4", "1.5", "1.6", "1.0"], 0, "(3 + 4) / 5 = 7/5 = 1.4.", 20, 'hard'),
            generateQuestion("Data set: 10, y, 14. If median is 12 and x < y < 14, y=?", ["12", "11", "13", "10"], 0, "The middle item is y. It must be 12.", 20, 'hard'),
            generateQuestion("Cards 1 to 5. Prob of picking an odd number AND then a 2 (with replacement)?", ["3/25", "3/5", "1/5", "4/25"], 0, "(3/5) x (1/5) = 3/25.", 20, 'hard'),
            generateQuestion("Coin tossed 3 times. Prob of all Heads?", ["1/8", "1/4", "3/8", "1/2"], 0, "1/2 * 1/2 * 1/2 = 1/8.", 20, 'hard'),
            generateQuestion("A biased spinner has P(Red)=x, P(Blue)=2x. Find P(Blue).", ["2/3", "1/3", "1", "0.5"], 0, "x + 2x = 1 -> x=1/3. Blue = 2/3.", 20, 'hard'),
            generateQuestion("Two groups: A (20 people, mean 5) and B (x people, mean 8). Combined mean 6. Find x.", ["10", "20", "5", "15"], 0, "100 + 8x = 6(20+x) -> 100+8x = 120+6x -> 2x=20 -> x=10.", 20, 'hard'),
            generateQuestion("Bag has 5 red, x blue. P(red) = 1/3. Find x.", ["10", "15", "5", "20"], 0, "5 / (5+x) = 1/3 -> 15 = 5+x -> x=10.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+2)(x+3)$.", ["$x^2+5x+6$", "$x^2+6$", "$x^2+5x+5$", "$2x+5$"], 0, "Sec 2 preview.", 10, 'expert')
        ]
    },
    // --- Sec 2 G3 ---
    'g3-s2-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Factorise the expression $x^2 - 25$.", ["$(x-5)(x-5)$", "$(x-5)(x+5)$", "$x(x-25)$", "Cannot be factorised"], 1, "**Lesson**: Use the Difference of Two Squares: $a^2 - b^2 = (a-b)(a+b)$.", 10, 'easy'),
            generateQuestion("Expand the brackets $3(2x - 4)$.", ["$6x - 4$", "$5x - 7$", "$6x - 12$", "$6x + 12$"], 2, "**Lesson**: The 3 must be distributed to both terms inside the bracket.", 10, 'easy'),
            generateQuestion("Factorise $2x + 6$.", ["$2(x+3)$", "$2(x+6)$", "$x+3$", "$2x+3$"], 0, "Pull out the common factor of 2.", 10, 'easy'),
            generateQuestion("Expand $x(x-1)$.", ["$x^2-1$", "$x^2-x$", "$2x-1$", "$x^2-x^2$"], 1, "$x \\times x = x^2$.", 10, 'easy'),
            generateQuestion("Factorise $y^2 + 3y$.", ["$y(y+3)$", "$y+3$", "$y(y+1)$", "Cannot be factored"], 0, "y is the common factor.", 10, 'easy'),
            generateQuestion("Difference of two squares form?", ["$(a+b)^2$", "$a^2-b^2$", "$(a-b)^2$", "$a^2+b^2$"], 1, "$a^2 - b^2$ is the special form.", 10, 'easy'),
            generateQuestion("Expand $(x+1)(x+1)$.", ["$x^2+1$", "$x^2+2x+1$", "$x^2+x+1$", "$2x+2$"], 1, "FOIL: First, Outer, Inner, Last.", 10, 'easy'),
            generateQuestion("Factorise $4x - 10$.", ["$4(x-2.5)$", "$2(2x-5)$", "$2(x-5)$", "Cannot be factorised"], 1, "2 is the highest common factor.", 10, 'easy'),
            generateQuestion("Simplify fraction: $4x / 2$.", ["$2x$", "$4$", "$x$", "$2$"], 0, "4 divided by 2 is 2.", 10, 'easy'),
            generateQuestion("Simplify fraction: $(x+1)/(x+1)$.", ["$0$", "$1$", "$x$", "Undefined"], 1, "Any non-zero expression divided by itself is 1.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Factorise completely: $2x^2 + 8x$.", ["$2(x^2 + 4x)$", "$x(2x + 8)$", "$2x(x + 4)$", "$4x(x/2 + 2)$"], 2, "**Lesson**: Extract the Highest Common Factor (2x), leaving $(x+4)$.", 15, 'medium'),
            generateQuestion("Factorise $x^2 - 49$.", ["$(x-7)^2$", "$(x-7)(x+7)$", "$(x+7)^2$", "$x(x-49)$"], 1, "$49 = 7^2$, so Difference of Squares.", 15, 'medium'),
            generateQuestion("Expand $(x+3)(x-2)$.", ["$x^2+x-6$", "$x^2-6$", "$x^2-x-6$", "$x^2+5x-6$"], 0, "$x^2 - 2x + 3x - 6$.", 15, 'medium'),
            generateQuestion("Factorise $3y^2 - 12y$.", ["$3y(y-4)$", "$3(y^2-4y)$", "$y(3y-12)$", "Cannot"], 0, "3y is the HCF.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x^2 - 16}{x - 4}$.", ["$x+4$", "$x-4$", "4", "1"], 0, "Numerator is $(x-4)(x+4)$. Cancel the $(x-4)$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{5x+10}{5}$.", ["$x+2$", "$x+10$", "$5x+2$", "$x$"], 0, "Factor out 5 on top.", 15, 'medium'),
            generateQuestion("Expand $(2x+1)(x-4)$.", ["$2x^2-7x-4$", "$2x^2-4$", "$2x^2-8x-4$", "$2x^2+7x-4$"], 0, "$2x^2 - 8x + x - 4$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x^2+3x}{x}$.", ["$x+3$", "$x^2+3$", "$3x$", "$1+3x$"], 0, "Factor x on top and cancel.", 15, 'medium'),
            generateQuestion("Add fractions: $\\frac{1}{x} + \\frac{1}{y}$.", ["$\\frac{2}{x+y}$", "$\\frac{x+y}{xy}$", "$\\frac{1}{xy}$", "$\\frac{xy}{x+y}$"], 1, "Common denominator is xy.", 15, 'medium'),
            generateQuestion("Multiply fractions: $\\frac{2}{x} \\times \\frac{x}{4}$.", ["$\\frac{1}{2}$", "$\\frac{8}{x^2}$", "$\\frac{2x}{4x}$", "$\\frac{1}{4}$"], 0, "The x's cancel, $2/4 = 1/2$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Factorise by grouping $ax + ay + 2x + 2y$.", ["$(a+2)(x+y)$", "$a(x+y+2)$", "$2(ax+ay)$", "$(a+x)(2+y)$"], 0, "**Lesson**: Group pairs to find common $(x+y)$ bracket.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - 9}{x^2 + 3x}$.", ["$\\frac{x-3}{x}$", "$\\frac{x+3}{x}$", "$-3/3x$", "$1$"], 0, "$(x-3)(x+3) / x(x+3)$. Cancel $(x+3)$.", 20, 'hard'),
            generateQuestion("Factorise $x^2 - y^2$.", ["$(x-y)(x+y)$", "$(x-y)^2$", "$(x+y)^2$", "$x^2+y^2$"], 0, "Standard Difference of Two Squares.", 20, 'hard'),
            generateQuestion("Solve $\\frac{2}{x-1} = \\frac{3}{x+2}$.", ["7", "1", "4", "-1"], 0, "Cross-multiply: $2(x+2) = 3(x-1) \\Rightarrow 2x+4 = 3x-3 \\Rightarrow x=7$.", 20, 'hard'),
            generateQuestion("Factorise $2x^2 - 18$.", ["$2(x-3)(x+3)$", "$2(x-9)^2$", "$(2x-9)(2x+9)$", "$2(x-3)^2$"], 0, "Pull out 2 first: $2(x^2 - 9)$.", 20, 'hard'),
            generateQuestion("Expand $(x+y)^2 - (x-y)^2$.", ["$4xy$", "$2x^2+2y^2$", "$0$", "$2xy$"], 0, "$x^2+2xy+y^2 - (x^2-2xy+y^2) = 4xy$.", 20, 'hard'),
            generateQuestion("Add fractions: $\\frac{3}{x-2} + \\frac{2}{x-2}$.", ["$\\frac{5}{x-2}$", "$\\frac{5}{2x-4}$", "$\\frac{6}{x-2}$", "$\\frac{1}{x-2}$"], 0, "Denominators are the same.", 20, 'hard'),
            generateQuestion("Subtract fractions: $\\frac{x+1}{3} - \\frac{x-1}{2}$.", ["$\\frac{5-x}{6}$", "$\\frac{-x}{6}$", "$\\frac{x-5}{6}$", "$\\frac{1}{1}$"], 0, "Common denom 6. $2(x+1) - 3(x-1) = 2x+2 - 3x+3 = 5-x$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{ab - a}{b^2 - b}$.", ["$a/b$", "$b/a$", "$(a-1)/(b-1)$", "1"], 0, "$a(b-1) / b(b-1)$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which represents a quadratic equation?", ["$y = ax^2 + bx + c$", "$y = mx + c$", "$y = 1/x$", "$y = a^x$"], 0, "Quadratics link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Factorise $3x - 12$.", ["$3(x-4)$", "$3(x-12)$", "$x(3-12/x)$", "Cannot"], 0, "**Lesson**: Pull out the 3.", 10, 'easy'),
            generateQuestion("Difference of $16 - x^2$.", ["$(4-x)(4+x)$", "$(4-x)^2$", "$(x-4)(x+4)$", "Cannot"], 0, "**Lesson**: $16 = 4^2$.", 10, 'easy'),
            generateQuestion("Expand $4(a-2)$.", ["$4a-8$", "$4a-2$", "$a-8$", "$4a+8$"], 0, "Distribute the 4.", 10, 'easy'),
            generateQuestion("Factorise $x^2 + 5x$.", ["$x(x+5)$", "$x^2(1+5/x)$", "$(x+5)$", "Cannot"], 0, "x is common.", 10, 'easy'),
            generateQuestion("Multiply $\\frac{1}{5} \\times \\frac{1}{x}$.", ["$\\frac{1}{5x}$", "$\\frac{2}{5x}$", "$\\frac{1}{5+x}$", "$\\frac{x}{5}$"], 0, "Top times top, bottom times bottom.", 10, 'easy'),
            generateQuestion("Factorise $a^2 - 1$.", ["$(a-1)(a+1)$", "$(a-1)^2$", "$(1-a)(1+a)$", "$(a+1)^2$"], 0, "$1 = 1^2$.", 10, 'easy'),
            generateQuestion("Expand $(x-2)(x+2)$.", ["$x^2-4$", "$x^2-2x-4$", "$x^2+4$", "$x^2-4x$"], 0, "Difference of squares in reverse.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{8x}{4}$.", ["$2x$", "$4x$", "$2$", "$x$"], 0, "Divide numbers.", 10, 'easy'),
            generateQuestion("Expand $x(y+1)$.", ["$xy+x$", "$x+y+1$", "$xy+1$", "$y+x$"], 0, "X hits both y and 1.", 10, 'easy'),
            generateQuestion("Add $\\frac{x}{2} + \\frac{x}{2}$.", ["$x$", "$2x/4$", "$x^2/4$", "$2x$"], 0, "$2x / 2 = x$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Factorise completely: $5x^2 - 15x$.", ["$5x(x - 3)$", "$5(x^2 - 3x)$", "$x(5x - 15)$", "$15x(x/3 - 1)$"], 0, "**Lesson**: Highest common factor is 5x.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x^2 - 25}{x+5}$.", ["$x-5$", "$x+5$", "-5", "5"], 0, "Difference of squares, cancel $(x+5)$.", 15, 'medium'),
            generateQuestion("Expand $(x-5)^2$.", ["$x^2-10x+25$", "$x^2-25$", "$x^2+25$", "$x^2-5x+25$"], 0, "$(x-5)(x-5) = x^2 - 5x - 5x + 25$.", 15, 'medium'),
            generateQuestion("Factorise $a^2 - b^2$.", ["$(a-b)(a+b)$", "$(a-b)^2$", "$a(a-b^2/a)$", "Cannot"], 0, "Standard formula.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{4x+8}{x+2}$.", ["4", "x", "2", "8"], 0, "Factor 4 on top -> $4(x+2)/(x+2)$.", 15, 'medium'),
            generateQuestion("Add $\\frac{1}{2x} + \\frac{1}{3x}$.", ["$\\frac{5}{6x}$", "$\\frac{2}{5x}$", "$\\frac{1}{5x}$", "$\\frac{6x}{5}$"], 0, "Common denom 6x. 3/6x + 2/6x.", 15, 'medium'),
            generateQuestion("Expand $(2x-3)(2x+3)$.", ["$4x^2-9$", "$4x^2+9$", "$2x^2-9$", "$4x^2-6$"], 0, "Difference of squares.", 15, 'medium'),
            generateQuestion("Factorise $2x^2 + x$.", ["$x(2x+1)$", "Cannot", "$2x(x+1)$", "$x^2(2+1/x)$"], 0, "x is common.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{xy+xz}{x}$.", ["$y+z$", "$y+xz$", "$xy+z$", "$yz$"], 0, "Factor x and cancel.", 15, 'medium'),
            generateQuestion("Solve $\\frac{x}{3} = \\frac{2}{x}$.", ["$\\sqrt{6}$", "6", "3", "2"], 0, "Cross multiply: $x^2 = 6$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Factorise by grouping: $xy - 2x + 3y - 6$.", ["$(x+3)(y-2)$", "$(x-3)(y+2)$", "$(x+2)(y-3)$", "$(x-2)(y+3)$"], 0, "**Lesson**: Group: $x(y-2) + 3(y-2) = (x+3)(y-2)$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - y^2}{(x+y)^2}$.", ["$\\frac{x-y}{x+y}$", "$1$", "$\\frac{x+y}{x-y}$", "$-1$"], 0, "$(x-y)(x+y) / (x+y)(x+y)$.", 20, 'hard'),
            generateQuestion("Solve $1 + \\frac{1}{x} = \\frac{3}{2}$.", ["2", "3", "0.5", "1"], 0, "$1/x = 1/2 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Factorise $3x^2 - 12$.", ["$3(x-2)(x+2)$", "$3(x-4)^2$", "$(3x-6)(x+2)$", "Cannot"], 0, "$3(x^2-4) = 3(x-2)(x+2)$.", 20, 'hard'),
            generateQuestion("Subtract $\\frac{x}{2} - \\frac{x-1}{3}$.", ["$\\frac{x+2}{6}$", "$\\frac{x-2}{6}$", "$\\frac{1}{6}$", "$\\frac{2x-1}{6}$"], 0, "$\\frac{3x - 2(x-1)}{6} = \\frac{3x-2x+2}{6}$.", 20, 'hard'),
            generateQuestion("Expand $(x+1)^3$.", ["$x^3+3x^2+3x+1$", "$x^3+1$", "$x^3+3x+1$", "$x^3+x^2+x+1$"], 0, "Binomial expansion.", 20, 'hard'),
            generateQuestion("Simplify fraction: $\\frac{ax-bx}{a-b}$.", ["x", "a", "b", "-x"], 0, "$x(a-b)/(a-b) = x$.", 20, 'hard'),
            generateQuestion("Divide fractions: $\\frac{a}{b} \\div \\frac{a^2}{b}$.", ["$1/a$", "$a$", "$a^3/b^2$", "$b/a^2$"], 0, "$a/b \\times b/a^2 = 1/a$.", 20, 'hard'),
            generateQuestion("If $x+y=5$ and $x-y=3$, find $x^2-y^2$.", ["15", "8", "2", "34"], 0, "$(x-y)(x+y) = 3 \\times 5 = 15$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve for x: $x^2 = 16$.", ["$x = \\pm 4$", "$x=4$", "$x=8$", "$x=16$"], 0, "Quadratics link.", 10, 'expert')
        ]
    },
    'g3-s2-quadratics': {
        learning: [
            // Easy (1-10)
            generateQuestion("Solve $x^2 - 4x = 0$.", ["$x=4, x=0$", "$x=4$", "$x=\\pm 2$", "$x=0, x=-4$"], 0, "**Lesson**: Factorising $x(x-4)=0$ gives two values: 0 and 4.", 10, 'easy'),
            generateQuestion("What is the signature U-shape of $y = x^2$ called?", ["Parabola", "Line", "Circle", "Hyperbola"], 0, "**Lesson**: This beautiful, symmetrical curve is a Parabola.", 10, 'easy'),
            generateQuestion("If $(x-1)(x-2)=0$, what are the roots?", ["1, 2", "-1, -2", "1, -2", "-1, 2"], 0, "Set each bracket to 0.", 10, 'easy'),
            generateQuestion("Solve $x^2 = 25$.", ["$x = \\pm 5$", "$x=5$", "$x=12.5$", "$x=625$"], 0, "Both 5 and -5 square to 25.", 10, 'easy'),
            generateQuestion("The y-intercept of $y = x^2 + 3x + 2$?", ["2", "1", "3", "0"], 0, "Set x=0 -> y=2.", 10, 'easy'),
            generateQuestion("Does $y=x^2$ have a maximum or minimum point?", ["Minimum", "Maximum", "Neither", "Both"], 0, "It opens upwards like a smile.", 10, 'easy'),
            generateQuestion("Does $y=-x^2$ smile or frown?", ["Frown", "Smile"], 0, "Negative x-squared opens downwards.", 10, 'easy'),
            generateQuestion("Solve $x^2 - 9 = 0$.", ["$\\pm 3$", "3", "9", "81"], 0, "Difference of squares.", 10, 'easy'),
            generateQuestion("What is a 'root' of a quadratic?", ["x-intercept", "y-intercept", "minimum", "maximum"], 0, "Roots are where it crosses the x-axis.", 10, 'easy'),
            generateQuestion("How many roots can a quadratic have max?", ["2", "1", "3", "Infinite"], 0, "It can cross the x-axis at most twice.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve by factorising: $x^2 + 5x + 6 = 0$.", ["-2, -3", "2, 3", "-1, -6", "1, 6"], 0, "**Lesson**: $(x+2)(x+3)=0$ gives -2 and -3.", 15, 'medium'),
            generateQuestion("Solve $x^2 - 7x + 10 = 0$.", ["2, 5", "-2, -5", "1, 10", "-1, -10"], 0, "$(x-2)(x-5) = 0$.", 15, 'medium'),
            generateQuestion("Solve Simultaneous: $y=x$ and $y = -x+2$.", ["(1,1)", "(2,2)", "(0,0)", "(1,-1)"], 0, "$x = -x+2 \\Rightarrow 2x=2 \\Rightarrow x=1, y=1$.", 15, 'medium'),
            generateQuestion("Vertex of $y = x^2$?", ["(0,0)", "(1,1)", "(0,-1)", "No vertex"], 0, "The minimum point is the origin.", 15, 'medium'),
            generateQuestion("Solve $x^2 + 2x = 0$.", ["0, -2", "0, 2", "2, -2", "1, -1"], 0, "$x(x+2) = 0$.", 15, 'medium'),
            generateQuestion("Find x-intercepts of $y = (x-4)(x+1)$.", ["4, -1", "-4, 1", "4, 1", "-4, -1"], 0, "Set y=0 to find the coordinates.", 15, 'medium'),
            generateQuestion("Solve $2x^2 = 8$.", ["$\\pm 2$", "2", "4", "$\\pm 4$"], 0, "$x^2 = 4 \\Rightarrow x = \\pm 2$.", 15, 'medium'),
            generateQuestion("Simultaneous: $x+y=10, x-y=2$. Find x.", ["6", "4", "5", "8"], 0, "Add them: $2x=12 \\Rightarrow x=6$.", 15, 'medium'),
            generateQuestion("Solve $x^2 = x$.", ["0, 1", "1", "0", "$\\pm 1$"], 0, "$x^2 - x = 0 \\Rightarrow x(x-1)=0$.", 15, 'medium'),
            generateQuestion("Line of symmetry for $y = x^2 - 4x$?", ["$x=2$", "$x=-2$", "$x=4$", "$x=0$"], 0, "Roots are 0 and 4. Middle is 2.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve Simultaneous: $x+y=5$ and $x-y=1$.", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 0, "**Lesson**: Adding equations crushed $y$, leaving $2x=6$.", 20, 'hard'),
            generateQuestion("Factorise and solve: $x^2 - x - 12 = 0$.", ["4, -3", "-4, 3", "6, -2", "-6, 2"], 0, "$(x-4)(x+3) = 0$.", 20, 'hard'),
            generateQuestion("Solve $2x^2 + 5x + 3 = 0$.", ["$-1, -1.5$", "1, 1.5", "-1, 1.5", "1, -1.5"], 0, "$(2x+3)(x+1) = 0$.", 20, 'hard'),
            generateQuestion("Simultaneous: $y = x^2$ and $y = x+2$.", ["(2,4) & (-1,1)", "(1,1) & (-2,4)", "(2,2)", "No solution"], 0, "$x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1)=0$.", 20, 'hard'),
            generateQuestion("Find intersection of $y = 3x$ and $y = 2x+5$.", ["(5, 15)", "(5, 10)", "(-5, -15)", "(1, 3)"], 0, "$3x = 2x+5 \\Rightarrow x=5$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{6}{x} = x + 1$.", ["2, -3", "-2, 3", "6, 1", "-6, -1"], 0, "$x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2)=0$.", 20, 'hard'),
            generateQuestion("A rectangle has area 24 and perimeter 20. Sides?", ["6, 4", "8, 3", "12, 2", "24, 1"], 0, "$xy=24, x+y=10$. Roots of $t^2 - 10t + 24 = 0$.", 20, 'hard'),
            generateQuestion("Difference of two numbers is 3, product is 28. Find positive numbers.", ["7, 4", "14, 2", "28, 1", "4, -7"], 0, "$x - y = 3, xy = 28$. $y(y+3)=28 \\Rightarrow y=4, x=7$.", 20, 'hard'),
            generateQuestion("Solve $x^2 - 6x + 9 = 0$.", ["3", "-3", "$\\pm 3$", "No real roots"], 0, "$(x-3)^2 = 0$. One repeated root.", 20, 'hard'),
            generateQuestion("[Interleaved] Are all similar triangles congruent?", ["No", "Yes"], 0, "Geometry link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("If $(x+3)(x-5)=0$, roots?", ["-3, 5", "3, -5", "-3, -5", "3, 5"], 0, "**Lesson**: Flip the sign in the bracket.", 10, 'easy'),
            generateQuestion("y-intercept of $y = 2x^2 - x + 7$?", ["7", "2", "-1", "0"], 0, "**Lesson**: Constant term is the y-intercept.", 10, 'easy'),
            generateQuestion("Solve $x^2 = 36$.", ["$\\pm 6$", "6", "-6", "18"], 0, "Both 6 and -6 work.", 10, 'easy'),
            generateQuestion("Shape of $y = -2x^2$?", ["Frown (n)", "Smile (u)", "Line (-)", "S-curve"], 0, "Negative x-squared is a frowning parabola.", 10, 'easy'),
            generateQuestion("Solve $x^2 - 1 = 0$.", ["$\\pm 1$", "1", "0", "No solution"], 0, "Difference of squares.", 10, 'easy'),
            generateQuestion("Solve $x(x+8) = 0$.", ["0, -8", "0, 8", "-8", "8"], 0, "Variables outside the bracket mean 0 is a root.", 10, 'easy'),
            generateQuestion("Minimum value of $y = x^2$?", ["0", "1", "Negative infinity", "Undefined"], 0, "It bottoms out at the origin.", 10, 'easy'),
            generateQuestion("Simultaneous: $y=4$ and $x=2$. Point?", ["(2,4)", "(4,2)", "Origin", "No intersection"], 0, "Just combine the coordinates.", 10, 'easy'),
            generateQuestion("Is $y = x^3$ a quadratic?", ["No", "Yes"], 0, "Quadratics have a maximum power of 2.", 10, 'easy'),
            generateQuestion("Can a quadratic have 0 roots?", ["Yes", "No"], 0, "Yes, if it never touches the x-axis.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve by factorising: $x^2 - 3x + 2 = 0$.", ["1, 2", "-1, -2", "1, -2", "2, -1"], 0, "**Lesson**: $(x-1)(x-2)=0$.", 15, 'medium'),
            generateQuestion("Simultaneous: $x-y=0, 2x+y=9$. Find x.", ["3", "4", "6", "4.5"], 0, "**Lesson**: $y=x$, so $3x=9 \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Find x-intercepts of $y = x^2 - 16$.", ["$\\pm 4$", "4", "-4", "16"], 0, "$(x-4)(x+4)=0$.", 15, 'medium'),
            generateQuestion("Solve $3x^2 - 12 = 0$.", ["$\\pm 2$", "2", "4", "$\\pm 4$"], 0, "$3(x^2 - 4) = 0$.", 15, 'medium'),
            generateQuestion("Line of symmetry for $y = (x-2)(x-6)$.", ["$x=4$", "$x=2$", "$x=6$", "$x=8$"], 0, "Midpoint of roots 2 and 6 is 4.", 15, 'medium'),
            generateQuestion("Simultaneous: $3x-y=5, x+y=7$. Find x.", ["3", "4", "2", "6"], 0, "Add: $4x = 12 \\Rightarrow x=3$.", 15, 'medium'),
            generateQuestion("Solve $x^2 + 6x = -8$.", ["-2, -4", "2, 4", "-2, 4", "2, -4"], 0, "$x^2+6x+8=0 \\Rightarrow (x+2)(x+4)=0$.", 15, 'medium'),
            generateQuestion("Vertex of $y = (x-3)^2$?", ["(3,0)", "(-3,0)", "(0,9)", "(0,3)"], 0, "Shifted right by 3.", 15, 'medium'),
            generateQuestion("Solve $x^2 = -4$.", ["No real roots", "$\\pm 2$", "-2", "2"], 0, "Cannot square root a negative number in the real plane.", 15, 'medium'),
            generateQuestion("Solve Simultaneous: $y=2x$ and $y=x+4$.", ["(4,8)", "(8,4)", "(2,4)", "(4,2)"], 0, "$2x = x+4 \\Rightarrow x=4, y=8$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve Simultaneous: $2x+3y=13$ and $x-2y=-4$.", ["x=2, y=3", "x=3, y=2", "x=1, y=3", "x=4, y=1"], 0, "**Lesson**: Multiply 2nd by 2: $2x-4y=-8$. Subtract: $7y=21 \\Rightarrow y=3, x=2$.", 20, 'hard'),
            generateQuestion("Factorise and solve $3x^2 - 10x + 8 = 0$.", ["2, 4/3", "-2, -4/3", "4, 2/3", "-4, -2/3"], 0, "$(3x-4)(x-2)=0$.", 20, 'hard'),
            generateQuestion("Simultaneous: $y = x^2$ and $y = 5x-6$.", ["(2,4) & (3,9)", "(1,1) & (-6,36)", "No solution", "(6,36) & (-1,1)"], 0, "$x^2 - 5x + 6 = 0 \\Rightarrow (x-2)(x-3)=0$.", 20, 'hard'),
            generateQuestion("Intersection of $y = x^2 - 1$ and $y = 3$.", ["$\\pm 2$", "$\\pm 4$", "$\\pm 1$", "No intersection"], 0, "$x^2 - 1 = 3 \\Rightarrow x^2 = 4$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{10}{x-3} = x$.", ["5, -2", "-5, 2", "10, 1", "5, 2"], 0, "$x^2 - 3x - 10 = 0 \\Rightarrow (x-5)(x+2)=0$.", 20, 'hard'),
            generateQuestion("Sum of two numbers is 10, product is 24. Find them.", ["6, 4", "12, 2", "8, 3", "24, 1"], 0, "Roots of $x^2 - 10x + 24 = 0$.", 20, 'hard'),
            generateQuestion("Solve simultaneous: $x^2 + y^2 = 25$ and $x = 3$.", ["y = $\\pm 4$", "y = 4", "y = $\\pm 5$", "y = $\\pm 16$"], 0, "$9 + y^2 = 25 \\Rightarrow y^2 = 16$.", 20, 'hard'),
            generateQuestion("Perimeter of rectangle is 14, area is 12. Diagonals?", ["5", "25", "7", "$\\sqrt{12}$"], 0, "$x+y=7, xy=12 \\Rightarrow$ sides 3, 4. Diagonal $\\sqrt{3^2+4^2} = 5$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which similarity test uses 3 proportional sides?", ["SSS", "SAS", "RHS", "AA"], 0, "Geometry link.", 10, 'expert')
        ]
    },
    'g3-s2-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Exact same shape but different sizes?", ["Congruent", "Similar", "Equal", "Symmetric"], 1, "**Lesson**: 'Similar' means they are scale models.", 10, 'easy'),
            generateQuestion("Which test ensures IDENTICAL shapes?", ["AAA", "SSS", "ASS", "SSA"], 1, "**Lesson**: 'SSS' ensures they are exactly the same.", 10, 'easy'),
            generateQuestion("What does 'Congruent' mean?", ["Same size, shape", "Same shape only", "Different", "Parallel"], 0, "Congruent is completely identical.", 10, 'easy'),
            generateQuestion("Which is NOT a congruency test?", ["SSS", "SAS", "AAA", "RHS"], 2, "AAA only proves similarity, not exact size.", 10, 'easy'),
            generateQuestion("Are all equilateral triangles similar?", ["Yes", "No"], 0, "They all share $60^\\circ$ angles.", 10, 'easy'),
            generateQuestion("Are all squares similar?", ["Yes", "No"], 0, "Yes, ratio of sides is constant and angles are $90^\\circ$.", 10, 'easy'),
            generateQuestion("Scale factor is 2. Length 5 becomes?", ["10", "2.5", "7", "25"], 0, "5 * 2 = 10.", 10, 'easy'),
            generateQuestion("What does the 'A' in SAS stand for?", ["Area", "Angle", "Arc", "Altitude"], 1, "Side-Angle-Side.", 10, 'easy'),
            generateQuestion("Angle must be 'Included' for which test?", ["SAS", "AAS", "RHS", "SSS"], 0, "The angle is strictly between the two sides.", 10, 'easy'),
            generateQuestion("RHS only applies to what triangles?", ["Right-angled", "Isosceles", "Equilateral", "Scalene"], 0, "Right angle, Hypotenuse, Side.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If length ratio is 1:3, Area ratio?", ["1:3", "1:6", "1:9", "1:27"], 2, "**Lesson**: Area ratio is scale factor SQUARED. $1^2 : 3^2 = 1:9$.", 15, 'medium'),
            generateQuestion("If Volume ratio is 8:27, length ratio?", ["2:3", "4:9", "8:27", "$\\sqrt{8}:\\sqrt{27}$"], 0, "**Lesson**: Cube root of volume ratio. $2^3=8, 3^3=27$.", 15, 'medium'),
            generateQuestion("Area ratio is 16:25. Length ratio?", ["8:12.5", "4:5", "256:625", "2:5"], 1, "Square root of area ratio.", 15, 'medium'),
            generateQuestion("Triangle A has area 10. Tri B is scaled by 3. New area?", ["30", "60", "90", "13"], 2, "Scale factor for area is $3^2=9$. 10 * 9 = 90.", 15, 'medium'),
            generateQuestion("Volumes ratio is 1:64. Area ratio?", ["1:8", "1:16", "1:4", "1:64"], 1, "Length = 1:4 (cube root). Area = 1:16 (square).", 15, 'medium'),
            generateQuestion("Map scale 1:100. Map area 2cm^2. Real area?", ["200cm^2", "1000cm^2", "20000cm^2", "10000cm^2"], 2, "$2 \\times 100^2$.", 15, 'medium'),
            generateQuestion("Two cylinders are similar. Radii 2 and 5. Volume ratio?", ["4:25", "2:5", "8:125", "16:625"], 2, "Cube of length ratio.", 15, 'medium'),
            generateQuestion("Triangle A (base 2) and Tri B (base 6). Area ratio?", ["1:3", "1:6", "1:9", "1:8"], 2, "Length is 1:3. Area is square.", 15, 'medium'),
            generateQuestion("Are rectangles of 2x4 and 3x6 similar?", ["Yes", "No"], 0, "2/3 = 4/6. Yes.", 15, 'medium'),
            generateQuestion("Are rectangles of 2x4 and 4x10 similar?", ["Yes", "No"], 1, "2/4 is not 4/10.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Volume of smaller model is 10. Scale factor 3. Model 2 Vol?", ["30", "90", "270", "810"], 2, "Volume scale factor is $3^3=27$. 10 * 27 = 270.", 20, 'hard'),
            generateQuestion("Two cones, volumes $8\\pi$ and $27\\pi$. Ratio of surface areas?", ["4:9", "2:3", "16:81", "8:27"], 0, "Lengths 2:3. Areas $2^2:3^2 = 4:9$.", 20, 'hard'),
            generateQuestion("Area of large shape is 50. Scale factor is 1/5. New Area?", ["10", "2", "250", "0.5"], 1, "$50 \\times (1/5)^2 = 50 / 25 = 2$.", 20, 'hard'),
            generateQuestion("Two congruent triangles. Tri A: base = 3x, Tri B: base = x+8. Find x.", ["4", "2", "3", "8"], 0, "Congruent means equal. $3x = x+8 \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Map scale 1:50000. Real distance 10km. Map dist in cm?", ["2cm", "20cm", "5cm", "50cm"], 1, "10km = 1,000,000cm. / 50000 = 20.", 20, 'hard'),
            generateQuestion("Similar bottle heights 10cm and 15cm. Small costs $2. Large costs?", ["$3.00", "$4.50", "$6.75", "$8.00"], 2, "Vol ratio $(15/10)^3 = 1.5^3 = 3.375$.  2 * 3.375 = 6.75.", 20, 'hard'),
            generateQuestion("Cylinders. Small SA=20, Large SA=125. Length ratio?", ["4:25", "2:5", "8:125", "16:100"], 1, "20/125 = 4/25. Square root = 2:5.", 20, 'hard'),
            generateQuestion("Cylinders from prev question. Small Vol=16. Large Vol?", ["100", "250", "125", "400"], 1, "Vol scale is $(5/2)^3 = 125/8$. 16 * 125/8 = 250.", 20, 'hard'),
            generateQuestion("Triangle inside triangle: parallel base. Base ratio 1:2. Area of small is 5. Area of TRAPEZIUM?", ["20", "10", "15", "5"], 2, "Large tri is $5 \\times 4=20$. Trap is $20-5=15$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $y^2 - 16 = 0$.", ["$\\pm 4$", "4", "16", "$\\pm 2$"], 0, "Quadratics link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Two shapes share ALL angles. They are guaranteed to be:", ["Congruent", "Equilateral", "Similar", "Polygons"], 2, "**Lesson**: AAA only guarantees similarity.", 10, 'easy'),
            generateQuestion("Which condition proves congurency?", ["SAS", "A", "SS", "AAA"], 0, "Side-Angle-Side is sufficient.", 10, 'easy'),
            generateQuestion("Square A has side 2. Square B side 6. Area ratio?", ["1:3", "1:6", "1:9", "1:18"], 2, "Square of 1:3 is 1:9.", 10, 'easy'),
            generateQuestion("If shapes are congruent, area scale factor is?", ["0", "1", "2", "$\\pi$"], 1, "They are the exact same area.", 10, 'easy'),
            generateQuestion("All circles are...", ["Congruent", "Similar", "Equal", "Concentric"], 1, "Any circle is a scaled version of another.", 10, 'easy'),
            generateQuestion("What does the 'H' in RHS mean?", ["Height", "Hexagon", "Hypotenuse", "Half"], 2, "The longest side of a right triangle.", 10, 'easy'),
            generateQuestion("Scale factor 0.5 means the shape...", ["Doubles", "Halves", "Disappears", "Grows"], 1, "0.5 makes it smaller.", 10, 'easy'),
            generateQuestion("Which guarantees similarity but not congruence?", ["SSS", "SAS", "AAS", "AAA"], 3, "Only angles are the same.", 10, 'easy'),
            generateQuestion("Is 'SSA' a valid congruency test?", ["Yes", "No"], 1, "Except for RHS, SSA is ambiguous.", 10, 'easy'),
            generateQuestion("If heights ratio is 2:3, what is base ratio for similar triangles?", ["4:9", "2:3", "3:2", "8:27"], 1, "All 1D lengths share the same ratio.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Two similar prisms: Volume ratio 27:64. Height ratio?", ["9:16", "3:8", "3:4", "2.7:6.4"], 2, "**Lesson**: Cube root of volume ratio = 3:4.", 15, 'medium'),
            generateQuestion("Are all regular pentagons similar?", ["Yes", "No"], 0, "All regular polygons of same sides are similar.", 15, 'medium'),
            generateQuestion("Tri A: Area 4. Tri B: Area 36. Ratio of their perimeters?", ["1:9", "1:3", "2:6", "Both b and c"], 3, "Area is 4:36=1:9. Length is 1:3.", 15, 'medium'),
            generateQuestion("Map scale 1:200,000. Map length 3cm. Real length in km?", ["6km", "60km", "0.6km", "600km"], 0, "600,000 cm = 6000 m = 6 km.", 15, 'medium'),
            generateQuestion("Volumes ratio 125:8. Area ratio?", ["25:4", "5:2", "15:6", "125:4"], 0, "Length = 5:2. Area = 25:4.", 15, 'medium'),
            generateQuestion("Similar statues. Paint needed for small is 2L. Lengths are 1:2. Paint for large?", ["4L", "6L", "8L", "16L"], 2, "Area scale factor is $2^2=4$. 2 * 4 = 8L.", 15, 'medium'),
            generateQuestion("Triangle base 5, height 4. Scaled by 3. New Area?", ["60", "90", "120", "20"], 1, "Old Area=10. SF $3^2=9$. 10 * 9 = 90.", 15, 'medium'),
            generateQuestion("Rectangle 3x5. Area scaled by 16. New sides?", ["48x80", "12x20", "16x16", "19x21"], 1, "Length SF is 4. Sides are 3*4 and 5*4.", 15, 'medium'),
            generateQuestion("Triangles are congruent. One has $x+10$, other has $30$. Find x.", ["20", "10", "40", "30"], 0, "x+10 = 30.", 15, 'medium'),
            generateQuestion("Two circles, areas $4\\pi$ and $16\\pi$. Diameter ratio?", ["1:4", "1:2", "2:4", "Both b and c"], 3, "Ratio is 1:2.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Scale 1:50,000. Lake has map area 4cm^2. Real area in km^2?", ["1", "10", "100", "0.1"], 0, "$4 \\times (50000)^2 = 10,000,000,000 \\text{cm}^2 = 1 \\text{km}^2$.", 20, 'hard'),
            generateQuestion("Solid gold cone weighs 50g. Another similar cone is twice as tall. Weight?", ["100g", "200g", "400g", "800g"], 2, "Weight scales with Volume ($2^3=8$). 50 * 8 = 400.", 20, 'hard'),
            generateQuestion("Two similar cups. Surface areas 30 and 270. Small holds 100ml. Large holds?", ["300ml", "900ml", "1000ml", "2700ml"], 3, "Area ratio 1:9. Length 1:3. Vol 1:27. 100 * 27 = 2700.", 20, 'hard'),
            generateQuestion("Cone height 10cm. Top 5cm cut off. Volume of small top cone vs total cone?", ["1:2", "1:4", "1:8", "1:16"], 2, "Height ratio 1:2. Volume ratio 1:8.", 20, 'hard'),
            generateQuestion("From prev question, volume ratio of small top vs bottom FRUSTUM?", ["1:7", "1:8", "1:3", "1:4"], 0, "Total is 8, top is 1, so frustum is 7.", 20, 'hard'),
            generateQuestion("Are cylinders with same volume but different heights similar?", ["Yes", "No"], 1, "No, proportions of radius to height must stay identical.", 20, 'hard'),
            generateQuestion("Model ship length 20cm, real ship 20m. Scale factor?", ["1:100", "1:1000", "1:10", "1:20"], 0, "20m = 2000cm. 20:2000 = 1:100.", 20, 'hard'),
            generateQuestion("Real ship holds 50000 liters. Model capacity?", ["50L", "0.05L", "5L", "0.5L"], 1, "Vol SF is $100^3=1,000,000$. 50000 / 1mil = 0.05L.", 20, 'hard'),
            generateQuestion("Right angled triangle inside a semi-circle. Are they always similar?", ["No", "Yes"], 0, "Angles change depending on position on arc.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2 + 7x + 12 = 0$.", ["-3, -4", "3, 4", "-2, -6", "3, 12"], 0, "Quadratics link.", 10, 'expert')
        ]
    },
    'g3-s2-pythagoras': {
        learning: [
            // Easy (1-10)
            generateQuestion("Pythagoras applies to...", ["Right-angled triangles", "All triangles", "Squares", "Circles"], 0, "**Lesson**: It only works for $90^\\circ$ triangles.", 10, 'easy'),
            generateQuestion("Rule for Pythagoras?", ["$a^2+b^2=c^2$", "$a+b=c$", "$a^2-b^2=c^2$", "$a^2+b^2=c$"], 0, "**Lesson**: Squares of shorter sides sum to hypotenuse square.", 10, 'easy'),
            generateQuestion("Sine (\\sin) is?", ["Opp/Hyp", "Adj/Hyp", "Opp/Adj", "Hyp/Opp"], 0, "SOH.", 10, 'easy'),
            generateQuestion("Cosine (\\cos) is?", ["Adj/Hyp", "Opp/Hyp", "Opp/Adj", "Hyp/Adj"], 0, "CAH.", 10, 'easy'),
            generateQuestion("Tangent (\\tan) is?", ["Opp/Adj", "Adj/Hyp", "Opp/Hyp", "Adj/Opp"], 0, "TOA.", 10, 'easy'),
            generateQuestion("The longest side of a right triangle is...", ["Hypotenuse", "Adjacent", "Opposite", "Leg"], 0, "Always opposite the $90^\\circ$ angle.", 10, 'easy'),
            generateQuestion("If sides are 3 and 4 (legs), hypotenuse is?", ["5", "7", "25", "1"], 0, "Classic 3-4-5 triplet.", 10, 'easy'),
            generateQuestion("Which is a Pythagorean triplet?", ["5, 12, 13", "1, 2, 3", "2, 3, 4", "6, 7, 8"], 0, "$25 + 144 = 169$.", 10, 'easy'),
            generateQuestion("Opposite side is...", ["Across from angle $\\theta$", "Next to angle $\\theta$", "The longest", "Shortest"], 0, "It does not touch the angle $\\theta$.", 10, 'easy'),
            generateQuestion("Adjacent side is...", ["Next to angle $\\theta$", "Across from $\\theta$", "Longest side", "The $90^\\circ$ angle"], 0, "It forms the angle, but is not the hypotenuse.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Hypotenuse if shorter sides are 5 and 12.", ["13", "14", "15", "17"], 0, "**Lesson**: $\\sqrt{5^2 + 12^2} = 13$.", 15, 'medium'),
            generateQuestion("If \\tan(x) = 1, angle is?", ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"], 0, "**Lesson**: Opp = Adj, so it's $45^\\circ$.", 15, 'medium'),
            generateQuestion("Find leg if hyp=10, other leg=6.", ["8", "4", "64", "2"], 0, "$100 - 36 = 64$. Root is 8.", 15, 'medium'),
            generateQuestion("$\\sin(30^\\circ)$ is?", ["0.5", "1", "0.866", "0"], 0, "Exact value: 1/2.", 15, 'medium'),
            generateQuestion("$\\cos(60^\\circ)$ is?", ["0.5", "1", "0.866", "0"], 0, "Exact value: same as $\\sin(30)$.", 15, 'medium'),
            generateQuestion("Find angle if Opp=3, Hyp=6.", ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "$\\sin(x) = 3/6 = 0.5$. Angle is 30.", 15, 'medium'),
            generateQuestion("Find angle if Adj=5, Hyp=10.", ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "$\\cos(x) = 0.5$. Angle is 60.", 15, 'medium'),
            generateQuestion("A ladder of 5m leans on wall, base is 3m away. Height?", ["4m", "2m", "16m", "8m"], 0, "3-4-5 triangle.", 15, 'medium'),
            generateQuestion("Find Opp if Hyp=8, $\\sin(\\theta) = 0.25$.", ["2", "4", "32", "0.03"], 0, "$Opp = 8 \\times 0.25 = 2$.", 15, 'medium'),
            generateQuestion("Do lengths 6, 8, 10 make a right-angled triangle?", ["Yes", "No"], 0, "It's a 3-4-5 scaled by 2.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Tree casts 10m shadow. Angle of elevation to sun is $45^\\circ$. Tree height?", ["10m", "14.1m", "5m", "20m"], 0, "$\\tan(45) = Opp / 10 \\Rightarrow 1 = Opp/10$.", 20, 'hard'),
            generateQuestion("A plane flies 100km North. 100km East. Direct distance?", ["$100\\sqrt{2}$", "200", "100", "150"], 0, "$\\sqrt{100^2 + 100^2}$.", 20, 'hard'),
            generateQuestion("In right triangle, shortest side is x. Hypotenuse is x+2. Third side is $\\sqrt{20}$. Find x.", ["4", "2", "6", "8"], 0, "$x^2 + 20 = (x+2)^2 = x^2+4x+4$. $16=4x \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Evaluate $(\\sin 45^\\circ)^2 + (\\cos 45^\\circ)^2$.", ["1", "0", "2", "0.5"], 0, "Identity: $\\sin^2 + \\cos^2 = 1$.", 20, 'hard'),
            generateQuestion("Find angle if $\\tan(x) = \\sqrt{3}$.", ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "Exact value.", 20, 'hard'),
            generateQuestion("From top of 50m cliff, angle of depression to boat is $30^\\circ$. Horizontal distance?", ["$50\\sqrt{3}$", "$50/\\sqrt{3}$", "25", "100"], 0, "$\\tan(30) = 1/\\sqrt{3} = 50/d \\Rightarrow d = 50\\sqrt{3}$.", 20, 'hard'),
            generateQuestion("Length of diagonal of a 3x4x12 box?", ["13", "14", "15", "12"], 0, "$\\sqrt{3^2+4^2+12^2} = \\sqrt{9+16+144} = \\sqrt{169} = 13$.", 20, 'hard'),
            generateQuestion("Equilateral triangle side 10. Height?", ["$5\\sqrt{3}$", "5", "10", "$10\\sqrt{3}$"], 0, "Split it: hyp=10, base=5. Height = $\\sqrt{10^2-5^2} = \\sqrt{75}$.", 20, 'hard'),
            generateQuestion("$\\sin x = 3/5$. Find $\\cos x$.", ["4/5", "3/4", "5/4", "1"], 0, "3-4-5 triangle. Adj is 4.", 20, 'hard'),
            generateQuestion("[Interleaved] 20% of 50?", ["10", "15", "20", "5"], 0, "Percentages link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("The hypotenuse is always...", ["Longest", "Shortest", "Adjacent", "Vertical"], 0, "**Lesson**: It's the longest side.", 10, 'easy'),
            generateQuestion("In $\\triangle ABC$, $90^\\circ$ at C. Then $a^2+b^2=$?", ["$c^2$", "$A^2$", "$B^2$", "$0$"], 0, "**Lesson**: c is the hypotenuse.", 10, 'easy'),
            generateQuestion("SOH CAH TOA, TOA means?", ["$\\tan = \\text{Opp}/\\text{Adj}$", "$\\tan = \\text{Adj}/\\text{Opp}$", "$\\cos = \\text{Opp}/\\text{Adj}$", "$\\sin = \\text{Adj}/\\text{Opp}$"], 0, "Tangents rule.", 10, 'easy'),
            generateQuestion("Which is true for a right angle triangle?", ["$\\text{Opposite} < \\text{Hypotenuse}$", "$\\text{Opposite} = \\text{Hypotenuse}$", "$\\text{Adjacent} > \\text{Hypotenuse}$", "None"], 0, "Hypotenuse is strictly longest.", 10, 'easy'),
            generateQuestion("Angle of elevation looks...", ["Up", "Down", "Horizontal", "Sideways"], 0, "Elevating your vision.", 10, 'easy'),
            generateQuestion("Angle of depression looks...", ["Down", "Up", "Horizontal", "Sideways"], 0, "Depressing your vision.", 10, 'easy'),
            generateQuestion("Is a triangle with sides 1, 1, 2 right-angled?", ["No", "Yes"], 0, "1+1 is 2, but Hypotenuse would be $\\sqrt{2}$. 2 is too long.", 10, 'easy'),
            generateQuestion("Hypotenuse of 6 and 8?", ["10", "14", "100", "2"], 0, "100 root is 10.", 10, 'easy'),
            generateQuestion("What is $\\sin 90^\\circ$?", ["1", "0", "Undefined", "0.5"], 0, "Maximum sine.", 10, 'easy'),
            generateQuestion("What is $\\cos 0^\\circ$?", ["1", "0", "Undefined", "0.5"], 0, "Maximum cosine.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find leg if hyp=13, leg=12.", ["5", "1", "25", "10"], 0, "**Lesson**: $169 - 144 = 25$. Root is 5.", 15, 'medium'),
            generateQuestion("Find angle: $\\cos(\\theta) = 0.5$.", ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "**Lesson**: Exact value for $\\cos 60$.", 15, 'medium'),
            generateQuestion("A ramp is 10m long. Elevates 2m high. Sine of angle of elevation?", ["0.2", "0.5", "5", "0.98"], 0, "Opp/Hyp = 2/10 = 0.2.", 15, 'medium'),
            generateQuestion("$\\tan 45^\\circ$ is?", ["1", "0", "Undefined", "0.5"], 0, "Opp equals Adj.", 15, 'medium'),
            generateQuestion("Do sides 5, 5, $5\\sqrt{2}$ form a right-triangle?", ["Yes", "No"], 0, "$25 + 25 = 50$. $(5\\sqrt{2})^2 = 50$.", 15, 'medium'),
            generateQuestion("A mast is 12m tall, wire to ground 15m long. Distance from ground peg to mast?", ["9m", "3m", "81m", "10m"], 0, "$225 - 144 = 81$. Root 9.", 15, 'medium'),
            generateQuestion("In right $\\triangle$, $\\sin A = 4/5$. $\\tan A$?", ["4/3", "3/4", "3/5", "5/3"], 0, "Opp=4, Hyp=5, Adj=3. Tan=4/3.", 15, 'medium'),
            generateQuestion("Does $\\sin$ ever exceed 1?", ["No", "Yes"], 0, "Opposite cannot exceed Hypotenuse.", 15, 'medium'),
            generateQuestion("If angle of depression is $20^\\circ$, angle of elevation back up is?", ["$20^\\circ$", "$70^\\circ$", "$90^\\circ$", "$160^\\circ$"], 0, "Alternate angles (Z).", 15, 'medium'),
            generateQuestion("Pythagoras applies strictly to?", ["Right-triangles", "All quadrilaterals", "All triangles", "Circles"], 0, "Must be 90 deg.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Rhombus diagonals 10 and 24. Side length?", ["13", "12", "5", "17"], 0, "Diagonals cut in half (5, 12). $\\sqrt{25+144} = 13$.", 20, 'hard'),
            generateQuestion("Ship sails 5km East, then 5km North. Bearing back to start?", ["$225^\\circ$", "$045^\\circ$", "$135^\\circ$", "$315^\\circ$"], 0, "Current bearing from start is 045. Back to start is $045+180=225$.", 20, 'hard'),
            generateQuestion("In square side 5, diagonal is?", ["$5\\sqrt{2}$", "10", "25", "5.2"], 0, "$25+25 = 50$.", 20, 'hard'),
            generateQuestion("A 10m ladder slips down 2m, bottom was 6m away. How far did bottom slide out?", ["2m", "8m", "4m", "Not enough info"], 0, "Top is now 6m high. Base=$\\sqrt{100-36}=8m$. 8-6=2m.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{\\sin x}{\\cos x}$.", ["$\\tan x$", "1", "$1/\\tan x$", "$\\sin^2 x$"], 0, "Identity.", 20, 'hard'),
            generateQuestion("$\\tan 30^\\circ \\times \\tan 60^\\circ$?", ["1", "0", "0.5", "Undefined"], 0, "$(1/\\sqrt{3}) \\times (\\sqrt{3}) = 1$.", 20, 'hard'),
            generateQuestion("Find hypotenuse if legs are $\\sqrt{2}$ and $\\sqrt{7}$.", ["3", "$\\sqrt{5}$", "9", "4.5"], 0, "$2+7 = 9$. Root is 3.", 20, 'hard'),
            generateQuestion("Rectangle diag is 25, one side is 7. Area?", ["168", "24", "175", "100"], 0, "Other side is $\\sqrt{625-49} = 24$. 24 * 7 = 168.", 20, 'hard'),
            generateQuestion("$\\cos^2 \\theta + \\sin^2 \\theta = ?$", ["1", "0", "$\\tan^2 \\theta$", "-1"], 0, "Pythagorean identity.", 20, 'hard'),
            generateQuestion("[Interleaved] Volume of cylinder $r=2, h=5$?", ["$20\\pi$", "$10\\pi$", "$40\\pi$", "$2\\pi$"], 0, "Geometry link.", 10, 'expert')
        ]
    },
    'g3-s2-mensuration': {
        learning: [
            // Easy (1-10)
            generateQuestion("Formula for sphere volume?", ["$\\frac{4}{3}\\pi r^3$", "$4\\pi r^2$", "$\\pi r^2 h$", "$\\frac{1}{3}\\pi r^2 h$"], 0, "**Lesson**: The volume of an orb is $\\frac{4}{3}\\pi r^3$.", 10, 'easy'),
            generateQuestion("A cone's volume is what fraction of its parent cylinder?", ["One-third", "Half", "Same", "Quarter"], 0, "**Lesson**: Any pointy shape holds exactly one-third of its straight counterpart.", 10, 'easy'),
            generateQuestion("Surface area of a sphere?", ["$4\\pi r^2$", "$2\\pi r$", "$\\pi r^2$", "$4/3\\pi r^3$"], 0, "Like 4 circles wrapping around the ball.", 10, 'easy'),
            generateQuestion("Volume of a cylinder?", ["$\\pi r^2 h$", "$2\\pi r h$", "$\\frac{1}{3}\\pi r^2 h$", "$\\pi d h$"], 0, "Base area $\\pi r^2$ times height.", 10, 'easy'),
            generateQuestion("Curved surface area of a cone?", ["$\\pi r l$", "$\\pi r^2$", "$2\\pi r$", "$\\frac{1}{3}\\pi r^2 h$"], 0, "Pi times radius times slant height $l$.", 10, 'easy'),
            generateQuestion("Volume of a pyramid?", ["$1/3 \\times \\text{Base Area} \\times h$", "$\\text{Base} \\times h$", "$\\pi r^2 h$", "$1/2 \\times b \\times h$"], 0, "Pyramids follow the 1/3 rule.", 10, 'easy'),
            generateQuestion("Total surface area of solid hemisphere?", ["$3\\pi r^2$", "$2\\pi r^2$", "$4\\pi r^2$", "$\\pi r^2$"], 0, "Half a sphere (2) plus the flat circle base (1) = 3.", 10, 'easy'),
            generateQuestion("Volume of hemisphere?", ["$\\frac{2}{3}\\pi r^3$", "$\\frac{4}{3}\\pi r^3$", "$2\\pi r^2$", "$\\frac{1}{3}\\pi r^3$"], 0, "Half of the sphere's 4/3.", 10, 'easy'),
            generateQuestion("Surface area of closed cylinder?", ["$2\\pi r^2 + 2\\pi r h$", "$\\pi r^2 h$", "$\\pi r l$", "$2\\pi r$"], 0, "Two circular bases plus the curved rectangle body.", 10, 'easy'),
            generateQuestion("1 liter is equal to...", ["$1000 \\text{ cm}^3$", "$100 \\text{ cm}^3$", "$10 \\text{ cm}^3$", "$1 \\text{ m}^3$"], 0, "10x10x10 cm cube.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Surface area of a sphere with radius 5. (Leave $\\pi$)", ["$100\\pi$", "$25\\pi$", "$50\\pi$", "$125\\pi$"], 0, "**Lesson**: $4\\pi \\times 5^2 = 100\\pi$.", 15, 'medium'),
            generateQuestion("Find volume for a pyramid with square base (sides 4) and height 6.", ["32", "96", "24", "48"], 0, "**Lesson**: $\\frac{1}{3} \\times (4\\times 4) \\times 6 = 32$.", 15, 'medium'),
            generateQuestion("Volume of cone: $r=3, h=10$.", ["$30\\pi$", "$90\\pi$", "$10\\pi$", "300"], 0, "$1/3 \\times 9\\pi \\times 10 = 30\\pi$.", 15, 'medium'),
            generateQuestion("Curved SA of cone: $r=3$, slant $l=5$.", ["$15\\pi$", "$24\\pi$", "$12\\pi$", "$20\\pi$"], 0, "$\\pi \\times 3 \\times 5 = 15\\pi$.", 15, 'medium'),
            generateQuestion("Volume of sphere diameter 6?", ["$36\\pi$", "$288\\pi$", "$144\\pi$", "$12\\pi$"], 0, "$r=3$. $4/3 \\pi \\times 27 = 36\\pi$.", 15, 'medium'),
            generateQuestion("Hemisphere surface area radius 4 (solid)?", ["$48\\pi$", "$32\\pi$", "$64\\pi$", "$16\\pi$"], 0, "$3\\pi r^2 = 3 \\times 16\\pi = 48\\pi$.", 15, 'medium'),
            generateQuestion("Cylinder $r=2$, volume=$20\\pi$. Height?", ["5", "10", "4", "2.5"], 0, "$4\\pi h = 20\\pi \\Rightarrow h=5$.", 15, 'medium'),
            generateQuestion("Sphere volume is $288\\pi$. Find radius.", ["6", "12", "3", "8"], 0, "$4/3 \\pi r^3 = 288\\pi \\Rightarrow r^3 = 216 \\Rightarrow r=6$.", 15, 'medium'),
            generateQuestion("Cone $r=6, h=8$, find slant $l$.", ["10", "14", "100", "48"], 0, "Pythagoras: $\\sqrt{6^2+8^2} = 10$.", 15, 'medium'),
            generateQuestion("Cone total SA if $r=3, l=4$.", ["$21\\pi$", "$12\\pi$", "$9\\pi$", "$15\\pi$"], 0, "$\\pi r^2 + \\pi r l = 9\\pi + 12\\pi = 21\\pi$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Cone, radius 5, height 12. Curved surface area?", ["$65\\pi$", "$60\\pi$", "$25\\pi$", "$13\\pi$"], 0, "Slant $l=\\sqrt{25+144}=13$. SA = $\\pi(5)(13) = 65\\pi$.", 20, 'hard'),
            generateQuestion("Hemisphere bowl diameter 12cm. How many liters does it hold?", ["$144\\pi / 1000$", "$288\\pi / 1000$", "$864\\pi$", "0.144"], 0, "$r=6$. Vol = $2/3 \\pi(216) = 144\\pi$ cm^3. Divide by 1000.", 20, 'hard'),
            generateQuestion("A solid metal cylinder $r=3, h=8$ is melted into spheres of $r=2$. How many?", ["7", "6", "8", "9"], 0, "Cyl Vol = $72\\pi$. Sphere Vol = $32/3 \\pi$. $72 / (32/3) = 216/32 = 6.75$. So 6 full spheres.", 20, 'hard'),
            generateQuestion("Sphere SA is $400\\pi$. Volume?", ["$4000\\pi / 3$", "$1000\\pi$", "$800\\pi / 3$", "$400\\pi$"], 0, "$4\\pi r^2 = 400\\pi \\Rightarrow r=10$. Vol = $4/3 \\pi (1000)$.", 20, 'hard'),
            generateQuestion("Pipe $r=5\\text{cm}$, water flows $10\\text{cm/s}$. Vol in 1 min?", ["$15000\\pi$", "$500\\pi$", "$3000\\pi$", "$250\\pi$"], 0, "Vol per sec = $25\\pi \\times 10 = 250\\pi$. 1 min = $250\\pi \\times 60 = 15000\\pi$.", 20, 'hard'),
            generateQuestion("Find volume of regular tetrahedron side 6.", ["$18\\sqrt{2}$", "$36\\sqrt{2}$", "72", "54"], 0, "Vol = $a^3 / (6\\sqrt{2}) = 216 / (6\\sqrt{2}) = 36 / \\sqrt{2} = 18\\sqrt{2}$.", 20, 'hard'),
            generateQuestion("Cone $r=4, l=5$. Find volume.", ["$16\\pi$", "$80\\pi / 3$", "$20\\pi / 3$", "$15\\pi$"], 0, "$h = \\sqrt{25-16}=3$. Vol = $1/3 \\pi (16)(3) = 16\\pi$.", 20, 'hard'),
            generateQuestion("Sector of circle $r=10$, angle $216^\\circ$ folded into cone. Cone radius?", ["6", "10", "4", "8"], 0, "Arc length = $(216/360) \\times 20\\pi = 12\\pi$. $2\\pi r = 12\\pi \\Rightarrow r=6$.", 20, 'hard'),
            generateQuestion("From prev question, what is the cone's height?", ["8", "10", "6", "$\\sqrt{136}$"], 0, "Slant l is the old radius 10. $h=\\sqrt{100-36}=8$.", 20, 'hard'),
            generateQuestion("[Interleaved] $\\cos(90^\\circ)$ is?", ["0", "1", "0.5", "Undefined"], 0, "Pythagoras/Trig link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("What wraps around the curved part of a cylinder?", ["$2\\pi r h$", "$\\pi r l$", "$\\pi r^2$", "$4\\pi r^2$"], 0, "**Lesson**: A rectangle rolled up: length is circumference, width is height.", 10, 'easy'),
            generateQuestion("Formula for area of a circle?", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$\\frac{4}{3}\\pi r^3$"], 0, "**Lesson**: Pi times radius squared.", 10, 'easy'),
            generateQuestion("Circumference of a circle?", ["$2\\pi r$", "$\\pi r^2$", "$\\pi r l$", "$\\pi h$"], 0, "2 * pi * r or pi * d.", 10, 'easy'),
            generateQuestion("SA of an open hemisphere (no lid)?", ["$2\\pi r^2$", "$3\\pi r^2$", "$4\\pi r^2$", "$\\pi r^2$"], 0, "Just the shell, which is half of $4\\pi r^2$.", 10, 'easy'),
            generateQuestion("If you double the radius of a circle, area increases by?", ["4 times", "2 times", "8 times", "Same"], 0, "Area scales by square of length factor.", 10, 'easy'),
            generateQuestion("Radius is half of the...", ["Diameter", "Circumference", "Chord", "Arc"], 0, "Diameter spans across the center.", 10, 'easy'),
            generateQuestion("Volume of a cube with edge 4?", ["64", "16", "32", "12"], 0, "4 x 4 x 4.", 10, 'easy'),
            generateQuestion("Surface area of cube with edge 2?", ["24", "4", "16", "8"], 0, "6 faces of area 4 = 24.", 10, 'easy'),
            generateQuestion("In $\\frac{1}{3} \\pi r^2 h$, what does h represent?", ["Perpendicular height", "Slant height", "Hypotenuse", "Diameter"], 0, "Always use straight up height for volume.", 10, 'easy'),
            generateQuestion("A pyramid has a rectangular base. Volume is...", ["$\\frac{1}{3}lbh$", "$lbh$", "$\\frac{1}{2}lbh$", "$\\pi r^2 h$"], 0, "1/3 * base area * height.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Cone $r=5, h=12$. Slant height?", ["13", "17", "144", "25"], 0, "Pythagoras 5-12-13.", 15, 'medium'),
            generateQuestion("Find volume of sphere $r=3$.", ["$36\\pi$", "$9\\pi$", "$27\\pi$", "$108\\pi$"], 0, "$\\frac{4}{3} \\pi (27) = 36\\pi$.", 15, 'medium'),
            generateQuestion("Cylinder $r=5$ Vol=$100\\pi$. Height?", ["4", "10", "20", "2"], 0, "$25\\pi \\times h = 100\\pi \\Rightarrow h=4$.", 15, 'medium'),
            generateQuestion("Hemisphere volume $r=6$.", ["$144\\pi$", "$288\\pi$", "$72\\pi$", "$216\\pi$"], 0, "$2/3 \\pi (216) = 144\\pi$.", 15, 'medium'),
            generateQuestion("Pyramid volume, base area 40, height 9.", ["120", "360", "180", "40"], 0, "1/3 * 40 * 9 = 120.", 15, 'medium'),
            generateQuestion("Total SA of cylinder $r=2, h=5$.", ["$28\\pi$", "$20\\pi$", "$24\\pi$", "$8\\pi$"], 0, "$2\\pi(4) + 2\\pi(2)(5) = 8\\pi + 20\\pi = 28\\pi$.", 15, 'medium'),
            generateQuestion("Solid sphere is cut in half. How does total SA change?", ["Increases by $\\pi r^2$", "Increases by $2\\pi r^2$", "Stays the same", "Decreases"], 1, "Original was $4\\pi$. Two hemispheres are $6\\pi$. Gain of $2\\pi$.", 15, 'medium'),
            generateQuestion("Cone curved SA is $15\\pi, l=5$. Radius?", ["3", "5", "$\\pi$", "15"], 0, "$\\pi r (5) = 15\\pi \\Rightarrow r=3$.", 15, 'medium'),
            generateQuestion("Volume of square based pyramid: side 10, height 6.", ["200", "600", "300", "100"], 0, "1/3 * 100 * 6 = 200.", 15, 'medium'),
            generateQuestion("Cube fits exactly in sphere radius 5. Diagonal of cube?", ["10", "5", "$\\sqrt{75}$", "25"], 0, "Diagonal of cube is diameter of sphere = 10.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Water poured into conical funnel $r=6$ $h=8$ at $2\\pi$ cm^3/s. Time to fill?", ["$48s$", "$96s$", "$16s$", "$32s$"], 0, "Vol = $1/3 \\pi (36)(8) = 96\\pi$. 96/2 = 48s.", 20, 'hard'),
            generateQuestion("Cylinder and cone have same base radius and height. Volume ratio?", ["3:1", "1:3", "2:1", "1:2"], 0, "Cylinder is 3 times the cone.", 20, 'hard'),
            generateQuestion("Sphere melted to form 8 equal smaller spheres. Ratio of old to new radius?", ["$2:1$", "$8:1$", "$4:1$", "$3:1$"], 0, "Volume is 8 times smaller. Cube root is 2.", 20, 'hard'),
            generateQuestion("Surface area of sphere is $144\\pi$. Find its diameter.", ["12", "6", "24", "36"], 0, "$4\\pi r^2 = 144\\pi \\Rightarrow r^2=36 \\Rightarrow r=6, d=12$.", 20, 'hard'),
            generateQuestion("Cone base area $16\\pi$, curved SA $20\\pi$. Volume?", ["$16\\pi$", "$48\\pi$", "$20\\pi$", "$12\\pi$"], 0, "$r=4, \\pi(4)l = 20\\pi \\Rightarrow l=5$. $h=3$. Vol=$1/3 \\pi(16)(3) = 16\\pi$.", 20, 'hard'),
            generateQuestion("A cone of height $h$ is cut exactly in half halfway up. Top volume fraction?", ["1/8", "1/2", "1/4", "1/3"], 0, "Height ratio 1:2. Volume $1^3 : 2^3 = 1/8$.", 20, 'hard'),
            generateQuestion("Find volume of sphere passing through corners of 2x2x2 cube.", ["$4\\sqrt{3}\\pi$", "$8\\sqrt{3}\\pi / 3$", "$16\\pi/3$", "$8\\pi$"], 0, "Diagonal of cube = $\\sqrt{4+4+4} = \\sqrt{12} = 2\\sqrt{3}$. $r = \\sqrt{3}$. Vol = $4/3 \\pi (3\\sqrt{3}) = 4\\sqrt{3}\\pi$.", 20, 'hard'),
            generateQuestion("Rectangle 10x4 rotated around the 10 side to form cylinder. Volume?", ["$160\\pi$", "$400\\pi$", "$40\\pi$", "$200\\pi$"], 0, "Radius is 4, height is 10. $\\pi(16)(10) = 160\\pi$.", 20, 'hard'),
            generateQuestion("Pyramid volume 400. Square base side 10. Slant height of a triangular face?", ["13", "12", "144", "5"], 0, "1/3 * 100 * h = 400 -> h=12. Slant $l = \\sqrt{12^2 + 5^2} = 13$.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+y)(x-y)$.", ["$x^2-y^2$", "$x^2-2xy+y^2$", "$x^2+y^2$", "$x^2+2xy+y^2$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    // --- Sec 3/4 G3 ---
    'g3-s34-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Simplify: $\\frac{x}{2} + \\frac{x}{3}$.", ["$\\frac{5x}{6}$", "$\\frac{2x}{5}$", "$\\frac{x^2}{6}$", "$x$"], 0, "**Lesson**: Common denominator is 6. $\\frac{3x+2x}{6} = \\frac{5x}{6}$.", 10, 'easy'),
            generateQuestion("Solve $\\frac{2}{x} = \\frac{3}{5}$.", ["$10/3$", "$3/10$", "$5/2$", "15"], 0, "**Lesson**: Cross-multiply to get $10 = 3x$.", 10, 'easy'),
            generateQuestion("Simplify: $\\frac{4x}{2}$.", ["$2x$", "$4x$", "$2$", "$x^2$"], 0, "Divide the numbers.", 10, 'easy'),
            generateQuestion("Add: $\\frac{2}{x} + \\frac{3}{x}$.", ["$\\frac{5}{x}$", "$\\frac{5}{2x}$", "$\\frac{6}{x}$", "$\\frac{5}{x^2}$"], 0, "Denominators are the same.", 10, 'easy'),
            generateQuestion("Multiply: $\\frac{x}{y} \\times \\frac{y}{z}$.", ["$\\frac{x}{z}$", "$\\frac{xz}{y^2}$", "$\\frac{y^2}{xz}$", "$\\frac{x+y}{y+z}$"], 0, "The y's cancel out.", 10, 'easy'),
            generateQuestion("Solve $\\frac{x}{4} = 2$.", ["8", "2", "6", "0.5"], 0, "Multiply by 4.", 10, 'easy'),
            generateQuestion("Speed = $v$, Time = $t$. Distance?", ["$vt$", "$v/t$", "$t/v$", "$v+t$"], 0, "Distance = Speed x Time.", 10, 'easy'),
            generateQuestion("Simplify $\\frac{x^2}{x}$.", ["$x$", "$1$", "$2x$", "$x^3$"], 0, "Laws of indices: subtract powers.", 10, 'easy'),
            generateQuestion("Solve $\\frac{5}{x} = 1$.", ["5", "1", "0.2", "0.5"], 0, "$x=5$.", 10, 'easy'),
            generateQuestion("Add: $\\frac{a}{2} - \\frac{a}{2}$.", ["0", "$a$", "$a/4$", "$2a/4$"], 0, "Anything subtracted by itself is 0.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve for $x$: $\\frac{5}{x+1} = 2$.", ["1.5", "2.5", "3.5", "0.5"], 0, "**Lesson**: $5 = 2(x+1) \\Rightarrow 5 = 2x+2 \\Rightarrow 2x=3$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{3}{x+1} + \\frac{2}{x+1}$.", ["$\\frac{5}{x+1}$", "$\\frac{5}{2x+2}$", "$\\frac{6}{x+1}$", "$\\frac{1}{x+1}$"], 0, "Common denominator already exists.", 15, 'medium'),
            generateQuestion("Solve $\\frac{x-1}{2} = 4$.", ["9", "8", "7", "10"], 0, "$x-1 = 8$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{3x+6}{3}$.", ["$x+2$", "$x+6$", "$3x+2$", "$x$"], 0, "Factor out 3 on top: $3(x+2)/3$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x^2 - 4}{x - 2}$.", ["$x+2$", "$x-2$", "2", "-2"], 0, "Difference of squares.", 15, 'medium'),
            generateQuestion("Distance = $100$, Speed = $x+10$. Time?", ["$\\frac{100}{x+10}$", "$100(x+10)$", "$\\frac{x+10}{100}$", "$100 - x - 10$"], 0, "Time = D/S.", 15, 'medium'),
            generateQuestion("Solve $\\frac{2x}{3} = \\frac{4}{5}$.", ["1.2", "2.4", "0.6", "1.5"], 0, "$10x = 12 \\Rightarrow x=1.2$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x}{3} - \\frac{x}{4}$.", ["$\\frac{x}{12}$", "$\\frac{x}{-1}$", "$\\frac{-x}{12}$", "$\\frac{7x}{12}$"], 0, "Common denom 12: $4x/12 - 3x/12$.", 15, 'medium'),
            generateQuestion("Cost of 5 items is D. Cost of 1 item?", ["D/5", "5D", "5/D", "D-5"], 0, "Divide total by quantity.", 15, 'medium'),
            generateQuestion("If $y = \\frac{k}{x}$ and $y=4$ when $x=2$, find k.", ["8", "2", "6", "0.5"], 0, "$4 = k/2 \\Rightarrow k=8$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Train goes 100km at $v$ km/h. Return trip is $(v+10)$ km/h. Total time?", ["$\\frac{100}{v} + \\frac{100}{v+10}$", "$\\frac{200}{2v+10}$", "$\\frac{100}{v(v+10)}$", "$\\frac{200}{v+10}$"], 0, "**Lesson**: Sum of individual times: $D/S_1 + D/S_2$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{2}{x-1} + \\frac{3}{x+1} = 1$.", ["0, 5", "2, 3", "-5, 0", "1, -1"], 0, "$2(x+1) + 3(x-1) = x^2-1 \\Rightarrow 5x - 1 = x^2 - 1 \\Rightarrow x^2 - 5x = 0$.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - 1}{x^2 + x}$.", ["$\\frac{x-1}{x}$", "$\\frac{x+1}{x}$", "$-1/x$", "$1-1/x$"], 0, "$(x-1)(x+1) / x(x+1)$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{4}{x} = \\frac{3}{x-2}$.", ["8", "2", "-8", "4"], 0, "$4(x-2) = 3x \\Rightarrow 4x-8=3x \\Rightarrow x=8$.", 20, 'hard'),
            generateQuestion("A car travels 30km at speed x. Takes 1 hour less if speed is x+5. Equation?", ["$\\frac{30}{x} - \\frac{30}{x+5} = 1$", "$\\frac{30}{x+5} - \\frac{30}{x} = 1$", "$\\frac{30}{x} + \\frac{30}{x+5} = 1$", "$\\frac{x}{30} - \\frac{x+5}{30} = 1$"], 0, "Slower time - Faster time = 1 hour diff.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{a}{b} - \\frac{c}{d}$.", ["$\\frac{ad-bc}{bd}$", "$\\frac{a-c}{b-d}$", "$\\frac{ad+bc}{bd}$", "$\\frac{ac}{bd}$"], 0, "Common denominator bd.", 20, 'hard'),
            generateQuestion("Solve $\\frac{1}{x} + \\frac{1}{2x} = 3$.", ["0.5", "1.5", "0.33", "2"], 0, "$3/2x = 3 \\Rightarrow 6x=3 \\Rightarrow x=0.5$.", 20, 'hard'),
            generateQuestion("Make $x$ the subject: $y = \\frac{1-x}{1+x}$.", ["$\\frac{1-y}{1+y}$", "$\\frac{1+y}{1-y}$", "$\\frac{y-1}{y+1}$", "$\\frac{y}{y+1}$"], 0, "$y+xy = 1-x \\Rightarrow x(y+1) = 1-y \\Rightarrow x=\\frac{1-y}{1+y}$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{x^2-9}{x-3} = 7$.", ["4", "10", "3", "No variable"], 0, "$(x-3)(x+3)/(x-3) = 7 \\Rightarrow x+3=7 \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+3)^2$.", ["$x^2+6x+9$", "$x^2+9$", "$x^2+3x+9$", "$x^2+6x+3$"], 0, "Algebra expansion link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Subtract: $\\frac{3x}{5} - \\frac{x}{5}$.", ["$\\frac{2x}{5}$", "$\\frac{2x}{10}$", "$\\frac{4x}{5}$", "$2x$"], 0, "**Lesson**: Denominators match, subtract numerators.", 10, 'easy'),
            generateQuestion("Multiply $\\frac{x}{2} \\times \\frac{4}{x}$.", ["2", "4", "x", "8"], 0, "**Lesson**: $4x / 2x = 2$.", 10, 'easy'),
            generateQuestion("Solve $\\frac{x}{3} = 5$.", ["15", "5/3", "8", "2"], 0, "Multiply by 3.", 10, 'easy'),
            generateQuestion("If you travel $d$ km in $t$ hours, what is average speed?", ["$d/t$", "$dt$", "$t/d$", "$d+t$"], 0, "Speed is Distance over Time.", 10, 'easy'),
            generateQuestion("Simplify fraction $\\frac{10y}{5y}$.", ["2", "5", "y", "10"], 0, "Letters cancel, 10/5=2.", 10, 'easy'),
            generateQuestion("Add $\\frac{x}{a} + \\frac{x}{a}$.", ["$\\frac{2x}{a}$", "$\\frac{2x}{2a}$", "$\\frac{x^2}{a}$", "$x$"], 0, "Same denom, add numerator.", 10, 'easy'),
            generateQuestion("Divide $\\frac{x}{2} \\div 2$.", ["$\\frac{x}{4}$", "x", "$\\frac{x}{2}$", "1"], 0, "Dividing by 2 is multiplying by 1/2.", 10, 'easy'),
            generateQuestion("What is $\\frac{0}{x}$ ($x \\neq 0$)?", ["0", "x", "Undefined", "1"], 0, "Zero divided by anything non-zero is 0.", 10, 'easy'),
            generateQuestion("What is $\\frac{x}{0}$?", ["Undefined", "0", "x", "1"], 0, "Cannot divide by zero.", 10, 'easy'),
            generateQuestion("Solve $\\frac{-x}{2} = 3$.", ["-6", "6", "-1.5", "1.5"], 0, "-x = 6.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $\\frac{x+2}{3} = 4$.", ["10", "12", "14", "8"], 0, "$x+2 = 12$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x^2-16}{x+4}$.", ["$x-4$", "$x+4$", "$-4$", "4"], 0, "Difference of squares.", 15, 'medium'),
            generateQuestion("Solve $\\frac{5}{x} = \\frac{2}{3}$.", ["7.5", "3.33", "10", "15"], 0, "$2x = 15 \\Rightarrow x=7.5$.", 15, 'medium'),
            generateQuestion("Distance is 50. Speed is $v-2$. Time?", ["$\\frac{50}{v-2}$", "$50(v-2)$", "$\\frac{v-2}{50}$", "$\\frac{50}{v}-2$"], 0, "Time = Dist / Speed.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{x}{2} + \\frac{x}{5}$.", ["$\\frac{7x}{10}$", "$\\frac{2x}{7}$", "$\\frac{7x}{7}$", "$\\frac{10x}{7}$"], 0, "$5x/10 + 2x/10 = 7x/10$.", 15, 'medium'),
            generateQuestion("Solve $\\frac{2x-1}{3} = 5$.", ["8", "7", "16", "3"], 0, "$2x-1 = 15 \\Rightarrow 2x=16$.", 15, 'medium'),
            generateQuestion("Divide fractions $\\frac{x}{3} \\div \\frac{x^2}{6}$.", ["$\\frac{2}{x}$", "$\\frac{x}{2}$", "$\\frac{x^3}{18}$", "2"], 0, "$x/3 \\times 6/x^2 = 6x/3x^2 = 2/x$.", 15, 'medium'),
            generateQuestion("Cost of x items is 20. Cost of x+2 items?", ["$\\frac{20(x+2)}{x}$", "$20x+40$", "$\\frac{20}{x+2}$", "22"], 0, "One item is 20/x. Times x+2.", 15, 'medium'),
            generateQuestion("Solve $1 - \\frac{1}{x} = \\frac{1}{2}$.", ["2", "1.5", "-2", "0.5"], 0, "$1/x = 1/2 \\Rightarrow x=2$.", 15, 'medium'),
            generateQuestion("Simplify $\\frac{a^2 b}{a b^2}$.", ["$a/b$", "$b/a$", "$ab$", "1"], 0, "Cancel a and b.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Pipe A fills pool in 2h. Pipe B fills in 3h. Together time?", ["1.2h", "5h", "2.5h", "1h"], 0, "$1/2 + 1/3 = 5/6$ tank per hour. $6/5 = 1.2$ hours.", 20, 'hard'),
            generateQuestion("Make y the subject: $x = \\frac{y-2}{y+3}$.", ["$y = \\frac{-3x-2}{x-1}$", "$y = \\frac{3x+2}{x-1}$", "$y = \\frac{2x+3}{1-x}$", "$y = \\frac{3x-2}{x+1}$"], 0, "$xy+3x = y-2 \\Rightarrow xy-y = -3x-2 \\Rightarrow y(x-1) = -3x-2 \\Rightarrow y = \\frac{-3x-2}{x-1}$.", 20, 'hard'),
            generateQuestion("A boat travels 10km up river (speed v-2) and 10km down (v+2). Total time 1 hour. Eq?", ["$\\frac{10}{v-2} + \\frac{10}{v+2} = 1$", "$\\frac{10}{v-2} - \\frac{10}{v+2} = 1$", "$\\frac{v-2}{10} + \\frac{v+2}{10} = 1$", "$\\frac{10}{v} = 1$"], 0, "Time up + Time down = Total time.", 20, 'hard'),
            generateQuestion("Simplify $\\frac{x^2 - 4}{x^2 + 2x}$.", ["$\\frac{x-2}{x}$", "$\\frac{x+2}{x}$", "$-4/2x$", "$\\frac{x-2}{2}$"], 0, "$(x-2)(x+2)/x(x+2) = (x-2)/x$.", 20, 'hard'),
            generateQuestion("Simplify complex fraction $\\frac{1/x}{1/y}$.", ["$y/x$", "$x/y$", "$1/xy$", "$xy$"], 0, "$1/x \\times y/1 = y/x$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{x}{x-1} = \\frac{x+2}{x}$.", ["-2", "2", "0", "1"], 0, "$x^2 = (x-1)(x+2) \\Rightarrow x^2 = x^2+x-2 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("If 5 men paint a house in 10 days, how long for 8 men?", ["6.25 days", "16 days", "4 days", "10 days"], 0, "Inverse prop: 5*10 = 50 man-days. 50/8 = 6.25.", 20, 'hard'),
            generateQuestion("Solve $\\frac{1}{x} + \\frac{1}{x} = 4$.", ["0.5", "2", "4", "0.25"], 0, "$2/x = 4 \\Rightarrow x=0.5$.", 20, 'hard'),
            generateQuestion("Solve $\\frac{x+1}{x-1} = 3$.", ["2", "-2", "0.5", "1.5"], 0, "$x+1 = 3x-3 \\Rightarrow 2x=4 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which similarity test proves two triangles similar if two angles match?", ["AA", "SSS", "SAS", "RHS"], 0, "Geometry link: Third angle must match too.", 10, 'expert')
        ]
    },
    'g3-s34-funcs': {
        learning: [
            // Easy (1-10)
            generateQuestion("Which part of quadratic formula is 'Discriminant'?", ["$b^2 - 4ac$", "$-b$", "$2a$", "$\\sqrt{b^2-4ac}$"], 0, "**Lesson**: It's strictly the $b^2 - 4ac$ under the root.", 10, 'easy'),
            generateQuestion("If Discriminant is zero, how many real roots exist?", ["1", "0", "2", "Infinite"], 0, "**Lesson**: $\\pm \\sqrt{0}$ does nothing, so 1 repeated root.", 10, 'easy'),
            generateQuestion("If Discriminant is positive, how many roots?", ["2", "1", "0", "Infinite"], 0, "$\\pm$ yields two distinct values.", 10, 'easy'),
            generateQuestion("If Discriminant is negative?", ["0", "1", "2", "Infinite"], 0, "Negative inside square root is undefined in reals (0 roots).", 10, 'easy'),
            generateQuestion("What is the quadratic formula?", ["$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", "$x = \\frac{b \\pm \\sqrt{b^2 + 4ac}}{2a}$", "$x = -b \\pm \\dots$", "None"], 0, "The classic armor against unsolvable quadratics.", 10, 'easy'),
            generateQuestion("What shape is $y = \\frac{1}{x}$?", ["Reciprocal curve (Hyperbola)", "Parabola", "Line", "Circle"], 0, "It splits into two floating curves.", 10, 'easy'),
            generateQuestion("Where is the asymptote for $y = 1/x$?", ["$x=0, y=0$", "$x=1, y=1$", "No asymptote", "$y=x$"], 0, "It never touches the axes.", 10, 'easy'),
            generateQuestion("Shape of $y = x^3$?", ["Cubic curve", "Parabola", "Line", "Ellipse"], 0, "It snakes through the origin.", 10, 'easy'),
            generateQuestion("Does $y=x^3$ go through negatives?", ["Yes", "No"], 0, "Negative times negative times negative is negative.", 10, 'easy'),
            generateQuestion("Exponential graph $y = 2^x$. Does it ever cross x-axis?", ["No", "Yes"], 0, "$2^x$ is always positive.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $x^2 + 2x - 1 = 0$. Value of the discriminant?", ["8", "4", "-8", "0"], 0, "**Lesson**: $2^2 - 4(1)(-1) = 4 + 4 = 8$.", 15, 'medium'),
            generateQuestion("The reciprocal graph $y = \\frac{2}{x}$ has asymptotes at:", ["$x=0, y=0$", "$y=2$", "$x=2$", "No asymptotes"], 0, "It never touches axes. $x \\neq 0$ and $y \\neq 0$.", 15, 'medium'),
            generateQuestion("Discriminant of $x^2 - 4x + 4 = 0$?", ["0", "16", "32", "-16"], 0, "$16 - 16 = 0$.", 15, 'medium'),
            generateQuestion("Does $y = 2^x$ intersect the y-axis? Where?", ["Yes, at y=1", "Yes, at y=2", "No", "Yes, at y=0"], 0, "$2^0 = 1$.", 15, 'medium'),
            generateQuestion("Shape of $y = -x^3$?", ["Cubic going down", "Cubic going up", "Parabola down", "Straight line"], 0, "Reflected across x-axis.", 15, 'medium'),
            generateQuestion("Solve $x^2 - 5x + 1 = 0$ using formula. Discriminant?", ["21", "29", "25", "-4"], 0, "$25 - 4(1)(1) = 21$.", 15, 'medium'),
            generateQuestion("Intersection of $y = x^3$ and $y=x$?", ["0, 1, -1", "0", "1", "No intersection"], 0, "$x^3 - x = 0 \\Rightarrow x(x-1)(x+1) = 0$.", 15, 'medium'),
            generateQuestion("Asymptote of $y = \\frac{1}{x} + 2$?", ["$x=0, y=2$", "$x=0, y=0$", "$x=2, y=0$", "None"], 0, "Shifted up by 2.", 15, 'medium'),
            generateQuestion("Does $y = 3^{-x}$ grow or decay?", ["Decay", "Grow", "Stay flat", "Oscillate"], 0, "Same as $(1/3)^x$. It gets smaller.", 15, 'medium'),
            generateQuestion("Which graph grows fastest for very large x?", ["$y=2^x$", "$y=x^3$", "$y=x^2$", "$y=100x$"], 0, "Exponentials always beat polynomials eventually.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("For what 'k' does $x^2 + kx + 9 = 0$ have exactly 1 root?", ["$\\pm 6$", "6", "-6", "9"], 0, "Discriminant = $k^2 - 36 = 0 \\Rightarrow k = \\pm 6$.", 20, 'hard'),
            generateQuestion("For what 'c' does $2x^2 - 4x + c = 0$ have NO real roots?", ["$c > 2$", "$c < 2$", "$c = 2$", "$c > 4$"], 0, "$16 - 8c < 0 \\Rightarrow 8c > 16 \\Rightarrow c > 2$.", 20, 'hard'),
            generateQuestion("Find points where $y = 1/x$ and $y = x$ meet.", ["(1,1) & (-1,-1)", "(1,1)", "No intersection", "(0,0)"], 0, "$1/x = x \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1$.", 20, 'hard'),
            generateQuestion("Graph $y = (x-1)(x-2)(x-3)$ crosses x-axis how many times?", ["3", "2", "1", "0"], 0, "Cubic with 3 distinct roots.", 20, 'hard'),
            generateQuestion("Intersection of $y = 3^x$ and $y = 9$?", ["(2, 9)", "(3, 9)", "(9, 9)", "(1, 9)"], 0, "$3^x = 9 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Transform $y=x^2$ to $y=(x-3)^2$. Effect?", ["Shift right 3", "Shift left 3", "Shift up 3", "Shift down 3"], 0, "Minus inside bracket shifts right.", 20, 'hard'),
            generateQuestion("Transform $y=x^3$ to $y=x^3 + 5$. Effect?", ["Shift up 5", "Shift down 5", "Shift left 5", "Shift right 5"], 0, "Plus outside shifts up.", 20, 'hard'),
            generateQuestion("How many roots for $x^4 - 5x^2 + 4 = 0$?", ["4", "2", "0", "1"], 0, "Quadratic in $x^2$: $(x^2-1)(x^2-4)=0 \\Rightarrow x=\\pm 1, \\pm 2$.", 20, 'hard'),
            generateQuestion("If $y = a \\times 2^x$ passes through (1, 10), find a.", ["5", "10", "2", "20"], 0, "$10 = a \\times 2 \\Rightarrow a=5$.", 20, 'hard'),
            generateQuestion("[Interleaved] Volume of sphere radius 3?", ["$36\\pi$", "$27\\pi$", "$9\\pi$", "$108\\pi$"], 0, "Mensuration link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Discriminant > 0 means the parabola crosses the x-axis...", ["Twice", "Once", "Never", "Infinite times"], 0, "**Lesson**: Two distinct roots.", 10, 'easy'),
            generateQuestion("If $b^2 - 4ac < 0$?", ["No real roots", "One root", "Two roots", "Can't tell"], 0, "**Lesson**: Floating parabola.", 10, 'easy'),
            generateQuestion("In formula, the denominator is?", ["$2a$", "$2b$", "$4a$", "$a$"], 0, "Over 2a.", 10, 'easy'),
            generateQuestion("If formula has $\\pm \\sqrt{16}$, what are the added/subtracted parts?", ["4 and -4", "16", "8", "$\\pm 256$"], 0, "Root 16 is 4.", 10, 'easy'),
            generateQuestion("Curve that looks like an S-shape through origin?", ["Cubic", "Parabola", "Reciprocal", "Exponential"], 0, "Cubic $y=x^3$.", 10, 'easy'),
            generateQuestion("Curve that splits into two opposite corners?", ["Reciprocal", "Cubic", "Exponential", "Line"], 0, "$y=1/x$ hyperbola.", 10, 'easy'),
            generateQuestion("Growth curve that gets perfectly flat on one side and shoots up on the other?", ["Exponential", "Reciprocal", "Cubic", "Parabola"], 0, "$y=a^x$.", 10, 'easy'),
            generateQuestion("Asymptote means a line a curve...", ["Gets closer to, but never touches", "Crosses twice", "Is perpendicular to", "Circles around"], 0, "It approaches infinitely.", 10, 'easy'),
            generateQuestion("Is $y=x^{-1}$ the same as reciprocal graph?", ["Yes", "No"], 0, "Indices: $x^{-1} = 1/x$.", 10, 'easy'),
            generateQuestion("Can an exponential curve represent population growth?", ["Yes", "No"], 0, "Yes, populations multiply.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve $x^2 - x - 1 = 0$. Roots are?", ["$\\frac{1 \\pm \\sqrt{5}}{2}$", "$\\frac{-1 \\pm \\sqrt{5}}{2}$", "$\\frac{1 \\pm \\sqrt{3}}{2}$", "None"], 0, "Golden ratio equation.", 15, 'medium'),
            generateQuestion("Graph $y = \\frac{-1}{x}$. Which quadrants?", ["2nd and 4th (top left, bottom right)", "1st and 3rd", "1st and 2nd", "3rd and 4th"], 0, "Reflected across x-axis.", 15, 'medium'),
            generateQuestion("Discriminant of $2x^2 + x + 5 = 0$?", ["-39", "41", "-35", "39"], 0, "$1 - 4(2)(5) = 1 - 40 = -39$.", 15, 'medium'),
            generateQuestion("Intersection of $y = 1/x$ and $y = -x$?", ["No intersection", "(1,-1)", "(-1,1)", "(0,0)"], 0, "$1/x = -x \\Rightarrow x^2 = -1$. No real solutions.", 15, 'medium'),
            generateQuestion("Find a if $y = a^x$ passes through (2, 25).", ["5", "25", "2", "12.5"], 0, "$a^2 = 25 \\Rightarrow a=5$ (base must be positive).", 15, 'medium'),
            generateQuestion("Value of $3^{-2}$?", ["1/9", "-9", "-6", "0.11"], 0, "$1/3^2 = 1/9$.", 15, 'medium'),
            generateQuestion("How many times does $y = x^3 - 4x$ cross x-axis?", ["3", "2", "1", "0"], 0, "$x(x-2)(x+2)=0$. crosses 3 times.", 15, 'medium'),
            generateQuestion("Solve $2x^2 - 3x - 5 = 0$ using formula. Discriminant?", ["49", "31", "9", "-31"], 0, "$9 - 4(2)(-5) = 9 + 40 = 49$.", 15, 'medium'),
            generateQuestion("Transform $y = x^3$ to $y = -x^3$.", ["Reflect over x-axis", "Shift down", "Rotate $90^\\circ$", "Reflect over y=x"], 0, "Negation is reflection.", 15, 'medium'),
            generateQuestion("Is $y = 2^x$ a function?", ["Yes", "No"], 0, "Passes vertical line test.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("For what 'k' does $kx^2 + 4x + 1 = 0$ have equal roots?", ["4", "2", "1", "8"], 0, "$16 - 4k = 0 \\Rightarrow k=4$.", 20, 'hard'),
            generateQuestion("Line $y=mx+c$ is a tangent to $y=x^2$ if the intersection's discriminant is?", ["0", ">0", "<0", "1"], 0, "Tangent touches at exactly 1 point, so discriminant MUST be 0.", 20, 'hard'),
            generateQuestion("Intersection of $y = 2^x$ and $y = 4^{x-1}$. Find x.", ["2", "1", "0", "3"], 0, "$2^x = 2^{2(x-1)} \\Rightarrow x = 2x - 2 \\Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Find roots of $x^4 - 13x^2 + 36 = 0$.", ["$\\pm 3, \\pm 2$", "9, 4", "$\\pm 9, \\pm 4$", "$\\pm 6$"], 0, "$(x^2-9)(x^2-4)=0$. Roots 3, -3, 2, -2.", 20, 'hard'),
            generateQuestion("Graph $y = \\frac{1}{x-2} + 3$. Vertical asymptote?", ["$x=2$", "$x=-2$", "$y=3$", "$y=2$"], 0, "Bottom cannot be zero, so $x=2$.", 20, 'hard'),
            generateQuestion("Horizontal asymptote for $y = \\frac{1}{x-2} + 3$?", ["$y=3$", "$y=2$", "$x=2$", "$x=3$"], 0, "As $x \\rightarrow \\infty$, $1/(x-2) \\rightarrow 0$. So $y \\rightarrow 3$.", 20, 'hard'),
            generateQuestion("Value of $8^{-2/3}$?", ["1/4", "-4", "1/16", "4"], 0, "Cube root of 8 is 2. $2^{-2} = 1/4$.", 20, 'hard'),
            generateQuestion("Equation of tangent to $y=x^2$ at (1,1). (Requires turning point logic or calculus)", ["$y=2x-1$", "$y=x$", "$y=2x+1$", "$y=x^2$"], 0, "Gradient is $2x=2$. $y-1 = 2(x-1) \\Rightarrow y=2x-1$.", 20, 'hard'),
            generateQuestion("Which is greater: $e^{\\pi}$ or $\\pi^e$? (Trivia conceptual)", ["$e^{\\pi}$", "$\\pi^e$", "Equal", "Cannot compute"], 0, "$e^{\\pi} \\approx 23.14$, $\\pi^e \\approx 22.46$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $3x - 7 = 14$.", ["7", "21", "7/3", "-7"], 0, "Basic algebra link.", 10, 'expert')
        ]
    },
    'g3-s34-sets': {
        learning: [
            // Easy (1-10)
            generateQuestion("The Union ($A \\cup B$) represents combining elements in:", ["A only", "B only", "A or B (or both)", "A and B strictly"], 2, "**Lesson**: Union is like marriage; it brings everything from both together!", 10, 'easy'),
            generateQuestion("What is the raw definition of the complement $A'$?", ["Everything in A", "Everything outside A", "Empty set", "Universal set"], 1, "**Lesson**: $A'$ means everything in the universe EXCEPT what's inside A.", 10, 'easy'),
            generateQuestion("The Intersection ($A \\cap B$) represents elements in:", ["A only", "B only", "A or B", "Both A and B"], 3, "Intersection means overlap.", 10, 'easy'),
            generateQuestion("Universal set $\\xi$ means?", ["Empty set", "Everything under consideration", "Infinite set", "A subset"], 1, "The total universe for the problem.", 10, 'easy'),
            generateQuestion("Subset $A \\subset B$ means?", ["A is bigger than B", "A and B are equal", "Every element of A is in B", "A and B don't overlap"], 2, "A is entirely contained within B.", 10, 'easy'),
            generateQuestion("Empty set $\\emptyset$ has how many elements?", ["1", "0", "Infinite", "Depends"], 1, "It is completely empty.", 10, 'easy'),
            generateQuestion("What does $n(A)$ represent?", ["Number of elements in A", "A new set", "Negative A", "Intersection of A to n"], 0, "Cardinality (size) of the set.", 10, 'easy'),
            generateQuestion("If A and B are disjoint, their intersection is?", ["$\\xi$", "A", "B", "$\\emptyset$"], 3, "Disjoint means no overlap.", 10, 'easy'),
            generateQuestion("Is 2 an element of $\\{1, 2, 3\\}$?", ["Yes", "No"], 0, "It's inside the curly braces.", 10, 'easy'),
            generateQuestion("$(A \\cup B)'$ means?", ["Everything outside A and B", "Everything in A and B", "A intersect B", "Empty set"], 0, "Complete outside of the union.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If Universe $\\xi=\\{1,2,3,4\\}$ and $A=\\{1,2\\}$, what forms $A'$?", ["$\\{1,2\\}$", "$\\{3,4\\}$", "$\\{1,2,3,4\\}$", "$\\emptyset$"], 1, "**Lesson**: Only 3 and 4 live outside the walls of A.", 15, 'medium'),
            generateQuestion("If $n(A)=5, n(B)=4$ and they are disjoint, find $n(A \\cup B)$.", ["1", "9", "20", "5"], 1, "No overlap, so $5+4=9$.", 15, 'medium'),
            generateQuestion("$\\xi = \\{1,2,3,4,5\\}$, $A=\\{1,2,3\\}$, $B=\\{3,4\\}$. Find $A \\cap B$.", ["$\\{1,2\\}$", "$\\{3\\}$", "$\\{4\\}$", "$\\{1,2,3,4\\}$"], 1, "Only 3 is in both.", 15, 'medium'),
            generateQuestion("From prev question, find $(A \\cap B)'$.", ["$\\{1,2,4,5\\}$", "$\\{1,2,4\\}$", "$\\{3\\}$", "$\\emptyset$"], 0, "Everything except 3.", 15, 'medium'),
            generateQuestion("If $A \\subset B$, then $A \\cap B = ?$", ["$\\xi$", "$A$", "$B$", "$\\emptyset$"], 1, "If A is perfectly inside B, the overlap is just A.", 15, 'medium'),
            generateQuestion("If $A \\subset B$, then $A \\cup B = ?$", ["$\\xi$", "$A$", "$B$", "$\\emptyset$"], 2, "B swallows A completely, so the union is just B.", 15, 'medium'),
            generateQuestion("Solve: $A \\cap A'$.", ["$\\xi$", "$A$", "$A'$", "$\\emptyset$"], 3, "A set cannot overlap with its own exact opposite.", 15, 'medium'),
            generateQuestion("Solve: $A \\cup A'$.", ["$\\xi$", "$A$", "$A'$", "$\\emptyset$"], 0, "Combining a set with its exact opposite gives the whole universe.", 15, 'medium'),
            generateQuestion("If $X = \\{x: x \\text{ is even}, 1 \\le x \\le 5\\}$. Elements?", ["2,4", "1,3,5", "2,4,6", "2"], 0, "List the even integers in that range.", 15, 'medium'),
            generateQuestion("Which is true for empty set?", ["$\\emptyset \\subset A$ for any A", "$\\emptyset \\cup A = \\emptyset$", "n(\\emptyset) = 1"], 0, "Empty set is a subset of EVERY set.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If $n(A \\cup B) = 30$, $n(A)=20$, and $n(B)=15$, find $n(A \\cap B)$.", ["5", "10", "15", "0"], 0, "**Lesson**: $20+15=35$. Since union is 30, 5 overlap.", 20, 'hard'),
            generateQuestion("In class of 40, 20 like Math, 15 like Science, 10 like both. How many like neither?", ["5", "10", "15", "20"], 2, "Union = $20+15-10=25$. $40-25=15$ outside.", 20, 'hard'),
            generateQuestion("If $n(A)=x, n(B)=2x, n(A \\cap B)=5, n(A \\cup B)=25$. Find x.", ["5", "10", "15", "8"], 1, "$x + 2x - 5 = 25 \\Rightarrow 3x=30 \\Rightarrow x=10$.", 20, 'hard'),
            generateQuestion("From a class of 30, everybody plays soccer or tennis. 20 play soccer, 25 play tennis. How many play BOTH?", ["15", "5", "10", "20"], 0, "$20+25-x = 30 \\Rightarrow x=15$.", 20, 'hard'),
            generateQuestion("Simplify $(A \\cup B) \\cap (A \\cup B')$.", ["$A$", "$B$", "$A'$", "$\\emptyset$"], 0, "Distributive law: $A \\cup (B \\cap B') = A \\cup \\emptyset = A$.", 20, 'hard'),
            generateQuestion("Simplify $(A \\cap B) \\cup (A \\cap B')$.", ["$A$", "$B$", "$A'$", "$\\emptyset$"], 0, "Distributive law: $A \\cap (B \\cup B') = A \\cap \\xi = A$.", 20, 'hard'),
            generateQuestion("De Morgan's Laws state $(A \\cap B)' = ?$", ["$A' \\cup B'$", "$A' \\cap B'$", "$A \\cup B$", "$\\xi$"], 0, "Complement flips the sign: intersect becomes union.", 20, 'hard'),
            generateQuestion("50 people. 30 drink tea. 25 drink coffee. 10 drink neither. How many drink both?", ["15", "5", "20", "10"], 0, "Drink at least one = $50-10=40$. $30+25-x=40 \\Rightarrow x=15$.", 20, 'hard'),
            generateQuestion("Are subsets of an infinite set always infinite?", ["No", "Yes"], 0, "You can have finite subsets, like {1,2} from Integers.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x-5)^2$.", ["$x^2-25$", "$x^2-10x+25$", "$x^2+25$", "$x^2+10x+25$"], 1, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("If you combine all elements of A and B without repeating, you get the:", ["Intersection", "Union", "Complement", "Universal Set"], 1, "That is the definition of Union.", 10, 'easy'),
            generateQuestion("The symbol $\\in$ means:", ["Is a subset of", "Is not an element of", "Is an element of", "Union"], 2, "Element belonging to a set.", 10, 'easy'),
            generateQuestion("If A and B don't overlap, they are called?", ["Disjoint", "Conjoint", "Subset", "Universal"], 0, "Separated domains.", 10, 'easy'),
            generateQuestion("The complement $A'$ contains:", ["All elements in A", "No elements", "All elements NOT in A", "Only common elements"], 2, "Prime means opposite.", 10, 'easy'),
            generateQuestion("Which is correct?", ["$\\emptyset = \\{0\\}$", "$\\emptyset = 0$", "$\\emptyset$ is empty", "$\\emptyset$ has 1 element"], 2, "Empty set contains nothing, not even zero.", 10, 'easy'),
            generateQuestion("$n(\\emptyset) = ?$", ["0", "1", "-1", "Infinite"], 0, "Size of nothing is zero.", 10, 'easy'),
            generateQuestion("Venn diagrams use a rectangle to represent:", ["Subset", "Intersection", "Universal set $\\xi$", "Empty set"], 2, "The universe is the box.", 10, 'easy'),
            generateQuestion("Circles in a Venn diagram represent:", ["Individual sets", "Universal sets", "Nothing", "Numbers"], 0, "Inside the universe.", 10, 'easy'),
            generateQuestion("What is $A \\cup A$?", ["$\\emptyset$", "$\\xi$", "A", "2A"], 2, "A set united with itself is just itself.", 10, 'easy'),
            generateQuestion("What is $A \\cap A$?", ["A", "$\\emptyset$", "$\\xi$", "2A"], 0, "Overlapping with itself is itself.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If $n(A \\cup B) = n(A) + n(B)$, what must be true?", ["A and B are disjoint", "$A \\subset B$", "$B \\subset A$", "A = B"], 0, "There is no overlap to subtract.", 15, 'medium'),
            generateQuestion("If $n(A)=10$, $n(B)=12$, Max possible $n(A \\cap B)$?", ["0", "10", "12", "22"], 1, "If A is completely inside B, overlap is 10.", 15, 'medium'),
            generateQuestion("Min possible $n(A \\cap B)$ from prev question, if universe is 15?", ["0", "7", "2", "10"], 1, "If they try to separate, $10+12-x \\le 15 \\Rightarrow 22-x \\le 15 \\Rightarrow x \\ge 7$.", 15, 'medium'),
            generateQuestion("If $\\xi = \\{1,2,3,4,5\\}$, and $A' = \\{4,5\\}$, find A.", ["$\\{1,2,3\\}$", "$\\{4,5\\}$", "$\\emptyset$", "$\\{1,2,3,4,5\\}$"], 0, "Complement of a complement is itself.", 15, 'medium'),
            generateQuestion("What is $\\xi' $?", ["A", "$\\emptyset$", "$\\xi$", "B"], 1, "Complement of everything is nothing.", 15, 'medium'),
            generateQuestion("What is $\\emptyset' $?", ["$\\xi$", "$\\emptyset$", "A", "B"], 0, "Complement of nothing is everything.", 15, 'medium'),
            generateQuestion("If A = {even numbers}, B = {multiples of 5}. Is 10 in $A \\cap B$?", ["Yes", "No"], 0, "10 is both even and a multiple of 5.", 15, 'medium'),
            generateQuestion("Is 15 in $A \\cup B$ (using prev A, B)?", ["Yes", "No"], 0, "15 is a multiple of 5.", 15, 'medium'),
            generateQuestion("A = {Factors of 8}. B = {Factors of 12}. Find $A \\cap B$.", ["{1,2,4,8}", "{1,2,4}", "{1,2,3,4,6}", "{1,2,4,6,8,12}"], 1, "Common factors are 1, 2, 4.", 15, 'medium'),
            generateQuestion("$n(A \\cup B)$ for prev question?", ["8", "7", "6", "5"], 1, "A={1,2,4,8}, B={1,2,3,4,6,12}. Union = {1,2,3,4,6,8,12}. 7 elements.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("100 people. 60 read Paper A, 50 read Paper B, 20 read neither. How many read ONLY A?", ["40", "30", "20", "10"], 1, "At least one = 80. $60+50-x = 80 \\Rightarrow x=30$ (Both). Only A = $60-30=30$.", 20, 'hard'),
            generateQuestion("Group of 40 students. 25 take Chem, 20 take Bio. 5 take neither. How many take ONLY Bio?", ["20", "15", "10", "5"], 2, "Union = 35. $25+20-x=35 \\Rightarrow x=10$ (both). Only Bio = $20-10=10$.", 20, 'hard'),
            generateQuestion("If $A \\subset B'$ then what is true about A and B?", ["They are disjoint", "They are equal", "A is universe", "$B \\subset A$"], 0, "If A is entirely outside B, they have no overlap.", 20, 'hard'),
            generateQuestion("Simplify $A \\cap (A \\cup B)$.", ["$B$", "$A$", "$\\xi$", "$\\emptyset$"], 1, "Absorption law.", 20, 'hard'),
            generateQuestion("Simplify $A \\cup (A \\cap B)$.", ["$A$", "$B$", "$\\xi$", "$\\emptyset$"], 0, "Absorption law.", 20, 'hard'),
            generateQuestion("De Morgan's Laws: $(A \\cup B)' = ?$", ["$A' \\cap B'$", "$A' \\cup B'$", "$A \\cap B$", "$\\xi$"], 0, "Complement of union is intersection of complements.", 20, 'hard'),
            generateQuestion("If $n(A \\cup B \\cup C) = 100$ and $n(A') = 40$. How many people are in A?", ["60", "40", "100", "0"], 0, "Assuming universe is union. $100-40=60$.", 20, 'hard'),
            generateQuestion("Three intersecting sets in a Venn diagram form how many distinct regions (including outside)?", ["6", "7", "8", "9"], 2, "$2^3 = 8$ possible combinations.", 20, 'hard'),
            generateQuestion("In a Venn diagram, the region representing $A \\cap B \\cap C'$ is?", ["In all 3", "In A and B but outside C", "In A only", "Outside all"], 1, "Intersection with prime means exclude it.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2 - 25 = 0$.", ["$\\pm 5$", "5", "25", "-5"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g3-s34-matrices': {
        learning: [
            // Easy (1-10)
            generateQuestion("What is the order of a matrix with 3 rows and 2 columns?", ["3x2", "2x3", "6", "3+2"], 0, "**Lesson**: Always Row x Column.", 10, 'easy'),
            generateQuestion("Can you multiply a (2x3) matrix by a (2x2) matrix as $A \\times B$?", ["Yes", "No"], 1, "**Lesson**: Multiplication fails because inner dimensions (3 and 2) don't match.", 10, 'easy'),
            generateQuestion("What is the order of a row matrix?", ["1xN", "Nx1", "1x1", "NxN"], 0, "It only has 1 row.", 10, 'easy'),
            generateQuestion("What is a column matrix?", ["Matrix with 1 row", "Matrix with 1 column", "Square matrix", "Identity"], 1, "Only 1 vertical column.", 10, 'easy'),
            generateQuestion("Two matrices can be added ONLY IF:", ["Same Rows", "Same Columns", "Same Dimensions", "Square"], 2, "They must be identical in order so components match perfectly.", 10, 'easy'),
            generateQuestion("Find $2 \\begin{pmatrix} 1 & 0 \\end{pmatrix}$.", ["$\\begin{pmatrix} 2 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\end{pmatrix}$"], 0, "Scale every element by 2.", 10, 'easy'),
            generateQuestion("Find $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.", ["$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$"], 0, "Add corresponding elements.", 10, 'easy'),
            generateQuestion("Find $3 \\times \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.", ["$\\begin{pmatrix} 6 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ -1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$"], 0, "Multiply elements by 3.", 10, 'easy'),
            generateQuestion("Identity matrix $I$?", ["$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"], 0, "Main diagonal is 1s, rest are 0s.", 10, 'easy'),
            generateQuestion("Zero matrix $O$?", ["All 0s", "All 1s", "Identity", "Diagonal"], 0, "Every element is exactly 0.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If Matrix $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$, find $2A$.", ["$\\begin{pmatrix} 2 & 4 \\\\ 0 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 2 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 2 & 6 \\end{pmatrix}$"], 0, "**Lesson**: Double every single element.", 15, 'medium'),
            generateQuestion("Multiply dimensions: (2x3) x (3x4). Resulting order?", ["2x4", "3x3", "2x3", "Cannot multiply"], 0, "Outer dimensions are 2x4.", 15, 'medium'),
            generateQuestion("Find $A \\times I$.", ["A", "I", "0", "1"], 0, "Multiplying by Identity leaves matrix unchanged.", 15, 'medium'),
            generateQuestion("Is $AB = BA$ always true for matrices?", ["Yes", "No"], 1, "Matrix multiplication is NOT commutative.", 15, 'medium'),
            generateQuestion("Multiply $\\begin{pmatrix} 1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. Result?", ["11", "$\\begin{pmatrix} 11 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix}$", "7"], 1, "$(1)(3) + (2)(4) = 3 + 8 = 11$. Technically a 1x1 matrix.", 15, 'medium'),
            generateQuestion("Multiply dimensions (3x1) x (1x3). Result?", ["3x3", "1x1", "3x1", "Cannot multiply"], 0, "Rows=3, Cols=3. Result is 3x3.", 15, 'medium'),
            generateQuestion("$\\begin{pmatrix} x & 2 \\end{pmatrix} = \\begin{pmatrix} 5 & 2 \\end{pmatrix}$. Find x.", ["5", "2", "7", "0"], 0, "Equate identical elements.", 15, 'medium'),
            generateQuestion("Find $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.", ["$\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}$"], 0, "Rows times columns.", 15, 'medium'),
            generateQuestion("If $A + A = B$, what is B?", ["2A", "A^2", "A", "1"], 0, "Adding matching matrices doubles them.", 15, 'medium'),
            generateQuestion("Calculate $\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$.", ["$\\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$", "$\\begin{pmatrix} 7 \\\\ 5 \\end{pmatrix}$", "$\\begin{pmatrix} 7 \\\\ 7 \\end{pmatrix}$"], 0, "5-2=3, 6-(-1)=7.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Add $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ and $\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$.", ["$\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$", "Cannot"], 0, "**Lesson**: Top values (1+3=4) and bottom values (2-1=1).", 20, 'hard'),
            generateQuestion("Find $A^2$ if $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$.", ["$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 0 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$"], 0, "Multiply $A \\times A$ using rows-cols.", 20, 'hard'),
            generateQuestion("If $A$ is 2x2, what is the determinant of $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$?", ["$ad - bc$", "$ad + bc$", "$ac - bd$", "$ab - cd$"], 0, "Classic determinant formula.", 20, 'hard'),
            generateQuestion("Find the determinant of $\\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix}$.", ["2", "10", "-2", "5"], 0, "$(3)(2) - (4)(1) = 6 - 4 = 2$.", 20, 'hard'),
            generateQuestion("If determinant is 0, the matrix is:", ["Singular", "Identity", "Zero", "Invertible"], 0, "Singular means no inverse exists.", 20, 'hard'),
            generateQuestion("Inverse of a 2x2 requires swapping which elements?", ["Main diagonal (a & d)", "Off diagonal (b & c)", "All", "None"], 0, "Swap a and d, negate b and c.", 20, 'hard'),
            generateQuestion("Find $x$ if det $\\begin{pmatrix} x & 2 \\\\ 3 & 4 \\end{pmatrix} = 10$.", ["4", "16", "2", "8"], 0, "$4x - 6 = 10 \\Rightarrow 4x=16 \\Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Multiply $\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$.", ["$\\begin{pmatrix} 6 \\\\ 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 12 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 12 \\end{pmatrix}$"], 0, "Top is 2(1)+1(4)=6. Bottom is 0(1)+3(4)=12.", 20, 'hard'),
            generateQuestion("If $AB = I$, what is B?", ["$A^{-1}$", "A", "$I$", "0"], 0, "Inverse matrix.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify $a^3 \\times a^4$.", ["$a^7$", "$a^{12}$", "$a^{-1}$", "$a^1$"], 0, "Indices link.", 10, 'expert')
        ]
    },
    'g3-s34-vectors': {
        learning: [
            // Easy (1-10)
            generateQuestion("A Vector is a powerful arrow because it possesses:", ["Only Magnitude", "Only Direction", "Both Magnitude & Direction", "Neither"], 2, "**Lesson**: A vector is defined by its strength (magnitude) AND heading (direction).", 10, 'easy'),
            generateQuestion("If Vector $\\mathbf{u} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$, what is its opposite $-\\mathbf{u}$?", ["$\\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$"], 0, "**Lesson**: Negating reverses direction completely.", 10, 'easy'),
            generateQuestion("A scalar quantity only has:", ["Magnitude", "Direction", "Both", "Neither"], 0, "Scalars are just plain numbers (like mass or temperature).", 10, 'easy'),
            generateQuestion("Which is a vector quantity?", ["Temperature", "Mass", "Velocity", "Speed"], 2, "Velocity includes direction. Speed does not.", 10, 'easy'),
            generateQuestion("Vector $\\vec{AB}$ goes from A to B. $\\vec{BA}$ goes:", ["A to B", "Origin to A", "B to A", "Origin to B"], 2, "It travels in reverse.", 10, 'easy'),
            generateQuestion("If $\\vec{OA} = \\mathbf{a}$, what is $\\mathbf{a}$ called?", ["Translation vector", "Position vector", "Unit vector", "Null vector"], 1, "It describes position relative to Origin.", 10, 'easy'),
            generateQuestion("Find $2 \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$.", ["$\\begin{pmatrix} 2 \\\\ 8 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 8 \\\\ 2 \\end{pmatrix}$"], 0, "Scale both components by 2.", 10, 'easy'),
            generateQuestion("Add vectors $\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.", ["$\\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$"], 0, "Add x matching x, y matching y.", 10, 'easy'),
            generateQuestion("What is the magnitude formula for $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$?", ["$x+y$", "$x^2+y^2$", "$\\sqrt{x^2+y^2}$", "$\\sqrt{x+y}$"], 2, "Pythagoras theorem on the components.", 10, 'easy'),
            generateQuestion("Vector of zero length is?", ["Unit vector", "Null vector", "Position vector", "Equal vector"], 1, "$\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find magnitude of $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.", ["5", "7", "12", "25"], 0, "$\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.", 15, 'medium'),
            generateQuestion("If $\\vec{OA} = \\mathbf{a}$, $\\vec{OB} = \\mathbf{b}$, find $\\vec{AB}$.", ["$\\mathbf{a} + \\mathbf{b}$", "$\\mathbf{a} - \\mathbf{b}$", "$\\mathbf{b} - \\mathbf{a}$", "$\\mathbf{a} \\mathbf{b}$"], 2, "Route: $A \\rightarrow O \\rightarrow B = -\\mathbf{a} + \\mathbf{b} = \\mathbf{b} - \\mathbf{a}$.", 15, 'medium'),
            generateQuestion("Find distance between $A(1,2)$ and $B(4,6)$.", ["7", "5", "25", "3"], 1, "Vector $\\vec{AB} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. Mag=5.", 15, 'medium'),
            generateQuestion("If $\\mathbf{p} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$, $\\mathbf{q} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$. Find $\\mathbf{p} - \\mathbf{q}$.", ["$\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$"], 0, "$-1 - 3 = -4$. $2 - 1 = 1$.", 15, 'medium'),
            generateQuestion("Two vectors are parallel if they are:", ["Equal in magnitude", "Scalar multiples", "Perpendicular", "Unit vectors"], 1, "$\\mathbf{a} = k\\mathbf{b}$. Same or reverse direction.", 15, 'medium'),
            generateQuestion("Is $\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$ parallel to $\\begin{pmatrix} -1 \\\\ -2 \\end{pmatrix}$?", ["Yes", "No"], 0, "Scale factor is -2.", 15, 'medium'),
            generateQuestion("Vector $\\vec{XY} = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$. What is $\\vec{YX}$?", ["$\\begin{pmatrix} a \\\\ -b \\end{pmatrix}$", "$\\begin{pmatrix} -a \\\\ -b \\end{pmatrix}$", "$\\begin{pmatrix} -a \\\\ b \\end{pmatrix}$", "$\\begin{pmatrix} b \\\\ a \\end{pmatrix}$"], 1, "Complete reversal.", 15, 'medium'),
            generateQuestion("If M is midpoint of AB, $\\vec{AM}$?", ["$\\frac{1}{2}\\vec{AB}$", "$\\vec{AB}$", "$2\\vec{AB}$", "$\\vec{MB}$"], 0, "Halfway along the arrow.", 15, 'medium'),
            generateQuestion("Calculate $|\\begin{pmatrix} -6 \\\\ 8 \\end{pmatrix}|$.", ["10", "14", "2", "100"], 0, "$\\sqrt{36 + 64} = 10$.", 15, 'medium'),
            generateQuestion("Calculate $2\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}$.", ["$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$"], 0, "Top: 2(1)-0=2. Bot: 2(3)-5=1.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$, find $\\mathbf{a} + 2\\mathbf{b}$.", ["$\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 7 \\\\ 0 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$"], 1, "**Lesson**: $1+6=7$. $2-2=0$.", 20, 'hard'),
            generateQuestion("Collinear points A, B, C mean:", ["Lie on same straight line", "Form a triangle", "Same magnitude", "Origin connected"], 0, "Usually means $\\vec{AB} = k\\vec{BC}$.", 20, 'hard'),
            generateQuestion("If $\\vec{OA} = \\mathbf{a}$, $\\vec{OB} = \\mathbf{b}$. M is midpoint of AB. Find $\\vec{OM}$.", ["$\\frac{1}{2}(\\mathbf{a}+\\mathbf{b})$", "$\\mathbf{a}+\\mathbf{b}$", "$\\mathbf{b}-\\mathbf{a}$", "$\\frac{1}{2}(\\mathbf{b}-\\mathbf{a})$"], 0, "Route $O \\rightarrow A \\rightarrow M$. $A \\rightarrow M = \\frac{1}{2}(\\mathbf{b}-\\mathbf{a})$. Simplify: $\\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b}$.", 20, 'hard'),
            generateQuestion("Rectangle ABCD. $\\vec{AB} = \\mathbf{u}$, $\\vec{AD} = \\mathbf{v}$. Find $\\vec{AC}$.", ["$\\mathbf{u}+\\mathbf{v}$", "$\\mathbf{u}-\\mathbf{v}$", "$\\mathbf{v}-\\mathbf{u}$", "$-(\\mathbf{u}+\\mathbf{v})$"], 0, "Diagonal path $A \\rightarrow B \\rightarrow C$. Since $BC = AD = \\mathbf{v}$. Result is $\\mathbf{u}+\\mathbf{v}$.", 20, 'hard'),
            generateQuestion("If $\\begin{pmatrix} k \\\\ 4 \\end{pmatrix}$ is parallel to $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$, find k.", ["6", "1.5", "8", "5"], 0, "Bottom is x2. So top must be $3 \\times 2 = 6$.", 20, 'hard'),
            generateQuestion("Mag of $\\begin{pmatrix} x \\\\ -12 \\end{pmatrix} = 13$. Find positive x.", ["5", "1", "144", "25"], 0, "$x^2 + 144 = 169 \\Rightarrow x^2 = 25 \\Rightarrow x=5$.", 20, 'hard'),
            generateQuestion("In triangle OXY, X is ratio 1:2 on OM. $\\vec{OX} = \\mathbf{x}$. Find $\\vec{OM}$.", ["$3\\mathbf{x}$", "$2\\mathbf{x}$", "$1.5\\mathbf{x}$", "$\\mathbf{x}$"], 0, "Ratio 1:2 means X splits it 1 part to 2 parts. Total 3 parts. So $OM=3 OX$.", 20, 'hard'),
            generateQuestion("If $2\\mathbf{x} - \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$. Find $\\mathbf{x}$.", ["$\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ 10 \\end{pmatrix}$", "$\\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$"], 0, "$2\\mathbf{x} = \\begin{pmatrix} 6 \\\\ 10 \\end{pmatrix} \\Rightarrow \\mathbf{x} = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$.", 20, 'hard'),
            generateQuestion("The centroid of a triangle with vertices $\\mathbf{a}, \\mathbf{b}, \\mathbf{c}$?", ["$\\frac{1}{3}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})$", "$\\frac{1}{2}(\\mathbf{a}+\\mathbf{b}+\\mathbf{c})$", "$\\mathbf{a}+\\mathbf{b}+\\mathbf{c}$", "$\\frac{1}{3}(\\mathbf{ab}+\\mathbf{c})$"], 0, "Average of the three position vectors.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+y)^2$.", ["$x^2+2xy+y^2$", "$x^2+y^2$", "$x^2-2xy+y^2$", "$x^2-y^2$"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Vector arrow length represents:", ["Magnitude", "Direction", "Position", "Origin"], 0, "Longer arrow = bigger magnitude.", 10, 'easy'),
            generateQuestion("Vector arrow pointing represents:", ["Direction", "Magnitude", "Size", "Mass"], 0, "Head points the way.", 10, 'easy'),
            generateQuestion("Equivalent vectors must have:", ["Same mag & dir", "Same origin", "Same mag only", "Same dir only"], 0, "They can start anywhere but must match exactly in size/angle.", 10, 'easy'),
            generateQuestion("Column vector $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$. 'a' is:", ["Horizontal change", "Vertical change", "Magnitude", "Gradient"], 0, "Top is X movement.", 10, 'easy'),
            generateQuestion("'b' in $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ is:", ["Vertical change", "Horizontal change", "Left/Right", "X-axis"], 0, "Bottom is Y movement.", 10, 'easy'),
            generateQuestion("Move right 3, down 2. Vector?", ["$\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$", "$\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$"], 0, "Right is +X, Down is -Y.", 10, 'easy'),
            generateQuestion("Move left 5, up 1. Vector?", ["$\\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ -5 \\end{pmatrix}$", "$\\begin{pmatrix} -5 \\\\ -1 \\end{pmatrix}$"], 0, "Left is -X, Up is +Y.", 10, 'easy'),
            generateQuestion("Is Mass a vector?", ["No", "Yes"], 0, "Does not have direction. 5kg North makes no sense.", 10, 'easy'),
            generateQuestion("Is Force a vector?", ["Yes", "No"], 0, "Pushing Left is different from pushing Right.", 10, 'easy'),
            generateQuestion("Vector addition visually uses:", ["Tip-to-tail", "Tail-to-tail", "Tip-to-tip", "Midpoint"], 0, "Link them end to end.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find magnitude of $\\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$.", ["10", "14", "2", "36"], 0, "$\\sqrt{36+64} = 10$.", 15, 'medium'),
            generateQuestion("Position vector of (5, -2)?", ["$\\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$", "$\\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix}$"], 0, "Just stack the coordinates.", 15, 'medium'),
            generateQuestion("Calculate $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} - 3\\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}$.", ["$\\begin{pmatrix} 1 \\\\ -5 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 7 \\end{pmatrix}$", "$\\begin{pmatrix} -2 \\\\ -5 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$"], 0, "Top 1-0. Bot 1-6 = -5.", 15, 'medium'),
            generateQuestion("If $\\vec{AB} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$, $A=(1,1)$. Find coords of B.", ["(3, 4)", "(1, 2)", "(2, 3)", "(3, 3)"], 0, "Start at A, add vector. $1+2=3, 1+3=4$.", 15, 'medium'),
            generateQuestion("If $\\vec{PQ} = \\mathbf{v}$, and $M$ is midpoint PQ. Find $\\vec{MQ}$.", ["$0.5\\mathbf{v}$", "$\\mathbf{v}$", "$-0.5\\mathbf{v}$", "$2\\mathbf{v}$"], 0, "Halfway forward.", 15, 'medium'),
            generateQuestion("Are $\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$ and $\\begin{pmatrix} -2 \\\\ 6 \\end{pmatrix}$ parallel?", ["Yes", "No"], 0, "Second is -2 times the first.", 15, 'medium'),
            generateQuestion("Calculate $| \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix} |$.", ["13", "17", "7", "169"], 0, "13.", 15, 'medium'),
            generateQuestion("Vector addition is commutative?", ["Yes", "No"], 0, "a+b = b+a.", 15, 'medium'),
            generateQuestion("Find x if $\\begin{pmatrix} x \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$.", ["3", "7", "2.5", "-3"], 0, "x+2=5.", 15, 'medium'),
            generateQuestion("Is $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ a unit vector?", ["No", "Yes"], 0, "Magnitude is 5, not 1.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If magnitude of $\\begin{pmatrix} m \\\\ m \\end{pmatrix}$ is $\\sqrt{32}$, find positive m.", ["4", "8", "16", "32"], 0, "$2m^2 = 32 \\Rightarrow m^2 = 16 \\Rightarrow m=4$.", 20, 'hard'),
            generateQuestion("Points A,B,C. $\\vec{OA}=\\mathbf{a}, \\vec{OB}=\\mathbf{b}$. C lies on AB such that AC:CB = 2:1. $\\vec{OC}$?", ["$\\frac{\\mathbf{a}+2\\mathbf{b}}{3}$", "$\\frac{2\\mathbf{a}+\\mathbf{b}}{3}$", "$\\mathbf{a}+2\\mathbf{b}$", "$\\frac{\\mathbf{a}+\\mathbf{b}}{2}$"], 0, "Section formula: $\\frac{1\\mathbf{a} + 2\\mathbf{b}}{1+2}$.", 20, 'hard'),
            generateQuestion("If $\\vec{OP} = \\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix}, \\vec{PQ} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$. Find $|\\vec{OQ}|$.", ["$\\sqrt{41}$", "5", "$\\sqrt{10}$", "9"], 0, "OQ = OP + PQ = (5, 4). Mag = $\\sqrt{25+16} = \\sqrt{41}$.", 20, 'hard'),
            generateQuestion("Parallelogram OABC. $\\vec{OA}=\\mathbf{a}, \\vec{OC}=\\mathbf{c}$. M is midpoint of AB. $\\vec{OM}$?", ["$\\mathbf{a}+0.5\\mathbf{c}$", "$\\mathbf{a}+\\mathbf{c}$", "$0.5\\mathbf{a}+0.5\\mathbf{c}$", "$\\mathbf{c}+0.5\\mathbf{a}$"], 0, "$OM = OA + AM$. $AM = \\frac{1}{2}AB = \\frac{1}{2}OC = 0.5\\mathbf{c}$.", 20, 'hard'),
            generateQuestion("If $3\\mathbf{u} - 2\\mathbf{v} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. Find $\\mathbf{v}$.", ["$\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$", "$\\begin{pmatrix} 0 \\\\ 3 \\end{pmatrix}$"], 0, "$3(1,2) - 2\\mathbf{v} = (1,0) \\Rightarrow (3,6) - (1,0) = 2\\mathbf{v} \\Rightarrow (2,6) = 2\\mathbf{v} \\Rightarrow (1,3)$.", 20, 'hard'),
            generateQuestion("Collinear O,A,B. $\\vec{OA} = 2\\mathbf{x} - \\mathbf{y}$. $\\vec{OB} = k\\mathbf{x} - 3\\mathbf{y}$. Find k.", ["6", "3", "2", "1.5"], 0, "OB = 3*OA. So $k = 3 \\times 2 = 6$.", 20, 'hard'),
            generateQuestion("Are position vectors unique to a coordinate point?", ["Yes", "No"], 0, "They start at origin and specifically pinpoint that coordinate.", 20, 'hard'),
            generateQuestion("Find unit vector in direction of $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.", ["$\\begin{pmatrix} 3/5 \\\\  4/5 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 3/7 \\\\  4/7 \\end{pmatrix}$", "$\\sqrt{5}$"], 0, "Divide by magnitude 5.", 20, 'hard'),
            generateQuestion("Does $\\vec{AB} + \\vec{BC} + \\vec{CA} = 0$?", ["Yes", "No"], 0, "A to B to C to A = A to A (Null vector).", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify $10x - 3(x-2)$.", ["$7x+6$", "$7x-6$", "$13x+6$", "$7x-2$"], 0, "Algebra link. Distribute the -3.", 10, 'expert')
        ]
    },
    'g3-s34-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Angle subtended by a diameter at the circumference is:", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "$360^\\circ$"], 0, "**Lesson**: It forms a semi-circle right angle ($90^\\circ$).", 10, 'easy'),
            generateQuestion("Opposite angles in a cyclic quadrilateral sum to:", ["$180^\\circ$", "$90^\\circ$", "$270^\\circ$", "$360^\\circ$"], 0, "**Lesson**: They balance out to a full straight line sum of $180^\\circ$.", 10, 'easy'),
            generateQuestion("Angle at the centre is ___ the angle at circumference.", ["Twice", "Half", "Equal to", "Square of"], 0, "Central angle sweeps a larger arc visually, exactly 2x.", 10, 'easy'),
            generateQuestion("Angles subtended by the same arc at the circumference are:", ["Equal", "Supplementary", "Complementary", "Double"], 0, "Same arc = same angle.", 10, 'easy'),
            generateQuestion("A tangent to a circle and the radius at the point of contact meet at:", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$60^\\circ$"], 0, "Perpendicular meeting.", 10, 'easy'),
            generateQuestion("Tangents from an external point to a circle are:", ["Equal in length", "Parallel", "Perpendicular", "Double length"], 0, "Symmetric tangent lines.", 10, 'easy'),
            generateQuestion("Alternate Segment Theorem: Angle between tangent and chord equals?", ["Angle in alternate segment", "$90^\\circ$", "Angle at centre", "$180^\\circ$"], 0, "Matches the angle 'inside' the opposite big triangle part.", 10, 'easy'),
            generateQuestion("Distance formula between two points uses which theorem?", ["Pythagoras", "Sine Rule", "Cosine Rule", "Thales"], 0, "$\\Delta x^2 + \\Delta y^2 = d^2$.", 10, 'easy'),
            generateQuestion("Gradient formula between $(x_1, y_1)$ and $(x_2, y_2)$?", ["$(y_2-y_1)/(x_2-x_1)$", "$(x_2-x_1)/(y_2-y_1)$", "$y_2*y_1 / x_2*x_1$", "Midpoint"], 0, "Rise over Run.", 10, 'easy'),
            generateQuestion("Midpoint formula?", ["Average the x's and y's", "Subtract the x's and y's", "Multiply them", "Square them"], 0, "$( (x_1+x_2)/2 , (y_1+y_2)/2 )$.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find distance between (1,1) and (4,5).", ["5", "3", "4", "7"], 0, "$\\sqrt{3^2 + 4^2} = 5$.", 15, 'medium'),
            generateQuestion("Midpoint of (2,4) and (8,10)?", ["(5,7)", "(6,6)", "(3,3)", "(10,14)"], 0, "$(10/2, 14/2) = (5,7)$.", 15, 'medium'),
            generateQuestion("Gradient of line through (1,2) and (3,6)?", ["2", "1", "0.5", "4"], 0, "$(6-2)/(3-1) = 4/2 = 2$.", 15, 'medium'),
            generateQuestion("If two lines are parallel, their gradients are:", ["Equal", "Negative reciprocals", "Zero", "Sum to 1"], 0, "Same steepness.", 15, 'medium'),
            generateQuestion("If two lines are perpendicular, product of gradients is:", ["-1", "1", "0", "0.5"], 0, "$m_1 \\times m_2 = -1$.", 15, 'medium'),
            generateQuestion("Line $y=3x+2$. What is the gradient?", ["3", "2", "0", "x"], 0, "$y=mx+c$.", 15, 'medium'),
            generateQuestion("Is a square a cyclic quadrilateral?", ["Yes", "No"], 0, "Opposite angles $90+90=180$. Circles can perfectly neatly contain them.", 15, 'medium'),
            generateQuestion("Angle in a semicircle is a right angle. This relies on:", ["Angle at centre is twice at circ.", "Pythagoras", "Alt segment", "Cyclic quad"], 0, "Straight line centre angle is 180, so half is 90.", 15, 'medium'),
            generateQuestion("Gradient of $2y = 4x + 6$?", ["2", "4", "6", "0.5"], 0, "Divide by 2: $y=2x+3$.", 15, 'medium'),
            generateQuestion("Distance from origin (0,0) to (-6, 8)?", ["10", "14", "2", "-10"], 0, "$\\sqrt{36+64}=10$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If angle at centre is $80^\\circ$, angle at circumference?", ["$40^\\circ$", "$160^\\circ$", "$80^\\circ$", "$20^\\circ$"], 0, "**Lesson**: Exactly half.", 20, 'hard'),
            generateQuestion("Cyclic quad ABCD. Angle A = $100^\\circ$. Angle C?", ["$80^\\circ$", "$100^\\circ$", "$260^\\circ$", "Cannot tell"], 0, "$180 - 100 = 80$.", 20, 'hard'),
            generateQuestion("Gradient is 2. Passes through (1,5). Equation?", ["$y=2x+3$", "$y=2x+5$", "$y=x+5$", "$y=3x+2$"], 0, "$y-5 = 2(x-1) \\Rightarrow y=2x+3$.", 20, 'hard'),
            generateQuestion("Equation of line perpendicular to $y=2x$ passing through origin?", ["$y=-0.5x$", "$y=0.5x$", "$y=-2x$", "$y=2x$"], 0, "Perpendicular gradient is $-1/2$.", 20, 'hard'),
            generateQuestion("Circle touches triangle sides. The bisectors of the triangle's angles meet at the:", ["Incentre", "Circumcentre", "Centroid", "Orthocentre"], 0, "Incentre is the center of the inscribed circle.", 20, 'hard'),
            generateQuestion("Radius to tangent is perpendicular. If radius is 5, tangent segment is 12, distance from centre to external point?", ["13", "17", "7", "60"], 0, "Pythagoras $5, 12, 13$.", 20, 'hard'),
            generateQuestion("Find x-intercept of $3x + 4y = 12$.", ["4", "3", "12", "0"], 0, "Set y=0. 3x=12.", 20, 'hard'),
            generateQuestion("A chord is 6cm, radius 5cm. Distance from centre to chord?", ["4cm", "3cm", "5cm", "11cm"], 0, "Half chord = 3. $\\sqrt{5^2-3^2} = 4$.", 20, 'hard'),
            generateQuestion("Two intersecting circles share a common chord. The line connecting their centres...", ["Is perpendicular bisector of chord", "Is parallel to chord", "Equals chord length", "Does not intersect chord"], 0, "Symmetry ensures perpendicular bisection.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve for x: $\\frac{x}{3} = 7$.", ["21", "10", "4", "7/3"], 0, "Algebra link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("What is a cyclic quadrilateral?", ["4 points on circle", "Square", "Rectangle", "Any 4 sided shape"], 0, "All vertices must touch the circumference.", 10, 'easy'),
            generateQuestion("A line from centre to circumference?", ["Radius", "Diameter", "Chord", "Tangent"], 0, "Basic circle part.", 10, 'easy'),
            generateQuestion("A line touching the circle at ONE point?", ["Tangent", "Chord", "Secant", "Diameter"], 0, "Skims the edge.", 10, 'easy'),
            generateQuestion("A line intersecting the circle at TWO points (passing through)?", ["Secant", "Tangent", "Radius", "Arc"], 0, "Cuts through.", 10, 'easy'),
            generateQuestion("Piece of the circumference?", ["Arc", "Sector", "Segment", "Chord"], 0, "The crust.", 10, 'easy'),
            generateQuestion("Region bounded by 2 radii and an arc?", ["Sector", "Segment", "Arc", "Triangle"], 0, "Pizza slice.", 10, 'easy'),
            generateQuestion("Region bounded by a chord and an arc?", ["Segment", "Sector", "Tangent", "Secant"], 0, "Puffy region cut off.", 10, 'easy'),
            generateQuestion("Does a diameter pass through the centre?", ["Yes", "No"], 0, "Always.", 10, 'easy'),
            generateQuestion("Longest chord in a circle?", ["Diameter", "Radius", "Tangent", "Arc"], 0, "Stretches completely across.", 10, 'easy'),
            generateQuestion("Angle in a semi-circle is?", ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$", "$45^\\circ$"], 0, "Right angle.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find midpoint of (-2, 2) and (4, -4).", ["(1, -1)", "(1, 1)", "(2, -2)", "(6, -6)"], 0, "$(-2+4)/2 = 1. (2-4)/2 = -1$.", 15, 'medium'),
            generateQuestion("Gradient of horizontal line?", ["0", "Undefined", "1", "Infinite"], 0, "No rise.", 15, 'medium'),
            generateQuestion("Gradient of vertical line?", ["Undefined", "0", "1", "-1"], 0, "Infinite rise, run is 0. Cannot divide by zero.", 15, 'medium'),
            generateQuestion("Angle at centre is $120^\\circ$. Angle at circumference subtended by same arc?", ["$60^\\circ$", "$240^\\circ$", "$120^\\circ$", "$90^\\circ$"], 0, "Half.", 15, 'medium'),
            generateQuestion("O is centre. A, B, C on circumference. $\\angle AOB = 100^\\circ$. What is $\\angle ACB$?", ["$50^\\circ$", "$100^\\circ$", "$200^\\circ$", "$80^\\circ$"], 0, "Angle at circ is half.", 15, 'medium'),
            generateQuestion("In cyclic quad ABCD, $\\angle B=120^\\circ$, $\\angle D=$?", ["$60^\\circ$", "$120^\\circ$", "$180^\\circ$", "$90^\\circ$"], 0, "$180-120=60$.", 15, 'medium'),
            generateQuestion("Two tangents from point P meet circle at A, B. $\\angle APB = 40^\\circ$. $\\angle AOB$?", ["$140^\\circ$", "$70^\\circ$", "$100^\\circ$", "$80^\\circ$"], 0, "Quadrilateral OAPB has two $90^\\circ$ angles. Sum $360 \\Rightarrow 180-40=140$.", 15, 'medium'),
            generateQuestion("Is a rectangle cyclic?", ["Yes", "Always", "No", "Sometimes"], 1, "Opposite angles sum to 180.", 15, 'medium'),
            generateQuestion("Find y-intercept of $2x - y = 5$.", ["-5", "5", "2", "-2"], 0, "$y = 2x-5$. cuts at -5.", 15, 'medium'),
            generateQuestion("Gradient of line $x+y=5$?", ["-1", "1", "0", "5"], 0, "$y = -x+5$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Point P is (-3,4), Origin O. Tangent at P to circle centre O. Gradient of tangent?", ["3/4", "-3/4", "4/3", "-4/3"], 0, "Radius gradient is $4/-3$. Tangent is perp $\\Rightarrow 3/4$.", 20, 'hard'),
            generateQuestion("Distance from (a, 0) to (0, b)?", ["$\\sqrt{a^2+b^2}$", "$a+b$", "ab", "$\\sqrt{a+b}$"], 0, "Pythagoras.", 20, 'hard'),
            generateQuestion("Line perpendicular to $3y = x + 6$? Gradient is:", ["-3", "1/3", "3", "-1/3"], 0, "Line grad is 1/3. Perp is -3.", 20, 'hard'),
            generateQuestion("Cyclic quad ABCD. $\\angle A = x, \\angle C = 2x$. Find x.", ["$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$30^\\circ$"], 0, "$3x = 180 \\Rightarrow x=60$.", 20, 'hard'),
            generateQuestion("Line AB diameter. C on circle. $\\angle ABC = 30^\\circ$. $\\angle BAC$?", ["$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$30^\\circ$"], 0, "Triangle ABC is right angled at C. $180-90-30=60$.", 20, 'hard'),
            generateQuestion("Two circles radius 5 and 3, centres 10 apart. Do they intersect?", ["No", "Yes"], 0, "$5+3=8 < 10$. They don't reach each other.", 20, 'hard'),
            generateQuestion("Angle at centre is $x$. Reflex angle at centre?", ["$360-x$", "$180-x$", "$x/2$", "$180+x$"], 0, "Angles round a point sum to 360.", 20, 'hard'),
            generateQuestion("Tangent PT touches at T. Secant PAB cuts at A and B. Formula governing lengths?", ["$PT^2 = PA \\times PB$", "$PT = PA+PB$", "$PT^2 = PA+PB$", "$PT = PA \\times PB$"], 0, "Intersecting secant-tangent theorem.", 20, 'hard'),
            generateQuestion("In right angled triangle, sides are 3, 4, 5. Find radius of circumcircle.", ["2.5", "5", "3", "1.5"], 0, "Hypotenuse is diameter. 5/2 = 2.5.", 20, 'hard'),
            generateQuestion("[Interleaved] Which graph is U-shaped?", ["Quadratic", "Linear", "Reciprocal", "Exponential"], 0, "Graphs link.", 10, 'expert')
        ]
    },
    'g3-s34-trig': {
        learning: [
            // Easy (1-10)
            generateQuestion("What is the beautiful ratio of the Sine Rule?", ["$a/\\sin A = b/\\sin B$", "$a^2=b^2+c^2-2bc\\cos A$", "$\\text{Area} = 0.5ab\\sin C$", "$\\sin^2 + \\cos^2 = 1$"], 0, "**Lesson**: Ratio between a side and its opposite angle is constant.", 10, 'easy'),
            generateQuestion("Nautical Bearings are universally measured clockwise starting from:", ["North", "South", "East", "West"], 0, "**Lesson**: Always start at True North ($000^\\circ$).", 10, 'easy'),
            generateQuestion("Cosine Rule formula to find side a?", ["$a^2 = b^2 + c^2 - 2bc\\cos A$", "$a = b+c - \\cos A$", "$a/\\sin A = b/\\sin B$", "$\\frac{1}{2}bh$"], 0, "Pythagoras with an adjustment factor $-2bc\\cos A$.", 10, 'easy'),
            generateQuestion("Area of ANY triangle formula using Trig?", ["$\\frac{1}{2}ab\\sin C$", "$\\frac{1}{2}bh$", "$s=r\\theta$", "$\\pi r^2$"], 0, "Half a b sine C.", 10, 'easy'),
            generateQuestion("When is Sine Rule used?", ["2 sides and 1 opposite angle", "3 sides", "2 sides and included angle", "No angles known"], 0, "You need a 'matching pair' of side and opposite angle.", 10, 'easy'),
            generateQuestion("When is Cosine Rule used?", ["3 sides given", "2 angles given", "Right angled only", "Finding Area"], 0, "To find an angle when 3 sides are known, or side when 2 sides and included angle are known.", 10, 'easy'),
            generateQuestion("Bearings are always written with how many digits?", ["3", "2", "4", "Any"], 0, "$045^\\circ$ not $45^\\circ$.", 10, 'easy'),
            generateQuestion("Angle of Elevation is measured:", ["Up from horizontal", "Down from horizontal", "From North", "From vertical"], 0, "Looking up.", 10, 'easy'),
            generateQuestion("Angle of Depression is measured:", ["Down from horizontal", "Up from horizontal", "From South", "From vertical"], 0, "Looking down.", 10, 'easy'),
            generateQuestion("What is $\\sin 30^\\circ$?", ["0.5", "1", "0", "$\\sqrt{3}/2$"], 0, "Classic exact value.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Sine Rule: In $\\Delta ABC$, $A=30^\\circ, a=5, B=45^\\circ$. Find b.", ["$10\\sin 45^\\circ$", "$5\\sqrt{2}$", "$2.5\\sqrt{2}$", "$10/\\sqrt{2}$"], 1, "$5/\\sin 30 = b/\\sin 45 \\Rightarrow 10 = b/(1/\\sqrt{2}) \\Rightarrow b = 10/\\sqrt{2} = 5\\sqrt{2}$.", 15, 'medium'),
            generateQuestion("Cosine Rule: $b=3, c=4, A=90^\\circ$. Find a.", ["5", "7", "25", "1"], 0, "$a^2 = 3^2 + 4^2 - 2(3)(4)(0)\\Rightarrow a^2 = 25 \\Rightarrow a=5$. It becomes Pythagoras!", 15, 'medium'),
            generateQuestion("Area of triangle sides 5, 8, included angle $30^\\circ$.", ["10", "20", "40", "17.3"], 0, "$0.5 \\times 5 \\times 8 \\times 0.5 = 10$.", 15, 'medium'),
            generateQuestion("Bearing of B from A is $060^\\circ$. Bearing of A from B?", ["$240^\\circ$", "$120^\\circ$", "$060^\\circ$", "$300^\\circ$"], 0, "Add 180 depending on direction. $60+180=240$.", 15, 'medium'),
            generateQuestion("At $10\\text{m}$ away, angle of elevation to tree is $45^\\circ$. Height?", ["10m", "5m", "20m", "14.1m"], 0, "$\\tan 45 = h/10 \\Rightarrow 1 = h/10 \\Rightarrow h=10$.", 15, 'medium'),
            generateQuestion("Largest angle is ALWAYS opposite the:", ["Longest side", "Shortest side", "Hypotenuse", "Middle side"], 0, "Basic property of triangles.", 15, 'medium'),
            generateQuestion("Sine graph over $0$ to $360^\\circ$ peaks at?", ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], 0, "Reaches +1 at 90 degrees.", 15, 'medium'),
            generateQuestion("Cosine graph crosses x-axis at?", ["$90^\\circ, 270^\\circ$", "$180^\\circ, 360^\\circ$", "$0^\\circ, 180^\\circ$", "$45^\\circ, 135^\\circ$"], 0, "Starts at 1, goes down, crosses at 90 and 270.", 15, 'medium'),
            generateQuestion("What is $\\tan 45^\\circ$?", ["1", "0", "Undefined", "0.5"], 0, "Opposite equals adjacent.", 15, 'medium'),
            generateQuestion("To find an angle using Cosine Rule, make what the subject?", ["$\\cos A$", "$a^2$", "$b^2$", "$2bc$"], 0, "$\\cos A = (b^2+c^2-a^2) / 2bc$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Ambiguous case of Sine Rule happens when finding:", ["Angle", "Side", "Hypotenuse", "Area"], 0, "**Lesson**: An acute or obtuse angle could have the same sine. Both may be valid.", 20, 'hard'),
            generateQuestion("If $\\sin x = 0.5$, solutions for $0 < x < 180$?", ["$30^\\circ, 150^\\circ$", "$30^\\circ$", "$150^\\circ$", "$60^\\circ, 120^\\circ$"], 0, "ASTC rule. First and second quadrants.", 20, 'hard'),
            generateQuestion("Cosine Rule: Find angle A if $a=5, b=5, c=5\\sqrt{3}$. (Draw it mentally)", ["Cannot tell", "Obtuse", "$120^\\circ$", "$90^\\circ$"], 2, "$\\cos A = (25+25-75)/(2\\times5\\times5) = -25/50 = -0.5 \\Rightarrow A=120^\\circ$.", 20, 'hard'),
            generateQuestion("Ship sails 10km North, then 10km East. Bearing from start?", ["$045^\\circ$", "$090^\\circ$", "$135^\\circ$", "$315^\\circ$"], 0, "Forms a 45 degree angle right of North.", 20, 'hard'),
            generateQuestion("Find x: $\\tan x = -1$, $0 \\le x \\le 180$.", ["$135^\\circ$", "$45^\\circ$", "$225^\\circ$", "$315^\\circ$"], 0, "Second quadrant where tan is negative. $180-45=135$.", 20, 'hard'),
            generateQuestion("If $\\sin^2 x + \\cos^2 x = 1$, what is $\\sin^2 30^\\circ + \\cos^2 30^\\circ$?", ["1", "2", "0.5", "0"], 0, "Identity holds for ALL angles.", 20, 'hard'),
            generateQuestion("Area of triangle is 10. Sides are 5 and 8. Find included acute angle.", ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "$0.5 \\times 5 \\times 8 \\times \\sin\\theta = 10 \\Rightarrow 20\\sin\\theta = 10 \\Rightarrow \\sin\\theta=0.5 \\Rightarrow 30^\\circ$.", 20, 'hard'),
            generateQuestion("Can $\\sin x = 2$?", ["No", "Yes"], 0, "Sine ratio is opposite/hypotenuse. Hypotenuse is always longest, so ratio $\\le 1$.", 20, 'hard'),
            generateQuestion("Ship A is due North of B. C is due East of B. A, B, C form...", ["Right angled triangle", "Isosceles", "Equilateral", "Straight line"], 0, "North and East are exactly perpendicular.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $2^x = 8$.", ["3", "4", "2", "8"], 0, "Indices link.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Sine Rule is?", ["$a/\\sin A = b/\\sin B$", "$a=b \\sin C$", "$a^2 = b^2+c^2$", "$\\sin = O/H$"], 0, "Classic ratio.", 10, 'easy'),
            generateQuestion("Cosine Rule starts like?", ["$a^2 = b^2 + c^2 - 2bc\\cos A$", "$a^2 = b^2 - c^2$", "$a = \\sin B$", "$\\text{Area} = 1/2 bh$"], 0, "Pythagoras with an add-on.", 10, 'easy'),
            generateQuestion("Area of triangle?", ["$0.5ab \\sin C$", "$0.5ab \\cos C$", "ab", "$\\sin C$"], 0, "Half a b sine C.", 10, 'easy'),
            generateQuestion("Bearings are measured:", ["Clockwise from North", "Anticlockwise from North", "Clockwise from South", "From East"], 0, "Standard compass.", 10, 'easy'),
            generateQuestion("Bearing $000^\\circ$ is?", ["North", "South", "East", "West"], 0, "Straight up.", 10, 'easy'),
            generateQuestion("Bearing $090^\\circ$ is?", ["East", "South", "West", "North"], 0, "90 right.", 10, 'easy'),
            generateQuestion("Bearing $180^\\circ$ is?", ["South", "West", "East", "North"], 0, "Straight down.", 10, 'easy'),
            generateQuestion("Bearing $270^\\circ$ is?", ["West", "South", "East", "North"], 0, "90 left.", 10, 'easy'),
            generateQuestion("Angle of elevation is:", ["Looking up", "Looking down", "Straight", "Behind"], 0, "Elevator goes up.", 10, 'easy'),
            generateQuestion("Angle of depression is:", ["Looking down", "Looking up", "Straight", "Behind"], 0, "Depress means push down.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("If $a=10, \\sin A=0.5, b=20$. Find $\\sin B$.", ["1", "0.5", "0.25", "2"], 0, "$10/0.5 = 20/\\sin B \\Rightarrow 20 = 20/\\sin B \\Rightarrow \\sin B = 1$.", 15, 'medium'),
            generateQuestion("What angle has $\\sin B = 1$?", ["$90^\\circ$", "$180^\\circ$", "$0^\\circ$", "$45^\\circ$"], 0, "Right angle.", 15, 'medium'),
            generateQuestion("Cosine Rule: solve for $\\cos A$ if $a=5, b=4, c=3$.", ["0", "1", "0.5", "0.6"], 0, "It's a 3-4-5 right triangle so A is $90^\\circ$ and $\\cos 90^\\circ = 0$.", 15, 'medium'),
            generateQuestion("Find area: sides 10, 10 included angle $150^\\circ$.", ["25", "50", "100", "43.3"], 0, "$0.5 \\times 10 \\times 10 \\times \\sin(150) = 50 \\times 0.5 = 25$.", 15, 'medium'),
            generateQuestion("Bearing from A to B is $100^\\circ$. From B to A?", ["$280^\\circ$", "$100^\\circ$", "$080^\\circ$", "$360^\\circ$"], 0, "$100 + 180 = 280$.", 15, 'medium'),
            generateQuestion("If $\\tan x = 1$, $x = ?$ (Acute)", ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"], 0, "Special angle.", 15, 'medium'),
            generateQuestion("If $\\cos x = 0.5$, $x = ?$ (Acute)", ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "Special angle.", 15, 'medium'),
            generateQuestion("If $\\sin x = \\sqrt{3}/2$, $x = ?$ (Acute)", ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"], 0, "Special angle.", 15, 'medium'),
            generateQuestion("Value of $\\cos 0^\\circ$?", ["1", "0", "Undefined", "-1"], 0, "Starts at 1.", 15, 'medium'),
            generateQuestion("Value of $\\sin 90^\\circ$?", ["1", "0", "Undefined", "-1"], 0, "Peaks exactly at 1.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("In $\\Delta ABC$, $a=6, b=8, A=30^\\circ$. Find $\\sin B$.", ["2/3", "3/4", "1/2", "1/3"], 0, "$6/\\sin 30 = 8/\\sin B \\Rightarrow 12 = 8/\\sin B \\Rightarrow \\sin B = 8/12 = 2/3$.", 20, 'hard'),
            generateQuestion("Does previous triangle have an ambiguous case?", ["Yes", "No"], 0, "Since $a<b$ and angle A is given, two valid triangles could exist.", 20, 'hard'),
            generateQuestion("Cosine Rule: $a^2=b^2+c^2-2bc\\cos A$. If $A>90^\\circ$, then $\\cos A$ is:", ["Negative", "Positive", "Zero", "1"], 0, "Cosine is negative in second quadrant.", 20, 'hard'),
            generateQuestion("If $\\cos A$ is negative, $a^2$ will be:", ["$> b^2+c^2$", "$< b^2+c^2$", "$= b^2+c^2$", "0"], 0, "Subtracting a negative means adding. So $a^2 > b^2+c^2$.", 20, 'hard'),
            generateQuestion("Find reflex angle whose sine is 0.5.", ["Cannot exist", "$210^\\circ$", "$330^\\circ$", "Both"], 0, "Sine is negative for reflex angles! So $0.5$ cannot be a reflex sine.", 20, 'hard'),
            generateQuestion("Find value of $\\cos 180^\\circ$.", ["-1", "0", "1", "Undefined"], 0, "Bottom of the wave.", 20, 'hard'),
            generateQuestion("Solve $\\tan x = -\\sqrt{3}$ for $0 \\le x \\le 180$.", ["$120^\\circ$", "$150^\\circ$", "$60^\\circ$", "$300^\\circ$"], 0, "Base angle $60^\\circ$. Q2 $\\Rightarrow 180-60 = 120^\\circ$.", 20, 'hard'),
            generateQuestion("Area of regular hexagon side 2.", ["$6\\sqrt{3}$", "$12$", "$3\\sqrt{3}$", "24"], 0, "6 equilateral triangles. $6 \\times (0.5 \\times 2 \\times 2 \\times \\sin 60) = 6 \\times (2 \\times \\sqrt{3}/2) = 6\\sqrt{3}$.", 20, 'hard'),
            generateQuestion("Which is greater: $\\sin 40^\\circ$ or $\\cos 40^\\circ$?", ["$\\cos 40^\\circ$", "$\\sin 40^\\circ$", "Equal", "Cannot tell"], 0, "At 45 they cross. Cos starts high, sin starts low.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(a-b)^2$.", ["$a^2-2ab+b^2$", "$a^2-b^2$", "$a^2+b^2$", "$a^2+2ab+b^2$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g3-s34-mensuration': {
        learning: [
            // Easy (1-10)
            generateQuestion("Convert the standard $\\pi$ radians directly into degrees.", ["$180^\\circ$", "$90^\\circ$", "$270^\\circ$", "$360^\\circ$"], 0, "**Lesson**: One $\\pi$ is exactly half a circle ($180^\\circ$).", 10, 'easy'),
            generateQuestion("What is the fast Arc length formula when $\\theta$ is in radians?", ["$r\\theta$", "$\\frac{1}{2}r^2\\theta$", "$\\pi r^2$", "$2\\pi r$"], 0, "**Lesson**: When using radians, arc length $s = r\\theta$.", 10, 'easy'),
            generateQuestion("What is the fast Sector Area formula when $\\theta$ is in radians?", ["$\\frac{1}{2}r^2\\theta$", "$r\\theta$", "$\\pi r^2$", "$2\\pi r$"], 0, "Area is $0.5 r^2 \\theta$.", 10, 'easy'),
            generateQuestion("How many radians in a full circle?", ["$2\\pi$", "$\\pi$", "$360$", "100"], 0, "$360^\\circ = 2\\pi \\text{ rad}$.", 10, 'easy'),
            generateQuestion("Convert $90^\\circ$ to radians.", ["$\\pi/2$", "$\\pi/4$", "$\\pi$", "$2\\pi$"], 0, "$180/2 = \\pi/2$.", 10, 'easy'),
            generateQuestion("Volume of a sphere?", ["$\\frac{4}{3}\\pi r^3$", "$\\pi r^2 h$", "$\\frac{1}{3}\\pi r^2 h$", "$4\\pi r^2$"], 0, "Four thirds pi r cubed.", 10, 'easy'),
            generateQuestion("Surface area of a sphere?", ["$4\\pi r^2$", "$\\pi r^2$", "$2\\pi r$", "$\\frac{4}{3}\\pi r^3$"], 0, "Four pi r squared.", 10, 'easy'),
            generateQuestion("Volume of a cylinder?", ["$\\pi r^2 h$", "$\\frac{1}{3}\\pi r^2 h$", "$2\\pi r h$", "$4\\pi r^2$"], 0, "Base area $\\times$ height.", 10, 'easy'),
            generateQuestion("Volume of a cone?", ["$\\frac{1}{3}\\pi r^2 h$", "$\\pi r^2 h$", "$\\frac{4}{3}\\pi r^3$", "$\\pi r l$"], 0, "One-third of a cylinder.", 10, 'easy'),
            generateQuestion("Curved surface area of a cone?", ["$\\pi r l$", "$\\pi r^2 h$", "$2\\pi r h$", "$\\pi r^2$"], 0, "$l$ is the slant height.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Find sector area for $r=4$ and a central angle $\\theta=1\\text{ rad}$.", ["8", "4", "16", "2"], 0, "$0.5 \\times 4^2 \\times 1 = 8$.", 15, 'medium'),
            generateQuestion("Convert $60^\\circ$ to radians.", ["$\\pi/3$", "$\\pi/2$", "$\\pi/6$", "$2\\pi/3$"], 0, "$180/3 = 60$.", 15, 'medium'),
            generateQuestion("Arc length is $10\\pi$, radius is 5. Angle in radians?", ["$2\\pi$", "$\\pi$", "2", "10"], 0, "$s=r\\theta \\Rightarrow 10\\pi = 5\\theta \\Rightarrow \\theta=2\\pi$.", 15, 'medium'),
            generateQuestion("Sector area if $r=10$ and $\\theta = 2\\text{ rad}$.", ["100", "50", "200", "20"], 0, "$0.5 \\times 100 \\times 2 = 100$.", 15, 'medium'),
            generateQuestion("Find volume of sphere with radius 3 (in terms of $\\pi$).", ["$36\\pi$", "$27\\pi$", "$9\\pi$", "$12\\pi$"], 0, "$\\frac{4}{3}\\pi(27) = 36\\pi$.", 15, 'medium'),
            generateQuestion("Surface area of sphere with radius 5 (in terms of $\\pi$).", ["$100\\pi$", "$25\\pi$", "$50\\pi$", "$125\\pi$"], 0, "$4\\pi(25) = 100\\pi$.", 15, 'medium'),
            generateQuestion("Volume of cone: $r=3, h=4$.", ["$12\\pi$", "$36\\pi$", "$15\\pi$", "$24\\pi$"], 0, "$\\frac{1}{3}\\pi(9)(4) = 12\\pi$.", 15, 'medium'),
            generateQuestion("Curved SA of cone: $r=3, h=4$. (Find slant $l$ first)", ["$15\\pi$", "$12\\pi$", "$20\\pi$", "$24\\pi$"], 0, "$l = \\sqrt{3^2+4^2}=5$. CSA $= \\pi(3)(5) = 15\\pi$.", 15, 'medium'),
            generateQuestion("Solid Hemisphere volume? ($r=3$)", ["$18\\pi$", "$36\\pi$", "$9\\pi$", "$27\\pi$"], 0, "Half of sphere. $0.5 \\times 36\\pi = 18\\pi$.", 15, 'medium'),
            generateQuestion("Total Surface Area of solid hemisphere? ($r=2$)", ["$12\\pi$", "$8\\pi$", "$16\\pi$", "$4\\pi$"], 0, "Curved + Base = $2\\pi r^2 + \\pi r^2 = 3\\pi r^2 = 3\\pi(4) = 12\\pi$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If arc length is 10 and radius is 5, find the angle in radians.", ["2", "50", "0.5", "5"], 0, "**Lesson**: $s=r\\theta \\Rightarrow 10=5\\theta \\Rightarrow 2$.", 20, 'hard'),
            generateQuestion("A chord is 8cm, radius 5cm. Find angle subtended at centre in radians.", ["$1.85\\text{ rad}$", "$0.92\\text{ rad}$", "$1.5\\text{ rad}$", "$2.1\\text{ rad}$"], 0, "Split triangle: $\\sin(\\theta/2) = 4/5 = 0.8$. $\\theta/2 \\approx 0.927$. $\\theta \\approx 1.85$.", 20, 'hard'),
            generateQuestion("Find volume of regular tetrahedron of edge $a$.", ["$a^3\\sqrt{2}/12$", "$a^3\\sqrt{3}/4$", "$a^3/3$", "$a^3\\sqrt{2}/6$"], 0, "Advanced formula.", 20, 'hard'),
            generateQuestion("Two spheres, volumes in ratio 8:27. Ratio of their surface areas?", ["4:9", "2:3", "8:27", "16:81"], 0, "Volume ratio is $r^3 : R^3$. So sides are 2:3. Areas are $r^2 : R^2 = 4:9$.", 20, 'hard'),
            generateQuestion("A cone is cut halfway up parallel to base. Volume ratio of top small cone to whole cone?", ["1:8", "1:2", "1:4", "1:16"], 0, "Similar solids. Scale factor 1/2. Volume ratio $(1/2)^3 = 1/8$.", 20, 'hard'),
            generateQuestion("Water flows into cylinder (radius 5) at $100\\pi\\text{ cm}^3/\\text{sec}$. Rate of water level rising?", ["$4\\text{ cm/s}$", "$10\\text{ cm/s}$", "$25\\text{ cm/s}$", "$\\pi\\text{ cm/s}$"], 0, "Vol/sec = Area $\\times$ Height/sec. $100\\pi = 25\\pi \\times h \\Rightarrow h=4$.", 20, 'hard'),
            generateQuestion("Perimeter of a sector $r=5, \\theta=2\\text{ rad}$.", ["20", "15", "10", "25"], 0, "Arc length $s = 5\\times2 = 10$. Add two radii = $10+5+5=20$.", 20, 'hard'),
            generateQuestion("Area of segment: $r=2, \\theta=\\pi/2\\text{ rad}$.", ["$\\pi - 2$", "$\\pi$", "$2\\pi$", "$2\\pi - 2$"], 0, "Sector Area $= 0.5(4)(\\pi/2) = \\pi$. Triangle Area $= 0.5(2)(2)\\sin(\\pi/2) = 2$. Segment $= \\pi - 2$.", 20, 'hard'),
            generateQuestion("Cylinder inscribed perfectly in sphere of radius R. Max volume of cylinder?", ["$\\frac{4\\pi R^3}{3\\sqrt{3}}$", "$\\frac{2\\pi R^3}{3}$", "$\\pi R^3$", "$\\frac{\\pi R^3}{\\sqrt{2}}$"], 0, "Calculus optimization result.", 20, 'hard'),
            generateQuestion("[Interleaved] Simplify $\\frac{x^2-9}{x-3}$.", ["x+3", "x-3", "x", "3"], 0, "Algebra link. Difference of squares.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Formula for arc length (degrees)?", ["$\\frac{\\theta}{360} \\times 2\\pi r$", "$\\frac{\\theta}{360} \\times \\pi r^2$", "$r\\theta$", "$\\frac{1}{2}r^2\\theta$"], 0, "Fraction of circumference.", 10, 'easy'),
            generateQuestion("Formula for sector area (degrees)?", ["$\\frac{\\theta}{360} \\times \\pi r^2$", "$\\frac{\\theta}{360} \\times 2\\pi r$", "$\\frac{1}{2}r^2\\theta$", "$r\\theta$"], 0, "Fraction of total area.", 10, 'easy'),
            generateQuestion("Sum of interior angles of n-sided polygon?", ["$(n-2) \\times 180^\\circ$", "$n \\times 180^\\circ$", "$(n-1) \\times 180^\\circ$", "$360^\\circ$"], 0, "Triangle partitioning.", 10, 'easy'),
            generateQuestion("Sum of exterior angles of any convex polygon?", ["$360^\\circ$", "$180^\\circ$", "$(n-2) \\times 180^\\circ$", "Depends on n"], 0, "Always perfectly 360.", 10, 'easy'),
            generateQuestion("Area of a trapezium?", ["$\\frac{1}{2}(a+b)h$", "$bh$", "$\\frac{1}{2}bh$", "$\\frac{1}{2}d_1 d_2$"], 0, "Average parallel sides times height.", 10, 'easy'),
            generateQuestion("Area of a parallelogram?", ["$bh$", "$\\frac{1}{2}bh$", "$(a+b)h$", "$l \\times w$"], 0, "Base times perpendicular height.", 10, 'easy'),
            generateQuestion("Area of a kite?", ["$\\frac{1}{2}x y$", "$xy$", "$\\frac{1}{2}bh$", "$\\frac{1}{2}(a+b)h$"], 0, "Half product of diagonals.", 10, 'easy'),
            generateQuestion("Volume of a prism?", ["Cross-section Area $\\times$ Length", "$\\frac{1}{3}$ Base $\\times$ Height", "$\\pi r^2 h$", "$\\frac{1}{2} bh$"], 0, "Slice area extended along length.", 10, 'easy'),
            generateQuestion("1 cubic metre ($m^3$) equals how many litres?", ["1000", "100", "10", "10000"], 0, "1000L.", 10, 'easy'),
            generateQuestion("1 litre equals how many $cm^3$?", ["1000", "100", "10", "10000"], 0, "1000 cubic cm.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Convert $\\pi/4\\text{ rad}$ to degrees.", ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$"], 0, "180/4.", 15, 'medium'),
            generateQuestion("Minor arc length is 10, major arc length is 30. Radius?", ["$20/\\pi$", "$40/\\pi$", "10", "Wait"], 0, "Total circumference = 40. $2\\pi r = 40 \\Rightarrow r = 20/\\pi$.", 15, 'medium'),
            generateQuestion("Calculate interior angle of regular hexagon.", ["$120^\\circ$", "$60^\\circ$", "$108^\\circ$", "$135^\\circ$"], 0, "Ext = 360/6 = 60. Int = 180-60 = 120.", 15, 'medium'),
            generateQuestion("Exterior angle of regular octagon?", ["$45^\\circ$", "$60^\\circ$", "$30^\\circ$", "$90^\\circ$"], 0, "360/8 = 45.", 15, 'medium'),
            generateQuestion("Volume of pyramid, square base $4\\times4$, height 6.", ["32", "96", "16", "48"], 0, "$(1/3) \\times 16 \\times 6 = 32$.", 15, 'medium'),
            generateQuestion("Area of trapezium: parallel sides 4 and 6, height 5.", ["25", "50", "10", "20"], 0, "$0.5 \\times (4+6) \\times 5 = 25$.", 15, 'medium'),
            generateQuestion("Sphere volume $36\\pi$. Radius?", ["3", "6", "2", "4"], 0, "$4/3 \\pi r^3 = 36\\pi \\Rightarrow r^3 = 27 \\Rightarrow r=3$.", 15, 'medium'),
            generateQuestion("Cone base area $16\\pi$, height 3. Volume?", ["$16\\pi$", "$48\\pi$", "$12\\pi$", "$24\\pi$"], 0, "$(1/3) \\times 16\\pi \\times 3 = 16\\pi$.", 15, 'medium'),
            generateQuestion("Solid cylinder $r=2, h=5$. Total Surface Area?", ["$28\\pi$", "$20\\pi$", "$8\\pi$", "$24\\pi$"], 0, "$2\\pi(2^2) + 2\\pi(2)(5) = 8\\pi + 20\\pi = 28\\pi$.", 15, 'medium'),
            generateQuestion("A shape has 54 diagonals. How many sides?", ["12", "10", "11", "9"], 0, "$n(n-3)/2 = 54 \\Rightarrow n^2-3n-108=0 \\Rightarrow (n-12)(n+9)=0 \\Rightarrow n=12$.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("Sector A has $r=2, \\theta=1\\text{ rad}$. Sector B has $r=1, \\theta=4\\text{ rad}$. Area ratios A:B?", ["1:1", "1:2", "2:1", "4:1"], 0, "$A_A = 0.5(4)(1)=2$. $A_B = 0.5(1)(4)=2$. They are equal.", 20, 'hard'),
            generateQuestion("Area of an equilateral triangle with side length $x$?", ["$\\frac{x^2\\sqrt{3}}{4}$", "$\\frac{x^2}{2}$", "$\\frac{x^2\\sqrt{3}}{2}$", "$x^2$"], 0, "$0.5 \\times x \\times x \\times \\sin(60) = 0.5x^2(\\sqrt{3}/2) = x^2\\sqrt{3}/4$.", 20, 'hard'),
            generateQuestion("Frustum of a cone. Radii 2 and 4, height 3. Volume?", ["$28\\pi$", "$14\\pi$", "$24\\pi$", "$12\\pi$"], 0, "$V = \\frac{1}{3}\\pi h (R^2 + Rr + r^2) = \\frac{1}{3}\\pi(3)(16 + 8 + 4) = 28\\pi$.", 20, 'hard'),
            generateQuestion("Two similar cups. Heights 5 and 10. Small cup holds 100ml. Big cup holds?", ["800ml", "400ml", "200ml", "1000ml"], 0, "Linear ratio 1:2. Volume ratio $1^3 : 2^3 = 1:8$. $100 \\times 8 = 800$.", 20, 'hard'),
            generateQuestion("Wire of length 20 forms a circle. Find area.", ["$100/\\pi$", "$400/\\pi$", "$20/\\pi$", "$10/\\pi$"], 0, "$2\\pi r = 20 \\Rightarrow r = 10/\\pi$. Area = $\\pi(10/\\pi)^2 = 100/\\pi$.", 20, 'hard'),
            generateQuestion("Wire of length L cut to form a square and circle. Min total area when:", ["Square side = circle diam", "All square", "All circle", "Square side = circle rad"], 0, "Optimization standard result.", 20, 'hard'),
            generateQuestion("Cube inscribed in a sphere of radius R. Edge length of cube?", ["$2R/\\sqrt{3}$", "$R\\sqrt{2}$", "$R$", "$4R/3$"], 0, "Space diagonal is $2R = s\\sqrt{3} \\Rightarrow s = 2R/\\sqrt{3}$.", 20, 'hard'),
            generateQuestion("A cone and cylinder have same base and height. Ratio of volumes?", ["1:3", "1:2", "2:3", "1:1"], 0, "Cone is naturally exactly 1/3 of a cylinder's volume.", 20, 'hard'),
            generateQuestion("A sphere, cone and cylinder perfectly bound/fit. Ratio of their volumes?", ["2:1:3", "4:1:3", "3:2:1", "1:2:3"], 0, "Archimedes' tombstone proof.", 20, 'hard'),
            generateQuestion("[Interleaved] Expand $(x+3)(x-4)$.", ["$x^2-x-12$", "$x^2+x-12$", "$x^2-12$", "$x^2-7x-12$"], 0, "Algebra link.", 10, 'expert')
        ]
    },
    'g3-s34-stats': {
        learning: [
            // Easy (1-10)
            generateQuestion("For exclusive either/or events, how is $P(A \\cup B)$ calculated?", ["$P(A) \\times P(B)$", "$P(A) + P(B)$", "$P(A) / P(B)$", "$1-P(A)$"], 1, "**Lesson**: Mutually exclusive means adding probabilities.", 10, 'easy'),
            generateQuestion("What exactly does Standard Deviation track?", ["Average", "Total", "Spread", "Max"], 2, "**Lesson**: It measures the 'Spread' or volatility around the mean.", 10, 'easy'),
            generateQuestion("Probability of an impossible event?", ["0", "1", "0.5", "-1"], 0, "Can never happen.", 10, 'easy'),
            generateQuestion("Probability of a certain event?", ["1", "0", "0.5", "100"], 0, "Must happen.", 10, 'easy'),
            generateQuestion("If $P(A) = 0.4$, find $P(A')$ (Complement).", ["0.6", "0.4", "1", "0"], 0, "$1 - 0.4 = 0.6$.", 10, 'easy'),
            generateQuestion("What is the Mode?", ["Most frequent", "Middle", "Average", "Largest-Smallest"], 0, "Value that appears most.", 10, 'easy'),
            generateQuestion("What is the Median?", ["Middle", "Average", "Most frequent", "Spread"], 0, "When sorted, the exact centre.", 10, 'easy'),
            generateQuestion("What is the Mean?", ["Average", "Middle", "Most frequent", "Spread"], 0, "Sum divided by count.", 10, 'easy'),
            generateQuestion("What is the Range?", ["Largest - Smallest", "Average", "Middle", "Variance"], 0, "Simplest measure of spread.", 10, 'easy'),
            generateQuestion("In a 50/50 coin toss, $P(Heads)$?", ["1/2", "1/4", "1", "0"], 0, "Equal chance.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Flip 2 coins. P(Two Heads)?", ["1/4", "1/2", "1/3", "3/4"], 0, "$(1/2) \\times (1/2) = 1/4$.", 15, 'medium'),
            generateQuestion("Data: 2, 3, 3, 4, 8. Mean?", ["4", "3", "20", "5"], 0, "Sum = 20. Count = 5. Mean = 4.", 15, 'medium'),
            generateQuestion("Data: 2, 3, 3, 4, 8. Median?", ["3", "4", "3.5", "8"], 0, "Middle is 3.", 15, 'medium'),
            generateQuestion("Data: 2, 3, 3, 4, 8. Mode?", ["3", "4", "2", "8"], 0, "3 appears twice.", 15, 'medium'),
            generateQuestion("If you add 5 to every data point, what happens to the Mean?", ["Increases by 5", "Stays same", "Multiplies by 5", "Increases by 25"], 0, "Shifts everything up.", 15, 'medium'),
            generateQuestion("If you add 5 to every data point, what happens to the Standard Deviation?", ["Stays same", "Increases by 5", "Multiplies by 5", "Increases by 25"], 0, "Spread doesn't change if you just shift everything.", 15, 'medium'),
            generateQuestion("A die is biased. P(6)=0.2, others equal. P(1)?", ["0.16", "0.2", "1/6", "0.1"], 0, "Remaining prob = $1-0.2 = 0.8$. Shared by 5 numbers: $0.8/5 = 0.16$.", 15, 'medium'),
            generateQuestion("Interquartile Range measures the spread of the middle ___ of data?", ["50%", "25%", "75%", "100%"], 0, "Q3 - Q1 covers the central half.", 15, 'medium'),
            generateQuestion("If Variance is 16, Standard Deviation is?", ["4", "16", "256", "8"], 0, "SD is square root of variance.", 15, 'medium'),
            generateQuestion("General addition rule: $P(A \\cup B) =$?", ["$P(A) + P(B) - P(A \\cap B)$", "$P(A) \\times P(B)$", "$P(A) + P(B)$", "$P(A) / P(B)$"], 0, "Subtract the overlap to prevent double counting.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("A box has 3 Red, 2 Blue balls. Draw 2 WITHOUT replacement. Chance of (Red, Red)?", ["9/25", "3/10", "6/25", "1/5"], 1, "**Lesson**: $(3/5) \\times (2/4) = 6/20 = 3/10$.", 20, 'hard'),
            generateQuestion("In a Box-and-Whisker summary, the middle line represents?", ["Mean", "Median", "Mode", "Range"], 1, "**Lesson**: Median (Q2).", 20, 'hard'),
            generateQuestion("Sum of squares $\\Sigma x^2 = 300$, Mean = 4, n=10. Variance?", ["14", "30", "16", "4"], 0, "$E(X^2) - (E(X))^2 = (300/10) - 4^2 = 30 - 16 = 14$.", 20, 'hard'),
            generateQuestion("Draw 2 cards from 52 deck WITHOUT replacement. P(Both Aces)?", ["1/221", "1/169", "1/4", "3/51"], 0, "$(4/52) \\times (3/51) = (1/13) \\times (1/17) = 1/221$.", 20, 'hard'),
            generateQuestion("For independent events A, B. $P(A \\cap B) =$?", ["$P(A) \\times P(B)$", "$P(A) + P(B)$", "0", "$P(A) / P(B)$"], 0, "Multiply them. One happening doesn't affect the other.", 20, 'hard'),
            generateQuestion("A factory produces 5% defective parts. Select 3. P(All good)?", ["$0.95^3$", "$0.05^3$", "$1 - 0.05^3$", "$1 - 0.95^3$"], 0, "Independent good draws $0.95 \\times 0.95 \\times 0.95$.", 20, 'hard'),
            generateQuestion("Same factory. Select 3. P(At least one defective)?", ["$1 - 0.95^3$", "$0.95^3$", "$0.05 \\times 3$", "$1 - 0.05^3$"], 0, "1 - P(None defective).", 20, 'hard'),
            generateQuestion("Multiply every data point by 3. What happens to Standard Deviation?", ["Multiplies by 3", "Multiplies by 9", "Stays same", "Adds 3"], 0, "Spread scales by exactly the factor.", 20, 'hard'),
            generateQuestion("Multiply every data point by 3. Variance?", ["Multiplies by 9", "Multiplies by 3", "Stays same", "Adds 9"], 0, "Variance is squared SD, so scales by $3^2$.", 20, 'hard'),
            generateQuestion("[Interleaved] Solve $x^2 - 4x + 4 = 0$.", ["2", "-2", "4", "0"], 0, "Algebra link. Perfect square $(x-2)^2=0$.", 10, 'expert')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("P(A) = 0.2, P(B) = 0.3. Events are mutually exclusive. P(A or B)?", ["0.5", "0.06", "0.6", "0.1"], 0, "Just add them. 0.2 + 0.3.", 10, 'easy'),
            generateQuestion("Data visually skewed to the right means the tail is on the?", ["Right", "Left", "Centre", "Top"], 0, "Skew direction follows the long tail.", 10, 'easy'),
            generateQuestion("Which average is most affected by extreme outliers?", ["Mean", "Median", "Mode", "None"], 0, "Mean pulls heavily towards huge errors.", 10, 'easy'),
            generateQuestion("A Histogram's bars must?", ["Touch", "Have Gaps", "Be different colors", "Be horizontally stacked"], 0, "Continuous data, so bars touch.", 10, 'easy'),
            generateQuestion("A Bar chart's bars must?", ["Have Gaps", "Touch", "Be equal height", "Always vertical"], 0, "Discrete/categorical data, so bars have gaps.", 10, 'easy'),
            generateQuestion("P(event) always lies between?", ["0 and 1", "-1 and 1", "0 and 100", "1 and 10"], 0, "Probabilities are fractions.", 10, 'easy'),
            generateQuestion("Tree diagrams multiply probabilities along:", ["Branches", "Columns", "Rows", "Leaves"], 0, "AND rule = multiply across branches.", 10, 'easy'),
            generateQuestion("Tree diagrams add probabilities of:", ["End outcomes", "Branches", "First moves", "Trunks"], 0, "OR rule = add separate end paths.", 10, 'easy'),
            generateQuestion("Sample space means?", ["All possible outcomes", "A space station", "Probability", "Event"], 0, "The full list of what can happen.", 10, 'easy'),
            generateQuestion("If data is tightly clustered, SD is:", ["Small", "Large", "Zero", "Negative"], 0, "Low spread.", 10, 'easy'),
            // Medium (1-10)
            generateQuestion("Cumulative frequency graphs are usually shaped like an:", ["S", "C", "L", "U"], 0, "Ogives flatten out at the top.", 15, 'medium'),
            generateQuestion("Median on cumulative freq graph found by reading at:", ["50%", "25%", "75%", "100%"], 0, "Halfway up the Y-axis.", 15, 'medium'),
            generateQuestion("Upper quartile on cumulative freq graph read at:", ["75%", "50%", "25%", "100%"], 0, "3/4 way up.", 15, 'medium'),
            generateQuestion("If $P(A)=0.5, P(B)=0.4, P(A \\cap B)=0.2$. Find $P(A \\cup B)$.", ["0.7", "0.9", "0.2", "1.1"], 0, "$0.5+0.4-0.2 = 0.7$.", 15, 'medium'),
            generateQuestion("Are A and B from previous question independent?", ["Yes", "No"], 0, "$P(A) \\times P(B) = (0.5)(0.4) = 0.20$. This matches $P(A \\cap B)$. Yes.", 15, 'medium'),
            generateQuestion("Variance computation?", ["$\\text{Mean of Squares} - \\text{Square of Mean}$", "$\\text{Mean} - \\text{Square}$", "Max - Min", "Sum / n"], 0, "$E(X^2) - (E(X))^2$.", 15, 'medium'),
            generateQuestion("Mean of 4 numbers is 5. Provide 5th number so mean is 6.", ["10", "6", "5", "11"], 0, "Current sum = 20. New sum needs to be $6 \\times 5 = 30$. Need 10.", 15, 'medium'),
            generateQuestion("Which is typically used for categorical data?", ["Pie Chart", "Histogram", "Scatter curve", "Box plot"], 0, "Slices representing categories.", 15, 'medium'),
            generateQuestion("Sector angle in Pie Chart formula?", ["$\\text{Fraction} \\times 360^\\circ$", "$\\text{Fraction} \\times 100$", "$\\text{Frequency} + 360$", "$\\text{Area}$"], 0, "Proportion of full circle.", 15, 'medium'),
            generateQuestion("In histogram, what represents the frequency?", ["Area of bar", "Height of bar", "Width of bar", "Color"], 0, "Area is proportional to frequency.", 15, 'medium'),
            // Hard (1-10)
            generateQuestion("If frequency density = frequency / class width. What's freq if $FD=2$, $cw=5$?", ["10", "2.5", "7", "0.4"], 0, "Area $= 2 \\times 5 = 10$.", 20, 'hard'),
            generateQuestion("Bag has 5 red, x blue. Random red = 1/3. Find x.", ["10", "5", "15", "20"], 0, "$5/(5+x) = 1/3 \\Rightarrow 15=5+x \\Rightarrow x=10$.", 20, 'hard'),
            generateQuestion("A and B are independent. $P(A \\cup B) = 0.8$, $P(A) = 0.5$. Find $P(B)$.", ["0.6", "0.3", "0.5", "0.4"], 0, "$0.8 = 0.5 + P(B) - 0.5P(B) \\Rightarrow 0.3 = 0.5P(B) \\Rightarrow P(B)=0.6$.", 20, 'hard'),
            generateQuestion("Class 1 n=20 mean=5. Class 2 n=30 mean=10. Combined mean?", ["8", "7.5", "6", "9"], 0, "$(20 \\times 5 + 30 \\times 10) / 50 = (100+300)/50 = 400/50 = 8$.", 20, 'hard'),
            generateQuestion("Test for outliers often uses: $> Q3 + ?$ times IQR.", ["1.5", "1", "2", "3"], 0, "Standard 1.5 IQR rule.", 20, 'hard'),
            generateQuestion("Roll 5 fair dice. P(Exactly three 6s)?", ["$10(1/6)^3(5/6)^2$", "$(1/6)^3$", "$10(1/6)^3$", "$(1/6)^3(5/6)^2$"], 0, "Binomial $(5 \\text{ choose } 3) p^3 q^2$.", 20, 'hard'),
            generateQuestion("If $P(A|B) = P(A)$, it means A and B are:", ["Independent", "Mutually Exclusive", "Subset", "Certain"], 0, "Knowing B doesn't change probability of A.", 20, 'hard'),
            generateQuestion("Bayes' conceptual: $P(A \\cap B)$ can be written as $P(A)P(B|A)$ or?", ["$P(B)P(A|B)$", "$P(A)+P(B)$", "$P(A)P(B)$", "$P(A \\cup B)$"], 0, "Symmetric conditional definition.", 20, 'hard'),
            generateQuestion("The normal distribution curve is perfectly?", ["Symmetrical", "Skewed left", "Skewed right", "Bimodal"], 0, "Bell curve is symmetrical.", 20, 'hard'),
            generateQuestion("[Interleaved] Which represents inverse proportion?", ["$y=k/x$", "$y=kx$", "$y=kx^2$", "$y=k+x$"], 0, "Algebra link.", 10, 'expert')
        ]
    }
};

export { g3Topics, g3Questions };
