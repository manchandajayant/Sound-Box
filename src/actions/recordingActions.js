import request from "superagent";
import superagent from "superagent";
export const RECORDINGS_FETCHED = "RECORDINGS_FETCHED";
export const NEW_RECORDING = "NEW_RECORDING";

const baseUrl = "https://guarded-chamber-77848.herokuapp.com";
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
      //const body  =  {name, description, spaceId, location}
      const res = await superagent.post(`${baseUrl}/recording`).send(data);

      const action = newRecordingCreated(res.body);
      dispatch(action);
      // console.log("action", action);
    } catch (error) {
      console.error(error);
    }
  };
}
