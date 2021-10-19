import axios from "axios";
import { apiUrl } from "../../config/constants";

import { setMessage, appDoneLoading } from "../appState/actions";

export function allStoriesFetched(data) {
  return {
    type: "ALL_STORIES_FETCHED",
    payload: data,
  };
}

export async function fetchAllStories(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/spaces/:id`);
    console.log("response", response.data);
    dispatch(allStoriesFetched(response.data));
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
}
