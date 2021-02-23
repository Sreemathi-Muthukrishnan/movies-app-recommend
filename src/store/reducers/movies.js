import * as actionTypes from '../actions/actionTypes';

const initialState ={
    movies:[]
}

const fetchMovies =(state,action) =>{
    return{
        ...state,
        movies:action.movies
    }
}

const sortMovies =(state,action) =>{
    let mov =[];
    if(action.e == '1') { 
        mov=[...action.movies].sort((a, b) => (a.rank > b.rank) ? 1 : -1)
      }
          
     if(action.e == '0') {
        mov=[...action.movies].sort((a, b) => (a.releaseDate > b.releaseDate) ? 1 : -1)
     }
    return{
        ...state,
        movies: mov
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_MOVIES : return fetchMovies(state,action);
          
        case actionTypes.SORT_MOVIES : return sortMovies(state, action);

        default: return state;
    }
}

export default reducer;