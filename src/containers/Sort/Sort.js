import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import * as actions from "../../store/actions/index";
import classes from "./Sort.module.css";
import { connect } from "react-redux";

const Sort = (props) => {
  return (
    <Aux>
      <div className={classes.sort}>
        <div>
          <h1 style={{ color: "white", border: "black" }}>
            Sort your recommendations by
          </h1>
        </div>
        <div>
          <select
            className={classes.select}
            onClick={(e) => props.onSortMovies(e.target.value, props.movies)}
          >
            <option value="0">Release Date</option>
            <option value="1">Rank</option>
          </select>
        </div>
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
    onSortMovies: (e, movies) => dispatch(actions.sortMovies(e, movies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
