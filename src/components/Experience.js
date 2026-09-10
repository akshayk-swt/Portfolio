import { portfolioData } from '../data/portfolioData.js';

export function renderExperience() {
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
