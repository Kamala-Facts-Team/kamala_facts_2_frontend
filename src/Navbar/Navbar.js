import React from "react";
import SearchBar from "../Components//Search/SearchBar";
import { Nav, NavLink, Bars, NavMenu } from "../Navbar/NavbarElements";
import "./nav.css";

export default function Navbar() {
  return (
    <div className="Nav-div">
      <div className="Nav-innderDiv">
        {/* <Bars /> */}

        <NavLink style={{ color:'white'}} to="/" exact activeStyle>
          Home
        </NavLink>
        <NavLink style={{ color:'white'}} to="/about" activeStyle>
          About
        </NavLink>
        <NavLink style={{ color:'white'}} to="/facts" activeStyle>
          Facts
        </NavLink>
      </div>
    </div>
  );
}
