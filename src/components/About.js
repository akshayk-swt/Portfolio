import { portfolioData } from '../data/portfolioData.js';

export function renderAbout() {
  const { about } = portfolioData;

  return `
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-grid">
          
          <!-- Left Column -->
          <div>
            <span class="section-label">BACKGROUND & PROFILE</span>
            <h2 class="section-heading">${about.heading}</h2>
          </div>

          <!-- Right Column -->
          <div>
            <p class="about-intro-text">${about.bioParagraph1}</p>
            <p class="about-intro-text">${about.bioParagraph2}</p>

            <div class="about-cards-grid">
              ${about.highlights.map(item => `
                <div class="about-card">
                  <div class="about-card-title">${item.title}</div>
                  <div class="about-card-sub">${item.sub}</div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
