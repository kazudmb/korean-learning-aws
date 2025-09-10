import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
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
        sx={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          cursor: 'pointer',
          height: '100%',
          minHeight: 150,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)',
          },
        }}
      >
        <CardContent sx={{ textAlign: 'center', width: '100%' }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 1,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 'bold',
            }}
          >
            {category.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              fontSize: '0.9rem',
            }}
          >
            {category.phrases.length}個のフレーズ
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;