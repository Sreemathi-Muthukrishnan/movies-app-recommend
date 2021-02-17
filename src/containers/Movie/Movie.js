import React , { Component } from 'react';
import classes from './Movie.module.css';
import Expand from "react-expand-animated"; 
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Movie extends Component {
    state = { open: false };
    movieHandler = () =>{
        this.setState(prevState => ({ open: !prevState.open }));
    }
    render(){
        const styles = {
            open: { background: "#ecf0f1" }
          };
          const transitions = ["height", "opacity", "background"];
        return(
          <div className={classes.movie} onClick={() => this.movieHandler()}>
             <img src={this.props.img} style={{height:"300px", width:"700px"}} />
             <p className={classes.title}>{this.props.title}</p>  
             <p className={classes.title}>Rank: {this.props.rank}</p> 
             <Expand
            open={this.state.open}
            duration={1000}
            styles={styles}
            transitions={transitions}
          >
          <div className={classes.desc}>
           <p>Synopsis : {this.props.desc}</p>
           <p>Release Date:  {this.props.release}</p>
          </div>
          </Expand>
          </div>  
        );
    }
}

export default Movie;