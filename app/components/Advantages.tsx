import React from "react";

const Advantages = () => {
    const advantanges = [
        {
            icon: '🚗',
            title: 'Большой выбор',
            description: '70+ автомобилей разных классов'
        },
        {
            icon: '💰',
            title: 'Выгодные цены',
            description: 'Лучшие условия для таксистов'
        },
        {
            icon: '⚡',
            title: 'Быстрое оформление',
            description: 'Оформление документов/подключение к таксопарку всего за 30 минут'
        },
        {
            icon: '🛠️',
            title: 'Что-то еще',
            description: 'Что-то еще'
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantanges.map((advantage, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="text-4xl mb-4">{advantage.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                            <p className="text-gray-600">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;