import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2))',
        py: { xs: 8, md: 12 },
        mt: { xs: 7, md: 8 },
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              fontWeight: 700,
            }}
          >
            実際の会話で使われる
            <br />
            韓国語をマスターしよう
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
            }}
          >
            教科書にない自然な話し言葉とパンマルを
            <br />
            段階的に学習できます
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollToSection('phrases')}
            sx={{
              background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
              color: 'white',
              border: 'none',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              borderRadius: '50px',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff5252, #ffd54f)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            学習を始める
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;