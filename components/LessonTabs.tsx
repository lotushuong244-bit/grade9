import React from 'react';
import { UnitSection } from '../types';
import { Book, Mic, PenTool, Headphones, MessageCircle, HelpCircle } from 'lucide-react';

interface LessonTabsProps {
  currentSection: UnitSection;
  onSelectSection: (section: UnitSection) => void;
}

const tabs = [
  { id: UnitSection.VOCABULARY, icon: Book, label: 'Vocabulary' },
  { id: UnitSection.PRONUNCIATION, icon: Mic, label: 'Pronunciation' },
  { id: UnitSection.GRAMMAR, icon: PenTool, label: 'Grammar' },
  { id: UnitSection.LISTENING, icon: Headphones, label: 'Listening' },
  { id: UnitSection.SPEAKING, icon: MessageCircle, label: 'Speaking' },
  { id: UnitSection.QUIZ, icon: HelpCircle, label: 'Quiz' },
];

export const LessonTabs: React.FC<LessonTabsProps> = ({ currentSection, onSelectSection }) => {
  return (
    <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 mb-6 no-scrollbar">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentSection === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onSelectSection(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all
              ${isActive 
                ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};