import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { Quiz } from '../types';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const { startQuiz } = useAppStore();

  const getQuizDescription = (quizId: string) => {
    switch (quizId) {
      case 'translation':
        return '日本語→韓国語の翻訳';
      case 'listening':
        return '音声を聞いて意味を選択';
      case 'situation':
        return '場面に合った表現を選択';
      default:
        return '';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        onClick={() => startQuiz(quiz)}
        sx={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          cursor: 'pointer',
          height: '100%',
          minHeight: 180,
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
            variant="h4"
            component="div"
            sx={{ mb: 2, fontSize: '2rem' }}
          >
            {quiz.icon}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 1,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 'bold',
            }}
          >
            {quiz.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              fontSize: '0.9rem',
            }}
          >
            {getQuizDescription(quiz.id)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              fontSize: '0.8rem',
              mt: 1,
            }}
          >
            {quiz.questions.length}問
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuizCard;