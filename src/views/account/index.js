import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


//M-UI
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/AccountBoxOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//App
import MyToolbar from "appRoot/comps/MyToolbar";
import AccountTag from "appRoot/Tags/AccountTag";


class AccountView extends Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    const isLoggedIn = window.localStorage.getItem("HOMELY_USER");
    this.setState({ isLoggedIn: !!isLoggedIn })
  }

  handleSignOut = () => {
    if (this.state.isLoggedIn) {
      window.localStorage.removeItem("HOMELY_USER");
      window.localStorage.clear();
      this.setState({ isLoggedIn: false });
      location.reload();
    }
  }


  render() {
    const { classes } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <Fragment>
        {
          isLoggedIn
            ?
            <Fragment>
              <MyToolbar menu={false} title="Account" />

              <div className={classes.root}>
                <Grid container justify="center" alignItems="center">
                  <Avatar className={classes.avatar} style={{ padding: 32 }}>
                    <FolderIcon style={{ fontSize: 32 }} />
                  </Avatar>
                </Grid>

                <Typography variant="h5" gutterBottom>demo@gmail.com</Typography>
                <br />
                <Button component={Link} to='/' variant="contained" size="large" color="primary" style={{ marginRight: 16 }}>Home</Button>
                <Button variant="contained" size="large" color="secondary" onClick={this.handleSignOut}>Sign Out</Button>
              </div>

            </Fragment>
            :
            <AccountTag />

        }
      </Fragment>
    );

  }
}

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 48,
    textAlign: `center`
  },
  avatar: {
    margin: 10,
    background: 'orange'
  }

}));

export default withStyles(styles)(AccountView);
