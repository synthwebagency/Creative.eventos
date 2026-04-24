import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
              Contact Us
            </span>
            <h1 className="text-6xl md:text-9xl mb-12 uppercase font-bold tracking-tighter leading-none">
              Let's <span className="rainbow-text">Talk.</span>
            </h1>
            <p className="text-ink/60 text-2xl font-serif italic mb-16 max-w-lg leading-relaxed">
              We're here to answer every question and start planning your next unforgettable experience.
            </p>

            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold tracking-widest uppercase text-ink/30 mb-2 group-hover:text-brand-rainbow-mid transition-colors duration-300">Call Us</p>
                <a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="text-3xl font-display font-medium hover:text-brand-rainbow-mid transition-colors">
                  {t.contact.phone}
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold tracking-widest uppercase text-ink/30 mb-2 group-hover:text-brand-rainbow-mid transition-colors duration-300">Email Us</p>
                <a href={`mailto:${t.contact.email}`} className="text-3xl font-display font-medium hover:text-brand-rainbow-mid transition-colors">
                  {t.contact.email}
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold tracking-widest uppercase text-ink/30 mb-2 group-hover:text-brand-rainbow-mid transition-colors duration-300">Our Location</p>
                <p className="text-2xl font-display font-medium">
                  {t.contact.location}<br />
                  <span className="text-lg text-ink/50">{t.contact.address}</span>
                </p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] font-bold tracking-widest uppercase text-ink/30 mb-2 group-hover:text-brand-rainbow-mid transition-colors duration-300">Service Area</p>
                <p className="text-xl font-display font-medium text-ink/70 italic">
                  {t.serviceArea}
                </p>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              <a href={t.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-ink/5 flex items-center justify-center hover:bg-ink hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href={t.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-ink/5 flex items-center justify-center hover:bg-ink hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full h-[600px] rounded-3xl overflow-hidden bg-ink/5 relative"
          >
            {/* Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114815.11867160756!2d32.50293064434222!3d-25.93179268388909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee690dd0fca7a85%3A0xe5433d7b420f1b21!2sMaputo!5e0!3m2!1sen!2smz!4v1713978363234!5m2!1sen!2smz" 
              className="w-full h-full border-0 grayscale invert contrast-125"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute top-8 left-8 bg-ink text-white p-8 rounded-2xl shadow-2xl max-w-xs">
              <h4 className="font-display font-bold text-xs tracking-widest uppercase mb-4 text-brand-rainbow-mid">Visit Us</h4>
              <p className="font-serif italic text-white/80">"Our offices reflect the same creativity we bring to our events. Come by for a coffee and a chat."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
