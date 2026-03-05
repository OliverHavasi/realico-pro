import { AppLayout } from "@/components/AppLayout";
import { Search, Plus, Send, Pencil, Trash2, Eye, Info, Clock, Star } from "lucide-react";
import { useState } from "react";

const references = [
  { id: "RDKP0001PO", date: "26.02.2026 12:20", agent: "RNDr. Daniela Račková", text: "Vysoká profesionalita a spokojnosť!", initials: "DR", rating: 5 },
  { id: "JZPO0002BA2", date: "25.02.2026 12:45", agent: "Ing. Zuzana Janotová", text: "Zo služieb pani Ing.Janotovej som bol maximálne spokojný.", initials: "ZJ", rating: 5 },
  { id: "SRBT0148NR", date: "25.02.2026 11:15", agent: "Ing. Roman Sedláček", text: "Pán maklér pri uzatváraní zmluvy o sprostredkovaní predaja vysvetlil podmienky zmluvy, byt odborne zdokumentoval.", initials: "RS", rating: 5 },
  { id: "PJDM0546PO", date: "24.02.2026 13:06", agent: "Ing. Ján Prusák", text: "Ďakujem veľmi pekne za skvelú pomoc a za profesionálny a ľudský prístup. Tomáš H.", initials: "JP", rating: 5 },
  { id: "HVBT0209KK", date: "23.02.2026 12:36", agent: "RNDr. Vlastimil Host, RSc.", text: "Ste naozaj jednotka v tom, čo robíte a s takým super ľudským prístupom.", initials: "VH", rating: 5 },
  { id: "DMBT0047BJ", date: "20.02.2026 14:16", agent: "Monika Delejová", text: "Pani Delejová je veľmi príjemná, všetko mi krásne povysvetľovala, poukazovala.", initials: "MD", rating: 4 },
];

const ReferencesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
      <div className="max-w-[1400px] mx-auto space-y-[var(--spacing-uniform)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Zoznam referencií</h1>
            <p className="text-muted-foreground text-sm mt-1">1 962 záznamov</p>
          </div>
          <div className="flex gap-3 self-start">
            <button className="h-[var(--interactive-height)] px-6 rounded-full bg-primary text-primary-foreground text-[0.85rem] shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2">
              <Plus className="h-4 w-4" /> Vytvoriť novú referenciu
            </button>
            <button className="h-[var(--interactive-height)] px-5 rounded-full border border-input text-sm hover:border-primary/40 transition-all flex items-center gap-2">
              <Send className="h-4 w-4" /> Odoslať email
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-5">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-background rounded-[var(--radius-input)] px-4 h-[var(--interactive-height)] border border-input flex-1 min-w-[200px] focus-within:border-primary focus-within:ring-[3px] focus-within:ring-primary/20 transition-all">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input type="text" placeholder="Vyhľadávanie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent border-none outline-none text-[0.875rem] placeholder:text-muted-foreground w-full" />
            </div>
            {["Maklér", "Pobočka", "Typ"].map((filter) => (
              <select key={filter} className="h-[var(--interactive-height)] px-4 rounded-[var(--radius-input)] border border-input bg-background text-sm text-muted-foreground hover:border-primary/40 transition-colors appearance-none cursor-pointer min-w-[140px]">
                <option>- {filter.toLowerCase()} -</option>
              </select>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="space-y-4">
          {references.map((ref) => (
            <div key={ref.id} className="glass-card overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 bg-muted flex items-center justify-center p-6 shrink-0">
                  <div className="h-20 w-20 rounded-full bg-primary/10 ring-1 ring-primary/40 flex items-center justify-center">
                    <span className="text-2xl font-medium text-primary">{ref.initials}</span>
                  </div>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs text-muted-foreground">Kód: {ref.id}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{ref.date}</span>
                      </div>
                      <p className="text-sm font-medium">{ref.agent}</p>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{ref.text}</p>
                      <div className="flex gap-0.5 mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < ref.rating ? "fill-primary text-primary" : "text-muted-foreground/20"}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      {[Pencil, Eye, Trash2, Info].map((Icon, i) => (
                        <button key={i} className={`h-9 w-9 rounded-full flex items-center justify-center transition-colors ${i === 2 ? "hover:bg-destructive/10 text-destructive" : "hover:bg-secondary text-muted-foreground"}`}>
                          <Icon className="h-4 w-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {[1,2,3,4,5,"...",11].map((n, i) => (
            <button key={i} className={`h-10 w-10 rounded-full text-sm transition-all ${n === 1 ? "bg-primary text-primary-foreground shadow-primary" : "hover:bg-secondary text-muted-foreground"}`}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ReferencesPage;
