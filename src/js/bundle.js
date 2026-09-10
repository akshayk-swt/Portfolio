(function() {
  // 1. Central Portfolio Configuration Data
  const portfolioData = {
    personal: {
      name: "AKSHAY K",
      title: "Software Tester",
      subtitle: "Quality Assurance & Manual Testing",
      tagline: "Quality is not an option.",
      email: "akshayk.qa@gmail.com",
      linkedin: "https://linkedin.com/in/akshay-k-qa",
      github: "https://github.com/akshayk-qa",
      profileImage: "./assets/profile.svg",
      location: "Kerala, India",
      status: "Open to Software Testing & QA Opportunities",
    },
    heroBadges: [
      { text: "BUG FOUND ✓", code: "DEFECT-804", type: "defect" },
      { text: "TEST CASE 124", code: "EXECUTION: PASSED", type: "testcase" },
      { text: "BUILD PASSED", code: "v1.4.2 READY", type: "build" },
    ],
    about: {
      heading: "ABOUT ME",
      bioParagraph1:
        "I am a detail-oriented Software Tester dedicated to verifying application behavior, uncovering edge-case defects, and ensuring digital products perform with absolute precision. My focus is on structured testing methodologies and high standards of quality assurance.",
      bioParagraph2:
        "With a strong foundation in Commerce (BCom) and specialized training in Software Testing from Luminar Technolab, I combine analytical reasoning with methodical test execution. I take pride in clear bug reporting, STLC rigor, and continuous professional growth.",
      highlights: [
        { title: "BCom Graduate", sub: "University of Calicut" },
        { title: "Software Testing", sub: "Luminar Technolab" },
        { title: "Manual QA", sub: "STLC & Defect Lifecycle" },
        { title: "Automation Learning", sub: "Java & Selenium Focus" },
      ],
    },
    skills: [
      { name: "Manual Testing", desc: "Executing structured test scenarios to validate requirements and UI behavior.", icon: "CheckSquare" },
      { name: "Functional Testing", desc: "Verifying features against functional requirements and user expectations.", icon: "Sliders" },
      { name: "Regression Testing", desc: "Ensuring code modifications do not impact existing application functionality.", icon: "RotateCcw" },
      { name: "Smoke Testing", desc: "Performing basic health checks on new builds before deep test cycles.", icon: "Flame" },
      { name: "Sanity Testing", desc: "Rapid verification of specific bug fixes and minor build updates.", icon: "Zap" },
      { name: "Test Case Design", desc: "Writing clear, reusable test cases with pre-conditions, steps, and expected outcomes.", icon: "FileText" },
      { name: "Bug Reporting", desc: "Documenting detailed defect reports with step-by-step reproduction and logs.", icon: "Bug" },
      { name: "SDLC", desc: "Understanding standard software development lifecycles and milestone delivery.", icon: "Layers" },
      { name: "STLC", desc: "Executing Software Testing Life Cycle phases from analysis to closure.", icon: "GitMerge" },
      { name: "Bug Life Cycle", desc: "Tracking defects through New, Assigned, Fixed, Retested, and Closed states.", icon: "RefreshCw" },
      { name: "Basic Automation Testing", desc: "Developing fundamental automation scripts using Java and testing frameworks.", icon: "Terminal" },
    ],
    experience: [
      {
        role: "Software Testing Intern",
        company: "Luminar Technolab",
        period: "Internship Period",
        type: "Internship",
        highlights: [
          "Conducted end-to-end manual testing on web application projects.",
          "Designed comprehensive test scenarios, test cases, and requirement traceability matrices.",
          "Identified, logged, and tracked software defects through the complete Bug Life Cycle.",
          "Executed functional, sanity, smoke, and regression test suites across build iterations.",
          "Collaborated in sprint reviews and test closure summary report preparation.",
        ],
      },
    ],
    projects: [
      {
        id: "01",
        name: "TideBill",
        subtitle: "Invoice Management System",
        role: "Built + Tested",
        description: "A full-featured invoice creation and management system engineered for clarity, PDF generation, and client tracking.",
        highlights: [
          "Customer management", "Invoice creation", "Invoice management",
          "Authentication", "PDF functionality", "Responsive UI", "Manual testing"
        ],
        github: "https://github.com/akshayk-qa/tidebill",
        liveDemo: "https://tidebill-demo.vercel.app",
        image: "./assets/tidebill.svg",
      },
      {
        id: "02",
        name: "GameMates",
        subtitle: "Multiplayer Competitive Game Platform",
        role: "Built + Tested",
        description: "Real-time web gaming platform featuring custom party games, live room states, host controls, and scoring engines.",
        highlights: [
          "Multiplayer gameplay", "Game rooms", "Competitive scoring",
          "Name Place Thing", "Imposter Drawing Game", "Host-controlled sessions", "Responsive interface"
        ],
        github: "https://github.com/akshayk-qa/gamemates",
        liveDemo: "https://gamemates.vercel.app",
        image: "./assets/gamemates.svg",
      },
      {
        id: "03",
        isPlaceholder: true,
        name: "MORE PROJECTS COMING SOON",
        description: "Currently working on upcoming automated test suites and framework implementations.",
      },
    ],
    testingProcess: [
      { step: "01", name: "SDLC Integration", desc: "Aligning test activities with development milestones." },
      { step: "02", name: "STLC Planning", desc: "Analyzing requirements and scope of testing." },
      { step: "03", name: "Test Planning", desc: "Defining test strategy, environments, and deliverables." },
      { step: "04", name: "Test Case Design", desc: "Authoring precise, actionable test scenarios & steps." },
      { step: "05", name: "Test Execution", desc: "Running test scripts, validating actual vs expected." },
      { step: "06", name: "Bug Reporting", desc: "Filing clear defect reports with steps to reproduce." },
      { step: "07", name: "Retesting", desc: "Verifying fixed bugs in updated build releases." },
      { step: "08", name: "Regression Testing", desc: "Ensuring overall system stability post bug-fix." },
      { step: "09", name: "Test Closure", desc: "Preparing test metrics, reports, and release approval." },
    ],
    testingKnowledge: [
      {
        title: "Severity vs Priority",
        category: "DEFECT METRICS",
        conceptA: "Severity",
        descA: "Impact of defect on system functionality (e.g., system crash = High Severity).",
        conceptB: "Priority",
        descB: "Urgency to fix the defect based on business need (e.g., logo typo = High Priority).",
        takeaway: "Severity is technical impact; Priority is business urgency.",
      },
      {
        title: "Test Scenario vs Test Case",
        category: "TEST DOCUMENTATION",
        conceptA: "Test Scenario",
        descA: "High-level overview of what to test (e.g., Verify user login functionality).",
        conceptB: "Test Case",
        descB: "Detailed set of conditions, steps, inputs, and expected outcomes (e.g., Login with valid credentials).",
        takeaway: "Scenario is 'What to test'; Test Case is 'How to test'.",
      },
      {
        title: "Verification vs Validation",
        category: "QUALITY MANAGEMENT",
        conceptA: "Verification",
        descA: "Static testing process of evaluating work products like docs, code, and design (Are we building the product right?).",
        conceptB: "Validation",
        descB: "Dynamic testing process of executing actual software against requirements (Are we building the right product?).",
        takeaway: "Verification checks process & docs; Validation checks running software.",
      },
      {
        title: "Positive vs Negative Testing",
        category: "TEST STRATEGY",
        conceptA: "Positive Testing",
        descA: "Validating that system performs correctly given valid data and expected inputs.",
        conceptB: "Negative Testing",
        descB: "Validating system error handling given invalid data, edge cases, and unexpected inputs.",
        takeaway: "Positive checks happy path; Negative checks system resilience & error handling.",
      },
    ],
    learning: {
      heading: "CURRENTLY LEARNING",
      topic: "AUTOMATION TESTING",
      roadmap: ["Java", "Automation Fundamentals", "Practical Testing"],
      description: "Currently developing my automation testing skills with Java.",
      details: "Expanding from manual quality assurance into test automation. Building scripts in Java to automate regression suites and streamline test execution.",
    },
    education: {
      degree: "BCom",
      fullDegree: "Bachelor of Commerce",
      institution: "University of Calicut",
      status: "Completed",
      description: "Strong foundation in business logic, quantitative analysis, and methodical documentation.",
    },
    certifications: [
      { name: "Software Testing Training", issuer: "Luminar Technolab", status: "Completed Training", imagePlaceholder: "Certificate Preview" },
      { name: "Internship Certificate", issuer: "Luminar Technolab", status: "Verified Internship", imagePlaceholder: "Certificate Preview" },
    ],
  };

  // 2. SVG Icon Helper
  function getSkillSVG(iconName) {
    switch (iconName) {
      case 'CheckSquare': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;
      case 'Sliders': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`;
      case 'RotateCcw': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>`;
      case 'Flame': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`;
      case 'Zap': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
      case 'FileText': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
      case 'Bug': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="6" width="8" height="14" rx="4"></rect><path d="M6 18h12M6 12h12M6 6h12M12 2v4"></path></svg>`;
      case 'Layers': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
      case 'GitMerge': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 9v12"></path><path d="M21 9a9 9 0 0 0-9 9"></path></svg>`;
      case 'RefreshCw': return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`;
      case 'Terminal': default: return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`;
    }
  }

  // 3. Render Components
  function renderNavbar() {
    return `
      <header class="navbar-wrapper">
        <nav class="navbar">
          <a href="#hero" class="nav-brand">
            ${portfolioData.personal.name}
            <span class="nav-brand-dot"></span>
          </a>
          <ul class="nav-menu">
            <li><a href="#hero" class="nav-link active" data-section="hero">Home</a></li>
            <li><a href="#about" class="nav-link" data-section="about">About</a></li>
            <li><a href="#skills" class="nav-link" data-section="skills">Skills</a></li>
            <li><a href="#experience" class="nav-link" data-section="experience">Experience</a></li>
            <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
            <li><a href="#testing" class="nav-link" data-section="testing">Testing</a></li>
            <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
          </ul>
          <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle Mobile Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </header>

      <div class="mobile-nav-overlay" id="mobile-nav-overlay">
        <button class="modal-close" id="mobile-menu-close" style="top: 24px; right: 24px;">✕</button>
        <a href="#hero" class="mobile-nav-link" data-section="hero">Home</a>
        <a href="#about" class="mobile-nav-link" data-section="about">About</a>
        <a href="#skills" class="mobile-nav-link" data-section="skills">Skills</a>
        <a href="#experience" class="mobile-nav-link" data-section="experience">Experience</a>
        <a href="#projects" class="mobile-nav-link" data-section="projects">Projects</a>
        <a href="#testing" class="mobile-nav-link" data-section="testing">Testing</a>
        <a href="#contact" class="mobile-nav-link" data-section="contact">Contact</a>
      </div>
    `;
  }

  function renderHero() {
    const { personal, heroBadges } = portfolioData;
    return `
      <section id="hero" class="hero-section">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <span class="section-label">${personal.title}</span>
              <h1>${personal.name}</h1>
              <p class="hero-tagline">${personal.tagline}</p>
              <p class="hero-desc">${personal.aboutHeadline}</p>
              <div class="hero-ctas">
                <a href="#projects" class="btn btn-primary">
                  <span>View Projects</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#contact" class="btn btn-secondary">
                  <span>Contact Me</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div class="hero-visual">
              <div class="hero-image-wrapper">
                <div class="hero-image-inner">
                  <img src="${personal.profileImage}" alt="${personal.name} - Software Tester" width="340" height="340" />
                </div>
              </div>
              <div class="floating-badge badge-defect">
                <div class="badge-dot"></div>
                <div><div class="badge-text">${heroBadges[0].text}</div><div class="badge-sub">${heroBadges[0].code}</div></div>
              </div>
              <div class="floating-badge badge-testcase">
                <div class="badge-dot"></div>
                <div><div class="badge-text">${heroBadges[1].text}</div><div class="badge-sub">${heroBadges[1].code}</div></div>
              </div>
              <div class="floating-badge badge-build">
                <div class="badge-dot"></div>
                <div><div class="badge-text">${heroBadges[2].text}</div><div class="badge-sub">${heroBadges[2].code}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAbout() {
    const { about } = portfolioData;
    return `
      <section id="about" class="about-section">
        <div class="container">
          <div class="about-grid">
            <div>
              <span class="section-label">BACKGROUND & PROFILE</span>
              <h2 class="section-heading">${about.heading}</h2>
            </div>
            <div>
              <p class="about-intro-text">${about.bioParagraph1}</p>
              <p class="about-intro-text">${about.bioParagraph2}</p>
              <div class="about-cards-grid">
                ${about.highlights.map(item => `
                  <div class="about-card">
                    <div class="about-card-title">${item.title}</div>
                    <div class="about-card-sub">${item.sub}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderSkills() {
    const { skills } = portfolioData;
    return `
      <section id="skills" class="skills-section">
        <div class="container">
          <span class="section-label">CORE COMPETENCIES</span>
          <h2 class="section-heading">WHAT I DO</h2>
          <p class="section-desc">Methodical testing practices and QA execution focused on defect prevention, system integrity, and product quality.</p>
          <div class="skills-grid">
            ${skills.map(skill => `
              <div class="skill-card">
                <div class="skill-icon-wrapper">${getSkillSVG(skill.icon)}</div>
                <h3 class="skill-name">${skill.name}</h3>
                <p class="skill-desc">${skill.desc}</p>
                <div class="skill-card-accent"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderExperience() {
    const { experience } = portfolioData;
    return `
      <section id="experience" class="experience-section">
        <div class="container">
          <span class="section-label">CAREER HISTORY</span>
          <h2 class="section-heading">EXPERIENCE</h2>
          <p class="section-desc">Practical software quality assurance experience acquired through real-world internships and intensive hands-on testing projects.</p>
          <div class="timeline-wrapper">
            <div class="timeline-line"></div>
            ${experience.map(exp => `
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                  <div class="timeline-header">
                    <div>
                      <div class="timeline-role">${exp.role}</div>
                      <div class="timeline-company">${exp.company}</div>
                    </div>
                    <span class="timeline-period">${exp.period}</span>
                  </div>
                  <ul class="timeline-list">
                    ${exp.highlights.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderProjects() {
    const { projects } = portfolioData;
    return `
      <section id="projects" class="projects-section">
        <div class="container">
          <span class="section-label">FEATURED WORK</span>
          <h2 class="section-heading">SELECTED PROJECTS</h2>
          <p class="section-desc">Web applications developed and thoroughly tested across full STLC cycles, verifying security, UI responsiveness, and core functional logic.</p>
          <div class="projects-flex">
            ${projects.map(project => {
              if (project.isPlaceholder) {
                return `
                  <div class="project-card-placeholder">
                    <div class="placeholder-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${project.name}</h3>
                    <p style="color: var(--text-secondary); max-width: 420px; font-size: 0.95rem;">${project.description}</p>
                  </div>
                `;
              }
              return `
                <div class="project-card">
                  <div class="project-preview">
                    <span class="project-number">${project.id}</span>
                    <img src="${project.image}" alt="${project.name} preview" loading="lazy" />
                  </div>
                  <div class="project-details">
                    <div>
                      <span class="project-badge">ROLE: ${project.role}</span>
                      <h3 class="project-title">${project.name}</h3>
                      <div class="project-subtitle">${project.subtitle}</div>
                      <p class="project-desc">${project.description}</p>
                      <div class="project-highlights-tags">
                        ${project.highlights.map(h => `<span class="highlight-tag">✓ ${h}</span>`).join('')}
                      </div>
                    </div>
                    <div class="project-actions">
                      ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 10px 18px; font-size: 0.85rem;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      ` : ''}
                      ${project.liveDemo ? `
                        <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 18px; font-size: 0.85rem;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      ` : ''}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderTestingProcess() {
    const { testingProcess } = portfolioData;
    return `
      <section id="testing" class="testing-section">
        <div class="container">
          <span class="section-label">METHODOLOGY</span>
          <h2 class="section-heading">HOW I TEST</h2>
          <p class="section-desc">A structured, end-to-end testing workflow ensuring every build meets rigorous quality benchmarks before deployment.</p>
          <div class="process-flow">
            ${testingProcess.map((item, idx) => `
              <div class="process-card" data-step="${item.step}">
                <div class="process-step-num">${item.step}</div>
                <div class="process-title">${item.name}</div>
                <div class="process-desc">${item.desc}</div>
                ${idx < testingProcess.length - 1 ? `<div class="process-arrow">↓</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderTestingKnowledge() {
    const { testingKnowledge } = portfolioData;
    return `
      <div class="container" style="padding-top: 0; padding-bottom: 60px;">
        <span class="section-label">QA DOMAIN KNOWLEDGE</span>
        <h3 style="font-size: 1.75rem; margin-bottom: 24px;">CORE TESTING CONCEPTS</h3>
        <div class="knowledge-grid">
          ${testingKnowledge.map(card => `
            <div class="knowledge-card">
              <span class="knowledge-cat">${card.category}</span>
              <h4 class="knowledge-title">${card.title}</h4>
              <div class="knowledge-compare-box">
                <span class="compare-label">${card.conceptA}</span>
                <p style="margin-bottom: 12px;">${card.descA}</p>
                <span class="compare-label">${card.conceptB}</span>
                <p>${card.descB}</p>
              </div>
              <div class="knowledge-takeaway">💡 ${card.takeaway}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderLearning() {
    const { learning } = portfolioData;
    return `
      <section id="learning" class="learning-section">
        <div class="container">
          <div class="learning-box">
            <span class="section-label">${learning.heading}</span>
            <h2 class="learning-topic">${learning.topic}</h2>
            <div class="roadmap-path">
              ${learning.roadmap.map((step, idx) => `
                <div class="roadmap-node">${step}</div>
                ${idx < learning.roadmap.length - 1 ? `<span class="roadmap-arrow">→</span>` : ''}
              `).join('')}
            </div>
            <p style="font-size: 1.15rem; color: var(--text-primary); font-weight: 600; margin-bottom: 8px;">
              "${learning.description}"
            </p>
            <p class="learning-quote">${learning.details}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderEducationCertifications() {
    const { education, certifications } = portfolioData;
    return `
      <section id="education" class="edu-cert-section">
        <div class="container">
          <div class="edu-cert-grid">
            <div>
              <span class="section-label">ACADEMIC BACKGROUND</span>
              <h3 class="section-heading" style="font-size: 2rem;">EDUCATION</h3>
              <div class="edu-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span class="project-badge" style="margin-bottom: 0;">${education.status}</span>
                  <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-heading);">DEGREE</span>
                </div>
                <h4 style="font-size: 1.75rem; color: var(--text-primary); margin-top: 8px;">${education.degree}</h4>
                <p style="font-size: 1rem; color: var(--accent-bright); font-weight: 600;">${education.fullDegree}</p>
                <p style="font-size: 1.05rem; color: var(--text-secondary);">${education.institution}</p>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 8px;">${education.description}</p>
              </div>
            </div>
            <div>
              <span class="section-label">QUALIFICATIONS</span>
              <h3 class="section-heading" style="font-size: 2rem;">CERTIFICATIONS</h3>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                ${certifications.map((cert, idx) => `
                  <div class="cert-card">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <h4 style="font-size: 1.2rem; color: var(--text-primary);">${cert.name}</h4>
                      <span style="font-size: 0.75rem; color: var(--accent-bright); font-weight: 700;">${cert.status}</span>
                    </div>
                    <p style="font-size: 0.95rem; color: var(--text-secondary);">${cert.issuer}</p>
                    <div class="cert-preview-box" data-cert-index="${idx}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <span>${cert.imagePlaceholder} (Click to Preview)</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderContact() {
    const { personal } = portfolioData;
    return `
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="contact-box">
            <span class="section-label">GET IN TOUCH</span>
            <h2 class="contact-heading">LET'S BUILD BETTER SOFTWARE.</h2>
            <p class="contact-desc">${personal.status}</p>
            <div class="contact-btns">
              <button class="btn btn-primary" id="copy-email-btn" data-email="${personal.email}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>EMAIL ME</span>
              </button>
              <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LINKEDIN</span>
              </a>
              <a href="${personal.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GITHUB</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderFooter() {
    const { personal } = portfolioData;
    return `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="footer-brand">${personal.name}</div>
              <div class="footer-role">${personal.title} | QA Specialist</div>
            </div>
            <div class="footer-links">
              <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn</a>
              <a href="${personal.github}" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub</a>
              <a href="mailto:${personal.email}" class="footer-link">Email</a>
            </div>
          </div>
          <div class="footer-copy">
            © 2026 ${personal.name}. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }

  // 4. Main Init Application Routine
  function initApp() {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;

    appRoot.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHero()}
        ${renderAbout()}
        ${renderSkills()}
        ${renderExperience()}
        ${renderProjects()}
        ${renderTestingProcess()}
        ${renderTestingKnowledge()}
        ${renderLearning()}
        ${renderEducationCertifications()}
        ${renderContact()}
      </main>
      ${renderFooter()}
      <div id="modal-container"></div>
      <div id="toast-container"></div>
    `;

    setupMobileNav();
    setupScrollSpy();
    setupCopyEmail();
    setupCertModal();
  }

  function setupMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !overlay) return;
    const openNav = () => overlay.classList.add('open');
    const closeNav = () => overlay.classList.remove('open');

    toggleBtn.addEventListener('click', openNav);
    if (closeBtn) closeBtn.addEventListener('click', closeNav);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeNav);
    });
  }

  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const onScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    window.addEventListener('scroll', onScroll);
  }

  function setupCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-email');
      if (email) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(`Email copied: ${email}`);
        }).catch(() => {
          window.location.href = `mailto:${email}`;
        });
      }
    });
  }

  function setupCertModal() {
    const certBoxes = document.querySelectorAll('.cert-preview-box');
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;

    certBoxes.forEach(box => {
      box.addEventListener('click', () => {
        modalContainer.innerHTML = `
          <div class="modal-overlay" id="modal-overlay">
            <div class="modal-content">
              <button class="modal-close" id="close-modal-btn">✕</button>
              <h3 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--accent-bright);">Certificate Preview</h3>
              <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 0.95rem;">
                You can upload your actual certificate image or PDF document to <code>./assets/</code> and link it inside <code>src/data/portfolioData.js</code>.
              </p>
              <div style="background: var(--bg-secondary); border: 2px dashed var(--border-color); padding: 40px; border-radius: var(--radius-card);">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--accent-bright); margin-bottom: 12px;">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                <div style="font-family: var(--font-heading); font-weight: bold; font-size: 1.1rem; color: #fff;">OFFICIAL VERIFICATION PLACEHOLDER</div>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Luminar Technolab • Software Testing</div>
              </div>
            </div>
          </div>
        `;

        const overlay = document.getElementById('modal-overlay');
        const closeBtn = document.getElementById('close-modal-btn');
        const closeModal = () => { modalContainer.innerHTML = ''; };
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay) {
          overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
          });
        }
      });
    });
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
