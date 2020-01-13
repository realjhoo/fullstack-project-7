import React, { Component } from "react";
import searchIcon from "../search.svg";

export default class SearchForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
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
    );
  }
}
