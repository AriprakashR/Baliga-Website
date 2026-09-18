export function PagePlaceholder({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-hazard-orange">Under Construction</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-navy">{title}</h1>
      {description && <p className="mt-4 text-steel-500">{description}</p>}
    </div>
  );
}
