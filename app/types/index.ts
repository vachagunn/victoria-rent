export interface Car {
    id: number;
    name: string;
    segment: string;
    price: number;
    image: string;
    engine: string;
    transmission: string;
    drive: string;
    year: number;
    available: boolean;
    created_at?: string
}

export interface RentFormData {
    carId: number | undefined,
    carName: string,
    name: string,
    phone: string,
    email: string,
    // rentDays: number,
    // message: string
}
