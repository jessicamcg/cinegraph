import { useReducer } from 'react';
import {
    SAVE_MOVIE,
    REMOVE_MOVIE
} from './actions';

export default function reducer (state, action) {
    console.log('reducer',state, action)
    switch (action.type) {
        // case SAVE_MOVIE:
        //     const newMovie = {...action.payload}
        //     return {
        //         ...state,
        //         movies: [...state.movies, newMovie]
        //     }
        // case REMOVE_MOVIE:
        //     let updatedState = state.movies.filter((movie) => {
        //         return movie._id !== action._id;
        //     });

        //     return {
        //         ...state,
        //         movies: updatedState
        //     };
        case "test": return state;
        default:
            return state
    }
};

export function useMovieRducer(initialState) {
    return useReducer(reducer, initialState);
  }