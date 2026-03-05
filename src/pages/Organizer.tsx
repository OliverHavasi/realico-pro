import { AppLayout } from "@/components/AppLayout";
import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";
import { useState } from "react";

const daysOfWeek = ["po", "ut", "st", "št", "pi", "so", "ne"];

const generateCalendar = () => {
  const days: (number | null)[] = [];
  const offset = 6;
  for (let i = 0; i < offset; i++) days.push(null);
  for (let i = 1; i <= 31; i++) days.push(i);
  return days;
};

const events = [
  { day: 3, title: "Obhliadka - Byty Prešov", color: "bg-primary" },
  { day: 5, title: "Stretnutie s klientom", color: "bg-success" },
  { day: 10, title: "Export inzerátu", color: "bg-primary" },
  { day: 15, title: "Podpis zmluvy", color: "bg-success" },
  { day: 20, title: "Fotenie nehnuteľnosti", color: "bg-primary/60" },
];

const OrganizerPage = () => {
  const calendarDays = generateCalendar();
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <AppLayout>
      <div className="max-w-[1400px] mx-auto space-y-[var(--spacing-uniform)]">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Organizér</h1>
          <p className="text-muted-foreground text-sm mt-1">Naplánujte si mesiac: 3/2026</p>
        </div>

        {/* Planning Form */}
        <div className="glass-card p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Plánované obhliadky", "Plánované ponuky", "Exkluzívne zmluvy", "Plánované body"].map((label) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="text-sm min-w-[180px]">{label} *</label>
                <input
                  type="text"
                  className="h-[var(--interactive-height)] px-4 rounded-[var(--radius-input)] border border-input bg-background text-[0.875rem] hover:border-primary/40 focus:border-primary focus:ring-[3px] focus:ring-primary/20 transition-all outline-none flex-1"
                />
              </div>
            ))}
          </div>
          {/* Primary action */}
          <button className="mt-4 h-[var(--interactive-height)] px-8 bg-primary text-primary-foreground text-[0.85rem] shadow-primary hover:shadow-primary-hover hover:-translate-y-0.5 active:scale-[0.98] transition-all">
            Uložiť
          </button>
        </div>

        {/* Filters */}
        <div className="glass-card p-5">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2 bg-background rounded-[var(--radius-input)] px-4 h-[var(--interactive-height)] border border-input min-w-[200px] focus-within:border-primary focus-within:ring-[3px] focus-within:ring-primary/20 transition-all">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input type="text" placeholder="Vyhľadávanie..." className="bg-transparent border-none outline-none text-[0.875rem] placeholder:text-muted-foreground w-full" />
            </div>
            {/* Secondary action - light yellow */}
            <button className="h-[var(--interactive-height)] px-5 bg-accent text-accent-foreground text-sm flex items-center gap-2">
              <Plus className="h-4 w-4" /> Nová udalosť
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {/* Tertiary - grey */}
              <button className="h-9 w-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              {/* Primary */}
              <button className="h-9 px-5 bg-primary text-primary-foreground text-sm">Dnes</button>
              <button className="h-9 w-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <h2 className="text-xl font-semibold">Marec 2026</h2>
            <div className="flex gap-1">
              {["Mesiac", "Týždeň", "Rozvrh"].map((v, i) => (
                <button key={v} className={`h-9 px-4 text-sm transition-all ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-7 border-b border-border">
              {daysOfWeek.map(d => (
                <div key={d} className="px-3 py-3 text-center text-xs uppercase text-muted-foreground">{d}</div>
              ))}
            </div>
            {/* Weeks */}
            {weeks.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7 border-b border-border last:border-0">
                {week.map((day, di) => {
                  const dayEvents = day ? events.filter(e => e.day === day) : [];
                  const isToday = day === 1;
                  const isWeekend = di >= 5;
                  return (
                    <div key={di} className={`min-h-[100px] p-2 pt-1.5 border-r border-border last:border-0 ${isWeekend ? "bg-secondary/30" : ""} ${!day ? "bg-muted/30" : "hover:bg-secondary/40 transition-colors cursor-pointer"}`}>
                      {day && (
                        <>
                          <span className={`text-sm leading-none ${isToday ? "bg-primary text-primary-foreground h-7 w-7 !rounded-full flex items-center justify-center" : "text-muted-foreground"}`}>{day}</span>
                          <div className="mt-1 space-y-1">
                            {dayEvents.map((ev, ei) => (
                              <div key={ei} className={`${ev.color} text-[10px] px-2 py-0.5 rounded-full truncate ${ev.color.includes("success") ? "text-success-foreground" : "text-primary-foreground"}`}>
                                {ev.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OrganizerPage;
