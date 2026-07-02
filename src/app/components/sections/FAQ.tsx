"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How long does GST registration take?",
    answer: "Typically, it takes 2 to 5 working days for the government department to approve a new GST Registration. The exact timeline depends on the accuracy of the submitted address proofs and prompt replies to any clarification requests from officials. We guide you through compiling complete records to minimize any delay risk.",
  },
  {
    question: "Can you file my ITR online?",
    answer: "Yes, 100%. We handle the entire preparation, calculations, and electronic filing of your Income Tax Return online. You only need to upload your Form 16, AIS, and bank statements through our secure data channels. We compute the return, discuss planning opportunities, and file once you review and approve.",
  },
  {
    question: "Do you provide bookkeeping?",
    answer: "Yes, we offer complete day-to-day bookkeeping, bank reconciliations, accounts receivable/payable tracking, and payroll support. Depending on your business volume, we can set up weekly, monthly, or quarterly schedules to ensure your financial reports are audit-ready at all times.",
  },
  {
    question: "How do I start?",
    answer: "Getting started is simple. You can fill out the Contact Form below, send a quick message via our floating WhatsApp button, or dial us directly. We will schedule a free initial consultation to assess your exact compliance requirements, share a clear cost proposal, and begin collecting documents immediately.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-transparent overflow-hidden z-10">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
            Support Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gold rounded-sm mt-1" />
          <p className="text-gray-400 text-sm md:text-base max-w-lg font-sans mt-2">
            Clear, honest answers to help you navigate registration, taxation, and advisory onboarding.
          </p>
        </div>

        {/* Accordions List */}
        <div className="flex flex-col gap-5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-glass hover:border-gold-glass-border overflow-hidden transition-all duration-300"
              >
                {/* Header / Trigger button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-gold" : "text-gray-500"}`} />
                    <span className="text-sm md:text-base font-serif font-bold text-white group-hover:text-gold transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                    isOpen ? "bg-gold text-black border-gold" : "bg-white/5 text-gray-400 border-white/10 group-hover:border-gold group-hover:text-gold"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-glass text-xs md:text-sm text-gray-400 leading-relaxed font-sans pl-[44px] md:pl-[52px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
