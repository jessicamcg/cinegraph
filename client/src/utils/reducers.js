import { useReducer } from 'react';
import {
    SAVE_BOOK,
    REMOVE_BOOK
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case SAVE_BOOK:
            const newMovie = {...action.payload}
            return {
                ...state,
                movies: [...state.movies, newMovie]
            }
        case REMOVE_BOOK:
            let updatedState = state.movies.filter((movie) => {
                return movie._id !== action._id;
            });

            return {
                ...state,
                movies: updatedState
            };
    }
};

export function useMovieRducer(initialState) {
    return useReducer(reducer, initialState);
  }