import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Patel',
    car: 'BMW 7 Series',
    content: 'Excellent service from start to finish. Booked the BMW 7 Series for a corporate event and it exceeded all expectations. The attention to detail and punctuality was remarkable. Will definitely use again!',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    car: 'Range Rover Vogue',
    content: 'The Range Rover was perfect for our family trip to Udaipur. Spacious, comfortable, and the driver knew all the best routes. The entire experience was seamless and luxurious. Worth every penny!',
    rating: 5
  },
  {
    name: 'Anita Desai',
    car: 'Mercedes-Benz S-Class',
    content: 'Used their services for airport transfers and client meetings. The S-Class is simply the best car for business. Always on time, impeccably maintained vehicles. They understand the meaning of luxury service.',
    rating: 5
  },
  {
    name: 'Sneha Kapoor',
    car: 'Mercedes-Benz E-Class',
    content: 'My go-to service for luxury car rentals. Have used them multiple times for various occasions. Consistently excellent service, well-maintained fleet, and reasonable pricing for the luxury provided.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-white/40 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Client Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white" style={{ fontFamily: 'serif' }}>
            What They <span className="italic">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] p-6 sm:p-10 hover:border-white/20 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white/10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 sm:mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white/80 text-white/80" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed mb-8 sm:mb-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 sm:pt-8 border-t border-white/[0.08]">
                <p className="text-white text-base sm:text-lg font-light">{testimonial.name}</p>
                <p className="text-white/30 text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-widest uppercase mt-1">{testimonial.car}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-20 pt-12 sm:pt-20 border-t border-white/[0.06]"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white/80 text-white/80" />
              ))}
            </div>
            <p className="text-white/40 text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase">4.9 / 5 Rating</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-white text-xl sm:text-2xl font-light mb-1">500+</p>
            <p className="text-white/40 text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase">Reviews</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-white text-xl sm:text-2xl font-light mb-1">Google</p>
            <p className="text-white/40 text-xs sm:text-sm tracking-[0.12em] sm:tracking-widest uppercase">Verified</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
