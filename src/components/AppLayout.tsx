import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Search, Bell } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 sticky top-0 z-30">
            <div className="flex items-center gap-3 flex-1 max-w-2xl">
              <div className="hidden md:flex items-center gap-2 bg-secondary rounded-[var(--radius)] px-5 h-[var(--interactive-height)] flex-1 max-w-xl">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Vyhľadávanie..."
                  className="bg-transparent border-none outline-none text-sm font-medium placeholder:text-muted-foreground w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
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
