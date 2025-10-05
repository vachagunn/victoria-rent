import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600">Виктория</h1>
                        <span className="ml-2 text-gray-600">Аренда автомобилей</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="tel:+79222110555" className="text-gray-700 hover:text-blue-600">
                            +7 (922) 211-05-55
                        </a>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Забронировать
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;