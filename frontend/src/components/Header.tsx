import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#667eea] leading-tight">
            🇰🇷 韓国語話し言葉マスター
          </h1>
        </motion.div>

        <div className="flex gap-2 md:gap-4">
          {[
            { label: 'フレーズ集', id: 'phrases' },
            { label: '練習問題', id: 'quiz' },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="font-medium rounded-full px-3 md:px-4 text-sm md:text-base hover:bg-[#667eea]/10 text-[#667eea]"
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;