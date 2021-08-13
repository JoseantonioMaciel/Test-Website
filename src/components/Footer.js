import React from 'react';
import './Footer.css';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Container } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
  return (
    <section id="Contact">
    <Container maxWidth="xl">
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Card  sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <BusinessIcon/>
                }
                title={
                  <Typography variant="body1"  color="text.secondary" >
                  Address
                  </Typography>
                }
                subheader={
                <Typography variant="body1" wrapped color="text.secondary" >
                12950 Paramount Blvd Ste. 201, Downey, CA 90242
                </Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <QueryBuilderIcon/>
                }
                title={
                  <Typography variant="body1"  color="text.secondary" >
                  Business Hours
                  </Typography>
                }
                subheader={
                <Typography variant="body1" wrapped color="text.secondary" >
                Monday - Friday 8am to 5pm
                </Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <CallIcon/>
                }
                title={
                  <Typography variant="body1"  color="text.secondary" >
                  Call Us
                  </Typography>
                }
                subheader={
                <Typography variant="body1" wrapped color="text.secondary" >
                (714) 853-3957
                </Typography>
                }
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <EmailIcon/>
                }
                title={
                  <Typography variant="body1"  color="text.secondary" >
                  Email Us
                  </Typography>
                }
                subheader={
                <Typography variant="body1" wrapped color="text.secondary" >
                team@ultimatedraftingpro.com
                </Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>


      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-end">
          <Button> </Button>
            
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>

    </Container>
    </section>
  );
}

export default Footer;