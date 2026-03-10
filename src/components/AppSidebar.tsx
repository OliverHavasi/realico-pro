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
import logoSrc from "@/assets/realico_pro_logo.png";
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
      <div className={`h-14 flex items-center ${collapsed ? "justify-center px-2" : "px-5"} transition-all duration-300`}>
        <img
          src={logoSrc}
          alt="Realico PRO"
          className={`${collapsed ? "h-6 w-6 object-cover object-left" : "h-6 w-auto"} object-contain transition-all duration-300`}
        />
      </div>

      {/* Profile Section */}
      <div className={`flex flex-col items-center py-4 ${collapsed ? "px-1" : "px-6"} transition-all duration-300`}>
        <Avatar className={`${collapsed ? "w-9 h-9" : "w-14 h-14"} ring-2 ring-primary/20 transition-all duration-300`}>
          <AvatarFallback className="bg-[#fef7e4] text-[#ceb817] font-semibold text-base">
            {collapsed ? "L" : "LP"}
          </AvatarFallback>
        </Avatar>
        {!collapsed && (
          <>
            <span className="text-sm font-medium mt-2.5 text-foreground tracking-wide">Lucia Pastorová</span>
            <span className="text-xs font-normal text-muted-foreground tracking-wide">Maklér</span>
          </>
        )}
      </div>

      <SidebarContent className={`${collapsed ? "px-1" : "px-3"} py-1`}>
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
                        className={`flex items-center gap-3 h-[38px] ${collapsed ? "justify-center px-0" : "px-4"} rounded-full text-[13px] tracking-wide transition-colors ${
                          isActive
                            ? "bg-secondary text-foreground font-medium"
                            : "text-sidebar-foreground font-normal hover:text-foreground hover:bg-sidebar-accent"
                        }`}
                        activeClassName=""
                      >
                        <item.icon
                          className="h-[18px] w-[18px] shrink-0"
                          strokeWidth={2}
                          fill="currentColor"
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
