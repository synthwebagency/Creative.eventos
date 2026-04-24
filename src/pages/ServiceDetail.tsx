import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { ArrowLeft, CheckCircle, Smartphone, Calendar, UserCheck } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const service = t.services.items.find((s) => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/services" className="flex items-center gap-2 text-ink/40 hover:text-ink transition-colors font-bold text-xs tracking-widest uppercase mb-16 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
              Our Expertise
            </span>
            <h1 className="text-6xl md:text-8xl mb-12 uppercase font-bold tracking-tighter leading-none">
              {service.title}
            </h1>
            <p className="text-ink/60 text-2xl font-serif italic mb-12 leading-relaxed">
              {service.details}
            </p>

            <h3 className="text-xs font-bold tracking-widest uppercase mb-8 text-ink/40">What's Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              {service.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-brand-rainbow-mid/5 border border-brand-rainbow-mid/5">
                  <CheckCircle className="w-6 h-6 text-brand-rainbow-mid shrink-0" />
                  <span className="font-medium text-ink/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8 p-10 rounded-3xl bg-ink text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 rainbow-gradient rounded-full blur-[80px] opacity-30" />
               <h4 className="text-3xl">Let's plan your dream {service.title.toLowerCase()}</h4>
               <p className="text-white/60 font-serif italic">Contact our team to get a personalized quote and start the creative process.</p>
               <Link to="/contact" className="btn-premium bg-white text-ink text-center">Contact our team</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-40"
          >
            <div className="rounded-3xl overflow-hidden shadow-3xl aspect-[4/5]">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
