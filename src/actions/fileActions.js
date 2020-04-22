import request from "superagent";
import superagent from "superagent";

export const FILE_FETCHED = "FILES_FETCHED";
export const NEW_FILE = "NEW_FILE";
const baseUrl = "https://pure-temple-48518.herokuapp.com";
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
      //const body  =  {name, description, spaceId, location}
      const res = await superagent.post(`${baseUrl}/file`).send(data);

      const action = newFileCreated(res.body);
      dispatch(action);
      // console.log("action", action);
    } catch (error) {
      console.error(error);
    }
  };
}
