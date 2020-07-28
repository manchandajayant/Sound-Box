import { FILE_FETCHED } from "../actions/fileActions";

const initialState = null;

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case FILE_FETCHED: {
      return { ticket: action.payload };
    }

    default: {
      return state;
    }
  }
}
