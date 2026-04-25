import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Phone, Video, Info, MoreVertical, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const CHATS = [
  { id: 1, name: "+1 (555) 0123", lastMessage: "How can I upgrade?", time: "2m", unread: 2, status: "online" },
  { id: 2, name: "Marketing Lead", lastMessage: "Thank you for the info!", time: "15m", unread: 0, status: "away" },
  { id: 3, name: "Support Ticket #342", lastMessage: "Sent you the screenshot.", time: "1h", unread: 0, status: "online" },
  { id: 4, name: "+44 20 7946 0852", lastMessage: "Waiting for reply...", time: "2h", unread: 5, status: "offline" },
  { id: 5, name: "John Smith", lastMessage: "The bot was very helpful.", time: "Jan 12", unread: 0, status: "offline" },
];

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(CHATS[0]);
  const [message, setMessage] = useState("");

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-10rem)] flex overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg">
        {/* Chat List */}
        <div className="w-full md:w-80 border-r border-border/50 flex flex-col bg-muted/10">
          <div className="p-4 border-b border-border/50 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">Inbox</h2>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9 h-9 border-none bg-muted/50" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="divide-y divide-border/30">
              {CHATS.map((chat) => (
                <div 
                  key={chat.id} 
                  onClick={() => setSelectedChat(chat)}
                  className={`p-4 flex items-center gap-3 cursor-pointer transition-colors ${selectedChat.id === chat.id ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50"}`}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">{chat.name[0]}</AvatarFallback>
                    </Avatar>
                    {chat.status === "online" && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`text-sm truncate ${chat.unread > 0 ? "font-bold" : "font-medium"}`}>{chat.name}</p>
                      <span className="text-[10px] text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className={`text-xs truncate ${chat.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {chat.lastMessage}
                    </p>
                  </div>
                  {chat.unread > 0 && (
                    <Badge className="h-5 min-w-5 flex items-center justify-center p-0 rounded-full bg-primary text-[10px] font-bold">
                      {chat.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-background">
          {/* Header */}
          <div className="p-4 border-b border-border/50 flex items-center justify-between bg-card/50">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarFallback className="bg-primary/5 text-primary font-bold">{selectedChat.name[0]}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">{selectedChat.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium text-green-500 flex items-center gap-1 uppercase tracking-tighter">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online
                  </span>
                  <Separator orientation="vertical" className="h-2" />
                  <span className="text-[10px] text-muted-foreground font-medium">WhatsApp Business API</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button size="icon" variant="ghost" className="rounded-full"><Phone className="h-4 w-4" /></Button>
              <Button size="icon" variant="ghost" className="rounded-full"><Video className="h-4 w-4" /></Button>
              <Button size="icon" variant="ghost" className="rounded-full"><Info className="h-4 w-4" /></Button>
              <Button size="icon" variant="ghost" className="rounded-full"><MoreVertical className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Badge variant="outline" className="bg-muted/50 border-none text-[10px] uppercase font-bold tracking-widest px-4">Today</Badge>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-2xl rounded-tl-none bg-muted/50 border border-border/50 text-sm leading-relaxed">
                    Hello! I noticed you were looking at our API documentation. Do you have any questions about our pricing?
                    <div className="text-[10px] text-muted-foreground mt-2 text-right">09:42 AM • Sent by Bot</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%] p-4 rounded-2xl rounded-tr-none bg-primary text-primary-foreground text-sm leading-relaxed shadow-lg shadow-primary/10">
                    Yes, I want to know if the 14-day trial includes access to the Gemini AI integration for chatbots.
                    <div className="text-[10px] text-primary-foreground/70 mt-2 text-right">09:45 AM • Delivered</div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-2xl rounded-tl-none bg-muted/50 border border-border/50 text-sm leading-relaxed">
                    Absolutely! All our features, including the AI platform, are available during the trial. You can start building your first bot right away.
                    <div className="text-[10px] text-muted-foreground mt-2 text-right">09:46 AM • Sent by Bot</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-border/50">
            <form 
              onSubmit={(e) => { e.preventDefault(); setMessage(""); }}
              className="flex items-center gap-2 bg-muted/30 p-2 rounded-2xl border border-border/50 focus-within:ring-2 focus-within:ring-primary/20 transition-all"
            >
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full shrink-0">
                <Plus className="h-5 w-5" />
              </Button>
              <Input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..." 
                className="border-none bg-transparent shadow-none focus-visible:ring-0 h-10 text-sm"
              />
              <Button type="submit" size="icon" className="h-9 w-9 rounded-xl shrink-0 shadow-md">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
