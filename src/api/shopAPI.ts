import axios from "axios";
import { ProductFilters } from "../store/reducers/shopReducer";

export interface GetProductOptions {
  page?: number,
  size?: number,
  category?: string[],
}

export interface ProductFiltersApiResponse {
  productFilters: ProductFilters,
}

class ShopAPI {
  getProducts = (options: GetProductOptions) => {
    const { page, size, category } = options;
    const pageQueryParams = `page=${page || ''}`;
    const sizeQueryParams = `&size=${size || ''}`;
    const categoryQueryParams = `&category=${category ? category.join('&category='): ''}`;
    return axios.get(`http://localhost:1234/products?${pageQueryParams}${sizeQueryParams}${categoryQueryParams}`);
  }

  getProductFilters = () => {
    return axios.get(`http://localhost:1234/productFilters`);
  }
}

export default ShopAPI