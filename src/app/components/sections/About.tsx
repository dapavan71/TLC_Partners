"use client";

import { motion } from "framer-motion";
import { Check, Shield, Search, HeartHandshake } from "lucide-react";

const BENEFITS = [
  {
    title: "Accuracy",
    description: "Meticulous calculation and error-free financial processing matching the latest regulations.",
    icon: <Check className="w-5 h-5 text-gold" />,
    gradient: "from-gold/20 to-transparent",
  },
  {
    title: "Integrity",
    description: "Strict confidentiality and absolute honesty in managing client books and legal accounts.",
    icon: <Shield className="w-5 h-5 text-gold" />,
    gradient: "from-gold/20 to-transparent",
  },
  {
    title: "Transparency",
    description: "Complete clarity on billing, timelines, filing updates, and compliance requirements.",
    icon: <Search className="w-5 h-5 text-gold" />,
    gradient: "from-gold/20 to-transparent",
  },
  {
    title: "Satisfaction",
    description: "Tailored consulting solutions that prioritize long-term corporate health and peace of mind.",
    icon: <HeartHandshake className="w-5 h-5 text-gold" />,
    gradient: "from-gold/20 to-transparent",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-transparent overflow-hidden z-10">
      {/* Background gradients */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Empowering Financial Peace of Mind.
            </h2>
            <div className="w-12 h-1 bg-gold rounded-sm" />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
              At TLC Partners, we help businesses simplify taxation, accounting, compliance, and wealth management through reliable, transparent, and timely professional advisory.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
              Whether you are a growing startup navigating GST registration, or an established enterprise requiring rigorous corporate compliance, our dedicated team of legal and tax advisors supports your path to scale.
            </p>
          </div>

          {/* Right Column: Values Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group cursor-pointer border border-glass hover:border-gold-glass-border shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex flex-col justify-between"
              >
                {/* Gold corner hover glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-6 font-sans">
                  <span>Our Promise</span>
                  <span>✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
