export const MOVIES_LOAD = "MOVIES_LOAD";
export const MOVIES_LOAD_SUCCESS = "MOVIES_LOAD_SUCCESS";
export const MOVIES_LOAD_FAIL = "MOVIES_LOAD_FAIL";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_BY_RATING = "FILTER_BY_RATING";

export function moviesFetchData() {

  // axios will automatically trigger _SUCCESS/_FAIL reducers depending on success/fail of request
  // Axios requires action structure with payload.request and type

  return {
    type: MOVIES_LOAD,
    payload: {
      request: {
        url:
          "/movie/now_playing?api_key=ba823f04fbf5c2a09d7dc1af5e25178a&language=en-US&page=1"
      }
    }
  };
}

export function filterByGenre(genreId) {
  return {
    type: FILTER_BY_GENRE,
    value: genreId
  };
}

export function filterByRating(rating) {
  return {
    type: FILTER_BY_RATING,
    value: rating
  };
}
