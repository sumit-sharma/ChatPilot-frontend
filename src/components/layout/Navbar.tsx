import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
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
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold italic">C</div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">ChatPilot</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          <a href="#" className="hover:text-primary transition-colors">API</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="text-sm">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="text-sm shadow-md shadow-primary/10">Get Started</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
