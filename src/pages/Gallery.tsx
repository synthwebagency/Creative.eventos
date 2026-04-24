import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { X, Search } from 'lucide-react';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // General gallery images
  const images = [
    '/images/event-extra-1.jpg',
    '/images/event-extra-2.jpg',
    '/images/event-extra-3.jpg',
    '/images/event-extra-4.jpg',
    '/images/event-extra-5.jpg',
    '/images/detail-extra-1.jpg',
    '/images/detail-extra-2.jpg',
    '/images/detail-extra-3.jpg',
    '/images/wedding_1.jpg',
    '/images/anniversary_lilac_1.jpg',
    '/images/womens_day_1.jpg',
    '/images/school_1.jpg',
  ];

  return (
    <div className="pt-40 pb-32 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
        >
          <span className="text-brand-rainbow-mid font-display text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
            Visual Storytelling
          </span>
          <h1 className="text-6xl md:text-9xl mb-8 uppercase font-bold tracking-tighter leading-none">
            Gallery.
          </h1>
          <p className="text-ink/60 text-xl font-serif italic max-w-2xl mx-auto">
            A curated selection of our most beautiful setups and moments.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="aspect-square group relative cursor-pointer overflow-hidden rounded-lg shadow-sm"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Search className="text-white w-8 h-8" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
             <button className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors">
               <X size={40} />
             </button>
             <motion.img
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               src={selectedImage}
               className="max-w-full max-h-full object-contain shadow-2xl rounded-xl"
               onClick={(e) => e.stopPropagation()}
             />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
