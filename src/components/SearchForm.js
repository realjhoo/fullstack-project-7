import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import searchIcon from "../search.svg";

class SearchForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let query = this.query.value;
    let path = `/search/${query}`;
    this.props.history.push(path);
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={this.onSearchChange}
            name="search"
            placeholder="Search"
            required
            ref={input => {
              this.query = input;
            }}
          />
          <button type="submit" className="search-button">
            <img src={searchIcon} alt="Search Icon" />
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(SearchForm);
