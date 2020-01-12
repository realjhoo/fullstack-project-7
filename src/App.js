import React, { Component } from "react";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import ImageUL from "./components/ImageUL";

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
        {/* App Title */}
        {/* <AppTitle title="React Photo Gallery App" /> */}

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
      </div>
    );
  }
}

/* 
// function App() {
//   let allHail = "Hail Thunar!";
//   return (
//     <div className="container">
//       {/* App Title */
//       <AppTitle title="React Photo Gallery App" />

//       {/* Search component */}
//       <SearchForm onSearch={console.log("Search???")} />

//       {/* Nav component */}
//       <NavBar />

//       {/* Photo Component */}
//       <PhotoContainer />

//       <p>{allHail}</p>
//     </div>
//   );
// }

// export default App;

// const AppTitle = props => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };
