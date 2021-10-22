import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  STORY_DELETE_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case STORY_DELETE_SUCCESS:
      const storyId = action.payload;
      const newStories = state.space.stories.filter(
        (story) => story.id !== storyId
      );
      return {
        ...state,
        space: {
          ...state.space,
          stories: newStories,
        },
      };

    default:
      return state;
  }
}
