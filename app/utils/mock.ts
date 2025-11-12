import { Car } from "../types";

export const getMockCars = (): Car[] => {
    return [
      {
        id: 1,
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
        id: 2,
        name: 'Kia K5',
        segment: 'бизнес',
        price: 3000,
        image: '/cars/kia-k5.png',
        engine: '2.0',
        transmission: 'Автомат',
        drive: 'Передний',
        year: 2021,
        available: true
      }
    ];
  };