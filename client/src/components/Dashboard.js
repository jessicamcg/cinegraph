import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIES } from "../utils/queries";
// import "../styles/dashboard.css"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { useFilmContext } from "../utils/filmContext";
// import reducer from '../utils/reducers'

import Auth from "../utils/auth";

import RenderScatterChart from "./MovieChart";
import RemoveMovieForm from "./RemoveMovieForm";
import SearchMovieForm from "./SearchMovieForm";

export default function Dashboard() {

    const queryMovies = useQuery(QUERY_MOVIES);
    const initialState = queryMovies.data;


    const [state, setState] = useFilmContext();
    // const movieList = initialState.savedMovies;
    useEffect(() => {
        setState({ ...state, movies: initialState });
    }, []);
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

    if (!Auth.loggedIn()) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links
                above to sign up or log in!
            </h4>
        );
    }

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center">
                        Your Dashboard
                    </Typography>
                </Grid>
                {initialState ? (
                    <Container>
                        <RenderScatterChart database={initialState} />
                    </Container>
                ) : null}
                <Grid item xs={6}>
                    <SearchMovieForm />
                </Grid>
                {initialState ? (
                    <Grid item xs={6}>
                        <RemoveMovieForm database={initialState} />
                    </Grid>
                ) : null}
            </Grid>
        </Box>
    );
}
