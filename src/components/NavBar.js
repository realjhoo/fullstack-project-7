import React, { Component } from "react";

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
            {/* <a onClick={this.handleSubmit}>Cows</a> */}
            <a onClick={this.handleSubmit}>Cows</a>
          </li>
          <li>
            <a onClick={this.handleSubmit}>Dogs</a>
          </li>
          <li>
            <a onClick={this.handleSubmit}>Birds</a>
          </li>
        </ul>
      </nav>
    );
  }
}

// export default NavBar;

/*)      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          placeholder="Search"
          required
        />
        <button type="submit" className="search-button">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
    */
// const NavBar = () => (
//   <nav className="main-nav">
//     <ul>
//       <li>
//         <a href="http://api.giphy.com/v1/gifs/search?q=cats&limit=24&api_key=dc6zaTOxFJmzC">
//           Cats
//         </a>
//       </li>
//       <li>
//         <a href="#">Dogs</a>
//       </li>
//       <li>
//         <a href="#">Computers</a>
//       </li>
//     </ul>
//   </nav>
// );
