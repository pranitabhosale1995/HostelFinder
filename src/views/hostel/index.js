import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//M-UI
import { withStyles } from '@material-ui/styles';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


//App
import MyToolbar from "appRoot/comps/MyToolbar";


class HostelView extends Component {
  state = {
    toLogin: false,
  }

  componentDidMount() {
    const isLoggedIn = window.localStorage.getItem("HOMELY_USER");
    this.setState({ toLogin: !isLoggedIn });
  }


  render() {
    const { classes, match: { params } } = this.props;
    const { toLogin } = this.state;
    console.log(params)

    if (toLogin === true) {
      return <Redirect to='/account' />
    }

    return (
      <div className={classes.root}>
        <MyToolbar title="Hostel" />

        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <img src="images/hostels/hostel1.jpg" style={{ height: 250, width: '100%' }} />
          <IconButton size="medium" aria-label="4 pending messages">
            <Badge badgeContent={`6`} color="primary">
              <AddAPhotoIcon />
            </Badge>
          </IconButton>
          <div style={{ margin: 16, textAlign: 'left' }}>

            <Typography variant="h5">Suyash Hostel</Typography>
            <Button size="small" color="primary" variant="contained" style={{ float: 'right' }}>Enquire</Button>
            <Typography variant="overline" color="textSecondary">Price</Typography>
            <Typography variant="subtitle1">70000/Year</Typography>
          </div>

          <Divider variant="middle" />
        </div>
      </div>
    );

  }
}


const styles = ((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 64
  },


}));


export default withStyles(styles)(HostelView);