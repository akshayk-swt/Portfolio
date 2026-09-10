import { portfolioData } from '../data/portfolioData.js';

export function renderFooter() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear() || 2026;

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
          © ${currentYear} ${personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}
