import React, { Component } from "react";

//M-UI
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';



class SignUpForm extends Component {
  state = {
    activeStep: 0
  }

  render() {

    const { classes } = this.props;
    return (

      <div className={classes.form}>
        <form action="javascript:" >
          <TextField
            label="Name"
            margin="normal"
            type="text"
            fullWidth
            required
          />

          <TextField
            label="Email Address"
            margin="normal"
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Phone Number"
            type="text"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Address"
            type="text"
            margin="normal"
            fullWidth
            required
          />


          <div style={{ textAlign: `center` }}>
            <Fab type="submit" variant="extended" size="small" color="primary" style={{ minWidth: 150, color: `#fff`, marginTop: 48 }}>Sign Up</Fab>
          </div>
        </form>
      </div>

    );

  }
}

const styles = ((theme) => ({
  form: {
    padding: 8,
  },


}));

export default withStyles(styles)(SignUpForm);
