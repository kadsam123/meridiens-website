/**
 * Meridiens - Usage Tracker & Micro-app Simulator
 * Simulates micro-app result generation and tracks session costs.
 */
window.CT = window.CT || {};

window.CT.usage = (() => {
  let _sessionUsage = {}; // { appId: count }
  let _sessionTotalCost = 0.00;

  // Mock terminal templates for results
  const MOCK_OUTPUTS = {
    en: {
      "hs-code-helper": {
        test: "Running diagnostic check on HS Code classification models...\n[OK] Model version 2.4 active.\n[OK] Reference vocabularies USMCA/EU loaded.\nDiagnostic pass completed. Model ready.",
        result: "Agent 'HS-Classifier' triggered...\nInput description parsed: 'Exotic cotton textiles & shirts'\nClassification resolved:\n  - HS Chapter: 62 (Apparel)\n  - Subheading: 6205.20 (Cotton Shirts)\n  - Confidence: 94.8%\nTariff profile links mapped. Verification complete."
      },
      "tariff-checker": {
        test: "Verifying connection to customs database API endpoints...\n[OK] CBSA/CBP gateway active (200 OK).\n[OK] GCC Common Tariff tables mapped.\nDiagnostic pass completed. API ready.",
        result: "Agent 'Tariff-Audit' triggered...\nRequest: HS 6205.20 to target corridor (USA)\nAudit findings:\n  - Custom duty rate: 16.5%\n  - Local import tax (VAT/GST): 5.0%\n  - Trade Agreement: USMCA preferential rate applied (0.0% duty).\nRegulatory margins verified."
      },
      "corridor-finder": {
        test: "Checking route scoring heuristics & transit databases...\n[OK] MarineTraffic port indexes online.\n[OK] Fuel index matrices loaded.\nDiagnostic pass completed. Router ready.",
        result: "Agent 'Meridian-Router' triggered...\nRoute: Montreal (CA) ➔ Rotterdam (NL)\nEvaluation:\n  - Transit Time: 12.4 days\n  - Cost Index: 2.8x (Medium)\n  - Port Congestion Rating: Low\n  - Overall corridor score: 91/100 (Optimal). Mode: Ocean Freight."
      },
      "market-signal-lens": {
        test: "Polling global search databases & buyer registries...\n[OK] TradeMatch demand engine online.\n[OK] Trend analysis vectors mapped.\nDiagnostic pass completed. Search index ready.",
        result: "Agent 'Signal-Lens' triggered...\nCategory: Textiles ➔ Target: United Kingdom\nSignals recorded:\n  - Search Volume: +14.2% MoM\n  - Importer inquiries: +8.5% YoY\n  - Buyer Interest Score: 87/100 (High)\nDemand trend positive. Recommend entry."
      },
      "document-parser": {
        test: "Validating document parsing neural nodes & OCR models...\n[OK] Multi-lingual OCR models online (EN/FR/AR).\n[OK] Schema verifiers loaded.\nDiagnostic pass completed. Parser ready.",
        result: "Agent 'Doc-Inspector' triggered...\nDocument parsed: Commercial Invoice (Cotton Apparel)\nAudit findings:\n  - Shipper/Consignee: Match\n  - Goods description: Match (HS 6205)\n  - Total value verified: $45,200 USD\nCompliance check: 100% PASSED. No anomalies flagged."
      },
      "logistics-lane-analyzer": {
        test: "Verifying port telemetry & weather feed streams...\n[OK] Real-time lane feeds active.\n[OK] Port congestions mapped.\nDiagnostic pass completed. Tracker ready.",
        result: "Agent 'Lane-Analyzer' triggered...\nTarget Port: Port of Vancouver\nTelemetry stats:\n  - Active dwell delay: 1.2 days\n  - Weather status: Clean sea state\n  - Alternate routing: Seatac rail route stable.\nEfficiency rating: 88/100. Viability HIGH."
      },
      "feasibility-builder": {
        test: "Checking synthesis report compilation buffers...\n[OK] Dynamic document layouts cached.\n[OK] Mathematical pipeline solver online.\nDiagnostic pass completed. Builder ready.",
        result: "Agent 'Feasibility-Suite' triggered...\nAggregating sub-agent outputs: classification + logistics + signals\nReport compiled:\n  - Exporter Profile: Cotton Apparel\n  - Feasibility Score: 92/100\n  - Time to first delivery: 8 weeks\nExport plan compiled. PDF report buffer cached."
      }
    },
    fr: {
      "hs-code-helper": {
        test: "Diagnostic des modèles de classification de code SH...\n[OK] Modèle version 2.4 actif.\n[OK] Vocabulaires de référence ACEUM/UE chargés.\nDiagnostic terminé. Modèle prêt.",
        result: "Agent 'HS-Classifier' activé...\nDescription analysée : 'Textiles fins en coton & chemises'\nClassification résolue :\n  - Chapitre SH : 62 (Vêtements)\n  - Sous-rubrique : 6205.20 (Chemises en coton)\n  - Confiance : 94.8%\nProfils douaniers associés. Validation complète."
      },
      "tariff-checker": {
        test: "Diagnostic des connexions aux passerelles douanières...\n[OK] API ASFC/CBP en ligne (200 OK).\n[OK] Tableaux de tarifs CCG cartographiés.\nDiagnostic terminé. API prête.",
        result: "Agent 'Tariff-Audit' activé...\nRequête : SH 6205.20 vers corridor cible (USA)\nRésultats de l'audit :\n  - Droit de douane : 16.5%\n  - Taxe d'importation (TPS/TVH) : 5.0%\n  - Accord commercial : Tarif préférentiel ACEUM appliqué (Droit : 0.0%).\nConformité des tarifs validée."
      },
      "corridor-finder": {
        test: "Diagnostic des algorithmes de routage et des ports...\n[OK] Index des ports MarineTraffic en ligne.\n[OK] Index des prix de carburant chargé.\nDiagnostic terminé. Routeur prêt.",
        result: "Agent 'Meridian-Router' activé...\nItinéraire : Montréal (CA) ➔ Rotterdam (NL)\nÉvaluation :\n  - Temps de transit : 12.4 jours\n  - Index coût : 2.8x (Moyen)\n  - Congestion portuaire : Faible\n  - Score global du corridor : 91/100 (Optimal). Mode : Fret maritime."
      },
      "market-signal-lens": {
        test: "Lecture des tendances de recherche et des registres d'acheteurs...\n[OK] Moteur de demande TradeMatch en ligne.\n[OK] Vecteurs d'analyse de tendances cartographiés.\nDiagnostic terminé. Index de recherche prêt.",
        result: "Agent 'Signal-Lens' activé...\nCatégorie : Textiles ➔ Cible : Royaume-Uni\nSignaux enregistrés :\n  - Volume de recherche : +14.2% MoM\n  - Demandes d'importateurs : +8.5% YoY\n  - Score d'intérêt acheteur : 87/100 (Élevé)\nTendance de la demande positive. Entrée recommandée."
      },
      "document-parser": {
        test: "Validation des réseaux neuronaux d'analyse documentaire...\n[OK] Modèles OCR multilingues en ligne (EN/FR/AR).\n[OK] Schémas de vérification chargés.\nDiagnostic terminé. Analyseur prêt.",
        result: "Agent 'Doc-Inspector' activé...\nDocument analysé : Facture commerciale (Vêtements en coton)\nConstats de l'audit :\n  - Expéditeur/Destinataire : Conforme\n  - Description des biens : Conforme (SH 6205)\n  - Valeur totale vérifiée : 45 200 $ USD\nContrôle de conformité : 100% RÉUSSI. Aucune anomalie."
      },
      "logistics-lane-analyzer": {
        test: "Vérification de la télémétrie portuaire et météo...\n[OK] Flux de données en temps réel actifs.\n[OK] Congestion des ports cartographiée.\nDiagnostic terminé. Traceur prêt.",
        result: "Agent 'Lane-Analyzer' activé...\nPort cible : Port de Vancouver\nTélémétrie du port :\n  - Retard d'attente actif : 1.2 jours\n  - État météo : Mer calme\n  - Itinéraire alternatif : Route ferroviaire Seatac stable.\nNote d'efficacité : 88/100. Viabilité ÉLEVÉE."
      },
      "feasibility-builder": {
        test: "Diagnostic des tampons de compilation de rapports...\n[OK] Gabarits de documents dynamiques mis en cache.\n[OK] Solveur mathématique de pipeline en ligne.\nDiagnostic terminé. Constructeur prêt.",
        result: "Agent 'Feasibility-Suite' activé...\nAgrégation des résultats : classification + logistique + tendances\nRapport compilé :\n  - Profil de l'exportateur : Vêtements en coton\n  - Score de faisabilité : 92/100\n  - Délai de première livraison : 8 semaines\nPlan d'exportation rédigé. Fichier PDF mis en cache."
      }
    }
  };

  function init() {
    // Check local storage for session cost
    _sessionTotalCost = parseFloat(localStorage.getItem('meridiens_session_cost')) || 0.00;
    _sessionUsage = JSON.parse(localStorage.getItem('meridiens_session_usage')) || {};
    
    updateBillingUI();

    // Listen to region changes to update prices
    window.addEventListener('meridiens_region_changed', () => {
      updateBillingUI();
    });
  }

  function getUsage(appId) {
    return _sessionUsage[appId] || 0;
  }

  function testApp(appId) {
    const lang = localStorage.getItem('meridiens_lang') || 'en';
    const output = MOCK_OUTPUTS[lang] && MOCK_OUTPUTS[lang][appId] ? MOCK_OUTPUTS[lang][appId].test : "System diagnostic ok.";
    
    writeTerminal(appId, output);
  }

  function generateResult(appId) {
    const lang = localStorage.getItem('meridiens_lang') || 'en';
    const price = window.CT.region.getAppPrice(appId);
    
    // 1. Increment usage
    _sessionUsage[appId] = (_sessionUsage[appId] || 0) + 1;
    localStorage.setItem('meridiens_session_usage', JSON.stringify(_sessionUsage));

    // 2. Add cost
    _sessionTotalCost += price;
    localStorage.setItem('meridiens_session_cost', _sessionTotalCost.toFixed(2));

    // 3. Write simulated result
    const output = MOCK_OUTPUTS[lang] && MOCK_OUTPUTS[lang][appId] ? MOCK_OUTPUTS[lang][appId].result : "Result generated successfully.";
    writeTerminal(appId, output);

    // 4. Update UI
    updateBillingUI();
  }

  function writeTerminal(appId, text) {
    const terminal = document.querySelector(`#terminal-${appId} .terminal-body`);
    if (terminal) {
      // Clear previous diagnostic or show append
      terminal.innerHTML = `<span style="color: var(--color-primary); font-weight: 700;">$ </span>${text.replace(/\n/g, '<br>')}`;
      terminal.scrollTop = terminal.scrollHeight;
    }
  }

  function clearSession() {
    _sessionUsage = {};
    _sessionTotalCost = 0.00;
    localStorage.removeItem('meridiens_session_usage');
    localStorage.removeItem('meridiens_session_cost');
    updateBillingUI();
    
    // Clear terminals
    document.querySelectorAll('.terminal-body').forEach(t => {
      t.innerHTML = '<span style="color: var(--color-text-muted);">Terminal idle. Click "Test App" or "Generate Result" to begin.</span>';
    });
  }

  function updateBillingUI() {
    // Update total cost displays
    const costDisplays = document.querySelectorAll('.session-cost-display');
    costDisplays.forEach(el => {
      el.textContent = `$${_sessionTotalCost.toFixed(2)} USD`;
    });

    // Update app-specific pricing tags and usage badges
    if (typeof PRODUCTS_DATA !== 'undefined') {
      PRODUCTS_DATA.forEach(app => {
        const price = window.CT.region.getAppPrice(app.id);
        const count = getUsage(app.id);

        // Update price tags
        const priceTags = document.querySelectorAll(`.price-tag-${app.id}`);
        priceTags.forEach(tag => {
          const lang = localStorage.getItem('meridiens_lang') || 'en';
          const rateText = lang === 'fr' ? ` / résultat` : ` / result`;
          tag.textContent = `$${price.toFixed(2)} USD${rateText}`;
        });

        // Update count badges
        const countBadges = document.querySelectorAll(`.usage-count-${app.id}`);
        countBadges.forEach(badge => {
          badge.textContent = count;
        });
      });
    }
  }

  return { init, getUsage, testApp, generateResult, clearSession, updateBillingUI };
})();

// Initialize usage modules on load
document.addEventListener('DOMContentLoaded', window.CT.usage.init);
