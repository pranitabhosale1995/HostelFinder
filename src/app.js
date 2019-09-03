import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";


//---> MUI
import CssBaseline from '@material-ui/core/CssBaseline';

//---> App
//Views
import HomeView from "appRoot/views/home";
import AccountView from "appRoot/views/account";
import ShortlistView from "appRoot/views/shortlist";
import HostelView from "appRoot/views/hostel";
import ErrorView from "appRoot/views/error";

//Tags
import ScreenTag from "appRoot/Tags/ScreenTag";


class App extends Component {

  state = {
    showScreen: false
  }

  onScreensComplete = () => {
    this.setState({ showScreen: false })
  }

  render() {
    const { showScreen } = this.state;

    return (
      <Fragment>
        <CssBaseline />

        {
          showScreen
            ?
            <ScreenTag onDone={this.onScreensComplete} />
            :
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/shortlist" component={ShortlistView} />
              <Route exact path="/hostel/:id" component={HostelView} />
              <Route exact path="/account" component={AccountView} />

              <Route type="404" component={ErrorView} />
            </Switch>
        }

      </Fragment>
    );
  }
};


export default App;
