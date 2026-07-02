"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Process from "./components/sections/Process";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section with animated widgets */}
        <Hero />

        {/* Services Showcase */}
        <Services />

        {/* Why Choose Us & Animated counters */}
        <WhyChooseUs />

        {/* Horizontal Timeline Process */}
        <Process />

        {/* Corporate Summary & Benefits badges */}
        <About />

        {/* Accordion FAQs */}
        <FAQ />

        {/* Form Validation Contact Desk */}
        <Contact />
      </main>

      {/* Footer info & Links grid */}
      <Footer />
    </>
  );
}
