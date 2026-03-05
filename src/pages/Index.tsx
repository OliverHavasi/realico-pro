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
} from "lucide-react";

const stats = [
  { label: "Plánované obhliadky", value: "12", icon: Eye, trend: "+3 tento týždeň" },
  { label: "Plánované ponuky", value: "8", icon: FileText, trend: "+2 nové" },
  { label: "Exkluzívne zmluvy", value: "5", icon: Handshake, trend: "3 aktívne" },
  { label: "Plánované body", value: "34", icon: TrendingUp, trend: "cieľ: 50" },
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

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-[1600px] mx-auto space-y-[var(--spacing-uniform)]">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold tracking-wide">Nástenka</h1>
          <p className="text-muted-foreground text-sm font-medium mt-1">Naplánujte si mesiac: 3/2026</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-uniform)]">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--icon-bg))] flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <span className="stat-number text-foreground">{stat.value}</span>
              <span className="text-xs font-medium text-muted-foreground">{stat.trend}</span>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--spacing-uniform)]">
          {/* Tasks */}
          <div className="glass-card p-6 lg:col-span-1">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold tracking-tight">Vaše úlohy</h2>
              <button className="text-muted-foreground text-sm font-medium hover:text-foreground flex items-center gap-1 transition-colors">
                Organizér <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="space-y-4">
              {tasks.map((group) => (
                <div key={group.date}>
                  <p className="text-xs font-medium text-muted-foreground mb-2">{group.date}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item.text} className="flex items-center gap-3 py-2.5 px-4 rounded-full hover:bg-secondary transition-colors">
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-success" : "border-2 border-muted-foreground/30"}`}>
                          {item.done && <CheckCircle2 className="h-3.5 w-3.5 text-success-foreground" />}
                        </div>
                        <span className={`text-sm font-medium ${item.done ? "line-through text-muted-foreground" : ""}`}>{item.text}</span>
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
              <h2 className="text-lg font-semibold tracking-tight">Najnovšie referencie</h2>
              <button className="text-muted-foreground text-sm font-medium hover:text-foreground flex items-center gap-1 transition-colors">
                Všetky <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="space-y-4">
              {references.map((ref) => (
                <div key={ref.name} className="flex gap-3 py-3 border-b border-border last:border-0">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--icon-bg))] ring-1 ring-primary/40 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-primary">{ref.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold">{ref.name}</span>
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
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
              <h2 className="text-lg font-semibold tracking-tight">Dôležité oznamy</h2>
              <button className="h-[var(--interactive-height)] px-6 rounded-full bg-primary text-primary-foreground text-[0.9rem] font-semibold shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2">
                <Plus className="h-4 w-4" /> Nový
              </button>
            </div>
            <div className="space-y-4">
              {announcements.map((ann) => (
                <div key={ann.date} className="bg-secondary rounded-[10px] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">{ann.date}</p>
                      <p className="text-sm font-semibold">{ann.author} <span className="text-muted-foreground font-medium">· {ann.role}</span></p>
                    </div>
                  </div>
                  <h3 className="text-foreground font-semibold text-lg mb-2 tracking-tight">{ann.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ann.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Properties */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold tracking-tight">Najnovší predaj</h2>
            <button className="text-muted-foreground text-sm font-medium hover:text-foreground flex items-center gap-1 transition-colors">
              Prejsť na predaje <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-uniform)]">
            {[
              { title: "3 izbový byt s parkovaním", location: "Hurbanovo", price: "18b", date: "27.02.2026", agent: "Monika Delejová" },
              { title: "1 izbový byt, Pod papierňou", location: "Prešov", price: "11b", date: "25.02.2026", agent: "Monika Delejová" },
              { title: "Luxusne zrekonštruovaný byt", location: "Košice", price: "11b", date: "24.02.2026", agent: "Mária Arvaiová" },
            ].map((property) => (
              <div key={property.title} className="bg-secondary rounded-[10px] p-4 hover:bg-secondary/80 transition-colors">
                <div className="h-40 bg-muted rounded-[8px] mb-3 flex items-center justify-center">
                  <Home className="h-8 w-8 text-muted-foreground/30" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-medium text-muted-foreground">{property.date} · {property.agent}</p>
                <h3 className="text-sm font-semibold mt-1 line-clamp-1 text-foreground">{property.title}</h3>
                <p className="text-xs text-muted-foreground">{property.location}</p>
                <p className="text-muted-foreground font-semibold mt-2 text-sm">Počet bodov: {property.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
