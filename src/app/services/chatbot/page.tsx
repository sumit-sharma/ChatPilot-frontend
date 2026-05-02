"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Bot, MessageCircle, Cpu, ShieldCheck, Zap, Code, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-primary-foreground shadow-2xl shadow-primary/40 rotate-6"
            >
              <Bot className="w-10 h-10" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Next Gen <span className="text-primary italic">AI Brains</span> for WhatsApp
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Leveraging Gemini AI models to create chatbots that understand context, nuance, and customer intent with human-level accuracy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <Link href="/signup">
                <Button size="lg" className="h-12 px-8 font-bold rounded-xl">Build Your Bot</Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 font-bold rounded-xl">Watch Demo</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Intelligent Automation</h2>
              <div className="space-y-6">
                {[
                  { title: "Natural Language Processing", desc: "Bots that don't rely on buttons. They understand what users actually type.", icon: Cpu },
                  { title: "Multi-Language Support", desc: "Communicate with your global customer base in 100+ languages fluently.", icon: MessageCircle },
                  { title: "Seamless Human Handoff", desc: "When cases get complex, our AI smartly routes the chat to an available agent.", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 bg-card rounded-[3rem] border border-border shadow-xl aspect-square"
            >
              <div className="h-full w-full rounded-[2.5rem] bg-muted/50 border border-border/50 p-6 flex flex-col gap-4">
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-primary/20" />
                   <div className="flex-1 h-12 bg-muted rounded-2xl rounded-tl-none p-3 text-xs">How can I help you today?</div>
                </div>
                <div className="flex gap-3 justify-end">
                   <div className="w-2/3 h-12 bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-3 text-xs flex items-center justify-center font-medium">I need to track my order #7721</div>
                   <div className="w-8 h-8 rounded-full bg-muted shadow-sm" />
                </div>
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-primary/20" />
                   <div className="flex-1 h-20 bg-muted rounded-2xl rounded-tl-none p-3 space-y-2">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-primary"><Sparkles className="w-3 h-3" /> AI THINKING...</div>
                     <div className="text-xs">Checking system... Your order #7721 is currently in transit and will arrive by 5 PM tomorrow.</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "24/7 Response", desc: "Never miss a lead, even at 3 AM.", icon: Zap },
              { title: "Zero Latency", desc: "Instant replies for instant gratification.", icon: ShieldCheck },
              { title: "Custom Logic", desc: "Connects with your SQL/API backend.", icon: Code },
              { title: "ROI Focused", desc: "Reduce support costs by up to 70%.", icon: Sparkles }
            ].map((b, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mx-auto">
                  <b.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Built on Corporate-Grade Security</h2>
          <p className="text-muted-foreground mb-10">We prioritize data privacy. All AI models run in sandboxed environments with full SOC2 compliance.</p>
          <Button size="lg" className="rounded-2xl px-12 group">
            Speak to a Consultant <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <footer className="py-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 ChatPilot Inc. Artificial Intelligence Unit.
        </div>
      </footer>
    </div>
  );
}
