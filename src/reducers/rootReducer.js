import { combineReducers } from "redux";
import spaces from "./spacesReducer";
import space from "./spaceReducer";
import file from "./fileReducer";
import users from "./userReducer";
import recordings from "./recordingsReducer";
export default combineReducers({
  spaces,
  space,
  file,
  users,
  recordings
});
