import { OrderData } from "../types";
import { api } from "../utils/api";

export const orderService = {
    async createOrder(orderData: OrderData): Promise<any> {
        const response = await api.post('/orders', orderData);
        return response.data;
    }
};