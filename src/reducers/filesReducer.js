import { NEW_FILE } from "../actions/fileActions";
const initialState = [];

export default function filesReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case NEW_FILE: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
