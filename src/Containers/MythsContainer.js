import React from "react";
import About from "../Components//About/About";
import Navbar from "../Navbar/Navbar";
import Myths from "../Components/Myths/Myths";
import SearchBar from "../Components/Search/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MythsContent from "../Components/MythsContent";
import Facts from "../Components/Facts/Facts";
import Title from "../Components/title/Title"
// import { Switch, Route, Link, withRouter } from "react-router-dom"
import "../style.css";

export default function MythsContainer() {
  // set up component-did-mount here while rendering the fetch request
  // set up a different file 'FetchMyths' to fetch the myths to keep the code clean
  ///function map over array

  return (
    //
    <div>
      <center>
        <Router>
          <Navbar />
          <Title />
         <SearchBar />
          <Switch>
            <Route exact path="/">
            
              <Myths />
            </Route>
            {/* <Route path="/about" component={About} /> */}
            <Route path="/facts/:factsID" component={Facts}>
              {/* <Facts /> */}
              
            </Route>
          </Switch>
        </Router>
      </center>
    </div>
  );
}
