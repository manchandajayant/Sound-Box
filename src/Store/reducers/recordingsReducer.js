import { RECORDINGS_FETCHED, NEW_RECORDING } from "../actions/recordingActions";
const initialState = [];

export default function recordingsReducer(state = initialState, action) {
  switch (action.type) {
    case RECORDINGS_FETCHED: {
      return action.payload;
    }
    case NEW_RECORDING: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
