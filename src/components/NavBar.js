import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import Trump from "./search/Trump";
import Cows from "./search/Cows";
import Dogs from "./search/Dogs";
import Cats from "./search/Cats";

class NavBar extends Component {
  state = {
    searchText: ""
  };

  handleSubmit = e => {
    let sSearchText = e.target.innerText;
    // this.setState({ searchText: sSearchText });
    this.setState({ searchText: e.target.innerText });
    if (this.searchText === null || this.searchText === undefined) {
      // sSearchText = e.target.innerText;
      // sometimes it needs a second chance
      //  this.state.searchText = sSearchText;
      this.setState({ searchText: e.target.innerText });
    }
    console.log("Search: " + this.state.searchText);
    this.props.onSearch(this.state.searchText);
    // this.setState({ searchText: "" });
  };

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/search/Cows" onClick={this.handleSubmit}>
              Cows
            </Link>
          </li>
          <li>
            <Link to="/search/Dogs" onClick={this.handleSubmit}>
              Dogs
            </Link>
          </li>
          <li>
            <Link to="/search/Cats" onClick={this.handleSubmit}>
              Cats
            </Link>
          </li>
          <li>
            <Link to="/search/Trump" onClick={this.handleSubmit}>
              Trump
            </Link>
          </li>
        </ul>
        {/* <Route exact path="/Cows" component={Cows} /> */}
        {/* <Route exact path="/Dogs" component={Dogs} /> */}
        {/* <Route exact path="/Cats" component={Cats} /> */}
        {/* <Route exact path="/Trump" component={Trump} /> */}
      </nav>
    );
  }
}
export default NavBar;
