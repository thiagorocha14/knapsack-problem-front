import axios, { AxiosInstance } from 'axios';

export default class BaseApi {

    private url: string;
    private api: AxiosInstance;

    constructor(url: string) {
        this.url = url;

        this.api = axios.create({
            baseURL: this.url,
            timeout: 60000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public async get(endpoint: string): Promise<any> {
        return await this.api.get(endpoint);
    }

    public async post(endpoint: string, data: any): Promise<any> {
        return await this.api.post(endpoint, data);
    }

    public async put(endpoint: string, data: any): Promise<any> {
        return await this.api.put(endpoint, data);
    }

    public async delete(endpoint: string): Promise<any> {
        return await this.api.delete(endpoint);
    }
}