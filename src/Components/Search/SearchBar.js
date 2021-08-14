import React from "react";

export default function SearchBar() {
    return (
        <div className="App">
            <center>
                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Myths </span>
                    </label>
                    <input type="text" id="header-search" placeholder="Search Myths" name="s" />
                    <button type="submit">Search</button>
                </form>
            </center>
        </div>
    );
}
