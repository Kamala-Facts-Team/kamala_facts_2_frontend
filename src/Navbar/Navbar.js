import React from "react";
import SearchBar from "../Components//Search/SearchBar";
import { Nav, NavLink, Bars, NavMenu } from "../Navbar/NavbarElements";
import "./nav.css"

export default function Navbar() {
    return (
        <div className="main_div">
                <div className="main_div1">

                <h1>Kamala Facts</h1>
                <button className="cont-Button">become a contributor</button>
                </div>
                <div className="main_div2">
                <SearchBar />
                </div >
                    {/* <Bars /> */}
                 
                        {/* <NavLink to="/" exact activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink> */}
        </div>
    );
}
