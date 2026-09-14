/**
 * ============================================================
 *  CENTRAL DATA FILE — Edit all personal content here.
 *  Do NOT touch component files for routine updates.
 * ============================================================
 */

// ── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name: 'Akshay K',
  role: 'Software Tester / QA Engineer',
  tagline:
    'Passionate about finding bugs, improving software quality, and creating reliable user experiences.',
  email: 'akshaymdy123@gmail.com',        // ← Replace with your email
  linkedin: 'https://www.linkedin.com/in/akshay178', // ← Replace with your LinkedIn URL
  github: 'https://github.com/akshayk-swt',       // ← Replace with your GitHub URL
  whatsapp: '919567367933',              // ← Replace with your WhatsApp number with country code (e.g. 919876543210)
  resumePath: '/resume.pdf',              // ← Resume file in public/resume.pdf
  profileImage: '/images/My photo.jpeg', // ← Replace with your photo (PNG/JPG)
}

// ── NAVIGATION ───────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// ── SKILLS ───────────────────────────────────────────────────
// icon: name of a Lucide React icon (PascalCase string used for dynamic lookup)
export const skills = [
  { label: 'Manual Testing', icon: 'ClipboardCheck', description: 'Systematic test execution without automation tools' },
  { label: 'Test Case Design', icon: 'FileText', description: 'Writing clear, reusable test cases and scenarios' },
  { label: 'Test Execution', icon: 'Play', description: 'Running tests and recording results accurately' },
  { label: 'Bug Reporting', icon: 'Bug', description: 'Documenting defects with steps to reproduce' },
  { label: 'Functional Testing', icon: 'CheckCircle2', description: 'Validating features against requirements' },
  { label: 'Regression Testing', icon: 'RefreshCw', description: 'Ensuring changes don\'t break existing features' },
  { label: 'SDLC', icon: 'GitMerge', description: 'Software Development Life Cycle understanding' },
  { label: 'STLC', icon: 'Repeat2', description: 'Software Testing Life Cycle methodology' },
  { label: 'Basic Automation Testing', icon: 'Bot', description: 'Introduction to scripted test execution' },
]

// ── EXPERIENCE ───────────────────────────────────────────────
export const experience = [
  {
    title: 'Software Testing Intern',
    company: 'Luminar Technolab',
    location: 'India',
    period: 'jul 2025 - dec 2025',          // ← Update with actual dates (e.g. "Jun 2024 – Aug 2024")
    type: 'Internship',
    points: [
      'Worked with software testing concepts and QA methodologies in a practical environment.',
      'Practised manual testing on real-world websites and applications.',
      'Created and executed structured test cases aligned with feature requirements.',
      'Identified, documented, and reported bugs using a systematic defect tracking approach.',
      'Gained hands-on exposure to the full Software Testing Life Cycle (STLC).',
    ],
  },
]

// ── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id: 'tidebill',
    name: 'TideBill',
    subtitle: 'Invoice Management Application',
    description:
      'A full-featured invoice management web app with a responsive dashboard, customer records, and PDF invoice generation. Involved both building and thorough manual testing of all core features.',
    image: '/images/project-tidebill.svg', // ← Replace with a screenshot (PNG/JPG)
    tags: ['Invoice Management', 'PDF Generation', 'Dashboard', 'Manual Testing'],
    liveUrl: '#',     // ← Replace with live project URL or remove
    githubUrl: '#',   // ← Replace with GitHub repo URL
  },
  {
    id: 'gamemates',
    name: 'GameMates',
    subtitle: 'Multiplayer Browser Game Platform',
    description:
      'A real-time multiplayer browser game platform featuring competitive games including Name Place Thing and an Imposter drawing game, with live sync across players.',
    image: '/images/project-gamemates.svg', // ← Replace with a screenshot (PNG/JPG)
    tags: ['Multiplayer', 'Real-time', 'Browser Games', 'WebSockets'],
    liveUrl: '#',     // ← Replace with live project URL or remove
    githubUrl: '#',   // ← Replace with GitHub repo URL
  },
  {
    id: 'tourtrack',
    name: 'TourTrack',
    subtitle: 'Tour Operator Management Application',
    description:
      'A comprehensive management system for tour operators — covers trip and bus scheduling, driver management, travel sheet generation, profit/loss reporting, and customer PDF exports.',
    image: '/images/project-tourtrack.svg', // ← Replace with a screenshot (PNG/JPG)
    tags: ['Tour Management', 'PDF Reports', 'Driver Management', 'P&L Tracking'],
    liveUrl: '#',     // ← Replace with live project URL or remove
    githubUrl: '#',   // ← Replace with GitHub repo URL
  },
]

// ── EDUCATION ────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Commerce (BCom)',
    institution: 'University of Calicut',
    status: 'Completed',
    year: '',            // ← Add graduation year if you wish, e.g. "2023"
  },
]

// ── CURRENTLY LEARNING ───────────────────────────────────────
export const currentlyLearning = [
  {
    topic: 'Automation Testing',
    icon: 'Bot',
    note: 'Learning test automation frameworks and principles',
  },
  {
    topic: 'Java for Testing',
    icon: 'Code2',
    note: 'Building Java programming foundations for test automation',
  },
  {
    topic: 'Test Automation Concepts',
    icon: 'Layers',
    note: 'Page Object Model, test design patterns, and frameworks',
  },
]

// ── SEO METADATA ─────────────────────────────────────────────
export const seo = {
  title: 'Akshay K — Software Tester / QA Engineer',
  description:
    'Portfolio of Akshay K, a Software Tester and QA Engineer specialising in manual testing, test case design, and bug reporting. Based in India.',
  ogImage: '/images/og-image.png', // ← Optionally add a 1200×630 OG image
}
