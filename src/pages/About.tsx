import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { CheckCircle, Award, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: 'Events Organized', value: '500+', icon: Award },
    { label: 'Happy Clients', value: '450+', icon: Users },
    { label: 'Awards Won', value: '15+', icon: Target },
  ];

  return (
    <div className="pt-32">
      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
             >
                <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
                  The Agency
                </span>
                <h1 className="text-6xl md:text-8xl mb-12 font-serif italic">
                  Designing moments that <span className="rainbow-text underline underline-offset-16 decoration-brand-rainbow-mid/20">define lifetimes.</span>
                </h1>
                <p className="text-ink/60 text-xl font-serif leading-relaxed mb-10">
                  {t.about.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {t.about.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle className="text-brand-rainbow-mid w-5 h-5 shrink-0" />
                      <span className="font-bold text-xs tracking-widest uppercase text-ink/70">{point}</span>
                    </div>
                  ))}
                </div>
             </motion.div>

             <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-3xl aspect-square">
                  <img 
                    src="/images/about_us.jpg" 
                    className="w-full h-full object-cover"
                    alt="Our Team"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 p-10 bg-white shadow-2xl rounded-3xl max-w-xs border border-ink/5">
                   <p className="text-sm font-serif italic text-ink/60 mb-4">"We don't just plan events, we curate emotional experiences through design and logistics."</p>
                   <span className="text-xs font-bold tracking-widest uppercase">— Founder, Creative Eventos</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-ink text-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {stats.map((stat, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="text-center group"
                 >
                    <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-brand-rainbow-mid transition-all duration-500">
                      <stat.icon className="w-8 h-8 text-white/40 group-hover:text-brand-rainbow-mid" />
                    </div>
                    <h3 className="text-6xl font-display font-black mb-2 text-white">{stat.value}</h3>
                    <p className="text-white/40 font-bold text-xs tracking-widest uppercase">{stat.label}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Mission / Values */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-rainbow-mid/5 skew-x-12 translate-x-32" />
        <div className="max-w-5xl mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-7xl mb-12">Our Commitment</h2>
           <p className="text-2xl font-serif italic text-ink/50 leading-relaxed mb-20 max-w-4xl mx-auto">
             "To provide Moçambique with world-class event services that blend local culture with international standards of elegance and professionalism."
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div className="p-10 rounded-3xl border border-ink/5 hover:border-brand-rainbow-mid/20 transition-colors bg-white shadow-sm">
                <h4 className="text-2xl mb-4 uppercase font-bold tracking-tighter">Excellence</h4>
                <p className="text-ink/60 font-serif italic text-lg">Every detail is polished until it reaches perfection. We don't settle for 'good enough'.</p>
              </div>
              <div className="p-10 rounded-3xl border border-ink/5 hover:border-brand-rainbow-mid/20 transition-colors bg-white shadow-sm">
                <h4 className="text-2xl mb-4 uppercase font-bold tracking-tighter">Human Connection</h4>
                <p className="text-ink/60 font-serif italic text-lg">We listen to your stories and build vents that reflect who you are and what you value most.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
