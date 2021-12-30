import React, { useState } from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, connectStateResults } from "react-instantsearch-dom";

import Modal from "../../components/Modal/index";
import MythsContent from "../../components/Mythbox/MythsContent";
import MissingQuery from "../../components/404";

import "./myths.css";

export default function Myths() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);

    const hit = ({ hit }) => (
        <MythsContent
            key={hit.id}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            lie={hit.lie_statement}
            truth={hit.facts[0].truth_statement}
            setModalInfo={setModalInfo}
            hit={hit}
        />
    );

    const Results = connectStateResults(({ searchState, searchResults, children }) =>
        searchResults && searchResults.nbHits !== 0 ? children : <MissingQuery />,
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
                        <Results>
                            <Hits hitComponent={hit} />
                        </Results>
                    </div>
                </InstantSearch>
            </center>
            <Modal setIsOpen={setIsOpen} isOpen={isOpen} modalInfo={modalInfo} />
        </div>
    );
}
