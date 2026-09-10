import { portfolioData } from '../data/portfolioData.js';

export function renderTestingProcess() {
  const { testingProcess } = portfolioData;

  return `
    <section id="testing" class="testing-section">
      <div class="container">
        <span class="section-label">METHODOLOGY</span>
        <h2 class="section-heading">HOW I TEST</h2>
        <p class="section-desc">A structured, end-to-end testing workflow ensuring every build meets rigorous quality benchmarks before deployment.</p>

        <div class="process-flow">
          ${testingProcess.map((item, idx) => `
            <div class="process-card" data-step="${item.step}">
              <div class="process-step-num">${item.step}</div>
              <div class="process-title">${item.name}</div>
              <div class="process-desc">${item.desc}</div>
              ${idx < testingProcess.length - 1 ? `
                <div class="process-arrow">↓</div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
