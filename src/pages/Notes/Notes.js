import React from "react";

import "./notes.css";

export default function Notes() {
    return (
        <center>
            <div className="parent">
                <h1>The New And Improved Kamala Facts 2 Application</h1>
                <h3>
                    This application will be built off of React with a Rails API. <br></br>The Rails API repo is here:
                    <a
                        href="https://github.com/Sydnee510/kamala_facts_2_backend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        API Kamala Facts 2{" "}
                    </a>
                    <br></br>Clone it so you can see how it operates and lets get creative!
                </h3>
                <h2>
                    DONT GET ME CONFUSED WITH KAMALA FACTS 1 <br></br>
                    <a href="https://kamalafacts.com/" target="_blank" rel="noopener noreferrer">
                        Remember Me:{" "}
                    </a>
                    Use me as a guide/reference as you build out Kamala Facts 2
                </h2>
                <h4>This will not be here amongst production. Just for your reference.</h4>
            </div>
        </center>
    );
}
