import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/login-signup.css";

export default function SignupForm() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#1b5e20",
            },
            secondary: {
                main: "#77d4d8",
            },
            info: {
                main: "#ffffff",
            },
        },
    });
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [addUser] = useMutation(ADD_USER);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: email,
                password: password,
                username: username,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
        console.log(
            "Username:",
            username,
            "Email:",
            email,
            "Password:",
            password
        );
    };
    return (
        <ThemeProvider theme={theme}>
            <Container className="form-holder">
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Typography variant="h3" component="div" gutterBottom>
                        Sign Up
                    </Typography>
                    <TextField
                        required
                        id="outlined-username-input"
                        label="Username"
                        value={username}
                        onInput={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
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
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="button"
                    >
                        Submit
                    </Button>
                    <Typography variant="caption" gutterBottom class="redirect-text">
                        Already have an account? <Link href="login">Login</Link> instead.
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
