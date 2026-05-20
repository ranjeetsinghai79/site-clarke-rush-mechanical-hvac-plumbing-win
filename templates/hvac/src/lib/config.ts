import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Clarke & Rush",
    tagline: "Your Comfort, Our Priority",
    phone: "(916) 609-2665",
    phoneHref: "tel:+19166092665",
    email: "info@clarkeandrush.com",
    address: "2330 Glendale Ln, Sacramento, CA 95825",
    city: "Sacramento",
    serviceAreas: ["Sacramento", "Elk Grove", "Roseville", "Folsom", "Citrus Heights", "Rancho Cordova"],
    license: "608005",
    since: "1963",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "hvac",
  },

  services: [
    { icon: "thermometer", title: "AC Repair & Installation", desc: "Expert service for all air conditioning needs, from quick repairs to new system installations.", urgent: true },
    { icon: "flame", title: "Furnace Repair & Installation", desc: "Reliable heating solutions, including furnace repair, replacement, and new system setups.", urgent: true },
    { icon: "droplets", title: "Plumbing Services", desc: "Comprehensive plumbing solutions for your home, from leak detection to water heater services.", urgent: true },
    { icon: "shield-check", title: "Indoor Air Quality", desc: "Improve your home's air with our advanced filtration and purification systems.", urgent: false },
    { icon: "home", title: "Window & Insulation", desc: "Enhance energy efficiency with professional window replacement and insulation services.", urgent: false },
    { icon: "briefcase", title: "Commercial HVAC & Plumbing", desc: "Specialized HVAC and plumbing services tailored for commercial properties and businesses.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Sacramento, CA", stars: 5, text: "Clarke & Rush saved our summer! Our AC went out on the hottest day, and their technician was here within hours. He was professional, explained everything clearly, and had us cool again in no time. The price was fair, and the service was exceptional. Highly recommend!" },
    { name: "Mark T.", location: "Elk Grove, CA", stars: 5, text: "We had a persistent leak under our sink that other plumbers couldn't fix. Clarke & Rush sent out a fantastic plumber who diagnosed the issue quickly and repaired it on the spot. He was courteous and left the area spotless. So glad we called them for our plumbing needs." },
    { name: "Jessica L.", location: "Roseville, CA", stars: 5, text: "Our old furnace was on its last leg, and we needed a replacement fast. Clarke & Rush provided a detailed quote, offered financing options, and installed a new, efficient furnace within a week. The installation team was efficient and very respectful of our home. We're warm and happy!" }
  ],

  trustBadges: [
    "NATE Certified Technicians", "GAF Master Elite Contractor", "Over 60 Years Experience", "0% Financing Available", "Sacramento Favorites Award", "24/7 Emergency Service"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 60, label: "Years in Business", suffix: "+", decimals: 0 },
    { value: 10000, label: "Happy Customers", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your comfort with prompt service and quick solutions to your HVAC and plumbing emergencies." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises here. We provide clear, honest pricing before any work begins, so you know what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and continuously educated on the latest industry standards." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your peace of mind is our goal. We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "Real Humans Answer", desc: "Speak to a helpful team member, not a machine, whenever you call – day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with essential parts and tools to complete most jobs on the first visit." }
  ],

  formServiceOptions: ["AC Repair & Installation", "Furnace Repair & Installation", "Plumbing Services", "Indoor Air Quality", "Window & Insulation", "Commercial HVAC & Plumbing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!