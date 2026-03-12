import { AppLayout } from "@/components/AppLayout";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Plus,
  Home,
  Heart,
  MessageSquare,
} from "lucide-react";
import icoBuy from "@/assets/ico_buy_crm.svg";
import icoLupa from "@/assets/ico_lupa_crm.svg";
import icoSanon from "@/assets/ico_sanon_crm.svg";
import icoAkcia from "@/assets/ico_akcia_crm.svg";
import icoObhliadka from "@/assets/ico_obhliadka_crm.svg";
import icoChat from "@/assets/ico_chat_crm.svg";
import icoOdovzdavanie from "@/assets/ico_odovzdavanie_crm.svg";
import { StatsRow } from "@/components/dashboard/StatsRow";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { TasksSection } from "@/components/dashboard/TasksSection";
import { ReferencesSection } from "@/components/dashboard/ReferencesSection";
import { AnnouncementsSection } from "@/components/dashboard/AnnouncementsSection";
import { LatestSalesSection } from "@/components/dashboard/LatestSalesSection";

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

const allServices = [
  { icon: icoBuy, label: "Organizér" },
  { icon: icoLupa, label: "E-maily" },
  { icon: icoSanon, label: "Ponuky" },
  { icon: icoAkcia, label: "Dopyty" },
  { icon: icoObhliadka, label: "E-podpis" },
  { icon: icoChat, label: "Školenia" },
  { icon: icoOdovzdavanie, label: "Fórum" },
  { icon: icoBuy, label: "Hypotéky" },
  { icon: icoLupa, label: "AML" },
  { icon: icoSanon, label: "Tip na zmluvu MLS" },
  { icon: icoAkcia, label: "Môj webprofil" },
  { icon: icoObhliadka, label: "Grafy" },
];

const serviceRow1 = allServices.slice(0, 4);
const serviceRows2and3 = allServices.slice(4);

const latestProperties = [
  { title: "3 izbový byt s parkovaním", location: "Hurbanovo", price: "18b", date: "27.02.2026", agent: "Monika Delejová" },
  { title: "1 izbový byt, Pod papierňou", location: "Prešov", price: "11b", date: "25.02.2026", agent: "Monika Delejová" },
  { title: "Luxusne zrekonštruovaný byt", location: "Košice", price: "11b", date: "24.02.2026", agent: "Mária Arvaiová" },
  { title: "2 izbový byt v centre", location: "Bratislava", price: "15b", date: "23.02.2026", agent: "Lucia Pastorová" },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-4 md:space-y-[var(--spacing-uniform)] lg:space-y-[var(--spacing-lg)]">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-medium tracking-wide">Nástenka</h1>
          <p className="text-muted-foreground text-sm font-normal mt-1 tracking-wide">Naplánujte si mesiac: 3/2026</p>
        </div>

        {/* Row 1: Stats + Chart */}
        <StatsRow stats={stats} />
        <ChartSection chartData={chartData} />

        {/* Row 2: First row of service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {serviceRow1.map((service, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center justify-center gap-4 min-h-[160px]">
              <div className="h-[72px] w-[72px] rounded-full bg-[hsl(0_0%_97%)] flex items-center justify-center">
                <img src={service.icon} alt={service.label} className="h-9 w-9" />
              </div>
              <span className="text-[1.05rem] font-semibold tracking-wide">{service.label}</span>
            </div>
          ))}
        </div>

        {/* Row 3: Tasks, References, Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          <TasksSection tasks={tasks} />
          <ReferencesSection references={references} />
          <AnnouncementsSection announcements={announcements} />
        </div>

        {/* Row 4: Remaining service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {serviceRows2and3.map((service, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center justify-center gap-4 min-h-[160px]">
              <div className="h-[72px] w-[72px] rounded-full bg-[hsl(0_0%_97%)] flex items-center justify-center">
                <img src={service.icon} alt={service.label} className="h-9 w-9" />
              </div>
              <span className="text-[1.05rem] font-semibold tracking-wide">{service.label}</span>
            </div>
          ))}
        </div>

        {/* Row 5: Latest Sales (absolute bottom) */}
        <LatestSalesSection properties={latestProperties} />
      </div>
    </AppLayout>
  );
};

export default Index;
