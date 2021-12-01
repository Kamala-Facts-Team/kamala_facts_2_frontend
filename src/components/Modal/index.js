import React, { useState } from "react";

import "./index.css";

export default function Modal(props) {
    function closeModal() {
        props.setIsOpen(false);
        console.log(props);
    }

    return (
        <>
            {props.isOpen && (
                <div>
                    <div onClick={closeModal} className="modalBackground"></div>
                    <div className="modalContainer">Hello</div>
                </div>
            )}
        </>
    );
}
