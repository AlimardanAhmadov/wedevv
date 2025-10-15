import { Inter } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "WeDev — Innovate. Create. Grow.",
    template: "%s | WeDev Software Development Agency",
  },
  description:
    "WeDev is a world-class software development agency specializing in custom web, mobile, and AI-powered applications. We help startups and enterprises innovate, scale, and thrive with cutting-edge digital solutions.",
  keywords: [
    "WeDev",
    "WeDev agency",
    "WeDev software development",
    "WeDev software development agency",
    "WeDev web development",
    "WeDev mobile development",
    "WeDev AI development",
    "custom software development agency",
    "Next.js developers",
    "React.js experts",
    "SaaS development company",
    "startup MVP builder",
    "app development services",
    "enterprise software solutions",
    "technology consulting agency",
  ],
  authors: [{ name: "WeDev Team", url: "https://codedev.cloud" }],
  creator: "WeDev",
  publisher: "WeDev",
  metadataBase: new URL("https://codedev.cloud"),
  openGraph: {
    title: "WeDev — Innovate. Create. Grow.",
    description:
      "WeDev is a results-driven software development agency offering web, mobile, and AI solutions tailored to help your business scale and succeed.",
    url: "https://codedev.cloud",
    siteName: "WeDev",
    images: [
      {
        url: "https://codedev.cloud/images/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "WeDev Software Development Agency - Full Service Technology Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeDev — Full-Service Software Development Agency",
    description:
      "Partner with WeDev to build scalable web, mobile, and AI-powered software solutions. Innovate faster with our world-class development team.",
    creator: "@WeDevOfficial",
    site: "@WeDevOfficial",
    images: ["https://codedev.cloud/images/logo-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "https://codedev.cloud",
    languages: {
      "en-US": "https://codedev.cloud",
    },
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WeDev",
    url: "https://codedev.cloud",
    logo: "https://codedev.cloud/images/logo-icon.png",
    sameAs: [
      "https://twitter.com/WeDevOfficial",
      "https://linkedin.com/company/wedev",
      "https://github.com/wedev",
    ],
    description:
      "WeDev is a leading software development agency offering custom solutions in web, mobile, and AI technology for startups and enterprises worldwide.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "WeDev Team",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "wedevvweb@gmail.com",
      url: "https://codedev.cloud",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressRegion: "Worldwide",
      postalCode: "00000",
      addressCountry: "US",
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "WeDev Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom web apps using Next.js, React, and Node.js.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description:
              "Cross-platform mobile apps for iOS and Android using React Native and Flutter.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Development",
            description:
              "AI-powered tools, chatbots, and data-driven applications for modern businesses.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="c937e7ec-327b-4cb5-b41b-e4ce310df9f2"
        />
        <meta name="msvalidate.01" content="YOUR-BING-VERIFICATION-CODE" />
        <meta name="google-site-verification" content="YOUR-GOOGLE-VERIFICATION-CODE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
