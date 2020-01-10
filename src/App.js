import React from "react";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import PhotoContainer from "./components/PhotoContainer";

const AppTitle = props => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

function App() {
  let allHail = "Hail Thunar!";
  return (
    <div className="container">
      {/* App Title */}
      <AppTitle title="React Photo Gallery App" />

      {/* Search component */}
      <SearchForm />

      {/* Nav component */}
      <NavBar />

      {/* Photo Component */}
      <PhotoContainer />

      <p>{allHail}</p>
    </div>
  );
}

export default App;
