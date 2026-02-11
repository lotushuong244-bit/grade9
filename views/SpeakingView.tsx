import React from 'react';
import { SpeakingContent } from '../types';
import { MessageCircle, Users, Mic } from 'lucide-react';

interface SpeakingViewProps {
  content: SpeakingContent;
}

export const SpeakingView: React.FC<SpeakingViewProps> = ({ content }) => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Dialogue Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
        <div className="p-4 bg-indigo-50 border-b border-indigo-100 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-indigo-900">Model Dialogue</h3>
        </div>
        
        <div className="p-6 space-y-4 flex-1 overflow-y-auto max-h-[500px]">
          {content.dialogue.map((line, idx) => {
             const isMe = idx % 2 === 0;
             return (
               <div key={idx} className={`flex ${isMe ? 'justify-start' : 'justify-end'}`}>
                 <div className={`max-w-[85%] rounded-2xl p-4 ${isMe ? 'bg-gray-100 text-gray-800 rounded-tl-none' : 'bg-indigo-600 text-white rounded-tr-none'}`}>
                   <p className="text-xs font-bold mb-1 opacity-70">{line.speaker}</p>
                   <p className="text-sm md:text-base leading-relaxed">{line.text}</p>
                 </div>
               </div>
             );
          })}
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
          <button className="flex items-center justify-center gap-2 text-indigo-600 font-semibold hover:bg-indigo-100 w-full py-2 rounded-lg transition-colors">
            <Mic className="w-4 h-4" /> Practice with Partner
          </button>
        </div>
      </div>

      {/* Topics Section */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Speaking Topic</h2>
          <p className="text-indigo-100 text-lg">{content.topic}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-orange-500" />
            Discussion Points
          </h3>
          <ul className="space-y-4">
            {content.discussionPoints.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </span>
                <span className="text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
           <strong>Tip:</strong> Try to use the vocabulary and grammar learned in this unit to answer the discussion points.
        </div>
      </div>

    </div>
  );
};