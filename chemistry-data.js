const CHEMISTRY_QUESTIONS = [
  {
    text: "How many protons does a carbon atom have?",
    options: ["2", "4", "6", "8"],
    correct: 2,
    difficulty: "beginner",
    explanation: "The atomic number defines an element — carbon is always 6 protons, nothing more and nothing less. Add a proton and you get nitrogen (7); remove one and you have boron (5). Every carbon atom in your body, in diamonds, and in the CO₂ you exhale shares this same fundamental property.",
    hints: [
      "Think about where carbon sits in the periodic table — which group and period?",
      "The atomic number of an element directly tells you how many protons it has.",
      "Carbon is element number 6 on the periodic table — its atomic number is 6."
    ],
    learnMoreLink: { text: "Read more about atomic number", url: "https://en.wikipedia.org/wiki/Atomic_number" },
  },
  {
    text: "What is the chemical formula for water?",
    options: ["H₂O₂", "HO", "H₂O", "H₃O"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Water is H₂O because oxygen has two unpaired electrons that each bond with one hydrogen atom. This precise 2:1 ratio is fixed by the atomic structure and cannot vary. Changing the ratio gives a completely different substance: H₂O₂ is hydrogen peroxide — a powerful bleach and disinfectant used in wound care and hair colouring.",
    hints: [
      "Water is made of hydrogen and oxygen atoms bonded together.",
      "Think about the valency of hydrogen (1) and oxygen (2) and how they satisfy each other.",
      "One oxygen atom bonds with exactly two hydrogen atoms to fill its outer shell."
    ],
    learnMoreLink: { text: "Read more about the water molecule", url: "https://en.wikipedia.org/wiki/Water" },
  },
  {
    text: "What type of bond forms between sodium (Na) and chlorine (Cl) in NaCl?",
    options: ["Covalent", "Metallic", "Hydrogen", "Ionic"],
    correct: 3,
    difficulty: "easy",
    explanation: "Ionic bonds form when a metal (which easily loses electrons) reacts with a non-metal (which avidly gains them). Sodium donates one electron to chlorine, creating oppositely charged ions that attract each other strongly. Table salt's high melting point (801°C), crystalline structure, and ability to conduct electricity when dissolved all result directly from this ionic bonding.",
    hints: [
      "Consider the large difference in electronegativity between a metal and a non-metal.",
      "When atoms have very different electronegativities, electrons are transferred rather than shared.",
      "Na donates one electron to Cl, forming Na⁺ and Cl⁻ ions held together by electrostatic attraction."
    ],
    learnMoreLink: { text: "Read more about ionic bonds", url: "https://en.wikipedia.org/wiki/Ionic_bonding" },
  },
  {
    text: "The atomic number of an element equals its number of:",
    options: ["Neutrons", "Protons", "Electrons + neutrons", "Nucleons"],
    correct: 1,
    difficulty: "beginner",
    explanation: "The atomic number counts protons in the nucleus, and protons determine an element's identity and chemical behaviour. In a neutral atom, the proton count is balanced by an equal number of electrons. If the proton count changes — through a nuclear reaction — you get an entirely different element, which is what happens in radioactive decay.",
    hints: [
      "Atomic number is the defining property of an element — changing it changes the element itself.",
      "Think about which subatomic particle determines which element an atom is.",
      "The atomic number counts only the protons in the nucleus — it never changes for a given element."
    ],
    learnMoreLink: { text: "Read more about atomic number", url: "https://en.wikipedia.org/wiki/Atomic_number" },
  },
  {
    text: "What gas is produced when zinc metal reacts with hydrochloric acid?",
    options: ["Oxygen", "Chlorine", "Carbon dioxide", "Hydrogen"],
    correct: 3,
    difficulty: "medium",
    explanation: "Reactive metals sit above hydrogen in the activity series and can displace it from acids. Zinc takes electrons from hydrogen ions in HCl, releasing H₂ gas (which burns with a 'squeaky pop'). This reaction was historically used to generate hydrogen for balloons before large-scale industrial methods became available.",
    hints: [
      "When a metal reacts with an acid, it is a single displacement reaction.",
      "Think about what the metal displaces from the acid — look at what's in HCl.",
      "Zn + 2HCl → ZnCl₂ + H₂. Zinc displaces hydrogen from the acid, releasing hydrogen gas."
    ],
    learnMoreLink: { text: "Read more about single displacement reactions", url: "https://en.wikipedia.org/wiki/Single-displacement_reaction" },
  },
  {
    text: "What is the pH of a neutral solution at 25°C?",
    options: ["0", "14", "7", "1"],
    correct: 2,
    difficulty: "beginner",
    explanation: "The pH scale measures hydrogen ion concentration on a logarithmic scale — each unit represents a tenfold change. Pure water at 25°C dissociates equally into H⁺ and OH⁻, giving exactly pH 7. Lemon juice at pH 2 is 100,000 times more acidic than pure water, while bleach at pH 12 is 100,000 times more alkaline.",
    hints: [
      "The pH scale runs from 0 (most acidic) to 14 (most alkaline).",
      "A neutral solution is neither acidic nor alkaline — think about the midpoint of the scale.",
      "Pure water at 25°C has equal H⁺ and OH⁻ concentrations, placing it exactly at pH 7."
    ],
    learnMoreLink: { text: "Read more about the pH scale", url: "https://en.wikipedia.org/wiki/PH" },
  },
  {
    text: "How many electrons can the first electron shell hold?",
    options: ["8", "2", "18", "32"],
    correct: 1,
    difficulty: "easy",
    explanation: "Electron shells have strict capacity limits set by quantum mechanics. The first shell contains only one orbital (1s) which holds exactly 2 electrons. This is why helium, with 2 electrons, is a noble gas — its first (and only) shell is completely full, giving it no tendency to gain or lose electrons and making it the most chemically inert element.",
    hints: [
      "Electron shells fill in a set order, with the first shell closest to the nucleus.",
      "The first shell is the smallest and most restricted — it only contains one orbital.",
      "The first shell (n=1) holds only the 1s orbital, which fits a maximum of 2 electrons."
    ],
    learnMoreLink: { text: "Read more about electron shells", url: "https://en.wikipedia.org/wiki/Electron_shell" },
  },
  {
    text: "What is Avogadro's number (approximately)?",
    options: ["3.14 × 10²³", "6.02 × 10²³", "9.11 × 10²³", "1.66 × 10²³"],
    correct: 1,
    difficulty: "easy",
    explanation: "Avogadro's number defines the mole — chemistry's counting unit for atoms and molecules. Just as a dozen always means 12, one mole always contains 6.02 × 10²³ particles. This enormous number reflects how tiny atoms are: one mole of hydrogen atoms weighs just 1 gram, yet contains more particles than there are stars in the observable universe.",
    hints: [
      "Avogadro's number defines how many particles are in one mole of a substance.",
      "It's a huge number because atoms are incredibly small.",
      "Avogadro's constant is approximately 6.02 × 10²³ particles per mole."
    ],
    learnMoreLink: { text: "Read more about Avogadro's number", url: "https://en.wikipedia.org/wiki/Avogadro_constant" },
  },
  {
    text: "What are the products of burning methane (CH₄) in excess oxygen?",
    options: ["CO and H₂", "CO₂ and H₂O", "C and H₂O", "CO₂ and H₂"],
    correct: 1,
    difficulty: "medium",
    explanation: "Complete combustion fully oxidises all carbon to CO₂ and all hydrogen to H₂O, releasing maximum energy. Methane is the main component of natural gas used in cooking and heating. When oxygen is insufficient, incomplete combustion produces toxic carbon monoxide (CO) instead — which is why proper ventilation is critical whenever gas appliances are used indoors.",
    hints: [
      "Combustion reacts a fuel with oxygen — methane is a hydrocarbon (contains C and H).",
      "Complete combustion fully oxidises both the carbon and the hydrogen in the fuel.",
      "Carbon → CO₂ and hydrogen → H₂O. The balanced equation is CH₄ + 2O₂ → CO₂ + 2H₂O."
    ],
    learnMoreLink: { text: "Read more about combustion reactions", url: "https://en.wikipedia.org/wiki/Combustion" },
  },
  {
    text: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Nitrogen", "Chlorine", "Fluorine"],
    correct: 3,
    difficulty: "beginner",
    explanation: "Electronegativity measures how strongly an atom attracts bonding electrons. Fluorine tops the list because it has the smallest atomic radius in its period and a high nuclear charge, pulling bonding electrons tightly. This extreme electronegativity makes fluorine useful in non-stick coatings (Teflon), toothpaste fluorides that strengthen tooth enamel, and many pharmaceuticals.",
    hints: [
      "Electronegativity increases as you go across a period (left to right) and up a group.",
      "Think about which corner of the periodic table has the highest electronegativity (excluding noble gases).",
      "Fluorine, in period 2 group 17, sits in the top-right and is the most electronegative element."
    ],
    learnMoreLink: { text: "Read more about electronegativity", url: "https://en.wikipedia.org/wiki/Electronegativity" },
  },
  {
    text: "What is the molecular formula for glucose?",
    options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₂O", "C₆H₁₀O₅"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Glucose is the primary fuel for cells and the product of photosynthesis. Its formula C₆H₁₂O₆ is typical of carbohydrates, where hydrogen-to-oxygen is always 2:1. When you eat starchy foods, digestive enzymes break long starch chains into individual glucose molecules that enter your bloodstream — your blood sugar level is literally the concentration of glucose in your blood.",
    hints: [
      "Glucose is a simple sugar — a monosaccharide that contains carbon, hydrogen, and oxygen.",
      "The number of carbon atoms in glucose is 6 — this is a key feature of hexose sugars.",
      "Glucose has the formula C₆H₁₂O₆ — 6 carbons, 12 hydrogens, 6 oxygens."
    ],
    learnMoreLink: { text: "Read more about glucose", url: "https://en.wikipedia.org/wiki/Glucose" },
  },
  {
    text: "How many covalent bonds does carbon typically form?",
    options: ["2", "6", "4", "1"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Carbon's 4 valence electrons let it form 4 covalent bonds, giving it unmatched versatility — it can bond to itself in chains, rings, and 3D structures. This is why life is carbon-based: carbon forms the backbone of proteins, DNA, fats, and carbohydrates. Silicon, directly below carbon in the periodic table, is too large to form the same diversity of stable structures.",
    hints: [
      "The number of bonds an atom forms relates to its valence electrons and the octet rule.",
      "Carbon is in group 14, meaning it has 4 valence electrons.",
      "Carbon needs 4 more electrons to complete its outer shell, so it forms 4 covalent bonds."
    ],
    learnMoreLink: { text: "Read more about carbon bonding", url: "https://en.wikipedia.org/wiki/Carbon" },
  },
  {
    text: "Which subatomic particle has no electric charge?",
    options: ["Proton", "Electron", "Neutron", "Positron"],
    correct: 2,
    difficulty: "easy",
    explanation: "Neutrons in the nucleus have nearly the same mass as protons but carry no charge. They help hold the nucleus together through the strong nuclear force and contribute to atomic mass. Adding neutrons without changing protons creates isotopes — carbon-12 and carbon-14 are both carbon but with different neutron counts, and carbon-14's radioactivity is used in archaeological dating.",
    hints: [
      "There are three main subatomic particles — one positive, one negative, one neutral.",
      "Think about which particle is found in the nucleus alongside the proton.",
      "The neutron lives in the nucleus but carries no charge — its name even hints at neutrality."
    ],
    learnMoreLink: { text: "Read more about neutrons", url: "https://en.wikipedia.org/wiki/Neutron" },
  },
  {
    text: "What type of reaction is: A + BC → AC + B?",
    options: ["Combustion", "Double displacement", "Decomposition", "Single displacement"],
    correct: 3,
    difficulty: "medium",
    explanation: "In a single displacement reaction, a more reactive element 'kicks out' a less reactive one from its compound. The activity series predicts which displacements can happen — only a more reactive element can displace a less reactive one. A vivid real-world example: placing an iron nail in copper sulfate solution turns the nail copper-coloured as iron displaces copper from the solution.",
    hints: [
      "Look at how many elements or compounds are on each side and what changes.",
      "One element (A) is replacing another element (B) in a compound — count the participants.",
      "A single element swaps into a compound, displacing another element — this is single displacement."
    ],
    learnMoreLink: { text: "Read more about displacement reactions", url: "https://en.wikipedia.org/wiki/Single-displacement_reaction" },
  },
  {
    text: "How many valence electrons does oxygen have?",
    options: ["2", "4", "6", "8"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Oxygen has 6 valence electrons and needs 2 more to reach a stable full outer shell — which is why it almost always forms exactly 2 bonds. This eagerness to gain 2 electrons makes oxygen highly reactive and a powerful oxidising agent. Nearly all energy-releasing reactions in living organisms — from respiration to burning — involve oxygen accepting electrons from other substances.",
    hints: [
      "Valence electrons are the electrons in the outermost shell of an atom.",
      "Look at oxygen's group number in the periodic table — it tells you the valence electron count.",
      "Oxygen is in group 16, so it has 6 valence electrons (and needs 2 more to fill its outer shell)."
    ],
    learnMoreLink: { text: "Read more about valence electrons", url: "https://en.wikipedia.org/wiki/Valence_electron" },
  },
  {
    text: "What is the approximate molar mass of NaCl? (Na = 23, Cl = 35.5)",
    options: ["23 g/mol", "35.5 g/mol", "58.5 g/mol", "46 g/mol"],
    correct: 2,
    difficulty: "easy",
    explanation: "Molar mass is the sum of atomic masses of all atoms in a formula unit — simple addition for NaCl. One mole of table salt (58.5 g, about a tablespoon) contains 6.02 × 10²³ NaCl formula units. Chemists use molar mass to scale up reactions: if a recipe calls for 1 mole of NaCl, you weigh out 58.5 g.",
    hints: [
      "Molar mass is calculated by adding the atomic masses of all atoms in the formula.",
      "NaCl contains exactly one sodium atom and one chlorine atom.",
      "Add the atomic masses: 23 (Na) + 35.5 (Cl) = 58.5 g/mol."
    ],
    learnMoreLink: { text: "Read more about molar mass", url: "https://en.wikipedia.org/wiki/Molar_mass" },
  },
  {
    text: "Which of these is classified as a strong acid?",
    options: ["Acetic acid (CH₃COOH)", "Hydrochloric acid (HCl)", "Carbonic acid (H₂CO₃)", "Citric acid"],
    correct: 1,
    difficulty: "easy",
    explanation: "Strong acids completely ionise in water — every HCl molecule splits into H⁺ and Cl⁻ with no molecules remaining intact. Weak acids like acetic acid (vinegar) only partially ionise, so most molecules stay undissociated. Despite its strength, hydrochloric acid is produced in your own stomach at around pH 1.5 to digest food and kill swallowed bacteria.",
    hints: [
      "Strong acids fully dissociate into ions in water; weak acids only partially dissociate.",
      "Think about which option is a mineral (inorganic) acid rather than an organic acid.",
      "HCl is hydrochloric acid — it completely ionises in water: HCl → H⁺ + Cl⁻."
    ],
    learnMoreLink: { text: "Read more about strong and weak acids", url: "https://en.wikipedia.org/wiki/Acid" },
  },
  {
    text: "An element in Period 3, Group 1 of the periodic table is:",
    options: ["Lithium", "Sodium", "Potassium", "Caesium"],
    correct: 1,
    difficulty: "easy",
    explanation: "Periods indicate the number of electron shells, and groups indicate the number of valence electrons. Sodium (Na) has one valence electron (Group 1) spread across three shells (Period 3). Its single outer electron is so weakly held that sodium reacts violently with water, releasing enough energy to ignite the hydrogen gas produced — a dramatic demonstration in school chemistry labs.",
    hints: [
      "The periodic table is organised into periods (horizontal rows) and groups (vertical columns).",
      "Group 1 elements are the alkali metals. Period 3 is the third row of the table.",
      "Counting down group 1: H (P1), Li (P2), Na (P3) — sodium is in period 3, group 1."
    ],
    learnMoreLink: { text: "Read more about sodium", url: "https://en.wikipedia.org/wiki/Sodium" },
  },
  {
    text: "Isotopes of the same element differ in their number of:",
    options: ["Protons", "Electrons", "Neutrons", "Protons and electrons"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Isotopes are atoms of the same element with different neutron numbers — identical chemistry, different masses. Carbon-12 (6 neutrons) and carbon-14 (8 neutrons) both behave identically in chemical reactions, but carbon-14 is radioactive and decays slowly over thousands of years. Archaeologists use this decay rate in radiocarbon dating to determine the age of organic materials up to ~50,000 years old.",
    hints: [
      "Isotopes are different forms of the same element — something must stay the same.",
      "Since they're the same element, the number of protons (and electrons) is identical.",
      "Isotopes have the same proton count but different numbers of neutrons, giving different mass numbers."
    ],
    learnMoreLink: { text: "Read more about isotopes", url: "https://en.wikipedia.org/wiki/Isotope" },
  },
  {
    text: "What is the boiling point of water at standard atmospheric pressure?",
    options: ["0°C", "37°C", "100°C", "373°C"],
    correct: 2,
    difficulty: "easy",
    explanation: "Water boils when its vapour pressure equals atmospheric pressure — at sea level this is exactly 100°C. At higher altitudes, lower air pressure means water boils below 100°C, so food takes longer to cook. The Celsius scale was originally defined using water: 0° at the freezing point and 100° at the boiling point, making these values fundamental by design.",
    hints: [
      "The boiling point is where liquid water transitions to water vapour.",
      "This is one of the most fundamental constants in chemistry and everyday life.",
      "Water boils at exactly 100°C (373 K) at 1 atmosphere of pressure."
    ],
    learnMoreLink: { text: "Read more about boiling point", url: "https://en.wikipedia.org/wiki/Boiling_point" },
  },
  {
    text: "What is the oxidation state of oxygen in most compounds?",
    options: ["+2", "0", "−2", "+1"],
    correct: 2,
    difficulty: "easy",
    explanation: "Oxygen's oxidation state of −2 reflects its tendency to pull 2 electrons toward itself from less electronegative atoms. This means any element bonded to oxygen is 'oxidised' — giving electron density away. Iron rusting is iron being oxidised by oxygen: Fe loses electrons (oxidation state rises) while O gains them (reduction), which is why rust prevention is so important in construction.",
    hints: [
      "Oxygen is highly electronegative, so it tends to attract electrons toward itself.",
      "Think about how many electrons oxygen gains when it forms bonds in water (H₂O).",
      "In most compounds, oxygen has an oxidation state of −2 (exceptions include peroxides and OF₂)."
    ],
    learnMoreLink: { text: "Read more about oxidation states", url: "https://en.wikipedia.org/wiki/Oxidation_state" },
  },
  {
    text: "Which gas makes up the largest percentage of Earth's dry atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen"],
    correct: 3,
    difficulty: "beginner",
    explanation: "Nitrogen dominates Earth's atmosphere because N₂ molecules have an extremely strong triple bond and don't react readily with rocks, water, or other atmospheric gases. Oxygen, while essential for life, is highly reactive and would be removed if not constantly replenished by photosynthesis. Lightning strikes and nitrogen-fixing bacteria convert atmospheric N₂ into forms that plants can absorb as nutrients.",
    hints: [
      "The atmosphere is mostly one gas — oxygen, while essential, is the second most abundant.",
      "Think about which diatomic gas is colourless, odourless, and makes up about 78% of air.",
      "Nitrogen (N₂) makes up ~78% of dry air, far more than oxygen (~21%) or argon (~0.9%)."
    ],
    learnMoreLink: { text: "Read more about Earth's atmosphere", url: "https://en.wikipedia.org/wiki/Atmosphere_of_Earth" },
  },
  {
    text: "What is the correct IUPAC name for H₂SO₄?",
    options: ["Hydrosulfuric acid", "Sulfurous acid", "Sulfuric acid", "Persulfuric acid"],
    correct: 2,
    difficulty: "easy",
    explanation: "Sulfuric acid is one of the most important industrial chemicals — used to make fertilisers, dyes, detergents, and lead-acid car batteries. Its IUPAC name follows the rule: sulfate ion (SO₄²⁻) → sulfuric acid. Car batteries contain sulfuric acid as the electrolyte: the reaction between lead and sulfuric acid generates the current that starts your engine.",
    hints: [
      "IUPAC acid names are based on the anion the acid produces in water.",
      "H₂SO₄ produces the sulfate (SO₄²⁻) ion — the '-ate' anion gets the '-ic acid' suffix.",
      "Sulfate → sulfuric acid. Sulfite (SO₃²⁻) would give sulfurous acid."
    ],
    learnMoreLink: { text: "Read more about sulfuric acid", url: "https://en.wikipedia.org/wiki/Sulfuric_acid" },
  },
  {
    text: "How many moles are in 44 g of CO₂? (molar mass of CO₂ = 44 g/mol)",
    options: ["0.5 mol", "1 mol", "2 mol", "44 mol"],
    correct: 1,
    difficulty: "easy",
    explanation: "One mole of any substance always contains 6.02 × 10²³ particles, regardless of what it is. Since CO₂'s molar mass is 44 g/mol, exactly 44 g of CO₂ is one mole — containing 6.02 × 10²³ molecules. Chemists use moles like a recipe: 'use 1 mole of A with 2 moles of B' tells you the exact ratio needed for a reaction to proceed completely without waste.",
    hints: [
      "The number of moles is found by dividing the mass by the molar mass.",
      "The molar mass of CO₂ is given — you just need one simple division.",
      "moles = mass / molar mass = 44 g ÷ 44 g/mol = 1 mol."
    ],
    learnMoreLink: { text: "Read more about the mole (chemistry)", url: "https://en.wikipedia.org/wiki/Mole_(unit)" },
  },
  {
    text: "What type of bond involves the sharing of electron pairs between atoms?",
    options: ["Ionic", "Metallic", "Van der Waals", "Covalent"],
    correct: 3,
    difficulty: "easy",
    explanation: "Covalent bonds form when two atoms both need more electrons but neither will give them up — so they share. This sharing can be single (one pair), double (two pairs), or triple (three pairs). The shared electrons hold the atoms together, giving covalent molecules their specific shapes. DNA, proteins, and most biological molecules are held together almost entirely by covalent bonds.",
    hints: [
      "There are two main types of strong chemical bonds — one involves electron transfer, the other sharing.",
      "Think about non-metal atoms bonding with other non-metals — they don't transfer electrons.",
      "Covalent bonds form when atoms share one or more pairs of electrons to achieve stable configurations."
    ],
    learnMoreLink: { text: "Read more about covalent bonds", url: "https://en.wikipedia.org/wiki/Covalent_bond" },
  },
  {
    text: "What are the products of an acid-base neutralisation reaction?",
    options: ["Oxide and water", "Salt and water", "Hydrogen and hydroxide", "An element and water"],
    correct: 1,
    difficulty: "medium",
    explanation: "Neutralisation cancels the properties of both acid and base: H⁺ from the acid and OH⁻ from the base combine to form water, while the remaining ions form a salt. Antacid tablets work on exactly this principle — calcium carbonate or magnesium hydroxide neutralises excess hydrochloric acid in your stomach, relieving heartburn within minutes.",
    hints: [
      "In a neutralisation reaction, an acid and a base react together and cancel each other out.",
      "The H⁺ from the acid combines with OH⁻ from the base to form one product.",
      "H⁺ + OH⁻ → H₂O, and the remaining ions (metal + non-metal) combine to form a salt."
    ],
    learnMoreLink: { text: "Read more about neutralisation reactions", url: "https://en.wikipedia.org/wiki/Neutralization_(chemistry)" },
  },
  {
    text: "Which of the following is a noble gas?",
    options: ["Fluorine", "Hydrogen", "Nitrogen", "Argon"],
    correct: 3,
    difficulty: "easy",
    explanation: "Noble gases have completely filled outer electron shells, making them extraordinarily stable and almost completely unreactive. Argon is the third most abundant gas in Earth's atmosphere (~0.93%) and was not discovered until 1894 because it refuses to form compounds under normal conditions. It's used in light bulbs and welding torches to surround hot metals and prevent them reacting with oxygen.",
    hints: [
      "Noble gases are in the rightmost group (Group 18) of the periodic table.",
      "They have full outer electron shells, making them chemically unreactive.",
      "Argon (Ar) is in Group 18, period 3 — its full outer shell makes it stable and inert."
    ],
    learnMoreLink: { text: "Read more about noble gases", url: "https://en.wikipedia.org/wiki/Noble_gas" },
  },
  {
    text: "What does an element's mass number represent?",
    options: ["Number of protons only", "Number of neutrons only", "Number of electrons", "Number of protons plus neutrons"],
    correct: 3,
    difficulty: "beginner",
    explanation: "Mass number counts all the heavy particles (nucleons) in the nucleus — protons plus neutrons. Electrons are excluded because they weigh about 1800 times less than protons, making their contribution negligible. Uranium-235 and uranium-238 are isotopes with 92 protons each, but 143 vs 146 neutrons — the 3-unit difference in mass number is the key distinction relevant to nuclear fission reactors.",
    hints: [
      "Don't confuse atomic number with mass number — they measure different things.",
      "Mass number counts the heavy particles in the nucleus — electrons are too light to count.",
      "Mass number = protons + neutrons. (Atomic number = protons only.)"
    ],
    learnMoreLink: { text: "Read more about mass number", url: "https://en.wikipedia.org/wiki/Mass_number" },
  },
  {
    text: "In a redox reaction, oxidation is defined as:",
    options: ["Gain of electrons", "Gain of protons", "Loss of electrons", "Loss of protons"],
    correct: 2,
    difficulty: "easy",
    explanation: "OIL RIG (Oxidation Is Loss, Reduction Is Gain of electrons) is the essential mnemonic for redox reactions. When iron rusts, iron atoms lose electrons to oxygen — iron is oxidised. In electrochemical batteries, controlled oxidation at one electrode and reduction at the other drives the electric current that powers your phone and electric vehicles.",
    hints: [
      "Remember the mnemonic OIL RIG to keep oxidation and reduction straight.",
      "OIL RIG stands for: Oxidation Is Loss, Reduction Is Gain (of electrons).",
      "A substance is oxidised when it loses electrons — its oxidation state increases."
    ],
    learnMoreLink: { text: "Read more about redox reactions", url: "https://en.wikipedia.org/wiki/Redox" },
  },
  {
    text: "Which element has the electron configuration 2, 8, 1?",
    options: ["Lithium", "Potassium", "Sodium", "Magnesium"],
    correct: 2,
    difficulty: "easy",
    explanation: "Electron configuration tells you exactly how electrons are distributed across shells — and that single electron in sodium's outer shell is weakly held and easily lost. When sodium contacts water, this outer electron is released so readily that it ignites the hydrogen gas produced, creating the dramatic fizzing and sometimes flame you see in demonstrations. This reactivity makes sodium essential in producing many industrial chemicals.",
    hints: [
      "Add up all the electrons: 2 + 8 + 1 = 11 total electrons.",
      "In a neutral atom, the number of electrons equals the atomic number.",
      "Atomic number 11 is Sodium (Na) — it sits in period 3, group 1 of the periodic table."
    ],
    learnMoreLink: { text: "Read more about electron configuration", url: "https://en.wikipedia.org/wiki/Electron_configuration" },
  },
  {
    text: "How many lone pairs of electrons are on the nitrogen atoms in N₂?",
    options: ["A) One on each nitrogen", "B) Two on each nitrogen", "C) None", "D) Three on each nitrogen"],
    correct: 0,
    difficulty: "beginner",
    explanation: "N₂ has a triple bond using 6 electrons (3 from each N), leaving each nitrogen with one lone pair. This explains why N₂ is so stable and unreactive, making up about 78% of Earth's atmosphere.",
    hints: [
      "Nitrogen has 5 valence electrons.",
      "N₂ has a triple bond between the two atoms.",
      "After forming the triple bond, count the remaining electrons on each atom."
    ],
    learnMoreLink: { text: "Read more about Nitrogen", url: "https://en.wikipedia.org/wiki/Nitrogen" },
  },
  {
    text: "What is the molecular geometry of methane (CH₄)?",
    options: ["A) Tetrahedral", "B) Trigonal planar", "C) Bent", "D) Linear"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Methane has 4 bonding pairs around carbon with no lone pairs, giving it a tetrahedral geometry with 109.5° bond angles. This shape is fundamental to organic chemistry and is why diamond (made of tetrahedral carbon) is so strong.",
    hints: [
      "Carbon has 4 bonding pairs and no lone pairs.",
      "Four equivalent bonds repel equally in 3D space.",
      "The bond angles are about 109.5°."
    ],
    learnMoreLink: { text: "Read more about VSEPR theory", url: "https://en.wikipedia.org/wiki/VSEPR_theory" },
  },
  {
    text: "Which of these molecules is nonpolar despite having polar bonds?",
    options: ["A) CO₂", "B) H₂O", "C) NH₃", "D) HF"],
    correct: 0,
    difficulty: "medium",
    explanation: "CO₂ is linear (O=C=O) so the two C=O bond dipoles point in opposite directions and cancel, making the molecule nonpolar overall. This is why CO₂ doesn't dissolve well in water compared to polar molecules.",
    hints: [
      "Symmetry can cancel out bond dipoles.",
      "This molecule is linear with two identical bonds pointing in opposite directions.",
      "It's the gas you exhale."
    ],
    learnMoreLink: { text: "Read more about Chemical polarity", url: "https://en.wikipedia.org/wiki/Chemical_polarity" },
  },
  {
    text: "Which bond is the shortest?",
    options: ["A) C≡C triple bond", "B) C=C double bond", "C) C-C single bond", "D) All the same length"],
    correct: 0,
    difficulty: "medium",
    explanation: "Triple bonds are the shortest and strongest because they involve sharing 6 electrons, pulling the atoms closer together. C≡C is about 120 pm, C=C is 134 pm, and C-C is 154 pm.",
    hints: [
      "More bonds between atoms means stronger attraction.",
      "Bond length and bond strength are inversely related.",
      "Triple > double > single in strength."
    ],
    learnMoreLink: { text: "Read more about Bond length", url: "https://en.wikipedia.org/wiki/Bond_length" },
  },
  {
    text: "What is the geometry of a water molecule (H₂O)?",
    options: ["A) Bent", "B) Linear", "C) Tetrahedral", "D) Trigonal planar"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Water has a bent shape due to oxygen's two lone pairs pushing the two O-H bonds down to about 104.5°. This bent geometry is why water is polar and exhibits hydrogen bonding, giving it its unique properties.",
    hints: [
      "Oxygen has 2 lone pairs that affect the shape.",
      "Lone pairs push the bonding pairs closer together.",
      "The H-O-H angle is about 104.5°."
    ],
    learnMoreLink: { text: "Read more about Water molecule", url: "https://en.wikipedia.org/wiki/Properties_of_water" },
  },
  {
    text: "How many bonds are in a typical carbon-carbon double bond?",
    options: ["A) 1 sigma and 1 pi", "B) 2 sigma", "C) 2 pi", "D) 1 sigma and 2 pi"],
    correct: 0,
    difficulty: "easy",
    explanation: "A C=C double bond consists of one sigma bond (head-on overlap) and one pi bond (sideways overlap of p-orbitals). The pi bond restricts rotation, which is why cis/trans isomers exist in alkenes.",
    hints: [
      "Single bonds are sigma bonds.",
      "Additional bonds beyond the first are pi bonds.",
      "A double bond has one of each type."
    ],
    learnMoreLink: { text: "Read more about Pi bonds", url: "https://en.wikipedia.org/wiki/Pi_bond" },
  },
  {
    text: "Which molecule has trigonal pyramidal geometry?",
    options: ["A) NH₃", "B) BF₃", "C) CH₄", "D) CO₂"],
    correct: 0,
    difficulty: "easy",
    explanation: "Ammonia (NH₃) has 3 bonding pairs and 1 lone pair on nitrogen, giving it trigonal pyramidal geometry with bond angles of about 107°. The lone pair makes ammonia a Lewis base capable of accepting protons.",
    hints: [
      "It has 3 bonding pairs and 1 lone pair.",
      "The lone pair distorts what would be a tetrahedral arrangement.",
      "It's a common base used in cleaning products."
    ],
    learnMoreLink: { text: "Read more about Ammonia", url: "https://en.wikipedia.org/wiki/Ammonia" },
  },
  {
    text: "What shape does a molecule with 5 bonding pairs and no lone pairs have?",
    options: ["A) Trigonal bipyramidal", "B) Square planar", "C) Octahedral", "D) Tetrahedral"],
    correct: 0,
    difficulty: "medium",
    explanation: "Five bonding pairs arrange in trigonal bipyramidal geometry with three equatorial atoms at 120° and two axial atoms at 90°. PCl₅ and PF₅ adopt this shape in the gas phase.",
    hints: [
      "Five electron domains arrange to minimize repulsion.",
      "It has both axial and equatorial positions.",
      "PCl₅ is a classic example."
    ],
    learnMoreLink: { text: "Read more about Trigonal bipyramidal molecular geometry", url: "https://en.wikipedia.org/wiki/Trigonal_bipyramidal_molecular_geometry" },
  },
  {
    text: "Which of these molecules is polar?",
    options: ["A) HCl", "B) Cl₂", "C) CO₂", "D) CH₄"],
    correct: 0,
    difficulty: "beginner",
    explanation: "HCl is polar because chlorine is more electronegative than hydrogen, creating a permanent dipole. This polarity allows HCl to dissolve readily in water and ionize to form hydrochloric acid, which is found in your stomach.",
    hints: [
      "Look for asymmetry and electronegativity differences.",
      "Two different atoms in a diatomic molecule means a permanent dipole.",
      "It's a strong acid when dissolved in water."
    ],
    learnMoreLink: { text: "Read more about Hydrogen chloride", url: "https://en.wikipedia.org/wiki/Hydrogen_chloride" },
  },
  {
    text: "How many lone pairs does the central atom in H₂S have?",
    options: ["A) 2", "B) 0", "C) 1", "D) 3"],
    correct: 0,
    difficulty: "easy",
    explanation: "Sulfur in H₂S has 6 valence electrons; 2 are used in S-H bonds, leaving 2 lone pairs. H₂S is the foul-smelling gas responsible for the rotten egg odor and is highly toxic.",
    hints: [
      "Sulfur is in the same group as oxygen.",
      "It has 6 valence electrons and forms 2 bonds.",
      "Like water, it has a bent shape."
    ],
    learnMoreLink: { text: "Read more about Hydrogen sulfide", url: "https://en.wikipedia.org/wiki/Hydrogen_sulfide" },
  },
  {
    text: "Which molecule has the largest dipole moment?",
    options: ["A) HF", "B) HCl", "C) HBr", "D) HI"],
    correct: 0,
    difficulty: "medium",
    explanation: "HF has the largest dipole moment among hydrogen halides because fluorine has the highest electronegativity (3.98), creating the biggest charge separation. This strong polarity allows HF to form hydrogen bonds, giving it an unusually high boiling point.",
    hints: [
      "Dipole moment depends on electronegativity difference.",
      "Fluorine is the most electronegative element.",
      "The smaller halogens give larger differences with hydrogen."
    ],
    learnMoreLink: { text: "Read more about Dipole moment", url: "https://en.wikipedia.org/wiki/Bond_dipole_moment" },
  },
  {
    text: "What is the geometry of BF₃?",
    options: ["A) Trigonal planar", "B) Trigonal pyramidal", "C) Tetrahedral", "D) Bent"],
    correct: 0,
    difficulty: "easy",
    explanation: "BF₃ has 3 bonding pairs and no lone pairs around boron, giving trigonal planar geometry with 120° angles. Boron is an exception to the octet rule, with only 6 electrons around it, making BF₃ a strong Lewis acid.",
    hints: [
      "Boron only has 3 valence electrons.",
      "There are no lone pairs on the central atom.",
      "All three F atoms lie in the same plane at 120°."
    ],
    learnMoreLink: { text: "Read more about Boron trifluoride", url: "https://en.wikipedia.org/wiki/Boron_trifluoride" },
  },
  {
    text: "Which compound contains an ionic bond?",
    options: ["A) NaCl", "B) CO₂", "C) H₂O", "D) CH₄"],
    correct: 0,
    difficulty: "beginner",
    explanation: "NaCl is ionic because sodium (a metal) transfers its outer electron to chlorine (a nonmetal), forming Na⁺ and Cl⁻ ions held together by electrostatic attraction. This explains why salt has a high melting point and conducts electricity when dissolved.",
    hints: [
      "Ionic bonds form between metals and nonmetals.",
      "There's a complete transfer of electrons.",
      "It's common table salt."
    ],
    learnMoreLink: { text: "Read more about Ionic bonding", url: "https://en.wikipedia.org/wiki/Ionic_bonding" },
  },
  {
    text: "Drawing the Lewis structure for SF₆, how many lone pairs does the central S atom have?",
    options: ["A) 0", "B) 1", "C) 2", "D) 3"],
    correct: 0,
    difficulty: "hard",
    explanation: "In SF₆, sulfur uses all 6 valence electrons to form 6 bonds with fluorine atoms, leaving no lone pairs on sulfur. SF₆ is an extremely stable, inert gas used as an electrical insulator in high-voltage equipment.",
    hints: [
      "Sulfur expands its octet here.",
      "All 6 valence electrons of S are used in bonding.",
      "The shape is octahedral."
    ],
    learnMoreLink: { text: "Read more about Sulfur hexafluoride", url: "https://en.wikipedia.org/wiki/Sulfur_hexafluoride" },
  },
  {
    text: "What hybridization does the carbon atom in ethylene (C₂H₄) have?",
    options: ["A) sp²", "B) sp", "C) sp³", "D) sp³d"],
    correct: 0,
    difficulty: "hard",
    explanation: "Each carbon in ethylene forms 3 sigma bonds (2 to H, 1 to C) using sp² hybrid orbitals, with the unhybridized p orbital forming the pi bond. This sp² hybridization explains the planar geometry and 120° bond angles in alkenes.",
    hints: [
      "Each carbon forms 3 sigma bonds.",
      "There's also one pi bond between the carbons.",
      "Three orbitals mix to form three equivalent hybrids."
    ],
    learnMoreLink: { text: "Read more about Orbital hybridization", url: "https://en.wikipedia.org/wiki/Orbital_hybridisation" },
  },
  {
    text: "Which molecule exhibits hydrogen bonding?",
    options: ["A) NH₃", "B) CH₄", "C) H₂S", "D) PH₃"],
    correct: 0,
    difficulty: "easy",
    explanation: "NH₃ exhibits hydrogen bonding because hydrogen is bonded to highly electronegative nitrogen with lone pairs. This is why ammonia has a much higher boiling point than expected and is highly soluble in water.",
    hints: [
      "Hydrogen bonding requires H bonded to N, O, or F.",
      "The molecule must have an electronegative atom with lone pairs.",
      "It's a base used to make fertilizers."
    ],
    learnMoreLink: { text: "Read more about Hydrogen bond", url: "https://en.wikipedia.org/wiki/Hydrogen_bond" },
  },
  {
    text: "What is the bond angle in a perfectly tetrahedral molecule?",
    options: ["A) 109.5°", "B) 90°", "C) 120°", "D) 180°"],
    correct: 0,
    difficulty: "beginner",
    explanation: "The tetrahedral bond angle is exactly 109.5° (more precisely, arccos(-1/3)). This is the geometry seen in methane, diamond, and many organic molecules where carbon is sp³ hybridized.",
    hints: [
      "It's the angle that maximizes distance between 4 points on a sphere.",
      "Methane is the classic example.",
      "It's between 90° and 120°."
    ],
    learnMoreLink: { text: "Read more about Tetrahedral molecular geometry", url: "https://en.wikipedia.org/wiki/Tetrahedral_molecular_geometry" },
  },
  {
    text: "Which type of bond is found in O₂?",
    options: ["A) Double bond", "B) Single bond", "C) Triple bond", "D) Ionic bond"],
    correct: 0,
    difficulty: "beginner",
    explanation: "O₂ has a double bond (O=O) where each oxygen shares 2 pairs of electrons. This is the oxygen we breathe, and the relatively strong double bond is why oxygen is stable in the atmosphere.",
    hints: [
      "Oxygen needs 2 more electrons to complete its octet.",
      "Each O atom shares 4 electrons total.",
      "It's between single and triple."
    ],
    learnMoreLink: { text: "Read more about Double bond", url: "https://en.wikipedia.org/wiki/Double_bond" },
  },
  {
    text: "An organic molecule has the formula C₂H₆O and contains an O-H group. What is it?",
    options: ["A) Ethanol", "B) Dimethyl ether", "C) Acetone", "D) Formaldehyde"],
    correct: 0,
    difficulty: "easy",
    explanation: "C₂H₆O with an O-H group is ethanol (CH₃CH₂OH), the alcohol found in alcoholic beverages and used as a fuel additive. Its isomer dimethyl ether (CH₃OCH₃) has the same formula but no O-H group.",
    hints: [
      "It's a 2-carbon alcohol.",
      "It's the alcohol in beer and wine.",
      "Its structural formula is CH₃CH₂OH."
    ],
    learnMoreLink: { text: "Read more about Ethanol", url: "https://en.wikipedia.org/wiki/Ethanol" },
  },
  {
    text: "Which has a square planar geometry?",
    options: ["A) XeF₄", "B) CH₄", "C) SF₆", "D) NH₃"],
    correct: 0,
    difficulty: "hard",
    explanation: "XeF₄ has 4 bonding pairs and 2 lone pairs, with the lone pairs occupying axial positions to minimize repulsion, leaving the 4 F atoms in a square planar arrangement. This shows that even noble gases can form compounds under the right conditions.",
    hints: [
      "It has 4 bonding pairs and 2 lone pairs.",
      "The lone pairs are on opposite sides.",
      "The central atom is a noble gas."
    ],
    learnMoreLink: { text: "Read more about Xenon tetrafluoride", url: "https://en.wikipedia.org/wiki/Xenon_tetrafluoride" },
  },
  {
    text: "What is the hybridization of the carbon in carbon dioxide (CO₂)?",
    options: ["A) sp", "B) sp²", "C) sp³", "D) sp³d"],
    correct: 0,
    difficulty: "hard",
    explanation: "Carbon in CO₂ is sp hybridized, forming 2 sigma bonds (one to each oxygen) and using 2 unhybridized p orbitals for the 2 pi bonds. This sp hybridization gives CO₂ its linear 180° geometry.",
    hints: [
      "The molecule is linear.",
      "Each carbon forms 2 sigma bonds.",
      "Two orbitals are mixed."
    ],
    learnMoreLink: { text: "Read more about Carbon dioxide", url: "https://en.wikipedia.org/wiki/Carbon_dioxide" },
  },
  {
    text: "Why is ice less dense than liquid water?",
    options: ["A) Hydrogen bonds form an open hexagonal lattice", "B) Water expands when cooled below 0°C due to gas trapping", "C) Ice has fewer molecules per cm³ randomly", "D) Ice contains more dissolved oxygen"],
    correct: 0,
    difficulty: "medium",
    explanation: "In ice, hydrogen bonds force water molecules into an open hexagonal lattice with empty space between molecules, making it less dense than liquid water. This is why ice floats and aquatic life can survive winter under frozen lakes.",
    hints: [
      "It's about molecular structure.",
      "The arrangement creates empty spaces.",
      "Hydrogen bonds force a specific geometry."
    ],
    learnMoreLink: { text: "Read more about Ice", url: "https://en.wikipedia.org/wiki/Ice" },
  },
  {
    text: "Which has the strongest intermolecular forces?",
    options: ["A) H₂O", "B) CH₄", "C) Ne", "D) H₂"],
    correct: 0,
    difficulty: "medium",
    explanation: "Water has the strongest intermolecular forces among these because it forms hydrogen bonds via its O-H groups. This explains why water is a liquid at room temperature while CH₄, Ne, and H₂ are all gases.",
    hints: [
      "Stronger forces mean higher boiling points.",
      "It can form hydrogen bonds.",
      "It's liquid at room temperature."
    ],
    learnMoreLink: { text: "Read more about Intermolecular force", url: "https://en.wikipedia.org/wiki/Intermolecular_force" },
  },
  {
    text: "How many sigma and pi bonds are in HCN?",
    options: ["A) 2 sigma, 2 pi", "B) 3 sigma, 1 pi", "C) 1 sigma, 3 pi", "D) 4 sigma, 0 pi"],
    correct: 0,
    difficulty: "hard",
    explanation: "HCN has H-C single bond (1 sigma) and C≡N triple bond (1 sigma + 2 pi), giving 2 sigma and 2 pi bonds total. HCN is the highly toxic compound hydrogen cyanide, which interferes with cellular respiration.",
    hints: [
      "There's a triple bond between C and N.",
      "Each single bond is one sigma.",
      "A triple bond contains 1 sigma and 2 pi."
    ],
    learnMoreLink: { text: "Read more about Hydrogen cyanide", url: "https://en.wikipedia.org/wiki/Hydrogen_cyanide" },
  },
  {
    text: "A molecule has the structural formula CH₃COOH. Which functional group does it contain?",
    options: ["A) Carboxylic acid", "B) Aldehyde", "C) Alcohol", "D) Ester"],
    correct: 0,
    difficulty: "easy",
    explanation: "CH₃COOH is acetic acid (ethanoic acid), containing a carboxylic acid functional group (-COOH). It's the active ingredient in vinegar, typically present at 4-7% concentration.",
    hints: [
      "Look for -COOH at the end.",
      "It's the acid in vinegar.",
      "Carboxylic acids have both C=O and O-H."
    ],
    learnMoreLink: { text: "Read more about Acetic acid", url: "https://en.wikipedia.org/wiki/Acetic_acid" },
  },
  {
    text: "Balance: H₂ + O₂ → H₂O. What are the coefficients?",
    options: ["A) 2, 1, 2", "B) 1, 1, 1", "C) 2, 2, 2", "D) 1, 2, 2"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Balanced: 2H₂ + O₂ → 2H₂O gives 4 H and 2 O on each side. This is the combustion of hydrogen, which releases significant energy and produces only water — making it a clean fuel candidate.",
    hints: [
      "Count atoms on each side.",
      "There are 2 oxygen atoms in O₂.",
      "Start by balancing oxygen."
    ],
    learnMoreLink: { text: "Read more about Chemical equation", url: "https://en.wikipedia.org/wiki/Chemical_equation" },
  },
  {
    text: "Balance: CH₄ + O₂ → CO₂ + H₂O.",
    options: ["A) 1, 2, 1, 2", "B) 2, 2, 1, 2", "C) 1, 1, 1, 2", "D) 2, 4, 2, 4"],
    correct: 0,
    difficulty: "beginner",
    explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O is the complete combustion of methane, the main component of natural gas. This reaction provides much of the world's heating and electricity.",
    hints: [
      "Balance carbon first, then hydrogen, then oxygen.",
      "There are 4 H atoms in CH₄.",
      "You need 2 H₂O molecules to account for 4 H."
    ],
    learnMoreLink: { text: "Read more about Combustion", url: "https://en.wikipedia.org/wiki/Combustion" },
  },
  {
    text: "Balance: Fe + O₂ → Fe₂O₃.",
    options: ["A) 4, 3, 2", "B) 2, 1, 1", "C) 4, 1, 2", "D) 2, 3, 2"],
    correct: 0,
    difficulty: "medium",
    explanation: "4Fe + 3O₂ → 2Fe₂O₃ is the rusting of iron, a slow oxidation reaction that costs the global economy billions of dollars annually in damage to infrastructure and vehicles.",
    hints: [
      "Fe₂O₃ has 2 Fe and 3 O.",
      "Try starting with 2 Fe₂O₃.",
      "That gives 6 O needing 3 O₂."
    ],
    learnMoreLink: { text: "Read more about Rust", url: "https://en.wikipedia.org/wiki/Rust" },
  },
  {
    text: "Balance: C₃H₈ + O₂ → CO₂ + H₂O.",
    options: ["A) 1, 5, 3, 4", "B) 2, 5, 6, 8", "C) 1, 3, 3, 4", "D) 1, 4, 3, 4"],
    correct: 0,
    difficulty: "medium",
    explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O is the combustion of propane, used in BBQ grills and home heating. The 5 moles of O₂ produce 3 moles of CO₂ and 4 moles of water vapor per mole of propane.",
    hints: [
      "Balance carbon and hydrogen first.",
      "C₃H₈ gives 3 CO₂ and 4 H₂O.",
      "Count total oxygen needed: 6 + 4 = 10."
    ],
    learnMoreLink: { text: "Read more about Propane", url: "https://en.wikipedia.org/wiki/Propane" },
  },
  {
    text: "Balance: N₂ + H₂ → NH₃.",
    options: ["A) 1, 3, 2", "B) 2, 3, 2", "C) 1, 2, 1", "D) 2, 6, 4"],
    correct: 0,
    difficulty: "easy",
    explanation: "N₂ + 3H₂ → 2NH₃ is the Haber-Bosch process, which produces ammonia for fertilizers. This reaction feeds nearly half the world's population through synthetic nitrogen fixation.",
    hints: [
      "NH₃ has 1 N and 3 H.",
      "N₂ provides 2 N atoms.",
      "You need 6 H total for 2 NH₃."
    ],
    learnMoreLink: { text: "Read more about Haber process", url: "https://en.wikipedia.org/wiki/Haber_process" },
  },
  {
    text: "Balance: KClO₃ → KCl + O₂.",
    options: ["A) 2, 2, 3", "B) 1, 1, 1", "C) 2, 1, 3", "D) 3, 3, 2"],
    correct: 0,
    difficulty: "medium",
    explanation: "2KClO₃ → 2KCl + 3O₂ is the thermal decomposition of potassium chlorate, a common lab method for producing oxygen. This reaction is also used in match heads and fireworks.",
    hints: [
      "Balance K and Cl first (they're 1:1 in both).",
      "Each KClO₃ has 3 O atoms.",
      "Try 2 KClO₃ for 6 O = 3 O₂."
    ],
    learnMoreLink: { text: "Read more about Potassium chlorate", url: "https://en.wikipedia.org/wiki/Potassium_chlorate" },
  },
  {
    text: "What type of reaction is: 2H₂O₂ → 2H₂O + O₂?",
    options: ["A) Decomposition", "B) Synthesis", "C) Single displacement", "D) Combustion"],
    correct: 0,
    difficulty: "easy",
    explanation: "This is a decomposition reaction where hydrogen peroxide breaks down into water and oxygen. This reaction occurs in your medicine cabinet (slowly) and explains why H₂O₂ bottles bubble when applied to wounds — the catalase enzyme speeds up decomposition.",
    hints: [
      "One reactant breaks into multiple products.",
      "H₂O₂ is hydrogen peroxide.",
      "It's the opposite of synthesis."
    ],
    learnMoreLink: { text: "Read more about Decomposition reaction", url: "https://en.wikipedia.org/wiki/Decomposition_reaction" },
  },
  {
    text: "Balance: Al + HCl → AlCl₃ + H₂.",
    options: ["A) 2, 6, 2, 3", "B) 1, 3, 1, 1", "C) 2, 3, 2, 3", "D) 1, 6, 1, 3"],
    correct: 0,
    difficulty: "medium",
    explanation: "2Al + 6HCl → 2AlCl₃ + 3H₂ is a single displacement reaction. Aluminum displaces hydrogen because it is more reactive, and this reaction produces hydrogen gas — useful in some industrial processes.",
    hints: [
      "AlCl₃ has 3 Cl atoms.",
      "Each HCl gives 1 H and 1 Cl.",
      "H₂ comes in pairs."
    ],
    learnMoreLink: { text: "Read more about Single displacement reaction", url: "https://en.wikipedia.org/wiki/Single_displacement_reaction" },
  },
  {
    text: "In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, what happens to zinc?",
    options: ["A) It is oxidized (loses electrons)", "B) It is reduced (gains electrons)", "C) Nothing changes", "D) It dissolves without reaction"],
    correct: 0,
    difficulty: "medium",
    explanation: "Zinc is oxidized from Zn(0) to Zn²⁺, losing 2 electrons that copper ions accept (being reduced to Cu metal). This redox reaction is used in galvanic cells and explains why zinc protects steel through galvanization.",
    hints: [
      "Zinc goes from Zn to Zn²⁺.",
      "OIL RIG: Oxidation Is Loss.",
      "It transfers electrons to copper ions."
    ],
    learnMoreLink: { text: "Read more about Redox", url: "https://en.wikipedia.org/wiki/Redox" },
  },
  {
    text: "Balance: C₂H₅OH + O₂ → CO₂ + H₂O.",
    options: ["A) 1, 3, 2, 3", "B) 2, 6, 4, 6", "C) 1, 2, 2, 3", "D) 1, 4, 2, 3"],
    correct: 0,
    difficulty: "medium",
    explanation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O is the complete combustion of ethanol, used as a biofuel in vehicles. This reaction is also what happens in your body when you metabolize alcohol, though through enzymatic steps.",
    hints: [
      "Balance C: gives 2 CO₂.",
      "Balance H: gives 3 H₂O.",
      "Total O on right is 7, but ethanol provides 1, so need 6/2 = 3 O₂."
    ],
    learnMoreLink: { text: "Read more about Ethanol fuel", url: "https://en.wikipedia.org/wiki/Ethanol_fuel" },
  },
  {
    text: "Balance: Fe₂O₃ + CO → Fe + CO₂.",
    options: ["A) 1, 3, 2, 3", "B) 2, 3, 4, 3", "C) 1, 1, 2, 1", "D) 1, 2, 2, 2"],
    correct: 0,
    difficulty: "medium",
    explanation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂ is the blast furnace reaction used to extract iron from its ore. Carbon monoxide acts as the reducing agent, removing oxygen from iron ore to give pure iron metal for steelmaking.",
    hints: [
      "Each Fe₂O₃ provides 2 Fe.",
      "Each CO becomes CO₂ by gaining 1 O.",
      "3 O atoms in Fe₂O₃ need 3 CO."
    ],
    learnMoreLink: { text: "Read more about Blast furnace", url: "https://en.wikipedia.org/wiki/Blast_furnace" },
  },
  {
    text: "What is the oxidation state of S in H₂SO₄?",
    options: ["A) +6", "B) +4", "C) +2", "D) -2"],
    correct: 0,
    difficulty: "medium",
    explanation: "In H₂SO₄: 2(+1) + S + 4(-2) = 0, so S = +6. Sulfuric acid is one of the most produced chemicals globally, used in fertilizers, batteries, and many industrial processes.",
    hints: [
      "H is +1, O is -2.",
      "Sum of oxidation states = 0 for neutral compound.",
      "2(+1) + S + 4(-2) = 0."
    ],
    learnMoreLink: { text: "Read more about Oxidation state", url: "https://en.wikipedia.org/wiki/Oxidation_state" },
  },
  {
    text: "Balance: NaOH + H₂SO₄ → Na₂SO₄ + H₂O.",
    options: ["A) 2, 1, 1, 2", "B) 1, 1, 1, 1", "C) 2, 2, 1, 2", "D) 1, 2, 1, 2"],
    correct: 0,
    difficulty: "easy",
    explanation: "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O is a neutralization reaction producing sodium sulfate. This kind of acid-base reaction is used in chemical manufacturing, pH adjustment, and antacid medications.",
    hints: [
      "Na₂SO₄ has 2 Na atoms.",
      "Need 2 NaOH for 2 Na.",
      "That gives 2 OH which makes 2 H₂O with 2 H from acid."
    ],
    learnMoreLink: { text: "Read more about Neutralization", url: "https://en.wikipedia.org/wiki/Neutralization_(chemistry)" },
  },
  {
    text: "Balance: C₆H₁₂O₆ + O₂ → CO₂ + H₂O.",
    options: ["A) 1, 6, 6, 6", "B) 1, 12, 6, 12", "C) 2, 6, 12, 6", "D) 1, 3, 6, 6"],
    correct: 0,
    difficulty: "medium",
    explanation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O is cellular respiration, the process by which your cells convert glucose into energy. This reaction releases approximately 2870 kJ of energy per mole of glucose.",
    hints: [
      "Glucose has 6 C and 12 H.",
      "Gives 6 CO₂ and 6 H₂O.",
      "12 + 6 = 18 O on right, 6 from glucose, need 12/2 = 6 O₂."
    ],
    learnMoreLink: { text: "Read more about Cellular respiration", url: "https://en.wikipedia.org/wiki/Cellular_respiration" },
  },
  {
    text: "What happens to the oxidation state of Cu in Cu²⁺ + 2e⁻ → Cu?",
    options: ["A) Decreases from +2 to 0 (reduced)", "B) Increases from 0 to +2 (oxidized)", "C) Stays the same", "D) Decreases from +2 to -2"],
    correct: 0,
    difficulty: "medium",
    explanation: "Cu²⁺ gains 2 electrons to become Cu(0), a reduction (decrease in oxidation state). This half-reaction occurs at the cathode in electroplating, where copper is deposited onto objects.",
    hints: [
      "Adding electrons reduces oxidation state.",
      "OIL RIG: Reduction Is Gain.",
      "Cu²⁺ becomes neutral Cu."
    ],
    learnMoreLink: { text: "Read more about Electroplating", url: "https://en.wikipedia.org/wiki/Electroplating" },
  },
  {
    text: "Balance: Mg + N₂ → Mg₃N₂.",
    options: ["A) 3, 1, 1", "B) 1, 1, 1", "C) 2, 1, 1", "D) 3, 2, 1"],
    correct: 0,
    difficulty: "medium",
    explanation: "3Mg + N₂ → Mg₃N₂ is the synthesis of magnesium nitride, which forms when magnesium burns in air. This is why pure magnesium burns must be kept away from nitrogen sources for clean magnesium oxide formation.",
    hints: [
      "Mg₃N₂ has 3 Mg and 2 N.",
      "N₂ already provides 2 N.",
      "Just balance Mg."
    ],
    learnMoreLink: { text: "Read more about Magnesium nitride", url: "https://en.wikipedia.org/wiki/Magnesium_nitride" },
  },
  {
    text: "What type of reaction is: A + B → AB?",
    options: ["A) Synthesis (combination)", "B) Decomposition", "C) Combustion", "D) Displacement"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Synthesis (combination) reactions occur when two or more reactants combine to form a single product. An example is the reaction of hydrogen and oxygen to form water — fundamental to fuel cells.",
    hints: [
      "Two reactants combine into one product.",
      "It's the opposite of decomposition.",
      "Also called combination reaction."
    ],
    learnMoreLink: { text: "Read more about Chemical synthesis", url: "https://en.wikipedia.org/wiki/Chemical_synthesis" },
  },
  {
    text: "In the reaction 2Na + Cl₂ → 2NaCl, which substance is oxidized?",
    options: ["A) Sodium (Na)", "B) Chlorine (Cl)", "C) Both", "D) Neither"],
    correct: 0,
    difficulty: "medium",
    explanation: "Sodium is oxidized (Na → Na⁺ + e⁻), losing electrons, while chlorine is reduced. This explosive reaction produces table salt and demonstrates how dangerous reactants can form benign products.",
    hints: [
      "Sodium goes from 0 to +1.",
      "Chlorine goes from 0 to -1.",
      "Loss of electrons = oxidation."
    ],
    learnMoreLink: { text: "Read more about Sodium chloride", url: "https://en.wikipedia.org/wiki/Sodium_chloride" },
  },
  {
    text: "Balance: Pb(NO₃)₂ + KI → PbI₂ + KNO₃.",
    options: ["A) 1, 2, 1, 2", "B) 2, 2, 1, 2", "C) 1, 1, 1, 1", "D) 1, 4, 2, 4"],
    correct: 0,
    difficulty: "medium",
    explanation: "Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃ is a double displacement reaction producing the bright yellow precipitate of lead iodide. This famous 'golden rain' demonstration is a classic chemistry showcase.",
    hints: [
      "PbI₂ needs 2 I.",
      "Each KI provides 1 K and 1 I.",
      "2 KI gives 2 K which needs 2 KNO₃."
    ],
    learnMoreLink: { text: "Read more about Lead(II) iodide", url: "https://en.wikipedia.org/wiki/Lead(II)_iodide" },
  },
  {
    text: "Which element is in Group 1 of the periodic table?",
    options: ["A) Sodium", "B) Calcium", "C) Iron", "D) Chlorine"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Sodium (Na) is in Group 1, the alkali metals, characterized by having one valence electron. Alkali metals are highly reactive — sodium reacts violently with water, while elemental sodium must be stored under oil.",
    hints: [
      "Group 1 contains alkali metals.",
      "These have 1 valence electron.",
      "It's used in table salt."
    ],
    learnMoreLink: { text: "Read more about Alkali metal", url: "https://en.wikipedia.org/wiki/Alkali_metal" },
  },
  {
    text: "Which group contains the noble gases?",
    options: ["A) Group 18", "B) Group 1", "C) Group 7", "D) Group 14"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Noble gases are in Group 18, having full outer electron shells, which makes them very unreactive. They're used in lighting (neon signs), balloons (helium), and as inert atmospheres in welding (argon).",
    hints: [
      "They have full valence shells.",
      "They include helium and neon.",
      "They are extremely unreactive."
    ],
    learnMoreLink: { text: "Read more about Noble gas", url: "https://en.wikipedia.org/wiki/Noble_gas" },
  },
  {
    text: "Which of these is a halogen?",
    options: ["A) Chlorine", "B) Sodium", "C) Magnesium", "D) Argon"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Chlorine is a halogen (Group 17) with 7 valence electrons, making it highly reactive as it gains one electron to form Cl⁻. Halogens are used widely as disinfectants, bleaches, and in pharmaceuticals.",
    hints: [
      "Halogens are in Group 17.",
      "They have 7 valence electrons.",
      "It's used to disinfect swimming pools."
    ],
    learnMoreLink: { text: "Read more about Halogen", url: "https://en.wikipedia.org/wiki/Halogen" },
  },
  {
    text: "Which element is liquid at room temperature?",
    options: ["A) Mercury", "B) Iron", "C) Sodium", "D) Sulfur"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Mercury (Hg) is the only metal that is liquid at room temperature, with a melting point of -38.8°C. Its use in thermometers has been phased out due to its toxicity, but it's still used in some specialized scientific instruments.",
    hints: [
      "It's a metal.",
      "Its symbol is Hg.",
      "It was once used in thermometers."
    ],
    learnMoreLink: { text: "Read more about Mercury (element)", url: "https://en.wikipedia.org/wiki/Mercury_(element)" },
  },
  {
    text: "What is the trend for atomic radius going down a group?",
    options: ["A) Increases", "B) Decreases", "C) Stays the same", "D) First increases then decreases"],
    correct: 0,
    difficulty: "easy",
    explanation: "Atomic radius increases down a group because each successive element has an additional electron shell, placing valence electrons further from the nucleus. This explains why francium is much larger than lithium despite both being alkali metals.",
    hints: [
      "More electron shells are added.",
      "Each new shell is further from the nucleus.",
      "Bigger atoms going down."
    ],
    learnMoreLink: { text: "Read more about Atomic radius", url: "https://en.wikipedia.org/wiki/Atomic_radius" },
  },
  {
    text: "Which element has the highest electronegativity?",
    options: ["A) Fluorine", "B) Oxygen", "C) Chlorine", "D) Nitrogen"],
    correct: 0,
    difficulty: "easy",
    explanation: "Fluorine has the highest electronegativity at 3.98 on the Pauling scale, due to its small size and high effective nuclear charge. This explains why fluorine forms very strong bonds and is the most oxidizing element.",
    hints: [
      "It's at the top right of the periodic table (excluding noble gases).",
      "Pauling scale value is 3.98.",
      "It's the most reactive nonmetal."
    ],
    learnMoreLink: { text: "Read more about Electronegativity", url: "https://en.wikipedia.org/wiki/Electronegativity" },
  },
  {
    text: "What is the electron configuration of carbon (Z=6)?",
    options: ["A) 1s² 2s² 2p²", "B) 1s² 2s² 2p⁴", "C) 1s² 2s² 2p⁶", "D) 1s² 2s¹ 2p³"],
    correct: 0,
    difficulty: "easy",
    explanation: "Carbon's electron configuration is 1s² 2s² 2p², with 4 valence electrons (2s² 2p²) that allow it to form 4 covalent bonds. This versatility is the foundation of organic chemistry and life as we know it.",
    hints: [
      "Carbon has 6 electrons total.",
      "Fill 1s, then 2s, then 2p.",
      "1s holds 2, 2s holds 2."
    ],
    learnMoreLink: { text: "Read more about Electron configuration", url: "https://en.wikipedia.org/wiki/Electron_configuration" },
  },
  {
    text: "Which group is known as alkaline earth metals?",
    options: ["A) Group 2", "B) Group 1", "C) Group 13", "D) Group 17"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Group 2 contains the alkaline earth metals: Be, Mg, Ca, Sr, Ba, Ra. They have 2 valence electrons and are less reactive than Group 1. Calcium is essential for bones and teeth, while magnesium powers many biochemical processes.",
    hints: [
      "They have 2 valence electrons.",
      "Calcium and magnesium are members.",
      "Less reactive than Group 1."
    ],
    learnMoreLink: { text: "Read more about Alkaline earth metal", url: "https://en.wikipedia.org/wiki/Alkaline_earth_metal" },
  },
  {
    text: "Which of these is a metalloid?",
    options: ["A) Silicon", "B) Aluminum", "C) Sulfur", "D) Calcium"],
    correct: 0,
    difficulty: "easy",
    explanation: "Silicon is a metalloid with properties between metals and nonmetals, making it ideal as a semiconductor in electronics. Silicon Valley gets its name from this element, which forms the basis of integrated circuits.",
    hints: [
      "Metalloids have properties of both metals and nonmetals.",
      "It's the main component of computer chips.",
      "Found along the staircase line on the periodic table."
    ],
    learnMoreLink: { text: "Read more about Metalloid", url: "https://en.wikipedia.org/wiki/Metalloid" },
  },
  {
    text: "What is the trend for ionization energy across a period (left to right)?",
    options: ["A) Generally increases", "B) Generally decreases", "C) Stays the same", "D) Decreases sharply"],
    correct: 0,
    difficulty: "easy",
    explanation: "Ionization energy generally increases across a period because effective nuclear charge increases and atomic radius decreases, making electrons harder to remove. This is why noble gases (right side) have the highest ionization energies.",
    hints: [
      "Effective nuclear charge increases.",
      "Atoms get smaller across a period.",
      "Harder to remove electrons from smaller atoms."
    ],
    learnMoreLink: { text: "Read more about Ionization energy", url: "https://en.wikipedia.org/wiki/Ionization_energy" },
  },
  {
    text: "Which element has the symbol K?",
    options: ["A) Potassium", "B) Krypton", "C) Calcium", "D) Carbon"],
    correct: 0,
    difficulty: "beginner",
    explanation: "K is potassium, derived from the Latin 'kalium' (from Arabic 'al-qali' meaning ash). Potassium is essential for nerve function, muscle contraction, and is found in bananas, potatoes, and many other foods.",
    hints: [
      "K comes from the Latin 'kalium'.",
      "It's an alkali metal.",
      "Bananas contain it."
    ],
    learnMoreLink: { text: "Read more about Potassium", url: "https://en.wikipedia.org/wiki/Potassium" },
  },
  {
    text: "How many valence electrons does oxygen have?",
    options: ["A) 6", "B) 8", "C) 4", "D) 2"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Oxygen has 6 valence electrons (2s² 2p⁴), being in Group 16. It needs 2 more to complete its octet, which is why it readily forms 2 bonds in compounds like water and accepts 2 electrons to form O²⁻.",
    hints: [
      "Oxygen is in Group 16.",
      "Group number for main group elements often = valence electrons.",
      "It needs 2 more for an octet."
    ],
    learnMoreLink: { text: "Read more about Oxygen", url: "https://en.wikipedia.org/wiki/Oxygen" },
  },
  {
    text: "Which transition metal is used in stainless steel for corrosion resistance?",
    options: ["A) Chromium", "B) Tin", "C) Lead", "D) Silver"],
    correct: 0,
    difficulty: "easy",
    explanation: "Chromium (Cr) is added to steel (typically >10.5%) to make stainless steel, forming a thin invisible chromium oxide layer that prevents rust. This is why stainless steel kitchen appliances and surgical instruments resist corrosion.",
    hints: [
      "It forms a protective oxide layer.",
      "Symbol is Cr.",
      "Atomic number 24."
    ],
    learnMoreLink: { text: "Read more about Stainless steel", url: "https://en.wikipedia.org/wiki/Stainless_steel" },
  },
  {
    text: "Which element has the lowest electronegativity?",
    options: ["A) Francium", "B) Cesium", "C) Hydrogen", "D) Helium"],
    correct: 0,
    difficulty: "easy",
    explanation: "Francium has the lowest electronegativity among naturally occurring elements (about 0.7 on Pauling scale), being at the bottom-left of the periodic table. However, it's extremely radioactive, so cesium is often cited in textbooks as the practical lowest.",
    hints: [
      "Bottom-left of the periodic table.",
      "It's an alkali metal.",
      "It's the largest stable atom in its group."
    ],
    learnMoreLink: { text: "Read more about Francium", url: "https://en.wikipedia.org/wiki/Francium" },
  },
  {
    text: "What is the electron configuration of a neutral iron atom (Z=26)?",
    options: ["A) [Ar] 3d⁶ 4s²", "B) [Ar] 3d⁸", "C) [Ar] 4s² 4p⁶", "D) [Ar] 3d⁷ 4s¹"],
    correct: 0,
    difficulty: "hard",
    explanation: "Iron's electron configuration is [Ar] 3d⁶ 4s². The unpaired d-electrons account for iron's magnetic properties, which is why iron is ferromagnetic and used in magnets, electric motors, and transformers.",
    hints: [
      "Iron is a transition metal in period 4.",
      "After argon (18 electrons), 8 more are needed.",
      "4s fills before 3d."
    ],
    learnMoreLink: { text: "Read more about Iron", url: "https://en.wikipedia.org/wiki/Iron" },
  },
  {
    text: "Which is the most reactive alkali metal (under standard conditions, ignoring radioactives)?",
    options: ["A) Cesium", "B) Lithium", "C) Sodium", "D) Potassium"],
    correct: 0,
    difficulty: "easy",
    explanation: "Cesium is the most reactive non-radioactive alkali metal because its single valence electron is far from the nucleus and easy to lose. Cesium reacts explosively with water, even more violently than potassium.",
    hints: [
      "Reactivity increases down Group 1.",
      "Larger atoms lose electrons more easily.",
      "Symbol is Cs."
    ],
    learnMoreLink: { text: "Read more about Cesium", url: "https://en.wikipedia.org/wiki/Caesium" },
  },
  {
    text: "How many electrons can the 3d subshell hold?",
    options: ["A) 10", "B) 6", "C) 2", "D) 14"],
    correct: 0,
    difficulty: "easy",
    explanation: "The d-subshell has 5 orbitals, each holding 2 electrons, for a total of 10. This is why transition metals (which fill d-orbitals) span 10 columns in the periodic table.",
    hints: [
      "There are 5 d-orbitals.",
      "Each orbital holds 2 electrons.",
      "5 × 2 = ?"
    ],
    learnMoreLink: { text: "Read more about Atomic orbital", url: "https://en.wikipedia.org/wiki/Atomic_orbital" },
  },
  {
    text: "Which property generally decreases across a period from left to right?",
    options: ["A) Atomic radius", "B) Electronegativity", "C) Ionization energy", "D) Effective nuclear charge"],
    correct: 0,
    difficulty: "easy",
    explanation: "Atomic radius decreases across a period because each new electron is added to the same energy level, but the nuclear charge increases, pulling all electrons closer. So while you'd think more electrons mean bigger atoms, the increased pull wins.",
    hints: [
      "Increasing nuclear charge pulls electrons closer.",
      "More protons but same shell.",
      "Atoms shrink."
    ],
    learnMoreLink: { text: "Read more about Periodic trends", url: "https://en.wikipedia.org/wiki/Periodic_trends" },
  },
  {
    text: "Which element is most likely to form a +2 ion?",
    options: ["A) Magnesium", "B) Sodium", "C) Chlorine", "D) Argon"],
    correct: 0,
    difficulty: "easy",
    explanation: "Magnesium readily loses its 2 valence electrons to form Mg²⁺, achieving the stable neon configuration. Mg²⁺ ions are essential in chlorophyll, ATP function, and over 300 enzymatic reactions in the body.",
    hints: [
      "It has 2 valence electrons.",
      "Group 2 element.",
      "Loses 2 electrons to achieve noble gas configuration."
    ],
    learnMoreLink: { text: "Read more about Magnesium", url: "https://en.wikipedia.org/wiki/Magnesium" },
  },
  {
    text: "Which element is a non-metal but conducts electricity?",
    options: ["A) Carbon (graphite)", "B) Sulfur", "C) Phosphorus", "D) Nitrogen"],
    correct: 0,
    difficulty: "medium",
    explanation: "Graphite, an allotrope of carbon, conducts electricity due to delocalized π-electrons that can move along its layered structure. This is why graphite is used in pencil leads and as electrodes in batteries.",
    hints: [
      "Think of an allotrope of carbon.",
      "It's the 'lead' in pencils.",
      "It has delocalized electrons in its layered structure."
    ],
    learnMoreLink: { text: "Read more about Graphite", url: "https://en.wikipedia.org/wiki/Graphite" },
  },
  {
    text: "What is the most abundant element in the Earth's crust?",
    options: ["A) Oxygen", "B) Silicon", "C) Iron", "D) Aluminum"],
    correct: 0,
    difficulty: "easy",
    explanation: "Oxygen is the most abundant element in Earth's crust at about 46% by mass, mostly bound in silicate minerals and oxides. The next most abundant is silicon at about 28%, together making up most of rocks and soil.",
    hints: [
      "It's not the most abundant in the universe.",
      "Combined with silicon to form silicates.",
      "About 46% of Earth's crust by mass."
    ],
    learnMoreLink: { text: "Read more about Abundance of elements in Earth's crust", url: "https://en.wikipedia.org/wiki/Abundance_of_elements_in_Earth%27s_crust" },
  },
  {
    text: "Which subshell fills before 3d in the aufbau order?",
    options: ["A) 4s", "B) 3p", "C) 3s", "D) 4p"],
    correct: 0,
    difficulty: "hard",
    explanation: "The 4s subshell fills before 3d due to slightly lower energy, an exception to the simple n-ordering. This is described by the Madelung rule and explains why transition metals like calcium have configurations like [Ar] 4s² before 3d fills.",
    hints: [
      "Energy of subshells doesn't always follow shell number.",
      "Use the diagonal rule.",
      "It has lower energy than 3d despite higher principal quantum number."
    ],
    learnMoreLink: { text: "Read more about Aufbau principle", url: "https://en.wikipedia.org/wiki/Aufbau_principle" },
  },
  {
    text: "Which element has the smallest atomic radius?",
    options: ["A) Helium", "B) Hydrogen", "C) Fluorine", "D) Lithium"],
    correct: 0,
    difficulty: "hard",
    explanation: "Helium has the smallest atomic radius because it has 2 protons pulling on only 2 electrons in the first shell, giving the highest effective nuclear charge per electron. This is why helium is so unreactive and stable.",
    hints: [
      "Top of the periodic table.",
      "Has only one electron shell.",
      "Has 2 protons holding 2 electrons tightly."
    ],
    learnMoreLink: { text: "Read more about Helium", url: "https://en.wikipedia.org/wiki/Helium" },
  },
  {
    text: "How many periods does the modern periodic table have?",
    options: ["A) 7", "B) 8", "C) 6", "D) 18"],
    correct: 0,
    difficulty: "beginner",
    explanation: "The modern periodic table has 7 periods (rows), running from period 1 (H, He) to period 7 (Fr through Og). The number of periods reflects the highest electron shell occupied in known elements.",
    hints: [
      "Each row is a period.",
      "Counting from H to Og.",
      "It's the same as the highest principal quantum number used."
    ],
    learnMoreLink: { text: "Read more about Period (periodic table)", url: "https://en.wikipedia.org/wiki/Period_(periodic_table)" },
  },
  {
    text: "Which element is a transition metal?",
    options: ["A) Copper", "B) Magnesium", "C) Sulfur", "D) Sodium"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Copper (Cu) is a transition metal in Group 11, with electron configuration [Ar] 3d¹⁰ 4s¹. Its excellent electrical and thermal conductivity makes it essential for wiring, plumbing, and electronics.",
    hints: [
      "Transition metals are in the d-block.",
      "It's used in electrical wires.",
      "Its symbol comes from Latin 'cuprum'."
    ],
    learnMoreLink: { text: "Read more about Copper", url: "https://en.wikipedia.org/wiki/Copper" },
  },
  {
    text: "What does pH measure?",
    options: ["A) Concentration of H⁺ ions (negative log)", "B) Concentration of OH⁻ ions", "C) Total ion concentration", "D) Temperature of the solution"],
    correct: 0,
    difficulty: "beginner",
    explanation: "pH = -log[H⁺] measures the concentration of hydrogen ions in solution. A pH of 7 means [H⁺] = 10⁻⁷ M (neutral), pH < 7 is acidic, pH > 7 is basic. Each pH unit represents a 10-fold change in H⁺ concentration.",
    hints: [
      "pH stands for 'potential of hydrogen'.",
      "It uses a logarithmic scale.",
      "pH = -log[H⁺]."
    ],
    learnMoreLink: { text: "Read more about pH", url: "https://en.wikipedia.org/wiki/PH" },
  },
  {
    text: "What is the pH of pure water at 25°C?",
    options: ["A) 7", "B) 0", "C) 14", "D) 1"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Pure water has pH 7 at 25°C because [H⁺] = [OH⁻] = 10⁻⁷ M. This neutrality is the reference point for the pH scale, with values below 7 acidic and above 7 basic.",
    hints: [
      "It's neutral.",
      "Right in the middle of the pH scale.",
      "[H⁺] = [OH⁻] = 10⁻⁷ M."
    ],
    learnMoreLink: { text: "Read more about Self-ionization of water", url: "https://en.wikipedia.org/wiki/Self-ionization_of_water" },
  },
  {
    text: "Which is a strong acid?",
    options: ["A) HCl", "B) CH₃COOH", "C) H₂CO₃", "D) HF"],
    correct: 0,
    difficulty: "easy",
    explanation: "HCl is a strong acid that completely dissociates in water into H⁺ and Cl⁻. It's found in stomach acid (about 0.1 M) where it kills bacteria and helps digest food by activating pepsin.",
    hints: [
      "Strong acids fully dissociate in water.",
      "Found in your stomach.",
      "Common lab acid."
    ],
    learnMoreLink: { text: "Read more about Strong acid", url: "https://en.wikipedia.org/wiki/Strong_acid" },
  },
  {
    text: "What is the conjugate base of H₂O?",
    options: ["A) OH⁻", "B) H₃O⁺", "C) O²⁻", "D) H⁺"],
    correct: 0,
    difficulty: "easy",
    explanation: "The conjugate base of H₂O is OH⁻ (hydroxide), formed by removing one H⁺. Water is amphoteric — it can act as both acid (giving OH⁻) or base (giving H₃O⁺).",
    hints: [
      "Remove a proton from water.",
      "It's hydroxide.",
      "Common in basic solutions."
    ],
    learnMoreLink: { text: "Read more about Conjugate acid", url: "https://en.wikipedia.org/wiki/Conjugate_acid" },
  },
  {
    text: "What is the pH of a solution with [H⁺] = 1 × 10⁻³ M?",
    options: ["A) 3", "B) 11", "C) -3", "D) 0.001"],
    correct: 0,
    difficulty: "easy",
    explanation: "pH = -log(1 × 10⁻³) = 3. This is a fairly acidic solution, similar to vinegar or orange juice. Each unit drop in pH represents 10× more acidic.",
    hints: [
      "pH = -log[H⁺].",
      "log(10⁻³) = -3.",
      "Don't forget the negative sign."
    ],
    learnMoreLink: { text: "Read more about Acid", url: "https://en.wikipedia.org/wiki/Acid" },
  },
  {
    text: "What salt forms when HCl reacts with NaOH?",
    options: ["A) NaCl", "B) NaH", "C) ClOH", "D) Na₂Cl"],
    correct: 0,
    difficulty: "easy",
    explanation: "HCl + NaOH → NaCl + H₂O. The acid donates Cl⁻, the base donates Na⁺, forming sodium chloride (table salt) and water. This neutralization is exothermic, releasing heat.",
    hints: [
      "Acid + base → salt + water.",
      "Na from base, Cl from acid.",
      "It's table salt."
    ],
    learnMoreLink: { text: "Read more about Salt (chemistry)", url: "https://en.wikipedia.org/wiki/Salt_(chemistry)" },
  },
  {
    text: "What is a buffer solution?",
    options: ["A) A solution that resists pH changes", "B) A solution that increases pH", "C) A solution with very high concentration", "D) A pure acid solution"],
    correct: 0,
    difficulty: "medium",
    explanation: "A buffer is a solution containing a weak acid and its conjugate base (or weak base and its conjugate acid) that resists pH changes when small amounts of acid or base are added. Blood uses a bicarbonate buffer to maintain pH near 7.4.",
    hints: [
      "Contains both weak acid and conjugate base.",
      "Used to maintain pH stability.",
      "Important in blood."
    ],
    learnMoreLink: { text: "Read more about Buffer solution", url: "https://en.wikipedia.org/wiki/Buffer_solution" },
  },
  {
    text: "What is the Henderson-Hasselbalch equation?",
    options: ["A) pH = pKa + log([A⁻]/[HA])", "B) pH = -log[H⁺]", "C) pH = pKa - log([HA]/[A⁻])", "D) pH = 14 - pOH"],
    correct: 0,
    difficulty: "hard",
    explanation: "The Henderson-Hasselbalch equation pH = pKa + log([A⁻]/[HA]) is used to calculate the pH of buffer solutions. It shows that buffer pH equals pKa when concentrations of acid and conjugate base are equal — the optimal buffering point.",
    hints: [
      "Used for buffer calculations.",
      "Relates pH to pKa and concentrations.",
      "When [A⁻] = [HA], pH = pKa."
    ],
    learnMoreLink: { text: "Read more about Henderson-Hasselbalch equation", url: "https://en.wikipedia.org/wiki/Henderson%E2%80%93Hasselbalch_equation" },
  },
  {
    text: "What is the pH of normal human blood?",
    options: ["A) 7.35-7.45", "B) 5.5-6.5", "C) 8.5-9.5", "D) 7.0 exactly"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Normal blood pH is tightly maintained between 7.35-7.45 by the bicarbonate buffer system (H₂CO₃/HCO₃⁻). Even small deviations can cause acidosis or alkalosis, which can be life-threatening.",
    hints: [
      "Slightly basic, not neutral.",
      "Maintained by bicarbonate buffer.",
      "Tightly regulated near 7.4."
    ],
    learnMoreLink: { text: "Read more about Acid-base homeostasis", url: "https://en.wikipedia.org/wiki/Acid%E2%80%93base_homeostasis" },
  },
  {
    text: "Which is a weak base?",
    options: ["A) NH₃", "B) NaOH", "C) KOH", "D) Ca(OH)₂"],
    correct: 0,
    difficulty: "easy",
    explanation: "Ammonia (NH₃) is a weak base that partially accepts H⁺ from water: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. Only about 1% of NH₃ molecules ionize, making solutions less basic than equimolar NaOH.",
    hints: [
      "Weak bases partially ionize in water.",
      "It's a gas at room temperature.",
      "Used in cleaning products."
    ],
    learnMoreLink: { text: "Read more about Weak base", url: "https://en.wikipedia.org/wiki/Weak_base" },
  },
  {
    text: "If Ka of an acid is 1 × 10⁻⁵, what is its pKa?",
    options: ["A) 5", "B) -5", "C) 1", "D) 10⁻⁵"],
    correct: 0,
    difficulty: "medium",
    explanation: "pKa = -log(1 × 10⁻⁵) = 5. Lower pKa means stronger acid; pKa of 5 indicates a weak acid like acetic acid (pKa = 4.76).",
    hints: [
      "pKa = -log(Ka).",
      "log(10⁻⁵) = -5.",
      "Multiply by -1."
    ],
    learnMoreLink: { text: "Read more about Acid dissociation constant", url: "https://en.wikipedia.org/wiki/Acid_dissociation_constant" },
  },
  {
    text: "What is the pH of a 0.01 M HCl solution?",
    options: ["A) 2", "B) 1", "C) 12", "D) 0.01"],
    correct: 0,
    difficulty: "medium",
    explanation: "Since HCl fully dissociates, [H⁺] = 0.01 M = 10⁻² M, so pH = -log(10⁻²) = 2. This is more acidic than lemon juice (pH ~2.5) and similar to stomach acid.",
    hints: [
      "HCl is a strong acid (fully dissociates).",
      "[H⁺] = 0.01 M = 10⁻² M.",
      "pH = -log(10⁻²)."
    ],
    learnMoreLink: { text: "Read more about Hydrochloric acid", url: "https://en.wikipedia.org/wiki/Hydrochloric_acid" },
  },
  {
    text: "Which substance is amphoteric (acts as both acid and base)?",
    options: ["A) H₂O", "B) HCl", "C) NaCl", "D) CH₄"],
    correct: 0,
    difficulty: "easy",
    explanation: "Water is amphoteric — it can act as an acid (donating H⁺ to form OH⁻) or as a base (accepting H⁺ to form H₃O⁺). This is why water self-ionizes: 2H₂O ⇌ H₃O⁺ + OH⁻.",
    hints: [
      "Can donate or accept protons.",
      "It's the universal solvent.",
      "Self-ionizes slightly."
    ],
    learnMoreLink: { text: "Read more about Amphoterism", url: "https://en.wikipedia.org/wiki/Amphoterism" },
  },
  {
    text: "What color does litmus turn in an acidic solution?",
    options: ["A) Red", "B) Blue", "C) Green", "D) Purple"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Litmus turns red in acidic solutions and blue in basic solutions. Litmus paper is one of the oldest pH indicators and is derived from lichens.",
    hints: [
      "Litmus is a natural indicator from lichens.",
      "Mnemonic: 'acid is red'.",
      "Turns blue in base."
    ],
    learnMoreLink: { text: "Read more about Litmus", url: "https://en.wikipedia.org/wiki/Litmus" },
  },
  {
    text: "What is the pOH of a solution with pH = 3?",
    options: ["A) 11", "B) 3", "C) 7", "D) 14"],
    correct: 0,
    difficulty: "medium",
    explanation: "Since pH + pOH = 14, pOH = 14 - 3 = 11. This relationship comes from the autoionization of water: Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C.",
    hints: [
      "pH + pOH = 14 at 25°C.",
      "14 - 3 = ?",
      "If pH is low, pOH is high."
    ],
    learnMoreLink: { text: "Read more about pOH", url: "https://en.wikipedia.org/wiki/PH#pOH" },
  },
  {
    text: "Which is the strongest acid based on pKa?",
    options: ["A) HBr (pKa = -9)", "B) HF (pKa = 3.2)", "C) CH₃COOH (pKa = 4.76)", "D) H₂CO₃ (pKa = 6.35)"],
    correct: 0,
    difficulty: "medium",
    explanation: "The most negative pKa indicates the strongest acid — HBr at pKa = -9 fully dissociates and is much stronger than the others. Strong acids generally have pKa values below 0.",
    hints: [
      "Lower pKa = stronger acid.",
      "Negative pKa indicates very strong.",
      "Most negative wins."
    ],
    learnMoreLink: { text: "Read more about Acid strength", url: "https://en.wikipedia.org/wiki/Acid_strength" },
  },
  {
    text: "When NH₃ acts as a base, what does it form?",
    options: ["A) NH₄⁺", "B) NH₂⁻", "C) N²⁻", "D) HN₃"],
    correct: 0,
    difficulty: "easy",
    explanation: "NH₃ accepts H⁺ to form NH₄⁺ (ammonium). The lone pair on nitrogen makes ammonia a Brønsted-Lowry base. Ammonium salts are widely used in fertilizers and household cleaners.",
    hints: [
      "Bases accept protons.",
      "NH₃ has a lone pair to donate.",
      "Adding H⁺ gives ammonium."
    ],
    learnMoreLink: { text: "Read more about Ammonium", url: "https://en.wikipedia.org/wiki/Ammonium" },
  },
  {
    text: "A buffer has equal concentrations of weak acid and conjugate base. Its pH equals what?",
    options: ["A) pKa of the acid", "B) 7", "C) Ka of the acid", "D) 14 - pKa"],
    correct: 0,
    difficulty: "hard",
    explanation: "Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = pKa + log(1) = pKa. This is why buffers work best at pH near the pKa of their weak acid component.",
    hints: [
      "Use Henderson-Hasselbalch.",
      "log(1) = 0.",
      "When ratio = 1, pH = pKa."
    ],
    learnMoreLink: { text: "Read more about Buffer solution", url: "https://en.wikipedia.org/wiki/Buffer_solution" },
  },
  {
    text: "What is the H⁺ concentration in a solution with pH 4.5?",
    options: ["A) 10⁻⁴·⁵ M (≈3.16 × 10⁻⁵)", "B) 10⁴·⁵ M", "C) 4.5 M", "D) 10⁻⁹·⁵ M"],
    correct: 0,
    difficulty: "hard",
    explanation: "[H⁺] = 10⁻ᵖᴴ = 10⁻⁴·⁵ ≈ 3.16 × 10⁻⁵ M. A pH of 4.5 is slightly more acidic than coffee (~5) — typical of acid rain, which damages crops, lakes, and buildings.",
    hints: [
      "[H⁺] = 10⁻ᵖᴴ.",
      "10⁻⁴·⁵ ≈ 3.16 × 10⁻⁵.",
      "Between 10⁻⁴ and 10⁻⁵."
    ],
    learnMoreLink: { text: "Read more about Acid rain", url: "https://en.wikipedia.org/wiki/Acid_rain" },
  },
  {
    text: "Why does a buffer resist pH changes?",
    options: ["A) Added H⁺/OH⁻ is consumed by buffer components", "B) The buffer prevents reactions", "C) It dilutes added substances", "D) It heats up to neutralize"],
    correct: 0,
    difficulty: "medium",
    explanation: "Buffers resist pH changes because the weak acid (HA) reacts with added OH⁻, and the conjugate base (A⁻) reacts with added H⁺. This keeps the [HA]/[A⁻] ratio relatively constant, maintaining pH.",
    hints: [
      "It contains both an acid and a base form.",
      "Each can react with added base or acid.",
      "The ratio changes only slightly."
    ],
    learnMoreLink: { text: "Read more about Buffer solution", url: "https://en.wikipedia.org/wiki/Buffer_solution" },
  },
  {
    text: "What is the molecular formula of methane?",
    options: ["A) CH₄", "B) C₂H₆", "C) CH₃", "D) C₂H₄"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Methane is CH₄, the simplest alkane and main component of natural gas. It's also a powerful greenhouse gas, about 25 times more potent than CO₂ over a 100-year period.",
    hints: [
      "Simplest alkane.",
      "Carbon with 4 hydrogens.",
      "Main component of natural gas."
    ],
    learnMoreLink: { text: "Read more about Methane", url: "https://en.wikipedia.org/wiki/Methane" },
  },
  {
    text: "What functional group does an alcohol contain?",
    options: ["A) -OH", "B) -COOH", "C) -CHO", "D) -NH₂"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Alcohols contain a hydroxyl group (-OH) bonded to a carbon. Examples include ethanol (drinking alcohol), methanol (wood alcohol, toxic), and glycerol (used in cosmetics and food).",
    hints: [
      "Hydroxyl group.",
      "Found in ethanol and methanol.",
      "Bonded to a carbon atom."
    ],
    learnMoreLink: { text: "Read more about Alcohol", url: "https://en.wikipedia.org/wiki/Alcohol" },
  },
  {
    text: "Acetone has the structure CH₃-CO-CH₃. Which functional group does it contain?",
    options: ["A) Ketone", "B) Aldehyde", "C) Carboxylic acid", "D) Ester"],
    correct: 0,
    difficulty: "easy",
    explanation: "Acetone contains a ketone group (C=O bonded to two carbons). When breath smells of acetone, it can indicate ketosis or diabetic ketoacidosis. Acetone is also widely used as a solvent.",
    hints: [
      "Has C=O between two carbons.",
      "Used as nail polish remover.",
      "Produced in low-carb diets (ketosis)."
    ],
    learnMoreLink: { text: "Read more about Ketone", url: "https://en.wikipedia.org/wiki/Ketone" },
  },
  {
    text: "What is the IUPAC name of CH₃CH₂CH₂CH₃?",
    options: ["A) Butane", "B) Propane", "C) Pentane", "D) Methane"],
    correct: 0,
    difficulty: "beginner",
    explanation: "CH₃CH₂CH₂CH₃ is butane (4 carbons, all single bonds). Butane is used as a fuel in lighters, portable stoves, and as a propellant in aerosol sprays.",
    hints: [
      "Count the carbon atoms.",
      "4 carbons.",
      "Used in lighters."
    ],
    learnMoreLink: { text: "Read more about Butane", url: "https://en.wikipedia.org/wiki/Butane" },
  },
  {
    text: "Which of these is an alkene?",
    options: ["A) C₂H₄", "B) C₂H₆", "C) C₂H₂", "D) CH₄"],
    correct: 0,
    difficulty: "easy",
    explanation: "C₂H₄ (ethylene/ethene) is an alkene with a C=C double bond. Ethylene is the most produced organic compound globally, used to make polyethylene plastic and as a plant ripening hormone.",
    hints: [
      "Alkenes have a C=C double bond.",
      "General formula CₙH₂ₙ.",
      "Ethylene is the simplest."
    ],
    learnMoreLink: { text: "Read more about Alkene", url: "https://en.wikipedia.org/wiki/Alkene" },
  },
  {
    text: "What is the general formula for alkanes?",
    options: ["A) CₙH₂ₙ₊₂", "B) CₙH₂ₙ", "C) CₙH₂ₙ₋₂", "D) CₙH₂ₙ₊₁"],
    correct: 0,
    difficulty: "easy",
    explanation: "Alkanes have the general formula CₙH₂ₙ₊₂, reflecting their saturated nature with all single bonds. This formula gives methane (CH₄), ethane (C₂H₆), propane (C₃H₈), and so on.",
    hints: [
      "Saturated hydrocarbons.",
      "Methane: n=1, H=4.",
      "Ethane: n=2, H=6."
    ],
    learnMoreLink: { text: "Read more about Alkane", url: "https://en.wikipedia.org/wiki/Alkane" },
  },
  {
    text: "What functional group is in acetic acid (CH₃COOH)?",
    options: ["A) Carboxylic acid", "B) Aldehyde", "C) Alcohol", "D) Amine"],
    correct: 0,
    difficulty: "easy",
    explanation: "Acetic acid contains a carboxylic acid group (-COOH). Acetic acid is the main component of vinegar (after water) and is one of the simplest carboxylic acids — used in food preservation and chemical production.",
    hints: [
      "Look for -COOH.",
      "Has both C=O and -OH.",
      "Found in vinegar."
    ],
    learnMoreLink: { text: "Read more about Carboxylic acid", url: "https://en.wikipedia.org/wiki/Carboxylic_acid" },
  },
  {
    text: "Which type of isomers differ in spatial arrangement around a double bond?",
    options: ["A) Cis-trans (geometric)", "B) Structural", "C) Optical", "D) Chain"],
    correct: 0,
    difficulty: "hard",
    explanation: "Cis-trans (geometric) isomers differ in spatial arrangement around a C=C double bond, which prevents rotation. This is why fatty acids can be cis (typical in healthy foods) or trans (artificial, less healthy).",
    hints: [
      "Restricted rotation due to double bond.",
      "Same connectivity, different geometry.",
      "Examples include cis-2-butene and trans-2-butene."
    ],
    learnMoreLink: { text: "Read more about Cis-trans isomerism", url: "https://en.wikipedia.org/wiki/Cis%E2%80%93trans_isomerism" },
  },
  {
    text: "Which polymer is formed by addition polymerization of ethylene?",
    options: ["A) Polyethylene", "B) Nylon", "C) Polyester", "D) Polystyrene"],
    correct: 0,
    difficulty: "easy",
    explanation: "Polyethylene forms by addition polymerization of ethylene (C₂H₄), where the C=C double bonds open up to link monomers. It's the world's most common plastic, used in bags, bottles, films, and containers.",
    hints: [
      "It's the most common plastic.",
      "Used in plastic bags and bottles.",
      "Repeating unit is -CH₂-CH₂-."
    ],
    learnMoreLink: { text: "Read more about Polyethylene", url: "https://en.wikipedia.org/wiki/Polyethylene" },
  },
  {
    text: "What is the IUPAC name for CH₃CH(OH)CH₃?",
    options: ["A) Propan-2-ol", "B) Propan-1-ol", "C) Ethanol", "D) Methanol"],
    correct: 0,
    difficulty: "medium",
    explanation: "CH₃CH(OH)CH₃ is propan-2-ol (isopropyl alcohol or 'rubbing alcohol'), commonly used as a disinfectant and cleaning agent. The OH on carbon 2 makes it a secondary alcohol.",
    hints: [
      "3 carbons with an OH on the middle one.",
      "Also known as isopropyl alcohol.",
      "Common rubbing alcohol."
    ],
    learnMoreLink: { text: "Read more about Isopropyl alcohol", url: "https://en.wikipedia.org/wiki/Isopropyl_alcohol" },
  },
  {
    text: "Which functional group has the structure -CHO?",
    options: ["A) Aldehyde", "B) Ketone", "C) Carboxylic acid", "D) Alcohol"],
    correct: 0,
    difficulty: "easy",
    explanation: "-CHO is the aldehyde functional group, with C=O at the end of a chain bonded to H. Formaldehyde (HCHO) is used in preservation and is a common indoor air pollutant.",
    hints: [
      "C=O at the end of a carbon chain.",
      "Has H attached to the carbonyl C.",
      "Formaldehyde is the simplest."
    ],
    learnMoreLink: { text: "Read more about Aldehyde", url: "https://en.wikipedia.org/wiki/Aldehyde" },
  },
  {
    text: "What is the simplest aromatic hydrocarbon?",
    options: ["A) Benzene", "B) Toluene", "C) Cyclohexane", "D) Phenol"],
    correct: 0,
    difficulty: "easy",
    explanation: "Benzene (C₆H₆) is the simplest aromatic hydrocarbon, with a planar hexagonal ring of 6 carbons and delocalized π-electrons. It's a precursor to many useful chemicals but is also a known carcinogen.",
    hints: [
      "C₆H₆.",
      "Has a 6-membered ring with delocalized electrons.",
      "Often drawn as a hexagon with a circle inside."
    ],
    learnMoreLink: { text: "Read more about Benzene", url: "https://en.wikipedia.org/wiki/Benzene" },
  },
  {
    text: "In condensation polymerization, what small molecule is typically released?",
    options: ["A) Water", "B) Carbon dioxide", "C) Hydrogen", "D) Methane"],
    correct: 0,
    difficulty: "easy",
    explanation: "Condensation polymerization releases a small molecule (usually water) when monomers join. This produces polymers like nylon, polyester, and proteins (where peptide bond formation releases water).",
    hints: [
      "Two monomers join, losing a small molecule.",
      "It's the universal solvent.",
      "Examples: nylon, polyester."
    ],
    learnMoreLink: { text: "Read more about Condensation polymer", url: "https://en.wikipedia.org/wiki/Condensation_polymer" },
  },
  {
    text: "Which type of isomerism requires a chiral center?",
    options: ["A) Optical (enantiomers)", "B) Cis-trans", "C) Structural", "D) Conformational"],
    correct: 0,
    difficulty: "hard",
    explanation: "Optical isomers (enantiomers) require a chiral center — typically a carbon bonded to 4 different groups. This is critical in pharmaceuticals: thalidomide's two enantiomers had drastically different effects (one therapeutic, one teratogenic).",
    hints: [
      "Requires non-superimposable mirror images.",
      "Often a carbon with 4 different groups.",
      "Affects how molecules rotate plane-polarized light."
    ],
    learnMoreLink: { text: "Read more about Enantiomer", url: "https://en.wikipedia.org/wiki/Enantiomer" },
  },
  {
    text: "What is the functional group in an amine?",
    options: ["A) -NH₂ (or -NH-, -N<)", "B) -OH", "C) -COOH", "D) -CHO"],
    correct: 0,
    difficulty: "easy",
    explanation: "Amines contain the -NH₂ (primary), -NH- (secondary), or -N< (tertiary) functional group, derived from ammonia. They're found in amino acids (building blocks of proteins), neurotransmitters, and many drugs.",
    hints: [
      "Contains nitrogen.",
      "Derived from ammonia.",
      "Found in amino acids."
    ],
    learnMoreLink: { text: "Read more about Amine", url: "https://en.wikipedia.org/wiki/Amine" },
  },
  {
    text: "How many structural isomers does C₄H₁₀ have?",
    options: ["A) 2", "B) 1", "C) 3", "D) 4"],
    correct: 0,
    difficulty: "medium",
    explanation: "C₄H₁₀ has 2 structural isomers: n-butane (straight chain) and isobutane (2-methylpropane, branched). Both are used as fuels but have slightly different properties.",
    hints: [
      "Try drawing different arrangements of 4 carbons.",
      "Straight chain vs branched.",
      "n-butane and isobutane."
    ],
    learnMoreLink: { text: "Read more about Structural isomer", url: "https://en.wikipedia.org/wiki/Structural_isomer" },
  },
  {
    text: "What is an ester formed from?",
    options: ["A) Carboxylic acid + alcohol", "B) Two alcohols", "C) Two acids", "D) Acid + amine"],
    correct: 0,
    difficulty: "easy",
    explanation: "Esters form from a carboxylic acid + alcohol (esterification), releasing water. They're responsible for fruit aromas (banana, pineapple, apple) and form fats in your body when fatty acids combine with glycerol.",
    hints: [
      "Loss of water (esterification).",
      "Common in fats and fragrances.",
      "Functional group is -COO-."
    ],
    learnMoreLink: { text: "Read more about Ester", url: "https://en.wikipedia.org/wiki/Ester" },
  },
  {
    text: "What is the IUPAC name of CH₃CH=CHCH₃?",
    options: ["A) But-2-ene", "B) But-1-ene", "C) Butane", "D) Butyne"],
    correct: 0,
    difficulty: "medium",
    explanation: "CH₃CH=CHCH₃ is but-2-ene (the double bond is between C2 and C3). It exists as cis and trans isomers, important in petrochemistry as a feedstock for synthetic rubber.",
    hints: [
      "4 carbons (but-).",
      "Double bond starts at C2.",
      "-ene means double bond."
    ],
    learnMoreLink: { text: "Read more about IUPAC nomenclature of organic chemistry", url: "https://en.wikipedia.org/wiki/IUPAC_nomenclature_of_organic_chemistry" },
  },
  {
    text: "What is the molecular formula of glucose?",
    options: ["A) C₆H₁₂O₆", "B) C₁₂H₂₂O₁₁", "C) C₂H₆O", "D) CH₂O"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Glucose has the formula C₆H₁₂O₆, a hexose sugar that's the primary energy source for most cells. It's also the building block of cellulose, starch, and glycogen.",
    hints: [
      "Hexose sugar.",
      "Has 6 carbons.",
      "Building block of starch and cellulose."
    ],
    learnMoreLink: { text: "Read more about Glucose", url: "https://en.wikipedia.org/wiki/Glucose" },
  },
  {
    text: "Which type of polymer is DNA?",
    options: ["A) Condensation polymer of nucleotides", "B) Addition polymer", "C) A simple alkane", "D) An inorganic polymer"],
    correct: 0,
    difficulty: "hard",
    explanation: "DNA is a condensation polymer of nucleotides linked by phosphodiester bonds, with water released during each linkage. It encodes genetic information using 4 bases (A, T, G, C) in a double-helical structure.",
    hints: [
      "Linked by phosphodiester bonds.",
      "Water is released during synthesis.",
      "Made of A, T, G, C nucleotides."
    ],
    learnMoreLink: { text: "Read more about DNA", url: "https://en.wikipedia.org/wiki/DNA" },
  },
  {
    text: "What does the suffix '-ol' indicate in IUPAC names?",
    options: ["A) Alcohol", "B) Aldehyde", "C) Ketone", "D) Acid"],
    correct: 0,
    difficulty: "beginner",
    explanation: "The suffix '-ol' indicates an alcohol (-OH group). Methanol, ethanol, and propanol all follow this naming convention. Numbers indicate the carbon position of the OH group.",
    hints: [
      "Refers to the OH group.",
      "Examples: ethanol, methanol.",
      "Comes from 'alcohol'."
    ],
    learnMoreLink: { text: "Read more about Alcohol", url: "https://en.wikipedia.org/wiki/Alcohol" },
  },
  {
    text: "How many isomers does C₅H₁₂ have?",
    options: ["A) 3", "B) 2", "C) 4", "D) 5"],
    correct: 0,
    difficulty: "hard",
    explanation: "C₅H₁₂ has 3 structural isomers: n-pentane (straight), isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane). The number of isomers grows rapidly with carbon count.",
    hints: [
      "All are alkanes (saturated).",
      "Try n-pentane, isopentane, neopentane.",
      "Three different carbon skeletons."
    ],
    learnMoreLink: { text: "Read more about Pentane", url: "https://en.wikipedia.org/wiki/Pentane" },
  },
  {
    text: "Which functional group is responsible for soap's cleaning action when paired with a long hydrocarbon chain?",
    options: ["A) Carboxylate (-COO⁻)", "B) Hydroxyl (-OH)", "C) Amine (-NH₂)", "D) Aldehyde (-CHO)"],
    correct: 0,
    difficulty: "medium",
    explanation: "Soap molecules have a polar carboxylate head (-COO⁻Na⁺) and nonpolar hydrocarbon tail. The polar head dissolves in water while the tail dissolves in grease, allowing soap to emulsify and remove oils.",
    hints: [
      "Soaps are sodium salts of long-chain fatty acids.",
      "The polar end is hydrophilic.",
      "Originally from fats reacting with NaOH."
    ],
    learnMoreLink: { text: "Read more about Soap", url: "https://en.wikipedia.org/wiki/Soap" },
  },
  {
    text: "What product forms when methanol reacts with acetic acid?",
    options: ["A) Methyl acetate (an ester)", "B) Methane", "C) Formaldehyde", "D) Sodium acetate"],
    correct: 0,
    difficulty: "medium",
    explanation: "CH₃OH + CH₃COOH → CH₃COOCH₃ (methyl acetate) + H₂O. Methyl acetate is a common solvent and has a fruity smell. This is a classic Fischer esterification reaction.",
    hints: [
      "Acid + alcohol = ester (esterification).",
      "Methanol provides the methyl group.",
      "Acetate is from acetic acid."
    ],
    learnMoreLink: { text: "Read more about Fischer esterification", url: "https://en.wikipedia.org/wiki/Fischer%E2%80%93Speier_esterification" },
  },
  {
    text: "Which factor does NOT typically increase reaction rate?",
    options: ["A) Decreasing temperature", "B) Increasing concentration", "C) Adding a catalyst", "D) Increasing surface area"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Decreasing temperature slows reactions because molecules move more slowly and have less energy to overcome activation barriers. This is why we refrigerate food — slowing the reactions that cause spoilage.",
    hints: [
      "Lower temperature means slower molecules.",
      "All others speed up reactions.",
      "Think of refrigerating food."
    ],
    learnMoreLink: { text: "Read more about Reaction rate", url: "https://en.wikipedia.org/wiki/Reaction_rate" },
  },
  {
    text: "What does Le Chatelier's principle state?",
    options: ["A) An equilibrium shifts to counteract a disturbance", "B) Reactions always go to completion", "C) Catalysts shift equilibrium", "D) Temperature has no effect"],
    correct: 0,
    difficulty: "medium",
    explanation: "Le Chatelier's principle states that if a system at equilibrium is disturbed, it will shift to counteract the disturbance. This is used in industry — e.g., the Haber process uses high pressure to push the equilibrium toward ammonia.",
    hints: [
      "Equilibrium responds to changes.",
      "If you add a reactant, more product forms.",
      "Heat, pressure, concentration all matter."
    ],
    learnMoreLink: { text: "Read more about Le Chatelier's principle", url: "https://en.wikipedia.org/wiki/Le_Chatelier%27s_principle" },
  },
  {
    text: "What is an exothermic reaction?",
    options: ["A) One that releases heat to surroundings", "B) One that absorbs heat", "C) One that produces gas", "D) One that requires a catalyst"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Exothermic reactions release heat to the surroundings (ΔH < 0), like combustion or freezing. The energy of products is lower than reactants, so the difference is released as heat.",
    hints: [
      "Heat flows out of the system.",
      "ΔH is negative.",
      "Combustion is a classic example."
    ],
    learnMoreLink: { text: "Read more about Exothermic reaction", url: "https://en.wikipedia.org/wiki/Exothermic_reaction" },
  },
  {
    text: "What does the equilibrium constant Kc express?",
    options: ["A) Ratio of product to reactant concentrations at equilibrium", "B) The reaction rate", "C) The activation energy", "D) The temperature"],
    correct: 0,
    difficulty: "medium",
    explanation: "Kc = [products]^coefficients / [reactants]^coefficients at equilibrium. A large Kc means the equilibrium favors products, while a small Kc favors reactants. Kc is constant only at constant temperature.",
    hints: [
      "Products over reactants, each raised to stoichiometric power.",
      "Constant at constant temperature.",
      "Large Kc favors products."
    ],
    learnMoreLink: { text: "Read more about Equilibrium constant", url: "https://en.wikipedia.org/wiki/Equilibrium_constant" },
  },
  {
    text: "If a reaction is endothermic, increasing temperature will:",
    options: ["A) Shift equilibrium toward products", "B) Shift equilibrium toward reactants", "C) Have no effect", "D) Stop the reaction"],
    correct: 0,
    difficulty: "medium",
    explanation: "For endothermic reactions, heat acts like a reactant. Adding heat shifts equilibrium toward products (Le Chatelier's). This is why higher temperatures favor endothermic reactions like the dissociation of N₂O₄.",
    hints: [
      "Endothermic absorbs heat (treat heat as a reactant).",
      "Adding heat = adding a reactant.",
      "Equilibrium shifts to consume the added 'reactant'."
    ],
    learnMoreLink: { text: "Read more about Endothermic process", url: "https://en.wikipedia.org/wiki/Endothermic_process" },
  },
  {
    text: "Increasing the surface area of a solid reactant will:",
    options: ["A) Increase the reaction rate", "B) Decrease the reaction rate", "C) Have no effect", "D) Make the reaction reversible"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Increasing surface area increases reaction rate by exposing more particles for collision. This is why fine powders can be explosive (think flour mills) while solid chunks of the same material are safe.",
    hints: [
      "More surface = more contact with other reactants.",
      "Powders react faster than chunks.",
      "More collisions per second."
    ],
    learnMoreLink: { text: "Read more about Reaction rate", url: "https://en.wikipedia.org/wiki/Reaction_rate" },
  },
  {
    text: "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing pressure will:",
    options: ["A) Shift toward NH₃ (fewer moles of gas)", "B) Shift toward N₂ and H₂", "C) Have no effect", "D) Decrease Kc"],
    correct: 0,
    difficulty: "hard",
    explanation: "Increasing pressure shifts equilibrium toward fewer moles of gas. The right side has 2 moles (NH₃) vs 4 on the left, so equilibrium shifts to produce more NH₃. The Haber process exploits this by using high pressure (~200 atm).",
    hints: [
      "Le Chatelier: pressure shifts toward fewer moles of gas.",
      "4 moles on left, 2 on right.",
      "System wants to relieve pressure."
    ],
    learnMoreLink: { text: "Read more about Haber process", url: "https://en.wikipedia.org/wiki/Haber_process" },
  },
  {
    text: "Which prediction is correct? When you add NaCl to a saturated AgCl solution containing AgCl(s):",
    options: ["A) More AgCl precipitates (common ion effect)", "B) AgCl dissolves more", "C) No effect", "D) Ag metal forms"],
    correct: 0,
    difficulty: "hard",
    explanation: "Adding NaCl provides extra Cl⁻ ions, shifting the equilibrium AgCl(s) ⇌ Ag⁺ + Cl⁻ toward the solid (left), causing more AgCl to precipitate. This is the common ion effect, important in selective precipitation and water treatment.",
    hints: [
      "Common ion effect.",
      "Adding Cl⁻ shifts equilibrium toward solid.",
      "Le Chatelier's principle applies."
    ],
    learnMoreLink: { text: "Read more about Common-ion effect", url: "https://en.wikipedia.org/wiki/Common-ion_effect" },
  },
  {
    text: "Which lab apparatus is used for accurate volume measurements during titration?",
    options: ["A) Burette", "B) Beaker", "C) Test tube", "D) Watch glass"],
    correct: 0,
    difficulty: "beginner",
    explanation: "A burette is a graduated glass tube with a stopcock used to dispense precise volumes during titrations. It allows readings to ±0.05 mL, essential for accurate analytical chemistry.",
    hints: [
      "Long graduated glass tube with stopcock.",
      "Used for delivering precise volumes.",
      "Read the meniscus."
    ],
    learnMoreLink: { text: "Read more about Burette", url: "https://en.wikipedia.org/wiki/Burette" },
  },
  {
    text: "What does PPE stand for in lab safety?",
    options: ["A) Personal Protective Equipment", "B) Pure Particle Element", "C) Proper Procedure Education", "D) Pressure Plate Equipment"],
    correct: 0,
    difficulty: "beginner",
    explanation: "PPE stands for Personal Protective Equipment, including safety goggles, gloves, lab coats, and closed-toe shoes. PPE is the last line of defense against chemical and physical hazards in the lab.",
    hints: [
      "Includes goggles, gloves, lab coat.",
      "Worn to prevent injury.",
      "P-P-E."
    ],
    learnMoreLink: { text: "Read more about Personal protective equipment", url: "https://en.wikipedia.org/wiki/Personal_protective_equipment" },
  },
  {
    text: "Which symbol indicates a flammable substance?",
    options: ["A) Flame icon", "B) Skull and crossbones", "C) Exclamation mark", "D) Test tube on hand"],
    correct: 0,
    difficulty: "beginner",
    explanation: "The flame symbol indicates flammable substances that can ignite easily, like ethanol, acetone, and gasoline. These should be stored away from heat sources and used in well-ventilated areas.",
    hints: [
      "Substance can catch fire.",
      "Common on alcohols and solvents.",
      "Shows fire."
    ],
    learnMoreLink: { text: "Read more about Flammability", url: "https://en.wikipedia.org/wiki/Flammability" },
  },
  {
    text: "What is COSHH?",
    options: ["A) Control of Substances Hazardous to Health", "B) Chemical Organization for Safety and Health Handling", "C) Center of Safety in Hazard Houses", "D) Compound Origin Safety Health Handbook"],
    correct: 0,
    difficulty: "easy",
    explanation: "COSHH (Control of Substances Hazardous to Health) is UK legislation requiring employers to assess and control health risks from hazardous substances. It mandates risk assessments before working with chemicals.",
    hints: [
      "UK regulation.",
      "About hazardous substance assessment.",
      "Risk assessments before lab work."
    ],
    learnMoreLink: { text: "Read more about Control of Substances Hazardous to Health Regulations 2002", url: "https://en.wikipedia.org/wiki/Control_of_Substances_Hazardous_to_Health_Regulations_2002" },
  },
  {
    text: "Express 1234 g to 2 significant figures in scientific notation.",
    options: ["A) 1.2 × 10³ g", "B) 12 × 10² g", "C) 1.23 × 10³ g", "D) 1234 g"],
    correct: 0,
    difficulty: "medium",
    explanation: "1234 rounded to 2 significant figures is 1200, written as 1.2 × 10³ in scientific notation. Scientific notation makes it explicit how many digits are significant, avoiding ambiguity.",
    hints: [
      "Round to 2 sig figs.",
      "Use proper scientific notation (1 ≤ mantissa < 10).",
      "1234 → 1.2 × 10³."
    ],
    learnMoreLink: { text: "Read more about Scientific notation", url: "https://en.wikipedia.org/wiki/Scientific_notation" },
  },
  {
    text: "When you add an acid to baking soda, what gas is released?",
    options: ["A) CO₂", "B) H₂", "C) O₂", "D) N₂"],
    correct: 0,
    difficulty: "beginner",
    explanation: "NaHCO₃ + HCl → NaCl + H₂O + CO₂. The CO₂ released causes the fizzing bubbles in baking volcanoes and helps baked goods rise. It's also why your stomach burps after taking antacids.",
    hints: [
      "Baking soda is NaHCO₃.",
      "Acid + carbonate/bicarbonate → CO₂.",
      "It's the bubbles in volcano experiments."
    ],
    learnMoreLink: { text: "Read more about Sodium bicarbonate", url: "https://en.wikipedia.org/wiki/Sodium_bicarbonate" },
  },
  {
    text: "If a compound has 40% C, 6.7% H, and 53.3% O by mass, what is its empirical formula?",
    options: ["A) CH₂O", "B) C₂H₄O₂", "C) C₆H₁₂O₆", "D) CHO"],
    correct: 0,
    difficulty: "hard",
    explanation: "Moles: C = 3.33, H = 6.7, O = 3.33. Ratio: 1:2:1, so empirical formula is CH₂O. This is the empirical formula of glucose (C₆H₁₂O₆) and many carbohydrates.",
    hints: [
      "Divide by atomic mass: C 40/12, H 6.7/1, O 53.3/16.",
      "Get moles: 3.33, 6.7, 3.33.",
      "Divide by smallest to get ratio."
    ],
    learnMoreLink: { text: "Read more about Empirical formula", url: "https://en.wikipedia.org/wiki/Empirical_formula" },
  },
  {
    text: "Which is true about the noble gas xenon?",
    options: ["A) It can form compounds with fluorine", "B) It is more reactive than fluorine", "C) It cannot form any compounds", "D) It is a metal"],
    correct: 0,
    difficulty: "hard",
    explanation: "Xenon does form compounds with very electronegative elements like fluorine and oxygen (e.g., XeF₂, XeF₄, XeO₃). Heavier noble gases have larger atoms with more diffuse electrons, making them less inert than helium and neon.",
    hints: [
      "Originally thought to be inert.",
      "Heavier noble gases can be coaxed to react.",
      "XeF₂, XeF₄, XeF₆ exist."
    ],
    learnMoreLink: { text: "Read more about Xenon", url: "https://en.wikipedia.org/wiki/Xenon" },
  },
  {
    text: "What is 1 mole of water in grams?",
    options: ["A) 18 g", "B) 16 g", "C) 36 g", "D) 1 g"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Molar mass of H₂O = 2(1) + 16 = 18 g/mol. So 1 mole of water has a mass of 18 g and occupies about 18 mL — useful for stoichiometry calculations.",
    hints: [
      "H = 1 g/mol, O = 16 g/mol.",
      "H₂O = 2(1) + 16.",
      "Total atomic mass."
    ],
    learnMoreLink: { text: "Read more about Mole (unit)", url: "https://en.wikipedia.org/wiki/Mole_(unit)" },
  },
  {
    text: "Which functional group does aspirin contain?",
    options: ["A) Both ester and carboxylic acid", "B) Only ketone", "C) Only amine", "D) Only alcohol"],
    correct: 0,
    difficulty: "medium",
    explanation: "Aspirin (acetylsalicylic acid) contains both an ester group (from acetylation of OH) and a carboxylic acid group. It works by inhibiting cyclooxygenase enzymes, reducing pain and inflammation.",
    hints: [
      "Acetylsalicylic acid.",
      "Has -COOH and -O-CO- groups.",
      "Made by acetylating salicylic acid."
    ],
    learnMoreLink: { text: "Read more about Aspirin", url: "https://en.wikipedia.org/wiki/Aspirin" },
  },
  {
    text: "What does it mean if a reaction has Kc >> 1?",
    options: ["A) Equilibrium favors products", "B) Equilibrium favors reactants", "C) Reaction is at equilibrium with equal concentrations", "D) Reaction is very slow"],
    correct: 0,
    difficulty: "medium",
    explanation: "Kc >> 1 means the equilibrium concentrations of products are much greater than reactants — the reaction strongly favors products. Some reactions with Kc > 10¹⁰ are essentially irreversible.",
    hints: [
      "Kc = [products]/[reactants] at equilibrium.",
      "Large numerator means more products.",
      "Reaction goes nearly to completion."
    ],
    learnMoreLink: { text: "Read more about Equilibrium constant", url: "https://en.wikipedia.org/wiki/Equilibrium_constant" },
  },
  {
    text: "Which is responsible for the smell of bananas (an ester)?",
    options: ["A) Isoamyl acetate", "B) Acetic acid", "C) Ethanol", "D) Benzaldehyde"],
    correct: 0,
    difficulty: "medium",
    explanation: "Isoamyl acetate is the ester responsible for banana smell, formed from isoamyl alcohol and acetic acid. Many esters have characteristic fruit and flower smells, making them important in food flavoring and perfumery.",
    hints: [
      "Esters often have fruity smells.",
      "Made from isoamyl alcohol + acetic acid.",
      "Used in artificial banana flavoring."
    ],
    learnMoreLink: { text: "Read more about Isoamyl acetate", url: "https://en.wikipedia.org/wiki/Isoamyl_acetate" },
  },
  {
    text: "Which lab safety symbol shows a flame and warns that a substance can catch fire easily?",
    options: ["A) Corrosive", "B) Flammable", "C) Toxic", "D) Oxidizer"],
    correct: 1,
    difficulty: "beginner",
    explanation: "The flammable hazard symbol warns that a chemical can easily catch fire when exposed to a spark, flame, or heat. Common flammable lab chemicals include ethanol, acetone, and hexane, which is why open flames are restricted near them.",
    hints: [
      "Think about what the picture of a flame represents.",
      "It is a hazard related to ignition and burning.",
      "The word starts with 'F' and describes things that easily light on fire."
    ],
    learnMoreLink: { text: "Read more about GHS hazard pictograms", url: "https://en.wikipedia.org/wiki/GHS_hazard_pictograms" },
  },
  {
    text: "Which state of matter has a definite volume but no definite shape?",
    options: ["A) Solid", "B) Liquid", "C) Gas", "D) Plasma"],
    correct: 1,
    difficulty: "beginner",
    explanation: "Liquids have a fixed volume because their particles are close together, but they take the shape of their container because the particles can flow past each other.",
    hints: [
      "Think about something you can pour into different containers.",
      "It keeps the same amount but changes shape based on the container.",
      "Water at room temperature is a familiar example."
    ],
    learnMoreLink: { text: "Read more about liquids", url: "https://en.wikipedia.org/wiki/Liquid" },
  },
  {
    text: "What color does blue litmus paper turn when dipped into an acidic solution like lemon juice?",
    options: ["A) Green", "B) Yellow", "C) Red", "D) Stays blue"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Acids turn blue litmus paper red, while bases turn red litmus paper blue. This simple test has been used in chemistry classrooms for centuries to quickly identify whether a substance is acidic or basic.",
    hints: [
      "Acids change the color of litmus paper.",
      "The color is warm and associated with danger.",
      "It is the same color as a ripe tomato or a stop sign."
    ],
    learnMoreLink: { text: "Read more about litmus", url: "https://en.wikipedia.org/wiki/Litmus" },
  },
  {
    text: "On the periodic table, what do elements in the same vertical column (group) share?",
    options: ["A) The same number of protons", "B) The same atomic mass", "C) Similar chemical properties", "D) The same melting point"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Elements in the same group have the same number of valence electrons, giving them similar chemical behavior. This is why alkali metals all react vigorously with water, and noble gases are all very unreactive.",
    hints: [
      "Columns group elements that behave alike in reactions.",
      "It has to do with how their outermost electrons are arranged.",
      "For example, all elements in Group 1 are reactive metals like sodium and potassium."
    ],
    learnMoreLink: { text: "Read more about periodic table groups", url: "https://en.wikipedia.org/wiki/Group_(periodic_table)" },
  },
  {
    text: "What is the chemical formula for table salt?",
    options: ["A) NaCl", "B) KCl", "C) CaCO₃", "D) NaHCO₃"],
    correct: 0,
    difficulty: "beginner",
    explanation: "Table salt is sodium chloride, NaCl, formed when sodium gives up an electron to chlorine, creating ions held together by ionic bonds. It is essential for human nerve and muscle function.",
    hints: [
      "Table salt is made of sodium and chlorine.",
      "Sodium's chemical symbol is Na, and chlorine's is Cl.",
      "It is a one-to-one ratio of these two elements."
    ],
    learnMoreLink: { text: "Read more about sodium chloride", url: "https://en.wikipedia.org/wiki/Sodium_chloride" },
  },
  {
    text: "Which of these is a chemical change rather than a physical change?",
    options: ["A) Ice melting into water", "B) Sugar dissolving in tea", "C) Iron rusting in damp air", "D) Water boiling into steam"],
    correct: 2,
    difficulty: "beginner",
    explanation: "Rusting is a chemical change because iron reacts with oxygen and water to form iron oxide, a completely new substance. The other options are physical changes where the substance only changes state or form.",
    hints: [
      "A chemical change forms a new substance with new properties.",
      "Look for the option where the original material is permanently transformed.",
      "It involves a metal reacting with oxygen to form an orange-brown coating."
    ],
    learnMoreLink: { text: "Read more about chemical change", url: "https://en.wikipedia.org/wiki/Chemical_change" },
  },
  {
    text: "A buffer contains 0.20 M acetic acid (pKa = 4.74) and 0.20 M sodium acetate. What is the pH?",
    options: ["A) 4.44", "B) 4.74", "C) 5.04", "D) 9.26"],
    correct: 1,
    difficulty: "hard",
    explanation: "When [A⁻] = [HA], log([A⁻]/[HA]) = 0, so pH = pKa = 4.74. Buffers are most effective at a pH equal to the pKa, which guides selection of buffer systems in biology and industry.",
    hints: [
      "Use the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]).",
      "When the concentrations of acid and conjugate base are equal, the log term simplifies.",
      "log(1) = 0, so pH equals the pKa."
    ],
    learnMoreLink: { text: "Read more about Henderson-Hasselbalch equation", url: "https://en.wikipedia.org/wiki/Henderson%E2%80%93Hasselbalch_equation" },
  },
  {
    text: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), which is the correct equilibrium constant expression Kc?",
    options: ["A) [NH₃]² / ([N₂][H₂]³)", "B) [N₂][H₂]³ / [NH₃]²", "C) 2[NH₃] / ([N₂] + 3[H₂])", "D) [NH₃] / ([N₂][H₂])"],
    correct: 0,
    difficulty: "hard",
    explanation: "Kc = [NH₃]² / ([N₂][H₂]³). This expression governs the Haber-Bosch process used to manufacture ammonia for fertilizers, which feeds roughly half the world's population.",
    hints: [
      "Kc puts products over reactants.",
      "Each concentration is raised to its stoichiometric coefficient.",
      "Ammonia (coefficient 2) is the product; nitrogen is 1 and hydrogen is 3."
    ],
    learnMoreLink: { text: "Read more about equilibrium constant", url: "https://en.wikipedia.org/wiki/Equilibrium_constant" },
  },
  {
    text: "What is the oxidation state of manganese in the permanganate ion, MnO₄⁻?",
    options: ["A) +3", "B) +5", "C) +7", "D) -1"],
    correct: 2,
    difficulty: "hard",
    explanation: "With four oxygens at -2 each (-8 total), and the overall charge being -1, manganese must be +7. Permanganate is a powerful oxidizing agent used in water treatment and laboratory titrations.",
    hints: [
      "Oxygen is typically -2.",
      "The sum of all oxidation states must equal the overall charge (-1).",
      "Mn + 4(-2) = -1; solve for Mn."
    ],
    learnMoreLink: { text: "Read more about permanganate", url: "https://en.wikipedia.org/wiki/Permanganate" },
  },
  {
    text: "How many structural isomers exist for the molecular formula C₄H₁₀?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    correct: 1,
    difficulty: "medium",
    explanation: "C₄H₁₀ has two structural isomers: n-butane (straight chain) and 2-methylpropane (branched). Both are used as fuels but have different boiling points due to their different shapes.",
    hints: [
      "Draw all ways four carbons can connect.",
      "Consider both straight-chain and branched arrangements.",
      "One has all four carbons in a row, the other has one branching carbon."
    ],
    learnMoreLink: { text: "Read more about structural isomers", url: "https://en.wikipedia.org/wiki/Structural_isomer" },
  },
  {
    text: "According to VSEPR theory, what is the molecular geometry of XeF₄?",
    options: ["A) Tetrahedral", "B) Square planar", "C) Seesaw", "D) Octahedral"],
    correct: 1,
    difficulty: "hard",
    explanation: "XeF₄ has 6 electron domains arranged octahedrally with lone pairs on opposite sides, leaving fluorines in a square plane. Its discovery proved that noble gases could form stable compounds.",
    hints: [
      "Xenon has 8 valence electrons; count all electron domains.",
      "There are 4 bonding pairs and 2 lone pairs around Xe.",
      "6 domains arrange octahedrally; lone pairs occupy opposite axial sites."
    ],
    learnMoreLink: { text: "Read more about xenon tetrafluoride", url: "https://en.wikipedia.org/wiki/Xenon_tetrafluoride" },
  },
  {
    text: "How many moles of O₂ are needed for complete combustion of 2 moles of propane (C₃H₈)?",
    options: ["A) 5", "B) 7", "C) 10", "D) 14"],
    correct: 2,
    difficulty: "hard",
    explanation: "Balanced: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, so 2 mol propane needs 10 mol O₂. Propane combustion powers barbecues and home heating across the world.",
    hints: [
      "Balance: C₃H₈ + O₂ → CO₂ + H₂O.",
      "Each mole of propane needs 5 moles of O₂.",
      "Multiply by 2 for 2 moles of propane."
    ],
    learnMoreLink: { text: "Read more about combustion", url: "https://en.wikipedia.org/wiki/Combustion" },
  },
  {
    text: "Which of these bonds is the most polar?",
    options: ["A) C–H", "B) N–H", "C) O–H", "D) F–H"],
    correct: 3,
    difficulty: "medium",
    explanation: "Fluorine (electronegativity 3.98) creates the largest electronegativity gap with hydrogen, making H–F the most polar bond. This extreme polarity enables HF to etch glass by attacking SiO₂.",
    hints: [
      "Bond polarity depends on the electronegativity difference between atoms.",
      "Fluorine is the most electronegative element.",
      "Compare the electronegativity gap between H and each partner element."
    ],
    learnMoreLink: { text: "Read more about electronegativity", url: "https://en.wikipedia.org/wiki/Electronegativity" },
  },
  {
    text: "Polyethylene forms by linking many ethylene (C₂H₄) units. What type of polymer is this?",
    options: ["A) Condensation polymer", "B) Addition polymer", "C) Biopolymer", "D) Cross-linked thermoset"],
    correct: 1,
    difficulty: "medium",
    explanation: "Polyethylene is an addition polymer: the C=C double bond of ethylene opens and monomers add without releasing any byproduct. It is the world's most widely produced plastic, found in bags, bottles, and piping.",
    hints: [
      "Does a small molecule like water get released during polymerization?",
      "Ethylene's double bond opens so monomers join directly with no byproduct.",
      "Named for how monomers simply 'add' to the growing chain."
    ],
    learnMoreLink: { text: "Read more about addition polymerization", url: "https://en.wikipedia.org/wiki/Chain-growth_polymerization" },
  },
  {
    text: "For exothermic 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which condition shifts equilibrium to produce more SO₃?",
    options: ["A) Increasing temperature", "B) Decreasing pressure", "C) Removing SO₂", "D) Increasing pressure and lowering temperature"],
    correct: 3,
    difficulty: "hard",
    explanation: "Higher pressure favors the side with fewer moles of gas (products, 2 mol), and lower temperature favors the exothermic forward reaction. The industrial Contact process exploits both effects to maximize SO₃ yield for sulfuric acid production.",
    hints: [
      "Le Châtelier: the system shifts to oppose any imposed stress.",
      "Reactant side has 3 mol gas; product side has 2 mol gas.",
      "Exothermic reactions are favored by lower temperatures; fewer-mol side is favored by higher pressure."
    ],
    learnMoreLink: { text: "Read more about Le Châtelier's principle", url: "https://en.wikipedia.org/wiki/Le_Chatelier%27s_principle" },
  },
  {
    text: "For A + B → C, doubling [A] doubles the rate; doubling [B] quadruples it. What is the overall reaction order?",
    options: ["A) First order", "B) Second order", "C) Third order", "D) Zero order"],
    correct: 2,
    difficulty: "hard",
    explanation: "Rate = k[A]¹[B]² gives overall order 3. Experimental determination of rate laws reveals the reaction mechanism and is fundamental to optimizing industrial chemical processes.",
    hints: [
      "Find the order in each reactant from the experimental data.",
      "Doubling [A] → rate ×2 means order = 1; doubling [B] → rate ×4 means order = 2.",
      "Add individual orders: 1 + 2."
    ],
    learnMoreLink: { text: "Read more about rate equations", url: "https://en.wikipedia.org/wiki/Rate_equation" },
  },
  {
    text: "What is the IUPAC name of (CH₃)₂CHCH₂CH(CH₃)CH₃?",
    options: ["A) 2,4-dimethylpentane", "B) 2,3-dimethylpentane", "C) 2-methylhexane", "D) 3,3-dimethylbutane"],
    correct: 0,
    difficulty: "hard",
    explanation: "The longest chain is 5 carbons (pentane) with methyl groups on C2 and C4, giving 2,4-dimethylpentane. IUPAC nomenclature unambiguously names every organic compound, critical for pharmacology and chemical synthesis.",
    hints: [
      "Find the longest continuous carbon chain for the parent name.",
      "The longest chain has 5 carbons: parent is pentane.",
      "Methyl groups sit on carbons 2 and 4 (lowest locant rule)."
    ],
    learnMoreLink: { text: "Read more about IUPAC nomenclature", url: "https://en.wikipedia.org/wiki/IUPAC_nomenclature_of_organic_chemistry" },
  }
];
