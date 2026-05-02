"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Check, Zap, Rocket, Shield, Crown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses starting with WhatsApp automation.",
    features: [
      "1,000 Messages / month",
      "2 Active Chatbots",
      "Official API Access",
      "Unified Team Inbox",
      "Basic Analytics",
      "Email Support"
    ],
    icon: Zap,
    popular: false,
    color: "primary"
  },
  {
    name: "Professional",
    price: "$99",
    description: "Scale your business with advanced AI features and higher limits.",
    features: [
      "10,000 Messages / month",
      "10 Active Chatbots",
      "AI Powered (Gemini L1)",
      "Campaign Management",
      "Advanced Stats",
      "Priority Support",
      "Remove Branding"
    ],
    icon: Rocket,
    popular: true,
    color: "primary"
  },
  {
    name: "Enterprise",
    price: "$249",
    description: "Full power for large scale operations and custom integrations.",
    features: [
      "Unlimited Messages",
      "Unlimited Chatbots",
      "AI Powered (Gemini Pro)",
      "Custom Webhooks",
      "Dedicated Infrastructure",
      "24/7 Account Manager",
      "SLA Guarantee"
    ],
    icon: Crown,
    popular: false,
    color: "foreground"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Simple, transparent <span className="text-primary">pricing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Choose the plan that fits your growth strategy. Start your 14-day free trial today.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular 
                  ? "border-primary shadow-2xl shadow-primary/10 bg-card scale-105 z-10" 
                  : "border-border bg-card/50 hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-${plan.color}/10 flex items-center justify-center text-${plan.color} mb-6`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm font-medium">/mo</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/signup" className="w-full">
                  <Button 
                    className={`w-full h-12 text-base font-bold rounded-xl transition-all ${
                      plan.popular 
                      ? "shadow-lg shadow-primary/20" 
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                    variant={plan.popular ? "default" : "secondary"}
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-muted/30 border border-border/50 text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-primary" /> Custom Enterprise Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Need more than 100,000 messages per month or full on-premise installation? 
              Our team can build a custom package tailored to your exact infrastructure needs.
            </p>
            <Button variant="outline" className="h-11 px-8 rounded-xl font-bold border-primary/20 hover:bg-primary/5 transition-colors">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { q: "Can I upgrade or downgrade anytime?", a: "Yes, you can change your plan settings in the dashboard at any time. Changes are applied at the start of your next billing cycle." },
              { q: "What happens after the 14-day trial?", a: "We'll notify you before the trial ends. You can then choose a plan to keep your workflows running smoothly." },
              { q: "Does the pricing include WhatsApp fees?", a: "Our price covers the platform access. WhatsApp Business API usage fees are billed separately based on conversation-based rates." },
              { q: "Do you offer discounts for non-profits?", a: "Yes! Please contact our sales team with your organization details for a specialized discount code." }
            ].map((faq, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-bold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-sm text-muted-foreground">© 2024 ChatPilot Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
