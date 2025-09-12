import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="glass-effect py-16 md:py-24 mt-16 md:mt-20 text-center text-white">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl mb-4 drop-shadow-lg font-bold leading-tight">
            <span className="block sm:inline">実際の会話で使われる</span>
            <span className="block sm:inline sm:ml-2">韓国語をマスターしよう</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base md:text-xl mb-8 opacity-90 font-normal leading-relaxed">
            <span className="block sm:inline">教科書にない自然な話し言葉とパンマルを</span>
            <span className="block sm:inline sm:ml-1">段階的に学習できます</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="gradient"
            size="lg"
            onClick={() => scrollToSection('phrases')}
            className="px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            学習を始める
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;