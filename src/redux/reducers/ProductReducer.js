import { ActionTypes } from "../contants/action-types";
const intialState = {
  products: [],
  categories: [],
  selectedcategory: "",
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const setcategories = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload }
    default:
      return state;
  }
};
export const selectedcategory = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return { ...state, selectedcategory: payload }
    default:
      return state;
  }
}