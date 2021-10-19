import axios from "axios";
import { apiUrl } from "../../config/constants";

import { setMessage, appDoneLoading } from "../appState/actions";

export function allSpacesFetched(data) {
  return {
    type: "ALL_SPACES_FETCHED",
    payload: data,
  };
}

export function spaceDetailsFetched(data) {
  return {
    type: "SPACE_DETAILS_FETCHED",
    payload: data,
  };
}

export async function fetchAllSpaces(dispatch, getState) {
  try {
    const response = await axios.get(`${apiUrl}/spaces`);
    console.log("response", response.data);
    dispatch(allSpacesFetched(response.data));
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

export function fetchSpaceDetails(id) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      console.log("response", response.data);
      dispatch(spaceDetailsFetched(response.data));
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
  };
}
