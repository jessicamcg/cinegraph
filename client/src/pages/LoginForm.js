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
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/login-signup.css";

export default function LoginForm() {
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { error }] = useMutation(LOGIN);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: email, password: password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
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
                    <Typography variant="h3" component="div">
                        Log In
                    </Typography>
                    <TextField
                        required
                        id="outlined-required"
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

                    {error ? (
                        <Typography variant="body1" gutterBottom>
                            Incorrect credentials
                        </Typography>
                    ) : null}
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        className="button"
                    >
                        Submit
                    </Button>
                    <Typography variant="caption" gutterBottom class="redirect-text">
                        Don't have an account? <Link href="signup">Signup</Link> instead.
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
