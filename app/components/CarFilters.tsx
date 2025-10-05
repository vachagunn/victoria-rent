import React from "react";

interface CarFiltersProps {
    selectedSegment: string;
    onSegmentChange: (carSegment: string) => void;
}

const CarFilters: React.FC<CarFiltersProps> = ({ selectedSegment, onSegmentChange }) => {
    const segments = ['все', 'эконом', 'комфорт', 'комфорт+', 'бизнес', 'грузовой'];

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-lg font-semibold mb-4">Показывать:</h3>
            <div className="flex flex-wrap gap-2">
                {segments.map((segment) => (
                    <button 
                        key={segment} 
                        onClick={() => onSegmentChange(segment)}
                        className={`px-4 py-2 rounded-full transition ${
                            selectedSegment === segment
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CarFilters;