// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "WeDev — Innovate. Create. Grow.",
    template: "%s | WeDev",
  },
  description:
    "WeDev is a full-service software development agency that builds scalable web, mobile, and AI-powered applications for startups and enterprises worldwide. We turn your ideas into high-performance digital products.",
  keywords: [
    "WeDev",
    "software development agency",
    "web development",
    "mobile app development",
    "AI development",
    "SaaS development",
    "custom software solutions",
    "Next.js development",
    "React developers",
    "full-stack development",
    "startup MVP development",
  ],
  authors: [{ name: "WeDev Team" }],
  creator: "WeDev",
  publisher: "WeDev",
  metadataBase: new URL("https://codedev.cloud"),
  openGraph: {
    title: "WeDev — Innovate. Create. Grow.",
    description:
      "WeDev helps companies innovate and scale through custom web, mobile, and AI development. Partner with us to bring your digital vision to life.",
    url: "https://codedev.cloud",
    siteName: "WeDev",
    images: [
      {
        url: "/images/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "WeDev Software Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeDev — Innovate. Create. Grow.",
    description:
      "A results-driven software development agency that builds modern, scalable web and mobile solutions.",
    creator: "@WeDevOfficial",
    images: ["/images/logo-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://codedev.cloud",
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="trustpilot-one-time-domain-verification-id" content="c937e7ec-327b-4cb5-b41b-e4ce310df9f2"/>
      <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
