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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
      {stats.map((stat, i) => {
        const isPositive = (stat.change ?? 0) > 0;
        const hasChange = stat.change !== undefined && stat.change !== 0;
        return (
          <div key={`${stat.label}-${i}`} className="glass-card p-6 flex flex-col">
            <div className="flex items-start justify-between mb-6 -mt-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center -ml-[5px]">
                <stat.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              {hasChange && (
                <div className={cn(
                  "inline-flex items-center gap-1 rounded-[8px] px-2.5 py-1 font-medium text-sm -mr-[5px]",
                  isPositive
                    ? "bg-[rgba(34,179,87,0.1)] text-[#22B357]"
                    : "bg-[rgba(229,62,62,0.1)] text-[#E53E3E]"
                )}>
                  {isPositive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {Math.abs(stat.change!)}%
                </div>
              )}
            </div>
            <span className="text-4xl font-semibold tracking-tight leading-none text-foreground">{stat.value}</span>
            <span className="text-sm font-medium text-muted-foreground mt-1.5">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}
