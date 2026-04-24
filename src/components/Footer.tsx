import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Creative Eventos Logo" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  if (e.target instanceof HTMLElement && e.target.parentElement) {
                    const fallback = e.target.parentElement.querySelector('.logo-fallback');
                    if (fallback instanceof HTMLElement) fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="logo-fallback hidden w-10 h-10 rounded-full rainbow-gradient items-center justify-center text-white font-bold text-xl">
                C
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tighter">CREATIVE</span>
              <span className="text-[10px] font-bold tracking-[0.2em] -mt-1 text-white/60">EVENTOS</span>
            </div>
          </Link>
          <p className="text-white/60 max-w-sm font-serif text-lg italic leading-relaxed">
            "{t.hero.subtitle}"
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-xs tracking-widest uppercase mb-6 text-white/40">Connect</h4>
          <div className="flex flex-col gap-4">
            <a href={t.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-rainbow-mid transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a href={t.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-rainbow-mid transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-xs tracking-widest uppercase mb-6 text-white/40">Contact</h4>
          <div className="flex flex-col gap-4 text-sm font-medium text-white/80">
             <div className="flex items-center gap-3">
               <Phone className="w-4 h-4 text-brand-rainbow-mid" />
               <span>{t.contact.phone}</span>
             </div>
             <div className="flex items-center gap-3">
               <Mail className="w-4 h-4 text-brand-rainbow-mid" />
               <span>{t.contact.email}</span>
             </div>
             <div className="flex items-center gap-3">
               <MapPin className="w-4 h-4 text-brand-rainbow-mid" />
               <span>{t.contact.location}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">
        <span>{t.footer.rights}</span>
        <div className="flex gap-8">
          <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
