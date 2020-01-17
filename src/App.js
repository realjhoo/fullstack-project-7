import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import ImageUL from "./components/ImageUL";
import AppTitle from "./components/AppTitle";
import apiKey from "./components/config";
// import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    imageData: [],
    loading: true
  };

  componentDidMount() {
    this.doSearch();
  }

  doSearch = (query = "airplanes") => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    console.log("URL: " + url);
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ imageData: responseData.photos.photo, loading: false });
      })
      .catch(error => {
        console.log("Hey... something didnt work!", error);
      });
  };

  render() {
    let allHail = "Hail Thunar!";
    return (
      <BrowserRouter>
        <div className="container">
          <AppTitle title="React Photo Gallery App" />
          <SearchForm onSearch={this.doSearch} />
          <NavBar onSearch={this.doSearch} />
          <ImageUL data={this.state.imageData} />
        </div>
        <p>{allHail}</p>
      </BrowserRouter>
    );
  }
}

export default App;
