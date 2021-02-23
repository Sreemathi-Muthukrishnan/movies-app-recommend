import React, { useEffect } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import * as actions from "../../store/actions/index";
import classes from "./MoviesList.module.css";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import Sort from "../Sort/Sort";
const MoviesList = (props) => {
  const { onFetchMovies } = props;
  useEffect(() => {
    onFetchMovies();
  }, [onFetchMovies]);

  return (
    <Aux>
      <Sort/>
      <div className={classes.movies}>
        {props.movies.map((movie) => (
          <Movie
            img={movie.imageUrl}
            title={movie.title}
            key={movie.id}
            desc={movie.synopsis}
            rank={movie.rank}
            release={movie.releaseDate}
          />
        ))}
      </div>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: () => dispatch(actions.fetchMovies()),
    onSortMovies: (e, movies) => dispatch(actions.sortMovies(e, movies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
