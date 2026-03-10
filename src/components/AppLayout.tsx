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
          <header className="h-14 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 sticky top-0 z-30 bg-background/80 backdrop-blur-sm">
            {/* Shortcuts */}
            <div className="flex items-center gap-2 flex-1 overflow-x-auto">
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap tracking-wide">Moje skratky:</span>
              <div className="flex items-center gap-2">
                {shortcuts.map((label) => (
                  <button
                    key={label}
                    className="h-7 px-3.5 rounded-full bg-secondary text-xs font-medium text-secondary-foreground whitespace-nowrap hover:bg-secondary/80 transition-colors tracking-wide"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            {/* Search icon + Bell */}
            <div className="flex items-center gap-1.5 ml-4">
              <button className="p-2.5 rounded-full hover:bg-secondary transition-colors">
                <Search className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
              </button>
              <button className="relative p-2.5 rounded-full hover:bg-secondary transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background" />
              </button>
            </div>
          </header>
          <main className="flex-1 px-4 sm:px-6 lg:px-8 xl:px-10 py-6 w-full">
            <div className="w-full max-w-[1800px] mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
