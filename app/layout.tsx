import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Naufalino Tuhfah T.K.W | Web Developer",
    template: "%s | Naufalino Portfolio"
  },
  description: "7th Grade Student passionate about web development. Building the future with Next.js, React, and TypeScript. Check out my projects and skills!",
  keywords: ["Naufalino", "Web Developer", "Next.js", "React", "TypeScript", "Portfolio", "SMP Cordova"],
  authors: [{ name: "Naufalino Tuhfah T.K.W" }],
  creator: "Naufalino Tuhfah T.K.W",
  publisher: "Naufalino Tuhfah T.K.W",
  
  // Open Graph (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naufalino-portfolio.vercel.app",
    title: "Naufalino Tuhfah T.K.W | Web Developer Portfolio",
    description: "7th Grade Student passionate about web development. Building the future with Next.js, React, and TypeScript.",
    siteName: "Naufalino Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Naufalino Portfolio"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Naufalino Tuhfah T.K.W | Web Developer",
    description: "7th Grade Student passionate about web development",
    images: ["/og-image.png"],
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  
  // Additional
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://naufalino-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Theme Color */}
        <meta name="theme-color" content="#2563EB" />
        <meta name="msapplication-TileColor" content="#2563EB" />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
