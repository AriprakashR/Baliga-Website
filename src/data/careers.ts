// Current vacancies sourced from https://baliga.com/jobs/ and each job's
// detail page (/jobs/view/{id}). Re-check that page when postings change —
// this file is not auto-synced.

export type JobDepartment =
  | 'Accounts'
  | 'Customer Support'
  | 'Purchase'
  | 'Instrumentation'
  | 'Panel Division';

export const JOB_DEPARTMENTS: JobDepartment[] = [
  'Accounts',
  'Customer Support',
  'Purchase',
  'Instrumentation',
  'Panel Division',
];

export interface JobOpening {
  id: string;
  title: string;
  department: JobDepartment;
  openings: number;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const JOBS: JobOpening[] = [
  {
    id: 'assistant-officer-accounts',
    title: 'Assistant Officer - Accounts',
    department: 'Accounts',
    openings: 3,
    location: 'Alwarpet, Chennai',
    experience: 'Min. 3 years in a manufacturing company',
    summary:
      'Handle day-to-day accounts, sales tax and salary accounting for a manufacturing unit, working closely with Tally and MS Excel.',
    responsibilities: [
      'Maintain day-to-day accounting entries and reconciliations',
      'Handle Sales Tax and Salary Accounting',
      'Prepare reports and statements in MS Excel and Tally',
    ],
    qualifications: [
      'B.Com minimum; Inter CA / ICWA preferred',
      'Proficiency in MS Excel and Tally 9.1',
      'Age below 35 years',
      'Must reside within 10 km of Alwarpet',
    ],
  },
  {
    id: 'customer-service-engineer',
    title: 'Customer Service Engineer',
    department: 'Customer Support',
    openings: 3,
    location: 'Chennai',
    experience: '2 years',
    summary:
      'Coordinate post-order activities — from manufacturing readiness to dispatch documentation — and act as the customer liaison through delivery.',
    responsibilities: [
      'Coordinate with manufacturing and quality control on material readiness',
      'Process order acceptance documents in the ERP system',
      'Prepare dispatch documentation per customer specifications',
      'Arrange third-party inspections when required',
      'Submit technical drawings and follow up on approvals',
      'Monitor delivery timelines',
      'Maintain ISO documentation and monthly/yearly MIS reports',
    ],
    qualifications: [
      'Engineering degree or diploma',
      'Prior experience in the electrical industry, ideally in sales',
      'Strong interpersonal and communication skills',
      'Proficient in MS Office with technical writing ability',
      'Understanding of commercial/regulatory matters (excise, tax structures)',
    ],
  },
  {
    id: 'assistant-purchase-manager',
    title: 'Assistant Purchase Manager',
    department: 'Purchase',
    openings: 1,
    location: 'Chennai',
    experience: '8 to 10 years',
    summary:
      'Own material requirement planning, vendor negotiation and inventory control for the purchase function, leading the purchase and stores teams.',
    responsibilities: [
      'Material requirement planning and procurement; scheduling material stock',
      'Negotiate supplier terms to optimize cost',
      'Manage capital purchases and inventory control',
      'Ensure timely material delivery to manufacturing units',
      'Coordinate ISO documentation and quality feedback from production and stores',
    ],
    qualifications: [
      'PG Diploma in Material Management, or degree in Engineering / Arts / Science',
      'Proficient in MS Office and ERP systems',
      'Fluent in English, Tamil and Hindi',
      'Demonstrated leadership managing cross-functional teams',
    ],
  },
  {
    id: 'sales-coordinator-instrumentation',
    title: 'Sales Coordinator - Instrumentation',
    department: 'Instrumentation',
    openings: 1,
    location: 'Chennai',
    experience: '2 – 5 years',
    summary:
      'Support the Instrumentation sales function with quotations, vendor registrations and customer follow-up on payments and compliance.',
    responsibilities: [
      'Prepare quotations and handle documentation / admin tasks',
      'Manage vendor registration processes for clients',
      'Follow up with customers on quotations, payments and compliance forms',
      'Coordinate between production and quality control teams',
      'Prepare monthly and yearly MIS reports',
    ],
    qualifications: [
      "Bachelor's degree in Science (Physics, Chemistry or Mathematics)",
      'Background in industrial sales coordination',
      'Strong interpersonal and communication skills',
      'Proficient in MS Office with technical writing ability',
    ],
  },
  {
    id: 'panel-design-engineer',
    title: 'Panel Design Engineer',
    department: 'Panel Division',
    openings: 1,
    location: 'Chennai',
    experience: '4-5 years',
    summary:
      'Design WP and Exd panels — from single line diagrams and enclosure selection through wiring diagrams, BOMs and procurement coordination.',
    responsibilities: [
      'Analyze electrical single line diagrams and select enclosures for WP and Exd panels',
      'Perform panel costing calculations',
      'Create wiring diagrams and assembly work instructions',
      'Prepare Bill of Materials and coordinate with procurement',
      'Maintain ISO documentation',
    ],
    qualifications: [
      'Diploma or degree in Electrical Engineering',
      'Mandatory AutoCAD proficiency (EL CAD preferred)',
      'Working knowledge of IS 13947 and IS 8623 standards',
      'Deep knowledge of MCCBs, ACBs, MCBs, ELCBs and LT switchgear',
    ],
  },
];
