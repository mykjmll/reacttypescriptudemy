import { Reducer } from "redux";
import update from 'immutability-helper';
import { ProductFilters } from "./shopReducer";
import UserAction, { UserReducerAction } from "../actions/userAction";

export interface User {
  filters: ProductFilters
}


const initialState: User = {
  filters: {
    gender: [],
    category: [],
    trends: []
  },
}

export const userReducer: Reducer<User, UserReducerAction> = (state = initialState, action) => {
  switch(action.type) {
    case UserAction.UPDATE_USER_FILTERS:
      return update(state, {filters: { $set: action.filters}})
    default:
      return state;
  }
}