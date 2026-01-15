// Othello Study Companion - React Application
// For standalone browser use with React loaded via CDN

const { useState, useMemo, useRef } = React;

// SceneCard Component
function SceneCard({ scene }) {
  const [viewMode, setViewMode] = useState('modern');
  const [showText, setShowText] = useState(false);
  const [textViewMode, setTextViewMode] = useState('sideBySide');

  // Get the play text for this scene (with safety check)
  const sceneKey = `${scene.act}.${scene.scene}`;
  const playText = typeof PLAY_TEXT !== 'undefined' ? PLAY_TEXT[sceneKey] : null;

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

      {/* Shakespeare's Text Section */}
      {playText && playText.excerpts && playText.excerpts.length > 0 && (
        <div className="play-text-section">
          <button
            className="show-text-btn"
            onClick={() => setShowText(!showText)}
          >
            {showText ? '▼ Hide Shakespeare\'s Text' : '▶ Show Shakespeare\'s Text with Translations'}
          </button>

          {showText && (
            <div className="text-excerpts">
              <div className="text-view-toggle">
                <button
                  className={`toggle-btn ${textViewMode === 'sideBySide' ? 'active' : ''}`}
                  onClick={() => setTextViewMode('sideBySide')}
                >
                  Side by Side
                </button>
                <button
                  className={`toggle-btn ${textViewMode === 'originalOnly' ? 'active' : ''}`}
                  onClick={() => setTextViewMode('originalOnly')}
                >
                  Original Only
                </button>
                <button
                  className={`toggle-btn ${textViewMode === 'modernOnly' ? 'active' : ''}`}
                  onClick={() => setTextViewMode('modernOnly')}
                >
                  Modern Only
                </button>
              </div>

              {playText.excerpts.map((excerpt, i) => (
                <div key={i} className="text-excerpt">
                  <div className="excerpt-header">
                    <span className="excerpt-speaker">{excerpt.speaker}</span>
                    <span className="excerpt-lines">Lines {excerpt.lines}</span>
                  </div>

                  {textViewMode === 'sideBySide' && (
                    <div className="side-by-side">
                      <div className="original-text">
                        <div className="text-label">Original Shakespeare</div>
                        <div className="text-content">{excerpt.original}</div>
                      </div>
                      <div className="modern-text">
                        <div className="text-label">Modern English</div>
                        <div className="text-content">{excerpt.modern}</div>
                      </div>
                    </div>
                  )}

                  {textViewMode === 'originalOnly' && (
                    <div className="single-text original-text">
                      <div className="text-content">{excerpt.original}</div>
                    </div>
                  )}

                  {textViewMode === 'modernOnly' && (
                    <div className="single-text modern-text">
                      <div className="text-content">{excerpt.modern}</div>
                    </div>
                  )}

                  <div className="excerpt-significance">
                    <strong>Significance:</strong> {excerpt.significance}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// MAIN APPLICATION COMPONENT
function OthelloStudyCompanion() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  // Note: selectedScene reserved for future scene detail modal
  const [selectedScene] = useState(null); // eslint-disable-line no-unused-vars
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

    // Theme questions - add one standard theme question
    if (Object.values(THEMES).length > 0) {
      questions.push({
        type: 'theme',
        question: `What theme is represented by the phrase "the green-eyed monster"?`,
        answer: 'Jealousy',
        hint: 'Iago warns Othello about this in Act 3'
      });
    }

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

  // Essay planner state - essayType for future essay type selector
  const [essayType] = useState('discuss'); // eslint-disable-line no-unused-vars

  // Enhanced Essay planner
  const generateEssayPlan = () => {
    if (!essayTopic.trim()) return;

    const topic = essayTopic.toLowerCase();
    const plan = {
      topic: essayTopic,
      type: essayType,
      introduction: [],
      paragraphs: [],
      counterArgument: null,
      conclusion: [],
      relevantQuotes: [],
      techniques: [],
      markingCriteria: {
        purpose: [],
        coherence: [],
        language: [],
        mechanics: []
      },
      sentenceStarters: {
        introduction: [],
        body: [],
        conclusion: []
      },
      wordCount: { min: 1000, max: 1200 }
    };

    // Detect essay type from question keywords
    const isAgreeDisagree = topic.includes('agree') || topic.includes('disagree') || topic.includes('to what extent') || topic.includes('discuss this statement');
    // Character and theme focus detection for future enhanced planning
    const hasCharacterFocus = topic.includes('character') || Object.values(CHARACTERS).some(c => topic.includes(c.name.toLowerCase()));
    const hasThemeFocus = Object.values(THEMES).some(t => topic.includes(t.name.toLowerCase()));
    // Use detected focus for logging/debugging
    if (hasCharacterFocus || hasThemeFocus) { /* Focus detected - used by keyword matching below */ }

    // Find relevant themes with expanded keyword matching
    const themeKeywords = {
      jealousy: ['jealous', 'jealousy', 'envy', 'green-eyed', 'suspicious'],
      race: ['race', 'racism', 'black', 'moor', 'outsider', 'other'],
      love_marriage: ['love', 'marriage', 'relationship', 'wife', 'husband'],
      appearance_reality: ['appearance', 'reality', 'deception', 'honest', 'seem', 'appear', 'truth', 'lie'],
      reputation_honour: ['reputation', 'honour', 'honor', 'name', 'status'],
      manipulation: ['manipulation', 'manipulate', 'control', 'deceive', 'trick', 'plot'],
      women_patriarchy: ['women', 'woman', 'wife', 'patriarchy', 'gender', 'female']
    };

    Object.entries(THEMES).forEach(([key, theme]) => {
      const keywords = themeKeywords[key] || [theme.name.toLowerCase()];
      if (keywords.some(kw => topic.includes(kw))) {
        plan.paragraphs.push({
          focus: theme.name,
          points: theme.keyPoints.slice(0, 4),
          quotes: theme.quotes,
          examTip: theme.examTip
        });
        plan.relevantQuotes.push(...theme.quotes);
      }
    });

    // Find relevant characters with expanded matching
    const characterKeywords = {
      othello: ['othello', 'moor', 'hero', 'tragic', 'protagonist', 'general', 'noble'],
      iago: ['iago', 'villain', 'antagonist', 'evil', 'manipulator', 'ensign'],
      desdemona: ['desdemona', 'innocent', 'wife', 'victim'],
      emilia: ['emilia', 'feminist', 'truth'],
      cassio: ['cassio', 'lieutenant', 'reputation'],
      brabantio: ['brabantio', 'father'],
      roderigo: ['roderigo', 'fool', 'dupe'],
      bianca: ['bianca', 'courtesan']
    };

    Object.entries(CHARACTERS).forEach(([key, char]) => {
      const keywords = characterKeywords[key] || [char.name.toLowerCase()];
      if (keywords.some(kw => topic.includes(kw))) {
        plan.paragraphs.push({
          focus: `Character Analysis: ${char.name}`,
          points: [
            char.arc,
            `Key traits: ${char.keyTraits.slice(0, 4).join(', ')}`,
            char.examFocus,
            ...Object.entries(char.relationships || {}).slice(0, 2).map(([name, desc]) => `Relationship with ${name}: ${desc}`)
          ],
          quotes: char.keyQuotes || [],
          examTip: char.examFocus
        });
        if (char.keyQuotes) {
          plan.relevantQuotes.push(...char.keyQuotes);
        }
      }
    });

    // Add relevant literary techniques
    const techniqueKeywords = {
      'dramatic irony': ['irony', 'ironic', 'audience'],
      'soliloquy': ['soliloquy', 'speech', 'thoughts', 'alone'],
      'imagery': ['imagery', 'image', 'symbol', 'metaphor', 'language'],
      'foreshadowing': ['foreshadow', 'hint', 'predict']
    };

    LITERARY_TECHNIQUES.forEach(tech => {
      const keywords = techniqueKeywords[tech.name.toLowerCase()] || [tech.name.toLowerCase()];
      if (keywords.some(kw => topic.includes(kw)) || plan.paragraphs.length > 0) {
        plan.techniques.push(tech);
      }
    });

    // Generic structure if no specific match found
    if (plan.paragraphs.length === 0) {
      // Try to identify the main focus from common essay topics
      if (topic.includes('tragic') || topic.includes('tragedy')) {
        plan.paragraphs = [
          { focus: "Othello as Tragic Hero", points: ["Noble beginnings", "Hamartia (fatal flaw)", "Peripeteia (reversal)", "Anagnorisis (recognition)"], quotes: CHARACTERS.othello.keyQuotes.slice(0, 2) },
          { focus: "The Role of Fate vs Free Will", points: ["Iago's manipulation", "Othello's choices", "Inevitability of tragedy"], quotes: CHARACTERS.iago.keyQuotes.slice(0, 2) },
          { focus: "Catharsis and Resolution", points: ["Audience response", "Justice served?", "Lessons learned"], quotes: KEY_QUOTES.slice(-3) }
        ];
      } else if (topic.includes('downfall') || topic.includes('destruction')) {
        plan.paragraphs = [
          { focus: "Seeds of Destruction", points: ["Othello's insecurities", "Iago's motives", "Venetian society"], quotes: KEY_QUOTES.slice(0, 3) },
          { focus: "The Process of Destruction", points: ["The temptation scene (3.3)", "Erosion of trust", "Loss of identity"], quotes: KEY_QUOTES.slice(3, 6) },
          { focus: "The Final Catastrophe", points: ["Murder of Desdemona", "Revelation of truth", "Othello's suicide"], quotes: KEY_QUOTES.slice(-4) }
        ];
      } else {
        plan.paragraphs = [
          { focus: "Context and Setup", points: ["Define key terms from the question", "Establish your argument", "Historical/theatrical context"], quotes: KEY_QUOTES.slice(0, 2) },
          { focus: "Main Argument with Evidence", points: ["Strongest point supporting your thesis", "Detailed textual analysis", "Link quotes to argument"], quotes: KEY_QUOTES.slice(2, 5) },
          { focus: "Development and Nuance", points: ["Secondary evidence", "Alternative interpretations", "Dramatic techniques"], quotes: KEY_QUOTES.slice(5, 8) },
          { focus: "Counter-argument (if applicable)", points: ["Acknowledge opposing view", "Refute or qualify", "Strengthen your position"], quotes: KEY_QUOTES.slice(8, 10) }
        ];
      }
      plan.relevantQuotes = KEY_QUOTES.slice(0, 10);
    }

    // Add counter-argument section for agree/disagree questions
    if (isAgreeDisagree) {
      plan.counterArgument = {
        title: "Counter-Argument Consideration",
        points: [
          "Acknowledge the opposing view fairly",
          "Present evidence that might support the other side",
          "Explain why your position is still stronger",
          "Use phrases like 'While it could be argued that...' or 'Some critics suggest...'"
        ]
      };
    }

    // Enhanced introduction with specific guidance
    plan.introduction = [
      "Hook: Start with a striking quote or provocative statement about the topic",
      "Context: Brief background on Othello (1603-04, tragedy, Venice/Cyprus)",
      "Define terms: Clarify any key concepts in the question",
      "Thesis: State your argument clearly and directly",
      "Roadmap: Briefly outline your main points (optional but helpful)"
    ];

    // Enhanced conclusion
    plan.conclusion = [
      "Restate thesis: Echo your main argument in fresh words",
      "Synthesise: Show how your points work together",
      "Broader significance: Connect to Shakespeare's purpose or universal themes",
      "Final thought: Memorable closing statement or quote",
      "Answer the question: Ensure you've directly addressed what was asked"
    ];

    // PCLM Marking Criteria guidance
    plan.markingCriteria = {
      purpose: [
        "Clarity of PURPOSE (30%): Is your argument clear and consistent throughout?",
        "Engage with the question directly - don't just describe, analyse",
        "Show personal response while remaining academic",
        "Every paragraph should advance your argument"
      ],
      coherence: [
        "COHERENCE of delivery (30%): Does your essay flow logically?",
        "Use clear topic sentences at the start of each paragraph",
        "Link paragraphs with transitions (However, Furthermore, Similarly)",
        "Build your argument progressively"
      ],
      language: [
        "Efficiency of LANGUAGE (30%): Is your writing precise and sophisticated?",
        "Use literary terminology correctly (soliloquy, dramatic irony, etc.)",
        "Vary sentence structure for rhythm",
        "Integrate quotes smoothly into your sentences"
      ],
      mechanics: [
        "Accuracy of MECHANICS (10%): Is spelling, grammar, punctuation correct?",
        "Check spelling of character names (Desdemona, Brabantio, Roderigo)",
        "Use quotation marks correctly for quotes",
        "Proofread for common errors"
      ]
    };

    // Sentence starters for different essay sections
    plan.sentenceStarters = {
      introduction: [
        "Shakespeare's Othello presents...",
        "In exploring the question of...",
        "The tragedy of Othello fundamentally concerns...",
        "At the heart of this play lies..."
      ],
      body: [
        "This is evident when...",
        "Shakespeare demonstrates this through...",
        "The significance of this becomes clear in...",
        "Crucially, this moment reveals...",
        "Furthermore, the use of [technique] emphasises...",
        "The juxtaposition of... and... highlights...",
        "It could be argued that... however...",
        "This interpretation is supported by..."
      ],
      conclusion: [
        "Ultimately, Shakespeare's Othello...",
        "In conclusion, the evidence suggests...",
        "The tragedy's enduring power lies in...",
        "Thus, we can see that..."
      ]
    };

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
                    Paste a past paper question or write your own topic to generate a structured essay plan with PCLM guidance, relevant quotes, and sentence starters.
                  </p>
                  <textarea
                    className="essay-textarea"
                    placeholder='"Othello is not truly noble, but deeply flawed from the beginning." Discuss.'
                    value={essayTopic}
                    onChange={(e) => setEssayTopic(e.target.value)}
                  />
                  <button className="generate-btn" onClick={generateEssayPlan}>
                    Generate Essay Plan
                  </button>
                </div>

                {/* PCLM Marking Criteria - Always visible as guide */}
                <div className="card" style={{marginTop: '1rem'}}>
                  <h3 className="card-title">PCLM Marking Scheme</h3>
                  <p className="card-text" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>
                    LC Single Text essays are marked on these criteria:
                  </p>
                  <div className="pclm-grid">
                    <div className="pclm-item">
                      <span className="pclm-label">P</span>
                      <span className="pclm-text">Purpose (30%)</span>
                    </div>
                    <div className="pclm-item">
                      <span className="pclm-label">C</span>
                      <span className="pclm-text">Coherence (30%)</span>
                    </div>
                    <div className="pclm-item">
                      <span className="pclm-label">L</span>
                      <span className="pclm-text">Language (30%)</span>
                    </div>
                    <div className="pclm-item">
                      <span className="pclm-label">M</span>
                      <span className="pclm-text">Mechanics (10%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="essay-output">
                {essayPlan ? (
                  <div className="essay-plan">
                    {/* Word Count Target */}
                    <div className="card word-count-card">
                      <div className="word-count-info">
                        <span className="word-count-label">Target Word Count:</span>
                        <span className="word-count-value">{essayPlan.wordCount.min} - {essayPlan.wordCount.max} words</span>
                      </div>
                    </div>

                    {/* Main Essay Structure */}
                    <div className="card">
                      <h3 className="card-title">Essay Plan: {essayPlan.topic}</h3>

                      {/* Introduction */}
                      <div className="plan-section">
                        <h4 className="plan-section-title">Introduction</h4>
                        {essayPlan.introduction.map((point, i) => (
                          <div key={i} className="plan-item">{point}</div>
                        ))}
                        {essayPlan.sentenceStarters?.introduction && (
                          <div className="sentence-starters">
                            <div className="starters-title">Sentence Starters:</div>
                            {essayPlan.sentenceStarters.introduction.map((starter, i) => (
                              <div key={i} className="starter-item">"{starter}"</div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Body Paragraphs */}
                      {essayPlan.paragraphs.map((para, i) => (
                        <div key={i} className="plan-section">
                          <h4 className="plan-section-title">Paragraph {i + 1}: {para.focus}</h4>
                          {para.points.map((point, j) => (
                            <div key={j} className="plan-item">{point}</div>
                          ))}
                          {para.examTip && (
                            <div className="exam-tip-inline">
                              <strong>Exam Tip:</strong> {para.examTip}
                            </div>
                          )}
                          {para.quotes && para.quotes.length > 0 && (
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

                      {/* Counter-Argument Section */}
                      {essayPlan.counterArgument && (
                        <div className="plan-section counter-argument-section">
                          <h4 className="plan-section-title">{essayPlan.counterArgument.title}</h4>
                          {essayPlan.counterArgument.points.map((point, i) => (
                            <div key={i} className="plan-item">{point}</div>
                          ))}
                        </div>
                      )}

                      {/* Conclusion */}
                      <div className="plan-section">
                        <h4 className="plan-section-title">Conclusion</h4>
                        {essayPlan.conclusion.map((point, i) => (
                          <div key={i} className="plan-item">{point}</div>
                        ))}
                        {essayPlan.sentenceStarters?.conclusion && (
                          <div className="sentence-starters">
                            <div className="starters-title">Sentence Starters:</div>
                            {essayPlan.sentenceStarters.conclusion.map((starter, i) => (
                              <div key={i} className="starter-item">"{starter}"</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Body Paragraph Sentence Starters */}
                    {essayPlan.sentenceStarters?.body && (
                      <div className="card">
                        <h3 className="card-title">Body Paragraph Sentence Starters</h3>
                        <div className="starters-grid">
                          {essayPlan.sentenceStarters.body.map((starter, i) => (
                            <div key={i} className="starter-chip">"{starter}"</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* PCLM Guidance */}
                    {essayPlan.markingCriteria && (
                      <div className="card">
                        <h3 className="card-title">PCLM Checklist</h3>
                        <div className="pclm-checklist">
                          <div className="pclm-criteria">
                            <h4 className="criteria-title"><span className="pclm-badge">P</span> Purpose (30%)</h4>
                            {essayPlan.markingCriteria.purpose.map((point, i) => (
                              <div key={i} className="criteria-point">{point}</div>
                            ))}
                          </div>
                          <div className="pclm-criteria">
                            <h4 className="criteria-title"><span className="pclm-badge">C</span> Coherence (30%)</h4>
                            {essayPlan.markingCriteria.coherence.map((point, i) => (
                              <div key={i} className="criteria-point">{point}</div>
                            ))}
                          </div>
                          <div className="pclm-criteria">
                            <h4 className="criteria-title"><span className="pclm-badge">L</span> Language (30%)</h4>
                            {essayPlan.markingCriteria.language.map((point, i) => (
                              <div key={i} className="criteria-point">{point}</div>
                            ))}
                          </div>
                          <div className="pclm-criteria">
                            <h4 className="criteria-title"><span className="pclm-badge">M</span> Mechanics (10%)</h4>
                            {essayPlan.markingCriteria.mechanics.map((point, i) => (
                              <div key={i} className="criteria-point">{point}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Literary Techniques */}
                    {essayPlan.techniques && essayPlan.techniques.length > 0 && (
                      <div className="card">
                        <h3 className="card-title">Relevant Literary Techniques</h3>
                        {essayPlan.techniques.slice(0, 4).map((tech, i) => (
                          <div key={i} className="technique-mini">
                            <div className="technique-mini-name">{tech.name}</div>
                            <div className="technique-mini-def">{tech.definition}</div>
                            <div className="technique-mini-example">
                              Example: {tech.examples[0]}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* All Relevant Quotes */}
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
                    <p style={{fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7}}>
                      Include character names, themes, or keywords for best results
                    </p>
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

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(<OthelloStudyCompanion />);
