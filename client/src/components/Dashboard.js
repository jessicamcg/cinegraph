import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIES } from "../utils/queries";
import "../styles/dashboard.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { useFilmContext } from "../utils/filmContext";

import Auth from "../utils/auth";

import RenderScatterChart from "./MovieChart";
import RemoveMovieForm from "./RemoveMovieForm";
import SearchMovieForm from "./SearchMovieForm";

export default function Dashboard() {
    const queryMovies = useQuery(QUERY_MOVIES);
    const initialState = queryMovies.data;

    const [state, setState] = useFilmContext();
    useEffect(() => {
        setState({ ...state, movies: initialState });
    }, []);

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
                        Dashboard
                    </Typography>
                </Grid>
                {initialState ? (
                    <Container className="graph">
                        <RenderScatterChart database={initialState} />
                    </Container>
                ) : null}
                <Grid container xs={12} className="form-wrapper">
                <Grid item xs={6}>
                    <Container>
                    <SearchMovieForm />
                    </Container>
                </Grid>
                {initialState ? (
                    <Grid item xs={6}>
                        <Container>
                        <RemoveMovieForm  database={initialState} />
                        </Container>
                    </Grid>
                ) : null}
                </Grid>
            </Grid>
        </Box>
    );
}
