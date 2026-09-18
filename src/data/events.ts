// Full trade show, exhibition, conference and product-news archive, sourced
// from the events pages at https://www.baliga.com/events/ (pages 1-4) and
// each event's individual detail page. No upcoming events are published on
// the source site at this time — the `upcoming` bucket is intentionally
// empty rather than filled with placeholder dates. No booth/stall numbers
// were mentioned on any source page, so that field is left unset throughout.

export type EventCategory =
  | 'Trade Show'
  | 'Expo'
  | 'Conference'
  | 'Product Launch'
  | 'News';
export type EventStatus = 'upcoming' | 'past';

export interface EventItem {
  id: string;
  status: EventStatus;
  category: EventCategory;
  title: string;
  dateLabel: string;
  /** ISO date (start of range) used for sorting only. */
  startDate: string;
  location?: string;
  booth?: string;
  organizer?: string;
  description: string;
  /** Cover photo shown on the card and as the modal hero image. */
  image?: string;
  /** Additional gallery photos (beyond `image`) shown as thumbnails in the modal. */
  images?: string[];
  flyerUrl?: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 'electriexpo-2017',
    status: 'past',
    category: 'Expo',
    title: "Electriexpo '2017 — 3rd Edition of the Low Voltage Electric Expo",
    dateLabel: '6–8 Jan 2017',
    startDate: '2017-01-06',
    location: 'Hyderabad, India',
    organizer: 'HITEX & SETA',
    description:
      "Organised by HITEX (Hyderabad International Trade Expositions Limited) in association with SETA (The Secunderabad Electric Trades Association), this was the first ever exposition in Hyderabad dedicated to low-voltage electricity devices. In keeping with the energy needs of our times, the event brought under one roof the latest energy-efficient, environment-friendly and sustainable devices and products for industrial and consumer markets. Baliga made its presence felt with a stall that was visited by all the major pharmaceutical companies in Hyderabad amongst others.",
    image: '/events/electriexpo-2017.jpg',
  },
  {
    id: 'petrotech-2016',
    status: 'past',
    category: 'Conference',
    title: 'Petrotech — 12th International Oil & Gas Conference And Exhibition',
    dateLabel: '4–7 Dec 2016',
    startDate: '2016-12-04',
    organizer: 'Indian Oil Corporation & ITE Group Plc, under the Ministry of Petroleum and Natural Gas',
    description:
      "The 12th edition, jointly organised by Indian Oil Corporation and ITE Group Plc under the aegis of the Ministry of Petroleum and Natural Gas, Govt. of India, was a culmination of more than a decade of energy initiative — one of the biggest energy events of its kind in the Indian subcontinent. Baliga made its presence felt with a stall that was visited by all the Oil & Gas majors — HPCL, IOCL, BPCL amongst others.",
    image: '/events/petrotech-2016.jpg',
  },
  {
    id: 'petrosafe-2016',
    status: 'past',
    category: 'Conference',
    title: "PetroSafe '2016",
    dateLabel: '21–22 Jul 2016',
    startDate: '2016-07-21',
    location: 'Jaipur, India',
    organizer: 'Petroleum and Explosives Safety Organisation (PESO) & National Safety Council, India',
    description:
      'Held in Jaipur, organised by the Petroleum and Explosives Safety Organisation and the National Safety Council, India. Baliga took part alongside all the major companies in the Oil & Gas sector — IOCL, HPCL, BPCL, Reliance Industries, ONGC, GAIL, OPAL, Indian Oil Petronas, Indian Auto LPG, SHV Energy, Total Oil, Adani, Essar and Aegis among them.',
    image: '/events/petrosafe-2016.jpg',
  },
  {
    id: 'oil-gas-jakarta-2015',
    status: 'past',
    category: 'Trade Show',
    title:
      '10th International Oil & Gas Exploration, Production and Refining Exhibition',
    dateLabel: '9–12 Sep 2015',
    startDate: '2015-09-09',
    location: 'Jakarta, Indonesia',
    description:
      'Baliga Lighting participated in this exhibition, held from 9th to 12th September 2015 in Jakarta, Indonesia, in expectation of enhancing its list of esteemed customers.',
    image: '/events/oil-gas-jakarta-2015.jpg',
  },
  {
    id: 'automation-2012',
    status: 'past',
    category: 'Trade Show',
    title: 'Automation 2012 — 7th International Exhibition and Conference',
    dateLabel: '7–10 Sep 2012',
    startDate: '2012-09-07',
    location: 'Mumbai, India',
    description:
      'Baliga Lighting participated in the Automation 2012 exhibition and conference, held in Mumbai, India.',
    image: '/events/automation-2012.jpg',
  },
  {
    id: 'automation-2011',
    status: 'past',
    category: 'Trade Show',
    title: 'Automation 2011 — 6th International Automation Exhibition & Conference',
    dateLabel: '20–23 Sep 2011',
    startDate: '2011-09-20',
    location: 'Mumbai, India',
    description:
      'Baliga Lighting participated in this exhibition, held from 20th to 23rd September 2011 in Mumbai, India.',
    image: '/events/automation-2011.jpg',
    images: [
      '/events/automation-2011-2.jpg',
      '/events/automation-2011-3.jpg',
    ],
  },
  {
    id: 'light-india-2011',
    status: 'past',
    category: 'Expo',
    title: 'Light India International 2011 Exhibition',
    dateLabel: '4–7 Mar 2011',
    startDate: '2011-03-04',
    location: 'Chennai, India',
    description:
      'Baliga Lighting participated in this exhibition, held from 4th to 7th March 2011 in Chennai, India, in expectation of enhancing its list of esteemed customers.',
    image: '/events/light-india-2011.jpg',
    images: [
      '/events/light-india-2011-2.jpg',
      '/events/light-india-2011-3.jpg',
      '/events/light-india-2011-4.jpg',
    ],
  },
  {
    id: 'vibrant-vcci-2011',
    status: 'past',
    category: 'Expo',
    title: 'Vibrant VCCI 2011 Exhibition',
    dateLabel: '17–21 Feb 2011',
    startDate: '2011-02-17',
    location: 'Vadodara, India',
    description:
      'Baliga Lighting participated in this exhibition, held from 17th to 21st February 2011 in Vadodara, India.',
    image: '/events/vibrant-vcci-2011.jpg',
  },
  {
    id: 'engineering-expo-2010',
    status: 'past',
    category: 'Expo',
    title: 'Engineering Expo 2010',
    dateLabel: '10–13 Dec 2010',
    startDate: '2010-12-10',
    location: 'Ahmedabad, India',
    description:
      'Baliga Lighting participated in this exhibition, held from 10th to 13th December 2010 in Ahmedabad, India.',
    image: '/events/engineering-expo-2010.jpg',
    images: [
      '/events/engineering-expo-2010-2.jpg',
      '/events/engineering-expo-2010-3.jpg',
      '/events/engineering-expo-2010-4.jpg',
    ],
  },
  {
    id: 'automation-2010',
    status: 'past',
    category: 'Trade Show',
    title: 'Automation 2010 — 5th International Automation Exhibition & Conference',
    dateLabel: '21–24 Sep 2010',
    startDate: '2010-09-21',
    location: 'Mumbai, India',
    description:
      'Baliga Lighting participated in this exhibition, held from 21st to 24th September 2010 in Mumbai, India.',
    image: '/events/automation-2010.jpg',
  },
  {
    id: 'oil-gas-indonesia-2009',
    status: 'past',
    category: 'Trade Show',
    title: "Oil & Gas Indonesia '2009",
    dateLabel: '14–17 Oct 2009',
    startDate: '2009-10-14',
    location: 'Jakarta, Indonesia',
    organizer: 'Ministry of Energy & Mineral Resources, Republic of Indonesia, & UFI',
    description:
      'One of the most heavily attended events of its kind in Asia, held in Jakarta, Indonesia, with support from the Ministry of Energy & Mineral Resources of the Republic of Indonesia and UFI.',
    image: '/events/oil-gas-indonesia-2009.jpg',
  },
  {
    id: 'atex-approval-2009',
    status: 'past',
    category: 'News',
    title: 'ATEX Approval for Baliga Products',
    dateLabel: '21 May 2009',
    startDate: '2009-05-21',
    description:
      'Baliga obtained ATEX certification for the Exlite series of well-glass luminaires, control gear box and 4-way lighting junction boxes — positioning the company to expand commercial operations into the European market.',
    image: '/events/atex-approval-2009.jpg',
  },
  {
    id: 'via-industrial-expo-2009',
    status: 'past',
    category: 'Expo',
    title: '7th VIA Industrial Exhibition Expo-2009',
    dateLabel: '23–29 Jan 2009',
    startDate: '2009-01-23',
    location: 'Vapi, India',
    organizer: 'Vapi Industries Association',
    description:
      'Baliga Lighting participated in this exhibition, which attracted over 150 visitors from major industrial firms including Atul Ltd., Alok Industries Ltd. and Raymond Ltd., who discussed the company’s product range and requirements with staff on site.',
    image: '/events/via-industrial-expo-2009.jpg',
    images: [
      '/events/via-industrial-expo-2009-2.jpg',
      '/events/via-industrial-expo-2009-3.jpg',
      '/events/via-industrial-expo-2009-4.jpg',
    ],
  },
  {
    id: 'product-launch-led-exit-light-2009',
    status: 'past',
    category: 'Product Launch',
    title: 'Product Launch: Weatherproof LED-type Emergency Exit Light',
    dateLabel: '7 Jan 2009',
    startDate: '2009-01-07',
    description:
      'Baliga unveiled an outdoor-suitable emergency exit light (Cat No. WPL-1596) featuring LED technology, a polycarbonate or acrylic window, and powder-coated steel construction. It includes a Ni-Cd or Ni-MH battery providing one hour of backup power and a 3W LED cluster; an indoor, non-weatherproof version is also available on request.',
    image: '/events/product-launch-led-exit-light-2009.jpg',
  },
  {
    id: 'product-launch-radome-2008',
    status: 'past',
    category: 'Product Launch',
    title: 'Product Launch: Exp RADOME',
    dateLabel: '10 Dec 2008',
    startDate: '2008-12-10',
    description:
      'Baliga introduced the Exp RADOME, designed for hazardous environments, featuring a leak-proof FRP dome protecting radar equipment. An Exp panel houses the electrical controls that manage compressed-air purging — releasing air up to five times the dome’s inner volume initially, then maintaining positive pressure above atmospheric levels to continuously safeguard the radar from hazardous atmospheres.',
    image: '/events/product-launch-radome-2008.jpg',
  },
  {
    id: 'product-launch-clean-room-luminaire-2008',
    status: 'past',
    category: 'Product Launch',
    title: 'Product Launch: Exe Clean Room Luminaire',
    dateLabel: '4 Dec 2008',
    startDate: '2008-12-04',
    description:
      'Developed in response to customer demand, this Increased Safety clean-room light fitting operates at 230V 50Hz with CFL lamp options of 2×36W or 3×36W. Two models were introduced: the CRF-236 (2×36W) with bottom/top opening for tube replacement and anti-vibration terminals, and the CRF-336 (3×36W) with a 4mm² high-impact polycarbonate window.',
    image: '/events/product-launch-clean-room-luminaire-2008.jpg',
  },
  {
    id: 'adipec-2008',
    status: 'past',
    category: 'Trade Show',
    title: 'ADIPEC 2008',
    dateLabel: '3–6 Nov 2008',
    startDate: '2008-11-03',
    location: 'Abu Dhabi, UAE',
    description:
      'One of the world’s premier petroleum and gas exhibitions — 1,500 companies exhibited and 37,000 visitors attended from the Middle East & Africa, with opening ceremonies presided over by the Crown Prince of Abu Dhabi.',
    image: '/events/adipec-2008.jpg',
  },
  {
    id: 'sabic-2007',
    status: 'past',
    category: 'Conference',
    title: "SABIC '2007 Technical Meeting & Conference",
    dateLabel: '11 Dec 2007',
    startDate: '2007-12-11',
    location: 'Jubail Industrial City, Saudi Arabia',
    organizer: 'SABIC',
    description:
      'Baliga Lighting participated in the exhibition accompanying the SABIC Technical Meeting & Conference in Jubail Industrial City, Kingdom of Saudi Arabia, with visitors attending from SABIC Group companies and Shell companies across the Eastern Region.',
    image: '/events/sabic-2007.jpg',
  },
  {
    id: 'lpg-forum-capetown-2007',
    status: 'past',
    category: 'Conference',
    title: '20th World LPG Association Forum',
    dateLabel: '24 Oct 2007',
    startDate: '2007-10-24',
    location: 'Cape Town, South Africa',
    organizer: 'World Liquid Petroleum Gas Association',
    description:
      'Baliga Lighting participated in this LPG forum focused on the African market, where around 180 companies — ranging up to super-major energy corporations — took part.',
    image: '/events/lpg-forum-capetown-2007.jpg',
  },
  {
    id: 'hannover-fair-2006',
    status: 'past',
    category: 'Trade Show',
    title: 'Hannover Technology Fair',
    dateLabel: '24–28 Apr 2006',
    startDate: '2006-04-24',
    location: 'Hannover, Germany',
    description:
      'India participated as the partner nation at this technology fair, jointly inaugurated by the Prime Minister of India, Dr. Manmohan Singh, and German Chancellor Dr. Angela Merkel. The fair drew participation from over 5,200 companies across 70 countries, including 370 Indian enterprises.',
    image: '/events/hannover-fair-2006.jpg',
  },
  {
    id: 'petrotech-2006',
    status: 'past',
    category: 'Conference',
    title: "Petrotech '2006 — 5th Middle East Exhibition and Conference for Refining & Petrochem",
    dateLabel: '18 Jan 2006',
    startDate: '2006-01-18',
    location: 'Bahrain',
    description:
      "Held under the patronage of Prime Minister Shaikh Khalifa Bin Salman Al Khalifa, reflecting the Government of the Kingdom of Bahrain's support for the Oil & Gas industry.",
    image: '/events/petrotech-2006.jpg',
  },
];
