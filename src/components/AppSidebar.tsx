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
  useSidebar,
} from "@/components/ui/sidebar";
import logoSrc from "@/assets/aura_y_w.svg";

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
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex h-16 items-center px-5 justify-start">
        {!collapsed ? (
          <img src={logoSrc} alt="Aura" className="h-7 w-auto" />
        ) : (
          <img src={logoSrc} alt="Aura" className="h-4 w-auto object-contain mx-auto" />
        )}
      </div>

      <SidebarContent className="px-2 py-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-[2px]">
              {mainItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className={`flex items-center gap-3 h-[34px] px-3 rounded-[var(--radius-sm)] text-[0.8125rem] transition-colors ${
                          collapsed ? "justify-center" : ""
                        } ${
                          isActive
                            ? "text-primary font-medium"
                            : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                        }`}
                        activeClassName=""
                      >
                        <item.icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? "text-primary" : ""}`} />
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
    </Sidebar>
  );
}
