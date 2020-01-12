import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./components/redux/actions/movies";
import MovieList from "./components/templates/MovieList";
import MovieDetails from "./components/templates/MovieDetails";

function App(props) {
  const [search, setSearch] = useState("all");
  const [currentPage, setCurrentPages] = useState(1);
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies(search, currentPage));
  }, [currentPage, dispatch, search]);

  const handleChange = event => setSearch(event.target.value);
  const paginate = pageNumber => setCurrentPages(pageNumber);
  const previousPage = pageNumber => setCurrentPages(pageNumber - 1);
  const nextPage = pageNumber => setCurrentPages(pageNumber + 1);

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route
          exact
          path="/"
          render={props => (
            <MovieList
              {...props}
              search={search}
              handleChange={handleChange}
              currentPage={currentPage}
              nextPage={nextPage}
              previousPage={previousPage}
              paginate={paginate}
              movies={movies}
            />
          )}
        />
        <Route
          path="/details/:id"
          render={props => <MovieDetails {...props} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
