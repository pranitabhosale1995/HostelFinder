import React, { Component } from "react";


export default class ErrorView extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="w3-content w3-container w3-center">
        <div className="w3-section">
          <h2>Error 404</h2>

          <i icon="error_outline" size="48" xclass="w3-text-red" />

          <div className="w3-section">
            <div className="w3-medium">
              It looks like we hit a snag <br /> <b>{location.pathname}</b>
            </div>
          </div>

          <div className="w3-section">
            <btn to="/" xclass=" w3-black w3-icon">
              <MatIcon size="20" icon="arrow_back" xclass="w3-margin-right" />Dashboard
            </btn>
          </div>

        </div>
      </div>

    );
  }
}
