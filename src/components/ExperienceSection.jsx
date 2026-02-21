import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Heart, Briefcase, Star, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Car,
    title: 'Leisure Service',
    description: 'Drive premium cars on your own terms with flexible rentals'
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless luxury pickups from Pune International Airport'
  },
  {
    icon: Heart,
    title: 'Wedding & Events',
    description: 'Make your special day unforgettable with our premium fleet'
  },
  {
    icon: Briefcase,
    title: 'Corporate Rentals',
    description: 'Impress clients with executive-class transportation'
  },
  {
    icon: Star,
    title: 'Weekend Getaways',
    description: 'Explore Lonavala, Mahabaleshwar & beyond in style'
  }
];

export default function ExperienceSection() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (!bookingSection) {
      return;
    }

    bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
          alt="Luxury Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-white/40 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6 block">Premium Experiences</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-6 sm:mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
                Elevate Every
                <br />
                <span className="italic">Journey</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-lg">
                From airport arrivals to grand celebrations, our bespoke services transform ordinary moments into extraordinary memories. Experience Pune's finest luxury car rental service.
              </p>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
                <div>
                  <p className="text-3xl sm:text-4xl text-white font-light">1000+</p>
                  <p className="text-white/40 text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase">Happy Clients</p>
                </div>
                <div className="w-px h-16 bg-white/20" />
                <div>
                  <p className="text-3xl sm:text-4xl text-white font-light">5+</p>
                  <p className="text-white/40 text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase">Years Excellence</p>
                </div>
              </div>

              <Button 
                onClick={scrollToBooking}
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-none px-6 sm:px-10 py-5 sm:py-7 text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-all duration-500"
              >
                Enquire Now
              </Button>
            </motion.div>

            {/* Right - Services */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 sm:gap-6 p-5 sm:p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-colors">
                    <service.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-base sm:text-lg font-light mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-white/40 text-sm font-light">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
