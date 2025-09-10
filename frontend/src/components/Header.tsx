import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              color: '#667eea',
              fontWeight: 'bold',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
            }}
          >
            🇰🇷 韓国語話し言葉マスター
          </Typography>
        </motion.div>

        <Box sx={{ display: 'flex', gap: isMobile ? 1 : 2 }}>
          {[
            { label: 'フレーズ集', id: 'phrases' },
            { label: '練習問題', id: 'quiz' },
            { label: 'レベル別', id: 'levels' },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                color="primary"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  fontWeight: 500,
                  borderRadius: '20px',
                  px: isMobile ? 1 : 2,
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  '&:hover': {
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;