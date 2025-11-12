import React, { useEffect, useState } from "react";
import { Car, OrderData } from "../types";

interface RentModalProps {
    car: Car | null;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: OrderData) => void;
}

const RentModal: React.FC<RentModalProps> = ({ car, isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);
    
    useEffect(() => {
        if (car) {
            setFormData(prev => ({
                ...prev,
                carId: car.id,
                carName: car.name
            }));
        }
    }, [car]);

    if (!isOpen || !car) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const orderData: OrderData = {
            cardId: car.id,
            carName: car.name,
            customerName: formData.name,
            customerPhone: formData.phone,
            customerEmail: formData.email
        }

        console.log('FORM DATA:', formData);
        console.log('ORDER DATA:', orderData);

        onSubmit(orderData);
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
                                placeholder="Иван"
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
                                placeholder="+7 (999) 123-45-67"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="ivan@example.com"
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