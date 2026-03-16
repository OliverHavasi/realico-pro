import { Eye } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import featuredImg from "@/assets/featured_property.jpg";

const formatYAxis = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return value.toString();
};

interface ChartDataPoint {
  name: string;
  views: number;
}

export function ChartSection({ chartData }: { chartData: ChartDataPoint[] }) {
  const [period, setPeriod] = useState<"rok" | "mesiac">("rok");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
      <div className="glass-card p-6 lg:col-span-7">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium tracking-wide">Štatistika zobrazení inzerátov</h2>
            <p className="text-sm text-muted-foreground font-normal tracking-wide">Celkový počet zobrazení: <span className="font-semibold text-foreground">456</span></p>
          </div>
          <div className="flex gap-3 bg-secondary/60 rounded-full p-1">
            <button
              onClick={() => setPeriod("rok")}
              className={cn(
                "px-4 py-2 rounded-full font-medium text-sm transition-all duration-200",
                period === "rok"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              Rok
            </button>
            <button
              onClick={() => setPeriod("mesiac")}
              className={cn(
                "px-4 py-2 rounded-full font-medium text-sm transition-all duration-200",
                period === "mesiac"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              Mesiac
            </button>
          </div>
        </div>
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F3C300" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F3C300" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 0% / 0.05)" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }} axisLine={false} tickLine={false} />
              <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12, fill: "hsl(0 0% 45%)" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid hsl(0 0% 0% / 0.06)",
                  boxShadow: "0 8px 24px -6px hsl(0 0% 0% / 0.1)",
                  fontSize: "13px",
                }}
              />
              <Area type="monotone" dataKey="views" stroke="#F3C300" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Featured Property Card */}
      <div className="lg:col-span-3 rounded-[var(--radius)] bg-card shadow-card overflow-hidden transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-card-hover flex flex-col">
        <div className="relative flex-1 min-h-[240px] overflow-hidden rounded-t-[var(--radius)]">
          <img src={featuredImg} alt="Rodinný dom, Bratislava" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="px-4 py-1.5 text-xs font-medium rounded-full bg-primary text-primary-foreground shadow-primary">
              Najobľúbenejšia nehnuteľnosť
            </span>
            <h3 className="text-white text-2xl font-semibold mt-3">Rodinný dom, Bratislava</h3>
            <p className="text-white/80 font-normal mt-1">Staré Mesto · 185 m²</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-normal text-muted-foreground tracking-wide">Počet zobrazení: 120</span>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-2.5 px-6 rounded-full font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-colors duration-200">
              Zobraziť
            </button>
            <button className="flex-1 py-2.5 px-6 rounded-full font-medium text-sm border-[1.5px] border-border hover:bg-secondary transition-colors duration-200">
              Upraviť
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
