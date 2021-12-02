import React from "react";
import Auth from "../utils/auth";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <Box sx={{ width: '100%' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                            <Link to="/">
                                Home
                            </Link>
                            <LinkTab label="Logout" href="/" onClick={() => Auth.logout()}/>
                        </Tabs>
                </Box>
            );
        } else {
            return (
                <Box sx={{ width: '100%', p:'20px' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/login">
                            Log In
                        </Link>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </Tabs>
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