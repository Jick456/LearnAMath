import { generateQuestion } from './utils';

const g1Topics = [
    // --- SECONDARY 1 G1 ---
    {
        id: 'g1-s1-numbers', level: 'Sec 1 (G1)', title: 'Numbers and Operations',
        description: 'Prime numbers, HCF, LCM, and integers.', color: '#34d399', emoji: '🔢',
        location: 'The Prime Forest', storyline: 'The trees here are only divisible by themselves and one. Find the prime path!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: number-line]

**Integers & Operations: The Number Line Game!**
- **Integers** are whole numbers. Moving right is positive (gaining), moving left is negative (losing).
- Multiplying two negatives? Think of reversing a video of someone walking backwards. It turns out positive! e.g., $(-3) \\times (-4) = 12$.

**Worked Example: Negative Multiplication**
*Question*: Evaluate $(-5) \\times 4 + (-2) \\times (-3)$.
*Step 1*: BODMAS! Multiply first. $(-5) \\times 4 = -20$.
*Step 2*: Multiply the second part. negative $\\times$ negative = positive! $(-2) \\times (-3) = +6$.
*Step 3*: Add them. $-20 + 6 = -14$.

**Factors & Primes: The Building Blocks**
- **Prime Number**: A VIP number that only allows 1 and itself into its party! (e.g., 2, 3, 5, 7, 11).
- **HCF**: The biggest "building block" two numbers share.
- **LCM**: The smallest point where the "times tables" of two numbers meet.

> [!warning] **Common Pitfall**
> Always double-check your HCF/LCM by listing out the first few multiples. A common trap is finding the HCF when the question asks for LCM! If the numbers get *bigger*, you want the LCM. If you are breaking things into groups, you want the *HCF*.`
    },
    {
        id: 'g1-s1-ratio', level: 'Sec 1 (G1)', title: 'Ratio and Proportion',
        description: 'Concept of ratio and proportion.', color: '#fbbf24', emoji: '⚖️',
        location: 'The Balancing Bridge', storyline: 'Balance the weights to cross the bridge safely!', themeClass: 'theme-desert',
        crashCourse: `[DIAGRAM: balance-scale]

**Ratios: Sharing the Pie**
- A **ratio** shows how portions are shared, written as $a : b$.
- **Equivalent Ratios**: Like zooming in or out. $2:3$ is the exact same proportion as $4:6$ (just multiply by 2).
- **Simplifying**: Make it as simple as possible by dividing by their Highest Common Factor. $15:20$ scales down to $3:4$.

**Worked Example: Sharing in a Ratio**
*Question*: Alice and Bob share $$40$ in the ratio $3:5$. How much does Bob get?
*Step 1*: Find total parts. $3 + 5 = 8$ total parts.
*Step 2*: Find value of ONE part. $40 \\div 8 = 5$ per part.
*Step 3*: Find Bob's share. Bob has 5 parts, so $5 \\times 5 = 25$.

**Proportions: Moving Together**
- **Direct Proportion**: If one side goes up, the other goes up at the exact same rate! If 3 apples cost $$6$ ($$2$ each), then 5 apples cost $$10$.

> [!warning] **Exam Strategy & Common Pitfall**
> If the question mixes sets of units (e.g., $cm$ and $m$), **convert everything to the SMALLER unit** before writing your ratio. A common mistake is writing $1m : 50cm$ as $1:50$. It must be $100cm : 50cm = 2:1$!`
    },
    {
        id: 'g1-s1-percentage', level: 'Sec 1 (G1)', title: 'Percentage',
        description: 'Understanding and calculating percentages.', color: '#f87171', emoji: '💯',
        location: 'The Percentile Peaks', storyline: 'Climb to the top to see the full 100%!', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: fraction-pie]

**Percentages: Out of 100!**
- **Percentage** literally means "out of 100". $x\\%$ is just the fraction $\\frac{x}{100}$. It's a universal way to compare things.
- **Converting**: To turn a decimal or fraction into a percentage, just multiply it by $100\\%$. (e.g., $0.45 \\times 100\\% = 45\\%$).

**Calculations in the Real World**
- **Finding a %**: $25\\%$ of something is just $0.25 \\times$ that thing.
- **Percentage Change**: $\\frac{\\text{Actual Change}}{\\text{Original Score}} \\times 100\\%$. Always compare to the original!

**Worked Example: Percentage Discount**
*Question*: A $$60$ game is on a $15\\%$ sale. What is the new price?
*Method 1*: Find $15\\%$ ($0.15 \\times 60 = 9$). Subtract: $60 - 9 = $51$.
*Method 2 (Faster)*: If it's $15\\%$ off, you pay $85\\%$. $0.85 \\times 60 = $51$.

> [!warning] **Common Pitfall**
> When calculating Percentage Increase/Decrease, always divide by the ORIGINAL number, not the new number!`
    },
    {
        id: 'g1-s1-algebra', level: 'Sec 1 (G1)', title: 'Algebraic Expressions',
        description: 'Using letters to represent numbers.', color: '#60a5fa', emoji: '🧮',
        location: 'The Algebra Abyss', storyline: 'Letters have replaced the numbers in the deep abyss. Solve the mystery!', themeClass: 'theme-abyss',
        crashCourse: `**Algebra: The Mystery Boxes**
- **Variables**: Letters like $x$ and $y$ are just "mystery boxes" that contain unknown numbers.
- **Like Terms**: If you have 2 boxes ($2x$) and add 5 more boxes ($5x$), you have $7x$. You can only combine identical boxes!
- **Unlike Terms**: You can't add a box ($x$) to a circle ($y$). So $2x + 3y$ stays exactly as it is.

**Worked Example: Expanding & Factorising**
*Question*: Expand $3(2x - 4)$ and factorise $5x + 15$.
*Part 1*: Multiply the 3 by EVERYTHING inside. $3(2x) - 3(4) = 6x - 12$.
*Part 2*: Find the HCF of 5 and 15, which is 5. Pull it out: $5(x + 3)$.

> [!warning] **Exam Strategy & Common Pitfall**
> When expanding brackets with a negative sign outside, heavily circle it! Dropping the negative on the second term is the #1 algebraic mistake. e.g., $-2(x - 5) = -2x + 10$!`
    },
    {
        id: 'g1-s1-functions', level: 'Sec 1 (G1)', title: 'Functions and Graphs',
        description: 'Coordinates in 2D and linear graphs.', color: '#818cf8', emoji: '📈',
        location: 'The Coordinate Canyon', storyline: 'Plot your way out of the canyon using coordinates!', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**The Cartesian Plane: The City Grid**
- Imagine a city with horizontal streets ($x$-axis) and vertical avenues ($y$-axis). They meet at the origin $(0,0)$.
- **Coordinates**: $(x, y)$ tells you how many blocks to walk Left/Right ($x$), then Up/Down ($y$).

**Linear Graphs: Finding the Path**
- The formula is $y = mx + c$.
- $m$ is the **gradient** (how steep the road is). Positive means uphill $\nearrow$, negative means downhill $\\\\\\searrow$.
- $c$ is the **y-intercept** (where the road crosses the vertical $y$-axis).`
    },
    {
        id: 'g1-s1-linear-eq', level: 'Sec 1 (G1)', title: 'Linear Equations',
        description: 'Solving linear equations.', color: '#a78bfa', emoji: '⚖️',
        location: 'The Equation Engine', storyline: 'Balance both sides to keep the engine running!', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: balance-scale]

**Solving Equations: The Balancing Act**
- An equation has an $=$ sign. Think of it as a perfectly balanced scale.
- **Golden Rule**: Whatever you do to the left side, you MUST do exactly the same to the right side so it doesn't tip over.

**Worked Example: Solving for $x$**
*Question*: Solve $4x - 5 = x + 10$.
*Step 1*: Group $x$'s on the left. Subtract $x$ from both sides: $3x - 5 = 10$.
*Step 2*: Group numbers on the right. Add 5 to both sides: $3x = 15$.
*Step 3*: Isolate $x$. Divide by 3: $x = 5$.

> [!tip] **Exam Strategy**
> Always substitute your final answer back into the original equation ($4(5) - 5 = 5 + 10 \\rightarrow 15 = 15$) to mathematically prove you are correct before moving on!`
    },
    {
        id: 'g1-s1-geometry', level: 'Sec 1 (G1)', title: 'Angles and Shapes',
        description: 'Angles, triangles, and quadrilaterals.', color: '#f472b6', emoji: '📐',
        location: 'The Geometry Garden', storyline: 'The flowers here are shaped perfectly. Find their properties!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: polygon]

**Basic Angle Secrets**
- **Angles on a line**: Add up to $180^\\circ$ (half turn).
- **Angles at a point**: Add up to $360^\\circ$ (full spin).
- **Vertically opposite**: The angles opposite each other at an intersection "X" are always equal.

**Worked Example: Triangle Logic**
*Question*: An isosceles triangle has a top angle of $40^\\circ$. Find the two base angles.
*Step 1*: All triangles sum to 180. Remaining degrees = $180 - 40 = 140^\\circ$.
*Step 2*: Isosceles base angles are identical. $140 \\div 2 = 70^\\circ$.

> [!warning] **Exam Strategy & Common Pitfall**
> Don't assume lines are parallel just because they *look* parallel. Always explicitly state the geometric reason (e.g., 'Alternate angles, AB // CD') in your working!`
    },
    {
        id: 'g1-s1-symmetry', level: 'Sec 1 (G1)', title: 'Symmetry',
        description: 'Line and rotational symmetry.', color: '#38bdf8', emoji: '🦋',
        location: 'The Mirror Maze', storyline: 'Everything is reflected perfectly. Find the line of symmetry!', themeClass: 'theme-glacier',
        crashCourse: `**Symmetry: Nature's Mirror**
- **Line Symmetry**: If you can fold a shape perfectly in half so both sides match, that fold is the line of symmetry. A square has 4!
- **Rotational Symmetry**: Imagine pinning a shape to a board and spinning it. If it looks identical before making a full $360^\\circ$ spin, it has rotational symmetry.
- The **order** of rotational symmetry is how many times it matches itself in one spin. A propeller with 3 blades has an order of 3.`
    },
    {
        id: 'g1-s1-mensuration', level: 'Sec 1 (G1)', title: 'Mensuration (Basic)',
        description: 'Perimeter, area, volume of prisms.', color: '#fb923c', emoji: '📦',
        location: 'The Measurement Mine', storyline: 'Calculate the volume of the gems to carry them out!', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: cylinder]

**2D Area & 3D Volume**
- **Triangle Area**: $\\frac{1}{2} \\times \\text{Base} \\times \\text{Perpendicular Height}$.
- **Prism Volume**: Find the area of the front face (cross-section) and multiply by its length!

**Worked Example: Cylinder Volume**
*Question*: Find the volume of a cylinder with radius $3\\text{cm}$ and height $10\\text{cm}$. (Leave in $\\pi$).
*Step 1*: Cross section is a circle. Area $= \\pi r^2 = \\pi (3^2) = 9\\pi$.
*Step 2*: Multiply by length (height). Volume $= 9\\pi \\times 10 = 90\\pi\\text{ cm}^3$.

> [!warning] **Exam Strategy & Common Pitfall**
> **Perpendicular Height** is the strict vertical drop, NOT the slanted edge length of a triangle!`
    },
    {
        id: 'g1-s1-data', level: 'Sec 1 (G1)', title: 'Data Handling',
        description: 'Data collection and organization.', color: '#9ca3af', emoji: '📊',
        location: 'The Data Dungeon', storyline: 'Organize the scattered scrolls to unlock the door.', themeClass: 'theme-abyss',
        crashCourse: `[DIAGRAM: bar-chart]

**Statistics: Finding the "Middle"**
- **Mean**: Add every number up, then divide by how many there are. (Vulnerable to massive outliers!)
- **Median**: The exact middle person in a sorted lineup. (Great for ignoring crazy outliers).
- **Mode**: The trendsetter. The number that appears the most frequently.

**Worked Example: The Median Trap**
*Question*: Find the median of $5, 12, 3, 9, 7, 20$.
*Wrong way*: Pick the middle of $3, 9$ $\\rightarrow$ $6$. (Forgot to sort!)
*Step 1*: SORT THEM FIRST: $3, 5, 7, 9, 12, 20$.
*Step 2*: Middle is between $7$ and $9$.
*Answer*: $\\frac{7+9}{2} = 8$.`
    },

    // --- SECONDARY 2 G1 ---
    {
        id: 'g1-s2-proportion', level: 'Sec 2 (G1)', title: 'Direct & Inverse Proportion',
        description: 'Advanced ratio concepts.', color: '#fbbf24', emoji: '🔄', location: 'The Proportion Path', storyline: 'As you walk further, things get smaller. Understand the proportion!', themeClass: 'theme-desert',
        crashCourse: `**Proportions: The Hidden Rules of the Universe**
- **Direct Proportion**: Two things are best friends. If one doubles, the other doubles! 
  - Formula: $y = kx$ (where $k$ is the constant multiplier).
  - Graph: A perfectly straight line starting precisely from $(0,0)$.

**Worked Example: Direct Proportion**
*Question*: $y$ is directly proportional to $x$. When $x=2$, $y=10$. Find $y$ when $x=5$.
*Step 1*: Find the magic constant '$k$'. $y = kx \\Rightarrow 10 = k(2) \\Rightarrow k = 5$.
*Step 2*: Rewrite the formula: $y = 5x$.
*Step 3*: Substitute the new $x$: $y = 5(5) = 25$.

- **Inverse Proportion**: A seesaw relationship. If one goes up, the other goes down at the exact same rate.
  - Formula: $y = \\frac{k}{x}$ or $xy = k$.

> [!warning] **Exam Strategy & Common Pitfall**
> Before calculating, ask yourself: 'If I have MORE workers, does the job take MORE time or LESS time?' Less time means Inverse Proportion! Don't blindly cross-multiply.`
    },
    {
        id: 'g1-s2-rate', level: 'Sec 2 (G1)', title: 'Rate and Speed',
        description: 'Speed, distance, and time.', color: '#f87171', emoji: '🏎️', location: 'The Speed Track', storyline: 'Calculate your speed to win the race!', themeClass: 'theme-sky',
        crashCourse: `**Rates: Comparing Apples and Oranges**
- A **rate** compares two completely different units (e.g., dollars per hour, kilometers per liter).

**The Magic Triangle: Speed, Distance, Time**
- Use the triangle: Distance on top, Speed and Time on the bottom.
- **Speed** = Distance $\\div$ Time
- **Distance** = Speed $\\times$ Time
- **Time** = Distance $\\div$ Speed

**Worked Example: Average Speed**
*Question*: A car drives $100\\text{km}$ in 2 hours, then rests for 1 hour, then drives $50\\text{km}$ in 1 hour. Average speed?
*Step 1*: Find Total Distance: $100 + 50 = 150\\text{km}$.
*Step 2*: Find Total Time: $2 + 1 + 1 = 4\\text{ hours}$.
*Step 3*: Average Speed = $150 \\div 4 = 37.5\\text{ km/h}$.

> [!warning] **Exam Strategy & Common Pitfall**
> **Average Speed** is NEVER just adding the two speeds and dividing by 2! You MUST use $\\frac{\\text{Total Distance}}{\\text{Total Time}}$. Also, don't forget to include rest times!`
    },
    {
        id: 'g1-s2-algebra-adv', level: 'Sec 2 (G1)', title: 'Algebraic Manipulation',
        description: 'Expansion, Factorisation, and Fractions.', color: '#60a5fa', emoji: '🧬', location: 'The Factor Factory', storyline: 'Break down the expressions to their core components!', themeClass: 'theme-clockwork',
        crashCourse: `**Algebra Toolbox: Expanding & Factorising**
- **Expansion (Distributing)**: Unleashing what's inside the brackets. Multiply the outside term with EVERY term inside.
  - $a(b + c) = ab + ac$
  - Two brackets: $(a + b)(c + d) = ac + ad + bc + bd$ (FOIL method).

**Worked Example: Double Brackets**
*Question*: Expand and simplify $(x + 3)(x - 2)$.
*Step 1*: $x \\times x = x^2$.
*Step 2*: $x \\times (-2) = -2x$.
*Step 3*: $3 \\times x = 3x$.
*Step 4*: $3 \\times (-2) = -6$.
*Step 5*: Combine! $x^2 - 2x + 3x - 6 \\Rightarrow x^2 + x - 6$.

- **Factorisation**: Putting the brackets back in by finding what terms share. Hunt for the Highest Common Factor (HCF).
  - $ab + ac = a(b + c)$ because both terms share an '$a$'. Pull it out!`
    },
    {
        id: 'g1-s2-graphs', level: 'Sec 2 (G1)', title: 'Further Graphs',
        description: 'Quadratic intro and linear graphs.', color: '#818cf8', emoji: '📉', location: 'The Curve Cave', storyline: 'Follow the curve to find the exit!', themeClass: 'theme-abyss',
        crashCourse: `[DIAGRAM: parabola]

**Quadratic Graphs: The Beautiful Curves**
- The formula is $y = ax^2 + bx + c$. The $x^2$ creates a sweeping curve called a **parabola**.
- **The Smile and Frown**:
  - If $a$ is positive ($a > 0$), the graph smiles (U-shape) and creates a lowest point (**minimum point**).
  - If $a$ is negative ($a < 0$), the graph frowns (n-shape) and creates a highest point (**maximum point**).
- Parabolas are perfectly symmetrical down their center vertical line.

**Worked Example: Plotting a Parabola**
*Question*: Where does $y = x^2 - 4$ cross the x-axis?
*Method*: The x-axis is exactly where $y=0$.
*Step 1*: $x^2 - 4 = 0$.
*Step 2*: $x^2 = 4$.
*Step 3*: Remember, squaring a negative works too! $x = 2$ AND $x = -2$.

> [!tip] **Exam Strategy**
> When connecting the points of a quadratic curve, use a smooth, freehand pencil motion. NEVER use a ruler to connect the dots on a curve!`
    },
    {
        id: 'g1-s2-simuleq', level: 'Sec 2 (G1)', title: 'Simultaneous Equations',
        description: 'Solving two variables.', color: '#a78bfa', emoji: '🔗', location: 'The Twin Towers', storyline: 'Solve both equations at the same time to cross!', themeClass: 'theme-sky',
        crashCourse: `**Simultaneous Equations: Finding the Crossroads**
- You have two equations and two unknowns ($x$ and $y$). Solving them mathematically means finding the EXACT coordinate point where their two graph lines intersect!

**Worked Example: Substitution Method**
*Question*: Solve $x = y + 2$ and $3x + y = 14$.
*Step 1*: Since $x$ is already isolated in the first, *substitute* it into the second. $3(y + 2) + y = 14$.
*Step 2*: Expand and solve. $3y + 6 + y = 14 \\Rightarrow 4y = 8 \\Rightarrow y = 2$.
*Step 3*: Plug $y=2$ back into the first equation to find $x$. $x = 2 + 2 = 4$. Solution: $(4, 2)$.

> [!warning] **Exam Strategy & Common Pitfall**
> When substituting an expression with multiple terms into another equation, ALWAYS wrap it in brackets! e.g., $3(y + 2)$ NOT $3y + 2$. Failure to expand properly is a fatal error.`
    },
    {
        id: 'g1-s2-pythagoras', level: 'Sec 2 (G1)', title: 'Pythagoras’ Theorem',
        description: 'Right-angled triangles.', color: '#34d399', emoji: '📐', location: 'The Right Angle Realm', storyline: 'Find the hypotenuse to bridge the gap!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: right-triangle]

**Pythagoras' Theorem: The Right-Angle Magic**
- This incredible formula ONLY works for **right-angled triangles**.
- **Hypotenuse ($c$)**: The longest side. It is ALWAYS directly opposite the $90^\\circ$ corner box.

**Worked Example: Finding a Side**
*Question*: A right-angled triangle has sides $a=6$ and $b=8$. Find the hypotenuse $c$.
*Step 1*: Write the magic law: $a^2 + b^2 = c^2$.
*Step 2*: Substitute: $6^2 + 8^2 = c^2$.
*Step 3*: Solve: $36 + 64 = 100$. So $c^2 = 100$.
*Step 4*: Square root the result! $c = \\sqrt{100} = 10$.

> [!warning] **Common Pitfall**
> If you are finding a *shorter* side (not the hypotenuse), you must SUBTRACT the squares! $a^2 = c^2 - b^2$. Do not blindly add them!`
    },
    {
        id: 'g1-s2-mensuration2', level: 'Sec 2 (G1)', title: 'Mensuration (Advanced)',
        description: 'Pyramids, cones, spheres.', color: '#fb923c', emoji: '⛰️', location: 'The Volume Volcanos', storyline: 'Calculate the liquid volume to escape the heat.', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: cylinder]

**Advanced Volume: The Pointy Shapes**
- **Pyramids & Cones** are exactly exactly ONE-THIRD the volume of their straight equivalents (prisms/cylinders)!
  - Volume = $\\frac{1}{3} \\times \\text{Base Area} \\times \\text{Vertical Height}$.

**Worked Example: Cone Volume**
*Question*: A cone has a base radius of $3\\text{cm}$ and a vertical height of $10\\text{cm}$. Find its volume.
*Step 1*: Find Base Area (a circle). $\\pi r^2 = \\pi(3^2) = 9\\pi$.
*Step 2*: Apply cone formula: $\\frac{1}{3} \\times 9\\pi \\times 10 = 30\\pi$.

> [!tip] **Exam Strategy & Pitfall**
> **Curved Surface Area** of a cone uses $\\pi r l$ where '$l$' is the SLANTED side height. The formula explicitly requires the slant. If the question gives you vertical height, you MUST use Pythagoras to find the slant height first!`
    },
    {
        id: 'g1-s2-stats', level: 'Sec 2 (G1)', title: 'Statistics',
        description: 'Mean, Mode, Median, and charts.', color: '#9ca3af', emoji: '📊', location: 'The Stats Station', storyline: 'Find the average path to proceed!', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: bar-chart]

**Statistics: Analyzing Data**
- **Mean**: Add every number up, then divide by how many there are. (Vulnerable to massive outliers!)
- **Median**: The exact middle person in a lineup sorted from smallest to largest.
- **Mode**: The trendsetter. The number that appears the most frequently.

**Worked Example: Finding the Mean**
*Question*: Find the mean of 4, 7, 2, 9, 3.
*Step 1*: Sum the values: $4 + 7 + 2 + 9 + 3 = 25$.
*Step 2*: Count the values: There are 5 numbers.
*Step 3*: Divide sum by count: $25 \\div 5 = 5$.

> [!warning] **Exam Strategy & Pitfall**
> When asked to find the **Median**, you absolutely MUST sort the data ascending first! Picking the physical middle number of an unsorted list is the most common statistics error.`
    },

    // --- SECONDARY 3/4 G1 ---
    {
        id: 'g1-s34-numbers', level: 'Sec 3/4 (G1)', title: 'Indices & Standard Form',
        description: 'Power notation and scientific numbers.', color: '#34d399', emoji: '🔬', location: 'The Micro/Macro Lab', storyline: 'Zoom into atoms and out to galaxies!', themeClass: 'theme-glacier',
        crashCourse: `**Indices: Mastering Power Levels**
- **The Laws of Power**:
  - $a^m \\times a^n = a^{m+n}$ (Multiply base $\\rightarrow$ Add powers)
  - $a^m \\div a^n = a^{m-n}$ (Divide base $\\rightarrow$ Subtract powers)
  - $(a^m)^n = a^{mn}$ (Power of a power $\\rightarrow$ Multiply them)
  - $a^0 = 1$ (Anything powered by 0 forcibly becomes 1!)
  - $a^{-n} = \\frac{1}{a^n}$ (A negative power means you explicitly flip it to a fraction).

**Standard Form: Taming Giants**
- A neat way to write massive or microscopic numbers! Format: $A \\times 10^n$, where A is strictly between 1 and 10 ($1 \\leq A < 10$).

**Worked Example: Standard Form**
*Question*: Convert $45,000$ to standard form.
*Step 1*: Place the decimal exactly after the first non-zero digit: $4.5$.
*Step 2*: Count how many jumps the decimal made to get there. It jumped 4 times.
*Step 3*: Result is $4.5 \\times 10^4$.

> [!warning] **Exam Strategy & Pitfall**
> When dealing with tiny decimals like $0.0032$, the decimal jumps to the *right*, meaning the power of 10 must be strictly NEGATIVE! Result: $3.2 \\times 10^{-3}$.`
    },
    {
        id: 'g1-s34-scale', level: 'Sec 3/4 (G1)', title: 'Map Scales',
        description: 'Ratio applied to maps.', color: '#fbbf24', emoji: '🗺️', location: 'The Cartographer’s Cabin', storyline: 'Scale down the map to find the treasure!', themeClass: 'theme-desert',
        crashCourse: `**Map Scales: Honey, I Shrunk the World!**
- A linear ratio of $1:n$ means 1 unit on paper exactly equals $n$ units in real life.
- Example: $1:50,000$ means $1\\text{ cm}$ on the map is $50,000\\text{ cm}$ (which translates to $0.5\\text{ km}$) in the real world.

**The Danger Zone: Area Scales!**
- **CRITICAL TRAP**: Area scales don't naturally follow linear scales! They use the strict SQUARE of the length scale.

**Worked Example: Area Scale**
*Question*: A map has a length scale of $1\\text{ cm} : 2\\text{ km}$. A park on the map is $3\\text{ cm}^2$. Find the real area.
*Step 1*: Square the linear scale! $1\\text{ cm}^2 : (2\\text{ km})^2 \\Rightarrow 1\\text{ cm}^2 : 4\\text{ km}^2$. 
*Step 2*: Multiply map area by the new Area Scale. $3 \\times 4 = 12\\text{ km}^2$.

> [!warning] **Exam Strategy & Pitfall**
> DO NOT just multiply the area by the length scale! If you multiply 3 by 2, your answer of 6 is totally completely wrong. Always square the scale ratio first when dealing with 2D space!`
    },
    {
        id: 'g1-s34-algebra', level: 'Sec 3/4 (G1)', title: 'Formula Subject & Fractions',
        description: 'Changing subjects and algebraic fractions.', color: '#60a5fa', emoji: '🔄', location: 'The Shifting Sands', storyline: 'Shift the terms to become the subject of the formula.', themeClass: 'theme-desert',
        crashCourse: `**Changing the Subject: Rewriting the Rules**
- To make a variable the "subject", you want it sitting completely alone on one side of the equals sign (e.g., $r = \\ldots$).
- Use completely opposite operations to strip away everything else: send $+$ to $-$, $\\times$ to $\\div$, and squares to square roots.

**Worked Example: Subject of Formula**
*Question*: Make $x$ the subject of $y = 3x - 5$.
*Step 1*: Send the $-5$ over by adding it. $y + 5 = 3x$.
*Step 2*: Send the $3$ over by dividing. $\\frac{y+5}{3} = x$.
*Step 3*: Flip it neatly! $x = \\frac{y+5}{3}$.

**Algebraic Fractions**
- **Adding/Subtracting**: Just like normal fractions, YOU MUST FIND A COMMON DENOMINATOR FIRST!
- **Solving Equations**: If dealing with $\\frac{A}{B} = \\frac{C}{D}$, simply Cross-Multiply to destroy the fractions! $A \\times D = B \\times C$.

> [!tip] **Exam Strategy**
> When dealing with squares, making $r$ the subject of $A = \\pi r^2$ requires dividing by $\\pi$ first, BEFORE you square root! $r = \\sqrt{\\frac{A}{\\pi}}$.`
    },
    {
        id: 'g1-s34-quadratic', level: 'Sec 3/4 (G1)', title: 'Quadratic Equations & Graphs',
        description: 'Solving and graphing quadratics.', color: '#818cf8', emoji: '📈', location: 'The Parabola Peak', storyline: 'Find the vertex of the mountain to cross it!', themeClass: 'theme-sky',
        crashCourse: `[DIAGRAM: parabola]

**Solving Quadratic Equations: $x^2$ Mysteries**
- A quadratic reliably looks exactly like $ax^2 + bx + c = 0$. Finding $x$ means finding where the parabola violently hits the ground (the x-intercepts or "roots").

**Worked Example: Factorisation Method**
*Question*: Solve $x^2 - 5x + 6 = 0$.
*Step 1*: Find numbers that multiply roughly to $+6$ and exactly add to $-5$. That's $-2$ and $-3$.
*Step 2*: Factorise into brackets: $(x - 2)(x - 3) = 0$.
*Step 3*: Zero-product property means either $x=2$ or $x=3$.

**The Powerful Formula**
- The ultimate weapon when factoring completely fails:
  $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

> [!warning] **Exam Strategy & Pitfall**
> If the exam aggressively forces you to 'leave your answer to 2 decimal places', DO NOT waste time trying to factorise it! That language guarantees it won't factorise easily, and you MUST use the formula.`
    },
    {
        id: 'g1-s34-trig', level: 'Sec 3/4 (G1)', title: 'Trigonometry',
        description: 'Sine, Cosine, Tangent.', color: '#f472b6', emoji: '🔼', location: 'The Trig Temple', storyline: 'Use sine, cosine, and tangent to unlock the temple doors!', themeClass: 'theme-forest',
        crashCourse: `[DIAGRAM: right-triangle]

**Trigonometry: SOH CAH TOA**
- Used exclusively to connect angles with absolute side lengths in right-angled triangles!
- **O (Opposite)**: The side directly facing the angle.
- **A (Adjacent)**: The side right next to the angle.
- **H (Hypotenuse)**: The longest side facing $90^\\circ$.

**The Magic Ratios**
- $\\sin \\theta = \\frac{\\text{Opp}}{\\text{Hyp}}$ (SOH)
- $\\cos \\theta = \\frac{\\text{Adj}}{\\text{Hyp}}$ (CAH)
- $\\tan \\theta = \\frac{\\text{Opp}}{\\text{Adj}}$ (TOA)

**Worked Example: Finding an Angle**
*Question*: A right triangle has Adj=3 and Hyp=5. Find angle $\\theta$.
*Step 1*: We have A and H. That uniquely spells CAH (Cosine).
*Step 2*: $\\cos \\theta = \\frac{3}{5} = 0.6$.
*Step 3*: Use inverse cos! $\\theta = \\cos^{-1}(0.6) \\approx 53.1^\\circ$.

> [!warning] **Exam Strategy & Pitfall**
> Before starting ANY trigonometry calculation, explicitly verify your calculator is in DEGREE mode (usually represented by a tiny 'D' or 'DEG' on the screen). If it says 'RAD' or 'R', all your correct answers will be totally legally wrong!`
    },
    {
        id: 'g1-s34-mensuration', level: 'Sec 3/4 (G1)', title: 'Arc Length & Sector Area',
        description: 'Circle properties.', color: '#fb923c', emoji: '🍕', location: 'The Pizza Parlor', storyline: 'Calculate the size of the slice to eat!', themeClass: 'theme-volcano',
        crashCourse: `[DIAGRAM: fraction-pie]

**Arcs and Sectors: The Pizza Slices**
- **Sector**: A physical slice of a pizza. The tip angle is purely $\\theta$.
- **Arc**: The literal crust exactly along the curved edge of the slice.

**Fractional Formulas!**
- You already know the full $360^\\circ$ circle formulas natively. A sector is mathematically just a simple fraction of that full circle: $\\frac{\\theta}{360^\\circ}$!
- **Arc Length**: $\\frac{\\theta}{360^\\circ} \\times 2\\pi r$ (Fraction $\\times$ Full Circumference).
- **Area of Sector**: $\\frac{\\theta}{360^\\circ} \\times \\pi r^2$ (Fraction $\\times$ Full Area).

**Worked Example: Perimeter trap**
*Question*: A sector has radius 5, arc length 10. Find total perimeter.
*Step 1*: Visualise the slice. It consists of the crust PLUS the two straight-cut sides (the radii).
*Step 2*: Perimeter $= 10 + 5 + 5 = 20$.

> [!warning] **Exam Strategy & Pitfall**
> A question heavily asking for the **Perimeter of a Sector** is the most common geometry trap. Students always calculate exactly ONLY the arc length and aggressively forget to ADD the two straight radii down the sides!`
    },
    {
        id: 'g1-s34-data', level: 'Sec 3/4 (G1)', title: 'Data Analysis',
        description: 'Quartiles and cumulative frequency.', color: '#9ca3af', emoji: '📉', location: 'The Frequency Falls', storyline: 'Ride the cumulative frequency curve to the bottom.', themeClass: 'theme-glacier',
        crashCourse: `**Quartiles: Slicing Data into Fourths**
- **Median** (Q2): The exact halfway mark ($50\\%$).
- **Lower Quartile** (Q1): The one-quarter mark ($25\\%$).
- **Upper Quartile** (Q3): The three-quarter mark ($75\\%$).
- **Interquartile Range (IQR)**: strictly Q3 - Q1. This is the golden metric! It measures the solid spread of the middle 50% of the entire class, completely ignoring strange outliers that violently ruin the standard Range.

**Cumulative Frequency Curves**
- A rising running total graph that naturally creates a smooth flowing 'S' curve.

**Worked Example: Reading the Curve**
*Question*: Total students = 80. Find the Lower Quartile purely from the curve.
*Step 1*: Find the $25\\%$ mark of 80 students. $80 \\times 0.25 = 20\\text{th}$ student.
*Step 2*: Go strictly to 20 on the vertical y-axis.
*Step 3*: Draw a strict horizontal line crossing to the S-curve, then drop violently straight down to read the x-axis score.

> [!warning] **Exam Strategy & Pitfall**
> Never EVER calculate $0.25 \\times$ the maximum X-axis score! Quartiles are ALWAYS percentages of the total frequency (the Y-axis).`
    },
    {
        id: 'g1-s34-prob', level: 'Sec 3/4 (G1)', title: 'Probability',
        description: 'Probability of simple events.', color: '#a78bfa', emoji: '🎲', location: 'The Casino of Chance', storyline: 'What are the odds? Calculate them to win big!', themeClass: 'theme-clockwork',
        crashCourse: `[DIAGRAM: venn-diagram]

**Probability: The Casino Math**
- Probability strictly measures the mathematical chance of an exact occurrence. $0$ is literally impossible, $1$ is an absolute unquestionable certainty.
- $P(A) = \\frac{\\text{Target winning outcomes}}{\\text{Total possible outcomes}}$.
- The probability of something completely NOT happening is simply $1 - P(A)$.

**Worked Example: Simple Probability**
*Question*: A bag holds firmly 3 Red marbles, 5 Blue marbles, and 2 Green marbles. Probability of grabbing a Blue marble?
*Step 1*: Find Total outcomes: $3+5+2 = 10$.
*Step 2*: Target winning outcomes (Blue): $5$.
*Step 3*: $P(\\text{Blue}) = \\frac{5}{10} = \\frac{1}{2}$.

**Expected Frequency: Predicting the Future**
- If you flip a fair coin precisely 100 times, how many heads do you legally expect? $100 \\times 0.5 = 50$.
- Formula: Repeat an experiment $N$ times, the expected number of wins is strictly $N \\times P(A)$.

> [!tip] **Exam Strategy**
> In 'And/Or' tree diagrams, remember: Travel ALONG the branch paths, you exactly MULTIPLY 'And'. Travel DOWN across different end branches, you strictly ADD 'Or'.`
    }
];

const g1Questions = {
    // --- Sec 1 G1 ---
    'g1-s1-numbers': {
        learning: [
            generateQuestion("Level 1 (Easy): Which of these numbers is an integer?", ["-5", "2.5", "1/2", "0.333"], 0, "**Formative Insight**: An integer is a whole number with no fractional or decimal parts. It can be positive, negative, or zero! Fractions like 1/2 and decimals like 2.5 are not integers.", 5, 'easy'),
            generateQuestion("Level 1 (Easy): Calculate $5 - (-3)$.", ["8", "2", "-2", "-8"], 0, "**Formative Insight**: Subtracting a negative is mathematically identical to adding a positive. The two negatives cancel to form a plus! $5 + 3 = 8$.", 5, 'easy'),
            generateQuestion("Level 2 (Medium): A submarine is at $-50\\text{m}$. It rises $20\\text{m}$. What is its new depth?", ["-30m", "-70m", "30m", "70m"], 0, "**Formative Insight**: Visualise the number line. You start at -50. Rising means you go in the positive direction (to the right). $-50 + 20 = -30$.", 10, 'medium'),
            generateQuestion("Level 2 (Medium): Evaluate: $(-4) \\times 3 + (-5) \\times (-2)$", ["-2", "-22", "2", "22"], 0, "**Formative Insight**: Apply BODMAS. First multiply: $(-4 \\times 3) = -12$. Then $(-5 \\times -2) = +10$. Finally, add them: $-12 + 10 = -2$.", 10, 'medium'),
            generateQuestion("Level 3 (Hard): Find the Highest Common Factor (HCF) of 24 and 36.", ["12", "6", "72", "4"], 0, "**Formative Insight**: We want the *largest* number that elegantly divides into both. The factors of 24 are 1,2,3,4,6,8,12,24. The factors of 36 are 1,2,3,4,6,9,12,18,36. The highest shared value is 12.", 15, 'hard'),
            generateQuestion("Level 4 (Expert): Two buses leave at 8:00 AM. Bus A returns every 15 mins, Bus B every 20 mins. When do they next meet?", ["9:00 AM", "8:35 AM", "8:15 AM", "9:20 AM"], 0, "**Formative Insight**: This requires the Lowest Common Multiple (LCM), because the buses are stepping *forward* in time. Multiples of 15: 15, 30, 45, 60. Multiples of 20: 20, 40, 60. They align at 60 mins (1 hour) later. 8:00 AM + 1 hr = 9:00 AM.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Calculate $-8 + 5 - (-4)$", ["1", "-7", "-17", "7"], 0, "**Lesson**: Handle subtraction of negatives first. $-8 + 5 + 4$. Then read left to right: $-3 + 4 = 1$.", 5, 'easy'),
            generateQuestion("Round $0.0456$ to 2 significant figures.", ["0.046", "0.05", "0.045", "0.04"], 0, "**Lesson**: Significant figures start from the first non-zero digit. The first two are '45'. Look at the next digit '6', which rounds the 5 up to a 6. Result: 0.046.", 10, 'medium'),
            generateQuestion("Find the Lowest Common Multiple (LCM) of 6, 8, and 12.", ["24", "48", "2", "72"], 0, "**Lesson**: Find the smallest number divisible by all three. Multiples of 12 (the biggest): 12 (no), 24 (yes: 6x4=24, 8x3=24). So 24 is the LCM!", 15, 'hard'),
            generateQuestion("Evaluate $x^2 - xy$ if $x = -2$ and $y = -3$.", ["-2", "10", "4", "2"], 0, "**Lesson**: Substitution with negatives requires strict brackets! $(-2)^2 - (-2)(-3)$. First, $(-2)^2 = +4$. Next, $(-2)(-3) = +6$. Finally, $4 - 6 = -2$.", 20, 'expert'),
            generateQuestion("Is $1$ a prime number?", ["No", "Yes"], 0, "**Lesson**: By definition, a prime number must have EXACTLY two distinct positive divisors: 1 and itself. The number 1 only has one divisor (1), so it is not prime.", 10, 'medium'),
            generateQuestion("[Interleaved] Find the HCF of $2^3 \\times 3^2$ and $2^2 \\times 3^3$.", ["$2^2 \\times 3^2$", "$2^3 \\times 3^3$", "36", "72"], 0, "**Lesson**: For HCF in prime factor form, always take the base with the *lowest* power available in both. Lowest power of 2 is $2^2$. Lowest power of 3 is $3^2$. So HCF is $2^2 \\times 3^2 = 36$.", 20, 'expert')
        ]
    },
    'g1-s1-ratio': {
        learning: [
            generateQuestion("Simplify the ratio $10:15:25$.", ["2:3:5", "5:3:1", "1:1.5:2.5", "20:30:50"], 0, "**Formative Insight**: Find a number that cleanly divides all three components. Their Highest Common Factor is 5. Dividing each by 5 yields 2:3:5.", 5, 'easy'),
            generateQuestion("The ratio of Boys to Girls is $3:4$. If there are 15 Boys, how many Girls are there?", ["20", "15", "12", "7"], 0, "**Formative Insight**: Set up a proportion! 3 parts = 15 students. Therefore, 1 part = 5 students. Girls have 4 parts, so $4 \\times 5 = 20$ girls.", 10, 'medium'),
            generateQuestion("Share $$60$ in the ratio $1:2:3$. What is the largest share?", ["$30", "$20", "$40", "$10"], 0, "**Formative Insight**: First, find the total number of parts: $1+2+3 = 6$ parts. Total value is 60. Thus, 1 part = $60 \\div 6 = $10$. The largest share is 3 parts, which is $3 \\times 10 = $30$.", 15, 'hard'),
            generateQuestion("Convert $45\\text{ minutes}$ into a fraction of $2\\text{ hours}$.", ["3/8", "45/2", "3/4", "9/24"], 0, "**Formative Insight**: Standardize units first! 2 hours = 120 minutes. The fraction is $45 / 120$. Divide top and bottom by their HCF (15) to get 3/8.", 15, 'hard'),
            generateQuestion("A map has a scale of $1:50,000$. A road is $4\\text{cm}$ on the map. Total real length in km?", ["2km", "20km", "0.2km", "200km"], 0, "**Formative Insight**: Multiply by scale factor: $4 \\times 50,000 = 200,000\\text{cm}$. To convert cm to km, divide by 100,000 (100 cm in a m, 1000m in a km). $200,000 \\div 100,000 = 2\\text{km}$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Simplify $400\\text{g} : 1.2\\text{kg}$.", ["1:3", "400:1.2", "1:300", "4:12"], 0, "**Lesson**: Always unify units to the smaller metric! 1.2kg = 1200g. The ratio is $400:1200$. Divide both by 400 to obtain $1:3$.", 10, 'medium'),
            generateQuestion("If 4 workers build a wall in 10 days, how many days for 8 workers? (Assuming equal rates)", ["5 days", "20 days", "40 days", "8 days"], 0, "**Lesson**: This is Inverse Proportion! More workers = LESS time. If you double the workers ($\\times 2$), you must halve the time ($\\div 2$). $10 / 2 = 5$ days.", 15, 'hard'),
            generateQuestion("A recipe for 4 cakes needs 200g of flour. How much flour for 7 cakes?", ["350g", "200g", "1400g", "250g"], 0, "**Lesson**: This is Direct Proportion! First find the unitary rate: 1 cake needs $200 / 4 = 50$g. Thus, 7 cakes need $7 \\times 50 = 350$g.", 10, 'medium'),
            generateQuestion("Express the ratio $\\frac{1}{2} : \\frac{1}{3}$ in simplest integer form.", ["3:2", "2:3", "1.5:1", "1:1"], 0, "**Lesson**: Ratios hate fractions! To clear the denominators, multiply both sides by their LCM (6). $\\frac{1}{2} \\times 6 = 3$, and $\\frac{1}{3} \\times 6 = 2$. Result: $3:2$.", 20, 'expert'),
            generateQuestion("[Interleaved] Which is larger, $20\\%$ of 80 or the ratio 15 to 60?", ["20% of 80", "15 to 60", "They are equal"], 0, "**Lesson**: $20\\%$ of 80 is $0.2 \\times 80 = 16$. The ratio 15 to 60 as a fraction is $15/60 = 1/4 = 0.25 (25\\%)$. Comparing as values is context-dependent, but 16 is numerically larger than 0.25.", 20, 'expert')
        ]
    },
    'g1-s1-percentage': {
        learning: [
            generateQuestion("What is $25\\%$ as a fraction in simplest form?", ["1/4", "1/5", "2/5", "1/25"], 0, "**Formative Insight**: Percent means out of 100. So $25\\%$ is $25/100$. Divide top and bottom by 25 to simplify to $1/4$.", 5, 'easy'),
            generateQuestion("Find $20\\%$ of $80$.", ["16", "20", "40", "160"], 0, "**Formative Insight**: Convert $20\\%$ to $0.2$, then multiply. $0.2 \\times 80 = 16$. Alternatively, find $10\\%$ (8) and double it!", 10, 'medium'),
            generateQuestion("A $$40$ shirt is discounted by $15\\%$. What is the new price?", ["$34", "$6", "$25", "$46"], 0, "**Formative Insight**: Discount amount is $15\\%$ of 40 = $0.15 \\times 40 = $6$. Subtract from original: $40 - 6 = $34$. Alternatively: Pay $85\\%$, so $0.85 \\times 40 = $34$.", 15, 'hard'),
            generateQuestion("I scored 45 out of 60 on a test. What is my percentage?", ["75%", "45%", "60%", "80%"], 0, "**Formative Insight**: Write the score as a fraction: $45 / 60$. Simplify to $3/4$. Multiply by $100\\%$ to convert fraction to percentage: $3/4 \\times 100 = 75\\%$.", 15, 'hard'),
            generateQuestion("The price of a car drops from $$10,000$ to $$8,500$. What is the percentage decrease?", ["15%", "85%", "17.6%", "10%"], 0, "**Formative Insight**: The formula for percentage change is $(\\text{Actual Change} / \\text{Original Amount}) \\times 100\\%$. Change is 1500. $1500 / 10000 = 0.15$. Multiply by 100 to get $15\\%$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Convert 0.08 into a percentage.", ["8%", "80%", "0.8%", "0.08%"], 0, "**Lesson**: To convert ANY decimal to a percentage, multiply by 100 (move the decimal point perfectly two spots to the right). Result: 8%.", 5, 'easy'),
            generateQuestion("If 30% of a number is 12, what is the full number?", ["40", "3.6", "36", "400"], 0, "**Lesson**: Reverse percentage! Let the number be $x$. $0.3x = 12$. Divide both sides by 0.3 to isolate $x$. $x = 12 / 0.3 = 40$.", 20, 'expert'),
            generateQuestion("A house price increased by 10% to $$550,000$. What was the original price?", ["$500,000", "$495,000", "$605,000", "$520,000"], 0, "**Lesson**: Careful with reverse percentage! The new price is 110% of the original. $1.10 \\times \\text{Original} = 550,000$. Original = $550,000 / 1.10 = 500,000$. Do NOT just subtract 10% of 550,000!", 20, 'expert'),
            generateQuestion("[Interleaved] Find the ratio of 20% of $100$ to 50% of $20$.", ["2:1", "1:1", "100:20", "4:1"], 0, "**Lesson**: Calculate the raw values first. 20% of 100 is 20. 50% of 20 is 10. The ratio is $20:10$, which simplifies cleanly to $2:1$.", 15, 'hard')
        ]
    },
    'g1-s1-algebra': {
        learning: [
            generateQuestion("Simplify the expression $3x + 2y - x + y$.", ["2x + 3y", "4x + 3y", "2x + y", "5xy"], 0, "**Formative Insight**: Group the 'Like Terms' together. Look at the x terms: $3x - x = 2x$. Look at the y terms: $2y + y = 3y$. Final expression: $2x + 3y$.", 10, 'medium'),
            generateQuestion("Expand the brackets $-2(x - 4)$.", ["-2x + 8", "-2x - 4", "-2x - 8", "2x + 8"], 0, "**Formative Insight**: Multiply the outside term by EVERY term inside. $(-2) \\times x = -2x$. Danger zone: $(-2) \\times (-4) = +8$. Result is $-2x + 8$.", 10, 'medium'),
            generateQuestion("Expand and simplify: $3(x+2) + 2(x-1)$.", ["5x + 4", "5x + 6", "6x + 4", "5x + 1"], 0, "**Formative Insight**: Expand first: $3x + 6 + 2x - 2$. Then gather terms: $(3x+2x) + (6-2) = 5x + 4$.", 15, 'hard'),
            generateQuestion("Factorise completely: $6x^2 + 9x$.", ["3x(2x + 3)", "3(2x^2 + 3x)", "x(6x + 9)", "3x(2x + 1)"], 0, "**Formative Insight**: Find the Highest Common Factor of both numbers and letters. Both share a 3, and both share an x. Pull out $3x$. Check your work by expanding!", 20, 'expert')
        ],
        testing: [
            generateQuestion("Evaluate $a^2 - 3b$ when $a=4, b=-2$.", ["22", "10", "14", "2"], 0, "**Lesson**: Substitute exactly: $(4)^2 - 3(-2)$. First, $16$. Next, $-3 \\times -2$ is $+6$. Finally, $16 + 6 = 22$.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{12x^3y}{4xy}$.", ["3x^2", "3x^2y", "8x^2", "3x^4y^2"], 0, "**Lesson**: Handle pieces separately. Numbers: $12/4 = 3$. The x: $x^3/x = x^2$. The y: $y/y = 1$ (it cancels out). Overall: $3x^2$.", 15, 'hard'),
            generateQuestion("Simplify $5x - (x - 3)$.", ["4x + 3", "4x - 3", "6x - 3", "4x"], 0, "**Lesson**: The minus sign outside a bracket acts like a $-1$ multiplier! It flips everything inside. $5x - x + 3 = 4x + 3$.", 15, 'hard'),
            generateQuestion("[Interleaved] A rectangle has width $x$ and length $(x+5)$. What is its Perimeter?", ["4x + 10", "x^2 + 5x", "2x + 5", "4x + 5"], 0, "**Lesson**: Perimeter means adding ALL FOUR sides. $x + x + (x+5) + (x+5) = 4x + 10$. The option $x^2+5x$ is the Area, don't fall for that trap!", 20, 'expert')
        ]
    },
    'g1-s1-linear-eq': {
        learning: [
            generateQuestion("Solve for x: $x + 7 = 12$.", ["5", "19", "-5", "7"], 0, "**Formative Insight**: Use opposite operations to isolate x. Subtract 7 from both sides. $12 - 7 = 5$.", 5, 'easy'),
            generateQuestion("Solve: $3x - 2 = 13$.", ["5", "15", "11/3", "4"], 0, "**Formative Insight**: Two-step equation. First, reverse the subtraction by adding 2 to both sides: $3x = 15$. Then, reverse multiplication by dividing by 3: $x = 5$.", 10, 'medium'),
            generateQuestion("Solve for x: $5x + 3 = 2x + 15$.", ["4", "12", "6", "5.5"], 0, "**Formative Insight**: Group the variables! Subtract $2x$ from both sides to get $3x + 3 = 15$. Then subtract 3: $3x = 12$. Divide by 3: $x = 4$.", 15, 'hard'),
            generateQuestion("Solve for x: $2(x - 3) = 14$.", ["10", "4", "7", "11"], 0, "**Formative Insight**: You can expand first ($2x - 6 = 14 \\Rightarrow 2x = 20 \\Rightarrow x = 10$). Or, a faster shortcut: divide both sides by 2 immediately! $x - 3 = 7 \\Rightarrow x = 10$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Solve: $x / 4 = 6$.", ["24", "1.5", "10", "2"], 0, "**Lesson**: The $x$ is being divided by 4. The opposite is multiplying by 4. So, $x = 6 \\times 4 = 24$.", 5, 'easy'),
            generateQuestion("Solve: $10 - 2x = 4$.", ["3", "-3", "7", "-7"], 0, "**Lesson**: Subtract 10 from both sides: $-2x = -6$. Then divide by $-2$: $x = 3$. Watch your negative signs!", 10, 'medium'),
            generateQuestion("Solve: $\\frac{x+1}{3} = 4$.", ["11", "13", "12", "3/4"], 0, "**Lesson**: Clear the fraction first by multiplying both sides by 3. $x + 1 = 12$. Then subtract 1. $x = 11$.", 15, 'hard'),
            generateQuestion("Solve: $3(2x - 1) = 4x + 7$.", ["5", "2", "4", "10"], 0, "**Lesson**: Expand first: $6x - 3 = 4x + 7$. Move x terms to left: $2x - 3 = 7$. Move numbers to right: $2x = 10$. Solve: $x = 5$.", 20, 'expert')
        ]
    },
    'g1-s1-geometry': {
        learning: [
            generateQuestion("Complementary angles firmly add up to ___ degrees.", ["90", "180", "360", "100"], 0, "**Formative Insight**: Complementary means 'corner', forming a perfect $90^\\circ$ right angle.", 5, 'easy'),
            generateQuestion("Find the missing interior angle of a triangle if two angles are $40^\\circ$ and $60^\\circ$.", ["80", "100", "260", "90"], 0, "**Formative Insight**: The defining rule of all triangles is that interior angles exactly sum to 180. $180 - (40+60) = 80$.", 10, 'medium'),
            generateQuestion("In an isosceles triangle, the primary distinct feature is:", ["Two equal sides and two equal base angles.", "All sides are equal.", "One angle is 90 degrees.", "No sides are equal."], 0, "**Formative Insight**: 'Isosceles' means two legs are exactly identical, which forces the two base angles opposite them to be completely identical as well.", 10, 'medium'),
            generateQuestion("Find the sum of interior angles in a Hexagon (6 sides).", ["720", "360", "540", "1080"], 0, "**Formative Insight**: Use the polygon master formula: $(n-2) \\times 180$. A hexagon has $n=6$. $(6-2) \\times 180 = 4 \\times 180 = 720^\\circ$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Supplementary angles firmly add up to ___ degrees.", ["180", "90", "360", "100"], 0, "**Lesson**: Supplementary angles sit on a straight continuous line, making exactly $180^\\circ$.", 5, 'easy'),
            generateQuestion("If two straight intersecting lines create a $40^\\circ$ angle, what is the vertically opposite angle?", ["40", "140", "50", "320"], 0, "**Lesson**: Vertically opposite angles (forming an 'X' shape) are perfect mirror reflections, thus exactly equal. It is 40.", 10, 'medium'),
            generateQuestion("In a parallelogram, if one angle is $50^\\circ$, what is the consecutive interior angle?", ["130", "50", "40", "90"], 0, "**Lesson**: Consecutive interior angles (C-angles) between parallel lines always sum to 180. $180-50 = 130$.", 15, 'hard'),
            generateQuestion("Calculate the exact size of ONE interior angle in a regular Octagon (8 sides).", ["135", "1080", "120", "144"], 0, "**Lesson**: Regular means all angles are identical. Total sum is $(8-2)\\times 180 = 1080$. Divide evenly by 8 corners: $1080 / 8 = 135^\\circ$.", 20, 'expert')
        ]
    },
    'g1-s1-functions': {
        learning: [
            generateQuestion("Which coordinate sits perfectly on the y-axis?", ["(0, 5)", "(5, 0)", "(1, 1)", "(2, 5)"], 0, "**Formative Insight**: The y-axis is the vertical line exactly where $x = 0$. So any coordinate like $(0, y)$ sits on it.", 5, 'easy'),
            generateQuestion("Find the value of $y$ on the line $y = 3x - 1$ when $x = 2$.", ["5", "7", "6", "2"], 0, "**Formative Insight**: Substitute the $x$ into the equation formula! $3(2) - 1 = 6 - 1 = 5$.", 10, 'medium'),
            generateQuestion("Does the point $(3, 8)$ lie firmly on the line $y = 2x + 1$?", ["No", "Yes"], 0, "**Formative Insight**: Test the point! If $x=3$, $y = 2(3)+1 = 7$. Since $7 \\neq 8$, the point completely misses the line.", 15, 'hard'),
            generateQuestion("A line passes through $(0, 2)$ and $(1, 4)$. What is its gradient (steepness)?", ["2", "4", "0.5", "1"], 0, "**Formative Insight**: Gradient is $\\text{Rise} \\div \\text{Run}$. Rise from 2 to 4 is $+2$. Run from 0 to 1 is $+1$. $2 \\div 1 = 2$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Which axis measures height horizontally?", ["x-axis", "y-axis"], 0, "**Lesson**: Trick question! The horizontal axis is the x-axis, the vertical axis (height) is the y-axis. The closest answer is x-axis for horizontal.", 5, 'easy'),
            generateQuestion("Find $x$ when $y=11$ for the robust function $y = 5x + 1$.", ["2", "10", "3", "5"], 0, "**Lesson**: Substitute backward! $11 = 5x + 1$. Subtract 1 to get $10 = 5x$. Divide by 5 to find $x = 2$.", 10, 'medium'),
            generateQuestion("If a line has equation $y = 4x$, what is its exact y-intercept?", ["0", "4", "1", "-4"], 0, "**Lesson**: The standard form is $y = mx + c$. Here, there is no $+c$ term physically visible, which means $c = 0$. It passes exactly through the origin.", 15, 'hard'),
            generateQuestion("Calculate the gradient between $(-1, 3)$ and $(2, 9)$.", ["2", "-2", "6", "3"], 0, "**Lesson**: Formula: $\\frac{y_2 - y_1}{x_2 - x_1}$. $\\frac{9 - 3}{2 - (-1)} = \\frac{6}{3} = 2$. Pay very close attention to double negatives like $2 - (-1) = 3$!", 20, 'expert')
        ]
    },
    'g1-s1-symmetry': {
        learning: [
            generateQuestion("How many rigid lines of symmetry does a beautiful non-square Rectangle have?", ["2", "4", "0", "1"], 0, "**Formative Insight**: A non-square rectangle only folds perfectly horizontally down the middle, and vertically. The diagonals do NOT perfectly align the corners!", 10, 'medium'),
            generateQuestion("What is the exact order of rotational symmetry for a regular Pentagon?", ["5", "1", "10", "4"], 0, "**Formative Insight**: A regular shape has the same rotational order as its number of identical sides. A pentagon visually locks into place 5 times in a full $360^\\circ$ spin.", 10, 'medium'),
            generateQuestion("A shape has no lines of symmetry but an order of rotational symmetry of 2. Example?", ["Parallelogram", "Kite", "Square", "Rectangle"], 0, "**Formative Insight**: A standard parallelogram cannot be folded in half anywhere, but if you flip it upside down ($180^\\circ$ spin), it looks identical!", 15, 'hard'),
            generateQuestion("What is the order of rotational symmetry of a standard non-equilateral Isosceles Triangle?", ["1", "2", "3", "0"], 0, "**Formative Insight**: It only looks like itself after a full majestic $360^\\circ$ rotation. An order of 1 means 'no real rotational symmetry'.", 20, 'expert')
        ],
        testing: [
            generateQuestion("How many lines of symmetry does a majestic perfect circle possess?", ["Infinite", "0", "1", "360"], 0, "**Lesson**: You can fold a circle precisely across its center from literally any angle!", 5, 'easy'),
            generateQuestion("A shape matches itself identically after exactly a $120^\\circ$ rotation. Order?", ["3", "120", "2", "4"], 0, "**Lesson**: To find the order, divide a full circle by the matching angle: $360 \\div 120 = 3$. It locks in 3 times.", 10, 'medium'),
            generateQuestion("Which capital letter has exactly TWO lines of robust symmetry?", ["H", "A", "O", "Z"], 0, "**Lesson**: 'H' can be chopped vertically and cleanly horizontally. 'A' has 1. 'Z' has 0. 'O' has infinite.", 15, 'hard'),
            generateQuestion("[Interleaved] A regular octagon has side 5. Order of rotational symmetry?", ["8", "5", "40", "1"], 0, "**Lesson**: The side length (5) is completely irrelevant decoy information! A regular octagon always has an order of 8.", 20, 'expert')
        ]
    },
    'g1-s1-mensuration': {
        learning: [
            generateQuestion("Find Area of a triangle with Base 10 and Perpendicular Height 6.", ["30", "60", "16", "300"], 0, "**Formative Insight**: Triangle area is exactly half of a rectangle! Formula: $0.5 \\times \\text{base} \\times \\text{height} = 0.5 \\times 10 \\times 6 = 30$.", 10, 'medium'),
            generateQuestion("A parallelogram has base 8 and slanted side 5, but perpendicular height is 4. Find Area.", ["32", "40", "20", "26"], 0, "**Formative Insight**: Parallelogram Area relies strictly on Base $\\times$ Perpendicular Height. The slanted 5 is a decoy! Area $= 8 \\times 4 = 32$.", 15, 'hard'),
            generateQuestion("Volume of a solid uniformly rectangular cuboid with dimensions 2, 3, 5?", ["30", "10", "62", "15"], 0, "**Formative Insight**: Volume is Base Area $\\times$ Length. $(2 \\times 3) \\times 5 = 30$. Simply multiply all three dimensions.", 10, 'medium'),
            generateQuestion("Find Total Surface Area of the same cuboid (2x3x5).", ["62", "30", "15", "10"], 0, "**Formative Insight**: SA is wrapping paper! Calculate all 6 faces. Top/Bottom=$2\\times(2\\times3)=12$. Sides=$2\\times(2\\times5)=20$. Front/Back=$2\\times(3\\times5)=30$. $12+20+30 = 62$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Area of a basic square with strict side length 7?", ["49", "28", "14", "21"], 0, "**Lesson**: Area implies 2D coverage. Side squared: $7 \\times 7 = 49$.", 5, 'easy'),
            generateQuestion("Find Perimeter of a rectangle with length 8 and width 3.", ["22", "24", "11", "48"], 0, "**Lesson**: Perimeter is walking the fence line! Two lengths, two widths. $8+8+3+3 = 22$.", 10, 'medium'),
            generateQuestion("Find Volume of a Triangular Prism. Front triangle area is 12, prism is 10 long.", ["120", "22", "60", "1200"], 0, "**Lesson**: Volume of ANY prism is just the front Cross-Section Area multiplied purely by the Length. $12 \\times 10 = 120$.", 15, 'hard'),
            generateQuestion("[Interleaved] A $10\\text{cm} \\times 10\\text{cm} \\times 10\\text{cm}$ fully solid cube is melted down into $2\\text{cm}$ solid cubes. How many mini cubes are created?", ["125", "100", "50", "200"], 0, "**Lesson**: Master volume logic! Large total volume $= 1000$. Small single volume $= 2 \\times 2 \\times 2 = 8$. Total units $= 1000 / 8 = 125$.", 20, 'expert')
        ]
    },
    'g1-s1-data': {
        learning: [
            generateQuestion("What does the 'Mode' physically represent in raw data?", ["The Most Frequent value", "The Mathematical Average", "The Geographic Middle", "The Max minus Min"], 0, "**Formative Insight**: Mode literally sounds like 'Most'. It is the trendiest, most repeated value in the set.", 5, 'easy'),
            generateQuestion("Find the exact Median of 5, 2, 9, 1, 7.", ["5", "9", "2", "7"], 0, "**Formative Insight**: You CANNOT just pick the raw middle! You must sort them chronologically first: 1, 2, 5, 7, 9. The true center is 5.", 10, 'medium'),
            generateQuestion("A pie chart slice possesses an angle of $90^\\circ$. What exact fraction of the total data does this represent?", ["1/4", "1/2", "90%", "3/4"], 0, "**Formative Insight**: A full pie guarantees exactly $360^\\circ$. The fraction is thus exactly $90/360$, which simplifies beautifully to $1/4$.", 15, 'hard'),
            generateQuestion("A student averages 70 across 4 distinct tests. She scores 90 on the 5th. New mean?", ["74", "80", "75", "72"], 0, "**Formative Insight**: Use the sum trick! Total points for 4 tests = $70 \\times 4 = 280$. Add the 5th test = $280 + 90 = 370$. The new average is $370 / 5 = 74$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("The 'Range' of a chaotic dataset is defined fiercely as:", ["Maximum - Minimum", "Sum / Count", "Middle Value", "Most Frequent"], 0, "**Lesson**: Range measures the absolute spread, the distance from the lowest valleys to the highest peaks.", 5, 'easy'),
            generateQuestion("Find the exact Mean of precisely: 2, 4, 6, 8.", ["5", "20", "6", "4"], 0, "**Lesson**: Mean is the flat mathematical average. Sum=$20$. Count=$4$. Mean=$20/4 = 5$.", 10, 'medium'),
            generateQuestion("In a clean bar chart, the height of the bar strictly denotes the:", ["Frequency", "Category Name", "Percentage", "Cumulative Total"], 0, "**Lesson**: Bar height is directly proportional to how many times that category occurred (the Frequency).", 10, 'medium'),
            generateQuestion("Calculate the estimated mean of grouped data limits: (0-10) freq=2, (10-20) freq=3.", ["11", "10", "15", "12.5"], 0, "**Lesson**: For grouped data, you must use midpoints to estimate! Midpoints are 5 and 15. Estimated sum = $(5\\times2) + (15\\times3) = 10 + 45 = 55$. Total freq=5. Mean $= 55/5 = 11$.", 20, 'expert')
        ]
    },

    // --- Sec 2 G1 ---
    'g1-s2-proportion': {
        learning: [
            generateQuestion("If $y$ is directly proportional to $x$, and $y=10$ when $x=2$. Find formula for $y$.", ["$y = 5x$", "$y = 20x$", "$y = 2x$", "$y = x + 8$"], 0, "**Formative Insight**: Direct proportion means $y = kx$. Plug in the knowns: $10 = k(2) \\Rightarrow k=5$. The rule is $y=5x$.", 5, 'easy'),
            generateQuestion("4 workers take 6 days to paint a house. How long for 8 workers?", ["3 days", "12 days", "2 days", "4 days"], 0, "**Formative Insight**: More workers = Less time! This is INVERSE proportion. Double the workers ($\\times 2$), cut the time in half ($\\div 2$). $6 \\div 2 = 3$.", 10, 'medium'),
            generateQuestion("If $y$ is inversely proportional to $x$, and $y=4$ when $x=3$. Find $y$ when $x=6$.", ["2", "8", "12", "6"], 0, "**Formative Insight**: Inverse formula is $xy = k$. The constant $k = 4 \\times 3 = 12$. Now solve for the new state: $6y = 12 \\Rightarrow y=2$.", 15, 'hard'),
            generateQuestion("A car travels a distance $D$ at speed $S$. If speed is trebled ($3S$), the time taken is:", ["Divided by 3", "Multiplied by 3", "Square rooted", "Unchanged"], 0, "**Formative Insight**: Speed and Time are inversely proportional for a fixed distance. Trebling the speed cuts the time exactly by three.", 20, 'expert')
        ],
        testing: [
            generateQuestion("$A$ is directly proportional to $B$. If $B$ is halved, what happens to $A$?", ["It halves", "It doubles", "It squares", "Nothing"], 0, "**Lesson**: Best friends move together! Whatever happens to B directly mirrors onto A.", 5, 'easy'),
            generateQuestion("Cost of 5 pens is $$15$. Cost of 7 pens?", ["$$21$", "$$35$", "$$15$", "$$17$"], 0, "**Lesson**: Direct proportion. Find the unitary cost first: 1 pen = $$3$. Therefore, 7 pens = $7 \\times 3 = $21$.", 10, 'medium'),
            generateQuestion("It takes 3 taps 4 hours to fill a tank. How long for 6 identical taps?", ["2 hours", "8 hours", "12 hours", "6 hours"], 0, "**Lesson**: Inverse proportion! 6 taps is double the water flow ($\\times 2$), meaning it takes exactly half the time ($\\div 2$).", 15, 'hard'),
            generateQuestion("[Interleaved] Which represents INVERSE proportion on a graph?", ["A curve $y = k/x$", "A straight line $y=mx$", "A parabola", "A flat line"], 0, "**Lesson**: Inverse proportion graphs form a hyperbola curve ($y = k/x$). Direct proportion is a straight line through the origin.", 20, 'expert')
        ]
    },
    'g1-s2-rate': {
        learning: [
            generateQuestion("Convert a speed of $36\\text{ km/h}$ to $\\text{m/s}$.", ["10 m/s", "100 m/s", "3.6 m/s", "360 m/s"], 0, "**Formative Insight**: To convert km/h to m/s, strictly divide by 3.6. $36 \\div 3.6 = 10$. (Or multiply by 1000m, then divide by 3600s).", 10, 'medium'),
            generateQuestion("A runner covers 400m in 50 seconds. Find speed in m/s.", ["8", "4", "5", "80"], 0, "**Formative Insight**: Use the triangle! Speed = Distance / Time. $400 \\div 50 = 8\\text{ m/s}$.", 5, 'easy'),
            generateQuestion("A car travels 120km at 60km/h, then 80km at 40km/h. Average speed?", ["50 km/h", "48 km/h", "100 km/h", "52 km/h"], 0, "**Formative Insight**: Danger zone! Total distance = $120+80=200$. Total time = $(120/60) + (80/40) = 2+2=4$ hours. Average Speed = $200 / 4 = 50\\text{ km/h}$.", 15, 'hard'),
            generateQuestion("If you drive at 60km/h for 30 minutes, how far do you travel?", ["30km", "60km", "1800km", "2km"], 0, "**Formative Insight**: Unify units! 30 mins is $0.5$ hours. Distance = Speed $\\times$ Time = $60 \\times 0.5 = 30\\text{km}$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Which is the fastest speed out of these options?", ["15 m/s", "40 km/h", "10 m/s", "36 km/h"], 0, "**Lesson**: Convert $15\\text{ m/s}$ to $\\text{km/h}$ by multiplying by 3.6! $15 \\times 3.6 = 54\\text{ km/h}$. So $15\\text{ m/s}$ is massively faster.", 15, 'hard'),
            generateQuestion("Water flows at 2 liters/minute. How much flows in 1 hour?", ["120 liters", "60 liters", "2 liters", "24 liters"], 0, "**Lesson**: Unit conversion matrix! 1 hour = 60 minutes. $2\\text{ L/min} \\times 60\\text{ min} = 120\\text{ Liters}$.", 10, 'medium'),
            generateQuestion("Average speed is calculated strictly by:", ["Total Distance / Total Time", "Adding speeds / 2", "Speed $\\times$ Time", "Distance $\\times$ Speed"], 0, "**Lesson**: The only valid average speed formula is Total Distance divided purely by Total Time.", 5, 'easy'),
            generateQuestion("[Interleaved] A plane flies $500\\text{km}$ at $250\\text{km/h}$, rests 1 hr, then flies $500\\text{km}$ at $500\\text{km/h}$. Average speed?", ["250 km/h", "375 km/h", "300 km/h", "200 km/h"], 0, "**Lesson**: Total Dist = 1000. Time 1 = $500/250=2\\text{hr}$. Time 2 = 1hr rest. Time 3 = $500/500=1\\text{hr}$. Total Time = 4. Average $= 1000/4 = 250\\text{ km/h}$.", 20, 'expert')
        ]
    },
    'g1-s2-algebra-adv': {
        learning: [
            generateQuestion("Expand exactly: $(x + 5)(x + 2)$.", ["x^2 + 7x + 10", "x^2 + 10", "x^2 + 7x + 7", "2x + 10"], 0, "**Formative Insight**: Use FOIL! Firsts: $x^2$. Outers: $+2x$. Inners: $+5x$. Lasts: $+10$. Combine the middle: $x^2 + 7x + 10$.", 10, 'medium'),
            generateQuestion("Expand completely: $(x - 3)^2$.", ["x^2 - 6x + 9", "x^2 - 9", "x^2 + 9", "x^2 - 3x + 9"], 0, "**Formative Insight**: It means $(x-3)(x-3)$. Expand fully: $x^2 - 3x - 3x + 9 = x^2 - 6x + 9$. Trap avoided!", 15, 'hard'),
            generateQuestion("Factorise by grouping common factors: $4xy - 12x$.", ["4x(y - 3)", "4(xy - 3x)", "x(4y - 12)", "2x(2y - 6)"], 0, "**Formative Insight**: The absolute Highest Common Factor of 4 and 12 is 4. They also both share an 'x'. Pull $4x$ entirely outside the bracket.", 10, 'medium'),
            generateQuestion("Simplify the algebraic fraction $\\frac{x}{3} + \\frac{x}{4}$.", ["$\\frac{7x}{12}$", "$\\frac{2x}{7}$", "$\\frac{x^2}{12}$", "$\\frac{x}{12}$"], 0, "**Formative Insight**: Find a common denominator of 12. $\\frac{4x}{12}$ and $\\frac{3x}{12}$. Add numerators strictly: $\\frac{7x}{12}$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Expand: $-3(2x - 5)$.", ["-6x + 15", "-6x - 15", "-6x - 5", "6x - 15"], 0, "**Lesson**: The outside negative multiplier violently flips the signs inside! $-3 \\times -5 = +15$.", 10, 'medium'),
            generateQuestion("What is the expansion of $(x+y)(x-y)$?", ["x^2 - y^2", "x^2 + y^2", "x^2 - 2xy + y^2", "x^2 - 2xy - y^2"], 0, "**Lesson**: Difference of two squares! The middle terms totally obliterate each other ( $+xy - xy = 0$ ). Result: $x^2 - y^2$.", 15, 'hard'),
            generateQuestion("Factorise $a^2b + ab^2$.", ["ab(a + b)", "a^2(b + b^2)", "b^2(a^2 + a)", "ab(ab)"], 0, "**Lesson**: Hunt for the HCF. Both terms share exactly one 'a' and one 'b'. Pull $ab$ out! $ab(a+b)$.", 15, 'hard'),
            generateQuestion("[Interleaved] Fully simplify $\\frac{10a^3b^2}{5ab}$.", ["2a^2b", "2a^3b", "5a^2b", "2ab^2"], 0, "**Lesson**: Attack piece by piece. Numbers: $10/5=2$. Variables A: $a^3/a = a^2$. Variables B: $b^2/b = b$. Result: $2a^2b$.", 20, 'expert')
        ]
    },
    'g1-s2-graphs': {
        learning: [
            generateQuestion("Which equation represents a smiling, U-shaped quadratic curve (parabola)?", ["$y = 2x^2 + 5$", "$y = -x^2 + 2x$", "$y = 3x + 4$", "$y = x^3$"], 0, "**Formative Insight**: A positive $x^2$ coefficient creates a 'smile' U-shape. A negative $x^2$ creates a 'frown' n-shape.", 5, 'easy'),
            generateQuestion("Find the y-intercept of the quadratic curve $y = x^2 - 3x + 7$.", ["7", "-3", "0", "1"], 0, "**Formative Insight**: The y-intercept is exactly where $x=0$. Plug in zero: $y = 0^2 - 3(0) + 7 = 7$.", 10, 'medium'),
            generateQuestion("If a parabola crosses the x-axis at $x = -2$ and $x = 4$, where is its line of symmetry?", ["x = 1", "x = 2", "x = 0", "x = -1"], 0, "**Formative Insight**: The line of symmetry is perfectly in the middle of the two x-intercepts! Average them: $(-2 + 4) / 2 = 1$.", 15, 'hard'),
            generateQuestion("Find the EXACT minimum turning point of $y = x^2 - 4x + 3$. (Hint: intercepts are 1, 3)", ["(2, -1)", "(2, 1)", "(1, 0)", "(0, 3)"], 0, "**Formative Insight**: Line of symmetry is $x=2$. Substitute $x=2$ back into the equation: $y = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Point is $(2, -1)$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("A quadratic curve has the equation $y = 5 - x^2$. What is its general shape?", ["Frown (Maximum point)", "Smile (Minimum point)", "Straight Line", "S-Curve"], 0, "**Lesson**: The $-x^2$ term dictates a downward frowning shape, which creates a single highest peak (maximum).", 5, 'easy'),
            generateQuestion("Where does the curve $y = (x-2)(x+5)$ forcibly cross the x-axis?", ["x=2, x=-5", "x=-2, x=5", "x=0", "x=2, x=5"], 0, "**Lesson**: Set $y=0$. For the result to be zero, either bracket must be zero! So $x-2=0$ ($x=2$) or $x+5=0$ ($x=-5$).", 10, 'medium'),
            generateQuestion("A parabola has its vertex at $(3, 5)$. What is the equation of its line of symmetry?", ["x = 3", "y = 5", "x = 5", "y = 3"], 0, "**Lesson**: The line of symmetry is a vertical slice cutting right through the vertex's x-coordinate.", 15, 'hard'),
            generateQuestion("[Interleaved] The curves $y = x^2$ and $y = x + 2$ intersect at $x=2$ and $x = ?$:", ["-1", "1", "0", "-2"], 0, "**Lesson**: Set them rigidly equal: $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$. So intersections are 2 and -1.", 20, 'expert')
        ]
    },
    'g1-s2-simuleq': {
        learning: [
            generateQuestion("Solve substitution: $x = 3$ and $2x + y = 10$. Find $y$.", ["4", "7", "6", "10"], 0, "**Formative Insight**: Substitute $x=3$ directly into the second equation: $2(3) + y = 10 \\Rightarrow 6 + y = 10 \\Rightarrow y=4$.", 5, 'easy'),
            generateQuestion("Solve elimination: $x + y = 8$ and $x - y = 2$. Find $x$.", ["5", "3", "10", "6"], 0, "**Formative Insight**: Add the equations vertically! The $+y$ and $-y$ perfectly annihilate each other. $2x = 10 \\Rightarrow x=5$.", 10, 'medium'),
            generateQuestion("Solve substitution: $y = 2x$ and $3x + y = 15$. Find $x$.", ["3", "5", "6", "2"], 0, "**Formative Insight**: Replace the $y$ in the second equation with $2x$: $3x + (2x) = 15 \\Rightarrow 5x = 15 \\Rightarrow x=3$.", 15, 'hard'),
            generateQuestion("Solve elimination: $2x + 3y = 12$ and $x + 3y = 9$. Find $y$. (Hint: find x first)", ["2", "3", "4", "1"], 0, "**Formative Insight**: Subtract equation 2 from equation 1 to destroy $3y$. $(2x-x) + (3y-3y) = 12-9 \\Rightarrow x=3$. Plug back in: $3+3y=9 \\Rightarrow 3y=6 \\Rightarrow y=2$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("When dealing with simultaneous equations, what does the 'solution' physically represent?", ["Intersection point on a graph", "The gradient", "The x-axis", "The origin"], 0, "**Lesson**: A pair of coordinates $(x,y)$ that satisfies BOTH equations is exactly the physical spot where their graph lines crash into each other.", 5, 'easy'),
            generateQuestion("Solve $y = x + 1$ and $y = 5 - x$.", ["x=2, y=3", "x=3, y=2", "x=1, y=4", "x=2.5, y=2.5"], 0, "**Lesson**: Since both equal $y$, set them equal to each other! $x + 1 = 5 - x \\Rightarrow 2x = 4 \\Rightarrow x=2$. Then $y = 2+1=3$.", 10, 'medium'),
            generateQuestion("Solve elimination: $3x + 2y = 14$ and $x - 2y = -6$.", ["x=2, y=4", "x=4, y=2", "x=2, y=-4", "x=4, y=4"], 0, "**Lesson**: Add equations! $4x = 8 \\Rightarrow x=2$. Plug back into second: $2 - 2y = -6 \\Rightarrow -2y = -8 \\Rightarrow y=4$.", 15, 'hard'),
            generateQuestion("[Interleaved] 2 apples and 1 banana cost $$4$. 1 apple and 1 banana cost $$2.50$. Cost of 1 apple?", ["$$1.50$", "$$1.00$", "$$2.00$", "$$2.50$"], 0, "**Lesson**: Let apple=$A$, banana=$B$. $2A+B=4$, $A+B=2.5$. Subtract the two equations! $A = 1.5$.", 20, 'expert')
        ]
    },

    'g1-s2-pythagoras': {
        learning: [
            generateQuestion("Pythagoras strictly ONLY works seamlessly on triangles that violently feature a:", ["$90^\\circ$ angle", "$60^\\circ$ angle", "Equal sides", "Unknown curve"], 0, "**Formative Insight**: Pythagoras is the supreme ancient secret restricted to Right-Angled Triangles only.", 5, 'easy'),
            generateQuestion("Find the long hypotenuse if the shorter triangle legs are precisely 3 and 4.", ["5", "7", "1", "12"], 0, "**Formative Insight**: It's the classic 3-4-5 builder triangle: $3^2 + 4^2 = 9+16 = 25 \\Rightarrow \\sqrt{25} = 5$.", 10, 'medium'),
            generateQuestion("Hypotenuse is brutally 13, one side is 5. Find the remaining missing leg.", ["12", "18", "8", "144"], 0, "**Formative Insight**: Finding a SHORTER side means you MUST subtract! $c^2 - a^2 = b^2$. So $169 - 25 = 144 \\Rightarrow \\sqrt{144} = 12$.", 15, 'hard'),
            generateQuestion("A $10\\text{m}$ ladder leans on a high wall, explicitly reaching $8\\text{m}$ up. Distance base is from the firm wall?", ["6m", "2m", "36m", "12.8m"], 0, "**Formative Insight**: Ladder is hypotenuse=10, vertical wall=8. Find horizontal base. $10^2 - 8^2 = 100 - 64 = 36$. $\\sqrt{36} = 6$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Which is the correct Pythagoras formulation?", ["$c^2 = a^2 + b^2$", "$c = a + b$", "$c^2 = a^2 - b^2$", "$a^2 = b^2 + c^2$"], 0, "**Lesson**: The square of the absolute longest side (hypotenuse $c$) is strictly the sum of the squares of the two shorter legs.", 5, 'easy'),
            generateQuestion("Right triangle legs are 6 and 8. Find Hypotenuse.", ["10", "14", "100", "2"], 0, "**Lesson**: Add the squares! $36 + 64 = 100$. Square root it to find the pure length: 10.", 10, 'medium'),
            generateQuestion("Hypotenuse is 25, side is 24. Find the missing side.", ["7", "49", "1", "12"], 0, "**Lesson**: Subtract the squares when targeting a short side! $25^2 - 24^2 = 625 - 576 = 49$. Square root to 7.", 15, 'hard'),
            generateQuestion("[Interleaved] Square has diagonal of $\\sqrt{50}$. Find exact side length.", ["5", "25", "10", "12.5"], 0, "**Lesson**: Square halves are right triangles! Leg $x$ and Leg $x$, hypotenuse $\\sqrt{50}$. $x^2 + x^2 = (\\sqrt{50})^2 \\Rightarrow 2x^2 = 50 \\Rightarrow x^2 = 25 \\Rightarrow x=5$.", 20, 'expert')
        ]
    },
    'g1-s2-mensuration2': {
        learning: [
            generateQuestion("What is the exact volume fraction relationship of a Cone compared to a rigid Cylinder of identical size?", ["1/3", "1/2", "1/4", "Equal"], 0, "**Formative Insight**: Pointy math shapes (Cones, Pyramids) hold precisely ONE-THIRD the volume of their straight prismatic equivalents.", 5, 'easy'),
            generateQuestion("Volume of a Square Pyramid: Base side is 6, vertical height is 10.", ["120", "360", "60", "180"], 0, "**Formative Insight**: Pyramid Vol = $\\frac{1}{3} \\times \\text{Base Area} \\times \\text{Height}$. Base Area ($6 \\times 6 = 36$). Vol = $\\frac{1}{3} \\times 36 \\times 10 = 120$.", 10, 'medium'),
            generateQuestion("Find volume of exact Sphere with radius 3 (leave in terms of $\\pi$).", ["$36\\pi$", "$9\\pi$", "$27\\pi$", "$12\\pi$"], 0, "**Formative Insight**: Formula is $\\frac{4}{3}\\pi r^3$. $r^3 = 27$. So $\\frac{4}{3} \\times 27\\pi = 36\\pi$.", 15, 'hard'),
            generateQuestion("Cone has radius 3, highly vertical height 4. Find Curved Surface Area (in $\\pi$).", ["$15\\pi$", "$12\\pi$", "$24\\pi$", "$20\\pi$"], 0, "**Formative Insight**: You MUST use slant height '$l$' for CSA $\\pi r l$. Use Pythagoras: $3^2 + 4^2 = l^2 \\Rightarrow l=5$. CSA = $\\pi \\times 3 \\times 5 = 15\\pi$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("A cone and cylinder share base and height rigidly. If cylinder is 300L, cone volume?", ["100L", "150L", "200L", "900L"], 0, "**Lesson**: The cone is purely 1/3 the volume of its host cylinder. $300 \\div 3 = 100\\text{L}$.", 5, 'easy'),
            generateQuestion("Surface Area of a full spherical globe with exact radius 5 (in $\\pi$)?", ["$100\\pi$", "$25\\pi$", "$75\\pi$", "$50\\pi$"], 0, "**Lesson**: Sphere Surface Area is strictly $4\\pi r^2$. $r^2 = 25$. $4 \\times 25\\pi = 100\\pi$.", 10, 'medium'),
            generateQuestion("Volume of a cone: Base $r=4$, height $h=6$ (in $\\pi$).", ["$32\\pi$", "$96\\pi$", "$48\\pi$", "$16\\pi$"], 0, "**Lesson**: $\\frac{1}{3} \\times \\pi r^2 h$. $r^2 = 16$. $\\frac{1}{3} \\times \\pi \\times 16 \\times 6 = 32\\pi$.", 15, 'hard'),
            generateQuestion("[Interleaved] A solid metal $6\\text{cm}$ sphere is melted directly into $2\\text{cm}$ spheres. How many?", ["27", "9", "3", "36"], 0, "**Lesson**: Volume is proportional to $r^3$. Big $r^3 = 216$. Small $r^3 = 8$. $216 \\div 8 = 27$ perfect mini spheres.", 20, 'expert')
        ]
    },
    'g1-s2-stats': {
        learning: [
            generateQuestion("A data 'outlier' is a number drastically isolated from the rest. Which 'average' is easily ruined by outliers?", ["Mean", "Median", "Mode", "None"], 0, "**Formative Insight**: The Mean forcefully factors in every single number. A billionaire walking into a room massively ruins the 'average' mean salary.", 5, 'easy'),
            generateQuestion("Scores: 50, 60, 100. Find the robust Median.", ["60", "70", "50", "100"], 0, "**Formative Insight**: The data is already sorted chronologically. The absolute center value is safely shielded at 60.", 10, 'medium'),
            generateQuestion("Find exact Median of EVEN set: 2, 4, 8, 10.", ["6", "4", "8", "6.5"], 0, "**Formative Insight**: There is NO single absolute middle number. You strictly AVERAGE the two center numbers: $(4+8)/2 = 6$.", 15, 'hard'),
            generateQuestion("Mean weight of 4 boys is 50kg. A 5th boy joins, new mean is rigidly 52kg. 5th boy's weight?", ["60kg", "55kg", "52kg", "62kg"], 0, "**Formative Insight**: Use totals! Old Total = $4 \\times 50 = 200$. New Total = $5 \\times 52 = 260$. The heavy 5th boy brought exactly $260 - 200 = 60\\text{kg}$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("To find the exact Median, what is the absolute FIRST mandatory step?", ["Sort the data", "Add them all", "Find the most frequent", "Divide by 2"], 0, "**Lesson**: You MUST sort chronologically from smallest to largest. Picking the random middle of unsorted data is catastrophic.", 5, 'easy'),
            generateQuestion("Find precisely the Mean of: 10, 10, 10, 50.", ["20", "10", "80", "25"], 0, "**Lesson**: Add strictly ($80$) and accurately divide by the count ($4$). Result is exactly 20.", 10, 'medium'),
            generateQuestion("Which is the superior average representing 'typical' house prices without millionaire skew?", ["Median", "Mean", "Mode", "Range"], 0, "**Lesson**: Median safely ignores the multi-million dollar mansion outliers at the extreme top of the list.", 15, 'hard'),
            generateQuestion("[Interleaved] In a probability test, throwing a 6 on a dice is $\\frac{1}{6}$. Throwing an EVEN number?", ["$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{3}$"], 0, "**Lesson**: There are exactly three beautiful even numbers (2,4,6) out of six total. $3/6$ simplifies perfectly to exactly $1/2$.", 20, 'expert')
        ]
    },

    'g1-s34-numbers': {
        learning: [
            generateQuestion("Evaluate perfectly: $3^4$.", ["81", "12", "64", "27"], 0, "**Formative Insight**: Power means repeated multiplication. $3 \\times 3 \\times 3 \\times 3$. $9 \\times 9 = 81$.", 5, 'easy'),
            generateQuestion("Simplify fully: $a^5 \\times a^2$.", ["a^7", "a^{10}", "a^3", "a^{52}"], 0, "**Formative Insight**: Same base multiplied means ADD the powers! $5+2=7$.", 10, 'medium'),
            generateQuestion("Simplify exactly: $(2x^3)^3$.", ["8x^9", "6x^6", "8x^6", "2x^9"], 0, "**Formative Insight**: Apply the cube to EVERYTHING inside. $2^3 = 8$. $(x^3)^3$ multiplies powers into $x^9$. Final: $8x^9$.", 15, 'hard'),
            generateQuestion("Evaluate $4^{-2}$ without a calculator.", ["1/16", "-16", "-8", "1/8"], 0, "**Formative Insight**: Negative power FLIPS it strictly into a fraction: $1 / 4^2$. Then $4^2 = 16$. So $1/16$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Which form explicitly represents $2 \\times 10^3$ in exact Standard Form?", ["2000", "0.002", "20", "200"], 0, "**Lesson**: Standard Form makes large numbers compact. The $10^3$ moves the decimal precisely 3 times to the right.", 5, 'easy'),
            generateQuestion("Write $0.0045$ cleanly in Standard Form.", ["$4.5 \\times 10^{-3}$", "$4.5 \\times 10^3$", "$0.45 \\times 10^{-2}$", "$45 \\times 10^{-4}$"], 0, "**Lesson**: The decimal shifts 3 steps to the right to land after the first non-zero digit. A right shift yields a strict negative $-3$ power.", 10, 'medium'),
            generateQuestion("Simplify $\\frac{12x^5}{3x^2}$.", ["4x^3", "4x^{2.5}", "9x^3", "4x^7"], 0, "**Lesson**: Handle numbers and letters separately! $12/3 = 4$. For division, completely subtract the letter powers: $5-2=3$. Final: $4x^3$.", 15, 'hard'),
            generateQuestion("[Interleaved] Which is vastly larger: $5 \\times 10^4$ or $9 \\times 10^3$?", ["$5 \\times 10^4$", "$9 \\times 10^3$", "Equal", "Cannot compare"], 0, "**Lesson**: The exponent strictly rules absolute magnitude. $10^4$ ($50,000$) undeniably crushes $10^3$ ($9,000$), regardless of the coefficient.", 20, 'expert')
        ]
    },
    'g1-s34-scale': {
        learning: [
            generateQuestion("A map scale is $1:100,000$. What does $1\\text{cm}$ represent in km?", ["1km", "10km", "0.1km", "100km"], 0, "**Formative Insight**: Convert cm to km by strictly dividing by $100,000$. So $100,000\\text{cm} = 1\\text{km}$.", 5, 'easy'),
            generateQuestion("Map scale $1:50,000$. A straight road is precisely $4\\text{cm}$ on map. Real length?", ["2km", "20km", "200km", "0.2km"], 0, "**Formative Insight**: Multiply by 50,000! $4 \\times 50,000 = 200,000\\text{cm}$. Divide by 100,000 to convert to exactly $2\\text{km}$.", 10, 'medium'),
            generateQuestion("Length scale is $1 : 20$. Form the Area Scale strictly.", ["1 : 400", "1 : 20", "1 : 40", "1 : 8000"], 0, "**Formative Insight**: Area is entirely 2D. You MUST definitively square the length scale. $1^2 : 20^2 \\Rightarrow 1 : 400$.", 15, 'hard'),
            generateQuestion("Map scale $1:2000$. A park area is cleanly $5\\text{cm}^2$ on map. Find real area in $\\text{m}^2$.", ["20,000", "10,000", "100", "4,000,000"], 0, "**Formative Insight**: Scale is $1\\text{cm} : 20\\text{m}$. Sequence: Area Scale is $1\\text{cm}^2 : 400\\text{m}^2$. Map area $5 \\times 400 = 20,000\\text{m}^2$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("What is a strictly representative fraction ratio for $1\\text{cm} : 5\\text{km}$?", ["1 : 500,000", "1 : 5000", "1 : 5", "1 : 50,000"], 0, "**Lesson**: Convert the 5km completely to cm to match identical units! $5 \\times 100,000 = 500,000$.", 5, 'easy'),
            generateQuestion("Real distance $3\\text{km}$ is drawn correctly as $6\\text{cm}$. Find the 1:n scale.", ["1 : 50,000", "1 : 20,000", "1 : 5,000", "1 : 500,000"], 0, "**Lesson**: $6\\text{cm} : 3\\text{km}$. Convert to identical units! $6\\text{cm} : 300,000\\text{cm}$. Divide strongly by 6! $1 : 50,000$.", 10, 'medium'),
            generateQuestion("If a length scale is geometrically $1:k$, the Volume scale is:", ["$1:k^3$", "$1:k^2$", "$1:3k$", "$1:k$"], 0, "**Lesson**: Because explicit physical space operates dynamically in 3 dimensions, you MUST fully cube the length multiplier.", 15, 'hard'),
            generateQuestion("[Interleaved] Length scale is $1:5$. If Model Volume is strictly $10$, find Real Volume.", ["1250", "50", "250", "150"], 0, "**Lesson**: $1:5$ length $\\Rightarrow 1:125$ Volume scale! Therefore exactly $10 \\times 125 = 1250$.", 20, 'expert')
        ]
    },
    'g1-s34-algebra': {
        learning: [
            generateQuestion("Make strictly $x$ the given subject: $y = x + 7$.", ["x = y - 7", "x = y + 7", "x = 7 - y", "y = x - 7"], 0, "**Formative Insight**: Defensively isolate $x$ by forcefully pushing $+7$ to the other isolated side as $-7$.", 5, 'easy'),
            generateQuestion("Make precisely $m$ the subject: $F = ma$.", ["m = F / a", "m = F - a", "m = a / F", "m = F \\times a"], 0, "**Formative Insight**: The $a$ is violently multiplying $m$. Detach it aggressively by completely dividing the other side by $a$.", 10, 'medium'),
            generateQuestion("Simplify explicitly $\\frac{x}{2} - \\frac{x}{3}$.", ["x/6", "x/1", "-x/6", "x/5"], 0, "**Formative Insight**: Common denominator is purely 6. Fractions become exactly $\\frac{3x}{6} - \\frac{2x}{6} = \\frac{1x}{6}$.", 15, 'hard'),
            generateQuestion("Make exactly $r$ the subject forcefully of $V = \\pi r^2 h$.", ["$r = \\sqrt{V / \\pi h}$", "$r = V / \\pi h$", "$r = (V/\\pi h)^2$", "$r = \\sqrt{V} / \\pi h$"], 0, "**Formative Insight**: Strip outside in! First cleanly divide by $\\pi h$ entirely. You get $r^2 = \\frac{V}{\\pi h}$. Finally securely square root it all.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Make $x$ strictly the subject explicitly: $\\frac{x}{3} = y$.", ["x = 3y", "x = y/3", "x = y + 3", "x = 3/y"], 0, "**Lesson**: Since $x$ is presently fiercely divided by 3, you completely reverse it directly by exactly multiplying by 3.", 5, 'easy'),
            generateQuestion("Simplify carefully: $\\frac{4x}{2}$.", ["2x", "4", "2", "x"], 0, "**Lesson**: Numbers definitively cancel each other precisely! $4 \\div 2$ firmly leaves $2$. Variables remain completely untouched.", 10, 'medium'),
            generateQuestion("Solve completely: $\\frac{2}{x} = \\frac{4}{10}$.", ["5", "2", "8", "1"], 0, "**Lesson**: Pure Cross-multiply explicitly! $4x = 20$. Dividing exactly by 4 boldly reveals $x=5$.", 15, 'hard'),
            generateQuestion("[Interleaved] Make $g$ the rigorous subject: $T = 2\\pi \\sqrt{\\frac{L}{g}}$.", ["$g = \\frac{4\\pi^2 L}{T^2}$", "$g = \\frac{L}{T^2}$", "$g = \\frac{2\\pi L}{T}$", "$g = \\frac{T^2}{4\\pi^2 L}$"], 0, "**Lesson**: Strip totally! Divide by $2\\pi$. Then aggressively SQUARE absolutely everything to destroy the root: $\\frac{T^2}{4\\pi^2} = \\frac{L}{g}$. Then boldly flip both sides exactly and multiply thoroughly by L.", 20, 'expert')
        ]
    },
    'g1-s34-quadratic': {
        learning: [
            generateQuestion("In the equation exactly $y = 3x^2 + 2x - 5$, what is pure constant 'c'?", ["-5", "5", "3", "2"], 0, "**Formative Insight**: 'c' is the naked number violently wandering alone with absolutely no x attached. Keep its designated sign!", 5, 'easy'),
            generateQuestion("Solve perfectly $(x - 4)(x + 2) = 0$.", ["4, -2", "-4, 2", "0, 0", "2, -4"], 0, "**Formative Insight**: The absolute Zero Product Truth completely rules here. Either $x-4=0$ explicitly, or forcibly $x+2=0$.", 10, 'medium'),
            generateQuestion("Factorise securely $x^2 + 7x + 10 = 0$.", ["(x+2)(x+5)", "(x+1)(x+10)", "(x-2)(x-5)", "(x+3)(x+4)"], 0, "**Formative Insight**: Seeking exactly two numbers that flawlessly multiply together to exactly 10, AND simultaneously perfectly add up to cleanly 7. Those are strictly 2 and 5.", 15, 'hard'),
            generateQuestion("Where specifically does the tight curve explicitly $y = x^2 - 16$ cross cleanly the exact x-axis?", ["4, -4", "0, 16", "16, -16", "0, 0"], 0, "**Formative Insight**: X-axis strictly means firmly $y=0$. Fully $x^2 - 16 = 0 \\Rightarrow x^2 = 16$. This fiercely splits neatly into two absolute roots: $4$ and $-4$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("What strict explicit format cleanly defines the almighty Quadratic Formula?", ["$-b \\pm \\sqrt{b^2 - 4ac} / 2a$", "$b^2 - 4ac$", "$y = mx + c$", "$-b / 2a$"], 0, "**Lesson**: The grand master formula perfectly destroys any highly stubborn quadratic equation securely.", 5, 'easy'),
            generateQuestion("The core 'Discriminant' strictly is entirely calculated by:", ["$b^2 - 4ac$", "$-b / 2a$", "$\\sqrt{b^2 - 4ac}$", "$2a$"], 0, "**Lesson**: The inner heart of the root strongly powers the discriminant, predicting completely the exact number of strict solutions reliably.", 10, 'medium'),
            generateQuestion("Where is the precise $y$-intercept of effectively $y = 2x^2 + 9x - 1$ located?", ["(0, -1)", "(0, 1)", "(-1, 0)", "(0, 0)"], 0, "**Lesson**: Forcefully slam $x=0$. All $x$ terms cleanly instantly vanish entirely! You powerfully are left totally alone with constant explicitly $-1$.", 15, 'hard'),
            generateQuestion("[Interleaved] Which exact parabola completely avoids intensely smiling?", ["$y = 5 - x^2$", "$y = 2x^2 + 1$", "$y = x^2 - x$", "$y = 0.5x^2$"], 0, "**Lesson**: A firmly downward strictly negative $x^2$ coefficient perfectly commands the entire graph purely into a harsh downward frown safely.", 20, 'expert')
        ]
    },
    'g1-s34-trig': {
        learning: [
            generateQuestion("Which acronym natively handles right-angled triangles?", ["SOH CAH TOA", "BODMAS", "FOIL", "BIDMAS"], 0, "**Formative Insight**: SOH CAH TOA connects exactly the angles to the strictly defined Opposite, Adjacent, and Hypotenuse.", 5, 'easy'),
            generateQuestion("Triangle ABC has $C=90^\\circ$. Angle $B = 30^\\circ$. Base $BC = 10$. Find height $AC$.", ["10 tan(30)", "10 sin(30)", "10 cos(30)", "10 / tan(30)"], 0, "**Formative Insight**: From B, AC is Opposite and BC is Adjacent. Opp & Adj means Tangent (TOA). $\\tan(30) = AC / 10 \\Rightarrow AC = 10 \\tan(30)$.", 10, 'medium'),
            generateQuestion("A 5m ladder leans on a wall reaching 4m up. What angle does it make with the ground?", ["$53.1^\\circ$", "$36.9^\\circ$", "$45^\\circ$", "$60^\\circ$"], 0, "**Formative Insight**: Ladder is Hypotenuse (5). Wall is Opposite (4). SOH! $\\sin(\\theta) = 4/5 = 0.8$. Inverse sine gives $53.1^\\circ$.", 15, 'hard'),
            generateQuestion("Calculate the true area of a triangle with sides 5 and 8, and an included angle of $45^\\circ$.", ["$14.1$", "$20$", "$28.2$", "$10$"], 0, "**Formative Insight**: Use the Sine rule for Area: $0.5 \\times a \\times b \\times \\sin(C)$. $0.5 \\times 5 \\times 8 \\times \\sin(45^\\circ) = 20 \\times 0.707 \\approx 14.1$.", 20, 'expert')
        ],
        testing: [
            generateQuestion("In trigonometry, the side totally OPPOSITE the $90^\\circ$ angle is strictly called:", ["Hypotenuse", "Adjacent", "Opposite", "Base"], 0, "**Lesson**: The Hypotenuse is universally the longest side and always perfectly faces the right angle.", 5, 'easy'),
            generateQuestion("Find $\\cos(60^\\circ)$.", ["0.5", "0.866", "1", "0"], 0, "**Lesson**: It is an exact value you should eventually memorize: $\\cos(60^\\circ) = 0.5$.", 10, 'medium'),
            generateQuestion("Nautical bearings are always written strictly using:", ["3 digits", "2 digits", "1 digit", "Letters"], 0, "**Lesson**: True bearings fundamentally require explicit 3-digit pads like $045^\\circ$ or $005^\\circ$.", 15, 'hard'),
            generateQuestion("[Interleaved] You walk explicitly $3\\text{km}$ North, then perfectly $4\\text{km}$ East. Distance from start?", ["5km", "7km", "1km", "12km"], 0, "**Lesson**: Vector travel forms a physical right triangle. Pythagoras perfectly dictates $3^2 + 4^2 = 25$, so hypotenuse is exactly 5.", 20, 'expert')
        ]
    },
    'g1-s34-mensuration': {
        learning: [
            generateQuestion("What exact fraction of a circle is a $90^\\circ$ sector?", ["1/4", "1/2", "1/3", "1/8"], 0, "**Formative Insight**: Full circle is $360^\\circ$. So $90/360$ simplifies identically to $1/4$.", 5, 'easy'),
            generateQuestion("Find exact Area of a circle with purely explicitly radius 3 (in $\\pi$).", ["9$\\pi$", "6$\\pi$", "3$\\pi$", "12$\\pi$"], 0, "**Formative Insight**: Area strictly requires squaring the radius: $\\pi r^2 = \\pi (3^2) = 9\\pi$.", 10, 'medium'),
            generateQuestion("Calculate explicitly Arc Length uniquely of a $60^\\circ$ sector with pure radius 6 (in $\\pi$).", ["2$\\pi$", "12$\\pi$", "6$\\pi$", "4$\\pi$"], 0, "**Formative Insight**: Fraction is uniquely $60/360 = 1/6$. Full circumference is $2\\pi(6) = 12\\pi$. Take $1/6$ of $12\\pi = 2\\pi$.", 15, 'hard'),
            generateQuestion("A sector has exactly radius 4, perfectly Arc length solidly 5. True explicit Perimeter?", ["13", "5", "9", "25"], 0, "**Formative Insight**: Perimeter demands the full outer boundary! Arc length (5) PLUS two straight radii logically down the sides ($4+4$). Total is natively 13.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Formula exclusively for Circle completely exactly Circumference securely?", ["2$\\pi$r", "$\\pi r^2$", "$\\pi d^2$", "4$\\pi$r^2"], 0, "**Lesson**: Perimeter of a circle securely uses strictly purely $2\\pi r$ (or cleanly $\\pi d$).", 5, 'easy'),
            generateQuestion("Find Sector Area ($90^\\circ$, radius 2, in $\\pi$).", ["$\\pi$", "4$\\pi$", "2$\\pi$", "8$\\pi$"], 0, "**Lesson**: $90^\\circ$ is $1/4$ of the full Area. $1/4 \\times \\pi(2^2) = \\pi$.", 10, 'medium'),
            generateQuestion("Perimeter of semicircle with radius 5?", ["5$\\pi$ + 10", "10$\\pi$", "5$\\pi$", "25$\\pi$ + 10"], 0, "**Lesson**: Add curved part ($\\pi r$, so $5\\pi$) and straight diameter ($10$).", 15, 'hard'),
            generateQuestion("[Interleaved] Volume of a cube with side 4?", ["64", "16", "12", "32"], 0, "**Lesson**: $V = s^3 = 4^3 = 64$.", 20, 'expert')
        ]
    },
    'g1-s34-data': {
        learning: [
            generateQuestion("Which average is immune to extreme outliers?", ["Median", "Mean", "Mode", "Range"], 0, "**Formative Insight**: The Median only cares about rank, ignoring extreme values at the ends.", 5, 'easy'),
            generateQuestion("Lower Quartile marks what percentage of the data?", ["25%", "50%", "75%", "100%"], 0, "**Formative Insight**: The Lower Quartile (Q1) is the 25th percentile.", 10, 'medium'),
            generateQuestion("Interquartile Range is calculated as:", ["Q3 - Q1", "Q2 - Q1", "Q3 - Q2", "Max - Min"], 0, "**Formative Insight**: The IQR measures the spread of the middle 50% of data, $Q3 - Q1$.", 15, 'hard'),
            generateQuestion("On a cumulative frequency curve, the median is read from the:", ["50% mark on y-axis then down", "X-axis exclusively", "Mean", "Mode"], 0, "**Formative Insight**: Find half the total frequency on the y-axis, draw across to the curve, then down to the x-axis.", 20, 'expert')
        ],
        testing: [
            generateQuestion("To find the Median, you must first:", ["Sort the data", "Add all values", "Find the most frequent", "Divide by 2"], 0, "**Lesson**: Data must always be sorted in ascending order before finding the middle value.", 5, 'easy'),
            generateQuestion("Which measure describes the spread of the entire dataset?", ["Range", "Interquartile Range", "Median", "Mode"], 0, "**Lesson**: Range is Max - Min, covering the whole dataset.", 10, 'medium'),
            generateQuestion("If all values in a dataset increase by 5, the mean:", ["Increases by 5", "Stays the same", "Is multiplied by 5", "Decreases by 5"], 0, "**Lesson**: Adding a constant shifts the entire dataset, so the mean shifts by the same amount.", 15, 'hard'),
            generateQuestion("[Interleaved] Which represents categorical data?", ["Shoe size", "Height", "Weight", "Temperature"], 0, "**Lesson**: Shoe size falls into discrete categories, unlike continuous measures like height.", 20, 'expert')
        ]
    },
    'g1-s34-prob': {
        learning: [
            generateQuestion("Probability is calculated as:", ["Target Outcomes / Total Outcomes", "Total Outcomes / Target Outcomes", "Target Outcomes + Total Outcomes", "Target Outcomes - Total Outcomes"], 0, "**Formative Insight**: Target cases over all possible cases gives the chance.", 5, 'easy'),
            generateQuestion("Probability of an event NOT happening is:", ["1 - Probability of Event", "1 + Probability of Event", "Probability of Event - 1", "0"], 0, "**Formative Insight**: Total probability is 1. P(not A) = 1 - P(A).", 10, 'medium'),
            generateQuestion("A certain event has a probability of:", ["1", "0", "0.5", "100"], 0, "**Formative Insight**: Certainty is exactly 1 (or 100%). Impossibility is 0.", 15, 'hard'),
            generateQuestion("Probability of rolling a 7 on a standard 6-sided die?", ["0", "1/6", "7/6", "1"], 0, "**Formative Insight**: 7 is not on a standard die, so 0 target outcomes. 0/6 = 0.", 20, 'expert')
        ],
        testing: [
            generateQuestion("Expected Number of successes equals:", ["Probability $\\times$ Total Trials", "0", "Total Trials / Probability", "1"], 0, "**Lesson**: Multiply the chance of one success by the number of attempts.", 5, 'easy'),
            generateQuestion("For INDEPENDENT events A and B, P(A AND B) = ", ["P(A) $\\times$ P(B)", "P(A) + P(B)", "P(A) / P(B)", "P(A) - P(B)"], 0, "**Lesson**: 'AND' means multiply the probabilities.", 10, 'medium'),
            generateQuestion("For MUTUALLY EXCLUSIVE events A and B, P(A OR B) = ", ["P(A) + P(B)", "P(A) $\\times$ P(B)", "P(A) - P(B)", "P(A) / P(B)"], 0, "**Lesson**: 'OR' means add the probabilities.", 15, 'hard'),
            generateQuestion("[Interleaved] Flip a coin 3 times. Probability of getting exactly 3 Heads?", ["1/8", "1/2", "3/8", "1/4"], 0, "**Lesson**: Independent events: $0.5 \\times 0.5 \\times 0.5 = 0.125$ or $1/8$.", 20, 'expert')
        ]
    }
};

export { g1Topics, g1Questions };
