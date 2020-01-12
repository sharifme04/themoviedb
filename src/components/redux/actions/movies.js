import axios from 'axios';
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  DETAILS_MOVIES_SUCCESS,
  DETAILS_MOVIES_FAILURE,
}   from '../actionTypes/moviesType';

const api = process.env.REACT_APP_MOVIE_DB_API;
const api_key = process.env.REACT_APP_API_KEY;

export function fetchMovies(searchKey, page) {
  return dispatch =>{
      axios.get(`${api}/search/movie?api_key=${api_key}&query=${searchKey}&page=${page}`)
      .then( (response)=> {
        console.log(response.data);
        dispatch({
          type:FETCH_MOVIES_SUCCESS,
          movies:response.data
        })
      })
      .catch((error)=> {
        dispatch({
          type:  FETCH_MOVIES_FAILURE,
          error:error
        })
      });

  }
}

  //https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>

export function detailsMovies(id) {
  return dispatch => {
   axios.get(`${api}/movie/${id}?api_key=${api_key}`)
    .then(response =>{
      console.log(response.data);
      dispatch({
        type: DETAILS_MOVIES_SUCCESS,
        movie:response.data
      })
    })
    .catch((error)=> {
      dispatch({
        type:  DETAILS_MOVIES_FAILURE,
        error:error
      })
    });

  }
 }
