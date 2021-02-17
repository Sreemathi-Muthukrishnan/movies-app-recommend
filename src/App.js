import React,{ Component } from 'react';
import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import MoviesList from './containers/MoviesList/MoviesList';

class App extends Component{
  render(){
    return (
      <div className={classes.App}>
       <Layout>
         <MoviesList/>
       </Layout>
      </div>
    );
  }
  
}

export default App;
