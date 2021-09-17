import React from "react";


export default function MissingQuery() {
    return (
        <div id="error_explanation" class="error-container">
        <h3 class="text-center lh-base mb-3">There are no results with that criteria.<br> </br>Please try again.</h3>
        <ul>
          <li>Make sure all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
          <li>Try fewer keywords.</li>
        </ul>
      </div>
    );
}