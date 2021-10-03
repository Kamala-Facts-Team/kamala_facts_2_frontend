import React ,{ useState }from "react";

import { Link } from "react-router-dom";
import './mythcontent.css'

export default function MythsContent(props) {

  return (
    
      <div className="inner-div">
        <h2 className="fales" style={{color:"white"}}><Link onClick={props.click} to = {`/facts/${props.id}`}>Myth: {props.myth}</Link></h2>
      </div>
  
    
  );
}

// onClick={ ()=> console.log(props.id)}]s