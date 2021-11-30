import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedCategory = (category) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: category,
  };
};
export const setcategory = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories
  };
};