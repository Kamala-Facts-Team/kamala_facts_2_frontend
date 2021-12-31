import React from "react";

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
                        <div className="rightContainer">
                            {/* container for lie statement */}
                            <div className="lieContainer">
                                <div className="boxTitle">
                                    <h1>Lie</h1>
                                </div>
                                <div className="boxDesc">
                                    <p>{props.modalInfo.lie}</p>
                                </div>
                            </div>
                            {/* container for truths */}
                            <div className="truthContainer">
                                {props.modalInfo.hit.facts.map((truth, index) => (
                                    <div className="truthbox">
                                        <div className="boxTitle">
                                            <h1>Truth #{index + 1}</h1>
                                        </div>
                                        <div className="boxDesc">
                                            <p>{truth.truth_statement}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* container for sources */}
                            <div className="sourceTitle">Sources</div>
                            <div className="sourceContainer">
                                {props.modalInfo.hit.facts.map((truth, index) => (
                                    <div className="sourceLinks">
                                        <a href={truth.receipt_source}>Source {index + 1} Link</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
