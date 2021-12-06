import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Auth from "../utils/auth";

// hero cinegraph
// description
// call to action

const Home = () => {
    return (
        <Box>
            <Box className="jumbotron">
                <Typography variant="h1" align="center">Cinegraph</Typography>
            </Box>
            <Container className="description">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h5" align="center" className='description-header'>
                            Visualize Cinema Data
                        </Typography>
                        <Typography variant="body1" align="center" className='description-content'>
                            Satisfy your curiosity by searching and saving relational film data which you can quickly see plotted in comparison to other films. See how box office and budget trend together. 
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" align="center"className='description-header'>
                            More details
                        </Typography>
                        <Typography variant="body1" align="center" className='description-content'>
                            more details
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" align="center"className='description-header'>
                            Adaptation Potential
                        </Typography>
                        <Typography variant="body1" align="center" className='description-content'>
                            Cinegraph is a proof of concept showing that we could work with large datasets and visually display them. With minor adjustments, this application can be applied to work with any large dataset as a visaulization and analysis tool. 
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container className="call-to-action">
                {!Auth.loggedIn()
                    ? <Typography variant="h4" align="center">
                        Please log in or sign up to access our full functionality.
                      </Typography>
                    : <Typography variant="h4" align="center">
                        You are logged in! Use the navigation links above to
                        view your dashboard!
                      </Typography>
                }
                
            </Container>
        </Box>
    );
};

export default Home;
