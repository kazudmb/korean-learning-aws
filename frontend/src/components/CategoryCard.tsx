import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CategoryCardProps } from '../types';

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        onClick={() => onClick(category)}
        className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white cursor-pointer h-full min-h-[150px] flex items-center hover:shadow-xl hover:shadow-[#667eea]/30 transition-all duration-300"
      >
        <CardContent className="text-center w-full">
          <h3 className="text-lg md:text-xl font-bold mb-2">
            {category.title}
          </h3>
          <p className="opacity-90 text-sm">
            {category.phrases.length}個のフレーズ
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;