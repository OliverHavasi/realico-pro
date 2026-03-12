import { CheckCircle2, ArrowRight } from "lucide-react";

interface TaskGroup {
  date: string;
  items: { text: string; done: boolean }[];
}

export function TasksSection({ tasks }: { tasks: TaskGroup[] }) {
  return (
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
  );
}
