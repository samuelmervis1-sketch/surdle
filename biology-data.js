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
    difficulty: "easy"
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
    difficulty: "easy"
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
    difficulty: "easy"
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
    difficulty: "easy"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "medium"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
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
    difficulty: "hard"
  },

  // --- Diagram questions ---
  {
    type: "diagram",
    svgId: "animal-cell",
    text: "Label the 5 numbered parts of this animal cell.",
    correctLabels: ["Cell Membrane", "Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
    parts: ["Cell Membrane", "Nucleus", "Mitochondria", "Ribosome", "Cytoplasm",
            "Golgi Apparatus", "Endoplasmic Reticulum", "Lysosome", "Vacuole",
            "Centriole", "Nucleolus", "Cytoskeleton"],
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
    correctLabels: ["Cell Wall", "Cell Membrane", "Vacuole", "Nucleus", "Chloroplast"],
    parts: ["Cell Wall", "Cell Membrane", "Vacuole", "Nucleus", "Chloroplast",
            "Mitochondria", "Ribosome", "Golgi Apparatus", "Endoplasmic Reticulum",
            "Cytoplasm", "Nucleolus", "Plasmodesma"],
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
    correctLabels: ["Cell Membrane", "Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
    parts: ["Cell Membrane", "Nucleus", "Mitochondria", "Ribosome", "Cytoplasm",
            "Golgi Apparatus", "Endoplasmic Reticulum", "Lysosome", "Vacuole",
            "Centriole", "Nucleolus", "Cytoskeleton"],
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
    correctLabels: ["Cell Wall", "Cell Membrane", "Vacuole", "Nucleus", "Chloroplast"],
    parts: ["Cell Wall", "Cell Membrane", "Vacuole", "Nucleus", "Chloroplast",
            "Mitochondria", "Ribosome", "Golgi Apparatus", "Endoplasmic Reticulum",
            "Cytoplasm", "Nucleolus", "Plasmodesma"],
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
    correctLabels: ["Cell Membrane", "Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
    parts: ["Cell Membrane", "Nucleus", "Mitochondria", "Ribosome", "Cytoplasm",
            "Golgi Apparatus", "Endoplasmic Reticulum", "Lysosome", "Vacuole",
            "Centriole", "Nucleolus", "Cytoskeleton"],
    hints: [
      "The structure marked ① controls what enters and exits the cell via selective permeability. The structure marked ② contains chromatin and a nucleolus.",
      "Organelle ③ produces the majority of ATP in eukaryotes through the electron transport chain and Krebs cycle.",
      "Structure ④ consists of two ribosomal subunits (large and small) and is the site of translation. Structure ⑤ is the aqueous solution containing all the organelles."
    ],
    explanation: "Every animal cell has these five core components working together: the cell membrane controls what enters and exits; the nucleus stores DNA and directs cell activity; mitochondria generate ATP; ribosomes translate mRNA into proteins; and cytoplasm is the aqueous medium where these reactions occur. Together they make the cell the fundamental unit of life.",
    learnMoreLink: { text: "Read more about animal cell structure", url: "https://en.wikipedia.org/wiki/Cell_(biology)" },
    difficulty: "hard"
  },
];
