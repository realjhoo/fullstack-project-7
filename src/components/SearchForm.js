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
    if (query === null || query === undefined) {
      query = "";
    }

    let path = `/search/${query}`;
    history.push(path);
    e.currentTarget.reset();
  };

  render() {
    let search_feedback = this.state.searchText;
    if (search_feedback) {
      search_feedback = `Current search: ${this.state.searchText}`;
    }

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
        <p>{search_feedback}</p>
      </div>
    );
  }
}
export default withRouter(SearchForm);
