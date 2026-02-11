import React, { useState } from 'react';
import { ListeningContent } from '../types';
import { Play, Pause, FileText, HelpCircle } from 'lucide-react';

interface ListeningViewProps {
  content: ListeningContent;
}

export const ListeningView: React.FC<ListeningViewProps> = ({ content }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(content.questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleAnswerSelect = (qIdx: number, optIdx: number) => {
    if (showResults) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[qIdx] = optIdx;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => setShowResults(true);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Fake Audio Player */}
      <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center hover:bg-indigo-400 transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </button>
            <div>
              <h3 className="font-bold text-lg">{content.title}</h3>
              <p className="text-gray-400 text-sm">Audio Track 01</p>
            </div>
          </div>
          <div className="text-xs font-mono text-gray-400">00:00 / 02:45</div>
        </div>
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-full bg-indigo-500 transition-all duration-[2000ms] ${isPlaying ? 'w-full' : 'w-1/3'}`}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Questions Column */}
        <div className="md:col-span-2 space-y-6">
          {content.questions.map((q, qIdx) => (
            <div key={qIdx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-4 flex gap-2">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 flex items-center justify-center rounded-full text-xs">
                  {qIdx + 1}
                </span>
                {q.question}
              </h4>
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                   const isSelected = selectedAnswers[qIdx] === optIdx;
                   const isCorrect = q.correctAnswer === optIdx;
                   let btnClass = "border-gray-200 hover:bg-gray-50 text-gray-600";
                   
                   if (showResults) {
                     if (isCorrect) btnClass = "bg-green-100 border-green-500 text-green-800 font-medium";
                     else if (isSelected) btnClass = "bg-red-50 border-red-300 text-red-800";
                   } else if (isSelected) {
                     btnClass = "bg-indigo-50 border-indigo-500 text-indigo-700";
                   }

                   return (
                    <button
                      key={optIdx}
                      onClick={() => handleAnswerSelect(qIdx, optIdx)}
                      className={`w-full text-left p-3 rounded-lg border ${btnClass} text-sm transition-all`}
                    >
                      {opt}
                    </button>
                   );
                })}
              </div>
            </div>
          ))}
          
          {!showResults && (
            <button 
              onClick={checkAnswers}
              disabled={selectedAnswers.includes(-1)}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
            >
              Check Answers
            </button>
          )}
        </div>

        {/* Transcript Toggle Column */}
        <div className="md:col-span-1">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="w-full bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-gray-50"
          >
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <FileText className="w-5 h-5 text-gray-400" />
              Transcript
            </span>
            <span className="text-xs text-indigo-600 font-bold">
              {showTranscript ? 'HIDE' : 'SHOW'}
            </span>
          </button>
          
          {showTranscript && (
            <div className="mt-4 bg-yellow-50 p-4 rounded-xl text-sm leading-relaxed text-gray-800 border border-yellow-100 max-h-96 overflow-y-auto">
              {content.transcript}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};