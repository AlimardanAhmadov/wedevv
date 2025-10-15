import { Inter } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Script from "next/script";

import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WeDev | Custom Software, Web & AI Development Agency",
    template: "%s | WeDev",
  },
  description:
    "Partner with WeDev to design, build, and scale world-class software. We are a full-service agency specializing in custom web, mobile, and AI solutions for startups and enterprises.",
  keywords: [
    "custom software development",
    "web development agency",
    "mobile app development",
    "AI solutions provider",
    "Next.js development",
    "React development",
    "SaaS application development",
    "MVP for startups",
    "enterprise software solutions",
    "technology consulting",
    "API integration services",
    "fintech software development",
    "healthtech solutions",
  ],
  authors: [{ name: "The WeDev Team", url: "https://codedev.cloud" }],
  creator: "WeDev",
  publisher: "WeDev",
  
  metadataBase: new URL("https://codedev.cloud"),

  alternates: {
    canonical: "https://codedev.cloud",
    languages: {
      "en-US": "https://codedev.cloud",
    },
  },

  openGraph: {
    title: "WeDev | Custom Software, Web & AI Development Agency",
    description:
      "We build high-performance, scalable software solutions that drive business growth. Discover our expertise in web, mobile, and AI development.",
    url: "https://codedev.cloud",
    siteName: "WeDev",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "WeDev - Custom Software Development Agency for Web, Mobile, and AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WeDev: Your Partner in Digital Innovation & Software Development",
    description:
      "From startup MVPs to enterprise-grade systems, WeDev delivers cutting-edge web, mobile, and AI solutions. Let's build the future, together.",
    creator: "@WeDev",
    site: "@WeDev",
    images: ["/apple-touch-icon.png"],
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/apple-touch-icon.png",
  },
  
  category: "Technology",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "dark light",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WeDev",
    "url": "https://codedev.cloud",
    "logo": "https://codedev.cloud/images/logo-icon.png",
    "image": "https://codedev.cloud/logo-icon.png",
    "description": "WeDev is a premier software development agency delivering bespoke solutions in web development, mobile application creation, and artificial intelligence. We partner with businesses of all sizes, from innovative startups to established enterprises, to build scalable, secure, and impactful digital products.",
    "telephone": "+1-555-123-4567",
    "email": "contact@codedev.cloud",
    "foundingDate": "2025-10-10",
    "serviceArea": {
      "@type": "GeoShape",
      "description": "Serving clients in the United States, Canada, and Europe.",
    },
    "sameAs": [
      "https://www.linkedin.com/company/your-wedev-linkedin",
    ],
    "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "url": "https://codedev.cloud",
            "description": "Building responsive, high-performance web applications using modern frameworks like Next.js, React, and Node.js."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "url": "https://codedev.cloud",
            "description": "Creating intuitive cross-platform mobile apps for iOS and Android with React Native and Flutter to reach a wider audience."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning Solutions",
            "url": "https://codedev.cloud",
            "description": "Integrating AI-powered features, custom machine learning models, and intelligent automation to solve complex business challenges."
          }
        }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://codedev.cloud",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://codedev.cloud",
      "query-input": ""
    }
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <meta name="trustpilot-one-time-domain-verification-id" content="c937e7ec-327b-4cb5-b41b-e4ce310df9f2" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-86V79QKZXX"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}