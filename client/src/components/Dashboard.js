import React, { useReducer, useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { FilmProvider, useFilmContext } from "../utils/filmContext";
import SearchMovieForm from "./SearchMovieForm";
import reducer from '../utils/reducers'
export default function Dashboard() {

const  initialState  = useFilmContext();
// const movieList = initialState.savedMovies;

const [state, dispatch] = useReducer(reducer, initialState )
// const { initialState } = FilmProvider

// React.useEffect(()=>{
//     // dispatch({
//     //     type:"SAVE_MOVIE",
//     //     "payload":"test1"
//     // })
// console.log(initialState,state);
// },[state])

    return (
    
        <Box>
            {/*Breaks on refresh */}
          
            {console.log(initialState)}
            {/* {dispatch({
                type:"test"
            })} */}
            <Typography variant='h3'>
                dashboard
            </Typography>
            <Typography variant='body1' gutterbottom>
                can only access this page if logged in
            </Typography>
            <Typography variant='body1' gutterbottom>
                chart displayed on this page with form to add/remove movies
            </Typography>
            <SearchMovieForm 
            state = {state}
            dispatch = {dispatch}/>
            {initialState.savedMovies[initialState.savedMovies.length-1].Title}
        </Box>
    )
}