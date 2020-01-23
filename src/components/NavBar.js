import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    searchText: ""
  };

  handleSubmit = e => {
    // The menu buttons require two clicks to sync. By manipulating
    // state directly, this error doesnt happen.
    let sSearchText = e.target.innerText;
    this.setState({ searchText: e.target.innerText });
    if (this.searchText === null || this.searchText === undefined) {
      this.state.searchText = sSearchText;
    }
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/search/puppies" onClick={this.handleSubmit}>
              Puppies
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/kittens" onClick={this.handleSubmit}>
              Kittens
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/ponies" onClick={this.handleSubmit}>
              Ponies
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/helicopters" onClick={this.handleSubmit}>
              Helicopters
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;
