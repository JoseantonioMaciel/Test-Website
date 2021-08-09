import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Skeleton from '@material-ui/core/Skeleton';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter1';
import Divider from '@material-ui/core/Divider';






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
            <div>
                 {/** This is step one  */}
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    <Grid item >
                    <Skeleton variant="text" width={1120} height={10} />    
                    <br/>    
                    <Skeleton variant="text" width={700} height={50} />
                    <br/>
                    <Skeleton variant="text" width={700} height={50} />
                    <br/>
                    <Typography variant="h3" color="text.secondary">
                    Initiating a Project
                    </Typography>
                    <Divider />
                    <br/>
                    </Grid>
                </Grid>    
            <br/>                        
                {/** This is step one  */}
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter1Icon/>
                            </Avatar>
                        }
                        title="Project Scope "
                        
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Go Over Scope Of Work,
                            Look At The Property, 
                            Create A Proposal, 
                            </Typography>
                        </CardContent>
                    </Card>
                    
                </Grid>    
                <br/> 
                {/** This is step two  */}
                
               
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    <Grid item >
                
                    <Typography variant="h3" color="text.secondary">
                            Preliminary Process 
                    </Typography>
                    <Divider width={1120}/>
                    <br/>
                    </Grid>
                </Grid>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter1Icon/>
                            </Avatar>
                        }
                        title="as-builts"
                        
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>
                </Grid>   
                <br/>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter2Icon/>
                            </Avatar>
                        }
                        title=" preliminary plans"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                    
                </Grid>   
                <br/>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    <Grid item >
                
                    <Typography variant="h3" color="text.secondary">
                        Construction Sets
                    </Typography>
                    <Divider width={1120}/>
                    <br/>
                    </Grid>
                </Grid>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter1Icon/>
                            </Avatar>
                        }
                        title="Architectural and Title 24"
                        
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>
                </Grid>   
                <br/>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter2Icon/>
                            </Avatar>
                        }
                        title="Structural"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                    
                </Grid>   
                <br/>   
                <br/> 
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    <Grid item >
                
                    <Typography variant="h3" color="text.secondary">
                            Approval Process
                    </Typography>
                    <Divider width={1120}/>
                    <br/>
                    </Grid>
                </Grid>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                    
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter1Icon/>
                            </Avatar>
                        }
                        title="Submittal Process "
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>
                </Grid>   
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>  
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter1Icon/>
                            </Avatar>
                        }
                        title="Clearances"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <br/> 
                <br/>
                <Grid container wrap="nowrap" justifyContent="space-evenly" > 
                
                    <Card sx={{maxWidth:400,m:2}}>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <Filter1Icon/>
                            </Avatar>
                        }
                        title="Permits"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Words Words Words Words Words Words Words Words Words Words  
                            </Typography>
                        </CardContent>
                    </Card>
                    <Grid item >
                    <Skeleton variant="rectangular" width={500} height={300} />
                    </Grid>  
                </Grid>
                <br/> 
                <br/>
                <Grid>
                <Grid item xs={12}>
                <img alt="Error" src="images/boarder2.jpg"  width="1500"  />
                </Grid>
            </Grid>
            </div>
        );
    }
export default GridLayout;

