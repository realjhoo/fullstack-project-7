import React from "react";
// import "./App.css";
import "./css/index.css";

function App() {
  let q = "Hail Thunar!";
  return (
    <div className="container">
      <form className="search-form">
        <input type="search" name="search" placeholder="Search" required />
        <button type="submit" className="search-button"></button>
      </form>

      <nav className="main-nav">
        <ul>
          <li>
            <a href="#">Cats</a>
          </li>
          <li>
            <a href="#">Dogs</a>
          </li>
          <li>
            <a href="#">Computers</a>
          </li>
        </ul>
      </nav>

      <div className="photo-container">
        <h2>Results</h2>

        <ul>
          <li>
            <img
              src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg"
              alt=""
            />
          </li>

          <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>

      <header>The rest of this will be deleted!</header>
      <h1>I am Jerry L Hoover</h1>
      <h2>Bow down before me!!!</h2>
      <p>{q}</p>
    </div>
  );
}

export default App;
