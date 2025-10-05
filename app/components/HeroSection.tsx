import React from "react";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-6">Аренда автомобилей в Екатеринбурге</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Более 70 автомобилей для работы в такси и личных поездок.
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Выбрать авто
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                        Условия аренды
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;