"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Zap, Tag, MessageCircle, BadgeCheck, Eye } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const FEATURES: Feature[] = [
  {
    title: "Expert Professionals",
    desc: "Team of chartered accountants, lawyers, and compliance advisors with years of industry depth.",
    icon: <Award className="w-5 h-5 text-gold" />,
  },
  {
    title: "Fast Turnaround",
    desc: "Optimized pipelines ensure company setups and filings are processed well ahead of deadline dates.",
    icon: <Zap className="w-5 h-5 text-gold" />,
  },
  {
    title: "Affordable Pricing",
    desc: "No hidden bills. We deliver corporate-grade advisory packages designed for startups at logical flat rates.",
    icon: <Tag className="w-5 h-5 text-gold" />,
  },
  {
    title: "Personalized Consult",
    desc: "Direct access to specialists who understand your specific industry vertical and growth goals.",
    icon: <MessageCircle className="w-5 h-5 text-gold" />,
  },
  {
    title: "100% Compliance",
    desc: "Rigorous quality checks guarantee error-free document validation matching Indian corporate acts.",
    icon: <BadgeCheck className="w-5 h-5 text-gold" />,
  },
  {
    title: "Transparent Process",
    desc: "Track status updates easily. Clear documentation lists and simple, step-by-step filings.",
    icon: <Eye className="w-5 h-5 text-gold" />,
  },
];

interface StatProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

function StatCounter({ target, suffix = "", prefix = "" }: StatProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasTriggered, target]);

  return (
    <span ref={elementRef} className="font-serif">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-[#030303] overflow-hidden z-10">
      {/* Background gradients */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
            Why TLC Partners
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Setting the Corporate Standard
          </h2>
          <div className="w-16 h-1 bg-gold rounded-sm mt-1" />
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-sans mt-2">
            We merge professional financial skill sets with modern turnaround timelines, ensuring compliance is never a bottleneck.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 md:mb-28">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 rounded-2xl border border-glass hover:border-gold-glass-border hover:shadow-[0_8px_32px_rgba(212,175,55,0.04)] text-left flex gap-4 cursor-default group transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counters Highlight Panel */}
        <div className="glass-panel border-gold-glass-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-mesh opacity-20 pointer-events-none" />
          
          <div className="flex flex-col items-center justify-center relative z-10 text-center">
            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                <StatCounter target={24} suffix="/7" />
              </span>
              <span className="text-xs md:text-sm font-sans tracking-widest text-gold uppercase font-semibold">
                Advisory Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
