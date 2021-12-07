import React from "react";
import Auth from "../utils/auth";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar"
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function Navbar() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#4caf50"
            },
            secondary: {
                main: "#77d4d8",
            },
            info: {
                main: "#000000"
            }
        }
    })

    function showNavigation() {
        return Auth.loggedIn() ? (
            <>
                <Button href="dashboard" color="info">
                    Dashboard
                </Button>
                <Button
                    href="/"
                    color="info"
                    onClick={() => Auth.logout()}
                >
                    Log Out
                </Button>
            </>
        ) : (
            <Button href="login" color="info">
                Log In
            </Button>
        );
    }

    return (
        <ThemeProvider theme={theme}>
        <AppBar className="navbar" position="fixed" color="primary">
            <Toolbar variant="dense">
            <Button href="/" color="info">
                Home
            </Button>
            {showNavigation()}
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    );
}
export default Navbar;
