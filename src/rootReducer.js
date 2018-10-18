import { combineReducers } from "redux";
import listReducer from "./list/listReducer";
import editReducer from "./edit/editReducer";

export default combineReducers({
  listReducer, editReducer
});
