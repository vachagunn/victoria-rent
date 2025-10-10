import React, { useState } from "react";
import { Car } from "../types";

interface RentModalProps {
    car: Car | null;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: RentFormData) => void;
}

export interface RentFormData {
    carId: string,
    carName: string,
    name: string,
    phone: string,
    email: string,
    // rentDays: number,
    // message: string
}

const RentModal: React.FC<RentModalProps> = ( {car, isOpen, onClose, onSubmit} ) => {
    const [formData, setFormData] = useState<RentFormData>({
        carId: car?.id || '',
        carName: '',
        name: '',
        phone: '',
        email: ''
    });

    if (!isOpen || !car) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        formData.carName = car.name;
        console.log(formData);
        onSubmit(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Оставьте заявку на {car.name}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Ваше имя *
                            </label>
                            <input 
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Телефон *
                            </label>
                            <input 
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input 
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
                        >
                            Отправить заявку
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RentModal;