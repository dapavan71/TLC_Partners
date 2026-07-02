"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-glass bg-[#030303] text-gray-400 font-sans relative overflow-hidden z-10">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Logo & Pitch */}
          <div className="flex flex-col gap-6">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex flex-col relative group cursor-pointer self-start"
            >
              <div className="flex items-baseline">
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
            
            <p className="text-sm leading-relaxed max-w-xs">
              Simplifying taxation, accounting, compliance, and wealth management with trusted professionals across India.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  href: "https://www.linkedin.com/company/tlc-partners/about/",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full glass-panel border-gold/15 text-gray-400 hover:text-gold hover:border-gold hover:shadow-[0_0_10px_rgba(212,175,55,0.2)] flex items-center justify-center transition-all cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase font-sans border-b border-glass pb-2">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Why Us", href: "#why-us" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase font-sans border-b border-glass pb-2">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                { label: "GST Registration & Filing", href: "#services" },
                { label: "Income Tax Returns (ITR)", href: "#services" },
                { label: "Corporate Compliance (ROC)", href: "#services" },
                { label: "Accounting & Bookkeeping", href: "#services" },
                { label: "Business Registration", href: "#services" },
                { label: "Financial Advisory", href: "#services" },
              ].map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href)}
                    className="hover:text-white hover:translate-x-1 flex items-center gap-1.5 transition-all group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase font-sans border-b border-glass pb-2">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>India (Offices in Karnataka & Bangalore)</span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+918073016590" className="hover:text-white transition-colors">
                    +91 80730 16590
                  </a>
                  <a href="tel:+918867488304" className="hover:text-white transition-colors">
                    +91 88674 88304
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href="mailto:info@tlcpartners.in" className="hover:text-white transition-colors">
                  info@tlcpartners.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom details */}
        <div className="border-t border-glass pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025-2026 TLC Partners. All Rights Reserved.</p>
          <p className="hover:text-gold transition-colors font-sans tracking-widest text-[10px] uppercase">
            Designed by <span className="font-semibold text-white">PAVAN D A</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
