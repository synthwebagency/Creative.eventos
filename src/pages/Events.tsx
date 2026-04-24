import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const EventBlock: React.FC<{ event: any, index: number }> = ({ event, index }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % event.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + event.images.length) % event.images.length);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative py-20 px-6 border-b border-ink/5 last:border-0"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Info */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-rainbow-mid font-display text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block">
              Event {index + 1}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight uppercase font-bold tracking-tighter">
              {event.title}
            </h2>
            <p className="text-ink/60 text-xl font-serif italic mb-10 leading-relaxed max-w-md">
              {event.description}
            </p>
            <Link 
              to={`/events/${event.id}`} 
              className="px-8 py-3 rounded-full border border-ink text-ink font-bold text-xs tracking-widest uppercase hover:bg-ink hover:text-white transition-all inline-flex items-center gap-3 group"
            >
              View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Slideshow */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] md:h-[650px] group overflow-hidden rounded-2xl shadow-3xl">
          <div className="absolute inset-0">
            {event.images.map((img: string, i: number) => (
              <motion.img
                key={i}
                src={img}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === i ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`${event.title} ${i}`}
              />
            ))}
            <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button 
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-ink transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-ink transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Image Dots */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {event.images.map((_: any, i: number) => (
              <div 
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${currentImage === i ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>

          {/* Cut-off effect at bottom for scrolling hint */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const Events: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
            Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-ink">
            {t.events.title}
          </h1>
          <p className="text-ink/60 text-xl font-serif italic max-w-2xl mx-auto">
            {t.events.description}
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {t.events.pastEvents.map((event, index) => (
          <EventBlock key={event.id} event={event} index={index} />
        ))}
      </div>

      <div className="py-40 text-center">
        <h2 className="text-4xl font-serif mb-8 italic">Interested in creating your own story?</h2>
        <Link to="/contact" className="btn-premium rainbow-gradient text-white">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default Events;
