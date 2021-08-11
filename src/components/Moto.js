import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";


export default function Moto() {
  return (
      <Box sx={{ width: "100%" }} >
        <Grid container rowSpacing={3} columnSpacing={6} padding={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="primary"theme={theme}>
                <Box sx={{ textAlign: "center", m: 1 }}>"INTEGRETY,</Box>    
            </Typography>
            <Grid item xs={12}>
            <Typography variant="h2" color="primary"theme={theme}>
                <Box sx={{ textAlign: "center", m: 1 }}>The Choice Between</Box>    
                <Box sx={{ textAlign: "center", m: 1 }}>what's Convenient and What's Right"</Box>   
                <Box sx={{ textAlign: "center", m: 1 }}>-Tony Dungy, Uncommon"</Box>    
            </Typography>
          </Grid>
          </Grid>
        </Grid>
      </Box>
        );
    }