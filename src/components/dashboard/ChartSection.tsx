import { Home } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formatYAxis = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return value.toString();
};

interface ChartDataPoint {
  name: string;
  views: number;
}

export function ChartSection({ chartData }: { chartData: ChartDataPoint[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
      <div className="glass-card p-6 lg:col-span-7">
        <div className="mb-4">
          <h2 className="text-lg font-medium tracking-wide">Štatistika zobrazení</h2>
          <p className="text-sm text-muted-foreground font-normal tracking-wide">Prehľad výkonu vašich nehnuteľností</p>
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

      <div className="glass-card p-5 lg:col-span-3 flex flex-col">
        <div className="h-44 bg-muted rounded-[12px] mb-4 flex items-center justify-center">
          <Home className="h-10 w-10 text-muted-foreground/30" strokeWidth={1.5} />
        </div>
        <p className="text-xs font-normal text-muted-foreground tracking-wide">27.02.2026 · Monika Delejová</p>
        <h3 className="text-sm font-medium mt-1 text-foreground tracking-wide">3 izbový byt s parkovaním</h3>
        <p className="text-xs text-muted-foreground tracking-wide">Hurbanovo</p>
        
      </div>
    </div>
  );
}
