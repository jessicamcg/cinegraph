import React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';




const Home = () => {
    return (
        <Box>
            <Typography variant='h3'>
                home page
            </Typography>
            <Typography variant='body1' gutterbottom>
                and explaination of application
            </Typography>
            <Typography variant='body1' gutterbottom>
                you should log in (or sign up) to access full features
            </Typography>
        </Box>
    )
};


export default Home;