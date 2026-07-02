"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck,
  FileSpreadsheet,
  Landmark,
  BadgePercent,
  Calculator,
  Coins,
  Briefcase,
  Award,
  ShieldAlert,
  X,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  timeline: string;
  whoIsItFor: string;
  deliverables: string[];
  documents: string[];
}

const SERVICES: Service[] = [
  {
    id: "gst-reg",
    title: "GST Registration",
    shortDesc: "End-to-end guidance to obtain a GST identification number for startups and established firms.",
    icon: <FileCheck className="w-6 h-6 text-gold" />,
    timeline: "2-5 Working Days",
    whoIsItFor: "Businesses crossing statutory limits (₹20L/₹40L) or planning inter-state sales.",
    deliverables: [
      "GSTIN Certificate",
      "GST Portal Login Credentials",
      "HSN/SAC Classification Advice",
    ],
    documents: [
      "PAN Card of the Proprietor / Director",
      "Aadhaar Card of the Proprietor / Director",
      "Electricity Bill / Rent Agreement of the Business Location",
      "Cancelled Cheque / Bank Statement",
    ],
  },
  {
    id: "gst-filing",
    title: "GST Return Filing",
    shortDesc: "Timely computation and filing of periodic returns (GSTR-1, 3B, GSTR-9) with full ITC reconciliation.",
    icon: <FileSpreadsheet className="w-6 h-6 text-gold" />,
    timeline: "Monthly / Quarterly",
    whoIsItFor: "All entities holding active GST numbers, wishing to avoid penalties and optimize Input Tax Credit.",
    deliverables: [
      "GSTR-1 & GSTR-3B filings",
      "Detailed ITC reconciliation reports",
      "Challans and tax invoices audit",
    ],
    documents: [
      "Monthly Sales Register",
      "Monthly Purchase invoices / GSTR-2B data",
      "GST payment records",
    ],
  },
  {
    id: "itr-filing",
    title: "Income Tax Return (ITR)",
    shortDesc: "Expert computation, tax audit, and electronic filing of annual ITR for diverse categories of taxpayers.",
    icon: <Landmark className="w-6 h-6 text-gold" />,
    timeline: "Annual Filing",
    whoIsItFor: "Salaried individuals, professionals, business firms, HUFs, LLPs, and Private Limited Companies.",
    deliverables: [
      "Tax Computation Sheets",
      "ITR-V Acknowledgment Slip",
      "Tax Auditing reports (where applicable)",
    ],
    documents: [
      "Form 16 / Form 16A",
      "Form 26AS & AIS / TIS",
      "Bank Statements for the financial year",
      "Investment proofs (80C, 80D, etc.)",
    ],
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    shortDesc: "Proactive, strategic tax reviews designed to minimize overall tax liabilities while strictly abiding by laws.",
    icon: <BadgePercent className="w-6 h-6 text-gold" />,
    timeline: "Ongoing Consulting",
    whoIsItFor: "HNI individuals, profitable startups, and businesses looking to optimize their corporate structure.",
    deliverables: [
      "Tax Restructuring Plans",
      "Investment advisory reports",
      "Advance tax computation estimations",
    ],
    documents: [
      "Previous 2-3 Years ITR filings",
      "Current Financial Projections",
      "Asset & Investment Portfolio",
    ],
  },
  {
    id: "accounting",
    title: "Accounting",
    shortDesc: "Statutory maintenance of general ledgers, drafting financials, and adjusting accounts matching standards.",
    icon: <Calculator className="w-6 h-6 text-gold" />,
    timeline: "Monthly / Quarterly / Yearly",
    whoIsItFor: "SMEs, LLPs, and corporate entities looking to maintain standard, compliant financial records.",
    deliverables: [
      "Balance Sheets & P&L accounts",
      "Bank Reconciliation statements",
      "Audit-ready Trial Balance",
    ],
    documents: [
      "Purchase & Sales invoices",
      "All Bank Statements",
      "Cash transactions log",
      "Loan statements & agreements",
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    shortDesc: "Organized recording of daily expenses, invoicing, bill payments, and payroll tracking.",
    icon: <Coins className="w-6 h-6 text-gold" />,
    timeline: "Weekly / Monthly Updates",
    whoIsItFor: "Small business owners, retail stores, and startups outsourcing day-to-day transaction records.",
    deliverables: [
      "General Ledger matching records",
      "Accounts Receivable/Payable reports",
      "Standardized invoice listings",
    ],
    documents: [
      "Receipts and payment bills",
      "Sales register printouts",
      "Voucher details",
    ],
  },
  {
    id: "biz-reg",
    title: "Business Registration",
    shortDesc: "Complete support to register Private Limited, OPC, LLPs, and Partnerships.",
    icon: <Briefcase className="w-6 h-6 text-gold" />,
    timeline: "7-14 Working Days",
    whoIsItFor: "Entrepreneurs and co-founders building a legal corporate identity.",
    deliverables: [
      "Certificate of Incorporation",
      "Memorandum and Articles of Association (MOA & AOA)",
      "Company PAN and TAN allotment",
    ],
    documents: [
      "PAN Card of all Directors/Partners",
      "Aadhaar Card / Voter ID of all Directors",
      "Electricity bill of registered office",
      "NOC from owner",
    ],
  },
  {
    id: "roc-compliance",
    title: "ROC Compliance",
    shortDesc: "Filing mandatory annual returns (AOC-4, MGT-7), managing director appointments, and corporate changes.",
    icon: <Award className="w-6 h-6 text-gold" />,
    timeline: "Annual / Event-based",
    whoIsItFor: "All registered LLPs and Private Limited Companies incorporated in India.",
    deliverables: [
      "MGT-7 & AOC-4 filing receipts",
      "Board meeting resolutions & minutes",
      "Director KYC compliance certificates",
    ],
    documents: [
      "Audited Balance Sheet & P&L",
      "Director disclosure statements (DIR-8 / MBP-1)",
      "Bank statement of company",
    ],
  },
  {
    id: "advisory",
    title: "Financial Advisory",
    shortDesc: "Strategic advisory covering funding, cash-flow projections, valuations, and commercial corporate modeling.",
    icon: <ShieldAlert className="w-6 h-6 text-gold" />,
    timeline: "Project-based / Retainers",
    whoIsItFor: "Scaleups seeking venture funding or firms needing high-level strategic capital management.",
    deliverables: [
      "Pitch-ready Financial Models",
      "Valuation Reports (DCF / Comps)",
      "Working Capital optimization plans",
    ],
    documents: [
      "Historical Financial statements",
      "Business Plan details",
      "Market size and competitor benchmarks",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 relative bg-transparent overflow-hidden z-10">
      {/* Dynamic blob background */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <div className="flex flex-col items-center gap-4 mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Compliance & Financial Solutions
          </h2>
          <div className="w-16 h-1 bg-gold rounded-sm mt-1" />
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-sans mt-2">
            Structured, transparent, and accurate services designed to protect your organization and optimize growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-2xl border border-glass hover:border-gold-glass-border hover:shadow-[0_12px_40px_rgba(212,175,55,0.06)] flex flex-col justify-between items-start text-left cursor-pointer group transition-all duration-300"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-full">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-gray-400 font-sans leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
              </div>

              <button
                className="text-xs font-sans font-bold uppercase tracking-wider text-gold hover:text-gold-light flex items-center gap-1.5 mt-auto group/btn cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
              >
                <span>Learn More</span>
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Detail Popup Dialog Sheet */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-full max-w-2xl glass-panel-gold rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full glass-panel hover:border-white/20 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal header banner */}
              <div className="p-8 pb-6 border-b border-glass flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/35 flex items-center justify-center shrink-0">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {selectedService.title}
                  </h3>
                  <div className="flex gap-4 mt-2 text-xs font-sans text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{selectedService.timeline}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Scrollable details wrapper */}
              <div className="p-8 max-h-[70vh] overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Left Column: Scope & Deliverables */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-sans font-bold mb-2">
                      Who is it for?
                    </h4>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      {selectedService.whoIsItFor}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold font-sans font-bold mb-3">
                      Deliverables Included
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {selectedService.deliverables.map((item, index) => (
                        <li key={index} className="flex gap-2 items-start text-xs text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Required Documents */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-sans font-bold mb-1.5">
                    Required Documents
                  </h4>
                  <ul className="flex flex-col gap-2.5 bg-black/30 border border-glass rounded-xl p-4">
                    {selectedService.documents.map((doc, index) => (
                      <li key={index} className="flex gap-2.5 items-start text-xs text-gray-400">
                        <FileText className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal action bar */}
              <div className="p-6 bg-black/40 border-t border-glass flex justify-end gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-sans font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    setSelectedService(null);
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-5 py-2.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-wider font-sans font-bold rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all cursor-pointer"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
