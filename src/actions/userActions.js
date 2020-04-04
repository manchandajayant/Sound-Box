import request from "superagent";

export const JWT = "JWT";
export const NEW_USER = "NEW_USER";
export const USER_FETCHED = "USER_FETCHED";

const baseUrl = "https://stoic-nightingale-f54e09.netlify.com";

const userLogin = (payload) => ({
  type: JWT,
  payload,
});

export const login = (data) => (dispatch, getState) => {
  const state = getState();
  if (!state) {
    console.log("User does not exist");
  } else {
    request
      .post(`${baseUrl}/login`)
      .send(data)
      .then((res) => {
        const action = userLogin(res.body);
        dispatch(action);
        console.log(res.body);
      })
      .catch(console.error);
  }
};

const newSignUp = (payload) => ({
  type: NEW_USER,
  payload,
});

export const signUpUser = (data) => (dispatch) => {
  request
    .post(`${baseUrl}/signup`)
    .send(data)
    .then((res) => {
      const action = newSignUp(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

const singleUser = (event) => ({
  type: USER_FETCHED,
  payload: event,
});

export const fetchUser = (id) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/user/${id}`)
    .send(id)
    .then((res) => {
      console.log(res.body);
      const action = singleUser(res.body);
      dispatch(action);
      //console.log(res.body);
    })
    .catch(console.error);
};
