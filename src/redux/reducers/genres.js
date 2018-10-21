import {
  GENRES_LOAD,
  GENRES_LOAD_FAIL,
  GENRES_LOAD_SUCCESS,
  FILTER_BY_GENRE
} from ".././actions/genres";

// All reducers have initial state of undefined. An initial state must be defined by you.
export function genres(state = {}, action) {
  switch (action.type) {
    case GENRES_LOAD: {
      return Object.assign({}, state, {
        hasErrored: false,
        isLoading: true
      });
    }

    //axios calls success or failure based on call
    case GENRES_LOAD_SUCCESS: {
      return Object.assign({}, state, {
        data: action.payload.data,
        hasErrored: false,
        isLoading: false
      });
    }

    case GENRES_LOAD_FAIL: {
      return Object.assign({}, state, {
        hasErrored: true,
        errorMessage: action.error.message,
        isLoading: false
      });
    }

    default:
      return state;
  }
}
