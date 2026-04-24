import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

import { useLanguage } from './LanguageContext';

const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const whatsappNumber = t.socials.whatsapp;
  const url = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow duration-300"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
