import { Product } from "../types/ProductType";
import BaseApi from "./BaseApi";

export default class PhpApi extends BaseApi {

    constructor() {
        console.log(import.meta.env.VITE_API_URL_PHP);
        super(import.meta.env.VITE_API_URL_PHP || '');
    }

    public async solve(products: Product[], knapsack_capacity: Number): Promise<any> {
        const data = {
            products,
            knapsack_capacity
        }
        return await this.post('/api/solve', data);
    }
}