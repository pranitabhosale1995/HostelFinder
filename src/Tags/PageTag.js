import React, { Component, Fragment } from "react";



//-> App

//-> LoginForm
import AccountFormTag from "./AccountFormTag";


class PageTag extends Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.checkStatus();
    }, 300);

    this.checkStatus();
  }

  checkStatus = () => {
    const isLoggedIn = window.localStorage.getItem("HOMELY_USER");
    if (isLoggedIn) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  render() {
    const { checkAuth = true, children } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <Fragment>
        {
          checkAuth && !isLoggedIn
            ?
            <AccountFormTag />
            :
            <Fragment>{children}</Fragment>

        }
      </Fragment>
    );
  }
}

export default PageTag;
