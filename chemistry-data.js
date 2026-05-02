const CHEMISTRY_QUESTIONS = [
  {
    text: "How many protons does a carbon atom have?",
    options: ["2", "4", "6", "8"],
    correct: 2,
    hints: [
      "Think about where carbon sits in the periodic table — which group and period?",
      "The atomic number of an element directly tells you how many protons it has.",
      "Carbon is element number 6 on the periodic table — its atomic number is 6."
    ],
    explanation: "The atomic number defines an element — carbon is always 6 protons, nothing more and nothing less. Add a proton and you get nitrogen (7); remove one and you have boron (5). Every carbon atom in your body, in diamonds, and in the CO₂ you exhale shares this same fundamental property.",
    learnMoreLink: { text: "Read more about atomic number", url: "https://en.wikipedia.org/wiki/Atomic_number" },
    difficulty: "easy"
  },
  {
    text: "What is the chemical formula for water?",
    options: ["H₂O₂", "HO", "H₂O", "H₃O"],
    correct: 2,
    hints: [
      "Water is made of hydrogen and oxygen atoms bonded together.",
      "Think about the valency of hydrogen (1) and oxygen (2) and how they satisfy each other.",
      "One oxygen atom bonds with exactly two hydrogen atoms to fill its outer shell."
    ],
    explanation: "Water is H₂O because oxygen has two unpaired electrons that each bond with one hydrogen atom. This precise 2:1 ratio is fixed by the atomic structure and cannot vary. Changing the ratio gives a completely different substance: H₂O₂ is hydrogen peroxide — a powerful bleach and disinfectant used in wound care and hair colouring.",
    learnMoreLink: { text: "Read more about the water molecule", url: "https://en.wikipedia.org/wiki/Water" },
    difficulty: "easy"
  },
  {
    text: "What type of bond forms between sodium (Na) and chlorine (Cl) in NaCl?",
    options: ["Covalent", "Metallic", "Hydrogen", "Ionic"],
    correct: 3,
    hints: [
      "Consider the large difference in electronegativity between a metal and a non-metal.",
      "When atoms have very different electronegativities, electrons are transferred rather than shared.",
      "Na donates one electron to Cl, forming Na⁺ and Cl⁻ ions held together by electrostatic attraction."
    ],
    explanation: "Ionic bonds form when a metal (which easily loses electrons) reacts with a non-metal (which avidly gains them). Sodium donates one electron to chlorine, creating oppositely charged ions that attract each other strongly. Table salt's high melting point (801°C), crystalline structure, and ability to conduct electricity when dissolved all result directly from this ionic bonding.",
    learnMoreLink: { text: "Read more about ionic bonds", url: "https://en.wikipedia.org/wiki/Ionic_bonding" },
    difficulty: "medium"
  },
  {
    text: "The atomic number of an element equals its number of:",
    options: ["Neutrons", "Protons", "Electrons + neutrons", "Nucleons"],
    correct: 1,
    hints: [
      "Atomic number is the defining property of an element — changing it changes the element itself.",
      "Think about which subatomic particle determines which element an atom is.",
      "The atomic number counts only the protons in the nucleus — it never changes for a given element."
    ],
    explanation: "The atomic number counts protons in the nucleus, and protons determine an element's identity and chemical behaviour. In a neutral atom, the proton count is balanced by an equal number of electrons. If the proton count changes — through a nuclear reaction — you get an entirely different element, which is what happens in radioactive decay.",
    learnMoreLink: { text: "Read more about atomic number", url: "https://en.wikipedia.org/wiki/Atomic_number" },
    difficulty: "easy"
  },
  {
    text: "What gas is produced when zinc metal reacts with hydrochloric acid?",
    options: ["Oxygen", "Chlorine", "Carbon dioxide", "Hydrogen"],
    correct: 3,
    hints: [
      "When a metal reacts with an acid, it is a single displacement reaction.",
      "Think about what the metal displaces from the acid — look at what's in HCl.",
      "Zn + 2HCl → ZnCl₂ + H₂. Zinc displaces hydrogen from the acid, releasing hydrogen gas."
    ],
    explanation: "Reactive metals sit above hydrogen in the activity series and can displace it from acids. Zinc takes electrons from hydrogen ions in HCl, releasing H₂ gas (which burns with a 'squeaky pop'). This reaction was historically used to generate hydrogen for balloons before large-scale industrial methods became available.",
    learnMoreLink: { text: "Read more about single displacement reactions", url: "https://en.wikipedia.org/wiki/Single-displacement_reaction" },
    difficulty: "medium"
  },
  {
    text: "What is the pH of a neutral solution at 25°C?",
    options: ["0", "14", "7", "1"],
    correct: 2,
    hints: [
      "The pH scale runs from 0 (most acidic) to 14 (most alkaline).",
      "A neutral solution is neither acidic nor alkaline — think about the midpoint of the scale.",
      "Pure water at 25°C has equal H⁺ and OH⁻ concentrations, placing it exactly at pH 7."
    ],
    explanation: "The pH scale measures hydrogen ion concentration on a logarithmic scale — each unit represents a tenfold change. Pure water at 25°C dissociates equally into H⁺ and OH⁻, giving exactly pH 7. Lemon juice at pH 2 is 100,000 times more acidic than pure water, while bleach at pH 12 is 100,000 times more alkaline.",
    learnMoreLink: { text: "Read more about the pH scale", url: "https://en.wikipedia.org/wiki/PH" },
    difficulty: "easy"
  },
  {
    text: "How many electrons can the first electron shell hold?",
    options: ["8", "2", "18", "32"],
    correct: 1,
    hints: [
      "Electron shells fill in a set order, with the first shell closest to the nucleus.",
      "The first shell is the smallest and most restricted — it only contains one orbital.",
      "The first shell (n=1) holds only the 1s orbital, which fits a maximum of 2 electrons."
    ],
    explanation: "Electron shells have strict capacity limits set by quantum mechanics. The first shell contains only one orbital (1s) which holds exactly 2 electrons. This is why helium, with 2 electrons, is a noble gas — its first (and only) shell is completely full, giving it no tendency to gain or lose electrons and making it the most chemically inert element.",
    learnMoreLink: { text: "Read more about electron shells", url: "https://en.wikipedia.org/wiki/Electron_shell" },
    difficulty: "easy"
  },
  {
    text: "What is Avogadro's number (approximately)?",
    options: ["3.14 × 10²³", "6.02 × 10²³", "9.11 × 10²³", "1.66 × 10²³"],
    correct: 1,
    hints: [
      "Avogadro's number defines how many particles are in one mole of a substance.",
      "It's a huge number because atoms are incredibly small.",
      "Avogadro's constant is approximately 6.02 × 10²³ particles per mole."
    ],
    explanation: "Avogadro's number defines the mole — chemistry's counting unit for atoms and molecules. Just as a dozen always means 12, one mole always contains 6.02 × 10²³ particles. This enormous number reflects how tiny atoms are: one mole of hydrogen atoms weighs just 1 gram, yet contains more particles than there are stars in the observable universe.",
    learnMoreLink: { text: "Read more about Avogadro's number", url: "https://en.wikipedia.org/wiki/Avogadro_constant" },
    difficulty: "easy"
  },
  {
    text: "What are the products of burning methane (CH₄) in excess oxygen?",
    options: ["CO and H₂", "CO₂ and H₂O", "C and H₂O", "CO₂ and H₂"],
    correct: 1,
    hints: [
      "Combustion reacts a fuel with oxygen — methane is a hydrocarbon (contains C and H).",
      "Complete combustion fully oxidises both the carbon and the hydrogen in the fuel.",
      "Carbon → CO₂ and hydrogen → H₂O. The balanced equation is CH₄ + 2O₂ → CO₂ + 2H₂O."
    ],
    explanation: "Complete combustion fully oxidises all carbon to CO₂ and all hydrogen to H₂O, releasing maximum energy. Methane is the main component of natural gas used in cooking and heating. When oxygen is insufficient, incomplete combustion produces toxic carbon monoxide (CO) instead — which is why proper ventilation is critical whenever gas appliances are used indoors.",
    learnMoreLink: { text: "Read more about combustion reactions", url: "https://en.wikipedia.org/wiki/Combustion" },
    difficulty: "medium"
  },
  {
    text: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Nitrogen", "Chlorine", "Fluorine"],
    correct: 3,
    hints: [
      "Electronegativity increases as you go across a period (left to right) and up a group.",
      "Think about which corner of the periodic table has the highest electronegativity (excluding noble gases).",
      "Fluorine, in period 2 group 17, sits in the top-right and is the most electronegative element."
    ],
    explanation: "Electronegativity measures how strongly an atom attracts bonding electrons. Fluorine tops the list because it has the smallest atomic radius in its period and a high nuclear charge, pulling bonding electrons tightly. This extreme electronegativity makes fluorine useful in non-stick coatings (Teflon), toothpaste fluorides that strengthen tooth enamel, and many pharmaceuticals.",
    learnMoreLink: { text: "Read more about electronegativity", url: "https://en.wikipedia.org/wiki/Electronegativity" },
    difficulty: "medium"
  },
  {
    text: "What is the molecular formula for glucose?",
    options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₂O", "C₆H₁₀O₅"],
    correct: 0,
    hints: [
      "Glucose is a simple sugar — a monosaccharide that contains carbon, hydrogen, and oxygen.",
      "The number of carbon atoms in glucose is 6 — this is a key feature of hexose sugars.",
      "Glucose has the formula C₆H₁₂O₆ — 6 carbons, 12 hydrogens, 6 oxygens."
    ],
    explanation: "Glucose is the primary fuel for cells and the product of photosynthesis. Its formula C₆H₁₂O₆ is typical of carbohydrates, where hydrogen-to-oxygen is always 2:1. When you eat starchy foods, digestive enzymes break long starch chains into individual glucose molecules that enter your bloodstream — your blood sugar level is literally the concentration of glucose in your blood.",
    learnMoreLink: { text: "Read more about glucose", url: "https://en.wikipedia.org/wiki/Glucose" },
    difficulty: "medium"
  },
  {
    text: "How many covalent bonds does carbon typically form?",
    options: ["2", "6", "4", "1"],
    correct: 2,
    hints: [
      "The number of bonds an atom forms relates to its valence electrons and the octet rule.",
      "Carbon is in group 14, meaning it has 4 valence electrons.",
      "Carbon needs 4 more electrons to complete its outer shell, so it forms 4 covalent bonds."
    ],
    explanation: "Carbon's 4 valence electrons let it form 4 covalent bonds, giving it unmatched versatility — it can bond to itself in chains, rings, and 3D structures. This is why life is carbon-based: carbon forms the backbone of proteins, DNA, fats, and carbohydrates. Silicon, directly below carbon in the periodic table, is too large to form the same diversity of stable structures.",
    learnMoreLink: { text: "Read more about carbon bonding", url: "https://en.wikipedia.org/wiki/Carbon" },
    difficulty: "medium"
  },
  {
    text: "Which subatomic particle has no electric charge?",
    options: ["Proton", "Electron", "Neutron", "Positron"],
    correct: 2,
    hints: [
      "There are three main subatomic particles — one positive, one negative, one neutral.",
      "Think about which particle is found in the nucleus alongside the proton.",
      "The neutron lives in the nucleus but carries no charge — its name even hints at neutrality."
    ],
    explanation: "Neutrons in the nucleus have nearly the same mass as protons but carry no charge. They help hold the nucleus together through the strong nuclear force and contribute to atomic mass. Adding neutrons without changing protons creates isotopes — carbon-12 and carbon-14 are both carbon but with different neutron counts, and carbon-14's radioactivity is used in archaeological dating.",
    learnMoreLink: { text: "Read more about neutrons", url: "https://en.wikipedia.org/wiki/Neutron" },
    difficulty: "easy"
  },
  {
    text: "What type of reaction is: A + BC → AC + B?",
    options: ["Combustion", "Double displacement", "Decomposition", "Single displacement"],
    correct: 3,
    hints: [
      "Look at how many elements or compounds are on each side and what changes.",
      "One element (A) is replacing another element (B) in a compound — count the participants.",
      "A single element swaps into a compound, displacing another element — this is single displacement."
    ],
    explanation: "In a single displacement reaction, a more reactive element 'kicks out' a less reactive one from its compound. The activity series predicts which displacements can happen — only a more reactive element can displace a less reactive one. A vivid real-world example: placing an iron nail in copper sulfate solution turns the nail copper-coloured as iron displaces copper from the solution.",
    learnMoreLink: { text: "Read more about displacement reactions", url: "https://en.wikipedia.org/wiki/Single-displacement_reaction" },
    difficulty: "medium"
  },
  {
    text: "How many valence electrons does oxygen have?",
    options: ["2", "4", "6", "8"],
    correct: 2,
    hints: [
      "Valence electrons are the electrons in the outermost shell of an atom.",
      "Look at oxygen's group number in the periodic table — it tells you the valence electron count.",
      "Oxygen is in group 16, so it has 6 valence electrons (and needs 2 more to fill its outer shell)."
    ],
    explanation: "Oxygen has 6 valence electrons and needs 2 more to reach a stable full outer shell — which is why it almost always forms exactly 2 bonds. This eagerness to gain 2 electrons makes oxygen highly reactive and a powerful oxidising agent. Nearly all energy-releasing reactions in living organisms — from respiration to burning — involve oxygen accepting electrons from other substances.",
    learnMoreLink: { text: "Read more about valence electrons", url: "https://en.wikipedia.org/wiki/Valence_electron" },
    difficulty: "medium"
  },
  {
    text: "What is the approximate molar mass of NaCl? (Na = 23, Cl = 35.5)",
    options: ["23 g/mol", "35.5 g/mol", "58.5 g/mol", "46 g/mol"],
    correct: 2,
    hints: [
      "Molar mass is calculated by adding the atomic masses of all atoms in the formula.",
      "NaCl contains exactly one sodium atom and one chlorine atom.",
      "Add the atomic masses: 23 (Na) + 35.5 (Cl) = 58.5 g/mol."
    ],
    explanation: "Molar mass is the sum of atomic masses of all atoms in a formula unit — simple addition for NaCl. One mole of table salt (58.5 g, about a tablespoon) contains 6.02 × 10²³ NaCl formula units. Chemists use molar mass to scale up reactions: if a recipe calls for 1 mole of NaCl, you weigh out 58.5 g.",
    learnMoreLink: { text: "Read more about molar mass", url: "https://en.wikipedia.org/wiki/Molar_mass" },
    difficulty: "hard"
  },
  {
    text: "Which of these is classified as a strong acid?",
    options: ["Acetic acid (CH₃COOH)", "Hydrochloric acid (HCl)", "Carbonic acid (H₂CO₃)", "Citric acid"],
    correct: 1,
    hints: [
      "Strong acids fully dissociate into ions in water; weak acids only partially dissociate.",
      "Think about which option is a mineral (inorganic) acid rather than an organic acid.",
      "HCl is hydrochloric acid — it completely ionises in water: HCl → H⁺ + Cl⁻."
    ],
    explanation: "Strong acids completely ionise in water — every HCl molecule splits into H⁺ and Cl⁻ with no molecules remaining intact. Weak acids like acetic acid (vinegar) only partially ionise, so most molecules stay undissociated. Despite its strength, hydrochloric acid is produced in your own stomach at around pH 1.5 to digest food and kill swallowed bacteria.",
    learnMoreLink: { text: "Read more about strong and weak acids", url: "https://en.wikipedia.org/wiki/Acid" },
    difficulty: "hard"
  },
  {
    text: "An element in Period 3, Group 1 of the periodic table is:",
    options: ["Lithium", "Sodium", "Potassium", "Caesium"],
    correct: 1,
    hints: [
      "The periodic table is organised into periods (horizontal rows) and groups (vertical columns).",
      "Group 1 elements are the alkali metals. Period 3 is the third row of the table.",
      "Counting down group 1: H (P1), Li (P2), Na (P3) — sodium is in period 3, group 1."
    ],
    explanation: "Periods indicate the number of electron shells, and groups indicate the number of valence electrons. Sodium (Na) has one valence electron (Group 1) spread across three shells (Period 3). Its single outer electron is so weakly held that sodium reacts violently with water, releasing enough energy to ignite the hydrogen gas produced — a dramatic demonstration in school chemistry labs.",
    learnMoreLink: { text: "Read more about sodium", url: "https://en.wikipedia.org/wiki/Sodium" },
    difficulty: "medium"
  },
  {
    text: "Isotopes of the same element differ in their number of:",
    options: ["Protons", "Electrons", "Neutrons", "Protons and electrons"],
    correct: 2,
    hints: [
      "Isotopes are different forms of the same element — something must stay the same.",
      "Since they're the same element, the number of protons (and electrons) is identical.",
      "Isotopes have the same proton count but different numbers of neutrons, giving different mass numbers."
    ],
    explanation: "Isotopes are atoms of the same element with different neutron numbers — identical chemistry, different masses. Carbon-12 (6 neutrons) and carbon-14 (8 neutrons) both behave identically in chemical reactions, but carbon-14 is radioactive and decays slowly over thousands of years. Archaeologists use this decay rate in radiocarbon dating to determine the age of organic materials up to ~50,000 years old.",
    learnMoreLink: { text: "Read more about isotopes", url: "https://en.wikipedia.org/wiki/Isotope" },
    difficulty: "hard"
  },
  {
    text: "What is the boiling point of water at standard atmospheric pressure?",
    options: ["0°C", "37°C", "100°C", "373°C"],
    correct: 2,
    hints: [
      "The boiling point is where liquid water transitions to water vapour.",
      "This is one of the most fundamental constants in chemistry and everyday life.",
      "Water boils at exactly 100°C (373 K) at 1 atmosphere of pressure."
    ],
    explanation: "Water boils when its vapour pressure equals atmospheric pressure — at sea level this is exactly 100°C. At higher altitudes, lower air pressure means water boils below 100°C, so food takes longer to cook. The Celsius scale was originally defined using water: 0° at the freezing point and 100° at the boiling point, making these values fundamental by design.",
    learnMoreLink: { text: "Read more about boiling point", url: "https://en.wikipedia.org/wiki/Boiling_point" },
    difficulty: "easy"
  },
  {
    text: "What is the oxidation state of oxygen in most compounds?",
    options: ["+2", "0", "−2", "+1"],
    correct: 2,
    hints: [
      "Oxygen is highly electronegative, so it tends to attract electrons toward itself.",
      "Think about how many electrons oxygen gains when it forms bonds in water (H₂O).",
      "In most compounds, oxygen has an oxidation state of −2 (exceptions include peroxides and OF₂)."
    ],
    explanation: "Oxygen's oxidation state of −2 reflects its tendency to pull 2 electrons toward itself from less electronegative atoms. This means any element bonded to oxygen is 'oxidised' — giving electron density away. Iron rusting is iron being oxidised by oxygen: Fe loses electrons (oxidation state rises) while O gains them (reduction), which is why rust prevention is so important in construction.",
    learnMoreLink: { text: "Read more about oxidation states", url: "https://en.wikipedia.org/wiki/Oxidation_state" },
    difficulty: "hard"
  },
  {
    text: "Which gas makes up the largest percentage of Earth's dry atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen"],
    correct: 3,
    hints: [
      "The atmosphere is mostly one gas — oxygen, while essential, is the second most abundant.",
      "Think about which diatomic gas is colourless, odourless, and makes up about 78% of air.",
      "Nitrogen (N₂) makes up ~78% of dry air, far more than oxygen (~21%) or argon (~0.9%)."
    ],
    explanation: "Nitrogen dominates Earth's atmosphere because N₂ molecules have an extremely strong triple bond and don't react readily with rocks, water, or other atmospheric gases. Oxygen, while essential for life, is highly reactive and would be removed if not constantly replenished by photosynthesis. Lightning strikes and nitrogen-fixing bacteria convert atmospheric N₂ into forms that plants can absorb as nutrients.",
    learnMoreLink: { text: "Read more about Earth's atmosphere", url: "https://en.wikipedia.org/wiki/Atmosphere_of_Earth" },
    difficulty: "hard"
  },
  {
    text: "What is the correct IUPAC name for H₂SO₄?",
    options: ["Hydrosulfuric acid", "Sulfurous acid", "Sulfuric acid", "Persulfuric acid"],
    correct: 2,
    hints: [
      "IUPAC acid names are based on the anion the acid produces in water.",
      "H₂SO₄ produces the sulfate (SO₄²⁻) ion — the '-ate' anion gets the '-ic acid' suffix.",
      "Sulfate → sulfuric acid. Sulfite (SO₃²⁻) would give sulfurous acid."
    ],
    explanation: "Sulfuric acid is one of the most important industrial chemicals — used to make fertilisers, dyes, detergents, and lead-acid car batteries. Its IUPAC name follows the rule: sulfate ion (SO₄²⁻) → sulfuric acid. Car batteries contain sulfuric acid as the electrolyte: the reaction between lead and sulfuric acid generates the current that starts your engine.",
    learnMoreLink: { text: "Read more about sulfuric acid", url: "https://en.wikipedia.org/wiki/Sulfuric_acid" },
    difficulty: "hard"
  },
  {
    text: "How many moles are in 44 g of CO₂? (molar mass of CO₂ = 44 g/mol)",
    options: ["0.5 mol", "1 mol", "2 mol", "44 mol"],
    correct: 1,
    hints: [
      "The number of moles is found by dividing the mass by the molar mass.",
      "The molar mass of CO₂ is given — you just need one simple division.",
      "moles = mass / molar mass = 44 g ÷ 44 g/mol = 1 mol."
    ],
    explanation: "One mole of any substance always contains 6.02 × 10²³ particles, regardless of what it is. Since CO₂'s molar mass is 44 g/mol, exactly 44 g of CO₂ is one mole — containing 6.02 × 10²³ molecules. Chemists use moles like a recipe: 'use 1 mole of A with 2 moles of B' tells you the exact ratio needed for a reaction to proceed completely without waste.",
    learnMoreLink: { text: "Read more about the mole (chemistry)", url: "https://en.wikipedia.org/wiki/Mole_(unit)" },
    difficulty: "hard"
  },
  {
    text: "What type of bond involves the sharing of electron pairs between atoms?",
    options: ["Ionic", "Metallic", "Van der Waals", "Covalent"],
    correct: 3,
    hints: [
      "There are two main types of strong chemical bonds — one involves electron transfer, the other sharing.",
      "Think about non-metal atoms bonding with other non-metals — they don't transfer electrons.",
      "Covalent bonds form when atoms share one or more pairs of electrons to achieve stable configurations."
    ],
    explanation: "Covalent bonds form when two atoms both need more electrons but neither will give them up — so they share. This sharing can be single (one pair), double (two pairs), or triple (three pairs). The shared electrons hold the atoms together, giving covalent molecules their specific shapes. DNA, proteins, and most biological molecules are held together almost entirely by covalent bonds.",
    learnMoreLink: { text: "Read more about covalent bonds", url: "https://en.wikipedia.org/wiki/Covalent_bond" },
    difficulty: "easy"
  },
  {
    text: "What are the products of an acid-base neutralisation reaction?",
    options: ["Oxide and water", "Salt and water", "Hydrogen and hydroxide", "An element and water"],
    correct: 1,
    hints: [
      "In a neutralisation reaction, an acid and a base react together and cancel each other out.",
      "The H⁺ from the acid combines with OH⁻ from the base to form one product.",
      "H⁺ + OH⁻ → H₂O, and the remaining ions (metal + non-metal) combine to form a salt."
    ],
    explanation: "Neutralisation cancels the properties of both acid and base: H⁺ from the acid and OH⁻ from the base combine to form water, while the remaining ions form a salt. Antacid tablets work on exactly this principle — calcium carbonate or magnesium hydroxide neutralises excess hydrochloric acid in your stomach, relieving heartburn within minutes.",
    learnMoreLink: { text: "Read more about neutralisation reactions", url: "https://en.wikipedia.org/wiki/Neutralization_(chemistry)" },
    difficulty: "medium"
  },
  {
    text: "Which of the following is a noble gas?",
    options: ["Fluorine", "Hydrogen", "Nitrogen", "Argon"],
    correct: 3,
    hints: [
      "Noble gases are in the rightmost group (Group 18) of the periodic table.",
      "They have full outer electron shells, making them chemically unreactive.",
      "Argon (Ar) is in Group 18, period 3 — its full outer shell makes it stable and inert."
    ],
    explanation: "Noble gases have completely filled outer electron shells, making them extraordinarily stable and almost completely unreactive. Argon is the third most abundant gas in Earth's atmosphere (~0.93%) and was not discovered until 1894 because it refuses to form compounds under normal conditions. It's used in light bulbs and welding torches to surround hot metals and prevent them reacting with oxygen.",
    learnMoreLink: { text: "Read more about noble gases", url: "https://en.wikipedia.org/wiki/Noble_gas" },
    difficulty: "easy"
  },
  {
    text: "What does an element's mass number represent?",
    options: ["Number of protons only", "Number of neutrons only", "Number of electrons", "Number of protons plus neutrons"],
    correct: 3,
    hints: [
      "Don't confuse atomic number with mass number — they measure different things.",
      "Mass number counts the heavy particles in the nucleus — electrons are too light to count.",
      "Mass number = protons + neutrons. (Atomic number = protons only.)"
    ],
    explanation: "Mass number counts all the heavy particles (nucleons) in the nucleus — protons plus neutrons. Electrons are excluded because they weigh about 1800 times less than protons, making their contribution negligible. Uranium-235 and uranium-238 are isotopes with 92 protons each, but 143 vs 146 neutrons — the 3-unit difference in mass number is the key distinction relevant to nuclear fission reactors.",
    learnMoreLink: { text: "Read more about mass number", url: "https://en.wikipedia.org/wiki/Mass_number" },
    difficulty: "hard"
  },
  {
    text: "In a redox reaction, oxidation is defined as:",
    options: ["Gain of electrons", "Gain of protons", "Loss of electrons", "Loss of protons"],
    correct: 2,
    hints: [
      "Remember the mnemonic OIL RIG to keep oxidation and reduction straight.",
      "OIL RIG stands for: Oxidation Is Loss, Reduction Is Gain (of electrons).",
      "A substance is oxidised when it loses electrons — its oxidation state increases."
    ],
    explanation: "OIL RIG (Oxidation Is Loss, Reduction Is Gain of electrons) is the essential mnemonic for redox reactions. When iron rusts, iron atoms lose electrons to oxygen — iron is oxidised. In electrochemical batteries, controlled oxidation at one electrode and reduction at the other drives the electric current that powers your phone and electric vehicles.",
    learnMoreLink: { text: "Read more about redox reactions", url: "https://en.wikipedia.org/wiki/Redox" },
    difficulty: "hard"
  },
  {
    text: "Which element has the electron configuration 2, 8, 1?",
    options: ["Lithium", "Potassium", "Sodium", "Magnesium"],
    correct: 2,
    hints: [
      "Add up all the electrons: 2 + 8 + 1 = 11 total electrons.",
      "In a neutral atom, the number of electrons equals the atomic number.",
      "Atomic number 11 is Sodium (Na) — it sits in period 3, group 1 of the periodic table."
    ],
    explanation: "Electron configuration tells you exactly how electrons are distributed across shells — and that single electron in sodium's outer shell is weakly held and easily lost. When sodium contacts water, this outer electron is released so readily that it ignites the hydrogen gas produced, creating the dramatic fizzing and sometimes flame you see in demonstrations. This reactivity makes sodium essential in producing many industrial chemicals.",
    learnMoreLink: { text: "Read more about electron configuration", url: "https://en.wikipedia.org/wiki/Electron_configuration" },
    difficulty: "hard"
  },
];
