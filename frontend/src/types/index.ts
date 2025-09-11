// フレーズの型定義
export interface Phrase {
  korean: string;
  pronunciation: string;
  japanese: string;
  usage: string;
}

// カテゴリの型定義
export interface Category {
  id: string;
  title: string;
  icon: string;
  phrases: Phrase[];
}

// クイズ問題の型定義
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

// クイズの型定義
export interface Quiz {
  id: string;
  title: string;
  icon: string;
  questions: QuizQuestion[];
}

// ユーザーの回答の型定義
export interface UserAnswer {
  selectedIndex: number;
  correct: number;
  isCorrect: boolean;
}

// クイズ結果の型定義
export interface QuizResult {
  score: number;
  totalQuestions: number;
  userAnswers: UserAnswer[];
  percentage: number;
}

// レベルの型定義
export interface Level {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

// アプリケーションの状態の型定義
export interface AppState {
  // フレーズ関連
  categories: Category[];
  selectedCategory: Category | null;
  
  // クイズ関連
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  quizResult: QuizResult | null;
  isQuizActive: boolean;
  
  // UI状態
  isLoading: boolean;
  error: string | null;
  
  // アクション
  selectCategory: (category: Category) => void;
  clearCategory: () => void;
  startQuiz: (quiz: Quiz) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
  retryQuiz: () => void;
  setError: (error: string | null) => void;
}

// コンポーネントのProps型定義
export interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

export interface PhraseItemProps {
  phrase: Phrase;
}

export interface QuizCardProps {
  quiz: Quiz;
  onClick: (quiz: Quiz) => void;
}

export interface QuestionProps {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  userAnswer?: UserAnswer;
}

export interface QuizResultProps {
  result: QuizResult;
  onRetry: () => void;
}

export interface LevelCardProps {
  level: Level;
  onClick: (level: Level) => void;
}