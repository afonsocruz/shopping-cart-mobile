
import { AxiosResponse } from "axios";
import { ProductsType } from "../../types";
import { api } from "../api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => api.get(url).then(responseBody),
};

export const Products = {
  getProducts: (): Promise<ProductsType[]> => requests.get("products"),
};
