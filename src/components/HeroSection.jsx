import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import eliteLogo from "@/public/elite-logo-white.png";

export default function HeroSection() {
  const scrollToFleet = () => {
    const fleetSection = document.getElementById("fleet");
    if (!fleetSection) {
      return;
    }

    fleetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (!bookingSection) {
      return;
    }

    bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-10 xl:px-16 py-4 md:py-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center"
        >
          <img
            src={eliteLogo}
            alt="Elite Prime Cars"
            className="h-11 sm:h-12 md:h-16 w-auto object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12"
        >
          {["Fleet", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button
            variant="outline"
            onClick={scrollToBooking}
            className="h-10 sm:h-11 md:h-12 min-w-[124px] sm:min-w-[136px] md:min-w-[140px] border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-500 rounded-none px-4 sm:px-6 md:px-7 text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.14em]"
          >
            BOOK NOW
          </Button>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100svh-104px)] md:min-h-[calc(100vh-108px)] px-4 sm:px-6 md:px-10 xl:px-16 max-w-[52rem] pb-4 sm:pb-6 md:pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-white/50 text-xs sm:text-sm tracking-[0.26em] sm:tracking-[0.4em] uppercase">
            Pune's Premier Luxury Cars
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[clamp(2.75rem,8.5vw,4.5rem)] md:text-[clamp(3.25rem,6vw,5.5rem)] font-light text-white leading-[0.94] mb-5 sm:mb-7"
          style={{ fontFamily: "serif" }}
        >
          Travel as a star
          <br />
          <span className="text-[#ffd700]">in luxury car.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white/60 text-base sm:text-lg md:text-[1.25rem] font-light max-w-xl mb-7 sm:mb-10 leading-relaxed"
        >
          Premium Self-Drive & Chauffeur Services. Experience the pinnacle of
          automotive excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button
            onClick={scrollToFleet}
            className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-none px-6 sm:px-9 md:px-10 py-4 sm:py-5 text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase transition-all duration-500 group"
          >
            Explore Fleet
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-white/30 bg-transparent text-white hover:bg-white/10 rounded-none px-6 sm:px-9 md:px-10 py-4 sm:py-5 text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase transition-all duration-500"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch Experience
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      {/* Side Stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-8 md:right-16 bottom-32 hidden lg:flex flex-col gap-8"
      >
        {[
          { value: "50+", label: "Premium Vehicles" },
          { value: "24/7", label: "Concierge Service" },
          { value: "5★", label: "Client Rating" },
        ].map((stat, index) => (
          <div key={index} className="text-right">
            <div className="text-white text-2xl font-light">{stat.value}</div>
            <div className="text-white/40 text-xs tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
