export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const siteConfig = {
  name: "MECHFIND",
  tagline: "Your Mechanic, Just Around the Corner.",
  description:
    "Find nearby mechanics, request vehicle assistance and track your service in real time with MECHFIND. Fast roadside assistance for cars and bikes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mechfind.com",
  ogImage: "/images/mechfind-logo.png",
  logo: "/images/mechfind-logo.png",
  mainNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Features", href: "/features" },
    { label: "For Mechanics", href: "/mechanics" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  footerNav: {
    platform: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "For Customers", href: "/customers" },
      { label: "For Mechanics", href: "/mechanics" },
      { label: "Tutorials", href: "/tutorials" },
    ],
    support: [
      { label: "Customer Care", href: "/customer-care" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
};

