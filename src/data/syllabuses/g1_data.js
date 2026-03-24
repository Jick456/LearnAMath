import { generateQuestion } from './utils';

const g1Topics = [
    // --- SECONDARY 1 G1 ---
    {
        id: 'g1-s1-numbers', level: 'Sec 1 (G1)', title: 'Numbers and Operations',
        description: 'Prime numbers, HCF, LCM, and integers.', color: '#34d399', emoji: '🔢',
        location: 'The Prime Forest', storyline: 'The trees here are only divisible by themselves and one. Find the prime path!', themeClass: 'theme-forest',
        storySegments: [
            { text: "Welcome to the Prime Forest, Scholar! 🌲", character: "Companion" },
            { text: "The trees here have a strange property... they are only divisible by 1 and themselves.", character: "Companion" },
            { text: "We need to find the Prime Path to reach the Axiom Core. Are you ready?", character: "Companion" }
        ],
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
        storySegments: [
            { text: "Stop! The bridge ahead is unstable. 🌉", character: "Companion" },
            { text: "It only stays balanced if the weights on both sides are in perfect proportion.", character: "Companion" },
            { text: "Let's use our ratio magic to safely reach the other side!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The air is thin here at the Percentile Peaks. 🌋", character: "Companion" },
            { text: "We've already climbed 75% of the way, but the last 25% is the steepest!", character: "Companion" },
            { text: "Focus your energy on parts of a whole to reach the summit.", character: "Companion" }
        ],
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
        storySegments: [
            { text: "We're descending into the Algebra Abyss. Watch your step! 🕳️", character: "Companion" },
            { text: "The numbers have been replaced by mysterious letters ($x$, $y$, $z$).", character: "Companion" },
            { text: "We need to solve these variables to find our way back to the surface.", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The views from Coordinate Canyon are breathtaking, aren't they? 🏞️", character: "Companion" },
            { text: "But don't get distracted! One wrong step and we'll be lost in the grid.", character: "Companion" },
            { text: "Follow the $(x, y)$ coordinates to plot our escape path!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The Great Equation Engine is stuttering! ⚙️", character: "Companion" },
            { text: "It only runs when both sides of every equation are in perfect balance.", character: "Companion" },
            { text: "Quick! Balance the variables to restore power to the island!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "Welcome to the Geometry Garden. Even the petals here follow geometric laws! 🌸", character: "Companion" },
            { text: "Look closely at the angles and shapes—they hold the key to the next Axiom.", character: "Companion" },
            { text: "Let's measure our way through this floral labyrinth!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "Whoa! I see two... no, four of myself! ❄️", character: "Companion" },
            { text: "The Mirror Maze reflects everything across lines of symmetry.", character: "Companion" },
            { text: "We need to find the axis of reflection to navigate this icy trap!", character: "Companion" }
        ],
        crashCourse: `**Symmetry: Nature's Mirror**
- **Line Symmetry**: If you can fold a shape perfectly in half so both sides match, that fold is the line of symmetry. A square has 4!
- **Rotational Symmetry**: Imagine pinning a shape to a board and spinning it. If it looks identical before making a full $360^\\circ$ spin, it has rotational symmetry.
- The **order** of rotational symmetry is how many times it matches itself in one spin. A propeller with 3 blades has an order of 3.`
    },
    {
        id: 'g1-s1-mensuration', level: 'Sec 1 (G1)', title: 'Mensuration (Basic)',
        description: 'Perimeter, area, volume of prisms.', color: '#fb923c', emoji: '📦',
        location: 'The Measurement Mine', storyline: 'Calculate the volume of the gems to carry them out!', themeClass: 'theme-volcano',
        storySegments: [
            { text: "We've struck gold in the Measurement Mine! 💎", character: "Companion" },
            { text: "To carry these gems out, we need to know exactly how much space they take up.", character: "Companion" },
            { text: "Calculate the volume carefully, or your backpack will burst!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "This dungeon is a mess of scattered scrolls and records. 📜", character: "Companion" },
            { text: "To unlock the exit, we must organize the data and find its true meaning.", character: "Companion" },
            { text: "Use your statistical magic to find the center of this chaos!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The Proportion Path is warping our sense of scale! 🎢", character: "Companion" },
            { text: "The further we walk, the faster things seem to change.", character: "Companion" },
            { text: "Master the direct and inverse laws to keep your size steady!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "Gentlemen, start your engines! We're at the Speed Track. 🏎️", character: "Companion" },
            { text: "To win this race, you need to master the relationship between distance and time.", character: "Companion" },
            { text: "Calculate your velocity and leave the Irrational in the dust!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The Factor Factory is where Axioms are processed. ⚙️", character: "Companion" },
            { text: "Raw expressions are expanded and then factorized into their simplest forms.", character: "Companion" },
            { text: "Keep the machinery running by finding common factors!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The path ahead is no longer straight. Welcome to the Curve Cave! 🕳️", character: "Companion" },
            { text: "The walls here follow quadratic paths—some smile, others frown.", character: "Companion" },
            { text: "Understand the curvature to navigate your way out!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "We're trapped in the Linked Labyrinth! 🔗", character: "Companion" },
            { text: "Every door has two locks, and their solutions are tied together.", character: "Companion" },
            { text: "Find the single point where both equations meet to escape!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "Don't walk all the way around! Take the shortcut across Hypotenuse Heights. 📐", character: "Companion" },
            { text: "The ancient spirit Pythagoras left square markers on the ground.", character: "Companion" },
            { text: "Sum the squares of the legs to find the shortest path across the cliff!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "We've struck gold in the Measurement Mine! 💎", character: "Companion" },
            { text: "To carry these gems out, we need to know exactly how much space they take up.", character: "Companion" },
            { text: "Calculate the volume carefully, or your backpack will burst!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "We're at the Stats Station, the central hub for all island data. 📊", character: "Companion" },
            { text: "The path averages out here. We need to find the mean, median, and mode to unlock the tracks.", character: "Companion" },
            { text: "Don't let the outliers pull you off course!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "Welcome to the Micro/Macro Lab. Science meets Sorcery here! 🔬", character: "Companion" },
            { text: "We're dealing with powers of 10. Numbers so large they fill galaxies, and so small they hide in atoms.", character: "Companion" },
            { text: "Harness the laws of indices to master both ends of the spectrum!", character: "Companion" }
        ],
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
        storySegments: [
            { text: "The map in the Cartographer's Cabin is alive! 🗺️", character: "Companion" },
            { text: "It shrinks and grows depending on the scale you apply.", character: "Companion" },
            { text: "Calculate the real-world distance to find the hidden treasure of the Axiom!", character: "Companion" }
        ],
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
    'g1-s1-numbers': {
        learning: [
            // Easy (1-10)
            generateQuestion("Which of these is a whole number (integer)?", ["-5", "2.5", "1/2", "0.75"], 0, "Integers are whole numbers. They can be negative, positive, or zero.", 5, 'easy'),
            generateQuestion("Calculate: $12 + (-5)$.", ["7", "17", "-7", "0"], 0, "$12 - 5 = 7$.", 5, 'easy'),
            generateQuestion("Which is the smallest prime number?", ["2", "1", "3", "0"], 0, "1 is not prime. 2 is the smallest.", 5, 'easy'),
            generateQuestion("Evaluate: $(-3) \times (-4)$.", ["12", "-12", "7", "-7"], 0, "Negative times negative is positive.", 5, 'easy'),
            generateQuestion("What is the opposite of -10?", ["10", "-10", "0", "1/10"], 0, "The additive inverse of -10 is 10.", 5, 'easy'),
            generateQuestion("Find the value of $15 - 20$.", ["-5", "5", "-35", "35"], 0, "Subtracting a larger number results in a negative.", 5, 'easy'),
            generateQuestion("Which of these is NOT an integer?", ["0.5", "-1", "0", "100"], 0, "Integers do not have decimal parts.", 5, 'easy'),
            generateQuestion("Evaluate: $0 \times (-99)$.", ["0", "-99", "99", "1"], 0, "Zero multiplied by any number is zero.", 5, 'easy'),
            generateQuestion("What is $|-8|$ (absolute value)?", ["8", "-8", "0", "1"], 0, "Absolute value is distance from zero (always positive).", 5, 'easy'),
            generateQuestion("Calculate: $-3 + (-2)$.", ["-5", "5", "-1", "1"], 0, "Moving left twice on the number line.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find the HCF of 12 and 18.", ["6", "2", "3", "36"], 0, "Factors of 12: 1, 2, 3, 4, 6, 12. Factors of 18: 1, 2, 3, 6, 9, 18.", 10, 'medium'),
            generateQuestion("Find the LCM of 4 and 6.", ["12", "24", "2", "6"], 0, "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12...", 10, 'medium'),
            generateQuestion("Evaluate: $20 \div (-4) + 6$.", ["1", "11", "-1", "5"], 0, "BODMAS: $-5 + 6 = 1$.", 10, 'medium'),
            generateQuestion("Calculate: $(-2)^3$.", ["-8", "8", "-6", "6"], 0, "$(-2) \times (-2) \times (-2) = -8$.", 10, 'medium'),
            generateQuestion("Round 0.0456 to 2 sig figs.", ["0.046", "0.05", "0.045", "0.04"], 0, "Start at 4, second is 5. 6 rounds it up.", 10, 'medium'),
            generateQuestion("List the first three prime numbers.", ["2, 3, 5", "1, 2, 3", "3, 5, 7", "2, 4, 6"], 0, "1 is not prime, 4 and 6 are composite.", 10, 'medium'),
            generateQuestion("Find HCF of 20 and 30.", ["10", "5", "2", "60"], 0, "Largest common factor is 10.", 10, 'medium'),
            generateQuestion("Evaluate: $2 \times (-3) \times (-4)$.", ["24", "-24", "12", "-12"], 0, "$2 \times 12 = 24$.", 10, 'medium'),
            generateQuestion("Evaluate: $(10 - 15)^2$.", ["25", "-25", "5", "-5"], 0, "$(-5)^2 = 25$.", 10, 'medium'),
            generateQuestion("What is the LCM of 5 and 7?", ["35", "12", "5", "7"], 0, "Since both are prime, LCM is their product.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find prime factorisation of 90.", ["$2 \times 3^2 \times 5$", "$2^2 \times 3 \times 5$", "$9 \times 10$", "$3^2 \times 10$"], 0, "$90 = 2 \times 45 = 2 \times 9 \times 5 = 2 \times 3^2 \times 5$.", 15, 'hard'),
            generateQuestion("Is 91 a prime number?", ["No (7 x 13)", "Yes", "No (3 x 31)", "No (13 x 6)"], 0, "$91 = 7 \times 13$. Common trap!", 15, 'hard'),
            generateQuestion("HCF of 24, 36, 48 is:", ["12", "6", "24", "4"], 0, "12 divides all three perfectly.", 15, 'hard'),
            generateQuestion("Evaluate $x^2 - y$ if $x=-3, y=-5$.", ["14", "4", "1", "11"], 0, "$(-3)^2 - (-5) = 9 + 5 = 14$.", 15, 'hard'),
            generateQuestion("LCM of 15 and 20 is:", ["60", "300", "5", "100"], 0, "60 is the smallest shared multiple.", 15, 'hard'),
            generateQuestion("Find the smallest number that is divisible by 2, 3, and 5.", ["30", "15", "10", "60"], 0, "LCM(2,3,5) = 30.", 15, 'hard'),
            generateQuestion("Prime factorisation of 210?", ["$2 \times 3 \times 5 \times 7$", "$2 \times 5 \times 21$", "$3 \times 7 \times 10$", "$2 \times 3 \times 35$"], 0, "$210 = 10 \times 21 = (2 \times 5) \times (3 \times 7)$.", 15, 'hard'),
            generateQuestion("Round 199.99 to 3 significant figures.", ["200", "199", "200.0", "199.9"], 0, "Start at 1, 9, 9. Next is 9, so round up to 200.", 15, 'hard'),
            generateQuestion("Evaluate: $\sqrt{(-6)^2 + (-8)^2}$.", ["10", "-10", "14", "100"], 0, "$\sqrt{36 + 64} = \sqrt{100} = 10$.", 15, 'hard'),
            generateQuestion("Find HCF of 108 and 144.", ["36", "12", "18", "72"], 0, "$108 = 3 \times 36$, $144 = 4 \times 36$.", 15, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Calculate: $-8 - 4$.", ["-12", "-4", "12", "4"], 0, "Sinking 8 then 4 more: -12.", 5, 'easy'),
            generateQuestion("Which is prime?", ["19", "9", "1", "21"], 0, "19 has no factors besides 1 and 19.", 5, 'easy'),
            generateQuestion("Evaluate: $0 \times (-15)$.", ["0", "-15", "15", "1"], 0, "Anything times zero is zero.", 5, 'easy'),
            generateQuestion("Square root of 81?", ["9", "7", "8", "81"], 0, "$9 \times 9 = 81$.", 5, 'easy'),
            generateQuestion("Absolute value of -7?", ["7", "-7", "0", "1"], 0, "Distance from 0 is always positive.", 5, 'easy'),
            generateQuestion("Calculate: $(-5) + 3$.", ["-2", "2", "8", "-8"], 0, "Move right from -5.", 5, 'easy'),
            generateQuestion("Which is NOT a factor of 12?", ["5", "3", "4", "6"], 0, "5 does not divide 12 evenly.", 5, 'easy'),
            generateQuestion("Evaluate: $15 \div (-1)$.", ["-15", "15", "0", "14"], 0, "Dividing by -1 changes the sign.", 5, 'easy'),
            generateQuestion("Subtract -3 from 10.", ["13", "7", "0", "-13"], 0, "$10 - (-3) = 10 + 3 = 13$.", 5, 'easy'),
            generateQuestion("Smallest even prime number?", ["2", "4", "0", "6"], 0, "2 is the only even prime.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("HCF of 15 and 35?", ["5", "3", "7", "105"], 0, "Both end in 5, HCF is 5.", 10, 'medium'),
            generateQuestion("LCM of 8 and 10?", ["40", "80", "2", "20"], 0, "Multiples: 10, 20, 30, 40... 8 fits into 40.", 10, 'medium'),
            generateQuestion("Evaluate: $10 - 2 \times 6$.", ["-2", "48", "8", "-8"], 0, "Multiply first: 12. $10 - 12 = -2$.", 10, 'medium'),
            generateQuestion("Calculate: $5^2 - 4^2$.", ["9", "1", "41", "3"], 0, "$25 - 16 = 9$.", 10, 'medium'),
            generateQuestion("Simplify: $15 \div (-3) \times (-2)$.", ["10", "-10", "2.5", "-2.5"], 0, "$-5 \times -2 = 10$.", 10, 'medium'),
            generateQuestion("Round 1234 to 2 significant figures.", ["1200", "1230", "1300", "1000"], 0, "Keep 1 and 2, check 3. Round down.", 10, 'medium'),
            generateQuestion("Find HCF of 14 and 49.", ["7", "14", "2", "1"], 0, "7 divides both.", 10, 'medium'),
            generateQuestion("Evaluate: $(-1)^{50}$.", ["1", "-1", "50", "0"], 0, "Even power of -1 is positive 1.", 10, 'medium'),
            generateQuestion("What is LCM of 9 and 12?", ["36", "108", "3", "24"], 0, "Smallest shared multiple is 36.", 10, 'medium'),
            generateQuestion("Evaluate: $2^4$.", ["16", "8", "32", "12"], 0, "$2 \times 2 \times 2 \times 2 = 16$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find exact HCF of 56 and 84.", ["28", "14", "7", "4"], 0, "$56 = 2 \times 28$, $84 = 3 \times 28$.", 15, 'hard'),
            generateQuestion("LCM of 12, 16, 24?", ["48", "96", "192", "480"], 0, "48 is the smallest common multiple.", 15, 'hard'),
            generateQuestion("Prime factorisation of 120?", ["$2^3 \times 3 \times 5$", "$2^2 \times 3^2 \times 5$", "$8 \times 15$", "$2 \times 60$"], 0, "$120 = 8 \times 15 = 2^3 \times 3 \times 5$.", 15, 'hard'),
            generateQuestion("Evaluate: $\sqrt{100 - 64}$.", ["6", "36", "10", "4"], 0, "$\sqrt{36} = 6$.", 15, 'hard'),
            generateQuestion("Value of $x$ if $2x + 15 = 5$?", ["-5", "5", "10", "-10"], 0, "$2x = -10 \Rightarrow x = -5$.", 15, 'hard'),
            generateQuestion("Find HCF of 72 and 120.", ["24", "12", "6", "48"], 0, "$72 = 3 \times 24, 120 = 5 \times 24$.", 15, 'hard'),
            generateQuestion("LCM of 20, 25, 30?", ["300", "150", "600", "100"], 0, "Smallest multiple is 300.", 15, 'hard'),
            generateQuestion("Evaluate: $(-2)^3 - (-2)^2$.", ["-12", "-4", "4", "12"], 0, "$-8 - 4 = -12$.", 15, 'hard'),
            generateQuestion("State the number of significant figures in 0.0030.", ["2", "1", "4", "5"], 0, "The trailing zero after the decimal is significant.", 15, 'hard'),
            generateQuestion("Evaluate: $15 - 3 \times (4 - 7)$.", ["24", "-12", "-6", "6"], 0, "$15 - 3(-3) = 15 + 9 = 24$.", 15, 'hard')
        ]
    },
    'g1-s1-ratio': {
        learning: [
            // Easy (1-10)
            generateQuestion("Simplify the ratio $15:20$.", ["3:4", "4:3", "5:4", "1:2"], 0, "Divide both by 5.", 5, 'easy'),
            generateQuestion("Express 50 cents as a ratio of 2 dollars.", ["1:4", "1:2", "50:2", "100:4"], 0, "Convert to same units: $50:200 = 1:4$.", 5, 'easy'),
            generateQuestion("If $A:B = 2:3$ and $B=12$, find $A$.", ["8", "6", "18", "10"], 0, "$3$ parts $= 12 \Rightarrow 1$ part $= 4$. So $A = 2 \times 4 = 8$.", 5, 'easy'),
            generateQuestion("Simplify $60:80:100$.", ["3:4:5", "6:8:10", "1:2:3", "12:16:20"], 0, "Divide by 20.", 5, 'easy'),
            generateQuestion("Ratio of 3 days to 1 week?", ["3:7", "3:1", "1:3", "7:3"], 0, "Unify units: 1 week = 7 days.", 5, 'easy'),
            generateQuestion("Simplify $40:60$.", ["2:3", "4:6", "1:2", "3:2"], 0, "Divide by 20.", 5, 'easy'),
            generateQuestion("Ratio of $10\text{cm}$ to $1\text{m}$?", ["1:10", "10:1", "1:100", "1:1"], 0, "$10:100 = 1:10$.", 5, 'easy'),
            generateQuestion("If $x:y = 1:5$ and $x=4$, find $y$.", ["20", "4", "5", "9"], 0, "$4 \times 5 = 20$.", 5, 'easy'),
            generateQuestion("Simplify $1:2:3$ (scaled by 5).", ["5:10:15", "1:2:3", "2:4:6", "10:20:30"], 0, "All terms multiplied by 5.", 5, 'easy'),
            generateQuestion("Which is equivalent to $2:7$?", ["4:14", "7:2", "1:3.5", "2:14"], 0, "Multiply both by 2.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Share $$100$ in ratio 2:3. Smaller share?", ["$40", "$60", "$20", "$50"], 0, "5 parts = 100, 1 part = 20. $2 \times 20 = 40$.", 10, 'medium'),
            generateQuestion("Ratio of boys to girls is 4:5. Total students is 27. Boys?", ["12", "15", "9", "18"], 0, "9 parts = 27, 1 part = 3. $4 \times 3 = 12$.", 10, 'medium'),
            generateQuestion("Simplify $1.5 : 2.5$.", ["3:5", "15:25", "1:2", "5:3"], 0, "Multiply by 10, then divide by 5.", 10, 'medium'),
            generateQuestion("If $x:y = 3:4$ and $y:z = 4:5$, what is $x:z$?", ["3:5", "3:4", "4:5", "1:1"], 0, "Since $y$ is the same (4), we combine directly.", 10, 'medium'),
            generateQuestion("Convert $500\text{g}$ to $2\text{kg}$ as a ratio.", ["1:4", "500:2", "1:2", "250:1"], 0, "$500:2000 = 1:4$.", 10, 'medium'),
            generateQuestion("Scale map is $1:500$. Real distance for $2\text{cm}$?", ["10m", "100m", "1m", "500m"], 0, "$2 \times 500 = 1000\text{cm} = 10\text{m}$.", 10, 'medium'),
            generateQuestion("Divide 60 into ratio 1:5.", ["10 and 50", "20 and 40", "12 and 48", "5 and 55"], 0, "6 parts = 60, 1 part = 10.", 10, 'medium'),
            generateQuestion("If $A:B=3:4$ and $A=12$, find $B$.", ["16", "9", "15", "20"], 0, "1 part = 4, so $B = 4 \times 4 = 16$.", 10, 'medium'),
            generateQuestion("A car travels 150km on 10L fuel. Ratio km/L?", ["15:1", "10:150", "1:15", "150:1"], 0, "$150/10 = 15$.", 10, 'medium'),
            generateQuestion("Ratio of angles in triangle is 1:2:3. Largest angle?", ["90", "60", "30", "120"], 0, "6 parts = 180, 1 part = 30. $3 \times 30 = 90$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Scale $1:20,000$. Real distance if map is $5\text{cm}$?", ["1km", "10km", "0.5km", "5km"], 0, "$5 \times 20000 = 100,000\text{cm} = 1\text{km}$.", 15, 'hard'),
            generateQuestion("Share $$120$ in ratio 1:2:3. Largest share?", ["$60", "$40", "$20", "$30"], 0, "6 parts = 120, 1 part = 20. $3 \times 20 = 60$.", 15, 'hard'),
            generateQuestion("Map area $4\text{cm}^2$. Scale $1:100$. Real area in $m^2$?", ["4", "0.04", "40", "400"], 0, "Area scale is $1:10,000$. $4 \times 10,000 = 40,000\text{cm}^2 = 4\text{m}^2$.", 15, 'hard'),
            generateQuestion("Ratio $A:B:C$ is $3:5:2$. If $B$ is 15, find $A+C$.", ["15", "10", "25", "30"], 0, "$5$ parts $= 15 \Rightarrow 1$ part $= 3$. $A+C = 5$ parts $= 15$.", 15, 'hard'),
            generateQuestion("Simplify $\frac{1}{4} : \frac{1}{6}$.", ["3:2", "2:3", "1:2", "4:6"], 0, "Multiply by 12 (LCM).", 15, 'hard'),
            generateQuestion("Ratio of $x$ to $y$ is $2:3$. If $x$ increases by 50%, new ratio?", ["1:1", "3:3", "3:2", "4:3"], 0, "$x$ becomes 3. New ratio $3:3 = 1:1$.", 15, 'hard'),
            generateQuestion("Area of a circle ratio 1:4. Radius ratio?", ["1:2", "1:4", "1:16", "1:8"], 0, "Radius is square root of area ratio.", 15, 'hard'),
            generateQuestion("Scale $1:n$. Map $2\text{cm}$ is real $1\text{km}$. Find $n$.", ["50,000", "500", "5,000", "500,000"], 0, "$2:100,000 = 1:50,000$.", 15, 'hard'),
            generateQuestion("Blend of Tea A and B is 3:7. If you have 500g blend, Tea A?", ["150g", "350g", "100g", "200g"], 0, "10 parts = 500, 1 part = 50. $3 \times 50 = 150$.", 15, 'hard'),
            generateQuestion("Volume ratio of cubes is 1:27. Side ratio?", ["1:3", "1:9", "1:27", "1:2"], 0, "Side ratio is cube root of volume ratio.", 15, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Simplify $12:18$.", ["2:3", "3:2", "6:9", "4:6"], 0, "Divide by 6.", 5, 'easy'),
            generateQuestion("If $5:x = 1:3$, find $x$.", ["15", "5", "8", "3"], 0, "Multiply by 3.", 5, 'easy'),
            generateQuestion("Ratio of 200m to 1km?", ["1:5", "1:2", "200:1", "1:10"], 0, "200:1000 = 1:5.", 5, 'easy'),
            generateQuestion("Simplify $8:12:16$.", ["2:3:4", "1:2:3", "4:6:8", "3:4:5"], 0, "Divide by 4.", 5, 'easy'),
            generateQuestion("Ratio of 6 months to 2 years?", ["1:4", "6:2", "3:1", "1:3"], 0, "6:24 = 1:4.", 5, 'easy'),
            generateQuestion("Which is the larger ratio: $2:3$ or $3:5$?", ["2:3", "3:5", "Equal", "None"], 0, "$2/3 \approx 0.66, 3/5 = 0.6$.", 5, 'easy'),
            generateQuestion("Find $n$ if $n:10 = 1:2$.", ["5", "10", "20", "2"], 0, "Half of 10 is 5.", 5, 'easy'),
            generateQuestion("Simplify $100:25$.", ["4:1", "1:4", "2:1", "10:2"], 0, "Divide by 25.", 5, 'easy'),
            generateQuestion("Ratio of a square's side to perimeter?", ["1:4", "4:1", "1:1", "1:2"], 0, "Perimeter is 4x side.", 5, 'easy'),
            generateQuestion("If $x:y = 1:1$, then:", ["x = y", "x > y", "x < y", "x = 0"], 0, "Equal parts.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Divide 40 into ratio 3:5. Larger part?", ["25", "15", "20", "30"], 0, "8 parts = 40, 1 part = 5. $5 \times 5 = 25$.", 10, 'medium'),
            generateQuestion("Ratio of flour to sugar is 5:2. Flour is 500g. Sugar?", ["200g", "100g", "250g", "400g"], 0, "5 parts = 500, 1 part = 100. $2 \times 100 = 200$.", 10, 'medium'),
            generateQuestion("Simplify $2.4 : 3.6$.", ["2:3", "24:36", "12:18", "4:6"], 0, "Divide by 1.2.", 10, 'medium'),
            generateQuestion("If $A:B = 1:2$ and $B:C = 2:3$, find $A:C$.", ["1:3", "1:2", "3:1", "2:3"], 0, "Combine directly.", 10, 'medium'),
            generateQuestion("Ratio of $75\text{cm}$ to $1.5\text{m}$.", ["1:2", "1:5", "75:1.5", "1:20"], 0, "75:150 = 1:2.", 10, 'medium'),
            generateQuestion("Scale $1:50,000$. $2\text{cm}$ on map represents $(\text{km})$:", ["1", "5", "0.5", "10"], 0, "$2 \times 50000 = 100,000\text{cm} = 1\text{km}$.", 10, 'medium'),
            generateQuestion("Ratio of red to blue pens is 3:7. Total pens is 50. Red?", ["15", "35", "10", "20"], 0, "10 parts = 50, 1 part = 5. $3 \times 5 = 15$.", 10, 'medium'),
            generateQuestion("Find $x$ and $y$ if $x+y=20$ and $x:y=1:4$.", ["4, 16", "5, 15", "2, 8", "10, 10"], 0, "5 parts = 20, 1 part = 4.", 10, 'medium'),
            generateQuestion("Evaluate $a/b$ if $a:b = 15:3$.", ["5", "3", "0.2", "15"], 0, "$15/3 = 5$.", 10, 'medium'),
            generateQuestion("Ratio of $5\text{mins}$ to $1\text{hr}$.", ["1:12", "5:1", "1:20", "1:60"], 0, "5:60 = 1:12.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Map scale $1:250,000$. $4\text{cm}$ on map in km?", ["10km", "1km", "100km", "40km"], 0, "$4 \times 250,000 = 1,000,000\text{cm} = 10\text{km}$.", 15, 'hard'),
            generateQuestion("Ratio $x:y:z = 2:5:3$. If $y-x=15$, find $z$.", ["15", "10", "25", "30"], 0, "$3$ parts $= 15 \Rightarrow 1$ part $= 5$. $z = 3 \times 5 = 15$.", 15, 'hard'),
            generateQuestion("Area ratio $1:9$. Length ratio?", ["1:3", "1:9", "1:81", "1:2"], 0, "Length ratio is square root of area ratio.", 15, 'hard'),
            generateQuestion("Ratio of $45\text{mins}$ to $1.5\text{hrs}$.", ["1:2", "1:3", "2:3", "45:1.5"], 0, "45:90 = 1:2.", 15, 'hard'),
            generateQuestion("Scale $1:200$. Real length if map is $5\text{mm}$?", ["1m", "10m", "0.1m", "100m"], 0, "$5 \times 200 = 1000\text{mm} = 1\text{m}$.", 15, 'hard'),
            generateQuestion("Ratio of Area of Circle A to B is 1:2. Radius ratio?", ["$1:\sqrt{2}$", "1:2", "1:4", "2:1"], 0, "$\sqrt{1}:\sqrt{2}$.", 15, 'hard'),
            generateQuestion("Split 180 into 2:3:4. Difference between largest and smallest?", ["40", "20", "60", "80"], 0, "9 parts = 180, 1 part = 20. $4-2=2$ parts $= 40$.", 15, 'hard'),
            generateQuestion("If $x/y = 2/3$ and $y/z = 6/5$, find $x:z$.", ["4:5", "2:5", "12:15", "1:1"], 0, "Scale $x:y = 4:6$. So $x:y:z = 4:6:5$. $x:z = 4:5$.", 15, 'hard'),
            generateQuestion("Scale $1:5,000,000$ (Atlas). $1\text{cm}$ represents $(\text{km})$:", ["50", "5", "500", "5000"], 0, "$5,000,000/100,000 = 50$.", 15, 'hard'),
            generateQuestion("A map has area scale $1:40,000$. Length scale?", ["1:200", "1:20", "1:400", "1:4000"], 0, "Square root of 40,000 is 200.", 15, 'hard')
        ]
    },
    'g1-s1-percentage': {
        learning: [
            // Easy (1-10)
            generateQuestion("Express $1/4$ as a percentage.", ["25%", "20%", "40%", "50%"], 0, "$1/4 \times 100 = 25$.", 5, 'easy'),
            generateQuestion("Find $10\\%$ of $60$.", ["6", "10", "12", "6.6"], 0, "$0.1 \times 60 = 6$.", 5, 'easy'),
            generateQuestion("What is $0.5$ as a percentage?", ["50%", "5%", "0.5%", "500%"], 0, "$0.5 \times 100 = 50$.", 5, 'easy'),
            generateQuestion("Express 15 out of 20 as a percentage.", ["75%", "15%", "20%", "60%"], 0, "$15/20 = 3/4 = 75$.", 5, 'easy'),
            generateQuestion("What is $100\\%$ of 45?", ["45", "100", "0", "1"], 0, "100% means the whole thing.", 5, 'easy'),
            generateQuestion("What is $1\\%$ of $200$?", ["2", "20", "0.2", "1"], 0, "$200 / 100 = 2$.", 5, 'easy'),
            generateQuestion("Express $3/10$ as a percentage.", ["30%", "3%", "300%", "0.3%"], 0, "$3/10 \times 100 = 30$.", 5, 'easy'),
            generateQuestion("Find $50\\%$ of 80.", ["40", "20", "10", "50"], 0, "Half of 80 is 40.", 5, 'easy'),
            generateQuestion("What is $0.75$ as a percentage?", ["75%", "7.5%", "750%", "0.75%"], 0, "$0.75 \times 100 = 75$.", 5, 'easy'),
            generateQuestion("Express 1 out of 5 as a percentage.", ["20%", "10%", "5%", "25%"], 0, "$1/5 = 20/100 = 20$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find $20\\%$ of $150$.", ["30", "20", "45", "15"], 0, "$0.2 \times 150 = 30$.", 10, 'medium'),
            generateQuestion("Convert $3/8$ to a percentage.", ["37.5%", "3.8%", "30%", "40%"], 0, "$0.375 \times 100 = 37.5$.", 10, 'medium'),
            generateQuestion("A $$50$ item is discounted by $10\\%$. Sale price?", ["$45", "$40", "$5", "$55"], 0, "$50 - 5 = 45$.", 10, 'medium'),
            generateQuestion("12 out of 40 is what percentage?", ["30%", "12%", "40%", "25%"], 0, "$12/40 = 3/10 = 30$.", 10, 'medium'),
            generateQuestion("Find $150\\%$ of 20.", ["30", "15", "40", "20"], 0, "$1.5 \times 20 = 30$.", 10, 'medium'),
            generateQuestion("If price increases from $$20$ to $$25$, find % increase.", ["25%", "5%", "20%", "50%"], 0, "$5/20 \times 100 = 25$.", 10, 'medium'),
            generateQuestion("Find $5\\%$ of $400$.", ["20", "40", "5", "10"], 0, "$0.05 \times 400 = 20$.", 10, 'medium'),
            generateQuestion("Express 7 out of 25 as a percentage.", ["28%", "14%", "7%", "30%"], 0, "$7/25 = 28/100 = 28$.", 10, 'medium'),
            generateQuestion("What is $12.5\\%$ of 80?", ["10", "8", "12", "15"], 0, "$0.125 \times 80 = 10$.", 10, 'medium'),
            generateQuestion("Convert $0.04$ to a percentage.", ["4%", "40%", "0.4%", "0.04%"], 0, "$0.04 \times 100 = 4$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Original price if $20\\%$ discount makes it $$80$?", ["$100", "$96", "$64", "$120"], 0, "80% of original is 80. Original = $80/0.8 = 100$.", 15, 'hard'),
            generateQuestion("Percentage increase from 40 to 50?", ["25%", "10%", "20%", "15%"], 0, "$10/40 \times 100 = 25$.", 15, 'hard'),
            generateQuestion("Find $15\\%$ of $200$ then add $7\\%$ GST.", ["$32.10", "$30", "$37", "$34.20"], 0, "$30 \times 1.07 = 32.1$.", 15, 'hard'),
            generateQuestion("A number increases by $50\\%$ then decreases by $50\\%$. New number?", ["75% of original", "100% of original", "50% of original", "125% of original"], 0, "$1.5 \times 0.5 = 0.75$.", 15, 'hard'),
            generateQuestion("If $x\\%$ of 80 is 20, find $x$.", ["25", "20", "40", "15"], 0, "$20/80 = 1/4 = 25$.", 15, 'hard'),
            generateQuestion("Compound Interest on $$1000$ at $5\\%$ for 2 years?", ["$102.50", "$100", "$110", "$50$"], 0, "$1000(1.05)^2 - 1000 = 1102.5 - 1000 = 102.5$.", 15, 'hard'),
            generateQuestion("A car loses $20\\%$ value each year. Value after 2 years if original is $$10,000$?", ["$6400", "$6000", "$8000", "$7200$"], 0, "$10000 \times 0.8^2 = 6400$.", 15, 'hard'),
            generateQuestion("If $25\\%$ of $A$ is $40\\%$ of $B$, find ratio $A:B$.", ["8:5", "5:8", "1:1", "10:4"], 0, "$0.25A = 0.4B \Rightarrow A/B = 0.4/0.25 = 1.6 = 8/5$.", 15, 'hard'),
            generateQuestion("Profit % if cost is $$80$ and selling price is $$100$?", ["25%", "20%", "10%", "15%"], 0, "$20/80 = 25$.", 15, 'hard'),
            generateQuestion("Final price of $$200$ after $10\\%$ increase then $10\\%$ decrease?", ["$198", "$200", "$180", "$210"], 0, "$200 \times 1.1 \times 0.9 = 220 \times 0.9 = 198$.", 15, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Express $3/4$ as a percentage.", ["75%", "34%", "43%", "30%"], 0, "$3/4 \times 100 = 75$.", 5, 'easy'),
            generateQuestion("Find $50\\%$ of $22$.", ["11", "22", "5", "10"], 0, "Half of 22 is 11.", 5, 'easy'),
            generateQuestion("What is $0.07$ as a percentage?", ["7%", "70%", "0.7%", "0.007%"], 0, "Move decimal twice: 7%.", 5, 'easy'),
            generateQuestion("Express 2 out of 10 as a percentage.", ["20%", "2%", "10%", "50%"], 0, "2/10 = 20%.", 5, 'easy'),
            generateQuestion("Find $10\\%$ of $100$.", ["10", "1", "100", "0.1"], 0, "10% of 100 is 10.", 5, 'easy'),
            generateQuestion("Express $1/5$ as a percentage.", ["20%", "5%", "15%", "25%"], 0, "1/5 = 20%.", 5, 'easy'),
            generateQuestion("What is $1/2$ as a percentage?", ["50%", "100%", "25%", "2%"], 0, "50%.", 5, 'easy'),
            generateQuestion("Calculate $25\\%$ of 40.", ["10", "20", "5", "2.5"], 0, "Quarter of 40 is 10.", 5, 'easy'),
            generateQuestion("Express $0.9$ as a percentage.", ["90%", "9%", "0.9%", "900%"], 0, "90%.", 5, 'easy'),
            generateQuestion("What is $100\\%$ of 7?", ["7", "100", "0.7", "70"], 0, "Whole thing.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find $15\\%$ of $80$.", ["12", "15", "8", "16"], 0, "$0.15 \times 80 = 12$.", 10, 'medium'),
            generateQuestion("Sale price of $$120$ with $25\\%$ off?", ["$90", "$30", "$95", "$100"], 0, "$120 \times 0.75 = 90$.", 10, 'medium'),
            generateQuestion("Convert $0.125$ to a percentage.", ["12.5%", "1.25%", "125%", "0.125%"], 0, "12.5%.", 10, 'medium'),
            generateQuestion("18 out of 30 is what percentage?", ["60%", "18%", "30%", "50%"], 0, "$18/30 = 6/10 = 60$.", 10, 'medium'),
            generateQuestion("Find $120\\%$ of 50.", ["60", "70", "50", "120"], 0, "$1.2 \times 50 = 60$.", 10, 'medium'),
            generateQuestion("Find $30\\%$ of $200$.", ["60", "30", "20", "15"], 0, "$0.3 \times 200 = 60$.", 10, 'medium'),
            generateQuestion("Convert $7/20$ to a percentage.", ["35%", "7%", "20%", "14%"], 0, "$7/20 \times 100 = 35$.", 10, 'medium'),
            generateQuestion("Discount of $10\\%$ on $$150$ is:", ["$15", "$10", "$135", "$140"], 0, "$150 \times 0.1 = 15$.", 10, 'medium'),
            generateQuestion("Percentage decrease from 50 to 45?", ["10%", "5%", "15%", "20%"], 0, "$5/50 = 10$.", 10, 'medium'),
            generateQuestion("What % of 60 is 15?", ["25%", "15%", "40%", "20%"], 0, "$15/60 = 1/4 = 25$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Price after $10\\%$ increase is $$110$. Original?", ["$100", "$99", "$121", "$111"], 0, "110% of x is 110. x=100.", 15, 'hard'),
            generateQuestion("Percentage decrease from 80 to 60?", ["25%", "20%", "15%", "33.3%"], 0, "$20/80 = 25$.", 15, 'hard'),
            generateQuestion("Find $30\\%$ of 40 then add $50\\%$.", ["18", "12", "20", "15"], 0, "$12 + 6 = 18$.", 15, 'hard'),
            generateQuestion("Simple interest on $$500$ at $4\\%$ for 2 years?", ["$40", "$20", "$540", "$520"], 0, "$500 \times 0.04 \times 2 = 40$.", 15, 'hard'),
            generateQuestion("If $20\\%$ of $y$ is 30, find $y$.", ["150", "60", "300", "120"], 0, "$30/0.2 = 150$.", 15, 'hard'),
            generateQuestion("Total price including $8\\%$ GST on a $$50$ item?", ["$54", "$58", "$46", "$52"], 0, "$50 \times 1.08 = 54$.", 15, 'hard'),
            generateQuestion("A shopkeeper buys for $$80$ and sells for $$120$. Profit %?", ["50%", "40%", "33.3%", "25%"], 0, "$40/80 = 0.5 = 50$.", 15, 'hard'),
            generateQuestion("If $x$ is $200\\%$ of $y$, what % is $y$ of $x$?", ["50%", "200%", "25%", "100%"], 0, "$x = 2y \Rightarrow y = x/2 = 50\\%$.", 15, 'hard'),
            generateQuestion("Find final price of $$300$ after two $10\\%$ discounts.", ["$243", "$240", "$280", "$270$"], 0, "$300 \times 0.9 \times 0.9 = 243$.", 15, 'hard'),
            generateQuestion("Interest on $$200$ at $3\\%$ per year for 6 months?", ["$3", "$6", "$12", "$10"], 0, "$200 \times 0.03 \times 0.5 = 3$.", 15, 'hard')
        ]
    },
    'g1-s1-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Simplify: $x + x + x$.", ["3x", "x^3", "2x", "x"], 0, "Adding three of the same thing gives 3 times that thing.", 5, 'easy'),
            generateQuestion("Evaluate $2a$ if $a=5$.", ["10", "7", "2.5", "25"], 0, "$2 \times 5 = 10$.", 5, 'easy'),
            generateQuestion("Simplify: $5a - 3a$.", ["2a", "8a", "a", "2"], 0, "$5 - 3 = 2$.", 5, 'easy'),
            generateQuestion("What is $x$ multiplied by $y$?", ["xy", "x+y", "x^y", "y^x"], 0, "Algebraic notation for multiplication is just putting letters together.", 5, 'easy'),
            generateQuestion("Express '3 more than x'.", ["x+3", "3x", "x-3", "3/x"], 0, "'More than' indicates addition.", 5, 'easy'),
            generateQuestion("Simplify: $4y + y$.", ["5y", "4y^2", "4", "y+4"], 0, "4 oranges + 1 orange = 5 oranges.", 5, 'easy'),
            generateQuestion("Evaluate $b - 5$ if $b=12$.", ["7", "17", "5", "12"], 0, "$12 - 5 = 7$.", 5, 'easy'),
            generateQuestion("Simplify: $k \times k$.", ["k^2", "2k", "k", "k+k"], 0, "Repeated multiplication is a power.", 5, 'easy'),
            generateQuestion("What is the coefficient of $x$ in $7x$?", ["7", "x", "1", "0"], 0, "The number in front of the variable.", 5, 'easy'),
            generateQuestion("Express '5 less than p'.", ["p-5", "5-p", "5p", "p/5"], 0, "Start with p, then subtract 5.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Simplify: $3x + 2y - x + y$.", ["2x + 3y", "4x + 3y", "2x + y", "5xy"], 0, "Group like terms together.", 10, 'medium'),
            generateQuestion("Expand: $3(2a + 4)$.", ["6a + 12", "6a + 4", "5a + 7", "2a + 12"], 0, "Multiply 3 by 2a and 3 by 4.", 10, 'medium'),
            generateQuestion("If $x = -2$, find $x^2$.", ["4", "-4", "2", "-2"], 0, "$(-2) \times (-2) = 4$.", 10, 'medium'),
            generateQuestion("Simplify: $4p \times 3q$.", ["12pq", "7pq", "12p+q", "pq"], 0, "Multiply coefficients and then variables.", 10, 'medium'),
            generateQuestion("Factorise: $4x + 8$.", ["4(x + 2)", "4(x + 8)", "2(2x + 4)", "8(x + 1)"], 0, "HCF is 4.", 10, 'medium'),
            generateQuestion("Expand: $x(x + 3)$.", ["x^2 + 3x", "2x + 3", "x^2 + 3", "x^2 + 3x^2"], 0, "Distribute x to both terms.", 10, 'medium'),
            generateQuestion("Simplify: $10m \div 2$.", ["5m", "8m", "5", "10m^2"], 0, "Divide the coefficient.", 10, 'medium'),
            generateQuestion("If $a=3, b=4$, find $ab + 2$.", ["14", "9", "12", "11"], 0, "$3(4) + 2 = 14$.", 10, 'medium'),
            generateQuestion("Simplify: $2(3x - 1)$.", ["6x - 2", "6x - 1", "5x - 2", "6x + 2"], 0, "Multiply 2 by both terms.", 10, 'medium'),
            generateQuestion("Factorise: $ax + ay$.", ["a(x + y)", "x(a + y)", "y(a + x)", "axy"], 0, "Take out the common factor 'a'.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Expand and simplify: $3(x+2) + 2(x-1)$.", ["5x + 4", "5x + 6", "5x + 8", "6x + 4"], 0, "$3x+6+2x-2 = 5x+4$.", 20, 'hard'),
            generateQuestion("Factorise completely: $6x^2 + 9x$.", ["3x(2x + 3)", "3(2x^2 + 3x)", "x(6x + 9)", "3x(x + 3)"], 0, "HCF is 3x.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{10a^3b}{5ab}$.", ["2a^2", "2a^2b", "5a^2", "2a^4"], 0, "$10/5=2$, $a^3/a=a^2$, $b/b=1$.", 20, 'hard'),
            generateQuestion("Evaluate $x^2 - 3x$ if $x = -1$.", ["4", "-2", "2", "-4"], 0, "$(-1)^2 - 3(-1) = 1 + 3 = 4$.", 20, 'hard'),
            generateQuestion("Simplify: $3(a-b) - 2(a+b)$.", ["a - 5b", "a - b", "5a - 5b", "a + b"], 0, "$3a-3b-2a-2b = a-5b$.", 20, 'hard'),
            generateQuestion("Expand: $(x+1)(x+5)$.", ["x^2+6x+5", "x^2+5x+1", "x^2+6", "x^2+x+5"], 0, "$x^2+5x+x+5$.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{4x^2y}{2xy^2}$.", ["2x/y", "2y/x", "2xy", "x/2y"], 0, "$(4/2)(x^2/x)(y/y^2) = 2x/y$.", 20, 'hard'),
            generateQuestion("Factorise: $x^2 - 9$.", ["(x-3)(x+3)", "(x-3)^2", "(x+3)^2", "x(x-9)"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("Expand: $(2x-3)^2$.", ["4x^2 - 12x + 9", "4x^2 - 9", "4x^2 + 9", "2x^2 - 12x + 9"], 0, "$(2x-3)(2x-3) = 4x^2 - 6x - 6x + 9$.", 20, 'hard'),
            generateQuestion("Evaluate $\frac{a+b}{a-b}$ if $a=5, b=3$.", ["4", "8", "2", "1"], 0, "$8 / 2 = 4$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Simplify: $a + b + a$.", ["2a + b", "a^2 + b", "2b + a", "3ab"], 0, "Two 'a's plus one 'b'.", 5, 'easy'),
            generateQuestion("If $x=10$, what is $x/2$?", ["5", "12", "8", "20"], 0, "10 divided by 2 is 5.", 5, 'easy'),
            generateQuestion("Simplify: $x - x$.", ["0", "1", "x", "-x"], 0, "Anything minus itself is zero.", 5, 'easy'),
            generateQuestion("Express 'double y'.", ["2y", "y+2", "y^2", "y/2"], 0, "Double means multiply by 2.", 5, 'easy'),
            generateQuestion("Simplify: $4 \times 5x$.", ["20x", "9x", "x+9", "x^20"], 0, "Multiply the numbers.", 5, 'easy'),
            generateQuestion("What is $1x$ written simply?", ["x", "1", "x1", "0"], 0, "Coefficient 1 is usually hidden.", 5, 'easy'),
            generateQuestion("Evaluate $2 + y$ for $y=5$.", ["7", "10", "25", "3"], 0, "$2+5=7$.", 5, 'easy'),
            generateQuestion("Simplify: $z + z + z + z$.", ["4z", "z^4", "2z", "z"], 0, "Four $z$ terms.", 5, 'easy'),
            generateQuestion("Express 'product of a and b'.", ["ab", "a+b", "a/b", "a-b"], 0, "Product means multiplication.", 5, 'easy'),
            generateQuestion("If $p=3$, find $3p$.", ["9", "6", "1", "0"], 0, "$3 \times 3 = 9$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Expand: $-2(x - 5)$.", ["-2x + 10", "-2x - 10", "-2x - 5", "2x + 10"], 0, "$-2 \times -5 = 10$.", 10, 'medium'),
            generateQuestion("Simplify: $5a + 3b - 2a - b$.", ["3a + 2b", "7a + 4b", "3a + 4b", "3ab"], 0, "Group like terms.", 10, 'medium'),
            generateQuestion("Value of $3p + 2q$ if $p=2, q=3$?", ["12", "13", "5", "10"], 0, "$6 + 6 = 12$.", 10, 'medium'),
            generateQuestion("Simplify: $12ab \div 3a$.", ["4b", "4ab", "4", "9b"], 0, "$12/3=4, ab/a=b$.", 10, 'medium'),
            generateQuestion("Factorise: $10y - 15$.", ["5(2y - 3)", "5(2y - 15)", "10(y - 1.5)", "2(5y - 7)"], 0, "HCF is 5.", 10, 'medium'),
            generateQuestion("Simplify: $x^2 \times x^3$.", ["x^5", "x^6", "2x^5", "x^1"], 0, "Add powers when multiplying same base.", 10, 'medium'),
            generateQuestion("Expand: $4(2p - q)$.", ["8p - 4q", "8p - q", "6p - 4q", "4p - 4q"], 0, "Distribute 4.", 10, 'medium'),
            generateQuestion("Evaluate $2x + 5$ for $x = -3$.", ["-1", "1", "11", "-11"], 0, "$-6 + 5 = -1$.", 10, 'medium'),
            generateQuestion("Simplify: $5x \times 2x$.", ["10x^2", "10x", "7x", "7x^2"], 0, "Multiply coefficients and variables.", 10, 'medium'),
            generateQuestion("Factorise: $x^2 + x$.", ["x(x + 1)", "x^2(1 + 1/x)", "2x", "x(1)"], 0, "HCF is x.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Expand and simplify: $(x+2)(x+3)$.", ["x^2 + 5x + 6", "x^2 + 6x + 5", "x^2 + 5", "x^2 + 6"], 0, "FOIL: $x^2 + 3x + 2x + 6$.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{6x + 12}{3}$.", ["2x + 4", "2x + 12", "6x + 4", "x + 4"], 0, "Divide both terms by 3.", 20, 'hard'),
            generateQuestion("Factorise: $x^2 + 4x$.", ["x(x + 4)", "4(x + 1)", "x^2(1 + 4/x)", "x(x + 1)"], 0, "HCF is x.", 20, 'hard'),
            generateQuestion("Evaluate $2x^2$ if $x = -3$.", ["18", "-18", "12", "-12"], 0, "$2 \times (-3)^2 = 2 \times 9 = 18$.", 20, 'hard'),
            generateQuestion("Simplify: $1/2(4x - 6) + 3$.", ["2x", "2x - 3", "2x + 3", "4x"], 0, "$2x - 3 + 3 = 2x$.", 20, 'hard'),
            generateQuestion("Expand: $(x-2)(x+2)$.", ["x^2-4", "x^2+4", "x^2-4x-4", "x^2-4x+4"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{x^2 - x}{x}$.", ["x - 1", "x", "x^2 - 1", "1"], 0, "Divide both terms by x.", 20, 'hard'),
            generateQuestion("Factorise: $3x^2 - 6x$.", ["3x(x - 2)", "3(x^2 - 2x)", "x(3x - 6)", "3x(x + 2)"], 0, "HCF is 3x.", 20, 'hard'),
            generateQuestion("Evaluate $(a-b)^2$ if $a=5, b=2$.", ["9", "21", "7", "49"], 0, "$(3)^2 = 9$.", 20, 'hard'),
            generateQuestion("Simplify: $5(x+1) - (x-2)$.", ["4x + 7", "4x - 1", "4x + 3", "5x + 3"], 0, "$5x+5 - x+2 = 4x+7$.", 20, 'hard')
        ]
    },
    'g1-s1-linear-eq': {
        learning: [
            // Easy (1-10)
            generateQuestion("Solve: $x + 5 = 12$.", ["7", "17", "-7", "10"], 0, "Subtract 5.", 5, 'easy'),
            generateQuestion("Solve: $x - 3 = 10$.", ["13", "7", "-7", "3"], 0, "Add 3.", 5, 'easy'),
            generateQuestion("Solve: $2x = 20$.", ["10", "40", "18", "22"], 0, "Divide by 2.", 5, 'easy'),
            generateQuestion("Solve: $x/10 = 5$.", ["50", "0.5", "15", "5"], 0, "Multiply by 10.", 5, 'easy'),
            generateQuestion("Solve: $7 + x = 7$.", ["0", "14", "1", "7"], 0, "Subtract 7.", 5, 'easy'),
            generateQuestion("Solve: $3x = 15$.", ["5", "3", "12", "18"], 0, "Divide by 3.", 5, 'easy'),
            generateQuestion("Solve: $x - 8 = 0$.", ["8", "-8", "0", "16"], 0, "Add 8.", 5, 'easy'),
            generateQuestion("Solve: $x + 10 = 10$.", ["0", "20", "1", "10"], 0, "Subtract 10.", 5, 'easy'),
            generateQuestion("Solve: $4x = 4$.", ["1", "0", "4", "8"], 0, "Divide by 4.", 5, 'easy'),
            generateQuestion("Solve: $x - 5 = -2$.", ["3", "-7", "-3", "7"], 0, "Add 5 to -2.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve: $3x + 2 = 14$.", ["4", "5", "12", "6"], 0, "$3x = 12 \Rightarrow x = 4$.", 10, 'medium'),
            generateQuestion("Solve: $2x - 5 = 15$.", ["10", "15", "5", "20"], 0, "$2x = 20 \Rightarrow x = 10$.", 10, 'medium'),
            generateQuestion("Solve: $10 - x = 8$.", ["2", "18", "-2", "8"], 0, "Subtract 10: $-x = -2$.", 10, 'medium'),
            generateQuestion("Solve: $x/3 + 1 = 5$.", ["12", "4", "18", "15"], 0, "$x/3 = 4 \Rightarrow x = 12$.", 10, 'medium'),
            generateQuestion("Solve: $4(x + 1) = 20$.", ["4", "5", "6", "16"], 0, "$x+1 = 5 \Rightarrow x = 4$.", 10, 'medium'),
            generateQuestion("Solve: $5x - 8 = 2x + 1$.", ["3", "4", "2", "5"], 0, "$3x = 9 \Rightarrow x = 3$.", 10, 'medium'),
            generateQuestion("Solve: $2(x - 4) = 6$.", ["7", "5", "3", "10"], 0, "$x-4 = 3 \Rightarrow x = 7$.", 10, 'medium'),
            generateQuestion("Solve: $15 - 2x = 5$.", ["5", "10", "20", "-5"], 0, "$2x = 10 \Rightarrow x = 5$.", 10, 'medium'),
            generateQuestion("Solve: $x/2 - 3 = 1$.", ["8", "4", "6", "10"], 0, "$x/2 = 4 \Rightarrow x = 8$.", 10, 'medium'),
            generateQuestion("Solve: $3(2x + 1) = 15$.", ["2", "3", "4", "1"], 0, "$2x+1 = 5 \Rightarrow 2x = 4$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve: $5x + 3 = 2x + 12$.", ["3", "5", "9", "4"], 0, "$3x = 9 \Rightarrow x = 3$.", 20, 'hard'),
            generateQuestion("Solve: $2(x - 3) = x + 4$.", ["10", "7", "6", "8"], 0, "$2x - 6 = x + 4 \Rightarrow x = 10$.", 20, 'hard'),
            generateQuestion("Solve: $\frac{x+2}{4} = 3$.", ["10", "14", "12", "6"], 0, "$x+2 = 12 \Rightarrow x = 10$.", 20, 'hard'),
            generateQuestion("Solve: $15 - 3x = 0$.", ["5", "-5", "45", "12"], 0, "$3x = 15 \Rightarrow x = 5$.", 20, 'hard'),
            generateQuestion("Solve: $2(3x - 1) = 16$.", ["3", "5", "2", "6"], 0, "$3x-1 = 8 \Rightarrow 3x = 9$.", 20, 'hard'),
            generateQuestion("Solve: $x/4 + x/2 = 6$.", ["8", "12", "4", "10"], 0, "$3x/4 = 6 \Rightarrow 3x = 24$.", 20, 'hard'),
            generateQuestion("Solve: $4(x+2) = 3(x-1) + 15$.", ["4", "5", "6", "10"], 0, "$4x+8 = 3x-3+15 \Rightarrow x+8=12$.", 20, 'hard'),
            generateQuestion("Solve: $\frac{2x-3}{5} = \frac{x+1}{2}$.", ["-11", "7", "5", "-5"], 0, "$2(2x-3) = 5(x+1) \Rightarrow 4x-6 = 5x+5 \Rightarrow -x=11$.", 20, 'hard'),
            generateQuestion("Solve: $10 - (x-3) = 2x$.", ["4.33", "7", "13", "10"], 0, "$13-x=2x \Rightarrow 3x=13 \Rightarrow x=13/3 \approx 4.33$.", 20, 'hard'),
            generateQuestion("Solve: $2x^2 = 50$ (positive only).", ["5", "10", "25", "15"], 0, "$x^2 = 25 \Rightarrow x = 5$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Solve: $x + 10 = 15$.", ["5", "25", "-5", "1.5"], 0, "Subtract 10.", 5, 'easy'),
            generateQuestion("Solve: $x - 7 = 3$.", ["10", "4", "-4", "21"], 0, "Add 7.", 5, 'easy'),
            generateQuestion("Solve: $5x = 40$.", ["8", "35", "45", "200"], 0, "Divide by 5.", 5, 'easy'),
            generateQuestion("Solve: $x/2 = 9$.", ["18", "4.5", "11", "7"], 0, "Multiply by 2.", 5, 'easy'),
            generateQuestion("Solve: $100 + x = 101$.", ["1", "201", "0", "100"], 0, "Subtract 100.", 5, 'easy'),
            generateQuestion("Solve: $2x = 12$.", ["6", "10", "14", "2"], 0, "Divide by 2.", 5, 'easy'),
            generateQuestion("Solve: $x - 5 = 5$.", ["10", "0", "-10", "5"], 0, "Add 5.", 5, 'easy'),
            generateQuestion("Solve: $x/3 = 4$.", ["12", "7", "1", "1.33"], 0, "Multiply by 3.", 5, 'easy'),
            generateQuestion("Solve: $10 + x = 4$.", ["-6", "14", "6", "-14"], 0, "Subtract 10.", 5, 'easy'),
            generateQuestion("Solve: $7x = 0$.", ["0", "7", "1", "-7"], 0, "Anything times zero is zero.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve: $4x - 3 = 17$.", ["5", "4", "20", "8"], 0, "$4x = 20 \Rightarrow x = 5$.", 10, 'medium'),
            generateQuestion("Solve: $3(x - 2) = 15$.", ["7", "5", "9", "18"], 0, "$x-2 = 5 \Rightarrow x = 7$.", 10, 'medium'),
            generateQuestion("Solve: $20 - 2x = 14$.", ["3", "4", "2", "10"], 0, "$2x = 6 \Rightarrow x = 3$.", 10, 'medium'),
            generateQuestion("Solve: $x/4 - 2 = 1$.", ["12", "8", "4", "6"], 0, "$x/4 = 3 \Rightarrow x = 12$.", 10, 'medium'),
            generateQuestion("Solve: $2(2x + 1) = 10$.", ["2", "4", "5", "2.5"], 0, "$2x+1 = 5 \Rightarrow 2x = 4$.", 10, 'medium'),
            generateQuestion("Solve: $5 - x = 2x - 4$.", ["3", "1", "9", "2"], 0, "$9 = 3x \Rightarrow x = 3$.", 10, 'medium'),
            generateQuestion("Solve: $1/2 x + 3 = 7$.", ["8", "4", "10", "20"], 0, "$1/2 x = 4 \Rightarrow x=8$.", 10, 'medium'),
            generateQuestion("Solve: $3x = x + 10$.", ["5", "10", "2", "4"], 0, "$2x = 10 \Rightarrow x=5$.", 10, 'medium'),
            generateQuestion("Solve: $4(x - 1) = 12$.", ["4", "3", "5", "2"], 0, "$x-1 = 3 \Rightarrow x=4$.", 10, 'medium'),
            generateQuestion("Solve: $15 - x = 2x$.", ["5", "15", "10", "3"], 0, "$15 = 3x \Rightarrow x = 5$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve: $7x - 5 = 2x + 10$.", ["3", "5", "15", "1"], 0, "$5x = 15 \Rightarrow x = 3$.", 20, 'hard'),
            generateQuestion("Solve: $3(x + 4) = 2(x + 7)$.", ["2", "4", "6", "10"], 0, "$3x+12 = 2x+14 \Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Solve: $\frac{2x-1}{3} = 5$.", ["8", "7", "16", "6"], 0, "$2x-1 = 15 \Rightarrow 2x = 16$.", 20, 'hard'),
            generateQuestion("Solve: $12 - 2(x - 1) = 4$.", ["5", "3", "6", "4"], 0, "$2(x-1) = 8 \Rightarrow x-1 = 4$.", 20, 'hard'),
            generateQuestion("Solve: $x/2 + x/3 = 10$.", ["12", "6", "10", "15"], 0, "$5x/6 = 10 \Rightarrow 5x = 60$.", 20, 'hard'),
            generateQuestion("Solve: $4(2x-1) = 3(3x+2)$.", ["-10", "10", "2", "-2"], 0, "$8x-4 = 9x+6 \Rightarrow -x=10$.", 20, 'hard'),
            generateQuestion("Solve: $x/2 = x/4 + 3$.", ["12", "6", "24", "4"], 0, "$x/4 = 3 \Rightarrow x=12$.", 20, 'hard'),
            generateQuestion("Solve: $10 - x = 2(3-x)$.", ["-4", "4", "16", "0"], 0, "$10-x = 6-2x \Rightarrow x=-4$.", 20, 'hard'),
            generateQuestion("Solve: $\frac{x+1}{x-1} = 3$.", ["2", "1", "4", "0"], 0, "$x+1 = 3x-3 \Rightarrow 2x=4$.", 20, 'hard'),
            generateQuestion("Solve: $2x + 3(x-1) = 22$.", ["5", "4", "6", "23/5"], 0, "$5x-3 = 22 \Rightarrow 5x=25$.", 20, 'hard')
        ]
    },
    'g1-s1-geometry': {
        learning: [
            // Easy (1-10)
            generateQuestion("Sum of interior angles in a triangle?", ["180", "90", "360", "270"], 0, "All triangles add up to 180 degrees.", 5, 'easy'),
            generateQuestion("An angle of 90 degrees is called:", ["Right angle", "Acute angle", "Obtuse angle", "Reflex angle"], 0, "90 degrees is a perfect corner.", 5, 'easy'),
            generateQuestion("How many sides does a quadrilateral have?", ["4", "3", "5", "6"], 0, "Quad = Four.", 5, 'easy'),
            generateQuestion("Complementary angles add up to:", ["90", "180", "360", "45"], 0, "Complementary = Corner (90).", 5, 'easy'),
            generateQuestion("Supplementary angles add up to:", ["180", "90", "360", "270"], 0, "Supplementary = Straight Line (180).", 5, 'easy'),
            generateQuestion("An angle less than 90° is:", ["Acute", "Obtuse", "Reflex", "Right"], 0, "Sharp like a needle.", 5, 'easy'),
            generateQuestion("The long side of a right triangle is:", ["Hypotenuse", "Base", "Height", "Median"], 0, "Opposite the 90° angle.", 5, 'easy'),
            generateQuestion("How many vertices in a triangle?", ["3", "4", "2", "6"], 0, "Three corners.", 5, 'easy'),
            generateQuestion("A shape with 6 sides is a:", ["Hexagon", "Pentagon", "Heptagon", "Octagon"], 0, "Hex = 6.", 5, 'easy'),
            generateQuestion("Adjacent angles on a straight line add to:", ["180", "360", "90", "45"], 0, "Half a circle.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find missing angle in triangle: 40°, 60°, ?", ["80", "100", "90", "70"], 0, "$180 - (40+60) = 80$.", 10, 'medium'),
            generateQuestion("Size of one interior angle in a square?", ["90", "180", "360", "45"], 0, "$360/4 = 90$.", 10, 'medium'),
            generateQuestion("Vertically opposite angles are always:", ["Equal", "Add to 180", "Add to 90", "Different"], 0, "They are mirror images.", 10, 'medium'),
            generateQuestion("Sum of angles on a straight line?", ["180", "360", "90", "0"], 0, "A straight line is half a circle.", 10, 'medium'),
            generateQuestion("An angle of 150° is:", ["Obtuse", "Acute", "Reflex", "Right"], 0, "Between 90 and 180 is obtuse.", 10, 'medium'),
            generateQuestion("Angle sum of any quadrilateral?", ["360", "180", "540", "720"], 0, "Two triangles fit inside.", 10, 'medium'),
            generateQuestion("An isosceles triangle has two equal:", ["Sides and Angles", "Only Sides", "Only Angles", "Nothing"], 0, "Prefix 'iso' indicates balance.", 10, 'medium'),
            generateQuestion("Which angle is reflex?", ["200", "90", "180", "45"], 0, "Reflex is $> 180$.", 10, 'medium'),
            generateQuestion("Number of sides in an octagon?", ["8", "6", "10", "12"], 0, "Octo = 8.", 10, 'medium'),
            generateQuestion("Sum of angles in a semicircle is:", ["180", "360", "90", "270"], 0, "Half circle.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find x if angles are $2x, 3x, 4x$ in a triangle.", ["20", "40", "180", "9"], 0, "$9x = 180 \Rightarrow x = 20$.", 20, 'hard'),
            generateQuestion("Sum of interior angles in a hexagon?", ["720", "540", "360", "1080"], 0, "$(6-2) \times 180 = 720$.", 20, 'hard'),
            generateQuestion("Exterior angle of triangle is $110°$. One interior is $40°$. Other?", ["70", "40", "30", "140"], 0, "Ext angle = sum of opposite interior. $110 - 40 = 70$.", 20, 'hard'),
            generateQuestion("Size of one interior angle in regular pentagon?", ["108", "72", "540", "90"], 0, "$540/5 = 108$.", 20, 'hard'),
            generateQuestion("Sum of exterior angles of any polygon?", ["360", "180", "Depends on sides", "720"], 0, "Always 360 for any convex polygon.", 20, 'hard'),
            generateQuestion("A polygon has sum of angles 1080°. Sides?", ["8", "6", "10", "12"], 0, "$(n-2) \times 180 = 1080 \Rightarrow n-2=6$.", 20, 'hard'),
            generateQuestion("One interior angle of regular octagon?", ["135", "45", "108", "90"], 0, "$(6 \times 180)/8 = 1080/8 = 135$.", 20, 'hard'),
            generateQuestion("If interior angle is 150°, exterior angle is:", ["30", "150", "210", "60"], 0, "$180 - 150 = 30$.", 20, 'hard'),
            generateQuestion("Size of one exterior angle of regular decagon?", ["36", "72", "144", "18"], 0, "$360/10 = 36$.", 20, 'hard'),
            generateQuestion("Angle ratio in triangle 1:2:3. Mid-sized angle?", ["60", "30", "90", "120"], 0, "6 parts = 180, 1 part = 30. $2 \times 30 = 60$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Sum of interior angles in a quadrilateral?", ["360", "180", "90", "720"], 0, "Four-sided shapes add up to 360.", 5, 'easy'),
            generateQuestion("An angle of 45° is:", ["Acute", "Obtuse", "Right", "Reflex"], 0, "Less than 90 is acute.", 5, 'easy'),
            generateQuestion("How many sides in a pentagon?", ["5", "6", "4", "8"], 0, "Penta = Five.", 5, 'easy'),
            generateQuestion("Angles in equilateral triangle are each:", ["60", "90", "45", "180"], 0, "$180/3 = 60$.", 5, 'easy'),
            generateQuestion("Adjacent angles on a line add to:", ["180", "90", "360", "0"], 0, "Straight line property.", 5, 'easy'),
            generateQuestion("Which is a reflex angle?", ["250", "90", "180", "45"], 0, "$> 180$.", 5, 'easy'),
            generateQuestion("Sides in a hexagon?", ["6", "5", "8", "4"], 0, "Hexo = 6.", 5, 'easy'),
            generateQuestion("Acute angles are less than:", ["90", "180", "360", "45"], 0, "Right angle limit.", 5, 'easy'),
            generateQuestion("A triangle with 90° angle is:", ["Right-angled", "Acute", "Obtuse", "Isosceles"], 0, "Cornered triangle.", 5, 'easy'),
            generateQuestion("Three angles in triangle add to:", ["180", "360", "90", "45"], 0, "180 degrees.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find missing angle in quad: 90°, 90°, 100°, ?", ["80", "90", "100", "70"], 0, "$360 - (90+90+100) = 80$.", 10, 'medium'),
            generateQuestion("Exterior angle of a regular hexagon?", ["60", "120", "360", "90"], 0, "$360/6 = 60$.", 10, 'medium'),
            generateQuestion("Angles at a point add up to:", ["360", "180", "90", "270"], 0, "Full circle.", 10, 'medium'),
            generateQuestion("An angle of 210° is:", ["Reflex", "Obtuse", "Acute", "Right"], 0, "Greater than 180 is reflex.", 10, 'medium'),
            generateQuestion("In isosceles triangle, if vertex angle is 40°, base angle?", ["70", "140", "40", "80"], 0, "$(180-40)/2 = 70$.", 10, 'medium'),
            generateQuestion("Two angles are 45° and 45°. Remaining angle?", ["90", "45", "180", "60"], 0, "$180 - 90 = 90$.", 10, 'medium'),
            generateQuestion("Each angle in a rectangle is:", ["90", "180", "360", "45"], 0, "Rectangles are right-angled.", 10, 'medium'),
            generateQuestion("Find x if angles are x, x, 100 in triangle.", ["40", "80", "50", "30"], 0, "$(180-100)/2 = 40$.", 10, 'medium'),
            generateQuestion("Ext angle sum of a triangle?", ["360", "180", "90", "270"], 0, "Always 360.", 10, 'medium'),
            generateQuestion("A shape with 7 sides is:", ["Heptagon", "Hexagon", "Octagon", "Nonagon"], 0, "Hepta = 7.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Interior angle of regular polygon is 144°. Sides?", ["10", "8", "12", "9"], 0, "Ext angle $= 180-144 = 36$. $n = 360/36 = 10$.", 20, 'hard'),
            generateQuestion("Sum of interior angles is 900°. Sides?", ["7", "6", "8", "5"], 0, "$(n-2) \times 180 = 900 \Rightarrow n-2 = 5 \Rightarrow n=7$.", 20, 'hard'),
            generateQuestion("Ratio of angles in triangle is 2:3:5. Largest angle?", ["90", "100", "50", "36"], 0, "$10$ parts $= 180, 1$ part $= 18$. $5 \times 18 = 90$.", 20, 'hard'),
            generateQuestion("Size of exterior angle of regular octagon?", ["45", "135", "60", "30"], 0, "$360/8 = 45$.", 20, 'hard'),
            generateQuestion("A polygon has 12 sides. Sum of interior angles?", ["1800", "1080", "2160", "360"], 0, "$(12-2) \times 180 = 1800$.", 20, 'hard'),
            generateQuestion("Regular polygon ext angle is 20°. Interior angle?", ["160", "140", "170", "180"], 0, "$180 - 20 = 160$.", 20, 'hard'),
            generateQuestion("One interior angle of regular nonagon (9 sides)?", ["140", "120", "160", "100"], 0, "$360/9 = 40$ (ext). $180-40=140$.", 20, 'hard'),
            generateQuestion("If sum of angles is 1440°, sides $n$ is?", ["10", "8", "9", "12"], 0, "$(n-2)180 = 1440 \Rightarrow n-2=8$.", 20, 'hard'),
            generateQuestion("Angles $x, 2x, 3x, 4x$ in quad. Largest?", ["144", "72", "180", "120"], 0, "$10x=360 \Rightarrow x=36. 4(36)=144$.", 20, 'hard'),
            generateQuestion("Number of sides if interior is 160°?", ["18", "20", "16", "10"], 0, "$Ext=20. 360/20=18$.", 20, 'hard')
        ]
    },
    'g1-s1-functions': {
        learning: [
            // Easy (1-10)
            generateQuestion("The horizontal axis is called:", ["x-axis", "y-axis", "z-axis", "Origin"], 0, "x is horizontal, y is vertical.", 5, 'easy'),
            generateQuestion("Coordinate of the origin?", ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"], 0, "The center point.", 5, 'easy'),
            generateQuestion("Point (0, 4) lies on which axis?", ["y-axis", "x-axis", "Both", "None"], 0, "When x=0, the point is on the vertical y-axis.", 5, 'easy'),
            generateQuestion("Point (3, 0) lies on which axis?", ["x-axis", "y-axis", "Both", "None"], 0, "When y=0, the point is on the horizontal x-axis.", 5, 'easy'),
            generateQuestion("In (2, 5), which number is the x-coordinate?", ["2", "5", "7", "x"], 0, "First number is x, second is y.", 5, 'easy'),
            generateQuestion("Point (1, 1) is in which quadrant?", ["1st", "2nd", "3rd", "4th"], 0, "Both x and y are positive.", 5, 'easy'),
            generateQuestion("The vertical axis is called:", ["y-axis", "x-axis", "z-axis", "Depth"], 0, "y is vertical.", 5, 'easy'),
            generateQuestion("What is the y-coordinate of (4, -5)?", ["-5", "4", "0", "9"], 0, "Second number.", 5, 'easy'),
            generateQuestion("Point (-3, 0) lies on the:", ["x-axis", "y-axis", "Origin", "Line y=x"], 0, "y is zero.", 5, 'easy'),
            generateQuestion("Distance from (0,0) to (3,0)?", ["3", "0", "6", "9"], 0, "Horizontal distance.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find y if $y = 2x + 3$ and $x = 5$.", ["13", "10", "8", "15"], 0, "$2(5) + 3 = 13$.", 10, 'medium'),
            generateQuestion("Find x if $y = 3x - 1$ and $y = 11$.", ["4", "3", "5", "12"], 0, "$11+1 = 3x \Rightarrow 3x=12$.", 10, 'medium'),
            generateQuestion("Gradient of line $y = 4x + 7$?", ["4", "7", "x", "11"], 0, "In $y=mx+c$, m is gradient.", 10, 'medium'),
            generateQuestion("Y-intercept of line $y = 2x - 5$?", ["-5", "2", "5", "0"], 0, "In $y=mx+c$, c is intercept.", 10, 'medium'),
            generateQuestion("Which point satisfies $y = 2x$?", ["(3, 6)", "(6, 3)", "(2, 2)", "(0, 1)"], 0, "$6 = 2(3)$ is true.", 10, 'medium'),
            generateQuestion("Find y-intercept of $y = 5x + 1$.", ["1", "5", "0", "x"], 0, "Constant term.", 10, 'medium'),
            generateQuestion("Point (-2, 4) is in quadrant:", ["2nd", "1st", "3rd", "4th"], 0, "x negative, y positive.", 10, 'medium'),
            generateQuestion("If $y=x$, what is $y$ when $x=-7$?", ["-7", "7", "0", "1"], 0, "They are identical.", 10, 'medium'),
            generateQuestion("Gradient of line $y = -x + 10$?", ["-1", "10", "1", "0"], 0, "Coefficient is -1.", 10, 'medium'),
            generateQuestion("Point $(0, -2)$ is the:", ["y-intercept", "x-intercept", "Origin", "Gradient"], 0, "Crosses y-axis.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Gradient of line passing through (1, 2) and (3, 6)?", ["2", "4", "3", "1"], 0, "$(6-2)/(3-1) = 4/2 = 2$.", 20, 'hard'),
            generateQuestion("Equation of line through origin with gradient 3?", ["y = 3x", "y = x + 3", "y = 3", "x = 3y"], 0, "$c=0$, so $y=3x$.", 20, 'hard'),
            generateQuestion("Find y-intercept of line through (1, 5) with m=2.", ["3", "5", "7", "1"], 0, "$5 = 2(1) + c \Rightarrow c = 3$.", 20, 'hard'),
            generateQuestion("Gradient of horizontal line?", ["0", "Infinite", "1", "-1"], 0, "No rise, so gradient is zero.", 20, 'hard'),
            generateQuestion("Gradient of vertical line?", ["Infinite/Undefined", "0", "1", "-1"], 0, "No run, so division by zero.", 20, 'hard'),
            generateQuestion("Find midpoint of (2,4) and (6,10).", ["(4, 7)", "(8, 14)", "(2, 3)", "(5, 5)"], 0, "$((2+6)/2, (4+10)/2) = (4,7)$.", 20, 'hard'),
            generateQuestion("Gradient of $3y = 9x - 12$?", ["3", "9", "-4", "1"], 0, "$y = 3x - 4$.", 20, 'hard'),
            generateQuestion("If line $y=mx+4$ passes through (2, 10), m is:", ["3", "7", "4", "2"], 0, "$10 = 2m + 4 \Rightarrow 6 = 2m$.", 20, 'hard'),
            generateQuestion("Gradient of line through $(-1, 1)$ and $(2, 7)$?", ["2", "3", "4", "1"], 0, "$(7-1)/(2 - -1) = 6/3 = 2$.", 20, 'hard'),
            generateQuestion("Area of triangle with vertices (0,0), (4,0), (0,3)?", ["6", "12", "7", "5"], 0, "$0.5 \times 4 \times 3 = 6$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("The vertical axis is called:", ["y-axis", "x-axis", "Origin", "Height"], 0, "y is vertical.", 5, 'easy'),
            generateQuestion("Point (1, -2) is in which quadrant?", ["4th", "1st", "2nd", "3rd"], 0, "x positive, y negative is 4th quadrant.", 5, 'easy'),
            generateQuestion("What is the x-coordinate of (7, 2)?", ["7", "2", "9", "5"], 0, "First number.", 5, 'easy'),
            generateQuestion("What is the y-coordinate of (-3, 8)?", ["8", "-3", "5", "11"], 0, "Second number.", 5, 'easy'),
            generateQuestion("Where do the axes intersect?", ["Origin", "Center", "Zero", "Cross"], 0, "The (0,0) point.", 5, 'easy'),
            generateQuestion("Point (0,0) is called the ____.", ["Origin", "Axis", "Coordinate", "Grid"], 0, "Starting point.", 5, 'easy'),
            generateQuestion("Move 3 units right and 2 up from origin:", ["(3, 2)", "(2, 3)", "(-3, -2)", "(0, 5)"], 0, "Plus x, plus y.", 5, 'easy'),
            generateQuestion("Point $(-5, 0)$ is on the:", ["x-axis", "y-axis", "Quadrant 2", "Origin"], 0, "y is zero.", 5, 'easy'),
            generateQuestion("Point $(4, 4)$ is in quadrant:", ["1st", "2nd", "3rd", "4th"], 0, "Both positive.", 5, 'easy'),
            generateQuestion("X-axis is ______.", ["Horizontal", "Vertical", "Slanted", "Curved"], 0, "Side to side.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find y if $y = x/2 - 4$ and $x = 10$.", ["1", "5", "6", "-1"], 0, "$10/2 - 4 = 1$.", 10, 'medium'),
            generateQuestion("Find x if $y = 4x + 2$ and $y = 22$.", ["5", "4", "6", "20"], 0, "$20 = 4x \Rightarrow x = 5$.", 10, 'medium'),
            generateQuestion("Gradient of line $y = -3x + 2$?", ["-3", "2", "3", "-2"], 0, "Coefficient of x.", 10, 'medium'),
            generateQuestion("Y-intercept of line $y = 5x$?", ["0", "5", "1", "x"], 0, "No constant term means 0.", 10, 'medium'),
            generateQuestion("Which point is on $y = 3x + 1$?", ["(2, 7)", "(1, 3)", "(0, 0)", "(3, 9)"], 0, "$7 = 3(2) + 1$.", 10, 'medium'),
            generateQuestion("Point $(-2, -3)$ is in quadrant:", ["3rd", "1st", "2nd", "4th"], 0, "Both negative.", 10, 'medium'),
            generateQuestion("If $y=10$, the line is:", ["Horizontal", "Vertical", "Diagonal", "Origin"], 0, "y = constant is horizontal.", 10, 'medium'),
            generateQuestion("Find y if $y=2x$ and $x=-4$.", ["-8", "8", "-2", "2"], 0, "$2(-4) = -8$.", 10, 'medium'),
            generateQuestion("Gradient of $y = x - 5$?", ["1", "-5", "0", "x"], 0, "Hidden coefficient 1.", 10, 'medium'),
            generateQuestion("Y-intercept of $y = -2x + 8$?", ["8", "-2", "0", "x"], 0, "Constant term.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Gradient of line through (0, 0) and (2, -4)?", ["-2", "2", "-0.5", "0.5"], 0, "$(-4-0)/(2-0) = -2$.", 20, 'hard'),
            generateQuestion("Equation of line with m=0 and through (1, 5)?", ["y = 5", "x = 1", "y = 0", "y = x + 4"], 0, "Horizontal line $y=c$.", 20, 'hard'),
            generateQuestion("Equation of line with undefined m through (1, 5)?", ["x = 1", "y = 5", "x = 0", "y = x"], 0, "Vertical line $x=c$.", 20, 'hard'),
            generateQuestion("Gradient of line $2y = 4x + 6$?", ["2", "4", "6", "1"], 0, "$y = 2x + 3$. Gradient is 2.", 20, 'hard'),
            generateQuestion("Slope of line through (1, 1) and (4, 4)?", ["1", "0", "4", "3"], 0, "$(4-1)/(4-1) = 1$.", 20, 'hard'),
            generateQuestion("Midpoint of $(-2, 2)$ and $(4, 8)$?", ["(1, 5)", "(3, 10)", "(2, 6)", "(-3, -3)"], 0, "$(-2+4)/2 = 1, (2+8)/2 = 5$.", 20, 'hard'),
            generateQuestion("Which equation has gradient -2?", ["y = 8 - 2x", "y = 2x + 8", "y = x - 2", "2y = x"], 0, "Coefficient is -2.", 20, 'hard'),
            generateQuestion("Y-intercept of $3y = 6x + 9$?", ["3", "9", "6", "2"], 0, "$y = 2x + 3$.", 20, 'hard'),
            generateQuestion("Does (2, 5) lie on $y = 3x - 1$?", ["Yes", "No", "Maybe", "Only if x=0"], 0, "$5 = 3(2)-1 = 5$.", 20, 'hard'),
            generateQuestion("Gradient of vertical line $x=7$?", ["Undefined", "0", "7", "1"], 0, "Division by zero (run).", 20, 'hard')
        ]
    },
    'g1-s1-symmetry': {
        learning: [
            // Easy (1-10)
            generateQuestion("How many lines of symmetry in a square?", ["4", "2", "8", "0"], 0, "Vertical, horizontal, and two diagonals.", 5, 'easy'),
            generateQuestion("How many lines of symmetry in a circle?", ["Infinite", "360", "1", "0"], 0, "Any line through the center works.", 5, 'easy'),
            generateQuestion("Which letter has vertical symmetry?", ["A", "B", "C", "D"], 0, "A can be folded down the middle vertically.", 5, 'easy'),
            generateQuestion("Which letter has horizontal symmetry?", ["B", "A", "V", "W"], 0, "B can be folded across the middle horizontally.", 5, 'easy'),
            generateQuestion("Order of rotational symmetry of a square?", ["4", "2", "1", "360"], 0, "Locks in every 90 degrees.", 5, 'easy'),
            generateQuestion("A shape that looks the same after half a turn has order:", ["2", "1", "4", "360"], 0, "$360/180 = 2$.", 5, 'easy'),
            generateQuestion("How many lines of symmetry in an equilateral triangle?", ["3", "1", "0", "infinite"], 0, "Three identical sides.", 5, 'easy'),
            generateQuestion("Which digit is vertically symmetric?", ["8", "2", "5", "4"], 0, "8 can be split top-bottom (horizontal) and left-right (vertical).", 5, 'easy'),
            generateQuestion("Order of rotational symmetry of a circle?", ["Infinite", "1", "360", "0"], 0, "Matches at every tiny fraction of a degree.", 5, 'easy'),
            generateQuestion("A figure with no symmetry has order:", ["1", "0", "360", "infinite"], 0, "Only matches itself after a full 360 spin.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Lines of symmetry in a rectangle?", ["2", "4", "0", "1"], 0, "Only vertical and horizontal.", 10, 'medium'),
            generateQuestion("Order of rotational symmetry of a rectangle?", ["2", "4", "1", "360"], 0, "Locks in after half turn and full turn.", 10, 'medium'),
            generateQuestion("Lines of symmetry in equilateral triangle?", ["3", "1", "0", "6"], 0, "From each vertex to the opposite side.", 10, 'medium'),
            generateQuestion("Lines of symmetry in isosceles triangle?", ["1", "3", "0", "2"], 0, "Only one line through the vertex.", 10, 'medium'),
            generateQuestion("Order of rotational symmetry for regular hexagon?", ["6", "1", "3", "360"], 0, "Locked every 60 degrees.", 10, 'medium'),
            generateQuestion("How many lines of symmetry in a regular pentagon?", ["5", "1", "0", "10"], 0, "Matches the number of sides.", 10, 'medium'),
            generateQuestion("Order of rotational symmetry of a fan with 3 blades?", ["3", "1", "2", "6"], 0, "Matches every 120 degrees.", 10, 'medium'),
            generateQuestion("A shape matches itself every 60°. Order?", ["6", "60", "3", "12"], 0, "$360/60 = 6$.", 10, 'medium'),
            generateQuestion("Which letter has rotational but NO line symmetry?", ["S", "A", "E", "T"], 0, "S looks same upside down but has no fold lines.", 10, 'medium'),
            generateQuestion("Lines of symmetry in a rhombus?", ["2", "4", "0", "1"], 0, "Through the diagonals.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Order of rotational symmetry for a parallelogram?", ["2", "1", "0", "4"], 0, "Looks same upside down, but no mirror lines.", 20, 'hard'),
            generateQuestion("A shape matches itself after 120°. Order?", ["3", "2", "4", "1"], 0, "$360/120 = 3$.", 20, 'hard'),
            generateQuestion("Lines of symmetry in a regular pentagon?", ["5", "0", "1", "10"], 0, "Regular polygons have lines = sides.", 20, 'hard'),
            generateQuestion("Which letter has order 2 rotational symmetry?", ["N", "A", "B", "C"], 0, "N looks same upside down.", 20, 'hard'),
            generateQuestion("Order of rotational for isosceles triangle?", ["1", "2", "0", "360"], 0, "Only matches after full turn.", 20, 'hard'),
            generateQuestion("A regular polygon has 12 lines of symmetry. Order?", ["12", "6", "1", "24"], 0, "Order = Line count for regular polygons.", 20, 'hard'),
            generateQuestion("Order of rotational symmetry for a kite?", ["1", "2", "0", "360"], 0, "Only matches after $360^{\circ}$.", 20, 'hard'),
            generateQuestion("Smallest angle of rotation for order 8?", ["45", "90", "22.5", "180"], 0, "$360/8 = 45$.", 20, 'hard'),
            generateQuestion("How many lines of symmetry in a scalene triangle?", ["0", "1", "3", "infinite"], 0, "No equal sides or angles.", 20, 'hard'),
            generateQuestion("Order of rotation for a regular decagon?", ["10", "5", "36", "1"], 0, "Matches the number of vertices.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Shape with infinite lines of symmetry?", ["Circle", "Square", "Triangle", "Hexagon"], 0, "The circle is perfectly symmetric.", 5, 'easy'),
            generateQuestion("How many lines of symmetry in an 'M'?", ["1", "0", "2", "infinite"], 0, "One vertical line.", 5, 'easy'),
            generateQuestion("Which digit is symmetric horizontally?", ["8", "1", "2", "4"], 0, "8 can be folded across.", 5, 'easy'),
            generateQuestion("Order of rotational symmetry of an 'O'?", ["Infinite", "1", "2", "360"], 0, "Perfect circle properties.", 5, 'easy'),
            generateQuestion("A shape with NO lines of symmetry is:", ["Asymmetric", "Symmetric", "Parallel", "Curved"], 0, "Non-symmetric.", 5, 'easy'),
            generateQuestion("How many lines of symmetry in a heart shape?", ["1", "2", "0", "infinite"], 0, "One vertical line down the center.", 5, 'easy'),
            generateQuestion("Which letter has order 2 rotational symmetry?", ["Z", "A", "C", "E"], 0, "Z looks same upside down.", 5, 'easy'),
            generateQuestion("Does a rectangle have diagonal symmetry lines?", ["No", "Yes", "Only if it's a square", "Sometimes"], 0, "Try folding it; the corners don't match!", 5, 'easy'),
            generateQuestion("Order of rotation for an equilateral triangle?", ["3", "1", "2", "6"], 0, "Matches every $120^{\circ}$.", 5, 'easy'),
            generateQuestion("Symmetry lines for an isosceles triangle?", ["1", "2", "3", "0"], 0, "Only through the top vertex.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Lines of symmetry in a rhombus?", ["2", "4", "1", "0"], 0, "Only along the diagonals.", 10, 'medium'),
            generateQuestion("Order of rotational symmetry of a rhombus?", ["2", "4", "1", "360"], 0, "Matches twice.", 10, 'medium'),
            generateQuestion("Lines of symmetry in kite?", ["1", "2", "0", "4"], 0, "One main diagonal.", 10, 'medium'),
            generateQuestion("Order of rotational symmetry of equilateral triangle?", ["3", "1", "2", "360"], 0, "Matches Every 120.", 10, 'medium'),
            generateQuestion("Which letter has both types of symmetry?", ["I", "K", "L", "M"], 0, "I has vertical and horizontal.", 10, 'medium'),
            generateQuestion("Regular octagon has how many symmetry lines?", ["8", "4", "16", "1"], 0, "Line count = side count.", 10, 'medium'),
            generateQuestion("Smallest angle for square rotational symmetry?", ["90", "180", "360", "45"], 0, "$360/4 = 90$.", 10, 'medium'),
            generateQuestion("Order of rotation for a regular pentagon?", ["5", "1", "10", "360"], 0, "Matches 5 times.", 10, 'medium'),
            generateQuestion("Which is NOT a line of symmetry for a square?", ["Any diagonal", "Vertical center", "Horizontal center", "Line through one corner only"], 3, "A diagonal must pass through TWO corners.", 10, 'medium'),
            generateQuestion("Order of rotational symmetry for a semi-circle?", ["1", "2", "0", "infinite"], 0, "Only matches after $360^{\circ}$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Order of rotational symmetry of regular octagon?", ["8", "4", "1", "135"], 0, "8 locks in.", 20, 'hard'),
            generateQuestion("Regular polygon with interior angle 60°. Symmetry lines?", ["3", "4", "5", "6"], 0, "Equilateral triangle, so 3 lines.", 20, 'hard'),
            generateQuestion("Number of symmetry lines in a scalene triangle?", ["0", "1", "3", "infinite"], 0, "Scalene has no equal sides.", 20, 'hard'),
            generateQuestion("Order of rotational symmetry of 'Z'?", ["2", "0", "1", "360"], 0, "Z looks same upside down.", 20, 'hard'),
            generateQuestion("If shape matches after 72°, order is:", ["5", "4", "6", "10"], 0, "$360/72 = 5$.", 20, 'hard'),
            generateQuestion("A shape has order 4. What is its angle of rotation?", ["90", "180", "45", "60"], 0, "360 / 4 = 90.", 20, 'hard'),
            generateQuestion("Number of symmetry lines in a regular heptagon?", ["7", "1", "0", "14"], 0, "7 sides, 7 lines.", 20, 'hard'),
            generateQuestion("Which letter has order 2 rotation but NO line symmetry?", ["N", "O", "X", "H"], 0, "N has no mirror lines.", 20, 'hard'),
            generateQuestion("Order of rotational symmetry of a regular nonagon?", ["9", "1", "18", "40"], 0, "9 vertices.", 20, 'hard'),
            generateQuestion("Shape with rotational symmetry of order 1 is:", ["Asymmetric", "Symmetric", "Circular", "Balanced"], 0, "Only matches after full turn.", 20, 'hard')
        ]
    },
    'g1-s1-mensuration': {
        learning: [
            // Easy (1-10)
            generateQuestion("Area of square with side 5?", ["25", "10", "20", "50"], 0, "$5^2 = 25$.", 5, 'easy'),
            generateQuestion("Perimeter of square with side 3?", ["12", "9", "6", "15"], 0, "$4 \times 3 = 12$.", 5, 'easy'),
            generateQuestion("Area of rectangle with length 10, width 4?", ["40", "14", "28", "100"], 0, "$10 \times 4 = 40$.", 5, 'easy'),
            generateQuestion("Volume of cube with side 2?", ["8", "4", "6", "12"], 0, "$2^3 = 8$.", 5, 'easy'),
            generateQuestion("Area of triangle: base=8, height=5?", ["20", "40", "13", "80"], 0, "$0.5 \times 8 \times 5 = 20$.", 5, 'easy'),
            generateQuestion("What is the name for the distance around a circle?", ["Circumference", "Perimeter", "Radius", "Diameter"], 0, "Specific term for circles.", 5, 'easy'),
            generateQuestion("Formula for area of a rectangle?", ["L x W", "2(L+W)", "L + W", "L^2"], 0, "Length times width.", 5, 'easy'),
            generateQuestion("How many millimeters in a centimeter?", ["10", "100", "5", "1"], 0, "Prefix 'milli' means 1/1000, so 10 parts of a cm.", 5, 'easy'),
            generateQuestion("Perimeter of triangle with sides 5, 5, 5?", ["15", "10", "25", "12"], 0, "Sum of all sides.", 5, 'easy'),
            generateQuestion("Volume is measured in ______ units.", ["Cubic", "Square", "Linear", "Weight"], 0, "3D space requires cubic units.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Perimeter of rectangle: length=12, width=5?", ["34", "17", "60", "30"], 0, "$2(12 + 5) = 2(17) = 34$.", 10, 'medium'),
            generateQuestion("Volume of cuboid: 2x3x4?", ["24", "9", "26", "20"], 0, "$2 \times 3 \times 4 = 24$.", 10, 'medium'),
            generateQuestion("Area of parallelogram: base=10, vertical height=7?", ["70", "35", "17", "1000"], 0, "$Base \times Height = 70$.", 10, 'medium'),
            generateQuestion("Find radius if diameter is 14.", ["7", "28", "44", "154"], 0, "Radius is half of diameter.", 10, 'medium'),
            generateQuestion("Find base of triangle if Area=25 and Height=10.", ["5", "2.5", "10", "50"], 0, "$25 = 0.5 \times b \times 10 \Rightarrow 25 = 5b \Rightarrow b=5$.", 10, 'medium'),
            generateQuestion("Area of a circle with $r=7$ (use $\pi=22/7$).", ["154", "44", "49", "14"], 0, "$22/7 \times 49 = 154$.", 10, 'medium'),
            generateQuestion("Volume of a cylinder if $Area=10$ and $h=5$.", ["50", "15", "25", "100"], 0, "Cross-section Area x Height.", 10, 'medium'),
            generateQuestion("Convert $500\text{ cm}^2$ to $\text{m}^2$.", ["0.05", "5", "0.5", "50"], 0, "Divide by $100^2$ (10,000).", 10, 'medium'),
            generateQuestion("Diagonal of rectangle with sides 3 and 4?", ["5", "7", "12", "6"], 0, "$\sqrt{3^2 + 4^2} = 5$.", 10, 'medium'),
            generateQuestion("Total length of edges in a cube of side 2?", ["24", "8", "6", "12"], 0, "12 edges $\times$ 2 = 24.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Total surface area of cube with side 3?", ["54", "27", "9", "36"], 0, "$6 \times 3^2 = 54$.", 20, 'hard'),
            generateQuestion("Volume of triangular prism: base area=15, length=10.", ["150", "25", "75", "1500"], 0, "Base Area $\times$ Length.", 20, 'hard'),
            generateQuestion("Surface area of cuboid: 2x3x5?", ["62", "30", "15", "10"], 0, "$2(6 + 10 + 15) = 62$.", 20, 'hard'),
            generateQuestion("A rectangle area is 48, width is 6. Perimeter?", ["28", "14", "20", "10"], 0, "Length = 8. $2(8+6) = 28$.", 20, 'hard'),
            generateQuestion("Volume of solid if cross section is 20, length 5.", ["100", "25", "4", "10"], 0, "$20 \times 5 = 100$.", 20, 'hard'),
            generateQuestion("Find surface area of cylinder: $r=3, h=7$ (use $\pi=22/7$).", ["188.57", "132", "66", "200"], 0, "$2\pi r(r+h) = 2(22/7)(3)(10) = 1320/7 \approx 188.57$.", 20, 'hard'),
            generateQuestion("A path 1m wide is built around 10x10 garden. Path area?", ["44", "100", "121", "21"], 0, "$12^2 - 10^2 = 144 - 100 = 44$.", 20, 'hard'),
            generateQuestion("Radius of circle if Circumference is $20\pi$.", ["10", "20", "5", "3.14"], 0, "$2\pi r = 20\pi \Rightarrow r=10$.", 20, 'hard'),
            generateQuestion("Volume of object made of 10 cubes of side 2.", ["80", "20", "40", "100"], 0, "$10 \times (2^3) = 80$.", 20, 'hard'),
            generateQuestion("Surface area of cuboid doubles if all sides double?", ["False (it octuples)", "False (it quadruples)", "True", "Depends"], 1, "Area increases by scale factor squared ($2^2 = 4$).", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("How many faces in a cube?", ["6", "12", "8", "4"], 0, "Like a dice.", 5, 'easy'),
            generateQuestion("Circumference of circle with radius 7 (use $\pi=22/7$)?", ["44", "154", "14", "22"], 0, "$2 \times 22/7 \times 7 = 44$.", 5, 'easy'),
            generateQuestion("Area of rectangle: 2 by 5?", ["10", "7", "14", "25"], 0, "2 x 5 = 10.", 5, 'easy'),
            generateQuestion("Volume is measured in ___ units.", ["Cubic", "Square", "Linear", "Degree"], 0, "Volume is 3D.", 5, 'easy'),
            generateQuestion("Perimeter of triangle with sides 3, 4, 5?", ["12", "6", "15", "60"], 0, "$3+4+5=12$.", 5, 'easy'),
            generateQuestion("How many corners in a rectangle?", ["4", "3", "5", "1"], 0, "Four vertices.", 5, 'easy'),
            generateQuestion("Side of square is 4. Area?", ["16", "8", "12", "20"], 0, "4 x 4 = 16.", 5, 'easy'),
            generateQuestion("Units for surface area?", ["$\text{cm}^2$", "$\text{cm}^3$", "$\text{cm}$", "$\text{kg}$"], 0, "Area is 2D.", 5, 'easy'),
            generateQuestion("Which is longer, 1m or 100cm?", ["Neither", "1m", "100cm", "Depends"], 0, "They are exactly equal.", 5, 'easy'),
            generateQuestion("Volume of cuboid 1x1x1?", ["1", "3", "2", "0"], 0, "1 x 1 x 1 = 1.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Area of circle with radius 10 (leave in $\pi$)?", ["$100\pi$", "$20\pi$", "$10\pi$", "$50\pi$"], 0, "$\pi r^2$.", 10, 'medium'),
            generateQuestion("Find volume of prism: base area 5, length 20.", ["100", "25", "4", "50"], 0, "5 x 20 = 100.", 10, 'medium'),
            generateQuestion("Base=12, Height=8. Find Triangle Area.", ["48", "96", "20", "100"], 0, "0.5 x 12 x 8 = 48.", 10, 'medium'),
            generateQuestion("Find width of rectangle: Area=50, Length=10.", ["5", "10", "40", "60"], 0, "50 / 10 = 5.", 10, 'medium'),
            generateQuestion("Total surface area of cube with side 2?", ["24", "8", "4", "16"], 0, "$6 \times 4 = 24$.", 10, 'medium'),
            generateQuestion("Circumference of circle with Diameter=10 (in $\pi$).", ["$10\pi$", "$100\pi$", "$5\pi$", "$20\pi$"], 0, "$\pi d$.", 10, 'medium'),
            generateQuestion("Find Area of parallelogram: Base=5, Height=4.", ["20", "10", "9", "40"], 0, "Base x Height.", 10, 'medium'),
            generateQuestion("If Perimeter of square is 20, what is the side?", ["5", "4", "10", "20"], 0, "20 / 4 = 5.", 10, 'medium'),
            generateQuestion("How many $\text{cm}^3$ in $1\text{ liter}$?", ["1000", "100", "10", "1"], 0, "Standard metric conversion.", 10, 'medium'),
            generateQuestion("Area of trapezoid: $h=4, a=2, b=4$.", ["12", "24", "8", "16"], 0, "$0.5(2+4) \times 4 = 12$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find Radius if Area is $49\pi$.", ["7", "14", "49", "24.5"], 0, "$\sqrt{49} = 7$.", 20, 'hard'),
            generateQuestion("Surface area of cuboid 1x1x10?", ["42", "10", "12", "22"], 0, "$2(1 + 10 + 10) = 42$.", 20, 'hard'),
            generateQuestion("Melt 10x10 cube into 5x5 cubes. How many?", ["8", "2", "4", "10"], 0, "$1000 / 125 = 8$.", 20, 'hard'),
            generateQuestion("Diagonal of square with side 10 is $\approx$:", ["14.1", "10", "20", "100"], 0, "$\sqrt{10^2 + 10^2} = \sqrt{200} \approx 14.1$.", 20, 'hard'),
            generateQuestion("A cylinder has radius 3, height 10. Volume (in $\pi$)?", ["$90\pi$", "$30\pi$", "$60\pi$", "$100\pi$"], 0, "$\pi(3^2) \times 10 = 90\pi$.", 20, 'hard'),
            generateQuestion("Area of ring: big $R=10$, small $r=8$ (in $\pi$).", ["$36\pi$", "$4\pi$", "$2\pi$", "$100\pi$"], 0, "$100\pi - 64\pi = 36\pi$.", 20, 'hard'),
            generateQuestion("Double the radius of a circle. Area increases by:", ["4 times", "2 times", "$\pi$ times", "8 times"], 0, "Area $\propto r^2$.", 20, 'hard'),
            generateQuestion("Find total surface area of cuboid 1x2x3.", ["22", "6", "12", "11"], 0, "$2(2 + 3 + 6) = 22$.", 20, 'hard'),
            generateQuestion("Surface area of a sphere with $r=3$ (formula $4\pi r^2$).", ["$36\pi$", "$12\pi$", "$9\pi$", "$48\pi$"], 0, "$4\pi(9) = 36\pi$.", 20, 'hard'),
            generateQuestion("Find length of cuboid if Volume=60, Width=3, Height=4.", ["5", "10", "4", "12"], 0, "$60 / (3 \times 4) = 5$.", 20, 'hard')
        ]
    },
    'g1-s1-data': {
        learning: [
            // Easy (1-10)
            generateQuestion("What is the mode of 1, 2, 2, 3, 4?", ["2", "1", "3", "4"], 0, "Appears most often.", 5, 'easy'),
            generateQuestion("Mean of 2 and 8?", ["5", "10", "6", "4"], 0, "$(2+8)/2 = 5$.", 5, 'easy'),
            generateQuestion("Median of 1, 5, 9?", ["5", "1", "9", "15"], 0, "Middle value.", 5, 'easy'),
            generateQuestion("Range of 10, 20, 30?", ["20", "30", "10", "0"], 0, "$30 - 10 = 20$.", 5, 'easy'),
            generateQuestion("Sum of 3, 7, 10?", ["20", "10", "30", "0"], 0, "Total count.", 5, 'easy'),
            generateQuestion("The 'middle' value in a sorted list is the:", ["Median", "Mean", "Mode", "Range"], 0, "Sorted position.", 5, 'easy'),
            generateQuestion("Frequency is the number of:", ["Occurrences", "Averages", "Totals", "Categories"], 0, "How often something happens.", 5, 'easy'),
            generateQuestion("Mean of 1, 2, 3?", ["2", "1", "3", "6"], 0, "$6 / 3 = 2$.", 5, 'easy'),
            generateQuestion("Mode of 'Red', 'Blue', 'Red'?", ["Red", "Blue", "Both", "None"], 0, "Red appears twice.", 5, 'easy'),
            generateQuestion("Range of 5, 5, 5?", ["0", "5", "15", "1"], 0, "$5 - 5 = 0$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Mean of 3, 5, 7, 9?", ["6", "24", "5", "7"], 0, "$24/4 = 6$.", 10, 'medium'),
            generateQuestion("Median of 10, 2, 7, 5, 8?", ["7", "10", "5", "8"], 0, "Sorted: 2, 5, 7, 8, 10.", 10, 'medium'),
            generateQuestion("Mode of 1, 2, 3, 2, 4, 2, 5?", ["2", "1", "4", "5"], 0, "2 appears three times.", 10, 'medium'),
            generateQuestion("Range of -5, 0, 5, 10?", ["15", "10", "5", "0"], 0, "$10 - (-5) = 15$.", 10, 'medium'),
            generateQuestion("Angle for 25% of data in pie chart?", ["90", "25", "360", "100"], 0, "$0.25 \times 360 = 90$.", 10, 'medium'),
            generateQuestion("Mean of 10, 20, 30, 40?", ["25", "20", "30", "100"], 0, "$100 / 4 = 25$.", 10, 'medium'),
            generateQuestion("Find median of 1, 10, 100.", ["10", "1", "100", "37"], 0, "Middle term.", 10, 'medium'),
            generateQuestion("Mode of 5, 2, 5, 2, 3, 5?", ["5", "2", "3", "None"], 0, "5 appears most.", 10, 'medium'),
            generateQuestion("Total angle in a pie chart?", ["360", "180", "100", "90"], 0, "Full circle.", 10, 'medium'),
            generateQuestion("Frequency of 'A' in AAABBC?", ["3", "2", "1", "6"], 0, "Count the letters.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Mean of 5 numbers is 10. Sum?", ["50", "2", "15", "5"], 0, "$10 \times 5 = 50$.", 20, 'hard'),
            generateQuestion("Mean of 4 tests is 60. New mean if 5th test is 100?", ["68", "80", "70", "75"], 0, "$(240 + 100)/5 = 68$.", 20, 'hard'),
            generateQuestion("Median of 1, 2, 3, 4?", ["2.5", "2", "3", "5"], 0, "Average of 2 and 3.", 20, 'hard'),
            generateQuestion("In pie chart, 20% of 200 people like App. Angle?", ["72", "40", "20", "36"], 0, "$0.2 \times 360 = 72$.", 20, 'hard'),
            generateQuestion("Find x if mean of 2, 4, x is 5.", ["9", "10", "4", "15"], 0, "$6+x=15 \Rightarrow x=9$.", 20, 'hard'),
            generateQuestion("If we add 10 to every number in a list, the mean:", ["Increases by 10", "Stays same", "Decreases by 10", "Doubles"], 0, "Whole distribution shifts.", 20, 'hard'),
            generateQuestion("Median of $10, 20, 30, 40, 50, 60$?", ["35", "30", "40", "45"], 0, "Average of 30 and 40.", 20, 'hard'),
            generateQuestion("Range can never be:", ["Negative", "Zero", "Positive", "Large"], 0, "$Max - Min \ge 0$.", 20, 'hard'),
            generateQuestion("A pie chart slice is 120°. What percentage is this?", ["33.3", "25", "50", "12"], 0, "$120/360 = 1/3 \ approx 33.3\%$.", 20, 'hard'),
            generateQuestion("Mean of prime numbers between 1 and 10?", ["4.25", "5", "5.5", "4"], 0, "$(2+3+5+7)/4 = 17/4 = 4.25$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Another word for mean is:", ["Average", "Middle", "Most", "Spread"], 0, "Commonly used synonym.", 5, 'easy'),
            generateQuestion("Range is Max minus ___?", ["Min", "Mode", "Mean", "Median"], 0, "Definition of range.", 5, 'easy'),
            generateQuestion("Frequency means:", ["How many times", "The value", "The average", "The speed"], 0, "Count of occurrences.", 5, 'easy'),
            generateQuestion("Median of 10, 20, 30, 40, 50?", ["30", "20", "40", "25"], 0, "Middle unit.", 5, 'easy'),
            generateQuestion("Sum of 1, 1, 1, 1, 1?", ["5", "1", "0", "15"], 0, "Basic addition.", 5, 'easy'),
            generateQuestion("The most frequent value is the:", ["Mode", "Median", "Mean", "Range"], 0, "Definition of mode.", 5, 'easy'),
            generateQuestion("Find Mean of 0 and 10?", ["5", "0", "10", "2"], 0, "$(0+10)/2 = 5$.", 5, 'easy'),
            generateQuestion("Find Range of 1, 2, 3, 4, 10?", ["9", "10", "1", "5"], 0, "$10 - 1 = 9$.", 5, 'easy'),
            generateQuestion("In a list of 7 items, median is the ___ item?", ["4th", "3rd", "5th", "7th"], 0, "Middle of odd list.", 5, 'easy'),
            generateQuestion("Mean of 10 identical numbers is?", ["The number itself", "Zero", "The sum", "Infinite"], 0, "Average stays the same.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Mean of 0, 10, 20, 30, 40?", ["20", "15", "100", "5"], 0, "Sum=100, N=5.", 10, 'medium'),
            generateQuestion("Mode of 10, 10, 20, 30, 10?", ["10", "20", "30", "0"], 0, "10 is most frequent.", 10, 'medium'),
            generateQuestion("Range of 1, 1, 1, 1, 1?", ["0", "1", "5", "infinite"], 0, "$1 - 1 = 0$.", 10, 'medium'),
            generateQuestion("Median of 100, 200, 300, 400?", ["250", "200", "300", "500"], 0, "Average of middle two.", 10, 'medium'),
            generateQuestion("In pie chart, 180° represents:", ["50%", "100%", "25%", "75%"], 0, "Half a circle.", 10, 'medium'),
            generateQuestion("Mean age of 3 kids is 10. Total age?", ["30", "10", "13", "3"], 0, "$10 \times 3 = 30$.", 10, 'medium'),
            generateQuestion("If pie angle is 180°, percentage?", ["50%", "100%", "25%", "18%"], 0, "Half of the circle.", 10, 'medium'),
            generateQuestion("Median of 5, 2, 8, 1?", ["3.5", "5", "4", "10"], 0, "Sorted: 1, 2, 5, 8. Avg of 2 and 5.", 10, 'medium'),
            generateQuestion("Mean of first 5 whole numbers (0,1,2,3,4)?", ["2", "2.5", "3", "1.5"], 0, "$10 / 5 = 2$.", 10, 'medium'),
            generateQuestion("Find range of -10 to +10.", ["20", "0", "10", "-20"], 0, "$10 - (-10) = 20$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Mean of 10 people is 50kg. New mean if 100kg person joins?", ["54.5", "60", "75", "50"], 0, "$(500+100)/11 = 54.5$.", 20, 'hard'),
            generateQuestion("Find x if mean of x, 2x, 3x is 6.", ["3", "1", "6", "2"], 0, "$6x/3=6 \Rightarrow 2x=6 \Rightarrow x=3$.", 20, 'hard'),
            generateQuestion("Median of 10, 20, 30, 40, 50, 60?", ["35", "30", "40", "45"], 0, "Between 30 and 40.", 20, 'hard'),
            generateQuestion("Range of 10 values is 50. Min is 5. Max?", ["55", "45", "50", "10"], 0, "Max - 5 = 50.", 20, 'hard'),
            generateQuestion("If mode is x and data is 1, 1, x, 2, 2. x is?", ["1 or 2", "1", "2", "3"], 0, "Either makes it the mode.", 20, 'hard'),
            generateQuestion("Sum of 10 numbers is 100. Mean?", ["10", "100", "1", "0.1"], 0, "100 / 10 = 10.", 20, 'hard'),
            generateQuestion("If we multiply all data by 2, the mean:", ["Doubles", "Stays same", "Increases by 2", "Squares"], 0, "Scale factor applies to average.", 20, 'hard'),
            generateQuestion("Sum of deviations from the mean is always:", ["0", "1", "Depends on data", "Positive"], 0, "Property of the arithmetic mean.", 20, 'hard'),
            generateQuestion("Is it possible for the mean to be outside the range?", ["No", "Yes", "Only for negative numbers", "Only for large data"], 0, "Mean is always between min and max.", 20, 'hard'),
            generateQuestion("Average of 1/2 and 1/4?", ["3/8", "1/3", "3/4", "1/2"], 0, "$(0.5 + 0.25)/2 = 0.375 = 3/8$.", 20, 'hard')
        ]
    },

    // --- Sec 2 G1 ---
    'g1-s2-proportion': {
        learning: [
            // Easy (1-10)
            generateQuestion("If $y \propto x$ and $y=6$ when $x=2$, find $k$.", ["3", "12", "4", "8"], 0, "$y=kx \Rightarrow 6=k(2) \Rightarrow k=3$.", 5, 'easy'),
            generateQuestion("If $y$ is inversely proportional to $x$, formula is:", ["y = k/x", "y = kx", "y = x/k", "y = x+k"], 0, "Inverse property.", 5, 'easy'),
            generateQuestion("Direct proportion graph is a:", ["Straight line through origin", "Curved line", "Horizontal line", "Circle"], 0, "Linear relationship $y=kx$.", 5, 'easy'),
            generateQuestion("If $y=2x$, find $y$ when $x=10$.", ["20", "5", "12", "2"], 0, "$2 \times 10 = 20$.", 5, 'easy'),
            generateQuestion("If $y=12/x$, find $y$ when $x=3$.", ["4", "36", "15", "9"], 0, "$12/3 = 4$.", 5, 'easy'),
            generateQuestion("As x increases, y increases in:", ["Direct Proportion", "Inverse Proportion", "Neither", "Both"], 0, "Positive correlation.", 5, 'easy'),
            generateQuestion("If $y \propto x$, then $y/x$ is:", ["Constant", "Zero", "Changing", "Sum"], 0, "Ratio stays the same.", 5, 'easy'),
            generateQuestion("If $y=kx$ and $k=5$, find $y$ when $x=4$.", ["20", "1", "9", "5"], 0, "$5 \times 4 = 20$.", 5, 'easy'),
            generateQuestion("Identify inverse proportion:", ["y = 100/x", "y = 100x", "y = x + 100", "y = x^2"], 0, "Variable is in the denominator.", 5, 'easy'),
            generateQuestion("If $y$ is k times $x$, distance is ___ proportional to time.", ["Directly", "Inversely", "Not", "Square"], 0, "Speed is constant.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("If $y \propto x$ and $y=15$ when $x=3$. Find $y$ when $x=5$.", ["25", "15", "10", "45"], 0, "$y=5x \Rightarrow 5(5)=25$.", 10, 'medium'),
            generateQuestion("If $y \propto 1/x$ and $y=4$ when $x=3$. Find $k$.", ["12", "4/3", "7", "1"], 0, "$y=k/x \Rightarrow 4=k/3 \Rightarrow k=12$.", 10, 'medium'),
            generateQuestion("8 pens cost $$12$. Cost of 10 pens?", ["$15", "$14", "$16", "$20"], 0, "$1.5 \times 10 = 15$.", 10, 'medium'),
            generateQuestion("5 men build wall in 4 days. 2 men?", ["10 days", "1.6 days", "8 days", "6 days"], 0, "$5 \times 4 = 20$ man-days. $20/2 = 10$.", 10, 'medium'),
            generateQuestion("If $y \propto x^2$ and $y=8$ when $x=2$, find $k$.", ["2", "4", "1", "8"], 0, "$8 = k(4) \Rightarrow k=2$.", 10, 'medium'),
            generateQuestion("If $y \propto 1/x$ and $y=10, x=5$. Find $y$ when $x=2$.", ["25", "4", "20", "50"], 0, "$k=50, 50/2 = 25$.", 10, 'medium'),
            generateQuestion("A car travels 100km on 8L. Fuel for 150km?", ["12L", "10L", "14L", "16L"], 0, "$8 \times 1.5 = 12$.", 10, 'medium'),
            generateQuestion("If $p \propto q^3$ and $p=8$ when $q=2$, find $k$.", ["1", "2", "4", "0.5"], 0, "$8 = k(2^3) \Rightarrow k=1$.", 10, 'medium'),
            generateQuestion("If x and y are inversely proportional, $xy = $:", ["k", "x", "y", "0"], 0, "Product is constant.", 10, 'medium'),
            generateQuestion("10 workers take 6 hours. How many for 4 hours?", ["15", "12", "8", "20"], 0, "$60 / 4 = 15$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("If $y \propto 1/x$ and $y=10$ when $x=2$. Find $y$ when $x=5$.", ["4", "25", "2", "5"], 0, "$y=20/x \Rightarrow 20/5 = 4$.", 20, 'hard'),
            generateQuestion("If $z \propto \sqrt{x}$ and $z=6$ when $x=4$. Find $z$ when $x=16$.", ["12", "24", "9", "3"], 0, "$z=3\sqrt{x} \Rightarrow 3(4)=12$.", 20, 'hard'),
            generateQuestion("A car uses 5L for 60km. Fuel for 150km?", ["12.5L", "10L", "15L", "20L"], 0, "$150/12 = 12.5$.", 20, 'hard'),
            generateQuestion("Frequency is inverse to wavelength. If $f=100, \lambda=3$. Find $f$ if $\lambda=6$.", ["50", "200", "300", "600"], 0, "$k=300$. $300/6 = 50$.", 20, 'hard'),
            generateQuestion("Distance $d \propto t^2$. If $d=20$ when $t=2$. Find $d$ when $t=3$.", ["45", "30", "40", "25"], 0, "$d=5t^2 \Rightarrow 5(9)=45$.", 20, 'hard'),
            generateQuestion("If $P \propto 1/V$ and $P=5, V=10$. If V is halved, P?", ["Doubles", "Halves", "Squares", "Stays same"], 0, "Inverse relationship.", 20, 'hard'),
            generateQuestion("If $y \propto x^3$ and $x$ is doubled, y increases by:", ["8 times", "3 times", "9 times", "2 times"], 0, "$2^3 = 8$.", 20, 'hard'),
            generateQuestion("Radius $r \propto \sqrt[3]{V}$. If V is 8 times larger, r is:", ["2 times larger", "8 times larger", "4 times larger", "Same"], 0, "Cube root of 8 is 2.", 20, 'hard'),
            generateQuestion("If $y=k/x^2$ and $y=1$ when $x=6$. Find y when x=2.", ["9", "3", "36", "12"], 0, "$k=36, 36/4 = 9$.", 20, 'hard'),
            generateQuestion("6 men build house in 30 days. How many for 20 days?", ["9", "12", "4", "10"], 0, "$180 / 20 = 9$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Find $k$ if $y=kx$ and $y=20, x=4$.", ["5", "80", "24", "16"], 0, "20/4 = 5.", 5, 'easy'),
            generateQuestion("If $y=k/x$, $y$ and $x$ are ___ proportional.", ["Inversely", "Directly", "Linearly", "Not"], 0, "Basic terminology.", 5, 'easy'),
            generateQuestion("If price $p \propto$ weight $w$, then $p/w$ is:", ["Constant", "Zero", "Variable", "Sum"], 0, "Direct proportion ratio.", 5, 'easy'),
            generateQuestion("If $y=3x$, $x=7$, find $y$.", ["21", "10", "4", "14"], 0, "3 x 7.", 5, 'easy'),
            generateQuestion("If $y=50/x$, $x=5$, find $y$.", ["10", "250", "45", "55"], 0, "50 / 5.", 5, 'easy'),
            generateQuestion("In $y=8x$, what is $k$?", ["8", "x", "y", "0"], 0, "Constant of proportionality.", 5, 'easy'),
            generateQuestion("Does $y=x+2$ show direct proportion?", ["No", "Yes", "Only at origin", "Maybe"], 0, "Must pass through $(0,0)$.", 5, 'easy'),
            generateQuestion("If $y=1/x$, x=10, y=?", ["0.1", "10", "1", "0"], 0, "Simple division.", 5, 'easy'),
            generateQuestion("Double x, double y. This is:", ["Direct", "Inverse", "Square", "Cube"], 0, "Linear growth.", 5, 'easy'),
            generateQuestion("Formula for direct proportion?", ["y = kx", "y = k/x", "y = x + k", "y = x"], 0, "Multiplication relationship.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Cost of 3kg is $$9$. Cost of 7kg?", ["$21", "$15", "$18", "$30"], 0, "$3 \times 7 = 21$.", 10, 'medium'),
            generateQuestion("3 workers take 4 hours. 6 workers?", ["2 hours", "8 hours", "12 hours", "1 hour"], 0, "$3 \times 4 = 12$. $12/6 = 2$.", 10, 'medium'),
            generateQuestion("If $y \propto x$ and $y=12, x=2$, find $x$ when $y=30$.", ["5", "6", "10", "15"], 0, "$k=6, 30/6 = 5$.", 10, 'medium'),
            generateQuestion("If $y \propto 1/x$ and $y=2, x=6$. Find $y$ when $x=3$.", ["4", "1", "12", "6"], 0, "$k=12, 12/3 = 4$.", 10, 'medium'),
            generateQuestion("If $A \propto r^2$ and $A=50, r=5$. Find $k$.", ["2", "10", "5", "1"], 0, "$50/25 = 2$.", 10, 'medium'),
            generateQuestion("If $xy=24$ and $y=3$, find x.", ["8", "21", "72", "27"], 0, "$24/3 = 8$.", 10, 'medium'),
            generateQuestion("Weight of 5 bricks is 20kg. Weight of 12?", ["48kg", "40kg", "50kg", "60kg"], 0, "$4 \times 12 = 48$.", 10, 'medium'),
            generateQuestion("If $k=3$ and $y=k/x$, find $y$ when $x=0.5$.", ["6", "1.5", "3.5", "2.5"], 0, "$3/0.5 = 6$.", 10, 'medium'),
            generateQuestion("A recipe for 4 needs 2 eggs. For 10?", ["5", "4", "6", "8"], 0, "$0.5 \times 10 = 5$.", 10, 'medium'),
            generateQuestion("Graph of inverse proportion is a:", ["Curve (Hyperbola)", "Straight line", "Circle", "V-shape"], 0, "$y = k/x$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("If $y \propto 1/x^2$ and $y=9$ when $x=2$. Find $y$ when $x=3$.", ["4", "6", "13.5", "18"], 0, "$k=36, 36/9 = 4$.", 20, 'hard'),
            generateQuestion("If $v \propto \sqrt{h}$ and $v=10$ when $h=4$. Find $h$ when $v=25$.", ["25", "16", "100", "5"], 0, "$k=5, 25=5\sqrt{h} \Rightarrow 5=\sqrt{h} \Rightarrow h=25$.", 20, 'hard'),
            generateQuestion("Mop needs 3 people 20 mins. 5 people?", ["12 mins", "33 mins", "15 mins", "10 mins"], 0, "$60/5 = 12$.", 20, 'hard'),
            generateQuestion("Force $F \propto a$. If $F=50$ when $a=5$. Find $F$ when $a=12$.", ["120", "60", "100", "70"], 0, "$k=10, 10(12)=120$.", 20, 'hard'),
            generateQuestion("Pressure $P \propto 1/V$. If $P=10, V=2$. Find $V$ if $P=4$.", ["5", "8", "20", "2.5"], 0, "$k=20, 20/4 = 5$.", 20, 'hard'),
            generateQuestion("If $x$ is tripled, $k/x^2$ becomes:", ["1/9 as large", "1/3 as large", "9 times larger", "3 times larger"], 0, "Square scaling in denominator.", 20, 'hard'),
            generateQuestion("If $y \propto x$ and x increases by 20%, y increases by:", ["20%", "40%", "10%", "120%"], 0, "Linear relationship.", 20, 'hard'),
            generateQuestion("Find $k$ if $y \propto 1/(x+1)$ and $y=5, x=1$.", ["10", "5", "2", "1"], 0, "$5 = k/2 \Rightarrow k=10$.", 20, 'hard'),
            generateQuestion("3 machines do job in 10h. How many for 6h?", ["5", "6", "4", "2"], 0, "$30/6 = 5$.", 20, 'hard'),
            generateQuestion("If $y=kx^2$ and $y=30$ when $x=5$, find $y$ for $x=10$.", ["120", "60", "90", "250"], 0, "$k=30/25 = 1.2$. $1.2 \times 100 = 120$.", 20, 'hard')
        ]
    },
    'g1-s2-rate': {
        learning: [
            // Easy (1-10)
            generateQuestion("Formula for Speed?", ["Distance / Time", "Distance $\times$ Time", "Time / Distance", "Acceleration / Time"], 0, "Rate of distance per unit time.", 5, 'easy'),
            generateQuestion("Speed of 100km in 2 hours?", ["50 km/h", "200 km/h", "102 km/h", "98 km/h"], 0, "100 / 2 = 50.", 5, 'easy'),
            generateQuestion("Time taken for 60km at 20km/h?", ["3 hours", "1200 hours", "40 hours", "0.33 hours"], 0, "60 / 20 = 3.", 5, 'easy'),
            generateQuestion("Distance covered in 3 hours at 80km/h?", ["240 km", "83 km", "26.6 km", "120 km"], 0, "3 x 80 = 240.", 5, 'easy'),
            generateQuestion("Convert 72 km/h to m/s.", ["20 m/s", "10 m/s", "25 m/s", "720 m/s"], 0, "$72 \times 1000 / 3600 = 20$.", 5, 'easy'),
            generateQuestion("If you travel 5m in 1s, your speed is:", ["5 m/s", "1 m/s", "10 m/s", "0.2 m/s"], 0, "Distance per second.", 5, 'easy'),
            generateQuestion("How many seconds in 1 hour?", ["3600", "60", "360", "2400"], 0, "$60 \times 60 = 3600$.", 5, 'easy'),
            generateQuestion("A car travels 10km in 5 mins. Speed in km/min?", ["2", "0.5", "50", "10"], 0, "$10 / 5 = 2$.", 5, 'easy'),
            generateQuestion("Distance = Speed $\times$ _______.", ["Time", "Weight", "Volume", "Acceleration"], 0, "Basic speed formula.", 5, 'easy'),
            generateQuestion("Units for speed could be:", ["km/h", "m", "kg", "seconds"], 0, "Must be distance/time.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Average speed for 10km in 10 mins and 20km in 20 mins?", ["60 km/h", "1 km/min", "30 km/h", "40 km/h"], 0, "$Total Dist = 30$, $Time = 30$ mins $= 0.5$ h. $30/0.5 = 60$.", 10, 'medium'),
            generateQuestion("A car travels at 60km/h for 30 mins. Distance?", ["30 km", "1800 km", "120 km", "2 km"], 0, "$60 \times 0.5 = 30$.", 10, 'medium'),
            generateQuestion("Convert 15 m/s to km/h.", ["54 km/h", "45 km/h", "36 km/h", "150 km/h"], 0, "$15 \times 3.6 = 54$.", 10, 'medium'),
            generateQuestion("Train is 200m long, passes post in 10s. Speed?", ["20 m/s", "2000 m/s", "2 m/s", "10 m/s"], 0, "200 / 10 = 20.", 10, 'medium'),
            generateQuestion("Runner does 400m in 80s. Speed?", ["5 m/s", "8 m/s", "4 m/s", "10 m/s"], 0, "400 / 80 = 5.", 10, 'medium'),
            generateQuestion("How many km in 5000m?", ["5", "50", "0.5", "500"], 0, "Divide by 1000.", 10, 'medium'),
            generateQuestion("A bus takes 2h 30m for 150km. Average speed?", ["60 km/h", "75 km/h", "50 km/h", "100 km/h"], 0, "$150 / 2.5 = 60$.", 10, 'medium'),
            generateQuestion("Convert 10 m/s to km/h.", ["36", "10", "100", "1"], 0, "$10 \times 3.6 = 36$.", 10, 'medium'),
            generateQuestion("Distance covered at 12 m/s for 1 minute?", ["720m", "12m", "60m", "120m"], 0, "$12 \times 60 = 720$.", 10, 'medium'),
            generateQuestion("Slowest speed among these?", ["1 m/s", "10 km/h", "50 m/min", "1 mile/h"], 2, "$50\text{m/min} \approx 0.83 \text{m/s}$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Car goes 40km at 60km/h and 40km at 40km/h. Average speed?", ["48 km/h", "50 km/h", "45 km/h", "52 km/h"], 0, "$Total Time = 40/60 + 40/40 = 2/3 + 1 = 5/3$. $80 / (5/3) = 48$.", 20, 'hard'),
            generateQuestion("Convert 90 km/h to m/min.", ["1500 m/min", "900 m/min", "2500 m/min", "1000 m/min"], 0, "$90000 / 60 = 1500$.", 20, 'hard'),
            generateQuestion("Distance if speed is $v$ and time is $t$?", ["vt", "v/t", "t/v", "v+t"], 0, "Basic formula.", 20, 'hard'),
            generateQuestion("Speed limit 100km/h. In m/s it is roughly:", ["27.8 m/s", "10 m/s", "36 m/s", "50 m/s"], 0, "$100/3.6 \approx 27.8$.", 20, 'hard'),
            generateQuestion("A plane flies 1000km in 1h 15m. Speed?", ["800 km/h", "750 km/h", "900 km/h", "1000 km/h"], 0, "$1000 / 1.25 = 800$.", 20, 'hard'),
            generateQuestion("Average speed for 4km at 10km/h and 6km at 30km/h?", ["16.7 km/h", "20 km/h", "15 km/h", "25 km/h"], 0, "Time $= 0.4 + 0.2 = 0.6$. $10 / 0.6 = 16.67$.", 20, 'hard'),
            generateQuestion("Which is faster: 20 m/s or 100 km/h?", ["100 km/h", "20 m/s"], 0, "20 m/s $= 72$ km/h.", 20, 'hard'),
            generateQuestion("Distance covered in 45s at 120km/h?", ["1.5 km", "5.4 km", "1 km", "2 km"], 0, "$120 / 3.6 = 33.3\text{m/s} \times 45 = 1500\text{m}$.", 20, 'hard'),
            generateQuestion("Time to cover 1km at 3 m/s (in mins)?", ["5.56", "3.33", "10", "1"], 0, "$1000/3 = 333.3$s $\approx 5.56$ mins.", 20, 'hard'),
            generateQuestion("Train length 150m, speed 72km/h, time to pass 250m bridge?", ["20s", "15s", "10s", "25s"], 0, "$Total = 400$m. $72/3.6 = 20$m/s. $400/20 = 20$s.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Find distance: 50 km/h for 4 hours.", ["200 km", "12.5 km", "54 km", "46 km"], 0, "50 x 4.", 5, 'easy'),
            generateQuestion("Find time: 100m at 5 m/s.", ["20 s", "500 s", "105 s", "95 s"], 0, "100 / 5.", 5, 'easy'),
            generateQuestion("Speed of 15km in 30 mins?", ["30 km/h", "7.5 km/h", "45 km/h", "15 km/h"], 0, "$15 / 0.5 = 30$.", 5, 'easy'),
            generateQuestion("Unit of speed in science?", ["m/s", "km", "kg", "seconds"], 0, "Metric unit.", 5, 'easy'),
            generateQuestion("1 km/h is less than 1 m/s. True?", ["Yes", "No"], 0, "1 m/s = 3.6 km/h.", 5, 'easy'),
            generateQuestion("If speed=10, time=2, distance=?", ["20", "5", "12", "8"], 0, "Multiply.", 5, 'easy'),
            generateQuestion("Slowest: 10m/s or 10km/h?", ["10km/h", "10m/s"], 0, "10m/s = 36km/h.", 5, 'easy'),
            generateQuestion("A stationary object has speed:", ["0", "1", "Infinite", "Negative"], 0, "Not moving.", 5, 'easy'),
            generateQuestion("Formula for time?", ["Distance / Speed", "Speed / Distance", "D x S", "Speed + Distance"], 0, "Transpose the formula.", 5, 'easy'),
            generateQuestion("How many meters in 1.5 km?", ["1500", "150", "15", "15000"], 0, "Standard metric.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Average speed for 120km at 40km/h for 1h then 80km/h for 1h?", ["60 km/h", "120 km/h", "100 km/h", "40 km/h"], 0, "$Dist = 40 + 80 = 120$. $Time = 2$. $120/2 = 60$.", 10, 'medium'),
            generateQuestion("Convert 36 km/h to m/s.", ["10 m/s", "3.6 m/s", "100 m/s", "360 m/s"], 0, "$36/3.6 = 10$.", 10, 'medium'),
            generateQuestion("How far in 15 mins at 80 km/h?", ["20 km", "1200 km", "5.3 km", "40 km"], 0, "$80 \times 0.25 = 20$.", 10, 'medium'),
            generateQuestion("Speed if 500m covered in 2 mins?", ["250 m/min", "1000 m/min", "250 m/s", "125 m/min"], 0, "500 / 2 = 250.", 10, 'medium'),
            generateQuestion("A bus covers 30km in 45 mins. Speed?", ["40 km/h", "30 km/h", "20 km/h", "60 km/h"], 0, "$30 / 0.75 = 40$.", 10, 'medium'),
            generateQuestion("Distance for 2.5 hours at 12km/h?", ["30km", "24km", "36km", "14.5km"], 0, "$2.5 \times 12 = 30$.", 10, 'medium'),
            generateQuestion("Convert 45 km/h to m/s.", ["12.5", "10", "15", "4.5"], 0, "45 / 3.6 = 12.5.", 10, 'medium'),
            generateQuestion("If you run 2km in 12 mins, speed in km/h?", ["10", "12", "8", "6"], 0, "$2 / (12/60) = 2/0.2 = 10$.", 10, 'medium'),
            generateQuestion("Which is faster: 10 m/s or 30 km/h?", ["10 m/s", "30 km/h"], 0, "10 m/s = 36 km/h.", 10, 'medium'),
            generateQuestion("Time to walk 5km at 4km/h (in mins)?", ["75", "60", "90", "50"], 0, "$1.25$ hours $= 75$ mins.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Total time for 10km at 5km/h and 10km at 20km/h?", ["2.5 hours", "1.5 hours", "2 hours", "3 hours"], 0, "$2 + 0.5 = 2.5$.", 20, 'hard'),
            generateQuestion("Which is faster: 20 m/s or 70 km/h?", ["20 m/s", "70 km/h"], 0, "$20 \times 3.6 = 72$ km/h.", 20, 'hard'),
            generateQuestion("Speed of light is $\approx 300,000$ km/s. In km/h?", ["1.08 billion km/h", "300,000 km/h", "1 million km/h", "500,000 km/h"], 0, "$300,000 \times 3600 = 1.08 \times 10^9$.", 20, 'hard'),
            generateQuestion("Average speed for a circular lap of 400m in 50s?", ["8 m/s", "0 m/s", "400 m/s", "20 m/s"], 0, "$400 / 50 = 8$. (Velocity would be 0).", 20, 'hard'),
            generateQuestion("A car accelerates. Is average speed same as initial?", ["No", "Yes"], 0, "Speed changes.", 20, 'hard'),
            generateQuestion("Average speed: 100km at 50km/h then 100km at 100km/h?", ["66.7 km/h", "75 km/h", "80 km/h", "60 km/h"], 0, "$Time = 2+1=3$. $200/3 = 66.7$.", 20, 'hard'),
            generateQuestion("Convert 25 m/s to km/h.", ["90", "100", "72", "36"], 0, "$25 \times 3.6 = 90$.", 20, 'hard'),
            generateQuestion("How many minutes in 0.4 hours?", ["24", "40", "4", "30"], 0, "$0.4 \times 60 = 24$.", 20, 'hard'),
            generateQuestion("Distance covered in 20 mins at 12 m/s (in km)?", ["14.4", "1.44", "0.24", "144"], 0, "$12 \times 1200 = 14400$m $= 14.4$km.", 20, 'hard'),
            generateQuestion("Speed check: 7.2 km in 12 mins. Speed in m/s?", ["10", "12", "8", "6"], 0, "$7200 / 720 = 10$.", 20, 'hard')
        ]
    },
    'g1-s2-algebra-adv': {
        learning: [
            // Easy (1-10)
            generateQuestion("Expand: $3(x + y)$.", ["3x + 3y", "3x + y", "x + 3y", "3xy"], 0, "Distribute 3.", 5, 'easy'),
            generateQuestion("Simplify: $2a(3b)$.", ["6ab", "5ab", "2a+3b", "6a+b"], 0, "Multiply terms.", 5, 'easy'),
            generateQuestion("Factorise: $5x + 10y$.", ["5(x + 2y)", "5x(1 + 2y)", "10(0.5x + y)", "5(x + 10y)"], 0, "HCF is 5.", 5, 'easy'),
            generateQuestion("Evaluate $x^2 - y$ if $x=3, y=4$.", ["5", "2", "6", "13"], 0, "$9 - 4 = 5$.", 5, 'easy'),
            generateQuestion("Simplify: $a/2 + a/2$.", ["a", "a/4", "2a", "a^2/4"], 0, "Two halves make a whole.", 5, 'easy'),
            generateQuestion("Expand: $x(x+1)$.", ["x^2 + x", "2x + 1", "x^2 + 1", "2x"], 0, "Distribute x.", 5, 'easy'),
            generateQuestion("Simplify: $5a - 2a + a$.", ["4a", "3a", "2a", "6a"], 0, "Combine like terms.", 5, 'easy'),
            generateQuestion("Value of $2x^3$ if $x=2$?", ["16", "8", "64", "12"], 0, "$2 \times 8 = 16$.", 5, 'easy'),
            generateQuestion("Factorise: $3x - 3$.", ["3(x - 1)", "3x(1 - 1)", "3(x - 3)", "x(3 - 3)"], 0, "Take out 3.", 5, 'easy'),
            generateQuestion("Simplify: $ab/a$.", ["b", "a", "1", "ab^2"], 0, "Cancel common factor.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Expand: $(x+1)(x+2)$.", ["x^2 + 3x + 2", "x^2 + 2x + 1", "x^2 + 3", "x^2 + 2"], 0, "$x^2 + 2x + x + 2$.", 10, 'medium'),
            generateQuestion("Expand: $(x-3)^2$.", ["x^2 - 6x + 9", "x^2 - 9", "x^2 + 9", "x^2 - 3x + 9"], 0, "$(x-3)(x-3)$.", 10, 'medium'),
            generateQuestion("Factorise: $x^2 + 5x$.", ["x(x + 5)", "5(x + 1)", "x^2(1+5/x)", "x(x + 1)"], 0, "Common factor x.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{4x^2}{2x}$.", ["2x", "2", "4x", "2x^2"], 0, "$4/2=2, x^2/x = x$.", 10, 'medium'),
            generateQuestion("Simplify: $3(x-1) - 2(x-2)$.", ["x + 1", "x - 5", "x - 1", "5x - 7"], 0, "$3x-3 - 2x+4 = x+1$.", 10, 'medium'),
            generateQuestion("Expand: $2x(3x-4)$.", ["6x^2 - 8x", "6x - 8", "5x^2 - 8x", "6x^2 - 4"], 0, "Distribute 2x.", 10, 'medium'),
            generateQuestion("Factorise: $4a^2 + 6a$.", ["2a(2a + 3)", "4a(a + 1.5)", "2(2a^2 + 3a)", "a(4a + 6)"], 0, "HCF is 2a.", 10, 'medium'),
            generateQuestion("Simplify: $(2x^2)^3$.", ["8x^6", "6x^5", "8x^5", "4x^6"], 0, "$2^3 \times x^{2 \times 3} = 8x^6$.", 10, 'medium'),
            generateQuestion("Evaluate $\sqrt{b^2 - 4ac}$ if $a=1, b=5, c=6$.", ["1", "5", "6", "0"], 0, "$\sqrt{25 - 24} = 1$.", 10, 'medium'),
            generateQuestion("Factorise: $xy - xz$.", ["x(y - z)", "y(x - z)", "z(y - x)", "xyz"], 0, "Common factor x.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Expand: $(2x+1)(3x-2)$.", ["6x^2 - x - 2", "6x^2 + x - 2", "6x^2 - 4x + 3x - 1", "5x - 1"], 0, "$6x^2 - 4x + 3x - 2$.", 20, 'hard'),
            generateQuestion("Factorise: $a^2 - b^2$.", ["(a-b)(a+b)", "(a-b)^2", "a(a-b)", "ab(a-b)"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{x}{2} - \frac{x}{3}$.", ["x/6", "x/5", "x/-1", "1/6"], 0, "$(3x - 2x)/6 = x/6$.", 20, 'hard'),
            generateQuestion("Factorise: $x^2 + 6x + 9$.", ["(x+3)^2", "(x+3)(x-3)", "(x+6)(x+3)", "x(x+6)+9"], 0, "Perfect square trinomial.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{12a^2b}{4ab^2}$.", ["3a/b", "3ab", "3a^2", "3b/a"], 0, "$(12/4)(a^2/a)(b/b^2) = 3a/b$.", 20, 'hard'),
            generateQuestion("Factorise: $3x^2 - 27$.", ["3(x-3)(x+3)", "3(x^2-9)", "(3x-9)(x+3)", "3(x-3)^2"], 0, "$3(x^2-9)$.", 20, 'hard'),
            generateQuestion("Expand: $(x+y)(x^2-xy+y^2)$.", ["x^3 + y^3", "x^3 - y^3", "x^2 + y^2", "x^3 + 3x^2y + 3xy^2 + y^3"], 0, "Sum of cubes.", 20, 'hard'),
            generateQuestion("Simplify: $(x/y)^{-2}$.", ["(y/x)^2", "(x/y)^2", "x^2/y^2", "1"], 0, "Negative power flips fraction.", 20, 'hard'),
            generateQuestion("Factorise: $x^2 + 7x + 10$.", ["(x+5)(x+2)", "(x+10)(x+1)", "(x+7)(x+3)", "(x-5)(x-2)"], 0, "Split the middle.", 20, 'hard'),
            generateQuestion("Solve for x: $ax + b = c$.", ["(c-b)/a", "c-b-a", "c/a - b", "ab/c"], 0, "Linear rearrangement.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Expand: $x(x + 2)$.", ["x^2 + 2x", "2x + 2", "x^2 + 2", "x+x+2"], 0, "Multiply x by both terms.", 5, 'easy'),
            generateQuestion("Factorise: $2a + 2b$.", ["2(a + b)", "2ab", "a + b", "4(a + b)"], 0, "Common factor 2.", 5, 'easy'),
            generateQuestion("Simplify: $3x - (x + 1)$.", ["2x - 1", "2x + 1", "4x - 1", "2x"], 0, "$3x - x - 1$.", 5, 'easy'),
            generateQuestion("Evaluate $ab$ if $a=0.5, b=10$.", ["5", "0.5", "10.5", "50"], 0, "Half of 10.", 5, 'easy'),
            generateQuestion("Simplify: $x^2/x$.", ["x", "1", "x^2", "0"], 0, "Subtract powers.", 5, 'easy'),
            generateQuestion("Simplify: $2(a+b)$.", ["2a+2b", "2ab", "a+2b", "2a+b"], 0, "Distribute.", 5, 'easy'),
            generateQuestion("Factorise: $ax + ay$.", ["a(x+y)", "x(a+y)", "y(a+x)", "axy"], 0, "Common factor a.", 5, 'easy'),
            generateQuestion("Value of $x^0$ (if $x \neq 0$)?", ["1", "0", "x", "Infinite"], 0, "Anything to power 0 is 1.", 5, 'easy'),
            generateQuestion("Simplify: $3x + 4x - x$.", ["6x", "7x", "8x", "0"], 0, "Basic linear terms.", 5, 'easy'),
            generateQuestion("Square of 3x?", ["9x^2", "3x^2", "6x^2", "9x"], 0, "$(3x)^2 = 9x^2$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Expand: $(x+5)(x-5)$.", ["x^2 - 25", "x^2 + 25", "x^2 + 10x + 25", "x^2 - 10x + 25"], 0, "$x^2 - 5x + 5x - 25$.", 10, 'medium'),
            generateQuestion("Factorise: $3x^2 - 6x$.", ["3x(x - 2)", "3(x^2 - 2x)", "x(3x - 6)", "3x(x - 6)"], 0, "HCF is 3x.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{10(x+1)}{5}$.", ["2(x+1)", "2x + 1", "10x + 5", "2x + 5"], 0, "Divide 10 by 5.", 10, 'medium'),
            generateQuestion("Simplify: $x - 0.5(2x - 4)$.", ["2", "x - x + 2", "2x", "x - 1"], 0, "$x - x + 2 = 2$.", 10, 'medium'),
            generateQuestion("Expand: $-(a - b)$.", ["b - a", "-a - b", "a + b", "-ab"], 0, "$-a + b$.", 10, 'medium'),
            generateQuestion("Coefficient of x in $3x^2 + 5x - 2$?", ["5", "3", "-2", "0"], 0, "The number in front of x.", 10, 'medium'),
            generateQuestion("Factorise: $x^2 - x$.", ["x(x - 1)", "x(1 - 1)", "x^2(1 - 1/x)", "x(x + 1)"], 0, "Take out x.", 10, 'medium'),
            generateQuestion("Simplify: $(a^2)^4$.", ["a^8", "a^6", "a^{16}", "a^2"], 0, "Power of a power rule.", 10, 'medium'),
            generateQuestion("Simplify: $3a \times 4b$.", ["12ab", "7ab", "12a+b", "7a+b"], 0, "Multiply coefficients and variables.", 10, 'medium'),
            generateQuestion("Find x if $2(x-1)=8$.", ["5", "4", "3", "6"], 0, "$x-1=4$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Factorise: $x^2 - 9$.", ["(x-3)(x+3)", "(x-3)^2", "3(x-3)", "x(x-9)"], 0, "Difference of squares.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{a}{4} + \frac{a}{5}$.", ["9a/20", "2a/9", "a/20", "a/9"], 0, "$(5a + 4a)/20 = 9a/20$.", 20, 'hard'),
            generateQuestion("Expand: $(3x-1)^2$.", ["9x^2 - 6x + 1", "9x^2 + 1", "9x^2 - 1", "3x^2 - 6x + 1"], 0, "$9x^2 - 3x - 3x + 1$.", 20, 'hard'),
            generateQuestion("Factorise completely: $2x^2 - 8$.", ["2(x-2)(x+2)", "2(x^2-4)", "(2x-4)(x+2)", "2(x-4)(x+4)"], 0, "$2(x^2-4) = 2(x-2)(x+2)$.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{(x+1)^2}{x+1}$.", ["x+1", "1", "x^2+1", "2"], 0, "Cancel one factor.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{1}{x} + \frac{1}{y}$.", ["(x+y)/xy", "2/(x+y)", "1/xy", "xy"], 0, "Common denominator.", 20, 'hard'),
            generateQuestion("Expand: $(a+b+c)^2$.", ["a^2+b^2+c^2+2ab+2bc+2ca", "a^2+b^2+c^2", "(a+b)^2+c^2", "a^3+b^3+c^3"], 0, "Trinomial square.", 20, 'hard'),
            generateQuestion("Factorise: $x^2 - 5x + 6$.", ["(x-2)(x-3)", "(x+2)(x+3)", "(x-6)(x-1)", "(x+6)(x-1)"], 0, "Product=6, Sum=-5.", 20, 'hard'),
            generateQuestion("Simplify: $\sqrt{16x^4}$.", ["4x^2", "4x", "8x^2", "16x^2"], 0, "Root of 16 and root of $x^4$.", 20, 'hard'),
            generateQuestion("If $x+1/x = 3$, find $x^2 + 1/x^2$.", ["7", "9", "5", "11"], 0, "$(x+1/x)^2 = x^2 + 2 + 1/x^2 \Rightarrow 9 = x^2 + 2 + 1/x^2$.", 20, 'hard')
        ]
    },
    'g1-s2-graphs': {
        learning: [
            // Easy (1-10)
            generateQuestion("Shape of $y = x^2$?", ["Parabola", "Straight line", "Circle", "Wave"], 0, "U-shape.", 5, 'easy'),
            generateQuestion("Y-intercept of $y = x^2 + 5$?", ["5", "0", "1", "-5"], 0, "When x=0, y=5.", 5, 'easy'),
            generateQuestion("Does $y = -x^2$ open up or down?", ["Down", "Up", "Left", "Right"], 0, "Negative coefficient.", 5, 'easy'),
            generateQuestion("Find y if $y = x^2 - 1$ and $x = 3$.", ["8", "9", "10", "2"], 0, "$9 - 1 = 8$.", 5, 'easy'),
            generateQuestion("What is a maximum point?", ["Highest peak", "Lowest valley", "Starting point", "End point"], 0, "Top of a frown.", 5, 'easy'),
            generateQuestion("Gradient of a horizontal line?", ["0", "1", "Infinite", "Negative"], 0, "No rise.", 5, 'easy'),
            generateQuestion("The point $(0,0)$ is called the:", ["Origin", "Vertex", "Intercept", "Center"], 0, "Standard name.", 5, 'easy'),
            generateQuestion("Equation of x-axis?", ["y = 0", "x = 0", "y = x", "None"], 0, "Horizontal line at height 0.", 5, 'easy'),
            generateQuestion("Is $y=x^2$ symmetrical about the y-axis?", ["Yes", "No"], 0, "It is an even function.", 5, 'easy'),
            generateQuestion("Find y if $y = 2x^2$ and $x=1$.", ["2", "4", "1", "0"], 0, "Simple substitution.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("X-intercepts of $y = x(x-4)$?", ["0 and 4", "0 and -4", "4 and -4", "No intercepts"], 0, "Set each factor to zero.", 10, 'medium'),
            generateQuestion("Line of symmetry for $y = x^2 - 4x$?", ["x = 2", "x = 4", "x = 0", "y = 2"], 0, "Midpoint of 0 and 4.", 10, 'medium'),
            generateQuestion("Minimum value of $y = x^2 + 3$?", ["3", "0", "-3", "Infinite"], 0, "Occurs at x=0.", 10, 'medium'),
            generateQuestion("Gradient of $y = 3x^2$ at $x=0$?", ["0", "3", "6", "Undefined"], 0, "Turning point.", 10, 'medium'),
            generateQuestion("Does $(1, 2)$ lie on $y = x^2 + 1$?", ["Yes", "No"], 0, "$2 = 1^2 + 1$.", 10, 'medium'),
            generateQuestion("Vertex of $y = (x-2)^2$?", ["(2, 0)", "(-2, 0)", "(0, 2)", "(0, 4)"], 0, "Shifted right by 2.", 10, 'medium'),
            generateQuestion("Turning point of $y = -x^2 + 10$?", ["(0, 10)", "(10, 0)", "(0, 0)", "(0, -10)"], 0, "Shifted up by 10.", 10, 'medium'),
            generateQuestion("X-intercepts of $y = x^2 - 4$?", ["2 and -2", "4 and -4", "0 and 2", "No intercepts"], 0, "$x^2=4$.", 10, 'medium'),
            generateQuestion("Which is wider: $y=x^2$ or $y=0.5x^2$?", ["y=0.5x^2", "y=x^2"], 0, "Smaller coefficient leads to wider curve.", 10, 'medium'),
            generateQuestion("Find y-intercept of $y = (x-1)(x+3)$.", ["-3", "3", "1", "0"], 0, "Set x=0.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find vertex of $y = (x-3)^2 + 4$.", ["(3, 4)", "(-3, 4)", "(3, -4)", "(4, 3)"], 0, "Standard completion form.", 20, 'hard'),
            generateQuestion("X-intercepts of $y = x^2 - 9$?", ["3 and -3", "9 and -9", "0 and 9", "No intercepts"], 0, "$x^2 = 9 \Rightarrow x = \pm 3$.", 20, 'hard'),
            generateQuestion("Turning point of $y = x^2 + 6x + 8$?", ["(-3, -1)", "(3, 1)", "(-3, 8)", "(0, 8)"], 0, "x = -6/2 = -3. $y = 9 - 18 + 8 = -1$.", 20, 'hard'),
            generateQuestion("Number of intersections for $y=x^2$ and $y=-1$?", ["0", "1", "2", "Infinite"], 0, "x^2 cannot be -1.", 20, 'hard'),
            generateQuestion("Line of symmetry for $y = (x+5)(x-1)$?", ["x = -2", "x = 2", "x = -3", "x = 3"], 0, "$(-5 + 1)/2 = -2$.", 20, 'hard'),
            generateQuestion("Range of $y = x^2 + c$?", ["$y \ge c$", "$y \le c$", "All y", "y > 0"], 0, "Minimum is at vertex.", 20, 'hard'),
            generateQuestion("Vertex of $y = x^2 - 2x + 5$ in form $(x-h)^2+k$?", ["(1, 4)", "(1, 5)", "(2, 1)", "(1, -4)"], 0, "$(x-1)^2 + 4$.", 20, 'hard'),
            generateQuestion("If $y=ax^2+bx+c$ passes through $(0,0)$, then:", ["c = 0", "a = 0", "b = 0", "abc = 1"], 0, "Constant term must be zero.", 20, 'hard'),
            generateQuestion("X-intercepts of $y = x^2 - 5x + 4$?", ["1 and 4", "-1 and -4", "2 and 2", "No intercepts"], 0, "$(x-1)(x-4)$.", 20, 'hard'),
            generateQuestion("Coordinate of turning point for $y = a(x-h)^2 + k$?", ["(h, k)", "(-h, k)", "(h, -k)", "(k, h)"], 0, "Vertex form.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Equation for a parabola?", ["$y = ax^2 + bx + c$", "$y = mx + c$", "$x^2 + y^2 = r^2$", "$y = 1/x$"], 0, "Quadratic form.", 5, 'easy'),
            generateQuestion("Y-intercept of $y = 3x^2 - 2$?", ["-2", "3", "0", "2"], 0, "Constant term.", 5, 'easy'),
            generateQuestion("Highest point on a curve is a ___.", ["Maximum", "Minimum", "Origin", "Intercept"], 0, "Peak.", 5, 'easy'),
            generateQuestion("If $y = 2x^2, x=2$, find $y$.", ["8", "4", "16", "2"], 0, "$2 \times 4 = 8$.", 5, 'easy'),
            generateQuestion("Is $y = 5x^2$ a 'smile'?", ["Yes", "No"], 0, "Positive lead.", 5, 'easy'),
            generateQuestion("X-intercept occurs when ___ = 0.", ["y", "x", "a", "Gradient"], 0, "Crossing the horizontal axis.", 5, 'easy'),
            generateQuestion("Gradient of $y=x^2$ at origin?", ["0", "1", "Undefined", "2"], 0, "Horizontal tangent.", 5, 'easy'),
            generateQuestion("Vertex of $y=x^2$?", ["(0,0)", "(1,1)", "(0,1)", "(1,0)"], 0, "Lowest point.", 5, 'easy'),
            generateQuestion("Simple quadratic equation?", ["$y=x^2$", "$y=2x$", "$y=3$", "$y=x^3$"], 0, "Power of 2.", 5, 'easy'),
            generateQuestion("A parabola is symmetric. True?", ["Yes", "No"], 0, "Has an axis of symmetry.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Turning point of $y = (x+2)^2$?", ["(-2, 0)", "(2, 0)", "(0, 4)", "(0, -2)"], 0, "Vertex form.", 10, 'medium'),
            generateQuestion("X-intercepts of $y = x^2 - 1$?", ["1 and -1", "0 and 1", "1 only", "No intercepts"], 0, "Squares of 1.", 10, 'medium'),
            generateQuestion("Line of symmetry for $y = x^2$?", ["x = 0", "y = 0", "y = x", "None"], 0, "The y-axis.", 10, 'medium'),
            generateQuestion("Does curve $y = x^2 + 4$ cross x-axis?", ["No", "Yes"], 0, "Minimum is 4.", 10, 'medium'),
            generateQuestion("Vertex of $y = x^2 - 10$?", ["(0, -10)", "(10, 0)", "(0, 0)", "(0, 10)"], 0, "No bx term.", 10, 'medium'),
            generateQuestion("If $y = (x-1)(x-5)$, x-intercepts are:", ["1 and 5", "-1 and -5", "0 and 5", "1 and 0"], 0, "Values that make y zero.", 10, 'medium'),
            generateQuestion("Shape of $y = 10x - x^2$?", ["Frown (Maximum)", "Smile (Minimum)", "Straight line", "Circle"], 0, "Negative lead coefficient.", 10, 'medium'),
            generateQuestion("Line of symmetry for $y = (x+2)(x+8)$?", ["x=-5", "x=5", "x=-3", "x=3"], 0, "$(-2-8)/2 = -5$.", 10, 'medium'),
            generateQuestion("Does $(2, 10)$ lie on $y = 2x^2 + 2$?", ["Yes", "No"], 0, "$2(4)+2 = 10$.", 10, 'medium'),
            generateQuestion("Find y if $y = (x+1)^2$ and $x=2$.", ["9", "4", "3", "5"], 0, "$3^2 = 9$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Turning point of $y = 2(x-1)^2 - 5$?", ["(1, -5)", "(-1, -5)", "(1, 5)", "(2, -5)"], 0, "Vertex form.", 20, 'hard'),
            generateQuestion("How many x-intercepts if $c < 0$ for $y = x^2 + c$?", ["2", "1", "0", "Infinite"], 0, "Drops below axis.", 20, 'hard'),
            generateQuestion("Find x-intercepts of $y = x^2 - 5x + 6$.", ["2 and 3", "-2 and -3", "1 and 6", "No intercepts"], 0, "$(x-2)(x-3)$.", 20, 'hard'),
            generateQuestion("Equation of symmetry line for $y = ax^2 + bx + c$?", ["x = -b/2a", "x = b/2a", "y = c", "x = c"], 0, "Axis of symmetry formula.", 20, 'hard'),
            generateQuestion("Max value of $y = 10 - x^2$?", ["10", "0", "Infinite", "-10"], 0, "At x=0.", 20, 'hard'),
            generateQuestion("Line of symmetry for $y = x^2 + 8x - 2$?", ["x=-4", "x=4", "x=-8", "x=8"], 0, "$-8/2 = -4$.", 20, 'hard'),
            generateQuestion("X-intercepts of $y = 2x^2 - 18$?", ["3 and -3", "9 and -9", "0 and 9", "No intercepts"], 0, "$x^2=9$.", 20, 'hard'),
            generateQuestion("Is it possible for $y=x^2+bx+c$ to have NO x-intercepts?", ["Yes", "No"], 0, "If discriminant is negative.", 20, 'hard'),
            generateQuestion("Vertex of $y = x^2 + 10x$?", ["(-5, -25)", "(5, 25)", "(0, 0)", "(-5, 0)"], 0, "x=-5. $y=25-50=-25$.", 20, 'hard'),
            generateQuestion("As x becomes very large, $y=x^2$ becomes:", ["Very large", "Zero", "Stable", "Negative"], 0, "Growth is quadratic.", 20, 'hard')
        ]
    },
    'g1-s2-simuleq': {
        learning: [
            // Easy (1-10)
            generateQuestion("Solve substitution: $x = 3$ and $2x + y = 10$. find $y$.", ["4", "7", "6", "10"], 0, "$2(3) + y = 10 \Rightarrow 6+y=10 \Rightarrow y=4$.", 5, 'easy'),
            generateQuestion("If $y = 5$ and $x + y = 12$, find $x$.", ["7", "5", "17", "12"], 0, "$x + 5 = 12 \Rightarrow x=7$.", 5, 'easy'),
            generateQuestion("Solve: $x - y = 0$ and $x = 4$. find $y$.", ["4", "0", "-4", "8"], 0, "$4 - y = 0 \Rightarrow y=4$.", 5, 'easy'),
            generateQuestion("If $x = 2y$ and $y = 3$, find $x$.", ["6", "5", "1.5", "2"], 0, "$x = 2(3) = 6$.", 5, 'easy'),
            generateQuestion("Find $a+b$ if $a=10, b=5$.", ["15", "5", "50", "2"], 0, "Basic addition.", 5, 'easy'),
            generateQuestion("Solve $x+y=10$ and $x=y$. Find $x$.", ["5", "10", "0", "2"], 0, "$2x=10 \Rightarrow x=5$.", 5, 'easy'),
            generateQuestion("If $x-y=2$ and $x=5$, find $y$.", ["3", "7", "2", "0"], 0, "$5-y=2$.", 5, 'easy'),
            generateQuestion("Solve $2x=6$ and $x+y=5$. Find $y$.", ["2", "3", "1", "4"], 0, "$x=3, 3+y=5 \Rightarrow y=2$.", 5, 'easy'),
            generateQuestion("If $y=3x$ and $x=1$, find $y$.", ["3", "1", "4", "2"], 0, "$y=3(1)$.", 5, 'easy'),
            generateQuestion("Solve $x+2y=8$ and $x=0$. Find $y$.", ["4", "8", "2", "0"], 0, "$2y=8 \Rightarrow y=4$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve elimination: $x + y = 8$ and $x - y = 2$. Find $x$.", ["5", "3", "10", "6"], 0, "Add: $2x=10 \Rightarrow x=5$.", 10, 'medium'),
            generateQuestion("Solve $2x + y = 7$ and $x + y = 4$. Find $x$.", ["3", "1", "2", "4"], 0, "Subtract: $(2x-x) = 7-4 \Rightarrow x=3$.", 10, 'medium'),
            generateQuestion("If $3x - y = 5$ and $y = x + 1$, find $x$.", ["3", "2", "4", "1"], 0, "$3x - (x+1) = 5 \Rightarrow 2x-1=5 \Rightarrow 2x=6 \Rightarrow x=3$.", 10, 'medium'),
            generateQuestion("Solve $x + 2y = 10$ and $x + y = 6$. Find $y$.", ["4", "2", "6", "1"], 0, "Subtract: $y = 10-6 = 4$.", 10, 'medium'),
            generateQuestion("Find $(x,y)$ if $y=x+2$ and $y=2x$.", ["x=2, y=4", "x=4, y=6", "x=1, y=3", "x=0, y=2"], 0, "$2x = x+2 \Rightarrow x=2$.", 10, 'medium'),
            generateQuestion("Solve $x-y=5$ and $2x+y=7$. Find $x$.", ["4", "2", "6", "12"], 0, "Add: $3x=12 \Rightarrow x=4$.", 10, 'medium'),
            generateQuestion("If $2x-3y=1$ and $y=1$, find $x$.", ["2", "1", "3", "0"], 0, "$2x-3=1 \Rightarrow 2x=4 \Rightarrow x=2$.", 10, 'medium'),
            generateQuestion("Solve $x+y=12$ and $x-y=4$. Find $y$.", ["4", "8", "6", "2"], 0, "Subtract: $2y=8 \Rightarrow y=4$.", 10, 'medium'),
            generateQuestion("If $y=2x-1$ and $y=x+3$, find $x$.", ["4", "2", "5", "1"], 0, "$2x-1 = x+3 \Rightarrow x=4$.", 10, 'medium'),
            generateQuestion("Solve $3x+2y=12$ and $y=3$. Find $x$.", ["2", "4", "0", "6"], 0, "$3x+6=12 \Rightarrow 3x=6 \Rightarrow x=2$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve substitution: $y = 2x$ and $3x + y = 15$. find $x$.", ["3", "5", "6", "2"], 0, "$3x + 2x = 15 \Rightarrow 5x=15 \Rightarrow x=3$.", 20, 'hard'),
            generateQuestion("Solve $2x + 3y = 12$ and $x + 3y = 9$. find $y$.", ["2", "3", "4", "1"], 0, "$x = 12-9=3$. $3+3y=9 \Rightarrow 3y=6 \Rightarrow y=2$.", 20, 'hard'),
            generateQuestion("Solve $3x + 4y = 18$ and $x - 2y = -4$. Find $x$.", ["2", "4", "6", "0"], 0, "$x=2y-4$. $3(2y-4)+4y=18 \Rightarrow 10y-12=18 \Rightarrow 10y=30 \Rightarrow y=3$. $x=6-4=2$.", 20, 'hard'),
            generateQuestion("Find $x$ and $y$: $5x + 2y = 16$ and $3x - y = 3$.", ["x=2, y=3", "x=3, y=0.5", "x=1, y=5.5", "x=4, y=-2"], 0, "$y=3x-3$. $5x + 2(3x-3)=16 \Rightarrow 11x-6=16 \Rightarrow 11x=22 \Rightarrow x=2, y=3$.", 20, 'hard'),
            generateQuestion("Solve $a+b=20$ and $2a+3b=50$. find $b$.", ["10", "5", "15", "0"], 0, "$2(20-b)+3b=50 \Rightarrow 40-2b+3b=50 \Rightarrow b=10$.", 20, 'hard'),
            generateQuestion("Solve $x/2 + y = 5$ and $x - y = 1$. Find $x$.", ["4", "3", "2", "6"], 0, "$y=x-1$. $x/2 + x-1 = 5 \Rightarrow 1.5x=6 \Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("If $2x+y=11$ and $3x-2y=6$, find $y$.", ["3", "4", "2", "5"], 0, "$y=11-2x$. $3x-2(11-2x)=6 \Rightarrow 7x-22=6 \Rightarrow x=4, y=3$.", 20, 'hard'),
            generateQuestion("Solve $4x+3y=25$ and $x+2y=10$. Find $x$.", ["4", "2", "5", "3"], 0, "$x=10-2y$. $4(10-2y)+3y=25 \Rightarrow 40-5y=25 \Rightarrow 5y=15 \Rightarrow y=3, x=4$.", 20, 'hard'),
            generateQuestion("If $x-y=1$ and $x^2-y^2=7$, find $x+y$.", ["7", "1", "49", "14"], 0, "$(x-y)(x+y)=7 \Rightarrow 1(x+y)=7$.", 20, 'hard'),
            generateQuestion("Solve $2/x + 1/y = 1$ and $x=4$. Find $y$.", ["2", "1", "4", "0.5"], 0, "$0.5 + 1/y=1 \Rightarrow 1/y=0.5 \Rightarrow y=2$.", 20, 'hard')
        ],
        testing: [
            // Easy
            generateQuestion("When dealing with simultaneous equations, what does the 'solution' physically represent?", ["Intersection point on a graph", "The gradient", "The x-axis", "The origin"], 0, "**Lesson**: A pair of coordinates $(x,y)$ that satisfies BOTH equations is exactly the physical spot where their graph lines crash into each other.", 5, 'easy'),
            generateQuestion("If $x=2$ and $x+y=10$, find $y$.", ["8", "12", "5", "2"], 0, "Sub and solve.", 5, 'easy'),
            generateQuestion("Solve $y=2x$ and $x=1$. Find $y$.", ["2", "1", "3", "0.5"], 0, "Simple sub.", 5, 'easy'),
            generateQuestion("If $x-y=0$, then:", ["x = y", "x + y = 0", "x = -y", "x = 2y"], 0, "Rearrange.", 5, 'easy'),
            generateQuestion("Find $x$ if $x+y=5$ and $y=0$.", ["5", "0", "-5", "10"], 0, "Direct sub.", 5, 'easy'),
            generateQuestion("Solve $x+y=2$ and $x-y=0$. Find $x$.", ["1", "2", "0", "0.5"], 0, "$2x=2 \Rightarrow x=1$.", 5, 'easy'),
            generateQuestion("If $2x=10$, find $x$.", ["5", "20", "8", "12"], 0, "Basics.", 5, 'easy'),
            generateQuestion("Solve $x+3y=10$ and $y=2$. Find $x$.", ["4", "8", "6", "2"], 0, "$x+6=10$.", 5, 'easy'),
            generateQuestion("If $y=x-5$ and $x=10$, find $y$.", ["5", "15", "10", "0"], 0, "Subtract.", 5, 'easy'),
            generateQuestion("Solve $2x+y=5$ and $x=1$. Find $y$.", ["3", "4", "2", "1"], 0, "$2+y=5$.", 5, 'easy'),
            // Medium
            generateQuestion("Solve $y = x + 1$ and $y = 5 - x$.", ["x=2, y=3", "x=3, y=2", "x=1, y=4", "x=2.5, y=2.5"], 0, "**Lesson**: Since both equal $y$, set them equal to each other! $x + 1 = 5 - x \\Rightarrow 2x = 4 \\Rightarrow x=2$. Then $y = 2+1=3$.", 10, 'medium'),
            generateQuestion("Solve $3x - y = 7$ and $x + y = 5$. Find $x$.", ["3", "2", "4", "1"], 0, "Add: $4x=12 \Rightarrow x=3$.", 10, 'medium'),
            generateQuestion("If $2x + y = 10$ and $y = 2x$, find $x$.", ["2.5", "5", "2", "4"], 0, "$2x + 2x = 10 \Rightarrow 4x=10 \Rightarrow x=2.5$.", 10, 'medium'),
            generateQuestion("Solve $x + 2y = 8$ and $x - y = 2$. Find $y$.", ["2", "4", "6", "0"], 0, "Subtract: $3y=6 \Rightarrow y=2$.", 10, 'medium'),
            generateQuestion("Find $x$ if $y=2x$ and $y=x+5$.", ["5", "10", "2.5", "15"], 0, "$2x=x+5$.", 10, 'medium'),
            generateQuestion("Solve $2x+3y=13$ and $y=3$. Find $x$.", ["2", "4", "5", "3"], 0, "$2x+9=13$.", 10, 'medium'),
            generateQuestion("If $x-y=1$ and $x+y=9$, find $x$.", ["5", "4", "6", "10"], 0, "$2x=10$.", 10, 'medium'),
            generateQuestion("Solve $3x+y=10$ and $2x+y=7$. Find $x$.", ["3", "4", "5", "10"], 0, "Subtract: $x=3$.", 10, 'medium'),
            generateQuestion("If $y=x^2$ and $y=4$, positive $x$ is:", ["2", "16", "4", "1"], 0, "Root of 4.", 10, 'medium'),
            generateQuestion("Solve $x/3 + y = 4$ and $y=2$. Find $x$.", ["6", "12", "3", "2"], 0, "$x/3 = 2 \Rightarrow x=6$.", 10, 'medium'),
            // Hard
            generateQuestion("Solve elimination: $3x + 2y = 14$ and $x - 2y = -6$.", ["x=2, y=4", "x=4, y=2", "x=2, y=-4", "x=4, y=4"], 0, "**Lesson**: Add equations! $4x = 8 \\Rightarrow x = 2$. Plug back into second: $2 - 2y = -6 \\Rightarrow -2y = -8 \\Rightarrow y = 4$.", 20, 'hard'),
            generateQuestion("[Interleaved] 2 apples and 1 banana cost $$4$. 1 apple and 1 banana cost $$2.50$. Cost of 1 apple?", ["$1.50", "$1.00", "$2.00", "$2.50$"], 0, "**Lesson**: Let apple=$A$, banana=$B$. $2A+B=4$, $A+B=2.5$. Subtract the two equations! $A = 1.5$.", 20, 'hard'),
            generateQuestion("Solve $3x + 2y = 16$ and $2x + y = 9$. find $x$.", ["2", "3", "4", "5"], 0, "$y=9-2x$. $3x+18-4x=16 \Rightarrow -x=-2 \Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Find $y$ if $x+y=10$ and $x^2-y^2=20$.", ["4", "6", "2", "8"], 0, "$(x-y)(10)=20 \Rightarrow x-y=2$. Add to $x+y=10 \Rightarrow 2x=12, x=6, y=4$.", 20, 'hard'),
            generateQuestion("Solve $2x-y=5$ and $3x+2y=25$. Find $x$.", ["5", "10", "15", "0"], 0, "$y=2x-5. 3x+4x-10=25 \Rightarrow 7x=35 \Rightarrow x=5$.", 20, 'hard'),
            generateQuestion("Solve $1/x + 1/y = 5$ and $1/x - 1/y = 1$. Find $x$.", ["1/3", "3", "1/2", "2"], 0, "Add: $2/x=6 \Rightarrow x=1/3$.", 20, 'hard'),
            generateQuestion("Find $(x,y)$ for $y=3x-2$ and $x+y=6$.", ["(2,4)", "(1,1)", "(0,-2)", "(3,3)"], 0, "$x+3x-2=6 \Rightarrow 4x=8 \Rightarrow x=2$.", 20, 'hard'),
            generateQuestion("Solve $x+y+z=6, x+y=4, y+z=5$. Find $y$.", ["3", "1", "2", "4"], 0, "$z=2, x=1, y=3$.", 20, 'hard'),
            generateQuestion("If $2x+3y=0$ and $x+y=1$, find $x$.", ["3", "-2", "1", "-3"], 0, "$y=1-x$. $2x+3-3x=0 \Rightarrow -x=-3 \Rightarrow x=3$.", 20, 'hard'),
            generateQuestion("Solve $x/y = 2$ and $x+y = 9$. Find $y$.", ["3", "6", "4.5", "1"], 0, "$x=2y. 2y+y=9 \Rightarrow 3y=9 \Rightarrow y=3$.", 20, 'hard')
        ]
    },

    'g1-s2-pythagoras': {
        learning: [
            // Easy
            generateQuestion("Pythagoras strictly ONLY works seamlessly on triangles that violently feature a:", ["$90^\\circ$ angle", "$60^\\circ$ angle", "Equal sides", "Unknown curve"], 0, "**Formative Insight**: Pythagoras is the supreme ancient secret restricted to Right-Angled Triangles only.", 5, 'easy'),
            generateQuestion("In $a^2 + b^2 = c^2$, which letter represents the longest side?", ["c", "a", "b", "Any"], 0, "Hypotenuse is always c.", 5, 'easy'),
            generateQuestion("The side opposite the right angle is called the:", ["Hypotenuse", "Base", "Adjacent", "Height"], 0, "Basic terminology.", 5, 'easy'),
            generateQuestion("Calculate $3^2 + 4^2$.", ["25", "7", "12", "49"], 0, "$9 + 16 = 25$.", 5, 'easy'),
            generateQuestion("Square root of 100 is:", ["10", "20", "50", "5"], 0, "$10 \times 10 = 100$.", 5, 'easy'),
            generateQuestion("If sides are 3 and 4, find $c^2$.", ["25", "7", "12", "5"], 0, "$9 + 16 = 25$.", 5, 'easy'),
            generateQuestion("Can Pythagoras be used on an equilateral triangle directly?", ["No", "Yes"], 0, "Needs a right angle.", 5, 'easy'),
            generateQuestion("If $c^2 = 169$, find $c$.", ["13", "12", "14", "15"], 0, "$\sqrt{169} = 13$.", 5, 'easy'),
            generateQuestion("Find $a^2$ if $c^2=100$ and $b^2=64$.", ["36", "164", "3600", "4"], 0, "$100-64 = 36$.", 5, 'easy'),
            generateQuestion("Calculate $\sqrt{3^2 + 4^2}$.", ["5", "7", "12", "25"], 0, "$\sqrt{25}=5$.", 5, 'easy'),
            // Medium
            generateQuestion("Find the long hypotenuse if the shorter triangle legs are precisely 3 and 4.", ["5", "7", "1", "12"], 0, "**Formative Insight**: It's the classic 3-4-5 builder triangle: $3^2 + 4^2 = 9+16 = 25 \\Rightarrow \\sqrt{25} = 5$.", 10, 'medium'),
            generateQuestion("Find hypotenuse if legs are 5 and 12.", ["13", "17", "7", "60"], 0, "$25 + 144 = 169 \Rightarrow 13$.", 10, 'medium'),
            generateQuestion("Find hypotenuse if legs are 8 and 15.", ["17", "23", "7", "120"], 0, "$64 + 225 = 289 \Rightarrow 17$.", 10, 'medium'),
            generateQuestion("Find missing leg if hypotenuse is 10 and one leg is 6.", ["8", "4", "16", "2"], 0, "$100 - 36 = 64 \Rightarrow 8$.", 10, 'medium'),
            generateQuestion("Find missing leg if hypotenuse is 25 and one leg is 7.", ["24", "18", "32", "12"], 0, "$625 - 49 = 576 \Rightarrow 24$.", 10, 'medium'),
            generateQuestion("Is a triangle with sides 6, 8, 10 right-angled?", ["Yes", "No"], 0, "$36+64=100$.", 10, 'medium'),
            generateQuestion("Find diagonal of a rectangle with sides 5 and 12.", ["13", "17", "60", "7"], 0, "Form a right triangle.", 10, 'medium'),
            generateQuestion("Find $x$ in a triangle with legs 9 and 12.", ["15", "21", "3", "108"], 0, "$81+144=225 \Rightarrow 15$.", 10, 'medium'),
            generateQuestion("Find height of isosceles triangle with base 10 and side 13.", ["12", "8", "11.5", "5"], 0, "Half base is 5. $13^2 - 5^2 = 144 \Rightarrow 12$.", 10, 'medium'),
            generateQuestion("Diagonal of square with side 1. Value of $d^2$?", ["2", "1", "4", "1.414"], 0, "$1^2 + 1^2 = 2$.", 10, 'medium'),
            // Hard
            generateQuestion("Hypotenuse is brutally 13, one side is 5. Find the remaining missing leg.", ["12", "18", "8", "144"], 0, "**Formative Insight**: Finding a SHORTER side means you MUST subtract! $c^2 - a^2 = b^2$. So $169 - 25 = 144 \\Rightarrow \\sqrt{144} = 12$.", 20, 'hard'),
            generateQuestion("A $10\\text{m}$ ladder leans on a high wall, explicitly reaching $8\\text{m}$ up. Distance base is from the firm wall?", ["6m", "2m", "36m", "12.8m"], 0, "**Formative Insight**: Ladder is hypotenuse=10, vertical wall=8. Find horizontal base. $10^2 - 8^2 = 100 - 64 = 36$. $\\sqrt{36} = 6$.", 20, 'hard'),
            generateQuestion("Find distance between $(0,0)$ and $(6,8)$.", ["10", "14", "2", "48"], 0, "$\sqrt{6^2 + 8^2} = 10$.", 20, 'hard'),
            generateQuestion("Side of equilateral triangle is 10. Find vertical height.", ["8.66", "5", "10", "7.07"], 0, "$\sqrt{10^2 - 5^2} = \sqrt{75} \approx 8.66$.", 20, 'hard'),
            generateQuestion("Find $x$ if $x, x+2, 10$ are sides of right triangle (10 is hypot).", ["6", "8", "4", "5"], 0, "$x^2 + (x+2)^2 = 100 \Rightarrow x^2 + x^2 + 4x + 4 = 100 \Rightarrow 2x^2 + 4x - 96 = 0 \Rightarrow x^2 + 2x - 48 = 0$. $x=6$.", 20, 'hard'),
            generateQuestion("Diagonal of a cube with side 1. Length?", ["$\sqrt{3}$", "$\sqrt{2}$", "1", "3"], 0, "$\sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}$.", 20, 'hard'),
            generateQuestion("Rectangle diagonal is 26, one side is 24. Find area.", ["240", "120", "624", "48"], 0, "Other side $= \sqrt{26^2 - 24^2} = 10$. Area $= 24 \times 10 = 240$.", 20, 'hard'),
            generateQuestion("A chord of length 16 is 6cm from center of circle. Radius?", ["10", "8", "14", "12"], 0, "$r^2 = 6^2 + 8^2 = 100 \Rightarrow r=10$.", 20, 'hard'),
            generateQuestion("Find $x$ in the diagram where sides are $x, 15, 17$.", ["8", "2", "32", "16"], 0, "$17^2 - 15^2 = 64 \Rightarrow 8$.", 20, 'hard'),
            generateQuestion("Rhombus diagonals are 12 and 16. Find side length.", ["10", "28", "14", "20"], 0, "Diagonals bisect at $90^\circ$. Legs are 6 and 8. Side $= \sqrt{36+64} = 10$.", 20, 'hard')
        ],
        testing: [
            // Easy
            generateQuestion("Which is the correct Pythagoras formulation?", ["$c^2 = a^2 + b^2$", "$c = a + b$", "$c^2 = a^2 - b^2$", "$a^2 = b^2 + c^2$"], 0, "**Lesson**: The square of the absolute longest side (hypotenuse $c$) is strictly the sum of the squares of the two shorter legs.", 5, 'easy'),
            generateQuestion("Side opposite $90^\circ$ is ___.", ["Hypotenuse", "Adjacent", "Opposite", "Short"], 0, "Basic fact.", 5, 'easy'),
            generateQuestion("$5^2 + 12^2$ equals:", ["169", "17", "60", "119"], 0, "$25 + 144 = 169$.", 5, 'easy'),
            generateQuestion("Can we use Pythagoras for non-right triangles?", ["No", "Yes"], 0, "Only for right triangles.", 5, 'easy'),
            generateQuestion("$\sqrt{6^2 + 8^2}$ is:", ["10", "14", "100", "48"], 0, "$\sqrt{100}=10$.", 5, 'easy'),
            generateQuestion("In a 3-4-5 triangle, which is the hypotenuse?", ["5", "3", "4", "None"], 0, "Longest side.", 5, 'easy'),
            generateQuestion("If $a=1, b=1$, then $c^2$ is:", ["2", "1", "4", "1.414"], 0, "Sum of squares.", 5, 'easy'),
            generateQuestion("Find $b$ if $c^2=25$ and $a^2=9$.", ["4", "16", "5", "3"], 0, "$\sqrt{25-9}=4$.", 5, 'easy'),
            generateQuestion("Unit of measurement for length?", ["cm", "$cm^2$", "$cm^3$", "kg"], 0, "Linear units.", 5, 'easy'),
            generateQuestion("If $c=13, a=5$, find $b^2$.", ["144", "12", "169", "25"], 0, "$169-25=144$.", 5, 'easy'),
            // Medium
            generateQuestion("Right triangle legs are 6 and 8. Find Hypotenuse.", ["10", "14", "100", "2"], 0, "**Lesson**: Add the squares! $36 + 64 = 100$. Square root it to find the pure length: 10.", 10, 'medium'),
            generateQuestion("Legs are 9 and 40. Hypotenuse?", ["41", "49", "31", "1600"], 0, "$81+1600=1681 \Rightarrow 41$.", 10, 'medium'),
            generateQuestion("Find leg if hypot=17 and leg=8.", ["15", "9", "25", "10"], 0, "$289-64=225 \Rightarrow 15$.", 10, 'medium'),
            generateQuestion("Legs 7 and 24. Hypotenuse?", ["25", "31", "17", "49"], 0, "$49+576=625 \Rightarrow 25$.", 10, 'medium'),
            generateQuestion("Rectangle base 15, height 8. Diagonal?", ["17", "23", "7", "120"], 0, "Pythagorean triple 8-15-17.", 10, 'medium'),
            generateQuestion("Is 5, 5, 7 a right triangle?", ["No", "Yes"], 0, "$25+25 \neq 49$.", 10, 'medium'),
            generateQuestion("Square diagonal is 10. Find $s^2$.", ["50", "25", "100", "10"], 0, "$2s^2 = 100 \Rightarrow s^2 = 50$.", 10, 'medium'),
            generateQuestion("Find $h$ of triangle with legs 1.5 and 2.", ["2.5", "3.5", "0.5", "6.25"], 0, "$2.25+4=6.25 \Rightarrow 2.5$.", 10, 'medium'),
            generateQuestion("Diagonal of $6 \times 8$ screen?", ["10", "14", "48", "2"], 0, "Classic 3-4-5 scaled.", 10, 'medium'),
            generateQuestion("Find side of square if diagonal is $\sqrt{32}$.", ["4", "8", "16", "$\sqrt{16}$"], 0, "$2s^2 = 32 \Rightarrow s^2 = 16 \Rightarrow s=4$.", 10, 'medium'),
            // Hard
            generateQuestion("Hypotenuse is 25, side is 24. Find the missing side.", ["7", "49", "1", "12"], 0, "**Lesson**: Subtract the squares when targeting a short side! $25^2 - 24^2 = 625 - 576 = 49$. Square root to 7.", 20, 'hard'),
            generateQuestion("[Interleaved] Square has diagonal of $\\sqrt{50}$. Find exact side length.", ["5", "25", "10", "12.5"], 0, "**Lesson**: Square halves are right triangles! Leg $x$ and Leg $x$, hypotenuse $\\sqrt{50}$. $x^2 + x^2 = (\\sqrt{50})^2 \\Rightarrow 2x^2 = 50 \\Rightarrow x^2 = 25 \\Rightarrow x=5$.", 20, 'hard'),
            generateQuestion("Circle radius 13, chord distance 5. Chord length?", ["24", "12", "8", "20"], 0, "Half chord $= \sqrt{13^2-5^2}=12$. Total $= 24$.", 20, 'hard'),
            generateQuestion("Distance $(2,3)$ to $(5,7)$.", ["5", "7", "12", "$\sqrt{13}$"], 0, "$\sqrt{(5-2)^2 + (7-3)^2} = \sqrt{3^2+4^2}=5$.", 20, 'hard'),
            generateQuestion("Find $x$ for sides $x-1, x, x+1$.", ["4", "3", "5", "0"], 0, "$(x-1)^2 + x^2 = (x+1)^2 \Rightarrow x^2-2x+1 + x^2 = x^2+2x+1 \Rightarrow x^2-4x=0 \Rightarrow x=4$.", 20, 'hard'),
            generateQuestion("Cube major diagonal is $\sqrt{12}$. Cube side?", ["2", "4", "$\sqrt{3}$", "3"], 0, "$3s^2 = 12 \Rightarrow s^2=4 \Rightarrow s=2$.", 20, 'hard'),
            generateQuestion("Ladder 13m reaches 12m wall. Base distance?", ["5", "1", "25", "$\sqrt{313}$"], 0, "Triple 5-12-13.", 20, 'hard'),
            generateQuestion("Isosceles triangle sides 10, 10, 16. Area?", ["48", "80", "64", "96"], 0, "Height $= \sqrt{10^2 - 8^2} = 6$. Area $= 0.5 \times 16 \times 6 = 48$.", 20, 'hard'),
            generateQuestion("Ship goes 30km North then 40km East. Bearing distance?", ["50", "70", "10", "1200"], 0, "$\sqrt{30^2+40^2}=50$.", 20, 'hard'),
            generateQuestion("Circle chord 10cm is 12cm from center. Diameter?", ["26", "13", "24", "10"], 0, "$r = \sqrt{5^2+12^2}=13$. $d=26$.", 20, 'hard')
        ]
    },
    'g1-s2-mensuration2': {
        learning: [
            // Easy (1-10)
            generateQuestion("What is the exact volume fraction relationship of a Cone compared to a rigid Cylinder of identical size?", ["1/3", "1/2", "1/4", "Equal"], 0, "**Formative Insight**: Pointy math shapes (Cones, Pyramids) hold precisely ONE-THIRD the volume of their straight prismatic equivalents.", 5, 'easy'),
            generateQuestion("How many faces does a square-based pyramid have?", ["5", "4", "6", "1"], 0, "1 base + 4 side triangles.", 5, 'easy'),
            generateQuestion("Formula for Volume of a Sphere?", ["$\frac{4}{3}\pi r^3$", "$4\pi r^2$", "$\pi r^2 h$", "$\frac{1}{3}\pi r^2 h$"], 0, "Standard sphere volume formula.", 5, 'easy'),
            generateQuestion("What is 'l' in the cone formula $\pi r l$?", ["Slant height", "Vertical height", "Radius", "Diameter"], 0, "The edge length of the cone.", 5, 'easy'),
            generateQuestion("Surface area of a sphere with $r=1$?", ["$4\pi$", "$\frac{4}{3}\pi$", "$\pi$", "$2\pi$"], 0, "$4\pi(1)^2 = 4\pi$.", 5, 'easy'),
            generateQuestion("Volume of a pyramid is 1/3 $\times$ base area $\times$ ___?", ["Height", "Radius", "Slant height", "Perimeter"], 0, "Vertical height is required.", 5, 'easy'),
            generateQuestion("Units for volume are usually:", ["$\text{cm}^3$", "$\text{cm}^2$", "$\text{cm}$", "$\text{kg}$"], 0, "3D space units.", 5, 'easy'),
            generateQuestion("Which has more volume: Sphere $r=3$ or Cube side=6?", ["Cube", "Sphere", "Equal", "Depends on $\pi$"], 0, "$Vol_{cube} = 216$, $Vol_{sphere} = 36\pi \approx 113$.", 5, 'easy'),
            generateQuestion("A cone is formed by rotating a ___.", ["Right-angled triangle", "Square", "Circle", "Rectangle"], 0, "Rotation creates the cone.", 5, 'easy'),
            generateQuestion("If $r=2$, then $r^3 = $?", ["8", "4", "6", "16"], 0, "$2 \times 2 \times 2 = 8$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Volume of a Square Pyramid: Base side is 6, vertical height is 10.", ["120", "360", "60", "180"], 0, "**Formative Insight**: Pyramid Vol = $\frac{1}{3} \times \text{Base Area} \times \text{Height}$. Base Area ($6 \times 6 = 36$). Vol = $\frac{1}{3} \times 36 \times 10 = 120$.", 10, 'medium'),
            generateQuestion("Find volume of exact Sphere with radius 3 (leave in terms of $\pi$).", ["$36\pi$", "$9\pi$", "$27\pi$", "$12\pi$"], 0, "**Formative Insight**: Formula is $\frac{4}{3}\pi r^3$. $r^3 = 27$. So $\frac{4}{3} \times 27\pi = 36\pi$.", 10, 'medium'),
            generateQuestion("Base radius of cone is 7, height is 24. Find slant height $l$.", ["25", "31", "17", "50"], 0, "Use Pythagoras: $\sqrt{7^2 + 24^2} = 25$.", 10, 'medium'),
            generateQuestion("Surface area of a hemisphere with radius 10 (include base)?", ["$300\pi$", "$200\pi$", "$400\pi$", "$100\pi$"], 0, "$2\pi r^2 (\text{curved}) + \pi r^2 (\text{base}) = 3\pi r^2$.", 10, 'medium'),
            generateQuestion("Volume of cone: $r=5, h=12$ (leave in $\pi$).", ["$100\pi$", "$300\pi$", "$25\pi$", "$60\pi$"], 0, "$\frac{1}{3}\pi(25)(12) = 100\pi$.", 10, 'medium'),
            generateQuestion("If sphere volume is $36\pi$, find radius.", ["3", "6", "9", "4"], 0, "$\frac{4}{3}r^3 = 36 \Rightarrow r^3 = 27 \Rightarrow r=3$.", 10, 'medium'),
            generateQuestion("Total Surface Area of cone: $r=3, l=5$ (in $\pi$).", ["$24\pi$", "$15\pi$", "$9\pi$", "$12\pi$"], 0, "$\pi r l + \pi r^2 = 15\pi + 9\pi = 24\pi$.", 10, 'medium'),
            generateQuestion("Volume of pyramid with base area 50 and height 9.", ["150", "450", "100", "50"], 0, "$\frac{1}{3} \times 50 \times 9 = 150$.", 10, 'medium'),
            generateQuestion("Volume of hemisphere $r=6$ (in $\pi$).", ["$144\pi$", "$288\pi$", "$72\pi$", "$36\pi$"], 0, "$\frac{2}{3}\pi(216) = 144\pi$.", 10, 'medium'),
            generateQuestion("Ratio of volumes of Sphere $r$ and Cylinder (radius $r$, height $2r$)?", ["2:3", "1:3", "1:1", "4:3"], 0, "Sphere: $\frac{4}{3}\pi r^3$. Cyl: $2\pi r^3$. Ratio = $4/3 : 2 = 2/3 : 1 = 2:3$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Cone has radius 3, highly vertical height 4. Find Curved Surface Area (in $\pi$).", ["$15\pi$", "$12\pi$", "$24\pi$", "$20\pi$"], 0, "**Formative Insight**: You MUST use slant height '$l$' for CSA $\pi r l$. Use Pythagoras: $3^2 + 4^2 = l^2 \Rightarrow l=5$. CSA = $\pi \times 3 \times 5 = 15\pi$.", 20, 'hard'),
            generateQuestion("Melt a $10\text{cm}$ metal sphere into $2\text{cm}$ spheres. How many?", ["125", "10", "25", "50"], 0, "$(10/2)^3 = 5^3 = 125$.", 20, 'hard'),
            generateQuestion("Total Surface Area of sphere is $144\pi$. Find volume (in $\pi$).", ["$288\pi$", "$144\pi$", "$36\pi$", "$576\pi$"], 0, "$4r^2=144 \Rightarrow r=6$. $Vol = \frac{4}{3}\pi(216) = 288\pi$.", 20, 'hard'),
            generateQuestion("A cone and sphere have same radius $r$. If volumes are same, find cone height in terms of $r$.", ["$4r$", "$2r$", "$r$", "$\frac{4}{3}r$"], 0, "$\frac{1}{3}\pi r^2 h = \frac{4}{3}\pi r^3 \Rightarrow h=4r$.", 20, 'hard'),
            generateQuestion("Surface area of a cone increases by how many times if $r$ and $l$ are both doubled?", ["4 times", "2 times", "8 times", "$\pi$ times"], 0, "Area $\propto r \times l$.", 20, 'hard'),
            generateQuestion("Volume of a cone with circumference $20\pi$ and height 9?", ["$300\pi$", "$600\pi$", "$900\pi$", "$100\pi$"], 0, "$2\pi r = 20\pi \Rightarrow r=10$. $\frac{1}{3}\pi(100)(9) = 300\pi$.", 20, 'hard'),
            generateQuestion("A pyramid has a height of $h$ and a square base of side $s$. If both $s$ and $h$ are tripled, the volume increases by factor of:", ["27", "9", "3", "81"], 0, "$\frac{1}{3}(3s)^2 (3h) = 27 \times (\frac{1}{3}s^2h)$.", 20, 'hard'),
            generateQuestion("Find total surface area of a solid hemisphere with diameter 20.", ["$300\pi$", "$200\pi$", "$400\pi$", "$100\pi$"], 0, "$2\pi(10)^2 + \pi(10)^2 = 300\pi$.", 20, 'hard'),
            generateQuestion("Radius of a sphere is doubled. The surface area increases by factor of:", ["4", "2", "8", "6"], 0, "$4\pi (2r)^2 = 4 \times 4\pi r^2$.", 20, 'hard'),
            generateQuestion("Volume of a cone is $V$. If radius is tripled and height is kept same, find new volume.", ["9V", "3V", "27V", "V"], 0, "$\frac{1}{3}\pi(3r)^2 h = 9 \times \frac{1}{3}\pi r^2 h$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("A cone and cylinder share base and height rigidly. If cylinder is 300L, cone volume?", ["100L", "150L", "200L", "900L"], 0, "**Lesson**: The cone is purely 1/3 the volume of its host cylinder. $300 \div 3 = 100\text{L}$.", 5, 'easy'),
            generateQuestion("Shape of a sphere's cross-section is always a ___?", ["Circle", "Square", "Triangle", "Oval"], 0, "Symmetry in all directions.", 5, 'easy'),
            generateQuestion("Radius of eye-ball is 1. Volume roughly (using $\pi \approx 3$)?", ["4", "12", "1", "3"], 0, "$\frac{4}{3} \times 3 \times 1^3 = 4$.", 5, 'easy'),
            generateQuestion("Slant height of a flat cone (height=0)?", ["Radius", "Zero", "Diameter", "Infinite"], 0, "Degenerates to a flat circle.", 5, 'easy'),
            generateQuestion("How many vertices in a cone?", ["1", "0", "2", "Infinite"], 0, "The apex point.", 5, 'easy'),
            generateQuestion("Surface of a ball is a:", ["Sphere", "Circle", "Cylinder", "Cone"], 0, "3D round object.", 5, 'easy'),
            generateQuestion("Does a cylinder have a slant height?", ["No", "Yes", "Only if pointed", "Maybe"], 0, "Sides are vertical.", 5, 'easy'),
            generateQuestion("Area of circle $r=1$ is $\pi$. Surface area of sphere $r=1$ is:", ["$4\pi$", "$2\pi$", "$\pi$", "$8\pi$"], 0, "Four times the area of the great circle.", 5, 'easy'),
            generateQuestion("Volume of any pyramid: Base $\times$ Height $\times$ ___?", ["1/3", "1/2", "1", "2/3"], 0, "The pointy factor.", 5, 'easy'),
            generateQuestion("Units for surface area?", ["$\text{cm}^2$", "$\text{cm}^3$", "$\text{cm}$", "$\text{kg}$"], 0, "2D measure on 3D object.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Surface Area of a full spherical globe with exact radius 5 (in $\pi$)?", ["$100\pi$", "$25\pi$", "$75\pi$", "$50\pi$"], 0, "**Lesson**: Sphere Surface Area is strictly $4\pi r^2$. $r^2 = 25$. $4 \times 25\pi = 100\pi$.", 10, 'medium'),
            generateQuestion("Volume of a cone: Base $r=4$, height $h=6$ (in $\pi$).", ["$32\pi$", "$96\\pi$", "$48\pi$", "$16\pi$"], 0, "**Lesson**: $\frac{1}{3} \times \pi r^2 h$. $r^2 = 16$. $\frac{1}{3} \times \pi \times 16 \times 6 = 32\pi$.", 10, 'medium'),
            generateQuestion("Radius of sphere is 3. Its volume is:", ["$36\pi$", "$12\pi$", "$27\pi$", "$4\pi$"], 0, "$\frac{4}{3}\pi(27) = 36\pi$.", 10, 'medium'),
            generateQuestion("Curved Surface Area of cone: $r=5, l=10$ (in $\pi$).", ["$50\pi$", "$25\pi$", "$100\pi$", "$75\pi$"], 0, "$\pi r l$.", 10, 'medium'),
            generateQuestion("Pyramid with base area 20, volume 40. Height?", ["6", "2", "3", "12"], 0, "$\frac{1}{3} \times 20 \times h = 40 \Rightarrow h=6$.", 10, 'medium'),
            generateQuestion("Circumference of sphere is $10\pi$. Its surface area?", ["$100\pi$", "$25\pi$", "$50\pi$", "$400\pi$"], 0, "$2\pi r = 10\pi \Rightarrow r=5$. $SA = 4\pi(25) = 100\pi$.", 10, 'medium'),
            generateQuestion("Solid cone with $r=6, l=10$. Total Surface Area?", ["$96\pi$", "$60\pi$", "$36\pi$", "$120\pi$"], 0, "$60\pi + 36\pi = 96\pi$.", 10, 'medium'),
            generateQuestion("Volume of pyramid with square base (side 4) and height 3?", ["16", "48", "64", "12"], 0, "$\frac{1}{3}(16)(3) = 16$.", 10, 'medium'),
            generateQuestion("If sphere surface area is $4\pi$, volume is?", ["$\frac{4}{3}\pi$", "$\pi$", "$2\pi$", "$4\pi$"], 0, "$4\pi r^2 = 4\pi \Rightarrow r=1$. Volume $= \frac{4}{3}\pi$.", 10, 'medium'),
            generateQuestion("Base area of pyramid 12, height 10. Volume?", ["40", "120", "30", "60"], 0, "$\frac{1}{3} \times 12 \times 10 = 40$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("[Interleaved] A solid metal $6\text{cm}$ sphere is melted directly into $2\text{cm}$ spheres. How many?", ["27", "9", "3", "36"], 0, "**Lesson**: Volume is proportional to $r^3$. Big $r^3 = 216$. Small $r^3 = 8$. $216 \div 8 = 27$ perfect mini spheres.", 20, 'hard'),
            generateQuestion("Radius of sphere is tripled. Volume factor?", ["27", "9", "3", "18"], 0, "$3^3 = 27$.", 20, 'hard'),
            generateQuestion("Ratio of Surface Area of two spheres with radii 2 and 5?", ["4:25", "2:5", "8:125", "4:10"], 0, "$2^2 : 5^2$.", 20, 'hard'),
            generateQuestion("A cone has same volume and radius as a cylinder with height 10. Cone height?", ["30", "10", "3.33", "20"], 0, "$\frac{1}{3}\pi r^2 H = \pi r^2 (10) \Rightarrow H=30$.", 20, 'hard'),
            generateQuestion("Find radius if volume of hemisphere is $18\pi$.", ["3", "6", "9", "4"], 0, "$\frac{2}{3}\pi r^3 = 18\pi \Rightarrow r^3 = 27 \Rightarrow r=3$.", 20, 'hard'),
            generateQuestion("Surface area of sphere is $S$. If radius is halved, new Area?", ["S/4", "S/2", "S/8", "S"], 0, "Squared relationship.", 20, 'hard'),
            generateQuestion("Water in a conical cup is at half the depth. What fraction of the cup is full?", ["1/8", "1/2", "1/4", "1/3"], 0, "$Vol \propto h^3$. $(1/2)^3 = 1/8$.", 20, 'hard'),
            generateQuestion("Total surface area of cone: $r=7, h=24$.", ["$224\pi$", "$168\pi$", "$625\pi$", "$50\pi$"], 0, "$l=25$. Area $= \pi(7)(25) + \pi(49) = 175\pi + 49\pi = 224\pi$.", 20, 'hard'),
            generateQuestion("Find volume of sphere if Surface Area is $100\pi$.", ["$166.7\pi$", "$500\pi$", "$100\pi$", "$125\pi$"], 0, "$4r^2=100 \Rightarrow r=5$. Vol $= \frac{4}{3}(125)\pi = 166.67\pi$.", 20, 'hard'),
            generateQuestion("Volume of cone: Diameter 10, slant height 13.", ["$100\pi$", "$325\pi$", "$65\pi$", "$50\pi$"], 0, "$r=5, l=13 \Rightarrow h=12$. Vol $= \frac{1}{3}\pi(25)(12) = 100\pi$.", 20, 'hard')
        ]
    },
    'g1-s2-stats': {
        learning: [
            // Easy (1-10)
            generateQuestion("A data 'outlier' is a number drastically isolated from the rest. Which 'average' is easily ruined by outliers?", ["Mean", "Median", "Mode", "None"], 0, "**Formative Insight**: The Mean forcefully factors in every single number. A billionaire walking into a room massively ruins the 'average' mean salary.", 5, 'easy'),
            generateQuestion("What is the 'Mode' of a dataset?", ["Most frequent value", "Middle value", "Average value", "Difference between max and min"], 0, "The value that appears most often.", 5, 'easy'),
            generateQuestion("How do you find the Range?", ["Max - Min", "Sum / Count", "Middle value", "Most frequent"], 0, "Measures the full spread of data.", 5, 'easy'),
            generateQuestion("Find the mean of 2, 4, 6.", ["4", "12", "3", "5"], 0, "$(2+4+6)/3 = 4$.", 5, 'easy'),
            generateQuestion("In a sorted list, the middle value is the ___.", ["Median", "Mean", "Mode", "Range"], 0, "Standard definition.", 5, 'easy'),
            generateQuestion("Mean of 10, 20, 30, 40?", ["25", "20", "30", "100"], 0, "Sum is 100, divide by 4.", 5, 'easy'),
            generateQuestion("Mode of 1, 2, 2, 3, 4?", ["2", "1", "3", "4"], 0, "2 appears twice.", 5, 'easy'),
            generateQuestion("Range of 5, 10, 15, 20?", ["15", "5", "20", "25"], 0, "$20 - 5 = 15$.", 5, 'easy'),
            generateQuestion("If all numbers are the same, the range is:", ["0", "The number itself", "1", "Undefined"], 0, "$X - X = 0$.", 5, 'easy'),
            generateQuestion("Standard unit for weight in stats usually?", ["kg", "m", "s", "L"], 0, "Depending on the context, but kg is common.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Scores: 50, 60, 100. Find the robust Median.", ["60", "70", "50", "100"], 0, "**Formative Insight**: The data is already sorted chronologically. The absolute center value is safely shielded at 60.", 10, 'medium'),
            generateQuestion("Find mean of: 1.5, 2.5, 3.5, 4.5.", ["3", "2.5", "3.5", "4"], 0, "Sum $= 12$. $12/4 = 3$.", 10, 'medium'),
            generateQuestion("Find Median of: 10, 5, 8, 20, 15.", ["10", "8", "15", "12"], 0, "Sorted: 5, 8, 10, 15, 20. Middle is 10.", 10, 'medium'),
            generateQuestion("Range of $-5, 0, 5, 10$?", ["15", "10", "5", "20"], 0, "10 - (-5) = 15.", 10, 'medium'),
            generateQuestion("Find Mean: 0, 0, 0, 10, 10.", ["4", "0", "10", "5"], 0, "Sum $= 20$. $20/5 = 4$.", 10, 'medium'),
            generateQuestion("A set has two modes. It is called:", ["Bimodal", "Duplicate", "Equal", "None"], 0, "Two peaks in distribution.", 10, 'medium'),
            generateQuestion("Mean of first 5 positive integers?", ["3", "2.5", "15", "4"], 0, "$(1+2+3+4+5)/5 = 15/5 = 3$.", 10, 'medium'),
            generateQuestion("Median of 1, 1, 2, 5, 10?", ["2", "1", "5", "4"], 0, "Middle term.", 10, 'medium'),
            generateQuestion("Mean of a set is 10. If every number increases by 2, new mean is:", ["12", "10", "20", "5"], 0, "The whole set shifts.", 10, 'medium'),
            generateQuestion("Which average represents the 'typical' shoe size sold?", ["Mode", "Mean", "Median", "Range"], 0, "The most popular size.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Find exact Median of EVEN set: 2, 4, 8, 10.", ["6", "4", "8", "6.5"], 0, "**Formative Insight**: There is NO single absolute middle number. You strictly AVERAGE the two center numbers: $(4+8)/2 = 6$.", 20, 'hard'),
            generateQuestion("Mean weight of 4 boys is 50kg. A 5th boy joins, new mean is rigidly 52kg. 5th boy's weight?", ["60kg", "55kg", "52kg", "62kg"], 0, "**Formative Insight**: Use totals! Old Total = $4 \times 50 = 200$. New Total = $5 \times 52 = 260$. The heavy 5th boy brought exactly $260 - 200 = 60\\text{kg}$.", 20, 'hard'),
            generateQuestion("Mean of transition: 10 numbers have mean 15. One number 24 is removed. New mean?", ["14", "15", "16", "13"], 0, "Total $= 150$. New Total $= 150-24 = 126$. $126/9 = 14$.", 20, 'hard'),
            generateQuestion("Median of $x, x+2, x+4$ is 15. Find $x$.", ["11", "13", "15", "10"], 0, "Middle is $x+2 = 15 \Rightarrow x=13$.", 20, 'hard'),
            generateQuestion("Mean of 3 numbers is 7. Two numbers are 5 and 10. Find the third.", ["6", "7", "8", "9"], 0, "Total $= 21$. $21 - 15 = 6$.", 20, 'hard'),
            generateQuestion("Mean of $x$ and $y$ is 20. Mean of $x, y, z$ is 25. Find $z$.", ["35", "30", "25", "45"], 0, "$x+y = 40$. $x+y+z = 75 \Rightarrow z=35$.", 20, 'hard'),
            generateQuestion("New mean if every number in a set is doubled?", ["Doubles", "Stays same", "Increases by 2", "Squares"], 0, "Linear scaling applies to mean.", 20, 'hard'),
            generateQuestion("Mean of 5 numbers is 0. Four numbers are $-2, -1, 1, 2$. Find the fifth.", ["0", "1", "-1", "5"], 0, "Sum must be 0.", 20, 'hard'),
            generateQuestion("Median of 6 numbers: 5, 7, 8, 10, 12, 15. Find median.", ["9", "8", "10", "11"], 0, "$(8+10)/2 = 9$.", 20, 'hard'),
            generateQuestion("If range of set is 10 and min is $-3$, max is:", ["7", "13", "10", "3"], 0, "$Max - (-3) = 10 \Rightarrow Max = 7$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("To find the exact Median, what is the absolute FIRST mandatory step?", ["Sort the data", "Add them all", "Find the most frequent", "Divide by 2"], 0, "**Lesson**: You MUST sort chronologically from smallest to largest. Picking the random middle of unsorted data is catastrophic.", 5, 'easy'),
            generateQuestion("Definition of Range?", ["Difference between highest and lowest", "The middle value", "The most common value", "The average"], 0, "Basic terminology.", 5, 'easy'),
            generateQuestion("Mean of 1, 2, 3?", ["2", "1", "3", "1.5"], 0, "Sum 6 / 3.", 5, 'easy'),
            generateQuestion("Mode of 'apple, apple, orange, banana'?", ["apple", "orange", "banana", "None"], 0, "Most frequent.", 5, 'easy'),
            generateQuestion("Common average used in schools for results?", ["Mean", "Median", "Mode", "Range"], 0, "Sum of marks / Total subjects.", 5, 'easy'),
            generateQuestion("Mean of 0 and 10?", ["5", "10", "0", "2"], 0, "Average them.", 5, 'easy'),
            generateQuestion("Is Mode always a number?", ["No", "Yes"], 0, "Can be categories.", 5, 'easy'),
            generateQuestion("Standard way to show data variations?", ["Range", "Mean", "Median", "Mode"], 0, "Spread of data.", 5, 'easy'),
            generateQuestion("Mean of 5 identical numbers (all 7)?", ["7", "35", "5", "1"], 0, "Sum 35 / 5.", 5, 'easy'),
            generateQuestion("Middle of 1, 3, 5?", ["3", "1", "5", "9"], 0, "Midpoint.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Find precisely the Mean of: 10, 10, 10, 50.", ["20", "10", "80", "25"], 0, "**Lesson**: Add strictly ($80$) and accurately divide by the count ($4$). Result is exactly 20.", 10, 'medium'),
            generateQuestion("Median of: 2, 2, 4, 8, 10, 20.", ["6", "4", "8", "2"], 0, "$(4+8)/2 = 6$.", 10, 'medium'),
            generateQuestion("Range of scores: 45, 88, 12, 60, 30.", ["76", "88", "12", "45"], 0, "$88 - 12 = 76$.", 10, 'medium'),
            generateQuestion("Find Mean: 1/2, 1/4, 1/4.", ["1/3", "1", "1/2", "0.25"], 0, "Sum is 1. Divide by 3.", 10, 'medium'),
            generateQuestion("Mean of $x$ and $2x$?", ["1.5x", "3x", "x", "2x"], 0, "$3x / 2 = 1.5x$.", 10, 'medium'),
            generateQuestion("Mode of $10, 20, 20, 30, 30, 30, 40$?", ["30", "20", "40", "10"], 0, "Frequency is 3.", 10, 'medium'),
            generateQuestion("Mean of numbers from 1 to 10?", ["5.5", "5", "11", "45"], 0, "Sum $= 55$. $55/10 = 5.5$.", 10, 'medium'),
            generateQuestion("Median of $0.1, 0.5, 0.3, 0.9, 0.7$?", ["0.5", "0.3", "0.7", "0.1"], 0, "Sorted: 0.1, 0.3, 0.5, 0.7, 0.9.", 10, 'medium'),
            generateQuestion("New Range if every number increases by 10?", ["Stays same", "Increases by 10", "Increases by 20", "Doubles"], 0, "Shift doesn't affect spread.", 10, 'medium'),
            generateQuestion("If set has NO repeating numbers, the Mode is:", ["None", "0", "All of them", "Infinite"], 0, "No frequency > 1.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Which is the superior average representing 'typical' house prices without millionaire skew?", ["Median", "Mean", "Mode", "Range"], 0, "**Lesson**: Median safely ignores the multi-million dollar mansion outliers at the extreme top of the list.", 20, 'hard'),
            generateQuestion("[Interleaved] In a probability test, throwing a 6 on a dice is $\frac{1}{6}$. Throwing an EVEN number?", ["$\frac{1}{2}$", "$\frac{1}{3}$", "$\frac{1}{6}$", "$\frac{2}{3}$"], 0, "**Lesson**: There are exactly three beautiful even numbers (2,4,6) out of six total. $3/6$ simplifies perfectly to exactly $1/2$.", 20, 'hard'),
            generateQuestion("Mean of 5 numbers is 10. If 6th number is 22, new mean?", ["12", "11", "10", "15"], 0, "Old total 50. New total 72. $72/6 = 12$.", 20, 'hard'),
            generateQuestion("Mean of $x, y, z$ is $A$. Mean of $x, y, z, w$ is $B$. find $w$.", ["4B - 3A", "B - A", "4(B-A)", "A+B"], 0, "New total - Old total.", 20, 'hard'),
            generateQuestion("Median of 7 numbers is 12. If largest number increases by 100, median:", ["Stays same", "Increases", "Decreases", "Becomes 112"], 0, "Middle rank unchanged.", 20, 'hard'),
            generateQuestion("Mean of 4 unique positive integers is 5. Max possible value of one?", ["14", "17", "20", "8"], 0, "Minimize others: 1, 2, 3. Sum=6. $20 - 6 = 14$.", 20, 'hard'),
            generateQuestion("Range of set is $R$. If every number is doubled, new range?", ["2R", "R", "$R^2$", "R+2"], 0, "Scaling affects the spread.", 20, 'hard'),
            generateQuestion("Mean of $a$ and $b$ is $M$. Mean of $b$ and $c$ is $N$. Find $c-a$.", ["2(N-M)", "N-M", "2(M-N)", "M+N"], 0, "$a+b=2M, b+c=2N \Rightarrow c-a = 2N-2M$.", 20, 'hard'),
            generateQuestion("If mean of 3 numbers is 10 and their range is 0, numbers are:", ["10, 10, 10", "0, 10, 20", "5, 10, 15", "None"], 0, "Range 0 means identical.", 20, 'hard'),
            generateQuestion("Standard deviation (conceptual): Measurement of?", ["Spread from mean", "Average", "Middle", "Total"], 0, "How far numbers are from average.", 20, 'hard')
        ]
    },

    'g1-s34-numbers': {
        learning: [
            // Easy (1-10)
            generateQuestion("Evaluate perfectly: $3^4$.", ["81", "12", "64", "27"], 0, "**Formative Insight**: Power means repeated multiplication. $3 \\times 3 \\times 3 \\times 3$. $9 \\times 9 = 81$.", 5, 'easy'),
            generateQuestion("Evaluate $2^5$.", ["32", "10", "16", "64"], 0, "$2^5 = 32$.", 5, 'easy'),
            generateQuestion("Value of $10^0$?", ["1", "0", "10", "Undefined"], 0, "Any non-zero to power 0 is 1.", 5, 'easy'),
            generateQuestion("Value of $1^{100}$?", ["1", "100", "0", "10"], 0, "1 to any power is 1.", 5, 'easy'),
            generateQuestion("Simplify: $x^2 \times x^3$.", ["x^5", "x^6", "2x^3", "x^1"], 0, "Add powers.", 5, 'easy'),
            generateQuestion("Simplify: $a^7 / a^4$.", ["a^3", "a^11", "a^{1.75}", "a^{28}"], 0, "Subtract powers.", 5, 'easy'),
            generateQuestion("Is $0.005$ in Standard Form?", ["No", "Yes"], 0, "Must be between 1 and 10.", 5, 'easy'),
            generateQuestion("Standard Form base is always between 1 and ___?", ["10", "100", "9", "5"], 0, "$1 \le A < 10$.", 5, 'easy'),
            generateQuestion("Standard form for 100?", ["$1 \times 10^2$", "$10 \times 10^1$", "$1^2$", "$100 \times 10^0$"], 0, "Move decimal twice.", 5, 'easy'),
            generateQuestion("Calculate $2^1 + 2^0$.", ["3", "2", "4", "5"], 0, "2 + 1 = 3.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Simplify fully: $a^5 \times a^2$.", ["a^7", "a^{10}", "a^3", "a^{52}"], 0, "**Formative Insight**: Same base multiplied means ADD the powers! $5+2=7$.", 10, 'medium'),
            generateQuestion("Simplify: $(a^2)^3$.", ["a^6", "a^5", "a^8", "a^9"], 0, "Multiply powers.", 10, 'medium'),
            generateQuestion("Evaluate $9^{0.5}$.", ["3", "4.5", "81", "1"], 0, "Square root of 9.", 10, 'medium'),
            generateQuestion("Value of $2^{-1}$?", ["0.5", "-2", "1", "-1"], 0, "1/2.", 10, 'medium'),
            generateQuestion("Simplify: $x^5 \times x^{-2}$.", ["x^3", "x^7", "x^{-10}", "x^2.5"], 0, "5 + (-2) = 3.", 10, 'medium'),
            generateQuestion("Convert 450,000 to Standard Form.", ["$4.5 \times 10^5$", "$45 \times 10^4$", "$4.5 \times 10^6$", "$0.45 \times 10^6$"], 0, "Shift decimal 5 places.", 10, 'medium'),
            generateQuestion("Convert 0.0003 to Standard Form.", ["$3 \times 10^{-4}$", "$3 \times 10^{-3}$", "$0.3 \times 10^{-3}$", "$3 \times 10^4$"], 0, "Shift decimal 4 places right.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{10a^6}{2a^2}$.", ["5a^4", "5a^3", "8a^4", "5a^8"], 0, "Divide coefficients, subtract powers.", 10, 'medium'),
            generateQuestion("Value of $(1/3)^{-2}$?", ["9", "1/9", "6", "3"], 0, "Flip and square.", 10, 'medium'),
            generateQuestion("Evaluate $27^{1/3}$.", ["3", "9", "81", "1"], 0, "Cube root.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Simplify exactly: $(2x^3)^3$.", ["8x^9", "6x^6", "8x^6", "2x^9"], 0, "**Formative Insight**: Apply the cube to EVERYTHING inside. $2^3 = 8$. $(x^3)^3$ multiplies powers into $x^9$. Final: $8x^9$.", 20, 'hard'),
            generateQuestion("Evaluate $4^{-2}$ without a calculator.", ["1/16", "-16", "-8", "1/8"], 0, "**Formative Insight**: Negative power FLIPS it strictly into a fraction: $1 / 4^2$. Then $4^2 = 16$. So $1/16$.", 20, 'hard'),
            generateQuestion("Solve $2^x = 1/8$.", ["-3", "3", "-4", "4"], 0, "$2^x = 2^{-3}$.", 20, 'hard'),
            generateQuestion("Multiply: $(2 \times 10^3) \times (3 \times 10^4)$.", ["$6 \times 10^7$", "$6 \times 10^{12}$", "$5 \times 10^7$", "$6 \times 10^1$"], 0, "$2 \times 3 \times 10^{3+4}$.", 20, 'hard'),
            generateQuestion("Find $n$: $3^n = 1$.", ["0", "1", "Undefined", "-1"], 0, "Any $a^0=1$.", 20, 'hard'),
            generateQuestion("Calculate: $(8 \times 10^6) / (2 \times 10^2)$.", ["$4 \times 10^4$", "$4 \times 10^8$", "$6 \times 10^4$", "$4 \times 10^3$"], 0, "$4 \times 10^{6-2}$.", 20, 'hard'),
            generateQuestion("Evaluate $(16/81)^{-0.5}$.", ["2.25", "4/9", "9/4", "1.5"], 0, "$\sqrt{81/16} = 9/4 = 2.25$.", 20, 'hard'),
            generateQuestion("Simplify: $\sqrt[3]{x^6}$.", ["x^2", "x^3", "x^{18}", "x^{1/2}"], 0, "$x^{6/3} = x^2$.", 20, 'hard'),
            generateQuestion("Which is larger: $2^{30}$ or $3^{20}$?", ["$3^{20}$", "$2^{30}$", "Equal", "None"], 0, "Compare $(2^3)^{10}$ and $(3^2)^{10} \Rightarrow 8^{10}$ vs $9^{10}$.", 20, 'hard'),
            generateQuestion("Simplify: $x^{1/2} \times x^{1/3}$.", ["x^{5/6}", "x^{1/6}", "x^{1/5}", "x^{2/5}"], 0, "Add fractions $1/2 + 1/3 = 5/6$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Which form explicitly represents $2 \\times 10^3$ in exact Standard Form?", ["2000", "0.002", "20", "200"], 0, "**Lesson**: Standard Form makes large numbers compact. The $10^3$ moves the decimal precisely 3 times to the right.", 5, 'easy'),
            generateQuestion("Square root of $x^4$?", ["x^2", "x^4", "x^8", "2x"], 0, "Divide exponent by 2.", 5, 'easy'),
            generateQuestion("What is $10^6$ called?", ["Million", "Billion", "Thousand", "Trillion"], 0, "Standard metric.", 5, 'easy'),
            generateQuestion("Simplify: $x^0 \times x^1$.", ["x", "1", "x^2", "0"], 0, "1 * x = x.", 5, 'easy'),
            generateQuestion("Is $15 \times 10^2$ in Standard Form?", ["No", "Yes"], 0, "Lead number must be $< 10$.", 5, 'easy'),
            generateQuestion("Standard form of 0.5?", ["$5 \times 10^{-1}$", "$0.5 \times 10^0$", "$5 \times 10^1$", "$5 \times 10^{-2}$"], 0, "One shift right.", 5, 'easy'),
            generateQuestion("Simplify: $a \times a^2$.", ["a^3", "a^2", "2a", "a^1"], 0, "$a^1 \times a^2$.", 5, 'easy'),
            generateQuestion("Indices rule for division?", ["Subtract powers", "Add powers", "Multiply powers", "Divide powers"], 0, "Exponent subtraction.", 5, 'easy'),
            generateQuestion("Which power represents 'cube root'?", ["1/3", "3", "0.3", "-3"], 0, "Reciprocal power.", 5, 'easy'),
            generateQuestion("Standard Form of 1,000,000?", ["$10^6$", "$10^5$", "$1 \times 10^7$", "$1 \times 10^1$"], 0, "Count the zeros.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Write $0.0045$ cleanly in Standard Form.", ["$4.5 \\times 10^{-3}$", "$4.5 \\times 10^3$", "$0.45 \\times 10^{-2}$", "$45 \\times 10^{-4}$"], 0, "**Lesson**: The decimal shifts 3 steps to the right to land after the first non-zero digit. A right shift yields a strict negative $-3$ power.", 10, 'medium'),
            generateQuestion("Evaluate $8^{2/3}$.", ["4", "2", "64", "16"], 0, "Cube root then square.", 10, 'medium'),
            generateQuestion("Simplify: $(x^{-2})^{-3}$.", ["x^6", "x^{-6}", "x^{-5}", "x^1"], 0, "(-2) * (-3) = 6.", 10, 'medium'),
            generateQuestion("Convert 0.000001 to Standard Form.", ["$10^{-6}$", "$10^{-5}$", "$10^6$", "$10^0$"], 0, "Scientific notation.", 10, 'medium'),
            generateQuestion("Simplify: $5x^2 \times 3x$.", ["15x^3", "8x^3", "15x^2", "8x^2"], 0, "Multiply constants, add exponents.", 10, 'medium'),
            generateQuestion("Find $x$ if $3^x = 27$.", ["3", "2", "9", "1"], 0, "$3^3 = 27$.", 10, 'medium'),
            generateQuestion("Evaluate $(2/3)^0$.", ["1", "0", "2/3", "1.5"], 0, "Power 0 is always 1.", 10, 'medium'),
            generateQuestion("Standard range of $a$ in $a \times 10^n$?", ["$1 \le a < 10$", "$0 < a < 1$", "$1 < a \le 10$", "$a$ is any number"], 0, "Base rule.", 10, 'medium'),
            generateQuestion("Simplify: $a^2 / a^5$.", ["a^{-3}", "a^3", "a^{-7}", "a^{10}"], 0, "2 - 5 = -3.", 10, 'medium'),
            generateQuestion("Standard form of 123.", ["$1.23 \times 10^2$", "$12.3 \times 10^1$", "$1.23 \times 10^3$", "$0.123 \times 10^3$"], 0, "Shift twice left.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Simplify $\\frac{12x^5}{3x^2}$.", ["4x^3", "4x^{2.5}", "9x^3", "4x^7"], 0, "**Lesson**: Handle numbers and letters separately! $12/3 = 4$. For division, completely subtract the letter powers: $5-2=3$. Final: $4x^3$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which is vastly larger: $5 \\times 10^4$ or $9 \\times 10^3$?", ["$5 \\times 10^4$", "$9 \\times 10^3$", "Equal", "Cannot compare"], 0, "**Lesson**: The exponent strictly rules absolute magnitude. $10^4$ ($50,000$) undeniably crushes $10^3$ ($9,000$), regardless of the coefficient.", 20, 'hard'),
            generateQuestion("Solve: $5^x = 0.04$.", ["-2", "2", "-1", "0"], 0, "$0.04 = 4/100 = 1/25 = 5^{-2}$.", 20, 'hard'),
            generateQuestion("Standard form sum: $(2 \times 10^2) + (3 \times 10^3)$.", ["$3.2 \times 10^3$", "$5 \times 10^3$", "$5 \times 10^5$", "$3.2 \times 10^2$"], 0, "$200 + 3000 = 3200$.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{(a^2 b^3)^2}{a b^4}$.", ["a^3 b^2", "a b", "a^4 b^6", "a^3 b^1"], 0, "Distribute power then subtract.", 20, 'hard'),
            generateQuestion("Find $x$ if $2^x \times 2^3 = 64$.", ["3", "6", "9", "0"], 0, "$x+3 = 6 \Rightarrow x=3$.", 20, 'hard'),
            generateQuestion("Evaluate $125^{-1/3}$.", ["1/5", "5", "-5", "-1/5"], 0, "1 / CubeRoot(125).", 20, 'hard'),
            generateQuestion("Simplify: $(\sqrt{x})^6$.", ["x^3", "x^6", "x", "x^{1/6}"], 0, "Power 1/2 * 6.", 20, 'hard'),
            generateQuestion("Convert $0.000012$ to Standard Form.", ["$1.2 \times 10^{-5}$", "$12 \times 10^{-6}$", "$1.2 \times 10^{-4}$", "$1.2 \times 10^5$"], 0, "Scientific notation for small numbers.", 20, 'hard'),
            generateQuestion("Value of $2^5 + 2^5$?", ["2^6", "2^{10}", "4^5", "64"], 0, "$2 \times 2^5 = 2^6$.", 20, 'hard')
        ]
    },
    'g1-s34-scale': {
        learning: [
            // Easy (1-10)
            generateQuestion("A map scale is $1:100,000$. What does $1\\text{cm}$ represent in km?", ["1km", "10km", "0.1km", "100km"], 0, "**Formative Insight**: Convert cm to km by strictly dividing by $100,000$. So $100,000\\text{cm} = 1\\text{km}$.", 5, 'easy'),
            generateQuestion("Scale $1:200$. Real distance for $5\text{cm}$ on plan?", ["$1000\text{cm}$", "$2000\text{cm}$", "$10\text{m}$", "$1\text{m}$"], 2, "$5 \times 200 = 1000\text{cm} = 10\text{m}$.", 5, 'easy'),
            generateQuestion("Real length $10\text{m}$. How many cm is that?", ["1000", "100", "10", "10000"], 0, "$10 \times 100$.", 5, 'easy'),
            generateQuestion("Scale $1:1$. Object is ___ size.", ["Actual", "Double", "Half", "Miniature"], 0, "Ratio of 1 means no change.", 5, 'easy'),
            generateQuestion("Scale $1:50000$. $2\text{cm}$ on map = ___ km?", ["1", "5", "0.5", "10"], 0, "$2 \times 50000 = 100000\text{cm} = 1\text{km}$.", 5, 'easy'),
            generateQuestion("Scale $1:n$. If $n$ is large, map is ___.", ["Small scale", "Large scale", "Detailed", "Actual size"], 0, "Inverse relationship.", 5, 'easy'),
            generateQuestion("Which scale represents $1\text{cm}$ to $1\text{m}$?", ["1:100", "1:1", "1:10", "1:1000"], 0, "100cm in a meter.", 5, 'easy'),
            generateQuestion("1 km = ___ cm?", ["100,000", "1,000", "10,000", "1,000,000"], 0, "Standard metric.", 5, 'easy'),
            generateQuestion("Scale $1:250,000$. Real distance $25\text{km}$. cm on map?", ["10", "1", "100", "5"], 0, "Divide $2.5\text{m}$ cm by $250,000$.", 5, 'easy'),
            generateQuestion("Units in $1:500$?", ["Same units", "cm and m", "km and cm", "None"], 0, "Ratios have no units.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Map scale $1:50,000$. A straight road is precisely $4\\text{cm}$ on map. Real length?", ["2km", "20km", "200km", "0.2km"], 0, "**Formative Insight**: Multiply by 50,000! $4 \\times 50,000 = 200,000\\text{cm}$. Divide by 100,000 to convert to exactly $2\\text{km}$.", 10, 'medium'),
            generateQuestion("Length $20\text{km}$ on $1:50,000$ map is how many cm?", ["40", "4", "20", "10"], 0, "$\frac{2,000,000}{50,000} = 40$.", 10, 'medium'),
            generateQuestion("Scale for $1\text{cm}$ represents $5\text{km}$?", ["1:500,000", "1:5,000", "1:50,000", "1:500"], 0, "Match the zeros.", 10, 'medium'),
            generateQuestion("Area scale if length scale is $1:5$?", ["1:25", "1:5", "1:10", "1:125"], 0, "Square the ratio.", 10, 'medium'),
            generateQuestion("Volume scale if length scale is $1:2$?", ["1:8", "1:4", "1:2", "1:16"], 0, "Cube the ratio.", 10, 'medium'),
            generateQuestion("Map $4\text{cm}^2$ represents $16\text{km}^2$. Area scale?", ["$1:4$ (km units)", "1:400,000,000", "1:16", "1:64"], 1, "Ratio is $1\text{cm}^2 : 4\text{km}^2 = 1\text{cm}^2 : 4 \times 10^{10} \text{cm}^2$.", 10, 'medium'),
            generateQuestion("Room length $4\text{m}$ is $10\text{cm}$ on plan. Scale?", ["1:40", "1:4", "1:400", "1:10"], 0, "$10:400 = 1:40$.", 10, 'medium'),
            generateQuestion("Distance $15\text{km}$ on $1:250,000$ map?", ["6\text{cm}", "60\text{cm}", "4\text{cm}", "40\text{cm}"], 0, "$\frac{1,500,000}{250,000} = 6$.", 10, 'medium'),
            generateQuestion("If $1\text{cm}$ to $2\text{km}$, Area Scale $1\text{cm}^2$ to ___ $\text{km}^2$?", ["4", "2", "1", "0.5"], 0, "Square the scale factor.", 10, 'medium'),
            generateQuestion("Find real area if map area is $5\text{cm}^2$ and scale is $1\text{cm}:2\text{km}$.", ["$20\text{km}^2$", "$10\text{km}^2$", "$5\text{km}^2$", "$25\text{km}^2$"], 0, "$5 \times 2^2 = 20$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Length scale is $1 : 20$. Form the Area Scale strictly.", ["1 : 400", "1 : 20", "1 : 40", "1 : 8000"], 0, "**Formative Insight**: Area is entirely 2D. You MUST definitively square the length scale. $1^2 : 20^2 \\Rightarrow 1 : 400$.", 20, 'hard'),
            generateQuestion("Map scale $1:2000$. A park area is cleanly $5\\text{cm}^2$ on map. Find real area in $\\text{m}^2$.", ["2000", "10,000", "100", "4,000,000"], 0, "**Formative Insight**: Scale is $1\text{cm} : 20\\text{m}$. Sequence: Area Scale is $1\text{cm}^2 : 400\\text{m}^2$. Map area $5 \\times 400 = 2000\\text{m}^2$.", 20, 'hard'),
            generateQuestion("Model has volume 10, scale $1:5$. Real volume?", ["1250", "50", "250", "625"], 0, "Multiply by $5^3=125$.", 20, 'hard'),
            generateQuestion("Map area $2\text{cm}^2$ to real $18\text{km}^2$. Scale 1:n?", ["1:300,000", "1:90,000", "1:3,000", "1:9,000"], 0, "Area scale $1:9\text{km}^2 \Rightarrow$ length scale $1:3\text{km}$.", 20, 'hard'),
            generateQuestion("If volume scale is $1:1,000,000$, length scale is?", ["1:100", "1:1,000", "1:10", "1:1,000,000"], 0, "Cube root.", 20, 'hard'),
            generateQuestion("Distance $x$ on map is $y$ in real. If scale is $1:n$, then $y/x = $?", ["n", "1/n", "n^2", "n^3"], 0, "Standard ratio definition.", 20, 'hard'),
            generateQuestion("Area of pond on map ($1:50,000$) is $2\text{cm}^2$. Find real area in $\text{hectares}$ ($1\text{ha} = 10,000\text{m}^2$).", ["50", "5", "500", "100"], 0, "Area $= 2 \times 500^2 \text{m}^2 = 500,000\text{m}^2 = 50\text{ha}$.", 20, 'hard'),
            generateQuestion("Which map shows more detail: $1:5,000$ or $1:50,000$?", ["1:5,000", "1:50,000"], 0, "Smaller $n$ means larger representation.", 20, 'hard'),
            generateQuestion("Real area $0.8\text{km}^2$. On $1:20,000$ map, area in $\text{cm}^2$?", ["20", "40", "8", "4"], 0, "$0.8\text{km}^2 = 8,000,000,000\text{cm}^2$. $8\times 10^9 / (2\times 10^4)^2 = 8\times 10^9 / 4\times 10^8 = 20$.", 20, 'hard'),
            generateQuestion("A model car ($1:18$ scale) has fuel tank capacity $50\text{ml}$. Real capacity?", ["300L", "291.6L", "100L", "50L"], 1, "$50 \times 18^3 = 50 \times 5832 = 291600\text{ml} = 291.6\text{L}$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("What is a strictly representative fraction ratio for $1\\text{cm} : 5\\text{km}$?", ["1 : 500,000", "1 : 5000", "1 : 5", "1 : 50,000"], 0, "**Lesson**: Convert the 5km completely to cm to match identical units! $5 \\times 100,000 = 500,000$.", 5, 'easy'),
            generateQuestion("Scale $1:10$. Drawing $1\text{cm}$ = real $x$. $x = $?", ["10\text{cm}", "1\text{cm}", "10\text{m}", "0.1\text{cm}"], 0, "Basic multiply.", 5, 'easy'),
            generateQuestion("Scale $1:100,000$. $1\text{cm}$ on map in km?", ["1", "10", "100", "0.1"], 0, "Standard metric scale.", 5, 'easy'),
            generateQuestion("Object $5\text{cm}$ on scale $1:5$. Real size?", ["25\text{cm}", "1\text{cm}", "10\text{cm}", "5\text{cm}"], 0, "$5 \times 5 = 25$.", 5, 'easy'),
            generateQuestion("1 meter = ___ cm?", ["100", "1,000", "10", "10,000"], 0, "Metric unit.", 5, 'easy'),
            generateQuestion("Scale $1:20$. $Real = 2\text{m}, Map = $?", ["10\text{cm}", "20\text{cm}", "1\text{cm}", "40\text{cm}"], 0, "$200 / 20 = 10$.", 5, 'easy'),
            generateQuestion("Ratio for real $10\text{km}$ as $1\text{cm}$?", ["1:1,000,000", "1:100,000", "1:10,000", "1:1,000"], 0, "$10 \times 100,000$.", 5, 'easy'),
            generateQuestion("Scale for actual size?", ["1:1", "1:0", "1:100", "1:None"], 0, "Direct representation.", 5, 'easy'),
            generateQuestion("Real $5\text{km}$ is how many meters?", ["5000", "500", "50", "50000"], 0, "$5 \times 1000$.", 5, 'easy'),
            generateQuestion("Scale 1:2. Object is ___?", ["Half real size", "Double real size", "Identical", "Miniature"], 0, "Drawing is smaller than real.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Real distance $3\\text{km}$ is drawn correctly as $6\\text{cm}$. Find the 1:n scale.", ["1 : 50,000", "1 : 20,000", "1 : 5,000", "1 : 500,000"], 0, "**Lesson**: $6\\text{cm} : 3\\text{km}$. Convert to identical units! $6\\text{cm} : 300,000\\text{cm}$. Divide strongly by 6! $1 : 50,000$.", 10, 'medium'),
            generateQuestion("Map scale $1:2,000,000$. $5\text{cm}$ on map is ___ km?", ["100", "10", "1000", "1"], 0, "$5 \times 2,000,000 / 100,000 = 100$.", 10, 'medium'),
            generateQuestion("Area scale if length scale is $1:10$?", ["1:100", "1:10", "1:1000", "1:20"], 0, "Square it.", 10, 'medium'),
            generateQuestion("Real area $1\text{km}^2$. On $1:10,000$ map, area is ___ $\text{cm}^2$?", ["10,000", "1,000", "100", "10"], 0, "$1\text{km}^2 / (10^4)^2 = 10^{10} \text{cm}^2 / 10^8 = 100$.", 10, 'medium'),
            generateQuestion("Scale $1:250$. Model tank volume $1\text{cm}^3$. Real volume in $\text{m}^3$?", ["15.625", "15625000", "2.5", "250"], 0, "$1 \times 250^3 \text{cm}^3 = 15,625,000 \text{cm}^3 = 15.6 \text{m}^3$.", 10, 'medium'),
            generateQuestion("If area scale is $1:16$, length scale is?", ["1:4", "1:8", "1:256", "1:16"], 0, "Square root.", 10, 'medium'),
            generateQuestion("Volume of sphere on $1:2$ model vs real?", ["1/8", "1/4", "1/2", "1/16"], 0, "Cube of $1/2$.", 10, 'medium'),
            generateQuestion("Scale $1\text{cm}$ to $100\text{m}$, as ratio $1:n$?", ["1:10,000", "1:100", "1:1,000", "1:100,000"], 0, "100m = 10,000cm.", 10, 'medium'),
            generateQuestion("Length on map $1:250,000$ for $10\text{km}$?", ["4\text{cm}", "40\text{cm}", "2.5\text{cm}", "25\text{cm}"], 0, "Divide $1,000,000 / 250,000$.", 10, 'medium'),
            generateQuestion("Real area $40\text{ha}$. On $1:10,000$ map, area in $\text{cm}^2$?", ["400", "40", "4000", "4"], 0, "$400,000\text{m}^2 / 10^4 = 40$. Wait, $40,000 / 10^{8/2} ... 400\text{cm}^2$.", 0, 'medium'),
            // Hard (1-10)
            generateQuestion("If a length scale is geometrically $1:k$, the Volume scale is:", ["$1:k^3$", "$1:k^2$", "$1:3k$", "$1:k$"], 0, "**Lesson**: Because explicit physical space operates dynamically in 3 dimensions, you MUST fully cube the length multiplier.", 20, 'hard'),
            generateQuestion("[Interleaved] Length scale is $1:5$. If Model Volume is strictly $10$, find Real Volume.", ["1250", "50", "250", "150"], 0, "**Lesson**: $1:5$ length \\$\\Rightarrow 1:125$ Volume scale! Therefore exactly $10 \\times 125 = 1250$.", 20, 'hard'),
            generateQuestion("Scale $1:n$. Real area $A$, map area $a$. Relationship?", ["$A = a \times n^2$", "$A = a \times n$", "$a = A \times n^2$", "$A = a^2 \times n$"], 0, "Area multiplier is square of length multiplier.", 20, 'hard'),
            generateQuestion("Map $1:50,000$. Road $3\text{km}$. cm on map?", ["6", "1.5", "15", "60"], 0, "$300,000 / 50,000 = 6$.", 20, 'hard'),
            generateQuestion("Weight of model (solid material) vs real object scale $1:10$?", ["1/1000", "1/100", "1/10", "1/8000"], 0, "Weight $\propto$ Volume $\propto k^3$.", 20, 'hard'),
            generateQuestion("Real area $360,000 \text{m}^2$. Map area $10\text{cm}^2$. Scale 1:n?", ["1:6,000", "1:600", "1:36,000", "1:60,000"], 0, "Area scale $1:36,000 \text{m}^2 = 1:360,000,000 \text{cm}^2 \Rightarrow$ length $1:6,000$.", 20, 'hard'),
            generateQuestion("Find volume of room $5\text{m} \times 4\text{m} \times 3\text{m}$ on $1:50$ model (in $\text{cm}^3$).", ["480", "48", "4800", "240"], 0, "$60\text{m}^3 \times (1/50)^3 = 60,000,000 / 125,000 = 480$.", 20, 'hard'),
            generateQuestion("Scale $1:25,000$. $1\text{cm}^2$ represents ___ $\text{ha}$?", ["6.25", "2.5", "25", "1"], 0, "$250 \times 250 \text{m}^2 = 62,500\text{m}^2 = 6.25\text{ha}$.", 20, 'hard'),
            generateQuestion("Distance on $1:10,000$ map is twice the distance on $1:n$ map for same real distance. $n = $?", ["20,000", "5,000", "10,000", "40,000"], 0, "Smaller $n$ means larger map distance.", 20, 'hard'),
            generateQuestion("Map $1:n$. If $a \text{cm}^2$ represents $A \text{km}^2$, then $n = $?", ["$\sqrt{A/a} \times 100,000$", "$A/a \times 100,000$", "$\sqrt{a/A} \times 10^5$", "None"], 0, "Conversion factor approach.", 20, 'hard')
        ]
    },
    'g1-s34-algebra': {
        learning: [
            // Easy (1-10)
            generateQuestion("Make strictly $x$ the given subject: $y = x + 7$.", ["x = y - 7", "x = y + 7", "x = 7 - y", "y = x - 7"], 0, "**Formative Insight**: Defensively isolate $x$ by forcefully pushing $+7$ to the other isolated side as $-7$.", 5, 'easy'),
            generateQuestion("Make $a$ the subject: $b = a - 3$.", ["a = b + 3", "a = b - 3", "a = 3 - b", "b = a + 3"], 0, "Move -3 to other side.", 5, 'easy'),
            generateQuestion("Simplify: $4x/2$.", ["2x", "4", "x", "2"], 0, "Divide numbers.", 5, 'easy'),
            generateQuestion("Simplify: $\frac{x}{2} + \frac{x}{2}$.", ["x", "x/4", "2x", "x^2/4"], 0, "Two halves make a whole.", 5, 'easy'),
            generateQuestion("Factorise: $3x + 3y$.", ["3(x+y)", "3xy", "x+y", "3(x-y)"], 0, "Common factor 3.", 5, 'easy'),
            generateQuestion("Expand: $2(x-5)$.", ["2x-10", "2x-5", "x-10", "2x+10"], 0, "Distribute 2.", 5, 'easy'),
            generateQuestion("Simplify: $ab/a$.", ["b", "a", "1", "ab^2"], 0, "Cancel a.", 5, 'easy'),
            generateQuestion("Make $x$ the subject: $y = 5x$.", ["x = y/5", "x = 5y", "x = y-5", "x = 5/y"], 0, "Divide by 5.", 5, 'easy'),
            generateQuestion("Coefficient of $x$ in $3x^2 - 4x + 1$?", ["-4", "3", "1", "4"], 0, "Includes the sign.", 5, 'easy'),
            generateQuestion("Simplify: $3x + 2x - x$.", ["4x", "5x", "6x", "3x"], 0, "Combine terms.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Make precisely $m$ the subject: $F = ma$.", ["m = F / a", "m = F - a", "m = a / F", "m = F \\times a"], 0, "**Formative Insight**: The $a$ is violently multiplying $m$. Detach it aggressively by completely dividing the other side by $a$.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{2x}{3} + \frac{x}{6}$.", ["5x/6", "3x/9", "x/2", "x/3"], 0, "Common denominator 6: $4x/6 + x/6 = 5x/6$.", 10, 'medium'),
            generateQuestion("Make $x$ the subject: $y = 3x + 2$.", ["x = (y-2)/3", "x = y-2/3", "x = 3y-2", "x = (y+2)/3"], 0, "Subtract 2, then divide by 3.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{10a^2}{5a}$.", ["2a", "2", "5a", "2a^2"], 0, "Divide terms.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{x+1}{2} - \frac{x-1}{2}$.", ["1", "x", "0", "0.5"], 0, "$(x+1-x+1)/2 = 2/2 = 1$.", 10, 'medium'),
            generateQuestion("Factorise: $x^2 - 5x$.", ["x(x-5)", "5(x-1)", "x(x+5)", "x^2(1-5/x)"], 0, "Common factor x.", 10, 'medium'),
            generateQuestion("Make $h$ the subject: $V = LWh$.", ["h = V/(LW)", "h = V-LW", "h = LW/V", "V = h/LW"], 0, "Divide by LW.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{a^2 - a}{a}$.", ["a-1", "a", "1", "a^2-1"], 0, "Factor x then cancel.", 10, 'medium'),
            generateQuestion("Expand: $(x+1)(x+3)$.", ["x^2 + 4x + 3", "x^2 + 3", "x^2 + 4", "2x + 4"], 0, "FOIL method.", 10, 'medium'),
            generateQuestion("Solve for $x$: $2(x-3) = 10$.", ["8", "5", "13", "2"], 0, "$x-3=5$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Simplify explicitly $\\frac{x}{2} - \\frac{x}{3}$.", ["x/6", "x/1", "-x/6", "x/5"], 0, "**Formative Insight**: Common denominator is purely 6. Fractions become exactly $\\frac{3x}{6} - \\frac{2x}{6} = \\frac{1x}{6}$.", 20, 'hard'),
            generateQuestion("Make exactly $r$ the subject forcefully of $V = \\pi r^2 h$.", ["$r = \\sqrt{V / \\pi h}$", "$r = V / \\pi h$", "$r = (V/\\pi h)^2$", "$r = \\sqrt{V} / \\pi h$"], 0, "**Formative Insight**: Strip outside in! First cleanly divide by $\\pi h$ entirely. You get $r^2 = \\frac{V}{\\pi h}$. Finally securely square root it all.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{3}{x} + \frac{2}{y}$.", ["(3y+2x)/xy", "5/(x+y)", "6/xy", "1"], 0, "Cross multiply denominators.", 20, 'hard'),
            generateQuestion("Make $x$ the subject: $y = \frac{x+1}{x-1}$.", ["x = (y+1)/(y-1)", "x = (y-1)/(y+1)", "x = y+1", "x = y-1"], 0, "$y(x-1) = x+1 \Rightarrow yx - y = x + 1 \Rightarrow x(y-1) = y+1$.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{x^2 - 9}{x+3}$.", ["x-3", "x+3", "x-9", "3"], 0, "Factor difference of squares.", 20, 'hard'),
            generateQuestion("Make $c$ the subject: $E = mc^2$.", ["$c = \sqrt{E/m}$", "$c = E/m$", "$c = (E/m)^2$", "$c = \sqrt{m/E}$"], 0, "Isolate c.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{1}{a} - \frac{1}{b}$.", ["(b-a)/ab", "1/(a-b)", "(a-b)/ab", "0"], 0, "Common denominator ab.", 20, 'hard'),
            generateQuestion("Solve: $\frac{x+2}{3} = \frac{x-1}{2}$.", ["7", "5", "1", "0"], 0, "$2(x+2) = 3(x-1) \Rightarrow 2x+4 = 3x-3 \Rightarrow x=7$.", 20, 'hard'),
            generateQuestion("Factorise: $x^2 + 5x + 6$.", ["(x+2)(x+3)", "(x+1)(x+6)", "(x-2)(x-3)", "(x+5)(x+1)"], 0, "Product 6, sum 5.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{x^2}{xy} \times \frac{y^2}{x}$.", ["y", "x", "xy", "1"], 0, "Cancel factors.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Make $x$ strictly the subject explicitly: $\\frac{x}{3} = y$.", ["x = 3y", "x = y/3", "x = y + 3", "x = 3/y"], 0, "**Lesson**: Since $x$ is presently fiercely divided by 3, you completely reverse it directly by exactly multiplying by 3.", 5, 'easy'),
            generateQuestion("Simplify: $2a + 3a$.", ["5a", "6a", "a", "5"], 0, "Like terms.", 5, 'easy'),
            generateQuestion("Factorise: $5x - 10$.", ["5(x-2)", "5(x-10)", "x(5-10)", "2(x-5)"], 0, "HCF is 5.", 5, 'easy'),
            generateQuestion("Expand: $x(x+2)$.", ["x^2+2x", "x+x+2", "2x+2", "x^2+2"], 0, "Multiply throughout.", 5, 'easy'),
            generateQuestion("Value of $2a-b$ if $a=3, b=1$?", ["5", "7", "4", "2"], 0, "$6-1=5$.", 5, 'easy'),
            generateQuestion("Simplify: $0 \times x$.", ["0", "x", "1", "Infinite"], 0, "Anything * 0 is 0.", 5, 'easy'),
            generateQuestion("Simplify: $x+x$.", ["2x", "x^2", "x", "0"], 0, "Addition vs power.", 5, 'easy'),
            generateQuestion("Make $x$ the subject: $x-4=y$.", ["x=y+4", "x=y-4", "x=4-y", "y=x+4"], 0, "Rearrange.", 5, 'easy'),
            generateQuestion("Simplify: $10x/10$.", ["x", "10", "1", "100x"], 0, "Cancel factor.", 5, 'easy'),
            generateQuestion("Expand: $-(x-1)$.", ["1-x", "-x-1", "x-1", "-x"], 0, "Distribute negative.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Simplify carefully: $\frac{4x}{2}$.", ["2x", "4", "2", "x"], 0, "**Lesson**: Numbers definitively cancel each other precisely! $4 \\div 2$ firmly leaves $2$. Variables remain completely untouched.", 10, 'medium'),
            generateQuestion("Solve: $3x+1=10$.", ["3", "11", "9", "4"], 0, "$3x=9$.", 10, 'medium'),
            generateQuestion("Factorise: $a^2 + ab$.", ["a(a+b)", "a(1+b)", "ab(a+1)", "a^2b"], 0, "Common factor a.", 10, 'medium'),
            generateQuestion("Simplify: $\frac{x}{5} + \frac{x}{10}$.", ["3x/10", "2x/15", "x/15", "x/2"], 0, "$2x/10 + x/10$.", 10, 'medium'),
            generateQuestion("Make $t$ the subject: $v = u + at$.", ["t = (v-u)/a", "t = v-u/a", "t = a(v-u)", "t = (v+u)/a"], 0, "Standard linear motion formula.", 10, 'medium'),
            generateQuestion("Simplify: $(2x)^2$.", ["4x^2", "2x^2", "4x", "2x"], 0, "Square both factor parts.", 10, 'medium'),
            generateQuestion("Expand: $(x-2)(x+2)$.", ["x^2-4", "x^2+4", "x^2-2x-4", "x-4"], 0, "Difference of squares.", 10, 'medium'),
            generateQuestion("Find $x$ if $x/4 - 1 = 2$.", ["12", "4", "8", "6"], 0, "$x/4 = 3$.", 10, 'medium'),
            generateQuestion("Factorise: $4x + 6$.", ["2(2x+3)", "2(x+3)", "4(x+1.5)", "x(4+6)"], 0, "HCF is 2.", 10, 'medium'),
            generateQuestion("Simplify: $a(b-c) + ac$.", ["ab", "abc", "ab-2ac", "b-c"], 0, "$ab - ac + ac = ab$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Solve completely: $\frac{2}{x} = \frac{4}{10}$.", ["5", "2", "8", "1"], 0, "**Lesson**: Pure Cross-multiply explicitly! $4x = 20$. Dividing exactly by 4 boldly reveals $x=5$.", 20, 'hard'),
            generateQuestion("[Interleaved] Make $g$ the rigorous subject: $T = 2\\pi \\sqrt{\\frac{L}{g}}$.", ["$g = \\frac{4\\pi^2 L}{T^2}$", "$g = \\frac{L}{T^2}$", "$g = \\frac{2\\pi L}{T}$", "$g = \\frac{T^2}{4\\pi^2 L}$"], 0, "**Lesson**: Strip totally! Divide by $2\\pi$. Then aggressively SQUARE absolutely everything to destroy the root: $\\frac{T^2}{4\\pi^2} = \\frac{L}{g}$. Then boldly flip both sides exactly and multiply thoroughly by L.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{x}{x+1} - \frac{1}{x}$.", ["(x^2-x-1)/(x(x+1))", "1", "-1", "x^2/(x+1)"], 0, "$(x^2 - (x+1)) / (x(x+1))$.", 20, 'hard'),
            generateQuestion("Make $b$ the subject: $A = 0.5(a+b)h$.", ["b = 2A/h - a", "b = A/2h - a", "b = 2A-ah", "b = A-ah/2"], 0, "Trapezium area formula.", 20, 'hard'),
            generateQuestion("Solve: $\frac{10}{x-1} = 2$.", ["6", "5", "4", "11"], 0, "$2x-2=10 \Rightarrow 2x=12$.", 20, 'hard'),
            generateQuestion("Factorise completely: $2x^2 - 18$.", ["2(x-3)(x+3)", "2(x^2-9)", "(2x-6)(x+3)", "2(x-3)^2"], 0, "$2(x^2-9) = 2(x-3)(x+3)$.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{x^2+4x+4}{x+2}$.", ["x+2", "x-2", "x+4", "2"], 0, "Perfect square factor.", 20, 'hard'),
            generateQuestion("Solve for $x$: $ax+b = cx+d$.", ["(d-b)/(a-c)", "(b-d)/(c-a)", "d-b-c-a", "abcd"], 0, "Group x terms.", 20, 'hard'),
            generateQuestion("Simplify: $\frac{a}{b} \div \frac{c}{d}$.", ["ad/bc", "ac/bd", "ab/cd", "1"], 0, "Multiply by reciprocal.", 20, 'hard'),
            generateQuestion("Make $x$ the subject: $y = x^2 - a$.", ["$x = \sqrt{y+a}$", "$x = \sqrt{y-a}$", "$x = y^2+a$", "$x = (y+a)^2$"], 0, "Standard isolation.", 20, 'hard')
        ]
    },
    'g1-s34-quadratic': {
        learning: [
            // Easy (1-10)
            generateQuestion("In the equation exactly $y = 3x^2 + 2x - 5$, what is pure constant 'c'?", ["-5", "5", "3", "2"], 0, "**Formative Insight**: 'c' is the naked number violently wandering alone with absolutely no x attached. Keep its designated sign!", 5, 'easy'),
            generateQuestion("Degree of a quadratic equation?", ["2", "1", "3", "0"], 0, "Highest power is 2.", 5, 'easy'),
            generateQuestion("Shape of $y=x^2$?", ["Parabola", "Line", "Circle", "Wave"], 0, "U-shape.", 5, 'easy'),
            generateQuestion("Y-intercept of $y=x^2+10$?", ["10", "0", "1", "-10"], 0, "Set x=0.", 5, 'easy'),
            generateQuestion("Coefficient of $x^2$ in $y=x^2-5$?", ["1", "0", "2", "-5"], 0, "Implicit 1.", 5, 'easy'),
            generateQuestion("Is $y=2x+3$ a quadratic?", ["No", "Yes"], 0, "No $x^2$ term.", 5, 'easy'),
            generateQuestion("Does $y=-x^2$ open up or down?", ["Down", "Up", "Left", "Right"], 0, "Negative lead.", 5, 'easy'),
            generateQuestion("Roots are values that make $y = $?", ["0", "1", "Maximum", "Intercept"], 0, "X-axis crossings.", 5, 'easy'),
            generateQuestion("Symmetry of a parabola is a ___ line.", ["Vertical", "Horizontal", "Diagonal", "None"], 0, "Axis of symmetry.", 5, 'easy'),
            generateQuestion("Value of $x^2$ if $x=-3$?", ["9", "-9", "6", "-6"], 0, "Negative squared is positive.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Solve perfectly $(x - 4)(x + 2) = 0$.", ["4, -2", "-4, 2", "0, 0", "2, -4"], 0, "**Formative Insight**: The absolute Zero Product Truth completely rules here. Either $x-4=0$ explicitly, or forcibly $x+2=0$.", 10, 'medium'),
            generateQuestion("Solve $x^2-9=0$.", ["3, -3", "9, -9", "0, 9", "No solution"], 0, "$x^2=9$.", 10, 'medium'),
            generateQuestion("Turning point of $y=x^2$?", ["(0,0)", "(1,1)", "(0,1)", "(2,4)"], 0, "The origin.", 10, 'medium'),
            generateQuestion("X-intercepts of $y=x(x-5)$?", ["0, 5", "0, -5", "5, -5", "None"], 0, "Check factors.", 10, 'medium'),
            generateQuestion("Does $y=x^2+5$ cross the x-axis?", ["No", "Yes"], 0, "Minimum is at $y=5$.", 10, 'medium'),
            generateQuestion("Solve $x^2=25$.", ["5, -5", "5", "25", "None"], 0, "Don't forget the negative root.", 10, 'medium'),
            generateQuestion("Y-intercept of $y=(x-1)(x+2)$?", ["-2", "2", "1", "0"], 0, "$-1 \times 2 = -2$.", 10, 'medium'),
            generateQuestion("Line of symmetry for $y=(x-3)^2$?", ["x=3", "x=-3", "y=0", "x=0"], 0, "Vertex is at $x=3$.", 10, 'medium'),
            generateQuestion("Coefficient 'b' in $y=x^2-4$?", ["0", "-4", "1", "x"], 0, "No $x$ term.", 10, 'medium'),
            generateQuestion("Determine $y$ if $y=x^2-x-1$ and $x=2$.", ["1", "5", "-1", "0"], 0, "$4-2-1=1$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Factorise securely $x^2 + 7x + 10 = 0$.", ["(x+2)(x+5)", "(x+1)(x+10)", "(x-2)(x-5)", "(x+3)(x+4)"], 0, "**Formative Insight**: Seeking exactly two numbers that flawlessly multiply together to exactly 10, AND simultaneously perfectly add up to cleanly 7. Those are strictly 2 and 5.", 20, 'hard'),
            generateQuestion("Where specifically does the tight curve explicitly $y = x^2 - 16$ cross cleanly the exact x-axis?", ["4, -4", "0, 16", "16, -16", "0, 0"], 0, "**Formative Insight**: X-axis strictly means firmly $y=0$. Fully $x^2 - 16 = 0 \\Rightarrow x^2 = 16$. This fiercely splits neatly into two absolute roots: $4$ and $-4$.", 20, 'hard'),
            generateQuestion("Quadratic formula: $x = $?", ["$(-b \pm \sqrt{b^2-4ac})/2a$", "$(-b \pm \sqrt{b^2+4ac})/2a$", "$(b \pm \sqrt{b^2-4ac})/2a$", "$-b/2a$"], 0, "Standard formula.", 20, 'hard'),
            generateQuestion("Solve $x^2 - 5x + 6 = 0$.", ["2, 3", "-2, -3", "1, 6", "1, 5"], 0, "$(x-2)(x-3)$.", 20, 'hard'),
            generateQuestion("Find $k$ if $y=x^2+k$ passes through $(2, 10)$.", ["6", "14", "8", "4"], 0, "$4+k=10$.", 20, 'hard'),
            generateQuestion("Solve $x^2 + 2x + 1 = 0$.", ["-1", "1", "0, -2", "No solution"], 0, "$(x+1)^2 = 0$.", 20, 'hard'),
            generateQuestion("Line of symmetry for $y=x^2-6x+8$?", ["x=3", "x=6", "x=4", "x=2"], 0, "$x = -b/2a = 6/2 = 3$.", 20, 'hard'),
            generateQuestion("Discriminant of $x^2+x+1=0$?", ["-3", "1", "5", "0"], 0, "$1^2 - 4(1)(1) = -3$.", 20, 'hard'),
            generateQuestion("X-intercepts of $y=x^2-x-6$?", ["3, -2", "-3, 2", "6, -1", "0, 6"], 0, "$(x-3)(x+2)$.", 20, 'hard'),
            generateQuestion("Vertex of $y=(x-5)^2+10$?", ["(5, 10)", "(-5, 10)", "(5, -10)", "(10, 5)"], 0, "Standard form.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("What strict explicit format cleanly defines the almighty Quadratic Formula?", ["$-b \\pm \\sqrt{b^2 - 4ac} / 2a$", "$b^2 - 4ac$", "$y = mx + c$", "$-b / 2a$"], 0, "**Lesson**: The grand master formula perfectly destroys any highly stubborn quadratic equation securely.", 5, 'easy'),
            generateQuestion("Constant term in $y=x^2+x$?", ["0", "1", "x", "None"], 0, "Implicit 0.", 5, 'easy'),
            generateQuestion("Lead coefficient of $y=2x^2+3$?", ["2", "1", "3", "0"], 0, "Number before $x^2$.", 5, 'easy'),
            generateQuestion("Is it quadratic? $x(x+1)=y$", ["Yes", "No"], 0, "Expands to $x^2+x$.", 5, 'easy'),
            generateQuestion("Highest point on a 'frown' parabola?", ["Maximum", "Minimum", "Intercept", "Origin"], 0, "Terminology.", 5, 'easy'),
            generateQuestion("If $y=x^2$, what is $y$ when $x=0.5$?", ["0.25", "1", "0.5", "0.1"], 0, "$0.5 \times 0.5 = 0.25$.", 5, 'easy'),
            generateQuestion("A quadratic graph is called a ___.", ["Parabola", "Hyperbola", "Ellipse", "Line"], 0, "Standard curve name.", 5, 'easy'),
            generateQuestion("Find $c$ in $y=3x^2+4x-9$.", ["-9", "9", "3", "4"], 0, "The y-intercept value.", 5, 'easy'),
            generateQuestion("Can a quadratic have 3 roots?", ["No", "Yes"], 0, "Degree 2 means max 2 roots.", 5, 'easy'),
            generateQuestion("Symmetry axis of $y=x^2$?", ["y-axis", "x-axis", "origin", "none"], 0, "$x=0$ is the y-axis.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("The core 'Discriminant' strictly is entirely calculated by:", ["$b^2 - 4ac$", "$-b / 2a$", "$\\sqrt{b^2 - 4ac}$", "$2a$"], 0, "**Lesson**: The inner heart of the root strongly powers the discriminant, predicting completely the exact number of strict solutions reliably.", 10, 'medium'),
            generateQuestion("Number of roots if $b^2-4ac > 0$?", ["2", "1", "0", "Infinite"], 0, "Positive discriminant means 2 real roots.", 10, 'medium'),
            generateQuestion("Vertex of $y=(x+2)^2-3$?", ["(-2, -3)", "(2, -3)", "(-2, 3)", "(0, 1)"], 0, "Shifted left 2, down 3.", 10, 'medium'),
            generateQuestion("Find x-intercepts of $y=(x-10)(x-1)$.", ["1, 10", "-1, -10", "11, 0", "None"], 0, "Check roots.", 10, 'medium'),
            generateQuestion("Does $(1, 2)$ lie on $y=2x^2$?", ["Yes", "No"], 0, "$2(1)^2 = 2$.", 10, 'medium'),
            generateQuestion("Coefficient of $x$ in $(x+1)^2$?", ["2", "1", "0", "x"], 0, "Expands to $x^2+2x+1$.", 10, 'medium'),
            generateQuestion("Solve $x^2-1=0$.", ["1, -1", "0", "1", "None"], 0, "Squares of 1.", 10, 'medium'),
            generateQuestion("Range of $y=x^2+4$?", ["$y \ge 4$", "$y \le 4$", "Any y", "$y > 0$"], 0, "Vertex is the minimum.", 10, 'medium'),
            generateQuestion("X-intercept of $y=x^2-x$?", ["0, 1", "0, -1", "1, -1", "None"], 0, "$x(x-1)$.", 10, 'medium'),
            generateQuestion("Turning point of $y=-(x-4)^2$?", ["(4, 0)", "(-4, 0)", "(0, 4)", "(0, -16)"], 0, "Peak at x=4.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Where is the precise $y$-intercept of effectively $y = 2x^2 + 9x - 1$ located?", ["(0, -1)", "(0, 1)", "(-1, 0)", "(0, 0)"], 0, "**Lesson**: Forcefully slam $x=0$. All $x$ terms cleanly instantly vanish entirely! You powerfully are left totally alone with constant explicitly $-1$.", 20, 'hard'),
            generateQuestion("[Interleaved] Which exact parabola completely avoids intensely smiling?", ["$y = 5 - x^2$", "$y = 2x^2 + 1$", "$y = x^2 - x$", "$y = 0.5x^2$"], 0, "**Lesson**: A firmly downward strictly negative $x^2$ coefficient perfectly commands the entire graph purely into a harsh downward frown safely.", 20, 'hard'),
            generateQuestion("Solve $2x^2 - 8 = 0$.", ["2, -2", "4, -4", "8, -8", "None"], 0, "$x^2=4$.", 20, 'hard'),
            generateQuestion("Value of $b^2-4ac$ if equation has 2 equal roots?", ["0", "Positive", "Negative", "1"], 0, "Tangent to x-axis.", 20, 'hard'),
            generateQuestion("Find x-intercepts of $y=x^2+5x+4$.", ["-1, -4", "1, 4", "2, 2", "None"], 0, "$(x+1)(x+4)$.", 20, 'hard'),
            generateQuestion("Line of symmetry for $y=2(x-5)(x-1)$?", ["x=3", "x=5", "x=1", "x=6"], 0, "Midpoint of 1 and 5.", 20, 'hard'),
            generateQuestion("Solve $x^2 + 6x + 9 = 0$.", ["-3", "3", "0", "No solution"], 0, "$(x+3)^2 = 0$.", 20, 'hard'),
            generateQuestion("Minimum value of $y=x^2-4x+7$?", ["3", "7", "4", "0"], 0, "$(x-2)^2 + 3$.", 20, 'hard'),
            generateQuestion("Solve $x^2 = x$.", ["0, 1", "0", "1", "None"], 0, "$x^2-x=0 \Rightarrow x(x-1)=0$.", 20, 'hard'),
            generateQuestion("Is $(x+1)(x-1)=x^2-1$ an identity?", ["Yes", "No"], 0, "True for all x.", 20, 'hard')
        ]
    },
    'g1-s34-trig': {
        learning: [
            // Easy (1-10)
            generateQuestion("In a right-angled triangle, strictly what is $\\sin(\\theta)$ defined as?", ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent", "Hypotenuse / Opposite"], 0, "**Formative Insight**: Remember the legendary SOH CAH TOA! SOH firmly stands for Sine = Opposite / Hypotenuse.", 5, 'easy'),
            generateQuestion("What does TOA stand for?", ["$\tan = \text{Opp}/\text{Adj}$", "$\tan = \text{Adj}/\text{Opp}$", "$\tan = \text{Opp}/\text{Hyp}$", "Total Overall Area"], 0, "$\tan(\theta) = \text{Opposite} / \text{Adjacent}$.", 5, 'easy'),
            generateQuestion("Pythagoras Theorem formula?", ["$a^2 + b^2 = c^2$", "$a + b = c$", "$a^2 - b^2 = c^2$", "$ab = c^2$"], 0, "Relationship of sides in right triangle.", 5, 'easy'),
            generateQuestion("Which side is the 'Hypotenuse'?", ["Longest side", "Shortest side", "Side next to angle", "Side opposite to angle"], 0, "Opposite the right angle.", 5, 'easy'),
            generateQuestion("Sum of angles in a triangle?", ["$180^\\circ$", "$90^\\circ$", "$360^\\circ$", "$270^\\circ$"], 0, "Basic geometric fact.", 5, 'easy'),
            generateQuestion("$\cos(\theta)$ is Adjacent over ___.", ["Hypotenuse", "Opposite", "Tangent", "Radius"], 0, "CAH part of SOH CAH TOA.", 5, 'easy'),
            generateQuestion("Typical unit for angles?", ["Degrees", "KG", "Meters", "Seconds"], 0, "Standard geometric unit.", 5, 'easy'),
            generateQuestion("Angle between horizontal and ground is $0^\\circ$. What is 'vertical'?", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$270^\\circ$"], 0, "Perpendicularity.", 5, 'easy'),
            generateQuestion("Tangent ratio is used when you have Opp and ___.", ["Adj", "Hyp", "$\sin$", "$\cos$"], 0, "The T in TOA.", 5, 'easy'),
            generateQuestion("If $\theta = 45^\\circ$ in right isosceles, $\tan(\theta) = $?", ["1", "0", "0.5", "Infinite"], 0, "Opposite = Adjacent.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("A ladder leans against a wall. The angle between ladder and ground is the angle of strictly ___.", ["Elevation", "Depression", "Rotation", "Reflection"], 0, "**Formative Insight**: You are looking UP from the ground. This is always defined as the angle of ELEVATION from the horizontal.", 10, 'medium'),
            generateQuestion("Find Opp if $\theta = 30^\\circ$ and $\text{Hyp} = 10$. ($\sin 30^\\circ = 0.5$)", ["5", "8.66", "10", "20"], 0, "$10 \times 0.5 = 5$.", 10, 'medium'),
            generateQuestion("Find Adj if $\theta = 60^\\circ$ and $\text{Hyp} = 8$. ($\cos 60^\\circ = 0.5$)", ["4", "6.9", "8", "16"], 0, "$8 \times 0.5 = 4$.", 10, 'medium'),
            generateQuestion("In a right triangle, if sides are 3 and 4, hypotenuse is?", ["5", "7", "1", "25"], 0, "3-4-5 triplet.", 10, 'medium'),
            generateQuestion("Angle of depression is measured from the ___.", ["Horizontal", "Vertical", "Ground", "Object"], 0, "Looking down from level eye line.", 10, 'medium'),
            generateQuestion("Find $\tan(\theta)$ if $\text{Opp}=6, \text{Adj}=8$.", ["0.75", "1.33", "0.6", "0.8"], 0, "$6/8 = 0.75$.", 10, 'medium'),
            generateQuestion("Relationship: $\sin(90-\theta) = $?", ["$\cos(\theta)$", "$-\sin(\theta)$", "$\tan(\theta)$", "1"], 0, "Co-function identity.", 10, 'medium'),
            generateQuestion("Angle of elevation to top of $10\text{m}$ tower from distance $10\text{m}$?", ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"], 0, "$\tan(\theta) = 1$.", 10, 'medium'),
            generateQuestion("Maximum value of $\sin(\theta)$?", ["1", "Infinite", "0", "90"], 0, "Unit circle peak.", 10, 'medium'),
            generateQuestion("Find Hyp if $\text{Opp}=5, \text{Adj}=12$.", ["13", "17", "7", "60"], 0, "$5^2 + 12^2 = 169 = 13^2$.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("If $\\cos(\\theta) = 0.8$, find precisely the valid Tangent ratio.", ["0.75", "0.6", "1.25", "1.33"], 0, "**Formative Insight**: Use a triangle! If $\text{Adj}=8$ and $\text{Hyp}=10$, then by Pythagoras, $\text{Opp} = \\sqrt{10^2 - 8^2} = 6$. Therefore strictly $\\tan = 6/8 = 0.75$.", 20, 'hard'),
            generateQuestion("Find $\theta$ to 1 decimal place if $\\sin(\\theta) = 0.5$.", ["$30.0^\\circ$", "$60.0^\\circ$", "$45.0^\\circ$", "$15.0^\\circ$"], 0, "**Formative Insight**: Use the inverse sine! $\\sin^{-1}(0.5) = 30^\\circ$. Always verify your calculator is in DEGREE mode.", 20, 'hard'),
            generateQuestion("Sine Rule formula?", ["$a/\sin A = b/\sin B$", "$a^2 = b^2 + c^2 - 2bc \cos A$", "$Area = 0.5 ab \sin C$", "SOH"], 0, "Ratio of sides and angles.", 20, 'hard'),
            generateQuestion("Cosine Rule used when you have SSS or ___.", ["SAS", "AAS", "ASA", "SSA"], 0, "Side-Angle-Side.", 20, 'hard'),
            generateQuestion("Find area of triangle if $a=5, b=8, C=30^\\circ$.", ["10", "20", "5", "40"], 0, "$0.5 \times 5 \times 8 \times 0.5 = 10$.", 20, 'hard'),
            generateQuestion("True bearing of North-East?", ["$045^\\circ$", "$090^\\circ$", "$135^\\circ$", "$000^\\circ$"], 0, "Clockwise from North.", 20, 'hard'),
            generateQuestion("Shadow of $2\text{m}$ pole is $1.5\text{m}$. Angle of elevation of sun?", ["$53.1^\\circ$", "$36.9^\\circ$", "$45^\\circ$", "$60^\\circ$"], 0, "$\tan^{-1}(2/1.5) \\approx 53.1^\\circ$.", 20, 'hard'),
            generateQuestion("Find distance between $(0,0)$ and $(3,4)$.", ["5", "7", "25", "1"], 0, "$\sqrt{3^2 + 4^2}$.", 20, 'hard'),
            generateQuestion("$\sin^2 \theta + \cos^2 \theta = $?", ["1", "0", "2", "$\tan^2 \theta$"], 0, "Fundamental identity.", 20, 'hard'),
            generateQuestion("Angle in a semi-circle is always ___.", ["$90^\\circ$", "$180^\\circ$", "$45^\\circ$", "$60^\\circ$"], 0, "Thales' Theorem.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("In right-angled triangle $ABC$, the side strictly opposite the right-angle is the ___.", ["Hypotenuse", "Adjacent", "Radius", "Opposite"], 0, "**Lesson**: The Hypotenuse is the absolute longest side and fundamentally faces the $90^\\circ$ corner.", 5, 'easy'),
            generateQuestion("Tan function acronym?", ["TOA", "SOH", "CAH", "TAO"], 0, "Tangent, Opposite, Adjacent.", 5, 'easy'),
            generateQuestion("Value of $\sqrt{3^2 + 4^2}$?", ["5", "7", "25", "1"], 0, "Pythagorean triplet.", 5, 'easy'),
            generateQuestion("Calculate $\sin(0^\\circ)$.", ["0", "1", "180", "Undefined"], 0, "Height at angle 0.", 5, 'easy'),
            generateQuestion("Calculate $\cos(0^\\circ)$.", ["1", "0", "90", "Undefined"], 0, "Projection at angle 0.", 5, 'easy'),
            generateQuestion("Shortest side of 3, 4, 5 triangle?", ["3", "4", "5", "None"], 0, "Basic sorting.", 5, 'easy'),
            generateQuestion("Which ratio uses ONLY the two non-hypotenuse sides?", ["Tangent", "Sine", "Cosine", "None"], 0, "TOA rule.", 5, 'easy'),
            generateQuestion("Bearing is measured from North in a ___ direction.", ["Clockwise", "Anti-clockwise", "Upward", "Fixed"], 0, "Navigation standard.", 5, 'easy'),
            generateQuestion("If $\tan(\\theta) = 1$, then $\text{Opp} = $?", ["Adj", "Hyp", "1", "0"], 0, "Ratio calculation.", 5, 'easy'),
            generateQuestion("Value of $\sin(90^\\circ)$?", ["1", "0", "90", "0.5"], 0, "Max height.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("A building is $20\\text{m}$ tall. Its shadow is $20\\text{m}$ long. Calculate strictly the angle of elevation of the sun.", ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$"], 0, "**Lesson**: $\\tan(\\theta) = 20 / 20 = 1$. Since $\\tan(45^\\circ) = 1$, the angle must be exactly $45^\\circ$.", 10, 'medium'),
            generateQuestion("Pythagoras: $a=6, b=8, c=x$. Find $x$.", ["10", "14", "100", "50"], 0, "$\sqrt{36+64} = 10$.", 10, 'medium'),
            generateQuestion("Find angle of depression if you look down $5\text{m}$ over horizontal $5\text{m}$.", ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$0^\\circ$"], 0, "Isosceles triangle context.", 10, 'medium'),
            generateQuestion("Find Opp if $\text{Hyp}=10$ and $\theta=30^\\circ$.", ["5", "8.66", "10", "2"], 0, "$\sin 30^\\circ = 0.5$.", 10, 'medium'),
            generateQuestion("Bearing of West?", ["$270^\\circ$", "$090^\\circ$", "$180^\\circ$", "$360^\\circ$"], 0, "Standard direction.", 10, 'medium'),
            generateQuestion("A plane flies North then East. The path forms a ___ triangle.", ["Right-angled", "Equilateral", "Isosceles", "Obtuse"], 0, "North and East are perp.", 10, 'medium'),
            generateQuestion("Value of $\sin(30^\\circ)$?", ["0.5", "0.866", "1", "0"], 0, "Standard value.", 10, 'medium'),
            generateQuestion("Value of $\cos(60^\\circ)$?", ["0.5", "0.866", "0.707", "1"], 0, "Same as $\sin 30^\\circ$.", 10, 'medium'),
            generateQuestion("If $\sin \\theta = \cos \\theta$, then $\\theta = $?", ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$0^\\circ$"], 0, "Intersection on graph.", 10, 'medium'),
            generateQuestion("Solve: $\sin x = 1/\\sqrt{2}$.", ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"], 0, "Special angle.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("True Bearing of a point is $120^\\circ$. Find its strictly equivalent Back Bearing.", ["$300^\\circ$", "$240^\\circ$", "$060^\\circ$", "$180^\\circ$"], 0, "**Lesson**: Add exactly $180^\\circ$ if the bearing is less than $180^\\circ$. $120 + 180 = 300^\\circ$.", 20, 'hard'),
            generateQuestion("[Interleaved] In a triangle with sides $5, 6, 7$, use the Cosine Rule to decide: Is it strictly right-angled?", ["No", "Yes", "Cannot tell", "Maybe"], 0, "**Lesson**: Check Pythagoras! $5^2 + 6^2 = 25+36 = 61$. $7^2 = 49$. Since $61 \\neq 49$, it is absolutely NOT right-angled.", 20, 'hard'),
            generateQuestion("Cosine Rule: $a^2 = b^2 + c^2 - $ ?", ["$2bc \\cos A$", "$2bc \\sin A$", "$bc \\cos A$", "$2 \\sin A$"], 0, "Formula structure.", 20, 'hard'),
            generateQuestion("Area of triangle formula using Sine?", ["$0.5 ab \\sin C$", "$0.5 ab \\cos C$", "$ab \\sin C$", "Base * Height"], 0, "Two sides and included angle.", 20, 'hard'),
            generateQuestion("Value of $\sin 150^\\circ$?", ["0.5", "-0.5", "0.866", "1"], 0, "$\sin(180-30)$.", 20, 'hard'),
            generateQuestion("Value of $\cos 120^\\circ$?", ["-0.5", "0.5", "-0.866", "0"], 0, "Reflected in 2nd quadrant.", 20, 'hard'),
            generateQuestion("Bearing $210^\\circ$ is ___ degrees South of West?", ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$0^\\circ$"], 0, "$210 - 180 = 30$ (South of West). Wait, West is $270$. So $270 - 210 = 60$.", 1, 'hard'),
            generateQuestion("If $x$ is acute and $\sin x = \cos 20^\\circ$, then $x = $?", ["$70^\\circ$", "$20^\\circ$", "$110^\\circ$", "$50^\\circ$"], 0, "Co-function rule.", 20, 'hard'),
            generateQuestion("Find diagonal of cube with side $1$.", ["$\\sqrt{3}$", "$\\sqrt{2}$", "1", "3"], 0, "$\\sqrt{1^2+1^2+1^2}$.", 20, 'hard'),
            generateQuestion("Limit of $\\tan \\theta$ as $\\theta \\rightarrow 90^\\circ$?", ["Infinite", "0", "1", "-1"], 0, "Asymptote location.", 20, 'hard')
        ]
    },
    'g1-s34-mensuration': {
        learning: [
            // Easy (1-10)
            generateQuestion("Strict Volume of a Cylinder formula?", ["$\\pi r^2 h$", "$2\\pi rh$", "$\\pi r^2 L$", "$4/3 \\pi r^3$"], 0, "**Formative Insight**: A cylinder is precisely a circular prism. Circular Base ($\\pi r^2$) multiplied by the height ($h$).", 5, 'easy'),
            generateQuestion("Surface Area of a Sphere?", ["$4\\pi r^2$", "$4/3 \\pi r^3$", "$2\\pi r^2$", "$\\pi d$"], 0, "Standard 3D formula.", 5, 'easy'),
            generateQuestion("Volume of a Cube with side $a$?", ["$a^3$", "$a^2$", "$6a^2$", "$12a$"], 0, "All dimensions equal.", 5, 'easy'),
            generateQuestion("Total Surface Area of Cube?", ["$6a^2$", "$a^3$", "$4a^2$", "$12a$"], 0, "6 square faces.", 5, 'easy'),
            generateQuestion("Volume of a Rectangular Prism?", ["$L \\times W \\times H$", "$2(LW+WH+LH)$", "$L+W+H$", "$LWH / 3$"], 0, "Length * Width * Height.", 5, 'easy'),
            generateQuestion("Unit for Volume?", ["$m^3$", "$m^2$", "$m$", "$kg$"], 0, "Cubic units.", 5, 'easy'),
            generateQuestion("Area of circular base?", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "$r^2$"], 0, "Standard circle area.", 5, 'easy'),
            generateQuestion("1 Litre = ___ $cm^3$?", ["1000", "100", "10", "10000"], 0, "Metric conversion.", 5, 'easy'),
            generateQuestion("Curved Surface Area of Cylinder?", ["$2\\pi rh$", "$\\pi r^2 h$", "$2\\pi r^2$", "$\\pi d$"], 0, "Unrolled rectangle.", 5, 'easy'),
            generateQuestion("Volume of a Sphere?", ["$4/3 \\pi r^3$", "$4\\pi r^2$", "$\\pi r^3$", "$2/3 \\pi r^3$"], 0, "3D ball volume.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("A Cone has precisely Radius $r$ and Slant Height $l$. Total Surface Area strictly?", ["$\\pi r l + \\pi r^2$", "$\\pi r l$", "$2\\pi rh$", "$1/3 \\pi r^2 h$"], 0, "**Formative Insight**: You MUST sum the base ($\\pi r^2$) and the curved cloak ($\\pi rl$) together.", 10, 'medium'),
            generateQuestion("Volume of a Pyramid?", ["$1/3 \\times \\text{Base Area} \\times h$", "$\\text{Base Area} \\times h$", "$1/2 \\times \\text{Base} \\times h$", "$1/3 \\pi r^2 h$"], 0, "Standard apex solid.", 10, 'medium'),
            generateQuestion("Volume of a Cone?", ["$1/3 \\pi r^2 h$", "$\\pi r^2 h$", "$\\pi r l$", "$4/3 \\pi r^3$"], 0, "Pyramid with circular base.", 10, 'medium'),
            generateQuestion("Surface area of Hemisphere (closed base)?", ["$3\\pi r^2$", "$2\\pi r^2$", "$4\\pi r^2$", "$\\pi r^2$"], 0, "Curved half ($2\\pi r^2$) + Base ($\\pi r^2$).", 10, 'medium'),
            generateQuestion("Find volume if $r=3, h=10$ for Cylinder.", ["$90\\pi$", "$30\\pi$", "$60\\pi$", "$100\\pi$"], 0, "$\\pi \\times 3^2 \\times 10 = 90\\pi$.", 10, 'medium'),
            generateQuestion("Find volume of Sphere with $r=3$.", ["$36\\pi$", "$12\\pi$", "$27\\pi$", "$4\\pi$"], 0, "$4/3 \\times 27\\pi = 36\\pi$.", 10, 'medium'),
            generateQuestion("Relationship: Slant height $l$, $r$, and $h$ in a cone?", ["$l^2 = r^2 + h^2$", "$l = r + h$", "$l^2 = r^2 - h^2$", "$l = rh$"], 0, "Pythagoras inside cone.", 10, 'medium'),
            generateQuestion("Volume of Prism with Cross Sec $10\\text{cm}^2$ and Length $5\\text{cm}$?", ["50", "15", "2", "25"], 0, "Area * Length.", 10, 'medium'),
            generateQuestion("Area of Trapezoid base prism ($a=2, b=4, h=3$, length $10$)?", ["90", "18", "60", "30"], 0, "$0.5(2+4)3 \\times 10 = 9 \\times 10 = 90$.", 10, 'medium'),
            generateQuestion("Volume of composite: Cube (side 2) on top of Cylinder (r=1, h=2)?", ["$8 + 2\\pi$", "$4 + 2\\pi$", "10", "$8\\pi$"], 0, "Sum of volumes.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Density of a solid is exactly $5\\,g/cm^3$. If Mass is $100\\,g$, find strictly the volume.", ["$20\\,cm^3$", "$500\\,cm^3$", "$0.05\\,cm^3$", "$40\\,cm^3$"], 0, "**Formative Insight**: Use the Density Triangle! $\\text{Volume} = \\text{Mass} / \\text{Density}$. So $100 / 5 = 20$.", 20, 'hard'),
            generateQuestion("A Sphere has radius $r$. If $r$ is doubled, Volume becomes exactly ___ times larger.", ["8", "4", "2", "16"], 0, "**Formative Insight**: Volume scale relates to Length scale cubed! $2^3 = 8$.", 20, 'hard'),
            generateQuestion("A cone is cut horizontally. The bottom part is called a ___.", ["Frustum", "Prism", "Cylinder", "Segment"], 0, "Special 3D term.", 20, 'hard'),
            generateQuestion("Surface area of Sphere is $100\\pi$. Find radius.", ["5", "10", "25", "4"], 0, "$4\\pi r^2 = 100\\pi \\Rightarrow r^2=25$.", 20, 'hard'),
            generateQuestion("Water flows into cylinder ($r=2$) at $10\\text{cm}^3/s$. Rate of height rise?", ["$10 / (4\\pi)$", "10", "$10/2$", "$10 \\times 4\\pi$"], 0, "$dV/dt = Area \\times dh/dt$.", 20, 'hard'),
            generateQuestion("Mass of iron sphere ($r=3$, density $8\\text{g/cm}^3$)?", ["$288\\pi$", "$36\\pi$", "$108\\pi$", "$9\\pi$"], 0, "$36\\pi \\times 8 = 288\\pi$.", 20, 'hard'),
            generateQuestion("Volume of cone with $h=12, l=13$.", ["$100\\pi$", "$300\\pi$", "$156\\pi$", "$25\\pi$"], 0, "$r = \\sqrt{13^2-12^2}=5$. Volume $= 1/3 \\pi 25 \\times 12 = 100\\pi$.", 20, 'hard'),
            generateQuestion("Surface area of cylinder includes ___ faces.", ["3", "2", "1", "4"], 0, "Top circ, Bottom circ, Curved side.", 20, 'hard'),
            generateQuestion("Ratio of volumes of Sphere and Cylinder with same $r$ and $h=2r$?", ["2:3", "1:2", "3:4", "1:1"], 0, "$4/3 \\pi r^3 : 2\\pi r^3 = 4/3 : 2 = 2/3$.", 20, 'hard'),
            generateQuestion("Find total area of 10 identical cubes of side 1.", ["60", "10", "100", "6"], 0, "$10 \\times (6 \\times 1^2) = 60$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("What is the precise Surface Area formula for exactly a Sphere?", ["$4\\pi r^2$", "$\\pi r^2$", "$4/3 \\pi r^3$", "$2\\pi r^2$"], 0, "**Lesson**: A Sphere's outer skin area is exactly 4 times the area of its great circle cross-section.", 5, 'easy'),
            generateQuestion("Area of rectangle $L \\times W$. Volume of prism?", ["$L \\times W \\times H$", "$L+W+H$", "$2(L+W)$", "$(LW)^2$"], 0, "Extrude area by height.", 5, 'easy'),
            generateQuestion("Volume of cube side 10?", ["1000", "100", "600", "30"], 0, "$10^3$.", 5, 'easy'),
            generateQuestion("Total faces on a cube?", ["6", "4", "8", "12"], 0, "Geometry count.", 5, 'easy'),
            generateQuestion("Convert $1\\text{m}^3$ to Litres.", ["1000", "100", "10000", "1"], 0, "Cubic metric.", 5, 'easy'),
            generateQuestion("Curved surface area of sphere?", ["$4\\pi r^2$", "$2\\pi r^2$", "Same as surface area", "None"], 2, "It's all curved.", 5, 'easy'),
            generateQuestion("Volume of cylinder with $r=1, h=1$?", ["$\\pi$", "$2\\pi$", "$1$", "$0.5\\pi$"], 0, "Calculation.", 5, 'easy'),
            generateQuestion("Base of a cone is a ___.", ["Circle", "Triangle", "Square", "Sphere"], 0, "Standard cone definition.", 5, 'easy'),
            generateQuestion("How many circular faces on a cylinder?", ["2", "1", "0", "3"], 0, "Top and bottom.", 5, 'easy'),
            generateQuestion("1 cm$^3$ of water weighs approx ___ gram.", ["1", "10", "100", "1000"], 0, "Standard density.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Volume of a regular pyramid is exactly $\\frac{1}{3} \\times \\text{BaseArea} \\times h$. Find it if $\\text{BaseArea}=15$ and $h=10$.", ["50", "150", "45", "100"], 0, "**Lesson**: Apply the fraction carefully! $1/3 \\times 150 = 50$. Standard pyramid logic.", 10, 'medium'),
            generateQuestion("Total area of Hemisphere (Radius 10)?", ["$300\\pi$", "$200\\pi$", "$400\\pi$", "$100\\pi$"], 0, "$3\\pi r^2$.", 10, 'medium'),
            generateQuestion("Volume of cone: $r=6, h=7$.", ["$84\\pi$", "$252\\pi$", "$42\\pi$", "$14\\pi$"], 0, "$1/3 \\times 36\\pi \\times 7 = 84\\pi$.", 10, 'medium'),
            generateQuestion("If pyramid height doubles, volume ___.", ["Doubles", "Triples", "Quadruples", "Stays same"], 0, "Linear relationship with height.", 10, 'medium'),
            generateQuestion("Surface area of cylinder $r=5, h=2$ (open ends)?", ["$20\\pi$", "$10\\pi$", "$25\\pi$", "$50\\pi$"], 0, "$2\\pi \\times 5 \\times 2 = 20\\pi$.", 10, 'medium'),
            generateQuestion("Find slant height of cone with $r=8, h=15$.", ["17", "23", "12", "7"], 0, "$\\sqrt{64+225} = 17$.", 10, 'medium'),
            generateQuestion("Is a sphere a prism?", ["No", "Yes"], 0, "Cross section changes size.", 10, 'medium'),
            generateQuestion("Sphere $r=10$ vs $r=20$. Ratio of Surface Areas?", ["1:4", "1:2", "1:8", "1:1"], 0, "$10^2 : 20^2$.", 10, 'medium'),
            generateQuestion("Volume of box $2 \\times 3 \\times 5$.", ["30", "10", "15", "60"], 0, "Calculation.", 10, 'medium'),
            generateQuestion("Lateral surface area of cube side $x$?", ["$4x^2$", "$6x^2$", "$x^2$", "$2x^2$"], 0, "4 side faces.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("A Sphere has Volume $36\\pi$. Find precisely the valid Radius.", ["3", "6", "9", "4"], 0, "**Lesson**: $4/3 \\pi r^3 = 36\\pi$. Therefore $r^3 = 27$. Cube root of 27 is exactly 3.", 20, 'hard'),
            generateQuestion("[Interleaved] Density of a rock is $2\\,g/cm^3$. If its volume scale multiplier is 3, its mass effectively increases by ___ times.", ["27", "9", "3", "54"], 0, "**Lesson**: Mass is proportional to Volume. Volume scale is $k^3$. $3^3 = 27$. Density is constant, so mass follows volume exactly.", 20, 'hard'),
            generateQuestion("Find volume of Frustum (Cone $R=6, r=3, H=10, h=5$)?", ["$105\\pi$", "$110\\pi$", "$120\\pi$", "$90\\pi$"], 0, "$1/3 \\pi (36 \\times 10 - 9 \\times 5) = 1/3 \\pi (360-45) = 105\\pi$.", 20, 'hard'),
            generateQuestion("Capacity of hemispherical bowl $r=3$?", ["$18\\pi$", "$36\\pi$", "$9\\pi$", "$6\\pi$"], 0, "Half of sphere volume.", 20, 'hard'),
            generateQuestion("Surface area of sphere vs cylinder with same $r$ and $h=2r$?", ["Equal", "Sphere larger", "Cylinder larger", "None"], 0, "$4\\pi r^2$ vs $2\\pi r(2r) + 2\\pi r^2 = 6\\pi r^2$. Wait, $2\\pi rh$ (curved) $= 4\\pi r^2$. Total $= 6\\pi r^2$.", 0, 'hard'),
            generateQuestion("Sphere weight $2\\text{kg}$. If radius doubles, new weight?", ["$16\\text{kg}$", "$4\\text{kg}$", "$8\\text{kg}$", "$32\\text{kg}$"], 0, "$2 \\times 2^3 = 16$.", 20, 'hard'),
            generateQuestion("Volume of a regular tetrahedron side $a$?", ["$a^3 / (6\\sqrt{2})$", "$a^3 / 3$", "$a^3 / 6$", "$a^2 \\sqrt{3}$"], 0, "Standard 3D geometry formula.", 20, 'hard'),
            generateQuestion("Area of a spherical cap height $h$?", ["$2\\pi r h$", "$\\pi r^2$", "$4\\pi r^2$", "$2\\pi r^2$"], 0, "Archimedes Hat-box Theorem.", 20, 'hard'),
            generateQuestion("Metal block $10 \\times 10 \\times 10$ melted to make spheres $r=2$. Max count?", ["29", "30", "31", "32"], 0, "$1000 / (4/3 \\pi 8) = 1000 / 33.5 \\approx 29.8$.", 20, 'hard'),
            generateQuestion("Relationship: If $V \\propto r^3$, then $r \\propto$ ?", ["$V^{1/3}$", "$V^3$", "$V^2$", "$\\sqrt{V}$"], 0, "Inverse power relationship.", 20, 'hard')
        ]
    },
    'g1-s34-data': {
        learning: [
            // Easy (1-10)
            generateQuestion("Which average is immune to extreme outliers?", ["Median", "Mean", "Mode", "Range"], 0, "**Formative Insight**: The Median only cares about rank, ignoring extreme values at the ends.", 5, 'easy'),
            generateQuestion("Lower Quartile marks what percentage of the data?", ["25%", "50%", "75%", "100%"], 0, "**Formative Insight**: The Lower Quartile (Q1) is the 25th percentile.", 5, 'easy'),
            generateQuestion("Median percentile is?", ["50%", "25%", "75%", "10%"], 0, "Middle of data.", 5, 'easy'),
            generateQuestion("Upper Quartile percentile?", ["75%", "25%", "50%", "100%"], 0, "Top 25% boundary.", 5, 'easy'),
            generateQuestion("Interquartile Range is purely Q3 - ___.", ["Q1", "Q2", "Median", "Mode"], 0, "Difference between quartiles.", 5, 'easy'),
            generateQuestion("Find mean of 2, 2, 8.", ["4", "3", "12", "2"], 0, "Sum 12 / 3.", 5, 'easy'),
            generateQuestion("In cumulative frequency, y-axis represents?", ["Cumulative Frequency", "Frequency", "Variable", "Percent"], 0, "Running total of occurrences.", 5, 'easy'),
            generateQuestion("A box plot shows how many key values?", ["5", "3", "10", "1"], 0, "Min, Q1, Med, Q3, Max.", 5, 'easy'),
            generateQuestion("Range is fundamentally ___ - Min.", ["Max", "Q3", "Median", "Mean"], 0, "Total spread.", 5, 'easy'),
            generateQuestion("Mode is the value with the highest ___.", ["Frequency", "Value", "Index", "Probability"], 0, "Most common.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("Interquartile Range is calculated as:", ["Q3 - Q1", "Q2 - Q1", "Q3 - Q2", "Max - Min"], 0, "**Formative Insight**: The IQR measures the spread of the middle 50% of data, $Q3 - Q1$.", 10, 'medium'),
            generateQuestion("On a cumulative frequency curve, the median is read from the:", ["50% mark on y-axis then down", "X-axis exclusively", "Mean", "Mode"], 0, "**Formative Insight**: Find half the total frequency on the y-axis, draw across to the curve, then down to the x-axis.", 10, 'medium'),
            generateQuestion("Find Q1 for dataset: 2, 3, 5, 8, 10, 12, 15, 20.", ["4", "5", "3", "8"], 0, "Between 3 and 5 is 4.", 10, 'medium'),
            generateQuestion("Interquartile range if $Q1=10$ and $Q3=25$?", ["15", "35", "10", "2.5"], 0, "$25 - 10 = 15$.", 10, 'medium'),
            generateQuestion("Lower quartile of $N$ data points is at rank ___.", ["0.25(N+1)", "0.5N", "0.75N", "N"], 0, "Standard rank formula.", 10, 'medium'),
            generateQuestion("Box plot: The middle line in the box is the ___.", ["Median", "Mean", "Mode", "Range"], 0, "Center of middle 50%.", 10, 'medium'),
            generateQuestion("Standard deviation measures ___ from the mean.", ["Dispersion", "Total", "Average", "Accuracy"], 0, "Spread term.", 10, 'medium'),
            generateQuestion("Find Mode from table: $x=1 (f=5), x=2 (f=10), x=3 (f=2)$.", ["2", "10", "1", "3"], 0, "$x=2$ is most frequent.", 10, 'medium'),
            generateQuestion("Median of 6 data points is the average of rank ___.", ["3 and 4", "2 and 3", "3", "4"], 0, "Central pair.", 10, 'medium'),
            generateQuestion("Cumulative frequency always ___.", ["Increases", "Decreases", "Stays same", "Fluctuates"], 0, "Non-decreasing because it's a sum.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Which dataset is strictly more consistent?", ["Lower Std Dev", "Higher Mean", "Higher Range", "Lower Median"], 0, "**Formative Insight**: Consistency is perfectly measured by dispersion. A strictly LOWER Standard Deviation strictly implies the data is grouped tightly around the mean.", 20, 'hard'),
            generateQuestion("Data set $A$ has IQR 10. Data set $B$ has IQR 20. Which is strictly 'more spread out' in the middle?", ["Data set B", "Data set A", "Both equal", "Insufficient data"], 0, "**Formative Insight**: Larger IQR explicitly indicates that the middle 50% of the data is strictly more dispersed.", 20, 'hard'),
            generateQuestion("Relative frequency is Frequency / ___.", ["Total Frequency", "N", "100", "Mean"], 0, "Proportion of total.", 20, 'hard'),
            generateQuestion("Mean is 10. If every value doubled, new mean?", ["20", "10", "12", "100"], 0, "Linear scaling.", 20, 'hard'),
            generateQuestion("Std Dev is 5. If every value increases by 10, new Std Dev?", ["5", "15", "10", "50"], 0, "Shift doesn't change spread.", 20, 'hard'),
            generateQuestion("Percentage of data between Q1 and Q3?", ["50%", "25%", "75%", "100%"], 0, "Definition of IQR range.", 20, 'hard'),
            generateQuestion("Wait of outlier: usually outside $[Q1 - 1.5IQR, Q3 + 1.5IQR]$. If $Q1=5, Q3=10$, is 20 an outlier?", ["Yes", "No"], 0, "$IQR=5. 10 + 7.5 = 17.5$. $20 > 17.5$.", 20, 'hard'),
            generateQuestion("Mean of $n$ numbers is $M$. Sum?", ["nM", "M/n", "$n+M$", "$n^2$"], 0, "Definition of average.", 20, 'hard'),
            generateQuestion("Comparing two classes: Class A (Mean 70, Std Dev 5) and Class B (Mean 70, Std Dev 10). Which is better overall?", ["Same average, A more consistent", "Class B", "Class A performed better", "Equal"], 0, "Comparing stats properties.", 20, 'hard'),
            generateQuestion("Mean of square of first 3 integers (1, 2, 3)?", ["4.67", "6", "14", "4"], 0, "$(1+4+9)/3 = 14/3 \\approx 4.67$.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("Which average strictly requires sorting the data from smallest to largest first?", ["Median", "Mean", "Mode", "Range"], 0, "**Lesson**: To find the center rank accurately, the data MUST be in strictly numerical order. Sorting is the mandatory first step for the Median.", 5, 'easy'),
            generateQuestion("Difference between Max and Min?", ["Range", "Median", "Mean", "Mode"], 0, "Basic spread.", 5, 'easy'),
            generateQuestion("Q3 is also known as the ___ quartile.", ["Upper", "Lower", "Middle", "Total"], 0, "75% mark.", 5, 'easy'),
            generateQuestion("Percent of data below Median?", ["50%", "100%", "25%", "0%"], 0, "By definition.", 5, 'easy'),
            generateQuestion("Is Mode always a number?", ["No", "Yes"], 0, "Can be categories.", 5, 'easy'),
            generateQuestion("Y-intercept of a cumulative frequency graph?", ["Normally 0", "Mean", "Total freq", "100"], 0, "Starts at 0 frequency.", 5, 'easy'),
            generateQuestion("Box plot: 'Whiskers' go to ___ and ___.", ["Min, Max", "Q1, Q3", "Mean, Med", "0, 100"], 0, "Outer boundaries.", 5, 'easy'),
            generateQuestion("Sum / Count = ?", ["Mean", "Median", "Mode", "Range"], 0, "Average formula.", 5, 'easy'),
            generateQuestion("Mean of 1, 2, 3, 4, 5?", ["3", "15", "5", "2.5"], 0, "Sum 15 / 5.", 5, 'easy'),
            generateQuestion("Most popular fruit in a survey is the ___.", ["Mode", "Mean", "Median", "IQR"], 0, "Category with highest frequency.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("The Interquartile Range (IQR) strictly measures the spread of the middle ___% of data.", ["50%", "25%", "75%", "100%"], 0, "**Lesson**: The IQR targets precisely the central bulk of the data, ignoring potential outliers at the far ends.", 10, 'medium'),
            generateQuestion("Find Median from table: $x=10 (f=2), x=20 (f=3), x=30 (f=1)$.", ["20", "10", "30", "15"], 0, "Total $f=6$. Median is between 3rd and 4th ($x=20$).", 10, 'medium'),
            generateQuestion("If total frequency is 40, Lower Quartile is at rank ___.", ["10", "20", "30", "5"], 0, "$0.25 \\times 40 = 10$.", 10, 'medium'),
            generateQuestion("Interquartile range if $Q3=80$ and $Q1=60$?", ["20", "70", "140", "10"], 0, "Difference.", 10, 'medium'),
            generateQuestion("Box plot component for IQR?", ["The Box", "The Whisker", "The Median line", "The Dots"], 0, "Width of the box.", 10, 'medium'),
            generateQuestion("Mean of $x, x+1, x+2$?", ["x+1", "x", "x+2", "3x+3"], 0, "Center of symmetry.", 10, 'medium'),
            generateQuestion("Cumulative freq for class $10-20$ is 15. This means:", ["15 values are $\\le 20$", "15 values are in $10-20$", "15 is the mean", "None"], 0, "Running total up to upper bound.", 10, 'medium'),
            generateQuestion("Std Dev squared is called ___.", ["Variance", "Range", "IQR", "Mode"], 0, "Stat term.", 10, 'medium'),
            generateQuestion("Mode of $1, 1, 2, 2, 3$?", ["1 and 2", "1", "2", "3"], 0, "Bimodal data.", 10, 'medium'),
            generateQuestion("IQR is less likely to be affected by outliers than Range?", ["True", "False"], 0, "IQR ignores extremes.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("[Interleaved] Which measure is strictly best for comparing the strictly internal 'spread' of two highly skewed datasets?", ["IQR", "Range", "Mean", "Mode"], 0, "**Lesson**: IQR is vastly superior for skewed data because it completely ignores the wild outliers that ruin the standard Range.", 20, 'hard'),
            generateQuestion("If every piece of data is rigorously multiplied by 3, what strictly happens to the IQR?", ["Triples", "Stays same", "Increases by 3", "Squares"], 0, "**Lesson**: Scaling the data stretches the dispersion linearly. Therefore, the IQR must also exactly triple.", 20, 'hard'),
            generateQuestion("Mean of 10 values is 50. Mean of next 20 values is 80. Combined mean?", ["70", "65", "60", "75"], 0, "$(500 + 1600) / 30 = 2100/30 = 70$.", 20, 'hard'),
            generateQuestion("In a box plot, if median is closer to Q1 than Q3, data is ___.", ["Positively skewed", "Negatively skewed", "Symmetric", "Normal"], 0, "Right tail is longer.", 20, 'hard'),
            generateQuestion("Probability that a value is outside the interquartile range?", ["50%", "25%", "75%", "0%"], 0, "Top 25% + Bottom 25%.", 20, 'hard'),
            generateQuestion("Find $x$ if mean of $x, 10, 20, 30$ is 20.", ["20", "10", "15", "25"], 0, "$Total = 80 \\Rightarrow x+60=80$.", 20, 'hard'),
            generateQuestion("Does adding a constant to all data change the Variance?", ["No", "Yes"], 0, "Dispersion remains same.", 20, 'hard'),
            generateQuestion("Coefficient of variation (formula): Std Dev / ___?", ["Mean", "Median", "Mode", "Range"], 0, "Relative dispersion.", 20, 'hard'),
            generateQuestion("Mean of first $n$ odd integers is $n$. Find sum if $n=5$.", ["25", "5", "15", "10"], 0, "$1+3+5+7+9 = 25$.", 20, 'hard'),
            generateQuestion("Frequency density formula?", ["Freq / Class Width", "Freq * Width", "Class / Freq", "1/Freq"], 0, "Used in histograms.", 20, 'hard')
        ]
    },
    'g1-s34-prob': {
        learning: [
            // Easy (1-10)
            generateQuestion("The probability of strictly every possible outcome always sums strictly to exactly ___.", ["1", "0", "100", "0.5"], 0, "**Formative Insight**: It represents 100% of the total logical possibility space. Summing them perfectly equals 1.", 5, 'easy'),
            generateQuestion("$P(A) + P(\text{not } A) = $?", ["1", "0", "0.5", "Undefined"], 0, "Complementary events.", 5, 'easy'),
            generateQuestion("Probability of an IMPOSSIBLE event?", ["0", "1", "-1", "0.01"], 0, "Zero chance.", 5, 'easy'),
            generateQuestion("Probability of a CERTAIN event?", ["1", "0", "100", "0.99"], 0, "100% certainty.", 5, 'easy'),
            generateQuestion("Toss a coin. Probability of Heads?", ["0.5", "1", "0", "0.25"], 0, "Fair coin assumption.", 5, 'easy'),
            generateQuestion("Roll a dice. Probability of getting a 6?", ["1/6", "1", "1/2", "0"], 0, "One face out of six.", 5, 'easy'),
            generateQuestion("A bag has 3 red and 7 blue. $P(Red) = $?", ["3/10", "3/7", "7/10", "0.33"], 0, "Part / Total.", 5, 'easy'),
            generateQuestion("Range of probability values?", ["0 to 1", "-1 to 1", "0 to 100", "Any"], 0, "Cannot be negative or > 1.", 5, 'easy'),
            generateQuestion("Probability of 0.7. Percentage?", ["70%", "0.7%", "7%", "700%"], 0, "$0.7 \\times 100$.", 5, 'easy'),
            generateQuestion("One card from 52. Probability of an Ace?", ["4/52", "1/52", "13/52", "1/13"], 0, "4 aces in a deck. $1/13$.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("If $P(\\text{Rain}) = 0.3$, find strictly the probability that it strictly does NOT rain.", ["0.7", "0.3", "1.3", "0"], 0, "**Formative Insight**: Use the Complement Law! $1 - 0.3 = 0.7$.", 10, 'medium'),
            generateQuestion("Toss two fair coins. Probability of exactly two heads?", ["1/4", "1/2", "3/4", "1/8"], 0, "Outcomes: HH, HT, TH, TT. $1$ out of $4$.", 10, 'medium'),
            generateQuestion("Probability of getting an EVEN number on a dice?", ["0.5", "1/3", "1/6", "2/3"], 0, "{2, 4, 6} out of 6.", 10, 'medium'),
            generateQuestion("Prob of NOT getting a 5 on a dice?", ["5/6", "1/6", "1/2", "0"], 0, "$1 - 1/6$.", 10, 'medium'),
            generateQuestion("Box: 5 green, 5 red. Pick one. P(Green)?", ["0.5", "1", "0", "0.1"], 0, "$5/10$.", 10, 'medium'),
            generateQuestion("Two coins. $P(\text{at least one head})$?", ["3/4", "1/2", "1/4", "1"], 0, "{HH, HT, TH} out of 4.", 10, 'medium'),
            generateQuestion("Roll two dice. $P(Sum=2)$?", ["1/36", "1/6", "1/12", "0"], 0, "Only {1,1} works.", 10, 'medium'),
            generateQuestion("A spinner has 8 equal sectors. $P(\text{Multiple of 3})$?", ["2/8", "3/8", "1/8", "0.5"], 0, "{3, 6} work.", 10, 'medium'),
            generateQuestion("Deck: $P(\text{getting a spade or a heart})$?", ["26/52", "13/52", "1/4", "1"], 0, "Half the deck.", 10, 'medium'),
            generateQuestion("Event A and B are independent. $P(A \text{ and } B) = $?", ["$P(A) \\times P(B)$", "$P(A) + P(B)$", "1", "0"], 0, "Product rule.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Two independent events purely $A$ ($0.4$) and $B$ ($0.5$) occur. $P(A \\text{ and } B)$ is exactly:", ["0.2", "0.9", "0.1", "0.6"], 0, "**Formative Insight**: For independent events, you strictly MULTIPLY the probabilities! $0.4 \\times 0.5 = 0.2$.", 20, 'hard'),
            generateQuestion("Bag has 5 Red and 5 Blue. You pick two strictly WITHOUT replacement. $P(\\text{Blue then Blue})$ is strictly:", ["2/9", "1/4", "2/10", "1/5"], 0, "**Formative Insight**: The pool shrinks! First pick is $5/10$. Second pick is $4/9$. Strictly: $1/2 \\times 4/9 = 2/9$.", 20, 'hard'),
            generateQuestion("Roll two dice. $P(Sum=7)$?", ["1/6", "1/12", "6/36", "1/36"], 0, "{1,6, 2,5, 3,4, 4,3, 5,2, 6,1} = 6 outcomes.", 0, 'hard'),
            generateQuestion("Probability of at least 1 tail in 3 tosses?", ["7/8", "1/2", "1/8", "3/4"], 0, "$1 - P(HHH) = 1 - 1/8$.", 20, 'hard'),
            generateQuestion("A and B mutually exclusive. $P(A \text{ or } B) = $?", ["$P(A)+P(B)$", "$P(A) \\times P(B)$", "$P(A)/P(B)$", "0"], 0, "Addition rule.", 20, 'hard'),
            generateQuestion("A card from 52. $P(\text{King or Heart})$?", ["16/52", "17/52", "13/52", "4/52"], 0, "$4 + 13 - 1$ (overlapping King of Hearts).", 20, 'hard'),
            generateQuestion("Three coins. $P(\text{exactly 2 heads})$?", ["3/8", "1/2", "1/4", "1/8"], 0, "{HHT, HTH, THH} out of 8.", 20, 'hard'),
            generateQuestion("Prob of hitting target is 0.8. In 2 shots, P(hit both)?", ["0.64", "0.8", "1.6", "0.16"], 0, "$0.8^2$.", 20, 'hard'),
            generateQuestion("$P(A)=0.3, P(B)=0.4$. If independent, $P(A \text{ or } B)$?", ["0.58", "0.7", "0.12", "0.82"], 0, "$0.3 + 0.4 - 0.12 = 0.58$.", 20, 'hard'),
            generateQuestion("Conditional $P(A|B)$ formula?", ["$P(A \cap B) / P(B)$", "$P(A \cap B)$", "$P(A)P(B)$", "None"], 0, "Statistically standard.", 20, 'hard')
        ],
        testing: [
            // Easy (1-10)
            generateQuestion("What is the strict probability of scoring strictly exactly a 7 on a fair 6-sided dice?", ["0", "1/6", "1", "0.5"], 0, "**Lesson**: A 6-sided dice purely contains $\{1, 2, 3, 4, 5, 6\}$. 7 is a completely impossible logical outcome.", 5, 'easy'),
            generateQuestion("Prob of choosing a vowel from 'HELLO'?", ["2/5", "3/5", "1/5", "0.5"], 0, "{E, O} out of 5 letters.", 5, 'easy'),
            generateQuestion("Toss a coin 100 times. Expected heads?", ["50", "100", "0", "25"], 0, "$100 \\times 0.5$.", 5, 'easy'),
            generateQuestion("P(Sun) = 0.9. P(No sun)?", ["0.1", "0.9", "0", "1"], 0, "Complement rule.", 5, 'easy'),
            generateQuestion("Prob of 1/4 in decimal?", ["0.25", "0.4", "2.5", "4"], 0, "Reciprocal calc.", 5, 'easy'),
            generateQuestion("Even numbers on dice?", ["3", "2", "6", "5"], 0, "Count of outcomes.", 5, 'easy'),
            generateQuestion("A bag with ONLY reds. $P(Red) = $?", ["1", "0", "0.5", "Undefined"], 0, "Certain event.", 5, 'easy'),
            generateQuestion("Smallest possible probability?", ["0", "-1", "0.01", "1"], 0, "Impossible boundary.", 5, 'easy'),
            generateQuestion("Largest possible probability?", ["1", "100", "0", "Infinite"], 0, "Certainty boundary.", 5, 'easy'),
            generateQuestion("One dice. $P(\text{greater than 4})$?", ["2/6", "1/6", "3/6", "0"], 0, "{5, 6} work.", 5, 'easy'),
            // Medium (1-10)
            generateQuestion("You strictly and forcefully roll two 6-sided dice. How many strictly total physical outcomes are possible?", ["36", "12", "6", "18"], 0, "**Lesson**: For each of the first 6 outcomes, there are strictly 6 possible second outcomes. $6 \\times 6 = 36$.", 10, 'medium'),
            generateQuestion("One dice. $P(Prime)$?", ["1/2", "1/3", "1/6", "2/3"], 0, "{2, 3, 5} are prime.", 10, 'medium'),
            generateQuestion("Prob of pick 'M' from 'MATHEMATICS'?", ["2/11", "1/11", "3/11", "0"], 0, "M appears twice in 11.", 10, 'medium'),
            generateQuestion("Toss 3 coins. $P(\text{All same})$?", ["2/8", "1/8", "3/8", "0.5"], 0, "{HHH, TTT} out of 8.", 10, 'medium'),
            generateQuestion("Bag: 10 red, 5 green. P(Not green)?", ["2/3", "1/3", "10/15", "0.5"], 0, "10/15 = 2/3.", 10, 'medium'),
            generateQuestion("Expected number of 6s in 60 rolls?", ["10", "6", "60", "1"], 0, "$60 \times 1/6$.", 10, 'medium'),
            generateQuestion("One card from 52. $P(\text{Black card})$?", ["1/2", "1/4", "13/52", "1"], 0, "Half are black.", 10, 'medium'),
            generateQuestion("$P(A \text{ and } \text{not } A)$?", ["0", "1", "0.5", "Undefined"], 0, "Cannot happen together.", 10, 'medium'),
            generateQuestion("Spinner: 1, 2, 3, 4. P(Even)?", ["0.5", "1/4", "3/4", "1"], 0, "2/4.", 10, 'medium'),
            generateQuestion("A, B independent. $P(A)=0.5, P(B)=0.2$. $P(A \text{ and } B)$?", ["0.1", "0.7", "0.3", "1"], 0, "Multiply.", 10, 'medium'),
            // Hard (1-10)
            generateQuestion("Throw two dice. What is strictly the probability that the absolute sum is exactly 11?", ["1/18", "1/36", "1/12", "2/36"], 0, "**Lesson**: Only outcomes $\{5, 6\}$ and $\{6, 5\}$ work perfectly. Exactly $2$ out of $36$, which simplifies strictly to $1/18$.", 20, 'hard'),
            generateQuestion("[Interleaved] In a group of 10 students, strictly 6 like tea. If you pick two strictly WITHOUT replacement, $P(\\text{Both like tea})$ is:", ["1/3", "0.36", "1/2", "2/3"], 0, "**Lesson**: Pool shrinks strictly! First is $6/10$. Second is $5/9$. Multiply: $30/90 = 1/3$.", 20, 'hard'),
            generateQuestion("Two dice. $P(\text{even sum})$?", ["0.5", "1/4", "3/4", "18/36"], 1, "Half outcomes are even sums.", 20, 'hard'),
            generateQuestion("Prob of getting at least 1 tail in 2 flips?", ["0.75", "0.25", "0.5", "1"], 0, "$1 - P(HH)$.", 20, 'hard'),
            generateQuestion("Event A: 0.8 chance. In 100 trials, expected failures?", ["20", "80", "10", "0"], 0, "$0.2 \\times 100 = 20$.", 20, 'hard'),
            generateQuestion("Tree diagram: Multiply along ___?", ["Branches", "Leaves", "Nodes", "Trunks"], 0, "Combined outcomes.", 20, 'hard'),
            generateQuestion("Tree diagram: Sum at any node branches to ___?", ["1", "0", "0.5", "Infinite"], 0, "Total local probability.", 20, 'hard'),
            generateQuestion("One card 52. $P(\text{Ace of Spades})$?", ["1/52", "4/52", "1/13", "13/52"], 0, "Unique card.", 20, 'hard'),
            generateQuestion("Two dice. $P(Sum > 10)$?", ["3/36", "1/36", "2/36", "6/36"], 0, "{5,6, 6,5, 6,6} = 3 outcomes.", 20, 'hard'),
            generateQuestion("Relative frequency vs Theoretical probability?", ["Experimental vs Calculated", "Same", "Opposites", "None"], 0, "Difference between data and formula.", 20, 'hard')
        ]
    }
};

export { g1Topics, g1Questions };
