"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Linkedin, Facebook } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Info Side */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20"
                  >
                    Contact Us
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                  >
                    Let's start a <span className="text-primary italic">conversation</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-muted-foreground"
                  >
                    Have a question about our platform or enterprise features? Our team is here to help you scale your communications.
                  </motion.p>
                </div>

                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email Support", value: "hello@chatpilot.com", sub: "Response time: < 2 hours" },
                    { icon: Phone, label: "Sales Team", value: "+1 (888) CHAT-PILOT", sub: "Mon-Fri, 9am - 6pm EST" },
                    { icon: MapPin, label: "Headquarters", value: "79 Madison Ave, New York, NY", sub: "10016, United States" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">{item.label}</p>
                        <p className="text-lg font-bold text-foreground">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8">
                  <p className="text-sm font-bold mb-4 uppercase tracking-widest text-muted-foreground/60">Follow Us</p>
                  <div className="flex gap-4">
                    {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                      <button key={i} className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-none shadow-2xl shadow-primary/10 overflow-hidden rounded-[2rem]">
                  <CardContent className="p-8 md:p-10">
                    {submitted ? (
                      <div className="text-center space-y-6 py-20 animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                          <Send className="w-10 h-10" />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-2xl font-bold">Message Sent!</h2>
                          <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly.</p>
                        </div>
                        <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-xl font-bold">Send another message</Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" required className="h-12 bg-muted/30 rounded-xl" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" required className="h-12 bg-muted/30 rounded-xl" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email</Label>
                          <Input id="email" type="email" placeholder="john@company.com" required className="h-12 bg-muted/30 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="How can we help?" required className="h-12 bg-muted/30 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Tell us more about your project..." className="min-h-[150px] bg-muted/30 rounded-xl py-4" required />
                        </div>
                        <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 group" disabled={loading}>
                          {loading ? "Sending..." : (
                            <>
                              Send Message <MessageSquare className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </>
                          )}
                        </Button>
                        <p className="text-[10px] text-center text-muted-foreground font-medium">
                          By submitting this form, you agree to our processing of your personal data as described in our privacy policy.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section Placeholder */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto h-[400px] bg-muted rounded-[3rem] border border-border flex items-center justify-center p-12 text-center group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent group-hover:opacity-100 opacity-0 transition-opacity" />
            <div className="relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-card border shadow-sm flex items-center justify-center text-primary mx-auto">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Global Presence</h3>
              <p className="text-muted-foreground max-w-sm">We are a remote-first team with hubs in New York, London, and Singapore.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-medium">© 2024 ChatPilot Relations Office.</p>
        </div>
      </footer>
    </div>
  );
}
