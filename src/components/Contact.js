import { portfolioData } from '../data/portfolioData.js';

export function renderContact() {
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
