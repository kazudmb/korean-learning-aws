import React from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  Button,
  Paper,
  Grid,
  Alert,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import QuizResult from './QuizResult';

const QuizArea: React.FC = () => {
  const {
    currentQuiz,
    currentQuestionIndex,
    userAnswers,
    quizResult,
    answerQuestion,
    nextQuestion,
    resetQuiz,
  } = useAppStore();

  if (!currentQuiz) return null;

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  const currentAnswer = userAnswers[currentQuestionIndex] as any;
  const isAnswered = !!currentAnswer;

  if (quizResult) {
    return <QuizResult result={quizResult} onRetry={resetQuiz} />;
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (!isAnswered) {
      answerQuestion(optionIndex);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      // まだ次の問題がある場合
      nextQuestion();
    } else {
      // 最後の問題の場合、結果画面に移る
      useAppStore.getState().finishQuiz();
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="h5" sx={{ color: '#667eea', fontWeight: 'bold' }}>
            {currentQuiz.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            {currentQuestionIndex + 1} / {currentQuiz.questions.length}
          </Typography>
        </Box>
        
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e9ecef',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: 4,
            },
          }}
        />
      </Box>

      {/* Question */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          sx={{
            p: 3,
            mb: 3,
            background: 'white',
            borderLeft: '4px solid #667eea',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              textAlign: 'center',
              color: '#333',
            }}
          >
            {currentQuestion.question}
          </Typography>
        </Paper>
      </motion.div>

      {/* Options */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {currentQuestion.options.map((option, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Paper
                onClick={() => handleOptionSelect(index)}
                sx={{
                  p: 2,
                  cursor: isAnswered ? 'default' : 'pointer',
                  border: '2px solid transparent',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  backgroundColor: isAnswered
                    ? index === currentQuestion.correct
                      ? 'rgba(40, 167, 69, 0.1)'
                      : index === (currentAnswer?.selectedIndex ?? -1)
                      ? 'rgba(220, 53, 69, 0.1)'
                      : 'white'
                    : (currentAnswer?.selectedIndex ?? -1) === index
                    ? 'rgba(102, 126, 234, 0.1)'
                    : 'white',
                  borderColor: isAnswered
                    ? index === currentQuestion.correct
                      ? '#28a745'
                      : index === (currentAnswer?.selectedIndex ?? -1)
                      ? '#dc3545'
                      : 'transparent'
                    : (currentAnswer?.selectedIndex ?? -1) === index
                    ? '#667eea'
                    : 'transparent',
                  '&:hover': !isAnswered
                    ? {
                        backgroundColor: '#f0f0f0',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      }
                    : {},
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    color: '#333',
                    fontWeight: (currentAnswer?.selectedIndex ?? -1) === index ? 'bold' : 'normal',
                  }}
                >
                  {option}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Feedback */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Alert
              severity={currentAnswer.isCorrect ? 'success' : 'error'}
              sx={{ mb: 3 }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {currentAnswer.isCorrect ? '正解！' : '不正解'}
              </Typography>
              <Typography variant="body2">
                {currentQuestion.explanation}
              </Typography>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      {isAnswered && (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              fontWeight: 'bold',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {currentQuestionIndex < currentQuiz.questions.length - 1
              ? '次の問題'
              : '結果を見る'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default QuizArea;