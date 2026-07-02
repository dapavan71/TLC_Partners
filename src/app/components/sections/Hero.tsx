"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, FileSpreadsheet, Percent, Landmark } from "lucide-react";

export default function Hero() {
  const handleConsultClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mini Chart data paths
  const chartPath = "M 10 70 Q 30 40, 50 60 T 90 20 T 130 50 T 170 10";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent z-10"
    >
      {/* Light glow effects */}
      <div className="absolute top-[25%] left-[20%] w-[350px] h-[350px] rounded-full bg-gold/10 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Grid mesh backdrop */}
      <div className="absolute inset-0 bg-grid-mesh opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Call to Action Details */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-gold/20 text-xs font-semibold uppercase tracking-wider text-gold"
          >
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Trusted Professional Advisory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1] text-left"
          >
            Driving Growth.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-glow">
              Defining Success.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-xl text-left"
          >
            Empowering businesses and individuals with trusted tax, accounting, GST, corporate compliance, and strategic financial advisory services across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              onClick={(e) => handleConsultClick(e, "contact")}
              className="px-6 py-3.5 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-black font-sans font-bold uppercase tracking-wider text-xs rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.45)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleConsultClick(e, "services")}
              className="px-6 py-3.5 glass-panel hover:bg-gold/10 border-white/10 hover:border-gold/30 text-white hover:text-gold font-sans font-bold uppercase tracking-wider text-xs rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Services</span>
            </a>
          </motion.div>


        </div>

        {/* Right Side: Interactive Mockup Finance Dashboard */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[450px]">
          {/* Main Central Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-sm glass-panel-gold rounded-2xl p-6 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden"
          >
            {/* Gloss light beam across card */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Landmark className="w-5 h-5 text-gold" />
                <span className="text-sm font-semibold tracking-wider uppercase text-white font-sans">
                  TLC Partners
                </span>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
            </div>



            {/* Simulated Graph Widget */}
            <div className="bg-black/40 rounded-xl p-4 border border-glass mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-400 font-sans">Savings Growth</span>
                <span className="text-xs text-green-500 font-bold font-sans">+24.8%</span>
              </div>
              
              <div className="relative h-20 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                  
                  {/* Gradient area */}
                  <path
                    d={`${chartPath} L 170 80 L 10 80 Z`}
                    fill="url(#goldGradient)"
                    opacity="0.15"
                  />
                  
                  {/* Drawing Stroke */}
                  <motion.path
                    d={chartPath}
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Bottom mini status */}
            <div className="flex justify-between items-center text-xs text-gray-400 font-sans pt-2 border-t border-glass">
              <span>GST Compliance</span>
              <span className="text-gold font-semibold">100% Filed</span>
            </div>
          </motion.div>

          {/* Floating widget 1: Status badge */}
          <motion.div
            className="absolute top-4 -left-6 glass-panel rounded-xl p-3 border-glass/40 shadow-lg z-30 flex items-center gap-3"
            animate={{
              y: [-8, 8, -8],
              x: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
              <Percent className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 font-sans uppercase">Tax Advisory</span>
              <span className="block text-xs font-bold text-white">Optimal Planning</span>
            </div>
          </motion.div>

          {/* Floating widget 2: Live Alert */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-panel rounded-xl p-3 border-glass/40 shadow-lg z-30 flex items-center gap-3 whitespace-nowrap"
            animate={{
              y: [8, -8, 8],
              x: [2, -2, 2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 font-sans uppercase">ITR Filing</span>
              <span className="block text-xs font-bold text-white">Processed Safely</span>
            </div>
          </motion.div>

          {/* Floating widget 3: NOC Audit badge */}
          <motion.div
            className="absolute top-4 -right-6 glass-panel rounded-xl p-3 border-glass/40 shadow-lg z-30 flex items-center gap-3 hidden sm:flex"
            animate={{
              y: [-5, 5, -5],
              x: [4, -4, 4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 font-sans uppercase">NOC Audit</span>
              <span className="block text-xs font-bold text-white">99.9% Verified</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
