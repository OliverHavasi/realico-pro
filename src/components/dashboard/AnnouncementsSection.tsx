import { Plus } from "lucide-react";

interface Announcement {
  date: string;
  author: string;
  role: string;
  title: string;
  text: string;
}

export function AnnouncementsSection({ announcements }: { announcements: Announcement[] }) {
  return (
    <div className="glass-card p-6 lg:col-span-1">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-medium tracking-wide">Novinky a oznamy</h2>
          <p className="text-sm text-muted-foreground font-normal tracking-wide">Buďte vždy v obraze</p>
        </div>
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
                <p className="text-sm font-medium">
                  {ann.author} <span className="text-muted-foreground font-normal">· {ann.role}</span>
                </p>
              </div>
            </div>
            <h3 className="text-foreground font-medium text-lg mb-2 tracking-wide">{ann.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{ann.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
