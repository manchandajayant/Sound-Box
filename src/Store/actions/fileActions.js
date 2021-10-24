import request from "superagent";
import superagent from "superagent";

export const FILE_FETCHED = "FILES_FETCHED";
export const NEW_FILE = "NEW_FILE";

const baseUrl = "https://secure-brook-09679.herokuapp.com/";
//const baseUrl = "http://localhost:4000";
const fileFetched = (file) => ({
  type: FILE_FETCHED,
  payload: file,
});

export const fetchFile = (spaceId) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/file/${spaceId}`)
    .send(spaceId)
    .then((res) => {
      const action = fileFetched(res.body);
      dispatch(action);
    });
};

const newFileCreated = (payload) => ({
  type: NEW_FILE,
  payload,
});

export function newFile(data) {
  return async function (dispatch) {
    try {
      const res = await superagent.post(`${baseUrl}/file`).send(data);

      const action = newFileCreated(res.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}
