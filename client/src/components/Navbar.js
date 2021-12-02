import React from "react";
import Auth from "../utils/auth";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar"

function Navbar() {
    function showNavigation() {
        return Auth.loggedIn() ? (
            <>
                <Button href="dashboard" color="warning" fulldWidth="false">
                    Dashboard
                </Button>
                <Button
                    href="/"
                    color="warning"
                    fulldWidth="false"
                    onClick={() => Auth.logout()}
                >
                    Log Out
                </Button>
            </>
        ) : (
            <Button href="login" color="warning" fulldWidth="false">
                Log In
            </Button>
        );
    }

    return (
        <AppBar className="navbar" position="fixed">
            <Toolbar variant="dense">
            <Button href="/" color="warning" fulldWidth="false">
                Home
            </Button>
            {showNavigation()}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
