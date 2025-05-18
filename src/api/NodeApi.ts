import { Product } from "../types/ProductType";
import BaseApi from "./BaseApi";

export default class NodeApi extends BaseApi {

    constructor() {
        console.log(import.meta.env.VITE_API_URL_NODE);
        super(import.meta.env.VITE_API_URL_NODE || '');
    }

    public async solve(products: Product[], knapsack_capacity: Number): Promise<any> {
        const data = {
            products,
            knapsack_capacity
        }
        return await this.post('/api/solve', data);
    }
}