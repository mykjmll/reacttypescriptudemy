import { RouteComponentProps } from "react-router";
import { BestSellerFetchAction, ShopProductsFetchAction } from "../../store/actions/shopAction";
import {  Products } from "../../store/reducers/shopReducer";

export interface BestSellerStateProps {
  bestSeller: Products[]
}

export interface BestSellerDispatchToProps {
  fetchBestSeller(): any;
}

export type BestSellerProps = BestSellerStateProps & BestSellerDispatchToProps 