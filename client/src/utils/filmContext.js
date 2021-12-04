import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';


const FilmContext = createContext();

export const useFilmContext = () => useContext(FilmContext);
// const [queryMovies] = useQuery(QUERY_MOVIES)
export const FilmProvider = ({ children }) => {
    
    const [state, setState] = useState({
        movies: [],
    })
    useEffect(() => {
        const queryMovies = useQuery(QUERY_MOVIES)
        const initialState = queryMovies.data
        setState({...state, movies:initialState.savedMovies})
    },[])

    return (
        <FilmContext.Provider value={state}>
            {children}
        </FilmContext.Provider>
    )
}
