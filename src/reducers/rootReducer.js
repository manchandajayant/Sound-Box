import { combineReducers } from "redux";
import spaces from "./spacesReducer";
import space from "./spaceReducer";
import file from "./fileReducer";

export default combineReducers({
  spaces,
  space,
  file
});
