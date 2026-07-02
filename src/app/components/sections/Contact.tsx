"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Building, Calendar, Mail, Send, Loader2, CheckCircle } from "lucide-react";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    
    // Simulate brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // 1. Format text message for WhatsApp
    const formattedMsg = `*TLC Partners Inquiry*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Service:* ${data.service.replace("-", " ").toUpperCase()}\n\n*Message:* ${data.message}`;
    
    // 2. Open WhatsApp pre-filled chat
    const whatsappUrl = `https://wa.me/918073016590?text=${encodeURIComponent(formattedMsg)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Auto-clear success message after 8 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 8000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#030303] overflow-hidden z-10">
      {/* Background gradients */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold font-sans">
            Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Schedule a Consultation
          </h2>
          <div className="w-16 h-1 bg-gold rounded-sm mt-1" />
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-sans mt-2">
            Let us handle the complex compliance paperwork while you focus 100% on driving your business forward.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact info & Maps Mockup */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white text-left">
                TLC Partners Desk
              </h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed text-left max-w-md">
                Reach out to speak with our registered tax advisors. We respond to all validation inquiries within 24 business hours.
              </p>

              <div className="flex flex-col gap-4 text-left mt-4">
                {/* Location */}
                <div className="flex gap-4 items-center glass-panel p-4 rounded-xl border border-glass">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-sans">Offices</span>
                    <span className="text-xs md:text-sm font-sans text-white font-semibold">
                      Bangalore & Karnataka, India
                    </span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4 items-center glass-panel p-4 rounded-xl border border-glass">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="block text-[10px] text-gray-500 uppercase font-sans">Call Directly</span>
                    <div className="flex gap-4 text-xs md:text-sm font-sans text-white font-semibold">
                      <a href="tel:+918073016590" className="hover:text-gold transition-colors">
                        +91 80730 16590
                      </a>
                      <span className="text-gray-600">|</span>
                      <a href="tel:+918867488304" className="hover:text-gold transition-colors">
                        +91 88674 88304
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-center glass-panel p-4 rounded-xl border border-glass">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-sans">Email us</span>
                    <a
                      href="mailto:info@tlcpartners.in"
                      className="text-xs md:text-sm font-sans text-white font-semibold hover:text-gold transition-colors"
                    >
                      info@tlcpartners.in
                    </a>
                  </div>
                </div>

                {/* Extra Stats */}
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="glass-panel p-4 rounded-xl border border-glass flex items-center gap-3">
                    <Building className="w-4 h-4 text-gold" />
                    <div>
                      <span className="block text-[9px] text-gray-500 uppercase">Industry</span>
                      <span className="text-xs text-white font-bold">Financial Services</span>
                    </div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border border-glass flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gold" />
                    <div>
                      <span className="block text-[9px] text-gray-500 uppercase">Founded</span>
                      <span className="text-xs text-white font-bold">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Dark Luxury Vector Map Placeholder */}
            <div className="h-44 glass-panel border border-glass rounded-2xl relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-grid-mesh opacity-20" />
              
              {/* Fake vector topography paths */}
              <div className="absolute top-[20%] left-[-10%] w-[120%] h-[1px] bg-white/5 border-dashed" />
              <div className="absolute top-[50%] left-[-10%] w-[120%] h-[1px] bg-white/5 border-dashed" />
              <div className="absolute top-[75%] left-[-10%] w-[120%] h-[1px] bg-white/5 border-dashed" />
              <div className="absolute top-0 bottom-0 left-[30%] w-[1px] bg-white/5 border-dashed" />
              <div className="absolute top-0 bottom-0 left-[70%] w-[1px] bg-white/5 border-dashed" />

              {/* Pulsing Target Ring */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="absolute -top-7 px-2.5 py-1 rounded bg-gold text-[9px] text-black font-sans font-bold uppercase tracking-widest shadow-md">
                  TLC Head Office
                </span>
                <div className="w-4 h-4 bg-gold rounded-full flex items-center justify-center relative shadow-[0_0_15px_#d4af37]">
                  <div className="absolute inset-0 rounded-full bg-gold animate-ping scale-200 opacity-60" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
                <span className="text-[10px] text-gray-500 font-sans mt-3">
                  Bangalore, Karnataka, IN
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel border-gold-glass-border rounded-2xl p-8 md:p-10 relative overflow-hidden h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6 text-left"
                  >
                    {/* Name Field */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className={`w-full px-4 py-3.5 text-xs text-white glass-input ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-sans">{errors.name.message}</span>
                      )}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 text-xs text-white glass-input ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 font-sans">{errors.email.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className={`w-full px-4 py-3.5 text-xs text-white glass-input ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                          {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                              value: /^[0-9+()-\s]{10,15}$/,
                              message: "Please enter a valid phone number",
                            },
                          })}
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-500 font-sans">{errors.phone.message}</span>
                        )}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans">
                        Service Required
                      </label>
                      <select
                        className={`w-full px-4 py-3.5 text-xs text-white bg-[#0f0f0f] border border-glass rounded-lg focus:outline-none focus:border-gold transition-colors ${
                          errors.service ? "border-red-500" : ""
                        }`}
                        {...register("service", { required: "Please select a service" })}
                      >
                        <option value="">Select a service category</option>
                        <option value="gst-registration">GST Registration</option>
                        <option value="gst-filing">GST Return Filing</option>
                        <option value="itr-filing">Income Tax Returns (ITR)</option>
                        <option value="tax-planning">Tax Planning</option>
                        <option value="accounting">Accounting & Bookkeeping</option>
                        <option value="business-registration">Business Registration</option>
                        <option value="roc-compliance">ROC Annual Compliance</option>
                        <option value="financial-advisory">Financial Advisory</option>
                      </select>
                      {errors.service && (
                        <span className="text-[10px] text-red-500 font-sans">{errors.service.message}</span>
                      )}
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 font-sans">
                        Inquiry Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your accounting or tax requirements..."
                        className={`w-full px-4 py-3.5 text-xs text-white glass-input ${
                          errors.message ? "border-red-500" : ""
                        }`}
                        {...register("message", { required: "Message details are required" })}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 font-sans">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-4 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold disabled:from-gold/50 disabled:to-gold-dark/50 text-black font-sans font-bold uppercase tracking-wider text-xs rounded-sm transition-all shadow-[0_4px_15px_rgba(212,175,55,0.15)] flex items-center justify-center gap-2 group cursor-pointer disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 text-black" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center gap-4 py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-white">
                      Request Sent!
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400 font-sans max-w-md leading-relaxed">
                      Your request has been sent successfully. We will get back to you soon!
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-5 py-2.5 glass-panel text-gray-400 hover:text-white border-white/10 hover:border-gold/30 text-xs font-sans font-bold uppercase tracking-widest rounded-sm cursor-pointer transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
