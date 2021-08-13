import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Notes from "../Notes";

export default function Myth() {
    return (
        <div className="App">
            <center>
                <Notes />
                <img
                    className="Kamala-pic-1"
                    src="https://www.gannett-cdn.com/presto/2019/12/05/USAT/751f29ad-47cd-4791-9506-d4b6b846b53e-KamalaHarris.jpg"
                    alt="Kamala Harris"
                />
                <SearchBar />
                <h1>The myths will render here </h1>
            </center>
        </div>
    );
}
