import { portfolioData } from '../data/portfolioData.js';

export function renderLearning() {
  const { learning } = portfolioData;

  return `
    <section id="learning" class="learning-section">
      <div class="container">
        <div class="learning-box">
          <span class="section-label">${learning.heading}</span>
          <h2 class="learning-topic">${learning.topic}</h2>

          <div class="roadmap-path">
            ${learning.roadmap.map((step, idx) => `
              <div class="roadmap-node">${step}</div>
              ${idx < learning.roadmap.length - 1 ? `<span class="roadmap-arrow">→</span>` : ''}
            `).join('')}
          </div>

          <p style="font-size: 1.15rem; color: var(--text-primary); font-weight: 600; margin-bottom: 8px;">
            "${learning.description}"
          </p>
          
          <p class="learning-quote">
            ${learning.details}
          </p>
        </div>
      </div>
    </section>
  `;
}
