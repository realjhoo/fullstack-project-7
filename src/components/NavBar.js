import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    searchText: ""
  };

  handleSubmit = e => {
    this.setState({ searchText: e.target.innerText });
    if (this.searchText == null) {
      this.state.searchText = e.target.innerText;
    }
    console.log(this.state.searchText);
    console.log(e.target.innerText);
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="#" onClick={this.handleSubmit}>
              Cows
            </Link>
          </li>
          <li>
            <Link to="#" onClick={this.handleSubmit}>
              Dogs
            </Link>
          </li>
          <li>
            <Link to="#" onClick={this.handleSubmit}>
              Birds
            </Link>
          </li>
          <li>
            <Link to="#">Testing Link</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
