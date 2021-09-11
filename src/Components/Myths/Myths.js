import React, { useState, useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import Notes from "../../Notes";
import LatestNews from "../LatestNews/LatestNews";
import Myth from "../MythsContent";
import MythsContent from "../MythsContent";
import useStore from "../../store";
import "./myth.css"

export default function Myths() {
  const addarraytomyths = useStore((state) => state.addarraytomyths);

  const [myths, setMyths] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://kamala-facts-2-backend.herokuapp.com/api/v1/myths"
      );
      const data = await response.json();
      setMyths(data);
      addarraytomyths(data);
      setLoading(true);
    };

    fetchData();
  }, []);

  // im mapping over object values, then mapping over nested array values(Marlo)
  const mapMyths = Object.values(myths).map((item) => {
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

  console.log(useStore((state) => state.myths));
  console.log(myths);

  return (
    <div >
      <center>
      {/* <SearchBar /> */}
      <div className="outer-Div">
      {/* <h1>The myths will render heres </h1> */}
        {Loading ? mapMyths : <div>Loading</div>}
      </div>
        
        {/* <Notes /> */}
        {/* <img
          class="Kamala-pic-1"
          src="https://www.gannett-cdn.com/presto/2019/12/05/USAT/751f29ad-47cd-4791-9506-d4b6b846b53e-KamalaHarris.jpg"
          alt="Kamala Harris"
        /> */}
        {/* <LatestNews /> */}

       

        {/* {mapMyths} */}
      </center>
    </div>
  );
}
