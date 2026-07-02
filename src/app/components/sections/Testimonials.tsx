"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "TLC Partners simplified our corporate GST compliance completely. Their response time is exceptional, and they successfully reclaimed pending Input Tax Credits we had assumed lost.",
    name: "Rajesh Krishnan",
    role: "Managing Director",
    company: "K-Tech Engineering Solutions",
    rating: 5,
    initials: "RK",
  },
  {
    quote: "As a technology co-founder, managing complex ROC audits and filings was a huge headache. TLC Partners took over our corporate accounts and keeps everything perfectly compliant.",
    name: "Anjali Sharma",
    role: "Co-Founder",
    company: "Vistara Web Analytics",
    rating: 5,
    initials: "AS",
  },
  {
    quote: "Their strategic tax planning advice saved us substantial corporate tax this financial year. Their team is extremely professional, clear, and highly organized.",
    name: "Dr. Vivek Murthy",
    role: "Founder & Investor",
    company: "Narayana Clinics & Healthcare",
    rating: 5,
    initials: "VM",
  },
  {
    quote: "I outsourced my freelance consulting bookkeeping and ITR filings to TLC. The transparency of their documentation and flat pricing is exactly what growing professionals need.",
    name: "Sneha Patil",
    role: "Senior UX Consultant",
    company: "Studio Design Craft",
    rating: 5,
    initials: "SP",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-[#030303] overflow-hidden z-10">
      {/* Background decoration */}
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-gold rounded-sm mt-1" />
        </div>

        {/* Carousel Slider Card */}
        <div className="relative h-[340px] sm:h-[280px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full glass-panel border-gold-glass-border rounded-3xl p-8 md:p-12 relative flex flex-col items-center text-center cursor-default shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
            >
              {/* Quote Mark Icon */}
              <Quote className="absolute top-6 left-6 text-gold/10 w-16 h-16 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text Quote */}
              <p className="text-sm md:text-base text-gray-300 font-sans italic leading-relaxed mb-8 max-w-2xl">
                "{current.quote}"
              </p>

              {/* User Bio Card */}
              <div className="flex items-center gap-4">
                {/* Initials Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark text-black font-sans font-bold text-sm flex items-center justify-center shadow-md">
                  {current.initials}
                </div>
                
                <div className="text-left">
                  <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wider">
                    {current.name}
                  </h4>
                  <span className="text-xs text-gray-500 font-sans">
                    {current.role}, <span className="text-gold/80">{current.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots and Arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full glass-panel border-glass text-gray-400 hover:text-gold hover:border-gold/50 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? "bg-gold w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full glass-panel border-glass text-gray-400 hover:text-gold hover:border-gold/50 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
