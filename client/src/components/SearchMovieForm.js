import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "../styles/movie-form.css";

import { useQuery, useMutation } from "@apollo/client";
import {
    QUERY_MOVIES,
    QUERY_SEARCH_MOVIE,
    QUERY_SEARCH_MOVIE_AGAIN,
    QUERY_ME,
} from "../utils/queries";
import { SAVE_MOVIE } from "../utils/mutations";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SearchMovieForm() {
    const [searchInput, setSearchInput] = useState("");
    const [searchOutput, setSearchOutput] = useState({});
    const [searchYear, setSearchYear] = useState("");
    const theme = createTheme({
        palette: {
            primary: {
                main: "#4caf50",
            },
            secondary: {
                main: "#77d4d8",
            },
            info: {
                main: "#000000",
            },
        },
    });

    const [saveMovie] = useMutation(SAVE_MOVIE);

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const data = useQuery(QUERY_SEARCH_MOVIE, {
        variables: {
            query: searchInput,
        },
    });

    const dataTryAgain = useQuery(QUERY_SEARCH_MOVIE_AGAIN, {
        variables: {
            query: searchInput,
            queryYear: searchYear,
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setSearchOutput(data.data.movieData);
            setSearchYear("");
        } catch (e) {
            setOpen(true);
            console.log(e);
        }
    };

    const handleSave = async (event) => {
        try {
            const addMovie = await saveMovie({
                variables: {
                    Title: searchOutput.Title,
                    Rating: searchOutput.Rating,
                    BoxOffice: searchOutput.BoxOffice,
                    Year: searchOutput.Year,
                    imdbID: searchOutput.imdbID,
                },
            });

            // console.log(props.client)
            // props.dispatch({type:"test"})

            setSearchInput("");
            setSearchOutput("");
            if (dataTryAgain && dataTryAgain.data.tryAgain !== searchYear) {
                event.preventDefault();
                setOpen(true);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const handleTryAgain = async (event) => {
        event.preventDefault();
        try {
            setSearchOutput(dataTryAgain.data.tryAgain);
        } catch (e) {
            console.log(e);
            setOpen(true);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box class="movie-form">
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                    }}
                    autoComplete="off"
                    className="section"
                >
                    <Typography variant="h4" component="div" gutterBottom>
                        Search for a Movie
                    </Typography>
                    <TextField
                        required
                        id="search-movie-input"
                        label="Movie"
                        value={searchInput}
                        onInput={(e) => setSearchInput(e.target.value)}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="button"
                    >
                        Submit
                    </Button>
                </Box>
                <Box
                    component="form"
                    onSubmit={handleSave}
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                    }}
                    autoComplete="off"
                    className="section"
                >
                    <Typography variant="h5">{searchOutput.Title}</Typography>
                    <Typography>{searchOutput.Year}</Typography>
                    <Typography> {searchOutput.Rating}</Typography>
                    <Typography>
                        {searchOutput.BoxOffice}
                    </Typography>
                    {searchOutput.Title ? (
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            className="button"
                        >
                            Save
                        </Button>
                    ) : null}
                </Box>
                {searchOutput.Title ? (
                    <>
                        <Typography>
                            Not the movie you were looking for? Try the correct
                            year!
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleTryAgain}
                            sx={{
                                "& .MuiTextField-root": { m: 1, width: "25ch" },
                                display: "flex",
                                alignItems: "flex-start",
                                flexDirection: "column",
                            }}
                            autoComplete="off"
                            className="section"
                        >
                            <TextField
                                required
                                id="search-year-input"
                                label="Year"
                                value={searchYear}
                                onInput={(e) => setSearchYear(e.target.value)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className="button"
                            >
                                Search Year for "{searchInput}"
                            </Button>
                        </Box>
                    </>
                ) : null}
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                    <Alert
                        onClose={handleClose}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        Something went wrong...
                    </Alert>
                </Snackbar>
            </Box>
        </ThemeProvider>
    );
}
