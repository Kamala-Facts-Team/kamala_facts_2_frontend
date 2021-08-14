import React from "react";
import SearchBar from "../Components//Search/SearchBar";
import { Nav, NavLink, Bars, NavMenu } from "../Navbar/NavbarElements";

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <Nav>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/" exact activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                    </NavMenu>
                    <SearchBar />
                </Nav>
            </center>
        </div>
    );
}
