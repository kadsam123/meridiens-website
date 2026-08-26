/**
 * Meridiens - Services and Products Data Configuration (Multilingual EN/FR)
 * 
 * Defines services and products data in both English and French.
 * Exposes dynamic window.SERVICES_DATA and window.PRODUCTS_DATA getters.
 */

const SERVICES_DATA_EN = [
  {
    id: "business-intelligence",
    title: "Business Intelligence (BI)",
    description: "Translating complex operational data into clear historical trends and predictive forecasting.",
    details: "We design robust data warehouses, build automated ETL pipelines, and construct structured reports that turn raw transaction logs into clear, actionable executive guidance.",
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
    details: "Nous concevons des entrepôts de données robustes, construisons des pipelines ETL automatisés et élaborons des rapports structurés qui transforment les journaux de transactions bruts en conseils décisionnels clairs et exploitables.",
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
    id: "atlascorr-ai",
    title: "AtlasCorr AI",
    description: "A global trade-corridor intelligence engine mapping enterprise export opportunities on-demand.",
    details: "AtlasCorr AI aggregates global market signals, tariff policies, and logistical data to guide organizations through expanding their footprint, offering automated feasibility reports instantly.",
    tag: "Trade Intelligence",
    demoUrl: "https://demo.meridiens.co/atlascorr",
    pageUrl: "products.html#atlascorr-ai",
    brandText: "AC"
  },
  {
    id: "meridian-flow",
    title: "Meridian Flow",
    description: "An agentic pipeline builder that automates cross-border documentation and compliance audits.",
    details: "Meridian Flow coordinates autonomous agent networks to read, translate, check compliance of, and route trade documents, drastically reducing manual processing time for compliance reviews.",
    tag: "Automation",
    demoUrl: "https://demo.meridiens.co/meridianflow",
    pageUrl: "products.html#meridian-flow",
    brandText: "MF"
  },
  {
    id: "epistemic-engine",
    title: "Epistemic Engine",
    description: "A cognitive semantic search and entity extraction engine mapping complex corporate knowledge bases.",
    details: "Epistemic Engine uses agentic RAG and natural language pipelines to crawl, parse, and structure unstructured enterprise documentation into interactive, queryable semantic knowledge graphs.",
    tag: "Applied AI / RAG",
    demoUrl: "https://demo.meridiens.co/epistemic",
    pageUrl: "products.html#epistemic-engine",
    brandText: "EE"
  },
  {
    id: "ifc-compliance",
    title: "IFC Compliance Auditor",
    description: "An autonomous inspector verifying construction BIM models against regulatory codes.",
    details: "Currently under development, the IFC Compliance Auditor maps geometric and metadata properties of Industry Foundation Classes (IFC) files, cross-referencing them against regional municipal building regulations.",
    tag: "Automation / Vision",
    demoUrl: "products.html#ifc-compliance",
    pageUrl: "products.html#ifc-compliance",
    brandText: "ICA"
  }
];

const PRODUCTS_DATA_FR = [
  {
    id: "atlascorr-ai",
    title: "AtlasCorr AI",
    description: "Un moteur d'intelligence de corridors commerciaux mondiaux cartographiant les opportunités d'exportation sur demande.",
    details: "AtlasCorr AI agrège les signaux du marché mondial, les politiques tarifaires et les données logistiques pour guider l'expansion des entreprises, en générant des rapports de faisabilité de manière instantanée.",
    tag: "Intelligence Commerciale",
    demoUrl: "https://demo.meridiens.co/atlascorr",
    pageUrl: "products.html#atlascorr-ai",
    brandText: "AC"
  },
  {
    id: "meridian-flow",
    title: "Meridian Flow",
    description: "Un concepteur de pipelines d'agents qui automatise la documentation transfrontalière et les audits de conformité.",
    details: "Meridian Flow coordonne des réseaux d'agents autonomes pour lire, traduire, valider et acheminer les documents commerciaux, réduisant considérablement le temps de traitement manuel.",
    tag: "Automatisation",
    demoUrl: "https://demo.meridiens.co/meridianflow",
    pageUrl: "products.html#meridian-flow",
    brandText: "MF"
  },
  {
    id: "epistemic-engine",
    title: "Epistemic Engine",
    description: "Moteur de recherche sémantique cognitive et d'extraction d'entités cartographiant les bases de connaissances d'entreprise.",
    details: "Epistemic Engine s'appuie sur le RAG agentique et des pipelines de langage naturel pour explorer, analyser et structurer la documentation d'entreprise non structurée sous forme de graphes de connaissances.",
    tag: "IA Appliquée / RAG",
    demoUrl: "https://demo.meridiens.co/epistemic",
    pageUrl: "products.html#epistemic-engine",
    brandText: "EE"
  },
  {
    id: "ifc-compliance",
    title: "IFC Compliance Auditor",
    description: "Inspecteur autonome vérifiant la conformité des maquettes BIM de construction vis-à-vis des codes réglementaires.",
    details: "Actuellement en développement, l'IFC Compliance Auditor cartographie les propriétés géométriques et de métadonnées des fichiers IFC, les recoupant avec les réglementations de construction locales.",
    tag: "Automatisation / Vision",
    demoUrl: "products.html#ifc-compliance",
    pageUrl: "products.html#ifc-compliance",
    brandText: "ICA"
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
