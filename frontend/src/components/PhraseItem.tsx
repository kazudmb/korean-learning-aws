import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PhraseItemProps } from '../types';

const PhraseItem: React.FC<PhraseItemProps> = ({ phrase }) => {
  return (
    <motion.div
      whileHover={{ x: 5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-white border-l-4 border-[#667eea] shadow-sm hover:shadow-md transition-all duration-200 h-full">
        <CardContent className="p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2 font-korean">
            {phrase.korean}
          </h4>

          <p className="text-[#667eea] italic mb-2 text-sm">
            {phrase.pronunciation}
          </p>

          <p className="text-gray-600 mb-4 text-base font-medium">
            {phrase.japanese}
          </p>

          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="text-gray-500 text-xs italic leading-relaxed">
              💡 {phrase.usage}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PhraseItem;