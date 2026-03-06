import {
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  Home,
  Lightbulb,
  Search,
  Users,
  FileText,
  UserCog,
  Star,
  BarChart3,
  MessageCircle,
  Euro,
  Scale,
  Settings,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logoSrc from "@/assets/aura_y.svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mainItems = [
  { title: "Nástenka", url: "/", icon: LayoutDashboard },
  { title: "Organizér", url: "/organizer", icon: CalendarDays },
  { title: "Referencie", url: "/references", icon: MessageSquare },
  { title: "Ponuky", url: "/properties", icon: Home },
  { title: "Tipy na spoluprácu", url: "/tips", icon: Lightbulb },
  { title: "Dopyty", url: "/demands", icon: Search },
  { title: "Databáza klientov", url: "/clients", icon: Users },
  { title: "Dokumenty", url: "/documents", icon: FileText },
  { title: "Majiteľ / maklér", url: "/agents", icon: UserCog },
  { title: "Marketing", url: "/marketing", icon: Star },
  { title: "Obchodné výsledky", url: "/results", icon: BarChart3 },
  { title: "Fórum", url: "/forum", icon: MessageCircle },
  { title: "Financovanie", url: "/finance", icon: Euro },
  { title: "Právo a kataster", url: "/legal", icon: Scale },
  { title: "Nastavenia", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="none" className="border-none m-6 mr-0 w-[260px] shrink-0">
      {/* Logo — aligned with header search bar */}
      <div className="h-16 flex items-center px-6">
        <img src={logoSrc} alt="Realico Aura" className="h-14 w-auto" />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center px-6 py-5">
        <Avatar className="w-16 h-16 border-[3px] border-background shadow-[0_0_30px_hsl(48_100%_50%/0.5)]">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">LP</AvatarFallback>
        </Avatar>
        <span className="text-base font-semibold mt-3 text-foreground">Lucia Pastorová</span>
        <span className="text-sm font-medium text-muted-foreground">Maklér</span>
      </div>

      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {mainItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className={`flex items-center gap-3 h-[var(--interactive-height)] px-4 rounded-full text-[14px] transition-colors ${
                          isActive
                            ? "text-primary font-semibold"
                            : "text-sidebar-foreground font-medium hover:text-foreground hover:bg-sidebar-accent"
                        }`}
                        activeClassName=""
                      >
                        <item.icon
                          className="h-5 w-5 shrink-0"
                          strokeWidth={isActive ? 2 : 1.5}
                          color={isActive ? "hsl(var(--primary))" : undefined}
                        />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
