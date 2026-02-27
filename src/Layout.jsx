import React from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import eliteLogo from '@/public/elite-logo-2.png';
import whatsappIcon from '@/public/whatsapp.webp';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        
        :root {
          --color-black: #0a0a0a;
          --color-charcoal: #1a1a1a;
          --color-silver: #c0c0c0;
          --color-platinum: #e8e8e8;
          --color-gold: #D4AF37;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: #0a0a0a;
          color: white;
        }
        
        h1, h2, h3 {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer id="contact" className="bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src={eliteLogo}
                  alt="Elite Prime Cars"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Pune's premier luxury car rental service. Experience automotive excellence.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-white/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-sm tracking-widest uppercase mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Our Fleet', 'Services', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white text-sm tracking-widest uppercase mb-6">Services</h4>
              <ul className="space-y-4">
                {['Leisure Service', 'Chauffeur Services', 'Airport Transfers', 'Wedding Cars', 'Corporate Rentals'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-sm tracking-widest uppercase mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+919920053379" className="flex items-center gap-3 text-white/40 text-sm hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 9920053379
                  </a>
                </li>
                <li>
                  <a href="mailto:care@eliteprimecars.com" className="flex items-center gap-3 text-white/40 text-sm hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    care@eliteprimecars.com
                  </a>
                </li>
              </ul>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm text-center md:text-left">
              © 2026 Elite Prime Cars. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Terms of Service</a>
              <div className="flex items-center gap-3 ml-4">

                <img src="/sitecredits/fabulous.png" alt="Fabulous" className="h-5 w-auto opacity-60" />
                <img src="/sitecredits/gocommercially.webp" alt="Go Comercially" className="h-5 w-auto opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/919920053379?text=Hi, I'd like to book a luxury car"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-8 md:bottom-8 lg:right-16 z-50 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="h-full w-full object-cover"
        />
      </a>
    </div>
  );
}
