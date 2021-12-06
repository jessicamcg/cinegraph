import React, { createContext, useContext, useEffect, useState } from 'react';


const FilmContext = createContext();

export const useFilmContext = () => useContext(FilmContext);
// const [queryMovies] = useQuery(QUERY_MOVIES)
export const FilmProvider = ({ children }) => {
    // const queryMovies = useQuery(QUERY_MOVIES)
    // const initialState = queryMovies.data
    const [state, setState] = useState({
        movies: [],
    })

    return (
        <FilmContext.Provider value={[state, setState]}>
            {children}
        </FilmContext.Provider>
    )
}
