import { combineReducers } from "redux";
import spaces from "./spacesReducer";
import space from "./spaceReducer";
import file from "./fileReducer";
import users from "./userReducer";
import recordings from "./recordingsReducer";
import files from "./filesReducer";

export default combineReducers({
  spaces,
  space,
  file,
  users,
  recordings,
  files,
});
