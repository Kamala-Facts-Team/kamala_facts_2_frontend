import React from "react";

import "./index.css";

export default function MissingQuery() {
    return (
        <div class="container">
            <h3>There are no results for the keywords you provided</h3>
            <h3>Make sure all keywords are spelled correctly.</h3>
            <p>Try inputing different keywords.</p>
            <p>Try inputing more general keywords.</p>
            <p>Try fewer keywords.</p>
        </div>
    );
}
