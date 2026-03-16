import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
  change?: number;
}

export function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
      {stats.map((stat, i) => {
        const isPositive = (stat.change ?? 0) > 0;
        const hasChange = stat.change !== undefined && stat.change !== 0;
        return (
          <div key={`${stat.label}-${i}`} className="glass-card p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-full bg-[#fdf8eb] dark:bg-[hsl(0_0%_20%)] flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary dark:text-primary" strokeWidth={1.5} />
              </div>
              {hasChange && (
                <div className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                  isPositive
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                )}>
                  {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {Math.abs(stat.change!)}%
                </div>
              )}
            </div>
            <span className="stat-number text-foreground">{stat.value}</span>
            <span className="text-sm font-normal text-muted-foreground tracking-wide">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}
