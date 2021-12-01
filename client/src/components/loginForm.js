import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

export default function LoginOrSignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            "Username:",
            username,
            "Email:",
            email,
            "Password:",
            password
        );
        try {
            const {data} = addUser({
                variables: {}
            })
        } catch (error) {
            
        }
    };
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue="Username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
            />
            <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </Box>
    );
}
