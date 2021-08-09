import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';





const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const Quote =  `As architectural designers and problem-solvers we achieve better solutions by first better understanding a project’s questions and issues.`;
const INFORM =  `INFORM`;
const Understanding =  `Understanding the Site`;
const Project  =  `Each project inherently comes with a different set of conditions and challenges. Therefore, our design approach involves a unique process aimed at finding the best possible solutions and communicating effectively with our client. No two sites are the same, so every Brandon Architects home is entirely custom from start to finish.`;
const InDepth =  `IN-DEPTH SITE ANALYSIS`;
const MoreINFORM =  `We evaluate the project’s unique demands and potential problems. This includes everything from the site’s topography, environmental conditions, social impact, and many other significant factors. We conduct multiple site visits to get a deep understanding of the lot and its views for the consideration of setbacks, easements, and sun angles. We also will take into consideration neighborhood context and privacy concerns.`;
const STUDYING =  `STUDYING SITE CONTEXT`;


function GridLayout() {
    
        return (
            <div style={{  flexGrow: 1, backgroundColor: 'white',}}>
                <br/>
                <Grid container spacing={4} >
                    <Grid item xs={12}>
                    <img  alt="Error" src="images/boarder2.jpg"   width="100%"  />
                    </Grid>
                    <Grid item xs={12} >
                            <Grid container wrap="nowrap"  justify="center" spacing={5}>
                                <Grid item sm={9}>
                                <Typography variant="h4"  component="h4">{Quote}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container wrap="nowrap"  justify="center" spacing={5} >
                                <Grid item sm={9}>
                                <Typography variant="h3">{INFORM}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container wrap="nowrap"  justify="center" spacing={5} >
                                <Grid item sm={9}>
                                <Typography variant="h5">{Understanding}</Typography>
                                </Grid>
                            </Grid>
                    </Grid>                    
                    <Grid item xs={12}>
                        <Paper >
                            <Grid container wrap="nowrap" spacing={3} justify="center" spacing={10} >
                                <Grid item xs={5}>
                                <Typography>{message}</Typography>
                                </Grid>
                                <Grid item >
                                <img alt="Error" src="images/img-2.jpg" width="600" />
                                </Grid>                                
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}  >
                        <Paper >
                            <Grid container wrap="nowrap" spacing={2} justify="center" spacing={10} >
                                <Grid item >
                                <img alt="Error" src="images/img-2.jpg" width="600" />
                                </Grid>
                                <Grid item xs={5}>
                                <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
export default GridLayout;