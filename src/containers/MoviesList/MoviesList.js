import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import * as actions from "../../store/actions/index";
import classes from "./MoviesList.module.css";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
class MoviesList extends Component {
   
  componentDidMount() {
    this.props.onFetchMovies();
  }
  onChangeOption(e,movies){
    if(e.target.value == '0'){ 
       this.props.onSortMovies([...movies].sort((a, b) => (a.rank > b.rank) ? 1 : -1));
    }
        
    if(e.target.value == '1'){
     this.props.onSortMovies([...movies].sort((a, b) => (a.releaseDate > b.releaseDate) ? 1 : -1));
    }
    
}
  render() {
    return (
      <Aux>
        <div className={classes.sort}>
          <div>
          <h1 style={{ color: "white", border: "black"}}>
            Sort your recommendations by
          </h1>
          </div>
          <div>
          <select className={classes.select} onClick={(e) =>this.onChangeOption(e,this.props.movies)}>
          <option value="0">Rank</option>
          <option value="1">Release Date</option>
          </select>
          </div> 
        </div>
        <div className={classes.movies}>
          {this.props.movies.map((movie) => (
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

        <div></div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: () => dispatch(actions.fetchMovies()),
    onSortMovies: (movies) =>dispatch(actions.sortMovies(movies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
