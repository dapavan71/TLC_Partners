"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Create a spring physics scroll progress scale
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phoneNo = "+918073016590";
  const whatsappUrl = `https://wa.me/918073016590?text=Hi%20TLC%20Partners,%20I'm%20interested%20in%20your%20financial%20services.`;

  return (
    <>
      {/* 1. Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. Floating Buttons Group */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 items-end">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full glass-panel border-green-500/20 text-[#25D366] hover:bg-green-500/10 hover:border-green-500/40 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all cursor-pointer relative group"
          aria-label="Chat on WhatsApp"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute right-14 bg-black/90 border border-glass text-xs text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            WhatsApp Consult
          </span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href={`tel:${phoneNo}`}
          className="flex items-center justify-center w-12 h-12 rounded-full glass-panel-gold text-gold hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer relative group"
          aria-label="Call TLC Partners"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-black/90 border border-glass text-xs text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            Call an Expert
          </span>
        </motion.a>

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 rounded-full glass-panel border-gold/20 text-gold hover:bg-gold/10 hover:border-gold/40 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-pointer"
              aria-label="Back to top"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
