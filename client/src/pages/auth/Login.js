import React, { Fragment } from 'react';
import { Grid,Card,CardContent,Avatar } from '@material-ui/core';
import { AccountCircle } from '../../components/Icons';
import Form from '../../components/auth/LoginForm'

export default () =>(
    <Fragment>
      <Grid 
        container          
        direction='column'
        justify='center'
        alignItems='center'
        >
        <Card style={{justify:'center', alignItems:'center',width:300,padding:20}}>
          <Avatar style={{height:80,width:80,justify:'center', alignItems:'center',margin:'auto'}}>
            <AccountCircle style={{fontSize:80,padding:20,margin:30,height:50}}  fontSize='inherit'/>
          </Avatar>
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Grid> 
    </Fragment>       
);
