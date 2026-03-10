import { AppLayout } from "@/components/AppLayout";
import {
  Eye,
  FileText,
  Handshake,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Plus,
  Home,
  Heart,
  MessageSquare,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { label: "Exkluzívne zmluvy", value: "12", icon: MessageSquare, trend: "+3 tento týždeň" },
  { label: "Plánované body", value: "8", icon: Home, trend: "+2 nové" },
  { label: "Exkluzívne zmluvy", value: "5", icon: MessageSquare, trend: "3 aktívne" },
  { label: "Plánované body", value: "34", icon: Heart, trend: "cieľ: 50" },
];

const chartData = [
  { name: "Jan", views: 1200 },
  { name: "Feb", views: 2100 },
  { name: "Mar", views: 1800 },
  { name: "Apr", views: 3200 },
  { name: "Máj", views: 2800 },
  { name: "Jún", views: 4100 },
  { name: "Júl", views: 3600 },
  { name: "Aug", views: 4800 },
  { name: "Sep", views: 3900 },
  { name: "Okt", views: 5200 },
  { name: "Nov", views: 4400 },
  { name: "Dec", views: 5800 },
];

const tasks = [
  { date: "6. marca 2026", items: [{ text: "Export inzerátu", done: true }, { text: "Aktualizácia cien", done: false }] },
  { date: "10. marca 2026", items: [{ text: "Prístupy - Ďabolko Jozef", done: false }, { text: "Heslo Cribis", done: false }] },
  { date: "15. marca 2026", items: [{ text: "Vizitka v digitálnom formáte", done: false }] },
];

const references = [
  { name: "RNDr. Daniela Račková", date: "26.02.2026", text: "Vysoká profesionalita a spokojnosť!", initials: "DR" },
  { name: "Ing. Zuzana Janotová", date: "25.02.2026", text: "Zo služieb som bola maximálne spokojná.", initials: "ZJ" },
  { name: "Ing. Roman Sedláček", date: "25.02.2026", text: "Pán maklér veľmi odborne zdokumentoval celý proces.", initials: "RS" },
];

const announcements = [
  {
    date: "24.02.2026 13:56",
    author: "Ing. Rastislav Štalmach",
    role: "CEO / Zakladateľ",
    title: "PRE INFO!",
    text: "Finančná správa posiela listy občanom, ktorým v minulom roku zaniklo vlastníctvo nehnuteľnosti.",
  },
];

const formatYAxis = (value: number) => {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return value.toString();
};

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-4 md:space-y-[var(--spacing-uniform)] lg:space-y-[var(--spacing-lg)]">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-medium tracking-wide">Nástenka</h1>
          <p className="text-muted-foreground text-sm font-normal mt-1 tracking-wide">Naplánujte si mesiac: 3/2026</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {stats.map((stat, i) => (
            <div key={`${stat.label}-${i}`} className="glass-card p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-normal text-muted-foreground tracking-wide">{stat.label}</span>
                <div className="h-12 w-12 rounded-full bg-[hsl(48_35%_94%)] dark:bg-[hsl(0_0%_20%)] flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-[hsl(48_100%_48%)] dark:text-[hsl(48_100%_41%)]" strokeWidth={1.5} />
                </div>
              </div>
              <span className="stat-number text-foreground">{stat.value}</span>
              <span className="text-xs font-normal text-muted-foreground tracking-wide">{stat.trend}</span>
            </div>
          ))}
        </div>

        {/* Chart Row */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {/* Statistics Chart - 70% */}
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
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#F3C300"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Single Listing Card - 30% */}
          <div className="glass-card p-5 lg:col-span-3 flex flex-col">
            <div className="h-44 bg-muted rounded-[12px] mb-4 flex items-center justify-center">
              <Home className="h-10 w-10 text-muted-foreground/30" strokeWidth={1.5} />
            </div>
            <p className="text-xs font-normal text-muted-foreground tracking-wide">27.02.2026 · Monika Delejová</p>
            <h3 className="text-sm font-medium mt-1 text-foreground tracking-wide">3 izbový byt s parkovaním</h3>
            <p className="text-xs text-muted-foreground tracking-wide">Hurbanovo</p>
            <p className="text-muted-foreground font-medium mt-auto pt-3 text-sm tracking-wide">Počet bodov: 18b</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {/* Tasks */}
          <div className="glass-card p-6 lg:col-span-1">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-medium tracking-wide">Vaše úlohy</h2>
              <button className="text-muted-foreground text-sm font-normal hover:text-foreground flex items-center gap-1 transition-colors tracking-wide">
                Organizér <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="space-y-4">
              {tasks.map((group) => (
                <div key={group.date}>
                  <p className="text-xs font-normal text-muted-foreground mb-2 tracking-wide">{group.date}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item.text} className="flex items-center gap-3 py-2.5 px-4 rounded-full hover:bg-secondary transition-colors">
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-success" : "border-2 border-muted-foreground/30"}`}>
                          {item.done && <CheckCircle2 className="h-3.5 w-3.5 text-success-foreground" />}
                        </div>
                        <span className={`text-sm font-normal tracking-wide ${item.done ? "line-through text-muted-foreground" : ""}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
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
                  <div className="h-10 w-10 rounded-full bg-background ring-1 ring-border flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-muted-foreground">{ref.initials}</span>
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
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="glass-card p-6 lg:col-span-1">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-medium tracking-wide">Dôležité oznamy</h2>
              <button className="h-[var(--interactive-height)] px-6 rounded-full bg-primary text-primary-foreground text-[0.9rem] font-medium shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2 tracking-wide">
                <Plus className="h-4 w-4" /> Nový
              </button>
            </div>
            <div className="space-y-4">
              {announcements.map((ann) => (
                <div key={ann.date} className="bg-secondary rounded-[10px] p-4">
                  <div className="flex items-center justify-between mb-2 tracking-wide">
                    <div>
                      <p className="text-xs font-normal text-muted-foreground">{ann.date}</p>
                      <p className="text-sm font-medium">{ann.author} <span className="text-muted-foreground font-normal">· {ann.role}</span></p>
                    </div>
                  </div>
                  <h3 className="text-foreground font-medium text-lg mb-2 tracking-wide">{ann.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ann.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Properties */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-medium tracking-wide">Najnovší predaj</h2>
              <button className="text-muted-foreground text-sm font-normal hover:text-foreground flex items-center gap-1 transition-colors tracking-wide">
                Prejsť na predaje <ArrowRight className="h-3.5 w-3.5" />
              </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
            {[
              { title: "3 izbový byt s parkovaním", location: "Hurbanovo", price: "18b", date: "27.02.2026", agent: "Monika Delejová" },
              { title: "1 izbový byt, Pod papierňou", location: "Prešov", price: "11b", date: "25.02.2026", agent: "Monika Delejová" },
              { title: "Luxusne zrekonštruovaný byt", location: "Košice", price: "11b", date: "24.02.2026", agent: "Mária Arvaiová" },
            ].map((property) => (
              <div key={property.title} className="bg-secondary rounded-[10px] p-4 hover:bg-secondary/80 transition-colors">
                <div className="h-40 bg-muted rounded-[8px] mb-3 flex items-center justify-center">
                  <Home className="h-8 w-8 text-muted-foreground/30" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-normal text-muted-foreground tracking-wide">{property.date} · {property.agent}</p>
                <h3 className="text-sm font-medium mt-1 line-clamp-1 text-foreground">{property.title}</h3>
                <p className="text-xs text-muted-foreground tracking-wide">{property.location}</p>
                <p className="text-muted-foreground font-medium mt-2 text-sm tracking-wide">Počet bodov: {property.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
