import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
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
        className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white cursor-pointer h-full min-h-[180px] flex items-center hover:shadow-xl hover:shadow-[#667eea]/30 transition-all duration-300"
      >
        <CardContent className="text-center w-full">
          <div className="text-3xl mb-4">
            {quiz.icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            {quiz.title}
          </h3>
          <p className="opacity-90 text-sm mb-2">
            {getQuizDescription(quiz.id)}
          </p>
          <p className="opacity-80 text-xs">
            {quiz.questions.length}問
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuizCard;