import React from "react";
import About from "../pages/About/About";
import Facts from "../pages/Facts/Facts";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Notes from "../Notes";
import Myths from "../pages/Home/Myths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../style.css";

export default function Routes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Myths} />
          <Route path="/facts/:factsID" component={Facts}>
            <Facts />
            <Myths />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/notes" component={Notes} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
