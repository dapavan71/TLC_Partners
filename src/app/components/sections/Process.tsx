"use client";

import { motion } from "framer-motion";
import { HelpCircle, FolderOpen, ClipboardCheck, Cog, CheckCircle2 } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Consultation",
    desc: "Speak directly with an expert to outline your goals, structure files, and verify statutory criteria.",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    num: "02",
    title: "Document Collection",
    desc: "Securely upload the required PAN, GST, bank sheets, or company records via our portal.",
    icon: <FolderOpen className="w-5 h-5" />,
  },
  {
    num: "03",
    title: "Verification",
    desc: "Our financial review team double-checks files to prevent calculations errors and audits.",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    num: "04",
    title: "Processing",
    desc: "Experienced CAs draft filings, calculate exact returns, or file registration parameters.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    num: "05",
    title: "Successful Filing",
    desc: "Receive government acknowledgement receipts, portals logins, and final compliance slips.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative bg-transparent overflow-hidden z-10">
      {/* Background radial gradient glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mb-20 md:mb-28">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
            Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            How We Partner With You
          </h2>
          <div className="w-16 h-1 bg-gold rounded-sm mt-1" />
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-sans mt-2">
            Five simple steps to secure, accurate, and completely stress-free corporate compliance.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 hidden lg:block z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Glowing step circle */}
                <div className="relative mb-6">
                  {/* Outer breathing ring */}
                  <div className="absolute inset-[-6px] rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 group-hover:scale-110 blur-sm transition-all duration-500" />
                  
                  <div className="w-14 h-14 rounded-full glass-panel border-glass hover:border-gold/50 flex items-center justify-center text-gold group-hover:text-black group-hover:bg-gold relative z-10 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    {step.icon}
                  </div>

                  {/* Step order index badge */}
                  <span className="absolute -bottom-2 -right-2 bg-black border border-gold/40 text-[9px] font-sans font-bold text-gold px-1.5 py-0.5 rounded-full z-20">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-xs px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
