import React from "react";

interface Term {
    icon: string,
    title: string,
    description: string
}

interface RentalTermProps {
    term: Term
}

const terms: Term[] = [
    {
        icon: '📄',
        title: 'Документы',
        description: 'Паспорт, водительское удостоверение'
    },
    {
        icon: '🎂',
        title: 'Возраст и стаж',
        description: 'От 21 года, стаж вождения от 3 лет'
    },
    {
        icon: '📍',
        title: 'Территория',
        description: 'г. Екатеринбург, ул. Бардина 28\n (2 этаж, офис 229)'
    },
];

const RentalTerm = ({ term }: RentalTermProps) => {
    return(
        <li className="text-center p-6">
            <div className="text-3xl mb-4">{term.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{term.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{term.description}</p>
        </li>
    );
};

const RentalTerms = () => {
    return(
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Условия аренды</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {terms.map((term, index) => (
                    <RentalTerm key={index} term={term} />
                ))}
            </ul>
            </div>
        </section>
    );
};

export default RentalTerms;