import { portfolioData } from '../data/portfolioData.js';

export function renderNavbar() {
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
