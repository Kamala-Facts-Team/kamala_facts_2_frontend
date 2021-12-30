import React from "react";

import "./about.css";

export default function About() {
    return (
        <center className="parent">
            <div>
                <h2>Who is Kamala?</h2>
                <p class="fst-italic my-4">
                    <b>Kamala Devi Harris</b> is the first woman, the first Black person, and the first Asian-American
                    person elected vice president of the United States.
                </p>
                <p class="mb-3">Learn more about Kamala and her background:</p>
                <div class="fs-7 d-flex flex-column flex-sm-row justify-content-between flex-wrap flex-lg-column">
                    <a
                        class="mb-3 mb-sm-0 mb-lg-3"
                        href="https://www.whitehouse.gov/administration/vice-president-harris/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Read More on Whitehouse.gov"
                    >
                        Whitehouse.gov <i class="fas fa-arrow-circle-right"></i>
                    </a>
                    <br></br>
                    <a
                        class="mb-3 mb-sm-0 mb-lg-3 mx-sm-3 mx-lg-0"
                        href="https://bioguide.congress.gov/search/bio/H001075"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Read More on Congress.gov"
                    >
                        Congress.gov <i class="fas fa-arrow-circle-right"></i>
                    </a>
                    <br></br>
                    <a
                        class="mb-3 mb-sm-0 mb-lg-3"
                        href="https://en.wikipedia.org/wiki/Kamala_Harris"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Read More on Wikipedia.org"
                    >
                        Wikipedia.org <i class="fas fa-arrow-circle-right"></i>
                    </a>
                    <br></br>
                </div>
            </div>
        </center>
    );
}
