import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_MOVIE } from "../utils/mutations";


export default function RemoveMovieForm(props) {
    const movies = props.database.savedMovies
    const [removeMovie] = useMutation(REMOVE_MOVIE);
    const [movie, setMovie] = useState('');

    const handleChange = (event) => {
        setMovie(event.target.value);
    };

    const handleRemove = async (event) => {
        console.log(movie);

        try {
            const remove = await removeMovie({
                variables: {
                    imdbID: movie
                }
            })
        } catch (e) {
            event.preventDefault();
            console.log(e);
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleRemove}
        >
            <TextField
                id="outlined-select-movie"
                select
                label="Select movie to remove"
                value={movie}
                onChange={handleChange}
            >
                {movies.map((option) => (
                    <MenuItem key={option.imdbID} value={option.imdbID}>
                        {option.Title}
                    </MenuItem>
                ))}
            </TextField>
            <Button type="submit" variant="contained">
                Delete Movie
            </Button>
        </Box>
    );
    
}