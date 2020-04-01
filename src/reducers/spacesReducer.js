import { SPACES_FETCHED, SPACE_CREATED } from "../actions/spaceActions";
const initialState = [];

export default function spacesReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case SPACES_FETCHED: {
      return action.payload;
    }
    case SPACE_CREATED: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
