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
  ChevronLeft,
  ChevronRight,
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
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import logoSrc from "@/assets/logo_r.png";
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
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-none">
      {/* Logo */}
      <div className={`h-16 flex items-center ${collapsed ? "justify-center px-0" : "px-6"} transition-all duration-300`}>
        <img src={logoSrc} alt="Realico" className={`${collapsed ? "h-8 w-8" : "h-10 w-auto"} object-contain transition-all duration-300`} />
      </div>

      {/* Profile Section */}
      <div className={`flex flex-col items-center py-4 ${collapsed ? "px-1" : "px-6"} transition-all duration-300`}>
        <Avatar className={`${collapsed ? "w-10 h-10" : "w-14 h-14"} border-2 border-background shadow-[0_0_20px_hsl(48_100%_50%/0.3)] transition-all duration-300`}>
          <AvatarFallback className="bg-primary/10 text-primary font-medium text-base">{collapsed ? "L" : "LP"}</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <>
            <span className="text-sm font-medium mt-2.5 text-foreground">Lucia Pastorová</span>
            <span className="text-xs font-medium text-muted-foreground">Maklér</span>
          </>
        )}
      </div>

      <SidebarContent className={`${collapsed ? "px-1" : "px-3"} py-2`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0.5">
              {mainItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className={`flex items-center gap-3 h-[var(--interactive-height)] ${collapsed ? "justify-center px-0" : "px-4"} rounded-full text-[13px] tracking-wide transition-colors ${
                          isActive
                            ? "text-primary font-medium"
                            : "text-sidebar-foreground font-normal hover:text-foreground hover:bg-sidebar-accent"
                        }`}
                        activeClassName=""
                      >
                        <item.icon
                          className="h-[18px] w-[18px] shrink-0"
                          strokeWidth={isActive ? 2 : 1.5}
                          color={isActive ? "hsl(var(--primary))" : undefined}
                        />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Toggle Button at Bottom */}
      <SidebarFooter className="p-3">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center h-9 w-full rounded-full hover:bg-sidebar-accent transition-all duration-300 text-muted-foreground hover:text-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
