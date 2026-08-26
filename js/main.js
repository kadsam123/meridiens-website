/**
 * Meridiens - Core Website JavaScript
 * 
 * Handles general page layout mechanics, responsive nav menus, dynamic rendering
 * of services and products, and contact form interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initActiveLink();
  initI18n();
  initDynamicRendering();
  initContactForm();
});

/**
 * Handle scroll and mobile menu mechanics
 */
function initNavbar() {
  const header = document.querySelector('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Shadow on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scroll-shadow');
    } else {
      header.classList.remove('scroll-shadow');
    }
  });

  // Mobile Toggle Menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

/**
 * Automatically sets the active state on navbar links matching current page
 */
function initActiveLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (pageName === linkHref || (pageName === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Renders Services and Products dynamically if container elements are present
 */
function initDynamicRendering() {
  const servicesContainer = document.getElementById('services-container');
  const productsContainer = document.getElementById('products-container');

  // Render Services
  if (servicesContainer && typeof SERVICES_DATA !== 'undefined') {
    servicesContainer.innerHTML = ''; // Clear fallback spinner or placeholder
    
    SERVICES_DATA.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.id = service.id;
      
      card.innerHTML = `
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
        <p class="service-desc" style="font-size: 0.88rem; color: var(--color-text-muted); opacity: 0.9; margin-top: -5px; border-left: 2px solid var(--color-border); padding-left: 10px;">
          ${service.details}
        </p>
        <div class="service-footer">
          <span class="service-tag">${service.tag}</span>
          <a href="contact.html?subject=${encodeURIComponent('Inquiry: ' + service.title)}" class="service-link">Inquire &rarr;</a>
        </div>
      `;
      servicesContainer.appendChild(card);
    });
  }

  // Render Products
  if (productsContainer && typeof PRODUCTS_DATA !== 'undefined') {
    productsContainer.innerHTML = ''; // Clear placeholder
    
    PRODUCTS_DATA.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.id = product.id;
      
      card.innerHTML = `
        <div class="product-thumbnail-placeholder">
          <span class="product-icon-brand">${product.brandText}</span>
        </div>
        <div class="product-info">
          <span class="service-tag" style="align-self: flex-start; margin-bottom: var(--spacing-xs);">${product.tag}</span>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          <p class="product-desc" style="font-size: 0.85rem; color: var(--color-text-muted); border-top: 1px dashed var(--color-border); padding-top: var(--spacing-xs);">
            ${product.details}
          </p>
          <div class="product-actions">
            <a href="${product.pageUrl}" class="btn btn-secondary">Learn Details</a>
            <a href="${product.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary">Try Demo</a>
          </div>
        </div>
      `;
      productsContainer.appendChild(card);
    });
  }
}

/**
 * Handle custom contact form functionality (e.g. subject extraction, file upload name display)
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const fileInput = document.getElementById('file-upload');
  const fileNameDisplay = document.getElementById('file-name-display');

  // Pre-fill subject if provided in URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  if (subjectParam && contactForm) {
    const messageField = contactForm.querySelector('textarea[name="message"]');
    if (messageField) {
      messageField.value = `I am interested in learning more about your services, specifically: ${subjectParam}.\n\n`;
      messageField.focus();
    }
  }

  // Update file name display when file is selected
  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = `Selected: ${fileInput.files[0].name} (${(fileInput.files[0].size / 1024).toFixed(1)} KB)`;
        fileNameDisplay.style.color = 'var(--color-primary)';
      } else {
        fileNameDisplay.textContent = '';
        fileNameDisplay.style.color = 'var(--color-text-muted)';
      }
    });
  }

  // Client-side validation fallback
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all required fields (Name, Email, and Message).');
      }
    });
  }
}

/**
 * Initialize Translation Systems
 */
function initI18n() {
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu && !document.getElementById('lang-toggle-item')) {
    const li = document.createElement('li');
    li.id = 'lang-toggle-item';
    li.className = 'lang-switcher-item';
    
    let currentLang = localStorage.getItem('meridiens_lang') || 'en';
    let buttonText = currentLang === 'en' ? 'FR' : 'EN';
    
    li.innerHTML = `
      <button onclick="toggleLang()" class="lang-btn" id="lang-toggle-btn" aria-label="Switch Language">
        ${buttonText}
      </button>
    `;
    navMenu.appendChild(li);
  }
  applyTranslations();
}

/**
 * Dynamic translator replacing text contents
 */
function applyTranslations() {
  const lang = localStorage.getItem('meridiens_lang') || 'en';
  document.documentElement.setAttribute('lang', lang);
  
  if (typeof TRANSLATIONS === 'undefined') return;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      const translation = TRANSLATIONS[lang][key];
      if (translation.includes('<') && translation.includes('>')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
    }
  });
}

/**
 * Toggle Language Handler
 */
window.toggleLang = function() {
  let currentLang = localStorage.getItem('meridiens_lang') || 'en';
  let nextLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('meridiens_lang', nextLang);
  
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = nextLang === 'en' ? 'FR' : 'EN';
  
  applyTranslations();
  initDynamicRendering();
};
