import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./mythcontent.css";

export default function MythsContent(props) {
    function openModal() {
        props.setIsOpen(true);
        console.log(props);
    }

    function closeModal() {
        props.setIsOpen(false);
        console.log(props);
    }

    return (
        <button onClick={props.isOpen ? closeModal : openModal}>
            <div className="mythContainer">
                <h2 className="mythBox" style={{ color: "black" }}>
                    Myth: {props.myth}
                </h2>
            </div>
        </button>
    );
}

// onClick={ ()=> console.log(props.id)}]s
