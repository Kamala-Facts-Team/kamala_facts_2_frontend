import React, { useState } from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import Modal from "../../components/Modal/index";
import MythsContent from "./MythsContent";

// import useStore from "../../store";

// import { useParams } from "react-router-dom";

import "./myths.css";

export default function Myths() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const hit = ({ hit }) => (
        <MythsContent key={hit.id} setIsOpen={setIsOpen} isOpen={isOpen} myth={hit.lie_statement} />
    );

    const searchClient = algoliasearch("6QTOOUPAFK", "01603cf64c262e9c27d4099b3743d96f");

    return (
        <div className="home_container">
            <center>
                <h1 className="title">Kamala's Fact Search Engine</h1>

                <InstantSearch searchClient={searchClient} indexName="kamala_facts_demo">
                    <SearchBox
                        translations={{
                            placeholder: "Search False Statements...",
                        }}
                    />
                    <div className="outer-Div">
                        <Hits hitComponent={hit} />
                    </div>
                </InstantSearch>
            </center>
            <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    );
}
