import type { Metadata, Viewport } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";

import LenisScroller from "./components/LenisScroller";
import ThreeBackground from "./components/ThreeBackground";
import FloatingElements from "./components/FloatingElements";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "TLC Partners | Driving Growth. Defining Success.",
  description:
    "Empowering businesses and individuals across India with trusted tax, accounting, GST filing, corporate compliance, and professional financial advisory services.",
  keywords: [
    "TLC Partners",
    "Tax Consulting India",
    "GST Registration",
    "ITR filing",
    "Corporate compliance ROC",
    "Bookkeeping services",
    "Financial Advisory India",
    "Accounting consultants"
  ],
  authors: [{ name: "TLC Partners" }],
  robots: "index, follow",
  openGraph: {
    title: "TLC Partners | Tax, Accounting & Financial Advisory",
    description: "Driving Growth. Defining Success. Trusted financial services across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased text-foreground bg-background selection:bg-gold/30 selection:text-white">
        {/* Core Layout Helpers */}
        <LenisScroller />
        <ThreeBackground />
        <FloatingElements />
        
        {/* Page Content */}
        <div className="relative flex flex-col min-h-screen z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
