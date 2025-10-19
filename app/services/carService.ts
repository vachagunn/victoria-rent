import { Car } from "../types";
import { api } from "../utils/api";

export const CarService = {
    // Get all cars
    async getAllCars(carSegment?: string): Promise<Car[]> {
        const params = carSegment && carSegment !== 'все' ? { segment: carSegment} : {};
        const response = await api.get('/cars', { params });
        return response.data;
    },
};