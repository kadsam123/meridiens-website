/**
 * Meridiens - AI & Trade Innovation Lab / Applied Intelligence Studio
 * Central Data Configuration for Platforms, Agentic Engines, Open-Source Tools, and Advisory Services.
 */

const ECOSYSTEM_CATEGORIES = [
    { id: "all", label: "All Projects & Lab Assets" },
    { id: "platform", label: "Platforms & Apps" },
    { id: "agentic", label: "Agentic Engines" },
    { id: "opensource", label: "Open-Source & Tools" },
    { id: "consulting", label: "Consulting & Retainers" }
];

const PRODUCTS_DATA = [
    {
        id: "atlas-corr",
        title: "Atlas Corr",
        category: "platform",
        badge: "Flagship Platform",
        summary: "Cross-border and intra-national supply chain orchestration engine.",
        description: "Dynamic trade corridor modeling platform that maps multi-modal transit friction, simulates logistical shocks, and provides real-time trade route optimization.",
        techStack: ["Streamlit", "Python", "Spatial Mapping", "FastAPI"],
        status: "Production Ready",
        linkText: "Launch Portal",
        url: "https://atlas-corr.meridiens.co/sme.html"
    },
    {
        id: "meridian-flow",
        title: "Meridian Flow",
        category: "agentic",
        badge: "Agentic Swarm",
        summary: "Autonomous trade compliance and tariff engineering engine.",
        description: "A deterministic multi-agent system powered by Gemini and Neo4j. Ingests commercial manifests to identify Section 232 exemptions against Section 338 tariffs, generating certified B3-ready dossiers.",
        techStack: ["CrewAI", "Google Gemini API", "Neo4j", "BYOK Architecture"],
        status: "Active Deployment",
        linkText: "Explore Engine",
        url: "https://flow.meridiens.co"
    },
    {
        id: "relief-intake",
        title: "Emergency Relief & Entitlement Engine",
        category: "platform",
        badge: "Diagnostic Tool",
        summary: "Automated entitlement mapping for federal and provincial tariff relief.",
        description: "Pre-qualifies Canadian enterprises for WRRP, BDC Pivot to Grow, and IQ ESSOR funding. Automates the generation of 30-page federal application dossiers with zero local data retention.",
        techStack: ["FastAPI", "Deterministic Rule Engine", "ReportLab"],
        status: "Live Beta",
        linkText: "Access Diagnostic",
        url: "#"
    },
    {
        id: "byok-connector",
        title: "OpenBYOK Trade Connector",
        category: "opensource",
        badge: "Open Source",
        summary: "Zero-retention client connector for private cloud AI execution.",
        description: "An auditable, lightweight Python/TypeScript middleware ensuring enterprise trade manifests and API keys remain isolated within client-controlled Google Cloud environments.",
        techStack: ["Python", "MIT License", "GitHub"],
        status: "Public Repository",
        linkText: "View on GitHub",
        url: "https://github.com/18138711-canada"
    }
];

const SERVICES_DATA = [
    {
        id: "rapid-compliance-deploy",
        title: "72-Hour Rapid Compliance Deployment",
        category: "consulting",
        badge: "Enterprise Turnkey",
        deliverable: "Private BYOK Instance Setup",
        description: "Turnkey installation of internal compliance and manifest-auditing agents directly within your enterprise cloud infrastructure.",
        timeline: "3 Business Days"
    },
    {
        id: "supply-chain-audit",
        title: "Trade Corridor & Tariff Vulnerability Audit",
        category: "consulting",
        badge: "Advisory",
        deliverable: "Comprehensive Risk & Entitlement Matrix",
        description: "Full diagnostic of cross-border inventory and commercial manifests to quantify tariff exposure and unlock non-repayable government funding.",
        timeline: "1 - 2 Weeks"
    }
];
