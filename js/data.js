/**
 * Meridiens - Services and Products Data Configuration (Multilingual EN/FR)
 * Defines micro-apps, regions, and adaptive usage pricing tiers.
 */

const PRICING_TIERS = {
  tier1: {
    "hs-code-helper": 0.15,
    "tariff-checker": 0.25,
    "corridor-finder": 0.40,
    "market-signal-lens": 0.50,
    "document-parser": 0.60,
    "logistics-lane-analyzer": 0.75,
    "feasibility-builder": 1.00
  },
  tier2: {
    "hs-code-helper": 0.05,
    "tariff-checker": 0.10,
    "corridor-finder": 0.20,
    "market-signal-lens": 0.25,
    "document-parser": 0.30,
    "logistics-lane-analyzer": 0.40,
    "feasibility-builder": 0.50
  },
  tier3: {
    "hs-code-helper": 0.02,
    "tariff-checker": 0.04,
    "corridor-finder": 0.07,
    "market-signal-lens": 0.09,
    "document-parser": 0.12,
    "logistics-lane-analyzer": 0.14,
    "feasibility-builder": 0.19
  }
};

const REGIONS = [
  { code: "CA", name_en: "Canada", name_fr: "Canada", tier: "tier1" },
  { code: "US", name_en: "United States", name_fr: "États-Unis", tier: "tier1" },
  { code: "EU", name_en: "European Union", name_fr: "Union Européenne", tier: "tier1" },
  { code: "AE", name_en: "United Arab Emirates", name_fr: "Émirats Arabes Unis", tier: "tier1" },
  { code: "GB", name_en: "United Kingdom", name_fr: "Royaume-Uni", tier: "tier1" },
  
  { code: "DZ", name_en: "Algeria", name_fr: "Algérie", tier: "tier2" },
  { code: "MA", name_en: "Morocco", name_fr: "Maroc", tier: "tier2" },
  { code: "TN", name_en: "Tunisia", name_fr: "Tunisie", tier: "tier2" },
  { code: "SN", name_en: "Senegal", name_fr: "Sénégal", tier: "tier2" },
  { code: "TR", name_en: "Turkey", name_fr: "Turquie", tier: "tier2" },
  { code: "BR", name_en: "Brazil", name_fr: "Brésil", tier: "tier2" },

  { code: "WA", name_en: "West Africa (Emerging)", name_fr: "Afrique de l'Ouest (Émergent)", tier: "tier3" },
  { code: "EA", name_en: "East Africa (Emerging)", name_fr: "Afrique de l'Est (Émergent)", tier: "tier3" },
  { code: "SA", name_en: "South Asia (Emerging)", name_fr: "Asie du Sud (Émergent)", tier: "tier3" }
];

const SERVICES_DATA_EN = [
  {
    id: "business-intelligence",
    title: "Business Intelligence (BI)",
    description: "Translating complex operational data into clear historical trends and predictive forecasting.",
    details: "We design robust data warehouses, build automated ETL pipelines, and construct structured reports powered by the Suite's analytical modules to give clear executive guidance.",
    tag: "Business Intelligence"
  },
  {
    id: "applied-ai-consulting",
    title: "Applied AI Consulting",
    description: "Implementing state-of-the-art machine learning models directly into client software stacks.",
    details: "From fine-tuning custom LLMs for proprietary knowledge bases to deploying specialized computer vision systems, we guide your development team through model selection and deployment.",
    tag: "Artificial Intelligence"
  },
  {
    id: "export-intelligence",
    title: "Export Intelligence (AtlasCorr AI)",
    description: "AI-driven market intelligence identifying high-potential export corridors globally.",
    details: "Utilize our proprietary global trade models to automatically map shipping routes, regulatory demands, customs rules, and buyer behavior, translating complex logistics into clear target markets.",
    tag: "Trade Intelligence"
  },
  {
    id: "digital-transformation",
    title: "SME & Enterprise Digital Transformation",
    description: "Modernizing legacy data systems and manual operational procedures with custom cloud networks.",
    details: "We audit your current organizational processes, eliminate spreadsheet-reliant bottlenecks, and deploy lightweight web portals and API systems that keep your teams aligned.",
    tag: "Transformation"
  },
  {
    id: "ai-dashboards",
    title: "AI-Powered Dashboards",
    description: "Custom operational control centers presenting real-time business telemetry and KPIs.",
    details: "Stop toggling between ten tabs. We build consolidated single-page dashboards that aggregate data from all your APIs, displaying real-time corridor metrics and operations.",
    tag: "Analytics / UX"
  },
  {
    id: "market-corridor-analysis",
    title: "Market & Corridor Analysis",
    description: "Dynamic, on-demand evaluation of target trade pathways and custom regulatory blocks worldwide.",
    details: "Unlike regional agencies, our quantitative tools analyze any global corridor on-demand. We evaluate tariff lists, shipping lane congestion, and local legal frameworks.",
    tag: "Corridor Analysis"
  },
  {
    id: "agentic-automation",
    title: "Agentic Automation (Circle + Gemini)",
    description: "Autonomous software agent networks handling complex document audits and operations.",
    details: "Deploy multi-agent systems designed to verify invoices, parse custom declarations, translate legal contracts, and handle data synchronization across systems without manual input.",
    tag: "Automation"
  },
  {
    id: "enterprise-optimization",
    title: "Enterprise Optimization Systems",
    description: "Auditing organizational information flows to eliminate overhead and unlock margin gains.",
    details: "Apply operations research and mathematical optimization to resource allocation, inventory levels, scheduling configurations, and dispatch lines, creating massive cost reductions.",
    tag: "Optimization"
  }
];

const SERVICES_DATA_FR = [
  {
    id: "business-intelligence",
    title: "Business Intelligence (BI)",
    description: "Traduction de données opérationnelles complexes en tendances historiques claires et prévisions prédictives.",
    details: "Nous concevons des entrepôts de données robustes, construisons des pipelines ETL automatisés et élaborons des rapports structurés alimentés par les modules analytiques de la Suite pour donner des orientations claires.",
    tag: "Business Intelligence"
  },
  {
    id: "applied-ai-consulting",
    title: "Conseil en IA Appliquée",
    description: "Implémentation de modèles d'apprentissage automatique de pointe directement dans les piles logicielles des clients.",
    details: "De l'ajustement de LLM personnalisés pour des bases de connaissances propriétaires au déploiement de systèmes de vision par ordinateur spécialisés, nous guidons vos équipes à travers le choix de modèle et le déploiement.",
    tag: "Intelligence Artificielle"
  },
  {
    id: "export-intelligence",
    title: "Intelligence à l'Export (AtlasCorr AI)",
    description: "Intelligence commerciale pilotée par l'IA identifiant les corridors d'exportation à fort potentiel à l'échelle mondiale.",
    details: "Utilisez nos modèles exclusifs de commerce mondial pour cartographier automatiquement les routes maritimes, les exigences réglementaires, les règles douanières et les comportements d'achat.",
    tag: "Intelligence Commerciale"
  },
  {
    id: "digital-transformation",
    title: "Transformation Numérique des PME & Entreprises",
    description: "Modernisation des systèmes de données patrimoniaux et des procédures opérationnelles manuelles avec des réseaux cloud.",
    details: "Nous auditons vos processus organisationnels, éliminons les goulots d'étranglement liés aux feuilles de calcul et déployons des portails web légers et des systèmes d'API.",
    tag: "Transformation"
  },
  {
    id: "ai-dashboards",
    title: "Tableaux de Bord Propulsés par l'IA",
    description: "Centres de contrôle opérationnels personnalisés présentant la télémétrie commerciale et les KPI en temps réel.",
    details: "Plus besoin de basculer entre dix onglets. Nous construisons des tableaux de bord uniques qui agrègent les données de toutes vos API, affichant les métriques des corridors en temps réel.",
    tag: "Analytique / UX"
  },
  {
    id: "market-corridor-analysis",
    title: "Analyse de Marchés & Corridors",
    description: "Évaluation dynamique et à la demande des voies commerciales cibles et des obstacles réglementaires dans le monde entier.",
    details: "Contrairement aux agences régionales, nos outils quantitatifs analysent n'importe quel corridor mondial à la demande. Nous évaluons les barèmes tarifaires, la congestion et les cadres juridiques locaux.",
    tag: "Analyse de Corridors"
  },
  {
    id: "agentic-automation",
    title: "Automatisation d'Agents (Circle + Gemini)",
    description: "Réseaux d'agents logiciels autonomes gérant les audits de documents et les opérations complexes.",
    details: "Déployez des réseaux multi-agents conçus pour valider les factures, analyser les déclarations de douane, traduire les contrats et synchroniser les données sans intervention manuelle.",
    tag: "Automatisation"
  },
  {
    id: "enterprise-optimization",
    title: "Systèmes d'Optimisation d'Entreprise",
    description: "Audit des flux d'informations organisationnels pour éliminer les frais généraux et libérer des marges bénéficiaires.",
    details: "Appliquez la recherche opérationnelle et l'optimisation mathématique à l'allocation des ressources, aux niveaux de stocks, aux configurations de planification et aux lignes de répartition.",
    tag: "Optimisation"
  }
];

const PRODUCTS_DATA_EN = [
  {
    id: "hs-code-helper",
    title: "HS Code Helper",
    description: "Instant product classification & tariff awareness.",
    details: "Coordinates specialized classifier agents to resolve raw cargo descriptions to international Harmonized System (HS) chapters instantly, mapping general product classes to correct import codes.",
    tag: "Trade Intelligence",
    brandText: "HS",
    region_presets: ["USMCA", "EU TARIC", "GCC", "Maghreb", "African Union"]
  },
  {
    id: "tariff-checker",
    title: "Tariff Checker",
    description: "Know your duties before you ship.",
    details: "Scrapes and parses bilateral trade agreements on-demand to fetch applicable custom duty rates, taxes, and port tariffs based on target corridor HS codes.",
    tag: "Customs Compliance",
    brandText: "TC",
    region_presets: ["CBSA/CBP", "EU TARIC", "GCC Common Tariff", "AfCFTA"]
  },
  {
    id: "corridor-finder",
    title: "Corridor Finder",
    description: "Discover viable trade routes instantly.",
    details: "Scores transit corridors dynamically. Models transport routes, shipping congestion, political risk scores, and estimated cargo transit times between origin and destination ports.",
    tag: "Logistics Optimization",
    brandText: "CF",
    region_presets: ["North America", "Europe", "MENA", "West Africa", "Southeast Asia"]
  },
  {
    id: "market-signal-lens",
    title: "Market Signal Lens",
    description: "See demand patterns before entering a market.",
    details: "Aggregates localized commercial signals, buyer searches, and historical import growth data to rank consumer demand changes in target nations.",
    tag: "Market Intelligence",
    brandText: "ML",
    region_presets: ["Canada", "Algeria", "UAE", "Senegal", "France", "UK"]
  },
  {
    id: "document-parser",
    title: "Document Parser",
    description: "Automate compliance paperwork.",
    details: "Uses multi-agent language nodes to parse custom bills of lading, commercial invoices, and certificates of origin, flagging missing forms and compliance conflicts.",
    tag: "Agentic Automation",
    brandText: "DP",
    region_presets: ["English (EN)", "French (FR)", "Arabic (AR)"]
  },
  {
    id: "logistics-lane-analyzer",
    title: "Logistics Lane Analyzer",
    description: "Understand shipping lane viability.",
    details: "Models historical and real-time port metrics, weather bottlenecks, and shipping lane efficiency, scoring routes to reduce transit costs.",
    tag: "Supply Chain",
    brandText: "LA",
    region_presets: ["Montreal", "Vancouver", "Jebel Ali", "Dakar", "Rotterdam"]
  },
  {
    id: "feasibility-builder",
    title: "Feasibility Builder",
    description: "Generate export feasibility reports automatically.",
    details: "Compiles outputs from all other Suite micro-apps to build a comprehensive, structured PDF export business plan, complete with timeline and custom costs.",
    tag: "Synthesis / Report",
    brandText: "FB",
    region_presets: ["PDF summary", "dashboard module", "API response"]
  }
];

const PRODUCTS_DATA_FR = [
  {
    id: "hs-code-helper",
    title: "HS Code Helper",
    description: "Classification instantanée des produits & aperçu des tarifs.",
    details: "Coordonne les agents de classification pour résoudre les descriptions de fret en codes du Système Harmonisé (SH), associant les classes de produits aux codes d'importation exacts.",
    tag: "Intelligence Commerciale",
    brandText: "HS",
    region_presets: ["ACEUM", "TARIC UE", "CCG", "Maghreb", "Union Africaine"]
  },
  {
    id: "tariff-checker",
    title: "Tariff Checker",
    description: "Connaissez vos droits avant d’expédier.",
    details: "Scrape et analyse les accords commerciaux bilatéraux à la demande pour récupérer les taux de droits de douane, taxes et tarifs portuaires selon le code SH cible.",
    tag: "Conformité Douanière",
    brandText: "TC",
    region_presets: ["ASFC/CBP", "TARIC UE", "Tarif commun CCG", "ZLECAF"]
  },
  {
    id: "corridor-finder",
    title: "Corridor Finder",
    description: "Découvrez instantanément des routes commerciales viables.",
    details: "Évalue dynamiquement les corridors de transit. Modélise les itinéraires, la congestion portuaire, le risque politique et les temps de transit estimés.",
    tag: "Optimisation Logistique",
    brandText: "CF",
    region_presets: ["Amérique du Nord", "Europe", "MOAN", "Afrique de l'Ouest", "Asie du Sud-Est"]
  },
  {
    id: "market-signal-lens",
    title: "Market Signal Lens",
    description: "Visualisez les tendances de demande avant d’entrer sur un marché.",
    details: "Agrège les signaux commerciaux locaux, les requêtes des acheteurs et la croissance historique des importations pour classer la demande par pays.",
    tag: "Intelligence de Marché",
    brandText: "ML",
    region_presets: ["Canada", "Algérie", "EAU", "Sénégal", "France", "Royaume-Uni"]
  },
  {
    id: "document-parser",
    title: "Document Parser",
    description: "Automatisez la paperasse de conformité.",
    details: "Utilise des nœuds d'agents linguistiques pour analyser les connaissements, factures commerciales et certificats d'origine, signalant les erreurs de conformité.",
    tag: "Automatisation d'Agents",
    brandText: "DP",
    region_presets: ["Anglais (EN)", "Français (FR)", "Arabe (AR)"]
  },
  {
    id: "logistics-lane-analyzer",
    title: "Logistics Lane Analyzer",
    description: "Comprenez la viabilité des voies logistiques.",
    details: "Modélise l'efficacité des ports et des voies maritimes en temps réel, évaluant les goulets d'étranglement pour réduire les coûts de transport.",
    tag: "Chaîne Logistique",
    brandText: "LA",
    region_presets: ["Montréal", "Vancouver", "Jebel Ali", "Dakar", "Rotterdam"]
  },
  {
    id: "feasibility-builder",
    title: "Feasibility Builder",
    description: "Générez automatiquement des rapports de faisabilité à l’export.",
    details: "Compile les résultats des autres micro-applications de la Suite pour générer un plan d'exportation structuré au format PDF avec calendrier et coûts personnalisés.",
    tag: "Synthèse / Rapport",
    brandText: "FB",
    region_presets: ["Résumé PDF", "module de tableau de bord", "réponse API"]
  }
];

// Define dynamic global properties on window
Object.defineProperty(window, 'SERVICES_DATA', {
  get: () => {
    const lang = localStorage.getItem('meridiens_lang') || 'en';
    return lang === 'fr' ? SERVICES_DATA_FR : SERVICES_DATA_EN;
  },
  configurable: true
});

Object.defineProperty(window, 'PRODUCTS_DATA', {
  get: () => {
    const lang = localStorage.getItem('meridiens_lang') || 'en';
    return lang === 'fr' ? PRODUCTS_DATA_FR : PRODUCTS_DATA_EN;
  },
  configurable: true
});
