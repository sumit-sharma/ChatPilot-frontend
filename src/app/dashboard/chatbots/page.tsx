"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Plus, MoreHorizontal, MessageCircle, Play, Pause, Trash2, Settings2 } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const BOTS = [
  { id: 1, name: "Customer Support L1", description: "Handles common billing and account queries.", status: "active", messages: "12.4k", accuracy: "94%" },
  { id: 2, name: "Sales Lead Qualifier", description: "Qualifies new leads from WhatsApp landing pages.", status: "active", messages: "5.2k", accuracy: "88%" },
  { id: 3, name: "Help Desk Assistant", description: "Internal bot for team members.", status: "paused", messages: "1.1k", accuracy: "99%" },
  { id: 4, name: "Feedback Collector", description: "Collects post-purchase reviews.", status: "active", messages: "8.9k", accuracy: "91%" },
];

export default function Chatbots() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Chatbots</h1>
          <p className="text-muted-foreground">Manage your automated WhatsApp agents and workflows.</p>
        </div>
        <Button className="font-bold shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Create New Bot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BOTS.map((bot) => (
          <Card key={bot.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Bot className="h-5 w-5" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}>
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Settings2 className="mr-2 h-4 w-4" /> Configure
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash2 className="mr-2 h-4 w-4 text-destructive" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardTitle className="text-lg">{bot.name}</CardTitle>
              <CardDescription className="line-clamp-2 min-h-[40px]">
                {bot.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm py-2 px-3 bg-muted/50 rounded-lg">
                <span className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Status</span>
                <Badge variant={bot.status === "active" ? "default" : "secondary"} className="text-[10px] uppercase font-bold px-2 py-0">
                  {bot.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Messages</p>
                  <p className="text-lg font-bold">{bot.messages}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">Accuracy</p>
                  <p className="text-lg font-bold text-green-500">{bot.accuracy}</p>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                 <Button variant="outline" size="sm" className="flex-1 font-bold text-xs">
                   {bot.status === "active" ? <Pause className="mr-1.5 h-3 w-3" /> : <Play className="mr-1.5 h-3 w-3" />}
                   {bot.status === "active" ? "Pause" : "Resume"}
                 </Button>
                 <Button size="sm" variant="secondary" className="flex-1 font-bold text-xs ring-1 ring-border">
                   <MessageCircle className="mr-1.5 h-3 w-3" /> Test
                 </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <button className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-muted/50 transition-colors group cursor-pointer min-h-[300px]">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform">
            <Plus className="h-6 w-6" />
          </div>
          <div className="text-center">
            <p className="font-bold">Add Automation</p>
            <p className="text-xs text-muted-foreground">Deploy a new AI brain to your team.</p>
          </div>
        </button>
      </div>
    </div>
  );
}
