"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Determine active section on scroll
    const observers = NAV_ITEMS.map((item) => {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 glass-panel border-b border-glass bg-background/70 shadow-lg shadow-black/30"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Elegant Logo Design */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex flex-col relative group cursor-pointer"
        >
          <div className="flex items-baseline relative">
            <span className="font-serif text-2xl font-bold tracking-tight text-white select-none">
              TLC
            </span>
            <span className="font-sans text-xs italic font-medium tracking-wide text-gold ml-1.5 translate-y-[-1px] select-none">
              Partners
            </span>
          </div>
          <span className="text-[7px] tracking-[0.25em] font-sans text-gray-500 uppercase font-bold mt-0.5 select-none transition-colors group-hover:text-gold">
            Driving Growth. Defining Success.
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm tracking-widest font-sans uppercase transition-colors py-1 ${
                  isActive ? "text-gold font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                
                {/* Underline highlight */}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2 text-xs font-sans font-semibold uppercase tracking-widest text-gold border border-gold hover:bg-gold hover:text-black rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Consult Now
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-gold p-1 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col justify-center px-8 md:px-16"
          >
            {/* Background elements */}
            <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-72 h-72 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 max-w-md mx-auto w-full text-center">
              {NAV_ITEMS.map((item, idx) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-2xl tracking-widest font-serif transition-colors py-2 block ${
                      isActive ? "text-gold font-bold" : "text-gray-400 hover:text-white"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-black bg-gold hover:bg-gold-light rounded-sm inline-block w-full transition-all duration-300"
                >
                  Consult Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
