import { portfolioData } from '../data/portfolioData.js';

export function renderTestingKnowledge() {
  const { testingKnowledge } = portfolioData;

  return `
    <div class="container" style="padding-top: 0; padding-bottom: 60px;">
      <span class="section-label">QA DOMAIN KNOWLEDGE</span>
      <h3 style="font-size: 1.75rem; margin-bottom: 24px;">CORE TESTING CONCEPTS</h3>

      <div class="knowledge-grid">
        ${testingKnowledge.map(card => `
          <div class="knowledge-card">
            <span class="knowledge-cat">${card.category}</span>
            <h4 class="knowledge-title">${card.title}</h4>

            <div class="knowledge-compare-box">
              <span class="compare-label">${card.conceptA}</span>
              <p style="margin-bottom: 12px;">${card.descA}</p>

              <span class="compare-label">${card.conceptB}</span>
              <p>${card.descB}</p>
            </div>

            <div class="knowledge-takeaway">
              💡 ${card.takeaway}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
