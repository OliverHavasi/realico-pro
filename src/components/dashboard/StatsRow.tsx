import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
  trendValue?: string;
  trendDirection?: "up" | "down";
}

export function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
      {stats.map((stat, i) => (
        <div key={`${stat.label}-${i}`} className="glass-card p-6 flex flex-col gap-3 min-h-[170px]">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 rounded-full bg-[#fdf8eb] dark:bg-[hsl(0_0%_20%)] flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-primary dark:text-primary" strokeWidth={1.5} />
            </div>
            {stat.trendValue && (
              stat.trendDirection === "up" ? (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-success/10 text-success font-semibold text-sm">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{stat.trendValue}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-destructive/10 text-destructive font-semibold text-sm">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{stat.trendValue}</span>
                </div>
              )
            )}
          </div>
          <div className="mt-auto">
            <span className="stat-number text-foreground block">{stat.value}</span>
            <span className="text-sm font-normal text-muted-foreground tracking-wide">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
