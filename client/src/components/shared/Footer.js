import React, { Component } from 'react';
import { Grid,Typography } from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
        <Typography>
         Footer Says hello
        </Typography>
      </Grid>
    );
  }
}

export default Footer;
