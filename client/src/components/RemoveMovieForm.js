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
    console.log(movies);
    const [removeMovie] = useMutation(REMOVE_MOVIE);
    const [movie, setMovie] = useState('');

    const handleChange = (event) => {
        setMovie(event.target.value);
    };

    const handleRemove = async (event) => {
        try {
            const remove = await removeMovie({
                variables: {
                    imdbID: movie.imdbID
                }
            })
        } catch (e) {
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
                label="Select"
                value={movie}
                onChange={handleChange}
                helperText="Select movie to remove"
            >
                {movies.map((option) => (
                    <MenuItem key={option.imdbID} value={option.Title}>
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