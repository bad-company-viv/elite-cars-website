import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

import mercedesImage from '@/public/images/Mercedes.jpeg';
import bmwImage from '@/public/images/BMW.jpeg';
import audiImage from '@/public/images/Audi.jpeg';
import rangeRoverImage from '@/public/images/Range.jpeg';

const categories = ['All', 'Luxury Sedans', 'SUVs'];

const fleet = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Sedans',
    image: mercedesImage,
    specs: '4.0L V8 • 496 HP'
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'Luxury Sedans',
    image: bmwImage,
    specs: '3.0L I6 • 375 HP'
  },
  {
    id: 3,
    name: 'Audi A8 L',
    category: 'Luxury Sedans',
    image: audiImage,
    specs: '3.0L V6 • Matrix LED'
  },
  {
    id: 4,
    name: 'Audi A6',
    category: 'Luxury Sedans',
    image: audiImage,
    specs: '2.0L Turbo • Quattro'
  },
  {
    id: 5,
    name: 'Range Rover Sport',
    category: 'SUVs',
    image: rangeRoverImage,
    specs: '3.0L Turbo • Terrain Response'
  }
];

export default function FleetSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFleet =
    activeCategory === 'All'
      ? fleet
      : fleet.filter((car) => car.category === activeCategory);

  return (
    <section id="fleet" className="bg-[#0a0a0a] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <span className="text-white/40 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Our Collection</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-white" style={{ fontFamily: 'serif' }}>
              The <span className="italic">Fleet</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-widest uppercase transition-all duration-500 border ${
                  activeCategory === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {filteredFleet.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] overflow-hidden"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-2">{car.category}</p>
                  <h3 className="text-white text-lg sm:text-xl font-light">{car.name}</h3>
                </div>
              </div>

              <p className="text-white/30 text-sm mb-6">{car.specs}</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/[0.08]">
                <span className="text-white/40 text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-widest uppercase">Available on Request</span>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto justify-center border-white/20 bg-transparent text-white hover:bg-white hover:text-black rounded-none px-6 py-4 sm:py-5 text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-widest transition-all duration-500 group/btn"
                >
                  BOOK
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mt-10 sm:mt-12"
      >
        <Button
          variant="outline"
          className="w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-white hover:text-black rounded-none px-8 sm:px-12 py-5 sm:py-7 text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-all duration-500"
        >
          View Entire Fleet
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </section>
  );
}
