"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Users, Globe, Award, Heart, MessageCircle, BarChart, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20"
            >
              Our Mission
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              Revolutionizing <span className="text-primary italic">Conversational</span> Commerce
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Founded in 2024, ChatPilot's mission is to bridge the gap between businesses and customers through intelligent, scalable, and human-like WhatsApp automation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Brands", value: "500+", icon: Globe },
              { label: "Messages Daily", value: "2M+", icon: MessageCircle },
              { label: "Countries", value: "45+", icon: Globe },
              { label: "Uptime", value: "99.99%", icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex items-center justify-center text-primary mb-2">
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ChatPilot began as a small internal tool for a digital marketing agency that struggled to manage hundreds of client WhatsApp queries manually. We realized that existing solutions were either too basic or too complex for the average business.
                </p>
                <p>
                  We spent a year developing our own PaaS layer that simplifies the official WhatsApp API management while adding a powerful AI brain using Google's Gemini models. Today, we empower businesses of all sizes to automate their operations without losing the human touch.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                 <div className="p-4 bg-card border rounded-2xl flex-1 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold">Top AI Startup</p>
                    <p className="text-[10px] uppercase text-muted-foreground font-medium">2024 Recognition</p>
                 </div>
                 <div className="p-4 bg-card border rounded-2xl flex-1 text-center">
                    <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="font-bold">Customer First</p>
                    <p className="text-[10px] uppercase text-muted-foreground font-medium">98% Satisfaction</p>
                 </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-6" />
              <div className="absolute inset-0 bg-muted rounded-[3rem] border-2 border-dashed border-border" />
              <div className="absolute inset-8 bg-card rounded-[2rem] shadow-2xl flex items-center justify-center p-12 text-center">
                 <div className="space-y-4">
                    <BarChart className="w-16 h-16 text-primary/20 mx-auto" />
                    <p className="text-xl font-bold">Scaling with Efficiency</p>
                    <p className="text-sm text-muted-foreground">Our infrastructure grows with your business needs.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we build.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Radical Transparency", desc: "We believe in being open about our performance, pricing, and infrastructure.", icon: Zap },
              { title: "Inclusive AI", desc: "Making advanced artificial intelligence accessible to every local business around the globe.", icon: Users },
              { title: "Zero Trust Security", desc: "Your customer data is your most valuable asset. We treat it with the highest security standards.", icon: ShieldCheck }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-muted/20 border border-border/50 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to join the future of communication?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20">Get Started Today</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-2xl">Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t text-center">
        <p className="text-sm text-muted-foreground font-medium">© 2024 ChatPilot Inc. Built with passion for digital growth.</p>
      </footer>
    </div>
  );
}
