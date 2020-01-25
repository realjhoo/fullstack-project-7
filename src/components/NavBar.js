import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

const NavBar = props => (
  <BrowserRouter>
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink
            to="/search/puppies"
            onClick={() => props.navSearch("puppies")}
          >
            Puppies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/kittens"
            onClick={() => props.navSearch("kittens")}
          >
            Kittens
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/ponies"
            onClick={() => props.navSearch("ponies")}
          >
            Ponies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/helicopters"
            onClick={() => props.navSearch("helicopters")}
          >
            Helicopters
          </NavLink>
        </li>
      </ul>
    </nav>
  </BrowserRouter>
);

export default NavBar;
