export function HeroIllustration() {
  return (
    <svg
      viewBox='0 0 400 400'
      className='mx-auto hidden w-full max-w-sm md:block'
      aria-hidden='true'
    >
      {/* --- Measurement/Alignment Lines --- */}
      {/* Left Side Group */}
      <line
        x1='60'
        y1='60'
        x2='60'
        y2='340'
        stroke='#3A5A80'
        strokeWidth='1'
        strokeDasharray='4 4'
      />
      <line x1='50' y1='60' x2='70' y2='60' stroke='#3A5A80' strokeWidth='1' />
      <line
        x1='50'
        y1='340'
        x2='70'
        y2='340'
        stroke='#3A5A80'
        strokeWidth='1'
      />

      {/* Right Side Group */}
      <line
        x1='340'
        y1='60'
        x2='340'
        y2='340'
        stroke='#3A5A80'
        strokeWidth='1'
        strokeDasharray='4 4'
      />
      {/* Added Top Horizontal End Dash for Right Side */}
      <line
        x1='330'
        y1='60'
        x2='350'
        y2='60'
        stroke='#3A5A80'
        strokeWidth='1'
      />
      {/* Added Bottom Horizontal End Dash for Right Side */}
      <line
        x1='330'
        y1='340'
        x2='350'
        y2='340'
        stroke='#3A5A80'
        strokeWidth='1'
      />

      {/* --- Equipment Illustration --- */}
      {/* Main Flanged Enclosure (The "Ex d" body) */}
      <circle
        cx='200'
        cy='150'
        r='90'
        className='fill-navy-light'
        stroke='#FFC72C'
        strokeWidth='3'
      />
      {/* Internal Bolt Circle Reference */}
      <circle
        cx='200'
        cy='150'
        r='65'
        fill='none'
        stroke='#FFC72C'
        strokeWidth='2'
        strokeDasharray='6 4'
      />
      {/* Center Indicator (e.g., status LED or center point) */}
      <circle cx='200' cy='150' r='8' className='fill-hazard-yellow' />

      {/* Radial Metric Bolts around the main flange */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = 200 + 68 * Math.cos(angle);
        const y1 = 150 + 68 * Math.sin(angle);
        const x2 = 200 + 90 * Math.cos(angle);
        const y2 = 150 + 90 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke='#0E2A47' // Navy dark stroke for bolt head separation
            strokeWidth='2'
          />
        );
      })}

      {/* Connection Stem / Neck */}
      <rect
        x='185'
        y='235'
        width='30'
        height='60'
        className='fill-navy-light'
        stroke='#FFC72C'
        strokeWidth='2'
      />
      {/* Mounting Flange Base */}
      <rect
        x='150'
        y='290'
        width='100'
        height='16'
        className='fill-navy-light'
        stroke='#FFC72C'
        strokeWidth='2'
      />

      {/* --- Certification Label Plate --- */}
      <rect
        x='140'
        y='330'
        width='120'
        height='24'
        fill='#081A2E' // Deep Navy Dark background
        stroke='#FFC72C'
        strokeWidth='1.5'
      />
      <text
        x='200'
        y='346'
        textAnchor='middle'
        fontFamily='monospace'
        fontSize='11'
        fill='#FFC72C'
      >
        Ex d IIB T4 Gb
      </text>
    </svg>
  );
}
