import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from "react-scroll";





export default function Navbar() {
  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesup = useMediaQuery(theme.breakpoints.up('sm'));
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ }} >
        <Toolbar>
        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Box display={ matches ? 'block ':'none' }>
          {/*Menu*/}
          <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                    < MenuIcon/>  
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}><Link to="/"smooth={true} duration={1000}>HOME</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="Roadmap"smooth={true} duration={1000}>PROCESS</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="services"smooth={true} duration={1000}>SERVICES</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="Contact"smooth={true} duration={1000}>CONTACT</Link></MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
          {/*End*/}
          </Box>
          
          </IconButton>
          <Typography variant="h6"  sx={{ flexGrow: 1,  }}>
          Ultimate Drafting Services
          </Typography>
          <Box 
          display={ matches ? 'none':'block' }   >
            <Button color="inherit" ><Link to="/"smooth={true} duration={1000}>Home</Link></Button>
            <Button color="inherit" ><Link to="Roadmap"smooth={true} duration={1000}>Gallery</Link></Button>
            <Button color="inherit" ><Link to="services"smooth={true} duration={1000}>Services</Link></Button>
            <Button color="inherit" ><Link to="Contact"smooth={true} duration={1000}>Contact</Link></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}