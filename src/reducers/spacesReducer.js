import { SPACES_FETCHED } from "../actions/spaceActions";
const initialState = [];

export default function spacesReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case SPACES_FETCHED: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
