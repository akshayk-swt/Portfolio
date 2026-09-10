import { portfolioData } from '../data/portfolioData.js';

export function renderProjects() {
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
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                  <h3 style="font-size: 1.5rem; margin-bottom: 8px;">${project.name}</h3>
                  <p style="color: var(--text-secondary); max-width: 420px; font-size: 0.95rem;">${project.description}</p>
                </div>
              `;
            }

            return `
              <div class="project-card">
                <!-- Project Preview -->
                <div class="project-preview">
                  <span class="project-number">${project.id}</span>
                  <img src="${project.image}" alt="${project.name} preview" loading="lazy" />
                </div>

                <!-- Project Details -->
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
