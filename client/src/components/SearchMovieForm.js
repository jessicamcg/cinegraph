import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_SEARCH_MOVIE } from "../utils/queries";
import { SAVE_MOVIE } from "../utils/mutations";


export default function SearchMovieForm(props) {
    const [searchInput, setSearchInput] = useState('');
    const [searchOutput, setSearchOutput] = useState({});
    const [saveMovie] = useMutation(SAVE_MOVIE)
    const data = useQuery(QUERY_SEARCH_MOVIE, {
            variables: {
                query: searchInput
            }
        });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data)

        const searchResult = data.data.movieData
        console.log(searchResult)
            setSearchOutput(data.data.movieData)
            console.log(searchOutput)
        try {
            console.log(data)
        } catch (e) {
            console.log(e);
        }
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            console.log(searchOutput)
            const addMovie = await saveMovie({
                variables: {
                    Title: searchOutput.Title,
                    Rating: searchOutput.Rating,
                    BoxOffice: searchOutput.BoxOffice,
                    Year: searchOutput.Year,
                    imdbID: searchOutput.imdbID
                }
            })
// console.log(props.client)
// props.dispatch({type:"test"})
            console.log(addMovie)
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
    )
}