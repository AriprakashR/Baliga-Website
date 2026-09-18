export function CertBadge({ code }: { code: string }) {
  return (
    <span
      className='inline-flex items-center border border-hazard-yellow bg-navy-dark
                      px-2 py-0.5 font-mono text-xs tracking-wide text-hazard-yellow'
    >
      {code}
    </span>
  );
}
