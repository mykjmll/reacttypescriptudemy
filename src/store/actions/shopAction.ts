import { GetProductOptions } from "../../api/shopAPI";
import { ProductFilters, Products, ShopProducts } from "../reducers/shopReducer";

export type ShopReducerAction = ShopProductsFetchAction | ShopProductSetAction | BestSellerFetchAction | BestSellerSetAction | ShopProductsAndFiltersFetchAction | ShopProductsAndFiltersSetAction

export interface ShopProductsFetchAction {
  type: typeof ShopAction.FETCH_SHOP_PRODUCTS,
  options: GetProductOptions
}

export interface ShopProductSetAction {
  type: typeof ShopAction.SET_SHOP_PRODUCTS,
  shopProducts: ShopProducts
}

export interface BestSellerFetchAction {
  type: typeof ShopAction.FETCH_BEST_SELLER,
}

export interface BestSellerSetAction {
  type: typeof ShopAction.SET_BEST_SELLER,
  bestSeller: Products[]
}

export interface ShopProductsAndFiltersFetchAction {
  type: typeof ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS,
}

export interface ShopProductsAndFiltersSetAction {
  type: typeof ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS,
  shopProducts: ShopProducts,
  productFilters: ProductFilters

}

class ShopAction {
  static readonly FETCH_SHOP_PRODUCTS = 'FETCH_SHOP_PRODUCTS';
  static readonly SET_SHOP_PRODUCTS = 'SET_SHOP_PRODUCTS';
  static readonly FETCH_BEST_SELLER = 'FETCH_BEST_SELLER';
  static readonly SET_BEST_SELLER = 'SET_BEST_SELLER';
  static readonly FETCH_SHOP_PRODUCTS_AND_FILTERS = 'FETCH_SHOP_PRODUCTS_AND_FILTERS';
  static readonly SET_SHOP_PRODUCTS_AND_FILTERS = 'SET_SHOP_PRODUCTS_AND_FILTERS';

  fetchShopProducts = (options: GetProductOptions): ShopProductsFetchAction => {
    return {
      type: ShopAction.FETCH_SHOP_PRODUCTS,
      options
    }
  }

  setShopProducts = (shopProducts: ShopProducts): ShopProductSetAction => {
    return {
      type: ShopAction.SET_SHOP_PRODUCTS,
      shopProducts
    }
  }

  fetchBestSeller = (): BestSellerFetchAction => {
    return {
      type: ShopAction.FETCH_BEST_SELLER,
    }
  }

  setBestSeller = (bestSeller: Products[]): BestSellerSetAction => {
    return {
      type: ShopAction.SET_BEST_SELLER,
      bestSeller
    }
  }

  fetchShopProductsAndFilters = (): ShopProductsAndFiltersFetchAction => {
    return {
      type: ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS,
    }
  }

  setShopProductsAndFilters  = (shopProducts: ShopProducts, productFilters: ProductFilters): ShopProductsAndFiltersSetAction => {
    return {
      type: ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS,
      shopProducts,
      productFilters
    }
  }
}

export default ShopAction