import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetchMoviesSuccess =(movies) =>{
    return{
        type:actionTypes.FETCH_MOVIES,
        movies:movies
    }
}
export const fetchMovies =() =>{
    return dispatch =>{
        let fetchedMovies= [];
        return axios.get('https://movies-app-640ad-default-rtdb.firebaseio.com/movies.json')
        .then(response =>{
            console.log(response);
            for(let key in response.data){
                fetchedMovies = response.data[key];
            }
            dispatch(fetchMoviesSuccess(fetchedMovies));
        })
        .catch(err=>{
            throw(err);
        })
    }
}

export const sortMovies =(e,movies) =>{
    return{
        type:actionTypes.SORT_MOVIES,
        movies:movies,
        e:e
    }
}