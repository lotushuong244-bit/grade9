import React, { useState } from 'react';
import { VocabularyItem } from '../types';
import { Wand2, RotateCw } from 'lucide-react';

interface VocabularyViewProps {
  items: VocabularyItem[];
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <VocabCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const VocabCard: React.FC<{ item: VocabularyItem; index: number }> = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-96 w-full perspective-1000 group">
       <div 
        className={`relative w-full h-full transition-all duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
          <div className="h-48 bg-gray-100 relative overflow-hidden">
            <img 
              src={`https://picsum.photos/seed/${item.word.replace(/\s/g, '')}${index}/400/300`} 
              alt={item.altText}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
              <Wand2 className="w-3 h-3" />
              AI Gen
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-indigo-700 mb-2">{item.word}</h3>
            <p className="text-gray-500 text-sm">Click to flip for meaning</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-50 rounded-2xl shadow-lg border border-indigo-100 p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-end">
            <RotateCw className="w-5 h-5 text-indigo-400" />
          </div>
          
          <div className="mt-2 space-y-4">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase">Meaning</span>
              <p className="text-lg font-semibold text-gray-800">{item.meaning}</p>
            </div>
            
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase">Example</span>
              <p className="text-sm text-gray-600 italic">"{item.example}"</p>
            </div>

            <div className="pt-4 border-t border-indigo-200">
               <span className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1 mb-1">
                 <Wand2 className="w-3 h-3" /> AI Image Prompt
               </span>
               <p className="text-[10px] text-gray-500 bg-white p-2 rounded border border-indigo-100 leading-tight">
                 {item.aiPrompt}
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};