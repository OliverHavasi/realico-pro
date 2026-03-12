import { Home, ArrowRight } from "lucide-react";

interface Property {
  title: string;
  location: string;
  price: string;
  date: string;
  agent: string;
}

export function LatestSalesSection({ properties }: { properties: Property[] }) {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-medium tracking-wide">Najnovší predaj</h2>
        <button className="text-muted-foreground text-sm font-normal hover:text-foreground flex items-center gap-1 transition-colors tracking-wide">
          Prejsť na predaje <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
        {properties.map((property) => (
          <div
            key={property.title}
            className="bg-secondary rounded-[var(--radius)] p-4 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            <div className="h-40 bg-muted rounded-[8px] mb-3 flex items-center justify-center">
              <Home className="h-8 w-8 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <p className="text-xs font-normal text-muted-foreground tracking-wide">
              {property.date} · {property.agent}
            </p>
            <h3 className="text-sm font-medium mt-1 line-clamp-1 text-foreground">{property.title}</h3>
            <p className="text-xs text-muted-foreground tracking-wide">{property.location}</p>
            <p className="text-muted-foreground font-medium mt-2 text-sm tracking-wide">Počet bodov: {property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
