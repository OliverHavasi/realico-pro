import { Clock, ArrowRight, Star } from "lucide-react";

interface Reference {
  name: string;
  date: string;
  text: string;
  initials: string;
}

export function ReferencesSection({ references }: { references: Reference[] }) {
  return (
    <div className="glass-card p-6 lg:col-span-1">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-medium tracking-wide">Najnovšie referencie</h2>
        <button className="text-muted-foreground text-sm font-normal hover:text-foreground flex items-center gap-1 transition-colors tracking-wide">
          Všetky <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="space-y-4">
        {references.map((ref) => (
          <div key={ref.name} className="flex gap-3 py-3 border-b border-border last:border-0">
            <div className="h-10 w-10 rounded-full bg-white ring-[1.5px] ring-primary flex items-center justify-center shrink-0">
              <span className="text-sm font-semibold text-primary">{ref.initials}</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium">{ref.name}</span>
                <span className="text-xs font-normal text-muted-foreground flex items-center gap-1 tracking-wide">
                  <Clock className="h-3 w-3" /> {ref.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{ref.text}</p>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
