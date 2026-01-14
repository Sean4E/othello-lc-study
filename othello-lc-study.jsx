import React, { useState, useEffect, useMemo, useRef } from 'react';

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

// MAIN APPLICATION COMPONENT
export default function OthelloStudyCompanion() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedScene, setSelectedScene] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizMode, setQuizMode] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [essayTopic, setEssayTopic] = useState('');
  const [essayPlan, setEssayPlan] = useState(null);
  const [bookmarkedQuotes, setBookmarkedQuotes] = useState([]);
  const [activeSceneAct, setActiveSceneAct] = useState(1);
  const contentRef = useRef(null);

  // Generate quiz questions
  const generateQuiz = () => {
    const questions = [];
    
    // Character questions
    Object.values(CHARACTERS).forEach(char => {
      if (char.keyQuotes && char.keyQuotes.length > 0) {
        const q = char.keyQuotes[Math.floor(Math.random() * char.keyQuotes.length)];
        questions.push({
          type: 'quote_speaker',
          question: `Who says: "${q.quote}"?`,
          answer: char.name,
          hint: `Act ${q.act}`
        });
      }
    });
    
    // Theme questions
    Object.values(THEMES).forEach(theme => {
      questions.push({
        type: 'theme',
        question: `What theme is represented by the phrase "the green-eyed monster"?`,
        answer: 'Jealousy',
        hint: 'Iago warns Othello about this in Act 3'
      });
    });

    // Mix and limit
    const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, 15);
    setQuizQuestions(shuffled);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setShowAnswer(false);
    setQuizMode(true);
  };

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const results = [];

    // Search quotes
    KEY_QUOTES.forEach(q => {
      if (q.quote.toLowerCase().includes(query) || 
          q.analysis.toLowerCase().includes(query) ||
          q.speaker.toLowerCase().includes(query)) {
        results.push({ type: 'quote', data: q });
      }
    });

    // Search characters
    Object.values(CHARACTERS).forEach(char => {
      if (char.name.toLowerCase().includes(query) || 
          char.description.toLowerCase().includes(query)) {
        results.push({ type: 'character', data: char });
      }
    });

    // Search themes
    Object.values(THEMES).forEach(theme => {
      if (theme.name.toLowerCase().includes(query) || 
          theme.description.toLowerCase().includes(query)) {
        results.push({ type: 'theme', data: theme });
      }
    });

    // Search scenes
    SCENES.forEach(scene => {
      if (scene.title.toLowerCase().includes(query) || 
          scene.summary.toLowerCase().includes(query) ||
          scene.modernSummary.toLowerCase().includes(query)) {
        results.push({ type: 'scene', data: scene });
      }
    });

    return results.slice(0, 20);
  }, [searchQuery]);

  // Essay planner
  const generateEssayPlan = () => {
    if (!essayTopic.trim()) return;
    
    const topic = essayTopic.toLowerCase();
    const plan = {
      topic: essayTopic,
      introduction: [],
      paragraphs: [],
      conclusion: [],
      relevantQuotes: []
    };

    // Find relevant themes
    Object.values(THEMES).forEach(theme => {
      if (topic.includes(theme.name.toLowerCase())) {
        plan.paragraphs.push({
          focus: theme.name,
          points: theme.keyPoints.slice(0, 3),
          quotes: theme.quotes
        });
        plan.relevantQuotes.push(...theme.quotes);
      }
    });

    // Find relevant characters
    Object.values(CHARACTERS).forEach(char => {
      if (topic.includes(char.name.toLowerCase())) {
        plan.paragraphs.push({
          focus: char.name,
          points: [char.arc, ...char.keyTraits.slice(0, 3).map(t => `${char.name} is ${t.toLowerCase()}`)],
          quotes: char.keyQuotes || []
        });
        if (char.keyQuotes) {
          plan.relevantQuotes.push(...char.keyQuotes);
        }
      }
    });

    // Generic structure if no specific match
    if (plan.paragraphs.length === 0) {
      plan.paragraphs = [
        { focus: "Introduction and Context", points: ["Define the topic", "Historical/theatrical context", "Thesis statement"], quotes: [] },
        { focus: "Main Argument 1", points: ["Key evidence", "Character analysis", "Textual support"], quotes: KEY_QUOTES.slice(0, 2) },
        { focus: "Main Argument 2", points: ["Develop analysis", "Counter-argument", "Further evidence"], quotes: KEY_QUOTES.slice(2, 4) },
        { focus: "Conclusion", points: ["Synthesise arguments", "Final insight", "Link to question"], quotes: [] }
      ];
      plan.relevantQuotes = KEY_QUOTES.slice(0, 6);
    }

    plan.introduction = [
      "Open with a hook related to the topic",
      "Provide brief context for Othello",
      "State your thesis clearly",
      "Outline your main arguments"
    ];

    plan.conclusion = [
      "Restate thesis in light of evidence",
      "Synthesise your main points",
      "End with broader significance",
      "Link back to the question"
    ];

    setEssayPlan(plan);
  };

  // Toggle bookmark
  const toggleBookmark = (quote) => {
    setBookmarkedQuotes(prev => {
      const exists = prev.find(q => q.quote === quote.quote);
      if (exists) {
        return prev.filter(q => q.quote !== quote.quote);
      }
      return [...prev, quote];
    });
  };

  const isBookmarked = (quote) => {
    return bookmarkedQuotes.some(q => q.quote === quote.quote);
  };

  // Navigation tabs
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'scenes', label: 'Full Play', icon: '🎭' },
    { id: 'characters', label: 'Characters', icon: '👥' },
    { id: 'themes', label: 'Themes', icon: '💡' },
    { id: 'quotes', label: 'Key Quotes', icon: '💬' },
    { id: 'techniques', label: 'Techniques', icon: '🎨' },
    { id: 'exams', label: 'Past Papers', icon: '📝' },
    { id: 'essay', label: 'Essay Planner', icon: '✍️' },
    { id: 'quiz', label: 'Quiz', icon: '🎯' },
    { id: 'bookmarks', label: 'Bookmarks', icon: '⭐' }
  ];

  return (
    <div className="app-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Source+Sans+Pro:wght@400;600&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1520 50%, #0d0d12 100%);
          color: #e8e4e0;
          font-family: 'Crimson Pro', Georgia, serif;
          position: relative;
          overflow-x: hidden;
        }

        .app-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(139, 90, 43, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139, 90, 43, 0.08) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .header {
          background: linear-gradient(180deg, rgba(15, 12, 20, 0.98) 0%, rgba(15, 12, 20, 0.9) 100%);
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          padding: 1.5rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(20px);
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .title-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .main-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.05em;
        }

        .subtitle {
          font-family: 'Crimson Pro', serif;
          font-size: 1rem;
          color: rgba(212, 175, 55, 0.7);
          font-style: italic;
          margin-top: 0.25rem;
        }

        .search-container {
          position: relative;
          max-width: 400px;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          color: #e8e4e0;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: rgba(212, 175, 55, 0.6);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
        }

        .search-input::placeholder {
          color: rgba(232, 228, 224, 0.4);
        }

        .search-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(212, 175, 55, 0.6);
        }

        .nav-tabs {
          display: flex;
          gap: 0.25rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: none;
        }

        .nav-tabs::-webkit-scrollbar {
          display: none;
        }

        .nav-tab {
          padding: 0.6rem 1rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 6px;
          color: rgba(232, 228, 224, 0.6);
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-tab:hover {
          color: rgba(212, 175, 55, 0.9);
          background: rgba(212, 175, 55, 0.1);
        }

        .nav-tab.active {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%);
          border-color: rgba(212, 175, 55, 0.4);
          color: #d4af37;
        }

        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
        }

        .content-section {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: #d4af37;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }

        .card {
          background: linear-gradient(145deg, rgba(30, 25, 35, 0.8) 0%, rgba(20, 18, 25, 0.9) 100%);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.1);
          transform: translateY(-2px);
        }

        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .card-subtitle {
          font-size: 0.9rem;
          color: rgba(212, 175, 55, 0.7);
          font-style: italic;
          margin-bottom: 1rem;
        }

        .card-text {
          color: rgba(232, 228, 224, 0.85);
          line-height: 1.7;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .character-card {
          cursor: pointer;
        }

        .character-card .role-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 20px;
          font-size: 0.75rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .traits-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .trait-tag {
          padding: 0.25rem 0.5rem;
          background: rgba(139, 90, 43, 0.2);
          border-radius: 4px;
          font-size: 0.8rem;
          color: rgba(232, 228, 224, 0.8);
        }

        .quote-card {
          position: relative;
          padding-left: 1rem;
          border-left: 3px solid rgba(212, 175, 55, 0.5);
        }

        .quote-text {
          font-family: 'Crimson Pro', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: #e8e4e0;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .quote-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .quote-speaker {
          color: #d4af37;
          font-weight: 600;
        }

        .quote-act {
          color: rgba(232, 228, 224, 0.5);
          font-size: 0.85rem;
        }

        .quote-theme {
          padding: 0.2rem 0.6rem;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 12px;
          font-size: 0.75rem;
          color: rgba(212, 175, 55, 0.8);
        }

        .bookmark-btn {
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .bookmark-btn:hover, .bookmark-btn.active {
          opacity: 1;
          transform: scale(1.1);
        }

        .analysis-box {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          border-left: 3px solid rgba(139, 90, 43, 0.5);
        }

        .analysis-title {
          font-size: 0.8rem;
          color: rgba(212, 175, 55, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .scene-nav {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .act-btn {
          padding: 0.5rem 1.25rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 6px;
          color: rgba(232, 228, 224, 0.7);
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .act-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
        }

        .act-btn.active {
          background: rgba(212, 175, 55, 0.25);
          border-color: rgba(212, 175, 55, 0.5);
          color: #d4af37;
        }

        .scene-card {
          position: relative;
          overflow: hidden;
        }

        .scene-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .scene-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          color: rgba(212, 175, 55, 0.6);
        }

        .scene-setting {
          font-style: italic;
          color: rgba(232, 228, 224, 0.5);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .summary-toggle {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .toggle-btn {
          padding: 0.4rem 0.8rem;
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 4px;
          color: rgba(232, 228, 224, 0.6);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .toggle-btn.active {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
          border-color: rgba(212, 175, 55, 0.5);
        }

        .key-moments {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .key-moments-title {
          font-size: 0.85rem;
          color: rgba(212, 175, 55, 0.8);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .moment-item {
          padding: 0.4rem 0;
          padding-left: 1rem;
          border-left: 2px solid rgba(139, 90, 43, 0.4);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: rgba(232, 228, 224, 0.75);
        }

        .exam-card {
          position: relative;
        }

        .exam-year {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.3rem 0.8rem;
          background: rgba(212, 175, 55, 0.15);
          border-radius: 4px;
          font-size: 0.85rem;
          color: #d4af37;
          font-weight: 600;
        }

        .exam-type {
          display: inline-block;
          padding: 0.2rem 0.6rem;
          background: rgba(139, 90, 43, 0.2);
          border-radius: 4px;
          font-size: 0.75rem;
          color: rgba(232, 228, 224, 0.7);
          margin-bottom: 0.75rem;
        }

        .exam-question {
          font-family: 'Crimson Pro', serif;
          font-size: 1.15rem;
          color: #e8e4e0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .exam-hints {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          margin-top: 1rem;
        }

        .hints-title {
          font-size: 0.8rem;
          color: rgba(212, 175, 55, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .focus-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .focus-tag {
          padding: 0.2rem 0.6rem;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          font-size: 0.75rem;
          color: rgba(212, 175, 55, 0.8);
        }

        .essay-planner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }

        @media (max-width: 900px) {
          .essay-planner {
            grid-template-columns: 1fr;
          }
        }

        .essay-input-section {
          position: sticky;
          top: 120px;
          height: fit-content;
        }

        .essay-textarea {
          width: 100%;
          min-height: 150px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          color: #e8e4e0;
          font-family: 'Crimson Pro', serif;
          font-size: 1rem;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .essay-textarea:focus {
          outline: none;
          border-color: rgba(212, 175, 55, 0.6);
        }

        .generate-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(139, 90, 43, 0.3) 100%);
          border: 1px solid rgba(212, 175, 55, 0.5);
          border-radius: 8px;
          color: #d4af37;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .generate-btn:hover {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.4) 0%, rgba(139, 90, 43, 0.4) 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.2);
        }

        .essay-plan {
          animation: fadeIn 0.5s ease;
        }

        .plan-section {
          margin-bottom: 1.5rem;
        }

        .plan-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .plan-item {
          padding: 0.5rem 0;
          padding-left: 1rem;
          border-left: 2px solid rgba(139, 90, 43, 0.4);
          color: rgba(232, 228, 224, 0.85);
          margin-bottom: 0.25rem;
        }

        .quiz-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .quiz-progress {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          margin: 0 1.5rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #d4af37, #f4d03f);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .quiz-score {
          color: #d4af37;
          font-weight: 600;
        }

        .quiz-question {
          font-family: 'Crimson Pro', serif;
          font-size: 1.4rem;
          color: #e8e4e0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .quiz-hint {
          text-align: center;
          color: rgba(232, 228, 224, 0.5);
          font-style: italic;
          margin-bottom: 2rem;
        }

        .quiz-answer {
          text-align: center;
          padding: 1.5rem;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .answer-label {
          font-size: 0.85rem;
          color: rgba(212, 175, 55, 0.7);
          margin-bottom: 0.5rem;
        }

        .answer-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          color: #d4af37;
        }

        .quiz-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .quiz-btn {
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quiz-btn.reveal {
          background: rgba(212, 175, 55, 0.2);
          border: 1px solid rgba(212, 175, 55, 0.4);
          color: #d4af37;
        }

        .quiz-btn.correct {
          background: rgba(76, 175, 80, 0.2);
          border: 1px solid rgba(76, 175, 80, 0.4);
          color: #81c784;
        }

        .quiz-btn.incorrect {
          background: rgba(244, 67, 54, 0.2);
          border: 1px solid rgba(244, 67, 54, 0.4);
          color: #e57373;
        }

        .quiz-btn:hover {
          transform: translateY(-2px);
        }

        .start-quiz-btn {
          display: block;
          margin: 2rem auto;
          padding: 1rem 3rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(139, 90, 43, 0.3) 100%);
          border: 1px solid rgba(212, 175, 55, 0.5);
          border-radius: 12px;
          color: #d4af37;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .start-quiz-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(212, 175, 55, 0.25);
        }

        .search-results {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(20, 18, 25, 0.98);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          max-height: 400px;
          overflow-y: auto;
          z-index: 1000;
          margin-top: 0.5rem;
        }

        .search-result-item {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .search-result-item:hover {
          background: rgba(212, 175, 55, 0.1);
        }

        .search-result-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.6);
          margin-bottom: 0.25rem;
        }

        .search-result-title {
          color: #d4af37;
          font-weight: 600;
        }

        .search-result-preview {
          font-size: 0.85rem;
          color: rgba(232, 228, 224, 0.6);
          margin-top: 0.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: linear-gradient(145deg, rgba(30, 25, 35, 0.98) 0%, rgba(20, 18, 25, 0.98) 100%);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 16px;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: rgba(232, 228, 224, 0.6);
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: #d4af37;
        }

        .detail-section {
          margin-bottom: 1.5rem;
        }

        .detail-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .relationship-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .relationship-name {
          color: #d4af37;
          font-weight: 600;
        }

        .overview-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: linear-gradient(145deg, rgba(212, 175, 55, 0.1) 0%, rgba(139, 90, 43, 0.1) 100%);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          color: #d4af37;
          line-height: 1;
        }

        .stat-label {
          color: rgba(232, 228, 224, 0.6);
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        .overview-intro {
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .context-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .context-card {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          padding: 1.25rem;
        }

        .context-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          color: #d4af37;
          margin-bottom: 0.75rem;
        }

        .context-point {
          padding: 0.4rem 0;
          padding-left: 1rem;
          border-left: 2px solid rgba(139, 90, 43, 0.4);
          font-size: 0.9rem;
          color: rgba(232, 228, 224, 0.8);
          margin-bottom: 0.25rem;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          color: rgba(232, 228, 224, 0.5);
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .technique-card {
          background: linear-gradient(145deg, rgba(30, 25, 35, 0.8) 0%, rgba(20, 18, 25, 0.9) 100%);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }

        .technique-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          color: #d4af37;
          margin-bottom: 0.5rem;
        }

        .technique-def {
          color: rgba(232, 228, 224, 0.7);
          font-style: italic;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .technique-examples {
          margin-bottom: 1rem;
        }

        .technique-example {
          padding: 0.3rem 0;
          padding-left: 1rem;
          border-left: 2px solid rgba(139, 90, 43, 0.4);
          font-size: 0.9rem;
          color: rgba(232, 228, 224, 0.8);
          margin-bottom: 0.25rem;
        }

        .technique-sig {
          background: rgba(0, 0, 0, 0.3);
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 0.9rem;
          color: rgba(232, 228, 224, 0.75);
        }

        @media (max-width: 768px) {
          .header {
            padding: 1rem;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .title-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .search-container {
            max-width: 100%;
            width: 100%;
          }

          .main-content {
            padding: 1rem;
          }

          .grid-2, .grid-3 {
            grid-template-columns: 1fr;
          }

          .modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="title-section">
            <div>
              <h1 className="main-title">Othello</h1>
              <p className="subtitle">Leaving Certificate Complete Study Companion</p>
            </div>
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search quotes, characters, themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchResults.length > 0 && searchQuery && (
                <div className="search-results">
                  {searchResults.map((result, i) => (
                    <div 
                      key={i} 
                      className="search-result-item"
                      onClick={() => {
                        if (result.type === 'character') {
                          setSelectedCharacter(result.data);
                          setActiveTab('characters');
                        } else if (result.type === 'theme') {
                          setSelectedTheme(result.data);
                          setActiveTab('themes');
                        } else if (result.type === 'quote') {
                          setActiveTab('quotes');
                        } else if (result.type === 'scene') {
                          setActiveSceneAct(result.data.act);
                          setActiveTab('scenes');
                        }
                        setSearchQuery('');
                      }}
                    >
                      <div className="search-result-type">{result.type}</div>
                      <div className="search-result-title">
                        {result.type === 'quote' ? `"${result.data.quote.substring(0, 50)}..."` : 
                         result.type === 'scene' ? `Act ${result.data.act} Scene ${result.data.scene}` :
                         result.data.name}
                      </div>
                      <div className="search-result-preview">
                        {result.type === 'quote' ? result.data.speaker :
                         result.type === 'scene' ? result.data.title :
                         result.data.description?.substring(0, 80) + '...'}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <nav className="nav-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setQuizMode(false);
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content" ref={contentRef}>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="content-section">
            <h2 className="section-title">Study Overview</h2>
            
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-label">Acts</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15</div>
                <div className="stat-label">Scenes</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">Main Characters</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">7</div>
                <div className="stat-label">Key Themes</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">22</div>
                <div className="stat-label">Key Quotes</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10</div>
                <div className="stat-label">Past Papers</div>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title">The Tragedy of Othello, The Moor of Venice</h3>
              <div className="card-text overview-intro">
                <p style={{marginBottom: '1rem'}}>
                  <strong>Othello</strong> is one of Shakespeare's greatest tragedies, written around 1603-1604. It tells the story of a noble Moorish general in the Venetian army whose life is destroyed by his ensign Iago's manipulation. The play explores jealousy, race, love, betrayal, and the devastating consequences of trusting the wrong people.
                </p>
                <p style={{marginBottom: '1rem'}}>
                  For the <strong>Leaving Certificate</strong>, you need to understand the play's characters, themes, dramatic techniques, and be able to write analytical essays responding to past paper questions. This study companion contains everything you need: scene-by-scene summaries with modern translations, character analysis, theme exploration, key quotes with detailed analysis, and past exam questions.
                </p>
                <p>
                  <strong>Exam Tip:</strong> The most common question types focus on character analysis (especially Othello and Iago), thematic exploration (jealousy, appearance vs reality), and evaluation questions asking you to agree or disagree with a critical statement about the play.
                </p>
              </div>
            </div>

            <div className="context-grid">
              {Object.values(CONTEXT).map((ctx, i) => (
                <div key={i} className="context-card">
                  <h4 className="context-title">{ctx.title}</h4>
                  {ctx.points.map((point, j) => (
                    <div key={j} className="context-point">{point}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scenes Tab */}
        {activeTab === 'scenes' && (
          <div className="content-section">
            <h2 className="section-title">Full Play: Scene by Scene</h2>
            
            <div className="scene-nav">
              {[1, 2, 3, 4, 5].map(act => (
                <button
                  key={act}
                  className={`act-btn ${activeSceneAct === act ? 'active' : ''}`}
                  onClick={() => setActiveSceneAct(act)}
                >
                  Act {act}
                </button>
              ))}
            </div>

            {SCENES.filter(s => s.act === activeSceneAct).map((scene, i) => (
              <SceneCard key={i} scene={scene} />
            ))}
          </div>
        )}

        {/* Characters Tab */}
        {activeTab === 'characters' && (
          <div className="content-section">
            <h2 className="section-title">Character Analysis</h2>
            <div className="grid-2">
              {Object.values(CHARACTERS).map((char, i) => (
                <div 
                  key={i} 
                  className="card character-card"
                  onClick={() => setSelectedCharacter(char)}
                >
                  <span className="role-badge">{char.role}</span>
                  <h3 className="card-title">{char.name}</h3>
                  {char.title && <p className="card-subtitle">{char.title}</p>}
                  <p className="card-text">{char.description.substring(0, 200)}...</p>
                  <div className="traits-list">
                    {char.keyTraits?.slice(0, 4).map((trait, j) => (
                      <span key={j} className="trait-tag">{trait}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Themes Tab */}
        {activeTab === 'themes' && (
          <div className="content-section">
            <h2 className="section-title">Themes & Motifs</h2>
            <div className="grid-2">
              {Object.values(THEMES).map((theme, i) => (
                <div 
                  key={i} 
                  className="card"
                  onClick={() => setSelectedTheme(theme)}
                  style={{cursor: 'pointer'}}
                >
                  <h3 className="card-title">{theme.name}</h3>
                  <p className="card-subtitle">{theme.subtitle}</p>
                  <p className="card-text">{theme.description}</p>
                  <div className="analysis-box">
                    <div className="analysis-title">Exam Tip</div>
                    <p style={{fontSize: '0.9rem', color: 'rgba(232, 228, 224, 0.75)'}}>{theme.examTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="content-section">
            <h2 className="section-title">Key Quotes & Analysis</h2>
            {KEY_QUOTES.map((quote, i) => (
              <div key={i} className="card quote-card">
                <button 
                  className={`bookmark-btn ${isBookmarked(quote) ? 'active' : ''}`}
                  onClick={() => toggleBookmark(quote)}
                >
                  {isBookmarked(quote) ? '⭐' : '☆'}
                </button>
                <p className="quote-text">"{quote.quote}"</p>
                <div className="quote-meta">
                  <span className="quote-speaker">{quote.speaker}</span>
                  <span className="quote-act">Act {quote.act}</span>
                  <span className="quote-theme">{quote.theme}</span>
                </div>
                <div className="analysis-box">
                  <div className="analysis-title">Analysis</div>
                  <p style={{fontSize: '0.95rem', color: 'rgba(232, 228, 224, 0.85)'}}>{quote.analysis}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Techniques Tab */}
        {activeTab === 'techniques' && (
          <div className="content-section">
            <h2 className="section-title">Literary & Dramatic Techniques</h2>
            {LITERARY_TECHNIQUES.map((tech, i) => (
              <div key={i} className="technique-card">
                <h3 className="technique-name">{tech.name}</h3>
                <p className="technique-def">{tech.definition}</p>
                <div className="technique-examples">
                  <div className="analysis-title" style={{marginBottom: '0.5rem'}}>Examples in Othello</div>
                  {tech.examples.map((ex, j) => (
                    <div key={j} className="technique-example">{ex}</div>
                  ))}
                </div>
                <div className="technique-sig">
                  <strong>Significance: </strong>{tech.significance}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Papers Tab */}
        {activeTab === 'exams' && (
          <div className="content-section">
            <h2 className="section-title">Past Exam Questions (2015-2023)</h2>
            {PAST_EXAM_QUESTIONS.map((exam, i) => (
              <div key={i} className="card exam-card">
                <span className="exam-year">{exam.year}</span>
                <span className="exam-type">{exam.type}</span>
                <p className="exam-question">{exam.question}</p>
                <div className="exam-hints">
                  <div className="hints-title">Approach Hints</div>
                  <p style={{fontSize: '0.9rem', color: 'rgba(232, 228, 224, 0.8)'}}>{exam.hints}</p>
                  <div className="focus-tags">
                    {exam.focus.map((tag, j) => (
                      <span key={j} className="focus-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Essay Planner Tab */}
        {activeTab === 'essay' && (
          <div className="content-section">
            <h2 className="section-title">Essay Planner</h2>
            <div className="essay-planner">
              <div className="essay-input-section">
                <div className="card">
                  <h3 className="card-title">Enter Your Essay Question</h3>
                  <p className="card-text" style={{marginBottom: '1rem'}}>
                    Paste a past paper question or write your own topic to generate a structured essay plan with relevant quotes.
                  </p>
                  <textarea
                    className="essay-textarea"
                    placeholder='e.g., "Othello is not truly noble, but deeply flawed from the beginning." Discuss.'
                    value={essayTopic}
                    onChange={(e) => setEssayTopic(e.target.value)}
                  />
                  <button className="generate-btn" onClick={generateEssayPlan}>
                    Generate Essay Plan
                  </button>
                </div>
              </div>

              <div className="essay-output">
                {essayPlan ? (
                  <div className="essay-plan">
                    <div className="card">
                      <h3 className="card-title">Essay Plan: {essayPlan.topic}</h3>
                      
                      <div className="plan-section">
                        <h4 className="plan-section-title">Introduction</h4>
                        {essayPlan.introduction.map((point, i) => (
                          <div key={i} className="plan-item">{point}</div>
                        ))}
                      </div>

                      {essayPlan.paragraphs.map((para, i) => (
                        <div key={i} className="plan-section">
                          <h4 className="plan-section-title">Paragraph {i + 1}: {para.focus}</h4>
                          {para.points.map((point, j) => (
                            <div key={j} className="plan-item">{point}</div>
                          ))}
                          {para.quotes.length > 0 && (
                            <div className="analysis-box" style={{marginTop: '0.75rem'}}>
                              <div className="analysis-title">Suggested Quotes</div>
                              {para.quotes.slice(0, 2).map((q, k) => (
                                <p key={k} style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>
                                  "{q.quote}" - {q.speaker || 'N/A'}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      <div className="plan-section">
                        <h4 className="plan-section-title">Conclusion</h4>
                        {essayPlan.conclusion.map((point, i) => (
                          <div key={i} className="plan-item">{point}</div>
                        ))}
                      </div>
                    </div>

                    <div className="card">
                      <h3 className="card-title">All Relevant Quotes</h3>
                      {essayPlan.relevantQuotes.slice(0, 8).map((q, i) => (
                        <div key={i} style={{marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)'}}>
                          <p className="quote-text" style={{fontSize: '1rem'}}>"{q.quote}"</p>
                          <p style={{color: '#d4af37', fontSize: '0.9rem'}}>
                            - {q.speaker || 'N/A'}, Act {q.act}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="empty-state">
                    <div className="empty-icon">✍️</div>
                    <p>Enter an essay question to generate a structured plan</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="content-section">
            <h2 className="section-title">Test Your Knowledge</h2>
            
            {!quizMode ? (
              <div className="card" style={{textAlign: 'center', padding: '3rem'}}>
                <h3 className="card-title">Ready to Test Yourself?</h3>
                <p className="card-text" style={{marginBottom: '2rem'}}>
                  Take a quiz on quotes, characters, themes, and key moments from Othello. 
                  Questions are randomised each time!
                </p>
                <button className="start-quiz-btn" onClick={generateQuiz}>
                  Start Quiz (15 Questions)
                </button>
              </div>
            ) : (
              <div className="quiz-container">
                {currentQuizIndex < quizQuestions.length ? (
                  <>
                    <div className="quiz-progress">
                      <span>Question {currentQuizIndex + 1}/{quizQuestions.length}</span>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`}}
                        />
                      </div>
                      <span className="quiz-score">Score: {quizScore}</span>
                    </div>

                    <div className="card">
                      <p className="quiz-question">{quizQuestions[currentQuizIndex].question}</p>
                      <p className="quiz-hint">Hint: {quizQuestions[currentQuizIndex].hint}</p>

                      {showAnswer && (
                        <div className="quiz-answer">
                          <div className="answer-label">Answer</div>
                          <div className="answer-text">{quizQuestions[currentQuizIndex].answer}</div>
                        </div>
                      )}

                      <div className="quiz-buttons">
                        {!showAnswer ? (
                          <button className="quiz-btn reveal" onClick={() => setShowAnswer(true)}>
                            Reveal Answer
                          </button>
                        ) : (
                          <>
                            <button 
                              className="quiz-btn correct"
                              onClick={() => {
                                setQuizScore(prev => prev + 1);
                                setShowAnswer(false);
                                setCurrentQuizIndex(prev => prev + 1);
                              }}
                            >
                              I Got It Right ✓
                            </button>
                            <button 
                              className="quiz-btn incorrect"
                              onClick={() => {
                                setShowAnswer(false);
                                setCurrentQuizIndex(prev => prev + 1);
                              }}
                            >
                              I Got It Wrong ✗
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="card" style={{textAlign: 'center', padding: '3rem'}}>
                    <h3 className="card-title">Quiz Complete!</h3>
                    <div className="stat-number" style={{margin: '1.5rem 0'}}>
                      {quizScore}/{quizQuestions.length}
                    </div>
                    <p className="card-text" style={{marginBottom: '2rem'}}>
                      {quizScore >= 12 ? "Excellent! You really know your Othello!" :
                       quizScore >= 8 ? "Good work! Keep reviewing the material." :
                       "Keep studying! Review the characters and quotes."}
                    </p>
                    <button className="start-quiz-btn" onClick={generateQuiz}>
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Bookmarks Tab */}
        {activeTab === 'bookmarks' && (
          <div className="content-section">
            <h2 className="section-title">Your Bookmarked Quotes</h2>
            {bookmarkedQuotes.length > 0 ? (
              bookmarkedQuotes.map((quote, i) => (
                <div key={i} className="card quote-card">
                  <button 
                    className="bookmark-btn active"
                    onClick={() => toggleBookmark(quote)}
                  >
                    ⭐
                  </button>
                  <p className="quote-text">"{quote.quote}"</p>
                  <div className="quote-meta">
                    <span className="quote-speaker">{quote.speaker}</span>
                    <span className="quote-act">Act {quote.act}</span>
                    <span className="quote-theme">{quote.theme}</span>
                  </div>
                  <div className="analysis-box">
                    <div className="analysis-title">Analysis</div>
                    <p style={{fontSize: '0.95rem', color: 'rgba(232, 228, 224, 0.85)'}}>{quote.analysis}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="empty-icon">⭐</div>
                <p>No bookmarked quotes yet</p>
                <p style={{fontSize: '0.9rem', marginTop: '0.5rem'}}>
                  Click the star icon on any quote to bookmark it for quick reference
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Character Detail Modal */}
      {selectedCharacter && (
        <div className="modal-overlay" onClick={() => setSelectedCharacter(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCharacter(null)}>×</button>
            
            <span className="role-badge">{selectedCharacter.role}</span>
            <h2 className="card-title" style={{fontSize: '2rem', marginTop: '0.5rem'}}>{selectedCharacter.name}</h2>
            {selectedCharacter.title && <p className="card-subtitle" style={{fontSize: '1.1rem'}}>{selectedCharacter.title}</p>}
            
            <div className="detail-section">
              <p className="card-text">{selectedCharacter.description}</p>
            </div>

            {selectedCharacter.arc && (
              <div className="detail-section">
                <h4 className="detail-title">Character Arc</h4>
                <p className="card-text">{selectedCharacter.arc}</p>
              </div>
            )}

            <div className="detail-section">
              <h4 className="detail-title">Key Traits</h4>
              <div className="traits-list">
                {selectedCharacter.keyTraits?.map((trait, j) => (
                  <span key={j} className="trait-tag">{trait}</span>
                ))}
              </div>
            </div>

            {selectedCharacter.relationships && (
              <div className="detail-section">
                <h4 className="detail-title">Relationships</h4>
                {Object.entries(selectedCharacter.relationships).map(([name, desc], j) => (
                  <div key={j} className="relationship-item">
                    <span className="relationship-name" style={{textTransform: 'capitalize'}}>{name}: </span>
                    <span style={{color: 'rgba(232, 228, 224, 0.8)'}}>{desc}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedCharacter.keyQuotes && (
              <div className="detail-section">
                <h4 className="detail-title">Key Quotes</h4>
                {selectedCharacter.keyQuotes.map((q, j) => (
                  <div key={j} className="card quote-card" style={{marginBottom: '0.75rem'}}>
                    <p className="quote-text" style={{fontSize: '1rem'}}>"{q.quote}"</p>
                    <p style={{color: 'rgba(212, 175, 55, 0.7)', fontSize: '0.85rem'}}>Act {q.act}</p>
                    <p style={{fontSize: '0.9rem', color: 'rgba(232, 228, 224, 0.75)', marginTop: '0.5rem'}}>{q.analysis}</p>
                  </div>
                ))}
              </div>
            )}

            {selectedCharacter.examFocus && (
              <div className="analysis-box">
                <div className="analysis-title">Exam Focus</div>
                <p style={{color: 'rgba(232, 228, 224, 0.85)'}}>{selectedCharacter.examFocus}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Theme Detail Modal */}
      {selectedTheme && (
        <div className="modal-overlay" onClick={() => setSelectedTheme(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTheme(null)}>×</button>
            
            <h2 className="card-title" style={{fontSize: '2rem'}}>{selectedTheme.name}</h2>
            <p className="card-subtitle" style={{fontSize: '1.1rem'}}>{selectedTheme.subtitle}</p>
            
            <div className="detail-section">
              <p className="card-text">{selectedTheme.description}</p>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">Key Points</h4>
              {selectedTheme.keyPoints.map((point, j) => (
                <div key={j} className="plan-item">{point}</div>
              ))}
            </div>

            <div className="detail-section">
              <h4 className="detail-title">Key Quotes</h4>
              {selectedTheme.quotes.map((q, j) => (
                <div key={j} className="card quote-card" style={{marginBottom: '0.75rem'}}>
                  <p className="quote-text" style={{fontSize: '1rem'}}>"{q.quote}"</p>
                  <div className="quote-meta">
                    <span className="quote-speaker">{q.speaker}</span>
                    <span className="quote-act">Act {q.act}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="analysis-box">
              <div className="analysis-title">Exam Tip</div>
              <p style={{color: 'rgba(232, 228, 224, 0.85)'}}>{selectedTheme.examTip}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Scene Card Component
function SceneCard({ scene }) {
  const [viewMode, setViewMode] = useState('modern');
  
  return (
    <div className="card scene-card">
      <div className="scene-header">
        <div>
          <span className="scene-number">Act {scene.act}, Scene {scene.scene}</span>
          <h3 className="card-title">{scene.title}</h3>
        </div>
      </div>
      
      <p className="scene-setting">{scene.setting}</p>
      
      <div className="summary-toggle">
        <button 
          className={`toggle-btn ${viewMode === 'modern' ? 'active' : ''}`}
          onClick={() => setViewMode('modern')}
        >
          Modern English
        </button>
        <button 
          className={`toggle-btn ${viewMode === 'original' ? 'active' : ''}`}
          onClick={() => setViewMode('original')}
        >
          Original Summary
        </button>
      </div>
      
      <p className="card-text">
        {viewMode === 'modern' ? scene.modernSummary : scene.summary}
      </p>
      
      <div className="key-moments">
        <div className="key-moments-title">Key Moments</div>
        {scene.keyMoments.map((moment, i) => (
          <div key={i} className="moment-item">{moment}</div>
        ))}
      </div>
      
      <div className="analysis-box">
        <div className="analysis-title">Significance</div>
        <p style={{fontSize: '0.9rem', color: 'rgba(232, 228, 224, 0.8)'}}>{scene.significance}</p>
      </div>
    </div>
  );
}
