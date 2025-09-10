import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 'bold',
              }}
            >
              🇰🇷 韓国語話し言葉マスター
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                opacity: 0.9,
                fontSize: '0.95rem',
              }}
            >
              실용 한국어 회화 학습사이트 (実用韓国語会話学習サイト)
            </Typography>

            <Typography
              variant="body2"
              sx={{
                opacity: 0.7,
                fontSize: '0.85rem',
              }}
            >
              &copy; 2025 Korean Learning Platform. 
              친구처럼 자연스럽게 한국어를 배워보세요! 
              (友達のように自然に韓国語を学んでみましょう!)
            </Typography>

            <Box
              sx={{
                mt: 3,
                pt: 2,
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.6,
                  fontSize: '0.75rem',
                  fontStyle: 'italic',
                }}
              >
                Made with ❤️ for Korean language learners
                <br />
                Built with React, TypeScript, and AWS
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;