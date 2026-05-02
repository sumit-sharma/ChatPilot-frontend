"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Share2, Users, BarChart, Zap, Target, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold"
              >
                <Target className="w-4 h-4" />
                <span>Hyper-Targeted Growth</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Dominating <span className="text-primary text-glow">WhatsApp</span> & Social Channels
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our data-driven marketing strategies help you reach customers where they spend most of their time. From viral WhatsApp campaigns to high-converting social media ads.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/signup">
                  <Button size="lg" className="h-12 px-8 font-bold">Start Campaign</Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 font-bold">View Case Studies</Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 p-4 bg-card rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
                <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                  <Share2 className="w-20 h-20 text-primary/20" />
                </div>
                <div className="mt-6 p-4 space-y-3">
                  <div className="h-4 w-3/4 bg-muted rounded" />
                  <div className="h-4 w-1/2 bg-muted rounded" />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Marketing Ecosystem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Full-funnel strategies designed for the mobile-first era.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WhatsApp Broadcasts",
                desc: "98% open rates. Reach thousands of customers directly in their chat app with personalized offers.",
                icon: Megaphone
              },
              {
                title: "Social Media Ads",
                desc: "High-ROI campaigns across Meta, TikTok, and Instagram targeting your ideal customer profile.",
                icon: Share2
              },
              {
                title: "Community Building",
                desc: "Establish thriving WhatsApp groups and Telegram channels for high brand loyalty.",
                icon: Users
              },
              {
                title: "Performance Tracking",
                desc: "Real-time analytics to measure every click, conversion, and cent spent on your campaigns.",
                icon: BarChart
              },
              {
                title: "Retargeting Flows",
                desc: "Automated follow-ups for abandoned carts and interested leads via WhatsApp API.",
                icon: Zap
              },
              {
                title: "Content Strategy",
                desc: "Visual storytelling that stops the scroll and drives engagement across all platforms.",
                icon: Target
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to scale your reach?</h2>
          <p className="max-w-2xl mx-auto opacity-90 text-lg font-medium">
            Join 500+ brands growing their business using our specialized social marketing framework.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold rounded-2xl">
            Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 ChatPilot Inc. Digital Marketing Division.
        </div>
      </footer>
    </div>
  );
}
