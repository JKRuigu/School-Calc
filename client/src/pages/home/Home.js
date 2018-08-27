import React, { Component } from 'react';
import '../../css/style.css';
import { Grid,Typography,Paper } from '@material-ui/core';
import { MenuIcon,AccountCircle,DraftsIcon,NotificationsIcon,LockIcon,AutorenewIcon,HomeIcon } from '../../components/Icons';

class Home extends Component {
  
  
  render() {
    const items = [
      'MenuIcon','AccountCircle','DraftsIcon','NotificationsIcon','LockIcon','AutorenewIcon','HomeIcon','AutorenewIcon'
    ]

    return (
      <Grid container style={{textAlign: 'center',padding:80}}>
        {
          items.map((item,i) =>{
           return <Grid item md={3} xs={6}  key={`items-${i}`} style={{padding:5}}>
              <Paper style={{padding:25,height:80}}>
                {
                  item === 'MenuIcon' ? <MenuIcon style={{fontSize:60}} /> :
                  item === 'AccountCircle' ? <AccountCircle  style={{fontSize:60}}/> : 
                  item === 'DraftsIcon' ? <DraftsIcon style={{fontSize:60}} /> :
                  item === 'NotificationsIcon' ? <NotificationsIcon style={{fontSize:60}}/> :
                  item === 'LockIcon' ? <LockIcon style={{fontSize:60}}/> :
                  item === 'AutorenewIcon' ? <AutorenewIcon style={{fontSize:60}}/> :
                  item === 'HomeIcon' ? <HomeIcon style={{fontSize:60}}/> :
                  <NotificationsIcon style={{fontSize:60}} />
                } 
                <Typography>{item}</Typography>
              </Paper>
            </Grid>           
          })
        }     
      </Grid>
    );
  }
}

export default Home;
