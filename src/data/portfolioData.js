/**
 * ============================================================================
 * AKSHAY K - PERSONAL PORTFOLIO CONFIGURATION FILE
 * ============================================================================
 * Edit this file to update any content across your portfolio website.
 * No component code changes are required!
 */

export const portfolioData = {
  // 1. Personal & Contact Information
  personal: {
    name: "AKSHAY K",
    title: "Software Tester",
    subtitle: "Quality Assurance & Manual Testing",
    tagline: "Quality is not an option.",
    email: "akshayk.qa@gmail.com",
    linkedin: "https://linkedin.com/in/akshay-k-qa",
    github: "https://github.com/akshayk-qa",
    profileImage: "./assets/profile.png",
    location: "Kerala, India",
    status: "Open to Software Testing & QA Opportunities",
  },

  // 2. Hero Floating UI Badges
  heroBadges: [
    { text: "BUG FOUND ✓", code: "DEFECT-804", type: "defect" },
    { text: "TEST CASE 124", code: "EXECUTION: PASSED", type: "testcase" },
    { text: "BUILD PASSED", code: "v1.4.2 READY", type: "build" },
  ],

  // 3. About Section Summary & Highlights
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

  // 4. Skills Grid ("WHAT I DO")
  skills: [
    {
      name: "Manual Testing",
      desc: "Executing structured test scenarios to validate requirements and UI behavior.",
      icon: "CheckSquare",
    },
    {
      name: "Functional Testing",
      desc: "Verifying features against functional requirements and user expectations.",
      icon: "Sliders",
    },
    {
      name: "Regression Testing",
      desc: "Ensuring code modifications do not impact existing application functionality.",
      icon: "RotateCcw",
    },
    {
      name: "Smoke Testing",
      desc: "Performing basic health checks on new builds before deep test cycles.",
      icon: "Flame",
    },
    {
      name: "Sanity Testing",
      desc: "Rapid verification of specific bug fixes and minor build updates.",
      icon: "Zap",
    },
    {
      name: "Test Case Design",
      desc: "Writing clear, reusable test cases with pre-conditions, steps, and expected outcomes.",
      icon: "FileText",
    },
    {
      name: "Bug Reporting",
      desc: "Documenting detailed defect reports with step-by-step reproduction and logs.",
      icon: "Bug",
    },
    {
      name: "SDLC",
      desc: "Understanding standard software development lifecycles and milestone delivery.",
      icon: "Layers",
    },
    {
      name: "STLC",
      desc: "Executing Software Testing Life Cycle phases from analysis to closure.",
      icon: "GitMerge",
    },
    {
      name: "Bug Life Cycle",
      desc: "Tracking defects through New, Assigned, Fixed, Retested, and Closed states.",
      icon: "RefreshCw",
    },
    {
      name: "Basic Automation Testing",
      desc: "Developing fundamental automation scripts using Java and testing frameworks.",
      icon: "Terminal",
    },
  ],

  // 5. Work Experience Timeline
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

  // 6. Selected Projects ("SELECTED PROJECTS")
  projects: [
    {
      id: "01",
      name: "TideBill",
      subtitle: "Invoice Management System",
      role: "Built + Tested",
      description:
        "A full-featured invoice creation and management system engineered for clarity, PDF generation, and client tracking.",
      highlights: [
        "Customer management",
        "Invoice creation",
        "Invoice management",
        "Authentication",
        "PDF functionality",
        "Responsive UI",
        "Manual testing",
      ],
      technologies: ["React", "JavaScript", "PDF Engine", "CSS3", "Manual QA"],
      github: "https://github.com/akshayk-qa/tidebill",
      liveDemo: "https://tidebill-demo.vercel.app",
      image: "./assets/tidebill.png",
      badge: "Built + Tested",
    },
    {
      id: "02",
      name: "GameMates",
      subtitle: "Multiplayer Competitive Game Platform",
      role: "Built + Tested",
      description:
        "Real-time web gaming platform featuring custom party games, live room states, host controls, and scoring engines.",
      highlights: [
        "Multiplayer gameplay",
        "Game rooms",
        "Competitive scoring",
        "Name Place Thing",
        "Imposter Drawing Game",
        "Host-controlled sessions",
        "Responsive interface",
      ],
      technologies: ["Next.js", "TypeScript", "Realtime DB", "CSS3", "Manual QA"],
      github: "https://github.com/akshayk-qa/gamemates",
      liveDemo: "https://gamemates.vercel.app",
      image: "./assets/gamemates.png",
      badge: "Built + Tested",
    },
    {
      id: "03",
      isPlaceholder: true,
      name: "MORE PROJECTS COMING SOON",
      subtitle: "Automation & QA Expansion",
      description: "Currently working on upcoming automated test suites and framework implementations.",
      badge: "In Progress",
    },
  ],

  // 7. Testing Methodology ("HOW I TEST")
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

  // 8. QA Knowledge Cards
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

  // 9. Currently Learning Section
  learning: {
    heading: "CURRENTLY LEARNING",
    topic: "AUTOMATION TESTING",
    roadmap: ["Java", "Automation Fundamentals", "Practical Testing"],
    description: "Currently developing my automation testing skills with Java.",
    details:
      "Expanding from manual quality assurance into test automation. Building scripts in Java to automate regression suites and streamline test execution.",
  },

  // 10. Education Card
  education: {
    degree: "BCom",
    fullDegree: "Bachelor of Commerce",
    institution: "University of Calicut",
    status: "Completed",
    description: "Strong foundation in business logic, quantitative analysis, and methodical documentation.",
  },

  // 11. Certifications
  certifications: [
    {
      name: "Software Testing Training",
      issuer: "Luminar Technolab",
      status: "Completed Training",
      imagePlaceholder: "Certificate Preview",
      previewImage: null, // User can set image URL or file path here
    },
    {
      name: "Internship Certificate",
      issuer: "Luminar Technolab",
      status: "Verified Internship",
      imagePlaceholder: "Certificate Preview",
      previewImage: null, // User can set image URL or file path here
    },
  ],
};
