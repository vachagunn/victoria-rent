import React from "react";

const Header = () => {
    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.reload();
    };
    
    const scrollToRent = (e: React.MouseEvent) => {
        e.preventDefault();
        const carsSectionId = document.getElementById('cars-section');
        if (carsSectionId) {
            carsSectionId.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" onClick={handleLogoClick} className="flex items-center cursor-pointer">
                        <h1 className="text-2xl font-bold text-blue-600">Виктория</h1>
                        <span className="ml-3 pt-1 text-gray-600">Аренда автомобилей</span>
                    </a>
                    <div className="flex items-center space-x-4">
                        <a href="tel:+79222110555" className="text-gray-700 hover:text-blue-600">
                            +7 (922) 211-05-55
                        </a>
                        <button 
                            onClick={scrollToRent} 
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                            Забронировать
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;