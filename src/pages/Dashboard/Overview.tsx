import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  BarChart3, 
  MessageSquare, 
  Bot, 
  Zap, 
  TrendingUp,
  MessageCircle,
  Plus
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Overview() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Messages", value: "128,432", trend: "+12.5%", icon: MessageSquare },
            { label: "Active Bots", value: "12", trend: "+2", icon: Bot },
            { label: "Delivery Rate", value: "99.8%", trend: "+0.1%", icon: Zap },
            { label: "Active Users", value: "4,231", trend: "+18%", icon: MessageCircle },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <stat.icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
                  <span className="text-xs text-green-500 font-bold bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <TrendingUp className="h-3 w-3" /> {stat.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Activity</CardTitle>
                  <CardDescription>Message volume across all channels</CardDescription>
                </div>
                <Tabs defaultValue="7d" className="w-[180px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="7d">7 Days</TabsTrigger>
                    <TabsTrigger value="30d">30 Days</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full flex items-end gap-2 pt-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <div 
                        className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-300 rounded-t-sm relative"
                        style={{ height: `${Math.floor(Math.random() * 80) + 20}%` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-xl">
                          {Math.floor(Math.random() * 5000) + 1000}
                        </div>
                      </div>
                      <span className="text-[10px] text-muted-foreground uppercase font-mono">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="flex items-center justify-between flex-row">
                <div>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Latest interactions with your bots</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  <div className="divide-y divide-border/50">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                        <Avatar className="h-10 w-10 border border-border">
                          <AvatarFallback className="bg-primary/5 text-primary font-bold">U{i}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-sm truncate">+1 (555) 000-{i}234</p>
                            <span className="text-[10px] text-muted-foreground font-medium bg-muted px-2 py-0.5 rounded">2 min ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate leading-relaxed">
                            {i % 2 === 0 ? "Hello, I would like to know more about your premium plan..." : "How do I upgrade my current subscription to include more bots?"}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                           <Badge variant="secondary" className="text-[9px] uppercase tracking-tighter">Support AI</Badge>
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content Area */}
          <div className="space-y-6">
            <Card className="bg-primary border-none text-primary-foreground shadow-lg shadow-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 fill-current" /> Auto-Broadcast
                </CardTitle>
                <CardDescription className="text-primary-foreground/70 text-xs">
                  Schedule automated messages for your audience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="secondary" className="w-full justify-between font-bold">
                  Create New <Plus className="h-4 w-4" />
                </Button>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-primary-foreground/50">Next Run</p>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/10 text-sm font-medium flex items-center justify-between">
                    Today at 2:00 PM <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Wait list</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white font-semibold">
                  Manage Queue
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Campaign Stats</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {[
                    { name: "Welcome Flow", status: "Running", rate: "98%", color: "bg-blue-500" },
                    { name: "Summer Promo", status: "Paused", rate: "92%", color: "bg-yellow-500" },
                    { name: "Support AI", status: "Running", rate: "100%", color: "bg-green-500" },
                  ].map((camp, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 group">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${camp.color}`} />
                        <div className="space-y-0.5">
                          <p className="text-sm font-semibold group-hover:text-primary transition-colors">{camp.name}</p>
                          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">{camp.status}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">{camp.rate}</p>
                        <span className="text-[10px] text-muted-foreground font-medium">Delivery</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
