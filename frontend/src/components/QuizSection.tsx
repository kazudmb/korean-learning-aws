import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useAppStore } from '../store/useAppStore';
import QuizCard from './QuizCard';
import QuizArea from './QuizArea';

const QuizSection: React.FC = () => {
  const { quizzes, isQuizActive } = useAppStore();

  return (
    <div id="quiz" className="py-12 mx-2 md:mx-4 my-8">
      <Container maxWidth="lg">
        <Card className="glass-effect rounded-3xl shadow-2xl p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-gray-800 mb-4">
                ✏️ 練習問題
              </CardTitle>
            </CardHeader>
          </motion.div>

          <CardContent>
            <AnimatePresence mode="wait">
              {!isQuizActive ? (
                <motion.div
                  key="quiz-selection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {quizzes.map((quiz, index) => (
                      <motion.div
                        key={quiz.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <QuizCard quiz={quiz} />
                      </motion.div>
                    ))}
                  </div>
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
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default QuizSection;