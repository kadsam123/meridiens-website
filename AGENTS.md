# System Handover Summary & Feature Roadmap (Lab Edition)
**Project:** Meridiens AI & Trade Innovation Lab / Applied Intelligence Studio  
**Owner:** 18138711 CANADA INC.  
**Domain:** `meridiens.co`  
**Host:** GitHub Pages  

This document serves as a technical handover file for future AI models or engineers to understand the current architecture, design choices, and update mechanisms, and to plan future feature integrations.

---

## 1. Architectural Overview
The website is a lightweight, static client-side application built without frameworks to ensure instant loading times and 100% uptime on GitHub Pages.

*   **File Structure:**
    *   [`index.html`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/index.html): Homepage detailing the dynamic ecosystem (Platforms, Agentic Engines, Open-Source & Advisory).
    *   [`products.html`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/products.html): Systems & Lab page featuring category filtering.
    *   [`services.html`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/services.html): Advisory page featuring consulting deliverables.
    *   [`about.html`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/about.html): Profile of corporate registration, founder, and long-term vision.
    *   [`contact.html`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/contact.html): Technical intake form pre-wired for Formspree.
    *   [`styles.css`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/styles.css): Centralized stylesheet containing custom filter-bar, badge, and card layouts.
    *   [`js/data.js`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/js/data.js): Content database storing categories, product, and service arrays.
    *   [`js/main.js`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/js/main.js): Navigation mechanics, active highlighting, filter click listeners, and DOM compilers.
    *   [`CNAME`](file:///C:/Users/kissa/.gemini/antigravity/scratch/meridiens-website/CNAME): Text file containing `meridiens.co` for custom domain routing.

---

## 1.5 Core Portfolio Taxonomy
The ecosystem data (`js/data.js`) revolves around four key pillars responding to North American supply chain and tariff friction:
*   **Atlas Corr:** Cross-border trade corridor mapping and friction simulation.
*   **Meridian Flow:** Agentic trade compliance and Section 232/338 tariff exemption generation.
*   **Relief Intake:** Automated dossier builders for federal grants (WRRP) and BDC loans.
*   **OpenBYOK:** Open-source, zero-retention client connectors for enterprise data security.

---

## 2. Design Language & Constantine Palette
The UI features a Constantine-inspired palette representing stone masonry, suspension bridges, and Andalusian mosaics:

*   `--color-bg`: `#FAF8F5` (Warm Limestone)
*   `--color-text`: `#2A2421` (Deep Canyon Umber / Charcoal)
*   `--color-primary`: `#C85A32` (Terracotta / Sienna)
*   `--color-secondary`: `#1E5A75` (Andalusian Blue)
*   `--color-accent`: `#D49B35` (Ochre / Deep Gold)
*   `--font-heading`: `'Cinzel', serif` (logo and headings)
*   `--font-body`: `'Inter', sans-serif` (body copy)

---

## 3. Dynamic Category Filtering Mechanism
The portfolio page (`products.html`) is structured with a dynamic category filter:

1.  **Rendering Hook:** On page load, `js/main.js` calls `initProductFilters()`.
2.  **Filter Layout:** Generates buttons based on `ECOSYSTEM_CATEGORIES` (Platforms & Apps, Agentic Engines, Open-Source & Tools, Consulting & Retainers).
3.  **Active Class:** Manages active class highlighting on click events and calls `renderProducts(selectedCategory)`.
4.  **Cards Compiler:** Dynamically compiles and appends cards to `#products-container` according to matching category properties in `PRODUCTS_DATA`.

---

## 4. Roadmap for Future Feature Integrations

A incoming model or developer can easily implement the following enhancements:

### Feature A: Private Client Portal (BYOK)
*   **Goal:** Provide secure client login for active dashboard tools.
*   **Implementation:** Add a "Client Login" link in the header. Create a static `portal.html` checking credentials via Firebase Auth or standard JWT tokens, pointing to encrypted user directories on `demo.meridiens.co`.

### Feature B: Interactive Global Corridor Map
*   **Goal:** Visually demonstrate Meridiens' dynamic global corridor routing.
*   **Implementation:** Embed an interactive SVG vector map or a custom-styled Leaflet.js layer (custom-styled with the Constantine palette) showing active supply-chain friction, tariff mitigation points, and trade routes.

### Feature C: Direct API Endpoint Integration (Optional Serverless)
*   **Goal:** Fetch project statuses or repository statistics dynamically from GitHub.
*   **Implementation:** Integrate a fetch wrapper in `js/main.js` targeting GitHub's API for the `18138711-canada` organization, dynamically updating the status tags on open-source items.
