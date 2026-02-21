import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const initialForm = {
  name: '',
  phone: '',
  service: 'Self Drive Service',
  date: '',
  pickup: ''
};

export default function BookingSection() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: 'info',
    text: 'Submit to continue your booking on WhatsApp.'
  });

  const today = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const nextErrors = {};
    const cleanName = formData.name.trim();
    const phoneDigits = formData.phone.replace(/\D/g, '');
    const pickupLocation = formData.pickup.trim();

    if (cleanName.length < 2) {
      nextErrors.name = 'Please enter your full name.';
    } else if (!/^[a-zA-Z\s.'-]+$/.test(cleanName)) {
      nextErrors.name = 'Name can include letters, spaces, apostrophes, dots and hyphens only.';
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.date) {
      nextErrors.date = 'Please select a booking date.';
    } else if (formData.date < today) {
      nextErrors.date = 'Booking date cannot be in the past.';
    }

    if (pickupLocation.length < 3) {
      nextErrors.pickup = 'Please enter a pickup location.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));

    if (status.type !== 'info') {
      setStatus({
        type: 'info',
        text: 'Submit to continue your booking on WhatsApp.'
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: 'error',
        text: 'Please fix the highlighted fields and try again.'
      });
      return;
    }

    const message = `Booking Request\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nPickup: ${formData.pickup}`;
    const whatsappUrl = `https://wa.me/919529375167?text=${encodeURIComponent(message)}`;
    const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (popup) {
      setErrors({});
      setStatus({
        type: 'success',
        text: 'Booking details opened in WhatsApp. Please send the message there.'
      });
      setFormData(initialForm);
      return;
    }

    setStatus({
      type: 'error',
      text: 'Could not open WhatsApp. Please allow popups and try again.'
    });
  };

  return (
    <section id="booking" className="bg-[#0a0a0a] px-4 sm:px-6 md:px-16 pb-20 sm:pb-24">
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

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          noValidate
          className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.1] p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full bg-white/[0.03] border text-white placeholder:text-white/35 px-4 py-3 focus:outline-none ${
                errors.name ? 'border-red-400 focus:border-red-300' : 'border-white/[0.12] focus:border-white/35'
              }`}
            />
            {errors.name ? <p className="text-red-300 text-xs mt-1">{errors.name}</p> : null}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full bg-white/[0.03] border text-white placeholder:text-white/35 px-4 py-3 focus:outline-none ${
                errors.phone ? 'border-red-400 focus:border-red-300' : 'border-white/[0.12] focus:border-white/35'
              }`}
            />
            {errors.phone ? <p className="text-red-300 text-xs mt-1">{errors.phone}</p> : null}
          </div>
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white/[0.03] border border-white/[0.12] text-white px-4 py-3 focus:outline-none focus:border-white/35"
            >
              <option value="Self Drive Service" className="bg-[#0a0a0a]">Self Drive Service</option>
              <option value="Chauffeur Service" className="bg-[#0a0a0a]">Chauffeur Service</option>
              <option value="Wedding Booking" className="bg-[#0a0a0a]">Wedding Booking</option>
              <option value="Airport Transfer" className="bg-[#0a0a0a]">Airport Transfer</option>
              <option value="Corporate Rental" className="bg-[#0a0a0a]">Corporate Rental</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              name="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              className={`w-full bg-white/[0.03] border text-white px-4 py-3 focus:outline-none ${
                errors.date ? 'border-red-400 focus:border-red-300' : 'border-white/[0.12] focus:border-white/35'
              } booking-date-input`}
            />
            {errors.date ? <p className="text-red-300 text-xs mt-1">{errors.date}</p> : null}
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Pickup Location"
              className={`w-full bg-white/[0.03] border text-white placeholder:text-white/35 px-4 py-3 focus:outline-none ${
                errors.pickup ? 'border-red-400 focus:border-red-300' : 'border-white/[0.12] focus:border-white/35'
              }`}
            />
            {errors.pickup ? <p className="text-red-300 text-xs mt-1">{errors.pickup}</p> : null}
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
            <p className={`text-sm ${
              status.type === 'success'
                ? 'text-emerald-300'
                : status.type === 'error'
                  ? 'text-red-300'
                  : 'text-white/45'
            }`}>
              {status.text}
            </p>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-none px-8 py-5 sm:py-6 text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase"
            >
              Book Now
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
