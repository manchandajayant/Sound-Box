import { JWT, NEW_USER } from "../actions/userActions";
const initialState = { auth: "", newUser: "" };

export default function usersReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case JWT: {
      // console.log("user", action.payload);
      return {
        ...state,
        auth: action.payload.jwt,
        loggedInUser: action.payload.id,
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
