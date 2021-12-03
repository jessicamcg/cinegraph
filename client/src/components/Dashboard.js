import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FilmProvider, useFilmContext } from "../utils/filmContext";
import SearchMovieForm from "./SearchMovieForm";
import Auth from "../utils/auth";

import RenderScatterChart from "./MovieChart";
    
export default function Dashboard() {
const  initialState  = useFilmContext();
// const [filmState, setFilmState] = useState({...initialState})
// const { initialState } = FilmProvider
    if (!Auth.getToken()) {
            return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
            );
        }
    // const initialState = useFilmContext()
    
    return (
        <Box>
            {/*Breaks on refresh */}
            {console.log(initialState)}
            <Typography variant="h2">dashboard</Typography>
            <RenderScatterChart database={initialState} />
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
