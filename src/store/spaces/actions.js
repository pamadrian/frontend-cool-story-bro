import axios from "axios";

export function startLoadingSpace() {
  return {
    type: "spaces/startLoadingSpaces",
  };
}

export function spaceFullyFetched(data) {
  return {
    type: "spaces/spacesFullyFetched",
    payload: data,
  };
}

export function fetchSpace(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingSpace());

    const [spaceResponse] = await axios.get(`http://localhost:4000/spaces`);

    dispatch(
      spaceFullyFetched({
        space: spaceResponse.data,
      })
    );
  };
}
