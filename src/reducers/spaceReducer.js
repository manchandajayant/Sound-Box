import { SPACE_FETCHED } from "../actions/spaceActions";
const initialState = null;

export default function spaceReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case SPACE_FETCHED: {
      console.log("new", action.payload);
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
