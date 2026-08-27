export interface MetricPoint {
  date: string;
  revenue: number;
  spend: number;
  roas: number;
  leads: number;
  traffic: number;
  conversions: number;
}

export interface ChannelPerformance {
  channel: string;
  spend: number;
  revenue: number;
  roas: number;
  conversions: number;
  cpa: number;
  share: number;
  color: string;
}

export interface FunnelStage {
  stage: string;
  users: number;
  dropoffRate: string;
  percentage: number;
  color: string;
}

export const SHOWCASE_KPIS = [
  {
    id: "ctr",
    label: "Click-Through Rate (CTR)",
    value: "3.62%",
    change: "+28.4%",
    isPositive: true,
    benchmark: "Industry Avg: 2.1%",
    description: "Search & Display ad optimization",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "cvr",
    label: "Conversion Rate (CVR)",
    value: "4.85%",
    change: "+18.7%",
    isPositive: true,
    benchmark: "Industry Avg: 2.9%",
    description: "Landing page CRO & UX refinement",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "roas",
    label: "Return on Ad Spend (ROAS)",
    value: "4.8x",
    change: "4.8x Target",
    isPositive: true,
    benchmark: "Target: 3.5x",
    description: "Blended Google + Meta performance",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "traffic",
    label: "Organic Traffic Growth",
    value: "142K/mo",
    change: "+42.6%",
    isPositive: true,
    benchmark: "YoY Acceleration",
    description: "Technical SEO & intent ranking",
    color: "from-purple-500 to-pink-500",
  },
];

export const MONTHLY_TREND_DATA: MetricPoint[] = [
  { date: "Jan", revenue: 42000, spend: 11000, roas: 3.81, leads: 820, traffic: 88000, conversions: 340 },
  { date: "Feb", revenue: 48500, spend: 11800, roas: 4.11, leads: 960, traffic: 95000, conversions: 395 },
  { date: "Mar", revenue: 56000, spend: 13200, roas: 4.24, leads: 1150, traffic: 104000, conversions: 460 },
  { date: "Apr", revenue: 64200, spend: 14000, roas: 4.58, leads: 1320, traffic: 116000, conversions: 540 },
  { date: "May", revenue: 78900, spend: 16500, roas: 4.78, leads: 1680, traffic: 129000, conversions: 690 },
  { date: "Jun", revenue: 92400, spend: 18200, roas: 5.07, leads: 1940, traffic: 142000, conversions: 810 },
];

export const CHANNEL_DATA: ChannelPerformance[] = [
  { channel: "Google Ads (Search & PMax)", spend: 8200, revenue: 43460, roas: 5.3, conversions: 384, cpa: 21.35, share: 44, color: "#4F46E5" },
  { channel: "Meta Ads (IG & FB)", spend: 6400, revenue: 29440, roas: 4.6, conversions: 272, cpa: 23.52, share: 30, color: "#7C3AED" },
  { channel: "Organic Search (SEO)", spend: 1200, revenue: 14800, roas: 12.3, conversions: 198, cpa: 6.06, share: 15, color: "#10B981" },
  { channel: "Email & Direct", spend: 400, revenue: 4700, roas: 11.7, conversions: 86, cpa: 4.65, share: 11, color: "#06B6D4" },
];

export const FUNNEL_DATA: FunnelStage[] = [
  { stage: "Impressions & Traffic", users: 142000, dropoffRate: "0%", percentage: 100, color: "bg-blue-500" },
  { stage: "Product / Landing Page", users: 91200, dropoffRate: "-35.8%", percentage: 64.2, color: "bg-cyan-500" },
  { stage: "Qualified Lead / Add to Cart", users: 44320, dropoffRate: "-51.4%", percentage: 31.2, color: "bg-indigo-500" },
  { stage: "Initiate Checkout / Form", users: 21800, dropoffRate: "-50.8%", percentage: 15.3, color: "bg-purple-500" },
  { stage: "Final Customer Conversion", users: 6890, dropoffRate: "-68.4%", percentage: 4.85, color: "bg-emerald-500" },
];

export const LIVE_CAMPAIGN_FEED = [
  { id: "c1", name: "Google PMax - High Intent Core", status: "Active", spend: "$4,210", roas: "5.4x", cpa: "$19.80", badge: "Scaling" },
  { id: "c2", name: "Meta Dynamic Retargeting - 14D", status: "Active", spend: "$2,890", roas: "4.9x", cpa: "$22.40", badge: "High CVR" },
  { id: "c3", name: "Google Brand Search - Exact", status: "Active", spend: "$1,120", roas: "8.2x", cpa: "$7.60", badge: "Optimized" },
  { id: "c4", name: "Meta Lookalike 1% - Top LTV", status: "Active", spend: "$3,450", roas: "4.4x", cpa: "$24.90", badge: "Learning" },
];
