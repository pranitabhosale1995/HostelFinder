import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

//M-UI
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

//-> App



class MyToolbar extends Component {
  state = {
    anchorEl: null
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleSignOut = () => {
    window.localStorage.removeItem("HOMELY_USER");
    window.localStorage.clear();
    location.reload();
  }

  handleBack = () => {
    try {
      history.go(-1);
    } catch (error) {
      console.log(error);
    }
    try {
      navigator.app.backHistory();
    } catch (error) { }
  }

  render() {
    const { classes, title, back = false, menu = true } = this.props;
    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar color="default">
            {
              back
                ?
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
                :
                null
            }

            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>

            {
              menu
                ?
                <Fragment>
                  <IconButton
                    aria-label="Account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    className={classes.menuButtonRight}
                  >
                    <AccountCircle />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem component={Link} to='/account' >Account</MenuItem>
                    <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
                  </Menu>
                </Fragment>
                :
                null
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: `#fff`
  },
  menuButtonRight: {
    marginRight: theme.spacing(-1),
    color: `#fff`
  },
  title: {
    flexGrow: 1,
    color: `#fff`
  },

}));

export default withRouter(withStyles(styles)(MyToolbar));
