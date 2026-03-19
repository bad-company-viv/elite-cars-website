import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BookingSection() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.on.bingo/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Add custom styles to override iframe content
    const style = document.createElement('style');
    style.textContent = `
      #inline-oP5Yk1NhGzRjikqCGN7S {
        background: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section id="booking" className="bg-[#0a0a0a] px-4 sm:px-6 md:px-16 pb-14 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-white/40 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Quick Booking</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white" style={{ fontFamily: 'serif' }}>
            Book Your <span className="italic">Luxury Ride</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.1] p-6 sm:p-8 md:p-10">
            <iframe
              src="https://link.on.bingo/widget/form/oP5Yk1NhGzRjikqCGN7S"
              style={{ width: '100%', height: '550px', border: 'none', display: 'block' }}
              id="inline-oP5Yk1NhGzRjikqCGN7S"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Elite Website"
              data-height="550"
              data-layout-iframe-id="inline-oP5Yk1NhGzRjikqCGN7S"
              data-form-id="oP5Yk1NhGzRjikqCGN7S"
              title="Elite Website"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
