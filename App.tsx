import React, { useState, useEffect } from 'react';
import { UnitNavigation } from './components/UnitNavigation';
import { LessonTabs } from './components/LessonTabs';
import { VocabularyView } from './views/VocabularyView';
import { GrammarView } from './views/GrammarView';
import { ListeningView } from './views/ListeningView';
import { SpeakingView } from './views/SpeakingView';
import { QuizView } from './views/QuizView';
import { units } from './data';
import { UnitSection } from './types';
import { Menu, X, Mic, Volume2 } from 'lucide-react';

const PronunciationView: React.FC<{ content: any }> = ({ content }) => (
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
        <Volume2 className="w-6 h-6" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
    </div>
    <p className="text-gray-600 mb-6 text-lg">{content.description}</p>
    
    <div className="space-y-6">
      <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
        <h3 className="font-bold text-orange-800 mb-3">Rules</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {content.rules.map((rule: string, i: number) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-gray-800 mb-3">Examples</h3>
        <div className="grid gap-3">
          {content.examples.map((ex: string, i: number) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mic className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-lg text-gray-700">{ex}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [currentUnitId, setCurrentUnitId] = useState(7);
  const [currentSection, setCurrentSection] = useState<UnitSection>(UnitSection.VOCABULARY);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [completedUnits, setCompletedUnits] = useState<number[]>([]);

  const currentUnit = units.find(u => u.id === currentUnitId) || units[0];

  useEffect(() => {
    // Scroll to top when unit or section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentUnitId, currentSection]);

  const handleUnitChange = (id: number) => {
    setCurrentUnitId(id);
    setCurrentSection(UnitSection.VOCABULARY);
    setIsMobileMenuOpen(false);
  };

  const handleQuizComplete = () => {
    if (!completedUnits.includes(currentUnitId)) {
      setCompletedUnits([...completedUnits, currentUnitId]);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case UnitSection.VOCABULARY:
        return <VocabularyView items={currentUnit.sections.vocabulary} />;
      case UnitSection.PRONUNCIATION:
        return <PronunciationView content={currentUnit.sections.pronunciation} />;
      case UnitSection.GRAMMAR:
        return <GrammarView content={currentUnit.sections.grammar} />;
      case UnitSection.LISTENING:
        return <ListeningView content={currentUnit.sections.listening} />;
      case UnitSection.SPEAKING:
        return <SpeakingView content={currentUnit.sections.speaking} />;
      case UnitSection.QUIZ:
        return <QuizView questions={currentUnit.sections.quiz} onComplete={handleQuizComplete} />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <UnitNavigation 
          units={units} 
          currentUnitId={currentUnitId}
          onSelectUnit={handleUnitChange}
          completedUnits={completedUnits}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {currentUnit.theme}
              </h1>
              <p className="text-sm text-gray-500 hidden md:block">
                {currentUnit.description}
              </p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Unit</span>
             <div className="text-2xl font-black text-indigo-200 leading-none">{currentUnitId < 10 ? `0${currentUnitId}` : currentUnitId}</div>
          </div>
        </header>

        {/* Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
           <div className="max-w-5xl mx-auto">
             <LessonTabs 
               currentSection={currentSection} 
               onSelectSection={setCurrentSection} 
             />
             
             <div className="min-h-[500px]">
                {renderSection()}
             </div>
           </div>
           
           <footer className="mt-12 text-center text-gray-400 text-sm pb-8">
             <p>Global Success 9 Learning App &copy; 2024</p>
           </footer>
        </main>
      </div>
    </div>
  );
}

export default App;