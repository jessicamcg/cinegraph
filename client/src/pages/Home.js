import "../App.css";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Auth from "../utils/auth";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const Home = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#FFFFFF",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box className="jumbotron hero">
                    <Container>
                    <Typography variant="h1" align="center" color="primary" className="hero-text">
                        Cinegraph
                    </Typography>
                    </Container>
                </Box>
                <Container className="description">
                    <Grid container spacing={4}>
                        <Grid item xs={4}>
                            <Card sx={{ minHeight: 155 }}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    className="description-header"
                                >
                                    Visualize Cinema Data
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    className="description-content"
                                >
                                    Satisfy your curiosity by searching and
                                    saving relational film data which you can
                                    quickly see plotted in comparison to other
                                    films. See how box office returns and
                                    RottenTomatoes review score trend together.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ minHeight: 155 }}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    className="description-header"
                                >
                                    Expansion Potential
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    className="description-content"
                                >
                                    We will be expanding functionality in the
                                    near future to allow a wider change of user
                                    choice. The user will be able to choose
                                    which data metrics to track and how to
                                    display them visually.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ minHeight: 155 }}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    className="description-header"
                                >
                                    Endless Use-cases
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    className="description-content"
                                >
                                    Cinegraph is a proof of concept showing that
                                    we could work with large datasets and
                                    visually display them. With minor
                                    adjustments, this application can be applied
                                    to work with any large dataset as a
                                    visaulization and analysis tool.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Container className="call-to-action">
                    {!Auth.loggedIn() ? (
                        <Typography variant="h4" align="center">
                            Please log in or sign up to access our full
                            functionality.
                        </Typography>
                    ) : (
                        <Typography variant="h4" align="center">
                            You are logged in! Use the navigation links above to
                            view your dashboard!
                        </Typography>
                    )}
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Home;
