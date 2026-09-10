import { portfolioData } from '../data/portfolioData.js';

export function renderHero() {
  const { personal, heroBadges } = portfolioData;

  return `
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Left Content Column -->
          <div class="hero-content">
            <span class="section-label">${personal.title}</span>
            <h1>${personal.name}</h1>
            <p class="hero-tagline">${personal.tagline}</p>
            <p class="hero-desc">${personal.aboutHeadline}</p>
            
            <div class="hero-ctas">
              <a href="#projects" class="btn btn-primary">
                <span>View Projects</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              
              <a href="#contact" class="btn btn-secondary">
                <span>Contact Me</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- Right Visual Column -->
          <div class="hero-visual">
            <div class="hero-image-wrapper">
              <div class="hero-image-inner">
                <img src="./assets/profile.svg" alt="${personal.name} - Software Tester" width="340" height="340" />
              </div>
            </div>

            <!-- Floating UI Testing Elements -->
            <div class="floating-badge badge-defect">
              <div class="badge-dot"></div>
              <div>
                <div class="badge-text">${heroBadges[0].text}</div>
                <div class="badge-sub">${heroBadges[0].code}</div>
              </div>
            </div>

            <div class="floating-badge badge-testcase">
              <div class="badge-dot"></div>
              <div>
                <div class="badge-text">${heroBadges[1].text}</div>
                <div class="badge-sub">${heroBadges[1].code}</div>
              </div>
            </div>

            <div class="floating-badge badge-build">
              <div class="badge-dot"></div>
              <div>
                <div class="badge-text">${heroBadges[2].text}</div>
                <div class="badge-sub">${heroBadges[2].code}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}
