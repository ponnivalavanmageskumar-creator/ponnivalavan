export interface Project {
  id: string;
  number: string;
  title: string;
  stack: string;
  tags: string[];
  category: string;
  shortDesc: string;
  metrics: { label: string; value: string; change?: string }[];
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  kpis: { name: string; value: string; trend: "up" | "down" }[];
  tools: string[];
  badgeColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  color: string;
  skills: { name: string; level: number; featured?: boolean }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  accentColor: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  tools: string[];
  description: string;
  icon: string;
  color: string;
}

export const OWNER_INFO = {
  name: "Ponnivalavan Mageskumar",
  title: "Digital Marketing Specialist | Data Analyst | AI & ML | Content Creator",
  experience: "5+ Years",
  heroBio: "I build scalable automation frameworks, modern testing solutions, and AI-powered workflows to deliver reliable, high-quality software.",
  heroDescription: "Results-driven Digital Marketing Specialist and Data Analyst with 5+ years of experience in performance marketing, campaign optimization, marketing analytics, KPI reporting, data visualization, and business insights.",
  typingRoles: [
    "Digital Marketing Specialist",
    "Data Analyst",
    "Performance Marketing Specialist",
    "Marketing Analytics Expert",
    "AI Automation Enthusiast",
    "Content Creator",
  ],
  stats: [
    { value: 5, suffix: "+", label: "Years Experience", sublabel: "Performance & BI" },
    { value: 20, suffix: "+", label: "Projects Completed", sublabel: "Dashboards & Growth" },
    { value: 50, suffix: "+", label: "Campaigns & Tasks", sublabel: "Ads & Audits" },
    { value: 100, suffix: "+", label: "Reports & Insights", sublabel: "Stakeholder Dashboards" },
  ],
  socialLinks: {
    linkedin: "https://linkedin.com/in/ponnivalavan",
    github: "https://github.com/ponnivalavan",
    youtube: "https://youtube.com/@ponnivalavan",
    instagram: "https://instagram.com/ponnivalavan",
    email: "ponnivalavan.mageskumar@example.com",
  },
};

export const ABOUT_EXPERTISE = [
  "Digital Marketing Strategy",
  "Performance Marketing",
  "Google Ads",
  "Meta Ads",
  "SEO & SEM",
  "Social Media Marketing",
  "Marketing Analytics",
  "GA4",
  "SQL",
  "Excel",
  "Power BI",
  "Tableau",
  "KPI Reporting",
  "Data Visualization",
  "Funnel Analysis",
  "A/B Testing",
  "AI Automation",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    iconName: "Megaphone",
    description: "Omnichannel strategy, lifecycle management, and conversion-driven campaigns.",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "Digital Marketing Strategy", level: 95, featured: true },
      { name: "Performance Marketing", level: 92, featured: true },
      { name: "Campaign Optimization", level: 90 },
      { name: "Lead Generation", level: 94 },
      { name: "Social Media Marketing", level: 88 },
      { name: "Content Marketing", level: 86 },
      { name: "Marketing Automation", level: 92, featured: true },
      { name: "E-commerce Marketing", level: 87 },
    ],
  },
  {
    id: "paid-advertising",
    title: "PAID ADVERTISING",
    iconName: "Target",
    description: "High-ROAS paid media management across search, social, display, and video.",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Google Ads", level: 96, featured: true },
      { name: "Meta Ads", level: 94, featured: true },
      { name: "Facebook Ads", level: 92 },
      { name: "YouTube Ads", level: 88 },
      { name: "Search Ads", level: 95 },
      { name: "Display Ads", level: 89 },
      { name: "Performance Max", level: 93, featured: true },
      { name: "Remarketing", level: 91 },
      { name: "Campaign Performance Analysis", level: 96, featured: true },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    iconName: "Search",
    description: "Organic visibility, technical auditing, and keyword domination.",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "SEO Strategy", level: 93, featured: true },
      { name: "Keyword Research", level: 95 },
      { name: "On-Page SEO", level: 94 },
      { name: "Technical SEO", level: 90, featured: true },
      { name: "Search Console", level: 96 },
      { name: "SEMrush", level: 92 },
      { name: "Organic Traffic Growth", level: 94, featured: true },
      { name: "Product Listing Optimization", level: 89 },
    ],
  },
  {
    id: "data-analytics",
    title: "DATA ANALYTICS",
    iconName: "Database",
    description: "Relational database querying, data wrangling, and statistical trend modeling.",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "SQL", level: 94, featured: true },
      { name: "Microsoft Excel", level: 98, featured: true },
      { name: "Google Sheets", level: 95 },
      { name: "Data Cleaning", level: 92 },
      { name: "Data Interpretation", level: 96 },
      { name: "Trend Analysis", level: 94 },
      { name: "Performance Analysis", level: 95, featured: true },
      { name: "Business Insights", level: 96, featured: true },
    ],
  },
  {
    id: "business-intelligence",
    title: "BUSINESS INTELLIGENCE",
    iconName: "BarChart3",
    description: "Executive dashboards, interactive KPI tracking, and enterprise MIS reports.",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Power BI", level: 95, featured: true },
      { name: "Tableau", level: 90, featured: true },
      { name: "KPI Dashboards", level: 98 },
      { name: "MIS Reporting", level: 92 },
      { name: "Data Visualization", level: 96, featured: true },
      { name: "Stakeholder Reporting", level: 94 },
      { name: "Interactive Dashboards", level: 97, featured: true },
    ],
  },
  {
    id: "marketing-analytics",
    title: "MARKETING ANALYTICS",
    iconName: "TrendingUp",
    description: "Full-funnel attribution, unit economics, conversion audits, and ROAS scaling.",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Google Analytics 4", level: 96, featured: true },
      { name: "KPI Analysis", level: 95 },
      { name: "Funnel Analysis", level: 94, featured: true },
      { name: "A/B Testing", level: 91 },
      { name: "Conversion Rate Analysis", level: 94, featured: true },
      { name: "CTR Analysis", level: 95 },
      { name: "CPC Analysis", level: 93 },
      { name: "CPA Analysis", level: 94 },
      { name: "ROAS Analysis", level: 97, featured: true },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & AUTOMATION",
    iconName: "Cpu",
    description: "Generative AI workflows, automated reporting pipelines, and intelligent agents.",
    color: "from-violet-500 to-indigo-600",
    skills: [
      { name: "AI Automation", level: 94, featured: true },
      { name: "ChatGPT", level: 96 },
      { name: "Gemini", level: 93 },
      { name: "Claude", level: 92 },
      { name: "AI Content Workflows", level: 90, featured: true },
      { name: "Marketing Automation", level: 94, featured: true },
      { name: "Data Automation", level: 91 },
      { name: "Reporting Automation", level: 95, featured: true },
    ],
  },
];

export const EXPERIENCE_DATA = {
  role: "Digital Marketing Specialist / Data Analyst",
  period: "5+ Years Experience",
  summary: "Spearheaded digital marketing campaigns, customer acquisition strategies, and end-to-end data analytics infrastructure. Engineered custom Power BI/Tableau dashboards and automated reporting systems that drove measurable revenue and ROAS expansion.",
  responsibilities: [
    "Planned and executed digital marketing campaigns across multi-channel funnels",
    "Managed Google Ads and Meta Ads campaigns with dynamic budget allocation",
    "Analyzed campaign performance and conversion data for continuous optimization",
    "Monitored CTR, CPC, CPA, Conversion Rate and ROAS across key segments",
    "Conducted keyword research and audience segmentation analysis",
    "Implemented SEO strategies to accelerate organic domain authority and rank",
    "Analyzed GA4 performance data, user journeys, and drop-off barriers",
    "Built KPI dashboards and automated MIS reports for executive review",
    "Used SQL and Excel for advanced querying, data cleaning, and modeling",
    "Created Power BI and Tableau dashboards with interactive drill-down visuals",
    "Identified market trends, customer behavior shifts, and performance gaps",
    "Conducted structured A/B testing on ad creatives, copy, and landing pages",
    "Performed full-funnel attribution analysis from impression to retention",
    "Automated recurring reports saving 15+ hours weekly in manual data assembly",
    "Generated actionable business insights that shaped growth roadmaps",
    "Collaborated seamlessly with design, content, sales and business leadership",
    "Presented data-driven recommendations and quarterly reviews to stakeholders",
  ],
  keyMetrics: [
    { label: "ROAS Achieved", value: "4.8x avg" },
    { label: "CTR Improvement", value: "+28.4%" },
    { label: "CPA Reduction", value: "-31.2%" },
    { label: "Reporting Time Saved", value: "85%" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    number: "01",
    title: "Marketing Performance Dashboard",
    stack: "Power BI + Excel + GA4",
    tags: ["Power BI", "Excel", "GA4", "Data Visualization", "KPI Reporting"],
    category: "Business Intelligence",
    badgeColor: "from-blue-500 to-indigo-500",
    shortDesc: "Comprehensive interactive executive marketing dashboard uniting GA4 web analytics, multi-channel ad spend, and CRM pipeline metrics into a unified cockpit.",
    metrics: [
      { label: "ROAS Tracked", value: "4.8x", change: "+1.2x" },
      { label: "Leads Visualized", value: "14.2K", change: "+34%" },
      { label: "Reporting Speed", value: "Instant", change: "Real-time" },
      { label: "Decision Velocity", value: "3x Faster", change: "+200%" },
    ],
    overview: "Built an enterprise-grade Marketing Performance Command Center that consolidates paid ad performance, web traffic, and revenue data across all acquisition channels. Enables marketing teams and executives to track ROAS, CPA, CTR, and conversion velocity with granular filtering by date, campaign, audience, and region.",
    challenge: "Disparate data silos across Google Ads, Meta Ads, and GA4 resulted in 12+ hours of weekly manual reporting with delayed insights into underperforming ad sets.",
    solution: "Architected an automated Power BI semantic model fed by structured Excel and GA4 data connectors with calculated DAX measures for blended CAC, ROAS, and real-time KPI alerts.",
    features: [
      "Interactive multi-dimensional filters (Campaign, Channel, Region, Time)",
      "High-impact KPI summary cards with conditional color alerts",
      "Campaign comparison matrix with CAC and ROAS bench-marking",
      "Monthly and quarterly trend forecasting with predictive moving averages",
      "Automated PDF & email scheduled report delivery to stakeholders",
    ],
    results: [
      "Eliminated 15 hours/week of manual spreadsheet compilation",
      "Identified underperforming keywords, reallocating $18K/mo to top-converting assets",
      "Delivered a 4.8x overall portfolio ROAS through fast feedback loops",
    ],
    kpis: [
      { name: "ROAS", value: "4.8x", trend: "up" },
      { name: "Conversion Rate", value: "4.85%", trend: "up" },
      { name: "CPA Reduction", value: "-27.4%", trend: "down" },
      { name: "CTR", value: "3.62%", trend: "up" },
    ],
    tools: ["Power BI", "Microsoft Excel", "Google Analytics 4", "DAX", "Power Query"],
  },
  {
    id: "proj-2",
    number: "02",
    title: "Google Ads Campaign Optimization",
    stack: "Google Ads + GA4 + Excel",
    tags: ["Google Ads", "GA4", "Excel", "Search Ads", "PMax", "Bidding Strategy"],
    category: "Performance Marketing",
    badgeColor: "from-indigo-500 to-purple-500",
    shortDesc: "Data-driven Search, Display, and Performance Max campaign restructuring with smart bidding, negative keyword harvesting, and target CPA optimization.",
    metrics: [
      { label: "CTR Increase", value: "+28.4%", change: "vs Baseline" },
      { label: "CPA Reduction", value: "-31.2%", change: "Cost saved" },
      { label: "ROAS Reached", value: "5.2x", change: "+1.6x" },
      { label: "Conv. Volume", value: "+46%", change: "MoM" },
    ],
    overview: "Conducted an end-to-end performance audit and mathematical campaign restructuring for multi-tier Google Ads accounts. Leveraged search query n-gram analysis in Excel, custom intent audience clusters, and GA4 assisted conversion tracking.",
    challenge: "Client was experiencing ad fatigue, bloated CPCs on broad terms, and high CPA ($84) with an inefficient budget split across Search and Display campaigns.",
    solution: "Re-engineered account architecture into Single-Theme Ad Groups (STAGs) and Performance Max asset groups, implemented an aggressive negative keyword matrix, and tuned Target CPA/ROAS algorithms.",
    features: [
      "N-gram search query mining script in Excel for negative keyword automation",
      "Performance Max creative asset scoring and asset variation testing",
      "GA4 conversion event sync with enhanced conversions and value rules",
      "Dayparting and geo-bid modifiers based on historical conversion velocity",
      "Dynamic ad copy personalization linked to top transactional query themes",
    ],
    results: [
      "Lowered CPA from $84.00 down to $57.80 within 60 days (-31.2%)",
      "Boosted overall Click-Through Rate (CTR) from 2.8% to 3.6% (+28.4%)",
      "Scaled monthly qualified lead count by +46% while keeping total spend flat",
    ],
    kpis: [
      { name: "CTR", value: "3.60%", trend: "up" },
      { name: "Avg CPC", value: "$1.42", trend: "down" },
      { name: "CPA", value: "$57.80", trend: "down" },
      { name: "ROAS", value: "5.2x", trend: "up" },
    ],
    tools: ["Google Ads", "Google Analytics 4", "Excel Solver", "Google Tag Manager", "Looker Studio"],
  },
  {
    id: "proj-3",
    number: "03",
    title: "SEO Performance Analytics",
    stack: "Google Search Console + GA4 + SEMrush",
    tags: ["SEO", "GSC", "SEMrush", "Organic Traffic", "Technical SEO"],
    category: "Organic Growth",
    badgeColor: "from-emerald-500 to-teal-500",
    shortDesc: "In-depth organic search telemetry and content optimization engine uncovering low-hanging fruit keywords, ranking velocity, and landing page UX friction.",
    metrics: [
      { label: "Organic Growth", value: "+42.6%", change: "YoY" },
      { label: "Top 3 Keywords", value: "185+", change: "+74 new" },
      { label: "Avg CTR", value: "4.9%", change: "+1.4%" },
      { label: "Index Coverage", value: "99.4%", change: "+12%" },
    ],
    overview: "Built an SEO performance intelligence model integrating Search Console API data with SEMrush competitive metrics to track impression share, keyword cannibalization, click-through opportunity scores, and Core Web Vitals health.",
    challenge: "Website suffered from stagnant organic impressions, high-ranking pages with low click-through rates, and technical crawl errors preventing indexing of core revenue pages.",
    solution: "Conducted technical audit fixing canonical and schema errors, restructured metadata with high-intent modifiers, and built a dynamic Search Console opportunity matrix to prioritize quick-win queries (rankings 4-15).",
    features: [
      "Query opportunity matrix (High Impressions + Low CTR identification)",
      "Keyword rank tracking with competitor volatility radar",
      "Landing page Core Web Vitals correlation with bounce rates in GA4",
      "Automated cannibalization detector across URL clusters",
      "Structured data implementation (Organization, Product, FAQ, Article)",
    ],
    results: [
      "Accelerated organic traffic by +42.6% over a 6-month optimization window",
      "Pushed 74 additional target commercial keywords into Google Top 3 positions",
      "Improved average Search Console organic CTR by +1.4% via title tag A/B tests",
    ],
    kpis: [
      { name: "Organic Clicks", value: "142K/mo", trend: "up" },
      { name: "Avg Position", value: "8.4", trend: "up" },
      { name: "Top 10 Keywords", value: "620+", trend: "up" },
      { name: "Organic Conv Rate", value: "3.2%", trend: "up" },
    ],
    tools: ["Google Search Console", "SEMrush", "GA4", "Screaming Frog", "Ahrefs"],
  },
  {
    id: "proj-4",
    number: "04",
    title: "Sales & Business Analytics Dashboard",
    stack: "SQL + Power BI + Excel",
    tags: ["SQL", "Power BI", "Excel", "MIS", "Revenue Analytics", "Data Modeling"],
    category: "Business Intelligence",
    badgeColor: "from-amber-500 to-orange-500",
    shortDesc: "End-to-end relational data warehouse and interactive Power BI business cockpit modeling multi-million revenue streams, cohort retention, and regional profitability.",
    metrics: [
      { label: "Revenue Modeled", value: "$4.2M+", change: "Audited" },
      { label: "Query Speed", value: "<120ms", change: "Indexed" },
      { label: "Margin Accuracy", value: "99.9%", change: "Real-time" },
      { label: "MIS Delivery", value: "1-Click", change: "Instant" },
    ],
    overview: "Designed an enterprise BI pipeline extracting transactional data from MySQL/PostgreSQL, transforming messy CRM tables through SQL views and CTEs, and serving executive dashboards with drill-downs across product categories, customer cohorts, and regional margins.",
    challenge: "Executive team lacked real-time visibility into product profitability and churn risk, relying on disconnected manual spreadsheets with inconsistent revenue calculations.",
    solution: "Created a normalized Star Schema data model in SQL with automated ETL pipelines into Power BI. Built interactive KPI cards, waterfall revenue charts, and predictive customer cohort analysis.",
    features: [
      "Advanced SQL CTEs and Window Functions for MoM/YoY growth & cohort retention",
      "Star schema data modeling with Fact and Dimension relationships in Power BI",
      "Interactive regional drill-down heatmaps with margin contribution analysis",
      "Product SKU Pareto analysis (80/20 rule) identifying top revenue drivers",
      "Dynamic currency conversion and tax reconciliation calculations",
    ],
    results: [
      "Surfaced a 14% margin leakage in secondary distribution channels, saving $68K",
      "Enabled executive team to conduct weekly business reviews with zero prep lag",
      "Reduced monthly closing analysis from 4 business days to under 15 minutes",
    ],
    kpis: [
      { name: "Gross Margin", value: "38.2%", trend: "up" },
      { name: "Repeat Purchase Rate", value: "31.4%", trend: "up" },
      { name: "Customer LTV", value: "$412", trend: "up" },
      { name: "CAC Payback", value: "3.2 Mo", trend: "down" },
    ],
    tools: ["PostgreSQL / MySQL", "Power BI Desktop", "Power Query", "Excel Pivot & VBA", "DAX Studio"],
  },
  {
    id: "proj-5",
    number: "05",
    title: "Marketing Funnel Analysis",
    stack: "GA4 + Excel + Power BI",
    tags: ["GA4", "Funnel Analysis", "CRO", "A/B Testing", "User Journey"],
    category: "Marketing Analytics",
    badgeColor: "from-purple-500 to-pink-500",
    shortDesc: "Complete customer journey forensic breakdown from impression and landing page bounce to checkout conversion, identifying high-friction leakage points.",
    metrics: [
      { label: "Funnel Conv Rate", value: "18.7%", change: "+4.2%" },
      { label: "Cart Drop-off", value: "-22%", change: "Optimized" },
      { label: "Landing Bounce", value: "-16.4%", change: "Improved" },
      { label: "Form Completion", value: "68.2%", change: "+19%" },
    ],
    overview: "Built a step-by-step user journey mapping model analyzing the full conversion pipeline: Traffic → Engagement → Leads → Conversion → Revenue. Pinpointed critical drop-off choke points between product page view and checkout completion.",
    challenge: "Significant high-cost paid traffic was dropping off at step 3 of the conversion funnel, resulting in wasted ad spend and lost pipeline revenue.",
    solution: "Implemented GA4 custom funnel exploration reports and user-scoped dimension tracking. Designed statistical A/B tests on landing page form fields and checkout UX.",
    features: [
      "Visual multi-step funnel telemetry with real-time drop-off percentage tracking",
      "Landing page speed and UX friction correlation analysis",
      "Channel-specific conversion efficiency comparison (Organic vs Paid vs Referral)",
      "Cohort retention analysis and user journey Sankey diagrams",
      "Automated Slack alert when funnel drop-off exceeds statistical thresholds",
    ],
    results: [
      "Increased overall funnel conversion rate from 14.5% to 18.7% (+18.7% relative lift)",
      "Reduced mobile checkout drop-off rate by 22% via simplified single-page flow",
      "Recovered an estimated $42,000 in monthly abandoned checkout revenue",
    ],
    kpis: [
      { name: "Step 1 to Step 2", value: "64.2%", trend: "up" },
      { name: "Step 2 to Step 3", value: "48.6%", trend: "up" },
      { name: "Checkout Completion", value: "61.3%", trend: "up" },
      { name: "Overall CVR", value: "18.7%", trend: "up" },
    ],
    tools: ["GA4 Exploration", "Power BI", "Excel Statistical Models", "Hotjar", "Google Tag Manager"],
  },
  {
    id: "proj-6",
    number: "06",
    title: "AI Marketing Automation",
    stack: "AI + Automation + Analytics",
    tags: ["AI Automation", "ChatGPT API", "Claude", "Python", "Workflow Automation"],
    category: "AI & Automation",
    badgeColor: "from-violet-500 to-indigo-600",
    shortDesc: "Intelligent autonomous pipeline combining Large Language Models, webhooks, and analytics APIs to automate copywriting, weekly report generation, and campaign insights.",
    metrics: [
      { label: "Hours Saved", value: "18 hrs/wk", change: "Automated" },
      { label: "Content Output", value: "4x Scale", change: "+300%" },
      { label: "Insight Latency", value: "<5 min", change: "Real-time" },
      { label: "Ad Variations", value: "150+/mo", change: "Generated" },
    ],
    overview: "Engineered an AI-powered growth automation suite utilizing ChatGPT and Claude APIs integrated with Google Ads and GA4 webhooks. Automatically generates high-converting ad copy variations, drafts executive summaries of weekly metric shifts, and flags budget anomalies.",
    challenge: "Marketing and analytics team spent over 18 hours every week writing repetitive ad headlines, summarizing weekly KPI reports, and drafting client updates manually.",
    solution: "Constructed an automated Python & webhook pipeline that parses weekly performance data, feeds structured prompts to Claude/GPT-4o, and outputs styled markdown insights directly into Slack and client portals.",
    features: [
      "Autonomous weekly KPI narrative generator with anomaly detection alerts",
      "Programmatic ad copy variation generator adhering to brand tone guidelines",
      "AI-assisted keyword expansion and competitor ad copy sentiment analyzer",
      "Smart customer feedback classification and review sentiment clustering",
      "Auto-generated executive slide decks with data-backed recommendations",
    ],
    results: [
      "Freed up 18+ hours per week for strategic high-leverage growth initiatives",
      "Scaled ad copy split-testing volume by 4x, boosting winning ad CTR by +32%",
      "Achieved 100% on-time delivery of Monday morning stakeholder performance briefings",
    ],
    kpis: [
      { name: "Automation Uptime", value: "99.8%", trend: "up" },
      { name: "Insight Accuracy", value: "96.4%", trend: "up" },
      { name: "Ad Generation Rate", value: "50 ads/min", trend: "up" },
      { name: "Workflow Cost", value: "<$12/mo", trend: "down" },
    ],
    tools: ["ChatGPT / OpenAI API", "Claude", "Gemini", "Python", "Make / Zapier", "Google Sheets API"],
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "srv-1",
    number: "01",
    title: "Digital Marketing Strategy",
    description: "Data-driven strategies designed around measurable business goals, unit economics, and targeted customer acquisition funnels.",
    iconName: "Compass",
    accentColor: "from-blue-500 to-indigo-500",
    deliverables: [
      "Target audience persona & market research",
      "Omnichannel budget allocation roadmap",
      "KPI framework & revenue goal alignment",
      "Competitor benchmarking & channel strategy",
    ],
  },
  {
    id: "srv-2",
    number: "02",
    title: "Performance Marketing",
    description: "Google Ads and Meta Ads campaign planning, full-funnel optimization, smart bidding, and aggressive ROAS scaling.",
    iconName: "Target",
    accentColor: "from-indigo-500 to-purple-500",
    deliverables: [
      "Google Search, Display & Performance Max setups",
      "Meta (Facebook & Instagram) ad campaign scaling",
      "Retargeting funnels & custom audience modeling",
      "A/B creative testing & CPA reduction sprints",
    ],
  },
  {
    id: "srv-3",
    number: "03",
    title: "SEO & Organic Growth",
    description: "Keyword research, technical SEO audits, search intent mapping, and high-impact organic traffic acceleration.",
    iconName: "TrendingUp",
    accentColor: "from-emerald-500 to-teal-500",
    deliverables: [
      "Comprehensive technical SEO & crawl audits",
      "Commercial & transactional keyword mapping",
      "On-page optimization & schema markup",
      "Google Search Console & rank tracking telemetry",
    ],
  },
  {
    id: "srv-4",
    number: "04",
    title: "Data Analytics & BI",
    description: "SQL data modeling, Microsoft Excel wizardry, and interactive Power BI & Tableau enterprise dashboard architectures.",
    iconName: "BarChart3",
    accentColor: "from-amber-500 to-orange-500",
    deliverables: [
      "Custom SQL queries, CTEs & data warehouse pipelines",
      "Executive Power BI & Tableau interactive cockpits",
      "Automated MIS reporting & spreadsheet models",
      "Stakeholder presentations & actionable insights",
    ],
  },
  {
    id: "srv-5",
    number: "05",
    title: "Marketing Analytics",
    description: "GA4 implementation, KPI deep-dives, customer journey funnel analysis, and unit-economic conversion rate optimization.",
    iconName: "LineChart",
    accentColor: "from-purple-500 to-pink-500",
    deliverables: [
      "GA4 setup, custom events & conversion tracking",
      "Full-funnel drop-off and attribution analysis",
      "CTR, CPC, CPA, and ROAS unit economics review",
      "Landing page CRO recommendations & A/B testing",
    ],
  },
  {
    id: "srv-6",
    number: "06",
    title: "AI Marketing Automation",
    description: "AI-powered workflows for high-volume content generation, programmatic reporting, data synthesis, and marketing automation.",
    iconName: "Cpu",
    accentColor: "from-violet-500 to-indigo-600",
    deliverables: [
      "ChatGPT & Claude prompt engineering pipelines",
      "Automated weekly KPI reporting to Slack/Email",
      "AI-driven ad copy generation & sentiment analysis",
      "Workflow integration with APIs & cloud webhooks",
    ],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Collect",
    subtitle: "Multi-Source Ingestion",
    tools: ["GA4", "Ads Platforms", "CRM", "Spreadsheets"],
    description: "Consolidate raw telemetry across advertising networks, web analytics, payment gateways, and CRM databases into centralized data streams.",
    icon: "DatabaseZap",
    color: "text-blue-400",
  },
  {
    step: "02",
    title: "Clean",
    subtitle: "Data Preparation & QA",
    tools: ["SQL", "Excel", "Power Query", "Data Prep"],
    description: "Filter anomalies, remove duplicate records, standardize schemas, normalize currencies, and validate integrity with automated assertions.",
    icon: "Filter",
    color: "text-cyan-400",
  },
  {
    step: "03",
    title: "Analyze",
    subtitle: "Statistical Modeling",
    tools: ["Trends", "KPIs", "Funnels", "Performance"],
    description: "Execute regression analysis, funnel drop-off diagnostics, cohort retention breakdowns, and cross-channel attribution modeling.",
    icon: "Activity",
    color: "text-indigo-400",
  },
  {
    step: "04",
    title: "Visualize",
    subtitle: "Interactive Cockpits",
    tools: ["Power BI", "Tableau", "Looker", "Dashboards"],
    description: "Build clean, interactive dashboards with intuitive drill-downs, dynamic filters, and real-time metric scorecards for leadership.",
    icon: "LayoutDashboard",
    color: "text-purple-400",
  },
  {
    step: "05",
    title: "Optimize",
    subtitle: "Performance Scaling",
    tools: ["Campaigns", "SEO", "A/B Testing", "Processes"],
    description: "Iterate bid strategies, eliminate low-performing keywords, refine landing page journeys, and automate repetitive tasks.",
    icon: "Zap",
    color: "text-amber-400",
  },
  {
    step: "06",
    title: "Decide",
    subtitle: "Actionable Insights",
    tools: ["Executive Reviews", "Growth Roadmaps", "ROI"],
    description: "Translate complex numbers into clear, revenue-generating business strategies and capital allocation decisions.",
    icon: "Award",
    color: "text-emerald-400",
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Data-Driven",
    tagline: "Backed by Numbers",
    description: "Every campaign hypothesis, budget allocation, and strategy is strictly supported by audited empirical metrics—never guesswork.",
    icon: "PieChart",
    stat: "100% Metric Backed",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "group-hover:border-blue-500/50",
  },
  {
    title: "Performance-Focused",
    tagline: "Obsessed with Growth",
    description: "Unrelenting focus on high-leverage outcomes: maximizing CTR, scaling conversion rates, slashing CPA, and expanding net ROAS.",
    icon: "Target",
    stat: "4.8x Average ROAS",
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    title: "Analytical Thinking",
    tagline: "Complex Data Simplified",
    description: "Transforming dense, multi-source raw datasets into intuitive visual dashboards, trend forecasts, and strategic stakeholder roadmaps.",
    icon: "BrainCircuit",
    stat: "100+ Visual Reports",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-pink-500/50",
  },
  {
    title: "AI-Powered",
    tagline: "Next-Gen Productivity",
    description: "Leveraging cutting-edge LLMs, Python automation, and programmatic workflows to 4x execution speed and eliminate reporting friction.",
    icon: "Sparkles",
    stat: "18+ Hrs Saved / Wk",
    color: "from-cyan-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-cyan-500/50",
  },
];

export const TOOLKIT_ITEMS = [
  { name: "Google Ads", category: "Paid Media", icon: "google" },
  { name: "Meta Ads", category: "Paid Social", icon: "meta" },
  { name: "Google Analytics 4", category: "Analytics", icon: "ga4" },
  { name: "Google Search Console", category: "SEO", icon: "gsc" },
  { name: "SEMrush", category: "SEO & Competitive", icon: "semrush" },
  { name: "Power BI", category: "Business Intelligence", icon: "powerbi" },
  { name: "Tableau", category: "Business Intelligence", icon: "tableau" },
  { name: "SQL", category: "Database & Modeling", icon: "sql" },
  { name: "Microsoft Excel", category: "Data Analysis", icon: "excel" },
  { name: "Google Sheets", category: "Collaboration", icon: "sheets" },
  { name: "Canva", category: "Creative Design", icon: "canva" },
  { name: "YouTube", category: "Video & Content", icon: "youtube" },
  { name: "LinkedIn", category: "B2B Marketing", icon: "linkedin" },
];
