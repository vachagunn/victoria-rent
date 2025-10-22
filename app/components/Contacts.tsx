import React from "react";

const Contacts = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Контакты</h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl mb-4">г. Екатеринбург, ул. Бардина 28<br /> (2 этаж, офис 229)</p>
                    <a href="tel:+79222110555" className="text-2xl font-semibold text-blue-600 hover:text-blue-700">+7 (922) 211-05-55</a>
                    <p className="mt-4 text-gray-600">ПН-ПТ с 11:00 до 16:00</p>
                </div>
            </div>
        </section>
    );
};

export default Contacts;