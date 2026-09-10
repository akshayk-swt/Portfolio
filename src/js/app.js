import { renderNavbar } from '../components/Navbar.js';
import { renderHero } from '../components/Hero.js';
import { renderAbout } from '../components/About.js';
import { renderSkills } from '../components/Skills.js';
import { renderExperience } from '../components/Experience.js';
import { renderProjects } from '../components/Projects.js';
import { renderTestingProcess } from '../components/TestingProcess.js';
import { renderTestingKnowledge } from '../components/TestingKnowledge.js';
import { renderLearning } from '../components/Learning.js';
import { renderEducationCertifications } from '../components/EducationCertifications.js';
import { renderContact } from '../components/Contact.js';
import { renderFooter } from '../components/Footer.js';

export function initApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Mount HTML Structure
  appRoot.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderExperience()}
      ${renderProjects()}
      ${renderTestingProcess()}
      ${renderTestingKnowledge()}
      ${renderLearning()}
      ${renderEducationCertifications()}
      ${renderContact()}
    </main>
    ${renderFooter()}

    <!-- Modal Dialog Container -->
    <div id="modal-container"></div>
    <!-- Toast Notification Container -->
    <div id="toast-container"></div>
  `;

  // Attach Event Handlers
  setupMobileNav();
  setupScrollSpy();
  setupCopyEmail();
  setupCertModal();
}

function setupMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const overlay = document.getElementById('mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  const openNav = () => overlay.classList.add('open');
  const closeNav = () => overlay.classList.remove('open');

  toggleBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll);
}

function setupCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email');
    if (email) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    }
  });
}

function setupCertModal() {
  const certBoxes = document.querySelectorAll('.cert-preview-box');
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  certBoxes.forEach(box => {
    box.addEventListener('click', () => {
      modalContainer.innerHTML = `
        <div class="modal-overlay" id="modal-overlay">
          <div class="modal-content">
            <button class="modal-close" id="close-modal-btn">✕</button>
            <h3 style="font-size: 1.5rem; margin-bottom: 12px; color: var(--accent-bright);">Certificate Preview</h3>
            <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 0.95rem;">
              You can upload your actual certificate image or PDF document to <code>./assets/</code> and link it inside <code>src/data/portfolioData.js</code>.
            </p>
            <div style="background: var(--bg-secondary); border: 2px dashed var(--border-color); padding: 40px; border-radius: var(--radius-card);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--accent-bright); margin-bottom: 12px;">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <div style="font-family: var(--font-heading); font-weight: bold; font-size: 1.1rem; color: #fff;">OFFICIAL VERIFICATION PLACEHOLDER</div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Luminar Technolab • Software Testing</div>
            </div>
          </div>
        </div>
      `;

      const overlay = document.getElementById('modal-overlay');
      const closeBtn = document.getElementById('close-modal-btn');

      const closeModal = () => { modalContainer.innerHTML = ''; };
      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      if (overlay) {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) closeModal();
        });
      }
    });
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Auto init when script loads
document.addEventListener('DOMContentLoaded', initApp);
