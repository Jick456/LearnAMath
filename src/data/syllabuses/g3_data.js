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
- **Average Speed** = $\frac{\\text{Total Distance}}{\\text{Total Time}}$. Never ever simply average two different speeds!

**Percentage Changes**
- Formula for the real world: $\frac{\\text{Actual Change}}{\\text{Original Amount}} \\times 100%$.

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
- **Gradient ($m$)**: Represents hill steepness. Formula: $m = \frac{\\text{rise}}{\\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$.
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
- **Area of Trapezium**: Average of the parallel walls $\\times$ height: $\frac{1}{2} (a+b) h$.

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
- Calculated purely as $\frac{\\text{No. of Favorable Outcomes}}{\\text{Total Possible Outcomes}}$.
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
- **Tangent**: $\tan(\theta) = \frac{\\text{Opposite}}{\\text{Adjacent}}$
- **Cosine**: $\\cos(\theta) = \frac{\\text{Adjacent}}{\\text{Hypotenuse}}$
- **Sine**: $\\sin(\theta) = \frac{\\text{Opposite}}{\\text{Hypotenuse}}$

> [!tip] **Exam Strategy**
> When doing multi-step trigonometry, keep the exact value (using the 'ANS' button or a long decimal) until the very final step to avoid rounding errors.`
    },
    {
        id: 'g3-s2-mensuration', level: 'Sec 2 (G3)', title: '3D Mensuration',
        description: 'Volume/SA of pyramids, cones, spheres.', color: '#fb923c', emoji: '⛰️',
        location: 'The Volume Volcanos', storyline: 'Measure the cones and spheres of magma carefully.', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: cylinder]

**3D Shapes Formulas: Filling the Void**
- **Pyramid/Cone Volume**: They hold exactly $1/3$ of a straight prism. $V = \frac{1}{3} \\times \\text{Base Area} \\times \\text{Height}$.
- **Sphere Volume**: The perfect orb. $V = \frac{4}{3}\\pi r^3$.

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
- **Speed problems** notoriously result in quadratic equations: e.g., $\frac{D}{x} - \frac{D}{x+2} = 1\\text{ hour}$ difference!

> [!tip] **Exam Strategy**
> If $D/x - D/(x+2) = 1$, multiply EVERYTHING by $x(x+2)$ to instantly wipe out the fractions and reveal a quadratic equation.`
    },
    {
        id: 'g3-s34-funcs', level: 'Sec 3/4 (G3)', title: 'Functions',
        description: 'Quadratic/Power/Exponential functions.', color: '#818cf8', emoji: '📈',
        location: 'The Exponential Expanse', storyline: 'Your power grows exponentially!', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**The Ultimate Quadratic Formula**
- The heavy artillery solver: $x = \frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- **The Discriminant ($b^2 - 4ac$)**: It predicts the future! If $>0$ (two real roots), if $=0$ (one touching root), if $<0$ (graph floats, no real roots).

**Other Strange Graphs**
- **Exponential**: $y = a^x$. Curve shoots upwards to infinity rapidly, approaching but never fully touching the $x$-axis.
- **Reciprocal/Power**: $y = \frac{k}{x}$. Curve splits into asymptotes (invisible forcefield lines it approaches but can never touch).

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
- **Gradient**: $m = \frac{y_2 - y_1}{x_2 - x_1}$

> [!tip] **Exam Strategy**
> Any triangle drawn inside a semicircle that touches the edge will have a perfect $90^\\circ$ angle opposite the diameter.`
    },
    {
        id: 'g3-s34-trig', level: 'Sec 3/4 (G3)', title: 'Advanced Trig & Bearings',
        description: 'Sine/Cosine for obtuse, Sine/Cosine rules, 3D problems, Bearings.', color: '#fbbf24', emoji: '🧭',
        location: 'The Compass Caves', storyline: 'Navigate your bearings in 3D to find the hidden path.', themeClass: 'theme-abyss',
        crashCourse: `**Advanced Trigonometry: Any Triangle**
- **Sine Rule**: $\frac{a}{\\sin A} = \frac{b}{\\sin B} = \frac{c}{\\sin C}$
- **Cosine Rule**: $c^2 = a^2 + b^2 - 2ab\\cos C$
- **Area of ANY Triangle**: $\frac{1}{2}ab\\sin C$

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
- To convert to radians: Multiply by $\frac{\\pi}{180^\\circ}$.
- **Arc Length**: $s = r\theta$ (where $\theta$ MUST be in radians!)
- **Sector Area**: $A = \frac{1}{2}r^2\theta$ (radians only!)

**(If forced to use Degrees)**
- Arc Length = $\frac{\theta}{360} \\times 2\\pi r$
- Sector Area = $\frac{\theta}{360} \\times \\pi r^2$

> [!tip] **Exam Strategy**
> Circle formulas $s = r\theta$ and Area $= 0.5r^2\theta$ ONLY work if your calculator is set strictly to RADIANS mode.`
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
            generateQuestion("Which specific mystery number is a Prime (only divisible by 1 and itself)?", ["1", "4", "9", "11"], 3, "Brilliant! 11 is a true prime. Fun fact: 1 isn't prime because it only has one factor, and primes need exactly two!", 10, 'easy'),
            generateQuestion("Find the highest common 'building block' (HCF) of 12 and 18.", ["2", "3", "6", "36"], 2, "Spot on! The largest number that fits perfectly into both 12 and 18 is 6.", 10, 'easy')
        ],
        testing: [
            generateQuestion("What is the lowest meeting point (LCM) for the 4 and 6 times tables?", ["2", "12", "24", "10"], 1, "Awesome! 12 is the smallest number that both 4 and 6 can reach by multiplying.", 15, 'easy'),
            generateQuestion("Round the constant $3.14159$ to 3 significant figures.", ["3.14", "3.142", "3.141", "3.10"], 0, "Great! We count 3, 1, 4. Since the next digit is 1, we keep it as 3.14. Perfect precision!", 15, 'medium')
        ]
    },
    'g3-s1-ratio-pct': {
        learning: [
            generateQuestion("Shrink the ratio $15:25$ down to its simplest form.", ["3:5", "5:3", "1:2", "3:4"], 0, "Well done! Dividing both by 5 reveals the core $3:5$ ratio.", 10, 'easy'),
            generateQuestion("If a supersonic jet travels 150km in 3 hours, what is its average speed?", ["450 km/h", "50 km/h", "153 km/h", "30 km/h"], 1, "Correct! Speed = Distance / Time. $150 \\div 3 = 50$ km/h. Keep up the pace!", 10, 'easy')
        ],
        testing: [
            generateQuestion("You scored 40 out of 50. What's your percentage score?", ["40%", "50%", "80%", "90%"], 2, "Fantastic! $40/50$ is the same as $80/100$, giving you a solid $80%$.", 15, 'medium'),
            generateQuestion("A $50 item is increased by 20%. What's the new shop price?", ["$60", "$70", "$52", "$10"], 0, "Great logic! $20%$ of 50 is 10. Adding it to the original gives us $$60$.", 20, 'medium')
        ]
    },
    'g3-s1-algebra': {
        learning: [
            generateQuestion("Organize this expression: $4x + 3y - x$.", ["4x + 2y", "3x + 3y", "2xy", "3x - 3y"], 1, "Exactly! We group the $x$ terms together ($4x - x = 3x$), leaving the $3y$ alone.", 10, 'easy'),
            generateQuestion("If $2x = 10$, what value is hiding inside the $x$ box?", ["2", "5", "8", "12"], 1, "Perfect! Divide both sides by 2 to find that $x = 5$.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Solve this 2-step mystery: $3x - 4 = 11$.", ["4", "5", "15", "7"], 1, "Spot on! Add 4 to both sides to get $3x = 15$, then divide by 3 to find $x = 5$.", 15, 'medium'),
            generateQuestion("CRITICAL: Solve the inequality $-2x > 8$.", ["$x > 4$", "$x > -4$", "$x < -4$", "$x < 4$"], 2, "Masterful! Because you divided by a negative number, you flipped the sign! $x < -4$.", 20, 'hard')
        ]
    },
    'g3-s1-funcs': {
        learning: [
            generateQuestion("Where does the line $y = 2x - 5$ cross the vertical y-axis?", ["2", "-5", "5", "x"], 1, "Correct! In $y=mx+c$, the $c$ value (-5) is our starting intercept on the y-axis.", 10, 'easy'),
            generateQuestion("What is the steepness (gradient) of the path $y = 3x + 1$?", ["3", "1", "x", "y"], 0, "Yes! The number 3 sitting next to $x$ tells us exactly how steep the line is.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Which coordinate point lies on the line $y = x + 4$?", ["(0, 0)", "(1, 4)", "(2, 6)", "(3, 8)"], 2, "Brilliant! If we plug $x=2$ in, $y = 2+4=6$, so (2,6) fits perfectly.", 15, 'medium'),
            generateQuestion("Find the gradient of a line passing through (1,2) and (3,8).", ["2", "3", "4", "6"], 1, "Flawless! $\frac{8 - 2}{3 - 1} = \frac{6}{2} = 3$. You've mastered the rise-over-run!", 20, 'hard')
        ]
    },
    'g3-s1-geometry': {
        learning: [
            generateQuestion("Are alternate 'Z' angles always equal for parallel lines?", ["Yes", "No", "Only if $90^\\circ$", "They sum to $180^\\circ$"], 0, "Absolutely! Alternate angles between parallel lines are perfectly equal.", 10, 'easy'),
            generateQuestion("Calculate the volume of any uniform Prism.", ["Base Area $\\times$ Height", "$\frac{1}{2}$ Base $\\times$ Height", "$\\pi r^2 h$", "Length $\\times$ Width"], 0, "Right on! You simply multiply the floor area by how high the prism rises.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Area of a trapezium with parallel walls 4 and 6, and a height of 5.", ["20", "24", "25", "50"], 2, "Perfect! $\frac{1}{2}(4+6) \\times 5 = 25$. You've averaged the walls beautifully.", 15, 'medium'),
            generateQuestion("Volume of a cylinder with radius 3 and height 10. (Use $\\pi \\approx 3.14$)", ["282.6", "94.2", "188.4", "942"], 0, "Awesome! $\\pi \\times 3^2 \\times 10 = 282.6$. That's a lot of space!", 20, 'hard')
        ]
    },
    'g3-s1-stats': {
        learning: [
            generateQuestion("Which average represents the most 'trendy' or frequent value?", ["Mean", "Median", "Mode", "Range"], 2, "Correct! The 'Mode' is the value that appears most often in the data fashion show.", 10, 'easy'),
            generateQuestion("What is the probability of rolling a '7' on a standard 6-sided die?", ["1", "1/6", "0", "1/2"], 2, "Exactly! It's an impossible dream, so the probability is zero.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Find the median (truest center) of: 3, 1, 4, 1, 5", ["1", "3", "4", "5"], 1, "Great sorting! Arranged as 1, 1, 3, 4, 5, the center value is exactly 3.", 15, 'medium'),
            generateQuestion("The mean of 4 numbers is 5. What must their total sum be?", ["1.25", "9", "20", "4"], 2, "Brilliant reverse-math! If the average for 4 items is 5, the total has to be $4 \\times 5 = 20$.", 15, 'hard')
        ]
    },
    // --- Sec 2 G3 ---
    'g3-s2-algebra': {
        learning: [
            generateQuestion("Unleash the magic! Factorise the expression $x^2 - 25$.", ["$(x-5)(x-5)$", "$(x-5)(x+5)$", "$x(x-25)$", "Cannot be factorised"], 1, "Exactly! You used the legendary Difference of Two Squares: $a^2 - b^2 = (a-b)(a+b)$.", 10, 'easy'),
            generateQuestion("Expand the brackets! $3(2x - 4)$.", ["$6x - 4$", "$5x - 7$", "$6x - 12$", "$6x + 12$"], 2, "Yes! The 3 outside must be distributed to both heroes inside the bracket. $6x - 12$.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Factorise completely: $2x^2 + 8x$.", ["$2(x^2 + 4x)$", "$x(2x + 8)$", "$2x(x + 4)$", "$4x(x/2 + 2)$"], 2, "Brilliant! You extracted the Highest Common Factor (2x), leaving a clean $(x+4)$ behind.", 15, 'medium'),
            generateQuestion("Master move: Factorise by grouping $ax + ay + 2x + 2y$.", ["$(a+2)(x+y)$", "$a(x+y+2)$", "$2(ax+ay)$", "$(a+x)(2+y)$"], 0, "Incredible! You grouped them into pairs and found the common $(x+y)$ bracket. Pure genius!", 20, 'hard')
        ]
    },
    'g3-s2-quadratics': {
        learning: [
            generateQuestion("Solve the mystery of $x^2 - 4x = 0$.", ["$x=4$", "$x=0, x=4$", "$x=\\pm 2$", "$x=0, x=-4$"], 1, "Perfect! By factorising into $x(x-4)=0$, you found both potential values for $x$.", 10, 'easy'),
            generateQuestion("What is the signature U-shape of a quadratic graph $y = x^2$ called?", ["Line", "Parabola", "Circle", "Hyperbola"], 1, "Bingo! That beautiful, symmetrical curve is called a Parabola.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Factorise to solve: $x^2 + 5x + 6 = 0$.", ["-2, -3", "2, 3", "-1, -6", "1, 6"], 0, "Amazing! $(x+2)(x+3)=0$ means $x$ could be -2 or -3. You nailed the signs!", 15, 'medium'),
            generateQuestion("Solve the Crossroads (Simultaneous Equations): $x+y=5$ and $x-y=1$.", ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], 0, "Awesome elimination! Adding the equations crushed the $y$ terms, leaving $2x=6$, so $x=3$.", 20, 'hard')
        ]
    },
    'g3-s2-geometry': {
        learning: [
            generateQuestion("Two triangles have the exact same shape but different sizes. They are:", ["Congruent", "Similar", "Equal", "Symmetric"], 1, "Correct! 'Similar' means they are scale models of each other.", 10, 'easy'),
            generateQuestion("Which test ensures two triangles are identical 'Congruent' clones?", ["AAA", "SSS", "ASS", "SSA"], 1, "Yes! 'SSS' (Side-Side-Side) proves beyond doubt they are exactly the same.", 10, 'easy')
        ],
        testing: [
            generateQuestion("If lengths of two Similar Shapes have ratio 1:3, what is their Area ratio?", ["1:3", "1:6", "1:9", "1:27"], 2, "Spot on! The Area ratio is the scale factor SQUARED. $1^2 : 3^2 = 1:9$.", 15, 'medium'),
            generateQuestion("If a Volume ratio is 8:27, what is the length ratio?", ["2:3", "4:9", "8:27", "$\\sqrt{8}:\\sqrt{27}$"], 0, "Incredible! You took the cube root of the volume ratio to find the length ratio. $2^3=8$ and $3^3=27$.", 20, 'hard')
        ]
    },
    'g3-s2-pythagoras': {
        learning: [
            generateQuestion("Which rule unlocks the secrets of right-angled triangles?", ["$a^2+b^2=c^2$", "$a+b=c$", "$a^2-b^2=c^2$", "$a^2+b^2=c$"], 0, "Perfect! The legendary Pythagoras Theorem: $a^2 + b^2 = c^2$.", 10, 'easy'),
            generateQuestion("In trig, Sine (\\sin \\theta) represents which ratio?", ["Adjacent/Hypotenuse", "Opposite/Adjacent", "Opposite/Hypotenuse", "Hypotenuse/Opposite"], 2, "Correct! You successfully used SOH: Sine = Opposite over Hypotenuse.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Find the hypotenuse if the shorter sides are 5 and 12.", ["13", "14", "15", "17"], 0, "Brilliant! \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$. A perfect integer!", 15, 'medium'),
            generateQuestion("If Tan (\\tan \\theta) = 1, what is the angle?", ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$90^\\circ$"], 1, "Awesome! When Tan is 1, the Opposite and Adjacent sides are equal, which happens at exactly $45^\\circ$.", 20, 'hard')
        ]
    },
    'g3-s2-mensuration': {
        learning: [
            generateQuestion("What is the perfect formula for sphere volume?", ["$4\\pi r^2$", "$\\frac{4}{3}\\pi r^3$", "$\\pi r^2 h$", "$\\frac{1}{3}\\pi r^2 h$"], 1, "Great memory! The volume of an orb is indeed $\\frac{4}{3}\\pi r^3$.", 10, 'easy'),
            generateQuestion("A cone's volume is what fraction of its parent cylinder?", ["Same", "Half", "One-third", "Quarter"], 2, "Yes! Any pointy shape (cone/pyramid) holds exactly one-third of its straight counterpart.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Surface area of a sphere with radius 5. (Leave it in terms of $\\pi$)", ["$100\\pi$", "$25\\pi$", "$50\\pi$", "$125\\pi$"], 0, "Perfect! $4\\pi \\times 5^2 = 100\\pi$. A beautiful spherical result!", 15, 'medium'),
            generateQuestion("Find volume for a pyramid with square base (sides 4) and height 6.", ["96", "32", "24", "48"], 1, "Awesome! $\\frac{1}{3} \\times (4\\times 4) \\times 6 = 32$. You've mastered the 1/3 rule!", 20, 'hard')
        ]
    },
    // --- Sec 3/4 G3 ---
    'g3-s34-algebra': {
        learning: [
            generateQuestion("Simplify the algebraic fraction addition: $\\frac{x}{2} + \\frac{x}{3}$.", ["$\\frac{2x}{5}$", "$\\frac{5x}{6}$", "$\\frac{x^2}{6}$", "$x$"], 1, "Exactly! You found the common ground of 6. $\\frac{3x}{6} + \\frac{2x}{6} = \\frac{5x}{6}$. Brilliant fraction work!", 10, 'easy'),
            generateQuestion("To solve $\\frac{2}{x} = \\frac{3}{5}$, what is the value of $x$?", ["$10/3$", "$3/10$", "$5/2$", "15"], 0, "Spot on! Cross-multiplying gives $10 = 3x$, so $x = 10/3$.", 15, 'medium')
        ],
        testing: [
            generateQuestion("Solve for $x$: $\\frac{5}{x+1} = 2$.", ["1.5", "2.5", "3.5", "0.5"], 0, "Perfect! $5 = 2(x+1) \\Rightarrow 5 = 2x+2 \\Rightarrow 2x=3$, making $x=1.5$. Great algebra!", 15, 'medium'),
            generateQuestion("If a train speeds through $100\\text{ km}$ at a rate of $v$ km/h, what is the time taken?", ["$100v$", "$100/v$", "$v/100$", "$100-v$"], 1, "Correct! Time = Distance / Speed. This logic solves many complex word problems. Well done!", 20, 'hard')
        ]
    },
    'g3-s34-funcs': {
        learning: [
            generateQuestion("In the quadratic formula artillery, which part is the 'Discriminant'?", ["$-b$", "$b^2 - 4ac$", "$2a$", "$\\sqrt{b^2-4ac}$"], 1, "Yes! The 'Discriminant' is strictly the $b^2 - 4ac$ living under the root symbol.", 10, 'easy'),
            generateQuestion("If our Discriminant predictor equals zero, how many real roots exist?", ["0", "1", "2", "Infinite"], 1, "Exactly! The $\\pm \\sqrt{0}$ does nothing, leaving exactly one touching root point.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Solve $x^2 + 2x - 1 = 0$ with the formula. What is the value of the discriminant?", ["8", "4", "-8", "0"], 0, "Brilliant! $2^2 - 4(1)(-1) = 4 + 4 = 8$. You've opened the door to the roots!", 15, 'medium'),
            generateQuestion("The reciprocal graph $y = \\frac{2}{x}$ possesses asymptotes at:", ["$y=2$", "$x=2$", "$x=0$ and $y=0$", "No asymptotes"], 2, "Powerful insight! $x$ can never be 0 (crashing the math) and $y$ can never be exactly 0 (it floats).", 20, 'hard')
        ]
    },
    'g3-s34-sets': {
        learning: [
            generateQuestion("The Union ($A \\cup B$) represents combining elements in:", ["A only", "B only", "A or B (or both)", "A and B strictly"], 2, "Correct! Union is like marriage; it brings everything from both families together!", 10, 'easy'),
            generateQuestion("What is the raw definition of the complement $A'$?", ["Everything in A", "Everything outside A", "Empty set", "Universal set"], 1, "Spot on! $A'$ means everything in the universe EXCEPT what's inside A.", 10, 'easy')
        ],
        testing: [
            generateQuestion("If Universe $\\xi=\\{1,2,3,4\\}$ and $A=\\{1,2\\}$, what elements form $A'$?", ["$\\{1,2\\}$", "$\\{3,4\\}$", "$\\{1,2,3,4\\}$", "$\\emptyset$"], 1, "Brilliant! Only 3 and 4 live outside the walls of A. Perfect sorting!", 15, 'medium'),
            generateQuestion("If $n(A \\cup B) = 30$, $n(A)=20$, and $n(B)=15$, find the overlap $n(A \\cap B)$.", ["5", "10", "15", "0"], 0, "Brilliant subtraction! $20 + 15 = 35$. Since the union is only 30, exactly 5 people are overlapping in both groups.", 20, 'hard')
        ]
    },
    'g3-s34-matrices': {
        learning: [
            generateQuestion("What is the order of a data grid (Matrix) with 3 rows and 2 columns?", ["3x2", "2x3", "6", "3+2"], 0, "Correct! We always document matrices as Rows $\\times$ Columns. (Think RC cola!)", 10, 'easy'),
            generateQuestion("Can you multiply a (2x3) matrix by a (2x2) matrix as $A \\times B$?", ["Yes", "No"], 1, "Exactly right! Multiplication fails because the columns (3) don't match the rows (2).", 10, 'medium')
        ],
        testing: [
            generateQuestion("If Matrix $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$, find $2A$.", ["$\\begin{pmatrix} 2 & 4 \\\\ 0 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 2 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 2 & 6 \\end{pmatrix}$"], 0, "Perfect! You doubled every single element in the grid. Great scaling!", 15, 'medium'),
            generateQuestion("Add $\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ and $\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$.", ["$\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$", "Cannot be added"], 0, "Spot on! You added the matching top values (1+3=4) and bottom values (2-1=1).", 15, 'hard')
        ]
    },
    'g3-s34-vectors': {
        learning: [
            generateQuestion("A Vector is a powerful arrow because it possesses:", ["Only Magnitude", "Only Direction", "Both Magnitude & Direction", "Neither"], 2, "Correct! A vector is defined by its strength (magnitude) AND its heading (direction).", 10, 'easy'),
            generateQuestion("If Vector $\\mathbf{u} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$, what is its opposite $-\\mathbf{u}$?", ["$\\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$", "$\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$"], 0, "Perfect! Negating the vector flips it $180^\\circ$ in the completely opposite direction.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Find the magnitude (Length) of Vector $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$.", ["1", "5", "7", "-5"], 1, "Brilliant! You used Pythagoras: $\\sqrt{3^2 + (-4)^2} = 5$. Pure vector mastery!", 15, 'medium'),
            generateQuestion("If $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$, find $\\mathbf{a} + 2\\mathbf{b}$.", ["$\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 7 \\\\ 0 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$", "$\\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix}$"], 1, "Sensational calculation! You doubled B and then merged it with A. Top-tier work!", 20, 'hard')
        ]
    },
    'g3-s34-geometry': {
        learning: [
            generateQuestion("The angle subtended by a diameter at the circumference wall is always:", ["$45^\\circ$", "$90^\\circ$", "$180^\\circ$", "$360^\\circ$"], 1, "Absolutely right! It forms a perfect right angle ($90^\\circ$) every single time.", 10, 'easy'),
            generateQuestion("Opposite angles trapped in a cyclic quadrilateral will always sum to:", ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], 1, "Exactly! They balance out to a full straight line sum of $180^\\circ$.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Find the distance between checkpoint (1,1) and point (4,5).", ["3", "4", "5", "7"], 2, "Perfect! You deduced the 3-4-5 triangle gap. $\\sqrt{3^2 + 4^2} = 5$.", 15, 'medium'),
            generateQuestion("If the angle at the centre is $80^\\circ$, what is the angle at the circumference?", ["$160^\\circ$", "$80^\\circ$", "$40^\\circ$", "$20^\\circ$"], 2, "Correct! The circumference angle is always precisely half of the angle at the centre!", 15, 'hard')
        ]
    },
    'g3-s34-trig': {
        learning: [
            generateQuestion("What is the beautiful ratio of the Sine Rule?", ["$a/\\sin A = b/\\sin B$", "$a^2=b^2+c^2-2bc\\cos A$", "$\\text{Area} = 0.5ab\\sin C$", "$\\sin^2 + \\cos^2 = 1$"], 0, "Perfect! The ratio between a side and its opposite angle is constant in any triangle.", 10, 'easy'),
            generateQuestion("Nautical Bearings are universally measured clockwise starting from:", ["North", "South", "East", "West"], 0, "Yes! Always start at True North ($000^\\circ$) and sweep around clockwise.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Which messier rule is the Cosine rule for finding side $a$?", ["$a^2=b^2+c^2+bc\\cos A$", "$a^2=b^2+c^2-2bc\\cos A$", "$a=b+c-\\cos A$", "$a^2=b^2+c^2-bc\\sin A$"], 1, "Correct! The Cosine Rule is effectively $b^2 + c^2 - 2bc\\cos A$. You've got the armor for any triangle!", 15, 'medium'),
            generateQuestion("Find the area of a triangle with sides 5, 8 and an included angle of $30^\\circ$.", ["20", "10", "17.3", "40"], 1, "Sensational! $0.5 \\times 5 \\times 8 \\times \\sin(30^\\circ) = 10$. Area calculation mastered!", 20, 'hard')
        ]
    },
    'g3-s34-mensuration': {
        learning: [
            generateQuestion("Convert the standard $\\pi$ radians directly into degrees.", ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], 1, "Spot on! One $\\pi$ is exactly half a circle ($180^\\circ$).", 10, 'easy'),
            generateQuestion("What is the fast Arc length formula when $\\theta$ is in radians?", ["$\\frac{1}{2}r^2\\theta$", "$r\\theta$", "$\\pi r^2$", "$2\\pi r$"], 1, "Exactly! When using radians, the crust is simply radius $\\times$ angle. So $s = r\\theta$.", 10, 'easy')
        ],
        testing: [
            generateQuestion("Find sector area for $r=4$ and a central angle $\\theta=1\\text{ rad}$.", ["4", "8", "16", "2"], 1, "Perfect! $\\frac{1}{2} \\times 4^2 \\times 1 = 8$. You correctly used the radian area shortcut!", 15, 'medium'),
            generateQuestion("If arc length is 10 and radius is 5, find the angle in radians.", ["2", "50", "0.5", "5"], 0, "Brilliant! Since $s=r\\theta$, $10=5\\theta$, giving us exactly 2 radians.", 20, 'hard')
        ]
    },
    'g3-s34-stats': {
        learning: [
            generateQuestion("For exclusive either/or events, how is $P(A \\cup B)$ calculated?", ["$P(A) \\times P(B)$", "$P(A) + P(B)$", "$P(A) / P(B)$", "$1-P(A)$"], 1, "Exactly! If they are mutually exclusive, you simply add their probabilities together.", 10, 'easy'),
            generateQuestion("What exactly does Standard Deviation track?", ["Average", "Total", "Spread", "Max"], 2, "Yes! It measures the 'Spread' or volatility of data around the mean.", 10, 'easy')
        ],
        testing: [
            generateQuestion("A box has 3 Red, 2 Blue balls. Draw 2 WITHOUT replacement. Chance of (Red, Red)?", ["9/25", "3/10", "6/25", "1/5"], 1, "Incredible! $(3/5) \\times (2/4) = 6/20 = 3/10$. You mastered the decreasing probability! Fantastic!", 20, 'medium'),
            generateQuestion("In a Box-and-Whisker summary, what does the middle line inside the box represent?", ["Mean", "Median", "Mode", "Range"], 1, "Perfect! The median (middle person) always marks the heart of the Box-and-Whisker plot.", 15, 'hard')
        ]
    }
};

export { g3Topics, g3Questions };
