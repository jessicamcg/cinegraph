import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Auth from "../utils/auth";
import DisplayMovie from "./DisplayMovie";
import { useQuery } from "@apollo/client";
import { QUERY_SEARCH_MOVIE } from "../utils/queries";


export default function SearchMovieForm() {
    const [searchInput, setSearchInput] = useState('');
    const [searchOutput, setSearchOutput] = useState([])

    const data = useQuery(QUERY_SEARCH_MOVIE, {
        variables: {
            query: searchInput
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchResult = data.data.movieData
        try {
            console.log(data.data.movieData)
            setSearchOutput(searchResult)
            console.log(searchOutput)
        } catch (e) {
            console.log(e);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();
    }

    return (
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
            <Box>
                <Box
                    component="form"
                    onSubmit={handleSave}
                >
                    <Typography>
                        {searchOutput.Title}
                    </Typography>
                    <Typography>
                        {searchOutput.Rating}
                    </Typography>
                    <Typography>
                        {searchOutput.BoxOffice}
                    </Typography>
                    {searchOutput.Title
                        ? <Button type='submit' variant='contained'>
                            Save
                          </Button>
                        : null}
                </Box>

            </Box>
        </Box>
    )
}