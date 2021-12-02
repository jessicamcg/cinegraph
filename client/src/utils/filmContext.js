import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';


const FilmContext = createContext();

export const useFilmContext = () => useContext(FilmContext);
// const [queryMovies] = useQuery(QUERY_MOVIES)
export const FilmProvider = ({ children }) => {
    const queryMovies = useQuery(QUERY_MOVIES)
    const initialState = queryMovies.data
    console.log(queryMovies.data)

    return (
        <FilmContext.Provider value={initialState}>
            {children}
        </FilmContext.Provider>
    )
}