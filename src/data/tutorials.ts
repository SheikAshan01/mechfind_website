export interface TutorialStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
}

export interface TutorialItem {
  id: string;
  title: string;
  audience: "customer" | "mechanic";
  duration: string;
  summary: string;
  videoPlaceholderUrl: string | null; // Configurable YouTube video URL
  steps: TutorialStep[];
  badge: string;
}

export const customerTutorials: TutorialItem[] = [
  {
    id: "getting-started-customer",
    title: "Getting Started with MECHFIND",
    audience: "customer",
    duration: "2 min read",
    badge: "Basics",
    summary:
      "Learn how to set up your MECHFIND account, save your primary vehicles (bikes or cars), and enable location services for immediate breakdown protection.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Download and Open the App",
        description: "Install MECHFIND on your Android or iOS device and open the application.",
      },
      {
        stepNumber: 2,
        title: "Create Your User Profile",
        description: "Enter your mobile phone number, verify your one-time passcode, and add your name.",
      },
      {
        stepNumber: 3,
        title: "Add Your Vehicle Details",
        description: "Save your vehicle make, model, and fuel type (e.g. Honda Civic, Yamaha MT-15) so technicians know what parts to prepare.",
        tip: "Adding vehicle details in advance saves precious minutes during roadside emergencies.",
      },
      {
        stepNumber: 4,
        title: "Enable Geolocation Permissions",
        description: "Allow location access while using the app to facilitate automatic roadside dispatch.",
      },
    ],
  },
  {
    id: "finding-nearby-mechanics",
    title: "Finding Nearby Mechanics",
    audience: "customer",
    duration: "3 min read",
    badge: "Discovery",
    summary:
      "Discover certified mechanics nearest to your current position, check their verified specialties, and see estimated arrival ranges.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Open the Discovery Map",
        description: "From the home screen, tap 'Find a Mechanic' to initiate an automatic perimeter scan.",
      },
      {
        stepNumber: 2,
        title: "Filter by Vehicle Type",
        description: "Filter available providers for motorcycles, cars, or heavy vehicles depending on what you are driving.",
      },
      {
        stepNumber: 3,
        title: "Inspect Technician Profiles",
        description: "Tap any mechanic marker to view their workshop identity, trade specialties, and distance from your vehicle.",
      },
    ],
  },
  {
    id: "creating-service-request",
    title: "Creating a Service Request",
    audience: "customer",
    duration: "2 min read",
    badge: "Requests",
    summary:
      "How to report your breakdown symptoms (flat tire, battery drain, starter failure, overheating) and broadcast a service request.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Select Issue Category",
        description: "Choose from common roadside issues: Flat Tire, Battery Jumpstart, Engine Stall, Brakes, or General Diagnostics.",
      },
      {
        stepNumber: 2,
        title: "Confirm Your Exact Location",
        description: "Verify your GPS pin on the map. You can adjust the pin or add specific roadside landmarks (e.g. 'Near Mile Marker 42').",
      },
      {
        stepNumber: 3,
        title: "Submit and Broadcast",
        description: "Review request summary and tap 'Request Assistance'. Nearby eligible mechanics will receive an instant dispatch ping.",
      },
    ],
  },
  {
    id: "tracking-your-mechanic",
    title: "Tracking Your Mechanic in Real Time",
    audience: "customer",
    duration: "2 min read",
    badge: "Live Tracking",
    summary:
      "Follow your technician's GPS route, monitor their estimated time of arrival, and communicate securely while waiting safely.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Job Acceptance Notification",
        description: "You will receive an alert as soon as an available mechanic reviews and accepts your request.",
      },
      {
        stepNumber: 2,
        title: "View Active Map Tracking",
        description: "Watch the technician's transit icon move along the shortest road route toward your parked location.",
      },
      {
        stepNumber: 3,
        title: "Direct Calling for Safety Instructions",
        description: "Use the built-in call feature to relay safety details or warn the technician about highway conditions.",
      },
      {
        stepNumber: 4,
        title: "Inspect and Confirm Completion",
        description: "Once repairs are completed, confirm the job digital invoice and rate your technician's assistance.",
      },
    ],
  },
];

export const mechanicTutorials: TutorialItem[] = [
  {
    id: "mechanic-registration",
    title: "Mechanic Registration & Onboarding",
    audience: "mechanic",
    duration: "4 min read",
    badge: "Partner Setup",
    summary:
      "Step-by-step walkthrough for independent mechanics and garage owners to join MECHFIND and establish their mobile service presence.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Download Partner Application",
        description: "Install the MECHFIND Partner App or access the mechanic partner registration portal.",
      },
      {
        stepNumber: 2,
        title: "Submit Professional Credentials",
        description: "Provide your government ID, trade license or automotive vocational proof, and workshop credentials.",
      },
      {
        stepNumber: 3,
        title: "Specify Tools and Vehicle Capabilities",
        description: "Select whether you operate a mobile roadside repair unit, stationary garage, or towing capability.",
      },
      {
        stepNumber: 4,
        title: "Verification Review",
        description: "Our onboarding team reviews all submitted documentation to maintain safety and service quality across the network.",
      },
    ],
  },
  {
    id: "profile-setup",
    title: "Configuring Your Professional Profile",
    audience: "mechanic",
    duration: "3 min read",
    badge: "Profile",
    summary:
      "Optimize your profile with accurate skills, accepted vehicle brands, tool capabilities, and operating radius.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Set Specializations",
        description: "Tag your core competencies: Two-wheelers, Carburetors, Fuel Injection, Automatic Transmissions, Diesel engines, EV diagnostics.",
      },
      {
        stepNumber: 2,
        title: "Define Operating Radius",
        description: "Select how many kilometers or miles you are willing to travel from your workshop base (e.g. 5 km, 10 km, 20 km).",
      },
      {
        stepNumber: 3,
        title: "Upload Workshop Pictures",
        description: "Provide photos of your mobile assistance vehicle and equipment to instill confidence in stranded drivers.",
      },
    ],
  },
  {
    id: "going-online-offline",
    title: "Going Online & Managing Availability",
    audience: "mechanic",
    duration: "2 min read",
    badge: "Availability",
    summary:
      "How to use the availability toggle to work whenever you want without penalization during busy garage hours.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Toggle Online Switch",
        description: "Slide the status button to 'Online' at the top of your partner dashboard to begin receiving live breakdown dispatches.",
      },
      {
        stepNumber: 2,
        title: "Background Geolocation",
        description: "Keep location services active so the dispatch algorithm can match you to motorists breaking down nearby.",
      },
      {
        stepNumber: 3,
        title: "Toggle Offline When Busy",
        description: "Going to lunch or working on a long engine overhaul? Simply toggle 'Offline' to pause incoming roadside calls.",
      },
    ],
  },
  {
    id: "accepting-service-requests",
    title: "Accepting & Rejecting Service Requests",
    audience: "mechanic",
    duration: "3 min read",
    badge: "Dispatches",
    summary:
      "Understand incoming breakdown requests, examine vehicle symptom notes, and accept suitable service tickets.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "Audible Breakdown Alert",
        description: "When a motorist nearby requests assistance, your phone rings with a high-priority audible dispatch banner.",
      },
      {
        stepNumber: 2,
        title: "Inspect Details Before Acceptance",
        description: "Review vehicle model, reported issue (e.g., 'Flat rear tire on SUV'), motorist location, and estimated travel time.",
      },
      {
        stepNumber: 3,
        title: "Accept or Pass",
        description: "Tap 'Accept Job' to confirm dispatch, or decline so the request immediately routes to the next closest partner.",
      },
    ],
  },
  {
    id: "managing-jobs",
    title: "Managing Jobs & In-Route Navigation",
    audience: "mechanic",
    duration: "3 min read",
    badge: "Operations",
    summary:
      "Navigate to the stranded driver, execute diagnostic protocols, update repair status, and conclude the job cleanly.",
    videoPlaceholderUrl: null,
    steps: [
      {
        stepNumber: 1,
        title: "One-Tap Turn Navigation",
        description: "Tap 'Navigate' to launch direct GPS routing to the driver's coordinates.",
      },
      {
        stepNumber: 2,
        title: "Arrival Confirmation",
        description: "Tap 'Arrived at Vehicle' to notify the customer and timestamp your on-site service start.",
      },
      {
        stepNumber: 3,
        title: "Provide Diagnosis & Estimate",
        description: "Inspect the vehicle, discuss necessary labor and spare parts with the motorist, and obtain consent before proceeding.",
      },
      {
        stepNumber: 4,
        title: "Complete Job",
        description: "Mark job finished, enter the invoice breakdown, and invite the driver to verify the repair.",
      },
    ],
  },
];
