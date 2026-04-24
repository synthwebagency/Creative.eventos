import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { ChevronRight, ArrowRight, Star, Users, CheckCircle, ShieldCheck, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % t.whyUs.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.whyUs.slides.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_bg.jpg"
            className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-transparent to-ink" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-white text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[0.95]">
              <span className="block">{t.hero.title.split(' ').slice(0, 2).join(' ')}</span>
              <span className="rainbow-text block">{t.hero.title.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-white/80 font-display text-sm md:text-lg tracking-[0.3em] uppercase mb-12 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/services" className="btn-premium bg-white text-ink hover:bg-white/90">
                {t.hero.ctaViewServices}
              </Link>
              <Link to="/contact" className="btn-premium rainbow-gradient text-white">
                {t.hero.ctaPlanEvent}
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 2 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] tracking-[0.5em] font-bold uppercase">Discover More</span>
          <div className="w-[1px] h-20 bg-linear-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about_us.jpg"
                className="w-full h-full object-cover"
                alt="About Us"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-rainbow-mid/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 rainbow-gradient rounded-2xl -z-10 opacity-20 rotate-12" />
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
              {t.about.title}
            </span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              {t.about.subtitle}
            </h2>
            <p className="text-ink/70 text-lg md:text-xl leading-relaxed mb-10 font-serif italic">
              {t.about.description}
            </p>
            <ul className="space-y-6 mb-12">
              {t.about.points.map((point, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-brand-rainbow-mid/10 flex items-center justify-center text-brand-rainbow-mid group-hover:scale-110 transition-transform">
                    {i === 0 ? <Users size={20} /> : i === 1 ? <Star size={20} /> : <CheckCircle size={20} />}
                  </div>
                  <span className="font-medium text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="group flex items-center gap-2 text-ink font-bold tracking-widest text-xs uppercase underline-offset-8 hover:underline decoration-brand-rainbow-mid decoration-2 transition-all">
              Learn More About Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/5 to-transparent skew-x-12 translate-x-32" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                Expertise
              </span>
              <h2 className="text-5xl md:text-7xl leading-none">
                {t.services.title}
              </h2>
            </div>
            <Link to="/services" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
              View All Services <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl mb-4 group-hover:text-brand-rainbow-mid transition-colors">{service.title}</h3>
                  <p className="text-white/60 mb-6 line-clamp-2 font-serif italic text-lg">{service.description}</p>
                  <Link to={`/services/${service.id}`} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Slideshow */}
      <section className="py-32 bg-white flex items-center justify-center min-h-[600px] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-rainbow-mid/5 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-16 block">
            {t.whyUs.title}
          </span>
          
          <div className="relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h3 className="text-5xl md:text-7xl font-serif mb-6 leading-tight uppercase font-bold tracking-wider">
                  {t.whyUs.slides[activeSlide].title}
                </h3>
                <p className="text-ink/60 text-xl font-serif italic max-w-lg mx-auto">
                  {t.whyUs.slides[activeSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {t.whyUs.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-10 bg-brand-rainbow-mid' : 'bg-ink/10'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center border-y border-ink/5 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl mb-12">
              Ready to <span className="rainbow-text">Create?</span>
            </h2>
            <Link to="/contact" className="btn-premium rainbow-gradient text-white text-xl px-12 py-5 inline-block">
              {t.hero.ctaPlanEvent}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
