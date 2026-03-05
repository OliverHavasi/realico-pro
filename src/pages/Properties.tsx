import { AppLayout } from "@/components/AppLayout";
import { Search, Plus, Eye, Pencil, Home, MapPin, ArrowUpDown } from "lucide-react";
import { useState } from "react";

const properties = [
  { id: "KIPO0012PO", title: "Pozemok na stavbu RD, Kuková, 1505 m2", subtitle: "Tichá, pokojná časť obce", price: "44 900 €", status: "Zobrazené", agent: "Mgr. Igor Kyseľa, MBA", date: "28.02.2026", views: 31, type: "Pozemky" },
  { id: "PJBT1751PO", title: "Nájom: 2 izbový byt 74 m2, balkón, garáž", subtitle: "Garážové parkovacie miesto", price: "770 € / mesiac", status: "Zobrazené", agent: "Ing. Ján Prusák", date: "24.02.2026", views: 2417, type: "Byty" },
  { id: "KIDM0014PO", title: "Na prenájom, podkrovný 2 izbový byt v RD", subtitle: "Vlastné parkovanie, loggia", price: "470 €", status: "Zobrazené", agent: "Mgr. Igor Kyseľa, MBA", date: "21.02.2026", views: 158, type: "Byty" },
  { id: "HVBT0209KK", title: "Krásny 3 izbový byt s lodžiou", subtitle: "Rekonštruovaný, zariadený", price: "480 €", status: "Zobrazené", agent: "RNDr. Vlastimil Host, RSc.", date: "20.02.2026", views: 89, type: "Byty" },
  { id: "DMBT0047BJ", title: "Priestranný 4 izbový byt", subtitle: "Novostavba, terasa", price: "189 000 €", status: "Zobrazené", agent: "Monika Delejová", date: "19.02.2026", views: 245, type: "Byty" },
  { id: "SRBT0148NR", title: "Rodinný dom s veľkým pozemkom", subtitle: "Tichá lokalita, garáž", price: "285 000 €", status: "Zobrazené", agent: "Ing. Roman Sedláček", date: "18.02.2026", views: 312, type: "Domy" },
];

const PropertyListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
      <div className="space-y-4 md:space-y-[var(--spacing-uniform)] lg:space-y-[var(--spacing-lg)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Zoznam ponúk</h1>
            <p className="text-muted-foreground text-sm mt-1">Ponuky nehnuteľností · 162 záznamov</p>
          </div>
          <button className="h-[var(--interactive-height)] px-6 rounded-full bg-primary text-primary-foreground text-[0.85rem] shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2 self-start">
            <Plus className="h-4 w-4" /> Vytvoriť novú ponuku
          </button>
        </div>

        {/* Filters */}
        <div className="glass-card p-5">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-background rounded-[var(--radius-input)] px-4 h-[var(--interactive-height)] border border-input flex-1 min-w-[200px] focus-within:border-primary focus-within:ring-[3px] focus-within:ring-primary/20 transition-all">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Vyhľadávanie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-[0.875rem] placeholder:text-muted-foreground w-full"
              />
            </div>
            {["Maklér", "Pobočka", "Typ"].map((filter) => (
              <select key={filter} className="h-[var(--interactive-height)] px-4 rounded-[var(--radius-input)] border border-input bg-background text-sm text-muted-foreground hover:border-primary/40 transition-colors appearance-none cursor-pointer min-w-[140px]">
                <option>- {filter.toLowerCase()} -</option>
              </select>
            ))}
          </div>
        </div>

        {/* Property Cards */}
        <div className="space-y-4">
          {properties.map((property) => (
            <div key={property.id} className="glass-card overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-48 md:h-auto bg-muted flex items-center justify-center shrink-0">
                  <Home className="h-10 w-10 text-muted-foreground/20" />
                </div>
                <div className="flex-1 p-5 flex flex-col md:flex-row gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs text-muted-foreground">Kód: {property.id}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">{property.status}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs bg-secondary text-muted-foreground">{property.type}</span>
                    </div>
                    <h3 className="text-base font-medium text-foreground mt-1">{property.title}</h3>
                    <p className="text-sm text-muted-foreground">{property.subtitle}</p>
                    <p className="text-xl font-semibold mt-2">{property.price}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {property.views}x zobrazení</span>
                      <span>{property.date}</span>
                      <span>{property.agent}</span>
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2 shrink-0 md:justify-center">
                    <button className="h-[var(--interactive-height)] px-5 rounded-full bg-primary text-primary-foreground text-sm shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2">
                      <Pencil className="h-3.5 w-3.5" /> Upraviť
                    </button>
                    <button className="h-[var(--interactive-height)] px-5 rounded-full border border-input text-sm hover:border-primary/40 transition-all flex items-center gap-2">
                      <Eye className="h-3.5 w-3.5" /> Zobraziť
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {[1,2,3,4,5,6,7].map(n => (
            <button key={n} className={`h-10 w-10 rounded-full text-sm transition-all ${n === 1 ? "bg-primary text-primary-foreground shadow-primary" : "hover:bg-secondary text-muted-foreground"}`}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default PropertyListPage;
