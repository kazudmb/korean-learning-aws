import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizResult as QuizResultType } from '../types';
import { useAppStore } from '../store/useAppStore';

interface QuizResultProps {
  result: QuizResultType;
  onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ result, onRetry }) => {
  const { resetQuiz } = useAppStore();
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 90) return '완벽해요! (Perfect!)';
    if (percentage >= 70) return '잘했어요! (Well done!)';
    if (percentage >= 50) return '괜찮아요! (Not bad!)';
    return '더 연습해봐요! (More practice!)';
  };

  const getResultEmoji = () => {
    if (percentage >= 90) return '🎉';
    if (percentage >= 70) return '👏';
    if (percentage >= 50) return '😊';
    return '💪';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="text-center">
        <CardHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-6xl mb-4">
              {getResultEmoji()}
            </div>
          </motion.div>
          <CardTitle className="text-2xl text-gray-800">
            クイズ完了！
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-[#667eea] mb-2">
              {result.score} / {result.totalQuestions}
            </div>
            <div className="text-xl text-gray-600 mb-4">
              正答率: {percentage}%
            </div>
            <div className="text-lg font-medium text-[#764ba2]">
              {getResultMessage()}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">結果の詳細</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-green-600">正解: {result.score}問</span>
                </div>
                <div>
                  <span className="text-red-600">不正解: {result.totalQuestions - result.score}問</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed">
              <span className="block sm:inline">継続的な学習で韓国語をマスターしましょう！</span>
              <span className="block sm:inline sm:ml-1">間違えた問題を復習して、次回はもっと良い結果を目指しましょう。</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button
              onClick={onRetry}
              variant="outline"
            >
              もう一度
            </Button>
            <Button
              onClick={resetQuiz}
            >
              戻る
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default QuizResult;