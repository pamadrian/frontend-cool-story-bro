const initialState = {
  allSpaces: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_SPACES_FETCHED":
      return { ...state, allSpaces: action.payload };

    default: {
      return state;
    }
  }
}
