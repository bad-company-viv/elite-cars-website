import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Shield, Banknote } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock concierge service for all your needs. We\'re always here to assist.'
  },
  {
    icon: MapPin,
    title: 'Doorstep Delivery',
    description: 'Complimentary delivery and pickup anywhere in Pune. Your convenience is our priority.'
  },
  {
    icon: Shield,
    title: 'Premium Maintenance',
    description: 'Every vehicle is sanitized, detailed, and maintained to the highest standards.'
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    description: 'No hidden charges. What you see is what you pay. Complete pricing transparency.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111111] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-white/40 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">The Élite Difference</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-4 sm:mb-6" style={{ fontFamily: 'serif' }}>
            Why <span className="italic">Choose</span> Us
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg font-light">
            We don't just rent cars. We curate extraordinary driving experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] p-6 sm:p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:border-white/30 transition-colors duration-500">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              <h3 className="text-white text-lg sm:text-xl font-light mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
