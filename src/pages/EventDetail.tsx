import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { ArrowLeft, Share2, Instagram, Facebook } from 'lucide-react';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const event = t.events.pastEvents.find((e) => e.id === id);

  if (!event) return <Navigate to="/events" />;

  return (
    <div className="pt-32 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/events" className="flex items-center gap-2 text-ink/40 hover:text-ink transition-colors font-bold text-xs tracking-widest uppercase mb-16 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to History
        </Link>

        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-6xl md:text-9xl mb-8 uppercase font-bold tracking-tighter leading-none">
              {event.title}
            </h1>
            <p className="text-ink/60 text-2xl font-serif italic leading-relaxed mb-12">
              {event.description}
            </p>
            <div className="flex justify-center gap-6">
              <button className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all">
                <Share2 size={18} />
              </button>
              <button className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all">
                <Instagram size={18} />
              </button>
              <button className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all">
                <Facebook size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {event.images.map((img, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-zoom-in"
             >
                <img src={img} className="w-full h-auto group-hover:scale-110 transition-transform duration-1000" alt={`${event.title} detail ${i}`} />
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
