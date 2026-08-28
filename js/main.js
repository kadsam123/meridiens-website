/**
 * Meridiens - Central Website Script
 * Handles product filtering, dynamic card rendering, active navigation states,
 * and contact form pre-fills.
 */

document.addEventListener("DOMContentLoaded", () => {
    initNavbarShadow();
    initActiveLink();
    initProductFilters();
    renderProducts("all");
    renderServices();
    initContactForm();
});

/**
 * Navigation Bar Scroll Effect
 */
function initNavbarShadow() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scroll-shadow');
    } else {
      header.classList.remove('scroll-shadow');
    }
  });
}

/**
 * Highlights the active link in the navigation
 */
function initActiveLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const navLinks = document.querySelectorAll('.nav-links a, .nav-menu a');

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
 * Initialize dynamic filters for Product / Systems Lab
 */
function initProductFilters() {
    const filterContainer = document.getElementById("filter-container");
    if (!filterContainer) return;

    filterContainer.innerHTML = ECOSYSTEM_CATEGORIES.map(cat => `
        <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
            ${cat.label}
        </button>
    `).join("");

    filterContainer.addEventListener("click", (e) => {
        if (!e.target.classList.contains("filter-btn")) return;
        
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        const selectedCategory = e.target.getAttribute("data-category");
        renderProducts(selectedCategory);
    });
}

/**
 * Render dynamic products in grid
 */
function renderProducts(category = "all") {
    const container = document.getElementById("products-container");
    if (!container) return;

    const filtered = category === "all" 
        ? PRODUCTS_DATA 
        : PRODUCTS_DATA.filter(item => item.category === category);

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: var(--spacing-xl);">No projects found in this category.</div>`;
        return;
    }

    container.innerHTML = filtered.map(item => `
        <article class="card product-card">
            <div class="card-header">
                <span class="badge ${item.category}">${item.badge}</span>
                <span class="status-indicator">${item.status}</span>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-summary"><strong>${item.summary}</strong></p>
            <p class="card-description">${item.description}</p>
            <div class="tech-tags">
                ${item.techStack.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
            <div class="card-footer">
                <a href="${item.url}" class="cta-link" target="_blank" rel="noopener">${item.linkText} &rarr;</a>
            </div>
        </article>
    `).join("");
}

/**
 * Render dynamic services / advisory deliverables
 */
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  if (typeof SERVICES_DATA === "undefined" || SERVICES_DATA.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: var(--spacing-xl);">Loading services...</div>`;
      return;
  }

  container.innerHTML = SERVICES_DATA.map(service => `
    <article class="card service-card" id="${service.id}">
        <div class="card-header">
            <span class="badge consulting">${service.badge}</span>
            <span class="status-indicator">${service.timeline}</span>
        </div>
        <h3 class="card-title">${service.title}</h3>
        <p class="card-summary"><strong>Deliverable: ${service.deliverable}</strong></p>
        <p class="card-description">${service.description}</p>
        <div class="card-footer" style="margin-top: var(--spacing-sm);">
            <a href="contact.html?subject=${encodeURIComponent('Inquiry: ' + service.title)}" class="cta-link">Request Engagement &rarr;</a>
        </div>
    </article>
  `).join("");
}

/**
 * Contact Form Subject Autofill & File Display
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const fileInput = document.getElementById('file-upload');
  const fileNameDisplay = document.getElementById('file-name-display');

  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  if (subjectParam && contactForm) {
    const messageField = contactForm.querySelector('textarea[name="message"]');
    if (messageField) {
      messageField.value = `I am interested in learning more about: ${subjectParam}.\n\n`;
      messageField.focus();
    }
  }

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
