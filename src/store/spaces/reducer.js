const initialState = {
  loading: true,
  spaces: [],
};

export default function spacesSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "spaces/startLoadingSpaces": {
      return {
        ...state,
        loading: true,
      };
    }

    case "spaces/spacesFullyFetched": {
      console.log("action", action.payload);
      return {
        loading: false,
        spaces: [...state.spaces, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
}
