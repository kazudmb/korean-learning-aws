import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import QuizCard from './QuizCard';
import QuizArea from './QuizArea';

const QuizSection: React.FC = () => {
  const { quizzes, isQuizActive } = useAppStore();

  return (
    <Box
      id="quiz"
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
              ✏️ 練習問題
            </Typography>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isQuizActive ? (
              <motion.div
                key="quiz-selection"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Grid container spacing={3}>
                  {quizzes.map((quiz, index) => (
                    <Grid item xs={12} md={4} key={quiz.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <QuizCard quiz={quiz} />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-active"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <QuizArea />
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </Container>
    </Box>
  );
};

export default QuizSection;