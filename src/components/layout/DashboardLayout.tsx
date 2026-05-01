import React from "react";
import { 
  BarChart3, 
  MessageSquare, 
  Bot, 
  Settings as SettingsIcon, 
  LayoutDashboard, 
  Send, 
  Users, 
  Bell,
  Search,
  LogOut
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/30 w-full font-sans">
        <AppSidebar currentPath={location.pathname} />
        <SidebarInset className="flex-1 overflow-auto bg-background/50">
          <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-background/80 backdrop-blur-md px-6 gap-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-lg font-semibold capitalize text-foreground">
                {location.pathname.split("/").pop() || "Dashboard"}
              </h1>
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search..." 
                    className="w-64 pl-9 h-9 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary/20"
                  />
                </div>
                <Button variant="ghost" size="icon" className="relative group">
                  <Bell className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
                </Button>
                <Link to="/dashboard/settings">
                  <Avatar className="h-8 w-8 ring-2 ring-primary/10 hover:ring-primary/30 transition-all cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </header>
          
          <main className="p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function AppSidebar({ currentPath }: { currentPath: string }) {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Overview", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Messages", icon: MessageSquare, path: "/dashboard/messages" },
    { label: "Chatbots", icon: Bot, path: "/dashboard/chatbots" },
    { label: "Campaigns", icon: Send, path: "/dashboard/campaigns" },
    { label: "Contacts", icon: Users, path: "/dashboard/contacts" },
    { label: "Analytics", icon: BarChart3, path: "/dashboard/analytics" },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <Sidebar variant="sidebar" className="border-r border-border/50">
      <SidebarHeader className="h-16 flex items-center px-6 border-b border-border/50">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold italic group-hover:rotate-12 transition-transform">C</div>
          <span className="font-bold text-lg text-foreground">ChatPilot</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-2 py-4 gap-1">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link to={item.path}>
                <SidebarMenuButton 
                  isActive={currentPath === item.path} 
                  tooltip={item.label}
                  className={`
                    transition-all duration-200
                    ${currentPath === item.path 
                      ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground shadow-md shadow-primary/20" 
                      : "hover:bg-primary/10 hover:text-primary text-muted-foreground"}
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        
        <div className="px-4 py-2 mt-auto">
          <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 mb-2">Account</p>
          <SidebarMenu className="gap-1">
             <SidebarMenuItem>
                <Link to="/dashboard/settings">
                  <SidebarMenuButton 
                    isActive={currentPath === "/dashboard/settings"}
                    tooltip="Settings"
                  >
                    <SettingsIcon className="w-4 h-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={handleLogout}
                  tooltip="Log Out"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/50 p-4">
        <div className="flex items-center gap-3 px-2">
          <Avatar className="h-9 w-9 border border-border shadow-sm">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">
              {user?.name?.split(" ").map((n: string) => n[0]).join("") || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-foreground">{user?.name || "User"}</p>
            <p className="text-[10px] text-muted-foreground truncate uppercase tracking-widest font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-sm inline-block">Pro Plan</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
