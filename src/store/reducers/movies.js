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
    return{
        ...state,
        movies: action.movies
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