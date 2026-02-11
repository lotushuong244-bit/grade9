import React, { useState } from 'react';
import { GrammarContent } from '../types';
import { Check, X, ArrowRight, Lightbulb } from 'lucide-react';

interface GrammarViewProps {
  content: GrammarContent;
}

export const GrammarView: React.FC<GrammarViewProps> = ({ content }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    if (selectedOption !== null) {
      setIsChecked(true);
    }
  };

  const resetPractice = () => {
    setSelectedOption(null);
    setIsChecked(false);
  };

  const isCorrect = selectedOption === content.practiceQuestion.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Theory Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
        <div className="bg-orange-50 p-6 border-b border-orange-100">
          <h3 className="text-2xl font-bold text-orange-800 flex items-center gap-2">
            <Lightbulb className="w-6 h-6" />
            {content.title}
          </h3>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">{content.explanation}</p>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Examples</h4>
            <ul className="space-y-3">
              {content.examples.map((ex, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mini Practice */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h4 className="text-lg font-bold text-gray-800 mb-6">Quick Check</h4>
        
        <div className="mb-6">
          <p className="text-lg text-gray-700 font-medium">{content.practiceQuestion.question}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {content.practiceQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              disabled={isChecked}
              onClick={() => setSelectedOption(idx)}
              className={`p-4 rounded-xl text-left border-2 transition-all
                ${isChecked 
                  ? idx === content.practiceQuestion.correctAnswer
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : idx === selectedOption
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : 'border-gray-100 text-gray-400'
                  : selectedOption === idx
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                    : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
                }
              `}
            >
              {opt}
            </button>
          ))}
        </div>

        {!isChecked ? (
          <button
            onClick={handleCheck}
            disabled={selectedOption === null}
            className={`w-full py-3 rounded-xl font-semibold transition-colors
              ${selectedOption !== null 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}
            `}
          >
            Check Answer
          </button>
        ) : (
          <div className={`p-4 rounded-xl flex items-center justify-between
            ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}>
            <div className="flex items-center gap-2">
              {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              <span className="font-semibold">{isCorrect ? 'Correct! Well done.' : 'Try again next time.'}</span>
            </div>
            {!isCorrect && (
              <button onClick={resetPractice} className="text-sm underline hover:text-red-900">
                Retry
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};