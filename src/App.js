import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import ImageUL from "./components/ImageUL";
import AppTitle from "./components/AppTitle";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  componentDidMount() {
    this.doSearch();
  }

  doSearch = (query = "cats+dogs+computers") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ images: responseData.data, loading: false });
      })
      .catch(error => {
        console.log("Hey... something didnt work!", error);
      });
  };

  render() {
    let allHail = "Hail Thunar!";
    console.log(this.state.images);

    return (
      <div className="container">
        <BrowserRouter>
          {/* App Title */}
          <AppTitle title="React Photo Gallery App" />
          <Route
            path="/title"
            render={() => <AppTitle title="React Photo Gallery App" />}
          />

          {/* Search component */}
          <SearchForm onSearch={this.doSearch} />

          {/* Nav component */}
          <NavBar onSearch={this.doSearch} />

          {/* Photo Component */}
          <div className="photo-container">
            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <ImageUL data={this.state.images} />
            )}
          </div>

          <p>{allHail}</p>
        </BrowserRouter>
      </div>
    );
  }
}
