import React, { Component, Fragment } from "react";

//M-UI
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';


class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    showLoader: false,
    showError: false
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    setTimeout(() => {
      if (email === 'demo@gmail.com' && password === 'demo1234') {
        console.log('ok');
        window.localStorage.setItem("HOMELY_USER", 'USER_TOKEN_123XYZ');
        location.reload();
      } else {
        this.setState({ showError: true })
      }
      this.setState({ showLoader: false })
    }, 3000);

    this.setState({ showLoader: true });

  }

  render() {
    const { email, password, showLoader, showError } = this.state
    const { classes, onSignUp = () => { } } = this.props;
    return (

      <div className={classes.form}>
        {
          showLoader
            ?
            <div style={{ minHeight: 200, padding: 16, textAlign: 'center' }}>
              <CircularProgress />
            </div>
            :
            <Fragment>
              {
                showError
                &&
                <div style={{ color: `red`, fontSize: 11, marginBottom: 16 }}>
                  Invalid Username / Password
                </div>
              }

              <form action="javascript:" onSubmit={this.handleSubmit}>
                <TextField
                  id="standard-email"
                  label="Email Address"
                  margin="normal"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  fullWidth
                  required
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  autoComplete="current-password"
                  margin="normal"
                  fullWidth
                  required
                />
                <div style={{ textAlign: 'right' }}>
                  <Button size="small" style={{ fontSize: 10 }}>Forgot your Password?</Button>
                </div>


                <div style={{ textAlign: `center` }}>
                  <Fab type="submit" variant="extended" size="small" color="primary" style={{ minWidth: 150, color: `#fff`, marginTop: 48 }}>Sign In</Fab>
                </div>

              </form>

              <div style={{ padding: `32px` }}>
                <Typography variant="caption" display="block">Dont have an account?</Typography>
                <Button size="small" color="primary" onClick={onSignUp}>Sign Up</Button>
              </div>

            </Fragment>
        }

      </div>

    );

  }
}

const styles = ((theme) => ({
  form: {
    padding: 8,
  },


}));

export default withStyles(styles)(SignInForm);
