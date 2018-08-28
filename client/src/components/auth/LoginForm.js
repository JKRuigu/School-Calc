import React, {Component,Fragment } from 'react';
import { TextField,FormControl,Button } from '@material-ui/core';


class LoginForm extends Component {
    constructor(props){
         super(props);
         this.state = {
             data:{}
         }
     }
  
    submit = (e)=> {
      e.preventDefault();
      console.log(this.state.data);
    };
  
    handleChange  = (e)=> {
      this.setState({ data : { ...this.state.data, [e.target.name]: e.target.value } });
    };
  
  render(){
      return(
        <Fragment>
            <form autoComplete='off' style={{margin:'auto'}} onSubmit={this.submit}>
                <FormControl fullWidth margin='dense' required>
                    <TextField 
                        name='username'
                        label='Username'
                        autoComplete='off'
                        autoFocus
                        onChange={this.handleChange}
                    />
                </FormControl>
                <FormControl fullWidth margin='dense' required>
                    <TextField                     
                        name='password'
                        label='Password'
                        autoComplete='false'                      
                        type='password'
                        onChange={this.handleChange}
                    />
                </FormControl>
                <FormControl fullWidth margin='dense'>
                    <Button variant='contained' color='primary' type='submit'>
                        Log in
                    </Button>
                </FormControl>                  
            </form>
        </Fragment>       
       )
    }
}

export default LoginForm;