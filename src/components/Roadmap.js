import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles';
import "typeface-cormorant";

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function Roadmap() {
        return (
            <section id="Roadmap">
            <Box sx={{ width: "100%" }} >
            <Grid container rowSpacing={3} columnSpacing={6} padding={2}>
                <Grid item xs={12}>
                <Typography variant="h2" color="primary"theme={theme}>
                    <Box sx={{ textAlign: "center", m: 1 }}>OUR PROCESS</Box>    
                </Typography>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <img alt="Error" src="images/Proposal.png"  />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Typography component="div"variant="h4"  color="primary">
                        <Box sx={{ textAlign: "center", m: 1 }}>
                        Proposal
                        </Box>
                    </Typography>
                    <Typography component="div" variant="h6">
                        <Box sx={{ textAlign: "left", m: 1 }}>
                        We will review your project and create a satisfactory proposal
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <img alt="Error" src="images/Preliminary.png"/>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Typography component="div" variant="h4" color="primary">
                        <Box sx={{ textAlign: "center", m: 1 }}>
                        Preliminary
                        </Box>
                        </Typography>
                        <Typography component="div" variant="h6">
                        <Box sx={{ textAlign: "left", m: 1 }} >
                        We will create plans that accurate display the work you want to
                        have done on your property. We will discuss with you every step
                        of the way to make sure it's perfect!
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}lg={3}>
                    <img alt="Error" src="images/Submittal.png" />
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Typography component="div" variant="h4" color="primary">
                        <Box sx={{ textAlign: "center", m: 1 }}>
                        Submittal
                        </Box>
                    </Typography>
                    <Typography component="div" variant="body1" variant="h6">
                        <Box sx={{ textAlign: "left", m: 1 }} >
                        We will submit the plans to the city, and get approval for the
                        work done for your project.
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                <img alt="Error" src="images/Approval.png"/>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Typography component="div" variant="h4"color="primary">
                    <Box sx={{ textAlign: "center", m: 1 }}>
                    Approval
                    </Box>
                    </Typography>
                    <Typography component="div" variant="h6">
                    <Box sx={{ textAlign: "left", m: 1 }}>
                    Once the city approves of your project, we can help you pull
                    final permits and clearances necessary for your project.
                    </Box>
                </Typography>
                </Grid>
            </Grid>
            </Box>
            </section>
        );
    }