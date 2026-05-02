"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Code2, Monitor, Smartphone, Globe, Layers, Zap, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20"
              >
                <Code2 className="w-4 h-4" />
                <span>Full-Stack Excellence</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight"
              >
                High Performance <span className="text-primary">Web Applications</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                We build blazingly fast, SEO-optimized, and conversion-focused websites using Next.js, Tailwind CSS, and cutting-edge backend technologies.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="h-12 px-8 font-bold rounded-xl shadow-lg shadow-primary/20">Build My Website</Button>
                <Button size="lg" variant="outline" className="h-12 px-8 font-bold rounded-xl">View Portfolio</Button>
              </motion.div>
            </div>
            
            <div className="flex-1 relative">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 className="relative z-10 grid grid-cols-2 gap-4"
               >
                  <div className="space-y-4">
                    <div className="h-40 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Monitor className="w-12 h-12 text-primary" />
                    </div>
                    <div className="h-64 rounded-3xl bg-muted border border-border flex items-center justify-center p-6 text-center italic text-sm text-muted-foreground">
                      "Clean code is not just written, it's crafted."
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-64 rounded-3xl bg-primary text-primary-foreground flex items-center justify-center p-8">
                      <Smartphone className="w-16 h-16 opacity-50" />
                    </div>
                    <div className="h-40 rounded-3xl bg-card border border-border flex items-center justify-center">
                      <Zap className="w-12 h-12 text-yellow-500" />
                    </div>
                  </div>
               </motion.div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Next.js 15+", desc: "The gold standard for server-side rendering and static generation.", icon: Globe },
              { title: "Tailwind CSS", desc: "Highly efficient styling for modern, responsive interfaces.", icon: Layers },
              { title: "API Integration", desc: "Seamlessly connecting your web front to any backend or SaaS.", icon: Zap },
              { title: "Performance First", desc: "Lighthouse scores that hit 90+ across all categories.", icon: Rocket }
            ].map((c, i) => (
              <div key={i} className="p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Lifecycle</h2>
            <p className="text-muted-foreground">From initial wireframe to a live high-traffic application.</p>
          </div>
          
          <div className="space-y-4">
             {[
               { step: "01", title: "Discovery & UX Research", body: "We analyze your business goals and map out the user journey for maximum conversion." },
               { step: "02", title: "Architecture & Tech Selection", body: "Choosing the right stack to ensure scalability and future-proof maintenance." },
               { step: "03", title: "Agile Sprints", body: "Two-week development cycles with constant feedback and staging environment access." },
               { step: "04", title: "Launch & CI/CD", body: "Automated testing and deployment on Vercel or custom cloud infrastructure." }
             ].map((p, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex items-start gap-6 p-6 rounded-2xl bg-card border border-border"
               >
                 <span className="text-4xl font-black text-primary/10 tracking-tighter shrink-0">{p.step}</span>
                 <div>
                   <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 italic">Ready to ship something <span className="text-primary">extraordinary</span>?</h2>
          <Link href="/signup">
            <Button size="lg" className="h-14 px-12 text-lg font-bold rounded-2xl group shadow-2xl shadow-primary/30">
               Get a Free Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 ChatPilot Inc. Engineering & Product Design.
        </div>
      </footer>
    </div>
  );
}
