import React, { Component } from "react";

//M-UI
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//Forms
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class AccountTag extends Component {
  state = {
    activeForm: 'signin'
  }

  render() {
    const { activeForm } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <div className={classes.topBox}>
          <Typography variant="h6" display="block">Fill in your Details</Typography>
          <img src="app-icon.png" className={classes.boxImg} />
        </div>

        <div style={{ padding: `4px 32px` }}>

          <Button size="small" color={activeForm === 'signin' ? 'primary' : 'default'} onClick={() => {
            this.setState({ activeForm: 'signin' })
          }}>Sign In</Button>

          <Button size="small" color={activeForm === 'signup' ? 'primary' : 'default'} className={classes.rightBtn} onClick={() => {
            this.setState({ activeForm: 'signup' })
          }}>Sign Up</Button>

        </div>

        <div className={classes.formWrap}>
          {
            activeForm === 'signin' && <SignInForm onSignUp={() => {
              this.setState({ activeForm: 'signup' })
            }} />
          }

          {
            activeForm === 'signup' && <SignUpForm />
          }

        </div>

        <div className={classes.socialBar}>
          <Button>
            <img src="images/social/fb.png" height="24px" />
          </Button>
          <Button>
            <img src="images/social/twitter.png" height="24px" />
          </Button>
          <Button>
            <img src="images/social/google.png" height="24px" />
          </Button>
        </div>

      </div>

    );

  }
}

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    margin: `0 auto`
  },
  topBox: {
    width: `100%`,
    minHeight: 200,
    background: `linear-gradient(45deg, #ff9800 40%, #ff6d00 60%)`,
    textAlign: `center`,
    padding: 16,
    color: `#fff`,
    borderBottomLeftRadius: `50%`,
    borderBottomRightRadius: `50%`
  },
  boxImg: {
    marginTop: '4em',
    marginBottom: '1em',
    maxWidth: '100%',
    height: 64
  },
  rightBtn: {
    float: `right`
  },
  formWrap: {
    margin: 16,
    padding: `4px 12px`,
    textAlign: `center`
  },
  socialBar: {
    display: `flex`,
    flexFlow: `row nowrap`,
    justifyContent: `space-around`,
    padding: 16

  }


}));

export default withStyles(styles)(AccountTag);
