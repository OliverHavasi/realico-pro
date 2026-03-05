import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Bell, ChevronLeft, ChevronRight } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

function SidebarToggle() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <button
      onClick={toggleSidebar}
      className="fixed top-1/2 -translate-y-1/2 z-50 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      style={{
        left: collapsed ? "calc(var(--sidebar-width-icon) - 12px)" : "calc(var(--sidebar-width) - 12px)",
        transition: "left 200ms linear",
      }}
      aria-label="Toggle Sidebar"
    >
      {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
    </button>
  );
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarToggle />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center justify-between border-b border-border px-6 bg-card/60 backdrop-blur-xl sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-secondary rounded-lg px-4 h-9">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Vyhľadávanie..."
                  className="bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground w-48"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
              </button>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">LP</AvatarFallback>
                </Avatar>
                <span className="hidden md:block text-sm font-medium">Ing. Lucia Pastorová</span>
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:px-6 md:py-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
