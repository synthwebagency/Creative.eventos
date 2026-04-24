import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.events, path: '/events' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img 
              src="/images/logo.png" 
              alt="Creative Eventos Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 onerror-hide"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                if (e.target instanceof HTMLElement && e.target.parentElement) {
                  const fallback = e.target.parentElement.querySelector('.logo-fallback');
                  if (fallback instanceof HTMLElement) fallback.style.display = 'flex';
                }
              }}
            />
            <div className="logo-fallback hidden w-10 h-10 rounded-full rainbow-gradient items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              C
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl tracking-tighter transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-ink md:text-white'}`}>
              CREATIVE
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] -mt-1 transition-colors duration-300 ${scrolled ? 'text-brand-rainbow-mid' : 'text-brand-rainbow-mid md:text-white/80'}`}>
              EVENTOS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-brand-rainbow-mid relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-rainbow-mid after:transition-all hover:after:w-full ${
                location.pathname === link.path ? 'text-brand-rainbow-mid after:w-full' : scrolled ? 'text-ink/80' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-2 text-xs font-bold border rounded-full px-3 py-1 transition-all duration-300 hover:bg-ink hover:text-white ${
              scrolled ? 'border-ink/20 text-ink' : 'border-white/40 text-white'
            }`}
          >
            <Globe className="w-3 h-3" />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-ink' : 'text-ink md:text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden border-t"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-serif ${location.pathname === link.path ? 'text-brand-rainbow-mid' : 'text-ink'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr />
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 font-bold text-sm"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'PORTUGUÊS' : 'ENGLISH'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
