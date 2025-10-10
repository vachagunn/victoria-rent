import React from "react";
import { Car } from "../types";

interface CarCardProps {
    car: Car;
    onRent: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onRent }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img 
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
            />

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                        car.segment === 'эконом' ? 'bg-green-100 text-green-800' :
                        car.segment === 'комфорт' ? 'bg-blue-100 text-blue-800' :
                        car.segment === 'комфорт+' ? 'bg-purple-100 text-purple-800' :
                        car.segment === 'бизнес' ? 'bg-gray-950 text-gray-100' :
                        car.segment === 'грузовой' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                        {car.segment}
                    </span>
                </div>
                
                <ul className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <li className="flex items-center">
                        <span className="text-gray-500">Год:</span>
                        <span className="ml-2 font-medium">{car.year}</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-gray-500">Объём двигателя:</span>
                        <span className="ml-2 font-medium">{car.engine} л.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-gray-500">Трансмиссия:</span>
                        <span className="ml-2 font-medium">{car.transmission}</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-gray-500">Привод:</span>
                        <span className="ml-2 font-medium">{car.drive}</span>
                    </li>
                </ul>

                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600">{car.price} ₽/сутки</div>
                    <button 
                        onClick={() => onRent(car)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Арендовать
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CarCard;