const WORD_LIST = [
  {
    word: "Abate",
    partOfSpeech: "verb",
    englishMeaning: "Subside or moderate in intensity",
    banglaMeaning: "হ্রাস পাওয়া / প্রশমিত হওয়া",
    synonyms: ["subside", "moderate", "dwindle", "ebbs", "mitigate"],
    antonyms: ["intensify", "amplify", "escalate"],
    exampleSentence: "After hours of relentless downpour, the storm began to abate, allowing rescue teams to deploy.",
    etymology: "Old French 'abattre' (to beat down)"
  },
  {
    word: "Aberrant",
    partOfSpeech: "adjective",
    englishMeaning: "Abnormal or deviating from the usual standard",
    banglaMeaning: "বিপথগামী / অস্বাভাবিক",
    synonyms: ["anomalous", "deviant", "atypical", "errant"],
    antonyms: ["normal", "typical", "standard"],
    exampleSentence: "The scientist noted an aberrant reading in the sensor data that suggested external interference.",
    etymology: "Latin 'aberrare' (to wander away)"
  },
  {
    word: "Abeyance",
    partOfSpeech: "noun",
    englishMeaning: "Temporary suspension or inactivity",
    banglaMeaning: "স্থগিতাবস্থা / সাময়িক মুলতুবি",
    synonyms: ["suspension", "dormancy", "eyance", "latency"],
    antonyms: ["continuation", "resumption", "activity"],
    exampleSentence: "Legal proceedings were held in abeyance pending the outcome of the Supreme Court ruling.",
    etymology: "Old French 'abaiance' (expectation, gaping)"
  },
  {
    word: "Abscond",
    partOfSpeech: "verb",
    englishMeaning: "Depart secretly and hide, especially to avoid prosecution",
    banglaMeaning: "আত্মগোপন করা / চম্পট দেওয়া",
    synonyms: ["flee", "decamp", "bolt", "escape"],
    antonyms: ["remain", "stay", "appear"],
    exampleSentence: "The accountant absconded with company funds shortly before the audit began.",
    etymology: "Latin 'abscondere' (to hide away)"
  },
  {
    word: "Abstemious",
    partOfSpeech: "adjective",
    englishMeaning: "Sparing or moderate in eating and drinking",
    banglaMeaning: "মিতাহারী / সংযমী",
    synonyms: ["temperate", "abstinent", "austere", "frugal"],
    antonyms: ["gluttonous", "self-indulgent", "greedy"],
    exampleSentence: "Despite the lavish banquet, the monk remained abstemious, preferring plain water and crusts of bread.",
    etymology: "Latin 'abstemius' (refraining from wine)"
  },
  {
    word: "Admonish",
    partOfSpeech: "verb",
    englishMeaning: "Warn or reprimand firmly",
    banglaMeaning: "স সতর্ক করা / তিরস্কার করা",
    synonyms: ["reprove", "scold", "reprehend", "chide"],
    antonyms: ["praise", "commend", "applaud"],
    exampleSentence: "The judge admonished the attorney for interrupting the witness during cross-examination.",
    etymology: "Latin 'admonere' (to remind or urge)"
  },
  {
    word: "Adulterate",
    partOfSpeech: "verb",
    englishMeaning: "Make impure by adding inferior substances",
    banglaMeaning: "ভেজাল মেশানো",
    synonyms: ["contaminate", "debase", "taint", "dilute"],
    antonyms: ["purify", "refine", "cleanse"],
    exampleSentence: "Unscrupulous suppliers were found to adulterate olive oil with cheaper seed oils.",
    etymology: "Latin 'adulterare' (to falsify or corrupt)"
  },
  {
    word: "Aesthetic",
    partOfSpeech: "adjective",
    englishMeaning: "Artistic or concerned with beauty",
    banglaMeaning: "সৌন্দর্যবিষয়ক / নন্দনাতাত্ত্বিক",
    synonyms: ["artistic", "tasteful", "discriminating"],
    antonyms: ["unsightly", "unattractive", "hideous"],
    exampleSentence: "The building's design balances functional utility with striking aesthetic appeal.",
    etymology: "Greek 'aisthetikos' (perceptive of feeling)"
  },
  {
    word: "Aggregate",
    partOfSpeech: "noun / verb",
    englishMeaning: "Gather into a total mass or whole",
    banglaMeaning: "সমষ্টিগত / একত্রিত করা",
    synonyms: ["accumulate", "amass", "combine", "cluster"],
    antonyms: ["individual", "isolate", "disperse"],
    exampleSentence: "The aggregate economic output of the nation reached an all-time high this quarter.",
    etymology: "Latin 'aggregare' (to add to a flock)"
  },
  {
    word: "Alacrity",
    partOfSpeech: "noun",
    englishMeaning: "Cheerful promptness and eagerness",
    banglaMeaning: "উৎসাহ ও চঞ্চলতা",
    synonyms: ["eagerness", "readiness", "promptness", "celerity"],
    antonyms: ["apathy", "sluggishness", "reluctance"],
    exampleSentence: "She accepted the promotion offer with enthusiastic alacrity.",
    etymology: "Latin 'alacritas' (lively, eager)"
  },
  {
    word: "Alleviate",
    partOfSpeech: "verb",
    englishMeaning: "Relieve, lessen, or make more bearable",
    banglaMeaning: "উপশম করা / কমানো",
    synonyms: ["relieve", "assuage", "mitigate", "palliate"],
    antonyms: ["aggravate", "worsen", "exacerbate"],
    exampleSentence: "The doctor prescribed analgesics to alleviate the patient's severe joint pain.",
    etymology: "Latin 'alleviare' (to lighten)"
  },
  {
    word: "Amalgamate",
    partOfSpeech: "verb",
    englishMeaning: "Combine or unite into one body",
    banglaMeaning: "একত্রিত করা / সংমিশ্রণ করা",
    synonyms: ["merge", "fuse", "integrate", "consolidate"],
    antonyms: ["separate", "divide", "fragment"],
    exampleSentence: "The two technology startups decided to amalgamate their operations to compete globally.",
    etymology: "Medieval Latin 'amalgamare' (to mix with mercury)"
  },
  {
    word: "Ambiguous",
    partOfSpeech: "adjective",
    englishMeaning: "Unclear or doubtful in meaning",
    banglaMeaning: "দ্ব্যর্থবোধক / অস্পষ্ট",
    synonyms: ["equivocal", "vague", "obscure", "nebulous"],
    antonyms: ["clear", "explicit", "unambiguous"],
    exampleSentence: "The contract language was so ambiguous that both parties interpreted it differently.",
    etymology: "Latin 'ambiguus' (shifting, uncertain)"
  },
  {
    word: "Ambivalence",
    partOfSpeech: "noun",
    englishMeaning: "State of having contradictory emotional attitudes",
    banglaMeaning: "দ্বিধা / পরস্পরবিরোধী অনুভূতি",
    synonyms: ["indecision", "equivocation", "hesitation"],
    antonyms: ["certainty", "decisiveness", "conviction"],
    exampleSentence: "His ambivalence toward moving abroad made it difficult to commit to the relocation.",
    etymology: "Latin 'ambi-' (both) + 'valentia' (strength)"
  },
  {
    word: "Ameliorate",
    partOfSpeech: "verb",
    englishMeaning: "Improve or make better",
    banglaMeaning: "উন্নতি সাধন করা",
    synonyms: ["improve", "enhance", "better", "amend"],
    antonyms: ["worsen", "deteriorate", "impair"],
    exampleSentence: "New housing programs were designed to ameliorate living conditions in urban slums.",
    etymology: "Latin 'melior' (better)"
  },
  {
    word: "Anachronism",
    partOfSpeech: "noun",
    englishMeaning: "Something misplaced in historical time",
    banglaMeaning: "কালবৈষম্য / সময়ের সঙ্গে বেমানান বস্তু",
    synonyms: ["misplacement", "incongruity", "chronological error"],
    antonyms: ["contemporaneity", "synchronicity"],
    exampleSentence: "Seeing a character check a smartphone in a medieval movie was a glaring anachronism.",
    etymology: "Greek 'ana-' (against) + 'chronos' (time)"
  },
  {
    word: "Analogous",
    partOfSpeech: "adjective",
    englishMeaning: "Comparable or similar in certain aspects",
    banglaMeaning: "অনুরূপ / সদৃশ",
    synonyms: ["comparable", "similar", "parallel", "equivalent"],
    antonyms: ["dissimilar", "unrelated", "divergent"],
    exampleSentence: "The brain's neural network is often described as analogous to a complex computer system.",
    etymology: "Greek 'analogos' (proportionate)"
  },
  {
    word: "Anarchy",
    partOfSpeech: "noun",
    englishMeaning: "Absence of governing body; state of disorder",
    banglaMeaning: "অরাজকতা / বিশৃঙ্খলা",
    synonyms: ["lawlessness", "disorder", "chaos", "turmoil"],
    antonyms: ["order", "government", "rule of law"],
    exampleSentence: "Following the overthrow of the government, the country collapsed into civil anarchy.",
    etymology: "Greek 'anarchia' (without a leader)"
  },
  {
    word: "Anomalous",
    partOfSpeech: "adjective",
    englishMeaning: "Abnormal, irregular, or unexpected",
    banglaMeaning: "ব্যতিক্রমী / নিয়মবহির্ভূত",
    synonyms: ["abnormal", "atypical", "irregular", "eccentric"],
    antonyms: ["normal", "regular", "conforming"],
    exampleSentence: "An anomalous warm front caused snow to melt rapidly in early February.",
    etymology: "Greek 'anomalos' (uneven, irregular)"
  },
  {
    word: "Antipathy",
    partOfSpeech: "noun",
    englishMeaning: "Deep-seated dislike or aversion",
    banglaMeaning: "বিদ্বেষ / তীব্র অনিচ্ছা",
    synonyms: ["aversion", "hostility", "animosity", "antagonism"],
    antonyms: ["sympathy", "affinity", "fondness"],
    exampleSentence: "Her deep antipathy towards dishonest politicians motivated her to join local advocacy groups.",
    etymology: "Greek 'anti-' (against) + 'pathos' (feeling)"
  },
  {
    word: "Apathy",
    partOfSpeech: "noun",
    englishMeaning: "Lack of caring, emotion, or interest",
    banglaMeaning: "উদাসীন্য / অনিচ্ছা",
    synonyms: ["indifference", "unconcern", "passivity", "lethargy"],
    antonyms: ["enthusiasm", "passion", "concern"],
    exampleSentence: "Voter apathy resulted in a record-low turnout for the municipal election.",
    etymology: "Greek 'a-' (without) + 'pathos' (feeling)"
  },
  {
    word: "Appease",
    partOfSpeech: "verb",
    englishMeaning: "Pacify, soothe, or yield to demands",
    banglaMeaning: "শান্ত করা / সন্তুষ্ট করা",
    synonyms: ["pacify", "placate", "mollify", "conciliate"],
    antonyms: ["provoke", "incite", "inflame"],
    exampleSentence: "The company offered refunds in an effort to appease angry customers.",
    etymology: "Old French 'apaisier' (to bring to peace)"
  },
  {
    word: "Apprise",
    partOfSpeech: "verb",
    englishMeaning: "Inform or give notice to",
    banglaMeaning: "বিজ্ঞাপিত করা / অবগত করা",
    synonyms: ["inform", "notify", "advise", "brief"],
    antonyms: ["conceal", "hide", "mislead"],
    exampleSentence: "The diplomatic envoy arrived early to apprise the president of emerging negotiations.",
    etymology: "French 'appris' (learned, taught)"
  },
  {
    word: "Approbation",
    partOfSpeech: "noun",
    englishMeaning: "Official approval or praise",
    banglaMeaning: "অনুমোদন / প্রশংসা",
    synonyms: ["approval", "commendation", "sanction", "praise"],
    antonyms: ["disapproval", "censure", "condemnation"],
    exampleSentence: "The young composer sought the approbation of his esteemed mentor.",
    etymology: "Latin 'approbare' (to approve)"
  },
  {
    word: "Appropriate",
    partOfSpeech: "verb",
    englishMeaning: "Take possession of for one's own use",
    banglaMeaning: "নিজের দখলে নেওয়া / বরাদ্দ করা",
    synonyms: ["expropriate", "seize", "commandeer", "annex"],
    antonyms: ["relinquish", "surrender", "restore"],
    exampleSentence: "The government decided to appropriate private land for the construction of the highway.",
    etymology: "Latin 'appropriare' (to make one's own)"
  },
  {
    word: "Arduous",
    partOfSpeech: "adjective",
    englishMeaning: "Hard, strenuous, requiring great effort",
    banglaMeaning: "কঠিন / পরিশ্রমসাধ্য",
    synonyms: ["strenuous", "taxing", "exacting", "laborious"],
    antonyms: ["easy", "effortless", "painless"],
    exampleSentence: "Climbing Mount Everest proved to be an arduous expedition that tested their endurance.",
    etymology: "Latin 'arduus' (steep, difficult)"
  },
  {
    word: "Artless",
    partOfSpeech: "adjective",
    englishMeaning: "Without guile; open, honest, and simple",
    banglaMeaning: "কপটতাহীন / সরল",
    synonyms: ["guileless", "ingenuous", "candid", "naive"],
    antonyms: ["artful", "cunning", "deceitful"],
    exampleSentence: "Her artless sincerity completely disarmed the skeptical interviewer.",
    etymology: "English 'art' (craft, trickery) + '-less'"
  },
  {
    word: "Ascetic",
    partOfSpeech: "adjective / noun",
    englishMeaning: "Practicing severe self-denial; austere",
    banglaMeaning: "সন্ন্যাসী / আত্মসংযমী",
    synonyms: ["austere", "abstemious", "hermitic", "puritanical"],
    antonyms: ["hedonistic", "sybaritic", "luxurious"],
    exampleSentence: "Living an ascetic lifestyle in the desert, the monk renounced all earthly possessions.",
    etymology: "Greek 'asketes' (monk, practitioner)"
  },
  {
    word: "Assiduous",
    partOfSpeech: "adjective",
    englishMeaning: "Diligent, persistent, and hardworking",
    banglaMeaning: "অধ্যাবসায়ী / পরিশ্রমী",
    synonyms: ["diligent", "sedulous", "painstaking", "industrious"],
    antonyms: ["lazy", "negligent", "indolent"],
    exampleSentence: "Through assiduous research, the scholars uncovered lost historical archives.",
    etymology: "Latin 'assiduus' (attentive, unceasing)"
  },
  {
    word: "Assuage",
    partOfSpeech: "verb",
    englishMeaning: "Ease or lessen pain, hunger, or distress",
    banglaMeaning: "উপশম করা / প্রশমিত করা",
    synonyms: ["soothe", "alleviate", "mitigate", "appease"],
    antonyms: ["exacerbate", "intensify", "aggravate"],
    exampleSentence: "The CEO attempted to assuage investor fears by presenting a clear restructuring plan.",
    etymology: "Latin 'ad-' (to) + 'suavis' (sweet)"
  },
  {
    word: "Austere",
    partOfSpeech: "adjective",
    englishMeaning: "Severely simple, unornamented, or strict",
    banglaMeaning: "কঠোর / অনালঙ্কৃত",
    synonyms: ["stern", "spartan", "unadorned", "ascetic"],
    antonyms: ["ornate", "luxurious", "indulgent"],
    exampleSentence: "The decor of the monastery was austere, featuring plain wooden benches and unpainted walls.",
    etymology: "Greek 'austeros' (harsh, bitter)"
  },
  {
    word: "Autonomous",
    partOfSpeech: "adjective",
    englishMeaning: "Self-governing; independent",
    banglaMeaning: "স্বায়ত্তশাসিত / স্বাধীন",
    synonyms: ["independent", "self-ruling", "sovereign"],
    antonyms: ["dependent", "subordinate", "subject"],
    exampleSentence: "The region demanded an autonomous status to manage its internal governance.",
    etymology: "Greek 'auto-' (self) + 'nomos' (law)"
  },
  {
    word: "Banal",
    partOfSpeech: "adjective",
    englishMeaning: "Hackneyed, trite, lacking originality",
    banglaMeaning: "তুচ্ছ / তুচ্ছ-সাধারণ",
    synonyms: ["trite", "hackneyed", "platitudinous", "cliché"],
    antonyms: ["original", "fresh", "novel"],
    exampleSentence: "The movie's plot was so banal that audiences could predict every dialogue line.",
    etymology: "French 'banal' (common to all)"
  },
  {
    word: "Belie",
    partOfSpeech: "verb",
    englishMeaning: "Contradict or give a false impression of",
    banglaMeaning: "মিথ্যা বর্ণনা দেওয়া / বৈপরীত্য দেখানো",
    synonyms: ["contradict", "misrepresent", "disprove", "mask"],
    antonyms: ["reveal", "manifest", "confirm"],
    exampleSentence: "His calm appearance belied the intense anxiety he felt inside.",
    etymology: "Old English 'beleogan' (to deceive by lying)"
  },
  {
    word: "Bolster",
    partOfSpeech: "verb",
    englishMeaning: "Support, reinforce, or strengthen",
    banglaMeaning: "সমর্থন দেওয়া / শক্তিশালী করা",
    synonyms: ["reinforce", "buttress", "fortify", "underpin"],
    antonyms: ["undermine", "weaken", "subvert"],
    exampleSentence: "The team hoped to bolster their defensive line by signing two veteran players.",
    etymology: "Old English 'bolster' (cushion, support)"
  },
  {
    word: "Bombastic",
    partOfSpeech: "adjective",
    englishMeaning: "Pompous or high-sounding with little meaning",
    banglaMeaning: "আড়ম্বরপূর্ণ / প্রগলভ",
    synonyms: ["pompous", "grandiloquent", "pretentious", "orotund"],
    antonyms: ["understated", "concise", "plainspoken"],
    exampleSentence: "His bombastic speeches failed to hide his complete lack of policy proposals.",
    etymology: "Latin 'bombax' (cotton, padding)"
  },
  {
    word: "Boorish",
    partOfSpeech: "adjective",
    englishMeaning: "Rude, insensitive, and unrefined",
    banglaMeaning: "অসভ্য / গেঁয়ো",
    synonyms: ["churlish", "uncouth", "ill-mannered", "loutish"],
    antonyms: ["refined", "courteous", "polite"],
    exampleSentence: "His boorish behavior at the dinner table embarrassed all his guests.",
    etymology: "Dutch 'boer' (farmer, peasant)"
  },
  {
    word: "Burgeon",
    partOfSpeech: "verb",
    englishMeaning: "Grow or expand rapidly",
    banglaMeaning: "দ্রুত বিকশিত হওয়া",
    synonyms: ["flourish", "thrive", "mushroom", "expand"],
    antonyms: ["wither", "shrink", "dwindle"],
    exampleSentence: "The tech industry began to burgeon in the valley following tax incentives.",
    etymology: "Old French 'bourgeon' (bud)"
  },
  {
    word: "Burnish",
    partOfSpeech: "verb",
    englishMeaning: "Make shiny by rubbing; polish",
    banglaMeaning: "মাজিয়া উজ্জ্বল করা",
    synonyms: ["polish", "buff", "shine", "gloss"],
    antonyms: ["tarnish", "dull", "mar"],
    exampleSentence: "The craftsman used a soft cloth to burnish the silver teapot until it gleamed.",
    etymology: "Old French 'burnir' (to make brown or shiny)"
  },
  {
    word: "Buttress",
    partOfSpeech: "verb / noun",
    englishMeaning: "Support, prop up, or strengthen",
    banglaMeaning: "প্রচ্ছায়া বা সাপোর্ট দিয়ে শক্ত করা",
    synonyms: ["bolster", "support", "reinforce", "shore up"],
    antonyms: ["undermine", "weaken"],
    exampleSentence: "The defense attorney presented key testimony to buttress her client's alibi.",
    etymology: "Old French 'bouter' (to push against)"
  },
  {
    word: "Capricious",
    partOfSpeech: "adjective",
    englishMeaning: "Unpredictable, impulsive, or fickle",
    banglaMeaning: "খেয়ালী / পরিবর্তনশীল",
    synonyms: ["fickle", "whimsical", "impulsive", "unpredictable"],
    antonyms: ["steadfast", "predictable", "consistent"],
    exampleSentence: "The region's weather is notoriously capricious, changing from sunshine to rain in minutes.",
    etymology: "Italian 'capriccio' (head with hair standing on end, sudden start)"
  },
  {
    word: "Castigation",
    partOfSpeech: "noun",
    englishMeaning: "Severe criticism, scolding, or punishment",
    banglaMeaning: "কঠোর তিরস্কার বা শাস্তি",
    synonyms: ["censure", "chastisement", "reprimand", "rebuke"],
    antonyms: ["praise", "commendation", "applause"],
    exampleSentence: "The minister faced harsh public castigation for violating ethics policies.",
    etymology: "Latin 'castigare' (to punish or correct)"
  },
  {
    word: "Catalyst",
    partOfSpeech: "noun",
    englishMeaning: "Agent that precipitates or accelerates change",
    banglaMeaning: "অনুঘটক / পরিবর্তন ঘটায় এমন উপাদান",
    synonyms: ["stimulus", "spark", "instigator", "accelerator"],
    antonyms: ["deterrent", "inhibitor", "hindrance"],
    exampleSentence: "The unexpected market shift served as a catalyst for reform across the banking sector.",
    etymology: "Greek 'kata-' (down) + 'lyein' (dissolve)"
  },
  {
    word: "Caustic",
    partOfSpeech: "adjective",
    englishMeaning: "Sarcastic, biting, or chemically corrosive",
    banglaMeaning: "তীব্র / কটু / ক্ষয়কারী",
    synonyms: ["scathing", "mordant", "trenchant", "corrosive"],
    antonyms: ["gentle", "mild", "complimentary"],
    exampleSentence: "Her caustic remarks during the debate upset several council members.",
    etymology: "Greek 'kaustikos' (capable of burning)"
  },
  {
    word: "Chicanery",
    partOfSpeech: "noun",
    englishMeaning: "Trickery or deception by quibbling",
    banglaMeaning: "প্রতারণা / ছলচাতুরী",
    synonyms: ["trickery", "deception", "subterfuge", "artifice"],
    antonyms: ["honesty", "candor", "forthrightness"],
    exampleSentence: "The business deal was tainted by legal chicanery and hidden fees.",
    etymology: "French 'chicaner' (to quibble)"
  },
  {
    word: "Coagulate",
    partOfSpeech: "verb",
    englishMeaning: "Thicken, congeal, or clot",
    banglaMeaning: "জমাট বাঁধা",
    synonyms: ["clot", "congeal", "thicken", "solidify"],
    antonyms: ["liquefy", "dissolve", "thins"],
    exampleSentence: "Blood contains platelets that cause it to coagulate when an injury occurs.",
    etymology: "Latin 'coagulare' (to curdle)"
  },
  {
    word: "Cogent",
    partOfSpeech: "adjective",
    englishMeaning: "Convincing, logical, and persuasive",
    banglaMeaning: "জোরালো / যুক্তিযুক্ত",
    synonyms: ["compelling", "persuasive", "lucid", "sound"],
    antonyms: ["unconvincing", "weak", "flimsy"],
    exampleSentence: "She presented a cogent argument that persuaded the board to reverse its decision.",
    etymology: "Latin 'cogere' (to drive together, compel)"
  },
  {
    word: "Commensurate",
    partOfSpeech: "adjective",
    englishMeaning: "Corresponding in size, degree, or extent",
    banglaMeaning: "সমানুপাতিক / সমান পরিমাপের",
    synonyms: ["proportionate", "equivalent", "corresponding"],
    antonyms: ["disproportionate", "incommensurate"],
    exampleSentence: "Salary will be commensurate with the candidate's qualifications and experience.",
    etymology: "Latin 'com-' (together) + 'mensuratus' (measured)"
  },
  {
    word: "Compendium",
    partOfSpeech: "noun",
    englishMeaning: "Brief, comprehensive summary or compilation",
    banglaMeaning: "সংক্ষিপ্তসার / সারাংশ",
    synonyms: ["summary", "digest", "compilation", "abstract"],
    antonyms: ["expansion", "elaboration"],
    exampleSentence: "The book offers a comprehensive compendium of classical mythology.",
    etymology: "Latin 'compendere' (to weigh together)"
  },
  {
    word: "Complaisant",
    partOfSpeech: "adjective",
    englishMeaning: "Overly polite and eager to please others",
    banglaMeaning: "সৌজন্যমূলক / বিনয়ী",
    synonyms: ["obliging", "accommodating", "polite", "yielding"],
    antonyms: ["uncooperative", "refractory", "obstinate"],
    exampleSentence: "Her complaisant nature made her well-liked, though sometimes taken advantage of.",
    etymology: "French 'complaire' (to acquiesce)"
  },
  {
    word: "Compliant",
    partOfSpeech: "adjective",
    englishMeaning: "Yielding or conforming to rules/requirements",
    banglaMeaning: "আজ্ঞাবহ / অনুগত",
    synonyms: ["obedient", "submissive", "conforming", "pliant"],
    antonyms: ["defiant", "rebellious", "recalcitrant"],
    exampleSentence: "All financial institutions must remain compliant with national banking regulations.",
    etymology: "Latin 'complere' (to fill up, fulfill)"
  },
  {
    word: "Conciliatory",
    partOfSpeech: "adjective",
    englishMeaning: "Reconciling or soothing to calm hostility",
    banglaMeaning: "সমঝোতামূলক / শান্তিকামী",
    synonyms: ["pacifying", "appeasing", "mollifying", "placatory"],
    antonyms: ["antagonistic", "provocative", "belligerent"],
    exampleSentence: "The union leader adopted a conciliatory tone during the contract renegotiations.",
    etymology: "Latin 'conciliare' (to bring together)"
  },
  {
    word: "Condone",
    partOfSpeech: "verb",
    englishMeaning: "Overlook, forgive, or give tacit approval to",
    banglaMeaning: "মেনে নেওয়া / ক্ষমা করা",
    synonyms: ["overlook", "excuse", "pardon", "forgive"],
    antonyms: ["condemn", "censure", "forbid"],
    exampleSentence: "The university does not condone academic dishonesty of any kind.",
    etymology: "Latin 'condonare' (to give freely, refrain from punishing)"
  },
  {
    word: "Confound",
    partOfSpeech: "verb",
    englishMeaning: "Confuse, puzzle, or mix up",
    banglaMeaning: "হতোদ্যম করা / বিভ্রান্ত করা",
    synonyms: ["perplex", "baffle", "bemuse", "bewilder"],
    antonyms: ["clarify", "illuminate", "explain"],
    exampleSentence: "The unexpected election results continue to confound political analysts.",
    etymology: "Latin 'confundere' (to pour together, mix up)"
  },
  {
    word: "Connoisseur",
    partOfSpeech: "noun",
    englishMeaning: "Expert judge in matters of fine art or taste",
    banglaMeaning: "শিল্পরসিক / বিশেষজ্ঞ",
    synonyms: ["expert", "aficionado", "cognoscente", "specialist"],
    antonyms: ["novice", "amateur", "neophyte"],
    exampleSentence: "As a connoisseur of fine wines, he could identify the vintage with a single sip.",
    etymology: "French 'connaître' (to know)"
  },
  {
    word: "Contentious",
    partOfSpeech: "adjective",
    englishMeaning: "Quarrelsome, argumentative, or controversial",
    banglaMeaning: "বিতর্কিত / ঝগড়াটে",
    synonyms: ["argumentative", "quarrelsome", "litigious", "combative"],
    antonyms: ["peaceable", "agreeable", "amicable"],
    exampleSentence: "Tax policy remains one of the most contentious issues in modern politics.",
    etymology: "Latin 'contendere' (to strive with)"
  },
  {
    word: "Contrite",
    partOfSpeech: "adjective",
    englishMeaning: "Penitent, remorseful, or deeply apologetic",
    banglaMeaning: "অনুপ্ত / অনুশোচনাগ্রস্ত",
    synonyms: ["remorseful", "penitent", "repentant", "sorry"],
    antonyms: ["unrepentant", "defiant", "impenitent"],
    exampleSentence: "The criminal appeared genuinely contrite as he expressed apology to the victims.",
    etymology: "Latin 'conterere' (to grind down)"
  },
  {
    word: "Conundrum",
    partOfSpeech: "noun",
    englishMeaning: "Riddle or difficult, perplexing problem",
    banglaMeaning: "জটিল প্রশ্ন / ধাঁধা",
    synonyms: ["enigma", "riddle", "puzzle", "dilemma"],
    antonyms: ["solution", "explanation"],
    exampleSentence: "Balancing economic growth with environmental protection is a major policy conundrum.",
    etymology: "Pseudo-Latin origin from English university slang"
  },
  {
    word: "Converge",
    partOfSpeech: "verb",
    englishMeaning: "Approach or come together at a point",
    banglaMeaning: "এক বিন্দুতে মিলিত হওয়া",
    synonyms: ["meet", "intersect", "merge", "conjoin"],
    antonyms: ["diverge", "disperse", "scatter"],
    exampleSentence: "Thousands of demonstrators converged on the capitol square to rally.",
    etymology: "Latin 'com-' (together) + 'vergere' (to bend/incline)"
  },
  {
    word: "Convoluted",
    partOfSpeech: "adjective",
    englishMeaning: "Intricate, complex, or coiled around",
    banglaMeaning: "জটিল / প্যাঁচানো",
    synonyms: ["intricate", "complicated", "tangled", "tortuous"],
    antonyms: ["simple", "straightforward", "direct"],
    exampleSentence: "The explanation was so convoluted that no one in the seminar understood it.",
    etymology: "Latin 'convolvere' (to roll together)"
  },
  {
    word: "Craven",
    partOfSpeech: "adjective / noun",
    englishMeaning: "Cowardly or lacking courage",
    banglaMeaning: "কাতর / কাপুরুষ",
    synonyms: ["cowardly", "pusillanimous", "timid", "faint-hearted"],
    antonyms: ["brave", "valiant", "audacious"],
    exampleSentence: "The commander's craven retreat left his soldiers vulnerable to attack.",
    etymology: "Old French 'cravante' (crushed, defeated)"
  },
  {
    word: "Daunt",
    partOfSpeech: "verb",
    englishMeaning: "Intimidate, frighten, or discourage",
    banglaMeaning: "ভীত করা / দমিত করা",
    synonyms: ["intimidate", "discourage", "dishearten", "dismay"],
    antonyms: ["encourage", "embolden", "reassure"],
    exampleSentence: "The scale of the disaster did not daunt the brave rescue workers.",
    etymology: "Old French 'donter' (to tame or subdue)"
  },
  {
    word: "Decorum",
    partOfSpeech: "noun",
    englishMeaning: "Propriety, orderliness, and good taste",
    banglaMeaning: "শালীনতা / শিষ্টাচার",
    synonyms: ["propriety", "etiquette", "dignity", "seemliness"],
    antonyms: ["impropriety", "indecency", "rudeness"],
    exampleSentence: "The speaker reminded members of parliament to maintain decorum during debate.",
    etymology: "Latin 'decorus' (seemly, fitting)"
  },
  {
    word: "Deference",
    partOfSpeech: "noun",
    englishMeaning: "Courteous regard for another's wishes or opinion",
    banglaMeaning: "শ্রদ্ধা / সম্মানজনক সম্মতি",
    synonyms: ["respect", "reverence", "submission", "courtesy"],
    antonyms: ["disrespect", "defiance", "contempt"],
    exampleSentence: "In deference to the founder's legacy, the board retained the original company name.",
    etymology: "French 'déférer' (to refer, yield)"
  },
  {
    word: "Delineate",
    partOfSpeech: "verb",
    englishMeaning: "Portray, depict, or describe precisely",
    banglaMeaning: "চিত্রিত করা / স্পষ্টভাবে বর্ণনা করা",
    synonyms: ["depict", "describe", "outline", "portray"],
    antonyms: ["confuse", "distort", "muddle"],
    exampleSentence: "The report clearly delineates the roles and responsibilities of each department.",
    etymology: "Latin 'delineare' (to outline with lines)"
  },
  {
    word: "Denigrate",
    partOfSpeech: "verb",
    englishMeaning: "Blacken the reputation of; disparage",
    banglaMeaning: "কালিমালিপ্ত করা / বদনাম করা",
    synonyms: ["disparage", "defame", "belittle", "vilify"],
    antonyms: ["praise", "extol", "laud"],
    exampleSentence: "Political ads often attempt to denigrate opponent character rather than focus on issues.",
    etymology: "Latin 'denigrare' (to make black)"
  },
  {
    word: "Deride",
    partOfSpeech: "verb",
    englishMeaning: "Ridicule or make fun of mockingly",
    banglaMeaning: "উপহাস করা / বিদ্রূপ করা",
    synonyms: ["ridicule", "mock", "scoff", "taunt"],
    antonyms: ["praise", "respect", "praise"],
    exampleSentence: "Critics derided the director's new film as pretentious and boring.",
    etymology: "Latin 'deridere' (to laugh at)"
  },
  {
    word: "Derivative",
    partOfSpeech: "adjective",
    englishMeaning: "Unoriginal; obtained from another source",
    banglaMeaning: "অনুকরণমূলক / মৌলিক নয় এমন",
    synonyms: ["unoriginal", "imitative", "copied", "secondary"],
    antonyms: ["original", "innovative", "novel"],
    exampleSentence: "The artist's early paintings were criticized for being overly derivative of Impressionist masters.",
    etymology: "Latin 'derivare' (to draw off stream)"
  },
  {
    word: "Desiccate",
    partOfSpeech: "verb",
    englishMeaning: "Dry up completely or dehydrate",
    banglaMeaning: "শুষ্ক করা / আর্দ্রতাহীন করা",
    synonyms: ["dehydrate", "dry", "parch", "wither"],
    antonyms: ["moisten", "hydrate", "drench"],
    exampleSentence: "The prolonged heatwave desiccated the soil, causing crops to fail.",
    etymology: "Latin 'desiccare' (to dry thoroughly)"
  },
  {
    word: "Desultory",
    partOfSpeech: "adjective",
    englishMeaning: "Aimless, haphazard, digressing at random",
    banglaMeaning: "এলোমেলো / বিশৃঙ্খল",
    synonyms: ["haphazard", "random", "aimless", "unconnected"],
    antonyms: ["systematic", "methodical", "focused"],
    exampleSentence: "They held a desultory conversation about the weather while waiting for the bus.",
    etymology: "Latin 'desultor' (a vaulter who jumps from horse to horse)"
  },
  {
    word: "Diatribe",
    partOfSpeech: "noun",
    englishMeaning: "Bitter scolding or verbal attack",
    banglaMeaning: "তীব্র গালিগালাজ / কটূক্তি",
    synonyms: ["tirade", "harangue", "invective", "denunciation"],
    antonyms: ["encomium", "eulogy", "panegyric"],
    exampleSentence: "The column was a scathing diatribe against modern educational reforms.",
    etymology: "Greek 'diatribe' (discourse, pastime, wearing away)"
  },
  {
    word: "Dichotomy",
    partOfSpeech: "noun",
    englishMeaning: "Division into two mutually exclusive parts",
    banglaMeaning: "দ্বিবিভাজন / দুই ভাগে বিভক্তকরণ",
    synonyms: ["division", "split", "duality", "bifurcation"],
    antonyms: ["union", "harmony", "synthesis"],
    exampleSentence: "There is often a sharp dichotomy between policy theory and daily practice.",
    etymology: "Greek 'dicha' (in two) + 'temnein' (to cut)"
  },
  {
    word: "Diffidence",
    partOfSpeech: "noun",
    englishMeaning: "Shyness or lack of self-confidence",
    banglaMeaning: "আত্মবিশ্বাসের অভাব / লাজুকতা",
    synonyms: ["timidity", "shyness", "modesty", "hesitancy"],
    antonyms: ["boldness", "confidence", "audacity"],
    exampleSentence: "Despite her profound expertise, her diffidence made her hesitant to present at conferences.",
    etymology: "Latin 'diffidere' (to distrust)"
  },
  {
    word: "Diffuse",
    partOfSpeech: "adjective / verb",
    englishMeaning: "Wordy, rambling; or spread out widely",
    banglaMeaning: "ব্যাপ্ত / ছড়ানো / দীর্ঘায়িত",
    synonyms: ["wordy", "rambling", "dispersed", "scattered"],
    antonyms: ["concise", "succinct", "concentrated"],
    exampleSentence: "The report was so diffuse that finding core recommendations required hours of reading.",
    etymology: "Latin 'diffundere' (to pour out)"
  },
  {
    word: "Disabuse",
    partOfSpeech: "verb",
    englishMeaning: "Correct a false impression or undeceive",
    banglaMeaning: "ভুল ধারণা দূর করা",
    synonyms: ["undeceive", "disillusion", "correct", "enlighten"],
    antonyms: ["deceive", "mislead", "delude"],
    exampleSentence: "The professor was quick to disabuse the students of their naive assumptions.",
    etymology: "French 'désabuser' (to free from abuse/deception)"
  },
  {
    word: "Discerning",
    partOfSpeech: "adjective",
    englishMeaning: "Having good judgment or sharp insight",
    banglaMeaning: "সূক্ষ্মদর্শী / বিচক্ষণ",
    synonyms: ["perceptive", "astute", "discriminating", "insightful"],
    antonyms: ["obtuse", "undiscriminating", "blind"],
    exampleSentence: "Only a discerning art collector would spot the subtle signature in the corner.",
    etymology: "Latin 'discernere' (to separate, distinguish)"
  },
  {
    word: "Discordant",
    partOfSpeech: "adjective",
    englishMeaning: "Not harmonious, conflicting, or harsh sounding",
    banglaMeaning: "অসামঞ্জস্যপূর্ণ / অমিল",
    synonyms: ["dissonant", "conflicting", "inharmonious", "jarring"],
    antonyms: ["harmonious", "concordant", "melodious"],
    exampleSentence: "A chorus of discordant voices disrupted the town hall meeting.",
    etymology: "Latin 'discordare' (to disagree)"
  },
  {
    word: "Disingenuous",
    partOfSpeech: "adjective",
    englishMeaning: "Lacking genuine candor; insincere",
    banglaMeaning: "অকপট নয় এমন / কপট",
    synonyms: ["insincere", "deceitful", "duplicitous", "hypocritical"],
    antonyms: ["candid", "sincere", "ingenuous"],
    exampleSentence: "It was disingenuous of the politician to claim he was unaware of the strategy.",
    etymology: "Latin 'dis-' (not) + 'ingenuus' (frank, open)"
  },
  {
    word: "Disinterested",
    partOfSpeech: "adjective",
    englishMeaning: "Unprejudiced and impartial",
    banglaMeaning: "নিরপেক্ষ / স্বার্থহীন",
    synonyms: ["impartial", "unbiased", "objective", "neutral"],
    antonyms: ["biased", "partial", "self-interested"],
    exampleSentence: "A judge must remain a disinterested party throughout court proceedings.",
    etymology: "English 'dis-' (un-) + 'interested'"
  },
  {
    word: "Disparate",
    partOfSpeech: "adjective",
    englishMeaning: "Fundamentally distinct or different in kind",
    banglaMeaning: "ভিন্নধর্মী / অসমপ্রকৃতির",
    synonyms: ["dissimilar", "divergent", "diverse", "distinct"],
    antonyms: ["similar", "homogeneous", "identical"],
    exampleSentence: "The panel brought together experts from disparate fields such as physics and philosophy.",
    etymology: "Latin 'disparare' (to separate)"
  },
  {
    word: "Dissemble",
    partOfSpeech: "verb",
    englishMeaning: "Disguise or conceal true feelings or motives",
    banglaMeaning: "ছলনা করা / ভান করা",
    synonyms: ["disguise", "feign", "simulate", "mask"],
    antonyms: ["reveal", "disclose", "manifest"],
    exampleSentence: "Honest leaders do not dissemble when communicating bad news to the public.",
    etymology: "Latin 'dissimulare' (to make dissimilar, conceal)"
  },
  {
    word: "Disseminate",
    partOfSpeech: "verb",
    englishMeaning: "Distribute or spread widely (like seeds)",
    banglaMeaning: "প্রচার করা / ছড়িয়ে দেওয়া",
    synonyms: ["broadcast", "propagate", "circulate", "disperse"],
    antonyms: ["gather", "suppress", "withhold"],
    exampleSentence: "Health organizations use internet campaigns to disseminate vital safety precautions.",
    etymology: "Latin 'disseminare' (to scatter seed)"
  },
  {
    word: "Dogmatic",
    partOfSpeech: "adjective",
    englishMeaning: "Arrogantly assertive of unproven ideas",
    banglaMeaning: "স্বৈরাচারী মতামতসম্পন্ন / একগুঁয়ে",
    synonyms: ["doctrinaire", "opinionated", "assertive", "imperious"],
    antonyms: ["open-minded", "flexible", "skeptical"],
    exampleSentence: "His dogmatic insistence on old methods resisted every new scientific advance.",
    etymology: "Greek 'dogma' (opinion, decree)"
  },
  {
    word: "Eclectic",
    partOfSpeech: "adjective",
    englishMeaning: "Composed of elements drawn from diverse sources",
    banglaMeaning: "সর্বগ্রাহী / বৈচিত্র্যময়",
    synonyms: ["diverse", "broad-ranging", "catholic", "varied"],
    antonyms: ["monolithic", "narrow", "uniform"],
    exampleSentence: "Her library boasted an eclectic collection of literature ranging from ancient poetry to modern sci-fi.",
    etymology: "Greek 'eklegein' (to select)"
  },
  {
    word: "Efficacy",
    partOfSpeech: "noun",
    englishMeaning: "Power to produce the desired effect",
    banglaMeaning: "কার্যকারিতা",
    synonyms: ["effectiveness", "potency", "usefulness"],
    antonyms: ["ineffectiveness", "inefficiency"],
    exampleSentence: "Clinical trials were conducted to prove the efficacy of the new vaccine.",
    etymology: "Latin 'efficax' (effectual)"
  },
  {
    word: "Effrontery",
    partOfSpeech: "noun",
    englishMeaning: "Shameless boldness or audacity",
    banglaMeaning: "ধৃষ্টতা / নির্লজ্জ সাহসিকতা",
    synonyms: ["audacity", "impudence", "presumption", "insolence"],
    antonyms: ["timidity", "modesty", "deference"],
    exampleSentence: "He had the effrontery to demand a promotion despite his chronic tardiness.",
    etymology: "French 'effronté' (shameless, barefaced)"
  },
  {
    word: "Elicit",
    partOfSpeech: "verb",
    englishMeaning: "Draw out or evoke a response",
    banglaMeaning: "প্রকাশ করা / বের করে আনা",
    synonyms: ["evoke", "extract", "obtain", "draw out"],
    antonyms: ["suppress", "stifle", "hide"],
    exampleSentence: "The comedian's clever jokes failed to elicit even a smile from the stoic crowd.",
    etymology: "Latin 'elincere' (to draw out)"
  },
  {
    word: "Embellish",
    partOfSpeech: "verb",
    englishMeaning: "Adorn, decorate, or exaggerate a story",
    banglaMeaning: "সজ্জিত করা / বাড়িয়ে বলা",
    synonyms: ["adorn", "decorate", "embroider", "garnish"],
    antonyms: ["simplify", "strip", "deface"],
    exampleSentence: "He tended to embellish his childhood tales to make them sound more heroic.",
    etymology: "Old French 'embellir' (to make beautiful)"
  },
  {
    word: "Empirical",
    partOfSpeech: "adjective",
    englishMeaning: "Based on observation or experiment rather than theory",
    banglaMeaning: "অভিজ্ঞতালব্ধ / পরীক্ষামূলক",
    synonyms: ["experimental", "observed", "factual", "practical"],
    antonyms: ["theoretical", "hypothetical", "conjectural"],
    exampleSentence: "The theory lacks empirical support and remains speculative.",
    etymology: "Greek 'empeirikos' (experienced)"
  },
  {
    word: "Emulate",
    partOfSpeech: "verb",
    englishMeaning: "Imitate or rival with intent to equal or surpass",
    banglaMeaning: "অনুকরণ করা / প্রতিযোগিতা করা",
    synonyms: ["imitate", "mirror", "mimic", "match"],
    antonyms: ["neglect", "reject"],
    exampleSentence: "Young athletes often try to emulate the habits of legendary stars.",
    etymology: "Latin 'aemulus' (striving to equal)"
  },
  {
    word: "Enervate",
    partOfSpeech: "verb",
    englishMeaning: "Weaken or drain energy from",
    banglaMeaning: "দুর্বল করা / শক্তিহীন করা",
    synonyms: ["weaken", "debilitate", "enfeeble", "sap"],
    antonyms: ["invigorate", "energize", "strengthen"],
    exampleSentence: "The sweltering afternoon humidity served to enervate the marathon runners.",
    etymology: "Latin 'enervare' (to remove sinews/strength)"
  },
  {
    word: "Engender",
    partOfSpeech: "verb",
    englishMeaning: "Cause, produce, or give rise to",
    banglaMeaning: "জন্ম দেওয়া / সৃষ্টি করা",
    synonyms: ["generate", "cause", "produce", "foster"],
    antonyms: ["quell", "extinguish", "prevent"],
    exampleSentence: "Transparency in corporate operations helps engender trust among stockholders.",
    etymology: "Latin 'ingenerare' (to produce, generate)"
  },
  {
    word: "Ephemeral",
    partOfSpeech: "adjective",
    englishMeaning: "Short-lived or fleeting",
    banglaMeaning: "ক্ষণস্থায়ী",
    synonyms: ["transient", "fleeting", "evanescent", "temporary"],
    antonyms: ["permanent", "eternal", "perennial"],
    exampleSentence: "Fame in the age of viral videos can prove remarkably ephemeral.",
    etymology: "Greek 'ephemeros' (lasting a day)"
  },
  {
    word: "Equanimity",
    partOfSpeech: "noun",
    englishMeaning: "Calmness of temperament under pressure",
    banglaMeaning: "মনের স্থিরতা / সমচিত্ততা",
    synonyms: ["composure", "poise", "calmness", "serenity"],
    antonyms: ["agitation", "anxiety", "excitability"],
    exampleSentence: "She handled the sudden crisis with remarkable poise and equanimity.",
    etymology: "Latin 'aequus' (even) + 'animus' (mind)"
  },
  {
    word: "Equivocate",
    partOfSpeech: "verb",
    englishMeaning: "Use ambiguous language to mislead or conceal truth",
    banglaMeaning: "দ্ব্যর্থবোধক কথা বলা / এড়িয়ে যাওয়া",
    synonyms: ["prevaricate", "hedge", "patter", "waffle"],
    antonyms: ["speak directly", "clarify"],
    exampleSentence: "When asked directly about tax hikes, the candidate began to equivocate.",
    etymology: "Latin 'aequivocus' (equal voice/meaning)"
  },
  {
    word: "Erudite",
    partOfSpeech: "adjective",
    englishMeaning: "Learned, scholarly, and possessing deep knowledge",
    banglaMeaning: "পণ্ডিত / বিদ্বান",
    synonyms: ["scholarly", "learned", "knowledgeable", "lettered"],
    antonyms: ["ignorant", "uneducated", "illiterate"],
    exampleSentence: "The professor delivered an erudite lecture on ancient Roman architecture.",
    etymology: "Latin 'eruditus' (polished, instructed)"
  },
  {
    word: "Esoteric",
    partOfSpeech: "adjective",
    englishMeaning: "Hard to understand; known only to a chosen few",
    banglaMeaning: "গূঢ় / রহস্যময়",
    synonyms: ["obscure", "recondite", "arcane", "abstruse"],
    antonyms: ["exoteric", "common", "familiar"],
    exampleSentence: "Quantum mechanics remains an esoteric field for most high school students.",
    etymology: "Greek 'esoterikos' (inner, belonging to inner circle)"
  },
  {
    word: "Eulogy",
    partOfSpeech: "noun",
    englishMeaning: "High praise, especially for someone who died",
    banglaMeaning: "প্রশংসাবাক্য / স্মৃতিস্তুতি",
    synonyms: ["panegyric", "encomium", "tribute", "praise"],
    antonyms: ["condemnation", "diatribe", "criticism"],
    exampleSentence: "His lifelong friend delivered a moving eulogy during the memorial service.",
    etymology: "Greek 'eu' (well) + 'logia' (speaking)"
  },
  {
    word: "Euphemism",
    partOfSpeech: "noun",
    englishMeaning: "Mild expression substituted for a harsh one",
    banglaMeaning: "মৃদুভাষণ / কোমল উক্তি",
    synonyms: ["polite term", "softening", "substitute"],
    antonyms: ["dysphemism", "direct word"],
    exampleSentence: "'Pass away' is a widely used euphemism for 'die'.",
    etymology: "Greek 'eu' (well) + 'phemi' (speak)"
  },
  {
    word: "Exacerbate",
    partOfSpeech: "verb",
    englishMeaning: "Worsen, embitter, or aggravate",
    banglaMeaning: "আরও খারাপ করা / তীব্র করা",
    synonyms: ["aggravate", "worsen", "inflame", "intense"],
    antonyms: ["alleviate", "ameliorate", "assuage"],
    exampleSentence: "Delaying maintenance will only exacerbate the plumbing damage in the long run.",
    etymology: "Latin 'exacerbare' (to make harsh/bitter)"
  },
  {
    word: "Exculpate",
    partOfSpeech: "verb",
    englishMeaning: "Clear from blame or guilt",
    banglaMeaning: "দণ্ড বা অপরাধ থেকে মুক্ত করা",
    synonyms: ["exonerate", "acquit", "vindicate", "clear"],
    antonyms: ["incriminate", "blame", "convict"],
    exampleSentence: "DNA evidence was brought forward that served to exculpate the wrongfully accused man.",
    etymology: "Latin 'ex-' (out of) + 'culpa' (blame)"
  },
  {
    word: "Exigency",
    partOfSpeech: "noun",
    englishMeaning: "Urgent situation demanding immediate action",
    banglaMeaning: "জরুরি অবস্থা / প্রয়োজনীয়তা",
    synonyms: ["urgency", "emergency", "crisis", "necessity"],
    antonyms: ["peace", "calm", "leisure"],
    exampleSentence: "The sudden exigency required all emergency personnel to report immediately.",
    etymology: "Latin 'exigere' (to demand, enforce)"
  },
  {
    word: "Extrapolation",
    partOfSpeech: "noun",
    englishMeaning: "Projection or conjecture based on known data",
    banglaMeaning: "পূর্বাভাস / আনুমানিক বিস্তার",
    synonyms: ["projection", "inference", "deduction", "estimation"],
    antonyms: ["speculation without facts"],
    exampleSentence: "By extrapolation from current sales growth, the company expects profits to double next year.",
    etymology: "Latin 'extra' (outside) + 'polire' (to polish/refine)"
  },
  {
    word: "Facetious",
    partOfSpeech: "adjective",
    englishMeaning: "Joking inappropriately; flippant",
    banglaMeaning: "ইয়ার্কিপূর্ণ / তামাশাপূর্ণ",
    synonyms: ["flippant", "jocular", "playful", "witty"],
    antonyms: ["serious", "solemn", "grave"],
    exampleSentence: "His facetious comments during the solemn ceremony were met with silence.",
    etymology: "French 'facétieux' (witty, jesting)"
  },
  {
    word: "Facilitate",
    partOfSpeech: "verb",
    englishMeaning: "Make easier or help bring about",
    banglaMeaning: "সহজতর করা / সহায়তা করা",
    synonyms: ["expedite", "ease", "assist", "promote"],
    antonyms: ["hinder", "impede", "obstruct"],
    exampleSentence: "Modern software applications facilitate seamless collaboration between remote workers.",
    etymology: "Latin 'facilis' (easy)"
  },
  {
    word: "Fallacious",
    partOfSpeech: "adjective",
    englishMeaning: "False, misleading, or logically flawed",
    banglaMeaning: "ভ্রান্ত / ভুল ধারণামূলক",
    synonyms: ["erroneous", "spurious", "flawed", "misleading"],
    antonyms: ["sound", "valid", "truthful"],
    exampleSentence: "The argument rested on a fallacious premise that invalidated the entire conclusion.",
    etymology: "Latin 'fallax' (deceitful)"
  },
  {
    word: "Fatuous",
    partOfSpeech: "adjective",
    englishMeaning: "Foolish, brainless, yet foolishly smug",
    banglaMeaning: "বোকা / আত্মসন্তুষ্ট বোকা",
    synonyms: ["inane", "foolish", "silly", "vacuous"],
    antonyms: ["wise", "sensible", "sagacious"],
    exampleSentence: "He offered a fatuous smile and continued making baseless claims.",
    etymology: "Latin 'fatuus' (foolish, senseless)"
  },
  {
    word: "Fawning",
    partOfSpeech: "adjective",
    englishMeaning: "Flattering obsequiously; cringing to gain favor",
    banglaMeaning: "চাটুকার / তোষামোদকারী",
    synonyms: ["sycophantic", "obsequious", "servile", "grovelling"],
    antonyms: ["assertive", "proud", "defiant"],
    exampleSentence: "The manager was surrounded by fawning aides who agreed with every word he uttered.",
    etymology: "Old English 'fandian' (to seek, test)"
  },
  {
    word: "Felicitous",
    partOfSpeech: "adjective",
    englishMeaning: "Aptly expressed; well-suited or happy",
    banglaMeaning: "সুযুক্ত / সুসংগত",
    synonyms: ["apt", "appropriate", "fitting", "opportune"],
    antonyms: ["inappropriate", "unfortunate", "felicitous"],
    exampleSentence: "Her felicitous choice of words transformed a tense exchange into a friendly dialogue.",
    etymology: "Latin 'felix' (happy, fortunate)"
  },
  {
    word: "Fervor",
    partOfSpeech: "noun",
    englishMeaning: "Glow, ardor, or intense passion",
    banglaMeaning: "উত্তাপ / ব্যাকুলতা / উন্মাদনা",
    synonyms: ["passion", "zeal", "ardor", "enthusiasm"],
    antonyms: ["apathy", "indifference", "coolness"],
    exampleSentence: "The crowd cheered with political fervor as the candidate took the podium.",
    etymology: "Latin 'fervere' (to boil)"
  },
  {
    word: "Fledgling",
    partOfSpeech: "adjective / noun",
    englishMeaning: "Inexperienced; beginner or young bird",
    banglaMeaning: "অনভিজ্ঞ / নবীন",
    synonyms: ["neophyte", "novice", "tyro", "incipient"],
    antonyms: ["veteran", "expert", "seasoned"],
    exampleSentence: "The fledgling company struggled during its first year in competitive tech markets.",
    etymology: "English 'fledge' (to acquire feathers)"
  },
  {
    word: "Flout",
    partOfSpeech: "verb",
    englishMeaning: "Reject, mock, or show contempt for rules",
    banglaMeaning: "অবজ্ঞা করা / আইন অমান্য করা",
    synonyms: ["defy", "disregard", "scorn", "flout"],
    antonyms: ["obey", "respect", "comply"],
    exampleSentence: "Motorists who flout traffic laws face severe penalties and license suspension.",
    etymology: "Middle English 'flouten' (to play the flute, jeer)"
  },
  {
    word: "Foment",
    partOfSpeech: "verb",
    englishMeaning: "Stir up, instigate, or foster rebellion",
    banglaMeaning: "উসকিয়ে দেওয়া / প্ররোচিত করা",
    synonyms: ["instigate", "incite", "provoke", "agitate"],
    antonyms: ["quell", "suppress", "mollify"],
    exampleSentence: "Agitators were arrested for trying to foment disorder during peaceful rallies.",
    etymology: "Latin 'fomentare' (to bathe with warm lotions)"
  },
  {
    word: "Forestall",
    partOfSpeech: "verb",
    englishMeaning: "Prevent or delay by taking early action",
    banglaMeaning: "পূর্বাহ্নে বন্ধ করা / প্রতিরোধ করা",
    synonyms: ["preempt", "prevent", "thwart", "avert"],
    antonyms: ["encourage", "assist", "expedite"],
    exampleSentence: "The central bank lowered interest rates to forestall an impending economic downturn.",
    etymology: "Old English 'fore' (before) + 'stall' (position)"
  },
  {
    word: "Frugality",
    partOfSpeech: "noun",
    englishMeaning: "Thriftiness and economy in spending",
    banglaMeaning: "মিতব্যয়িতা",
    synonyms: ["thrift", "parsimony", "economy", "prudence"],
    antonyms: ["extravagance", "wastefulness", "prodigality"],
    exampleSentence: "Her frugality enabled her to save enough money to launch her own venture.",
    etymology: "Latin 'frugalis' (thrifty, virtuous)"
  },
  {
    word: "Futile",
    partOfSpeech: "adjective",
    englishMeaning: "Useless, hopeless, or producing no result",
    banglaMeaning: "ব্যর্থ / পণ্ড",
    synonyms: ["pointless", "ineffectual", "fruitless", "vain"],
    antonyms: ["effective", "fruitful", "successful"],
    exampleSentence: "It proved futile to attempt fixing the old computer once the motherboard fried.",
    etymology: "Latin 'futilis' (leaky, easily poured out)"
  },
  {
    word: "Garrulous",
    partOfSpeech: "adjective",
    englishMeaning: "Excessively talkative, especially on trivial matters",
    banglaMeaning: "বাচাল / অতিভাষী",
    synonyms: ["loquacious", "talkative", "voluble", "verbose"],
    antonyms: ["laconic", "taciturn", "reticent"],
    exampleSentence: "The garrulous passenger kept talking through the entire transatlantic flight.",
    etymology: "Latin 'garrire' (to chatter)"
  },
  {
    word: "Goad",
    partOfSpeech: "verb / noun",
    englishMeaning: "Urge on, provoke, or incite to action",
    banglaMeaning: "উত্তেজিত করা / প্ররোচিত করা",
    synonyms: ["prod", "spur", "incite", "provoke"],
    antonyms: ["deter", "discourage", "restrain"],
    exampleSentence: "His rivals tried to goad him into losing his temper during the debate.",
    etymology: "Old English 'gād' (spear, point)"
  },
  {
    word: "Grandiloquent",
    partOfSpeech: "adjective",
    englishMeaning: "Pompous or high-flown in language",
    banglaMeaning: "আড়ম্বরপূর্ণ ভাষী",
    synonyms: ["bombastic", "pompous", "magniloquent", "oratorical"],
    antonyms: ["plainspoken", "unpretentious", "direct"],
    exampleSentence: "The lawyer's grandiloquent rhetoric annoyed the pragmatically-minded jury.",
    etymology: "Latin 'grandis' (grand) + 'loqui' (to speak)"
  },
  {
    word: "Gregarious",
    partOfSpeech: "adjective",
    englishMeaning: "Sociable or fond of company",
    banglaMeaning: "সংঘপ্রিয় / সামাজিক",
    synonyms: ["sociable", "outgoing", "companionable", "convivial"],
    antonyms: ["reclusive", "solitary", "introverted"],
    exampleSentence: "Being naturally gregarious, she hosted weekly dinners for friends and neighbors.",
    etymology: "Latin 'grex' (flock, herd)"
  },
  {
    word: "Guileless",
    partOfSpeech: "adjective",
    englishMeaning: "Without deceit, honest, and straightforward",
    banglaMeaning: "কপটতাহীন / নিখাদ",
    synonyms: ["artless", "ingenuous", "candid", "unassuming"],
    antonyms: ["deceitful", "cunning", "guileful"],
    exampleSentence: "The child offered a guileless explanation for the broken vase.",
    etymology: "Old French 'guile' (deceit) + '-less'"
  },
  {
    word: "Gullible",
    partOfSpeech: "adjective",
    englishMeaning: "Easily deceived or cheated",
    banglaMeaning: "সহজে বিশ্বাসপ্রবণ",
    synonyms: ["credulous", "naive", "trusting", "impressionable"],
    antonyms: ["cynical", "skeptical", "suspicious"],
    exampleSentence: "Scammers frequently target gullible consumers with false promises of instant wealth.",
    etymology: "English verb 'gull' (to fool) + '-able'"
  },
  {
    word: "Harangue",
    partOfSpeech: "noun / verb",
    englishMeaning: "Long, passionate, and vehement speech",
    banglaMeaning: "তীব্র বাচন / দীর্ঘ উপদেশময় বক্তৃতা",
    synonyms: ["diatribe", "tirade", "rant", "lecture"],
    antonyms: ["panegyric", "brief remark"],
    exampleSentence: "The coach delivered an angry harangue to the team after their dismal loss.",
    etymology: "Italian 'aringo' (public arena, forum)"
  },
  {
    word: "Homogeneous",
    partOfSpeech: "adjective",
    englishMeaning: "Of the same kind or uniform throughout",
    banglaMeaning: "সমজাতীয় / একই ধরনের",
    synonyms: ["uniform", "consistent", "unvarying", "alike"],
    antonyms: ["heterogeneous", "diverse", "varied"],
    exampleSentence: "The suburban neighborhood was largely homogeneous in architecture and income level.",
    etymology: "Greek 'homos' (same) + 'genos' (kind)"
  },
  {
    word: "Hyperbole",
    partOfSpeech: "noun",
    englishMeaning: "Exaggeration or overstatement for effect",
    banglaMeaning: "অতিরঞ্জন / বাড়িয়ে বলা",
    synonyms: ["exaggeration", "overstatement", "embellishment"],
    antonyms: ["understatement", "litotes"],
    exampleSentence: "To say he is 'the fastest runner in the universe' is pure hyperbole.",
    etymology: "Greek 'hyper-' (over) + 'ballein' (to throw)"
  },
  {
    word: "Iconoclastic",
    partOfSpeech: "adjective",
    englishMeaning: "Attacking cherished traditions or conventions",
    banglaMeaning: "প্রথাভাঙ্গা / ঐতিহ্যবিরোধী",
    synonyms: ["rebellious", "subversive", "unconventional"],
    antonyms: ["traditional", "orthodox", "conformist"],
    exampleSentence: "His iconoclastic approach to art challenged all traditional gallery standards.",
    etymology: "Greek 'eikon' (image) + 'klastein' (to break)"
  },
  {
    word: "Immutable",
    partOfSpeech: "adjective",
    englishMeaning: "Unchangeable or permanent over time",
    banglaMeaning: "অপরিবর্তনীয়",
    synonyms: ["unchangeable", "unalterable", "fixed", "permanent"],
    antonyms: ["mutable", "variable", "flexible"],
    exampleSentence: "Scientific laws describe the immutable principles that govern physical forces.",
    etymology: "Latin 'in-' (not) + 'mutabilis' (changeable)"
  },
  {
    word: "Impair",
    partOfSpeech: "verb",
    englishMeaning: "Injure, weaken, or lessen in quality",
    banglaMeaning: "ক্ষতিগ্রস্ত করা / দুর্বল করা",
    synonyms: ["damage", "weaken", "mar", "vitiate"],
    antonyms: ["enhance", "improve", "repair"],
    exampleSentence: "Lack of sleep will severely impair your ability to focus during exams.",
    etymology: "Latin 'pejor' (worse)"
  },
  {
    word: "Impassive",
    partOfSpeech: "adjective",
    englishMeaning: "Showing no emotion or feeling",
    banglaMeaning: "আবেগহীন / নির্বিকার",
    synonyms: ["stoical", "expressionless", "unemotional", "phlegmatic"],
    antonyms: ["emotional", "expressive", "demonstrative"],
    exampleSentence: "The defendant remained impassive as the judge delivered the verdict.",
    etymology: "Latin 'in-' (not) + 'passio' (suffering, feeling)"
  },
  {
    word: "Impede",
    partOfSpeech: "verb",
    englishMeaning: "Hinder, block, or delay progress",
    banglaMeaning: "বাধা দেওয়া / বিঘ্ন ঘটানো",
    synonyms: ["hinder", "obstruct", "hamper", "block"],
    antonyms: ["facilitate", "assist", "expedite"],
    exampleSentence: "Heavy snowstorms served to impede rescue operations across the mountain pass.",
    etymology: "Latin 'impedire' (to shackle the feet)"
  },
  {
    word: "Impermeable",
    partOfSpeech: "adjective",
    englishMeaning: "Impervious; not allowing fluid to pass through",
    banglaMeaning: "অভেদ্য / জলরোধী",
    synonyms: ["impervious", "waterproof", "impenetrable"],
    antonyms: ["permeable", "porous"],
    exampleSentence: "Clay layers in the soil create an impermeable barrier to water flow.",
    etymology: "Latin 'in-' (not) + 'permeabilis' (passable)"
  },
  {
    word: "Imperturbable",
    partOfSpeech: "adjective",
    englishMeaning: "Calm, placid, and impossible to upset",
    banglaMeaning: "প্রশান্ত / অবিচলিত",
    synonyms: ["unshakeable", "placid", "composed", "serene"],
    antonyms: ["excitable", "touchy", "agitated"],
    exampleSentence: "Her imperturbable nature under fire made her an ideal emergency dispatcher.",
    etymology: "Latin 'in-' (not) + 'perturbare' (to disturb)"
  },
  {
    word: "Implacable",
    partOfSpeech: "adjective",
    englishMeaning: "Incapable of being appeased or pacified",
    banglaMeaning: "অসমঝোতাযোগ্য / কঠোর",
    synonyms: ["unappeasable", "relentless", "unyielding", "inexorable"],
    antonyms: ["mollifiable", "appeasable", "forgiving"],
    exampleSentence: "The feud persisted due to the implacable hatred between the families.",
    etymology: "Latin 'in-' (not) + 'placare' (to soothe)"
  },
  {
    word: "Implicit",
    partOfSpeech: "adjective",
    englishMeaning: "Understood but not explicitly stated",
    banglaMeaning: "অন্তর্নিহিত / পরোক্ষ",
    synonyms: ["implied", "tacit", "unspoken", "unexpressed"],
    antonyms: ["explicit", "stated", "express"],
    exampleSentence: "There was an implicit agreement that whoever brewed the coffee would clean the pot.",
    etymology: "Latin 'implicare' (to entangle, fold in)"
  },
  {
    word: "Inadvertently",
    partOfSpeech: "adverb",
    englishMeaning: "Unintentionally or by oversight",
    banglaMeaning: "অনচ্ছাকৃতভাবে / অনিচ্ছাকৃতভাবে",
    synonyms: ["unintentionally", "accidental", "unwittingly"],
    antonyms: ["deliberately", "intentionally"],
    exampleSentence: "She inadvertently deleted the important document while clearing old files.",
    etymology: "Latin 'in-' (not) + 'advertere' (turn attention to)"
  },
  {
    word: "Inchoate",
    partOfSpeech: "adjective",
    englishMeaning: "Recently begun; rudimentary or incomplete",
    banglaMeaning: "প্রাথমিক / অসম্পূর্ণ",
    synonyms: ["rudimentary", "incipient", "formless", "unformed"],
    antonyms: ["mature", "fully developed", "complete"],
    exampleSentence: "His business plan was still in an inchoate stage and needed refinement.",
    etymology: "Latin 'inchoare' (to begin)"
  },
  {
    word: "Incongruity",
    partOfSpeech: "noun",
    englishMeaning: "Lack of harmony, appropriateness, or logic",
    banglaMeaning: "বেমানান অবস্থা / অসামঞ্জস্য",
    synonyms: ["incompatibility", "discrepancy", "absurdity"],
    antonyms: ["consistency", "harmony", "congruity"],
    exampleSentence: "There was a humorous incongruity in wearing a tuxedo to a beach picnic.",
    etymology: "Latin 'in-' (not) + 'congruere' (to agree)"
  },
  {
    word: "Inconsequential",
    partOfSpeech: "adjective",
    englishMeaning: "Insignificant or unimportant",
    banglaMeaning: "নগণ্য / গুরুত্বহীন",
    synonyms: ["trivial", "insignificant", "minor", "negligible"],
    antonyms: ["significant", "crucial", "important"],
    exampleSentence: "The missing details were inconsequential to the overall verdict.",
    etymology: "Latin 'in-' (not) + 'consequentia' (consequence)"
  },
  {
    word: "Indigence",
    partOfSpeech: "noun",
    englishMeaning: "Severe poverty or destitution",
    banglaMeaning: "দারিদ্র্য / চরম অভাব",
    synonyms: ["poverty", "destitution", "penury", "privation"],
    antonyms: ["affluence", "wealth", "opulence"],
    exampleSentence: "The welfare organization works to relieve indigence in rural communities.",
    etymology: "Latin 'indigere' (to need, lack)"
  },
  {
    word: "Indolent",
    partOfSpeech: "adjective",
    englishMeaning: "Lazy or avoiding exertion",
    banglaMeaning: "অলস / কুঁড়ে",
    synonyms: ["lazy", "slothful", "idle", "lethargic"],
    antonyms: ["industrious", "diligent", "energetic"],
    exampleSentence: "An indolent student often puts off assignments until the night before.",
    etymology: "Latin 'in-' (not) + 'dolere' (to suffer/feel pain)"
  },
  {
    word: "Inert",
    partOfSpeech: "adjective",
    englishMeaning: "Inactive; lacking power to move or act",
    banglaMeaning: "জড় / নিষ্ক্রিয়",
    synonyms: ["inactive", "passive", "motionless", "quiescent"],
    antonyms: ["active", "dynamic", "lively"],
    exampleSentence: "Noble gases like neon are chemically inert under normal conditions.",
    etymology: "Latin 'iners' (unskilled, inactive)"
  },
  {
    word: "Ingenuous",
    partOfSpeech: "adjective",
    englishMeaning: "Naively trusting, candid, and unsophisticated",
    banglaMeaning: "সরল / অকপট",
    synonyms: ["naive", "candid", "artless", "guileless"],
    antonyms: ["disingenuous", "sly", "sophisticated"],
    exampleSentence: "Her ingenuous nature made it easy for deceivers to manipulate her.",
    etymology: "Latin 'ingenuus' (native, free-born, frank)"
  },
  {
    word: "Inherent",
    partOfSpeech: "adjective",
    englishMeaning: "Firmly established by nature or essential quality",
    banglaMeaning: "সহজাত / অন্তর্নিহিত",
    synonyms: ["intrinsic", "innate", "inborn", "essential"],
    antonyms: ["extrinsic", "acquired", "alien"],
    exampleSentence: "Every mountain climbing expedition carries an inherent risk of injury.",
    etymology: "Latin 'inhaerere' (to stick to, adhere)"
  },
  {
    word: "Innocuous",
    partOfSpeech: "adjective",
    englishMeaning: "Harmless or producing no ill effect",
    banglaMeaning: "ক্ষতিহীন / নির্দোষ",
    synonyms: ["harmless", "benign", "inoffensive", "safe"],
    antonyms: ["harmful", "noxious", "toxic"],
    exampleSentence: "What seemed like an innocuous question upset the interview subject.",
    etymology: "Latin 'in-' (not) + 'nocuus' (harmful)"
  },
  {
    word: "Insipid",
    partOfSpeech: "adjective",
    englishMeaning: "Lacking flavor, zest, or excitement; dull",
    banglaMeaning: "নীরস / স্বাদহীন",
    synonyms: ["bland", "dull", "tasteless", "vapid"],
    antonyms: ["tasty", "piquant", "exciting"],
    exampleSentence: "The hospital food was insipid and needed seasoning.",
    etymology: "Latin 'in-' (not) + 'sapidus' (savory)"
  },
  {
    word: "Intractable",
    partOfSpeech: "adjective",
    englishMeaning: "Unruly, stubborn, or difficult to manage",
    banglaMeaning: "একগুঁয়ে / অবাধ্য",
    synonyms: ["stubborn", "unmanageable", "obstinate", "recalcitrant"],
    antonyms: ["docile", "tractable", "manageable"],
    exampleSentence: "The dispute grew into an intractable problem that arbitration could not resolve.",
    etymology: "Latin 'in-' (not) + 'tractabilis' (manageable)"
  },
  {
    word: "Intransigence",
    partOfSpeech: "noun",
    englishMeaning: "Refusal to compromise or yield",
    banglaMeaning: "একগুঁয়েমি / গোঁড়ামি",
    synonyms: ["stubbornness", "obstinacy", "inflexibility"],
    antonyms: ["flexibility", "compliance", "compromise"],
    exampleSentence: "Political intransigence on both sides caused a government shutdown.",
    etymology: "Spanish 'intransigente' (not compromising)"
  },
  {
    word: "Inundate",
    partOfSpeech: "verb",
    englishMeaning: "Overwhelm with a flood of items or water",
    banglaMeaning: "প্লাবিত করা / উপচে পড়া",
    synonyms: ["flood", "overwhelm", "swamp", "deluge"],
    antonyms: ["drain", "dampen"],
    exampleSentence: "Customer support was inundated with calls after the software update failed.",
    etymology: "Latin 'inundare' (to overflow)"
  },
  {
    word: "Irascible",
    partOfSpeech: "adjective",
    englishMeaning: "Easily angered or irritable",
    banglaMeaning: "একটুতেই রাগে এমন / খিটখিটে",
    synonyms: ["irritable", "cantankerous", "short-tempered", "testy"],
    antonyms: ["placid", "tranquil", "even-tempered"],
    exampleSentence: "The irascible old coach shouted whenever a play went wrong.",
    etymology: "Latin 'irasci' (to grow angry)"
  },
  {
    word: "Laconic",
    partOfSpeech: "adjective",
    englishMeaning: "Brief, concise, and using few words",
    banglaMeaning: "স্বল্পভাষী / সংক্ষিপ্ত",
    synonyms: ["terse", "concise", "succinct", "taciturn"],
    antonyms: ["verbose", "garrulous", "loquacious"],
    exampleSentence: "His laconic reply of 'No' settled the lengthy debate instantly.",
    etymology: "Greek 'Lakonikos' (Spartan, known for terse speech)"
  },
  {
    word: "Lassitude",
    partOfSpeech: "noun",
    englishMeaning: "Weariness, languor, or state of fatigue",
    banglaMeaning: "শ্রান্তি / অবসন্নতা",
    synonyms: ["fatigue", "lethargy", "weariness", "torpor"],
    antonyms: ["vigor", "vitality", "energy"],
    exampleSentence: "A feeling of lassitude descended over the office during the hot summer afternoon.",
    etymology: "Latin 'lassus' (weary)"
  },
  {
    word: "Laud",
    partOfSpeech: "verb",
    englishMeaning: "Praise highly or extol",
    banglaMeaning: "প্রশংসা করা / গুণগান করা",
    synonyms: ["praise", "extol", "commend", "applaud"],
    antonyms: ["condemn", "censure", "criticize"],
    exampleSentence: "Critics laud the author's new novel as a masterpiece of contemporary fiction.",
    etymology: "Latin 'laudare' (to praise)"
  },
  {
    word: "Lethargic",
    partOfSpeech: "adjective",
    englishMeaning: "Drowsy, dull, or lacking energy",
    banglaMeaning: "উদ্যমহীন / অলস",
    synonyms: ["sluggish", "apathetic", "inactive", "somnolent"],
    antonyms: ["energetic", "lively", "alert"],
    exampleSentence: "The medicine left him feeling lethargic for several hours after taking it.",
    etymology: "Greek 'lethe' (forgetfulness) + 'argos' (idle)"
  },
  {
    word: "Loquacious",
    partOfSpeech: "adjective",
    englishMeaning: "Very talkative or wordy",
    banglaMeaning: "বাচাল / অতিকথনপ্রিয়",
    synonyms: ["garrulous", "talkative", "voluble", "chatty"],
    antonyms: ["taciturn", "laconic", "reserved"],
    exampleSentence: "The loquacious host kept guests entertained with endless stories.",
    etymology: "Latin 'loqui' (to speak)"
  },
  {
    word: "Lucid",
    partOfSpeech: "adjective",
    englishMeaning: "Clear, easily understood, or mentally sound",
    banglaMeaning: "স্পষ্ট / সহজবোধ্য",
    synonyms: ["clear", "intelligible", "comprehensible", "rational"],
    antonyms: ["confused", "muddled", "obscure"],
    exampleSentence: "She gave a lucid explanation of complex financial derivatives.",
    etymology: "Latin 'lucidus' (bright, clear)"
  },
  {
    word: "Luminous",
    partOfSpeech: "adjective",
    englishMeaning: "Shining, issuing light, or glowing",
    banglaMeaning: "উজ্জ্বল / আলোকময়",
    synonyms: ["radiant", "glowing", "resplendent", "bright"],
    antonyms: ["dim", "dark", "opaque"],
    exampleSentence: "The night sky was illuminated by a luminous full moon.",
    etymology: "Latin 'lumen' (light)"
  },
  {
    word: "Magnanimity",
    partOfSpeech: "noun",
    englishMeaning: "Generosity and noble-mindedness in forgiving",
    banglaMeaning: "উদারতা / মহানুভবতা",
    synonyms: ["generosity", "nobility", "benevolence", "charity"],
    antonyms: ["meanness", "pettiness", "vindictiveness"],
    exampleSentence: "He showed great magnanimity by forgiving his business partner's costly mistake.",
    etymology: "Latin 'magnus' (great) + 'animus' (soul/mind)"
  },
  {
    word: "Malleable",
    partOfSpeech: "adjective",
    englishMeaning: "Pliant, easily shaped, or impressionable",
    banglaMeaning: "নমনীয় / সহজে রূপান্তরযোগ্য",
    synonyms: ["pliant", "pliable", "flexible", "adaptable"],
    antonyms: ["rigid", "intractable", "stiff"],
    exampleSentence: "Gold is a highly malleable metal that can be beaten into thin sheets.",
    etymology: "Latin 'malleus' (hammer)"
  },
  {
    word: "Maverick",
    partOfSpeech: "noun / adjective",
    englishMeaning: "Rebel, independent thinker, or nonconformist",
    banglaMeaning: "স্বতন্ত্র চিন্তাধারার লোক / একগুঁয়ে প্রথাভাঙ্গা",
    synonyms: ["nonconformist", "individualist", "rebel", "dissident"],
    antonyms: ["conformist", "adherent"],
    exampleSentence: "As a political maverick, she frequently voted against her own party's bills.",
    etymology: "Named after Samuel Maverick, an unbranded-cattle rancher"
  },
  {
    word: "Mendacious",
    partOfSpeech: "adjective",
    englishMeaning: "Lying or habitually dishonest",
    banglaMeaning: "মিথ্যাবাদী / অসত্যবাদী",
    synonyms: ["dishonest", "untruthful", "deceitful", "false"],
    antonyms: ["truthful", "veracious", "honest"],
    exampleSentence: "The tabloid was sued for publishing mendacious claims about the celebrity.",
    etymology: "Latin 'mendax' (lying)"
  },
  {
    word: "Metamorphosis",
    partOfSpeech: "noun",
    englishMeaning: "Complete change of form or structure",
    banglaMeaning: "রূপান্তর / কায়াপালট",
    synonyms: ["transformation", "transmutation", "alteration"],
    antonyms: ["stagnation", "permanence"],
    exampleSentence: "The caterpillar undergoes a complete metamorphosis to become a butterfly.",
    etymology: "Greek 'meta-' (change) + 'morphe' (form)"
  },
  {
    word: "Meticulous",
    partOfSpeech: "adjective",
    englishMeaning: "Excessively careful and painstaking",
    banglaMeaning: "খুঁতখুঁতে / অত্যন্ত সতর্ক",
    synonyms: ["painstaking", "scrupulous", "fastidious", "exacting"],
    antonyms: ["careless", "slapdash", "sloppy"],
    exampleSentence: "The historian performed meticulous research to ensure absolute accuracy.",
    etymology: "Latin 'meticulosus' (fearful, timid)"
  },
  {
    word: "Misanthrope",
    partOfSpeech: "noun",
    englishMeaning: "One who hates or distrusts mankind",
    banglaMeaning: "মানুষবিদ্বেষী",
    synonyms: ["cynic", "misanthropist", "recluse"],
    antonyms: ["philanthropist", "humanitarian"],
    exampleSentence: "Living alone in the wilderness, the old man developed into a bitter misanthrope.",
    etymology: "Greek 'missein' (to hate) + 'anthropos' (man)"
  },
  {
    word: "Mitigate",
    partOfSpeech: "verb",
    englishMeaning: "Appease, moderate, or lessen in severity",
    banglaMeaning: "উপশম করা / হ্রাস করা",
    synonyms: ["alleviate", "assuage", "moderate", "lessen"],
    antonyms: ["aggravate", "exacerbate", "intensify"],
    exampleSentence: "Planting trees helps mitigate the impacts of urban heat islands.",
    etymology: "Latin 'mitis' (soft, mild)"
  },
  {
    word: "Mollify",
    partOfSpeech: "verb",
    englishMeaning: "Soothe, pacify, or soften in temper",
    banglaMeaning: "শান্ত করা / প্রশমিত করা",
    synonyms: ["pacify", "appease", "placate", "soothe"],
    antonyms: ["enrage", "provoke", "incite"],
    exampleSentence: "The manager offered store credit to mollify the dissatisfied shopper.",
    etymology: "Latin 'mollis' (soft)"
  },
  {
    word: "Morose",
    partOfSpeech: "adjective",
    englishMeaning: "Ill-humored, sullen, or melancholy",
    banglaMeaning: "বিষণ্ণ / বিষাদগ্রস্ত",
    synonyms: ["sullen", "gloomy", "melancholy", "dour"],
    antonyms: ["cheerful", "convivial", "buoyant"],
    exampleSentence: "He sat in morose silence after hearing that his team was eliminated.",
    etymology: "Latin 'morosus' (peevish, fastidious)"
  },
  {
    word: "Mundane",
    partOfSpeech: "adjective",
    englishMeaning: "Worldly as opposed to spiritual; everyday",
    banglaMeaning: "জাগতিক / সাধারণ",
    synonyms: ["prosaic", "ordinary", "secular", "everyday"],
    antonyms: ["spiritual", "extraordinary", "heavenly"],
    exampleSentence: "After an exciting vacation, returning to mundane household chores felt dull.",
    etymology: "Latin 'mundus' (world)"
  },
  {
    word: "Negate",
    partOfSpeech: "verb",
    englishMeaning: "Cancel out, nullify, or deny",
    banglaMeaning: "বাতিল করা / নাকচ করা",
    synonyms: ["nullify", "invalidate", "neutralize", "undo"],
    antonyms: ["confirm", "validate", "affirm"],
    exampleSentence: "One careless mistake can negate weeks of hard work.",
    etymology: "Latin 'negare' (to deny)"
  },
  {
    word: "Neophyte",
    partOfSpeech: "noun",
    englishMeaning: "Recent convert or beginner",
    banglaMeaning: "নবীন / শিক্ষানবিস",
    synonyms: ["novice", "beginner", "tyro", "fledgling"],
    antonyms: ["veteran", "expert", "master"],
    exampleSentence: "As a neophyte in chess, he blundered his queen in the first ten moves.",
    etymology: "Greek 'neos' (new) + 'phyton' (plant, grown)"
  },
  {
    word: "Obdurate",
    partOfSpeech: "adjective",
    englishMeaning: "Stubborn, unyielding, and hardhearted",
    banglaMeaning: "একগুঁয়ে / কঠোরহৃদয়",
    synonyms: ["obstinate", "stubborn", "unyielding", "callous"],
    antonyms: ["flexible", "yielding", "tractable"],
    exampleSentence: "Despite overwhelming evidence, the suspect remained obdurate in his denial.",
    etymology: "Latin 'obdurare' (to harden)"
  },
  {
    word: "Obsequious",
    partOfSpeech: "adjective",
    englishMeaning: "Lavishly attentive, servile, or sycophantic",
    banglaMeaning: "চাটুকার / দাসসুলভ",
    synonyms: ["servile", "sycophantic", "fawning", "subservient"],
    antonyms: ["assertive", "domineering", "independent"],
    exampleSentence: "The obsequious waiter bowed low every time he refilled our water glasses.",
    etymology: "Latin 'obsequi' (to comply with, follow)"
  },
  {
    word: "Obviate",
    partOfSpeech: "verb",
    englishMeaning: "Make unnecessary or prevent problems",
    banglaMeaning: "অপ্রয়োজনীয় করা / দূর করা",
    synonyms: ["preclude", "prevent", "avert", "eliminate"],
    antonyms: ["necessitate", "require", "cause"],
    exampleSentence: "Proper maintenance will obviate the need for expensive structural repairs later.",
    etymology: "Latin 'obviam' (in the way)"
  },
  {
    word: "Occlude",
    partOfSpeech: "verb",
    englishMeaning: "Shut, close, or block a passage",
    banglaMeaning: "বন্ধ করা / অবরুদ্ধ করা",
    synonyms: ["block", "obstruct", "close", "clog"],
    antonyms: ["open", "unblock", "clear"],
    exampleSentence: "A blood clot can occlude an artery, causing a major medical emergency.",
    etymology: "Latin 'occludere' (to shut up)"
  },
  {
    word: "Officious",
    partOfSpeech: "adjective",
    englishMeaning: "Meddlesome or pushy in offering unwanted help",
    banglaMeaning: "অনধিকারচর্চী / আগ বাড়িয়ে সাহায্য করতে চাওয়া",
    synonyms: ["meddlesome", "intrusive", "pushy", "interfering"],
    antonyms: ["unobtrusive", "reserved"],
    exampleSentence: "An officious usher kept bothering patrons about minor seat adjustments.",
    etymology: "Latin 'officiosus' (obliging, dutiful)"
  },
  {
    word: "Onerous",
    partOfSpeech: "adjective",
    englishMeaning: "Burdensome, heavy, or oppressive",
    banglaMeaning: "গুরুভার / কষ্টসাধ্য",
    synonyms: ["burdensome", "taxing", "arduous", "oppressive"],
    antonyms: ["light", "easy", "effortless"],
    exampleSentence: "Filing taxes can be an onerous task without accounting software.",
    etymology: "Latin 'onus' (burden)"
  },
  {
    word: "Opprobrium",
    partOfSpeech: "noun",
    englishMeaning: "Disgrace, infamy, or harsh criticism",
    banglaMeaning: "অপমান / কলঙ্ক",
    synonyms: ["disgrace", "ignominy", "infamy", "obloquy"],
    antonyms: ["honor", "praise", "acclaim"],
    exampleSentence: "The corrupt official faced public opprobrium after his crimes were broadcast.",
    etymology: "Latin 'obprobrare' (to reproach)"
  },
  {
    word: "Oscillate",
    partOfSpeech: "verb",
    englishMeaning: "Vibrate, waver, or swing back and forth",
    banglaMeaning: "দুলতে থাকা / ওঠানামা করা",
    synonyms: ["fluctuate", "waver", "swing", "vacillate"],
    antonyms: ["stabilize", "remain steady"],
    exampleSentence: "Her mood seemed to oscillate between excitement and severe doubt.",
    etymology: "Latin 'oscillare' (to swing)"
  },
  {
    word: "Ostentatious",
    partOfSpeech: "adjective",
    englishMeaning: "Showy, pretentious, trying to attract attention",
    banglaMeaning: "আড়ম্বরপূর্ণ / লোকদেখানো",
    synonyms: ["showy", "pretentious", "flamboyant", "gaudy"],
    antonyms: ["modest", "understated", "unobtrusive"],
    exampleSentence: "Wearing a diamond-encrusted watch to a casual lunch seemed ostentatious.",
    etymology: "Latin 'ostentare' (to display)"
  },
  {
    word: "Paragon",
    partOfSpeech: "noun",
    englishMeaning: "Model of perfection or supreme excellence",
    banglaMeaning: "উত্তম দৃষ্টান্ত / আদর্শ নিদর্শন",
    synonyms: ["epitome", "archetype", "exemplar", "ideal"],
    antonyms: ["flawed example", "imperfection"],
    exampleSentence: "She was considered a paragon of virtue and integrity in her community.",
    etymology: "Italian 'paragone' (touchstone to test gold)"
  },
  {
    word: "Partisan",
    partOfSpeech: "adjective / noun",
    englishMeaning: "One-sided, prejudiced, or committed to a party",
    banglaMeaning: "পক্ষপাতদুষ্ট / অন্ধ সমর্থক",
    synonyms: ["biased", "prejudiced", "sectarian", "factional"],
    antonyms: ["impartial", "unbiased", "nonpartisan"],
    exampleSentence: "Partisan bickering delayed the passage of the national infrastructure bill.",
    etymology: "Italian 'partigiano' (member of a faction)"
  },
  {
    word: "Paucity",
    partOfSpeech: "noun",
    englishMeaning: "Scarcity or smallness of quantity",
    banglaMeaning: "স্বল্পতা / ঘাটতি",
    synonyms: ["scarcity", "dearth", "shortage", "lack"],
    antonyms: ["abundance", "plethora", "surplus"],
    exampleSentence: "The paucity of evidence led the judge to dismiss the case.",
    etymology: "Latin 'paucus' (few)"
  },
  {
    word: "Pedantic",
    partOfSpeech: "adjective",
    englishMeaning: "Showy about learning; excessively bookish",
    banglaMeaning: "পণ্ডিতম্মন্য / নিয়মকানুনে খিটখিটে",
    synonyms: ["fastidious", "academic", "bookish", "punctilious"],
    antonyms: ["informal", "imprecise"],
    exampleSentence: "The professor's pedantic style bored students who wanted practical insights.",
    etymology: "Italian 'pedante' (teacher, pedagogue)"
  },
  {
    word: "Penchant",
    partOfSpeech: "noun",
    englishMeaning: "Strong inclination, liking, or leaning",
    banglaMeaning: "ঝোঁক / আসক্তি",
    synonyms: ["predilection", "affinity", "fondness", "inclination"],
    antonyms: ["aversion", "dislike", "antipathy"],
    exampleSentence: "He has a penchant for collecting rare vintage vinyl records.",
    etymology: "French 'pencher' (to incline/lean)"
  },
  {
    word: "Penury",
    partOfSpeech: "noun",
    englishMeaning: "Severe poverty or extreme stinginess",
    banglaMeaning: "চরম দারিদ্র্য",
    synonyms: ["destitution", "indigence", "poverty", "want"],
    antonyms: ["wealth", "affluence", "opulence"],
    exampleSentence: "He rose from childhood penury to become one of the city's top philanthropists.",
    etymology: "Latin 'penuria' (want, scarcity)"
  },
  {
    word: "Perennial",
    partOfSpeech: "adjective",
    englishMeaning: "Long-lasting or continually recurring",
    banglaMeaning: "বহুবর্ষজীবী / চিরস্থায়ী",
    synonyms: ["enduring", "everlasting", "perpetual", "abiding"],
    antonyms: ["ephemeral", "transient", "fleeting"],
    exampleSentence: "Traffic congestion remains a perennial complaint among metropolitan commuters.",
    etymology: "Latin 'per-' (throughout) + 'annus' (year)"
  },
  {
    word: "Perfidious",
    partOfSpeech: "adjective",
    englishMeaning: "Treacherous or disloyal",
    banglaMeaning: "বিশ্বাসঘাতক / অবিশ্বস্ত",
    synonyms: ["treacherous", "deceitful", "disloyal", "traitorous"],
    antonyms: ["faithful", "loyal", "trustworthy"],
    exampleSentence: "The villain's perfidious plot involved betraying his closest ally.",
    etymology: "Latin 'perfidia' (faithlessness)"
  },
  {
    word: "Perfunctory",
    partOfSpeech: "adjective",
    englishMeaning: "Superficial, done routinely without care or interest",
    banglaMeaning: "অবহেলা ভরে করা / নিয়মরক্ষার্থ",
    synonyms: ["cursory", "hasty", "casual", "superficial"],
    antonyms: ["thorough", "meticulous", "attentive"],
    exampleSentence: "He gave a perfunctory nod without breaking his gaze from his phone screen.",
    etymology: "Latin 'perfungi' (to discharge or perform carelessly)"
  },
  {
    word: "Permeable",
    partOfSpeech: "adjective",
    englishMeaning: "Penetrable or porous to liquids/gases",
    banglaMeaning: "প্রবেশ্য / ভেদ্য",
    synonyms: ["porous", "penetrable", "pervious"],
    antonyms: ["impermeable", "impervious"],
    exampleSentence: "Sandstone is a permeable rock that allows groundwater to seep through.",
    etymology: "Latin 'permeare' (to pass through)"
  },
  {
    word: "Pervasive",
    partOfSpeech: "adjective",
    englishMeaning: "Spread throughout every part",
    banglaMeaning: "সর্বব্যাপী / বিস্তৃত",
    synonyms: ["ubiquitous", "omnipresent", "widespread", "pervading"],
    antonyms: ["localized", "confined", "limited"],
    exampleSentence: "The pervasive scent of blooming jasmine filled the evening air.",
    etymology: "Latin 'pervadere' (to go through, spread)"
  },
  {
    word: "Phlegmatic",
    partOfSpeech: "adjective",
    englishMeaning: "Calm, unemotional, not easily excited",
    banglaMeaning: "শান্ত / আবেগহীন",
    synonyms: ["unemotional", "stolid", "placid", "impassive"],
    antonyms: ["excitable", "passionate", "emotional"],
    exampleSentence: "His phlegmatic disposition kept him calm even during chaotic office crises.",
    etymology: "Greek 'phlegmatikos' (phlegm-dominated temperament)"
  },
  {
    word: "Piety",
    partOfSpeech: "noun",
    englishMeaning: "Devoutness and religious reverence",
    banglaMeaning: "ধর্মপরায়ণতা / ভক্তি",
    synonyms: ["devoutness", "reverence", "godliness", "piety"],
    antonyms: ["impiety", "irreverence"],
    exampleSentence: "Her deep piety was evident in her daily prayers and charitable donations.",
    etymology: "Latin 'pietas' (dutiful conduct, devotion)"
  },
  {
    word: "Placate",
    partOfSpeech: "verb",
    englishMeaning: "Pacify, soothe, or conciliate",
    banglaMeaning: "শান্ত করা / তুষ্ট করা",
    synonyms: ["pacify", "appease", "mollify", "mollify"],
    antonyms: ["provoke", "enrage", "incite"],
    exampleSentence: "They sent flowers to placate her after missing her birthday party.",
    etymology: "Latin 'placare' (to quiet, appease)"
  },
  {
    word: "Plasticity",
    partOfSpeech: "noun",
    englishMeaning: "Ability to be molded or shaped",
    banglaMeaning: "নমনীয়তা / রূপান্তরযোগ্যতা",
    synonyms: ["malleability", "flexibility", "pliancy"],
    antonyms: ["rigidity", "inflexibility"],
    exampleSentence: "Neuroscientists study brain plasticity to see how neural pathways adapt to injury.",
    etymology: "Greek 'plastikos' (fit for molding)"
  },
  {
    word: "Platitude",
    partOfSpeech: "noun",
    englishMeaning: "Trite remark or commonplace statement",
    banglaMeaning: "তুচ্ছ বা মামুলি উক্তি",
    synonyms: ["cliché", "banality", "truism", "bromide"],
    antonyms: ["profound insight", "original thought"],
    exampleSentence: "Instead of practical advice, his speech was full of empty platitudes.",
    etymology: "French 'plat' (flat)"
  },
  {
    word: "Plethora",
    partOfSpeech: "noun",
    englishMeaning: "Excess or overwhelming overabundance",
    banglaMeaning: "আধিক্য / প্রাচুর্য",
    synonyms: ["surplus", "excess", "superabundance", "glut"],
    antonyms: ["dearth", "scarcity", "paucity"],
    exampleSentence: "The restaurant menu offered a plethora of options, making it hard to choose.",
    etymology: "Greek 'plethora' (fullness)"
  },
  {
    word: "Plummet",
    partOfSpeech: "verb",
    englishMeaning: "Fall sharply and rapidly",
    banglaMeaning: "খাড়াভাবে দ্রুত নিচে পড়া",
    synonyms: ["plunge", "nosedive", "tumble", "drop"],
    antonyms: ["soar", "skyrocket", "ascend"],
    exampleSentence: "Stock prices plummeted after news of the regulatory fine broke.",
    etymology: "Old French 'plomet' (lead sounding weight)"
  },
  {
    word: "Pragmatic",
    partOfSpeech: "adjective",
    englishMeaning: "Practical as opposed to idealistic",
    banglaMeaning: "বাস্তবসম্মত / প্রয়োগিক",
    synonyms: ["practical", "sensible", "expedient", "realistic"],
    antonyms: ["idealistic", "impractical", "visionary"],
    exampleSentence: "They needed a pragmatic solution rather than theoretical policy models.",
    etymology: "Greek 'pragma' (deed, act)"
  },
  {
    word: "Preamble",
    partOfSpeech: "noun",
    englishMeaning: "Introductory statement or preface",
    banglaMeaning: "প্রস্তাবনা / ভূমিকা",
    synonyms: ["introduction", "preface", "prologue", "prelude"],
    antonyms: ["epilogue", "postscript"],
    exampleSentence: "The preamble to the constitution outlines the core founding principles.",
    etymology: "Latin 'prae' (before) + 'ambulare' (to walk)"
  },
  {
    word: "Precarious",
    partOfSpeech: "adjective",
    englishMeaning: "Uncertain, risky, or dangerously unstable",
    banglaMeaning: "ঝুঁকিপূর্ণ / অনিশ্চিত",
    synonyms: ["perilous", "hazardous", "insecure", "risky"],
    antonyms: ["secure", "stable", "safe"],
    exampleSentence: "The mountain climber balanced on a precarious ledge overlooking the cliff.",
    etymology: "Latin 'precarius' (obtained by entreaty/prayer, uncertain)"
  },
  {
    word: "Precipitate",
    partOfSpeech: "adjective / verb",
    englishMeaning: "Rash, premature, hasty; or to cause suddenly",
    banglaMeaning: "ত্বরান্বিত করা / অতি দ্রুত ও অবিবেচকের মতো",
    synonyms: ["hasty", "impetuous", "rash", "headlong"],
    antonyms: ["deliberate", "gradual", "cautious"],
    exampleSentence: "Their precipitate decision to sell the house led to financial regret.",
    etymology: "Latin 'praeceps' (headlong)"
  },
  {
    word: "Precursor",
    partOfSpeech: "noun",
    englishMeaning: "Forerunner or predecessor",
    banglaMeaning: "পূর্বসূরী / অগ্রদূত",
    synonyms: ["forerunner", "predecessor", "harbinger", "pioneer"],
    antonyms: ["successor", "follower"],
    exampleSentence: "The horse-drawn carriage was the direct precursor to the modern automobile.",
    etymology: "Latin 'prae' (before) + 'currere' (to run)"
  },
  {
    word: "Presumptuous",
    partOfSpeech: "adjective",
    englishMeaning: "Arrogant, taking liberties, or overstepping bounds",
    banglaMeaning: "উদ্ধত / স্পর্ধিত",
    synonyms: ["arrogant", "insolent", "overbold", "audacious"],
    antonyms: ["diffident", "modest", "respectful"],
    exampleSentence: "It was presumptuous of him to speak on behalf of the entire committee.",
    etymology: "Latin 'praesumere' (to take beforehand)"
  },
  {
    word: "Prevaricate",
    partOfSpeech: "verb",
    englishMeaning: "Lie or evade the truth by quibbling",
    banglaMeaning: "সত্য এড়িয়ে যাওয়া / ছলাকলা করা",
    synonyms: ["equivocate", "quibble", "hedge", "deceive"],
    antonyms: ["speak truth", "be direct"],
    exampleSentence: "Under cross-examination, the witness began to prevaricate.",
    etymology: "Latin 'prae-' (before) + 'varicare' (straddle, walk crooked)"
  },
  {
    word: "Pristine",
    partOfSpeech: "adjective",
    englishMeaning: "Unspoiled, pure, or in original condition",
    banglaMeaning: "আদিম / নিখুঁত / নিষ্কলঙ্ক",
    synonyms: ["immaculate", "unspoiled", "pure", "virgin"],
    antonyms: ["polluted", "corrupted", "sullied"],
    exampleSentence: "The island's pristine beaches attracted eco-tourists from around the world.",
    etymology: "Latin 'pristinus' (former, original)"
  },
  {
    word: "Probity",
    partOfSpeech: "noun",
    englishMeaning: "Complete uprightness, integrity, and honesty",
    banglaMeaning: "সততা / ন্যায়পরায়ণতা",
    synonyms: ["integrity", "honesty", "uprightness", "rectitude"],
    antonyms: ["dishonesty", "corruption", "knavery"],
    exampleSentence: "The judge was famous for her unimpeachable probity and impartiality.",
    etymology: "Latin 'probitas' (goodness, honesty)"
  },
  {
    word: "Problematic",
    partOfSpeech: "adjective",
    englishMeaning: "Doubtful, perplexing, or open to question",
    banglaMeaning: "সমস্যাসংকুল / সন্দেহজনক",
    synonyms: ["questionable", "doubtful", "perplexing", "uncertain"],
    antonyms: ["unquestionable", "clear-cut", "certain"],
    exampleSentence: "The lack of funding makes the project's timeline highly problematic.",
    etymology: "Greek 'problema' (task, difficulty)"
  },
  {
    word: "Prodigal",
    partOfSpeech: "adjective / noun",
    englishMeaning: "Wasteful, reckless with money, or lavish",
    banglaMeaning: "অপব্যয়ী / উড়নচণ্ডী",
    synonyms: ["wasteful", "extravagant", "profligate", "spendthrift"],
    antonyms: ["frugal", "parsimonious", "thrifty"],
    exampleSentence: "His prodigal spending quickly depleted his family inheritance.",
    etymology: "Latin 'prodigus' (lavish, wasteful)"
  },
  {
    word: "Profound",
    partOfSpeech: "adjective",
    englishMeaning: "Deep, insightful, or far-reaching",
    banglaMeaning: "গভীর / প্রগাঢ়",
    synonyms: ["deep", "insightful", "intense", "far-reaching"],
    antonyms: ["superficial", "shallow", "trivial"],
    exampleSentence: "The discovery had a profound impact on our understanding of biology.",
    etymology: "Latin 'profundus' (deep)"
  },
  {
    word: "Prohibitive",
    partOfSpeech: "adjective",
    englishMeaning: "Tending to prevent or excessively high (costs)",
    banglaMeaning: "নিবারক / অত্যধিক চড়া (দাম)",
    synonyms: ["exorbitant", "excessive", "restrictive", "forbidding"],
    antonyms: ["affordable", "reasonable", "permissive"],
    exampleSentence: "The prohibitive cost of tuition prevented many students from enrolling.",
    etymology: "Latin 'prohibere' (to hold back, forbid)"
  },
  {
    word: "Proliferate",
    partOfSpeech: "verb",
    englishMeaning: "Grow rapidly, multiply, or spread",
    banglaMeaning: "দ্রুত বংশবৃদ্ধি বা বিস্তার করা",
    synonyms: ["multiply", "mushroom", "burgeon", "escalate"],
    antonyms: ["dwindle", "decrease", "decline"],
    exampleSentence: "Tech incubators caused startups to proliferate across the city.",
    etymology: "Latin 'proles' (offspring) + 'ferre' (to bear)"
  },
  {
    word: "Propensity",
    partOfSpeech: "noun",
    englishMeaning: "Natural inclination or tendency",
    banglaMeaning: "প্রবৃত্তি / প্রবণতা",
    synonyms: ["tendency", "inclination", "predisposition", "penchant"],
    antonyms: ["aversion", "disinclination"],
    exampleSentence: "He has an unfortunate propensity to interrupt others during debate.",
    etymology: "Latin 'propensus' (hanging forward, inclined)"
  },
  {
    word: "Propitiate",
    partOfSpeech: "verb",
    englishMeaning: "Appease or win the favor of someone",
    banglaMeaning: "দেবতা বা ব্যক্তিকে প্রসন্ন করা",
    synonyms: ["appease", "conciliate", "placate", "mollify"],
    antonyms: ["provoke", "anger", "antagonize"],
    exampleSentence: "Ancient tribes offered sacrifices to propitiate angry gods.",
    etymology: "Latin 'propitius' (favorable, gracious)"
  },
  {
    word: "Propriety",
    partOfSpeech: "noun",
    englishMeaning: "Correct conduct and adherence to standards",
    banglaMeaning: "যথার্থতা / শিষ্টাচার",
    synonyms: ["decorum", "decorousness", "suitability", "correctness"],
    antonyms: ["impropriety", "indecency"],
    exampleSentence: "The diplomat acted with flawless propriety during the state dinner.",
    etymology: "Latin 'proprietas' (ownership, fitness)"
  },
  {
    word: "Proscribe",
    partOfSpeech: "verb",
    englishMeaning: "Outlaw, banish, or prohibit legally",
    banglaMeaning: "সমাজচ্যুত করা / নিষিদ্ধ করা",
    synonyms: ["prohibit", "ban", "outlaw", "forbid"],
    antonyms: ["prescribe", "allow", "permit"],
    exampleSentence: "Regulations proscribe the disposal of hazardous chemicals into waterways.",
    etymology: "Latin 'proscribere' (publish in writing, outlaw)"
  },
  {
    word: "Pungent",
    partOfSpeech: "adjective",
    englishMeaning: "Stinging, sharp in taste or smell, or biting",
    banglaMeaning: "ঝাঁঝালো / কটু",
    synonyms: ["sharp", "biting", "caustic", "piquant"],
    antonyms: ["bland", "mild", "insipid"],
    exampleSentence: "The pungent aroma of roasted garlic filled the entire kitchen.",
    etymology: "Latin 'pungere' (to prick)"
  },
  {
    word: "Qualified",
    partOfSpeech: "adjective",
    englishMeaning: "Limited, restricted, or conditional",
    banglaMeaning: "শর্তাধীন / সীমিত",
    synonyms: ["conditional", "restricted", "limited", "bounded"],
    antonyms: ["unqualified", "absolute", "unconditional"],
    exampleSentence: "The committee gave a qualified endorsement of the proposal, demanding revisions.",
    etymology: "Latin 'qualificare' (to attribute quality)"
  },
  {
    word: "Quibble",
    partOfSpeech: "verb / noun",
    englishMeaning: "Raise minor objections or evade the truth",
    banglaMeaning: "খুঁত ধরা / সামান্য বিষয় নিয়ে তর্ক করা",
    synonyms: ["cavil", "carp", "nitpick", "bicker"],
    antonyms: ["agree completely", "concede"],
    exampleSentence: "Let us not quibble over tiny details when the overall plan is sound.",
    etymology: "Diminutive of Latin 'quib' (a play on words)"
  },
  {
    word: "Quiescent",
    partOfSpeech: "adjective",
    englishMeaning: "At rest, dormant, or temporarily inactive",
    banglaMeaning: "নিষ্ক্রিয় / সুপ্ত",
    synonyms: ["dormant", "inactive", "latent", "tranquil"],
    antonyms: ["active", "dynamic", "restless"],
    exampleSentence: "The volcano remained quiescent for centuries before violently erupting.",
    etymology: "Latin 'quiescere' (to rest)"
  },
  {
    word: "Rarefied",
    partOfSpeech: "adjective",
    englishMeaning: "Made less dense; esoteric or refined",
    banglaMeaning: "লঘু / বিরল / উচ্চমার্গীয়",
    synonyms: ["thin", "attenuated", "esoteric", "exalted"],
    antonyms: ["dense", "thick", "common"],
    exampleSentence: "High-altitude mountaineers adjust to breathing rarefied air near summits.",
    etymology: "Latin 'rarus' (rare) + 'facere' (to make)"
  },
  {
    word: "Recalcitrant",
    partOfSpeech: "adjective",
    englishMeaning: "Obstinately stubborn and resistant to authority",
    banglaMeaning: "ঘাড়ত্যাড়া / অবাধ্য",
    synonyms: ["refractory", "unruly", "defiant", "obstinate"],
    antonyms: ["obedient", "compliant", "docile"],
    exampleSentence: "The recalcitrant child refused to sit down despite repeated requests.",
    etymology: "Latin 'recalcitrare' (to kick back)"
  },
  {
    word: "Recant",
    partOfSpeech: "verb",
    englishMeaning: "Disclaim or retract a previous statement",
    banglaMeaning: "আগের মতামত প্রত্যাহার করা",
    synonyms: ["retract", "disavow", "repudiate", "withdraw"],
    antonyms: ["reaffirm", "assert", "maintain"],
    exampleSentence: "Under pressure, the witness chose to recant his prior testimony.",
    etymology: "Latin 're-' (back) + 'cantare' (to sing)"
  },
  {
    word: "Recluse",
    partOfSpeech: "noun / adjective",
    englishMeaning: "Hermit or person living in solitude",
    banglaMeaning: "নির্জনবাসী / একাকী",
    synonyms: ["hermit", "solitary", "anchorite", "misanthrope"],
    antonyms: ["socialite", "extrovert"],
    exampleSentence: "The famous author lived as a recluse on a secluded island.",
    etymology: "Latin 'recludere' (to shut up, enclose)"
  },
  {
    word: "Recondite",
    partOfSpeech: "adjective",
    englishMeaning: "Abstruse, profound, or hidden from view",
    banglaMeaning: "দুর্বোধ / গূঢ়",
    synonyms: ["esoteric", "abstruse", "arcane", "obscure"],
    antonyms: ["simple", "exoteric", "obvious"],
    exampleSentence: "He spent decades investigating recondite aspects of medieval theology.",
    etymology: "Latin 'recondere' (to hide away)"
  },
  {
    word: "Refractory",
    partOfSpeech: "adjective",
    englishMeaning: "Unmanageable, stubborn, or resistant to heat/treatment",
    banglaMeaning: "দুরন্ত / অবাধ্য",
    synonyms: ["recalcitrant", "stubborn", "unruly", "headstrong"],
    antonyms: ["manageable", "docile", "compliant"],
    exampleSentence: "The refractory infection required a combination of strong antibiotics.",
    etymology: "Latin 'refractarius' (stubborn, refractory)"
  },
  {
    word: "Refute",
    partOfSpeech: "verb",
    englishMeaning: "Disprove or prove to be false",
    banglaMeaning: "যুক্তি খণ্ডন করা / মিথ্যা প্রমাণ করা",
    synonyms: ["disprove", "rebut", "confute", "gainsay"],
    antonyms: ["confirm", "validate", "support"],
    exampleSentence: "The researcher published data that served to refute the popular hypothesis.",
    etymology: "Latin 'refutare' (to repel, drive back)"
  },
  {
    word: "Relegate",
    partOfSpeech: "verb",
    englishMeaning: "Banish or assign to an inferior position",
    banglaMeaning: "নিম্নপদে নামানো / নির্বাসিত করা",
    synonyms: ["demote", "downgrade", "banish", "degrade"],
    antonyms: ["promote", "elevate", "upgrade"],
    exampleSentence: "If the soccer team loses today, they will be relegated to a lower division.",
    etymology: "Latin 'relegare' (to send away)"
  },
  {
    word: "Reproach",
    partOfSpeech: "verb / noun",
    englishMeaning: "Express disapproval or disappointment",
    banglaMeaning: "তিরস্কার করা / দোষারোপ",
    synonyms: ["scold", "admonish", "reprehend", "censure"],
    antonyms: ["praise", "commend", "flatter"],
    exampleSentence: "Her father looked at her with reproach after she arrived late.",
    etymology: "Old French 'reprochier' (to bring back near)"
  },
  {
    word: "Reprobate",
    partOfSpeech: "noun / adjective",
    englishMeaning: "Unprincipled or morally unprincipled person",
    banglaMeaning: "দুশ্চরিত্র / নীতিহীন ব্যক্তি",
    synonyms: ["rogue", "scoundrel", "miscreant", "profligate"],
    antonyms: ["paragon", "saint", "virtuous person"],
    exampleSentence: "The novel's antagonist was an unrepentant reprobate who betrayed everyone.",
    etymology: "Latin 'reprobare' (to disapprove, reject)"
  },
  {
    word: "Repudiate",
    partOfSpeech: "verb",
    englishMeaning: "Disown, disavow, or reject strongly",
    banglaMeaning: "অস্বীকার করা / প্রত্যাখ্যান করা",
    synonyms: ["reject", "disavow", "recant", "renounce"],
    antonyms: ["accept", "embrace", "sanction"],
    exampleSentence: "The politician was forced to repudiate his former controversial statements.",
    etymology: "Latin 'repudium' (divorce, rejection)"
  },
  {
    word: "Rescind",
    partOfSpeech: "verb",
    englishMeaning: "Cancel, repeal, or void an agreement/law",
    banglaMeaning: "বাতিল করা / রদ করা",
    synonyms: ["revoke", "repeal", "annul", "nullify"],
    antonyms: ["enact", "ratify", "enforce"],
    exampleSentence: "The board decided to rescind the rule after widespread community complaints.",
    etymology: "Latin 'rescindere' (to cut off, annul)"
  },
  {
    word: "Resolution",
    partOfSpeech: "noun",
    englishMeaning: "Determination, or formal decision made by a body",
    banglaMeaning: "সংকল্প / প্রস্তাব",
    synonyms: ["resolve", "firmness", "determination", "decree"],
    antonyms: ["indecision", "irresolution"],
    exampleSentence: "She faced challenges with unwavering resolution to complete her degree.",
    etymology: "Latin 'resolvere' (to loosen, solve)"
  },
  {
    word: "Reticent",
    partOfSpeech: "adjective",
    englishMeaning: "Reserved, uncommunicative, inclined to silence",
    banglaMeaning: "স্বল্পভাষী / মুখচোরা",
    synonyms: ["reserved", "taciturn", "uncommunicative", "quiet"],
    antonyms: ["talkative", "garrulous", "voluble"],
    exampleSentence: "The celebrity was reticent regarding details of her personal life.",
    etymology: "Latin 'reticere' (to be silent)"
  },
  {
    word: "Reverent",
    partOfSpeech: "adjective",
    englishMeaning: "Showing deep respect and awe",
    banglaMeaning: "শ্রদ্ধাশীল / ভক্তিময়",
    synonyms: ["respectful", "worshipful", "devout", "awestruck"],
    antonyms: ["irreverent", "disrespectful"],
    exampleSentence: "A reverent hush fell over the crowd as the ancient relic was displayed.",
    etymology: "Latin 'revereri' (to stand in awe of)"
  },
  {
    word: "Sage",
    partOfSpeech: "noun / adjective",
    englishMeaning: "Person celebrated for wisdom; wise",
    banglaMeaning: "জ্ঞানবৃদ্ধ / জ্ঞানী ব্যক্তি",
    synonyms: ["wise", "philosopher", "guru", "sagacious"],
    antonyms: ["fool", "foolish"],
    exampleSentence: "Villagers sought the sage's guidance during times of tribal hardship.",
    etymology: "Latin 'sapere' (to be wise)"
  },
  {
    word: "Salubrious",
    partOfSpeech: "adjective",
    englishMeaning: "Healthful or promoting health/well-being",
    banglaMeaning: "স্বাস্থ্যকর / স্বাস্থ্যপ্রদ",
    synonyms: ["healthful", "wholesome", "salutary", "beneficial"],
    antonyms: ["unhealthful", "insalubrious", "noxious"],
    exampleSentence: "Mountain climate is often prized for its fresh and salubrious air.",
    etymology: "Latin 'salus' (health)"
  },
  {
    word: "Sanction",
    partOfSpeech: "verb / noun",
    englishMeaning: "Approve/ratify; or impose penalty against",
    banglaMeaning: "অনুমোদন দেওয়া / শাস্তি বা নিষেধাজ্ঞা আরোপ",
    synonyms: ["approve", "authorize", "penalize", "endorse"],
    antonyms: ["prohibit", "disapprove", "ban"],
    exampleSentence: "The government voted to sanction the trade agreement after months of talks.",
    etymology: "Latin 'sancire' (to ratify, make sacred)"
  },
  {
    word: "Satiate",
    partOfSpeech: "verb",
    englishMeaning: "Satisfy fully or surfeit to excess",
    banglaMeaning: "সম্পূর্ণ পরিতৃপ্ত করা",
    synonyms: ["satisfy", "surfeit", "gorge", "glut"],
    antonyms: ["starve", "deprive"],
    exampleSentence: "A heavy five-course feast was more than enough to satiate their hunger.",
    etymology: "Latin 'satis' (enough)"
  },
  {
    word: "Savor",
    partOfSpeech: "verb",
    englishMeaning: "Enjoy thoroughly or relish a taste/experience",
    banglaMeaning: "আস্বাদন করা / উপভোগ করা",
    synonyms: ["relish", "enjoy", "appreciate", "taste"],
    antonyms: ["dislike", "loathe"],
    exampleSentence: "She paused to savor the victory before stepping onto the winner's podium.",
    etymology: "Latin 'sapere' (to taste, be wise)"
  },
  {
    word: "Secrete",
    partOfSpeech: "verb",
    englishMeaning: "Produce/release substance; or hide away",
    banglaMeaning: "ক্ষরণ করা / গোপনে লুকিয়ে রাখা",
    synonyms: ["exude", "release", "conceal", "stash"],
    antonyms: ["absorb", "reveal", "expose"],
    exampleSentence: "Glands secrete hormones directly into the bloodstream.",
    etymology: "Latin 'secernere' (to separate, hide)"
  },
  {
    word: "Shard",
    partOfSpeech: "noun",
    englishMeaning: "Broken fragment of pottery or glass",
    banglaMeaning: "ভাঙা টুকরো (কাচ/মাটি)",
    synonyms: ["fragment", "sliver", "splinter", "shard"],
    antonyms: ["whole object"],
    exampleSentence: "Archaeologists recovered ancient ceramic shards from the excavation pit.",
    etymology: "Old English 'sceard' (notch, gap, fragment)"
  },
  {
    word: "Skeptic",
    partOfSpeech: "noun",
    englishMeaning: "Doubter who suspends judgment until evidence is shown",
    banglaMeaning: "সন্দেহবাদী",
    synonyms: ["doubter", "cynic", "questioner", "scoffer"],
    antonyms: ["believer", "trusting person"],
    exampleSentence: "As a skeptic, she insisted on reviewing raw laboratory data before believing the claim.",
    etymology: "Greek 'skeptikos' (thoughtful, inquiring)"
  },
  {
    word: "Solicitous",
    partOfSpeech: "adjective",
    englishMeaning: "Anxious, concerned, or eager to help",
    banglaMeaning: "উদ্বিগ্ন / যত্নশীল",
    synonyms: ["concerned", "caring", "attentive", "mindful"],
    antonyms: ["unconcerned", "indifferent", "careless"],
    exampleSentence: "The host was remarkably solicitous, ensuring every guest was comfortable.",
    etymology: "Latin 'sollicitus' (agitated, anxious)"
  },
  {
    word: "Soporific",
    partOfSpeech: "adjective / noun",
    englishMeaning: "Sleep-causing or inducing drowsiness",
    banglaMeaning: "ঘুমপাড়ানি / তন্দ্রাচ্ছন্নকারী",
    synonyms: ["somnolent", "sedative", "sleep-inducing", "calming"],
    antonyms: ["stimulating", "invigorating", "excitatory"],
    exampleSentence: "The monotonous tone of the lecture had a soporific effect on students.",
    etymology: "Latin 'sopor' (deep sleep) + 'facere' (to make)"
  },
  {
    word: "Specious",
    partOfSpeech: "adjective",
    englishMeaning: "Seemingly reasonable but actually false/misleading",
    banglaMeaning: "আপাতদৃষ্টিতে সত্য কিন্তু আসলে মিথ্যা",
    synonyms: ["misleading", "fallacious", "spurious", "plausible-sounding"],
    antonyms: ["valid", "genuine", "sound"],
    exampleSentence: "The salesman made specious claims about the product's instant health benefits.",
    etymology: "Latin 'speciosus' (good-looking, plausible)"
  },
  {
    word: "Sporadic",
    partOfSpeech: "adjective",
    englishMeaning: "Occurring irregularly or in scattered instances",
    banglaMeaning: "বিক্ষিপ্ত / অনিয়মিত",
    synonyms: ["infrequent", "intermittent", "fitful", "scattered"],
    antonyms: ["continuous", "constant", "frequent"],
    exampleSentence: "Sporadic gunfire was heard throughout the valley during the night.",
    etymology: "Greek 'sporadikos' (scattered)"
  },
  {
    word: "Stigma",
    partOfSpeech: "noun",
    englishMeaning: "Token of disgrace or social brand",
    banglaMeaning: "কলঙ্ক / সামাজিক অপবাদ",
    synonyms: ["shame", "disgrace", "taint", "mark"],
    antonyms: ["honor", "repute", "distinction"],
    exampleSentence: "Advocates work hard to eliminate the stigma surrounding mental health issues.",
    etymology: "Greek 'stigma' (tattoo mark, brand)"
  },
  {
    word: "Stipulate",
    partOfSpeech: "verb",
    englishMeaning: "Make express conditions or specify as a requirement",
    banglaMeaning: "চুক্তিতে নির্দিষ্ট করে বলা",
    synonyms: ["specify", "require", "condition", "demand"],
    antonyms: ["revoke", "improvises"],
    exampleSentence: "The contract stipulates that payment must be completed within 30 days.",
    etymology: "Latin 'stipulari' (to demand formal guarantee)"
  },
  {
    word: "Stolid",
    partOfSpeech: "adjective",
    englishMeaning: "Dull, impassive, showing little emotion",
    banglaMeaning: "উদ্বেগহীন / অনুভূতিহীন",
    synonyms: ["impassive", "phlegmatic", "unemotional", "stolid"],
    antonyms: ["emotional", "lively", "excitable"],
    exampleSentence: "The guard stood with a stolid expression, oblivious to the noise around him.",
    etymology: "Latin 'stolidus' (foolish, dull)"
  },
  {
    word: "Subside",
    partOfSpeech: "verb",
    englishMeaning: "Settle down, descend, or grow quiet",
    banglaMeaning: "কমে যাওয়া / নেমে যাওয়া",
    synonyms: ["abate", "dwindle", "recede", "lessen"],
    antonyms: ["rise", "surge", "intensify"],
    exampleSentence: "We waited for the floodwaters to subside before driving across the bridge.",
    etymology: "Latin 'sub-' (under) + 'sidere' (to settle)"
  },
  {
    word: "Substantiate",
    partOfSpeech: "verb",
    englishMeaning: "Establish by evidence, verify, or support",
    banglaMeaning: "প্রমাণ করা / সত্যতা সমর্থন করা",
    synonyms: ["verify", "corroborate", "confirm", "validate"],
    antonyms: ["disprove", "refute", "gainsay"],
    exampleSentence: "Can you produce scientific documents to substantiate your claims?",
    etymology: "Latin 'substantia' (substance)"
  },
  {
    word: "Supersede",
    partOfSpeech: "verb",
    englishMeaning: "Cause to be set aside; replace or make obsolete",
    banglaMeaning: "স্থান দখল করা / বাতিল করে স্থলাভিষিক্ত হওয়া",
    synonyms: ["replace", "supplant", "override", "displace"],
    antonyms: ["retain", "keep"],
    exampleSentence: "Digital downloads have largely superseded physical CDs in the music market.",
    etymology: "Latin 'super' (above) + 'sedere' (to sit)"
  },
  {
    word: "Tacit",
    partOfSpeech: "adjective",
    englishMeaning: "Understood or implied without being expressed in words",
    banglaMeaning: "মৌন / না বলেও প্রকাশ পাওয়া",
    synonyms: ["implied", "implicit", "unspoken", "unvoiced"],
    antonyms: ["explicit", "expressed", "stated"],
    exampleSentence: "By staying silent, he gave his tacit approval to the committee's proposal.",
    etymology: "Latin 'tacitus' (silent)"
  },
  {
    word: "Tangential",
    partOfSpeech: "adjective",
    englishMeaning: "Peripheral or only slightly connected to the topic",
    banglaMeaning: "স্পর্শকীয় / অপ্রাসঙ্গিক",
    synonyms: ["digressive", "peripheral", "divergent", "incidental"],
    antonyms: ["central", "relevant", "pivotal"],
    exampleSentence: "His rant about taxes was completely tangential to our discussion on coding.",
    etymology: "Latin 'tangere' (to touch)"
  },
  {
    word: "Tenuous",
    partOfSpeech: "adjective",
    englishMeaning: "Thin, slender, or flimsy and fragile",
    banglaMeaning: "পাতলা / দুর্বল / ভঙ্গুর",
    synonyms: ["flimsy", "fragile", "slender", "weak"],
    antonyms: ["strong", "solid", "substantial"],
    exampleSentence: "The link between the two events proved to be tenuous at best.",
    etymology: "Latin 'tenuis' (thin)"
  },
  {
    word: "Tirade",
    partOfSpeech: "noun",
    englishMeaning: "Extended scolding or bitter denunciation",
    banglaMeaning: "দীর্ঘ ও তীব্র সমালোচনা / গালাগাল",
    synonyms: ["diatribe", "harangue", "rant", "outburst"],
    antonyms: ["praise", "panegyric"],
    exampleSentence: "The manager launched into a tirade over the team's missed deadline.",
    etymology: "French 'tirer' (to draw, pull, shoot)"
  },
  {
    word: "Torpor",
    partOfSpeech: "noun",
    englishMeaning: "Lethargy, sluggishness, or dormancy",
    banglaMeaning: "অসাড়তা / নিস্তেজতা",
    synonyms: ["lethargy", "sluggishness", "apathy", "torpidity"],
    antonyms: ["vigor", "energy", "vitality"],
    exampleSentence: "After the enormous Thanksgiving meal, everyone sank into a heavy torpor.",
    etymology: "Latin 'torpere' (be numb or stiff)"
  },
  {
    word: "Tortuous",
    partOfSpeech: "adjective",
    englishMeaning: "Winding, full of curves, or indirect/complex",
    banglaMeaning: "প্যাঁচালো / আঁকাবাঁকা",
    synonyms: ["circuitous", "winding", "serpentine", "convoluted"],
    antonyms: ["straight", "direct"],
    exampleSentence: "The driver navigated the tortuous mountain roads with utmost caution.",
    etymology: "Latin 'torquere' (to twist)"
  },
  {
    word: "Tractable",
    partOfSpeech: "adjective",
    englishMeaning: "Docile, easily managed, or yielding",
    banglaMeaning: "সহজে পরিচালনাযোগ্য / বাধ্য",
    synonyms: ["docile", "malleable", "pliant", "amenable"],
    antonyms: ["intractable", "refractory", "stubborn"],
    exampleSentence: "Golden Retrievers are known for being friendly and highly tractable dogs.",
    etymology: "Latin 'tractare' (to handle)"
  },
  {
    word: "Transgression",
    partOfSpeech: "noun",
    englishMeaning: "Violation of a law, rule, or moral boundary",
    banglaMeaning: "আইন লঙ্ঘন / পাপ",
    synonyms: ["infraction", "violation", "offense", "breach"],
    antonyms: ["obedience", "compliance"],
    exampleSentence: "Forgiveness was granted for his minor youthful transgression.",
    etymology: "Latin 'transgressio' (stepping across)"
  },
  {
    word: "Truculence",
    partOfSpeech: "noun",
    englishMeaning: "Aggressiveness, ferocity, or readiness to fight",
    banglaMeaning: "আক্রমণাত্মক মনোভাব / নিষ্ঠুরতা",
    synonyms: ["belligerence", "ferocity", "aggressiveness"],
    antonyms: ["gentleness", "friendliness", "amenability"],
    exampleSentence: "The boxer's truculence during weigh-ins was famous across the sport.",
    etymology: "Latin 'trux' (fierce, wild)"
  },
  {
    word: "Vacillate",
    partOfSpeech: "verb",
    englishMeaning: "Waver, fluctuate, or be indecisive",
    banglaMeaning: "দ্বিধাগ্রস্ত হওয়া / দোদুল্যমান হওয়া",
    synonyms: ["waver", "fluctuate", "hesitate", "oscillate"],
    antonyms: ["remain resolute", "decide"],
    exampleSentence: "She continued to vacillate between choosing law school or taking a gap year.",
    etymology: "Latin 'vacillare' (to sway, stagger)"
  },
  {
    word: "Venerate",
    partOfSpeech: "verb",
    englishMeaning: "Revere, respect, or honor deeply",
    banglaMeaning: "শ্রদ্ধা করা / পূজা করা",
    synonyms: ["revere", "worship", "respect", "honor"],
    antonyms: ["despise", "scorn", "disrespect"],
    exampleSentence: "Many cultures venerate their elders for their wisdom and life experiences.",
    etymology: "Latin 'venus' (love, reverence)"
  },
  {
    word: "Veracious",
    partOfSpeech: "adjective",
    englishMeaning: "Truthful, honest, and accurate",
    banglaMeaning: "সত্যবাদী / নির্ভুল",
    synonyms: ["truthful", "honest", "accurate", "veritable"],
    antonyms: ["mendacious", "dishonest", "deceitful"],
    exampleSentence: "A veracious reporter fact-checks every quote before going to print.",
    etymology: "Latin 'verax' (speaking truth)"
  },
  {
    word: "Verbose",
    partOfSpeech: "adjective",
    englishMeaning: "Wordy, using more words than necessary",
    banglaMeaning: "বাচাল / শব্দাবহুল",
    synonyms: ["wordy", "prolix", "loquacious", "long-winded"],
    antonyms: ["concise", "succinct", "laconic"],
    exampleSentence: "The editor trimmed the verbose manuscript to make it readable.",
    etymology: "Latin 'verbum' (word)"
  },
  {
    word: "Viable",
    partOfSpeech: "adjective",
    englishMeaning: "Practical, workable, or capable of living",
    banglaMeaning: "বাস্তবায়নযোগ্য / টিকে থাকতে সক্ষম",
    synonyms: ["workable", "feasible", "practical", "tenable"],
    antonyms: ["unviable", "impractical", "futile"],
    exampleSentence: "Solar energy has become a economically viable alternative to fossil fuels.",
    etymology: "French 'vie' (life)"
  },
  {
    word: "Viscous",
    partOfSpeech: "adjective",
    englishMeaning: "Sticky, gluey, thick, and resistant to flow",
    banglaMeaning: "আঠালো / ঘন",
    synonyms: ["thick", "sticky", "syrupy", "glutinous"],
    antonyms: ["runny", "fluid", "watery"],
    exampleSentence: "Honey is a viscous liquid that flows slowly at room temperature.",
    etymology: "Latin 'viscum' (mistletoe, birdlime made from mistletoe berries)"
  },
  {
    word: "Vituperative",
    partOfSpeech: "adjective",
    englishMeaning: "Abusive, scolding, or severely fault-finding",
    banglaMeaning: "গালাগালিপূর্ণ / নিন্দাসূচক",
    synonyms: ["abusive", "scathing", "disparaging", "invective"],
    antonyms: ["laudatory", "praising", "complimentary"],
    exampleSentence: "The movie critic was infamous for writing vituperative reviews.",
    etymology: "Latin 'vituperare' (to blame, censure)"
  },
  {
    word: "Volatile",
    partOfSpeech: "adjective",
    englishMeaning: "Changeable, explosive, or evaporating rapidly",
    banglaMeaning: "পরিবর্তনশীল / উদ্বায়ী",
    synonyms: ["unstable", "fickle", "explosive", "capricious"],
    antonyms: ["stable", "calm", "constant"],
    exampleSentence: "Stock markets remained volatile amid global political tensions.",
    etymology: "Latin 'volare' (to fly)"
  },
  {
    word: "Warranted",
    partOfSpeech: "adjective",
    englishMeaning: "Justified, authorized, or grounded",
    banglaMeaning: "ন্যায্য / সমর্থিত",
    synonyms: ["justified", "sanctioned", "legitimate", "vindicated"],
    antonyms: ["unwarranted", "unjustified"],
    exampleSentence: "Her concern was entirely warranted given the previous security breaches.",
    etymology: "Old French 'garantir' (to protect, warrant)"
  },
  {
    word: "Wary",
    partOfSpeech: "adjective",
    englishMeaning: "Very cautious, guarded, or watchful",
    banglaMeaning: "স সতর্ক / চতুর",
    synonyms: ["cautious", "guarded", "circumspect", "vigilant"],
    antonyms: ["reckless", "trusting", "foolhardy"],
    exampleSentence: "Be wary of online emails that ask for sensitive personal passwords.",
    etymology: "Old English 'wær' (prudent, aware)"
  },
  {
    word: "Welter",
    partOfSpeech: "noun / verb",
    englishMeaning: "Turmoil, bewildering jumble, or chaotic mass",
    banglaMeaning: "বিশৃঙ্খলা / তালগোল পাকানো অবস্থা",
    synonyms: ["confusion", "turmoil", "jumble", "clutter"],
    antonyms: ["order", "organization"],
    exampleSentence: "The office desk was covered in a welter of unorganized paperwork.",
    etymology: "Middle Dutch 'welteren' (to roll, wallow)"
  },
  {
    word: "Whimsical",
    partOfSpeech: "adjective",
    englishMeaning: "Capricious, playful, or fanciful",
    banglaMeaning: "খেয়ালী / অদ্ভুত",
    synonyms: ["fanciful", "playful", "capricious", "quirky"],
    antonyms: ["serious", "sober", "practical"],
    exampleSentence: "The children's book was full of whimsical illustrations of flying dragons.",
    etymology: "English 'whim-wham' (fanciful object/idea)"
  },
  {
    word: "Zealot",
    partOfSpeech: "noun",
    englishMeaning: "Fanatic or person showing excessive enthusiasm",
    banglaMeaning: "আতিশয্যপূর্ণ অনুরাগী / গোঁড়া ব্যক্তি",
    synonyms: ["fanatic", "extremist", "radical", "partisan"],
    antonyms: ["moderate", "aprahetic person"],
    exampleSentence: "As a health zealot, he refused to consume processed sugar under any circumstance.",
    etymology: "Greek 'zelotes' (emulator, zealous admirer)"
  }
];