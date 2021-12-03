import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SEARCH_MOVIE, QUERY_SEARCH_MOVIE_AGAIN } from "../utils/queries";
import { SAVE_MOVIE } from "../utils/mutations";


export default function SearchMovieForm() {
    const [searchInput, setSearchInput] = useState('');
    const [searchOutput, setSearchOutput] = useState({});
    const [saveMovie] = useMutation(SAVE_MOVIE);
    
    const [searchYear, setSearchYear] = useState('');
    
    const data = useQuery(QUERY_SEARCH_MOVIE, {
        variables: {
            query: searchInput
        }
    });

    const dataTryAgain = useQuery(QUERY_SEARCH_MOVIE_AGAIN, {
        variables: {
            query: searchInput,
            queryYear: searchYear
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data)

        // const searchResult = data.data.movieData
        // console.log(searchResult)
            // console.log(searchOutput)
        try {
            setSearchOutput(data.data.movieData)
            setSearchYear('')
            // console.log(data)
        } catch (e) {
            console.log(e);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            // console.log(searchOutput)
            const addMovie = await saveMovie({
                variables: {
                    Title: searchOutput.Title,
                    Rating: searchOutput.Rating,
                    BoxOffice: searchOutput.BoxOffice,
                    Year: searchOutput.Year,
                    imdbID: searchOutput.imdbID
                }
            })
            // console.log(addMovie)
        } catch (e) {
            console.log(e);
        }
    }

    const handleTryAgain = async (event) => {
        event.preventDefault();
        
        try {
            // console.log(dataTryAgain)
            setSearchOutput(dataTryAgain.data.tryAgain)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
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

                <Button type="submit" variant="contained">
                    Submit
                </Button>
                
            </Box>
            <Box
                component="form"
                onSubmit={handleSave}
            >
                <Typography>
                    {searchOutput.Title}
                </Typography>
                <Typography>
                    {searchOutput.Year}
                </Typography>
                <Typography>
                    {searchOutput.Rating}
                </Typography>
                <Typography>
                    {searchOutput.BoxOffice}
                </Typography>
                
            </Box>
            {searchOutput.Title
                    ? <>
                        <Button type='submit' variant='contained'>
                            Save
                        </Button>
                        <Typography>
                            Not the movie you're looking for?
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleTryAgain}
                        >
                            <TextField
                                required
                                id="search-year-input"
                                label="Year"
                                value={searchYear}
                                onInput={(e) => setSearchYear(e.target.value)}
                            />
                            <Button type="submit" variant="contained">
                                Search Year for {searchOutput.Title}
                            </Button>
                        </Box>
                    </>
                    : null}
        </Box>
    )
}