import React from "react";
import Auth from "../utils/auth";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";



function Navbar() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Box sx={{ width: '100%', p: '20px' }}>

                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                    <Link to="/" onClick={() => Auth.logout()}>
                        Log Out
                    </Link>

                </Box>
            );
        } else {
            return (
                <Box sx={{ width: '100%', p: '20px' }}>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/login">
                        Log In
                    </Link>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </Box>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Navbar;