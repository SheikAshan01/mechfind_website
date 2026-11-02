import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DownloadModalProvider } from "@/components/ui/DownloadModalContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080808",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Vehicle Breakdown Assistance & Nearby Mechanic Discovery`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "MECHFIND",
    "vehicle breakdown assistance",
    "nearby mechanic discovery",
    "car mechanic nearby",
    "bike mechanic nearby",
    "roadside assistance",
    "puncture repair",
    "battery jumpstart",
    "emergency vehicle towing",
    "mechanic app",
  ],
  authors: [{ name: "MECHFIND Platform" }],
  creator: "MECHFIND",
  publisher: "MECHFIND",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} – Your Mechanic, Just Around the Corner`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/mechfind-logo.png",
        width: 1024,
        height: 781,
        alt: "MECHFIND Logo - Your Mechanic, Just Around the Corner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – Your Mechanic, Just Around the Corner`,
    description: siteConfig.description,
    images: ["/images/mechfind-logo.png"],
  },
  icons: {
    icon: "/images/mechfind-logo.png",
    shortcut: "/images/mechfind-logo.png",
    apple: "/images/mechfind-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-[#080808] text-white antialiased selection:bg-[#FFD400] selection:text-[#080808]">
        <DownloadModalProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </DownloadModalProvider>
      </body>
    </html>
  );
}
