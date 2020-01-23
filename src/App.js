import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import ImageUL from "./components/ImageUL";
import AppTitle from "./components/AppTitle";
import apiKey from "./components/config";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [],
      loading: true
    };
  }

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

  render(props) {
    let allHail = "I built this";
    return (
      <BrowserRouter>
        <div className="container">
          <AppTitle title="React Photo Gallery App" />
          <SearchForm onSearch={this.doSearch} />
          <NavBar onSearch={this.doSearch} />
          <Switch>
            <Route exact path="/" />
            />
            <Route
              path="/search/puppies"
              render={() => <Redirect to="/search/puppies" />}
            />
            <Route
              path="/search/kittens"
              render={() => <Redirect to="/search/kittens" />}
            />
            <Route
              path="/search/ponies"
              render={() => <Redirect to="/search/ponies" />}
            />
            <Route
              path="/search/helicopters"
              render={() => <Redirect to="/search/helicopters" />}
            />
            <Route path="/search/" />
            <Route component={NotFound} />
          </Switch>
          <ImageUL data={this.state.imageData} {...props} />
        </div>
        <p>{allHail}</p>
      </BrowserRouter>
    );
  }
}

export default App;
