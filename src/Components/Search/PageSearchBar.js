import React, { useState } from "react";
import "./search.css";

export default function PageSearchBar(props) {
    const handleSubmit = (event) => {};

    const handleChange = (event) => {
        const { value } = event.target;
        props.setInputData(value);
    };

    return (
        <div className="search_div">
            <center>
                <form className="page-searchbar" onSubmit={handleSubmit}>
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Myths </span>
                    </label>

                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search Myths"
                        name="s"
                        value={props.inputData}
                        onChange={handleChange}
                    />

                    <button type="submit">Search</button>
                </form>
            </center>
        </div>
    );
}
