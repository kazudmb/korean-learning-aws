import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { QuizResultProps } from '../types';
import { useAppStore } from '../store/useAppStore';

const QuizResult: React.FC<QuizResultProps> = ({ result, onRetry }) => {
  const { currentQuiz } = useAppStore();

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return { message: '素晴らしい！完璧です！🎉', color: '#28a745' };
    if (percentage >= 70) return { message: 'よくできました！👏', color: '#17a2b8' };
    if (percentage >= 50) return { message: 'もう少し頑張りましょう！💪', color: '#ffc107' };
    return { message: '復習して再挑戦しましょう！📚', color: '#dc3545' };
  };

  const scoreMessage = getScoreMessage(result.percentage);
  const incorrectAnswers = result.userAnswers
    .map((answer, index) => ({ ...answer, index }))
    .filter(answer => !answer.isCorrect);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            color: '#333',
            fontSize: { xs: '1.8rem', md: '2rem' },
          }}
        >
          結果発表
        </Typography>

        <Card
          sx={{
            mb: 4,
            p: 3,
            background: `linear-gradient(135deg, ${scoreMessage.color}15, ${scoreMessage.color}05)`,
            border: `2px solid ${scoreMessage.color}30`,
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                color: scoreMessage.color,
                mb: 2,
              }}
            >
              {result.score} / {result.totalQuestions}
            </Typography>
            
            <Chip
              label={`${result.percentage}%`}
              sx={{
                background: scoreMessage.color,
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                px: 2,
                py: 3,
                mb: 2,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: scoreMessage.color,
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {scoreMessage.message}
            </Typography>
          </CardContent>
        </Card>

        {incorrectAnswers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card sx={{ mb: 4, textAlign: 'left' }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, color: '#dc3545', fontWeight: 'bold', textAlign: 'center' }}
                >
                  📝 復習しよう
                </Typography>
                
                {incorrectAnswers.map((answer, idx) => {
                  const question = currentQuiz?.questions[answer.index];
                  if (!question) return null;

                  return (
                    <Box key={answer.index} sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}
                      >
                        問題 {answer.index + 1}: {question.question}
                      </Typography>
                      
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: '#dc3545', fontWeight: 'bold' }}
                        >
                          ❌ あなたの答え: {question.options[answer.selectedIndex]}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{ color: '#28a745', fontWeight: 'bold' }}
                        >
                          ✅ 正解: {question.options[answer.correct]}
                        </Typography>
                      </Box>
                      
                      <Box
                        sx={{
                          background: '#f8f9fa',
                          p: 2,
                          borderRadius: 1,
                          border: '1px solid #e9ecef',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontStyle: 'italic', color: '#666' }}
                        >
                          💡 {question.explanation}
                        </Typography>
                      </Box>
                      
                      {idx < incorrectAnswers.length - 1 && (
                        <Divider sx={{ mt: 3 }} />
                      )}
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {incorrectAnswers.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card
              sx={{
                mb: 4,
                p: 3,
                background: 'linear-gradient(135deg, #28a74515, #28a74505)',
                border: '2px solid #28a74530',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ color: '#28a745', fontWeight: 'bold' }}
                >
                  🎉 全問正解！
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
                  完璧です！韓国語の理解が深まっていますね！
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={onRetry}
            sx={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            もう一度挑戦
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default QuizResult;