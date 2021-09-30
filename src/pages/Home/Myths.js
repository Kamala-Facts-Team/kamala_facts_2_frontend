import React, { useState, useEffect } from "react";
import PageSearchBar from "../../components/searchbar/PageSearchBar";
import MythsContent from "./MythsContent";
import useStore from "../../store";
import "./myths.css";

export default function Myths() {
    const addarraytomyths = useStore((state) => state.addarraytomyths);
    const mythsarray = useStore((state) => state.myths);

    // console.log(mythsarray[0]);

    // usestate
    const [myths, setMyths] = useState({});
    const [Loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState("");

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
                <div key={item.id}>
                    <MythsContent key={item.id} id={item.id} myth={item.lie_statement} />
                </div>
            );
        });

    // console.log(myths);

    return (
        <div className="home_container">
            <center>
                <h1 className="title">Kamala's Fact Search Engine</h1>

                <PageSearchBar setInputData={setInputData} inputData={inputData} />

                <div className="outer-Div">
                    {/* <h1>The myths will render here </h1> */}
                    {Loading ? mapMyths : <div>Loading</div>}
                </div>
            </center>
        </div>
    );
}
