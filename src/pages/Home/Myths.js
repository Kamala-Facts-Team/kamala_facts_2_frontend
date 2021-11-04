import React, { useState, useEffect } from "react";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, connectHits } from "react-instantsearch-dom";

import PageSearchBar from "../../components/searchbar/PageSearchBar";
import MythsContent from "./MythsContent";

import useStore from "../../store";

import { useParams } from "react-router-dom";

import "./myths.css";

export default function Myths() {
    const hit = ({ hit }) => (
        <div key={hit.id}>
            <MythsContent key={hit.id} id={hit.id} myth={hit.lie_statement} />
        </div>
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
        </div>
    );
}
