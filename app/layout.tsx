import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ponnivalavan Mageskumar | Digital Marketing Specialist & Data Analyst",
  description:
    "Portfolio of Ponnivalavan Mageskumar — Results-driven Digital Marketing Specialist and Data Analyst with 5+ years of experience in performance marketing, campaign optimization, marketing analytics, KPI reporting, data visualization, Power BI, SQL, and AI automation.",
  keywords: [
    "Digital Marketing Specialist",
    "Data Analyst",
    "Performance Marketing",
    "Marketing Analytics",
    "Google Ads Specialist",
    "SEO Specialist",
    "Power BI Analyst",
    "SQL Data Analyst",
    "Marketing Data Analyst",
    "Digital Marketing Analytics",
    "GA4 Specialist",
    "Ponnivalavan Mageskumar",
  ],
  authors: [{ name: "Ponnivalavan Mageskumar" }],
  creator: "Ponnivalavan Mageskumar",
  metadataBase: new URL("https://ponnivalavan.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ponnivalavan.dev",
    siteName: "Ponnivalavan Mageskumar - Digital Marketing Specialist & Data Analyst",
    title: "Ponnivalavan Mageskumar | Digital Marketing Specialist & Data Analyst",
    description:
      "Results-driven Digital Marketing Specialist and Data Analyst with 5+ years of experience in performance marketing, marketing analytics, KPI reporting, Power BI, and AI workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ponnivalavan Mageskumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ponnivalavan Mageskumar | Digital Marketing Specialist & Data Analyst",
    description:
      "Results-driven Digital Marketing Specialist and Data Analyst with 5+ years of experience in performance marketing, marketing analytics, and AI automation.",
    images: ["/og-image.png"],
    creator: "@ponnivalavan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ponnivalavan Mageskumar",
    url: "https://ponnivalavan.dev",
    jobTitle: "Digital Marketing Specialist & Data Analyst",
    knowsAbout: [
      "Digital Marketing Strategy",
      "Performance Marketing",
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Google Analytics 4",
      "SQL",
      "Microsoft Excel",
      "Power BI",
      "Tableau",
      "Marketing Analytics",
      "AI Automation",
    ],
    sameAs: [
      "https://linkedin.com/in/ponnivalavan",
      "https://github.com/ponnivalavan",
      "https://youtube.com/@ponnivalavan",
      "https://instagram.com/ponnivalavan",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-slate-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
