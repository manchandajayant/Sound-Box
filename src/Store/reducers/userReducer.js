import { JWT, NEW_USER } from "../actions/userActions";
const initialState = { auth: "", newUser: "" };

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case JWT: {
      return {
        ...state,
        auth: action.payload.jwt,
        loggedInUser: action.payload.id,
        userName: action.payload.userName,
      };
    }
    case NEW_USER: {
      return { ...state, newUser: action.payload };
    }

    default: {
      return state;
    }
  }
}
