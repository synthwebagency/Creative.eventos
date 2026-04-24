import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
             Expertise
          </span>
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
            {t.services.title}
          </h1>
          <p className="text-ink/60 text-xl font-serif italic">
            {t.services.description}
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {t.services.items.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-10 group"
          >
            <div className="aspect-video rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors" />
            </div>
            
            <div className="px-4">
              <h3 className="text-4xl mb-4 group-hover:text-brand-rainbow-mid transition-colors uppercase font-bold tracking-tighter">
                {service.title}
              </h3>
              <p className="text-ink/60 text-lg font-serif italic mb-8 max-w-lg leading-relaxed">
                {service.details}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {service.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                    <CheckCircle className="w-4 h-4 text-brand-rainbow-mid shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to={`/services/${service.id}`}
                className="btn-premium border border-ink text-ink hover:bg-ink hover:text-white inline-flex items-center gap-3 text-xs tracking-widest uppercase"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
