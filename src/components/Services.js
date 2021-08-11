import * as React from "react";
import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
    }));

    export default function services() {
    return (
        <Container maxWidth="xl">
            <Typography component="div" variant="h4" color="primary" >
                <Box sx={{ textAlign: "center", m: 4 }}>Services</Box>
            </Typography>

        <Box sx={{ width: "100%" }}>
        <Card >
        <CardMedia
        component="img"
        width= "100%"
        image="images/ServicesH.jpg"
        />
        </Card>
        </Box>

        <Box sx={{ width: "100%" }} >
            <Grid container justifyContent="space-evenly" rowSpacing={1} >
                <Grid item xs={12} md={6} lg={2}>
                    <CardMedia>
                    <img alt="Error" src="images/KitchenRemodel.png" width="100" />
                    </CardMedia> 
                    <CardContent>
                        <Typography variant="caption"  color="text.secondary" >
                        Kitchen Remodel
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                    <CardMedia>
                    <img alt="Error" src="images/FR.png" width="100" />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="caption" color="text.secondary">
                        Fire Damage Repair 
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                    <CardMedia>
                        <img alt="Error" src="images/ADU.png" width="100" />
                    </CardMedia>
                    <CardContent>
                            <Typography variant="caption"  color="text.secondary">
                            Accessory Dwelling Unit (ADU) 
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                    <CardMedia>
                        <img alt="Error" src="images/ADU.png" width="100" />
                    </CardMedia>
                    <CardContent>
                            <Typography variant="caption" color="text.secondary">
                            Jr. Accessory Dwelling Unit (JADU)
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                <CardMedia>
                        <img alt="Error" src="images/RA.png" width="100" />
                    </CardMedia>
                    <CardContent maxWidth="sm">
                            <Typography variant="caption" color="text.secondary">
                            Room Addition
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                <CardMedia>
                        <img alt="Error" src="images/NH.png" width="100" />
                    </CardMedia>
                    <CardContent maxWidth="sm">
                        
                            <Typography variant="caption"  color="text.secondary">
                            New Home
                            </Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}> 
                <CardMedia>
                        <img alt="Error" src="images/CTI.png" width="100" />
                    </CardMedia>
                    <CardContent maxWidth="sm">
                        
                            <Typography variant="caption"  color="text.secondary">
                            Commercial Tenant Improvement 
                            </Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                <CardMedia>
                        <img alt="Error" src="images/MR.png" width="100" />
                    </CardMedia>
                    <CardContent maxWidth="sm">
                        <Box width={250}>
                            <Typography variant="caption"  color="text.secondary">
                            Multifamily Remodel 
                            </Typography>
                        </Box>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                <CardMedia>
                        <img alt="Error" src="images/MD.png" width="100" />
                    </CardMedia>
                    <CardContent maxWidth="sm">
                        <Box width={250}>
                            <Typography variant="caption" color="text.secondary">
                            Multistory Duplex
                            </Typography>
                        </Box>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                <CardMedia>
                        <img alt="Error" src="images/AB.png" width="100" />
                    </CardMedia>
                    <CardContent maxWidth="sm">
                        <Box width={250}>
                            <Typography variant="caption" color="text.secondary">
                            As-Built  
                            </Typography>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Box>
        </Container>
    );
}
