export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "General" | "Customers" | "Mechanics" | "App & Tracking" | "Support";
}

export const faqsData: FAQItem[] = [
  {
    id: "what-is-mechfind",
    question: "What is MECHFIND?",
    category: "General",
    answer:
      "MECHFIND is a digital platform designed to connect motorists facing vehicle breakdowns with verified nearby mechanics. Whether you ride a motorcycle or drive a car, MECHFIND helps you discover local automotive technicians, request roadside help, and coordinate vehicle assistance quickly and conveniently.",
  },
  {
    id: "how-to-find-mechanic",
    question: "How can I find a nearby mechanic?",
    category: "Customers",
    answer:
      "When using MECHFIND, enable location access or specify your breakdown spot. The platform immediately scans for registered mechanics within your radius. You can review available technicians, select your vehicle type and the issue you are experiencing, and dispatch a service request directly from the app.",
  },
  {
    id: "bikes-and-cars",
    question: "Does MECHFIND support bikes and cars?",
    category: "General",
    answer:
      "Yes. MECHFIND supports both two-wheelers (motorcycles, scooters) and four-wheelers (passenger cars, SUVs). Mechanics indicate their vehicle specializations during onboarding, ensuring you are matched with a professional equipped to diagnose and repair your specific vehicle.",
  },
  {
    id: "how-live-tracking-works",
    question: "How does live tracking work?",
    category: "App & Tracking",
    answer:
      "Once an available mechanic accepts your breakdown assistance request, GPS location sharing is activated within the MECHFIND mobile application. You can view the technician's movement along the road route, view their estimated time of arrival (ETA), and receive status alerts as they arrive at your location.",
  },
  {
    id: "mechanics-register",
    question: "How can mechanics register?",
    category: "Mechanics",
    answer:
      "Automotive technicians and workshop owners can register through the 'For Mechanics' section on our website or through the upcoming partner app. Registration involves entering your professional details, vehicle specializations (bike, car, or both), and submitting verification credentials before your profile is activated for service requests.",
  },
  {
    id: "contact-support",
    question: "How do I contact customer support?",
    category: "Support",
    answer:
      "You can contact our Customer Care hotline directly at 1234567890 (available 24/7 for assistance inquiries). You can also submit inquiries via our Customer Care and Contact Us pages or reach us via email at support@mechfind.com.",
  },
  {
    id: "android-and-ios",
    question: "Is MECHFIND available on Android and iOS?",
    category: "App & Tracking",
    answer:
      "MECHFIND is designed for both Android and iOS mobile platforms. The mobile applications are currently undergoing final testing and store review. You can request notification via the download buttons on this site to receive an instant alert as soon as the apps are published to the Google Play Store and Apple App Store.",
  },
  {
    id: "types-of-breakdowns",
    question: "What types of vehicle problems can mechanics handle on-site?",
    category: "Customers",
    answer:
      "On-site mechanics can address common roadside issues including tyre punctures and wheel changes, dead batteries requiring jumpstarts, minor electrical faults, engine overheating, fuel delivery, and fluid top-ups. If a problem requires major workshop overhaul, mechanics can help assess the situation and advise on towing options.",
  },
  {
    id: "mechanic-availability",
    question: "Can mechanics choose their working hours and service areas?",
    category: "Mechanics",
    answer:
      "Yes. Mechanic partners have complete autonomy over their availability. You can toggle your status between Online and Offline at any time using the partner app, and define your preferred operating radius so you only receive jobs you can conveniently reach.",
  },
];

