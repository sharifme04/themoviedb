import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid";
import PropTypes from "prop-types";
import { detailsMovies } from "../redux/actions/movies";

const MovieDetails = props => {
  const id = props.match.params.id;
  const imageUrl = process.env.REACT_APP_IMAGE_BASE_PATH;
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movies.movie);

  useEffect(() => {
    dispatch(detailsMovies(id));
  }, [dispatch, id]);

  return (
    <div className="text-center mt-4">
      <h3>Movie details</h3>
      <hr />
      <button type="button" className="btn btn-primary" onClick={()=>props.history.push('/')}>Back</button>
      <div>
        <div className="row mt-5">
          <div className="col text-right">
            {movie && movie.poster_path ? (
              <img
                src={`${imageUrl}/w500/${movie.poster_path}`}
                className="rectangle"
                alt={movie.title}
              />
            ) : (
              <p>Image is not available</p>
            )}
          </div>
          <div className="col text-left">
            <div className="container text-left-line">
              <h6>
                <b>Movie Name:</b> {movie && movie.title}
              </h6>
              <p>
                <b>Budget:</b> {movie && movie.budget}
              </p>
              <p>
                <b>Overview:</b> {movie && movie.overview}
              </p>
              <p>
                <b>Popularity:</b> {movie && movie.popularity}
              </p>
              <p>
                <b>Release Date:</b> {movie && movie.release_date}
              </p>
              <p>
                <b>Average Vote: </b>
                {movie && movie.vote_average}
              </p>
              <p>
                <b>Genres</b>
              </p>
              <ul>
                {movie &&
                  movie.genres &&
                  movie.genres.map(e => <li key={e.id}>{e.name}</li>)}
              </ul>
              <p>
                <b>Production Companies</b>
              </p>
              <ul>
                {movie &&
                  movie.production_companies &&
                  movie.production_companies.map(e => (
                    <li key={e.id}>{e.name}</li>
                  ))}
              </ul>
              <p>
                <b>Production Countries</b>
              </p>
              <ul>
                {movie &&
                  movie.production_countries &&
                  movie.production_countries.map((e, i) => (
                    <li key={uuid.v4()}>{e.name}</li>
                  ))}
              </ul>
              <p>
                <b>Spoken Languages</b>
              </p>
              <ul>
                {movie &&
                  movie.spoken_languages &&
                  movie.spoken_languages.map((e, i) => (
                    <li key={uuid.v4()}>{e.name}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object
};
export default MovieDetails;
