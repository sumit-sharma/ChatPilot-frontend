import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { MessageSquare, Bot, Zap, Shield, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
            >
              <Zap className="w-4 h-4" />
              <span>Version 2.0 is now live</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              The Next Gen <span className="text-primary">WhatsApp PaaS</span> for Business
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Automate customer support, sales, and operations with our powerful WhatsApp API and Chatbot platform. Scale your communications globally.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link to="/signup">
                <Button size="lg" className="h-12 px-8 text-base">
                  Get Started for Free <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                View Documentation
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="container mx-auto px-4 mt-20"
        >
          <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
            <div className="p-8 h-full flex gap-6">
              <div className="w-64 bg-background/50 rounded-xl border border-border h-full p-4 hidden md:block">
                <div className="space-y-4">
                  <div className="h-8 w-3/4 bg-muted rounded animate-pulse" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 w-full bg-muted/50 rounded" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-background/50 rounded-xl border border-border h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-8 w-48 bg-muted rounded" />
                  <div className="h-8 w-8 bg-muted rounded-full" />
                </div>
                <div className="space-y-6">
                  <div className="flex justify-start">
                    <div className="h-12 w-2/3 bg-primary/10 rounded-2xl rounded-tl-none border border-primary/20" />
                  </div>
                  <div className="flex justify-end">
                    <div className="h-12 w-1/2 bg-muted rounded-2xl rounded-tr-none" />
                  </div>
                  <div className="flex justify-start">
                    <div className="h-12 w-3/4 bg-primary/10 rounded-2xl rounded-tl-none border border-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to grow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple yet powerful features to manage your WhatsApp communication at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Official WhatsApp API",
                desc: "Get verified and access official business features with our high-uptime infrastructure.",
                icon: MessageCircle
              },
              {
                title: "IA powered Chatbots",
                desc: "Build complex automated flows using Gemini AI to handle queries 24/7 without human intervention.",
                icon: Bot
              },
              {
                title: "Unified Team Inbox",
                desc: "Multiple agents can respond to customer queries from a single WhatsApp number.",
                icon: MessageSquare
              },
              {
                title: "Campaign Management",
                desc: "Send bulk messages and notifications with high delivery rates and detailed analytics.",
                icon: Zap
              },
              {
                title: "Secure & Compliant",
                desc: "Enterprise-grade security and full compliance with WhatsApp policies and data regulations.",
                icon: Shield
              },
              {
                title: "REST API & Webhooks",
                desc: "Connect your existing CRM, ERP, or custom apps with our comprehensive developer tools.",
                icon: Zap
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold italic">C</div>
              <span className="font-bold text-xl">ChatFlow</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Privacy</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 ChatFlow Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
