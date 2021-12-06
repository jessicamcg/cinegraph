import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { useMutation } from "@apollo/client";
import { REMOVE_MOVIE } from "../utils/mutations";


export default function RemoveMovieForm(props) {
    const movies = props.database.savedMovies
    const [removeMovie] = useMutation(REMOVE_MOVIE);
    const [movie, setMovie] = useState('');

    const handleChange = (event) => {
        setMovie(event.target.value);
    };

    const handleRemove = async (event) => {
        try {
            const remove = await removeMovie({
                variables: {
                    imdbID: movie
                }
            })
            console.log(remove);
        } catch (e) {
            event.preventDefault();
            console.log(e);
        }
    }

    if (!movies.length) {
        return
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleRemove}
        >
            <Typography variant="h4" component="div" gutterBottom>
                Remove movie from graph
            </Typography>
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