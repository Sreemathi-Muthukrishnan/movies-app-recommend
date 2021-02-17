import React,{ Component } from 'react';
import axios from 'axios';
import classes from './Navbar.module.css';

class Navbar extends Component{
   
    render(){
        return(
            <header className={classes.Navbar}>
                <div>
                    <h1>Movies</h1>

                </div>
            </header>
        )
    }
}
export default Navbar;