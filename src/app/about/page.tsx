import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Cog,
  Cpu,
  ExternalLink,
  FileText,
  GraduationCap,
  Globe,
  HandHeart,
  Layers,
  Lightbulb,
  MapPin,
  Repeat2,
  Scale,
  ShieldCheck,
  SprayCan,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import {
  AboutRoadmap,
  type RoadmapStep,
} from '@/components/about/AboutRoadmap';
import { Reveal } from '@/components/about/Reveal';

export const metadata: Metadata = { title: 'About Us' };

const STEPS: RoadmapStep[] = [
  { id: 'profile', label: 'Profile', available: true },
  { id: 'philosophy', label: 'Philosophy', available: true },
  { id: 'quality', label: 'Quality Policy', available: true },
  { id: 'certifications', label: 'Certifications', available: true },
  { id: 'infrastructure', label: 'Infrastructure', available: true },
];

const PROFILE_STATS = [
  { value: '1960', label: 'Founded by Mr. U.N. Baliga' },
  { value: '4,200 m²', label: 'Chennai manufacturing facility' },
  { value: '25,000 m²', label: 'Total plot area' },
  { value: '4', label: 'Branch & agent locations' },
];

const MILESTONES = [
  {
    year: '1960',
    text: 'Founded by Mr. U.N. Baliga, manufacturing industrial, commercial and domestic luminaires from a 460 sq. m facility.',
  },
  {
    year: '1962',
    text: 'Pioneered the manufacture of explosion-proof lighting equipment in India — the start of our specialisation in hazardous-area engineering.',
  },
  {
    year: 'Foundry',
    text: 'Acquired an in-house foundry in Chennai, adopting just-in-time practices for tighter control over casting quality.',
  },
  {
    year: 'Today',
    text: 'A 4,200 sq. m facility on a 25,000 sq. m plot, with branch offices in Mumbai, Vadodara and Pune, and an international presence via Dubai.',
  },
];

const SERVICES = [
  { icon: ShieldCheck, label: 'Area Classification Advisory' },
  { icon: GraduationCap, label: 'Maintenance Training' },
  { icon: Lightbulb, label: 'Lighting Layout Design' },
];

const CORE_VALUES = [
  { icon: Globe, label: 'Respect', text: 'For the society and environment we operate in.' },
  { icon: ShieldCheck, label: 'Quality', text: 'Uncompromising commitment in every product shipped.' },
  { icon: Scale, label: 'Ethics', text: 'Business conducted with fairness and integrity.' },
  { icon: Users, label: 'Loyalty', text: 'Long-standing employees valued as family.' },
  { icon: Repeat2, label: 'Kaizen', text: 'Continuous improvement through incremental innovation.' },
  { icon: Lightbulb, label: 'Responsiveness', text: 'Customer-first thinking paired with innovation.' },
  { icon: HandHeart, label: 'Gratitude', text: 'Genuine appreciation for every stakeholder.' },
];

const QUALITY_PILLARS = [
  {
    icon: TrendingUp,
    label: 'Continual Improvement',
    text: 'Ongoing refinement of manufacturing systems and processes.',
  },
  {
    icon: Cpu,
    label: 'Technology Development',
    text: 'Keeping pace with advances in manufacturing technology.',
  },
  {
    icon: ClipboardCheck,
    label: 'QMS Compliance',
    text: 'Adherence to Quality Management System requirements.',
  },
  {
    icon: Users,
    label: 'Total Employee Involvement',
    text: 'Quality treated as a shared responsibility, not one department’s job.',
  },
];

const CERTIFICATIONS = [
  {
    id: 'atex',
    code: 'ATEX',
    name: 'ATEX Directive',
    bg: 'bg-white',
    image: 'https://www.baliga.com/images/atex-certification.png',
    pdf: 'https://www.baliga.com/images/pdf/ATEX-Certification.pdf',
    description:
      'Initiated by the European Union, ATEX has been in force as a directive since 1 July 2003 throughout the EEC. It is a mandatory requirement for all equipment intended for use in a hazardous area within European countries.',
    points: [
      'Addresses the essential safety requirements for hazardous-area equipment',
      'Uses harmonised standards as the method of conforming to those requirements',
      'Requires technical documentation so users are informed of correct installation and use',
    ],
  },
  {
    id: 'iecex',
    code: 'IECEx',
    name: 'IECEx System',
    bg: 'bg-mist',
    image: 'https://www.baliga.com/images/iecex-certification.png',
    pdf: 'https://www.baliga.com/images/pdf/IECEX-Certification.pdf',
    description:
      'The IECEx System provides global acceptance for equipment built for explosive atmospheres by complying with IEC standards, reducing the need for repeat testing across markets.',
    points: [
      'Facilitates national compliance with Ex product requirements',
      'Enables international trade of Ex-certified equipment',
      'Backed by IEC standards recognised across member countries',
    ],
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    bg: 'bg-white',
    image: 'https://www.baliga.com/images/ISO9001-2015-Certification.png',
    pdf: 'https://www.baliga.com/images/pdf/ISO9001-2015-Certification.pdf',
    description:
      'ISO 9001 is maintained by the International Organization for Standardization (ISO) and administered through accreditation and certification bodies, governing how our manufacturing is managed end to end.',
    points: [
      'Established procedures covering all key business processes',
      'Monitoring mechanisms that ensure process effectiveness',
      'Adequate record maintenance',
      'Output inspection for defects, with corrective measures',
      'Regular review of process and system effectiveness',
      'A framework for continuous improvement',
    ],
  },
];

const INFRA_LOCATIONS = [
  'Registered office & factory — Kovilambakkam, Chennai',
  'Head office — Alwarpet, Chennai (Finance & Accounts)',
  'Branch offices — Mumbai, Vadodara, Pune',
  'International agent — Fortune Controls & Automation, Dubai (UAE)',
];

const INFRA_STATS = [
  { value: '660 m²', label: 'Warehouse, with modern material handling' },
  { value: '5', label: 'Dedicated manufacturing divisions' },
];

const MANUFACTURING_DIVISIONS = [
  {
    icon: Cog,
    label: 'Machine Shop',
    text: 'Imported vertical machining centres, CNC turning centres and lathes.',
  },
  {
    icon: SprayCan,
    label: 'Paint Shop',
    text: 'Spray painting and powder coating for corrosion-resistant finishes.',
  },
  {
    icon: Layers,
    label: 'Glass Pasting',
    text: 'Cementing toughened glass to cast-aluminium enclosure bodies.',
  },
  {
    icon: CircuitBoard,
    label: 'Panel Assembly',
    text: 'Electrical component assembly with in-process testing.',
  },
  {
    icon: Zap,
    label: 'Electrical & Electronics',
    text: 'Assembly of electrical and electronic sub-systems.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            ABOUT BALIGA
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Six Decades of Hazardous-Area Engineering
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Founded in 1960 and based in Chennai, India, Baliga has manufactured
            explosion-proof and waterproof electrical equipment since pioneering
            the category in India in 1962.
          </p>
        </div>
      </section>

      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 md:py-24 lg:flex lg:items-start lg:gap-16'>
        <AboutRoadmap steps={STEPS} />

        <div className='min-w-0 flex-1'>
          <section id='profile' className='scroll-mt-28'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
              <Reveal>
                <span className='font-display text-xs tracking-widest text-amber-600'>
                  PROFILE
                </span>
                <h2 className='mt-4 font-display text-3xl font-bold text-navy-900'>
                  Six Decades Building India&rsquo;s Explosion-Proof Standard
                </h2>
                <p className='mt-6 font-body normal-case text-steel text-base leading-relaxed'>
                  Baliga Lighting Equipments Pvt. Ltd. began in 1960 as a modest
                  venture manufacturing industrial, commercial and domestic
                  luminaires. In 1962, the company innovatively designed and
                  pioneered the manufacture of explosion-proof lighting
                  equipment in India — a category it has specialised in ever
                  since.
                </p>
                <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
                  Over more than 45 years, Baliga transitioned from a luminaire
                  manufacturer into a full-fledged explosion-proof equipment
                  manufacturer, becoming an industry benchmark among Indian
                  flameproof equipment makers. To maintain tighter control over
                  casting quality and just-in-time delivery, the company later
                  acquired its own foundry in Chennai.
                </p>
                <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
                  Beyond manufacturing, Baliga supports customers with area
                  classification advisory, maintenance training and lighting
                  layout design — backed by branch offices in Mumbai, Vadodara
                  and Pune, with agents and dealers serving customers across
                  India and internationally through Dubai.
                </p>

                <ul className='mt-8 space-y-5 border-l border-line pl-6'>
                  {MILESTONES.map(m => (
                    <li key={m.year} className='relative'>
                      <span className='absolute -left-7 top-2 h-2 w-2 rounded-full bg-amber-500' />
                      <span className='font-mono text-xs tracking-wide text-amber-600'>
                        {m.year}
                      </span>
                      <p className='mt-1 text-sm text-ink leading-relaxed'>
                        {m.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className='delay-150'>
                <div className='grid grid-cols-2 gap-6'>
                  {PROFILE_STATS.map(stat => (
                    <div
                      key={stat.label}
                      className='nameplate flex-col items-start text-navy-900 py-6'
                    >
                      <span className='font-mono text-2xl md:text-3xl font-semibold'>
                        {stat.value}
                      </span>
                      <span className='text-xs text-steel normal-case tracking-normal mt-1'>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className='mt-8 rounded-sm border border-line bg-mist p-6'>
                  <div className='flex items-center gap-2 text-navy-900'>
                    <Building2 size={18} className='text-amber-600' />
                    <span className='font-display text-sm font-semibold'>
                      What We Offer Beyond Manufacturing
                    </span>
                  </div>
                  <ul className='mt-4 space-y-3'>
                    {SERVICES.map(s => (
                      <li
                        key={s.label}
                        className='flex items-center gap-3 rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink transition-colors hover:border-amber-500'
                      >
                        <s.icon size={16} className='shrink-0 text-amber-600' />
                        {s.label}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href='/contact'
                  className='mt-6 flex items-center gap-2 rounded-sm border border-line bg-white p-4 text-sm text-steel transition-colors hover:border-amber-500'
                >
                  <MapPin
                    size={16}
                    className='mt-0.5 shrink-0 text-amber-600'
                  />
                  Registered office &amp; factory — Kovilambakkam, Chennai
                </Link>
              </Reveal>
            </div>
          </section>

          <section id='philosophy' className='scroll-mt-28 mt-20 border-t border-line pt-20'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
              <Reveal>
                <span className='font-display text-xs tracking-widest text-amber-600'>
                  PHILOSOPHY
                </span>
                <h2 className='mt-4 font-display text-3xl font-bold text-navy-900'>
                  Guided by Ethics, Loyalty and Continuous Improvement
                </h2>

                <blockquote className='mt-6 border-l-2 border-amber-500 pl-6 font-display text-lg italic text-navy-900'>
                  &ldquo;We are committed to respect the society and the
                  environment to which we belong, and to deliver value
                  engineered products to our clients.&rdquo;
                </blockquote>

                <div className='mt-8 space-y-4'>
                  <div className='rounded-sm border border-line bg-mist p-6'>
                    <span className='font-display text-xs font-semibold tracking-widest text-navy-900'>
                      MISSION
                    </span>
                    <p className='mt-2 font-body normal-case text-steel text-sm leading-relaxed'>
                      To offer our customers a complete range of
                      explosion-proof equipment of world-class quality, and to
                      be recognised as the leaders in India in this field.
                    </p>
                  </div>
                  <div className='rounded-sm border border-line bg-mist p-6'>
                    <span className='font-display text-xs font-semibold tracking-widest text-navy-900'>
                      VISION
                    </span>
                    <p className='mt-2 font-body normal-case text-steel text-sm leading-relaxed'>
                      To offer an extensive range of explosion-proof
                      equipment, maintain our leadership position in India,
                      and grow our presence in the South East Asian market.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal className='delay-150'>
                <span className='font-display text-xs font-semibold tracking-widest text-navy-900'>
                  CORE VALUES
                </span>
                <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {CORE_VALUES.map(v => (
                    <div
                      key={v.label}
                      className='rounded-sm border border-line bg-white p-4 transition-colors hover:border-amber-500'
                    >
                      <v.icon size={18} className='text-amber-600' />
                      <span className='mt-3 block font-display text-sm font-semibold text-navy-900'>
                        {v.label}
                      </span>
                      <p className='mt-1 text-xs text-steel leading-relaxed'>
                        {v.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section id='quality' className='scroll-mt-28 mt-20 border-t border-line pt-20'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
              <Reveal>
                <span className='font-display text-xs tracking-widest text-amber-600'>
                  QUALITY POLICY
                </span>
                <h2 className='mt-4 font-display text-3xl font-bold text-navy-900'>
                  Quality Built Into Every Process, Not Just the Product
                </h2>

                <blockquote className='mt-6 border-l-2 border-amber-500 pl-6 font-display text-lg italic text-navy-900'>
                  &ldquo;Baliga Lighting Equipments Private Limited is
                  committed to enhancing customer satisfaction by continually
                  improving our processes through improvement in manufacturing
                  systems, technology developments &amp; by complying with
                  Quality Management System requirements with total employee
                  involvement.&rdquo;
                </blockquote>

                <div className='mt-8 rounded-sm border border-line bg-white p-4 text-sm text-steel'>
                  Our Quality Management System is certified to{' '}
                  <span className='font-semibold text-navy-900'>
                    ISO 9001:2015
                  </span>
                  . Sector-specific hazardous-area certifications are covered
                  next, under Certifications &amp; Accreditations.
                </div>
              </Reveal>

              <Reveal className='delay-150'>
                <span className='font-display text-xs font-semibold tracking-widest text-navy-900'>
                  HOW WE DELIVER ON IT
                </span>
                <div className='mt-4 space-y-4'>
                  {QUALITY_PILLARS.map(p => (
                    <div
                      key={p.label}
                      className='flex items-start gap-4 rounded-sm border border-line bg-white p-4 transition-colors hover:border-amber-500'
                    >
                      <p.icon
                        size={18}
                        className='mt-0.5 shrink-0 text-amber-600'
                      />
                      <div>
                        <span className='font-display text-sm font-semibold text-navy-900'>
                          {p.label}
                        </span>
                        <p className='mt-1 text-xs text-steel leading-relaxed'>
                          {p.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='nameplate mt-6 text-navy-900'>
                  <span className='text-sm font-medium tracking-wide'>
                    ISO 9001:2015
                  </span>
                </div>
              </Reveal>
            </div>
          </section>

          <section id='certifications' className='scroll-mt-28 mt-20 border-t border-line pt-20'>
            <Reveal>
              <span className='font-display text-xs tracking-widest text-amber-600'>
                CERTIFICATIONS &amp; ACCREDITATIONS
              </span>
              <h2 className='mt-4 font-display text-3xl font-bold text-navy-900'>
                Certified to the Standards That Matter in Hazardous Areas
              </h2>
              <p className='mt-6 max-w-2xl font-body normal-case text-steel text-base leading-relaxed'>
                Every product leaving our Chennai facility is built to
                internationally recognised standards for hazardous-area
                equipment, verified by three certifications.
              </p>
            </Reveal>

            <div className='mt-10 space-y-8'>
              {CERTIFICATIONS.map(cert => (
                <Reveal key={cert.id}>
                  <div
                    className={`grid md:grid-cols-2 gap-10 items-start rounded-sm border border-line p-8 ${cert.bg}`}
                  >
                    <div>
                      <div className='nameplate text-navy-900'>
                        <span className='text-sm font-medium tracking-wide'>
                          {cert.code}
                        </span>
                      </div>
                      <h3 className='mt-4 font-display text-xl font-bold text-navy-900 normal-case'>
                        {cert.name}
                      </h3>
                      <p className='mt-3 font-body normal-case text-steel text-sm leading-relaxed'>
                        {cert.description}
                      </p>

                      <a
                        href={cert.pdf}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group mt-6 flex items-center gap-4 rounded-sm border border-line bg-white p-4 transition-colors hover:border-amber-500'
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.image}
                          alt={`${cert.name} certificate`}
                          className='h-16 w-16 shrink-0 rounded-sm border border-line bg-white object-contain p-1'
                        />
                        <span className='flex items-center gap-2 font-display text-sm font-semibold text-navy-900 group-hover:text-amber-600'>
                          <FileText size={16} />
                          View Certificate (PDF)
                          <ExternalLink size={14} />
                        </span>
                      </a>
                    </div>

                    <ul className='space-y-3'>
                      {cert.points.map(point => (
                        <li
                          key={point}
                          className='flex items-start gap-3 rounded-sm border border-line bg-white p-4 text-sm text-ink transition-colors hover:border-amber-500'
                        >
                          <CheckCircle2
                            size={16}
                            className='mt-0.5 shrink-0 text-amber-600'
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id='infrastructure' className='scroll-mt-28 mt-20 border-t border-line pt-20'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
              <Reveal>
                <span className='font-display text-xs tracking-widest text-amber-600'>
                  INFRASTRUCTURE
                </span>
                <h2 className='mt-4 font-display text-3xl font-bold text-navy-900'>
                  Built for Precision, From Casting to Final Assembly
                </h2>
                <p className='mt-6 font-body normal-case text-steel text-base leading-relaxed'>
                  Every business activity, from order processing to
                  dispatch, runs on an ERP system across LAN-connected
                  workstations, backed by a well-defined organisation
                  structure with a structured reporting pattern.
                </p>
                <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
                  Castings are quality-checked using simulation software that
                  exerts internal hydraulic pressure to verify integrity,
                  overseen by dedicated QC, Engineering &amp; Design, and
                  Panel Design functions.
                </p>

                <ul className='mt-8 space-y-3'>
                  {INFRA_LOCATIONS.map(loc => (
                    <li
                      key={loc}
                      className='flex items-start gap-2 text-sm text-ink'
                    >
                      <MapPin
                        size={16}
                        className='mt-0.5 shrink-0 text-amber-600'
                      />
                      {loc}
                    </li>
                  ))}
                </ul>

                <Link
                  href='/contact'
                  className='mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-900 hover:text-amber-600'
                >
                  View facility location on the map
                  <ArrowRight size={16} />
                </Link>
              </Reveal>

              <Reveal className='delay-150'>
                <span className='font-display text-xs font-semibold tracking-widest text-navy-900'>
                  MANUFACTURING DIVISIONS
                </span>
                <div className='mt-4 space-y-4'>
                  {MANUFACTURING_DIVISIONS.map(d => (
                    <div
                      key={d.label}
                      className='flex items-start gap-4 rounded-sm border border-line bg-white p-4 transition-colors hover:border-amber-500'
                    >
                      <d.icon
                        size={18}
                        className='mt-0.5 shrink-0 text-amber-600'
                      />
                      <div>
                        <span className='font-display text-sm font-semibold text-navy-900'>
                          {d.label}
                        </span>
                        <p className='mt-1 text-xs text-steel leading-relaxed'>
                          {d.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-6 grid grid-cols-2 gap-6'>
                  {INFRA_STATS.map(stat => (
                    <div
                      key={stat.label}
                      className='nameplate flex-col items-start text-navy-900 py-6'
                    >
                      <span className='font-mono text-2xl md:text-3xl font-semibold'>
                        {stat.value}
                      </span>
                      <span className='text-xs text-steel normal-case tracking-normal mt-1'>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
