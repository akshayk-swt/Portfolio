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
export const manualTestingProjects = [
  {
    id: 'bstackdemo',
    name: 'BStackDemo E-Commerce Web Application',
    role: 'Manual Tester',
    subtitle: 'E-Commerce Manual Testing',
    description:
      'Performed manual testing of an e-commerce web application by validating key user flows and identifying functional issues.',
    image: '/images/project-bstackdemo.svg',
    tags: [
      'Login Testing',
      'Product Search Testing',
      'Product Selection Testing',
      'Cart Testing',
      'Wishlist Testing',
      'Checkout Testing',
      'Payment Flow Testing',
      'Order Placement Testing',
      'Functional Testing',
      'UI Testing',
      'Test Case Design',
      'Test Execution',
      'Bug Identification & Reporting',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: 'college-website',
    name: 'A.V. Abdurahiman Haji Arts & Science College Website',
    role: 'Manual Tester',
    subtitle: 'Website Manual Testing',
    description:
      'Performed manual testing of the college website to identify functional issues, UI inconsistencies, broken links, and usability problems.',
    image: '/images/project-college-website.svg',
    tags: [
      'Functional Testing',
      'UI Testing',
      'Usability Testing',
      'Test Case Design',
      'Test Execution',
      'Bug Identification & Reporting',
      'Cross-Browser Testing',
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
]

export const projects = [
  {
    id: 'tidebill',
    name: 'TideBill',
    role: 'Developer & Tester',
    subtitle: 'Invoice Management Application',
    description:
      'A full-featured invoice management web app with a responsive dashboard, customer records, and PDF invoice generation. Involved both building and thorough manual testing of all core features.',
    image: '/images/project-tidebill.svg',
    tags: ['Invoice Management', 'PDF Generation', 'Dashboard', 'Manual Testing', 'Functional Testing', 'UI Testing'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'gamemates',
    name: 'GameMates',
    role: 'Developer & Tester',
    subtitle: 'Multiplayer Browser Game Platform',
    description:
      'A real-time multiplayer browser game platform featuring competitive games including Name Place Thing and an Imposter drawing game, with live sync across players.',
    image: '/images/project-gamemates.svg',
    tags: ['Multiplayer', 'Real-time', 'Browser Games', 'WebSockets', 'Manual Testing', 'UI Testing'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'tourtrack',
    name: 'TourTrack',
    role: 'Developer & Tester',
    subtitle: 'Tour Operator Management Application',
    description:
      'A comprehensive management system for tour operators — covers trip and bus scheduling, driver management, travel sheet generation, profit/loss reporting, and customer PDF exports.',
    image: '/images/project-tourtrack.svg',
    tags: ['Tour Management', 'PDF Reports', 'Driver Management', 'P&L Tracking', 'Manual Testing', 'Functional Testing'],
    liveUrl: '#',
    githubUrl: '#',
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
