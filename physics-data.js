const PHYSICS_QUESTIONS = [
  {
    text: "A ball is dropped from rest. Ignoring air resistance, how far does it fall in 2 seconds? (g = 10 m/s²)",
    options: ["10 m", "20 m", "40 m", "5 m"],
    correct: 1,
    hints: [
      "Think about which kinematic equation links distance, time, and constant acceleration.",
      "The ball starts from rest, so initial velocity is zero. The equation simplifies to s = ½at².",
      "Substitute a = 10 m/s² and t = 2 s into s = ½at²."
    ],
    explanation: "Objects in free fall accelerate at a constant rate due to gravity. Since the ball starts from rest, distance grows as the square of time: s = ½at². This is why a skydiver plummets much faster after several seconds than right at the jump — each second adds more distance than the last.",
    learnMoreLink: { text: "Read more about kinematics", url: "https://en.wikipedia.org/wiki/Kinematics" },
    difficulty: "easy"
  },
  {
    text: "A net force of 30 N acts on a 6 kg object. What is its acceleration?",
    options: ["5 m/s²", "180 m/s²", "0.2 m/s²", "24 m/s²"],
    correct: 0,
    hints: [
      "This is a direct application of Newton's Second Law.",
      "Newton's Second Law states F = ma. You need to find a.",
      "Rearrange F = ma to get a = F/m. Divide 30 N by 6 kg."
    ],
    explanation: "Newton's Second Law (F = ma) tells us that acceleration is proportional to force and inversely proportional to mass. The same 30 N force applied to a 1 kg object would accelerate it at 30 m/s², but the 6 kg object requires 6× more force per unit of acceleration. This is why a heavy truck takes much longer to reach highway speed than a small car with the same engine force.",
    learnMoreLink: { text: "Read more about Newton's Second Law", url: "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" },
    difficulty: "beginner"
  },
  {
    text: "An object starts from rest and accelerates at 4 m/s². How fast is it moving after 5 seconds?",
    options: ["1.25 m/s", "9 m/s", "20 m/s", "4 m/s"],
    correct: 2,
    hints: [
      "Think about the kinematic equation that links velocity, acceleration, and time.",
      "Starting from rest means initial velocity u = 0.",
      "Use v = u + at. With u = 0, this simplifies to v = at = 4 × 5."
    ],
    explanation: "The equation v = u + at is the definition of constant acceleration — velocity increases by the same amount every second. Starting from rest (u = 0), every second adds 4 m/s of speed. This is exactly how car manufacturers calculate 0-to-60 mph acceleration times: measure how many seconds it takes to accumulate that speed at a given acceleration.",
    learnMoreLink: { text: "Read more about equations of motion", url: "https://en.wikipedia.org/wiki/Equations_of_motion" },
    difficulty: "easy"
  },
  {
    text: "What is the kinetic energy of a 4 kg object moving at 3 m/s?",
    options: ["12 J", "36 J", "18 J", "6 J"],
    correct: 2,
    hints: [
      "Kinetic energy depends on both the mass of the object and its speed.",
      "The kinetic energy formula involves squaring the velocity — don't forget that step.",
      "Use KE = ½mv². Calculate v² = 9 first, then multiply by ½ × 4."
    ],
    explanation: "Kinetic energy scales with the square of velocity — doubling your speed gives four times the energy. This is why speed limits are so critical for road safety: a car at 60 mph carries four times the kinetic energy of the same car at 30 mph, and all that energy must be absorbed in a crash.",
    learnMoreLink: { text: "Read more about kinetic energy", url: "https://en.wikipedia.org/wiki/Kinetic_energy" },
    difficulty: "easy"
  },
  {
    text: "A 2 kg book is held 5 m above the ground. What is its gravitational potential energy? (g = 10 m/s²)",
    options: ["17 J", "1 J", "100 J", "10 J"],
    correct: 2,
    hints: [
      "Gravitational potential energy depends on how high an object is above a reference point.",
      "The formula involves all three given quantities: mass, gravity, and height.",
      "Use GPE = mgh. Multiply all three values: 2 × 10 × 5."
    ],
    explanation: "Gravitational potential energy is stored energy due to an object's position — lifting it stores energy that releases as it falls. GPE = mgh means doubling the height doubles the stored energy. Hydroelectric dams exploit this principle: water stored at height releases its potential energy through turbines to generate electricity.",
    learnMoreLink: { text: "Read more about gravitational potential energy", url: "https://en.wikipedia.org/wiki/Gravitational_energy" },
    difficulty: "easy"
  },
  {
    text: "A horizontal force of 15 N pushes a box 4 m along the floor. How much work is done?",
    options: ["3.75 J", "19 J", "60 J", "11 J"],
    correct: 2,
    hints: [
      "Work is the energy transferred when a force moves an object through a distance.",
      "The force and the displacement are in the same direction here, which simplifies things.",
      "Use W = Fd. Multiply force (15 N) by distance (4 m) directly."
    ],
    explanation: "Work is done when a force causes displacement in the direction of that force. Pushing a box across the floor transfers energy from you into the box (as kinetic energy) and into heat at the floor (friction). Ramps are useful because they spread the same amount of work over a longer distance, allowing a smaller force to move heavy objects.",
    learnMoreLink: { text: "Read more about work and energy", url: "https://en.wikipedia.org/wiki/Work_(physics)" },
    difficulty: "easy"
  },
  {
    text: "What is the momentum of a 5 kg object moving at 8 m/s?",
    options: ["1.6 kg·m/s", "13 kg·m/s", "3 kg·m/s", "40 kg·m/s"],
    correct: 3,
    hints: [
      "Momentum is a vector quantity that depends on how heavy and how fast an object is.",
      "The momentum formula is one of the simplest in physics — just two variables.",
      "Use p = mv. Multiply mass (5 kg) by velocity (8 m/s)."
    ],
    explanation: "Momentum measures how hard it is to stop a moving object — it depends equally on mass and velocity. A slow-moving freight train and a fast-moving baseball can have the same momentum but require very different forces to stop them. Momentum is conserved in collisions, which is why car safety features like crumple zones extend the impact time to reduce peak force.",
    learnMoreLink: { text: "Read more about momentum", url: "https://en.wikipedia.org/wiki/Momentum" },
    difficulty: "easy"
  },
  {
    text: "A spring with constant 500 N/m is stretched by 0.04 m. What force does it exert?",
    options: ["12500 N", "20 N", "0.00008 N", "496 N"],
    correct: 1,
    hints: [
      "This involves Hooke's Law, which describes how springs respond to stretching or compression.",
      "The restoring force of a spring is proportional to its extension.",
      "Use F = kx. Multiply the spring constant (500 N/m) by the extension (0.04 m)."
    ],
    explanation: "Hooke's Law states that a spring's restoring force is directly proportional to its stretch or compression. This linear relationship holds only up to the 'elastic limit' — stretch too far and the spring permanently deforms. Trampolines, car suspensions, and mechanical watches all rely on Hooke's Law to store and return energy predictably.",
    learnMoreLink: { text: "Read more about Hooke's Law", url: "https://en.wikipedia.org/wiki/Hooke%27s_law" },
    difficulty: "easy"
  },
  {
    text: "A motor does 600 J of work in 12 seconds. What is its power output?",
    options: ["7200 W", "50 W", "612 W", "588 W"],
    correct: 1,
    hints: [
      "Power measures how quickly energy is transferred or work is done.",
      "A more powerful motor completes the same amount of work in less time.",
      "Use P = W/t. Divide work done (600 J) by time taken (12 s)."
    ],
    explanation: "Power is the rate of energy transfer — it tells you how quickly work is done, not just how much. A 50 W motor doing the same work as a 500 W motor will take ten times longer. Light bulbs are rated in watts to indicate how fast they consume electrical energy, which is why replacing a 100 W bulb with a 10 W LED saves 90% of the energy.",
    learnMoreLink: { text: "Read more about power in physics", url: "https://en.wikipedia.org/wiki/Power_(physics)" },
    difficulty: "easy"
  },
  {
    text: "An object travels in a circle of radius 4 m at 6 m/s. What is its centripetal acceleration?",
    options: ["1.5 m/s²", "24 m/s²", "9 m/s²", "36 m/s²"],
    correct: 2,
    hints: [
      "Objects moving in a circle experience an acceleration directed toward the centre.",
      "Centripetal acceleration depends on the speed of the object and the radius of the circle.",
      "Use a = v²/r. Calculate v² = 36, then divide by r = 4."
    ],
    explanation: "An object moving in a circle is always accelerating toward the centre, even at constant speed, because its direction constantly changes. This centripetal acceleration creates the sensation of being pushed outward on a roundabout — what you feel is actually the inward force keeping you on the curved path. Satellites stay in orbit because gravity provides exactly the right centripetal force for their speed and altitude.",
    learnMoreLink: { text: "Read more about centripetal acceleration", url: "https://en.wikipedia.org/wiki/Centripetal_force" },
    difficulty: "easy"
  },
  {
    text: "A car starts from rest with acceleration 3 m/s². How far has it travelled after 6 seconds?",
    options: ["9 m", "18 m", "54 m", "27 m"],
    correct: 2,
    hints: [
      "Starting from rest means initial velocity is zero — use a kinematic displacement equation.",
      "The displacement of an object under constant acceleration from rest has a neat formula.",
      "Use s = ½at². Calculate t² = 36, then multiply by ½ × 3."
    ],
    explanation: "When a car accelerates from rest, it covers more distance each second because it's going faster. The distance formula s = ½at² shows that distance grows as the square of time — non-linearly. This non-linear growth is why highway on-ramps must be long: in the first 3 seconds the car travels only 13.5 m, but in the next 3 seconds it covers another 40.5 m.",
    learnMoreLink: { text: "Read more about equations of motion", url: "https://en.wikipedia.org/wiki/Equations_of_motion" },
    difficulty: "easy"
  },
  {
    text: "According to Newton's Third Law, when you push a wall, the wall pushes back with:",
    options: ["A smaller force in the same direction", "A greater force in the opposite direction", "An equal force in the opposite direction", "No force at all"],
    correct: 2,
    hints: [
      "Newton's three laws are about inertia, F=ma, and action-reaction pairs.",
      "Every force in nature comes as part of an interaction between two objects.",
      "Newton's Third Law: for every action there is an equal and opposite reaction force."
    ],
    explanation: "Newton's Third Law means forces always come in equal and opposite pairs — you can never exert a force without experiencing an equal force in return. When you push a wall, the wall pushes back on you with exactly the same force. This is also why rockets work in space: the engine pushes exhaust gases backward at high speed, and the gases push the rocket forward with an equal force.",
    learnMoreLink: { text: "Read more about Newton's Third Law", url: "https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion" },
    difficulty: "beginner"
  },
  {
    text: "A 1000 kg car is moving at 20 m/s. What is its kinetic energy?",
    options: ["20,000 J", "10,000 J", "200,000 J", "40,000 J"],
    correct: 2,
    hints: [
      "A moving object possesses kinetic energy — the faster and heavier, the more energy it has.",
      "In the kinetic energy formula, velocity is squared — this makes the velocity contribution larger.",
      "Use KE = ½mv². Calculate v² = 400 first, then multiply by ½ × 1000."
    ],
    explanation: "A 1000 kg car at 20 m/s carries 200,000 J of kinetic energy — roughly equivalent to dropping it from a 20-metre building. All that energy must be converted to heat in the brakes when stopping. This is why stopping distances increase dramatically at higher speeds: doubling speed quadruples kinetic energy and stopping distance.",
    learnMoreLink: { text: "Read more about kinetic energy", url: "https://en.wikipedia.org/wiki/Kinetic_energy" },
    difficulty: "easy"
  },
  {
    text: "A force of 40 N acts on an object for 0.5 seconds. What is the impulse delivered?",
    options: ["80 N·s", "39.5 N·s", "40.5 N·s", "20 N·s"],
    correct: 3,
    hints: [
      "Impulse is the effect of a force acting over a period of time.",
      "By the impulse-momentum theorem, impulse equals the change in momentum.",
      "Use J = Ft. Multiply the force (40 N) by the time (0.5 s)."
    ],
    explanation: "Impulse equals force multiplied by time, and it equals the change in momentum of an object. By extending the time over which a force acts, you achieve the same impulse with a lower peak force. This is why airbags save lives: they slow the head over a longer time interval, dramatically reducing the peak force on the skull compared to hitting a rigid surface.",
    learnMoreLink: { text: "Read more about impulse and momentum", url: "https://en.wikipedia.org/wiki/Impulse_(physics)" },
    difficulty: "easy"
  },
  {
    text: "The coefficient of kinetic friction is 0.3 and the normal force is 60 N. What is the friction force?",
    options: ["200 N", "0.005 N", "18 N", "57 N"],
    correct: 2,
    hints: [
      "Friction force depends on how rough the surface is and how hard the object presses down.",
      "The coefficient of friction is a dimensionless number that scales with the normal force.",
      "Use f = μN. Multiply the coefficient (0.3) by the normal force (60 N)."
    ],
    explanation: "Kinetic friction force depends only on the surface roughness (μ) and how hard the surfaces press together — not on contact area or sliding speed. This is why a heavy box is harder to slide than a light one on the same floor. Lubricants like oil reduce μ dramatically, which is why engines need oil: without it, metal-on-metal friction would quickly destroy moving parts.",
    learnMoreLink: { text: "Read more about friction", url: "https://en.wikipedia.org/wiki/Friction" },
    difficulty: "easy"
  },
  {
    text: "A pressure of 100 Pa acts on an area of 5 m². What is the force exerted?",
    options: ["20 N", "105 N", "95 N", "500 N"],
    correct: 3,
    hints: [
      "Pressure, force, and area are related by a straightforward formula.",
      "Pressure is defined as force divided by area — rearrange to find force.",
      "Use F = PA. Multiply pressure (100 Pa) by area (5 m²)."
    ],
    explanation: "Pressure is force distributed over an area — the same force concentrated on a smaller area creates higher pressure. A sharp knife (tiny edge area) cuts easily while pressing with your palm doesn't, even with the same force. Hydraulic systems multiply forces by applying pressure to different-sized pistons: small force on a small area creates pressure that pushes with far greater force on a large area.",
    learnMoreLink: { text: "Read more about pressure", url: "https://en.wikipedia.org/wiki/Pressure" },
    difficulty: "easy"
  },
  {
    text: "An object starts from rest and reaches 12 m/s over a distance of 9 m. What is its acceleration?",
    options: ["16 m/s²", "4 m/s²", "8 m/s²", "1.33 m/s²"],
    correct: 2,
    hints: [
      "You know initial velocity, final velocity, and distance — choose the right kinematic equation.",
      "The equation v² = u² + 2as links velocity, initial velocity, acceleration, and displacement.",
      "With u = 0: v² = 2as → a = v²/(2s). Substitute v = 12 and s = 9."
    ],
    explanation: "The equation v² = u² + 2as is the kinematic equation to use when time isn't known. Here the object goes from 0 to 12 m/s in just 9 m, which demands a high acceleration of 8 m/s². Crash investigators use this exact equation in reverse: measure skid-mark length and final speed to calculate how fast a vehicle was travelling before braking.",
    learnMoreLink: { text: "Read more about equations of motion", url: "https://en.wikipedia.org/wiki/Equations_of_motion" },
    difficulty: "medium"
  },
  {
    text: "A machine has an input power of 500 W and an output power of 400 W. What is its efficiency?",
    options: ["125%", "80%", "100 W", "20%"],
    correct: 1,
    hints: [
      "Efficiency compares how much useful work comes out versus how much energy goes in.",
      "Efficiency is always expressed as a percentage and can never exceed 100%.",
      "Efficiency = (output / input) × 100% = (400 / 500) × 100%."
    ],
    explanation: "No machine can be 100% efficient because some energy is always lost to heat, sound, or vibration. An 80% efficient motor wastes 20% of its input energy as heat. Electric vehicle motors reach 85–90% efficiency, while petrol engines only convert about 25–35% of fuel energy into motion — the rest heats the engine and exhaust, which is why cars need cooling systems.",
    learnMoreLink: { text: "Read more about energy efficiency", url: "https://en.wikipedia.org/wiki/Energy_conversion_efficiency" },
    difficulty: "easy"
  },
  {
    text: "A wrench applies 25 N at 0.4 m from a bolt. What torque is produced?",
    options: ["62.5 N·m", "24.6 N·m", "10 N·m", "25.4 N·m"],
    correct: 2,
    hints: [
      "Torque (or moment of force) measures how effectively a force causes rotation.",
      "Torque increases with both the size of the force and the distance from the pivot point.",
      "Use τ = Fr. Multiply force (25 N) by the perpendicular distance (0.4 m)."
    ],
    explanation: "Torque measures the rotational effect of a force — the same force applied further from the pivot creates more turning effect. This is why door handles are placed far from the hinge, and why a longer wrench makes tightening bolts much easier. Engineers carefully calculate torques on bridges, axles, and structural joints to ensure they won't fail under load.",
    learnMoreLink: { text: "Read more about torque", url: "https://en.wikipedia.org/wiki/Torque" },
    difficulty: "easy"
  },
  {
    text: "What is the elastic potential energy in a spring (k = 200 N/m) compressed by 0.3 m?",
    options: ["60 J", "30 J", "9 J", "120 J"],
    correct: 2,
    hints: [
      "A compressed or stretched spring stores elastic potential energy.",
      "Elastic PE depends on the spring constant and the square of the displacement — note the squared term.",
      "Use EPE = ½kx². Calculate x² = 0.09 first, then multiply by ½ × 200."
    ],
    explanation: "Elastic potential energy grows with the square of compression — compressing a spring twice as far stores four times the energy. Vehicle suspension springs absorb road bumps by storing elastic energy and releasing it gradually. Archery and crossbow mechanisms rely on this principle: the bow stores elastic energy during draw and releases it rapidly to accelerate the arrow.",
    learnMoreLink: { text: "Read more about elastic potential energy", url: "https://en.wikipedia.org/wiki/Elastic_energy" },
    difficulty: "easy"
  },
  {
    text: "A 50 N force propels an object at a constant 6 m/s. What power is being delivered?",
    options: ["56 W", "8.33 W", "300 W", "44 W"],
    correct: 2,
    hints: [
      "When a constant force moves an object at constant speed, power can be found directly.",
      "Power equals force multiplied by velocity when they're in the same direction.",
      "Use P = Fv. Multiply force (50 N) by velocity (6 m/s)."
    ],
    explanation: "When a constant force maintains constant speed, P = Fv directly gives the power delivered. This is why cars need much more engine power at motorway speeds than in town: drag force increases with speed, so maintaining higher speed requires proportionally more force — and far more power. A cyclist fighting a headwind experiences exactly this challenge.",
    learnMoreLink: { text: "Read more about power in physics", url: "https://en.wikipedia.org/wiki/Power_(physics)" },
    difficulty: "easy"
  },
  {
    text: "A ball is thrown horizontally. Which component of its velocity stays constant? (ignore air resistance)",
    options: ["Vertical", "Neither", "Both", "Horizontal"],
    correct: 3,
    hints: [
      "Think about what forces act on the ball after it's released.",
      "Gravity only acts downward — it only changes the vertical component of motion.",
      "With no horizontal force, Newton's First Law means horizontal velocity doesn't change."
    ],
    explanation: "In projectile motion, gravity only acts downward, so it only changes the vertical component of velocity. Horizontal velocity remains constant throughout the flight. Galileo first showed this independence of horizontal and vertical motion — it explains why a horizontally fired bullet and a simultaneously dropped bullet (from the same height) both hit the ground at the same time.",
    learnMoreLink: { text: "Read more about projectile motion", url: "https://en.wikipedia.org/wiki/Projectile_motion" },
    difficulty: "beginner"
  },
  {
    text: "A 12 kg object weighs 120 N on Earth. Gravity on the Moon is 1/6 of Earth's. What does it weigh on the Moon?",
    options: ["72 N", "720 N", "20 N", "2 N"],
    correct: 2,
    hints: [
      "Weight is a force that depends on gravitational field strength, not just mass.",
      "Mass stays the same on the Moon, but the gravitational pull is different.",
      "Divide the Earth weight by 6 to find the Moon weight: 120 ÷ 6."
    ],
    explanation: "Weight is the gravitational force on an object — it changes depending on where you are, but mass (the amount of matter) stays constant everywhere. On the Moon with 1/6 of Earth's gravity, a 12 kg object still has 12 kg of mass but weighs only 20 N. Astronauts on the Moon weigh much less, allowing them to make giant leaps despite wearing heavy suits.",
    learnMoreLink: { text: "Read more about weight and gravity", url: "https://en.wikipedia.org/wiki/Weight" },
    difficulty: "easy"
  },
  {
    text: "A 100 W light bulb runs for 30 seconds. How much energy does it use?",
    options: ["130 J", "3.33 J", "3000 J", "70 J"],
    correct: 2,
    hints: [
      "Power is the rate of energy use — a watt is one joule per second.",
      "Knowing power and time, you can calculate total energy transferred.",
      "Use E = Pt. Multiply power (100 W) by time (30 s)."
    ],
    explanation: "Energy equals power multiplied by time — a higher-power device uses the same energy in less time. A 100 W bulb running for 30 seconds uses 3000 J, the same energy as a 3000 W hair dryer running for just 1 second. This is why leaving devices on standby adds up: even 10 W over many hours represents significant energy consumption.",
    learnMoreLink: { text: "Read more about power and energy", url: "https://en.wikipedia.org/wiki/Power_(physics)" },
    difficulty: "easy"
  },
  {
    text: "An object falling through air reaches terminal velocity when:",
    options: ["Gravity becomes zero", "Air resistance equals gravity, so net force is zero", "The object starts accelerating downward", "Air resistance becomes zero"],
    correct: 1,
    hints: [
      "As an object falls faster, the drag force from the air increases.",
      "Think about what happens to the net force as drag increases and approaches the weight.",
      "Terminal velocity is reached when drag exactly equals weight — net force is zero, so acceleration is zero."
    ],
    explanation: "As an object falls faster, air drag increases until it exactly balances the object's weight — net force becomes zero and the object stops accelerating. Terminal velocity depends on shape and size: a skydiver in spread-eagle position reaches about 55 m/s, while diving headfirst they reach 90 m/s. Parachutes work by dramatically increasing drag, reducing terminal velocity to a safe landing speed.",
    learnMoreLink: { text: "Read more about terminal velocity", url: "https://en.wikipedia.org/wiki/Terminal_velocity" },
    difficulty: "beginner"
  },
  {
    text: "In a perfectly elastic collision, which quantities are conserved?",
    options: ["Only momentum", "Only kinetic energy", "Neither", "Both momentum and kinetic energy"],
    correct: 3,
    hints: [
      "All collisions conserve one quantity — what is it? Now think about what makes a collision 'elastic'.",
      "Elastic collisions bounce perfectly, with no energy lost to heat or sound.",
      "Elastic collisions conserve both momentum (always) and kinetic energy (the defining feature of elastic)."
    ],
    explanation: "All collisions conserve momentum, but only perfectly elastic collisions also conserve kinetic energy — no energy is lost to heat, sound, or deformation. In reality, truly elastic collisions are rare: billiard balls come close, but some energy is always lost. Car crashes are inelastic: kinetic energy is deliberately converted to deformation work (crumpling the car) to protect occupants.",
    learnMoreLink: { text: "Read more about elastic collisions", url: "https://en.wikipedia.org/wiki/Elastic_collision" },
    difficulty: "beginner"
  },
  {
    text: "At what launch angle does a projectile reach the greatest horizontal range? (ignore air resistance)",
    options: ["30°", "60°", "90°", "45°"],
    correct: 3,
    hints: [
      "Consider the trade-off: a steeper angle gives more height but less horizontal speed.",
      "The range formula involves sin(2θ) — think about what angle maximises a sine function.",
      "sin(2θ) is maximised when 2θ = 90°, so θ = 45°. This splits the motion evenly."
    ],
    explanation: "At 45°, the projectile perfectly balances time in the air against horizontal speed, maximising range. Steeper angles give more height but less horizontal velocity; shallower angles give speed but not enough time aloft. Athletes in hammer throw and javelin events aim near 45° to maximise distance, and artillery gunners use this principle to calculate firing angles.",
    learnMoreLink: { text: "Read more about projectile motion", url: "https://en.wikipedia.org/wiki/Projectile_motion" },
    difficulty: "beginner"
  },
  {
    text: "A simple pendulum's period depends primarily on:",
    options: ["The mass of the bob", "The amplitude of swing", "The length of the string", "The density of the bob"],
    correct: 2,
    hints: [
      "Think about what happens when you make a pendulum longer — does it swing faster or slower?",
      "Galileo observed that pendulums of the same length swing at the same rate regardless of mass.",
      "The period T = 2π√(L/g) depends only on length L and gravity g, not mass or amplitude."
    ],
    explanation: "A pendulum's period depends only on its length and local gravity — not the mass of the bob or how widely it swings (for small angles). A longer pendulum swings more slowly because the restoring force becomes relatively weaker. This regularity made pendulums the heart of accurate mechanical clocks for centuries: setting the length to give a 1-second period allowed precise timekeeping.",
    learnMoreLink: { text: "Read more about pendulums", url: "https://en.wikipedia.org/wiki/Pendulum" },
    difficulty: "beginner"
  },
  {
    text: "A 60 kg person climbs a 5 m staircase in 10 seconds. What is their average power output? (g = 10 m/s²)",
    options: ["30 W", "3000 W", "300 W", "6 W"],
    correct: 2,
    hints: [
      "Climbing stairs converts chemical energy into gravitational potential energy.",
      "First find the energy (GPE gained), then use the time to find the rate of energy transfer.",
      "GPE = mgh = 60 × 10 × 5 = 3000 J. Then P = E/t = 3000 / 10."
    ],
    explanation: "Climbing stairs converts your body's chemical energy (from food) into gravitational potential energy, and power tells you how quickly you do this. A fit person can sustain around 200–400 W continuously, while a trained cyclist can briefly peak over 1000 W. Lifts and escalators do this work electrically — the 300 W here is similar to the power of a bright incandescent bulb.",
    learnMoreLink: { text: "Read more about power and work", url: "https://en.wikipedia.org/wiki/Power_(physics)" },
    difficulty: "medium"
  },
  {
    text: "A 3 kg object moves at 4 m/s and a 5 kg object moves toward it at 2 m/s. Taking the 3 kg direction as positive, what is the total momentum?",
    options: ["22 kg·m/s", "2 kg·m/s", "−2 kg·m/s", "10 kg·m/s"],
    correct: 1,
    hints: [
      "Momentum is a vector — direction matters. Assign positive and negative signs carefully.",
      "The two objects move in opposite directions, so one momentum is positive and one is negative.",
      "p_total = (3 × +4) + (5 × −2) = 12 − 10 = 2 kg·m/s."
    ],
    explanation: "Momentum is a vector — direction matters, and momenta in opposite directions partially cancel. The net momentum of this system is 2 kg·m/s in the positive direction, which would be conserved through any collision between the two objects. Snooker players intuitively apply this principle to control where balls end up after each shot.",
    learnMoreLink: { text: "Read more about conservation of momentum", url: "https://en.wikipedia.org/wiki/Momentum" },
    difficulty: "medium"
  },
  {
    type: "simulation",
    height: 19.6,
    text: "A ball is dropped from rest off a 19.6 m cliff (g = 9.8 m/s²). Choose a mass, enter your predicted fall time, then run the simulation.",
    hints: [
      "Free fall from rest uses only two quantities: height and gravitational acceleration. No mass needed.",
      "The equation is h = ½gt². Rearrange to find t: t = √(2h / g).",
      "t = √(2 × 19.6 / 9.8) = √4.0 = 2.00 s exactly. Try entering 2."
    ],
    explanation: "In free fall, time depends only on height and gravity — not mass at all. Galileo proved this by dropping objects from the Leaning Tower of Pisa (or so the legend goes). Astronaut David Scott confirmed it on the Moon in 1971, dropping a feather and a hammer simultaneously — they hit the ground at exactly the same time in the absence of air resistance.",
    learnMoreLink: { text: "Read more about free fall", url: "https://en.wikipedia.org/wiki/Free_fall" },
    difficulty: "medium"
  },
  {
    type: "simulation",
    height: 44.1,
    text: "A ball is dropped from rest off a 44.1 m cliff (g = 9.8 m/s²). Choose a mass, enter your predicted fall time, then run the simulation.",
    hints: [
      "You need only one kinematic equation here — the one that links vertical distance, time, and constant acceleration.",
      "h = ½gt² → t² = 2h/g → t = √(2h/g). Notice mass cancels out entirely.",
      "t = √(2 × 44.1 / 9.8) = √9.0 = 3.00 s exactly."
    ],
    explanation: "Fall time scales as the square root of height — so a cliff four times as high takes only twice as long to fall. Galileo first established this relationship using carefully timed balls on inclined planes. The principle underpins all ballistic calculations, from the arc of a fountain jet to the trajectory of a spacecraft re-entering Earth's atmosphere.",
    learnMoreLink: { text: "Read more about free fall", url: "https://en.wikipedia.org/wiki/Free_fall" },
    difficulty: "medium"
  },
  {
    type: "simulation",
    height: 4.9,
    text: "A ball is dropped from rest off a 4.9 m cliff (g = 9.8 m/s²). Choose a mass, enter your predicted fall time, then run the simulation.",
    hints: [
      "This is a short drop — think about how height and time relate in free fall. Does a heavier ball land faster?",
      "h = ½gt² applies regardless of mass. Two balls of different masses dropped together land at the same time.",
      "t = √(2 × 4.9 / 9.8) = √1.0 = 1.00 s exactly."
    ],
    explanation: "The distances covered in successive 1-second intervals grow as 1:3:5:7 (odd numbers), meaning the ball covers more ground each second than the last. The total distance from rest follows the squares: 1 s → 4.9 m, 2 s → 19.6 m, 3 s → 44.1 m. Galileo discovered this elegant pattern, showing for the first time that motion could be described with mathematics.",
    learnMoreLink: { text: "Read more about free fall and kinematics", url: "https://en.wikipedia.org/wiki/Free_fall" },
    difficulty: "easy"
  },
  {
    text: "A ball is thrown horizontally from a cliff. Ignoring air resistance, what happens to its horizontal velocity?",
    options: ["It increases due to gravity", "It decreases over time", "It remains constant", "It becomes zero at the peak"],
    correct: 2,
    hints: [
      "Gravity acts vertically, not horizontally",
      "With no air resistance, no horizontal force exists",
      "Horizontal motion is unaffected by vertical gravity"
    ],
    explanation: "In projectile motion, horizontal and vertical motions are independent. With no air resistance, there is no horizontal force, so horizontal velocity stays constant. This is why a bullet fired horizontally and one dropped at the same time hit the ground simultaneously.",
    learnMoreLink: { text: "Read more about projectile motion", url: "https://en.wikipedia.org/wiki/Projectile_motion" },
    difficulty: "beginner"
  },
  {
    text: "A cannonball is fired at 20 m/s horizontally from a 45 m high cliff. How long until it hits the ground? (g = 10 m/s²)",
    options: ["2 s", "3 s", "4.5 s", "9 s"],
    correct: 1,
    hints: [
      "Use the vertical motion equation",
      "h = ½gt² gives the fall time",
      "Solve 45 = 0.5 × 10 × t²"
    ],
    explanation: "Time to fall depends only on height: t = √(2h/g) = √(9) = 3 s. The horizontal velocity is irrelevant for fall time. This principle is used by pilots dropping aid packages from constant altitudes.",
    learnMoreLink: { text: "Read more about projectile motion", url: "https://en.wikipedia.org/wiki/Projectile_motion" },
    difficulty: "easy"
  },
  {
    text: "What launch angle gives the maximum range for a projectile on level ground (ignoring air resistance)?",
    options: ["30°", "45°", "60°", "90°"],
    correct: 1,
    hints: [
      "The range formula involves sin(2θ)",
      "Maximum of sin(2θ) occurs at 2θ = 90°",
      "Half of 90° is the answer"
    ],
    explanation: "The range formula R = v²sin(2θ)/g is maximized when sin(2θ) = 1, which occurs at θ = 45°. Athletes in shot put and javelin aim near this angle, though the optimal is slightly less due to release height and air resistance.",
    learnMoreLink: { text: "Read more about range of a projectile", url: "https://en.wikipedia.org/wiki/Range_of_a_projectile" },
    difficulty: "easy"
  },
  {
    text: "A projectile is launched at 30 m/s at 30° above horizontal. What is its initial vertical velocity?",
    options: ["10 m/s", "15 m/s", "26 m/s", "30 m/s"],
    correct: 1,
    hints: [
      "Use the sine component for vertical",
      "v_y = v sin(θ)",
      "sin(30°) = 0.5"
    ],
    explanation: "Vertical component is v sin(θ) = 30 × 0.5 = 15 m/s. Decomposing velocity into components is key in projectile problems. Engineers use this when designing trajectories for fireworks and ballistic missiles.",
    learnMoreLink: { text: "Read more about projectile motion", url: "https://en.wikipedia.org/wiki/Projectile_motion" },
    difficulty: "beginner"
  },
  {
    text: "A ball is thrown at 40 m/s at 53° above horizontal (sin53°=0.8, cos53°=0.6). What is its maximum height? (g = 10 m/s²)",
    options: ["32 m", "51.2 m", "64 m", "80 m"],
    correct: 1,
    hints: [
      "Use v_y² = u_y² - 2gh at max height where v_y = 0",
      "u_y = 40 × 0.8 = 32 m/s",
      "h = (32)²/(2 × 10)"
    ],
    explanation: "Vertical component is 32 m/s, so max height = u_y²/(2g) = 1024/20 = 51.2 m. Only the vertical component contributes to maximum height. Ski jumpers analyze these components to optimize their leap distance.",
    learnMoreLink: { text: "Read more about projectile motion", url: "https://en.wikipedia.org/wiki/Projectile_motion" },
    difficulty: "medium"
  },
  {
    text: "What is friction?",
    options: ["A force that pulls objects toward Earth", "A force that opposes relative motion between surfaces", "A force that pushes objects apart", "A force that accelerates objects"],
    correct: 1,
    hints: [
      "Think about why a sliding book stops",
      "It acts opposite to motion",
      "It arises between surfaces in contact"
    ],
    explanation: "Friction is a contact force that opposes the relative motion or tendency of motion between two surfaces. It enables walking and braking, but also wastes energy as heat in machines. Engineers use lubricants to reduce harmful friction.",
    learnMoreLink: { text: "Read more about friction", url: "https://en.wikipedia.org/wiki/Friction" },
    difficulty: "beginner"
  },
  {
    text: "A 10 kg crate sits on a horizontal floor. The coefficient of static friction is 0.4. What minimum horizontal force is needed to start it moving? (g = 10 m/s²)",
    options: ["4 N", "25 N", "40 N", "100 N"],
    correct: 2,
    hints: [
      "Find the normal force first",
      "F_friction = μ × N",
      "N = mg = 100 N, so friction = 0.4 × 100"
    ],
    explanation: "The maximum static friction equals μ_s × N = 0.4 × 100 = 40 N. To start sliding, applied force must exceed this. Tire grip works similarly — μ between rubber and road determines stopping distance.",
    learnMoreLink: { text: "Read more about friction", url: "https://en.wikipedia.org/wiki/Friction" },
    difficulty: "easy"
  },
  {
    text: "A 5 kg block slides down a 30° frictionless incline. What is its acceleration? (g = 10 m/s²)",
    options: ["2.5 m/s²", "5 m/s²", "8.66 m/s²", "10 m/s²"],
    correct: 1,
    hints: [
      "Acceleration on frictionless incline is g sin(θ)",
      "sin(30°) = 0.5",
      "a = 10 × 0.5"
    ],
    explanation: "On a frictionless incline, a = g sin(θ) = 10 × 0.5 = 5 m/s². The component of gravity along the slope causes acceleration. Roller coasters exploit this for thrilling drops and curves.",
    learnMoreLink: { text: "Read more about inclined plane", url: "https://en.wikipedia.org/wiki/Inclined_plane" },
    difficulty: "medium"
  },
  {
    text: "What is the SI unit of work?",
    options: ["Watt", "Newton", "Joule", "Pascal"],
    correct: 2,
    hints: [
      "Work and energy share the same unit",
      "Named after a 19th-century English physicist",
      "1 of this unit = 1 N × 1 m"
    ],
    explanation: "Work is measured in joules (J), where 1 J equals the work done by 1 N over 1 m. James Prescott Joule's experiments established the mechanical equivalent of heat. Food calories are essentially joules — 1 kcal ≈ 4184 J.",
    learnMoreLink: { text: "Read more about the joule", url: "https://en.wikipedia.org/wiki/Joule" },
    difficulty: "beginner"
  },
  {
    text: "A motor lifts a 20 kg mass 5 m vertically in 4 seconds. What is its power output? (g = 10 m/s²)",
    options: ["100 W", "200 W", "250 W", "1000 W"],
    correct: 2,
    hints: [
      "Find work done first: W = mgh",
      "Then divide by time for power",
      "P = (20 × 10 × 5)/4"
    ],
    explanation: "Work = mgh = 1000 J; Power = Work/time = 1000/4 = 250 W. Power describes how quickly energy is transferred. Elevator motors are sized to lift their rated load within standard time limits.",
    learnMoreLink: { text: "Read more about power", url: "https://en.wikipedia.org/wiki/Power_(physics)" },
    difficulty: "easy"
  },
  {
    text: "A horizontal force of 50 N pulls a box 8 m, but the box only experiences 30 N net horizontal force due to friction. How much work does the applied force do?",
    options: ["240 J", "400 J", "640 J", "1500 J"],
    correct: 1,
    hints: [
      "Work by applied force uses the applied force only",
      "W = F × d",
      "50 × 8 = ?"
    ],
    explanation: "Work done by the applied force is F × d = 50 × 8 = 400 J, regardless of friction. Friction does negative work separately. Cars use chemical energy to overcome friction during cruising at constant speed.",
    learnMoreLink: { text: "Read more about work in physics", url: "https://en.wikipedia.org/wiki/Work_(physics)" },
    difficulty: "medium"
  },
  {
    text: "A 1500 kg car accelerates from 10 m/s to 20 m/s over 5 seconds. What is the average power delivered?",
    options: ["15 kW", "22.5 kW", "45 kW", "60 kW"],
    correct: 2,
    hints: [
      "Find change in kinetic energy",
      "ΔKE = ½m(v² - u²)",
      "P = ΔKE / time"
    ],
    explanation: "ΔKE = 0.5 × 1500 × (400 - 100) = 225,000 J; Power = 225,000/5 = 45,000 W = 45 kW. This represents engine output plus losses. Sports cars boast high peak power for rapid acceleration.",
    learnMoreLink: { text: "Read more about power", url: "https://en.wikipedia.org/wiki/Power_(physics)" },
    difficulty: "hard"
  },
  {
    text: "A 0.5 kg ball moves at 4 m/s. What is its momentum?",
    options: ["0.5 kg·m/s", "2 kg·m/s", "4 kg·m/s", "8 kg·m/s"],
    correct: 1,
    hints: [
      "Momentum p = mv",
      "Multiply mass by velocity",
      "0.5 × 4"
    ],
    explanation: "Momentum p = mv = 0.5 × 4 = 2 kg·m/s. Momentum is conserved in collisions when no external forces act. This principle governs car crash analyses and rocket propulsion.",
    learnMoreLink: { text: "Read more about momentum", url: "https://en.wikipedia.org/wiki/Momentum" },
    difficulty: "easy"
  },
  {
    text: "A 0.2 kg tennis ball moving at 30 m/s hits a wall and rebounds at 25 m/s. What is the impulse on the ball?",
    options: ["1 N·s", "5 N·s", "11 N·s", "55 N·s"],
    correct: 2,
    hints: [
      "Impulse = change in momentum",
      "Be careful with directions — initial and final are opposite",
      "Δp = m(v_f - v_i) = 0.2 × (-25 - 30)"
    ],
    explanation: "Impulse = Δp = 0.2 × (-25 - 30) = -11 N·s, magnitude 11 N·s. Direction reversal doubles the effective change. Boxing gloves extend the impact time to reduce force for the same impulse.",
    learnMoreLink: { text: "Read more about impulse", url: "https://en.wikipedia.org/wiki/Impulse_(physics)" },
    difficulty: "medium"
  },
  {
    text: "A 1000 kg car moving at 20 m/s collides and sticks to a stationary 1500 kg truck. What is their common velocity after collision?",
    options: ["5 m/s", "8 m/s", "12 m/s", "20 m/s"],
    correct: 1,
    hints: [
      "Use conservation of momentum",
      "m1v1 + m2v2 = (m1+m2)v_f",
      "20000 = 2500 × v_f"
    ],
    explanation: "By momentum conservation: 1000(20) + 0 = 2500 × v_f, so v_f = 8 m/s. This perfectly inelastic collision loses kinetic energy as heat and deformation. Crumple zones in cars increase collision time, reducing peak force.",
    learnMoreLink: { text: "Read more about inelastic collisions", url: "https://en.wikipedia.org/wiki/Inelastic_collision" },
    difficulty: "medium"
  },
  {
    text: "What does Ohm's law state?",
    options: ["P = IV", "V = IR", "F = ma", "E = mc²"],
    correct: 1,
    hints: [
      "It relates voltage, current, and resistance",
      "Voltage equals current times resistance",
      "V = I × R"
    ],
    explanation: "Ohm's law states V = IR, where V is voltage, I is current, and R is resistance. It's foundational for circuit analysis. Household appliances use this to determine safe wire sizes for given currents.",
    learnMoreLink: { text: "Read more about Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law" },
    difficulty: "beginner"
  },
  {
    text: "A 12 V battery drives 3 A through a resistor. What is the resistance?",
    options: ["0.25 Ω", "4 Ω", "9 Ω", "36 Ω"],
    correct: 1,
    hints: [
      "Use Ohm's law: V = IR",
      "Solve R = V/I",
      "12/3"
    ],
    explanation: "R = V/I = 12/3 = 4 Ω. Ohm's law lets us calculate any one quantity given the other two. Car electrical systems use 12 V batteries with carefully chosen resistances to drive lights and accessories.",
    learnMoreLink: { text: "Read more about Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law" },
    difficulty: "easy"
  },
  {
    text: "What current flows through a 20 Ω resistor connected to a 5 V supply?",
    options: ["0.25 A", "4 A", "15 A", "100 A"],
    correct: 0,
    hints: [
      "Use I = V/R",
      "Divide voltage by resistance",
      "5/20"
    ],
    explanation: "I = V/R = 5/20 = 0.25 A. Lower voltages and higher resistances yield smaller currents. LED indicators typically draw around 20 mA controlled by series resistors.",
    learnMoreLink: { text: "Read more about Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law" },
    difficulty: "easy"
  },
  {
    text: "A light bulb has resistance 240 Ω and is plugged into a 120 V outlet. What current does it draw?",
    options: ["0.5 A", "2 A", "120 A", "240 A"],
    correct: 0,
    hints: [
      "Apply Ohm's law I = V/R",
      "120 ÷ 240",
      "Less than 1 A"
    ],
    explanation: "I = V/R = 120/240 = 0.5 A. North American household voltage is 120 V, and incandescent bulbs typically draw fractions of an amp. Circuit breakers trip when current exceeds safe limits, around 15-20 A for household circuits.",
    learnMoreLink: { text: "Read more about Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law" },
    difficulty: "easy"
  },
  {
    text: "An ohmic resistor has voltage doubled across it. What happens to current?",
    options: ["Halves", "Stays the same", "Doubles", "Quadruples"],
    correct: 2,
    hints: [
      "Ohm's law: I = V/R with R constant",
      "Current is proportional to voltage",
      "If V doubles, I also doubles"
    ],
    explanation: "For ohmic conductors at fixed resistance, I ∝ V, so doubling voltage doubles current. Non-ohmic devices like diodes don't follow this. Power transmission lines exploit this to deliver more current at higher voltages.",
    learnMoreLink: { text: "Read more about Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law" },
    difficulty: "beginner"
  },
  {
    text: "A wire's voltage drop is 6 V when 0.5 A flows. If the wire's resistance doubles but voltage stays at 6 V, what is the new current?",
    options: ["0.125 A", "0.25 A", "0.5 A", "1 A"],
    correct: 1,
    hints: [
      "Find original R first",
      "R = 6/0.5 = 12 Ω, doubled is 24 Ω",
      "New I = 6/24"
    ],
    explanation: "Original R = 12 Ω, new R = 24 Ω, so I = 6/24 = 0.25 A. Doubling resistance halves current at constant voltage. This is why thick power cords, with lower resistance, can carry larger currents safely.",
    learnMoreLink: { text: "Read more about Ohm's law", url: "https://en.wikipedia.org/wiki/Ohm%27s_law" },
    difficulty: "medium"
  },
  {
    text: "In a series circuit, two resistors of 4 Ω and 6 Ω are connected. What is the total resistance?",
    options: ["2.4 Ω", "5 Ω", "10 Ω", "24 Ω"],
    correct: 2,
    hints: [
      "Series resistances add directly",
      "R_total = R1 + R2",
      "4 + 6"
    ],
    explanation: "In series, R_total = R1 + R2 = 10 Ω. The same current flows through each resistor. Old Christmas lights were wired in series — one bulb burning out broke the whole string.",
    learnMoreLink: { text: "Read more about series circuits", url: "https://en.wikipedia.org/wiki/Series_and_parallel_circuits" },
    difficulty: "beginner"
  },
  {
    text: "Three identical 2 Ω resistors are connected in series to a 12 V battery. What is the current?",
    options: ["0.5 A", "2 A", "6 A", "18 A"],
    correct: 1,
    hints: [
      "Add resistances in series",
      "Total R = 6 Ω",
      "I = V/R = 12/6"
    ],
    explanation: "Total resistance = 6 Ω, so I = 12/6 = 2 A. The same current flows everywhere in a series loop. Strings of fairy lights still use this principle, with redundancy added so one failure doesn't kill the chain.",
    learnMoreLink: { text: "Read more about series circuits", url: "https://en.wikipedia.org/wiki/Series_and_parallel_circuits" },
    difficulty: "easy"
  },
  {
    text: "Two resistors, 3 Ω and 7 Ω, are in series with a 20 V battery. What is the voltage across the 7 Ω resistor?",
    options: ["6 V", "10 V", "14 V", "20 V"],
    correct: 2,
    hints: [
      "Find the current first",
      "I = 20/(3+7) = 2 A",
      "V = IR = 2 × 7"
    ],
    explanation: "I = 2 A, so V_7Ω = 2 × 7 = 14 V. Voltage divides in proportion to resistance in a series circuit. Voltage dividers exploit this to obtain reduced reference voltages from a single supply.",
    learnMoreLink: { text: "Read more about voltage dividers", url: "https://en.wikipedia.org/wiki/Voltage_divider" },
    difficulty: "medium"
  },
  {
    text: "A series circuit has resistors of 2 Ω, 4 Ω, and 6 Ω with a 24 V battery. What is the power dissipated in the 4 Ω resistor?",
    options: ["8 W", "16 W", "24 W", "32 W"],
    correct: 1,
    hints: [
      "Total resistance is 12 Ω",
      "Current I = 24/12 = 2 A",
      "P = I²R = 4 × 4"
    ],
    explanation: "I = 24/12 = 2 A, so P = I²R = 4 × 4 = 16 W. Higher resistance dissipates more power at the same current. Toasters use this to convert electrical energy to heat in the high-resistance heating element.",
    learnMoreLink: { text: "Read more about electric power", url: "https://en.wikipedia.org/wiki/Electric_power" },
    difficulty: "hard"
  },
  {
    text: "Two 6 Ω resistors are connected in parallel. What is the equivalent resistance?",
    options: ["3 Ω", "6 Ω", "12 Ω", "0.5 Ω"],
    correct: 0,
    hints: [
      "Parallel: 1/R_total = 1/R1 + 1/R2",
      "Equal resistors in parallel give half",
      "6/2"
    ],
    explanation: "For two equal parallel resistors, R_total = R/2 = 3 Ω. Parallel paths reduce overall resistance. Household outlets are wired in parallel so each receives full voltage independently.",
    learnMoreLink: { text: "Read more about parallel circuits", url: "https://en.wikipedia.org/wiki/Series_and_parallel_circuits" },
    difficulty: "easy"
  },
  {
    text: "A 4 Ω and a 12 Ω resistor are in parallel. What is the equivalent resistance?",
    options: ["3 Ω", "8 Ω", "16 Ω", "48 Ω"],
    correct: 0,
    hints: [
      "Use 1/R = 1/4 + 1/12",
      "Common denominator 12: 3/12 + 1/12 = 4/12",
      "R = 12/4"
    ],
    explanation: "1/R = 1/4 + 1/12 = 4/12, so R = 3 Ω. Parallel resistance is always less than the smallest resistor. Power strips wire devices in parallel so each gets line voltage.",
    learnMoreLink: { text: "Read more about parallel circuits", url: "https://en.wikipedia.org/wiki/Series_and_parallel_circuits" },
    difficulty: "medium"
  },
  {
    text: "Three identical 9 Ω resistors are in parallel. What is the equivalent resistance?",
    options: ["1 Ω", "3 Ω", "9 Ω", "27 Ω"],
    correct: 1,
    hints: [
      "For n equal resistors, R/n",
      "9/3",
      "Result is less than each individual resistor"
    ],
    explanation: "For n equal resistors in parallel, R_eq = R/n = 9/3 = 3 Ω. More parallel paths mean lower total resistance. This is why wider conductors handle more current — they're like many parallel paths.",
    learnMoreLink: { text: "Read more about parallel circuits", url: "https://en.wikipedia.org/wiki/Series_and_parallel_circuits" },
    difficulty: "easy"
  },
  {
    text: "A 12 V battery powers a parallel combination of 6 Ω and 12 Ω resistors. What is the total current from the battery?",
    options: ["1 A", "2 A", "3 A", "6 A"],
    correct: 2,
    hints: [
      "Find each branch current: I1 = 12/6, I2 = 12/12",
      "Add the branch currents",
      "2 + 1 = 3"
    ],
    explanation: "I_total = 12/6 + 12/12 = 2 + 1 = 3 A. Each branch sees the full battery voltage in parallel. Home electrical panels distribute current to many parallel circuits, each with its own breaker.",
    learnMoreLink: { text: "Read more about parallel circuits", url: "https://en.wikipedia.org/wiki/Series_and_parallel_circuits" },
    difficulty: "medium"
  },
  {
    text: "What is the formula for electrical power?",
    options: ["P = IR", "P = V/R", "P = IV", "P = V/I"],
    correct: 2,
    hints: [
      "Power is energy per unit time",
      "It's the product of voltage and current",
      "P = I × V"
    ],
    explanation: "Electrical power P = IV, measured in watts. Combined with Ohm's law, it gives P = I²R = V²/R. Energy bills are based on kilowatt-hours, the product of power and time used.",
    learnMoreLink: { text: "Read more about electric power", url: "https://en.wikipedia.org/wiki/Electric_power" },
    difficulty: "beginner"
  },
  {
    text: "A phone charger draws 2 A at 5 V. What power does it deliver?",
    options: ["2.5 W", "5 W", "10 W", "25 W"],
    correct: 2,
    hints: [
      "Use P = IV",
      "Multiply 2 by 5",
      "10 W"
    ],
    explanation: "P = IV = 2 × 5 = 10 W. Modern fast chargers deliver 18 W, 25 W, or higher to charge phones quickly. Charger efficiency means slightly more power is drawn from the wall than delivered to the phone.",
    learnMoreLink: { text: "Read more about electric power", url: "https://en.wikipedia.org/wiki/Electric_power" },
    difficulty: "easy"
  },
  {
    text: "A 60 W bulb operates on a 120 V supply. What is its resistance?",
    options: ["0.5 Ω", "2 Ω", "60 Ω", "240 Ω"],
    correct: 3,
    hints: [
      "Use P = V²/R",
      "Solve R = V²/P",
      "120²/60 = 14400/60"
    ],
    explanation: "R = V²/P = 14400/60 = 240 Ω. This is the bulb's hot resistance during operation. Cold filaments have much lower resistance, which is why bulbs often fail at switch-on as the inrush current spikes.",
    learnMoreLink: { text: "Read more about electric power", url: "https://en.wikipedia.org/wiki/Electric_power" },
    difficulty: "medium"
  },
  {
    text: "An electric heater dissipates 1500 W when 6.25 A flows through it. What is the supply voltage?",
    options: ["120 V", "240 V", "300 V", "9375 V"],
    correct: 1,
    hints: [
      "P = IV, solve V = P/I",
      "1500/6.25",
      "Common household value"
    ],
    explanation: "V = P/I = 1500/6.25 = 240 V. Many countries use 230-240 V mains for high-power appliances. Higher voltage allows lower current for the same power, reducing wire losses.",
    learnMoreLink: { text: "Read more about electric power", url: "https://en.wikipedia.org/wiki/Electric_power" },
    difficulty: "medium"
  },
  {
    text: "What does resistance depend on for a uniform wire?",
    options: ["Length only", "Cross-sectional area only", "Both length and area, plus material", "Only the voltage applied"],
    correct: 2,
    hints: [
      "Think R = ρL/A",
      "Longer wires have more resistance",
      "Thicker wires have less resistance"
    ],
    explanation: "Resistance R = ρL/A depends on resistivity (material), length, and cross-sectional area. Long thin wires have high resistance; short thick ones low. Power cables use thick copper to minimize losses over long runs.",
    learnMoreLink: { text: "Read more about electrical resistance", url: "https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance" },
    difficulty: "beginner"
  },
  {
    text: "If a wire's length is doubled and its cross-sectional area is halved, how does its resistance change?",
    options: ["Halves", "Doubles", "Quadruples", "Stays the same"],
    correct: 2,
    hints: [
      "R is proportional to L/A",
      "Doubling L doubles R; halving A doubles R again",
      "Combined factor: 2 × 2"
    ],
    explanation: "R ∝ L/A, so doubling L and halving A increases R by 2 × 2 = 4 times. This is why thinning a wire dramatically increases its resistance. Damaged cables can heat up dangerously due to higher localized resistance.",
    learnMoreLink: { text: "Read more about electrical resistivity", url: "https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity" },
    difficulty: "hard"
  },
  {
    text: "What happens to most metals' resistance as temperature increases?",
    options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    correct: 1,
    hints: [
      "Atoms vibrate more at higher temperature",
      "Electrons collide more often",
      "Resistance goes up"
    ],
    explanation: "In metals, increased temperature causes greater lattice vibrations, scattering electrons more and raising resistance. Semiconductors behave oppositely. This is why incandescent bulbs warm up and dim slightly after switch-on, but stay bright due to the supply voltage.",
    learnMoreLink: { text: "Read more about temperature dependence of resistance", url: "https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity#Temperature_dependence" },
    difficulty: "easy"
  },
  {
    text: "A copper wire has resistance 2 Ω. A second wire of the same material has triple the length and double the cross-sectional area. What is its resistance?",
    options: ["1.5 Ω", "3 Ω", "6 Ω", "12 Ω"],
    correct: 1,
    hints: [
      "R is proportional to L/A",
      "New R = 2 × (3/2)",
      "Multiply by 1.5"
    ],
    explanation: "New R = 2 × (3L/2A factor relative) = 2 × 1.5 = 3 Ω. Geometry directly affects resistance. Telecom engineers calculate cable resistances precisely to ensure signal integrity.",
    learnMoreLink: { text: "Read more about electrical resistance", url: "https://en.wikipedia.org/wiki/Electrical_resistance_and_conductance" },
    difficulty: "beginner"
  },
  {
    text: "What does EMF stand for?",
    options: ["Electromagnetic field", "Electric motive force", "Electromotive force", "Energy moving forward"],
    correct: 2,
    hints: [
      "It's the force that drives current in a battery",
      "Despite the name, it's not really a force",
      "Measured in volts"
    ],
    explanation: "EMF stands for electromotive force, the energy per unit charge supplied by a source like a battery. It's measured in volts. Real batteries have internal resistance, so terminal voltage drops below EMF when current flows.",
    learnMoreLink: { text: "Read more about electromotive force", url: "https://en.wikipedia.org/wiki/Electromotive_force" },
    difficulty: "beginner"
  },
  {
    text: "A battery has EMF 12 V and internal resistance 0.5 Ω. When connected to a 5.5 Ω external resistor, what is the current?",
    options: ["1 A", "2 A", "12 A", "24 A"],
    correct: 1,
    hints: [
      "Total resistance = internal + external",
      "I = EMF / (R + r)",
      "12 / (5.5 + 0.5)"
    ],
    explanation: "I = EMF/(R+r) = 12/6 = 2 A. Internal resistance limits maximum current and causes voltage sag under load. This is why car starter motors momentarily dim the headlights.",
    learnMoreLink: { text: "Read more about internal resistance", url: "https://en.wikipedia.org/wiki/Internal_resistance" },
    difficulty: "medium"
  },
  {
    text: "What is the terminal voltage of a 9 V battery with 1 Ω internal resistance delivering 3 A?",
    options: ["3 V", "6 V", "9 V", "12 V"],
    correct: 1,
    hints: [
      "Terminal voltage = EMF - Ir",
      "V_t = 9 - 3 × 1",
      "9 - 3"
    ],
    explanation: "V_terminal = EMF - Ir = 9 - 3 = 6 V. Higher current draws cause greater voltage drop across internal resistance. Old batteries develop higher internal resistance, reducing usable voltage under load.",
    learnMoreLink: { text: "Read more about internal resistance", url: "https://en.wikipedia.org/wiki/Internal_resistance" },
    difficulty: "easy"
  },
  {
    text: "Two 1.5 V batteries are connected in series. What is the total EMF?",
    options: ["0.75 V", "1.5 V", "3 V", "4.5 V"],
    correct: 2,
    hints: [
      "EMFs add in series",
      "1.5 + 1.5",
      "Like stacking batteries in a flashlight"
    ],
    explanation: "Series-connected EMFs add: 1.5 + 1.5 = 3 V. This is why flashlights with two AA cells provide 3 V to the bulb. Parallel batteries instead increase available current at the same voltage.",
    learnMoreLink: { text: "Read more about batteries", url: "https://en.wikipedia.org/wiki/Battery_(electricity)" },
    difficulty: "easy"
  },
  {
    text: "A household uses a 1500 W microwave for 30 minutes daily. If electricity costs $0.12/kWh, what is the monthly (30-day) cost?",
    options: ["$1.62", "$2.70", "$5.40", "$13.50"],
    correct: 1,
    hints: [
      "Energy per day in kWh = 1.5 × 0.5",
      "Multiply by 30 days",
      "Then multiply by $0.12"
    ],
    explanation: "Daily energy = 1.5 kW × 0.5 h = 0.75 kWh; monthly = 22.5 kWh; cost = 22.5 × 0.12 = $2.70. Energy bills track kilowatt-hours consumed. Switching to LED bulbs from incandescents can save significantly on annual costs.",
    learnMoreLink: { text: "Read more about kilowatt-hour", url: "https://en.wikipedia.org/wiki/Kilowatt-hour" },
    difficulty: "beginner"
  },
  {
    text: "Why does an extension cord with too many devices plugged in get warm?",
    options: ["The current generates heat in the cord's resistance", "Voltage increases above safe levels", "The cord absorbs heat from devices", "The plug isn't grounded"],
    correct: 0,
    hints: [
      "Think about P = I²R in the cord itself",
      "More devices means more current",
      "Heating is proportional to current squared"
    ],
    explanation: "Power dissipated in the cord is I²R; with high current, even small resistance generates significant heat. Overloaded cords can ignite fires. This is why cords have current ratings and breakers limit total household current.",
    learnMoreLink: { text: "Read more about Joule heating", url: "https://en.wikipedia.org/wiki/Joule_heating" },
    difficulty: "easy"
  },
  {
    text: "A 240 V immersion heater is rated 2 kW. How long does it take to deliver 360 kJ of energy?",
    options: ["30 s", "60 s", "180 s", "300 s"],
    correct: 2,
    hints: [
      "Time = energy/power",
      "360000 J / 2000 W",
      "Result in seconds"
    ],
    explanation: "Time = E/P = 360000/2000 = 180 s = 3 minutes. Higher-power heaters deliver more energy per unit time. Kettles balance power against safety to boil water in roughly 2-3 minutes.",
    learnMoreLink: { text: "Read more about electric power", url: "https://en.wikipedia.org/wiki/Electric_power" },
    difficulty: "beginner"
  },
  {
    text: "Why are high voltages used for long-distance power transmission?",
    options: ["High voltage is safer", "It reduces I²R losses in transmission lines", "It increases consumer demand", "It produces more energy"],
    correct: 1,
    hints: [
      "Same power can mean different I and V",
      "Power loss in cables = I²R",
      "Higher V means lower I for the same P"
    ],
    explanation: "For a given power P = IV, raising V lowers I, which dramatically reduces I²R losses. Transmission at hundreds of kilovolts is standard. Step-down transformers near homes deliver safe lower voltages.",
    learnMoreLink: { text: "Read more about electric power transmission", url: "https://en.wikipedia.org/wiki/Electric_power_transmission" },
    difficulty: "beginner"
  },
  {
    text: "A car battery is rated 60 Ah at 12 V. How much energy does it store?",
    options: ["5 Wh", "60 Wh", "720 Wh", "60000 Wh"],
    correct: 2,
    hints: [
      "Energy = voltage × charge capacity",
      "12 × 60",
      "In watt-hours"
    ],
    explanation: "Energy = 12 V × 60 Ah = 720 Wh = 2.59 MJ. This powers the starter motor briefly but couldn't run the car alone. The alternator recharges the battery while driving.",
    learnMoreLink: { text: "Read more about ampere-hour", url: "https://en.wikipedia.org/wiki/Ampere-hour" },
    difficulty: "medium"
  },
  {
    text: "What is the wavelength of a wave with frequency 50 Hz traveling at 300 m/s?",
    options: ["0.6 m", "6 m", "60 m", "15000 m"],
    correct: 1,
    hints: [
      "Use v = fλ",
      "λ = v/f",
      "300/50"
    ],
    explanation: "λ = v/f = 300/50 = 6 m. Wave speed equals frequency times wavelength. Sound waves at 50 Hz have wavelengths around 7 m in air, similar to bass in music.",
    learnMoreLink: { text: "Read more about wavelength", url: "https://en.wikipedia.org/wiki/Wavelength" },
    difficulty: "easy"
  },
  {
    text: "Which property of a wave determines its loudness (for sound)?",
    options: ["Frequency", "Wavelength", "Amplitude", "Speed"],
    correct: 2,
    hints: [
      "Loudness relates to wave energy",
      "Bigger oscillations carry more energy",
      "It's the height of the wave"
    ],
    explanation: "Amplitude determines loudness for sound waves. Larger amplitude means more energy per unit area. Decibel meters measure sound intensity, which is proportional to amplitude squared.",
    learnMoreLink: { text: "Read more about amplitude", url: "https://en.wikipedia.org/wiki/Amplitude" },
    difficulty: "beginner"
  },
  {
    text: "Frequency is measured in:",
    options: ["Meters", "Seconds", "Hertz", "Decibels"],
    correct: 2,
    hints: [
      "1 cycle per second equals what?",
      "Named after a German physicist",
      "Hz"
    ],
    explanation: "Frequency is measured in hertz (Hz), or cycles per second. Heinrich Hertz first produced and detected radio waves. Human hearing spans roughly 20 Hz to 20 kHz.",
    learnMoreLink: { text: "Read more about hertz", url: "https://en.wikipedia.org/wiki/Hertz" },
    difficulty: "beginner"
  },
  {
    text: "A wave has period 0.02 seconds. What is its frequency?",
    options: ["0.02 Hz", "2 Hz", "20 Hz", "50 Hz"],
    correct: 3,
    hints: [
      "f = 1/T",
      "1/0.02",
      "Inverse of period"
    ],
    explanation: "f = 1/T = 1/0.02 = 50 Hz. Frequency and period are reciprocals. North American AC power runs at 60 Hz with a period of about 16.7 ms.",
    learnMoreLink: { text: "Read more about frequency", url: "https://en.wikipedia.org/wiki/Frequency" },
    difficulty: "easy"
  },
  {
    text: "What kind of wave is a sound wave in air?",
    options: ["Transverse", "Longitudinal", "Electromagnetic", "Standing"],
    correct: 1,
    hints: [
      "Air molecules oscillate back and forth",
      "Direction of vibration matches direction of travel",
      "Compressions and rarefactions"
    ],
    explanation: "Sound in air is a longitudinal wave — particles oscillate parallel to the direction of propagation. This forms regions of compression and rarefaction. Earthquakes generate both longitudinal P-waves and transverse S-waves.",
    learnMoreLink: { text: "Read more about longitudinal waves", url: "https://en.wikipedia.org/wiki/Longitudinal_wave" },
    difficulty: "beginner"
  },
  {
    text: "If a wave's frequency doubles while speed stays constant, what happens to its wavelength?",
    options: ["Doubles", "Halves", "Quadruples", "Stays the same"],
    correct: 1,
    hints: [
      "v = fλ",
      "If f doubles and v fixed, λ halves",
      "Inverse relationship"
    ],
    explanation: "Since v = fλ at fixed v, doubling f halves λ. Higher-pitched sounds have shorter wavelengths. Bats use ultrasonic chirps with wavelengths of millimeters for precise echolocation.",
    learnMoreLink: { text: "Read more about wave equations", url: "https://en.wikipedia.org/wiki/Wave_equation" },
    difficulty: "easy"
  },
  {
    text: "A guitar string vibrates at 440 Hz. If the speed of waves on the string is 220 m/s, what is the wavelength?",
    options: ["0.5 m", "1 m", "2 m", "440 m"],
    correct: 0,
    hints: [
      "Apply v = fλ",
      "λ = 220/440",
      "Half a meter"
    ],
    explanation: "λ = v/f = 220/440 = 0.5 m. The fundamental wavelength on a string is 2L for a string of length L. The A4 note at 440 Hz is the standard tuning reference for orchestras.",
    learnMoreLink: { text: "Read more about standing waves", url: "https://en.wikipedia.org/wiki/Standing_wave" },
    difficulty: "easy"
  },
  {
    text: "What determines the pitch of a sound?",
    options: ["Amplitude", "Frequency", "Speed", "Wavelength of light"],
    correct: 1,
    hints: [
      "Higher pitch = more cycles per second",
      "Like notes on a piano",
      "Frequency-related"
    ],
    explanation: "Pitch corresponds to frequency — higher frequency means higher pitch. A piano's middle C is about 261.6 Hz; A4 is 440 Hz. Songbirds vary frequency to communicate.",
    learnMoreLink: { text: "Read more about pitch", url: "https://en.wikipedia.org/wiki/Pitch_(music)" },
    difficulty: "beginner"
  },
  {
    text: "What is the typical speed of sound in air at room temperature?",
    options: ["3 × 10⁸ m/s", "1500 m/s", "343 m/s", "20 m/s"],
    correct: 2,
    hints: [
      "Much slower than light",
      "Around 340 m/s",
      "Why thunder lags behind lightning"
    ],
    explanation: "Sound travels at about 343 m/s in 20°C air. It's much faster in water (1500 m/s) and steel (~5000 m/s). The 5-second rule for thunder per mile relies on this finite speed.",
    learnMoreLink: { text: "Read more about speed of sound", url: "https://en.wikipedia.org/wiki/Speed_of_sound" },
    difficulty: "easy"
  },
  {
    text: "An increase of 10 dB corresponds to what change in sound intensity?",
    options: ["10× more intense", "100× more intense", "Twice as intense", "10 dB more amplitude"],
    correct: 0,
    hints: [
      "Decibels are logarithmic",
      "10 dB step = factor of 10 in intensity",
      "20 dB = 100×"
    ],
    explanation: "Each 10 dB increase represents a 10× rise in intensity. So 60 dB conversation is 100× as intense as 40 dB whispers. Concerts at 110 dB can damage hearing within minutes.",
    learnMoreLink: { text: "Read more about decibels", url: "https://en.wikipedia.org/wiki/Decibel" },
    difficulty: "beginner"
  },
  {
    text: "Why does a helium-filled balloon make your voice sound higher-pitched?",
    options: ["Helium changes vocal cord frequency", "Helium has lower density, increasing sound speed and resonant frequencies", "Helium absorbs low frequencies", "Helium reverses polarity"],
    correct: 1,
    hints: [
      "Vocal cords still vibrate at the same frequency",
      "Speed of sound is higher in helium",
      "Resonances of the vocal tract shift up"
    ],
    explanation: "In helium, sound travels about 3× faster than in air, so the resonant frequencies of your vocal tract increase, altering timbre toward higher tones. Vocal cords vibrate the same — only the formants shift. This is why helium voice is squeaky but not actually higher in fundamental pitch.",
    learnMoreLink: { text: "Read more about formants", url: "https://en.wikipedia.org/wiki/Formant" },
    difficulty: "hard"
  },
  {
    text: "What is the threshold of human hearing in decibels?",
    options: ["-50 dB", "0 dB", "20 dB", "60 dB"],
    correct: 1,
    hints: [
      "It's the reference level",
      "0 dB by definition",
      "Quietest perceptible sound"
    ],
    explanation: "0 dB is the threshold of hearing for healthy young ears at 1 kHz, defined as 10⁻¹² W/m². Sounds below this are inaudible. Hearing sensitivity peaks around 3-4 kHz, where speech consonants reside.",
    learnMoreLink: { text: "Read more about absolute threshold of hearing", url: "https://en.wikipedia.org/wiki/Absolute_threshold_of_hearing" },
    difficulty: "easy"
  },
  {
    text: "What is the Doppler effect?",
    options: ["Bending of waves around obstacles", "Change in observed frequency due to relative motion", "Reflection of sound off surfaces", "Splitting of white light"],
    correct: 1,
    hints: [
      "Think of an ambulance siren passing by",
      "Frequency shifts based on motion",
      "Approaching = higher pitch"
    ],
    explanation: "The Doppler effect is the change in observed frequency when source and observer move relative to each other. Approaching sources sound higher-pitched, receding ones lower. Police radar guns use it to measure vehicle speeds.",
    learnMoreLink: { text: "Read more about the Doppler effect", url: "https://en.wikipedia.org/wiki/Doppler_effect" },
    difficulty: "beginner"
  },
  {
    text: "A train moving toward you sounds higher-pitched because:",
    options: ["The train's whistle plays louder notes", "Sound waves are compressed in the direction of motion", "Sound waves are stretched", "Air pressure increases"],
    correct: 1,
    hints: [
      "Wavefronts bunch up ahead of the source",
      "Shorter wavelength means higher frequency",
      "Doppler effect"
    ],
    explanation: "As the train approaches, successive wave crests are emitted closer together, shortening wavelength and raising frequency. After it passes, wavelengths stretch and pitch drops. This effect is dramatic at high source speeds.",
    learnMoreLink: { text: "Read more about the Doppler effect", url: "https://en.wikipedia.org/wiki/Doppler_effect" },
    difficulty: "easy"
  },
  {
    text: "Astronomers use redshift to measure what?",
    options: ["Star temperatures", "Galaxy chemical composition", "How fast galaxies recede from us", "Star ages"],
    correct: 2,
    hints: [
      "Redshift is a Doppler-related effect for light",
      "Distant galaxies show wavelengths stretched toward red",
      "It indicates recession velocity"
    ],
    explanation: "Cosmological redshift indicates galaxies are receding, with farther ones moving faster — Hubble's law. This evidence supports the expanding universe model. Edwin Hubble's 1929 measurements revolutionized cosmology.",
    learnMoreLink: { text: "Read more about redshift", url: "https://en.wikipedia.org/wiki/Redshift" },
    difficulty: "medium"
  },
  {
    text: "A 1000 Hz siren on an ambulance approaches you at 34 m/s. If sound speed is 340 m/s, what frequency do you hear?",
    options: ["909 Hz", "1000 Hz", "1100 Hz", "1111 Hz"],
    correct: 3,
    hints: [
      "Use f' = f × v/(v - v_s)",
      "340/(340-34)",
      "340/306 ≈ 1.111"
    ],
    explanation: "f' = 1000 × 340/306 ≈ 1111 Hz. The pitch rises by about 11%. Ambulance drivers know this; the pitch drops sharply as they pass, helping pedestrians notice them.",
    learnMoreLink: { text: "Read more about the Doppler effect", url: "https://en.wikipedia.org/wiki/Doppler_effect" },
    difficulty: "hard"
  },
  {
    text: "What occurs when two waves meet and their amplitudes add up to a larger wave?",
    options: ["Destructive interference", "Constructive interference", "Refraction", "Diffraction"],
    correct: 1,
    hints: [
      "The waves are in phase",
      "Crests align with crests",
      "Amplitudes add positively"
    ],
    explanation: "Constructive interference happens when waves are in phase, producing larger amplitude. Noise-cancelling headphones use the opposite — destructive interference. Both phenomena are essential in optics, acoustics, and quantum mechanics.",
    learnMoreLink: { text: "Read more about wave interference", url: "https://en.wikipedia.org/wiki/Wave_interference" },
    difficulty: "easy"
  },
  {
    text: "Resonance in a swing being pushed at the right times demonstrates:",
    options: ["Energy loss to friction", "Maximum energy transfer at the natural frequency", "Wave reflection", "Diffraction"],
    correct: 1,
    hints: [
      "Pushing in time with the swing's motion",
      "Driving at the natural frequency",
      "Amplitude grows large"
    ],
    explanation: "Resonance occurs when a system is driven at its natural frequency, producing large amplitude oscillations. Bridges and buildings must avoid resonance with wind or earthquakes. The infamous Tacoma Narrows Bridge collapse showcased catastrophic resonance.",
    learnMoreLink: { text: "Read more about resonance", url: "https://en.wikipedia.org/wiki/Resonance" },
    difficulty: "easy"
  },
  {
    text: "Two coherent sources produce waves that meet exactly out of phase. What is observed?",
    options: ["Maximum intensity", "Minimum (zero) intensity", "Doubled wavelength", "Halved frequency"],
    correct: 1,
    hints: [
      "Out of phase means crest meets trough",
      "Amplitudes cancel",
      "Destructive interference"
    ],
    explanation: "Waves exactly out of phase undergo destructive interference, cancelling to zero amplitude. This principle drives anti-reflective coatings on lenses. Active noise cancellation uses microphones and speakers to broadcast inverted sound.",
    learnMoreLink: { text: "Read more about destructive interference", url: "https://en.wikipedia.org/wiki/Wave_interference" },
    difficulty: "medium"
  },
  {
    text: "What is the law of reflection?",
    options: ["Light always travels in straight lines", "The angle of incidence equals the angle of reflection", "Light bends toward the normal", "All surfaces reflect equally"],
    correct: 1,
    hints: [
      "Both angles measured from the normal",
      "Mirror-like reflection",
      "Equal angles"
    ],
    explanation: "The angle of incidence equals the angle of reflection, both measured from the normal. This applies to all wave reflections, including sound and water waves. Mirrors, periscopes, and laser systems rely on this principle.",
    learnMoreLink: { text: "Read more about reflection", url: "https://en.wikipedia.org/wiki/Reflection_(physics)" },
    difficulty: "beginner"
  },
  {
    text: "What kind of image does a plane mirror form?",
    options: ["Real and inverted", "Real and upright", "Virtual and inverted", "Virtual and upright"],
    correct: 3,
    hints: [
      "You can't project the image onto a screen",
      "Same orientation as the object",
      "Behind the mirror"
    ],
    explanation: "Plane mirrors produce virtual, upright images the same size as the object, located equidistant behind the mirror. They appear left-right reversed because of how we interpret the reflected light. Bathroom mirrors demonstrate this daily.",
    learnMoreLink: { text: "Read more about plane mirrors", url: "https://en.wikipedia.org/wiki/Plane_mirror" },
    difficulty: "easy"
  },
  {
    text: "A concave mirror with focal length 20 cm has an object placed 60 cm away. Where is the image?",
    options: ["At 12 cm", "At 30 cm", "At 60 cm", "At 90 cm"],
    correct: 1,
    hints: [
      "Use 1/f = 1/d_o + 1/d_i",
      "1/20 = 1/60 + 1/d_i",
      "1/d_i = 3/60 - 1/60 = 2/60"
    ],
    explanation: "Using the mirror equation, 1/d_i = 1/20 - 1/60 = 2/60, so d_i = 30 cm. The image is real and inverted. Telescopes use concave mirrors to gather distant light into a focused image.",
    learnMoreLink: { text: "Read more about curved mirrors", url: "https://en.wikipedia.org/wiki/Curved_mirror" },
    difficulty: "beginner"
  },
  {
    text: "Why does a convex mirror give a wider field of view than a flat mirror?",
    options: ["It magnifies objects", "It reflects light over a larger angle, producing diminished images", "It's smaller", "It absorbs less light"],
    correct: 1,
    hints: [
      "The reflective surface curves outward",
      "Images are smaller and upright",
      "Used in car side mirrors"
    ],
    explanation: "Convex mirrors diverge reflected light, creating smaller virtual images of a wider scene. This explains the warning 'objects in mirror are closer than they appear'. They're widely used in security and parking-lot mirrors.",
    learnMoreLink: { text: "Read more about convex mirrors", url: "https://en.wikipedia.org/wiki/Curved_mirror" },
    difficulty: "easy"
  },
  {
    text: "Light striking a smooth mirror produces what kind of reflection?",
    options: ["Diffuse reflection", "Specular reflection", "Refraction", "Diffraction"],
    correct: 1,
    hints: [
      "All rays reflect at the same angle",
      "Mirror-like reflection",
      "Smooth surface"
    ],
    explanation: "Smooth surfaces produce specular reflection where parallel rays remain parallel after reflection. Rough surfaces give diffuse reflection, scattering light in many directions. This is why white paper is bright but not mirror-like.",
    learnMoreLink: { text: "Read more about specular reflection", url: "https://en.wikipedia.org/wiki/Specular_reflection" },
    difficulty: "beginner"
  },
  {
    text: "What is refraction?",
    options: ["Light bouncing off a surface", "Light bending when passing between materials", "Light splitting into colors", "Light being absorbed"],
    correct: 1,
    hints: [
      "Light changes direction at boundaries",
      "Caused by speed change",
      "Why a straw looks bent in water"
    ],
    explanation: "Refraction is the bending of light when it changes media due to a change in speed. Snell's law governs the angles. The apparent bend of a pencil in water is a classic example.",
    learnMoreLink: { text: "Read more about refraction", url: "https://en.wikipedia.org/wiki/Refraction" },
    difficulty: "beginner"
  },
  {
    text: "What is the index of refraction of a medium where light travels at 2 × 10⁸ m/s?",
    options: ["0.67", "1.5", "2", "3 × 10⁸"],
    correct: 1,
    hints: [
      "n = c/v",
      "3 × 10⁸ / 2 × 10⁸",
      "1.5"
    ],
    explanation: "n = c/v = 3 × 10⁸ / 2 × 10⁸ = 1.5. Glass typically has n ≈ 1.5. Higher n means light travels more slowly through the medium.",
    learnMoreLink: { text: "Read more about refractive index", url: "https://en.wikipedia.org/wiki/Refractive_index" },
    difficulty: "medium"
  },
  {
    text: "A converging lens with focal length 10 cm has an object at 30 cm. Where is the image?",
    options: ["At 7.5 cm", "At 15 cm", "At 20 cm", "At 30 cm"],
    correct: 1,
    hints: [
      "Use 1/f = 1/d_o + 1/d_i",
      "1/10 = 1/30 + 1/d_i",
      "1/d_i = 1/10 - 1/30 = 2/30"
    ],
    explanation: "1/d_i = 1/10 - 1/30 = 2/30, so d_i = 15 cm. The image is real and inverted, half the object's size. Camera lenses similarly form reduced inverted images on sensors.",
    learnMoreLink: { text: "Read more about lenses", url: "https://en.wikipedia.org/wiki/Lens" },
    difficulty: "hard"
  },
  {
    text: "A diverging lens always produces:",
    options: ["Real, inverted images", "Real, upright images", "Virtual, upright, smaller images", "Virtual, inverted, larger images"],
    correct: 2,
    hints: [
      "Diverging lenses spread light out",
      "Image is on same side as object",
      "Smaller than the object"
    ],
    explanation: "Diverging (concave) lenses produce virtual, upright, reduced images. They correct nearsightedness by diverging light before it reaches the eye's lens. Door peepholes use them for wide-angle viewing.",
    learnMoreLink: { text: "Read more about lenses", url: "https://en.wikipedia.org/wiki/Lens" },
    difficulty: "easy"
  },
  {
    text: "A glass prism splits white light into colors because:",
    options: ["Different colors travel at different speeds in glass", "Glass adds color to light", "Light bends randomly", "Color depends on intensity"],
    correct: 0,
    hints: [
      "Different wavelengths refract by different amounts",
      "Violet bends most, red least",
      "It's called dispersion"
    ],
    explanation: "Dispersion arises because the index of refraction varies with wavelength. Violet light slows and bends more than red. Newton's prism experiments revealed white light is a mixture of colors.",
    learnMoreLink: { text: "Read more about dispersion of light", url: "https://en.wikipedia.org/wiki/Dispersion_(optics)" },
    difficulty: "medium"
  },
  {
    text: "Which color of visible light has the longest wavelength?",
    options: ["Violet", "Green", "Red", "Blue"],
    correct: 2,
    hints: [
      "ROYGBIV — think of the order",
      "Long wavelengths are at the warm end",
      "About 700 nm"
    ],
    explanation: "Red light has the longest visible wavelength, around 620-750 nm. Violet has the shortest at ~380-450 nm. Beyond visible, infrared is longer than red, ultraviolet shorter than violet.",
    learnMoreLink: { text: "Read more about visible light", url: "https://en.wikipedia.org/wiki/Visible_spectrum" },
    difficulty: "beginner"
  },
  {
    text: "Which of these has the highest frequency?",
    options: ["Radio waves", "Visible light", "X-rays", "Microwaves"],
    correct: 2,
    hints: [
      "Higher frequency = shorter wavelength = more energy",
      "X-rays are used to image bones",
      "Right side of EM spectrum"
    ],
    explanation: "X-rays have higher frequencies than visible light or microwaves, around 10¹⁶-10¹⁹ Hz. Their high energy lets them penetrate soft tissue. Medical X-ray imaging uses this for diagnostics.",
    learnMoreLink: { text: "Read more about the electromagnetic spectrum", url: "https://en.wikipedia.org/wiki/Electromagnetic_spectrum" },
    difficulty: "easy"
  },
  {
    text: "A green object appears green because it:",
    options: ["Emits green light", "Absorbs green and reflects others", "Reflects green and absorbs others", "Refracts green light"],
    correct: 2,
    hints: [
      "Color of object = color of reflected light",
      "Other wavelengths are absorbed",
      "Pigments selectively reflect"
    ],
    explanation: "Green objects absorb most wavelengths but reflect green light to our eyes. Black objects absorb all visible light; white objects reflect all. This is why dark clothing gets hot in sunlight.",
    learnMoreLink: { text: "Read more about color", url: "https://en.wikipedia.org/wiki/Color" },
    difficulty: "beginner"
  },
  {
    text: "What is the speed of light in a vacuum?",
    options: ["3 × 10⁵ m/s", "3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s"],
    correct: 2,
    hints: [
      "About 300,000 km/s",
      "Denoted by c",
      "Universal constant"
    ],
    explanation: "Light travels at exactly 299,792,458 m/s in vacuum, denoted c. This is nature's speed limit per relativity. GPS satellites must account for both special and general relativistic effects to stay accurate.",
    learnMoreLink: { text: "Read more about the speed of light", url: "https://en.wikipedia.org/wiki/Speed_of_light" },
    difficulty: "beginner"
  },
  {
    text: "Total internal reflection requires light to travel from:",
    options: ["Denser to less dense medium and exceed the critical angle", "Less dense to denser medium", "Air to vacuum", "Vacuum to glass"],
    correct: 0,
    hints: [
      "Light must speed up entering the second medium",
      "Beyond a critical angle, no refraction occurs",
      "Used in optical fibers"
    ],
    explanation: "Total internal reflection occurs when light goes from a higher to lower index medium beyond the critical angle. Optical fibers use it to trap light over long distances. This enables global high-speed internet.",
    learnMoreLink: { text: "Read more about total internal reflection", url: "https://en.wikipedia.org/wiki/Total_internal_reflection" },
    difficulty: "medium"
  },
  {
    text: "What is the critical angle for light traveling from glass (n = 1.5) to air?",
    options: ["30°", "41.8°", "60°", "90°"],
    correct: 1,
    hints: [
      "sin(θ_c) = n2/n1",
      "sin(θ_c) = 1/1.5",
      "θ_c = sin⁻¹(0.667)"
    ],
    explanation: "sin(θ_c) = 1/1.5 ≈ 0.667, so θ_c ≈ 41.8°. Beyond this angle, light is totally reflected within the glass. This principle keeps signals confined in fiber-optic cables.",
    learnMoreLink: { text: "Read more about total internal reflection", url: "https://en.wikipedia.org/wiki/Total_internal_reflection" },
    difficulty: "hard"
  },
  {
    text: "The eye's lens focuses light onto which structure?",
    options: ["Cornea", "Iris", "Retina", "Pupil"],
    correct: 2,
    hints: [
      "Light-sensitive layer at the back",
      "Contains rods and cones",
      "Sends signals via the optic nerve"
    ],
    explanation: "The retina at the back of the eye contains photoreceptors that convert light into nerve impulses. Cones detect color in bright light; rods provide night vision. The optic nerve transmits signals to the brain.",
    learnMoreLink: { text: "Read more about the human eye", url: "https://en.wikipedia.org/wiki/Human_eye" },
    difficulty: "beginner"
  },
  {
    text: "Nearsightedness (myopia) is corrected with:",
    options: ["Converging lenses", "Diverging lenses", "Plane mirrors", "Convex mirrors"],
    correct: 1,
    hints: [
      "Myopia means light focuses before the retina",
      "Need to spread light out before it enters the eye",
      "Concave glasses"
    ],
    explanation: "Diverging (concave) lenses help myopic eyes by spreading light, moving the focal point back to the retina. Farsightedness (hyperopia) needs converging lenses. Modern LASIK reshapes the cornea instead.",
    learnMoreLink: { text: "Read more about myopia", url: "https://en.wikipedia.org/wiki/Near-sightedness" },
    difficulty: "medium"
  },
  {
    text: "If light takes 8 minutes to travel from the Sun to Earth, approximately how far is the Sun?",
    options: ["1.5 million km", "150 million km", "1.5 billion km", "15 billion km"],
    correct: 1,
    hints: [
      "Distance = speed × time",
      "8 × 60 × 3 × 10⁵ km",
      "1 AU"
    ],
    explanation: "Distance = c × t = 3 × 10⁸ m/s × 480 s ≈ 1.44 × 10¹¹ m, or about 150 million km — one Astronomical Unit. This means we see the Sun as it was 8 minutes ago.",
    learnMoreLink: { text: "Read more about astronomical unit", url: "https://en.wikipedia.org/wiki/Astronomical_unit" },
    difficulty: "medium"
  },
  {
    text: "At what temperature do Celsius and Fahrenheit scales coincide?",
    options: ["0°", "-40°", "32°", "100°"],
    correct: 1,
    hints: [
      "Set C = F in F = 9/5 C + 32",
      "Solve C - 9/5 C = 32",
      "Negative number"
    ],
    explanation: "Setting C = F: F = 9/5 F + 32 gives F = -40. So -40°C = -40°F. This curiosity is useful for remembering the conversion formula.",
    learnMoreLink: { text: "Read more about Fahrenheit", url: "https://en.wikipedia.org/wiki/Fahrenheit" },
    difficulty: "hard"
  },
  {
    text: "What is 0°C in Kelvin?",
    options: ["0 K", "100 K", "273 K", "373 K"],
    correct: 2,
    hints: [
      "K = C + 273.15",
      "0 + 273",
      "Freezing point of water"
    ],
    explanation: "0°C = 273.15 K, the freezing point of water. The Kelvin scale starts at absolute zero, where molecular motion theoretically stops. Lowest temperatures ever achieved are billionths of a kelvin.",
    learnMoreLink: { text: "Read more about Kelvin", url: "https://en.wikipedia.org/wiki/Kelvin" },
    difficulty: "easy"
  },
  {
    text: "What is absolute zero?",
    options: ["0°C", "0°F", "0 K", "100 K"],
    correct: 2,
    hints: [
      "The lowest possible temperature",
      "Where particle motion is minimum",
      "Bottom of the Kelvin scale"
    ],
    explanation: "Absolute zero is 0 K (-273.15°C), the temperature at which classical motion ceases. Quantum effects mean some zero-point energy remains. It cannot be reached, only approached arbitrarily closely.",
    learnMoreLink: { text: "Read more about absolute zero", url: "https://en.wikipedia.org/wiki/Absolute_zero" },
    difficulty: "beginner"
  },
  {
    text: "Convert 25°C to Fahrenheit.",
    options: ["57°F", "67°F", "77°F", "87°F"],
    correct: 2,
    hints: [
      "F = 9/5 × C + 32",
      "9/5 × 25 = 45",
      "45 + 32"
    ],
    explanation: "F = 9/5 × 25 + 32 = 45 + 32 = 77°F. This is a comfortable spring temperature. The 9/5 factor reflects the size difference of the degrees.",
    learnMoreLink: { text: "Read more about Celsius", url: "https://en.wikipedia.org/wiki/Celsius" },
    difficulty: "beginner"
  },
  {
    text: "Heat transfer through a metal rod from a hot end to a cold end is primarily by:",
    options: ["Conduction", "Convection", "Radiation", "Reflection"],
    correct: 0,
    hints: [
      "Direct contact, no fluid flow",
      "Atoms vibrate and transfer energy to neighbors",
      "Metals are good at this"
    ],
    explanation: "Conduction transfers heat through direct contact, with energy passing between vibrating atoms and free electrons. Metals conduct heat well due to mobile electrons. This is why a metal spoon in hot soup heats up quickly.",
    learnMoreLink: { text: "Read more about thermal conduction", url: "https://en.wikipedia.org/wiki/Thermal_conduction" },
    difficulty: "beginner"
  },
  {
    text: "How does the Sun's heat reach Earth?",
    options: ["Conduction", "Convection", "Radiation", "Diffusion"],
    correct: 2,
    hints: [
      "Space is mostly empty",
      "Electromagnetic waves",
      "No medium needed"
    ],
    explanation: "Solar heat reaches Earth via radiation — electromagnetic waves traveling through space. No medium is required. Greenhouse gases trap re-emitted infrared radiation, warming the atmosphere.",
    learnMoreLink: { text: "Read more about thermal radiation", url: "https://en.wikipedia.org/wiki/Thermal_radiation" },
    difficulty: "easy"
  },
  {
    text: "Which heat transfer process drives ocean currents and atmospheric weather?",
    options: ["Conduction", "Convection", "Radiation", "Evaporation alone"],
    correct: 1,
    hints: [
      "Hot fluid rises, cold fluid sinks",
      "Bulk motion of fluid",
      "Drives weather"
    ],
    explanation: "Convection moves heat through bulk fluid motion: warm fluid rises, cool fluid sinks. This drives ocean currents, weather systems, and even mantle dynamics inside Earth. Pots of boiling water demonstrate convection cells.",
    learnMoreLink: { text: "Read more about convection", url: "https://en.wikipedia.org/wiki/Convection" },
    difficulty: "beginner"
  },
  {
    text: "A vacuum flask (Thermos) keeps drinks hot or cold mainly by minimizing:",
    options: ["Conduction and convection", "Radiation only", "Evaporation only", "Friction"],
    correct: 0,
    hints: [
      "The vacuum gap eliminates two mechanisms",
      "Reflective walls reduce a third",
      "Conduction and convection need matter"
    ],
    explanation: "The vacuum eliminates conduction and convection because no matter is present to transfer heat. Reflective coatings reduce radiation. Combined, they keep liquids hot or cold for hours.",
    learnMoreLink: { text: "Read more about vacuum flasks", url: "https://en.wikipedia.org/wiki/Vacuum_flask" },
    difficulty: "beginner"
  },
  {
    text: "Why are railway tracks built with small gaps between sections?",
    options: ["For trains to grip better", "To allow thermal expansion in heat", "To save material", "For drainage"],
    correct: 1,
    hints: [
      "Metals expand when heated",
      "Without gaps, rails could buckle",
      "Engineers anticipate seasonal changes"
    ],
    explanation: "Steel rails expand on hot days; gaps prevent buckling under thermal stress. Modern continuous welded rail uses fasteners and stress management instead. Bridges include expansion joints for the same reason.",
    learnMoreLink: { text: "Read more about thermal expansion", url: "https://en.wikipedia.org/wiki/Thermal_expansion" },
    difficulty: "easy"
  },
  {
    text: "A 1.0 m steel rod expands by 0.012 mm per °C. How much does it expand if heated by 50°C?",
    options: ["0.06 mm", "0.6 mm", "6 mm", "60 mm"],
    correct: 1,
    hints: [
      "ΔL = α L ΔT, but here α L is given as expansion per °C",
      "Multiply 0.012 by 50",
      "0.6 mm"
    ],
    explanation: "Total expansion = 0.012 × 50 = 0.6 mm. Even small expansions matter in engineering. Bimetallic strips use unequal expansion of two metals to make thermostats.",
    learnMoreLink: { text: "Read more about thermal expansion", url: "https://en.wikipedia.org/wiki/Thermal_expansion" },
    difficulty: "medium"
  },
  {
    text: "Water has an unusual property between 0°C and 4°C. What is it?",
    options: ["It expands when heated", "It contracts when heated", "It boils at low temperatures", "Its density doesn't change"],
    correct: 1,
    hints: [
      "Most substances expand on heating",
      "Water peaks in density at 4°C",
      "Below 4°C, warming causes contraction"
    ],
    explanation: "Water reaches maximum density at 4°C; below that, it expands again. This is why ice floats and lakes freeze top-down. Aquatic life survives winters thanks to this anomaly.",
    learnMoreLink: { text: "Read more about properties of water", url: "https://en.wikipedia.org/wiki/Properties_of_water" },
    difficulty: "medium"
  },
  {
    text: "What happens to water's temperature while it boils at standard pressure?",
    options: ["It rises continuously", "It stays at 100°C", "It rises then falls", "It drops to 90°C"],
    correct: 1,
    hints: [
      "Energy goes into changing phase, not raising T",
      "Latent heat of vaporization",
      "Constant during phase change"
    ],
    explanation: "During boiling, all energy added goes into breaking molecular bonds (latent heat), so temperature stays at 100°C until all water vaporizes. This plateau allows pressure cookers to work efficiently above 100°C with elevated pressure.",
    learnMoreLink: { text: "Read more about latent heat", url: "https://en.wikipedia.org/wiki/Latent_heat" },
    difficulty: "easy"
  },
  {
    text: "How much energy is needed to melt 100 g of ice at 0°C? (Latent heat of fusion = 334 J/g)",
    options: ["3340 J", "33400 J", "334000 J", "100 J"],
    correct: 1,
    hints: [
      "Q = mL",
      "100 × 334",
      "33400 J"
    ],
    explanation: "Q = mL = 100 × 334 = 33,400 J. This is the same energy that would heat 100 g of liquid water by about 80°C. Ice's high latent heat is why it cools drinks so effectively.",
    learnMoreLink: { text: "Read more about enthalpy of fusion", url: "https://en.wikipedia.org/wiki/Enthalpy_of_fusion" },
    difficulty: "medium"
  },
  {
    text: "Going directly from solid to gas without becoming liquid is called:",
    options: ["Melting", "Sublimation", "Evaporation", "Condensation"],
    correct: 1,
    hints: [
      "Dry ice does this",
      "Mothballs too",
      "Solid to vapor"
    ],
    explanation: "Sublimation is direct solid-to-gas transition, occurring with dry ice (solid CO₂) and at low pressures with water (freeze drying). The reverse is deposition. Comets sublimate ice when nearing the Sun, forming tails.",
    learnMoreLink: { text: "Read more about sublimation", url: "https://en.wikipedia.org/wiki/Sublimation_(phase_transition)" },
    difficulty: "beginner"
  },
  {
    text: "The 1st law of thermodynamics is essentially:",
    options: ["Entropy always increases", "Energy is conserved", "Heat flows from cold to hot", "Absolute zero is unreachable"],
    correct: 1,
    hints: [
      "Restates conservation of energy",
      "ΔU = Q - W",
      "Energy can change forms but not vanish"
    ],
    explanation: "The first law states that energy cannot be created or destroyed, only transformed: ΔU = Q - W. It connects internal energy, heat, and work. This is why perpetual motion machines of the first kind are impossible.",
    learnMoreLink: { text: "Read more about first law of thermodynamics", url: "https://en.wikipedia.org/wiki/First_law_of_thermodynamics" },
    difficulty: "beginner"
  },
  {
    text: "The second law of thermodynamics implies:",
    options: ["Energy is conserved in all processes", "Heat flows spontaneously from cold to hot", "Total entropy of an isolated system never decreases", "All temperatures equalize instantly"],
    correct: 2,
    hints: [
      "Entropy is a measure of disorder",
      "Isolated systems trend toward disorder",
      "Defines the arrow of time"
    ],
    explanation: "Entropy of an isolated system never decreases. This explains why heat flows from hot to cold and why broken eggs don't unscramble. It defines the irreversibility of natural processes.",
    learnMoreLink: { text: "Read more about second law of thermodynamics", url: "https://en.wikipedia.org/wiki/Second_law_of_thermodynamics" },
    difficulty: "medium"
  },
  {
    text: "A heat engine operates between 600 K and 300 K. What is its maximum (Carnot) efficiency?",
    options: ["20%", "30%", "50%", "100%"],
    correct: 2,
    hints: [
      "η = 1 - T_cold/T_hot",
      "1 - 300/600",
      "0.5 = 50%"
    ],
    explanation: "Carnot efficiency = 1 - 300/600 = 0.5 or 50%. Real engines fall well below this limit due to friction and irreversibilities. Power plants are designed to maximize the temperature difference for higher efficiency.",
    learnMoreLink: { text: "Read more about Carnot heat engine", url: "https://en.wikipedia.org/wiki/Carnot_heat_engine" },
    difficulty: "hard"
  },
  {
    text: "Entropy of the universe in any spontaneous process:",
    options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    correct: 1,
    hints: [
      "Universe is treated as isolated",
      "Spontaneous processes are irreversible",
      "Disorder grows"
    ],
    explanation: "Spontaneous processes increase total entropy of the universe. Even in local order increases (like life forming), the surroundings gain more entropy. Heat engines exploit this irreversibility to do useful work.",
    learnMoreLink: { text: "Read more about entropy", url: "https://en.wikipedia.org/wiki/Entropy" },
    difficulty: "medium"
  },
  {
    text: "The third law of thermodynamics states:",
    options: ["Heat flows from hot to cold", "Energy is conserved", "Entropy approaches a constant as T approaches 0 K", "Temperature can be negative"],
    correct: 2,
    hints: [
      "Concerns absolute zero",
      "Pure crystals approach zero entropy",
      "Cannot reach 0 K in finite steps"
    ],
    explanation: "The third law says entropy approaches a constant minimum (zero for a perfect crystal) as T → 0. It implies absolute zero is unreachable in finite operations. Modern cryogenics gets within billionths of a degree.",
    learnMoreLink: { text: "Read more about third law of thermodynamics", url: "https://en.wikipedia.org/wiki/Third_law_of_thermodynamics" },
    difficulty: "hard"
  },
  {
    text: "What particle has no electric charge?",
    options: ["Proton", "Electron", "Neutron", "Ion"],
    correct: 2,
    hints: [
      "Found in the nucleus",
      "Mass close to a proton",
      "Neutral"
    ],
    explanation: "Neutrons are electrically neutral and reside in the nucleus alongside protons. Their mass is similar to protons. Free neutrons are unstable and decay with a half-life of about 10 minutes.",
    learnMoreLink: { text: "Read more about neutrons", url: "https://en.wikipedia.org/wiki/Neutron" },
    difficulty: "beginner"
  },
  {
    text: "How many electrons can the second electron shell hold?",
    options: ["2", "8", "10", "18"],
    correct: 1,
    hints: [
      "Capacity is 2n²",
      "n = 2",
      "2 × 4"
    ],
    explanation: "The second shell holds up to 2(2)² = 8 electrons. The first holds 2; the third up to 18. Noble gases like neon and argon have completely filled shells, making them chemically inert.",
    learnMoreLink: { text: "Read more about electron shells", url: "https://en.wikipedia.org/wiki/Electron_shell" },
    difficulty: "easy"
  },
  {
    text: "An atom's atomic number is the number of:",
    options: ["Neutrons", "Protons", "Electrons + neutrons", "Protons + neutrons"],
    correct: 1,
    hints: [
      "Defines the element",
      "Equal to electrons in a neutral atom",
      "Z"
    ],
    explanation: "The atomic number Z is the number of protons in the nucleus, which determines the element. Carbon has Z = 6; oxygen Z = 8. Mass number A = Z + N counts both protons and neutrons.",
    learnMoreLink: { text: "Read more about atomic number", url: "https://en.wikipedia.org/wiki/Atomic_number" },
    difficulty: "beginner"
  },
  {
    text: "Isotopes of an element have the same number of:",
    options: ["Neutrons", "Protons", "Both protons and neutrons", "Electrons only"],
    correct: 1,
    hints: [
      "Same element, different mass",
      "Number of neutrons varies",
      "Atomic number stays fixed"
    ],
    explanation: "Isotopes share atomic number (protons) but differ in neutrons. Carbon-12 and carbon-14 both have 6 protons but 6 vs 8 neutrons. C-14 dating relies on the decay of this radioactive isotope.",
    learnMoreLink: { text: "Read more about isotopes", url: "https://en.wikipedia.org/wiki/Isotope" },
    difficulty: "easy"
  },
  {
    text: "The photoelectric effect demonstrates that light:",
    options: ["Is purely a wave", "Behaves as discrete packets called photons", "Has mass", "Doesn't interact with matter"],
    correct: 1,
    hints: [
      "Einstein won the Nobel Prize for explaining it",
      "Light below a threshold frequency ejects no electrons",
      "Light comes in quanta"
    ],
    explanation: "The photoelectric effect showed that light energy is quantized in photons, each with E = hf. Below a threshold frequency, no electrons are emitted regardless of intensity. Solar panels exploit this principle to generate electricity.",
    learnMoreLink: { text: "Read more about the photoelectric effect", url: "https://en.wikipedia.org/wiki/Photoelectric_effect" },
    difficulty: "easy"
  },
  {
    text: "What is the energy of a photon with frequency 5 × 10¹⁴ Hz? (h = 6.63 × 10⁻³⁴ J·s)",
    options: ["3.3 × 10⁻¹⁹ J", "3.3 × 10⁻¹⁵ J", "1.5 × 10⁴⁸ J", "13 J"],
    correct: 0,
    hints: [
      "E = hf",
      "Multiply 6.63 × 10⁻³⁴ by 5 × 10¹⁴",
      "Result around 10⁻¹⁹ J"
    ],
    explanation: "E = hf = 6.63 × 10⁻³⁴ × 5 × 10¹⁴ ≈ 3.3 × 10⁻¹⁹ J. Visible light photons carry only a few electronvolts. Photons at higher frequencies (X-rays) have far more energy and can damage tissue.",
    learnMoreLink: { text: "Read more about photons", url: "https://en.wikipedia.org/wiki/Photon" },
    difficulty: "hard"
  },
  {
    text: "Wave-particle duality is best illustrated by which experiment?",
    options: ["Pendulum oscillation", "Double-slit experiment", "Newton's apple", "Galileo's incline"],
    correct: 1,
    hints: [
      "Particles produce interference patterns",
      "Even one particle at a time builds the pattern",
      "Quantum hallmark"
    ],
    explanation: "The double-slit experiment shows that particles like electrons create interference patterns characteristic of waves. Light displays both wave and particle properties. This duality is foundational to quantum mechanics.",
    learnMoreLink: { text: "Read more about wave-particle duality", url: "https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality" },
    difficulty: "medium"
  },
  {
    text: "An electron's de Broglie wavelength is calculated as λ = h/p. If momentum doubles, λ:",
    options: ["Doubles", "Halves", "Quadruples", "Stays same"],
    correct: 1,
    hints: [
      "λ ∝ 1/p",
      "Inverse relation",
      "Doubling p halves λ"
    ],
    explanation: "Since λ = h/p, doubling momentum halves the wavelength. High-energy electrons in microscopes have tiny wavelengths, allowing imaging of atomic structures. This is the basis of electron microscopy.",
    learnMoreLink: { text: "Read more about de Broglie wavelength", url: "https://en.wikipedia.org/wiki/Matter_wave" },
    difficulty: "hard"
  },
  {
    text: "In alpha decay, what particle is emitted?",
    options: ["A proton", "An electron", "A helium-4 nucleus", "A photon"],
    correct: 2,
    hints: [
      "Two protons and two neutrons",
      "Helium nucleus",
      "Heavy particle"
    ],
    explanation: "Alpha decay emits a helium-4 nucleus (2 protons + 2 neutrons). It's stopped by paper or skin, but dangerous if ingested. Smoke detectors use americium's alpha emissions to ionize air.",
    learnMoreLink: { text: "Read more about alpha decay", url: "https://en.wikipedia.org/wiki/Alpha_decay" },
    difficulty: "beginner"
  },
  {
    text: "Beta-minus decay emits:",
    options: ["A proton", "An alpha particle", "An electron", "A gamma ray only"],
    correct: 2,
    hints: [
      "Neutron converts to proton plus this particle",
      "Negatively charged",
      "Common in carbon-14"
    ],
    explanation: "In β⁻ decay, a neutron transforms into a proton, electron, and antineutrino. The electron is ejected. Beta particles penetrate further than alpha but are stopped by aluminum sheets.",
    learnMoreLink: { text: "Read more about beta decay", url: "https://en.wikipedia.org/wiki/Beta_decay" },
    difficulty: "easy"
  },
  {
    text: "An isotope's half-life is 8 years. After 24 years, what fraction remains?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    correct: 2,
    hints: [
      "24 years = 3 half-lives",
      "Each halves the amount",
      "(1/2)³"
    ],
    explanation: "After n half-lives, fraction = (1/2)ⁿ. With 3 half-lives, 1/8 remains. Carbon-14 dating uses this exponential decay to estimate ages of organic remains up to ~50,000 years.",
    learnMoreLink: { text: "Read more about half-life", url: "https://en.wikipedia.org/wiki/Half-life" },
    difficulty: "medium"
  },
  {
    text: "Gamma rays are best shielded by:",
    options: ["Paper", "Aluminum foil", "Lead or thick concrete", "Plastic"],
    correct: 2,
    hints: [
      "Most penetrating type of radiation",
      "Need dense, thick material",
      "Used in medical imaging shielding"
    ],
    explanation: "Gamma rays penetrate deeply, requiring dense materials like lead or thick concrete to attenuate them. They're high-energy electromagnetic radiation. Hospitals use lead-lined rooms for radiotherapy.",
    learnMoreLink: { text: "Read more about gamma rays", url: "https://en.wikipedia.org/wiki/Gamma_ray" },
    difficulty: "medium"
  },
  {
    text: "Nuclear fission involves:",
    options: ["Combining two light nuclei", "Splitting a heavy nucleus", "Converting matter to neutrinos", "Electron capture"],
    correct: 1,
    hints: [
      "Used in current nuclear power plants",
      "Heavy nucleus breaks into pieces",
      "Releases neutrons"
    ],
    explanation: "Fission splits heavy nuclei (like U-235) into smaller fragments, releasing energy and neutrons that sustain a chain reaction. Nuclear power plants harness this to generate electricity. Atomic bombs use uncontrolled fission.",
    learnMoreLink: { text: "Read more about nuclear fission", url: "https://en.wikipedia.org/wiki/Nuclear_fission" },
    difficulty: "beginner"
  },
  {
    text: "The Sun produces energy primarily through:",
    options: ["Nuclear fission", "Chemical combustion", "Nuclear fusion of hydrogen", "Gravitational contraction"],
    correct: 2,
    hints: [
      "Light nuclei merge",
      "Hydrogen forms helium",
      "Source of starlight"
    ],
    explanation: "The Sun fuses hydrogen into helium in its core, releasing enormous energy via E = mc². This proton-proton chain dominates in stars like the Sun. Future fusion reactors aim to replicate this process on Earth.",
    learnMoreLink: { text: "Read more about nuclear fusion", url: "https://en.wikipedia.org/wiki/Nuclear_fusion" },
    difficulty: "easy"
  },
  {
    text: "Why is fusion harder to achieve on Earth than fission?",
    options: ["It releases less energy", "Nuclei must overcome strong electrostatic repulsion at extreme temperatures", "Fusion needs heavy elements", "Fusion produces no neutrons"],
    correct: 1,
    hints: [
      "Fusion needs ~100 million K",
      "Coulomb barrier",
      "Confining hot plasma is difficult"
    ],
    explanation: "Fusion requires temperatures of 100 million K to overcome the Coulomb barrier between positively charged nuclei. Confining and sustaining such plasma is extremely challenging. ITER aims for net energy gain by the 2030s.",
    learnMoreLink: { text: "Read more about ITER", url: "https://en.wikipedia.org/wiki/ITER" },
    difficulty: "beginner"
  },
  {
    text: "What force keeps planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Centrifugal force"],
    correct: 1,
    hints: [
      "Discovered by Newton",
      "Same force makes apples fall",
      "Inverse-square law"
    ],
    explanation: "Gravity provides the centripetal force keeping planets in orbit. Newton's law of universal gravitation describes it. Without gravity, planets would fly off into space in straight lines.",
    learnMoreLink: { text: "Read more about gravity", url: "https://en.wikipedia.org/wiki/Gravity" },
    difficulty: "beginner"
  },
  {
    text: "If Earth's distance from the Sun doubled, gravitational force would:",
    options: ["Double", "Halve", "Quarter", "Stay the same"],
    correct: 2,
    hints: [
      "F ∝ 1/r²",
      "Doubling r quarters F",
      "Inverse-square law"
    ],
    explanation: "Gravity follows an inverse-square law: doubling distance reduces force to 1/4. This is why Pluto experiences far less solar gravity than Mercury. Gravitational influence weakens rapidly with distance.",
    learnMoreLink: { text: "Read more about Newton's law of universal gravitation", url: "https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation" },
    difficulty: "medium"
  },
  {
    text: "Geostationary satellites orbit Earth at the same period as Earth's rotation, which is:",
    options: ["1 hour", "12 hours", "24 hours", "1 month"],
    correct: 2,
    hints: [
      "They appear stationary above one spot",
      "Same period as Earth's rotation",
      "About one day"
    ],
    explanation: "Geostationary satellites have a 24-hour orbital period, staying above the same equatorial point. They orbit at about 35,786 km altitude. Communications and weather satellites use these orbits.",
    learnMoreLink: { text: "Read more about geostationary orbit", url: "https://en.wikipedia.org/wiki/Geostationary_orbit" },
    difficulty: "easy"
  },
  {
    text: "What keeps the ISS in orbit?",
    options: ["No gravity exists at orbital altitude", "Constant rocket thrust", "It's continuously falling around Earth at high tangential speed", "Magnetic levitation"],
    correct: 2,
    hints: [
      "Astronauts experience free fall",
      "Speed is high enough that Earth curves away",
      "It's an orbit, not zero gravity"
    ],
    explanation: "The ISS continually falls toward Earth but moves sideways fast enough (~7.7 km/s) that it never hits the surface. Gravity is still ~90% as strong as on the ground. Apparent weightlessness is from free fall.",
    learnMoreLink: { text: "Read more about orbital mechanics", url: "https://en.wikipedia.org/wiki/Orbital_mechanics" },
    difficulty: "beginner"
  },
  {
    text: "Which planet has the strongest gravity in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correct: 2,
    hints: [
      "Largest planet",
      "Surface gravity ~2.5× Earth",
      "Gas giant"
    ],
    explanation: "Jupiter, the largest planet, has the strongest surface gravity (~24.8 m/s² vs Earth's 9.8 m/s²). Despite being less dense than Earth, its enormous mass dominates. It even shapes asteroid belt orbits.",
    learnMoreLink: { text: "Read more about Jupiter", url: "https://en.wikipedia.org/wiki/Jupiter" },
    difficulty: "easy"
  },
  {
    text: "What is the closest planet to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    correct: 2,
    hints: [
      "Smallest planet",
      "Named after the Roman messenger god",
      "No moons"
    ],
    explanation: "Mercury orbits closest to the Sun at about 0.39 AU. Surface temperatures swing from -180°C to 430°C between night and day. It has no atmosphere or moons.",
    learnMoreLink: { text: "Read more about Mercury", url: "https://en.wikipedia.org/wiki/Mercury_(planet)" },
    difficulty: "beginner"
  },
  {
    text: "Which planet is known for its prominent ring system?",
    options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    correct: 2,
    hints: [
      "Sixth planet from the Sun",
      "Less dense than water",
      "Famous icy rings"
    ],
    explanation: "Saturn's spectacular rings, mostly ice and rock, span hundreds of thousands of kilometers but are only meters thick. All gas giants have rings, but Saturn's are by far the brightest. Cassini revealed extraordinary detail in their structure.",
    learnMoreLink: { text: "Read more about Saturn", url: "https://en.wikipedia.org/wiki/Saturn" },
    difficulty: "beginner"
  },
  {
    text: "Mars's distinctive red color is due to:",
    options: ["Liquid lava", "Iron oxide (rust) in the soil", "Reflection of the Sun", "Frozen oceans"],
    correct: 1,
    hints: [
      "Surface chemistry",
      "Common compound on Earth too",
      "Rust"
    ],
    explanation: "Iron oxide (rust) covers Mars's surface, giving it the reddish hue. Mars likely had more abundant water and oxygen in the past. Rovers like Perseverance study the soil for signs of ancient life.",
    learnMoreLink: { text: "Read more about Mars", url: "https://en.wikipedia.org/wiki/Mars" },
    difficulty: "beginner"
  },
  {
    text: "Earth's only natural satellite is:",
    options: ["The ISS", "The Moon", "Phobos", "Hubble"],
    correct: 1,
    hints: [
      "Lights the night sky",
      "About 384,000 km away",
      "Causes tides"
    ],
    explanation: "The Moon is Earth's only natural satellite, formed ~4.5 billion years ago likely from a giant impact. It causes tides and stabilizes Earth's axial tilt. Apollo missions returned 382 kg of lunar samples.",
    learnMoreLink: { text: "Read more about the Moon", url: "https://en.wikipedia.org/wiki/Moon" },
    difficulty: "beginner"
  },
  {
    text: "What is a star primarily composed of?",
    options: ["Iron and nickel", "Hydrogen and helium plasma", "Rock and ice", "Diamond"],
    correct: 1,
    hints: [
      "Lightest two elements",
      "Plasma state",
      "Fuel for fusion"
    ],
    explanation: "Stars are primarily hydrogen (~74%) and helium (~24%) plasma. Hydrogen fuses into helium in cores, powering luminosity. Heavier elements form in later evolutionary stages and supernovae.",
    learnMoreLink: { text: "Read more about stars", url: "https://en.wikipedia.org/wiki/Star" },
    difficulty: "beginner"
  },
  {
    text: "After a Sun-like star exhausts hydrogen, it becomes a:",
    options: ["Black hole", "White dwarf immediately", "Red giant", "Neutron star"],
    correct: 2,
    hints: [
      "Outer layers expand and cool",
      "Becomes much larger and redder",
      "Pre-white-dwarf phase"
    ],
    explanation: "Sun-like stars expand into red giants after core hydrogen depletion. They eventually shed outer layers as planetary nebulae, leaving white dwarfs. The Sun will become a red giant in ~5 billion years.",
    learnMoreLink: { text: "Read more about red giant", url: "https://en.wikipedia.org/wiki/Red_giant" },
    difficulty: "easy"
  },
  {
    text: "A star's color tells us about its:",
    options: ["Distance", "Surface temperature", "Magnetic field", "Age in years"],
    correct: 1,
    hints: [
      "Blue stars are hotter than red stars",
      "Wien's displacement law",
      "Hot objects emit shorter wavelengths"
    ],
    explanation: "Star color indicates surface temperature: blue ~30,000 K, red ~3,000 K. Hotter objects peak at shorter wavelengths via Wien's law. Astronomers classify stars (O, B, A, F, G, K, M) by spectral type.",
    learnMoreLink: { text: "Read more about stellar classification", url: "https://en.wikipedia.org/wiki/Stellar_classification" },
    difficulty: "easy"
  },
  {
    text: "A massive star (≥ 8 solar masses) ends its life as a:",
    options: ["Brown dwarf", "Planet", "Supernova explosion leaving a neutron star or black hole", "Comet"],
    correct: 2,
    hints: [
      "Catastrophic end",
      "Brilliant explosion",
      "Forms heavy elements"
    ],
    explanation: "Massive stars explode as supernovae, leaving behind neutron stars or black holes. The explosions seed galaxies with heavy elements. SN 1987A in the Large Magellanic Cloud was the closest recent supernova.",
    learnMoreLink: { text: "Read more about supernova", url: "https://en.wikipedia.org/wiki/Supernova" },
    difficulty: "hard"
  },
  {
    text: "Our galaxy is named the:",
    options: ["Andromeda Galaxy", "Milky Way", "Sombrero Galaxy", "Triangulum Galaxy"],
    correct: 1,
    hints: [
      "Visible as a band in dark skies",
      "Spiral galaxy",
      "Contains the Sun"
    ],
    explanation: "The Milky Way is our barred spiral galaxy, ~100,000 light-years across, containing 100-400 billion stars. Its central black hole, Sagittarius A*, has 4 million solar masses. Andromeda is its nearest large neighbor.",
    learnMoreLink: { text: "Read more about the Milky Way", url: "https://en.wikipedia.org/wiki/Milky_Way" },
    difficulty: "beginner"
  },
  {
    text: "The expansion of the universe was discovered by:",
    options: ["Galileo", "Newton", "Edwin Hubble", "Einstein"],
    correct: 2,
    hints: [
      "1929 observations",
      "Galaxies recede with redshift",
      "Telescope is named after him"
    ],
    explanation: "Edwin Hubble showed in 1929 that distant galaxies' redshifts grow with distance, implying cosmic expansion. This led to the Big Bang model. The Hubble Space Telescope honors his contributions.",
    learnMoreLink: { text: "Read more about Edwin Hubble", url: "https://en.wikipedia.org/wiki/Edwin_Hubble" },
    difficulty: "easy"
  },
  {
    text: "The cosmic microwave background is:",
    options: ["Light from the most distant galaxies", "The afterglow of the Big Bang", "Radio waves from pulsars", "Reflection from interstellar dust"],
    correct: 1,
    hints: [
      "Predicted before being detected",
      "Discovered accidentally in 1964",
      "About 2.7 K"
    ],
    explanation: "The CMB is leftover radiation from when the universe became transparent ~380,000 years after the Big Bang. Its near-perfect blackbody spectrum at 2.725 K supports the Big Bang model. WMAP and Planck mapped tiny fluctuations.",
    learnMoreLink: { text: "Read more about cosmic microwave background", url: "https://en.wikipedia.org/wiki/Cosmic_microwave_background" },
    difficulty: "medium"
  },
  {
    text: "Approximately how old is the universe?",
    options: ["6,000 years", "4.5 billion years", "13.8 billion years", "100 trillion years"],
    correct: 2,
    hints: [
      "Determined from Hubble constant and CMB",
      "Older than Earth and the Sun",
      "Around 14 billion"
    ],
    explanation: "Current best estimates put the universe's age at 13.8 billion years. Earth and the Sun are about 4.5 billion years old. Future telescopes will probe even earlier cosmic epochs.",
    learnMoreLink: { text: "Read more about the age of the universe", url: "https://en.wikipedia.org/wiki/Age_of_the_universe" },
    difficulty: "easy"
  },
  {
    text: "What is the event horizon of a black hole?",
    options: ["Its outer atmosphere", "The boundary beyond which nothing can escape, not even light", "A ring of orbiting matter", "The black hole's center"],
    correct: 1,
    hints: [
      "Point of no return",
      "Defines the visible 'edge' of a black hole",
      "Set by Schwarzschild radius"
    ],
    explanation: "The event horizon is the boundary at which escape velocity equals the speed of light — beyond it, nothing can escape. It defines the apparent size of a black hole. The 2019 EHT image showed this 'shadow' for M87*.",
    learnMoreLink: { text: "Read more about event horizon", url: "https://en.wikipedia.org/wiki/Event_horizon" },
    difficulty: "medium"
  },
  {
    text: "What is the Schwarzschild radius for a black hole with the mass of the Sun? (approximate)",
    options: ["3 m", "3 km", "3000 km", "3 million km"],
    correct: 1,
    hints: [
      "r_s = 2GM/c²",
      "For 1 solar mass it's a few kilometers",
      "Surprisingly small"
    ],
    explanation: "A solar-mass black hole's Schwarzschild radius is about 3 km. The same formula gives 9 mm for Earth's mass — if compressed that small, it would become a black hole. Most stellar black holes are ~10-30 km across.",
    learnMoreLink: { text: "Read more about Schwarzschild radius", url: "https://en.wikipedia.org/wiki/Schwarzschild_radius" },
    difficulty: "hard"
  },
  {
    text: "Hawking radiation predicts that black holes:",
    options: ["Grow forever", "Slowly evaporate over immense timescales", "Emit visible light continuously", "Are surrounded by stars"],
    correct: 1,
    hints: [
      "Quantum effect at the event horizon",
      "Smaller black holes evaporate faster",
      "Predicted by Stephen Hawking in 1974"
    ],
    explanation: "Hawking showed black holes emit thermal radiation due to quantum effects near the horizon, slowly losing mass. Stellar black holes evaporate over ~10⁶⁷ years — far longer than the universe's age. It hasn't been directly observed yet.",
    learnMoreLink: { text: "Read more about Hawking radiation", url: "https://en.wikipedia.org/wiki/Hawking_radiation" },
    difficulty: "hard"
  },
  {
    text: "Tidal forces near a black hole would:",
    options: ["Stretch objects vertically and compress horizontally — 'spaghettification'", "Make objects expand uniformly", "Have no effect", "Speed up time"],
    correct: 0,
    hints: [
      "Difference in gravity between near and far ends",
      "Strong gradient stretches objects",
      "Spaghettification"
    ],
    explanation: "Strong gravitational gradients stretch in-falling objects vertically and compress them sideways, called spaghettification. The effect is stronger near small black holes. Supermassive black holes have gentler tidal forces at the horizon.",
    learnMoreLink: { text: "Read more about spaghettification", url: "https://en.wikipedia.org/wiki/Spaghettification" },
    difficulty: "medium"
  },
  {
    text: "Time dilation near a black hole means that for an outside observer, a clock falling toward the event horizon appears to:",
    options: ["Tick faster", "Tick slower and freeze near the horizon", "Run backwards", "Stop instantly"],
    correct: 1,
    hints: [
      "Strong gravity slows time",
      "From outside, infalling object never crosses horizon visually",
      "General relativity prediction"
    ],
    explanation: "Strong gravity dilates time: distant observers see infalling clocks tick slower and approach but never visibly cross the horizon. The infalling observer experiences ordinary time. GPS satellites correct for similar gravitational time dilation.",
    learnMoreLink: { text: "Read more about gravitational time dilation", url: "https://en.wikipedia.org/wiki/Gravitational_time_dilation" },
    difficulty: "hard"
  },
  {
    text: "Supermassive black holes are typically found:",
    options: ["Wandering between galaxies", "At the centers of galaxies", "Inside stars", "Only in dwarf galaxies"],
    correct: 1,
    hints: [
      "Gravitational anchor of a galaxy",
      "Sagittarius A* is one example",
      "Galactic center"
    ],
    explanation: "Most galaxies host supermassive black holes (millions to billions of solar masses) at their centers. The Milky Way's is Sagittarius A* at 4 million solar masses. The first imaged was M87*'s 6.5-billion-solar-mass black hole.",
    learnMoreLink: { text: "Read more about supermassive black holes", url: "https://en.wikipedia.org/wiki/Supermassive_black_hole" },
    difficulty: "easy"
  },
  {
    type: "simulation",
    height: 9.8,
    text: "A ball is dropped from rest off a 9.8 m space station maintenance deck (g = 9.8 m/s²). Choose a mass, enter your predicted fall time, then run the simulation.",
    hints: [
      "Mass doesn't affect fall time in vacuum",
      "Use t = √(2h/g)",
      "t = √(2 × 9.8 / 9.8) = √2 ≈ 1.41 s"
    ],
    explanation: "t = √(2h/g) = √2 ≈ 1.41 s. All masses fall at the same rate without air resistance — Galileo demonstrated this. Astronauts use vacuum chambers to test this principle on Earth.",
    learnMoreLink: { text: "Read more about free fall", url: "https://en.wikipedia.org/wiki/Free_fall" },
    difficulty: "beginner"
  },
  {
    type: "simulation",
    height: 122.5,
    text: "A wrench is dropped from rest off a 122.5 m sci-fi launch tower (g = 9.8 m/s²). Choose a mass, enter your predicted fall time, then run the simulation.",
    hints: [
      "Use t = √(2h/g)",
      "Plug in 122.5 and 9.8",
      "t = √(25) = 5 s"
    ],
    explanation: "t = √(2 × 122.5 / 9.8) = √25 = 5 s. The same formula works for any drop height. Real launch tower workers use safety lanyards because of how quickly objects accelerate.",
    learnMoreLink: { text: "Read more about free fall", url: "https://en.wikipedia.org/wiki/Free_fall" },
    difficulty: "medium"
  },
  {
    type: "simulation",
    height: 490,
    text: "A test capsule is dropped from rest off a 490 m space elevator scaffold (g = 9.8 m/s²). Choose a mass, enter your predicted fall time, then run the simulation.",
    hints: [
      "Use t = √(2h/g)",
      "2 × 490 / 9.8 = 100",
      "t = √100 = 10 s"
    ],
    explanation: "t = √(2 × 490 / 9.8) = √100 = 10 s. Real space elevators would use careful drop systems for cargo. Air resistance becomes significant at high speeds, capping terminal velocity for falling objects.",
    learnMoreLink: { text: "Read more about free fall", url: "https://en.wikipedia.org/wiki/Free_fall" },
    difficulty: "hard"
  },
  {
    text: "Rockets work by:",
    options: ["Pushing against air", "Newton's third law — expelling mass backward to push the rocket forward", "Reducing weight", "Magnetic levitation"],
    correct: 1,
    hints: [
      "Action and reaction",
      "Works in vacuum",
      "Conservation of momentum"
    ],
    explanation: "Rockets eject mass at high speed; by Newton's third law (or momentum conservation), the rocket gains opposite momentum. They work in space where there's no air to push against. Modern launchers use cryogenic propellants for high specific impulse.",
    learnMoreLink: { text: "Read more about rocket propulsion", url: "https://en.wikipedia.org/wiki/Rocket" },
    difficulty: "beginner"
  },
  {
    text: "The Tsiolkovsky rocket equation relates Δv to:",
    options: ["Distance traveled", "Exhaust velocity and mass ratio", "Engine temperature", "Launch latitude"],
    correct: 1,
    hints: [
      "Δv = v_e × ln(m_0/m_f)",
      "Logarithmic dependence",
      "Big mass ratios needed"
    ],
    explanation: "Δv = v_e ln(m_0/m_f), showing how change in velocity depends on exhaust velocity and propellant ratio. Reaching orbit requires Δv ~9 km/s, hence enormous fuel loads. Multistage rockets shed mass to reach high Δv.",
    learnMoreLink: { text: "Read more about Tsiolkovsky rocket equation", url: "https://en.wikipedia.org/wiki/Tsiolkovsky_rocket_equation" },
    difficulty: "hard"
  },
  {
    text: "What is the approximate orbital speed for low Earth orbit?",
    options: ["3 m/s", "300 m/s", "7.8 km/s", "300 km/s"],
    correct: 2,
    hints: [
      "Roughly 28,000 km/h",
      "ISS travels around Earth in 90 minutes",
      "Almost 8 km/s"
    ],
    explanation: "Low Earth orbit requires ~7.8 km/s tangential velocity. Slower means falling back; faster means higher orbit. The ISS circles Earth every ~90 minutes at this speed.",
    learnMoreLink: { text: "Read more about low Earth orbit", url: "https://en.wikipedia.org/wiki/Low_Earth_orbit" },
    difficulty: "medium"
  },
  {
    text: "Atmospheric re-entry produces extreme heat because:",
    options: ["The spacecraft is on fire", "Compression of air ahead of the vehicle generates heat", "Magnetic field induction", "Cosmic rays"],
    correct: 1,
    hints: [
      "Hypersonic speeds compress air",
      "Air heats up dramatically",
      "Most heat is from compression, not friction"
    ],
    explanation: "At hypersonic re-entry speeds, the air ahead of the spacecraft compresses adiabatically to thousands of degrees. Heat shields ablate or radiate this energy away. The Apollo and Space Shuttle programs developed advanced thermal protection systems.",
    learnMoreLink: { text: "Read more about atmospheric entry", url: "https://en.wikipedia.org/wiki/Atmospheric_entry" },
    difficulty: "hard"
  },
  {
    text: "Why do astronauts experience muscle and bone loss in space?",
    options: ["Space radiation", "Microgravity reduces mechanical loading on the body", "Low oxygen", "Cold temperatures"],
    correct: 1,
    hints: [
      "Bones and muscles need stress to stay strong",
      "Microgravity removes weight",
      "Astronauts must exercise daily"
    ],
    explanation: "In microgravity, bones and muscles aren't loaded as on Earth, so they atrophy. Astronauts exercise 2+ hours daily and use resistive devices to mitigate loss. Long-duration missions like to Mars must address this challenge.",
    learnMoreLink: { text: "Read more about effects of spaceflight on the human body", url: "https://en.wikipedia.org/wiki/Effect_of_spaceflight_on_the_human_body" },
    difficulty: "medium"
  },
  {
    text: "Escape velocity from Earth's surface (ignoring atmosphere) is approximately:",
    options: ["1.1 km/s", "7.9 km/s", "11.2 km/s", "30 km/s"],
    correct: 2,
    hints: [
      "Greater than orbital velocity",
      "v = √(2GM/R)",
      "About 11 km/s"
    ],
    explanation: "Earth's escape velocity is about 11.2 km/s. At this speed an object can escape Earth's gravity without further propulsion. Voyager probes exceeded solar system escape velocity using gravity assists.",
    learnMoreLink: { text: "Read more about escape velocity", url: "https://en.wikipedia.org/wiki/Escape_velocity" },
    difficulty: "easy"
  },
  {
    text: "A gravity assist (slingshot) maneuver allows a spacecraft to:",
    options: ["Avoid all fuel use", "Gain or lose speed by interacting with a planet's motion around the Sun", "Travel faster than light", "Generate antigravity"],
    correct: 1,
    hints: [
      "Used by Voyager and Cassini",
      "Conservation of energy in solar reference frame",
      "Steals or donates kinetic energy via planet"
    ],
    explanation: "A spacecraft can exchange momentum with a moving planet, gaining (or losing) speed in the Sun's reference frame. Voyager 1 and 2 used multiple flybys to reach the outer solar system. The maneuver dramatically reduces fuel needs for deep-space missions.",
    learnMoreLink: { text: "Read more about gravity assist", url: "https://en.wikipedia.org/wiki/Gravity_assist" },
    difficulty: "hard"
  },
  {
    text: "What is the main hazard of cosmic radiation for astronauts on long missions?",
    options: ["Sound waves", "Increased cancer risk and cell damage from high-energy particles", "Excessive light exposure", "Magnetic interference"],
    correct: 1,
    hints: [
      "Includes solar particles and galactic cosmic rays",
      "Damages DNA",
      "Long-term mission risk"
    ],
    explanation: "Cosmic rays and solar particles damage DNA and increase cancer risk over long missions. Earth's magnetic field and atmosphere shield us, but Mars trips offer little natural protection. Mission designers explore shielding and active magnetic deflection.",
    learnMoreLink: { text: "Read more about space radiation", url: "https://en.wikipedia.org/wiki/Health_threat_from_cosmic_rays" },
    difficulty: "medium"
  },
  {
    text: "What is specific impulse (Isp) in rocketry?",
    options: ["Total impulse divided by propellant weight, measured in seconds", "Engine power", "Thrust at launch", "Time to reach orbit"],
    correct: 0,
    hints: [
      "Higher Isp = more efficient rocket",
      "Measured in seconds",
      "Chemical rockets reach 300-450 s"
    ],
    explanation: "Specific impulse measures rocket efficiency: thrust per unit propellant weight flow, given in seconds. Higher Isp means more push per kilogram of fuel. Ion engines reach 3000+ seconds but provide tiny thrust.",
    learnMoreLink: { text: "Read more about specific impulse", url: "https://en.wikipedia.org/wiki/Specific_impulse" },
    difficulty: "hard"
  },
  {
    text: "What is the moon's role in Earth's tides?",
    options: ["It heats the oceans", "Its gravity creates tidal bulges in Earth's oceans", "It absorbs water", "It electrifies the water"],
    correct: 1,
    hints: [
      "Gravitational pull on the near and far sides",
      "Two high tides per day",
      "Sun also contributes"
    ],
    explanation: "The Moon's gravity raises tidal bulges on both near and far sides of Earth, producing two daily high tides. The Sun contributes ~46% as much. Spring tides occur at new and full moon when Sun and Moon align.",
    learnMoreLink: { text: "Read more about tides", url: "https://en.wikipedia.org/wiki/Tide" },
    difficulty: "medium"
  },
  {
    text: "Which planet rotates on its side, with an axis tilted ~98°?",
    options: ["Mars", "Saturn", "Uranus", "Neptune"],
    correct: 2,
    hints: [
      "Pale blue-green ice giant",
      "Likely tilted by a giant impact",
      "Has extreme seasons"
    ],
    explanation: "Uranus has a 98° axial tilt, essentially rolling along its orbit. This causes 42-year-long polar nights and days. The tilt likely resulted from a massive collision early in its history.",
    learnMoreLink: { text: "Read more about Uranus", url: "https://en.wikipedia.org/wiki/Uranus" },
    difficulty: "medium"
  },
  {
    text: "Pluto is now classified as a:",
    options: ["Planet", "Dwarf planet", "Asteroid", "Comet"],
    correct: 1,
    hints: [
      "Reclassified in 2006",
      "Hasn't cleared its orbit",
      "Resides in Kuiper Belt"
    ],
    explanation: "The IAU reclassified Pluto as a dwarf planet in 2006 because it hasn't cleared its orbital neighborhood. New Horizons revealed it as a complex world with mountains and a heart-shaped plain. There are several other known dwarf planets like Eris and Makemake.",
    learnMoreLink: { text: "Read more about Pluto", url: "https://en.wikipedia.org/wiki/Pluto" },
    difficulty: "beginner"
  },
  {
    text: "Stars produce energy through fusion mainly involving:",
    options: ["Hydrogen and helium", "Iron and uranium", "Carbon and oxygen only", "Photons and neutrons"],
    correct: 0,
    hints: [
      "Lightest elements",
      "Proton-proton chain in low-mass stars",
      "CNO cycle in massive stars"
    ],
    explanation: "Most stars fuse hydrogen into helium via the proton-proton chain or CNO cycle. As stars age, heavier elements fuse in shells. Iron is the heaviest element produced exothermically — heavier elements need supernovae or neutron star mergers.",
    learnMoreLink: { text: "Read more about stellar nucleosynthesis", url: "https://en.wikipedia.org/wiki/Stellar_nucleosynthesis" },
    difficulty: "easy"
  },
  {
    text: "How many planets are in our solar system?",
    options: ["7", "8", "9", "12"],
    correct: 1,
    hints: [
      "After Pluto's reclassification",
      "Mercury through Neptune",
      "Even number"
    ],
    explanation: "Eight planets orbit the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006. Several more dwarf planets exist in the outer solar system.",
    learnMoreLink: { text: "Read more about the solar system", url: "https://en.wikipedia.org/wiki/Solar_System" },
    difficulty: "beginner"
  },
  {
    text: "The largest moon in our solar system is:",
    options: ["The Moon", "Titan", "Ganymede", "Europa"],
    correct: 2,
    hints: [
      "Orbits Jupiter",
      "Larger than Mercury",
      "Has its own magnetic field"
    ],
    explanation: "Ganymede, a moon of Jupiter, is the largest moon in the solar system, even bigger than Mercury. It has a subsurface ocean and its own magnetosphere. ESA's JUICE mission will study it in detail.",
    learnMoreLink: { text: "Read more about Ganymede", url: "https://en.wikipedia.org/wiki/Ganymede_(moon)" },
    difficulty: "easy"
  },
  {
    text: "What is dark matter?",
    options: ["Black holes", "Invisible matter that gravitationally affects galaxies but doesn't emit light", "Empty space", "Antimatter"],
    correct: 1,
    hints: [
      "Doesn't interact with light",
      "Inferred from galaxy rotation curves",
      "Five times more abundant than ordinary matter"
    ],
    explanation: "Dark matter is non-luminous matter detected through gravity, especially in galaxy rotation curves and gravitational lensing. It outweighs ordinary matter ~5:1. Its identity remains one of physics's biggest mysteries.",
    learnMoreLink: { text: "Read more about dark matter", url: "https://en.wikipedia.org/wiki/Dark_matter" },
    difficulty: "medium"
  },
  {
    text: "Dark energy is responsible for:",
    options: ["Holding galaxies together", "The accelerated expansion of the universe", "The Big Bang", "Moon tides"],
    correct: 1,
    hints: [
      "Discovered in 1998 from supernova observations",
      "Repulsive on cosmic scales",
      "Makes up ~68% of the universe"
    ],
    explanation: "Dark energy drives the accelerating expansion of the universe, accounting for ~68% of cosmic content. Its nature is unknown — possibly Einstein's cosmological constant. The 2011 Nobel Prize honored its discovery.",
    learnMoreLink: { text: "Read more about dark energy", url: "https://en.wikipedia.org/wiki/Dark_energy" },
    difficulty: "hard"
  },
  {
    text: "A nebula is:",
    options: ["A type of star", "A cloud of gas and dust in space, often a stellar nursery", "A small galaxy", "A black hole"],
    correct: 1,
    hints: [
      "Stars often form here",
      "The Pillars of Creation are an example",
      "Vast clouds"
    ],
    explanation: "Nebulae are interstellar clouds of gas and dust where stars often form. Famous examples include the Orion Nebula and Pillars of Creation. Hubble and JWST have produced spectacular images of them.",
    learnMoreLink: { text: "Read more about nebulae", url: "https://en.wikipedia.org/wiki/Nebula" },
    difficulty: "beginner"
  },
  {
    text: "Why does the Sun appear to rise in the east?",
    options: ["The Sun moves west to east around Earth", "Earth rotates from west to east, so the Sun appears to move east to west across the sky", "Earth's tilt causes it", "Air refraction"],
    correct: 1,
    hints: [
      "Earth's rotation",
      "Direction of spin",
      "West-to-east rotation"
    ],
    explanation: "Earth rotates eastward, so celestial objects appear to rise in the east and set in the west. This 24-hour rotation defines the solar day. Polaris remains nearly stationary because it's near the rotation axis.",
    learnMoreLink: { text: "Read more about Earth's rotation", url: "https://en.wikipedia.org/wiki/Earth%27s_rotation" },
    difficulty: "easy"
  },
  {
    text: "On Mars (g ≈ 3.7 m/s²), how would your weight compare to Earth?",
    options: ["The same", "About 1/3 of Earth weight", "About 3× Earth weight", "Zero"],
    correct: 1,
    hints: [
      "Weight = mg",
      "g_Mars/g_Earth ≈ 0.38",
      "Roughly a third"
    ],
    explanation: "Weight is mass × local gravity. With g ≈ 3.7 m/s² (~38% of Earth's), you'd weigh about 1/3. Future Mars colonists would need exercise routines to maintain bone and muscle, similar to ISS astronauts.",
    learnMoreLink: { text: "Read more about gravity of Mars", url: "https://en.wikipedia.org/wiki/Gravity_of_Mars" },
    difficulty: "beginner"
  }
];
