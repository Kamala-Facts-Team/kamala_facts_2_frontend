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
            let thing;
            if (!inputData) {
                thing = item;
            } else if (item.lie_statement.toLocaleLowerCase().includes(inputData.toLocaleLowerCase())) {
                thing = item;
            }
            return thing;
        })
        .map((item) => {
            return (
                <div  key={item.id}>
        <MythsContent key={item.id} id={item.id} myth={item.lie_statement} />
        {/* <h3>`LIES: ${item.lie_statement}`</h3> */}
        {/* {item.facts.map((fact) => {
          return <p>`Facts: {fact.truth_statement}`</p>;
        })} */}
      </div>
            );
        });


        // console.log(myths);

    return (
        <div className="home_container">
            <center>
                <h1 className="title">Kamala's Fact Search Engine</h1>
                {/* <img
                    class="Kamala-pic-1"
                    src="https://www.gannett-cdn.com/presto/2019/12/05/USAT/751f29ad-47cd-4791-9506-d4b6b846b53e-KamalaHarris.jpg"
                    alt="pic of Kamala Harris"
                /> */}

                <PageSearchBar setInputData={setInputData} inputData={inputData} />
               <div className="outer-Div">
                {/* <h1>The myths will render here </h1> */}
                {Loading ? mapMyths : <div>Loading</div>}
                </div>
            </center>
        </div>
    );
}
