import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/public/logo.png";
import eliteLogo from "@/public/elite-logo-2.png";

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

  const callNow = () => {
    window.location.href = "tel:+919920053379";
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#050505] text-white">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-25%,rgba(255,212,71,0.22),transparent_58%),radial-gradient(circle_at_50%_66%,rgba(255,255,255,0.18),transparent_46%),radial-gradient(circle_at_50%_140%,rgba(255,255,255,0.12),transparent_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/64 via-black/36 to-black/86" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_15%,rgba(0,0,0,0.36)_70%)]" />
        <div className="absolute left-[-12%] top-[56%] h-[34vh] w-[34vh] -translate-y-1/2 rounded-full bg-white/30 blur-[120px]" />
        <div className="absolute right-[-12%] top-[56%] h-[34vh] w-[34vh] -translate-y-1/2 rounded-full bg-white/30 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 py-2.5 sm:px-6 md:px-10 md:py-3 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Elite Prime Cars"
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Button
            variant="outline"
            onClick={scrollToBooking}
            className="h-10 min-w-[118px] rounded-none border border-white/20 bg-white/[0.03] px-4 text-[11px] tracking-[0.22em] text-white transition-all duration-500 hover:border-[#FFD447] hover:bg-[#FFD447] hover:text-black sm:h-11 sm:min-w-[132px] sm:px-5"
          >
            BOOK NOW
          </Button>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto -mt-3 flex min-h-[calc(100svh-95px)] w-full max-w-[1280px] flex-col items-center px-4 pb-10 pt-0 text-center sm:-mt-4 sm:px-6 md:-mt-6 md:px-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="-mt-2 sm:-mt-1"
        >
          <span className="inline-flex rounded-full border border-[#FFD447] px-4 py-2 text-[10px] tracking-[0.34em] text-[#FFD447] sm:px-8 sm:text-xs">
            PUNE'S #1 LUXURY FLEET
          </span>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32 }}
          src={eliteLogo}
          alt="Elite Prime Cars - Travel Like a Star"
          className="mt-1 w-[min(76vw,480px)] object-contain sm:mt-2 md:w-[min(50vw,530px)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.58 }}
          className="mt-auto w-full pb-0 sm:translate-y-6 md:translate-y-10 lg:translate-y-12"
        >
          <p
            className="mb-2 text-2xl italic text-[#FFD447] sm:text-[2.05rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Luxury Car Rentals in Pune
          </p>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base md:text-[1.15rem]">
            Chauffeur-driven Mercedes, BMW, Audi and Range Rover for weddings,
            corporate events, airport transfers and self drives.
          </p>

          <div className="flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-10 md:gap-12">
            <Button
              onClick={scrollToFleet}
              className="group w-full rounded-none border border-[#FFD447] bg-[#FFD447] px-7 py-4 text-xs tracking-[0.19em] text-black transition-all duration-500 hover:bg-[#FFD447]/90 sm:w-auto sm:min-w-[220px]"
            >
              Explore Fleet
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              onClick={callNow}
              className="w-full rounded-none border border-[#FFD447]/75 bg-transparent px-7 py-4 text-xs tracking-[0.19em] text-[#FFD447] transition-all duration-500 hover:bg-[#FFD447]/10 sm:w-auto sm:min-w-[220px]"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-6 hidden flex-col items-center gap-2 sm:flex"
          >
            <span className="text-[10px] tracking-[0.28em] text-white/35 uppercase">
              Scroll
            </span>
            <div className="h-14 w-px bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Stats */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.95 }}
        className="absolute right-4 z-20 hidden flex-col gap-7 lg:bottom-32 lg:flex xl:bottom-36 xl:right-10"
      >
        {[
          { value: "50+", label: "Premium Vehicles" },
          { value: "24/7", label: "Concierge Service" },
          { value: "5★", label: "Client Rating" },
        ].map((stat, index) => (
          <div
            key={index}
            className="min-w-[200px] border-t border-white/15 pt-1 text-right"
          >
            <div className="text-3xl font-light leading-none text-white/95">
              {stat.value}
            </div>
            <div className="mt-1 text-[9px] tracking-[0.24em] text-white/40 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
