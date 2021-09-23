import { RouteComponentProps } from "react-router";
import { GetProductOptions } from "../../api/shopAPI";
import { ShopProductsFetchAction } from "../../store/actions/shopAction";
import {  ProductFilters, ShopProducts } from "../../store/reducers/shopReducer";

export interface AllProductStateProps {
  shopProducts: ShopProducts,
  productFilters: ProductFilters
  userFilters: ProductFilters,
}

export interface AllProductOwnProps extends RouteComponentProps {
}

export interface AllProductDispatchToProps {
  fetchShopProducts(options: GetProductOptions): ShopProductsFetchAction;
  fetchShopProductsAndFilters(): any;
  updateUserFilters(filters: ProductFilters): any;
}

export type AllProductPageProps = AllProductStateProps & AllProductOwnProps & AllProductDispatchToProps