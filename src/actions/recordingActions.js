import request from "superagent";

export const RECORDINGS_FETCHED = "RECORDINGS_FETCHED";
export const NEW_RECORDING = "NEW_RECORDING";
const baseUrl = "http://localhost:4000";
const recordingsFetched = recordings => ({
  type: RECORDINGS_FETCHED,
  payload: recordings
});

export const fetchRecordings = () => (dispatch, getState) => {
  request.get(`${baseUrl}/recording`).then(res => {
    const action = recordingsFetched(res.body);
    dispatch(action);
  });
};

const newRecordingCreated = payload => ({
  type: NEW_RECORDING,
  payload
});

export const newRecording = data => (dispatch, getState) => {
  console.log("datta", data);
  request
    .post(`${baseUrl}/recording`)
    .send(data)
    .then(res => {
      const action = newRecordingCreated(res.body);
      dispatch(action);
      console.log("action", action);
    })
    .catch(console.error);
};
