import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
                        <Typography variant="h5" align="center">
                            explaination
                        </Typography>
                        <Typography variant="body1" align="center">
                            explaination details
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" align="center">
                            of
                        </Typography>
                        <Typography variant="body1" align="center">
                            more details
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" align="center">
                            application
                        </Typography>
                        <Typography variant="body1" align="center">
                            even more details
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container className="call-to-action">
                <Typography variant="body1" gutterbottom>
                    you should log in (or sign up) to access full features
                </Typography>
            </Container>
        </Box>
    );
};

export default Home;
