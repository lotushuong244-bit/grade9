import React from 'react';
import { UnitData } from '../types';
import { BookOpen, CheckCircle } from 'lucide-react';

interface UnitNavigationProps {
  units: UnitData[];
  currentUnitId: number;
  onSelectUnit: (id: number) => void;
  completedUnits: number[];
}

export const UnitNavigation: React.FC<UnitNavigationProps> = ({ 
  units, 
  currentUnitId, 
  onSelectUnit,
  completedUnits
}) => {
  return (
    <div className="w-full md:w-64 bg-white border-r border-gray-200 h-full overflow-y-auto flex-shrink-0">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Global Success 9
        </h2>
        <p className="text-xs text-gray-500 mt-1">Units 7 - 12</p>
      </div>
      <div className="p-2">
        {units.map((unit) => {
          const isCompleted = completedUnits.includes(unit.id);
          const isActive = unit.id === currentUnitId;
          
          return (
            <button
              key={unit.id}
              onClick={() => onSelectUnit(unit.id)}
              className={`w-full text-left mb-2 p-3 rounded-xl transition-all duration-200 group relative overflow-hidden
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600 shadow-sm' 
                  : 'hover:bg-gray-50 text-gray-700 border-l-4 border-transparent'
                }
              `}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-1 
                    ${isActive ? 'text-indigo-500' : 'text-gray-400'}`}>
                    {unit.title}
                  </span>
                  <span className="font-semibold block">{unit.theme}</span>
                </div>
                {isCompleted && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};