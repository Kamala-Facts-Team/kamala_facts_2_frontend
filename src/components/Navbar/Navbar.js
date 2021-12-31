import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
    return (
        <div className="main_div">
            <Link className="nav-link" to="/" exact activeStyle>
                Home
            </Link>
            <Link className="nav-link" to="/about" activeStyle>
                About
            </Link>
            <Link className="nav-link" to="/notes" activeStyle>
                Notes
            </Link>
        </div>
    );
}
