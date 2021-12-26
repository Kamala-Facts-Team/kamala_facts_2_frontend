import React from "react";

import "./mythcontent.css";

export default function MythsContent(props) {
    function openModal() {
        props.setIsOpen(true);
    }

    function closeModal() {
        props.setIsOpen(false);
    }

    function SetModalInfo(statment) {
        props.setModalInfo(statment);
    }

    function modalBoolean() {
        props.isOpen ? closeModal() : openModal();
    }
    console.log(props);

    return (
        <button
            onClick={() => {
                modalBoolean();
                SetModalInfo([props.lie, props.truth]);
            }}
        >
            <div className="mythContainer">
                <p className="mythBox" style={{ color: "black" }}>
                    {props.hit.title}
                </p>
            </div>
        </button>
    );
}
