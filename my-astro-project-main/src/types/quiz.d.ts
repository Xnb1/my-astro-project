export interface Question {
  id: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  category: string;
  difficulty: string;
  isStarted: boolean;
  isFinished: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Difficulty {
  id: string;
  name: string;
  description: string;
  points: number;
} 