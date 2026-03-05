import { AppLayout } from "@/components/AppLayout";
import { Search, Plus, Pencil, Eye, Mail, Info, Phone, Users } from "lucide-react";
import { useState } from "react";

const clients = [
  { name: "Miroslav Halčin", phone: "+421 910 590 020", email: "halcinmiroslav2@gmail.com", type: "Kupujúci", date: "01.03.2026", agent: "RNDr. Vlastimil Host, RSc.", offers: 0, views: 0, initials: "MH" },
  { name: "Natália Petreková", phone: "0948467475", email: "natalia.petrekova03@gmail.com", type: "Kupujúci", date: "28.02.2026", agent: "Martina Rippelová", offers: 0, views: 0, initials: "NP" },
  { name: "Ingrid Botkova", phone: "", email: "inga_11500@yahoo.com", type: "Z Webu", date: "27.02.2026", agent: "", offers: 0, views: 0, initials: "IB" },
  { name: "Erika Kolárová", phone: "0918425683", email: "Erika.kolarova22@gmail.com", type: "Kupujúci", date: "27.02.2026", agent: "Ing. Roman Sedláček", offers: 0, views: 0, initials: "EK" },
  { name: "Tomas Czaja", phone: "0951911201", email: "tomasczaja890@gmail.com", type: "Kupujúci", date: "27.02.2026", agent: "Mgr. Igor Kyseľa, MBA", offers: 0, views: 0, initials: "TC" },
];

const ClientsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
        <div className="space-y-4 md:space-y-[var(--spacing-uniform)] lg:space-y-[var(--spacing-lg)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-wide text-foreground">Zoznam klientov</h1>
            <p className="text-muted-foreground text-sm mt-1">37 146 záznamov</p>
          </div>
          <div className="flex gap-3 self-start">
            <button className="h-[var(--interactive-height)] px-6 rounded-full bg-primary text-primary-foreground text-[0.85rem] shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2">
              <Plus className="h-4 w-4" /> Vytvoriť nového klienta
            </button>
            <button className="h-[var(--interactive-height)] px-5 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-all flex items-center gap-2">
              <Users className="h-4 w-4" /> Klient na hypotéku
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card p-5">
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-background rounded-[var(--radius)] px-4 h-[var(--interactive-height)] border border-input flex-1 min-w-[200px] focus-within:border-primary focus-within:ring-[3px] focus-within:ring-primary/20 transition-all">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input type="text" placeholder="Vyhľadávanie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent border-none outline-none text-[0.875rem] placeholder:text-muted-foreground w-full" />
            </div>
            {["Maklér", "Pobočka", "Typ klienta"].map((filter) => (
              <select key={filter} className="h-[var(--interactive-height)] px-4 rounded-[var(--radius)] border border-input bg-background text-sm text-muted-foreground hover:border-primary/40 transition-colors appearance-none cursor-pointer min-w-[140px]">
                <option>- {filter.toLowerCase()} -</option>
              </select>
            ))}
          </div>
        </div>

        {/* Clients Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/10">
                  <th className="text-left px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Vložil</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Meno klienta</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Kontakt</th>
                  <th className="text-left px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Typ</th>
                  <th className="text-center px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Ponuky</th>
                  <th className="text-center px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Obhliadky</th>
                  <th className="text-right px-5 py-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Akcie</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.name} className="border-b border-border/10 last:border-0 hover:bg-secondary/40 transition-colors">
                    <td className="px-5 py-4">
                      <p className="text-xs text-muted-foreground">{client.date}</p>
                      <p className="text-xs text-muted-foreground">{client.agent}</p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium text-primary">{client.initials}</span>
                        </div>
                        <div>
                          <p className="text-sm text-foreground">{client.name}</p>
                          {client.phone && <p className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="h-3 w-3" />{client.phone}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <a href={`mailto:${client.email}`} className="text-sm text-muted-foreground hover:text-foreground hover:underline">{client.email}</a>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground">{client.type}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-secondary text-xs font-medium text-muted-foreground">{client.offers}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-secondary text-xs font-medium text-muted-foreground">{client.views}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-1">
                        {[Pencil, Eye, Mail, Info].map((Icon, i) => (
                          <button key={i} className="h-8 w-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                            <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default ClientsPage;
