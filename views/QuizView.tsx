import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';

interface QuizViewProps {
  questions: QuizQuestion[];
  onComplete: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ questions, onComplete }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const currentQ = questions[currentQIndex];

  const handleOptionSelect = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const checkAnswer = () => {
    setIsAnswerChecked(true);
    if (selectedOption === currentQ.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setShowSummary(true);
      onComplete();
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
    setScore(0);
    setShowSummary(false);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  if (showSummary) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="max-w-md mx-auto text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-100 mt-10">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-12 h-12 text-yellow-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
        <p className="text-gray-500 mb-8">You scored {score} out of {questions.length}</p>
        
        <div className="mb-8">
           <div className="text-5xl font-black text-indigo-600 mb-2">{Math.round(percentage)}%</div>
           <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Accuracy</div>
        </div>

        <button 
          onClick={restartQuiz}
          className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span>Question {currentQIndex + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
          {currentQ.question}
        </h3>

        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            let className = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium ";
            
            if (isAnswerChecked) {
              if (idx === currentQ.correctAnswer) {
                className += "bg-green-50 border-green-500 text-green-700";
              } else if (idx === selectedOption) {
                className += "bg-red-50 border-red-500 text-red-700";
              } else {
                className += "border-gray-100 text-gray-400 opacity-50";
              }
            } else {
              if (selectedOption === idx) {
                className += "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm";
              } else {
                className += "border-gray-100 hover:border-indigo-200 hover:bg-gray-50 text-gray-600";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswerChecked}
                onClick={() => handleOptionSelect(idx)}
                className={className}
              >
                <div className="flex items-center justify-between">
                  {opt}
                  {isAnswerChecked && idx === currentQ.correctAnswer && <CheckCircle className="w-5 h-5" />}
                  {isAnswerChecked && idx === selectedOption && idx !== currentQ.correctAnswer && <XCircle className="w-5 h-5" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 h-16">
        {!isAnswerChecked ? (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all
              ${selectedOption !== null 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl translate-y-0' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
          >
            Submit Answer
          </button>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
             <div className="mb-4 p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 text-sm">
               <strong>Explanation:</strong> {currentQ.explanation}
             </div>
             <button
              onClick={nextQuestion}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            >
              {currentQIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};