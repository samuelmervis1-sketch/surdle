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
    difficulty: "easy"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "easy"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "hard"
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
    difficulty: "medium"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "easy"
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
    difficulty: "medium"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
  },

  // --- Simulation questions ---
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
    difficulty: "hard"
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
];
