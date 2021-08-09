import React from 'react';
import './Footer.css';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Skeleton from "@material-ui/core/Skeleton";
import { Container } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

function Footer() {
  return (
    <div className='footer-container'>
    <Container maxWidth="xl">
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
                title={
                  <Skeleton
                    animation="wave"
                    height={20}
                    width={90}
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={<Skeleton animation="wave" height={10} width={90} />}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
                title={
                  <Skeleton
                    animation="wave"
                    height={20}
                    width={90}
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={<Skeleton animation="wave" height={10} width={90} />}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
                title={
                  <Skeleton
                    animation="wave"
                    height={20}
                    width={90}
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={<Skeleton animation="wave" height={10} width={90} />}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardHeader
                avatar={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
                title={
                  <Skeleton
                    animation="wave"
                    height={20}
                    width={90}
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={<Skeleton animation="wave" height={10} width={90} />}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>


      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Tooltip title="Add" placement="left-end">
          <Button>something</Button>
            
          </Tooltip>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            
          </Grid>
        </Grid>
      </Grid>

    </Container>
    </div>
  );
}

export default Footer;