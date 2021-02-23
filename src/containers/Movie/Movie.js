import React , { useState } from 'react';
import classes from './Movie.module.css';
import Expand from "react-expand-animated"; 
import Aux from '../../hoc/Auxiliary/Auxiliary';

const Movie =(props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const movieHandler = () =>{
        setIsOpen(current => !current);
    }
   
        const styles = {
            open: { background: "#ecf0f1" }
          };
          const transitions = ["height", "opacity", "background"];
        return(
          <div className={classes.movie} onClick={() => movieHandler()}>
             <img src={props.img} style={{height:"300px", width:"700px"}} />
             <p className={classes.title}>{props.title}</p>  
             <p className={classes.title}>Rank: {props.rank}</p> 
             <Expand
            open={isOpen}
            duration={1000}
            styles={styles}
            transitions={transitions}
          >
          <div className={classes.desc}>
           <p>Synopsis : {props.desc}</p>
           <p>Release Date:  {props.release}</p>
          </div>
          </Expand>
          </div>  
        );
}

export default Movie;