import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {  useFilmContext } from "../utils/filmContext";
import SearchMovieForm from "./SearchMovieForm";

// import reducer from '../utils/reducers'

import Auth from "../utils/auth";

import RenderScatterChart from "./MovieChart";
import RemoveMovieForm from "./RemoveMovieForm";


export default function Dashboard() {
    const queryMovies = useQuery(QUERY_MOVIES)
    const initialState = queryMovies.data

    const [state, setState] = useFilmContext();
    // const movieList = initialState.savedMovies;
    useEffect(() => {
        setState({ ...state, movies: initialState })
    }, [])
    // console.log(state)

    // const [state, dispatch] = useReducer(reducer, initialState )
    // const { initialState } = FilmProvider


    // React.useEffect(()=>{
    //     // dispatch({
    //     //     type:"SAVE_MOVIE",
    //     //     "payload":"test1"
    //     // })
    // console.log(initialState,state);
    // },[state])

    if (!Auth.getToken()) {
        // checkthis
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    return (
        <Box>
            {/* {dispatch({
                type:"test"
            })} */}

            {console.log(initialState)}
            <Typography variant="h2">dashboard</Typography>
            {initialState
                ? 
                  <>
                    <RenderScatterChart database={initialState} />
                    <RemoveMovieForm database={initialState} />
                  </>
                : null
            }
            <SearchMovieForm />
        </Box>
    );
}
