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
import icoOrganizer from "@/assets/organizer.svg";
import icoPonuky from "@/assets/ponuky.svg";
import icoObhliadky from "@/assets/obhliadky.svg";
import icoDopyty from "@/assets/dopyty.svg";
import icoDatabazaKlientov from "@/assets/databaza_klientov.svg";
import icoSkolenia from "@/assets/skolenia_a_kurzy.svg";
import icoStatistiky from "@/assets/statistiky.svg";
import icoFinancovanie from "@/assets/financovanie.svg";
import icoSpolupraca from "@/assets/spolupraca_mls.svg";
import icoPravo from "@/assets/pravo_kataster_dane.svg";
import icoDokumenty from "@/assets/dokumenty_a_tlaciva.svg";
import icoObchody from "@/assets/obchody.svg";
import icoMarketing from "@/assets/marketing.svg";
import icoMojWebprofil from "@/assets/moj_webprofil.svg";
import icoReferencie from "@/assets/referencie.svg";
import { StatsRow } from "@/components/dashboard/StatsRow";
import { ChartSection } from "@/components/dashboard/ChartSection";
import { TasksSection } from "@/components/dashboard/TasksSection";
import { AnnouncementsSection } from "@/components/dashboard/AnnouncementsSection";
import { ForumSection } from "@/components/dashboard/ForumSection";
import { LatestSalesSection } from "@/components/dashboard/LatestSalesSection";

const stats = [
  { label: "Aktívnych inzerátov", value: "12", icon: Home, trend: "" },
  { label: "Od 1. marca", value: "24", icon: Clock, trend: "" },
  { label: "Obhliadok", value: "45", icon: Star, trend: "" },
  { label: "Rezervácií", value: "25", icon: Heart, trend: "" },
  { label: "Zrealizovaných obchodov", value: "12", icon: CheckCircle2, trend: "" },
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

const forumPosts = [
  {
    author: "Ing. Rastislav Štalmach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    category: "Všeobecná diskusia",
    date: "09.03.2026 11:07",
    title: "E podpis - otázky a skúsenosti",
    preview: "Bola tu otázka: Čo sa stane ak podpíšu všetci účastníci cez e-podpis daný dokument? Odpoveď: Ak to podpíše posledný v poradí tak všetkým účastn...",
  },
  {
    author: "Ing. Rastislav Štalmach",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    category: "Všeobecná diskusia",
    date: "06.03.2026 17:06",
    title: "E podpis - otázky a skúsenosti",
    preview: "Zakladám tému na používanie E-podpisu. V záložke videoškolenie máte videonávod ako používať e-podpis. https:/...",
  },
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

const topServices = [
  { icon: icoOrganizer, label: "Organizér" },
  { icon: icoPonuky, label: "Ponuky" },
  { icon: icoObhliadky, label: "E-obhliadky" },
  { icon: icoDopyty, label: "Dopyty" },
  { icon: icoDatabazaKlientov, label: "Databáza klientov" },
];

const bottomServices = [
  { icon: icoSkolenia, label: "Školenia a kurzy" },
  { icon: icoStatistiky, label: "Štatistiky" },
  { icon: icoFinancovanie, label: "Financovanie" },
  { icon: icoSpolupraca, label: "Spolupráca - MLS" },
  { icon: icoPravo, label: "Právo, Kataster, Dane" },
  { icon: icoDokumenty, label: "Dokumenty a tlačivá" },
  { icon: icoObchody, label: "Obchody" },
  { icon: icoMarketing, label: "Marketing" },
  { icon: icoMojWebprofil, label: "Môj webprofil" },
  { icon: icoReferencie, label: "Referencie" },
];

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

        {/* Row 1: Stats */}
        <StatsRow stats={stats} />

        {/* Row 2: Chart */}
        <ChartSection chartData={chartData} />

        {/* Row 3: Top service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {topServices.map((service, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center justify-center gap-5 min-h-[160px]">
              <img src={service.icon} alt={service.label} className="h-11 w-11" />
              <span className="text-[1.05rem] font-semibold tracking-wide">{service.label}</span>
            </div>
          ))}
        </div>

        {/* Row 4: Tasks, Announcements, Forum */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          <TasksSection tasks={tasks} />
          <AnnouncementsSection announcements={announcements} />
          <ForumSection posts={forumPosts} />
        </div>

        {/* Row 5: Bottom service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-[var(--spacing-uniform)] lg:gap-[var(--spacing-lg)]">
          {bottomServices.map((service, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center justify-center gap-4 min-h-[160px]">
              <img src={service.icon} alt={service.label} className="h-11 w-11" />
              <span className="text-[1.05rem] font-semibold tracking-wide">{service.label}</span>
            </div>
          ))}
        </div>

        {/* Row 6: Latest Sales */}
        <LatestSalesSection properties={latestProperties} />
      </div>
    </AppLayout>
  );
};

export default Index;
