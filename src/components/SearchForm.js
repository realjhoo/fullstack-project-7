import React, { Component } from "react";
import { withRouter } from "react-router";
import searchIcon from "../search.svg";

class SearchForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    this.props.onSearch(this.state.searchText);
    let query = this.query.value;
    let path = `/search/${query}`;
    // this.props.history.push(path);
    history.push(path);
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
          ref={input => {
            this.query = input;
          }}
        />
        <button type="submit" className="search-button">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
    );
  }
}
export default withRouter(SearchForm);
