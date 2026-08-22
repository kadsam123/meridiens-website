/**
 * Meridiens - Services and Products Data Configuration
 * 
 * Edit this file to add, modify, or remove services and products across the website.
 * These arrays will be dynamically rendered on their respective pages (services.html, products.html).
 */

const SERVICES_DATA = [
  {
    id: "business-intelligence",
    title: "Business Intelligence (BI)",
    description: "Translating complex operational data into clear historical trends and predictive forecasting.",
    details: "We design robust data warehouses, build automated ETL pipelines, and construct structured reports that turn raw transaction logs into clear, actionable executive guidance.",
    tag: "Business Intelligence",
    link: "services.html#business-intelligence"
  },
  {
    id: "applied-ai-consulting",
    title: "Applied AI Consulting",
    description: "Implementing state-of-the-art machine learning models directly into client software stacks.",
    details: "From fine-tuning custom LLMs for proprietary knowledge bases to deploying specialized computer vision systems, we guide your development team through model selection and deployment.",
    tag: "Artificial Intelligence",
    link: "services.html#applied-ai-consulting"
  },
  {
    id: "export-intelligence",
    title: "Export Intelligence (AtlasCorr AI)",
    description: "AI-driven market intelligence identifying high-potential export corridors globally.",
    details: "Utilize our proprietary global trade models to automatically map shipping routes, regulatory demands, customs rules, and buyer behavior, translating complex logistics into clear target markets.",
    tag: "Trade Intelligence",
    link: "services.html#export-intelligence"
  },
  {
    id: "digital-transformation",
    title: "SME & Enterprise Digital Transformation",
    description: "Modernizing legacy data systems and manual operational procedures with custom cloud networks.",
    details: "We audit your current organizational processes, eliminate spreadsheet-reliant bottlenecks, and deploy lightweight web portals and API systems that keep your teams aligned.",
    tag: "Transformation",
    link: "services.html#digital-transformation"
  },
  {
    id: "ai-dashboards",
    title: "AI-Powered Dashboards",
    description: "Custom operational control centers presenting real-time business telemetry and KPIs.",
    details: "Stop toggling between ten tabs. We build consolidated single-page dashboards that aggregate data from all your APIs, displaying real-time corridor metrics and operations.",
    tag: "Analytics / UX",
    link: "services.html#ai-dashboards"
  },
  {
    id: "market-corridor-analysis",
    title: "Market & Corridor Analysis",
    description: "Dynamic, on-demand evaluation of target trade pathways and custom regulatory blocks worldwide.",
    details: "Unlike regional agencies, our quantitative tools analyze any global corridor on-demand. We evaluate tariff lists, shipping lane congestion, and local legal frameworks.",
    tag: "Corridor Analysis",
    link: "services.html#market-corridor-analysis"
  },
  {
    id: "agentic-automation",
    title: "Agentic Automation (Circle + Gemini)",
    description: "Autonomous software agent networks handling complex document audits and operations.",
    details: "Deploy multi-agent systems designed to verify invoices, parse custom declarations, translate legal contracts, and handle data synchronization across systems without manual input.",
    tag: "Automation",
    link: "services.html#agentic-automation"
  },
  {
    id: "enterprise-optimization",
    title: "Enterprise Optimization Systems",
    description: "Auditing organizational information flows to eliminate overhead and unlock margin gains.",
    details: "Apply operations research and mathematical optimization to resource allocation, inventory levels, scheduling configurations, and dispatch lines, creating massive cost reductions.",
    tag: "Optimization",
    link: "services.html#enterprise-optimization"
  }
];

const PRODUCTS_DATA = [
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
    id: "algerian-rock-archive",
    title: "Algerian Rock Archive",
    description: "A digital high-fidelity archival search tool classifying and surveying geological and core-sample assets.",
    details: "Built for natural resource and research groups, this archive digitizes and analyzes core-sample catalog data with semantic search, permitting rapid cross-referencing of geological formations in Algeria.",
    tag: "Database / Archival",
    demoUrl: "https://demo.meridiens.co/rockarchive",
    pageUrl: "products.html#algerian-rock-archive",
    brandText: "ARA"
  },
  {
    id: "kenadsa-gardens-oasis",
    title: "Kenadsa Gardens Oasis",
    description: "A vision project mapping automated smart irrigation and microclimate optimizations for dryland oases.",
    details: "Kenadsa Gardens represents our digital twin modeling project for dryland agriculture, simulating water-flow efficiency, soil nutrition levels, and solar load to optimize crops in arid regional microclimates.",
    tag: "Vision / Agritech",
    demoUrl: "about.html#vision",
    pageUrl: "products.html#kenadsa-gardens-oasis",
    brandText: "KGO"
  }
];
