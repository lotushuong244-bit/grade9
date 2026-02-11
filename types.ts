export enum UnitSection {
  VOCABULARY = 'Vocabulary',
  PRONUNCIATION = 'Pronunciation',
  GRAMMAR = 'Grammar',
  LISTENING = 'Listening',
  SPEAKING = 'Speaking',
  QUIZ = 'Quiz'
}

export interface VocabularyItem {
  word: string;
  meaning: string;
  example: string;
  imageDescription: string;
  aiPrompt: string;
  altText: string;
}

export interface PronunciationContent {
  title: string;
  description: string;
  rules: string[];
  examples: string[];
}

export interface GrammarContent {
  title: string;
  explanation: string;
  examples: string[];
  practiceQuestion: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

export interface ListeningContent {
  title: string;
  transcript: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface SpeakingContent {
  topic: string;
  dialogue: {
    speaker: string;
    text: string;
  }[];
  discussionPoints: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UnitData {
  id: number;
  title: string;
  theme: string;
  description: string;
  imagePrompt: string;
  sections: {
    vocabulary: VocabularyItem[];
    pronunciation: PronunciationContent;
    grammar: GrammarContent;
    listening: ListeningContent;
    speaking: SpeakingContent;
    quiz: QuizQuestion[];
  };
}