import { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

export function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
      {stats.map((stat, i) => (
        <div key={`${stat.label}-${i}`} className="glass-card p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-normal text-muted-foreground tracking-wide">{stat.label}</span>
            <div className="h-12 w-12 rounded-full bg-[hsl(var(--icon-bg))] dark:bg-[hsl(0_0%_20%)] flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-primary dark:text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <span className="stat-number text-foreground">{stat.value}</span>
          <span className="text-xs font-normal text-muted-foreground tracking-wide">{stat.trend}</span>
        </div>
      ))}
    </div>
  );
}
