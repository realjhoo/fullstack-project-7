import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import Trump from "./search/Trump";
// import Cows from "./search/Cows";
// import Dogs from "./search/Dogs";
// import Cats from "./search/Cats";

class NavBar extends Component {
  state = {
    searchText: ""
  };

  handleSubmit = e => {
    let sSearchText = e.target.innerText;
    this.setState({ searchText: e.target.innerText });
    if (this.searchText === null || this.searchText === undefined) {
      // the DOM renders before the value of searchText changes
      // by manupulating state directly, this delay doesnt happen
      // and errors are avoided
      this.state.searchText = sSearchText;
    }
    console.log("Search: " + this.state.searchText);
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/search/Cows" onClick={this.handleSubmit}>
              Cows
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/Dogs" onClick={this.handleSubmit}>
              Dogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/Cats" onClick={this.handleSubmit}>
              Cats
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/Trump" onClick={this.handleSubmit}>
              Trump
            </NavLink>
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
