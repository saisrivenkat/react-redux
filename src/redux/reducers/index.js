import { combineReducers } from "redux";
import { productsReducer, setcategories, selectedcategory } from "./ProductReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  allCategories: setcategories,
  selectcategory: selectedcategory,
});
export default reducers;