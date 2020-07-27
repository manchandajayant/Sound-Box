import request from "superagent";
import superagent from "superagent";

export const RECORDINGS_FETCHED = "RECORDINGS_FETCHED";
export const NEW_RECORDING = "NEW_RECORDING";

const baseUrl = "http://localhost:4000";
//const baseUrl = "https://pure-temple-48518.herokuapp.com";

const recordingsFetched = (recordings) => ({
  type: RECORDINGS_FETCHED,
  payload: recordings,
});

export const fetchRecordings = () => (dispatch, getState) => {
  request.get(`${baseUrl}/recording`).then((res) => {
    const action = recordingsFetched(res.body);
    dispatch(action);
  });
};

const newRecordingCreated = (payload) => ({
  type: NEW_RECORDING,
  payload,
});

export function newRecording(data) {
  return async function (dispatch) {
    try {
      const res = await superagent.post(`${baseUrl}/recording`).send(data);

      const action = newRecordingCreated(res.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}
