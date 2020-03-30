import { FILE_FETCHED } from "../actions/fileActions";
const initialState = null;

export default function fileReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case FILE_FETCHED: {
      console.log(action.payload);
      return { ticket: action.payload };
    }

    default: {
      return state;
    }
  }
}
