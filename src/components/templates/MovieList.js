import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

const MovieList = props => {
  const imageUrl = process.env.REACT_APP_IMAGE_BASE_PATH;
  const { search, handleChange, movies } = props;
console.log(movies.type);
  return (
    <div className="container-fluid">
      <h1>Search app</h1>
      <hr />
      <Pagination {...props} />
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div className="form-group col-4">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              className="form-control"
              id="searchId"
              placeholder="Search here"
              name="search"
            />
          </div>
        </div>
        <div className="row justify-content-center text-center">
          {movies && movies.results && movies.results.length ? (
            movies.results
              .sort((a, b) => b.popularity - a.popularity)
              .map(e => (
                <Link key={e.id} to={`/details/${e.id}`}>
                  <div className="col-auto mb-3">
                    <div className="card">
                      {e.poster_path ? (
                        <img
                          src={`${imageUrl}/w342/${e.poster_path}`}
                          className="image"
                          alt={e.title}
                        />
                      ) : (
                        <p>Image is not available</p>
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <h5>Movies are not available</h5>
          )}
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  search: PropTypes.any,
  handleChange: PropTypes.func,
  movies: PropTypes.any
};

export default MovieList;
