import request from "superagent";

export const FILE_FETCHED = "FILES_FETCHED";
const baseUrl = "http://localhost:4000";
const fileFetched = file => ({
  type: FILE_FETCHED,
  payload: file
});

export const fetchFile = spaceId => (dispatch, getState) => {
  request
    .get(`${baseUrl}/file/${spaceId}`)
    .send(spaceId)
    .then(res => {
      const action = fileFetched(res.body);
      dispatch(action);
    });
};
