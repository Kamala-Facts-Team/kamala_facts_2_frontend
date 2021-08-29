import React from "react";
import NavSearchBar from "../Components/Search/NavSearchBar";
import {NavLink} from "../Navbar/NavbarElements";
import "./nav.css"

export default function Navbar() {
    return (
        <div className="main_div">
               
            <NavLink className="nav-link" to="/" exact activeStyle>
                Home
            </NavLink>
            <NavLink className="nav-link" to="/about" activeStyle>
                About
            </NavLink>
            
            <NavSearchBar/>
          
        </div>
        
    );
}
