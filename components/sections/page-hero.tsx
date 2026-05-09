export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-hero">
      <p className="signal"><span />{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
