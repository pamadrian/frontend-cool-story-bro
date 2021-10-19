const initialState = {
  allStories: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_STORIES_FETCHED":
      return { ...state, allStories: action.payload };

    default: {
      return state;
    }
  }
}
