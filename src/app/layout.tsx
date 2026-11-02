import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DownloadModalProvider } from "@/components/ui/DownloadModalContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#142235",
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
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F8FA] text-[#172334] antialiased selection:bg-[#D6A84F]/30 selection:text-[#142235]">
        <DownloadModalProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </DownloadModalProvider>
      </body>
    </html>
  );
}
