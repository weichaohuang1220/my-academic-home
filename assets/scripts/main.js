import { config } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(); 
  renderContent();
  initInteractions();
});


function applyTheme() {
  const theme = config.theme;
  if (!theme) return;


  if (theme.googleFontsLink) {
    const link = document.createElement('link');
    link.href = theme.googleFontsLink;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }


  const style = document.createElement('style');
  let css = `
    :root {
      --font-main: ${theme.mainFont || "'Inter', sans-serif"};
      --font-mono: ${theme.codeFont || "'Fira Code', monospace"};
    }
    body { font-family: var(--font-main); }
  `;


  if (theme.moduleOverrides) {
    for (const [id, styles] of Object.entries(theme.moduleOverrides)) {
     
      let selector = `#${id}`;
      if (id === 'projects') {
        selector = `#projects, #all-projects-grid`;
      }


      let rules = '';
      if (styles.fontFamily) rules += `font-family: ${styles.fontFamily} !important;`;
      if (styles.fontSize) rules += `font-size: ${styles.fontSize} !important;`;
      if (styles.fontWeight) rules += `font-weight: ${styles.fontWeight} !important;`;
      if (styles.color) rules += `color: ${styles.color} !important;`;

      if (rules) {
        css += `
          ${selector} {
            ${rules}
          }
        `;
      }
    }
  }


  css += `
    .mono, .pub-year, .btn, code { font-family: var(--font-mono) !important; }
  `;

  style.innerHTML = css;
  document.head.appendChild(style);
}


function renderContent() {

  document.title = config.profile.title;
  const logos = document.querySelectorAll('.logo');
  logos.forEach(logo => logo.textContent = `<${config.profile.logoText} />`);


  const heroName = document.getElementById('hero-name');
  if (heroName) {
    heroName.textContent = `${config.profile.firstName} ${config.profile.lastName}.`;
    document.getElementById('hero-desc').innerHTML = config.heroDesc;
    

    const socialContainer = document.querySelector('.social-links');
    if (socialContainer) {
      socialContainer.innerHTML = config.social.map(s => 
        `<a href="${s.link}" target="_blank"><i class="${s.icon}"></i></a>`
      ).join('');
    }
    

    const cvBtn = document.getElementById('cv-btn');
    if (cvBtn) cvBtn.setAttribute('href', config.profile.cvLink);
    

    initTypewriter(config.typingRoles);
  }


  const aboutDesc = document.getElementById('about-desc');
  if (aboutDesc) {
    aboutDesc.innerHTML = config.about.desc;
    const interestsGrid = document.getElementById('interests-grid');
    if (interestsGrid) {
      interestsGrid.innerHTML = config.about.interests.map(item => `
        <div class="interest-item">
          <i class="${item.icon} highlight"></i>
          <h3>${item.title}</h3>
          <p class="text-small">${item.desc}</p>
        </div>
      `).join('');
    }
  }


  const pubList = document.getElementById('pub-list');
  if (pubList) {
    pubList.innerHTML = config.publications.length > 0 
      ? config.publications.map(pub => `
          <div class="pub-item">
            <div class="pub-year">${pub.year}</div>
            <div class="pub-content">
              <h4>${pub.title}</h4>
              <div class="pub-meta">
                ${pub.authors}<br>
                <em>${pub.venue}</em>
              </div>
              <div class="pub-links">
                ${pub.links.map(link => `<a href="${link.url}" class="btn btn-small">${link.text}</a>`).join('')}
              </div>
            </div>
          </div>
        `).join('')
      : '<p class="text-muted">No publications yet.</p>';
  }


  const featuredContainer = document.getElementById('featured-projects');
  const allProjectsContainer = document.getElementById('all-projects-grid');


  if (featuredContainer) {
    featuredContainer.innerHTML = config.projects
      .filter(p => p.featured)
      .map(p => `
        <div class="project-card">
          <h3><i class="${p.icon}"></i> ${p.title}</h3>
          <p>${p.desc}</p>
          <br>
          <a href="${p.link}" class="btn btn-small">${p.linkText}</a>
        </div>
      `).join('') + 
      `<div style="text-align: center; margin-top: 2rem;">
        <a href="projects.html" class="btn">View All Projects <i class="fas fa-arrow-right"></i></a>
      </div>`;
  }


  if (allProjectsContainer) {
    allProjectsContainer.innerHTML = config.projects.map(p => `
      <div class="interest-item">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <i class="fas fa-folder fa-2x highlight"></i>
          <div>
            <a href="${p.link}" target="_blank"><i class="fab fa-github fa-lg"></i></a>
          </div>
        </div>
        <h3>${p.title}</h3>
        <p class="text-small">${p.desc}</p>
        <p class="mono text-muted" style="font-size: 0.8rem; margin-top: 1rem;">${p.tags || ''}</p>
      </div>
    `).join('');
  }


  const teachingList = document.getElementById('teaching-list');
  if (teachingList) {
    teachingList.innerHTML = config.teaching.map(t => `<li>${t}</li>`).join('');
  }


  const contactText = document.getElementById('contact-text');
  if (contactText) {
    contactText.textContent = config.contact.text;
    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) {
      emailBtn.textContent = config.contact.emailText;
      emailBtn.href = `mailto:${config.profile.email}`;
    }
  }
}


function initInteractions() {

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = navLinks.classList.contains('active') ? 'fa-times' : 'fa-bars';
      menuToggle.querySelector('i').className = `fas ${icon}`;
    });
  }

  // Smooth Scroll Highlighting
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (pageYOffset >= (section.offsetTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    navItems.forEach(li => {
      li.classList.remove('active');
      const href = li.getAttribute('href');

      if (href.includes('#') && href.includes(current) && current !== '') {
        li.classList.add('active');
      }
    });
  });
}


function initTypewriter(roles) {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
  }
  type();
}