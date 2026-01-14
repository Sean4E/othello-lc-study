// ============================================
// OTHELLO LEAVING CERTIFICATE STUDY COMPANION
// Complete Study Resource - No Other Materials Needed
// ============================================

// COMPREHENSIVE DATA STRUCTURES

const CHARACTERS = {
  othello: {
    name: "Othello",
    title: "The Moor of Venice",
    role: "Tragic Hero / Protagonist",
    description: "A Moorish general in the Venetian army, Othello is a noble and accomplished military leader who falls victim to Iago's manipulation. His outsider status makes him vulnerable to insecurities about his place in Venetian society and his marriage to Desdemona.",
    keyTraits: ["Noble", "Trusting", "Passionate", "Insecure", "Jealous (when manipulated)", "Eloquent", "Proud"],
    arc: "Othello transforms from a confident, dignified commander to a jealous, irrational murderer. His tragic flaw (hamartia) is his trusting nature and deep-seated insecurity about his race and age.",
    relationships: {
      desdemona: "Wife - loves her deeply but becomes convinced of her infidelity",
      iago: "Ensign - trusts him completely, calls him 'honest Iago'",
      cassio: "Lieutenant - valued soldier whom he demotes and later believes is Desdemona's lover",
      brabantio: "Father-in-law - never accepted by him"
    },
    keyQuotes: [
      { quote: "She loved me for the dangers I had passed, And I loved her that she did pity them.", act: "1.3", analysis: "Reveals how their love was built on storytelling and mutual admiration" },
      { quote: "Rude am I in my speech, And little blessed with the soft phrase of peace", act: "1.3", analysis: "Shows his perceived outsider status despite his obvious eloquence" },
      { quote: "O, beware, my lord, of jealousy! It is the green-eyed monster which doth mock the meat it feeds on.", act: "3.3", analysis: "Iago's warning ironically plants the seed of jealousy" },
      { quote: "Her honour is an essence that was not seen; They have it very oft that have it not.", act: "4.1", analysis: "Shows his descent into paranoid reasoning" },
      { quote: "It is the cause, it is the cause, my soul. Let me not name it to you, you chaste stars!", act: "5.2", analysis: "His self-deception - sees murder as justice, not crime" },
      { quote: "Of one that loved not wisely, but too well", act: "5.2", analysis: "His final self-assessment - partially true but also self-justifying" }
    ],
    examFocus: "Examiners often ask about Othello's nobility, his transformation, and whether he is truly a tragic hero. Consider his race, his eloquence, and his vulnerability."
  },
  iago: {
    name: "Iago",
    title: "The Villain",
    role: "Antagonist",
    description: "Othello's ensign (standard-bearer), Iago is one of Shakespeare's most complex villains. Passed over for promotion in favour of Cassio, he plots revenge against Othello through manipulation and deception. His motives are multiple and perhaps ultimately unknowable.",
    keyTraits: ["Manipulative", "Intelligent", "Amoral", "Jealous", "Misogynistic", "Two-faced", "Patient"],
    arc: "Iago remains essentially unchanged throughout - he is evil from start to finish. His arc is one of executing his plan methodically until his exposure.",
    relationships: {
      othello: "Master - hates him, possibly for racial reasons, definitely for the promotion",
      emilia: "Wife - uses and discards her, shows no love",
      cassio: "Rival - jealous of his promotion, uses him as tool",
      roderigo: "Dupe - exploits his love for Desdemona for money and assistance",
      desdemona: "Target - innocent victim he destroys to hurt Othello"
    },
    keyQuotes: [
      { quote: "I am not what I am", act: "1.1", analysis: "His fundamental duplicity - a reverse of God's 'I am what I am'" },
      { quote: "I hate the Moor... it is thought abroad that 'twixt my sheets He has done my office", act: "1.3", analysis: "Multiple motives - professional jealousy and sexual paranoia" },
      { quote: "Put money in thy purse", act: "1.3", analysis: "Repeated cynically to Roderigo - shows his mercenary nature" },
      { quote: "The Moor is of a free and open nature, That thinks men honest that but seem to be so", act: "1.3", analysis: "His calculated assessment of Othello's weakness" },
      { quote: "O, you are well tuned now! But I'll set down the pegs that make this music", act: "2.1", analysis: "Musical metaphor shows his intention to destroy the harmony of their love" },
      { quote: "Demand me nothing. What you know, you know. From this time forth I never will speak word.", act: "5.2", analysis: "His final silence - refuses to explain, maintaining power even in defeat" }
    ],
    examFocus: "Examiners frequently ask about Iago's motivation (or lack thereof), his dramatic function, and his relationship with the audience through soliloquies."
  },
  desdemona: {
    name: "Desdemona",
    title: "The Innocent",
    role: "Victim / Love Interest",
    description: "A Venetian noblewoman who defies her father to marry Othello. Desdemona represents purity and devoted love, but her very virtues - her kindness, her advocacy for Cassio - are twisted by Iago into evidence of guilt.",
    keyTraits: ["Loving", "Loyal", "Innocent", "Courageous", "Naive", "Forgiving"],
    arc: "Desdemona begins as an assertive woman who defies convention, but becomes increasingly passive as Othello's jealousy grows. Her final moments show her continued love even as Othello kills her.",
    relationships: {
      othello: "Husband - loves him unconditionally despite his abuse",
      emilia: "Attendant and friend - confides in her",
      cassio: "Friend - advocates for his reinstatement (innocently)",
      brabantio: "Father - defies him to marry Othello"
    },
    keyQuotes: [
      { quote: "My noble father, I do perceive here a divided duty", act: "1.3", analysis: "Shows her intelligence and diplomatic skill in a difficult situation" },
      { quote: "I saw Othello's visage in his mind", act: "1.3", analysis: "She loves him for who he is, not despite his race" },
      { quote: "His unkindness may defeat my life, But never taint my love.", act: "4.2", analysis: "Her absolute devotion, even when he treats her cruelly" },
      { quote: "Commend me to my kind lord", act: "5.2", analysis: "Her dying words still express love for Othello" },
      { quote: "Nobody; I myself. Farewell.", act: "5.2", analysis: "She lies to protect Othello even as she dies" }
    ],
    examFocus: "Examiners ask whether Desdemona is a passive victim or an active agent. Consider her defiance of her father versus her later passivity."
  },
  emilia: {
    name: "Emilia",
    title: "The Truth-Teller",
    role: "Attendant / Catalyst",
    description: "Iago's wife and Desdemona's attendant. Emilia is practical, worldly-wise, and ultimately heroic. She unknowingly aids Iago's plot by giving him the handkerchief, but redeems herself by exposing him.",
    keyTraits: ["Practical", "Loyal", "Brave", "Outspoken", "Proto-feminist"],
    arc: "Emilia moves from unwitting accomplice to heroic truth-teller. Her character grows in moral stature throughout the play.",
    relationships: {
      iago: "Husband - desperately wants his approval, eventually exposes him",
      desdemona: "Mistress and friend - deeply devoted to her",
      othello: "Master - ultimately defies him to tell the truth"
    },
    keyQuotes: [
      { quote: "Who would not make her husband a cuckold to make him a monarch?", act: "4.3", analysis: "Her pragmatic view of marriage and fidelity" },
      { quote: "Let husbands know Their wives have sense like them", act: "4.3", analysis: "Early feminist argument for women's equality" },
      { quote: "I will not charm my tongue; I am bound to speak", act: "5.2", analysis: "Her moment of courage - chooses truth over safety" },
      { quote: "Moor, she was chaste. She loved thee, cruel Moor", act: "5.2", analysis: "Her final vindication of Desdemona" }
    ],
    examFocus: "Emilia is often discussed in terms of her proto-feminist speeches and her moral growth. Compare her to Desdemona."
  },
  cassio: {
    name: "Cassio",
    title: "The Lieutenant",
    role: "Unwitting Tool",
    description: "A Florentine soldier and Othello's newly promoted lieutenant. Cassio is handsome, well-mannered, and inexperienced in battle - everything Iago resents. He is used by Iago as the supposed lover in the adultery plot.",
    keyTraits: ["Courteous", "Inexperienced", "Handsome", "Honourable", "Weak (for drink)"],
    arc: "Cassio falls from grace through his weakness for alcohol, then is unknowingly used in Iago's plot, and finally survives to inherit Othello's position.",
    relationships: {
      othello: "Commander - deeply respects him, devastated to lose his favour",
      iago: "Fellow officer - trusts him, unaware of his hatred",
      desdemona: "Friend - asks her to intercede for him (innocently)",
      bianca: "Lover - casual relationship Iago uses as evidence"
    },
    keyQuotes: [
      { quote: "Reputation, reputation, reputation! O, I have lost my reputation!", act: "2.3", analysis: "His obsession with honour - ironic given what's to come" },
      { quote: "I have very poor and unhappy brains for drinking", act: "2.3", analysis: "His weakness that Iago exploits" },
      { quote: "I never gave her aught", act: "5.2", analysis: "His simple denial exposes Iago's lies" }
    ],
    examFocus: "Cassio is often discussed as a foil to Othello - what Othello is not. His role in the handkerchief plot is central to the tragedy."
  },
  roderigo: {
    name: "Roderigo",
    title: "The Dupe",
    role: "Comic/Pathetic Figure",
    description: "A wealthy Venetian gentleman who is desperately in love with Desdemona. He is easily manipulated by Iago, who takes his money and uses him as a tool in his schemes.",
    keyTraits: ["Naive", "Wealthy", "Lovesick", "Gullible", "Persistent"],
    arc: "Roderigo is manipulated throughout, finally realising too late that Iago has used him, before being killed by him.",
    relationships: {
      iago: "Supposed friend - actually his manipulator and eventual murderer",
      desdemona: "Object of obsession - never returns his feelings",
      cassio: "Rival - attacks him on Iago's orders"
    },
    keyQuotes: [
      { quote: "I will incontinently drown myself", act: "1.3", analysis: "His melodramatic despair, easily manipulated by Iago" },
      { quote: "I have no great devotion to the deed; And yet he hath given me satisfying reasons", act: "5.1", analysis: "Shows how Iago's manipulation overcomes his better judgment" }
    ],
    examFocus: "Roderigo provides comic relief but also shows Iago's manipulative skills in action."
  },
  brabantio: {
    name: "Brabantio",
    title: "The Father",
    role: "Voice of Prejudice",
    description: "Desdemona's father, a Venetian senator. He is outraged by her marriage to Othello and accuses the Moor of witchcraft. His rejection of the marriage represents Venetian racial prejudice.",
    keyTraits: ["Loving (to Desdemona)", "Prejudiced", "Proud", "Conventional"],
    keyQuotes: [
      { quote: "Look to her, Moor, if thou hast eyes to see: She has deceived her father, and may thee.", act: "1.3", analysis: "His warning plants a seed that Iago later exploits" },
      { quote: "Against all rules of nature", act: "1.3", analysis: "His view of interracial marriage" }
    ],
    examFocus: "Brabantio represents societal prejudice and his warning about deception is ironically pivotal."
  },
  bianca: {
    name: "Bianca",
    title: "The Courtesan",
    role: "Plot Device",
    description: "A courtesan (prostitute) in Cyprus who is in love with Cassio. Her possession of the handkerchief provides the final 'proof' that convinces Othello of Desdemona's guilt.",
    keyTraits: ["Jealous", "Loving", "Low status", "Passionate"],
    keyQuotes: [
      { quote: "Let the devil and his dam haunt you! What did you mean by that same handkerchief you gave me even now?", act: "4.1", analysis: "Her jealousy about the handkerchief drives the plot" }
    ],
    examFocus: "Bianca's role in the handkerchief plot - she unknowingly seals Desdemona's fate."
  }
};

const THEMES = {
  jealousy: {
    name: "Jealousy",
    subtitle: "The Green-Eyed Monster",
    description: "Jealousy is the play's central theme, described memorably as 'the green-eyed monster which doth mock the meat it feeds on.' Shakespeare shows how jealousy destroys reason and transforms love into murderous rage.",
    keyPoints: [
      "Othello's jealousy is manufactured by Iago - it comes from outside, not within",
      "Iago's jealousy is multi-layered: professional (Cassio's promotion), sexual (suspicions about Emilia), and possibly racial",
      "The handkerchief becomes a symbol of jealousy - a trivial object given tremendous significance",
      "Jealousy in the play is specifically male and specifically sexual",
      "Bianca's jealousy of Cassio mirrors Othello's jealousy of Desdemona"
    ],
    quotes: [
      { quote: "O, beware, my lord, of jealousy! It is the green-eyed monster which doth mock the meat it feeds on", speaker: "Iago", act: "3.3" },
      { quote: "Trifles light as air Are to the jealous confirmations strong As proofs of holy writ", speaker: "Iago", act: "3.3" },
      { quote: "I had rather be a toad And live upon the vapour of a dungeon Than keep a corner in the thing I love For others' uses", speaker: "Othello", act: "3.3" }
    ],
    examTip: "When writing about jealousy, distinguish between Othello's induced jealousy and Iago's pre-existing jealousy. Consider how Shakespeare presents jealousy as both ridiculous and terrifying."
  },
  appearance_reality: {
    name: "Appearance vs Reality",
    subtitle: "Honest Iago",
    description: "The gap between appearance and reality is central to the play. Iago appears honest but is deeply corrupt; Desdemona appears guilty but is innocent; Othello appears to be dispensing justice but commits murder.",
    keyPoints: [
      "Iago is called 'honest' over 20 times in the play - dramatic irony",
      "The handkerchief 'ocular proof' is actually no proof at all",
      "Venice represents civilisation and order, but conceals prejudice and corruption",
      "Othello's eloquent speech masks his growing irrationality",
      "The play questions whether we can ever truly know another person"
    ],
    quotes: [
      { quote: "I am not what I am", speaker: "Iago", act: "1.1" },
      { quote: "Men should be what they seem; Or those that be not, would they might seem none!", speaker: "Iago", act: "3.3" },
      { quote: "Her honour is an essence that was not seen", speaker: "Othello", act: "4.1" }
    ],
    examTip: "Connect this theme to Iago's manipulation - he exploits Othello's inability to distinguish appearance from reality. The handkerchief is key evidence."
  },
  race_outsider: {
    name: "Race and Otherness",
    subtitle: "The Moor of Venice",
    description: "Othello's race makes him an outsider in Venetian society. While Venice values his military service, racial prejudice runs deep. Othello's insecurity about his race makes him vulnerable to Iago's insinuations.",
    keyPoints: [
      "The play opens with racist language: 'thick-lips', 'old black ram', 'Barbary horse'",
      "Brabantio's response to the marriage reveals societal racism",
      "Othello internalises racism: sees himself through others' prejudiced eyes",
      "Venice uses Othello but never fully accepts him",
      "The 'exotic' storytelling that won Desdemona also marks him as 'other'"
    ],
    quotes: [
      { quote: "An old black ram Is tupping your white ewe", speaker: "Iago", act: "1.1" },
      { quote: "Haply, for I am black And have not those soft parts of conversation That chamberers have", speaker: "Othello", act: "3.3" },
      { quote: "Her name, that was as fresh As Dian's visage, is now begrimed and black As mine own face", speaker: "Othello", act: "3.3" }
    ],
    examTip: "Be nuanced about race - Shakespeare presents both racist characters AND a noble Black protagonist. Consider how Othello's outsider status makes him vulnerable."
  },
  love_marriage: {
    name: "Love and Marriage",
    subtitle: "She Loved Me for the Dangers",
    description: "The play examines love and marriage from multiple angles: the passionate love of Othello and Desdemona, the loveless marriage of Iago and Emilia, and the societal context of marriage in Venice.",
    keyPoints: [
      "Othello and Desdemona's love is genuine but built on idealisation",
      "Their love story (dangers, pity) suggests romantic love rather than daily reality",
      "Iago and Emilia's marriage is transactional and loveless",
      "The Willow Song represents women's vulnerability in marriage",
      "Marriage is also property - Desdemona 'belongs' first to her father, then to Othello"
    ],
    quotes: [
      { quote: "She loved me for the dangers I had passed, And I loved her that she did pity them", speaker: "Othello", act: "1.3" },
      { quote: "I saw Othello's visage in his mind", speaker: "Desdemona", act: "1.3" },
      { quote: "My life upon her faith!", speaker: "Othello", act: "1.3" }
    ],
    examTip: "Examine whether Othello truly knows Desdemona, or has created an idealised version of her. Compare the play's different marriages."
  },
  reputation_honour: {
    name: "Reputation and Honour",
    subtitle: "Who Steals My Purse",
    description: "In Othello's world, reputation is everything. The loss of honour - or the appearance of its loss - drives the tragedy. Ironically, Iago dismisses reputation while manipulating others' concern for it.",
    keyPoints: [
      "Cassio's despair at losing his reputation drives the early plot",
      "Othello kills Desdemona to restore his 'honour' as a cuckolded husband",
      "Iago's reputation as 'honest' is his greatest weapon",
      "For women, honour means chastity - Desdemona's 'honour' cannot be proven",
      "Othello's final speech attempts to control his posthumous reputation"
    ],
    quotes: [
      { quote: "Reputation, reputation, reputation! O, I have lost my reputation!", speaker: "Cassio", act: "2.3" },
      { quote: "Good name in man and woman, dear my lord, Is the immediate jewel of their souls", speaker: "Iago", act: "3.3" },
      { quote: "Who steals my purse steals trash... But he that filches from me my good name Robs me of that which not enriches him And makes me poor indeed", speaker: "Iago", act: "3.3" }
    ],
    examTip: "Note the irony of Iago's famous speech about reputation - he uses others' concern for honour while having none himself."
  },
  manipulation: {
    name: "Manipulation and Deception",
    subtitle: "I'll Pour This Pestilence",
    description: "Iago is a master manipulator who understands human psychology perfectly. He tailors his approach to each victim and creates situations where his targets effectively manipulate themselves.",
    keyPoints: [
      "Iago exploits each character's weakness: Othello's insecurity, Cassio's weakness for drink, Roderigo's love",
      "He uses insinuation rather than direct accusation - makes Othello draw his own conclusions",
      "The temptation scene (3.3) is a masterclass in psychological manipulation",
      "Iago positions himself as reluctant truth-teller: 'I am not what I would be'",
      "He manipulates through absence - what he doesn't say is as powerful as what he does"
    ],
    quotes: [
      { quote: "I'll pour this pestilence into his ear", speaker: "Iago", act: "2.3" },
      { quote: "The Moor already changes with my poison", speaker: "Iago", act: "3.3" },
      { quote: "Work on, My medicine, work!", speaker: "Iago", act: "4.1" }
    ],
    examTip: "Analyse specific techniques Iago uses: rhetorical questions, false reluctance, planted suggestions. The temptation scene is essential material."
  },
  women_patriarchy: {
    name: "Women and Patriarchy",
    subtitle: "Let Husbands Know",
    description: "The play presents women as property and victims in a patriarchal society. Desdemona and Emilia offer different responses to male control, while all women ultimately suffer from men's violence and jealousy.",
    keyPoints: [
      "Women are passed from father to husband as property",
      "Desdemona's agency decreases as the play progresses",
      "Emilia's speech in Act 4 Scene 3 is an early feminist manifesto",
      "The Willow Song associates female love with death and abandonment",
      "All the women (Desdemona, Emilia, Bianca) are accused of sexual impropriety",
      "Male honour depends on female chastity - women carry the burden of proof"
    ],
    quotes: [
      { quote: "Let husbands know Their wives have sense like them", speaker: "Emilia", act: "4.3" },
      { quote: "Look to your wife; observe her well with Cassio", speaker: "Iago", act: "3.3" },
      { quote: "She's like a liar gone to burning hell: 'Twas I that killed her", speaker: "Othello", act: "5.2" }
    ],
    examTip: "Compare Desdemona and Emilia's views on women and marriage. Emilia's Act 4 Scene 3 speech is excellent material for essays on this theme."
  }
};

const SCENES = [
  { act: 1, scene: 1, title: "A Street in Venice", setting: "Night. A street in Venice.",
    summary: "Iago reveals to Roderigo that he hates Othello for promoting Cassio over him. Together, they wake Brabantio to tell him his daughter Desdemona has eloped with Othello. Brabantio is outraged and sets out to confront Othello.",
    modernSummary: "Iago is furious that Othello passed him over for promotion and gave the job to Cassio. He tells his money-source Roderigo about his plan to destroy Othello. They wake up Desdemona's father Brabantio with the news that she's secretly married Othello. They use racist and crude imagery to shock him. Brabantio is horrified and goes to find them.",
    keyMoments: ["Iago's 'I am not what I am' reveals his deceptive nature", "Racist imagery establishes societal prejudice", "Brabantio's reaction shows the obstacles facing the marriage"],
    significance: "Sets up the themes of deception, jealousy, and racism. Establishes Iago as the villain through his soliloquy." },
  { act: 1, scene: 2, title: "Before the Sagittary", setting: "Before the Sagittary inn.",
    summary: "Iago warns Othello that Brabantio is angry and coming for him. Othello remains calm, confident in his reputation and the legitimacy of his marriage. Cassio arrives to summon Othello to the Duke on urgent military business. Brabantio arrives with armed men, accusing Othello of using witchcraft on Desdemona. They all proceed to the Duke.",
    modernSummary: "Iago pretends to warn Othello that Brabantio is coming with armed men. Othello isn't worried - he's confident in his service to Venice and his love for Desdemona. Cassio arrives with urgent news: the Duke needs Othello immediately about a military crisis in Cyprus. Brabantio shows up accusing Othello of using magic to seduce his daughter. They all go to see the Duke.",
    keyMoments: ["Othello's dignified response contrasts with Act 1's racist imagery", "First presentation of Othello's nobility and eloquence", "Military crisis in Cyprus sets up the change of location"],
    significance: "Establishes Othello as noble and dignified. The contrast with the racist descriptions in Scene 1 is stark." },
  { act: 1, scene: 3, title: "A Council Chamber", setting: "The Duke's council chamber.",
    summary: "The Duke and senators discuss the Turkish threat to Cyprus. Brabantio accuses Othello of witchcraft. Othello eloquently defends himself and explains how he won Desdemona's love through storytelling. Desdemona arrives and confirms she married Othello of her own free will. Othello is sent to Cyprus to fight the Turks. In soliloquy, Iago reveals his plan to use Cassio against Othello.",
    modernSummary: "The Venetian government is dealing with a Turkish invasion fleet heading for Cyprus. Brabantio accuses Othello of using magic to make Desdemona love him. Othello gives a beautiful speech about how he won her with stories of his adventures. Desdemona arrives and publicly declares her love and loyalty to her husband. Brabantio is devastated but defeated. Othello must go to Cyprus immediately. After everyone leaves, Iago plots with Roderigo and then reveals in soliloquy his plan to make Othello think Desdemona is cheating with Cassio.",
    keyMoments: ["Othello's 'She loved me for the dangers I had passed' speech", "Desdemona's 'divided duty' speech shows her strength", "Brabantio's warning 'Look to her, Moor, if thou hast eyes to see'", "Iago's soliloquy reveals his motivation and plan"],
    significance: "The senate scene is crucial: we see Othello at his most eloquent and confident. Brabantio's warning will later be twisted by Iago." },
  { act: 2, scene: 1, title: "A Sea-port in Cyprus", setting: "Cyprus. A sea-port.",
    summary: "Characters arrive in Cyprus. A storm has destroyed the Turkish fleet. Desdemona arrives first, then Othello. Iago observes Cassio's courtly behavior with Desdemona and plans to use it against him. In soliloquy, Iago outlines his plot.",
    modernSummary: "Everyone arrives in Cyprus after a terrible storm that conveniently destroyed the Turkish fleet. While waiting for Othello, Iago watches Cassio being polite and charming with Desdemona. He decides to use Cassio's good manners as 'evidence' of an affair. When Othello arrives, he and Desdemona have a beautiful reunion. Iago tells Roderigo that Desdemona will soon tire of Othello and suggests Cassio is her likely next choice. He convinces Roderigo to pick a fight with Cassio that night.",
    keyMoments: ["The storm symbolises the coming destruction of love", "Iago's observation of Cassio and Desdemona", "Othello's joyful reunion: 'If it were now to die, 'Twere now to be most happy'"],
    significance: "The shift from Venice to Cyprus moves the characters from civilisation to an isolated military outpost where normal rules don't apply." },
  { act: 2, scene: 2, title: "A Hall in the Castle", setting: "A hall in the castle.",
    summary: "A herald announces the celebration of the destruction of the Turkish fleet and Othello's marriage.",
    modernSummary: "A brief public announcement: everyone should party to celebrate the military victory and Othello's wedding.",
    keyMoments: ["Sets up the drinking scene to follow"],
    significance: "Brief transitional scene establishing the celebration context." },
  { act: 2, scene: 3, title: "A Hall in the Castle", setting: "The hall. Night.",
    summary: "Iago gets Cassio drunk despite his protests that he can't handle alcohol. Roderigo provokes Cassio into a fight, which escalates. Othello arrives and dismisses Cassio from his position. Iago suggests Cassio ask Desdemona to plead for his reinstatement.",
    modernSummary: "Iago insists Cassio drink with him despite Cassio's warnings that he's a lightweight. Once drunk, Cassio gets into a fight with Roderigo and ends up wounding Montano when he tries to intervene. Othello is woken by the commotion and demands to know what happened. Iago pretends to protect Cassio while actually ensuring Othello hears the worst version. Othello fires Cassio. Afterward, Iago 'helpfully' suggests Cassio ask Desdemona to speak to Othello on his behalf - this will allow Iago to frame their meetings as evidence of an affair.",
    keyMoments: ["Cassio's 'Reputation, reputation!' speech", "Iago's manipulation appears helpful while being destructive", "Cassio is set up to depend on Desdemona"],
    significance: "This scene initiates the main plot. Cassio's dismissal and his decision to use Desdemona as intermediary provides Iago with his opportunity." },
  { act: 3, scene: 1, title: "Before the Castle", setting: "Before the castle.",
    summary: "Cassio arranges with Emilia to meet Desdemona privately.",
    modernSummary: "Cassio sends musicians to try to please Othello (who doesn't appreciate it). He asks Emilia to arrange a private meeting with Desdemona to discuss his reinstatement.",
    keyMoments: ["Cassio's 'private' meeting with Desdemona will be twisted by Iago"],
    significance: "Short scene setting up Cassio's meeting with Desdemona." },
  { act: 3, scene: 2, title: "A Room in the Castle", setting: "A room in the castle.",
    summary: "Brief scene: Othello gives letters to Iago to deliver and plans to inspect the fortifications.",
    modernSummary: "Othello handles military business, giving Iago letters to deliver. He's going to inspect the island's defences.",
    keyMoments: ["Shows Othello still functioning as a military commander"],
    significance: "Brief transitional scene." },
  { act: 3, scene: 3, title: "The Garden of the Castle", setting: "The garden of the castle.",
    summary: "THE TEMPTATION SCENE. Desdemona promises to help Cassio. Iago begins planting suspicions in Othello's mind through insinuation and reluctant half-statements. Desdemona accidentally drops her handkerchief; Emilia gives it to Iago. By the end, Othello is convinced of Desdemona's infidelity and vows revenge.",
    modernSummary: "This is the play's crucial scene. Desdemona promises Cassio she'll keep asking Othello until he reinstates him. Iago sees Cassio leaving quickly and says 'I don't like that' - planting the first seed. He then masterfully manipulates Othello through rhetorical questions, pretended reluctance to speak, and dark hints. He warns Othello about jealousy (while creating it), suggests Desdemona might prefer someone 'of her own clime, complexion, and degree', and reminds him of Brabantio's warning about her capacity for deception. Meanwhile, Desdemona drops her handkerchief - the first gift Othello gave her. Emilia picks it up because Iago has been asking for it. Iago takes it and plans to plant it in Cassio's room. By the end of the scene, Othello is tormented and demands 'ocular proof'. Iago fabricates a story about Cassio talking in his sleep about Desdemona and mentions seeing Cassio with her handkerchief. Othello swears vengeance, and they kneel together in a perverse marriage-like bond.",
    keyMoments: ["'Ha! I like not that' - Iago's opening move", "'I am not what I would be' - pretended reluctance", "'O, beware, my lord, of jealousy!' - creating what he warns against", "The handkerchief changes hands", "'Villain, be sure thou prove my love a whore!' - Othello demands proof", "'Now art thou my lieutenant' - Iago achieves his goal"],
    significance: "The pivotal scene of the play. Othello transforms from confident husband to jealous monster. Every technique of Iago's manipulation is on display." },
  { act: 3, scene: 4, title: "Before the Castle", setting: "Before the castle.",
    summary: "Desdemona tries to speak to Othello about Cassio. Othello asks for her handkerchief and tells her it has magical properties. When she cannot produce it, he becomes angry and leaves. Cassio gives the handkerchief to Bianca.",
    modernSummary: "Desdemona, unaware of what's happening, tries to talk to Othello about reinstating Cassio. Othello keeps asking about her handkerchief. He tells her it was a family heirloom with magical properties - if she loses it, their love will be destroyed. Desdemona doesn't admit she's lost it, which makes Othello angrier. He storms off. Cassio has found the handkerchief (which Iago planted in his room) and gives it to his girlfriend Bianca to copy the embroidery.",
    keyMoments: ["Othello's speech about the handkerchief's magical history", "Desdemona's lie about not losing it", "The handkerchief passes to Bianca"],
    significance: "The handkerchief becomes central evidence. Othello's story about its magical properties shows his exotic background but also his superstitious thinking." },
  { act: 4, scene: 1, title: "Before the Castle", setting: "Cyprus. Before the castle.",
    summary: "Othello has an epileptic fit from emotional torment. Iago arranges for Othello to observe Cassio talking about Bianca while thinking they're discussing Desdemona. Bianca returns the handkerchief in front of Othello. Othello decides to kill Desdemona by smothering her in bed.",
    modernSummary: "Iago keeps tormenting Othello until he has a seizure from emotional overload. When Othello recovers, Iago tells him to hide and watch while he questions Cassio about Desdemona. But Iago actually asks Cassio about Bianca - Cassio laughs dismissively about her, while Othello thinks he's laughing about Desdemona. Then Bianca arrives, angry, and throws the handkerchief at Cassio, which Othello sees. He's now completely convinced. When Lodovico arrives from Venice with orders for Othello to return home, Othello publicly strikes Desdemona. Iago suggests smothering her in the bed she 'contaminated'.",
    keyMoments: ["Othello's fit shows his complete psychological breakdown", "The eavesdropping scene - dramatic irony at its most painful", "Othello strikes Desdemona publicly", "The decision to smother her in bed"],
    significance: "Othello reaches his lowest point. The eavesdropping scene shows how context manipulation works - Cassio says nothing about Desdemona, but Othello hears what he expects." },
  { act: 4, scene: 2, title: "A Room in the Castle", setting: "A room in the castle.",
    summary: "Othello accuses Desdemona of being a whore. She protests her innocence but cannot understand what's happening. Emilia defends her mistress. Roderigo confronts Iago about the lack of results from his money; Iago convinces him to kill Cassio.",
    modernSummary: "Othello questions Emilia about Desdemona's behavior with Cassio. Emilia insists Desdemona is honest. Othello doesn't believe her and summons Desdemona. He treats her like a prostitute, calling her a 'whore' and the bedroom a 'brothel'. Desdemona is bewildered and devastated - she genuinely doesn't understand what she's done wrong. Emilia comforts her afterward. Meanwhile, Roderigo is tired of giving Iago money and jewels with no results. Iago quickly convinces him that killing Cassio is the only way to keep Othello (and Desdemona) in Cyprus.",
    keyMoments: ["Othello's 'brothel scene' - treating Desdemona as a prostitute", "'His unkindness may defeat my life, But never taint my love'", "Emilia's defense of Desdemona", "Iago manipulating Roderigo one last time"],
    significance: "Shows the complete transformation of Othello and Desdemona's relationship. The domestic cruelty is harder to watch than the final violence." },
  { act: 4, scene: 3, title: "Another Room", setting: "Another room in the castle.",
    summary: "Desdemona prepares for bed, singing the Willow Song about abandoned love. She and Emilia discuss whether women would ever commit adultery. Emilia's proto-feminist speech argues that wives have the same feelings as husbands.",
    modernSummary: "Desdemona prepares for bed, sensing something terrible coming. She tells Emilia about her mother's maid Barbary who was abandoned by her lover and sang the 'Willow Song' before dying. Desdemona sings it herself. She asks Emilia if she thinks there are really women who cheat on their husbands. Emilia says yes, and gives a speech about how husbands treat their wives badly, so why should wives be held to higher standards? Desdemona says she wouldn't cheat even for all the world.",
    keyMoments: ["The Willow Song - foreshadowing death", "Emilia's feminist speech about women's equality", "The contrast between Desdemona's idealism and Emilia's pragmatism"],
    significance: "A quiet, haunting scene before the storm. The Willow Song connects female love with death. Emilia's speech is remarkable for its time." },
  { act: 5, scene: 1, title: "A Street", setting: "A street.",
    summary: "Roderigo attacks Cassio but is wounded. Iago wounds Cassio from behind and kills Roderigo to silence him. Bianca's presence allows Iago to blame her for the attack.",
    modernSummary: "Roderigo tries to kill Cassio but only manages to wound him slightly. Cassio fights back and wounds Roderigo. Iago sneaks up and stabs Cassio in the leg, then runs away. Othello hears the commotion and thinks Iago has kept his promise to kill Cassio - this strengthens his resolve to kill Desdemona. Lodovico and Gratiano find the wounded men. Iago returns, 'discovering' the scene, and kills Roderigo, pretending to be avenging Cassio. When Bianca arrives, Iago uses her as a scapegoat.",
    keyMoments: ["The failed assassination attempt", "Iago kills Roderigo to silence him", "Othello is further convinced to proceed with murder"],
    significance: "The violence escalates. Iago shows his willingness to kill when necessary while maintaining his innocent appearance." },
  { act: 5, scene: 2, title: "A Bedchamber", setting: "A bedchamber in the castle. Desdemona in bed asleep.",
    summary: "Othello smothers Desdemona despite her protests of innocence. Emilia discovers the murder and exposes Iago's plot. Othello wounds Iago and kills himself. Iago is arrested; Cassio becomes governor of Cyprus.",
    modernSummary: "Othello enters the bedroom where Desdemona sleeps. In a famous soliloquy, he steels himself for murder while still struggling with love. He wakes her with a kiss. He tells her to pray, to make peace with God before dying. Desdemona begs for her life, denies the affair, and asks for proof. When Othello says Cassio confessed and has her handkerchief, and that he's already dead, Desdemona weeps - which Othello takes as proof of guilt. He smothers her. Emilia pounds on the door with news that Cassio has survived. She discovers Desdemona dying - who protects Othello with her last breath ('Nobody; I myself'). When Emilia learns Othello did it because of the handkerchief, she realises Iago's plot and exposes him despite his threats. Iago kills her. Othello attacks Iago but only wounds him. Letters found on Roderigo confirm everything. Othello gives a final speech about his service to Venice and his tragic error, then kills himself. Iago is arrested to face torture.",
    keyMoments: ["'It is the cause, it is the cause, my soul'", "The murder of Desdemona", "'Commend me to my kind lord' - Desdemona's dying words", "Emilia's exposure of Iago", "'I kissed thee ere I killed thee' - Othello's death", "'Demand me nothing. What you know, you know' - Iago's silence"],
    significance: "The tragic conclusion. Note the symmetry with the beginning: the play opened with Iago talking, it ends with his silence. Othello's final speech is controversial - self-justification or genuine insight?" }
];

const PAST_EXAM_QUESTIONS = [
  {
    year: 2023,
    question: "\"Othello's nobility makes his downfall even more tragic.\" Discuss this statement in the light of your reading of the play.",
    type: "Character",
    focus: ["Othello", "Tragedy", "Nobility"],
    hints: "Consider Othello's opening presentation vs his end. Use quotes showing his eloquence and dignity. Discuss whether nobility makes him vulnerable. Connect to the concept of hamartia."
  },
  {
    year: 2023,
    question: "\"Iago's motivations remain a mystery.\" Discuss this statement with reference to the play.",
    type: "Character",
    focus: ["Iago", "Motivation", "Villainy"],
    hints: "List his stated motives (promotion, Emilia, race). Are they adequate? Consider 'motiveless malignity'. Discuss his soliloquies and what they reveal."
  },
  {
    year: 2022,
    question: "\"The tragedy of Othello lies in the destruction of love.\" Discuss this view of the play.",
    type: "Theme",
    focus: ["Love", "Tragedy", "Relationships"],
    hints: "Examine the nature of Othello and Desdemona's love. How is it destroyed? Consider other relationships (Iago/Emilia, Cassio/Bianca). The handkerchief as symbol."
  },
  {
    year: 2021,
    question: "\"Desdemona's death was inevitable from the moment she married Othello.\" Discuss.",
    type: "Character/Theme",
    focus: ["Desdemona", "Marriage", "Fate"],
    hints: "Consider societal attitudes to their marriage. Brabantio's warning. Whether Desdemona has agency. The role of the handkerchief."
  },
  {
    year: 2020,
    question: "\"Iago succeeds because other characters have fatal weaknesses.\" Discuss with reference to the play.",
    type: "Character",
    focus: ["Iago", "Othello", "Cassio", "Weakness"],
    hints: "Identify each character's weakness. How does Iago exploit them? Othello's insecurity, Cassio's drinking, Roderigo's lovesickness."
  },
  {
    year: 2019,
    question: "\"In Othello, appearance counts for more than reality.\" Discuss.",
    type: "Theme",
    focus: ["Appearance vs Reality", "Deception"],
    hints: "Iago's reputation as 'honest'. The handkerchief as false proof. Whether anyone truly knows anyone else. Othello's misreading of Desdemona."
  },
  {
    year: 2018,
    question: "\"Emilia is the moral compass of the play.\" To what extent do you agree?",
    type: "Character",
    focus: ["Emilia", "Morality", "Women"],
    hints: "Her Act 4 Scene 3 speech. Her role in exposing Iago. Compare her moral growth to other characters. Her sacrifice."
  },
  {
    year: 2017,
    question: "\"Othello is not truly noble, but deeply flawed from the beginning.\" Discuss.",
    type: "Character",
    focus: ["Othello", "Nobility", "Flaws"],
    hints: "Examine his early speeches - confidence or arrogance? His insecurities about race and age. Does he truly know Desdemona? His transformation."
  },
  {
    year: 2016,
    question: "\"The handkerchief is the most important symbol in the play.\" Discuss the role of the handkerchief in Othello.",
    type: "Symbol/Theme",
    focus: ["Handkerchief", "Symbolism", "Evidence"],
    hints: "Its history (Egyptian charmer). Its journey through the play. What it represents to different characters. 'Ocular proof.'"
  },
  {
    year: 2015,
    question: "\"In Othello, Shakespeare creates a world where women are victims.\" Discuss.",
    type: "Theme",
    focus: ["Women", "Patriarchy", "Victimhood"],
    hints: "The fates of Desdemona, Emilia, and Bianca. Male control and ownership. But also female agency - Desdemona's choice to marry, Emilia's speech."
  }
];

const KEY_QUOTES = [
  { quote: "I am not what I am", speaker: "Iago", act: "1.1", theme: "Appearance vs Reality", analysis: "Iago's fundamental statement of his duplicitous nature. It inverts God's self-description in Exodus ('I am that I am'), suggesting Iago is diabolical. This is the key to understanding his character: he is pure deception." },
  { quote: "Even now, now, very now, an old black ram Is tupping your white ewe", speaker: "Iago", act: "1.1", theme: "Race", analysis: "Iago's racist imagery reduces Othello and Desdemona's love to bestial sexuality. The contrast of 'black' and 'white' emphasises racial difference. This establishes the racist context of Venetian society." },
  { quote: "She loved me for the dangers I had passed, And I loved her that she did pity them", speaker: "Othello", act: "1.3", theme: "Love", analysis: "Othello explains how they fell in love through storytelling. But this raises questions: do they love each other, or the romantic narrative? Is their love based on idealisation rather than reality?" },
  { quote: "Look to her, Moor, if thou hast eyes to see: She has deceived her father, and may thee", speaker: "Brabantio", act: "1.3", theme: "Deception", analysis: "Brabantio's bitter warning will later be twisted by Iago. Note the irony: Desdemona 'deceived' her father to marry Othello out of love, not deception. But Iago uses this to suggest a pattern of betrayal." },
  { quote: "Put money in thy purse", speaker: "Iago", act: "1.3", theme: "Manipulation", analysis: "Repeated cynically to Roderigo, showing Iago's mercenary nature. He uses Roderigo's money while mocking his foolishness. The repetition has an almost hypnotic quality." },
  { quote: "The Moor is of a free and open nature, That thinks men honest that but seem to be so", speaker: "Iago", act: "1.3", theme: "Manipulation", analysis: "Iago's cold assessment of Othello's vulnerability. He identifies trust as a weakness to exploit. This is villain as psychologist." },
  { quote: "O, I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial", speaker: "Cassio", act: "2.3", theme: "Reputation", analysis: "Cassio's despair at losing his position. The word 'reputation' appears three times. Ironically, Iago will soon give a famous speech dismissing reputation as 'an idle and most false imposition'." },
  { quote: "Reputation is an idle and most false imposition; oft got without merit, and lost without deserving", speaker: "Iago", act: "2.3", theme: "Reputation", analysis: "Iago dismisses reputation while preparing to use others' concern for it. The irony: Iago's own reputation as 'honest' is his greatest weapon. He believes nothing he says to others." },
  { quote: "O, beware, my lord, of jealousy! It is the green-eyed monster which doth mock the meat it feeds on", speaker: "Iago", act: "3.3", theme: "Jealousy", analysis: "The most famous lines about jealousy in literature. Note the brilliant manipulation: by warning against jealousy, Iago plants it. The 'green-eyed monster' has entered everyday language." },
  { quote: "Trifles light as air Are to the jealous confirmations strong As proofs of holy writ", speaker: "Iago", act: "3.3", theme: "Jealousy", analysis: "Iago describes how jealousy distorts perception. This foreshadows the handkerchief - a 'trifle' that becomes 'proof'. The religious imagery ('holy writ') shows how jealousy becomes a false religion." },
  { quote: "I had rather be a toad And live upon the vapour of a dungeon Than keep a corner in the thing I love For others' uses", speaker: "Othello", act: "3.3", theme: "Jealousy", analysis: "Othello expresses his horror at the idea of sharing Desdemona. The language becomes increasingly ugly ('toad', 'dungeon', 'thing'). He's already beginning to dehumanise her." },
  { quote: "Haply, for I am black And have not those soft parts of conversation That chamberers have", speaker: "Othello", act: "3.3", theme: "Race", analysis: "Othello internalises racist assumptions about himself. He sees his blackness and age as deficiencies. This is Iago's poison working: making Othello see himself through racist eyes." },
  { quote: "Her name, that was as fresh As Dian's visage, is now begrimed and black As mine own face", speaker: "Othello", act: "3.3", theme: "Race", analysis: "Othello uses his own blackness as a metaphor for corruption. He associates whiteness with purity (Dian/Diana, goddess of chastity) and blackness with sin. He has completely absorbed racist thinking." },
  { quote: "Villain, be sure thou prove my love a whore! Be sure of it. Give me the ocular proof", speaker: "Othello", act: "3.3", theme: "Evidence", analysis: "Othello demands visible proof but will accept fabricated evidence. The phrase 'ocular proof' is ironic: seeing is not believing in this play. His eyes will deceive him." },
  { quote: "Tis not a year or two shows us a man. They are all but stomachs, and we all but food: They eat us hungerly, and when they are full They belch us", speaker: "Emilia", act: "3.4", theme: "Men and Women", analysis: "Emilia's cynical view of marriage. Men consume and discard women. This bitter wisdom contrasts with Desdemona's idealism and proves prophetic." },
  { quote: "Let husbands know Their wives have sense like them: they see, and smell, And have their palates both for sweet and sour, As husbands have", speaker: "Emilia", act: "4.3", theme: "Women", analysis: "Emilia's proto-feminist manifesto. She argues women are equal to men in their feelings and desires. Revolutionary for Shakespeare's time and a key passage for essays on gender." },
  { quote: "His unkindness may defeat my life, But never taint my love", speaker: "Desdemona", act: "4.2", theme: "Love", analysis: "Desdemona's unconditional love even when Othello mistreats her. Some see this as weakness; others as strength. Either way, it shows the complete contrast with Othello's conditional love." },
  { quote: "It is the cause, it is the cause, my soul. Let me not name it to you, you chaste stars!", speaker: "Othello", act: "5.2", theme: "Self-Deception", analysis: "Othello can't name what he's about to do (murder), calling it 'the cause'. He appeals to 'chaste stars' while about to kill his chaste wife. The self-deception is complete." },
  { quote: "Put out the light, and then put out the light", speaker: "Othello", act: "5.2", theme: "Death", analysis: "The double meaning: he'll extinguish the candle, then Desdemona's life. The repetition emphasises the finality. Light symbolises Desdemona's life and goodness." },
  { quote: "Nobody; I myself. Farewell. Commend me to my kind lord", speaker: "Desdemona", act: "5.2", theme: "Love", analysis: "Desdemona's dying words protect Othello. She calls him 'kind' even as he kills her. This either shows ultimate forgiveness or ultimate victimhood. A key moment for interpretation." },
  { quote: "I kissed thee ere I killed thee: no way but this, Killing myself, to die upon a kiss", speaker: "Othello", act: "5.2", theme: "Love and Death", analysis: "Othello's final words link love and death. The kiss bookends the relationship (cf. his arrival in Cyprus). There's a terrible romanticism that may be self-serving or genuinely tragic." },
  { quote: "Demand me nothing. What you know, you know. From this time forth I never will speak word", speaker: "Iago", act: "5.2", theme: "Silence", analysis: "Iago's final silence is his last act of control. By refusing to explain, he denies closure. Some see this as pure evil; others as recognition that his motives are inexplicable even to himself." }
];

const LITERARY_TECHNIQUES = [
  { name: "Dramatic Irony", definition: "When the audience knows something characters don't", examples: ["Iago is called 'honest' repeatedly", "Othello trusts Iago completely", "The audience knows Desdemona is innocent"], significance: "Creates tension and makes the tragedy more painful to watch" },
  { name: "Soliloquy", definition: "A speech where a character reveals their inner thoughts to the audience", examples: ["Iago's plotting soliloquies in Acts 1-2", "Othello's 'It is the cause' speech"], significance: "Reveals true motivations, especially Iago's villainy" },
  { name: "Imagery", definition: "Vivid descriptive language creating mental pictures", examples: ["Animal imagery (ram, ewe, beast)", "Hell and devil imagery for Iago", "Disease imagery ('pestilence')", "Black and white throughout"], significance: "Reinforces themes of bestiality, evil, and racial difference" },
  { name: "Symbolism", definition: "Objects that represent larger meanings", examples: ["The handkerchief (love, fidelity, 'proof')", "Light/dark (innocence, corruption)", "The bed (marriage, death)"], significance: "The handkerchief carries enormous symbolic weight throughout" },
  { name: "Prose vs Verse", definition: "Shakespeare uses both prose and iambic pentameter", examples: ["Othello speaks verse but descends to prose when jealous", "Iago often uses prose with Roderigo"], significance: "Verse indicates nobility; prose can indicate lowered state or manipulation" },
  { name: "Repetition", definition: "Repeated words and phrases for emphasis", examples: ["'Put money in thy purse'", "'Honest' (for Iago)", "'The handkerchief!'", "'It is the cause'"], significance: "Creates emphasis, shows obsession, builds dramatic tension" },
  { name: "Foreshadowing", definition: "Hints about future events", examples: ["Brabantio's warning about deception", "The Willow Song before Desdemona's death", "Othello's 'If it were now to die'"], significance: "Creates sense of inevitable tragedy" },
  { name: "Contrast", definition: "Juxtaposition of opposites", examples: ["Venice vs Cyprus", "Othello's public vs private self", "Desdemona's innocence vs Iago's corruption"], significance: "Highlights the play's central conflicts" },
  { name: "Asides", definition: "Brief comments to the audience that other characters don't hear", examples: ["Iago's commentary on his own plotting"], significance: "Creates complicity between Iago and audience" }
];

// KEY EXCERPTS - Original Shakespeare with Modern Translations
// These are the most important passages for LC study
const PLAY_TEXT = {
  "1.1": {
    title: "Act 1, Scene 1 - Key Excerpts",
    setting: "Venice. A street at night.",
    excerpts: [
      {
        speaker: "IAGO",
        lines: "1-6",
        original: "'Sblood, but you will not hear me:\nIf ever I did dream of such a matter, Abhor me.",
        modern: "By God's blood, you won't listen to me! If I ever even dreamed of such a thing, hate me.",
        significance: "Opening establishes Iago's relationship with Roderigo and his ability to manipulate."
      },
      {
        speaker: "IAGO",
        lines: "41-65",
        original: "Three great ones of the city,\nIn personal suit to make me his lieutenant,\nOff-capp'd to him: and, by the faith of man,\nI know my price, I am worth no worse a place:\nBut he, as loving his own pride and purposes,\nEvades them, with a bombast circumstance\nHorribly stuff'd with epithets of war;\nAnd, in conclusion,\nNonsuits my mediators; for, 'Certes,' says he,\n'I have already chose my officer.'\nAnd what was he?\nForsooth, a great arithmetician,\nOne Michael Cassio, a Florentine,\nA fellow almost damn'd in a fair wife;\nThat never set a squadron in the field,\nNor the division of a battle knows\nMore than a spinster.",
        modern: "Three important men of the city personally asked him to make me his lieutenant. They took off their caps to him respectfully. And by my faith as a man, I know my worth - I deserve no less a position. But he, loving his own pride and purposes, avoided them with pompous military jargon. And in the end he rejected my supporters. 'Certainly,' he says, 'I have already chosen my officer.' And who was it? Some bookkeeper, one Michael Cassio from Florence, a man who's barely kept a woman, who never led soldiers in the field, who knows no more about war tactics than a housewife.",
        significance: "Reveals Iago's motivation - professional jealousy over Cassio's promotion. Note his contempt for Cassio's theoretical knowledge versus his own practical experience."
      },
      {
        speaker: "IAGO",
        lines: "65-67",
        original: "I am not what I am.",
        modern: "I am not what I appear to be.",
        significance: "THE KEY QUOTE. Inverts God's 'I am that I am' from Exodus. Establishes Iago's fundamental deception and possibly diabolical nature."
      },
      {
        speaker: "IAGO",
        lines: "88-91",
        original: "Even now, now, very now, an old black ram\nIs tupping your white ewe. Arise, arise;\nAwake the snorting citizens with the bell,\nOr else the devil will make a grandsire of you.",
        modern: "Right now, at this very moment, an old black ram is having sex with your white lamb. Get up! Wake the snoring citizens with the alarm bell, or the devil will make you a grandfather.",
        significance: "Racist and bestial imagery reduces Othello and Desdemona's love to animal sexuality. Black/white contrast emphasises racial otherness."
      },
      {
        speaker: "BRABANTIO",
        lines: "170-175",
        original: "O thou foul thief, where hast thou stow'd my daughter?\nDamn'd as thou art, thou hast enchanted her;\nFor I'll refer me to all things of sense,\nIf she in chains of magic were not bound,\nWhether a maid so tender, fair and happy,\nSo opposite to marriage that she shunn'd\nThe wealthy curled darlings of our nation,\nWould ever have, to incur a general mock,\nRun from her guardage to the sooty bosom\nOf such a thing as thou, to fear, not to delight.",
        modern: "You foul thief! Where have you hidden my daughter? Damned as you are, you must have bewitched her. I appeal to common sense - if she weren't bound by magic spells, would a girl so tender, beautiful and happy, so opposed to marriage that she refused the wealthy, curly-haired darlings of our nation, would she ever have run from my protection to the sooty chest of a thing like you - something to fear, not to delight in?",
        significance: "Brabantio's accusation of witchcraft reflects racist assumptions. Note 'thing' dehumanises Othello."
      }
    ]
  },
  "1.2": {
    title: "Act 1, Scene 2 - Key Excerpts",
    setting: "Venice. Before the Sagittary inn.",
    excerpts: [
      {
        speaker: "OTHELLO",
        lines: "17-24",
        original: "Let him do his spite:\nMy services which I have done the signiory\nShall out-tongue his complaints. 'Tis yet to know,—\nWhich, when I know that boasting is an honour,\nI shall promulgate—I fetch my life and being\nFrom men of royal siege, and my demerits\nMay speak unbonneted to as proud a fortune\nAs this that I have reach'd.",
        modern: "Let him do his worst. My services to the state will outweigh his complaints. Though I don't like to boast, when I must I'll reveal that I come from men of royal rank, and my merits can speak without cap-in-hand to any fortune as great as the one I've achieved.",
        significance: "First speech showing Othello's dignity and confidence. His noble bearing contradicts the racist imagery of Scene 1."
      },
      {
        speaker: "OTHELLO",
        lines: "25-28",
        original: "For know, Iago,\nBut that I love the gentle Desdemona,\nI would not my unhoused free condition\nPut into circumscription and confine\nFor the sea's worth.",
        modern: "Iago, know this - if it weren't that I love gentle Desdemona, I wouldn't give up my free bachelor life for all the treasures of the sea.",
        significance: "Shows the depth of Othello's love - he's given up his freedom only for Desdemona."
      },
      {
        speaker: "OTHELLO",
        lines: "59-62",
        original: "Keep up your bright swords, for the dew will rust them.\nGood signior, you shall more command with years\nThan with your weapons.",
        modern: "Put away your shining swords - the dew will rust them. Good sir, you command more respect through your age than through your weapons.",
        significance: "Othello's calm authority. He defuses violence with dignity - the opposite of what racist imagery suggested."
      }
    ]
  },
  "1.3": {
    title: "Act 1, Scene 3 - Key Excerpts",
    setting: "Venice. The Duke's council chamber.",
    excerpts: [
      {
        speaker: "OTHELLO",
        lines: "76-94",
        original: "Most potent, grave, and reverend signiors,\nMy very noble and approved good masters,\nThat I have ta'en away this old man's daughter,\nIt is most true; true, I have married her:\nThe very head and front of my offending\nHath this extent, no more. Rude am I in my speech,\nAnd little blest with the soft phrase of peace:\nFor since these arms of mine had seven years' pith,\nTill now some nine moons wasted, they have used\nTheir dearest action in the tented field,\nAnd little of this great world can I speak,\nMore than pertains to feats of broil and battle,\nAnd therefore little shall I grace my cause\nIn speaking for myself.",
        modern: "Most powerful, grave, and respected lords, my very noble and proven good masters: that I have taken away this old man's daughter is quite true - I have married her. That is the full extent of my offence, no more. I am rough in my speech, not blessed with smooth, peaceful words. Since I was seven years old, until nine months ago, my arms have been used for military action in the battlefield. I can speak little of this great world except what relates to fighting and battle. Therefore I won't do myself justice in speaking for myself.",
        significance: "Othello's famous 'apology' for his speech - profoundly ironic since the speech itself is eloquent. His military identity dominates."
      },
      {
        speaker: "OTHELLO",
        lines: "128-170",
        original: "Her father loved me; oft invited me;\nStill question'd me the story of my life,\nFrom year to year, the battles, sieges, fortunes,\nThat I have passed.\nI ran it through, even from my boyish days,\nTo the very moment that he bade me tell it;\nWherein I spake of most disastrous chances,\nOf moving accidents by flood and field\nOf hair-breadth scapes i' the imminent deadly breach,\nOf being taken by the insolent foe\nAnd sold to slavery, of my redemption thence\nAnd portance in my travels' history:\nWherein of antres vast and deserts idle,\nRough quarries, rocks and hills whose heads touch heaven\nIt was my hint to speak,—such was the process;\nAnd of the Cannibals that each other eat,\nThe Anthropophagi and men whose heads\nDo grow beneath their shoulders. This to hear\nWould Desdemona seriously incline.",
        modern: "Her father loved me and often invited me. He kept asking me about my life story - year by year, the battles, sieges, and fortunes I'd experienced. I told him everything from my boyhood days to the moment he asked. I spoke of terrible disasters, of thrilling adventures by sea and land, of hairbreadth escapes from deadly danger, of being captured by arrogant enemies and sold into slavery, of my release and behavior during my travels. I spoke of vast caves and empty deserts, rough quarries, rocks and hills that touched the sky. And of the Cannibals who eat each other, and men whose heads grow beneath their shoulders. Desdemona would listen intently to all this.",
        significance: "The storytelling that won Desdemona - romantic but also exoticising. Does she love him or his stories?"
      },
      {
        speaker: "OTHELLO",
        lines: "167-170",
        original: "She loved me for the dangers I had passed,\nAnd I loved her that she did pity them.\nThis only is the witchcraft I have used.",
        modern: "She loved me for the dangers I had experienced, and I loved her because she pitied me for them. This is the only witchcraft I've used.",
        significance: "CRUCIAL QUOTE. Their love is built on storytelling and sympathy. Is this real intimacy or romantic fantasy?"
      },
      {
        speaker: "DESDEMONA",
        lines: "180-189",
        original: "My noble father,\nI do perceive here a divided duty:\nTo you I am bound for life and education;\nMy life and education both do learn me\nHow to respect you; you are the lord of duty;\nI am hitherto your daughter: but here's my husband,\nAnd so much duty as my mother show'd\nTo you, preferring you before her father,\nSo much I challenge that I may profess\nDue to the Moor my lord.",
        modern: "My noble father, I see that I have a divided duty here. To you I owe my life and upbringing - they have taught me how to respect you. You are my duty's master, and I have been your daughter up to now. But here is my husband. And just as much duty as my mother showed you by preferring you over her own father, that much duty I now owe to Othello, my lord.",
        significance: "Desdemona's diplomatic speech shows intelligence and courage. She asserts her choice while respecting her father."
      },
      {
        speaker: "DESDEMONA",
        lines: "253-256",
        original: "I saw Othello's visage in his mind,\nAnd to his honour and his valiant parts\nDid I my soul and fortunes consecrate.",
        modern: "I saw Othello's true face in his mind and character. To his honour and brave qualities I dedicated my soul and future.",
        significance: "She loves who he IS, not his appearance. But does she truly know him, or an idealised version?"
      },
      {
        speaker: "BRABANTIO",
        lines: "293-294",
        original: "Look to her, Moor, if thou hast eyes to see:\nShe has deceived her father, and may thee.",
        modern: "Watch her, Moor, if you can see clearly: she deceived her father, and may deceive you too.",
        significance: "Brabantio's bitter warning - Iago will twist this later. The 'deception' was actually choosing love over duty."
      },
      {
        speaker: "IAGO",
        lines: "383-404",
        original: "Thus do I ever make my fool my purse:\nFor I mine own gain'd knowledge should profane,\nIf I would time expend with such a snipe.\nBut for my sport and profit. I hate the Moor:\nAnd it is thought abroad, that 'twixt my sheets\nHe has done my office: I know not if't be true;\nBut I, for mere suspicion in that kind,\nWill do as if for surety. He holds me well;\nThe better shall my purpose work on him...\nCassio's a proper man: let me see now:\nTo get his place and to plume up my will\nIn double knavery—How, how? Let's see:—\nAfter some time, to abuse Othello's ear\nThat he is too familiar with his wife.",
        modern: "This is how I always make my fool my cash source. I'd be wasting my knowledge if I spent time with such an idiot except for fun and profit. I hate the Moor. And it's rumored that he's slept with my wife. I don't know if it's true, but on mere suspicion I'll act as if it were certain. He trusts me completely - the better for my plan to work on him... Cassio is a handsome man. Let me see: to take his position and advance my own schemes through double treachery - how? Let me see: after some time, I'll poison Othello's ear that Cassio is too friendly with his wife.",
        significance: "Iago's soliloquy reveals his plan. Note multiple motives given (hate, sexual jealousy). Are they reasons or rationalizations?"
      },
      {
        speaker: "IAGO",
        lines: "404-406",
        original: "The Moor is of a free and open nature,\nThat thinks men honest that but seem to be so,\nAnd will as tenderly be led by the nose\nAs asses are.",
        modern: "The Moor has a free and open nature. He thinks men are honest simply because they appear to be. He'll be as easily led by the nose as donkeys are.",
        significance: "Iago's cold assessment of Othello's trusting nature as a weakness to exploit."
      }
    ]
  },
  "2.1": {
    title: "Act 2, Scene 1 - Key Excerpts",
    setting: "Cyprus. A sea-port.",
    excerpts: [
      {
        speaker: "CASSIO",
        lines: "68-77",
        original: "Tempests themselves, high seas and howling winds,\nThe gutter'd rocks and congregated sands,—\nTraitors ensteep'd to clog the guiltless keel,—\nAs having sense of beauty, do omit\nTheir mortal natures, letting go safely by\nThe divine Desdemona.",
        modern: "The storms themselves, the high seas and howling winds, the jagged rocks and gathered sands - traitors lying in wait to damage innocent ships - all seemed to sense her beauty and abandoned their deadly natures, letting divine Desdemona pass safely.",
        significance: "Cassio's courtly, worshipful language toward Desdemona - innocent but later used by Iago as 'evidence'."
      },
      {
        speaker: "OTHELLO",
        lines: "186-193",
        original: "O my soul's joy!\nIf after every tempest come such calms,\nMay the winds blow till they have waken'd death!\nAnd let the labouring bark climb hills of seas\nOlympus-high and duck again as low\nAs hell's from heaven! If it were now to die,\n'Twere now to be most happy; for, I fear,\nMy soul hath her content so absolute\nThat not another comfort like to this\nSucceeds in unknown fate.",
        modern: "Oh joy of my soul! If such calm follows every storm, may the winds blow until they wake death! Let the struggling ship climb waves as high as Mount Olympus and dive as low as hell is from heaven! If I were to die now, this would be the happiest moment. I fear my soul is so completely content that no other joy like this will come in my unknown future.",
        significance: "Othello's joyful reunion - but the speech foreshadows tragedy. 'If it were now to die' becomes grimly prophetic."
      },
      {
        speaker: "IAGO",
        lines: "199-200",
        original: "O, you are well tuned now!\nBut I'll set down the pegs that make this music,\nAs honest as I am.",
        modern: "Oh, you are in perfect harmony now! But I'll loosen the tuning pegs that make this music, as honest as I am.",
        significance: "Musical metaphor shows Iago's intention to destroy their harmony. Ironic use of 'honest'."
      }
    ]
  },
  "2.3": {
    title: "Act 2, Scene 3 - Key Excerpts",
    setting: "Cyprus. A hall in the castle.",
    excerpts: [
      {
        speaker: "IAGO",
        lines: "47-52",
        original: "If I can fasten but one cup upon him,\nWith that which he hath drunk to-night already,\nHe'll be as full of quarrel and offence\nAs my young mistress' dog.",
        modern: "If I can just get one more cup into him, on top of what he's already drunk tonight, he'll be as full of argument and aggression as my young mistress's dog.",
        significance: "Iago's calculated plan to exploit Cassio's weakness for alcohol."
      },
      {
        speaker: "CASSIO",
        lines: "264-273",
        original: "Reputation, reputation, reputation! O, I have lost\nmy reputation! I have lost the immortal part of\nmyself, and what remains is bestial. My reputation,\nIago, my reputation!",
        modern: "Reputation, reputation, reputation! Oh, I have lost my reputation! I have lost the immortal part of myself, and what remains is bestial. My reputation, Iago, my reputation!",
        significance: "Cassio's despair at losing his position. The triple repetition emphasises the importance of reputation in this society."
      },
      {
        speaker: "IAGO",
        lines: "274-278",
        original: "Reputation is an idle and most false imposition: oft\ngot without merit, and lost without deserving: you\nhave lost no reputation at all, unless you repute\nyourself such a loser.",
        modern: "Reputation is an empty and mostly false idea - often gained without merit and lost without deserving. You haven't lost any reputation at all, unless you think of yourself as a loser.",
        significance: "Iago cynically dismisses reputation while planning to manipulate others' concern for it. His own reputation as 'honest' is his weapon."
      },
      {
        speaker: "IAGO",
        lines: "330-356",
        original: "I'll pour this pestilence into his ear,\nThat she repeals him for her body's lust;\nAnd by how much she strives to do him good,\nShe shall undo her credit with the Moor.\nSo will I turn her virtue into pitch,\nAnd out of her own goodness make the net\nThat shall enmesh them all.",
        modern: "I'll pour this poison into his ear - that she's trying to get Cassio reinstated because she lusts for him. And the more she tries to do Cassio good, the more she'll damage her reputation with the Moor. I'll turn her virtue into tar, and out of her own goodness make the net that will trap them all.",
        significance: "Iago's soliloquy reveals his method: turning Desdemona's virtues into 'evidence' of guilt. Her goodness becomes the trap."
      }
    ]
  },
  "3.3": {
    title: "Act 3, Scene 3 - The Temptation Scene",
    setting: "Cyprus. The garden of the castle.",
    excerpts: [
      {
        speaker: "IAGO",
        lines: "35",
        original: "Ha! I like not that.",
        modern: "Ha! I don't like that.",
        significance: "Four words that begin Othello's destruction. Iago plants the first seed of suspicion."
      },
      {
        speaker: "IAGO",
        lines: "93-101",
        original: "Did Michael Cassio, when you woo'd my lady,\nKnow of your love?",
        modern: "Did Michael Cassio know about your love when you were courting my lady?",
        significance: "Iago's question implies a previous relationship. He plants suspicion through innocent-seeming questions."
      },
      {
        speaker: "IAGO",
        lines: "121-124",
        original: "I am glad of it; for now I shall have reason\nTo show the love and duty that I bear you\nWith franker spirit: therefore, as I am bound,\nReceive it from me. I speak not yet of proof.",
        modern: "I'm glad of it, because now I have reason to show you the love and duty I feel for you more openly. Therefore, as I'm obliged to, accept this from me. I don't speak yet of proof.",
        significance: "Iago positions himself as a reluctant truth-teller, bound by loyalty to speak despite his reservations."
      },
      {
        speaker: "IAGO",
        lines: "165-170",
        original: "O, beware, my lord, of jealousy;\nIt is the green-eyed monster which doth mock\nThe meat it feeds on; that cuckold lives in bliss\nWho, certain of his fate, loves not his wronger;\nBut, O, what damned minutes tells he o'er\nWho dotes, yet doubts, suspects, yet strongly loves!",
        modern: "Oh, beware, my lord, of jealousy! It is the green-eyed monster that mocks the meat it feeds on. The cuckold who knows his fate for certain and doesn't love the woman who wronged him lives in bliss. But oh, what damned minutes the man counts who loves deeply yet doubts, suspects yet strongly loves!",
        significance: "THE FAMOUS SPEECH. By warning against jealousy, Iago creates it. The 'green-eyed monster' has entered common language."
      },
      {
        speaker: "IAGO",
        lines: "232-238",
        original: "I know our country disposition well;\nIn Venice they do let heaven see the pranks\nThey dare not show their husbands; their best conscience\nIs not to leave't undone, but keep't unknown.",
        modern: "I know the character of our country well. In Venice they let heaven see the tricks they dare not show their husbands. Their idea of conscience is not to leave it undone, but to keep it hidden.",
        significance: "Iago uses cultural prejudice - Venetian women are supposedly more deceptive. He exploits Othello's outsider status."
      },
      {
        speaker: "IAGO",
        lines: "229-234",
        original: "She did deceive her father, marrying you;\nAnd when she seem'd to shake and fear your looks,\nShe loved them most.",
        modern: "She did deceive her father by marrying you. And when she seemed to tremble and fear your appearance, she loved it most.",
        significance: "Iago twists Brabantio's warning. Desdemona's 'deception' of her father becomes evidence she could deceive Othello."
      },
      {
        speaker: "OTHELLO",
        lines: "258-275",
        original: "Haply, for I am black\nAnd have not those soft parts of conversation\nThat chamberers have, or for I am declined\nInto the vale of years,—yet that's not much—\nShe's gone. I am abused; and my relief\nMust be to loathe her. O curse of marriage,\nThat we can call these delicate creatures ours,\nAnd not their appetites! I had rather be a toad,\nAnd live upon the vapour of a dungeon,\nThan keep a corner in the thing I love\nFor others' uses.",
        modern: "Perhaps because I am black and don't have those smooth social skills that courtiers have, or because I'm getting old - though that's not so much. She's gone. I've been deceived, and my only relief will be to hate her. Oh, curse of marriage - that we can call these delicate creatures ours but not their desires! I'd rather be a toad living on the vapour of a dungeon than keep a corner in the thing I love for others' use.",
        significance: "CRITICAL PASSAGE. Othello internalises racism, seeing his blackness and age as deficiencies. He begins to dehumanise Desdemona ('thing')."
      },
      {
        speaker: "OTHELLO",
        lines: "386-392",
        original: "Her name, that was as fresh\nAs Dian's visage, is now begrimed and black\nAs mine own face. If there be cords, or knives,\nPoison, or fire, or suffocating streams,\nI'll not endure it.",
        modern: "Her name, that was as fresh as the face of Diana, goddess of chastity, is now dirty and black as my own face. If there are ropes, or knives, poison, fire, or drowning streams - I won't endure it.",
        significance: "Othello uses his own blackness as a metaphor for corruption. He has completely absorbed racist thinking."
      },
      {
        speaker: "OTHELLO",
        lines: "360-365",
        original: "Villain, be sure thou prove my love a whore,\nBe sure of it; give me the ocular proof:\nOr by the worth of man's eternal soul,\nThou hadst been better have been born a dog\nThan answer my waked wrath!",
        modern: "Villain, be sure you prove my love is a whore. Be sure of it - give me visible proof! Or by the worth of man's eternal soul, you'd have been better born a dog than to face my awakened fury!",
        significance: "Othello demands 'ocular proof' - visual evidence. Ironically, his eyes will deceive him throughout."
      },
      {
        speaker: "IAGO",
        lines: "407-423",
        original: "I lay with Cassio lately;\nAnd, being troubled with a raging tooth,\nI could not sleep.\nThere are a kind of men so loose of soul,\nThat in their sleeps will mutter their affairs:\nOne of this kind is Cassio:\nIn sleep I heard him say 'Sweet Desdemona,\nLet us be wary, let us hide our loves;'\nAnd then, sir, would he gripe and wring my hand,\nCry 'O sweet creature!' and then kiss me hard,\nAs if he pluck'd up kisses by the roots\nThat grew upon my lips: then laid his leg\nOver my thigh, and sigh'd, and kiss'd.",
        modern: "I slept beside Cassio recently, and because I had a terrible toothache, I couldn't sleep. There are men so careless that they talk about their affairs in their sleep. Cassio is one of these. In his sleep I heard him say 'Sweet Desdemona, let us be careful, let us hide our love.' Then, sir, he would grip and squeeze my hand, cry 'Oh sweet creature!' and kiss me hard, as if plucking up kisses by the roots from my lips. Then he laid his leg over my thigh, sighed, and kissed me.",
        significance: "Iago invents a dream to provide 'evidence'. The detail and intimacy make it convincing. Pure fabrication."
      },
      {
        speaker: "IAGO",
        lines: "431-436",
        original: "Trifles light as air\nAre to the jealous confirmations strong\nAs proofs of holy writ.",
        modern: "Things as light as air are to the jealous as strong as the proofs of holy scripture.",
        significance: "Iago describes how jealousy distorts perception. The handkerchief will be such a 'trifle'."
      },
      {
        speaker: "OTHELLO",
        lines: "453-460",
        original: "O, blood, blood, blood!\nNever, Iago: Like to the Pontic sea,\nWhose icy current and compulsive course\nNe'er feels retiring ebb, but keeps due on\nTo the Propontic and the Hellespont,\nEven so my bloody thoughts, with violent pace,\nShall ne'er look back, ne'er ebb to humble love,\nTill that a capable and wide revenge\nSwallow them up.",
        modern: "Oh, blood, blood, blood! Never, Iago. Like the Black Sea, whose icy current and powerful course never retreats but keeps flowing on to the Sea of Marmara and the Dardanelles - just so my bloody thoughts, with violent pace, will never look back, never return to humble love, until a sufficient and wide revenge swallows them up.",
        significance: "Othello's language becomes violent and unstoppable, like the sea he describes. He commits to revenge."
      },
      {
        speaker: "IAGO",
        lines: "469-476",
        original: "I am your own for ever.",
        modern: "I am yours forever.",
        significance: "The scene ends with Iago's fake declaration of loyalty - a perverse wedding vow."
      }
    ]
  },
  "3.4": {
    title: "Act 3, Scene 4 - Key Excerpts",
    setting: "Before the castle.",
    excerpts: [
      {
        speaker: "OTHELLO",
        lines: "55-73",
        original: "That handkerchief\nDid an Egyptian to my mother give;\nShe was a charmer, and could almost read\nThe thoughts of people: she told her, while she kept it,\n'Twould make her amiable and subdue my father\nEntirely to her love, but if she lost it\nOr made gift of it, my father's eye\nShould hold her loathed and his spirits should hunt\nAfter new fancies: she, dying, gave it me;\nAnd bid me, when my fate would have me wive,\nTo give it her. I did so: and take heed on't;\nMake it a darling like your precious eye;\nTo lose't or give't away were such perdition\nAs nothing else could match.",
        modern: "An Egyptian woman gave that handkerchief to my mother. She was a fortune-teller who could almost read people's thoughts. She told my mother that while she kept it, it would make her lovable and keep my father entirely devoted to her love. But if she lost it or gave it away, my father would loathe her and his heart would chase after new interests. Dying, she gave it to me and told me, when fate had me marry, to give it to my wife. I did so. Take care of it - make it precious like your own eye. To lose it or give it away would be a disaster like nothing else.",
        significance: "Othello creates (or relates) a magical history for the handkerchief. It represents their love - if lost, love is lost."
      }
    ]
  },
  "4.1": {
    title: "Act 4, Scene 1 - Key Excerpts",
    setting: "Before the castle.",
    excerpts: [
      {
        speaker: "OTHELLO",
        lines: "1-44",
        original: "Lie with her! lie on her! We say lie on her, when\nthey belie her. Lie with her! that's fulsome.\n--Handkerchief--confessions--handkerchief!--To\nconfess, and be hanged for his labour;--first, to be\nhanged, and then to confess.--I tremble at it...\nIt is not words that shake me thus. Pish! Noses,\nears, and lips.--Loss't possible?--Confess--Loss\nhandkerchief!--O devil!",
        modern: "Sleep with her! Lie on top of her! We say 'lie on her' when we mean 'slander her.' Sleep with her! That's disgusting. Handkerchief - confessions - handkerchief! To confess and be hanged for his effort - first hanged, then confess. I tremble at it... It's not words that shake me so. Pah! Noses, ears, lips. Is it possible? Confess - handkerchief! Oh devil!",
        significance: "Othello's language breaks down into fragments as jealousy overwhelms rational thought. He falls into an epileptic fit."
      },
      {
        speaker: "IAGO",
        lines: "93-104",
        original: "Stand you awhile apart;\nConfine yourself but in a patient list.\nWhilst you were here o'erwhelmed with your grief--\nA passion most unsuiting such a man--\nCassio came hither: I shifted him away,\nAnd laid good 'scuse upon your ecstasy,\nBade him anon return and here speak with me;\nThe which he promised. Do but encave yourself,\nAnd mark the fleers, the gibes, and notable scorns,\nThat dwell in every region of his face;\nFor I will make him tell the tale anew,\nWhere, how, how oft, how long ago, and when\nHe hath, and is again to cope your wife.",
        modern: "Stand aside for a while. Control yourself within patient limits. While you were here overcome with grief - an emotion very unsuitable for such a man - Cassio came here. I sent him away and made good excuses for your fit. I told him to return soon and speak with me, which he promised. Just hide yourself and observe the sneers, the jokes, and obvious scorn that show in every part of his face. I'll make him tell the story again - where, how, how often, how long ago, and when he has had and will again have sex with your wife.",
        significance: "Iago sets up the eavesdropping scene - but he'll actually ask Cassio about Bianca while Othello thinks they discuss Desdemona."
      }
    ]
  },
  "4.2": {
    title: "Act 4, Scene 2 - Key Excerpts",
    setting: "A room in the castle.",
    excerpts: [
      {
        speaker: "DESDEMONA",
        lines: "152-156",
        original: "Unkindness may do much;\nAnd his unkindness may defeat my life,\nBut never taint my love. I cannot say 'whore:'\nIt does abhor me now I speak the word;\nTo do the act that might the addition earn\nNot the world's mass of vanity could make me.",
        modern: "Unkindness can do much, and his unkindness may destroy my life, but it will never taint my love. I cannot say 'whore' - the word disgusts me to speak it. To do the act that might earn that title, not all the world's wealth could make me.",
        significance: "Desdemona's absolute love even in the face of cruelty. She cannot even say the word 'whore'."
      }
    ]
  },
  "4.3": {
    title: "Act 4, Scene 3 - Key Excerpts",
    setting: "Another room in the castle.",
    excerpts: [
      {
        speaker: "DESDEMONA",
        lines: "41-57",
        original: "The poor soul sat sighing by a sycamore tree,\nSing all a green willow:\nHer hand on her bosom, her head on her knee,\nSing willow, willow, willow:\nThe fresh streams ran by her, and murmur'd her moans;\nSing willow, willow, willow;\nHer salt tears fell from her, and soften'd the stones;\n—\nLay by these:—\nSing willow, willow, willow;\nPrithee, hie thee; he'll come anon:—\nSing all a green willow must be my garland.\nLet nobody blame him; his scorn I approve,—\nNay, that's not next.—Hark! who is't that knocks?",
        modern: "[THE WILLOW SONG] The poor soul sat sighing by a sycamore tree, / Sing all a green willow. / Her hand on her breast, her head on her knee, / Sing willow, willow, willow. / The fresh streams ran by her and echoed her moans, / Sing willow, willow, willow. / Her salt tears fell from her and softened the stones. / [Interrupting herself] Put these aside. Sing willow, willow, willow. / Please hurry; he'll come soon. / Sing all a green willow must be my garland. / Let nobody blame him; I approve of his scorn— / No, that's not next. Hark! Who's that knocking?",
        significance: "The Willow Song foreshadows Desdemona's death. She identifies with Barbara, a woman abandoned by her lover."
      },
      {
        speaker: "EMILIA",
        lines: "84-103",
        original: "But I do think it is their husbands' faults\nIf wives do fall: say that they slack their duties,\nAnd pour our treasures into foreign laps,\nOr else break out in peevish jealousies,\nThrowing restraint upon us; or say they strike us,\nOr scant our former having in despite;\nWhy, we have galls, and though we have some grace,\nYet have we some revenge. Let husbands know\nTheir wives have sense like them: they see and smell\nAnd have their palates both for sweet and sour,\nAs husbands have. What is it that they do\nWhen they change us for others? Is it sport?\nI think it is: and doth affection breed it?\nI think it doth: is't frailty that thus errs?\nIt is so too: and have not we affections,\nDesires for sport, and frailty, as men have?\nThen let them use us well: else let them know,\nThe ills we do, their ills instruct us so.",
        modern: "But I think it's husbands' fault if wives fall. Say they neglect their duties and give our treasures to other women, or break out in petty jealousies restraining us, or say they hit us, or reduce our allowances out of spite - why, we have tempers, and though we have some grace, we also want revenge. Let husbands know their wives have feelings like them: they see, smell, and taste both sweet and sour, just as husbands do. What is it that men do when they cheat on us? Is it for fun? I think so. Does passion cause it? I think so. Is it weakness that makes them err? That too. And don't we have passions, desires for fun, and weakness, as men do? Then let them treat us well, or let them know the wrongs we do are taught by their wrongs.",
        significance: "Emilia's PROTO-FEMINIST SPEECH. She argues women are equal to men in feelings and desires. Revolutionary for its time."
      }
    ]
  },
  "5.2": {
    title: "Act 5, Scene 2 - The Murder and Resolution",
    setting: "A bedchamber in the castle. Desdemona in bed asleep.",
    excerpts: [
      {
        speaker: "OTHELLO",
        lines: "1-22",
        original: "It is the cause, it is the cause, my soul,—\nLet me not name it to you, you chaste stars!—\nIt is the cause. Yet I'll not shed her blood;\nNor scar that whiter skin of hers than snow,\nAnd smooth as monumental alabaster.\nYet she must die, else she'll betray more men.\nPut out the light, and then put out the light:\nIf I quench thee, thou flaming minister,\nI can again thy former light restore,\nShould I repent me: but once put out thy light,\nThou cunning'st pattern of excelling nature,\nI know not where is that Promethean heat\nThat can thy light relume. When I have pluck'd the rose,\nI cannot give it vital growth again.\nIt must needs wither: I'll smell it on the tree.\nKissing her\nAh balmy breath, that dost almost persuade\nJustice to break her sword! One more, one more.\nBe thus when thou art dead, and I will kill thee,\nAnd love thee after. One more, and this the last.",
        modern: "It is the cause, it is the cause, my soul - let me not name it to you, you chaste stars. It is the cause. Yet I won't shed her blood or scar her skin, whiter than snow and smooth as alabaster on a tomb. Yet she must die, or she'll betray more men. Put out the light, and then put out the light: if I extinguish you, candle flame, I can restore your light again if I change my mind. But once I put out your light, you most beautiful creation of nature, I don't know where to find the divine fire that can relight you. When I have plucked the rose, I cannot make it grow again - it must wither. I'll smell it on the tree. [Kisses her] Ah, sweet breath, that almost persuades Justice to break her sword! One more kiss, one more. Be like this when you are dead, and I will kill you and love you afterwards. One more, and this is the last.",
        significance: "CRITICAL SPEECH. Othello cannot name what he's about to do ('the cause'). The double 'put out the light' refers to candle and life. His love persists even as he murders."
      },
      {
        speaker: "DESDEMONA",
        lines: "33-38",
        original: "Talk you of killing?\nAlas, why gnaw you so your nether lip?\nSome bloody passion shakes your very frame:\nThese are portents; but yet I hope, I hope,\nThey do not point on me.",
        modern: "Are you talking about killing? Alas, why are you biting your lower lip? Some bloody passion shakes your whole body. These are terrible signs - but still I hope, I hope, they don't point at me.",
        significance: "Desdemona senses death approaching. Her repeated 'I hope' shows fear breaking through."
      },
      {
        speaker: "DESDEMONA",
        lines: "59-62",
        original: "And have you mercy too! I never did\nOffend you in my life; never loved Cassio\nBut with such general warranty of heaven\nAs I might love: I never gave him token.",
        modern: "And have mercy too! I never offended you in my life. I never loved Cassio except with the kind of innocent, heaven-approved love I might feel for anyone. I never gave him any token.",
        significance: "Desdemona's true defense - she is completely innocent. But Othello cannot hear truth anymore."
      },
      {
        speaker: "DESDEMONA",
        lines: "125-126",
        original: "Commend me to my kind lord: O, farewell!",
        modern: "Give my regards to my kind lord. Oh, farewell!",
        significance: "Desdemona's dying words still call Othello 'kind' - either ultimate forgiveness or tragic blindness."
      },
      {
        speaker: "EMILIA",
        lines: "130-131",
        original: "O, who hath done this deed?",
        modern: "Oh, who has done this deed?",
        significance: "Emilia discovers the murder."
      },
      {
        speaker: "DESDEMONA",
        lines: "132",
        original: "Nobody; I myself. Farewell.",
        modern: "Nobody; I myself. Farewell.",
        significance: "Desdemona's final lie protects Othello. She takes blame for her own murder."
      },
      {
        speaker: "EMILIA",
        lines: "163-166",
        original: "I will not charm my tongue; I am bound to speak:\nMy mistress here lies murder'd in her bed,—",
        modern: "I will not be silent; I am bound to speak. My mistress lies here murdered in her bed—",
        significance: "Emilia chooses truth over safety. She exposes Iago despite the danger."
      },
      {
        speaker: "EMILIA",
        lines: "217-220",
        original: "Moor, she was chaste; she loved thee, cruel Moor;\nSo come my soul to bliss, as I speak true;\nSo speaking as I think, I die, I die.",
        modern: "Moor, she was chaste. She loved you, cruel Moor. As I hope my soul reaches heaven, I speak the truth. Speaking what I think, I die, I die.",
        significance: "Emilia's dying vindication of Desdemona. She dies speaking truth."
      },
      {
        speaker: "OTHELLO",
        lines: "340-356",
        original: "Soft you; a word or two before you go.\nI have done the state some service, and they know't.\nNo more of that. I pray you, in your letters,\nWhen you shall these unlucky deeds relate,\nSpeak of me as I am; nothing extenuate,\nNor set down aught in malice: then must you speak\nOf one that loved not wisely but too well;\nOf one not easily jealous, but being wrought\nPerplexed in the extreme; of one whose hand,\nLike the base Indian, threw a pearl away\nRicher than all his tribe; of one whose subdued eyes,\nAlbeit unused to the melting mood,\nDrop tears as fast as the Arabian trees\nTheir medicinal gum. Set you down this;\nAnd say besides, that in Aleppo once,\nWhere a malignant and a turban'd Turk\nBeat a Venetian and traduced the state,\nI took by the throat the circumcised dog,\nAnd smote him, thus.",
        modern: "Wait - a word or two before you go. I have done the state some service, and they know it. No more of that. Please, in your letters, when you report these unfortunate events, speak of me as I am - don't excuse anything, and don't set down anything in malice. Then you must speak of one who loved not wisely but too well; of one not easily made jealous, but when worked upon, extremely tormented; of one whose hand, like an ignorant native, threw away a pearl richer than his whole tribe; of one whose subdued eyes, though unused to tears, drop tears as fast as Arabian trees drop their healing resin. Write this down. And say besides that once in Aleppo, where an evil, turbaned Turk beat a Venetian and insulted the state, I took the uncircumcised dog by the throat and killed him - like this. [Stabs himself]",
        significance: "Othello's final speech attempts to control his legacy. 'Loved not wisely but too well' is partly true, partly self-justifying. He compares himself to both the pearl-throwing savage and the state-defending hero."
      },
      {
        speaker: "OTHELLO",
        lines: "358-360",
        original: "I kiss'd thee ere I kill'd thee: no way but this;\nKilling myself, to die upon a kiss.",
        modern: "I kissed you before I killed you. No way but this - killing myself, to die upon a kiss.",
        significance: "Othello's final words link love and death. The kiss bookends the relationship from his arrival in Cyprus."
      },
      {
        speaker: "IAGO",
        lines: "304-305",
        original: "Demand me nothing: what you know, you know:\nFrom this time forth I never will speak word.",
        modern: "Ask me nothing. What you know, you know. From now on I will never speak another word.",
        significance: "Iago's final silence is his last act of control. By refusing to explain, he denies closure forever."
      }
    ]
  }
};

const CONTEXT = {
  historical: {
    title: "Historical Context",
    points: [
      "Written around 1603-1604, early in King James I's reign",
      "Source: Cinthio's 'Un Capitano Moro' (1565) - Shakespeare transformed a moral tale into tragedy",
      "First performed at the Globe Theatre and at court",
      "Venice was seen as sophisticated but morally ambiguous",
      "Cyprus was a genuine military outpost - recently lost to the Turks in 1571"
    ]
  },
  racial: {
    title: "Race in Shakespeare's England",
    points: [
      "Black people were present in Elizabethan/Jacobean England, including at court",
      "Aaron in 'Titus Andronicus' was Shakespeare's earlier black character - a villain",
      "Othello is more sympathetically portrayed than previous black characters",
      "The play both reflects and challenges contemporary racism",
      "Scholars debate whether Shakespeare was critiquing racism or participating in it"
    ]
  },
  theatrical: {
    title: "Theatrical Context",
    points: [
      "All roles played by men/boys - Desdemona would be a boy actor",
      "Minimal scenery - language creates the setting",
      "Plays performed in daylight - 'Put out the light' would be purely symbolic",
      "The original Othello was Richard Burbage - probably in dark makeup"
    ]
  }
};
