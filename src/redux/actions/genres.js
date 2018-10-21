export const GENRES_LOAD = "GENRES_LOAD";
export const GENRES_LOAD_SUCCESS = "GENRES_LOAD_SUCCESS";
export const GENRES_LOAD_FAIL = "GENRES_LOAD_FAIL";


export function genresFetchData() {

  // axios will automatically trigger _SUCCESS/_FAIL reducers depending on success/fail of request
  // Axios requires action structure with payload.request and type

  return {
    type: GENRES_LOAD,
    payload: {
      request: {
        url:
          "/genre/movie/list?api_key=ba823f04fbf5c2a09d7dc1af5e25178a&language=en-US"
      }
    }
  };
}


