import React, { Component } from "react";

//M-UI
import { withStyles } from '@material-ui/styles';

//App
import PageTag from "appRoot/comps/PageTag";
import MyToolbar from "appRoot/comps/MyToolbar";


const styles = ((theme) => ({
  root: {
    flexGrow: 1,
  },

}));


class HomeView extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PageTag checkAuth={true}>
          <MyToolbar title="Discover" />
        </PageTag>
      </div>
    );

  }
}

export default withStyles(styles)(HomeView);