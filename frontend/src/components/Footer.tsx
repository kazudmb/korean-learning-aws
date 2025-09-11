import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 text-white py-8 mt-12">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold mb-4">
              🇰🇷 韓国語話し言葉マスター
            </h3>
            
            <p className="mb-4 opacity-90 text-sm">
              실용 한국어 회화 학습사이트 (実用韓国語会話学習サイト)
            </p>

            <p className="opacity-70 text-xs mb-6">
              &copy; 2025 Korean Learning Platform. 
              친구처럼 자연스럽게 한국어를 배워보세요! 
              (友達のように自然に韓国語を学んでみましょう!)
            </p>

            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="opacity-60 text-xs italic">
                Made with ❤️ for Korean language learners
                <br />
                Built with React, TypeScript, and AWS
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;