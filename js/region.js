/**
 * Meridiens - Region Selector & Tier Pricing Engine
 * Handles user region preference, tier mapping, and custom events.
 */
window.CT = window.CT || {};

window.CT.region = (() => {
  const STORAGE_KEY = 'meridiens_region';
  let _activeRegionCode = localStorage.getItem(STORAGE_KEY) || 'CA';

  // Initialize region state on boot
  function init() {
    // If there is a container on the current page, render the dropdown
    renderDropdown();
  }

  function getRegions() {
    return typeof REGIONS !== 'undefined' ? REGIONS : [];
  }

  function getCurrentRegion() {
    const list = getRegions();
    return list.find(r => r.code === _activeRegionCode) || list[0] || { code: "CA", tier: "tier1" };
  }

  function getTier() {
    return getCurrentRegion().tier;
  }

  function getAppPrice(appId) {
    const tier = getTier();
    if (typeof PRICING_TIERS !== 'undefined' && PRICING_TIERS[tier]) {
      return PRICING_TIERS[tier][appId] || 0.00;
    }
    return 0.00;
  }

  function setRegion(code) {
    const list = getRegions();
    const found = list.find(r => r.code === code);
    if (found) {
      _activeRegionCode = code;
      localStorage.setItem(STORAGE_KEY, code);
      
      // Dispatch custom event to notify other modules
      window.dispatchEvent(new CustomEvent('meridiens_region_changed', { 
        detail: { region: found } 
      }));

      // Re-render selector just in case
      renderDropdown();
    }
  }

  function renderDropdown() {
    const containers = document.querySelectorAll('.region-selector-container');
    if (!containers.length) return;

    const list = getRegions();
    const active = getCurrentRegion();
    const lang = localStorage.getItem('meridiens_lang') || 'en';

    containers.forEach(container => {
      const labelText = lang === 'fr' ? 'Région Active :' : 'Active Region:';
      
      let optionsHtml = list.map(r => {
        const name = lang === 'fr' ? r.name_fr : r.name_en;
        const selected = r.code === active.code ? 'selected' : '';
        return `<option value="${r.code}" ${selected}>${name} (${r.tier.toUpperCase()})</option>`;
      }).join('');

      container.innerHTML = `
        <div class="region-select-wrapper" style="display: flex; align-items: center; gap: 8px;">
          <label style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary);">${labelText}</label>
          <select class="region-dropdown-select" onchange="CT.region.handleSelectChange(this)" style="padding: 6px 12px; border-radius: 4px; border: 1px solid var(--color-border); background-color: var(--color-bg-card); color: var(--color-text); font-size: 0.85rem; font-weight: 600; cursor: pointer; outline: none;">
            ${optionsHtml}
          </select>
        </div>
      `;
    });
  }

  function handleSelectChange(selectEl) {
    if (selectEl) {
      setRegion(selectEl.value);
    }
  }

  return { init, getCurrentRegion, getTier, getAppPrice, setRegion, renderDropdown, handleSelectChange };
})();

// Initialize selector on load
document.addEventListener('DOMContentLoaded', window.CT.region.init);
