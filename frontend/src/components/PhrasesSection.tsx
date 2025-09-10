import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import CategoryCard from './CategoryCard';
import PhraseItem from './PhraseItem';

const PhrasesSection: React.FC = () => {
  const { categories, selectedCategory, selectCategory, clearCategory } = useAppStore();

  return (
    <Box
      id="phrases"
      sx={{
        py: 6,
        mx: { xs: 1, md: 2 },
        my: 4,
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            p: { xs: 2, md: 4 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 4,
                color: '#333',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              📱 シーン別フレーズ
            </Typography>
          </motion.div>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CategoryCard
                    category={category}
                    onClick={selectCategory}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <AnimatePresence>
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    background: '#f8f9fa',
                    borderRadius: 2,
                    p: 3,
                    mt: 3,
                    border: '1px solid #e9ecef',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                      pb: 2,
                      borderBottom: '2px solid #667eea',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: '#667eea', fontWeight: 'bold' }}
                    >
                      {selectedCategory.title}
                    </Typography>
                    <IconButton
                      onClick={clearCategory}
                      sx={{
                        background: '#ff6b6b',
                        color: 'white',
                        '&:hover': {
                          background: '#ff5252',
                        },
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  <Grid container spacing={2}>
                    {selectedCategory.phrases.map((phrase, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <PhraseItem phrase={phrase} />
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </Container>
    </Box>
  );
};

export default PhrasesSection;