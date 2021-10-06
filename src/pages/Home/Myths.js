import React, { useState, useEffect } from "react";
import PageSearchBar from "../../components/searchbar/PageSearchBar";
import MythsContent from "./MythsContent";
import useStore from "../../store";
import { useParams } from "react-router-dom";
import "./myths.css";

export default function Myths() {
    const addarraytomyths = useStore((state) => state.addarraytomyths);
    const { factsID } = useParams();

    console.log(factsID + "factsId");

    // usestate
    const [myths, setMyths] = useState({});
    const [Loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState("");
    const [selectedID, SetSelectedID] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://kamala-facts-2-backend.herokuapp.com/api/v1/myths");
            const data = await response.json();
            setMyths(data);
            setLoading(true);
            addarraytomyths(data);
        };

        fetchData();
    }, []);

    const ChosenStyle = {
        border: "4px solid Yellow",
    };
    const regularStyle = {
        border: "4px solid grey",
    };

    function selectedLie(id, e) {
        e.preventDefault();
        SetSelectedID(id);
        console.log(id);
    }

    // Maps over object values from the api and filters by lie statment depending
    // on what is typed in the search bar
    const mapMyths = Object.values(myths)
        .filter((item) => {
            let filteredItem;
            const commonWords = [
                "a",
                "and",
                "the",
                "you",
                "can",
                "is",
                "it",
                "if",
                "we",
                "need",
                "in",
                "us",
                "this",
                "their",
                "they",
                "to",
                "kamala",
                "harris",
                "into",
            ];

            let filteredInput = inputData
                .toLocaleLowerCase()
                .split(" ")
                .filter((word) => {
                    if (!commonWords.includes(word)) {
                        return word;
                    } else {
                        return null;
                    }
                });

            let filteredLie = item.lie_statement
                .toLocaleLowerCase()
                .split(" ")
                .filter((word) => {
                    if (!commonWords.includes(word)) {
                        return word;
                    } else {
                        return null;
                    }
                });

            if (!inputData) {
                filteredItem = item;
            } else if (filteredInput.every((word) => filteredLie.includes(word))) {
                filteredItem = item;
            } else {
                return null;
            }

            return filteredItem;
        })
        .map((item) => {
            return (
                <div key={item.id} style={item.id == factsID ? ChosenStyle : regularStyle}>
                    {/* <div style={ChosenStyle} key={item.id}>  */}
                    <MythsContent
                        click={(e) => selectedLie(item.id, e)} //////the page is reloading right a function to prevent it
                        // click ={setTimeout(() => selectedLie(item.id), 2000)}
                        key={item.id}
                        id={item.id}
                        myth={item.lie_statement}
                    />
                </div>
            );
        });
    console.log(selectedID);

    // console.log(myths);

    return (
        <div className="home_container">
            <center>
                <h1 className="title">Kamala's Fact Search Engine</h1>
                <h1>hello</h1>
                <PageSearchBar setInputData={setInputData} inputData={inputData} />

                <div className="outer-Div">
                    {/* <h1>The myths will render here </h1> */}
                    {Loading ? mapMyths : <div>Loading</div>}
                </div>
            </center>
        </div>
    );
}
