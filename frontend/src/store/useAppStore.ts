import { create } from 'zustand';
import { AppState, Category, Quiz, UserAnswer, QuizResult } from '../types';
import { phraseData, quizData } from '../data';

export const useAppStore = create<AppState>((set, get) => ({
  // 初期状態
  categories: phraseData,
  selectedCategory: null,
  quizzes: quizData,
  currentQuiz: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  quizResult: null,
  isQuizActive: false,
  isLoading: false,
  error: null,

  // フレーズ関連アクション
  selectCategory: (category: Category) => {
    set({ selectedCategory: category });
  },

  clearCategory: () => {
    set({ selectedCategory: null });
  },

  // クイズ関連アクション
  startQuiz: (quiz: Quiz) => {
    set({
      currentQuiz: quiz,
      currentQuestionIndex: 0,
      userAnswers: [],
      quizResult: null,
      isQuizActive: true,
      error: null,
    });
  },

  answerQuestion: (answerIndex: number) => {
    const state = get();
    if (!state.currentQuiz) return;

    const currentQuestion = state.currentQuiz.questions[state.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correct;

    const newAnswer: UserAnswer = {
      selectedIndex: answerIndex,
      correct: currentQuestion.correct,
      isCorrect,
    };

    set({
      userAnswers: [...state.userAnswers, newAnswer],
    });
  },

  nextQuestion: () => {
    const state = get();
    if (!state.currentQuiz) return;

    const nextIndex = state.currentQuestionIndex + 1;
    if (nextIndex < state.currentQuiz.questions.length) {
      set({ currentQuestionIndex: nextIndex });
    }
    // 最後の問題でも自動的に結果画面に移らない
    // ユーザーが「結果を見る」ボタンを押すまで待つ
  },

  finishQuiz: () => {
    const state = get();
    if (!state.currentQuiz) return;

    const score = state.userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = state.currentQuiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    const result: QuizResult = {
      score,
      totalQuestions,
      userAnswers: state.userAnswers,
      percentage,
    };

    set({
      quizResult: result,
      isQuizActive: true,
    });
  },

  resetQuiz: () => {
    set({
      currentQuiz: null,
      currentQuestionIndex: 0,
      userAnswers: [],
      quizResult: null,
      isQuizActive: false,
      error: null,
    });
  },

  retryQuiz: () => {
    const state = get();
    if (!state.currentQuiz) return;
    
    set({
      currentQuestionIndex: 0,
      userAnswers: [],
      quizResult: null,
      isQuizActive: true,
      error: null,
    });
  },

  setError: (error: string | null) => {
    set({ error });
  },
}));