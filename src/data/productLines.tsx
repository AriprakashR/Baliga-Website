// The four core product lines — shared between the Hero slider and the
// homepage product carousel so both stay in sync automatically.
export const PRODUCT_LINES = [
  {
    name: 'Explosion-Proof Lighting',
    href: '/products',
    image: '/products/Explosion_Proof_Lighting.jpg',
    heroImage: '/hero/explosion_proof_lighting_bg_panel.png',
    tagline: 'Engineered for the explosive environment',
    description:
      'Luminaires, control gear, lighting & FRP junction boxes, switches, plug & sockets, starters, and cable glands.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <circle cx='24' cy='20' r='12' stroke='currentColor' strokeWidth='1.6' />
        <path
          d='M18 32h12M20 38h8'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinecap='round'
        />
        <path
          d='M24 8v4M12 20h-4M40 20h-4M15.5 11.5l-2.8-2.8M32.5 11.5l2.8-2.8'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    name: 'Communication Systems',
    href: '/products?category=communication',
    image: '/products/Communication_Systems.jpg',
    heroImage: '/hero/communication_systems_bg_panel.png',
    tagline: 'Stay connected, even in Zone 1',
    description:
      'Explosion-proof communication equipment for hazardous industrial sites.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <rect x='14' y='8' width='20' height='32' rx='2' stroke='currentColor' strokeWidth='1.6' />
        <circle cx='24' cy='33' r='1.6' fill='currentColor' />
        <path
          d='M18 15h12M18 20h12M18 25h8'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    name: 'Panels & Enclosures',
    href: '/products?category=control-stations',
    image: '/products/Panels_&_Enclosures.jpg',
    heroImage: '/hero/panels_&_enclosures_bg_panel.png',
    tagline: 'Control panels built for extreme conditions',
    description:
      'Control stations, panels, monitors, and purging systems for flameproof installations.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <rect x='9' y='9' width='30' height='30' rx='2' stroke='currentColor' strokeWidth='1.6' />
        <path d='M9 19h30M19 9v30M29 9v10' stroke='currentColor' strokeWidth='1.4' />
        <circle cx='24' cy='29' r='4' stroke='currentColor' strokeWidth='1.4' />
      </svg>
    ),
  },
  {
    name: 'Flow Measuring Equipment',
    href: '/products?category=flow-measurement',
    image: '/products/Flow_Measuring_Equipment.jpg',
    heroImage: '/hero/flow_measuring_equipment_bg_panel.png',
    tagline: 'Precision measurement under pressure',
    description:
      'Orifice plates, meter runs, venturi tubes, flow nozzles, and multistage assemblies.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <circle cx='24' cy='24' r='15' stroke='currentColor' strokeWidth='1.6' />
        <path d='M24 24l7-9' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' />
        <circle cx='24' cy='24' r='1.8' fill='currentColor' />
        <path
          d='M24 12v2M24 34v2M12 24h2M34 24h2'
          stroke='currentColor'
          strokeWidth='1.2'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
];
