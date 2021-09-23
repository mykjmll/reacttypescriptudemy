import { Reducer } from "redux";
import ShopAction, { ShopReducerAction } from "../actions/shopAction";
import update from 'immutability-helper';

export interface ProductVariants {
  id: string,
  size: string,
  color: string,
  price: string,
  stock: number,
  discount?: string,
  image: string,
}

export interface Products {
  id: string,
  category: string[],
  title: string,
  variants: ProductVariants[]
}

export interface ShopProducts {
  products: Products[],
  page?: number,
  nextPage?: boolean,
  productsCount: number
  totalPages: number
}

export interface ProductFilters {
  gender: string[],
  category: string[],
  trends: string[]
}

export interface Shop {
  shopProducts: ShopProducts,
  bestSeller: Products[],
  productFilters: ProductFilters
}

const initialState: Shop = {
  shopProducts: {
    products: [],
    productsCount: 0,
    totalPages: 1
  },
  bestSeller: [],
  productFilters: {
    gender: [],
    category: [],
    trends: []
  }
}

export const shopReducer: Reducer<Shop, ShopReducerAction> = (state = initialState, action) => {
  switch(action.type) {
    case ShopAction.SET_SHOP_PRODUCTS:
      return update(state, {shopProducts: { $set: action.shopProducts}})
    case ShopAction.SET_BEST_SELLER:
      return update(state, {bestSeller: { $set: action.bestSeller}})
    case ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS:
      return update(state, {
        shopProducts: { $set: action.shopProducts},
        productFilters: { $set: action.productFilters}
      })
    default:
      return state;
  }
}