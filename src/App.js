import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import ImageUL from "./components/ImageUL";
import AppTitle from "./components/AppTitle";
import apiKey from "./components/config";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageData: [],
      loading: true,
      queryState: ""
    };
  }

  componentDidMount() {
    this.doSearch();
  }

  doSearch = (query = "biplanes") => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    // console.log("URL: " + url);
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          imageData: responseData.photos.photo,
          loading: false,
          queryState: query
        });
      })
      .catch(error => {
        console.log("Hey... something didnt work!", error);
      });
    this.setState({ loading: true });
  };

  render() {
    let allHail = "React is Tough Stuff";
    return (
      <BrowserRouter>
        <div className="container">
          <AppTitle title="React Photo Gallery App" />
          <SearchForm onSearch={this.doSearch} loading={this.state.loading} />
          <NavBar navSearch={this.doSearch} />
          <span className="current-search">
            Current Search: {this.state.queryState}
          </span>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <ImageUL
                  {...props}
                  data={this.state.imageData}
                  loading={this.state.loading}
                  query={this.state.queryState}
                  navSearch={this.doSearch}
                />
              )}
            />
            <Route
              exact
              path="/search/:query"
              render={props => (
                <ImageUL
                  {...props}
                  data={this.state.imageData}
                  loading={this.state.loading}
                  query={this.state.queryState}
                  navSearch={this.doSearch}
                />
              )}
            />
            <Route
              path="/search/puppies"
              render={props => (
                <ImageUL
                  {...props}
                  data={this.state.imageData}
                  loading={this.state.loading}
                  query={this.state.queryState}
                  navSearch={this.doSearch}
                />
              )}
            />
            <Route
              path="/search/kittens"
              render={props => (
                <ImageUL
                  {...props}
                  data={this.state.imageData}
                  loading={this.state.loading}
                  query={this.state.queryState}
                  navSearch={this.doSearch}
                />
              )}
            />
            <Route
              path="/search/ponies"
              render={props => (
                <ImageUL
                  {...props}
                  data={this.state.imageData}
                  loading={this.state.loading}
                  query={this.state.queryState}
                  navSearch={this.doSearch}
                />
              )}
            />
            <Route
              path="/search/helicopters"
              render={props => (
                <ImageUL
                  {...props}
                  data={this.state.imageData}
                  loading={this.state.loading}
                  query={this.state.queryState}
                  navSearch={this.doSearch}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <p>{allHail}</p>
      </BrowserRouter>
    );
  }
}

export default App;
