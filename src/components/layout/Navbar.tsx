import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Megaphone, 
  Bot, 
  Code2, 
  Zap, 
  ArrowRight,
  MessageCircle,
  Share2
} from "lucide-react";

const SERVICES = [
  {
    title: "Marketing & Social",
    description: "Multi-channel growth strategies for mobile first brands.",
    href: "/services/marketing",
    icon: Megaphone,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "AI Chatbots",
    description: "Intelligent automation powered by Gemini AI models.",
    href: "/services/chatbot",
    icon: Bot,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Web Development",
    description: "High-performance Next.js apps and corporate websites.",
    href: "/services/web-development",
    icon: Code2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6"
      }`}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold italic group-hover:rotate-6 transition-transform">C</div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">ChatPilot</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link href="/" className="px-4 py-2 hover:text-primary transition-colors">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            <button 
              className={`flex items-center gap-1 px-4 py-2 hover:text-primary transition-colors cursor-pointer ${isMenuOpen ? "text-primary" : ""}`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                >
                  <div className="bg-card border border-border shadow-2xl rounded-3xl overflow-hidden p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1 space-y-4">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground px-2">Deliverables</p>
                        {SERVICES.map((service) => (
                          <Link 
                            key={service.title}
                            href={service.href}
                            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-muted transition-colors group"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className={`w-10 h-10 rounded-xl ${service.bgColor} flex items-center justify-center ${service.color} shrink-0`}>
                              <service.icon className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <p className="font-bold text-sm group-hover:text-primary transition-colors">{service.title}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="col-span-1 bg-muted/50 rounded-2xl p-6 flex flex-col justify-between">
                        <div className="space-y-4">
                           <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                             <Zap className="w-4 h-4" /> Featured Solution
                           </div>
                           <h4 className="font-bold text-lg leading-tight">WhatsApp PaaS for Enterprise</h4>
                           <p className="text-xs text-muted-foreground leading-relaxed">
                             High throughput, dedicated instances, and 24/7 priority support for large scale operations.
                           </p>
                        </div>
                        <Button size="sm" className="w-full font-bold h-10 rounded-xl group">
                          Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between px-2">
                       <div className="flex items-center gap-4">
                          <Link href="#" className="text-[10px] uppercase font-bold text-muted-foreground hover:text-primary transition-colors">Case Studies</Link>
                          <Link href="#" className="text-[10px] uppercase font-bold text-muted-foreground hover:text-primary transition-colors">Documentation</Link>
                          <Link href="#" className="text-[10px] uppercase font-bold text-muted-foreground hover:text-primary transition-colors">Support</Link>
                       </div>
                       <div className="flex items-center gap-2">
                          <Share2 className="w-3 h-3 text-muted-foreground" />
                          <MessageCircle className="w-3 h-3 text-muted-foreground" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/pricing" className="px-4 py-2 hover:text-primary transition-colors">Pricing</Link>
          <Link href="/about" className="px-4 py-2 hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="px-4 py-2 hover:text-primary transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium">Log In</Button>
          </Link>
          <Link href="/signup">
            <Button className="text-sm font-bold shadow-lg shadow-primary/20 rounded-xl px-6">Get Started</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
