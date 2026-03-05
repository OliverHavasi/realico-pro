import { AppLayout } from "@/components/AppLayout";
import { Search, Eye, Pencil, Trash2, Download, Info } from "lucide-react";
import { useState } from "react";

const demands = [
  { id: 35875, agent: "RNDr. Vlastimil Host, RSc.", date: "27.02.2026 13:12", offer: "HVBT0212KK", price: "480 €", status: "Nezobrazené", client: "JUDr. Timotej Slovík", phone: "0908974924", email: "slovik@sloviklaw.sk", initials: "TS" },
  { id: 35721, agent: "RNDr. Vlastimil Host, RSc.", date: "30.01.2026 12:34", offer: "HVBT0212KK", price: "480 €", status: "Nezobrazené", client: "Iveta Kurucova", phone: "0915468058", email: "iva.kurucova.stuckova@gmail.com", initials: "IK" },
  { id: 34490, agent: "RNDr. Vlastimil Host, RSc.", date: "26.05.2025 10:41", offer: "HVBT0199KK", price: "530 €", status: "Nezobrazené", client: "Jesika Vilimová", phone: "0940361984", email: "jesikaavilimova@gmail.com", initials: "JV" },
];

const DemandsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
      <div className="max-w-[1400px] mx-auto space-y-[var(--spacing-uniform)]">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground">Dopyty</h1>
          <p className="text-muted-foreground text-sm mt-1">Správa dopytov na nehnuteľnosti</p>
        </div>

        {/* Demands */}
        <div className="space-y-4">
          {demands.map((demand) => (
            <div key={demand.id} className="glass-card overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 bg-secondary/40 border-b border-border">
                <div className="flex items-center gap-4 flex-wrap text-xs">
                  <span className="font-medium text-sm">ID dopytu: {demand.id}</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{demand.status}</span>
                  <span className="text-muted-foreground">Vložil: <span className="font-medium">{demand.agent}</span> · {demand.date}</span>
                  <span className="text-muted-foreground">Obhliadka k ponuke: <span className="font-medium">{demand.offer}</span></span>
                </div>
                <div className="flex gap-1">
                  {[Eye, Download, Pencil, Trash2].map((Icon, i) => (
                    <button key={i} className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${i === 3 ? "hover:bg-destructive/10 text-destructive" : "hover:bg-secondary text-muted-foreground"}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col md:flex-row gap-6">
                <div className="md:w-48 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center">
                    <span className="text-2xl font-medium text-muted-foreground/30">{demand.initials}</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold text-foreground">{demand.price}</p>
                    <p className="text-sm text-muted-foreground hover:underline cursor-pointer mt-1">Zobraziť popis</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{demand.client}</p>
                    <p className="text-sm text-muted-foreground">{demand.phone}</p>
                    <a href={`mailto:${demand.email}`} className="text-sm text-muted-foreground hover:text-foreground hover:underline">{demand.email}</a>
                  </div>
                </div>
              </div>

              {/* Internal Note */}
              <div className="px-5 pb-5">
                <p className="text-sm font-medium mb-2">Interná poznámka:</p>
                <textarea className="w-full h-16 px-4 py-3 rounded-[var(--radius-input)] border border-input bg-background text-sm resize-none hover:border-primary/40 focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all outline-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default DemandsPage;
