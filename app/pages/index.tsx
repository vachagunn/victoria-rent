"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

import Head from "next/head";

import { Car } from "../types";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Advantages from "../components/Advantages";
import CarCard from "../components/CarCard";
import CarFilters from "../components/CarFilters";
import RentModal, { RentFormData } from "../components/RentModal";

const Page: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [selectedSegment, setSelectedSegment] = useState('все');

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    if (selectedSegment === 'все') {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter(car => car.segment === selectedSegment))
    }
  }, [selectedSegment, cars]);

  const fetchCars = async () => {
    try {
      const mockCars: Car[] = [
        {
          id: '1',
          name: 'Kia Rio',
          segment: 'эконом',
          price: 1500,
          image: '/cars/kia-rio-4-rest.png',
          engine: '1.6',
          transmission: 'Автомат',
          drive: 'Передний',
          year: 2022,
          available: true
        },
        {
          id: '2',
          name: 'Kia K5',
          segment: 'бизнес',
          price: 3000,
          image: '/cars/kia-k5.png',
          engine: '2',
          transmission: 'Автомат',
          drive: 'Передний',
          year: 2021,
          available: true
        }
      ];
      setCars(mockCars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  }
  
  const handleRentSubmit = async (formData: RentFormData) => {
    try {
      await axios.post('/api/reservation', formData);
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      setIsModalOpen(false);
      setSelectedCar(null);
    } catch (error) {
      alert ('Ошибка при отправке заявки. Пожалуйста, попробуйте ещё раз.');
    }
  };

  return (
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Виктория - Аренда автомобилей</title>
          <meta name="description" content="Аренда автомобилей для такси и личных поездок" />
        </Head>

        <Header />
        <HeroSection />
        <Advantages />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наш автопарк</h2>

            <CarFilters selectedSegment={selectedSegment} onSegmentChange={setSelectedSegment} />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                <CarCard
                  key={car.id}
                  car={car}
                />
              ))}
            </div>
          </div>
        </section>

        <RentModal
          car={selectedCar}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCar(null);
          }} 
          onSubmit={handleRentSubmit}
        />
      </div>
    );
}

export default Page;