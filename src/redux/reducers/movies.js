import {
  MOVIES_LOAD,
  MOVIES_LOAD_FAIL,
  MOVIES_LOAD_SUCCESS,
  FILTER_BY_GENRE,
  FILTER_BY_RATING
} from ".././actions/movies";

import _ from 'lodash';

// All reducers have initial state of undefined. An initial state must be defined by you.
export function movies(state = {}, action) {
  switch (action.type) {
    case MOVIES_LOAD: {
      return Object.assign({}, state, {
        hasErrored: false,
        isLoading: true
      });
    }

    //axios calls success or failure based on call
    case MOVIES_LOAD_SUCCESS: {
      return Object.assign({}, state, {
        data: {
          results: action.payload.data.results.map(a => {

            a.show = true;
            a.filteredByRating = a.vote_average >= 3;

            return a;
          })
        },
        hasErrored: false,
        isLoading: false
      });
    }

    case MOVIES_LOAD_FAIL: {
      return Object.assign({}, state, {
        hasErrored: true,
        errorMessage: action.error.message,
        isLoading: false
      });
    }

    case FILTER_BY_GENRE: {

      const genreIds = _.map(action.value, a => a.id);

      _.each(state.data.results, movie => {
        movie.show = genreIds.every(elem => movie.genre_ids.indexOf(elem) > -1);
      });

      return Object.assign({}, state, {
        data: _.clone(state.data, true)
      });
    }

    case FILTER_BY_RATING: {

      _.each(state.data.results, movie => {
        movie.filteredByRating = movie.vote_average >= action.value;
      });

      return Object.assign({}, state, {
        data: _.clone(state.data, true)
      });
    }

    default:
      return state;
  }
}
