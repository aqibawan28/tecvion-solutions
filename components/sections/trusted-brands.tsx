import { Sparkle } from "lucide-react";

const clients = ["TechLaunch", "Brew & Co.", "NovaMed", "Stackify AI", "Luxe Retail", "FoodFirst", "UrbanNest", "Zenfin"];

export function TrustedBrands() {
  return (
    <section className="client-strip">
      <p>Trusted by startups, premium brands, and businesses across 12+ industries worldwide.</p>
      <div>{[...clients, ...clients].map((client, i) => <span key={`${client}-${i}`}><Sparkle size={14} />{client}</span>)}</div>
    </section>
  );
}
