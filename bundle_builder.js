const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const dataCode = fs.readFileSync(path.join(srcDir, 'data', 'portfolioData.js'), 'utf8')
  .replace(/export const portfolioData =/, 'const portfolioData =');

const navbarCode = fs.readFileSync(path.join(srcDir, 'components', 'Navbar.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderNavbar\(\)/, 'function renderNavbar()');

const heroCode = fs.readFileSync(path.join(srcDir, 'components', 'Hero.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderHero\(\)/, 'function renderHero()');

const aboutCode = fs.readFileSync(path.join(srcDir, 'components', 'About.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderAbout\(\)/, 'function renderAbout()');

const skillsCode = fs.readFileSync(path.join(srcDir, 'components', 'Skills.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderSkills\(\)/, 'function renderSkills()');

const expCode = fs.readFileSync(path.join(srcDir, 'components', 'Experience.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderExperience\(\)/, 'function renderExperience()');

const projectsCode = fs.readFileSync(path.join(srcDir, 'components', 'Projects.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderProjects\(\)/, 'function renderProjects()');

const processCode = fs.readFileSync(path.join(srcDir, 'components', 'TestingProcess.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderTestingProcess\(\)/, 'function renderTestingProcess()');

const knowCode = fs.readFileSync(path.join(srcDir, 'components', 'TestingKnowledge.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderTestingKnowledge\(\)/, 'function renderTestingKnowledge()');

const learnCode = fs.readFileSync(path.join(srcDir, 'components', 'Learning.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderLearning\(\)/, 'function renderLearning()');

const eduCode = fs.readFileSync(path.join(srcDir, 'components', 'EducationCertifications.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderEducationCertifications\(\)/, 'function renderEducationCertifications()');

const contactCode = fs.readFileSync(path.join(srcDir, 'components', 'Contact.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderContact\(\)/, 'function renderContact()');

const footerCode = fs.readFileSync(path.join(srcDir, 'components', 'Footer.js'), 'utf8')
  .replace(/import { portfolioData } from '\.\.\/data\/portfolioData\.js';/, '')
  .replace(/export function renderFooter\(\)/, 'function renderFooter()');

const appCode = fs.readFileSync(path.join(srcDir, 'js', 'app.js'), 'utf8')
  .replace(/import .* from .*/g, '')
  .replace(/export function initApp\(\)/, 'function initApp()');

const bundle = `
(function() {
  ${dataCode}
  ${navbarCode}
  ${heroCode}
  ${aboutCode}
  ${skillsCode}
  ${expCode}
  ${projectsCode}
  ${processCode}
  ${knowCode}
  ${learnCode}
  ${eduCode}
  ${contactCode}
  ${footerCode}
  ${appCode}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
`;

fs.writeFileSync(path.join(srcDir, 'js', 'bundle.js'), bundle, 'utf8');
console.log('Bundle created successfully at src/js/bundle.js');
