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

export interface OrderData {
    cardId: number;
    carName: string;
    customerName: string;
    customerPhone: string;
    customerEmail: string;
}
