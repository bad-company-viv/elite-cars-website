import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import eliteLogo from "/elite-logo-2.png";
import whatsappIcon from "@/public/whatsapp.webp";

export default function HeroSection() {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById("fleet");
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const callNow = () => {
    window.location.href = "tel:+919920053379";
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Navigation */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Elite" className="h-10 w-auto md:h-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            onClick={scrollToBooking}
            className="rounded-none border border-white/20 bg-white/5 px-6 py-2 text-[10px] tracking-[0.2em] text-white hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            BOOK NOW
          </Button>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-8 md:pt-12">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="rounded-full border border-[#D4AF37] bg-[#D4AF37]/5 px-6 py-1.5 text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">
            <span className="mr-2 inline-block h-1 w-1 rounded-full bg-[#D4AF37]" />
            Pune's #1 Luxury Fleet
          </div>
        </motion.div>

        {/* Central Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 flex flex-col items-center"
        >
          <img src={eliteLogo} alt="Elite Prime Cars" className="h-10 w-auto md:h-14" />
        </motion.div>

        {/* Text Section - Adjusted Padding-Y as requested */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 w-full max-w-4xl px-6 py-20 text-center md:mt-24 md:py-28 lg:mt-32 lg:py-36"
        >
          <h1 className="mb-4 text-3xl italic text-[#D4AF37] md:text-4xl lg:text-5xl" style={{ fontFamily: 'serif' }}>
            Luxury Car Rentals in Pune
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base lg:text-lg">
            Chauffeur-driven Mercedes, BMW, Audi and Range Rover for weddings, corporate events, airport transfers and self drives.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              onClick={scrollToFleet}
              className="h-12 w-full max-w-[200px] rounded-sm bg-[#FFD700] px-8 text-[11px] font-semibold tracking-[0.15em] text-black hover:bg-[#FFC700] transition-colors sm:w-auto overflow-hidden"
            >
              EXPLORE FLEET
            </Button>
            <Button
              onClick={callNow}
              variant="outline"
              className="h-12 w-full max-w-[200px] rounded-sm border-[#FFD700] bg-transparent px-8 text-[11px] font-semibold tracking-[0.15em] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors sm:w-auto"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              CALL NOW
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Side Stats */}
      <div className="absolute bottom-20 right-8 z-20 hidden flex-col gap-8 md:flex lg:right-16">
        {[
          { label: "PREMIUM VEHICLES", value: "50+" },
          { label: "CONCIERGE SERVICE", value: "24/7" },
          { label: "CLIENT RATING", value: "5★" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
            className="flex flex-col items-end border-t border-white/10 pt-2"
          >
            <span className="text-2xl font-light text-white">{stat.value}</span>
            <span className="text-[8px] tracking-[0.2em] text-white/40">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase cursor-pointer hover:text-white transition-colors" onClick={scrollToFleet}>Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
