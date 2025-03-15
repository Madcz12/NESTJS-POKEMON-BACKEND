import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AxiosAdapter implements HttpAdapter{

    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
            // si es genérico puede ser de cualquier tipo, en este caso PokeResponse
            const {data} = await this.axios.get<T>(url);
            return data;
        } catch (error) {
            throw new Error('This is an error - Check the log');
        }
    }

}