import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    retryQuiz,
  } = useAppStore();

  if (!currentQuiz) return null;

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  const currentAnswer = userAnswers[currentQuestionIndex] as any;
  const isAnswered = !!currentAnswer;

  if (quizResult) {
    return <QuizResult result={quizResult} onRetry={retryQuiz} />;
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (!isAnswered) {
      answerQuestion(optionIndex);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      nextQuestion();
    } else {
      useAppStore.getState().finishQuiz();
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <h3 className="text-xl font-bold text-[#667eea]">
            {currentQuiz.title}
          </h3>
          <span className="text-gray-600">
            {currentQuestionIndex + 1} / {currentQuiz.questions.length}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed break-words">
              Q{currentQuestionIndex + 1}. {currentQuestion.question}
            </h4>
            
            <div className="grid gap-3">
              {currentQuestion.options.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: isAnswered ? 1 : 1.02 }}
                  whileTap={{ scale: isAnswered ? 1 : 0.98 }}
                >
                  <Button
                    variant={currentAnswer === index ? "default" : "outline"}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isAnswered}
                    className={`w-full p-4 text-left justify-start h-auto break-words leading-relaxed flex items-start ${
                      isAnswered && index === currentQuestion.correct
                        ? 'bg-green-500 text-white'
                        : isAnswered && currentAnswer === index && index !== currentQuestion.correct
                        ? 'bg-red-500 text-white'
                        : ''
                    }`}
                  >
                    <span className="font-medium mr-3 flex-shrink-0">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1">{option}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={resetQuiz}
        >
          終了
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {currentQuestionIndex < currentQuiz.questions.length - 1 ? '次へ' : '結果を見る'}
        </Button>
      </div>
    </div>
  );
};

export default QuizArea;