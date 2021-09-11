import React from "react";
import "./search.css"

export default function SearchBar() {
    return (
        <div className="search_div">
            <center>
                <form  className="form" action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search False statements </span>
                    </label>
                    <input type="text" id="header-search" placeholder="Search False statements" name="s" />
                    {/* <button type="submit">Search</button> */}
                </form>
            </center>
        </div>
    );
}
