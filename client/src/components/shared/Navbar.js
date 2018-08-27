import React, { Component,Fragment } from 'react';
import { AppBar,Toolbar,IconButton ,Typography,Menu,MenuItem,ListItemIcon,ListItemText } from '@material-ui/core';
import { MenuIcon,AccountCircle,NotificationsIcon,LockIcon,HomeIcon,AutorenewIcon } from '../Icons'

class Navbar extends Component {  
  constructor(props){
    super(props);
    this.state = {
      show:null
    }
  }

  handleClick = e => {    
    this.setState({ show: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ show: null });
  };

  render() {
    const {show} = this.state
    return (
      <Fragment>
        <AppBar position="static">
        <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
            <HomeIcon />            
        </IconButton>            
        <Typography variant="title" color="inherit" style={{flex:1}}>
          Home
        </Typography>
        <AutorenewIcon style={{FontSize:20,padding:10}} />
         <IconButton color="inherit" aria-label="Menu">
            <MenuIcon 
              aria-owns={show ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}            
            />            
          </IconButton>          
          <Menu
            id="simple-menu"
            anchorEl={show}
            open={Boolean(show)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Task" />
            </MenuItem> 
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText inset primary="My Account" />
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText inset primary="Log Out" />
            </MenuItem>           
          </Menu>
        </Toolbar>
      </AppBar>
      </Fragment>
    );
  }
}

export default Navbar;
