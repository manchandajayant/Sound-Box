import request from "superagent";
import superagent from "superagent";
export const SPACES_FETCHED = "SPACES_FETCHED";
export const SPACE_FETCHED = "SPACE_FETCHED";
export const SPACE_CREATED = "SPACE_CREATED";

const baseUrl = "https://pure-temple-48518.herokuapp.com";

//const baseUrl = "https://localhost:4000";

const allSpacesFetched = (spaces) => ({
  type: SPACES_FETCHED,
  payload: spaces,
});

export const showAllSpaces = () => (dispatch, getState) => {
  const state = getState();
  const { spaces } = state;

  if (!spaces.length) {
    request(`${baseUrl}/space`)
      .then((res) => {
        const action = allSpacesFetched(res.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

const OneSpaceFetched = (space) => ({
  type: SPACE_FETCHED,
  payload: space,
});

export const showOneSpace = (id) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/space/${id}`)
    .send(id)
    .then((res) => {
      const action = OneSpaceFetched(res.body);
      dispatch(action);
      // console.log(res.body);
    })
    .catch(console.error);
};

const newSpaceCreated = (space) => ({
  type: SPACE_CREATED,
  payload: space,
});

export function newSpace(data) {
  return async function (dispatch) {
    try {
      const res = await superagent.post(`${baseUrl}/space`).send(data);

      const action = newSpaceCreated(res.body);
      dispatch(action);
      // console.log("action", action);
    } catch (error) {
      console.error(error);
    }
  };
}
