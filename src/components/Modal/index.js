import React, { useState } from "react";

import "./index.css";

export default function Modal(props) {
    function closeModal() {
        props.setIsOpen(false);
    }
    console.log(props);

    return (
        <>
            {props.isOpen && (
                <div>
                    {/* Background */}
                    <div onClick={closeModal} className="modalBackground"></div>
                    {/* Modal */}
                    <div className="modalContainer">
                        <div className="leftContainer">
                            <p className="noMargin">Popular Topics</p>
                            <div>link1</div>
                            <div>link2</div>
                            <div>link3</div>
                        </div>
                        <div className="rightContainer">
                            <div className="lieContainer">
                                <div className="boxTitle">
                                    <h1>Lie</h1>
                                </div>
                                <div className="boxDesc">
                                    <h2 className="statmentTitle">Title</h2>
                                    <p>{props.modalInfo[0]}</p>
                                </div>
                            </div>
                            <div className="truthContainer">
                                <div className="boxTitle">
                                    <h1>Truth</h1>
                                </div>

                                <div className="boxDesc">
                                    <h2 className="statmentTitle">Title</h2>
                                    <p>{props.modalInfo[1]}</p>
                                </div>
                            </div>
                            <div className="sourceContainer">Sources</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
