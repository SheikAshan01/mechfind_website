export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
  highlight?: boolean;
}

export const trustValues = [
  {
    id: "nearby",
    title: "Nearby Mechanics",
    description: "Discover verified roadside mechanics positioned closest to your breakdown point to minimize wait times.",
    iconName: "Compass",
  },
  {
    id: "tracking",
    title: "Real-Time Tracking",
    description: "Monitor mechanic dispatch status, live en-route location and accurate estimated arrival time directly on your device.",
    iconName: "Navigation2",
  },
  {
    id: "verified",
    title: "Verified Professionals",
    description: "Every mechanic on the platform undergoes identity and skill credential verification for dependable roadside care.",
    iconName: "ShieldCheck",
  },
  {
    id: "requests",
    title: "Easy Service Requests",
    description: "Request assistance in seconds without lengthy paperwork—just share your breakdown spot and vehicle type.",
    iconName: "Zap",
  },
];

export const customerFeatures: FeatureItem[] = [
  {
    id: "discovery",
    title: "Nearby Mechanic Discovery",
    description: "Automatically identify mechanics operating within your immediate vicinity when vehicle issues occur.",
    iconName: "MapPin",
    tag: "Discovery",
    highlight: true,
  },
  {
    id: "breakdown-assistance",
    title: "Breakdown Assistance",
    description: "Targeted support for puncture repairs, dead battery jumps, engine stalling, fuel emergency, and towing coordination.",
    iconName: "Wrench",
    tag: "Assistance",
    highlight: true,
  },
  {
    id: "gps-location",
    title: "GPS-Based Location",
    description: "Pinpoint your vehicle's exact coordinates automatically, even if you are stranded on an unfamiliar highway or road.",
    iconName: "Crosshair",
    tag: "Location",
  },
  {
    id: "live-tracking",
    title: "Real-Time Mechanic Tracking",
    description: "Watch your assigned technician navigate towards your breakdown location on an interactive map with live ETA.",
    iconName: "Activity",
    tag: "Tracking",
    highlight: true,
  },
  {
    id: "request-management",
    title: "Service Request Management",
    description: "Submit vehicle details, describe your problem with one tap, and review quotes before work begins.",
    iconName: "FileText",
    tag: "Control",
  },
  {
    id: "service-history",
    title: "Service History",
    description: "Keep complete digital logs of all prior repairs, mechanic invoices, and assistance records for your vehicle.",
    iconName: "Clock",
    tag: "Records",
  },
  {
    id: "notifications",
    title: "Notifications & Alerts",
    description: "Receive instant updates when a mechanic accepts your job, departs their garage, or approaches your vehicle.",
    iconName: "Bell",
    tag: "Alerts",
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description: "Direct access to our dedicated customer care team whenever you need roadside guidance or mediation.",
    iconName: "Headphones",
    tag: "Support",
  },
];

export const mechanicFeatures: FeatureItem[] = [
  {
    id: "mechanic-registration",
    title: "Mechanic Registration",
    description: "Streamlined partner onboarding allowing workshops and mobile mechanics to join the platform quickly.",
    iconName: "UserCheck",
    tag: "Onboarding",
    highlight: true,
  },
  {
    id: "profile-management",
    title: "Profile Management",
    description: "Showcase your technical specialties (cars, bikes, diesels, EV diagnostics), certifications, and service area.",
    iconName: "Briefcase",
    tag: "Profile",
  },
  {
    id: "availability-toggle",
    title: "Online / Offline Availability",
    description: "Full control over your schedule. Toggle online to receive live breakdown alerts, or switch offline when busy.",
    iconName: "Power",
    tag: "Flexibility",
    highlight: true,
  },
  {
    id: "receive-requests",
    title: "Receive Service Requests",
    description: "Get immediate sound and push notifications for stranded motorists within your chosen travel perimeter.",
    iconName: "Radio",
    tag: "Dispatch",
  },
  {
    id: "accept-reject",
    title: "Accept or Reject Jobs",
    description: "Review breakdown issue, vehicle model, and distance before choosing to accept or decline the service job.",
    iconName: "CheckSquare",
    tag: "Autonomy",
    highlight: true,
  },
  {
    id: "turn-navigation",
    title: "GPS Navigation",
    description: "Integrated turn-by-turn routing takes you straight to the stranded motorist's pinned coordinates without confusion.",
    iconName: "Navigation",
    tag: "Routing",
  },
  {
    id: "job-management",
    title: "Job Management",
    description: "Manage ongoing repair statuses, mark diagnosis, itemize parts, and record job completion with digital signoff.",
    iconName: "ClipboardList",
    tag: "Operations",
  },
  {
    id: "customer-reviews",
    title: "Customer Reviews",
    description: "Build a solid professional reputation through genuine customer feedback after each completed roadside service.",
    iconName: "Star",
    tag: "Reputation",
  },
];

export const whyChoosePoints = [
  {
    id: "simple-exp",
    title: "Simple Experience",
    description: "No tedious calls or guessing where to find assistance. A straightforward interface designed for stress-free emergency response.",
    iconName: "Sparkles",
  },
  {
    id: "location-discovery",
    title: "Location-Based Discovery",
    description: "Find the mechanics genuinely closest to you, reducing waiting time on dangerous highway shoulders and remote roads.",
    iconName: "LocateFixed",
  },
  {
    id: "convenient-assistance",
    title: "Convenient Assistance",
    description: "On-demand roadside help brought directly to your stalled vehicle so you do not have to arrange costly flatbed tows unnecessarily.",
    iconName: "Truck",
  },
  {
    id: "customer-focused",
    title: "Customer-Focused Service",
    description: "Built around motorist safety, transparent communication, real-time arrival estimates, and dedicated support access.",
    iconName: "HeartHandshake",
  },
  {
    id: "easy-mechanic-access",
    title: "Easy Mechanic Access",
    description: "Connect instantly with certified two-wheeler and four-wheeler technicians without searching through scattered online directories.",
    iconName: "KeyRound",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Open MECHFIND",
    description: "Launch the MECHFIND web platform or mobile app whenever your bike or car encounters an unexpected issue.",
    iconName: "Smartphone",
  },
  {
    step: "02",
    title: "Share Your Location",
    description: "Use one-tap GPS geolocation so nearby service providers see your precise breakdown coordinates.",
    iconName: "MapPin",
  },
  {
    step: "03",
    title: "Find Nearby Mechanics",
    description: "View verified technicians nearby, inspect their specializations, and request the service tailored to your vehicle.",
    iconName: "Search",
  },
  {
    step: "04",
    title: "Get Vehicle Assistance",
    description: "Track your technician's arrival live on the map, get your vehicle inspected and repaired, and resume your trip.",
    iconName: "CheckCircle2",
  },
];
