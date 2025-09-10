import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { PhraseItemProps } from '../types';

const PhraseItem: React.FC<PhraseItemProps> = ({ phrase }) => {
  return (
    <motion.div
      whileHover={{ x: 5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        sx={{
          background: 'white',
          borderLeft: '4px solid #667eea',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          borderRadius: 2,
          transition: 'all 0.2s ease',
          height: '100%',
          '&:hover': {
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <CardContent sx={{ p: 2.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: '#333',
              mb: 0.5,
              fontFamily: 'Noto Sans KR',
            }}
          >
            {phrase.korean}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#667eea',
              fontStyle: 'italic',
              mb: 0.5,
              fontSize: '0.95rem',
            }}
          >
            {phrase.pronunciation}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mb: 1,
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            {phrase.japanese}
          </Typography>

          <Box
            sx={{
              background: '#f8f9fa',
              p: 1.5,
              borderRadius: 1,
              border: '1px solid #e9ecef',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#888',
                fontSize: '0.85rem',
                fontStyle: 'italic',
                lineHeight: 1.4,
              }}
            >
              💡 {phrase.usage}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PhraseItem;