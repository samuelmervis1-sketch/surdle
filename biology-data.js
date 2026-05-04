const BIOLOGY_QUESTIONS = [
  {
    text: "Which organelle is known as the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correct: 2,
    hints: [
      "This organelle is found in nearly all eukaryotic cells and is the main site of energy production.",
      "Think about which organelle carries out aerobic respiration to produce ATP.",
      "The mitochondria converts glucose and oxygen into ATP — the cell's usable energy currency."
    ],
    explanation: "Mitochondria convert glucose into ATP through two stages: the Krebs cycle and the electron transport chain. Each mitochondrion has folded inner membranes (cristae) that greatly increase the surface area for ATP production. An active muscle cell may contain thousands of mitochondria, while a fat cell has very few — reflecting how energy demands shape cell structure.",
    learnMoreLink: { text: "Read more about mitochondria", url: "https://en.wikipedia.org/wiki/Mitochondrion" },
    difficulty: "beginner"
  },
  {
    text: "Which molecule carries an organism's genetic information?",
    options: ["RNA", "ATP", "DNA", "Protein"],
    correct: 2,
    hints: [
      "Genetic information is stored in a long double-stranded molecule found in the cell nucleus.",
      "Think about which molecule contains the hereditary instructions passed from parent to offspring.",
      "DNA (deoxyribonucleic acid) stores the genetic code in the sequence of its four bases: A, T, G, C."
    ],
    explanation: "DNA is a double helix made of two strands held together by base pairs — A with T, and G with C. The sequence of these bases encodes instructions for making every protein in your body. Your entire genome contains about 3 billion base pairs, yet it all fits into the nucleus of each cell, coiled and packed into a total DNA length of roughly 2 metres per cell.",
    learnMoreLink: { text: "Read more about DNA", url: "https://en.wikipedia.org/wiki/DNA" },
    difficulty: "beginner"
  },
  {
    text: "How many chromosomes does a normal human body cell contain?",
    options: ["23", "46", "92", "48"],
    correct: 1,
    hints: [
      "Human body cells are diploid — they contain two complete sets of chromosomes.",
      "Think about how many pairs of chromosomes humans have, then double it.",
      "Humans have 23 pairs of chromosomes. 23 pairs × 2 = 46 chromosomes per body cell."
    ],
    explanation: "Humans have 23 pairs of chromosomes — one from each parent. Chromosomes are tightly coiled packages of DNA and protein; uncoiled, a single chromosome's DNA could stretch several centimetres. Having an extra or missing chromosome causes genetic disorders: an extra chromosome 21 causes Down syndrome, which affects development and health in characteristic ways.",
    learnMoreLink: { text: "Read more about chromosomes", url: "https://en.wikipedia.org/wiki/Chromosome" },
    difficulty: "beginner"
  },
  {
    text: "What is the process by which plants convert sunlight into food?",
    options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
    correct: 2,
    hints: [
      "This process occurs in the chloroplasts of plant cells and requires three things: light, CO₂, and water.",
      "Think about the process that converts light energy into chemical energy stored as glucose.",
      "Photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂."
    ],
    explanation: "Photosynthesis converts light energy into chemical energy stored as glucose, using CO₂ from air and water from the soil. The oxygen released is a byproduct — every breath you take owes its oxygen to billions of years of photosynthesis. Leaves are shaped flat and thin to maximise light capture and gas exchange through tiny pores called stomata.",
    learnMoreLink: { text: "Read more about photosynthesis", url: "https://en.wikipedia.org/wiki/Photosynthesis" },
    difficulty: "beginner"
  },
  {
    text: "Which organelle is the site of protein synthesis?",
    options: ["Golgi apparatus", "Lysosome", "Vacuole", "Ribosome"],
    correct: 3,
    hints: [
      "Proteins are assembled by reading a sequence of instructions carried by mRNA.",
      "Think about which small organelle reads mRNA and links amino acids together in the correct order.",
      "Ribosomes are the molecular machines that translate mRNA into proteins — they're found in all cells."
    ],
    explanation: "Ribosomes read mRNA codons and assemble the matching amino acids into protein chains. They can be free in the cytoplasm (making proteins for internal use) or attached to the rough endoplasmic reticulum (making proteins for export). Many antibiotics work by targeting bacterial ribosomes — they're slightly different from human ribosomes, allowing drugs to kill bacteria without harming our own cells.",
    learnMoreLink: { text: "Read more about ribosomes", url: "https://en.wikipedia.org/wiki/Ribosome" },
    difficulty: "easy"
  },
  {
    text: "In DNA, adenine (A) always pairs with:",
    options: ["Cytosine (C)", "Guanine (G)", "Thymine (T)", "Uracil (U)"],
    correct: 2,
    hints: [
      "DNA base pairing follows strict complementary rules — only specific bases pair together.",
      "There are two base pairs in DNA: A-T and G-C. Think about which one involves adenine.",
      "A always pairs with T (Thymine) via two hydrogen bonds. G always pairs with C via three bonds."
    ],
    explanation: "DNA base pairing is highly specific — A always pairs with T and G always pairs with C. This complementarity is the key to DNA replication: each strand acts as a template for a new copy, so the genetic information is preserved with extraordinary fidelity. It also means knowing one strand's sequence immediately tells you the other strand's sequence.",
    learnMoreLink: { text: "Read more about DNA base pairing", url: "https://en.wikipedia.org/wiki/Base_pair" },
    difficulty: "easy"
  },
  {
    text: "Which type of cell division produces gametes (sperm and egg cells)?",
    options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    correct: 1,
    hints: [
      "Gametes need to be haploid (half the chromosome number) so fertilisation produces a normal diploid cell.",
      "Think about which type of division reduces the chromosome number by half.",
      "Meiosis produces 4 haploid cells with half the chromosome number — unlike mitosis which keeps it the same."
    ],
    explanation: "Meiosis involves two rounds of division, producing 4 haploid cells (23 chromosomes each) from one diploid cell (46 chromosomes). This halving is essential: when sperm and egg fuse at fertilisation, the embryo gets the correct 46. Meiosis also shuffles genetic material through 'crossing over' between chromosome pairs, generating the genetic diversity that drives evolution.",
    learnMoreLink: { text: "Read more about meiosis", url: "https://en.wikipedia.org/wiki/Meiosis" },
    difficulty: "easy"
  },
  {
    text: "Which blood type is the universal donor for red blood cell transfusions?",
    options: ["A negative", "B negative", "AB negative", "O negative"],
    correct: 3,
    hints: [
      "Universal donors can give blood to recipients of any ABO blood type.",
      "Think about which blood type lacks both ABO antigens on red blood cells AND the Rh factor.",
      "O negative has no A, B, or Rh antigens — it won't trigger an immune reaction in any recipient."
    ],
    explanation: "Blood type O negative lacks both ABO antigens (A and B) on red cell surfaces and the Rh factor, so it doesn't trigger an immune reaction in any recipient. This makes it critical for emergency transfusions before blood typing is possible. Only about 7% of people have O negative blood, which is why hospitals carefully manage their O negative supply — it's the most universally needed type.",
    learnMoreLink: { text: "Read more about blood type", url: "https://en.wikipedia.org/wiki/Blood_type" },
    difficulty: "easy"
  },
  {
    text: "Osmosis is best defined as the movement of:",
    options: ["Solutes from high to low concentration", "Ions via active transport", "Water across a semipermeable membrane from low to high solute concentration", "Gases by diffusion"],
    correct: 2,
    hints: [
      "Osmosis is a specific type of passive transport — only one type of molecule moves.",
      "Only water moves in osmosis, not dissolved particles (solutes).",
      "Water moves from where solute concentration is LOW (high water potential) to where it is HIGH, through a semipermeable membrane."
    ],
    explanation: "Osmosis is the passive movement of water across a selectively permeable membrane, driven by differences in solute concentration. This is why slugs shrivel when sprinkled with salt — osmosis draws water out of their cells. Plant cells rely on osmosis to maintain turgor pressure, which keeps leaves rigid; a wilting plant has lost water from its vacuoles.",
    learnMoreLink: { text: "Read more about osmosis", url: "https://en.wikipedia.org/wiki/Osmosis" },
    difficulty: "easy"
  },
  {
    text: "Which organ in the human body produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correct: 1,
    hints: [
      "Insulin is a hormone that lowers blood glucose levels after eating.",
      "Think about which organ near the stomach contains specialised hormone-secreting cells.",
      "The pancreas contains islets of Langerhans — beta cells produce insulin, alpha cells produce glucagon."
    ],
    explanation: "The pancreas is a dual-function organ: it secretes digestive enzymes and hormones like insulin and glucagon. Insulin lowers blood glucose by stimulating cells to absorb it; glucagon raises it when it falls too low. In type 1 diabetes, the immune system destroys the insulin-producing beta cells entirely, requiring patients to inject insulin multiple times daily to survive.",
    learnMoreLink: { text: "Read more about insulin and the pancreas", url: "https://en.wikipedia.org/wiki/Insulin" },
    difficulty: "beginner"
  },
  {
    text: "What does RNA stand for?",
    options: ["Ribose Nucleic Acid", "Ribonucleic Acid", "Replicating Nucleic Acid", "Recombinant Nucleic Acid"],
    correct: 1,
    hints: [
      "RNA is closely related to DNA — the key difference is in the sugar used.",
      "The 'R' stands for ribose, the sugar in RNA (DNA uses deoxyribose — one fewer oxygen).",
      "RNA stands for Ribonucleic Acid. It is single-stranded and uses uracil instead of thymine."
    ],
    explanation: "RNA is chemically similar to DNA but single-stranded and uses ribose sugar plus uracil instead of thymine. Different RNA types have different roles: mRNA carries the genetic message to ribosomes, tRNA brings amino acids, and rRNA forms ribosome structure. Some viruses — including influenza and SARS-CoV-2 — use RNA as their genetic material rather than DNA.",
    learnMoreLink: { text: "Read more about RNA", url: "https://en.wikipedia.org/wiki/RNA" },
    difficulty: "beginner"
  },
  {
    text: "How many chambers does the human heart have?",
    options: ["2", "3", "4", "6"],
    correct: 2,
    hints: [
      "The heart has two separate sides that handle different circuits of blood flow.",
      "Each side of the heart has two chambers: one that receives blood and one that pumps it out.",
      "The heart has 4 chambers: right atrium, right ventricle, left atrium, and left ventricle."
    ],
    explanation: "The heart's four chambers create two separate pumping circuits: the right side sends deoxygenated blood to the lungs, and the left side pumps oxygenated blood to the body. The left ventricle has thicker, more muscular walls because it must pump blood around the entire body — five times further than the right ventricle. A healthy adult heart beats ~70 times per minute, pumping about 5 litres of blood each minute at rest.",
    learnMoreLink: { text: "Read more about the human heart", url: "https://en.wikipedia.org/wiki/Heart" },
    difficulty: "easy"
  },
  {
    text: "Which type of organism lacks a membrane-bound nucleus?",
    options: ["Eukaryote", "Fungi", "Prokaryote", "Protist"],
    correct: 2,
    hints: [
      "All living cells fall into one of two broad categories based on their internal structure.",
      "The key distinction is whether the genetic material is enclosed in a membrane-bound nucleus.",
      "Prokaryotes (bacteria and archaea) have no membrane-bound nucleus — their DNA is in the cytoplasm."
    ],
    explanation: "Prokaryotes (bacteria and archaea) are the simpler, ancestral cell type — they lack a nucleus and most membrane-bound organelles. Their DNA floats freely as a circular chromosome. Eukaryotes are thought to have evolved when one ancient prokaryote engulfed another, eventually giving rise to mitochondria and chloroplasts — an event called endosymbiosis that gave eukaryotes a massive energy advantage.",
    learnMoreLink: { text: "Read more about prokaryotes", url: "https://en.wikipedia.org/wiki/Prokaryote" },
    difficulty: "beginner"
  },
  {
    text: "Which vitamin is primarily produced when the skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correct: 3,
    hints: [
      "One vitamin is unusual because the body can synthesise it — it doesn't have to come entirely from food.",
      "UV-B radiation from sunlight triggers a reaction in the skin that produces this vitamin.",
      "Vitamin D is synthesised when UV-B converts a cholesterol precursor in the skin. Deficiency causes rickets."
    ],
    explanation: "UV-B radiation converts a cholesterol precursor in skin cells into vitamin D₃, which is processed by the liver and kidneys into the active hormone form. Vitamin D regulates calcium absorption, supporting bone strength — without it, children develop rickets (soft, deformed bones). People with darker skin or who live at high latitudes produce less vitamin D from sunlight and often need dietary supplements.",
    learnMoreLink: { text: "Read more about vitamin D", url: "https://en.wikipedia.org/wiki/Vitamin_D" },
    difficulty: "easy"
  },
  {
    text: "Which is the correct order of taxonomic classification from broadest to most specific?",
    options: ["Kingdom, Phylum, Class, Order, Family, Genus, Species", "Species, Genus, Family, Order, Class, Phylum, Kingdom", "Domain, Class, Phylum, Family, Order, Genus, Species", "Phylum, Kingdom, Class, Order, Family, Genus, Species"],
    correct: 0,
    hints: [
      "The mnemonic 'King Philip Came Over For Good Soup' helps remember the order.",
      "Taxonomy starts with the broadest grouping (containing the most organisms) and narrows down.",
      "Kingdom → Phylum → Class → Order → Family → Genus → Species (broadest to most specific)."
    ],
    explanation: "Linnaeus's hierarchical classification groups organisms by shared characteristics, narrowing from Kingdom (millions of species) down to Species (one type). Humans are: Kingdom Animalia, Phylum Chordata, Class Mammalia, Order Primates, Family Hominidae, Genus Homo, Species sapiens. Two animals in the same genus are more closely related than two in the same family.",
    learnMoreLink: { text: "Read more about biological classification", url: "https://en.wikipedia.org/wiki/Taxonomy_(biology)" },
    difficulty: "easy"
  },
  {
    text: "What is the primary function of red blood cells?",
    options: ["Fight infection", "Carry oxygen throughout the body", "Produce antibodies", "Form blood clots"],
    correct: 1,
    hints: [
      "Red blood cells have a distinctive biconcave shape and contain a specialised iron-based protein.",
      "Think about what gives blood its red colour and why that pigment is important.",
      "Haemoglobin in red blood cells binds oxygen in the lungs and releases it to body tissues."
    ],
    explanation: "Red blood cells are packed with haemoglobin — an iron-containing protein that reversibly binds oxygen. In the lungs where oxygen is plentiful, haemoglobin loads up; in tissues where oxygen is scarce, it releases it. Red blood cells lack a nucleus, maximising space for haemoglobin — a single red blood cell contains about 270 million haemoglobin molecules, each carrying up to 4 oxygen molecules.",
    learnMoreLink: { text: "Read more about red blood cells", url: "https://en.wikipedia.org/wiki/Red_blood_cell" },
    difficulty: "easy"
  },
  {
    text: "Which organelle is the site of photosynthesis in plant cells?",
    options: ["Mitochondria", "Vacuole", "Chloroplast", "Endoplasmic reticulum"],
    correct: 2,
    hints: [
      "Photosynthesis requires capturing light energy — think about which organelle contains light-absorbing pigments.",
      "This organelle is found only in plant cells and gives plants their green colour.",
      "Chloroplasts contain chlorophyll, the green pigment that absorbs light for photosynthesis."
    ],
    explanation: "Chloroplasts contain chlorophyll in stacked membrane structures called thylakoids, which absorb red and blue light but reflect green — giving plants their colour. The light reactions capture energy and split water, while the Calvin cycle fixes CO₂ into glucose. Like mitochondria, chloroplasts have their own DNA — supporting the theory that they were once free-living bacteria that were engulfed long ago.",
    learnMoreLink: { text: "Read more about chloroplasts", url: "https://en.wikipedia.org/wiki/Chloroplast" },
    difficulty: "beginner"
  },
  {
    text: "A dominant allele is one that:",
    options: ["Is always recessive", "Is only expressed in homozygous individuals", "Is expressed even when paired with a different allele", "Never appears in offspring"],
    correct: 2,
    hints: [
      "Think about the difference between dominant and recessive in terms of when an allele is expressed.",
      "A recessive allele is only expressed when two copies are present — dominant alleles are not so restricted.",
      "A dominant allele is expressed in the phenotype whether the individual is AA (homozygous) or Aa (heterozygous)."
    ],
    explanation: "A dominant allele shows its effect whenever even one copy is present — in both AA (homozygous) and Aa (heterozygous) individuals. Recessive alleles only show up when both copies are recessive (aa). Brown eye colour is dominant over blue: a person with one brown and one blue allele will have brown eyes but can still pass the unexpressed blue allele to their children.",
    learnMoreLink: { text: "Read more about dominance in genetics", url: "https://en.wikipedia.org/wiki/Dominance_(genetics)" },
    difficulty: "easy"
  },
  {
    text: "During aerobic respiration, glucose and oxygen are converted to:",
    options: ["Lactic acid and ATP", "Ethanol, CO₂, and ATP", "CO₂, water, and ATP", "Glucose and water only"],
    correct: 2,
    hints: [
      "Aerobic respiration fully breaks down glucose using oxygen — think about the waste products formed.",
      "Carbon in glucose becomes a gas, and hydrogen becomes a liquid when fully oxidised.",
      "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Carbon → CO₂, hydrogen → H₂O."
    ],
    explanation: "Aerobic respiration breaks down glucose in controlled stages, capturing energy as ATP — the cell's universal energy currency. Up to 36–38 ATP molecules are produced per glucose, compared to just 2 from anaerobic respiration. This enormous efficiency advantage is why animals evolved mitochondria and can sustain high-activity lifestyles that anaerobic organisms simply cannot match.",
    learnMoreLink: { text: "Read more about cellular respiration", url: "https://en.wikipedia.org/wiki/Cellular_respiration" },
    difficulty: "easy"
  },
  {
    text: "What is the basic structural and functional unit of life?",
    options: ["Atom", "Cell", "Tissue", "Organ"],
    correct: 1,
    hints: [
      "This is one of the core principles of cell theory, established in the 19th century.",
      "Think about the smallest structure that can carry out all life processes independently.",
      "The cell is the basic unit of life — all living things are made of one or more cells."
    ],
    explanation: "Cell theory states that all living things are made of cells, cells are the basic unit of life, and all cells come from pre-existing cells. The smallest free-living organisms are single-celled bacteria. Viruses are not cells — they cannot reproduce independently and are not generally considered alive, which is a key reason they require a host cell to replicate.",
    learnMoreLink: { text: "Read more about cell theory", url: "https://en.wikipedia.org/wiki/Cell_theory" },
    difficulty: "beginner"
  },
  {
    text: "Natural selection states that individuals with beneficial traits are more likely to:",
    options: ["Mutate more frequently", "Survive and reproduce", "Become extinct faster", "Directly change their genes"],
    correct: 1,
    hints: [
      "Darwin's theory of natural selection explains how species change over time.",
      "Think about what having a beneficial trait actually does for an organism in its environment.",
      "Beneficial traits increase survival and reproduction, passing those traits to more offspring over generations."
    ],
    explanation: "Natural selection is the mechanism of evolution: random mutations occasionally produce beneficial traits, and individuals with those traits leave more offspring, gradually shifting the population over generations. Darwin observed finches on the Galápagos Islands with different beak shapes suited to different food sources on each island. Over millions of years, this process has produced the extraordinary diversity of all life on Earth.",
    learnMoreLink: { text: "Read more about natural selection", url: "https://en.wikipedia.org/wiki/Natural_selection" },
    difficulty: "beginner"
  },
  {
    text: "Which part of the brain is primarily responsible for coordination and balance?",
    options: ["Cerebrum", "Hypothalamus", "Medulla oblongata", "Cerebellum"],
    correct: 3,
    hints: [
      "Different brain regions have different functions — think about the structure at the rear and base of the brain.",
      "The name of this structure is Latin for 'little brain' — it looks like a miniature version of the cerebrum.",
      "The cerebellum coordinates voluntary movements, maintains balance, and fine-tunes motor control."
    ],
    explanation: "The cerebellum continuously compares your intended movements with actual feedback from muscles and joints, making real-time corrections to keep you balanced. It's also essential for learning motor skills — from riding a bike to playing piano. Alcohol impairs the cerebellum, which is why intoxicated people stumble, struggle to walk straight, and fail sobriety field tests.",
    learnMoreLink: { text: "Read more about the cerebellum", url: "https://en.wikipedia.org/wiki/Cerebellum" },
    difficulty: "easy"
  },
  {
    text: "What is the primary function of the cell membrane?",
    options: ["Produce energy", "Store DNA", "Regulate what enters and exits the cell", "Synthesise proteins"],
    correct: 2,
    hints: [
      "Think about the cell membrane as a selective barrier between the cell's interior and exterior.",
      "The membrane is described as 'selectively permeable' — not everything can pass through.",
      "The cell membrane controls the movement of substances in and out, maintaining internal balance (homeostasis)."
    ],
    explanation: "The cell membrane is a phospholipid bilayer — two layers of fat molecules with their water-repelling tails facing inward. Small non-polar molecules like oxygen and CO₂ pass freely, while larger or charged molecules need protein channels or active transport. This selective permeability allows cells to maintain precise internal conditions essential for enzyme function and survival.",
    learnMoreLink: { text: "Read more about cell membranes", url: "https://en.wikipedia.org/wiki/Cell_membrane" },
    difficulty: "beginner"
  },
  {
    text: "Which disease is caused by a deficiency of vitamin C?",
    options: ["Rickets", "Scurvy", "Pellagra", "Beriberi"],
    correct: 1,
    hints: [
      "Vitamin C (ascorbic acid) is essential for synthesising collagen — the body's structural protein.",
      "Historically, this disease affected sailors on long voyages who ate no fresh fruit or vegetables.",
      "Without vitamin C, collagen breaks down, causing bleeding gums, bruising, and weak connective tissue — scurvy."
    ],
    explanation: "Vitamin C is essential for making collagen, the structural protein in skin, blood vessels, and connective tissue. Without it, old collagen breaks down faster than new collagen can be made, causing bleeding gums, easy bruising, and poor wound healing. James Lind's landmark 1747 trial showed citrus fruits prevented scurvy, marking one of the first controlled clinical trials in history.",
    learnMoreLink: { text: "Read more about scurvy", url: "https://en.wikipedia.org/wiki/Scurvy" },
    difficulty: "beginner"
  },
  {
    text: "Organisms that can produce their own food through photosynthesis are called:",
    options: ["Heterotrophs", "Decomposers", "Autotrophs", "Consumers"],
    correct: 2,
    hints: [
      "Think about the two main nutritional strategies — making your own food vs consuming others.",
      "The prefix 'auto' means 'self' — these organisms feed themselves.",
      "Autotrophs ('self-feeders') like plants and algae produce organic compounds from inorganic sources via photosynthesis."
    ],
    explanation: "Autotrophs form the base of virtually every food chain — they capture sunlight and store it in organic molecules that all other organisms eat. Every heterotroph (animal, fungus, most bacteria) ultimately depends on autotrophs for energy. Remove autotrophs from an ecosystem and the entire food web collapses, as there is no longer any energy entering the system from outside.",
    learnMoreLink: { text: "Read more about autotrophs", url: "https://en.wikipedia.org/wiki/Autotroph" },
    difficulty: "beginner"
  },
  {
    text: "What is the approximate pH of normal human blood?",
    options: ["6.0", "7.4", "8.0", "5.5"],
    correct: 1,
    hints: [
      "Human blood must be kept within a very narrow pH range for enzymes to function properly.",
      "Think about whether blood is slightly acidic, neutral (7.0), or slightly alkaline.",
      "Blood pH is maintained at approximately 7.35–7.45 — slightly alkaline. The answer is the midpoint of this range."
    ],
    explanation: "The body maintains blood pH between 7.35 and 7.45 through multiple buffer systems involving CO₂, bicarbonate, and the kidneys. Even a small deviation — below 7.35 (acidosis) or above 7.45 (alkalosis) — can disrupt enzyme function and become life-threatening. During intense exercise, lactic acid is produced faster than it can be removed, temporarily pushing blood pH slightly lower.",
    learnMoreLink: { text: "Read more about blood pH", url: "https://en.wikipedia.org/wiki/Acid%E2%80%93base_homeostasis" },
    difficulty: "easy"
  },
  {
    text: "Which macromolecule forms the primary structural component of plant cell walls?",
    options: ["Starch", "Chitin", "Cellulose", "Glycogen"],
    correct: 2,
    hints: [
      "Plant cell walls provide structural rigidity — think about which polysaccharide gives them their strength.",
      "This polysaccharide is made of β-glucose monomers linked differently from starch (which uses α-glucose).",
      "Cellulose forms long straight chains that hydrogen-bond together, giving plant cell walls their rigidity."
    ],
    explanation: "Cellulose is made of β-glucose monomers linked in straight chains that hydrogen-bond into rigid fibres — making it the most abundant organic polymer on Earth. Wood is mostly cellulose, giving trees their strength. Humans cannot digest cellulose (we lack cellulase), so it passes through as dietary fibre. Termites and cows rely on gut microbes that produce cellulase to unlock the energy in plant material.",
    learnMoreLink: { text: "Read more about cellulose", url: "https://en.wikipedia.org/wiki/Cellulose" },
    difficulty: "easy"
  },
  {
    text: "The process by which a cell divides to produce two genetically identical daughter cells is:",
    options: ["Meiosis", "Mitosis", "Cytokinesis only", "Fertilisation"],
    correct: 1,
    hints: [
      "There are two main types of cell division — one for growth/repair and one for sexual reproduction.",
      "This type of division maintains the chromosome number and produces genetically identical copies.",
      "Mitosis produces 2 genetically identical diploid daughter cells, used for growth, repair, and asexual reproduction."
    ],
    explanation: "Mitosis produces two genetically identical daughter cells through four stages: prophase (chromosomes condense), metaphase (line up at centre), anaphase (copies separate), telophase (new nuclei form). Because chromosomes are replicated before division, each daughter cell gets a perfect set. This is how your body heals wounds and replenishes cells — producing exact genetic copies of existing cells.",
    learnMoreLink: { text: "Read more about mitosis", url: "https://en.wikipedia.org/wiki/Mitosis" },
    difficulty: "beginner"
  },
  {
    text: "Which correctly describes the structure of DNA?",
    options: ["Single-stranded helix", "Double-stranded helix", "Triple-stranded linear", "Single-stranded linear"],
    correct: 1,
    hints: [
      "The structure of DNA was famously solved by Watson and Crick in 1953.",
      "DNA is composed of two strands wound around each other and held together by base pairing.",
      "DNA is a double helix — two antiparallel strands connected by A-T and G-C base pairs."
    ],
    explanation: "Watson and Crick deduced the double helix structure in 1953 using X-ray diffraction images taken by Rosalind Franklin. The two antiparallel strands are connected by hydrogen bonds between base pairs — A-T and G-C. The helical structure allows the strands to unwind during replication and transcription, exposing the base sequence so it can be copied or read.",
    learnMoreLink: { text: "Read more about DNA structure", url: "https://en.wikipedia.org/wiki/Nucleic_acid_double_helix" },
    difficulty: "easy"
  },
  {
    text: "Enzyme activity is most sensitive to changes in:",
    options: ["Atmospheric pressure", "Light intensity", "Temperature and pH", "Gravity"],
    correct: 2,
    hints: [
      "Enzymes are proteins — think about what conditions can alter or destroy a protein's 3D shape.",
      "The active site of an enzyme has a specific shape that must be maintained for it to work.",
      "Extreme temperature or pH denatures enzymes by unfolding their active site, destroying their function."
    ],
    explanation: "Enzymes are proteins with a precise 3D shape — their active site must fit the substrate like a lock and key. High temperature or extreme pH breaks the hydrogen bonds maintaining this shape, permanently deforming the active site in a process called denaturation. This is why fever above 40°C is dangerous (denatures body enzymes) and why cooking irreversibly changes the texture of food.",
    learnMoreLink: { text: "Read more about enzymes", url: "https://en.wikipedia.org/wiki/Enzyme" },
    difficulty: "easy"
  },
  {
    type: "diagram",
    svgId: "animal-cell",
    text: "Label the 5 numbered parts of this animal cell.",
    correctLabels: ["Cell Membrane","Nucleus","Mitochondria","Ribosome","Cytoplasm"],
    parts: ["Cell Membrane","Nucleus","Mitochondria","Ribosome","Cytoplasm","Golgi Apparatus","Endoplasmic Reticulum","Lysosome","Vacuole","Centriole","Nucleolus","Cytoskeleton"],
    hints: [
      "Start with what you can see at a glance: the boundary of the whole cell (①), the large oval structure holding DNA (②), and the fluid-filled interior (⑤).",
      "The bean-shaped organelles (③) have folded inner membranes and produce ATP. The tiny brown dots (④) are found on the rough ER and in the cytoplasm.",
      "① = outer boundary, ② = DNA store, ③ = ATP factory, ④ = protein builders, ⑤ = aqueous interior."
    ],
    explanation: "Every animal cell has these five core components working together: the cell membrane controls what enters and exits; the nucleus stores DNA and directs cell activity; mitochondria generate ATP; ribosomes translate mRNA into proteins; and cytoplasm is the aqueous medium where these reactions occur. Together they make the cell the fundamental unit of life.",
    learnMoreLink: { text: "Read more about animal cell structure", url: "https://en.wikipedia.org/wiki/Cell_(biology)" },
    difficulty: "medium"
  },
  {
    type: "diagram",
    svgId: "plant-cell",
    text: "Label the 5 numbered parts of this plant cell.",
    correctLabels: ["Cell Wall","Cell Membrane","Vacuole","Nucleus","Chloroplast"],
    parts: ["Cell Wall","Cell Membrane","Vacuole","Nucleus","Chloroplast","Mitochondria","Ribosome","Golgi Apparatus","Endoplasmic Reticulum","Cytoplasm","Nucleolus","Plasmodesma"],
    hints: [
      "Plant cells have two boundary layers (① and ②) and contain green organelles (⑤) not found in animal cells.",
      "The rigid outermost layer (①) is made of cellulose. The large central fluid-filled space (③) stores water and maintains turgor pressure.",
      "① = cellulose wall, ② = phospholipid bilayer inside it, ③ = large water-filled sac, ④ = DNA control centre, ⑤ = photosynthesis site."
    ],
    explanation: "Plant cells have three structures absent from animal cells: the rigid cellulose cell wall for structural support, the large central vacuole for water storage and turgor pressure, and chloroplasts for photosynthesis. The cell wall is what allows trees to stand tall without a skeleton. When a plant wilts, its vacuoles have lost water and cells can no longer maintain the internal pressure that keeps stems firm.",
    learnMoreLink: { text: "Read more about plant cell structure", url: "https://en.wikipedia.org/wiki/Plant_cell" },
    difficulty: "medium"
  },
  {
    type: "diagram",
    svgId: "animal-cell",
    text: "Label the 5 numbered parts of this animal cell.",
    correctLabels: ["Cell Membrane","Nucleus","Mitochondria","Ribosome","Cytoplasm"],
    parts: ["Cell Membrane","Nucleus","Mitochondria","Ribosome","Cytoplasm","Golgi Apparatus","Endoplasmic Reticulum","Lysosome","Vacuole","Centriole","Nucleolus","Cytoskeleton"],
    hints: [
      "The cell is surrounded by a phospholipid bilayer (①). Inside is a large organelle bounded by a double membrane that stores DNA (②).",
      "The sausage-shaped organelles with folded inner membranes (③) carry out aerobic respiration. The cytosol — the liquid filling the cell — is ⑤.",
      "Ribosomes (④) are the smallest structures visible here; they translate mRNA codons into amino acid chains."
    ],
    explanation: "Every animal cell has these five core components working together: the cell membrane controls what enters and exits; the nucleus stores DNA and directs cell activity; mitochondria generate ATP; ribosomes translate mRNA into proteins; and cytoplasm is the aqueous medium where these reactions occur. Together they make the cell the fundamental unit of life.",
    learnMoreLink: { text: "Read more about animal cell structure", url: "https://en.wikipedia.org/wiki/Cell_(biology)" },
    difficulty: "hard"
  },
  {
    type: "diagram",
    svgId: "plant-cell",
    text: "Label the 5 numbered parts of this plant cell.",
    correctLabels: ["Cell Wall","Cell Membrane","Vacuole","Nucleus","Chloroplast"],
    parts: ["Cell Wall","Cell Membrane","Vacuole","Nucleus","Chloroplast","Mitochondria","Ribosome","Golgi Apparatus","Endoplasmic Reticulum","Cytoplasm","Nucleolus","Plasmodesma"],
    hints: [
      "Two distinct boundary structures surround this plant cell. The outermost one (①) is non-living and provides structural support.",
      "The large central compartment (③) is not the cytoplasm — it is a membrane-bound organelle that can occupy up to 90% of cell volume.",
      "Green oval organelles (⑤) on the right contain thylakoid membranes stacked into grana where light reactions occur."
    ],
    explanation: "Plant cells have three structures absent from animal cells: the rigid cellulose cell wall for structural support, the large central vacuole for water storage and turgor pressure, and chloroplasts for photosynthesis. The cell wall is what allows trees to stand tall without a skeleton. When a plant wilts, its vacuoles have lost water and cells can no longer maintain the internal pressure that keeps stems firm.",
    learnMoreLink: { text: "Read more about plant cell structure", url: "https://en.wikipedia.org/wiki/Plant_cell" },
    difficulty: "hard"
  },
  {
    type: "diagram",
    svgId: "animal-cell",
    text: "Label the 5 numbered parts of this animal cell.",
    correctLabels: ["Cell Membrane","Nucleus","Mitochondria","Ribosome","Cytoplasm"],
    parts: ["Cell Membrane","Nucleus","Mitochondria","Ribosome","Cytoplasm","Golgi Apparatus","Endoplasmic Reticulum","Lysosome","Vacuole","Centriole","Nucleolus","Cytoskeleton"],
    hints: [
      "The structure marked ① controls what enters and exits the cell via selective permeability. The structure marked ② contains chromatin and a nucleolus.",
      "Organelle ③ produces the majority of ATP in eukaryotes through the electron transport chain and Krebs cycle.",
      "Structure ④ consists of two ribosomal subunits (large and small) and is the site of translation. Structure ⑤ is the aqueous solution containing all the organelles."
    ],
    explanation: "Every animal cell has these five core components working together: the cell membrane controls what enters and exits; the nucleus stores DNA and directs cell activity; mitochondria generate ATP; ribosomes translate mRNA into proteins; and cytoplasm is the aqueous medium where these reactions occur. Together they make the cell the fundamental unit of life.",
    learnMoreLink: { text: "Read more about animal cell structure", url: "https://en.wikipedia.org/wiki/Cell_(biology)" },
    difficulty: "hard"
  },
  {
    text: "Which organelle is known as the powerhouse of the cell?",
    options: ["A) Nucleus", "B) Mitochondrion", "C) Ribosome", "D) Golgi apparatus"],
    correct: 1,
    hints: [
      "It produces most of the cell's energy currency.",
      "It has its own DNA and a double membrane.",
      "Its inner folds are called cristae."
    ],
    explanation: "Mitochondria generate ATP through cellular respiration, fueling nearly every process in your body. When you exercise, your muscle cells produce more mitochondria to meet energy demand.",
    learnMoreLink: { text: "Read more about Mitochondria", url: "https://en.wikipedia.org/wiki/Mitochondrion" },
    difficulty: "beginner"
  },
  {
    text: "Which structure controls what enters and leaves a cell?",
    options: ["A) Nucleus", "B) Cell membrane", "C) Cytoplasm", "D) Ribosome"],
    correct: 1,
    hints: [
      "It forms the outer boundary of the cell.",
      "It is made of a phospholipid bilayer.",
      "It is selectively permeable."
    ],
    explanation: "The cell membrane regulates the passage of nutrients, waste, and signals. Drugs like ibuprofen must cross this membrane to reach their targets inside cells.",
    learnMoreLink: { text: "Read more about Cell membrane", url: "https://en.wikipedia.org/wiki/Cell_membrane" },
    difficulty: "beginner"
  },
  {
    text: "Where is genetic information primarily stored in a eukaryotic cell?",
    options: ["A) Cytoplasm", "B) Mitochondrion", "C) Nucleus", "D) Lysosome"],
    correct: 2,
    hints: [
      "It is the largest organelle in most cells.",
      "It is bounded by a double membrane with pores.",
      "It contains chromatin."
    ],
    explanation: "The nucleus houses DNA and directs cellular activity by controlling gene expression. Damage to the nucleus, such as from UV radiation, can lead to cancer.",
    learnMoreLink: { text: "Read more about Cell nucleus", url: "https://en.wikipedia.org/wiki/Cell_nucleus" },
    difficulty: "beginner"
  },
  {
    text: "Which organelle is responsible for protein synthesis?",
    options: ["A) Ribosome", "B) Lysosome", "C) Vacuole", "D) Centriole"],
    correct: 0,
    hints: [
      "It can be free-floating or attached to the ER.",
      "It reads mRNA codons.",
      "It is composed of rRNA and proteins."
    ],
    explanation: "Ribosomes translate mRNA into proteins, the workhorses of the cell. Antibiotics like tetracycline target bacterial ribosomes specifically without harming our own.",
    learnMoreLink: { text: "Read more about Ribosomes", url: "https://en.wikipedia.org/wiki/Ribosome" },
    difficulty: "beginner"
  },
  {
    text: "Which organelle in plant cells captures sunlight for photosynthesis?",
    options: ["A) Mitochondrion", "B) Vacuole", "C) Chloroplast", "D) Nucleus"],
    correct: 2,
    hints: [
      "It contains a green pigment.",
      "It is found only in plants and algae.",
      "It contains chlorophyll and thylakoids."
    ],
    explanation: "Chloroplasts convert light energy into chemical energy in glucose. They are the foundation of nearly all food chains on Earth.",
    learnMoreLink: { text: "Read more about Chloroplasts", url: "https://en.wikipedia.org/wiki/Chloroplast" },
    difficulty: "beginner"
  },
  {
    text: "Which structure is found in plant cells but NOT animal cells?",
    options: ["A) Nucleus", "B) Cell wall", "C) Mitochondrion", "D) Ribosome"],
    correct: 1,
    hints: [
      "It provides structural support outside the membrane.",
      "It is made primarily of cellulose in plants.",
      "It gives plants rigidity."
    ],
    explanation: "The cellulose cell wall keeps plants upright and protects against osmotic bursting. This is why plants can stand tall without bones.",
    learnMoreLink: { text: "Read more about Cell wall", url: "https://en.wikipedia.org/wiki/Cell_wall" },
    difficulty: "beginner"
  },
  {
    text: "What is the main function of lysosomes?",
    options: ["A) Energy production", "B) Protein synthesis", "C) Breaking down waste", "D) Storing genetic material"],
    correct: 2,
    hints: [
      "They are sometimes called the cell's 'recycling centers'.",
      "They contain digestive enzymes.",
      "They have an acidic interior."
    ],
    explanation: "Lysosomes digest worn-out organelles, food particles, and invading microbes. Tay-Sachs disease results from defective lysosomal enzymes.",
    learnMoreLink: { text: "Read more about Lysosomes", url: "https://en.wikipedia.org/wiki/Lysosome" },
    difficulty: "beginner"
  },
  {
    text: "Which is a key difference between prokaryotic and eukaryotic cells?",
    options: ["A) Prokaryotes lack a nucleus", "B) Eukaryotes lack ribosomes", "C) Prokaryotes are larger", "D) Eukaryotes lack DNA"],
    correct: 0,
    hints: [
      "Think about membrane-bound organelles.",
      "Bacteria are prokaryotes.",
      "Their DNA floats in the cytoplasm."
    ],
    explanation: "Prokaryotes (bacteria, archaea) lack a true nucleus and membrane-bound organelles. This simpler structure allows bacteria to reproduce very rapidly.",
    learnMoreLink: { text: "Read more about Prokaryotes", url: "https://en.wikipedia.org/wiki/Prokaryote" },
    difficulty: "beginner"
  },
  {
    text: "What process moves water across a membrane from low to high solute concentration?",
    options: ["A) Diffusion", "B) Osmosis", "C) Active transport", "D) Endocytosis"],
    correct: 1,
    hints: [
      "It involves only water molecules.",
      "It is a type of passive transport.",
      "Plant cells become turgid through this."
    ],
    explanation: "Osmosis explains why your fingers wrinkle in the bath and why salt preserves food by drawing water out of microbes. It requires no energy.",
    learnMoreLink: { text: "Read more about Osmosis", url: "https://en.wikipedia.org/wiki/Osmosis" },
    difficulty: "beginner"
  },
  {
    text: "Which phase of mitosis involves chromosomes lining up at the cell's equator?",
    options: ["A) Prophase", "B) Metaphase", "C) Anaphase", "D) Telophase"],
    correct: 1,
    hints: [
      "It comes after prophase.",
      "Think 'middle' of the cell.",
      "Spindle fibers attach to centromeres here."
    ],
    explanation: "During metaphase, chromosomes align at the metaphase plate ensuring each daughter cell gets one copy. Errors here can cause aneuploidy like Down syndrome.",
    learnMoreLink: { text: "Read more about Metaphase", url: "https://en.wikipedia.org/wiki/Metaphase" },
    difficulty: "easy"
  },
  {
    text: "The fluid mosaic model describes the structure of what?",
    options: ["A) DNA", "B) The cell membrane", "C) The cytoskeleton", "D) The nucleus"],
    correct: 1,
    hints: [
      "It refers to a flexible, dynamic structure.",
      "It involves phospholipids and proteins.",
      "Proteins float within the bilayer."
    ],
    explanation: "The fluid mosaic model shows that membrane proteins drift within the lipid bilayer like icebergs in the sea. This fluidity allows cells to grow, divide, and signal.",
    learnMoreLink: { text: "Read more about Fluid mosaic model", url: "https://en.wikipedia.org/wiki/Fluid_mosaic_model" },
    difficulty: "easy"
  },
  {
    text: "Which molecule in the cell membrane helps maintain fluidity at varying temperatures?",
    options: ["A) Glucose", "B) Cholesterol", "C) Starch", "D) DNA"],
    correct: 1,
    hints: [
      "It is a steroid.",
      "It is found between phospholipids.",
      "Animal membranes contain it."
    ],
    explanation: "Cholesterol prevents membranes from becoming too rigid in the cold or too leaky in the heat. This is why animals (but not plants) need it for membrane stability.",
    learnMoreLink: { text: "Read more about Cholesterol", url: "https://en.wikipedia.org/wiki/Cholesterol" },
    difficulty: "easy"
  },
  {
    text: "The Na⁺/K⁺ pump is an example of what type of transport?",
    options: ["A) Simple diffusion", "B) Facilitated diffusion", "C) Active transport", "D) Osmosis"],
    correct: 2,
    hints: [
      "It moves ions against their gradient.",
      "It requires ATP.",
      "It maintains nerve resting potential."
    ],
    explanation: "The sodium-potassium pump uses ATP to push 3 Na⁺ out and 2 K⁺ in, creating the electrical gradient needed for nerve impulses. It uses about 20% of your resting metabolism.",
    learnMoreLink: { text: "Read more about Na-K pump", url: "https://en.wikipedia.org/wiki/Na%2B/K%2B-ATPase" },
    difficulty: "easy"
  },
  {
    text: "What is the primary purpose of meiosis?",
    options: ["A) Tissue repair", "B) Producing gametes with genetic variation", "C) Replacing skin cells", "D) Healing wounds"],
    correct: 1,
    hints: [
      "It produces sex cells.",
      "It halves chromosome number.",
      "Crossing over occurs in prophase I."
    ],
    explanation: "Meiosis produces haploid gametes (sperm and eggs) and shuffles genes through crossing over and independent assortment. This genetic diversity is the raw material of evolution.",
    learnMoreLink: { text: "Read more about Meiosis", url: "https://en.wikipedia.org/wiki/Meiosis" },
    difficulty: "easy"
  },
  {
    text: "Programmed cell death is called what?",
    options: ["A) Necrosis", "B) Apoptosis", "C) Mitosis", "D) Cytokinesis"],
    correct: 1,
    hints: [
      "It is a controlled, orderly process.",
      "It removes damaged or unneeded cells.",
      "It shapes fingers in embryos."
    ],
    explanation: "Apoptosis sculpts your hands during development by killing webbing between fingers and eliminates pre-cancerous cells daily. Failed apoptosis is a hallmark of cancer.",
    learnMoreLink: { text: "Read more about Apoptosis", url: "https://en.wikipedia.org/wiki/Apoptosis" },
    difficulty: "easy"
  },
  {
    text: "The endoplasmic reticulum studded with ribosomes is called what?",
    options: ["A) Smooth ER", "B) Rough ER", "C) Golgi", "D) Nuclear envelope"],
    correct: 1,
    hints: [
      "Ribosomes give it a bumpy appearance.",
      "It synthesizes proteins for secretion.",
      "It connects to the nuclear envelope."
    ],
    explanation: "Rough ER processes proteins destined for export or membrane insertion, like insulin made in pancreatic beta cells. Smooth ER, in contrast, makes lipids and detoxifies drugs.",
    learnMoreLink: { text: "Read more about Endoplasmic reticulum", url: "https://en.wikipedia.org/wiki/Endoplasmic_reticulum" },
    difficulty: "easy"
  },
  {
    text: "What happens at the G1 cell cycle checkpoint?",
    options: ["A) Cell checks for DNA damage before replication", "B) Cell divides cytoplasm", "C) Chromosomes condense", "D) Nuclear membrane reforms"],
    correct: 0,
    hints: [
      "It is before S phase.",
      "p53 protein is involved here.",
      "It decides whether to proceed to DNA synthesis."
    ],
    explanation: "The G1 checkpoint ensures the cell is large enough and DNA is undamaged before committing to replication. Mutations in p53 disable this checkpoint in many cancers.",
    learnMoreLink: { text: "Read more about Cell cycle checkpoints", url: "https://en.wikipedia.org/wiki/Cell_cycle_checkpoint" },
    difficulty: "medium"
  },
  {
    text: "A red blood cell placed in distilled water will:",
    options: ["A) Shrink", "B) Stay the same", "C) Burst", "D) Divide"],
    correct: 2,
    hints: [
      "Pure water is hypotonic to cells.",
      "Water flows into the cell.",
      "Animal cells lack a cell wall to resist."
    ],
    explanation: "Without a cell wall, animal cells lyse when too much water enters by osmosis. This is why IV drips use saline (isotonic) rather than pure water.",
    learnMoreLink: { text: "Read more about Tonicity", url: "https://en.wikipedia.org/wiki/Tonicity" },
    difficulty: "medium"
  },
  {
    text: "During which phase of meiosis does crossing over occur?",
    options: ["A) Prophase I", "B) Metaphase I", "C) Anaphase II", "D) Telophase II"],
    correct: 0,
    hints: [
      "It happens early in meiosis.",
      "Homologous chromosomes pair up.",
      "It occurs at chiasmata."
    ],
    explanation: "Crossing over in prophase I exchanges segments between homologous chromosomes, creating new allele combinations. This is why siblings (other than identical twins) differ genetically.",
    learnMoreLink: { text: "Read more about Chromosomal crossover", url: "https://en.wikipedia.org/wiki/Chromosomal_crossover" },
    difficulty: "medium"
  },
  {
    text: "If a cell has 46 chromosomes before meiosis, how many will each gamete have after meiosis?",
    options: ["A) 92", "B) 46", "C) 23", "D) 12"],
    correct: 2,
    hints: [
      "Meiosis halves chromosome number.",
      "Two divisions occur.",
      "Gametes are haploid."
    ],
    explanation: "Human gametes carry 23 chromosomes; fertilization restores the diploid number of 46. This halving prevents chromosome doubling each generation.",
    learnMoreLink: { text: "Read more about Ploidy", url: "https://en.wikipedia.org/wiki/Ploidy" },
    difficulty: "medium"
  },
  {
    text: "Which heart chamber pumps oxygenated blood to the body?",
    options: ["A) Right atrium", "B) Right ventricle", "C) Left atrium", "D) Left ventricle"],
    correct: 3,
    hints: [
      "It has the thickest muscular wall.",
      "It pushes blood through the aorta.",
      "It is on the body's left side."
    ],
    explanation: "The left ventricle's thick muscle generates the high pressure needed to push blood throughout the body. This is why heart attacks affecting it are particularly dangerous.",
    learnMoreLink: { text: "Read more about Heart", url: "https://en.wikipedia.org/wiki/Heart" },
    difficulty: "beginner"
  },
  {
    text: "Which blood vessels carry blood AWAY from the heart?",
    options: ["A) Veins", "B) Arteries", "C) Capillaries", "D) Venules"],
    correct: 1,
    hints: [
      "They have thick muscular walls.",
      "They withstand high pressure.",
      "The aorta is the largest one."
    ],
    explanation: "Arteries carry blood from the heart under high pressure, which is why arterial bleeding is so severe. Their elastic walls help maintain blood pressure between heartbeats.",
    learnMoreLink: { text: "Read more about Arteries", url: "https://en.wikipedia.org/wiki/Artery" },
    difficulty: "beginner"
  },
  {
    text: "Where does gas exchange occur in the lungs?",
    options: ["A) Bronchi", "B) Trachea", "C) Alveoli", "D) Pharynx"],
    correct: 2,
    hints: [
      "These are tiny air sacs.",
      "They have a huge surface area.",
      "They are surrounded by capillaries."
    ],
    explanation: "Your 300 million alveoli provide surface area equivalent to a tennis court for oxygen-CO2 exchange. Smoking destroys alveoli, causing emphysema.",
    learnMoreLink: { text: "Read more about Alveoli", url: "https://en.wikipedia.org/wiki/Pulmonary_alveolus" },
    difficulty: "beginner"
  },
  {
    text: "Which muscle controls breathing by contracting downward?",
    options: ["A) Heart", "B) Diaphragm", "C) Biceps", "D) Trapezius"],
    correct: 1,
    hints: [
      "It separates chest and abdomen.",
      "It is dome-shaped when relaxed.",
      "It is the main breathing muscle."
    ],
    explanation: "When the diaphragm contracts, it flattens and creates negative pressure, drawing air into the lungs. Hiccups are involuntary diaphragm spasms.",
    learnMoreLink: { text: "Read more about Diaphragm", url: "https://en.wikipedia.org/wiki/Thoracic_diaphragm" },
    difficulty: "beginner"
  },
  {
    text: "Which organ produces bile?",
    options: ["A) Pancreas", "B) Stomach", "C) Liver", "D) Kidney"],
    correct: 2,
    hints: [
      "It is the largest internal organ.",
      "It detoxifies blood.",
      "Bile emulsifies fats."
    ],
    explanation: "The liver makes bile that breaks fats into smaller droplets for digestion, then stores it in the gallbladder. Liver damage from alcohol impairs this critical process.",
    learnMoreLink: { text: "Read more about Liver", url: "https://en.wikipedia.org/wiki/Liver" },
    difficulty: "beginner"
  },
  {
    text: "Insulin is produced by which organ?",
    options: ["A) Liver", "B) Pancreas", "C) Stomach", "D) Spleen"],
    correct: 1,
    hints: [
      "It is behind the stomach.",
      "Beta cells produce insulin.",
      "Type 1 diabetes results from its failure."
    ],
    explanation: "The pancreas's islets of Langerhans produce insulin to lower blood sugar after meals. Type 1 diabetics inject insulin because their immune system destroyed these cells.",
    learnMoreLink: { text: "Read more about Pancreas", url: "https://en.wikipedia.org/wiki/Pancreas" },
    difficulty: "beginner"
  },
  {
    text: "What is the basic functional unit of the nervous system?",
    options: ["A) Muscle fiber", "B) Neuron", "C) Osteocyte", "D) Lymphocyte"],
    correct: 1,
    hints: [
      "It transmits electrical signals.",
      "It has dendrites and an axon.",
      "Brain cells are an example."
    ],
    explanation: "Neurons communicate via electrical and chemical signals, enabling thought, sensation, and movement. Some neurons can be over a meter long, like those running down your leg.",
    learnMoreLink: { text: "Read more about Neuron", url: "https://en.wikipedia.org/wiki/Neuron" },
    difficulty: "beginner"
  },
  {
    text: "Which part of a neuron receives signals from other neurons?",
    options: ["A) Axon", "B) Dendrite", "C) Synapse", "D) Myelin"],
    correct: 1,
    hints: [
      "It branches like a tree.",
      "It is at the input end.",
      "Its name comes from the Greek for 'tree'."
    ],
    explanation: "Dendrites collect incoming signals and pass them to the cell body. Their branching pattern allows a single neuron to receive input from thousands of others.",
    learnMoreLink: { text: "Read more about Dendrite", url: "https://en.wikipedia.org/wiki/Dendrite" },
    difficulty: "beginner"
  },
  {
    text: "What does CNS stand for?",
    options: ["A) Cardiac nervous system", "B) Central nervous system", "C) Cellular neural system", "D) Cranial nerve set"],
    correct: 1,
    hints: [
      "Think 'main control'.",
      "It includes the brain.",
      "It also includes the spinal cord."
    ],
    explanation: "The CNS comprises the brain and spinal cord, processing information and coordinating responses. Spinal cord injuries can paralyze body parts below the damage.",
    learnMoreLink: { text: "Read more about Central nervous system", url: "https://en.wikipedia.org/wiki/Central_nervous_system" },
    difficulty: "beginner"
  },
  {
    text: "Red bone marrow's main function is to:",
    options: ["A) Store fat", "B) Produce blood cells", "C) Make hormones", "D) Filter waste"],
    correct: 1,
    hints: [
      "Think hematopoiesis.",
      "It is found inside bones.",
      "Leukemia affects this process."
    ],
    explanation: "Red bone marrow produces around 200 billion red blood cells daily. Bone marrow transplants can cure leukemia by replacing diseased blood-forming cells.",
    learnMoreLink: { text: "Read more about Bone marrow", url: "https://en.wikipedia.org/wiki/Bone_marrow" },
    difficulty: "beginner"
  },
  {
    text: "Which type of muscle is found in the heart?",
    options: ["A) Smooth", "B) Skeletal", "C) Cardiac", "D) Voluntary"],
    correct: 2,
    hints: [
      "It is striated and involuntary.",
      "It has intercalated discs.",
      "It is unique to one organ."
    ],
    explanation: "Cardiac muscle contracts rhythmically without conscious control, beating about 100,000 times daily. Its intercalated discs ensure synchronized contraction.",
    learnMoreLink: { text: "Read more about Cardiac muscle", url: "https://en.wikipedia.org/wiki/Cardiac_muscle" },
    difficulty: "beginner"
  },
  {
    text: "Which hormone raises blood sugar levels?",
    options: ["A) Insulin", "B) Glucagon", "C) Estrogen", "D) Melatonin"],
    correct: 1,
    hints: [
      "It is released by the pancreas.",
      "It opposes insulin.",
      "It triggers glycogen breakdown."
    ],
    explanation: "Glucagon, released when blood sugar falls, signals the liver to release glucose. Diabetics carry glucagon kits for severe hypoglycemia.",
    learnMoreLink: { text: "Read more about Glucagon", url: "https://en.wikipedia.org/wiki/Glucagon" },
    difficulty: "beginner"
  },
  {
    text: "The retina contains which light-detecting cells?",
    options: ["A) Hair cells", "B) Rods and cones", "C) Olfactory neurons", "D) Taste receptors"],
    correct: 1,
    hints: [
      "Two types — one for low light, one for color.",
      "They convert light to electrical signals.",
      "Cones detect colors."
    ],
    explanation: "Rods see in dim light while cones detect color. Color blindness usually arises from missing or defective cone types, often inherited on the X chromosome.",
    learnMoreLink: { text: "Read more about Retina", url: "https://en.wikipedia.org/wiki/Retina" },
    difficulty: "beginner"
  },
  {
    text: "What is the cornea's main function?",
    options: ["A) Detect color", "B) Focus light entering the eye", "C) Produce tears", "D) Drain fluid"],
    correct: 1,
    hints: [
      "It is the clear outer layer.",
      "It does most of the eye's focusing.",
      "LASIK surgery reshapes it."
    ],
    explanation: "The cornea provides about two-thirds of the eye's focusing power. LASIK surgery reshapes it with lasers to correct vision without glasses.",
    learnMoreLink: { text: "Read more about Cornea", url: "https://en.wikipedia.org/wiki/Cornea" },
    difficulty: "easy"
  },
  {
    text: "Which structure in the ear converts sound vibrations into nerve signals?",
    options: ["A) Eardrum", "B) Cochlea", "C) Eustachian tube", "D) Pinna"],
    correct: 1,
    hints: [
      "It is spiral-shaped.",
      "It contains hair cells.",
      "Its damage causes hearing loss."
    ],
    explanation: "The cochlea's hair cells transduce vibrations into electrical signals sent to the brain. Loud noise permanently damages these hair cells, causing hearing loss.",
    learnMoreLink: { text: "Read more about Cochlea", url: "https://en.wikipedia.org/wiki/Cochlea" },
    difficulty: "easy"
  },
  {
    text: "Which enzyme begins starch digestion in the mouth?",
    options: ["A) Pepsin", "B) Lipase", "C) Amylase", "D) Trypsin"],
    correct: 2,
    hints: [
      "It is in saliva.",
      "It targets carbohydrates.",
      "Its substrate is starch."
    ],
    explanation: "Salivary amylase breaks starch into maltose, which is why bread tastes sweet if chewed long enough. Pancreatic amylase continues this process in the small intestine.",
    learnMoreLink: { text: "Read more about Amylase", url: "https://en.wikipedia.org/wiki/Amylase" },
    difficulty: "easy"
  },
  {
    text: "Where does most nutrient absorption occur?",
    options: ["A) Stomach", "B) Small intestine", "C) Large intestine", "D) Esophagus"],
    correct: 1,
    hints: [
      "It is several meters long.",
      "It has finger-like villi.",
      "Its surface area is huge."
    ],
    explanation: "Villi and microvilli give the small intestine a surface area of about 250 m². Celiac disease damages villi, impairing absorption.",
    learnMoreLink: { text: "Read more about Small intestine", url: "https://en.wikipedia.org/wiki/Small_intestine" },
    difficulty: "easy"
  },
  {
    text: "A reflex arc bypasses which structure for speed?",
    options: ["A) Spinal cord", "B) Brain", "C) Sensory neuron", "D) Motor neuron"],
    correct: 1,
    hints: [
      "Consider where conscious thought happens.",
      "Reflexes are unconscious.",
      "Withdrawing from a hot stove is an example."
    ],
    explanation: "Reflex arcs route signals through the spinal cord directly back to muscles, saving precious milliseconds. This is why you yank your hand away before realizing the stove is hot.",
    learnMoreLink: { text: "Read more about Reflex arc", url: "https://en.wikipedia.org/wiki/Reflex_arc" },
    difficulty: "easy"
  },
  {
    text: "Antagonistic muscle pairs include which arm muscles?",
    options: ["A) Deltoid and pectoral", "B) Biceps and triceps", "C) Quadriceps and hamstring", "D) Abdominal and oblique"],
    correct: 1,
    hints: [
      "They are in the upper arm.",
      "One bends, the other extends.",
      "Think of doing a curl."
    ],
    explanation: "Biceps flex the elbow while triceps extend it — they always work in opposition since muscles can only pull. This pairing exists across most body movements.",
    learnMoreLink: { text: "Read more about Antagonistic muscle", url: "https://en.wikipedia.org/wiki/Anatomical_terms_of_muscle" },
    difficulty: "easy"
  },
  {
    text: "ADH (antidiuretic hormone) helps the body to:",
    options: ["A) Conserve water", "B) Lower blood sugar", "C) Increase metabolism", "D) Stimulate growth"],
    correct: 0,
    hints: [
      "It targets the kidneys.",
      "It reduces urine output.",
      "Alcohol inhibits it, causing dehydration."
    ],
    explanation: "ADH (vasopressin) signals kidneys to reabsorb more water, concentrating urine. Alcohol blocks ADH, explaining why drinking causes dehydration and frequent urination.",
    learnMoreLink: { text: "Read more about Vasopressin", url: "https://en.wikipedia.org/wiki/Vasopressin" },
    difficulty: "easy"
  },
  {
    text: "Adrenaline triggers the:",
    options: ["A) Rest and digest response", "B) Fight or flight response", "C) Sleep cycle", "D) Digestion of fats"],
    correct: 1,
    hints: [
      "It is released in stress.",
      "It comes from the adrenal glands.",
      "Heart rate increases."
    ],
    explanation: "Adrenaline boosts heart rate, dilates airways, and releases glucose for emergency action. EpiPens use it to reverse life-threatening allergic reactions.",
    learnMoreLink: { text: "Read more about Adrenaline", url: "https://en.wikipedia.org/wiki/Adrenaline" },
    difficulty: "easy"
  },
  {
    text: "Thyroxine is produced by which gland?",
    options: ["A) Pituitary", "B) Adrenal", "C) Thyroid", "D) Pineal"],
    correct: 2,
    hints: [
      "It is in the neck.",
      "It is butterfly-shaped.",
      "It regulates metabolism."
    ],
    explanation: "Thyroxine sets the body's metabolic rate; deficiency causes fatigue and weight gain. Goiter occurs when iodine deficiency prevents thyroxine production.",
    learnMoreLink: { text: "Read more about Thyroid hormones", url: "https://en.wikipedia.org/wiki/Thyroid_hormones" },
    difficulty: "easy"
  },
  {
    text: "In the cardiac cycle, systole refers to:",
    options: ["A) Heart relaxation", "B) Heart contraction", "C) Valves opening", "D) Atrial filling"],
    correct: 1,
    hints: [
      "Pressure peaks during this phase.",
      "It is the higher of the two BP numbers.",
      "120/80 — the 120 is this phase."
    ],
    explanation: "Systolic pressure (top number) reflects ventricular contraction force. High systolic readings predict heart attack and stroke risk.",
    learnMoreLink: { text: "Read more about Systole", url: "https://en.wikipedia.org/wiki/Systole" },
    difficulty: "medium"
  },
  {
    text: "Which neurotransmitter is most associated with mood, sleep, and depression?",
    options: ["A) Dopamine", "B) Serotonin", "C) GABA", "D) Acetylcholine"],
    correct: 1,
    hints: [
      "SSRIs target it.",
      "Most of it is made in the gut.",
      "It is also called 5-HT."
    ],
    explanation: "Serotonin influences mood, sleep, and appetite; SSRIs (Prozac, Zoloft) treat depression by increasing its availability. About 90% of serotonin is actually in the gut.",
    learnMoreLink: { text: "Read more about Serotonin", url: "https://en.wikipedia.org/wiki/Serotonin" },
    difficulty: "medium"
  },
  {
    text: "During exercise, muscles may switch to anaerobic respiration, producing:",
    options: ["A) CO2 and water", "B) Ethanol", "C) Lactic acid", "D) Glucose"],
    correct: 2,
    hints: [
      "It builds up during sprints.",
      "It can cause muscle fatigue.",
      "It is later converted by the liver."
    ],
    explanation: "When oxygen runs short, muscles produce lactic acid for quick ATP, contributing to the burn during sprints. The liver later converts lactate back to glucose.",
    learnMoreLink: { text: "Read more about Lactic acid fermentation", url: "https://en.wikipedia.org/wiki/Lactic_acid_fermentation" },
    difficulty: "medium"
  },
  {
    text: "Which structure prevents food from entering the windpipe?",
    options: ["A) Uvula", "B) Epiglottis", "C) Tonsils", "D) Soft palate"],
    correct: 1,
    hints: [
      "It is a flap of cartilage.",
      "It closes during swallowing.",
      "Choking occurs when it fails."
    ],
    explanation: "The epiglottis covers the trachea during swallowing to direct food into the esophagus. Choking happens when this protective mechanism fails.",
    learnMoreLink: { text: "Read more about Epiglottis", url: "https://en.wikipedia.org/wiki/Epiglottis" },
    difficulty: "beginner"
  },
  {
    text: "Which type of joint is found in the shoulder and hip?",
    options: ["A) Hinge", "B) Ball-and-socket", "C) Pivot", "D) Gliding"],
    correct: 1,
    hints: [
      "These joints allow rotation.",
      "They have the widest range of motion.",
      "A round head fits into a cavity."
    ],
    explanation: "Ball-and-socket joints allow rotation in nearly any direction. Hip replacements substitute artificial ball-and-socket components to restore mobility.",
    learnMoreLink: { text: "Read more about Ball and socket joint", url: "https://en.wikipedia.org/wiki/Ball_and_socket_joint" },
    difficulty: "easy"
  },
  {
    text: "Why does smoking damage cilia in the airways?",
    options: ["A) Cilia absorb tar", "B) Smoke paralyzes and destroys cilia", "C) Smoke replaces cilia", "D) Cilia grow longer"],
    correct: 1,
    hints: [
      "Cilia normally sweep mucus upward.",
      "Smoker's cough results from this.",
      "Toxins paralyze movement."
    ],
    explanation: "Without functioning cilia, mucus and pathogens accumulate, causing chronic bronchitis and lung infections. This is why smokers cough — it's the only way to clear mucus.",
    learnMoreLink: { text: "Read more about Cilium", url: "https://en.wikipedia.org/wiki/Cilium" },
    difficulty: "medium"
  },
  {
    text: "What is the primary cause of osteoporosis?",
    options: ["A) Excess calcium", "B) Loss of bone density", "C) Bone infection", "D) Bone tumor"],
    correct: 1,
    hints: [
      "It involves brittle bones.",
      "It is common in postmenopausal women.",
      "Estrogen decline contributes."
    ],
    explanation: "Osteoporosis weakens bones as resorption outpaces formation, increasing fracture risk. Weight-bearing exercise and calcium-rich diet help prevent it.",
    learnMoreLink: { text: "Read more about Osteoporosis", url: "https://en.wikipedia.org/wiki/Osteoporosis" },
    difficulty: "easy"
  },
  {
    text: "Your blood pressure reads 130/85. The 85 represents pressure during:",
    options: ["A) Atrial systole", "B) Ventricular systole", "C) Ventricular diastole", "D) Pulmonary contraction"],
    correct: 2,
    hints: [
      "It is the lower number.",
      "It reflects relaxation.",
      "Ventricles refill during this phase."
    ],
    explanation: "Diastolic pressure measures arterial pressure when the heart relaxes between beats. Elevated diastolic readings often indicate stiff arteries.",
    learnMoreLink: { text: "Read more about Diastole", url: "https://en.wikipedia.org/wiki/Diastole" },
    difficulty: "hard"
  },
  {
    text: "After a heavy meal, why does insulin secretion increase?",
    options: ["A) To raise blood glucose", "B) To promote glucose uptake into cells", "C) To break down fat", "D) To stimulate hunger"],
    correct: 1,
    hints: [
      "Insulin is released after eating.",
      "It lowers blood sugar.",
      "Cells take up glucose for storage."
    ],
    explanation: "Insulin signals cells to absorb glucose for use or storage as glycogen and fat. In type 2 diabetes, cells become resistant to this signal.",
    learnMoreLink: { text: "Read more about Insulin", url: "https://en.wikipedia.org/wiki/Insulin" },
    difficulty: "hard"
  },
  {
    text: "What direct role does ATP play in muscle contraction?",
    options: ["A) Forms cross-bridges", "B) Detaches myosin from actin and re-energizes it", "C) Triggers calcium release", "D) Builds new protein"],
    correct: 1,
    hints: [
      "It is needed to release the cross-bridge.",
      "Without it, muscles stay locked.",
      "Rigor mortis results from ATP depletion."
    ],
    explanation: "ATP detaches myosin from actin and 'cocks' the head for the next stroke. After death, ATP runs out and myosin stays bound, causing rigor mortis.",
    learnMoreLink: { text: "Read more about Sliding filament theory", url: "https://en.wikipedia.org/wiki/Sliding_filament_theory" },
    difficulty: "hard"
  },
  {
    text: "Why does saltatory conduction speed up nerve impulses in myelinated neurons?",
    options: ["A) Myelin generates current", "B) Impulses jump between nodes of Ranvier", "C) Myelin produces neurotransmitters", "D) Axons are wider"],
    correct: 1,
    hints: [
      "Think 'hopping'.",
      "Gaps in myelin are key.",
      "MS damages this process."
    ],
    explanation: "Action potentials skip from node to node along myelinated axons rather than propagating continuously. Multiple sclerosis destroys myelin, slowing nerve signals.",
    learnMoreLink: { text: "Read more about Saltatory conduction", url: "https://en.wikipedia.org/wiki/Saltatory_conduction" },
    difficulty: "hard"
  },
  {
    text: "DNA's two strands are connected by what type of bond between bases?",
    options: ["A) Covalent", "B) Hydrogen", "C) Ionic", "D) Peptide"],
    correct: 1,
    hints: [
      "These bonds are weak individually but strong collectively.",
      "They allow strands to separate during replication.",
      "Water also forms these bonds."
    ],
    explanation: "Hydrogen bonds between base pairs hold DNA's strands together yet allow easy separation for replication and transcription. Heating DNA breaks these bonds.",
    learnMoreLink: { text: "Read more about Base pair", url: "https://en.wikipedia.org/wiki/Base_pair" },
    difficulty: "beginner"
  },
  {
    text: "In DNA, adenine pairs with:",
    options: ["A) Cytosine", "B) Guanine", "C) Thymine", "D) Uracil"],
    correct: 2,
    hints: [
      "A always pairs with the same letter.",
      "Two hydrogen bonds form.",
      "Not C or G."
    ],
    explanation: "A-T and G-C pairing follows Chargaff's rules and ensures faithful DNA replication. RNA replaces thymine with uracil.",
    learnMoreLink: { text: "Read more about Adenine", url: "https://en.wikipedia.org/wiki/Adenine" },
    difficulty: "beginner"
  },
  {
    text: "The 'central dogma' of biology describes the flow:",
    options: ["A) RNA → DNA → Protein", "B) DNA → RNA → Protein", "C) Protein → RNA → DNA", "D) DNA → Protein → RNA"],
    correct: 1,
    hints: [
      "DNA is the master copy.",
      "RNA is an intermediate.",
      "Proteins are products."
    ],
    explanation: "Genetic information flows from DNA to RNA (transcription) to protein (translation). Retroviruses like HIV reverse part of this with reverse transcriptase.",
    learnMoreLink: { text: "Read more about Central dogma", url: "https://en.wikipedia.org/wiki/Central_dogma_of_molecular_biology" },
    difficulty: "beginner"
  },
  {
    text: "What is a gene?",
    options: ["A) A type of protein", "B) A segment of DNA coding for a trait", "C) A whole chromosome", "D) An RNA molecule"],
    correct: 1,
    hints: [
      "It carries hereditary information.",
      "It is a part of a chromosome.",
      "It codes for a protein or RNA."
    ],
    explanation: "Humans have about 20,000 protein-coding genes. Genetic engineering allows us to insert genes from one organism into another.",
    learnMoreLink: { text: "Read more about Gene", url: "https://en.wikipedia.org/wiki/Gene" },
    difficulty: "beginner"
  },
  {
    text: "An organism with two identical alleles for a gene is:",
    options: ["A) Heterozygous", "B) Homozygous", "C) Hemizygous", "D) Polygenic"],
    correct: 1,
    hints: [
      "'Homo' means 'same'.",
      "Both alleles match.",
      "Such organisms breed true."
    ],
    explanation: "Homozygous organisms have two of the same allele (BB or bb). Recessive disorders like cystic fibrosis appear in homozygous recessive individuals.",
    learnMoreLink: { text: "Read more about Zygosity", url: "https://en.wikipedia.org/wiki/Zygosity" },
    difficulty: "beginner"
  },
  {
    text: "Which sex chromosomes do human males have?",
    options: ["A) XX", "B) XY", "C) YY", "D) X only"],
    correct: 1,
    hints: [
      "One is from each parent.",
      "The Y comes from the father.",
      "It contains the SRY gene."
    ],
    explanation: "Males inherit Y from father and X from mother; SRY on Y triggers male development. This is why X-linked disorders affect males more.",
    learnMoreLink: { text: "Read more about Sex chromosomes", url: "https://en.wikipedia.org/wiki/Sex_chromosome" },
    difficulty: "beginner"
  },
  {
    text: "Down syndrome is caused by:",
    options: ["A) An extra chromosome 21", "B) A missing X chromosome", "C) A point mutation", "D) Mitochondrial DNA damage"],
    correct: 0,
    hints: [
      "It is a chromosomal disorder.",
      "It involves trisomy.",
      "Number 21 is involved."
    ],
    explanation: "Trisomy 21 results from nondisjunction during meiosis. Risk increases with maternal age due to longer egg storage time.",
    learnMoreLink: { text: "Read more about Down syndrome", url: "https://en.wikipedia.org/wiki/Down_syndrome" },
    difficulty: "beginner"
  },
  {
    text: "Who is considered the 'father of genetics'?",
    options: ["A) Charles Darwin", "B) Gregor Mendel", "C) James Watson", "D) Louis Pasteur"],
    correct: 1,
    hints: [
      "He was a monk.",
      "He worked with pea plants.",
      "He discovered laws of inheritance."
    ],
    explanation: "Mendel's pea plant experiments (1860s) revealed inheritance laws decades before genes were identified. His work was rediscovered around 1900.",
    learnMoreLink: { text: "Read more about Gregor Mendel", url: "https://en.wikipedia.org/wiki/Gregor_Mendel" },
    difficulty: "beginner"
  },
  {
    text: "RNA differs from DNA by containing which sugar?",
    options: ["A) Glucose", "B) Deoxyribose", "C) Ribose", "D) Fructose"],
    correct: 2,
    hints: [
      "It has one more oxygen than its DNA counterpart.",
      "Its name is in 'RNA'.",
      "It is a 5-carbon sugar."
    ],
    explanation: "Ribose makes RNA more reactive than DNA, suiting RNA's short-lived messenger role. DNA's deoxyribose makes it more stable for long-term storage.",
    learnMoreLink: { text: "Read more about Ribose", url: "https://en.wikipedia.org/wiki/Ribose" },
    difficulty: "beginner"
  },
  {
    text: "How many bases form a codon?",
    options: ["A) Two", "B) Three", "C) Four", "D) Five"],
    correct: 1,
    hints: [
      "Each codon specifies one amino acid.",
      "There are 64 possible combinations.",
      "Triplets."
    ],
    explanation: "Three-base codons specify amino acids; with 4 bases that gives 64 codons for 20 amino acids plus stop signals. The genetic code is nearly universal.",
    learnMoreLink: { text: "Read more about Codon", url: "https://en.wikipedia.org/wiki/Codon" },
    difficulty: "easy"
  },
  {
    text: "Which enzyme synthesizes new DNA strands during replication?",
    options: ["A) DNA polymerase", "B) Helicase", "C) Ligase", "D) RNA polymerase"],
    correct: 0,
    hints: [
      "It builds DNA from nucleotides.",
      "It works 5' to 3'.",
      "Its name says it polymerizes DNA."
    ],
    explanation: "DNA polymerase reads a template strand and adds complementary nucleotides. PCR uses heat-stable DNA polymerase to amplify DNA in labs and forensics.",
    learnMoreLink: { text: "Read more about DNA polymerase", url: "https://en.wikipedia.org/wiki/DNA_polymerase" },
    difficulty: "easy"
  },
  {
    text: "In a cross between Bb × Bb, what fraction of offspring will be homozygous recessive?",
    options: ["A) 1/4", "B) 1/2", "C) 3/4", "D) None"],
    correct: 0,
    hints: [
      "Use a Punnett square.",
      "bb is the genotype.",
      "1 out of 4 squares."
    ],
    explanation: "A standard monohybrid cross gives a 1:2:1 genotypic ratio (BB:Bb:bb). This is why two carrier parents have a 25% chance of an affected child.",
    learnMoreLink: { text: "Read more about Punnett square", url: "https://en.wikipedia.org/wiki/Punnett_square" },
    difficulty: "easy"
  },
  {
    text: "Hemophilia is most common in males because:",
    options: ["A) It is dominant", "B) It is X-linked recessive", "C) It is Y-linked", "D) Females cannot inherit it"],
    correct: 1,
    hints: [
      "Males have one X chromosome.",
      "There is no second X to mask the allele.",
      "Mothers are usually carriers."
    ],
    explanation: "Males with one defective X allele express the disorder, since they lack a second X. Queen Victoria was a famous hemophilia carrier who passed it to royalty across Europe.",
    learnMoreLink: { text: "Read more about Hemophilia", url: "https://en.wikipedia.org/wiki/Haemophilia" },
    difficulty: "easy"
  },
  {
    text: "ABO blood groups demonstrate:",
    options: ["A) Complete dominance", "B) Codominance and multiple alleles", "C) Sex linkage", "D) Polygenic inheritance"],
    correct: 1,
    hints: [
      "There are three alleles total.",
      "AB blood expresses both A and B.",
      "Both alleles produce antigens."
    ],
    explanation: "Type AB people produce both A and B antigens equally — codominance. The IA, IB, and i alleles produce six possible genotypes.",
    learnMoreLink: { text: "Read more about ABO blood group", url: "https://en.wikipedia.org/wiki/ABO_blood_group_system" },
    difficulty: "medium"
  },
  {
    text: "What is a frameshift mutation?",
    options: ["A) A change in one base", "B) Insertion or deletion that shifts the reading frame", "C) An inverted chromosome", "D) An extra chromosome"],
    correct: 1,
    hints: [
      "It changes how codons are read.",
      "Often very damaging.",
      "Caused by indels."
    ],
    explanation: "Adding or removing bases not in groups of three shifts every codon downstream, often producing nonfunctional proteins. Cystic fibrosis can arise from such mutations.",
    learnMoreLink: { text: "Read more about Frameshift mutation", url: "https://en.wikipedia.org/wiki/Frameshift_mutation" },
    difficulty: "medium"
  },
  {
    text: "Sickle cell anemia is caused by a mutation in which protein?",
    options: ["A) Insulin", "B) Hemoglobin", "C) Collagen", "D) Albumin"],
    correct: 1,
    hints: [
      "It is in red blood cells.",
      "It carries oxygen.",
      "A single amino acid change is responsible."
    ],
    explanation: "A single base change (GAG→GTG) replaces glutamic acid with valine in beta-globin, deforming red blood cells. The carrier state offers some malaria resistance.",
    learnMoreLink: { text: "Read more about Sickle cell disease", url: "https://en.wikipedia.org/wiki/Sickle_cell_disease" },
    difficulty: "easy"
  },
  {
    text: "Cystic fibrosis affects which type of body secretions?",
    options: ["A) Blood", "B) Mucus and other fluids", "C) Bile", "D) Saliva only"],
    correct: 1,
    hints: [
      "Lungs are heavily impacted.",
      "Thick, sticky secretions form.",
      "The CFTR gene is involved."
    ],
    explanation: "Defective CFTR chloride channels lead to thick mucus clogging lungs and pancreas. Modern drugs like ivacaftor target the protein directly.",
    learnMoreLink: { text: "Read more about Cystic fibrosis", url: "https://en.wikipedia.org/wiki/Cystic_fibrosis" },
    difficulty: "easy"
  },
  {
    text: "Translation occurs at which organelle?",
    options: ["A) Nucleus", "B) Ribosome", "C) Mitochondrion", "D) Lysosome"],
    correct: 1,
    hints: [
      "Where proteins are made.",
      "It reads mRNA.",
      "It uses tRNA to bring amino acids."
    ],
    explanation: "Ribosomes assemble amino acids in the order specified by mRNA. Some antibiotics like streptomycin disrupt bacterial ribosomes specifically.",
    learnMoreLink: { text: "Read more about Translation", url: "https://en.wikipedia.org/wiki/Translation_(biology)" },
    difficulty: "easy"
  },
  {
    text: "PKU (phenylketonuria) requires affected individuals to avoid:",
    options: ["A) Sugar", "B) Phenylalanine", "C) Lactose", "D) Gluten"],
    correct: 1,
    hints: [
      "It is an amino acid.",
      "It is in the disease's name.",
      "Diet sodas warn about it."
    ],
    explanation: "PKU patients lack the enzyme to break down phenylalanine, leading to brain damage if it accumulates. Newborns are screened so dietary control begins early.",
    learnMoreLink: { text: "Read more about Phenylketonuria", url: "https://en.wikipedia.org/wiki/Phenylketonuria" },
    difficulty: "easy"
  },
  {
    text: "Two flowers crossed: red (RR) × white (WW) → all pink offspring (RW). This shows:",
    options: ["A) Codominance", "B) Incomplete dominance", "C) Multiple alleles", "D) Epistasis"],
    correct: 1,
    hints: [
      "Heterozygotes show a blended phenotype.",
      "Pink is between red and white.",
      "Neither allele fully dominates."
    ],
    explanation: "Incomplete dominance produces an intermediate phenotype rather than dominant/recessive. Snapdragons famously show this in flower color.",
    learnMoreLink: { text: "Read more about Incomplete dominance", url: "https://en.wikipedia.org/wiki/Dominance_(genetics)" },
    difficulty: "medium"
  },
  {
    text: "If a man is type AB and a woman is type O, what blood types can their children have?",
    options: ["A) Only AB", "B) Only A or B", "C) Only O", "D) A, B, AB, or O"],
    correct: 1,
    hints: [
      "Father gives I^A or I^B.",
      "Mother gives only i.",
      "No I^A I^A or I^B I^B possible."
    ],
    explanation: "Children inherit either I^A or I^B from the father plus i from mother, giving I^A i (type A) or I^B i (type B). Neither AB nor O is possible.",
    learnMoreLink: { text: "Read more about Blood type genetics", url: "https://en.wikipedia.org/wiki/ABO_blood_group_system" },
    difficulty: "medium"
  },
  {
    text: "Epigenetics studies changes in:",
    options: ["A) DNA sequence", "B) Gene expression without changing DNA sequence", "C) Chromosome number", "D) Protein structure"],
    correct: 1,
    hints: [
      "It involves chemical tags on DNA.",
      "Methylation is involved.",
      "Environment can influence these tags."
    ],
    explanation: "DNA methylation and histone modifications can switch genes on or off without altering DNA sequence. Identical twins develop different epigenomes over their lives.",
    learnMoreLink: { text: "Read more about Epigenetics", url: "https://en.wikipedia.org/wiki/Epigenetics" },
    difficulty: "medium"
  },
  {
    text: "The mRNA sequence AUG-GCU-UAA codes for how many amino acids?",
    options: ["A) Three", "B) Two", "C) One", "D) Four"],
    correct: 1,
    hints: [
      "AUG is start.",
      "UAA is stop.",
      "Stop codons aren't translated."
    ],
    explanation: "AUG (methionine) and GCU (alanine) are translated; UAA terminates translation without coding an amino acid. Stop codons release the polypeptide.",
    learnMoreLink: { text: "Read more about Stop codon", url: "https://en.wikipedia.org/wiki/Stop_codon" },
    difficulty: "medium"
  },
  {
    text: "Which technique amplifies small DNA samples for analysis?",
    options: ["A) Gel electrophoresis", "B) PCR", "C) Microscopy", "D) Centrifugation"],
    correct: 1,
    hints: [
      "It uses thermal cycling.",
      "It uses Taq polymerase.",
      "Used in COVID-19 testing."
    ],
    explanation: "Polymerase chain reaction copies DNA exponentially, enabling forensics, diagnostics (including COVID-19 PCR tests), and research from minute samples.",
    learnMoreLink: { text: "Read more about PCR", url: "https://en.wikipedia.org/wiki/Polymerase_chain_reaction" },
    difficulty: "medium"
  },
  {
    text: "Why are X-linked recessive disorders far more common in males?",
    options: ["A) Females repair mutations faster", "B) Males have only one X chromosome", "C) Males have more mutations", "D) Y carries the disease"],
    correct: 1,
    hints: [
      "Think hemizygous.",
      "Males can't mask a recessive X allele.",
      "Females need two copies."
    ],
    explanation: "Males inherit a single X, so any recessive X-linked allele will be expressed. Females have two Xs, so a healthy copy usually masks a defective one.",
    learnMoreLink: { text: "Read more about X-linked recessive inheritance", url: "https://en.wikipedia.org/wiki/X-linked_recessive_inheritance" },
    difficulty: "medium"
  },
  {
    text: "Which mutation type involves a single base change?",
    options: ["A) Point", "B) Frameshift", "C) Translocation", "D) Aneuploidy"],
    correct: 0,
    hints: [
      "Smallest possible mutation.",
      "Sickle cell anemia is an example.",
      "Substitution of one base."
    ],
    explanation: "Point mutations swap one nucleotide for another and can be silent, missense, or nonsense. They drive much of evolution and disease.",
    learnMoreLink: { text: "Read more about Point mutation", url: "https://en.wikipedia.org/wiki/Point_mutation" },
    difficulty: "medium"
  },
  {
    text: "Telomeres protect chromosomes by:",
    options: ["A) Coding for proteins", "B) Capping chromosome ends to prevent damage", "C) Connecting homologous pairs", "D) Storing extra DNA"],
    correct: 1,
    hints: [
      "They are at chromosome tips.",
      "They shorten with each division.",
      "Linked to aging."
    ],
    explanation: "Telomeres prevent chromosome ends from fraying or fusing. Their progressive shortening contributes to cellular aging and limits cell divisions.",
    learnMoreLink: { text: "Read more about Telomere", url: "https://en.wikipedia.org/wiki/Telomere" },
    difficulty: "medium"
  },
  {
    text: "A dihybrid cross AaBb × AaBb produces what phenotypic ratio (independent assortment)?",
    options: ["A) 3:1", "B) 1:2:1", "C) 9:3:3:1", "D) 1:1:1:1"],
    correct: 2,
    hints: [
      "Two traits, both heterozygous.",
      "Mendel found this ratio.",
      "16 combinations total."
    ],
    explanation: "9:3:3:1 represents both dominants : one dominant : the other dominant : both recessive. Mendel used this to formulate the law of independent assortment.",
    learnMoreLink: { text: "Read more about Dihybrid cross", url: "https://en.wikipedia.org/wiki/Dihybrid_cross" },
    difficulty: "hard"
  },
  {
    text: "If a population has 16% homozygous recessive individuals, what is the allele frequency q under Hardy-Weinberg?",
    options: ["A) 0.04", "B) 0.16", "C) 0.4", "D) 0.6"],
    correct: 2,
    hints: [
      "q² = frequency of homozygous recessive.",
      "Take the square root.",
      "0.16 = q²."
    ],
    explanation: "Under Hardy-Weinberg, q² = 0.16 gives q = 0.4. This lets us calculate carrier frequencies (2pq) for genetic counseling.",
    learnMoreLink: { text: "Read more about Hardy-Weinberg principle", url: "https://en.wikipedia.org/wiki/Hardy%E2%80%93Weinberg_principle" },
    difficulty: "hard"
  },
  {
    text: "A mother (carrier) and father (unaffected) have a son. What is the probability he has hemophilia?",
    options: ["A) 0%", "B) 25%", "C) 50%", "D) 100%"],
    correct: 2,
    hints: [
      "Carrier mother is X^H X^h.",
      "Father is X^H Y.",
      "Sons get X from mother."
    ],
    explanation: "Sons inherit either X^H or X^h from the carrier mother (50/50). The father's X never goes to a son, so 50% of sons will have hemophilia.",
    learnMoreLink: { text: "Read more about Haemophilia", url: "https://en.wikipedia.org/wiki/Haemophilia" },
    difficulty: "hard"
  },
  {
    text: "Why do CRISPR-Cas9 systems represent a breakthrough in genetics?",
    options: ["A) They sequence DNA quickly", "B) They allow precise gene editing using guide RNA", "C) They produce proteins", "D) They sterilize cells"],
    correct: 1,
    hints: [
      "Originally a bacterial defense.",
      "Uses RNA guidance.",
      "Enables targeted DNA cuts."
    ],
    explanation: "CRISPR-Cas9 uses a guide RNA to target specific DNA sequences for cutting, enabling precise edits. It earned the 2020 Nobel Prize and treats sickle cell disease.",
    learnMoreLink: { text: "Read more about CRISPR", url: "https://en.wikipedia.org/wiki/CRISPR" },
    difficulty: "hard"
  },
  {
    text: "Charles Darwin's voyage that inspired his theory was on which ship?",
    options: ["A) HMS Victory", "B) HMS Beagle", "C) HMS Endeavour", "D) HMS Bounty"],
    correct: 1,
    hints: [
      "Five-year voyage.",
      "Visited the Galápagos Islands.",
      "Named after a hunting dog breed."
    ],
    explanation: "Darwin's 1831-1836 voyage on HMS Beagle gave him observations of finches, tortoises, and fossils that led to On the Origin of Species. He published in 1859.",
    learnMoreLink: { text: "Read more about HMS Beagle", url: "https://en.wikipedia.org/wiki/HMS_Beagle" },
    difficulty: "beginner"
  },
  {
    text: "Natural selection acts on:",
    options: ["A) Individuals", "B) Heritable variation", "C) Random gene drift", "D) Mutations only"],
    correct: 1,
    hints: [
      "Traits must be passed to offspring.",
      "Without it, selection cannot drive change.",
      "Variations have a genetic basis."
    ],
    explanation: "Selection requires heritable variation that affects survival or reproduction. Without heritability, advantageous traits can't accumulate over generations.",
    learnMoreLink: { text: "Read more about Natural selection", url: "https://en.wikipedia.org/wiki/Natural_selection" },
    difficulty: "beginner"
  },
  {
    text: "Which observation did Darwin make about Galápagos finches?",
    options: ["A) They all looked identical", "B) Their beaks varied by island and food source", "C) They could not fly", "D) They were extinct"],
    correct: 1,
    hints: [
      "Beak shape was key.",
      "Different islands, different beaks.",
      "Diet drove the differences."
    ],
    explanation: "Each finch species had beaks suited to local food: seeds, insects, or cactus. This adaptive radiation became a textbook example of natural selection.",
    learnMoreLink: { text: "Read more about Darwin's finches", url: "https://en.wikipedia.org/wiki/Darwin%27s_finches" },
    difficulty: "beginner"
  },
  {
    text: "The fossil record provides evidence of:",
    options: ["A) Only living species", "B) Evolutionary changes over time", "C) Only mammals", "D) Genetic mutations"],
    correct: 1,
    hints: [
      "Fossils show different species in different rock layers.",
      "Older rocks contain simpler organisms.",
      "It documents change."
    ],
    explanation: "Fossils preserve organisms from different eras, showing transitional forms like Tiktaalik (fish-to-land) and Archaeopteryx (dinosaur-to-bird).",
    learnMoreLink: { text: "Read more about Fossil record", url: "https://en.wikipedia.org/wiki/Fossil" },
    difficulty: "beginner"
  },
  {
    text: "Which is an example of camouflage?",
    options: ["A) A peacock's tail", "B) A walking stick insect", "C) A bee sting", "D) A skunk's spray"],
    correct: 1,
    hints: [
      "Blending in with surroundings.",
      "Looks like a twig.",
      "Hides from predators."
    ],
    explanation: "Stick insects evade predators by mimicking twigs — a form of crypsis. Camouflage is a classic adaptation favored by natural selection.",
    learnMoreLink: { text: "Read more about Camouflage", url: "https://en.wikipedia.org/wiki/Camouflage" },
    difficulty: "beginner"
  },
  {
    text: "Bird wings and human arms have similar bone structures. They are:",
    options: ["A) Analogous", "B) Homologous", "C) Vestigial", "D) Convergent"],
    correct: 1,
    hints: [
      "Same structure, different function.",
      "Suggest common ancestry.",
      "Same bones, modified."
    ],
    explanation: "Homologous structures share a common evolutionary origin even if they now serve different functions. They are key evidence for common descent.",
    learnMoreLink: { text: "Read more about Homology (biology)", url: "https://en.wikipedia.org/wiki/Homology_(biology)" },
    difficulty: "beginner"
  },
  {
    text: "Antibiotic resistance in bacteria is an example of:",
    options: ["A) Lamarckian inheritance", "B) Natural selection in action", "C) Spontaneous generation", "D) Genetic drift only"],
    correct: 1,
    hints: [
      "Resistant bacteria survive treatment.",
      "They reproduce more.",
      "Selection pressure is the antibiotic."
    ],
    explanation: "Antibiotics kill susceptible bacteria, leaving resistant survivors to multiply. Overuse of antibiotics has led to MRSA and other dangerous superbugs.",
    learnMoreLink: { text: "Read more about Antibiotic resistance", url: "https://en.wikipedia.org/wiki/Antimicrobial_resistance" },
    difficulty: "beginner"
  },
  {
    text: "What is a vestigial structure?",
    options: ["A) A new adaptation", "B) An organ that has lost most of its original function", "C) A bone broken in fossils", "D) A type of mutation"],
    correct: 1,
    hints: [
      "Reduced or non-functional.",
      "Evidence of evolutionary history.",
      "Examples include the human appendix."
    ],
    explanation: "Vestigial organs like the human appendix or whale pelvic bones reveal evolutionary ancestry. They suggest descent from ancestors that did use these structures.",
    learnMoreLink: { text: "Read more about Vestigiality", url: "https://en.wikipedia.org/wiki/Vestigiality" },
    difficulty: "easy"
  },
  {
    text: "Allopatric speciation occurs when:",
    options: ["A) Populations are geographically separated", "B) A mutation creates a new species in one generation", "C) Two species hybridize", "D) Populations interbreed freely"],
    correct: 0,
    hints: [
      "'Allo' means 'other'.",
      "Geographic barriers.",
      "Different selective pressures."
    ],
    explanation: "Mountain ranges, rivers, or islands can split populations, leading to divergent evolution and new species. Galápagos finches are a classic example.",
    learnMoreLink: { text: "Read more about Allopatric speciation", url: "https://en.wikipedia.org/wiki/Allopatric_speciation" },
    difficulty: "easy"
  },
  {
    text: "Bat wings and insect wings are:",
    options: ["A) Homologous", "B) Analogous", "C) Vestigial", "D) Identical"],
    correct: 1,
    hints: [
      "Same function, different structure.",
      "They evolved independently.",
      "Convergent evolution."
    ],
    explanation: "Analogous structures perform similar functions but evolved separately, like bat and insect wings. They demonstrate convergent evolution.",
    learnMoreLink: { text: "Read more about Convergent evolution", url: "https://en.wikipedia.org/wiki/Convergent_evolution" },
    difficulty: "easy"
  },
  {
    text: "Co-evolution between flowers and pollinators is shown by:",
    options: ["A) Long-tongued moths and orchids with deep nectar tubes", "B) Tigers and zebras", "C) Sharks and dolphins", "D) Mushrooms and trees"],
    correct: 0,
    hints: [
      "They evolved matching traits.",
      "Each shaped the other.",
      "Darwin predicted such a moth."
    ],
    explanation: "Darwin predicted a long-tongued moth must exist to pollinate Madagascar's deep orchids — and one was found decades later. This is reciprocal evolutionary change.",
    learnMoreLink: { text: "Read more about Coevolution", url: "https://en.wikipedia.org/wiki/Coevolution" },
    difficulty: "easy"
  },
  {
    text: "What is the K-T mass extinction best known for?",
    options: ["A) Dinosaur extinction 66 million years ago", "B) End of trilobites", "C) Ice age megafauna loss", "D) Recent species loss"],
    correct: 0,
    hints: [
      "An asteroid impact is implicated.",
      "Mammals later diversified.",
      "It happened 66 mya."
    ],
    explanation: "The Cretaceous-Paleogene extinction wiped out non-avian dinosaurs and many other species, opening niches that mammals filled. The Chicxulub crater confirms an asteroid trigger.",
    learnMoreLink: { text: "Read more about K-Pg extinction", url: "https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event" },
    difficulty: "easy"
  },
  {
    text: "What is mimicry?",
    options: ["A) Hiding by blending in", "B) One species resembling another for protection", "C) Two species cooperating", "D) Predator-prey behavior"],
    correct: 1,
    hints: [
      "Looking like something else.",
      "Often mimicking dangerous species.",
      "Viceroy butterflies are an example."
    ],
    explanation: "Batesian mimicry sees harmless species evolve warning signals of dangerous ones, like viceroy butterflies imitating toxic monarchs. This deters predators.",
    learnMoreLink: { text: "Read more about Mimicry", url: "https://en.wikipedia.org/wiki/Mimicry" },
    difficulty: "easy"
  },
  {
    text: "Sympatric speciation involves:",
    options: ["A) Geographic separation", "B) Speciation in the same area, often via niche or polyploidy", "C) Cross-continental travel", "D) Hybridization with a different species"],
    correct: 1,
    hints: [
      "'Sym' means 'same'.",
      "No physical barrier needed.",
      "Plants do this often via polyploidy."
    ],
    explanation: "Sympatric speciation occurs without geographic isolation, often via polyploidy in plants or behavioral specialization. Cichlid fish in African lakes show this.",
    learnMoreLink: { text: "Read more about Sympatric speciation", url: "https://en.wikipedia.org/wiki/Sympatric_speciation" },
    difficulty: "medium"
  },
  {
    text: "What does the Hardy-Weinberg principle predict for an idealized non-evolving population?",
    options: ["A) Allele frequencies change each generation", "B) Allele frequencies stay constant", "C) Mutations dominate", "D) Selection drives change"],
    correct: 1,
    hints: [
      "It is a null model.",
      "Five conditions must hold.",
      "p² + 2pq + q² = 1."
    ],
    explanation: "If conditions like no selection, no migration, large population, no mutation, and random mating are met, allele frequencies remain stable. Deviations indicate evolution at work.",
    learnMoreLink: { text: "Read more about Hardy-Weinberg", url: "https://en.wikipedia.org/wiki/Hardy%E2%80%93Weinberg_principle" },
    difficulty: "medium"
  },
  {
    text: "Genetic drift has the largest effect in:",
    options: ["A) Very large populations", "B) Small populations", "C) Migrating populations", "D) Mutating populations"],
    correct: 1,
    hints: [
      "Random sampling matters more when N is small.",
      "Founder effects illustrate this.",
      "Bottlenecks are an example."
    ],
    explanation: "In small populations, chance events significantly shift allele frequencies, sometimes eliminating alleles. Cheetahs show very low genetic diversity from past bottlenecks.",
    learnMoreLink: { text: "Read more about Genetic drift", url: "https://en.wikipedia.org/wiki/Genetic_drift" },
    difficulty: "medium"
  },
  {
    text: "Molecular evidence for evolution includes:",
    options: ["A) Comparing DNA sequences across species", "B) Carbon dating only", "C) Comparing fossils only", "D) Counting species"],
    correct: 0,
    hints: [
      "Closely related species share DNA.",
      "Cytochrome c is an example.",
      "Sequence similarities reveal ancestry."
    ],
    explanation: "DNA, RNA, and protein comparisons consistently show that closely related species share more sequence similarities. Humans and chimps share about 98.8% of DNA.",
    learnMoreLink: { text: "Read more about Molecular evolution", url: "https://en.wikipedia.org/wiki/Molecular_evolution" },
    difficulty: "medium"
  },
  {
    text: "Industrial melanism in peppered moths is an example of:",
    options: ["A) Genetic drift", "B) Directional selection", "C) Stabilizing selection", "D) Disruptive selection"],
    correct: 1,
    hints: [
      "Pollution favored darker moths.",
      "Distribution shifts in one direction.",
      "Lighter forms returned with cleaner air."
    ],
    explanation: "Soot darkened tree bark, favoring dark moths over light. As pollution dropped, light moths recovered — a classic case of directional selection both ways.",
    learnMoreLink: { text: "Read more about Peppered moth evolution", url: "https://en.wikipedia.org/wiki/Peppered_moth_evolution" },
    difficulty: "medium"
  },
  {
    text: "Which is NOT a condition of Hardy-Weinberg equilibrium?",
    options: ["A) Random mating", "B) No natural selection", "C) Frequent mutations", "D) No migration"],
    correct: 2,
    hints: [
      "Five conditions must hold.",
      "Mutation introduces new alleles.",
      "Equilibrium needs no mutation."
    ],
    explanation: "Hardy-Weinberg requires: no mutation, no selection, no migration, random mating, and large population size. Real populations rarely meet all five.",
    learnMoreLink: { text: "Read more about Hardy-Weinberg principle", url: "https://en.wikipedia.org/wiki/Hardy%E2%80%93Weinberg_principle" },
    difficulty: "medium"
  },
  {
    text: "Sexual selection favors traits that:",
    options: ["A) Improve survival only", "B) Increase mating success even if costly to survival", "C) Decrease reproduction", "D) Are random"],
    correct: 1,
    hints: [
      "Peacock tails are an example.",
      "Often elaborate ornaments.",
      "Mate choice drives them."
    ],
    explanation: "Showy peacock tails attract mates despite predation risks. Sexual selection can produce traits that seem disadvantageous for survival.",
    learnMoreLink: { text: "Read more about Sexual selection", url: "https://en.wikipedia.org/wiki/Sexual_selection" },
    difficulty: "medium"
  },
  {
    text: "If 1% of a population has a recessive disorder, what fraction are carriers (Hardy-Weinberg)?",
    options: ["A) 0.01", "B) 0.18", "C) 0.5", "D) 0.99"],
    correct: 1,
    hints: [
      "q² = 0.01, so q = 0.1.",
      "p = 0.9.",
      "Carriers are 2pq."
    ],
    explanation: "q² = 0.01 → q = 0.1, p = 0.9. Carriers (2pq) = 2 × 0.9 × 0.1 = 0.18 (18%). This shows recessive carriers far outnumber affected individuals.",
    learnMoreLink: { text: "Read more about Hardy-Weinberg principle", url: "https://en.wikipedia.org/wiki/Hardy%E2%80%93Weinberg_principle" },
    difficulty: "hard"
  },
  {
    text: "Convergent evolution best explains why dolphins and sharks share which trait?",
    options: ["A) Streamlined body shape", "B) Common ancestor", "C) DNA sequence", "D) Skeleton type"],
    correct: 0,
    hints: [
      "Both live in water.",
      "Selection pressures are similar.",
      "Independent solutions to swimming."
    ],
    explanation: "Despite different ancestries (mammal vs fish), aquatic life selected for streamlined bodies in both. This is convergent evolution producing analogous traits.",
    learnMoreLink: { text: "Read more about Convergent evolution", url: "https://en.wikipedia.org/wiki/Convergent_evolution" },
    difficulty: "medium"
  },
  {
    text: "How does kin selection explain altruistic behavior in social insects?",
    options: ["A) Workers reproduce themselves", "B) Helping relatives propagates shared genes", "C) Altruism reduces fitness", "D) Workers are unrelated"],
    correct: 1,
    hints: [
      "Inclusive fitness.",
      "Hamilton's rule applies.",
      "Sister bees share many genes."
    ],
    explanation: "Sterile workers help their queen because rearing siblings spreads genes they share. In haplodiploid bees, sisters share 75% of genes, favoring kin altruism.",
    learnMoreLink: { text: "Read more about Kin selection", url: "https://en.wikipedia.org/wiki/Kin_selection" },
    difficulty: "hard"
  },
  {
    text: "Why did the 'Cambrian explosion' matter to evolution?",
    options: ["A) Mass extinction occurred", "B) Most major animal phyla rapidly appeared", "C) Plants colonized land", "D) Dinosaurs dominated"],
    correct: 1,
    hints: [
      "It happened about 540 mya.",
      "Body plan diversification.",
      "Phyla we still see today appeared."
    ],
    explanation: "Roughly 540 million years ago, most major animal body plans appeared rapidly, possibly driven by rising oxygen and predator-prey arms races. The Burgess Shale records this.",
    learnMoreLink: { text: "Read more about Cambrian explosion", url: "https://en.wikipedia.org/wiki/Cambrian_explosion" },
    difficulty: "medium"
  },
  {
    text: "Producers in an ecosystem are typically:",
    options: ["A) Carnivores", "B) Plants and other photosynthesizers", "C) Decomposers", "D) Top predators"],
    correct: 1,
    hints: [
      "They make their own food.",
      "Base of the food chain.",
      "Capture solar energy."
    ],
    explanation: "Producers convert sunlight into chemical energy via photosynthesis, supporting all other trophic levels. They form the base of nearly every ecosystem.",
    learnMoreLink: { text: "Read more about Autotroph", url: "https://en.wikipedia.org/wiki/Autotroph" },
    difficulty: "beginner"
  },
  {
    text: "An animal that eats only plants is a:",
    options: ["A) Carnivore", "B) Herbivore", "C) Omnivore", "D) Detritivore"],
    correct: 1,
    hints: [
      "Plant-eater.",
      "Cows are an example.",
      "Primary consumer."
    ],
    explanation: "Herbivores like cows and rabbits eat producers and convert plant matter into animal biomass. They are primary consumers in food chains.",
    learnMoreLink: { text: "Read more about Herbivore", url: "https://en.wikipedia.org/wiki/Herbivore" },
    difficulty: "beginner"
  },
  {
    text: "Decomposers include:",
    options: ["A) Lions", "B) Fungi and bacteria", "C) Sharks", "D) Eagles"],
    correct: 1,
    hints: [
      "They break down dead matter.",
      "Recycle nutrients.",
      "Often microscopic."
    ],
    explanation: "Decomposers recycle nutrients from dead organisms back into the ecosystem. Without them, dead matter would accumulate and nutrient cycles would halt.",
    learnMoreLink: { text: "Read more about Decomposer", url: "https://en.wikipedia.org/wiki/Decomposer" },
    difficulty: "beginner"
  },
  {
    text: "Carrying capacity refers to:",
    options: ["A) Maximum population an environment can sustain", "B) Average lifespan", "C) Birth rate", "D) Migration speed"],
    correct: 0,
    hints: [
      "Symbol K.",
      "Limited by resources.",
      "Population stops growing here."
    ],
    explanation: "Carrying capacity is the population size the environment can support indefinitely. Exceeding K leads to crashes, as seen with deer populations on islands.",
    learnMoreLink: { text: "Read more about Carrying capacity", url: "https://en.wikipedia.org/wiki/Carrying_capacity" },
    difficulty: "easy"
  },
  {
    text: "A tapeworm in a human's intestine is an example of:",
    options: ["A) Mutualism", "B) Parasitism", "C) Commensalism", "D) Competition"],
    correct: 1,
    hints: [
      "One benefits, one is harmed.",
      "Steals nutrients.",
      "Inside the host."
    ],
    explanation: "Tapeworms benefit by absorbing nutrients while harming the host. Parasites typically don't kill hosts quickly, ensuring continued exploitation.",
    learnMoreLink: { text: "Read more about Parasitism", url: "https://en.wikipedia.org/wiki/Parasitism" },
    difficulty: "easy"
  },
  {
    text: "Primary succession occurs on:",
    options: ["A) Recently logged forests", "B) Bare rock or new lava flows", "C) Abandoned fields", "D) Burned forests"],
    correct: 1,
    hints: [
      "No soil to start.",
      "Lichens often pioneer.",
      "Long timescale."
    ],
    explanation: "Primary succession starts on lifeless surfaces like new volcanic islands, requiring lichens and mosses to build soil first. It can take centuries.",
    learnMoreLink: { text: "Read more about Primary succession", url: "https://en.wikipedia.org/wiki/Primary_succession" },
    difficulty: "easy"
  },
  {
    text: "Nitrogen-fixing bacteria convert:",
    options: ["A) N2 to ammonia", "B) Ammonia to nitrate", "C) Nitrate to N2", "D) CO2 to glucose"],
    correct: 0,
    hints: [
      "From atmospheric form to plant-usable.",
      "Found in legume root nodules.",
      "Rhizobium is one."
    ],
    explanation: "Atmospheric N2 is unusable to most life until bacteria convert it to ammonia. Legumes like beans host these bacteria, enriching soil — why farmers rotate crops.",
    learnMoreLink: { text: "Read more about Nitrogen fixation", url: "https://en.wikipedia.org/wiki/Nitrogen_fixation" },
    difficulty: "easy"
  },
  {
    text: "An ecosystem includes:",
    options: ["A) Only plants", "B) Living and nonliving components in an area", "C) Only animals", "D) Only abiotic factors"],
    correct: 1,
    hints: [
      "Biotic + abiotic.",
      "Both living and nonliving.",
      "More than just organisms."
    ],
    explanation: "Ecosystems combine biotic factors (organisms) with abiotic ones (water, soil, climate). Conservation considers both to maintain ecosystem function.",
    learnMoreLink: { text: "Read more about Ecosystem", url: "https://en.wikipedia.org/wiki/Ecosystem" },
    difficulty: "easy"
  },
  {
    text: "Which biome is characterized by permafrost?",
    options: ["A) Tundra", "B) Savanna", "C) Tropical forest", "D) Wetland"],
    correct: 0,
    hints: [
      "Cold and treeless.",
      "Far north.",
      "Permanently frozen subsoil."
    ],
    explanation: "Tundra has frozen subsoil that limits root growth, supporting mosses and lichens. Climate change is melting permafrost and releasing methane.",
    learnMoreLink: { text: "Read more about Tundra", url: "https://en.wikipedia.org/wiki/Tundra" },
    difficulty: "easy"
  },
  {
    text: "Logistic population growth:",
    options: ["A) Continues forever", "B) Slows as it approaches carrying capacity", "C) Has no limits", "D) Always crashes"],
    correct: 1,
    hints: [
      "S-shaped curve.",
      "Resources become limiting.",
      "Levels off at K."
    ],
    explanation: "Logistic growth is realistic: starts exponential then plateaus as resources limit growth. Most natural populations follow this pattern.",
    learnMoreLink: { text: "Read more about Logistic function", url: "https://en.wikipedia.org/wiki/Logistic_function" },
    difficulty: "easy"
  },
  {
    text: "If an oak forest contains 10,000 kg of producers, roughly how much energy goes to top predators (fourth trophic level)?",
    options: ["A) 10,000 kg", "B) 1,000 kg", "C) 100 kg", "D) 10 kg"],
    correct: 3,
    hints: [
      "Apply the 10% rule three times.",
      "10,000 → 1,000 → 100 → 10.",
      "Fourth level."
    ],
    explanation: "Energy losses compound: 10,000 → 1,000 → 100 → 10 kg. This is why apex predators are rare and need large hunting territories.",
    learnMoreLink: { text: "Read more about Ecological pyramid", url: "https://en.wikipedia.org/wiki/Ecological_pyramid" },
    difficulty: "medium"
  },
  {
    text: "Eutrophication of lakes is mainly caused by:",
    options: ["A) Excess nutrients (especially nitrogen and phosphorus)", "B) Cold temperatures", "C) Predator loss", "D) Wind"],
    correct: 0,
    hints: [
      "Fertilizer runoff is a culprit.",
      "Algal blooms appear.",
      "Oxygen drops."
    ],
    explanation: "Excess fertilizers cause algal blooms; their decomposition depletes oxygen, killing fish. Dead zones in places like the Gulf of Mexico illustrate this.",
    learnMoreLink: { text: "Read more about Eutrophication", url: "https://en.wikipedia.org/wiki/Eutrophication" },
    difficulty: "medium"
  },
  {
    text: "r-selected species typically:",
    options: ["A) Have few, well-cared-for offspring", "B) Have many offspring with little parental care", "C) Live a long time", "D) Are large-bodied"],
    correct: 1,
    hints: [
      "Insects, weeds.",
      "High reproductive rate.",
      "Boom-and-bust populations."
    ],
    explanation: "r-strategists like mice and dandelions produce many offspring quickly to exploit unstable environments. K-strategists like elephants do the opposite.",
    learnMoreLink: { text: "Read more about r/K selection theory", url: "https://en.wikipedia.org/wiki/R/K_selection_theory" },
    difficulty: "medium"
  },
  {
    text: "A keystone species is one that:",
    options: ["A) Has the largest population", "B) Has a disproportionately large effect on its ecosystem", "C) Is the most attractive", "D) Is the smallest organism"],
    correct: 1,
    hints: [
      "Removing it changes the ecosystem dramatically.",
      "Sea otters are an example.",
      "Like a keystone in an arch."
    ],
    explanation: "Sea otters control sea urchins, protecting kelp forests. Without them, urchins overgraze kelp, devastating the ecosystem.",
    learnMoreLink: { text: "Read more about Keystone species", url: "https://en.wikipedia.org/wiki/Keystone_species" },
    difficulty: "medium"
  },
  {
    text: "Removing wolves from Yellowstone increased elk populations and damaged riparian areas. This shows:",
    options: ["A) Trophic cascade", "B) Mutualism", "C) Genetic drift", "D) Allopatric speciation"],
    correct: 0,
    hints: [
      "Effects ripple down food chains.",
      "Top-down control.",
      "Reintroduction reversed it."
    ],
    explanation: "Loss of wolves let elk overgraze willows, eroding stream banks. Reintroducing wolves in 1995 restored vegetation — a famous trophic cascade.",
    learnMoreLink: { text: "Read more about Trophic cascade", url: "https://en.wikipedia.org/wiki/Trophic_cascade" },
    difficulty: "medium"
  },
  {
    text: "Which describes the competitive exclusion principle?",
    options: ["A) Two species can coexist on identical niches forever", "B) Two species competing for the exact same resources cannot coexist long-term", "C) Mutualists exclude predators", "D) Species split when geographically apart"],
    correct: 1,
    hints: [
      "Gause's principle.",
      "Identical niches conflict.",
      "One outcompetes the other."
    ],
    explanation: "When species compete for the same limited resources, one prevails or they evolve to specialize on different niches (resource partitioning). This drives diversification.",
    learnMoreLink: { text: "Read more about Competitive exclusion principle", url: "https://en.wikipedia.org/wiki/Competitive_exclusion_principle" },
    difficulty: "medium"
  },
  {
    text: "If atmospheric CO2 doubles, ocean acidification primarily harms:",
    options: ["A) Mangrove trees", "B) Coral reefs and shelled organisms", "C) Open-water bacteria", "D) Sand dunes"],
    correct: 1,
    hints: [
      "Lower pH dissolves carbonate.",
      "Affects calcifiers.",
      "Coral bleaching ties in."
    ],
    explanation: "Dissolved CO2 forms carbonic acid, lowering pH and dissolving calcium carbonate skeletons of corals, mollusks, and plankton. This threatens entire marine food webs.",
    learnMoreLink: { text: "Read more about Ocean acidification", url: "https://en.wikipedia.org/wiki/Ocean_acidification" },
    difficulty: "hard"
  },
  {
    text: "Why are whales classified as mammals despite living in the ocean?",
    options: ["A) They have scales", "B) They breathe water", "C) They have hair, breathe air, and nurse young", "D) They lay eggs"],
    correct: 2,
    hints: [
      "Look at mammalian traits.",
      "They're warm-blooded.",
      "Babies drink milk."
    ],
    explanation: "Whales evolved from land mammals and retain hair (briefly in fetuses), lungs, and mammary glands. Vestigial pelvic bones reveal their terrestrial ancestry.",
    learnMoreLink: { text: "Read more about Cetacea", url: "https://en.wikipedia.org/wiki/Cetacea" },
    difficulty: "medium"
  },
  {
    text: "Why are fungi placed closer to animals than plants in modern phylogenies?",
    options: ["A) They photosynthesize", "B) Molecular and biochemical evidence (chitin, cell biology)", "C) They have leaves", "D) They use sunlight"],
    correct: 1,
    hints: [
      "Both have chitin or chitin-like structures.",
      "Genetic similarities.",
      "Heterotrophic, like animals."
    ],
    explanation: "Fungi share heterotrophy with animals, both have chitin (in fungal walls and arthropod exoskeletons), and DNA confirms a closer relationship to animals than plants.",
    learnMoreLink: { text: "Read more about Opisthokont", url: "https://en.wikipedia.org/wiki/Opisthokont" },
    difficulty: "hard"
  },
  {
    text: "If two species share 99% DNA similarity vs another pair sharing 70%, which is true?",
    options: ["A) The 70% pair shares a more recent ancestor", "B) The 99% pair shares a more recent ancestor", "C) DNA can't show ancestry", "D) Both pairs have the same ancestor"],
    correct: 1,
    hints: [
      "More similarity, more recent split.",
      "Greater divergence means more time apart.",
      "Molecular clock concept."
    ],
    explanation: "Greater DNA similarity reflects fewer accumulated mutations since divergence. This molecular clock approach dates evolutionary splits and builds phylogenies.",
    learnMoreLink: { text: "Read more about Molecular clock", url: "https://en.wikipedia.org/wiki/Molecular_clock" },
    difficulty: "hard"
  },
  {
    text: "Why don't antibiotics work against viruses like the flu?",
    options: ["A) Viruses are too large", "B) Antibiotics target bacterial structures viruses lack", "C) Viruses are immune", "D) Antibiotics only kill fungi"],
    correct: 1,
    hints: [
      "Viruses lack cell walls and bacterial ribosomes.",
      "They use host machinery.",
      "Antibiotics target bacteria-specific features."
    ],
    explanation: "Antibiotics target bacterial cell walls or 70S ribosomes, which viruses don't have. Antiviral drugs instead target viral enzymes like reverse transcriptase or proteases.",
    learnMoreLink: { text: "Read more about Antibiotic", url: "https://en.wikipedia.org/wiki/Antibiotic" },
    difficulty: "medium"
  },
  {
    text: "Why are prions especially difficult to destroy?",
    options: ["A) They are large viruses", "B) They are misfolded proteins resistant to heat and standard sterilization", "C) They have thick walls", "D) They contain lots of DNA"],
    correct: 1,
    hints: [
      "Not nucleic-acid-based.",
      "Survive autoclaving.",
      "Cause mad cow disease."
    ],
    explanation: "Prions are infectious misfolded proteins lacking nucleic acids and resistant to heat, radiation, and disinfectants. They cause Creutzfeldt-Jakob and mad cow disease.",
    learnMoreLink: { text: "Read more about Prion", url: "https://en.wikipedia.org/wiki/Prion" },
    difficulty: "hard"
  },
  {
    text: "In a population in Hardy-Weinberg equilibrium, the recessive allele frequency q = 0.3. What is the frequency of heterozygous individuals?",
    options: ["A) 0.09", "B) 0.21", "C) 0.42", "D) 0.49"],
    correct: 2,
    hints: [
      "Use the Hardy-Weinberg equation p² + 2pq + q² = 1.",
      "First find p, then calculate 2pq.",
      "p = 1 - 0.3 = 0.7, so 2pq = 2 × 0.7 × 0.3."
    ],
    explanation: "If q = 0.3, then p = 0.7. The heterozygote frequency is 2pq = 2(0.7)(0.3) = 0.42. This calculation is critical for population geneticists tracking carrier frequencies of recessive disorders like cystic fibrosis.",
    learnMoreLink: { text: "Read more about Hardy-Weinberg principle", url: "https://en.wikipedia.org/wiki/Hardy%E2%80%93Weinberg_principle" },
    difficulty: "hard"
  },
  {
    text: "In a dihybrid cross (RrYy × RrYy), what is the probability an F2 offspring shows the recessive phenotype for BOTH traits?",
    options: ["A) 9/16", "B) 3/16", "C) 1/16", "D) 1/4"],
    correct: 2,
    hints: [
      "Use the 9:3:3:1 phenotypic ratio.",
      "The double recessive is the smallest class.",
      "Multiply individual probabilities: (1/4) × (1/4)."
    ],
    explanation: "The probability of being homozygous recessive for one trait is 1/4, so for both independent traits it is 1/16. Mendel's law of independent assortment underpins this and is essential in plant and animal breeding programs.",
    learnMoreLink: { text: "Read more about Dihybrid cross", url: "https://en.wikipedia.org/wiki/Dihybrid_cross" },
    difficulty: "hard"
  },
  {
    text: "A carrier mother (Xᴴ Xʰ) for haemophilia has children with an unaffected father (Xᴴ Y). What is the probability any given son will be affected?",
    options: ["A) 1/4", "B) 1/2", "C) 1", "D) 1/8"],
    correct: 1,
    hints: [
      "Sons receive their X chromosome only from the mother.",
      "The mother has one normal and one haemophilia X chromosome.",
      "Each son has a 50% chance of inheriting either X."
    ],
    explanation: "Sons inherit one X from the mother, who has equal chances of passing either allele, giving each son a 1/2 probability of being affected. This X-linked recessive pattern explains why haemophilia appeared in male descendants of European royal families.",
    learnMoreLink: { text: "Read more about Haemophilia", url: "https://en.wikipedia.org/wiki/Haemophilia" },
    difficulty: "hard"
  },
  {
    text: "An mRNA has a single nucleotide inserted after the start codon. What is the most likely consequence?",
    options: ["A) Only one amino acid changes", "B) The ribosome corrects the error automatically", "C) A frameshift alters all downstream codons, often producing a premature stop", "D) The protein becomes twice as long"],
    correct: 2,
    hints: [
      "Codons are read in non-overlapping triplets.",
      "An insertion shifts the reading frame.",
      "Every subsequent codon is misread and a premature stop codon may appear."
    ],
    explanation: "Inserting one nucleotide shifts the reading frame so every subsequent codon encodes a different amino acid and may include a premature stop. Such frameshift mutations cause severe diseases like Tay-Sachs and certain forms of cystic fibrosis.",
    learnMoreLink: { text: "Read more about Frameshift mutation", url: "https://en.wikipedia.org/wiki/Frameshift_mutation" },
    difficulty: "hard"
  },
  {
    text: "Two genes are 20 map units apart on the same chromosome. What recombination frequency is expected in a test cross?",
    options: ["A) 2%", "B) 20%", "C) 40%", "D) 50%"],
    correct: 1,
    hints: [
      "One centimorgan equals 1% recombination frequency.",
      "Recombination frequency reflects crossing-over during meiosis I.",
      "Distance in map units equals the recombination percentage."
    ],
    explanation: "By definition, 20 map units corresponds to 20% recombination frequency (1 cM = 1% recombinants). This relationship enabled Sturtevant to construct the first genetic linkage maps.",
    learnMoreLink: { text: "Read more about Genetic linkage", url: "https://en.wikipedia.org/wiki/Genetic_linkage" },
    difficulty: "hard"
  },
  {
    text: "How does the Na⁺/K⁺ pump help maintain the resting membrane potential of a neuron?",
    options: ["A) It pumps 3 Na⁺ in and 2 K⁺ out per ATP, depolarizing the cell", "B) It pumps 3 Na⁺ out and 2 K⁺ in per ATP, maintaining a negative interior", "C) It pumps equal ions in opposite directions with no net effect", "D) It pumps 2 Na⁺ out and 3 K⁺ in per ATP"],
    correct: 1,
    hints: [
      "The pump is electrogenic — it moves unequal numbers of ions.",
      "More positive charges leave than enter.",
      "It exports 3 sodium ions for every 2 potassium ions imported."
    ],
    explanation: "Each ATP-driven cycle exports 3 Na⁺ and imports 2 K⁺, generating a net outward flow of positive charge that contributes to the ~−70 mV resting potential. This gradient drives action potentials and is targeted by cardiac glycosides like digoxin.",
    learnMoreLink: { text: "Read more about Na+/K+-ATPase", url: "https://en.wikipedia.org/wiki/Na%2B/K%2B-ATPase" },
    difficulty: "hard"
  },
  {
    text: "On a phylogenetic tree, taxa A and B share a node 5 mya; that node shares a deeper node with taxon C at 12 mya. What is the MRCA of A and C?",
    options: ["A) The node at 5 mya", "B) The node at 12 mya", "C) Taxon B itself", "D) Cannot be determined"],
    correct: 1,
    hints: [
      "Trace both lineages backward until they meet.",
      "The MRCA is the most recent point of convergence.",
      "A's lineage passes through the 5 mya node before reaching the 12 mya node."
    ],
    explanation: "Tracing A and C backward, their lineages first converge at the 12-million-year node, making it their MRCA. Identifying MRCAs is essential for inferring divergence times, such as when humans and chimpanzees split.",
    learnMoreLink: { text: "Read more about Most recent common ancestor", url: "https://en.wikipedia.org/wiki/Most_recent_common_ancestor" },
    difficulty: "medium"
  },
  {
    text: "In logistic growth dN/dt = rN(1 - N/K), what happens as N approaches K?",
    options: ["A) Growth rate increases exponentially", "B) Growth rate approaches zero", "C) Growth rate becomes immediately negative", "D) r becomes zero"],
    correct: 1,
    hints: [
      "Examine the term (1 - N/K) as N nears K.",
      "When N = K, that term equals 0.",
      "Multiplying by zero gives zero."
    ],
    explanation: "As N approaches K, (1 - N/K) approaches 0, so dN/dt approaches 0 and population growth levels off into an S-curve. This describes real populations limited by resources, from yeast in culture to deer in a finite habitat.",
    learnMoreLink: { text: "Read more about Logistic function", url: "https://en.wikipedia.org/wiki/Logistic_function" },
    difficulty: "medium"
  },
  {
    text: "An ecosystem has GPP = 10,000 kcal/m²/yr and plant respiration = 4,000 kcal/m²/yr. What is the NPP?",
    options: ["A) 14,000 kcal/m²/yr", "B) 4,000 kcal/m²/yr", "C) 6,000 kcal/m²/yr", "D) 2,500 kcal/m²/yr"],
    correct: 2,
    hints: [
      "NPP = GPP − autotrophic respiration.",
      "Subtract the energy used by the plants themselves.",
      "10,000 minus 4,000."
    ],
    explanation: "NPP = GPP − R = 10,000 − 4,000 = 6,000 kcal/m²/yr. NPP represents the energy available to consumers and is a key metric for global carbon budgets and ecosystem productivity assessments.",
    learnMoreLink: { text: "Read more about Primary production", url: "https://en.wikipedia.org/wiki/Primary_production" },
    difficulty: "hard"
  },
  {
    text: "Which viral cycle is most compatible with long-term host cell survival?",
    options: ["A) The lytic cycle, which slowly releases virions", "B) The lysogenic cycle, where viral DNA integrates and replicates with the host genome", "C) Both cycles kill the host equally fast", "D) Neither allows host survival"],
    correct: 1,
    hints: [
      "One cycle ruptures the cell; the other does not.",
      "In lysogeny the viral genome becomes a prophage.",
      "Integrated viral DNA is replicated passively each time the host divides."
    ],
    explanation: "In the lysogenic cycle, the prophage replicates with the host chromosome without lysis, allowing prolonged host survival. Lambda phage in E. coli and HIV's integrated provirus illustrate this strategy, which complicates antiviral treatment.",
    learnMoreLink: { text: "Read more about Lysogenic cycle", url: "https://en.wikipedia.org/wiki/Lysogenic_cycle" },
    difficulty: "easy"
  },
  {
    text: "Why do Gram-negative bacteria lose the crystal violet stain during Gram staining decolorization?",
    options: ["A) Their thick peptidoglycan traps the dye", "B) They lack a cell wall", "C) Alcohol disrupts their outer membrane, releasing the dye through the thin peptidoglycan layer", "D) They produce enzymes that degrade crystal violet"],
    correct: 2,
    hints: [
      "The decolorizer is ethanol or acetone.",
      "Gram-negatives have an outer lipid membrane and only thin peptidoglycan.",
      "Alcohol dissolves the lipid membrane and the dye washes out."
    ],
    explanation: "Alcohol dissolves the outer membrane of Gram-negatives, and their thin peptidoglycan cannot retain the crystal violet–iodine complex, so the dye washes out and they counterstain pink with safranin. This distinction guides antibiotic selection, since many Gram-negatives resist drugs targeting peptidoglycan.",
    learnMoreLink: { text: "Read more about Gram stain", url: "https://en.wikipedia.org/wiki/Gram_stain" },
    difficulty: "hard"
  },
  {
    text: "Father Iᴬ Iᴮ × mother ii. What is the probability their child has type O blood?",
    options: ["A) 0%", "B) 25%", "C) 50%", "D) 100%"],
    correct: 0,
    hints: [
      "Type O requires genotype ii.",
      "The father has no i allele to pass on.",
      "Every child receives either Iᴬ or Iᴮ from the father."
    ],
    explanation: "The Iᴬ Iᴮ father can only pass Iᴬ or Iᴮ, so no child can inherit ii — the probability of type O is 0%. Children will be type A (Iᴬ i) or type B (Iᴮ i) with equal probability.",
    learnMoreLink: { text: "Read more about ABO blood group system", url: "https://en.wikipedia.org/wiki/ABO_blood_group_system" },
    difficulty: "hard"
  },
  {
    text: "Why do tightly linked genes violate Mendel's law of independent assortment?",
    options: ["A) They are on different chromosomes and segregate randomly", "B) They sit close together on the same chromosome and tend to be inherited together", "C) They undergo crossing-over in every meiosis producing only recombinants", "D) They are never expressed simultaneously"],
    correct: 1,
    hints: [
      "Independent assortment requires genes on different chromosomes or far apart.",
      "Crossing-over rarely separates genes that are very close together.",
      "Linked alleles travel into the same gamete more often than expected by chance."
    ],
    explanation: "Genes close on the same chromosome are usually inherited as a unit because crossing-over between them is rare, producing parental gametes far more often than recombinants. This linkage underpins genetic mapping strategies.",
    learnMoreLink: { text: "Read more about Genetic linkage", url: "https://en.wikipedia.org/wiki/Genetic_linkage" },
    difficulty: "hard"
  },
  {
    text: "During digestion a protease reaches Vmax. What does this mean?",
    options: ["A) Adding more substrate will keep increasing the rate", "B) All active sites are saturated; more substrate will not raise the rate", "C) The enzyme has been denatured", "D) Exceeding Km causes the rate to drop"],
    correct: 1,
    hints: [
      "Vmax is the maximum possible reaction velocity.",
      "It occurs when every enzyme molecule is occupied.",
      "Only adding more enzyme (not substrate) can raise the rate further."
    ],
    explanation: "At Vmax, every active site is occupied, so added substrate has no effect — only more enzyme can increase throughput. This Michaelis-Menten behavior explains diminishing returns with digestive enzyme supplements and governs pharmacokinetics of drugs metabolized by saturable enzymes.",
    learnMoreLink: { text: "Read more about Michaelis-Menten kinetics", url: "https://en.wikipedia.org/wiki/Michaelis%E2%80%93Menten_kinetics" },
    difficulty: "hard"
  },
  {
    text: "How do homologous and analogous structures differ as evolutionary evidence?",
    options: ["A) Both equally indicate common ancestry", "B) Homologous structures indicate common ancestry; analogous ones arise from convergent evolution and do not", "C) Analogous structures are stronger evidence for common ancestry", "D) Neither provides evolutionary evidence"],
    correct: 1,
    hints: [
      "Homology reflects shared developmental and genetic origins.",
      "Analogy reflects similar function evolving independently in separate lineages.",
      "Bat and bird wings share function but differ in underlying bone structure."
    ],
    explanation: "Homologous structures like mammalian forelimb bones share underlying anatomy from a common ancestor, while analogous structures like insect and bird wings evolved independently via convergent evolution. Only homologies provide direct evidence of shared ancestry, a distinction central to phylogenetics.",
    learnMoreLink: { text: "Read more about Convergent evolution", url: "https://en.wikipedia.org/wiki/Convergent_evolution" },
    difficulty: "medium"
  }
];
