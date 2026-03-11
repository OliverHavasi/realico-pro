import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Search, Bell } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const shortcuts = [
  "Kontakty",
  "Môj e-mail",
  "AI",
  "Predané nehnuteľnosti",
  "AML",
  "E-Podpis",
  "Moje Výsledky",
];

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center justify-end px-4 sm:px-6 lg:px-8 xl:px-10 sticky top-0 z-30 bg-background/80 backdrop-blur-sm">
            {/* Right group: Shortcuts + Search + Bell */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap tracking-wide">Moje skratky:</span>
              <div className="flex items-center gap-2 overflow-x-auto">
                {shortcuts.map((label, i) => (
                  <button
                    key={`${label}-${i}`}
                    className="h-7 px-3.5 rounded-full bg-secondary text-[11px] font-medium text-secondary-foreground whitespace-nowrap hover:bg-secondary/80 transition-colors tracking-wider uppercase"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1 ml-2">
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Search className="h-[18px] w-[18px] text-foreground" strokeWidth={1.8} />
                </button>
                <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
                  <Bell className="h-[18px] w-[18px] text-foreground" strokeWidth={1.8} />
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary border-[1.5px] border-background" />
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-10 py-6 w-full">
            <div className="w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
