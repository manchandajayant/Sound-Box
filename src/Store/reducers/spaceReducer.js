import { SPACE_FETCHED } from "../actions/spaceActions";
const initialState = null;

export default function spaceReducer(state = initialState, action) {
  switch (action.type) {
    case SPACE_FETCHED: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
