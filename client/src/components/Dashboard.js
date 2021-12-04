import React, { useReducer, useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_MOVIES } from '../utils/queries';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FilmProvider, useFilmContext } from "../utils/filmContext";
import SearchMovieForm from "./SearchMovieForm";

// import reducer from '../utils/reducers'

import Auth from "../utils/auth";

import RenderScatterChart from "./MovieChart";
    

export default function Dashboard() {
const queryMovies = useQuery(QUERY_MOVIES)
const initialState = queryMovies.data

const  [state, setState]  = useFilmContext();
// const movieList = initialState.savedMovies;
useEffect(() => {
    setState({...state, movies:initialState})
},[])
console.log(state)

// const [state, dispatch] = useReducer(reducer, initialState )
// const { initialState } = FilmProvider


// React.useEffect(()=>{
//     // dispatch({
//     //     type:"SAVE_MOVIE",
//     //     "payload":"test1"
//     // })
// console.log(initialState,state);
// },[state])
// const database = 

    if (!Auth.getToken()) {
            return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
            );
        }
    
    return (
        <Box>
            {/*Breaks on refresh */}

          
            {/* {console.log(initialState)} */}
            {/* {dispatch({
                type:"test"
            })} */}

            {console.log(initialState)}
            <Typography variant="h2">dashboard</Typography>
            {initialState
                ? <RenderScatterChart database={initialState} />
                : null
            }
            <Typography variant="body1">
                can only access this page if logged in
            </Typography>
            <Typography variant="body1">
                chart displayed on this page with form to add/remove movies
            </Typography>
            <SearchMovieForm />
        </Box>
    );
}
