const initialState = {
  allSpaces: [],
  spaceDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_SPACES_FETCHED":
      return { ...state, allSpaces: action.payload };

    case "SPACE_DETAILS_FETCHED":
      console.log("am i getting here?", action.payload);
      return { ...state, spaceDetails: action.payload };

    default: {
      return state;
    }
  }
}
