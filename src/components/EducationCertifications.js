import { portfolioData } from '../data/portfolioData.js';

export function renderEducationCertifications() {
  const { education, certifications } = portfolioData;

  return `
    <section id="education" class="edu-cert-section">
      <div class="container">
        <div class="edu-cert-grid">
          
          <!-- Education Column -->
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

          <!-- Certifications Column -->
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
