import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  DETAILS_MOVIES_SUCCESS,
  DETAILS_MOVIES_FAILURE
} from "../actionTypes/moviesType";

const initialState = {
  movies: [],
  error: null
};
export default function movies(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case DETAILS_MOVIES_SUCCESS:
      return {
        ...state,
        movie: action.movie
      };
    case DETAILS_MOVIES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
