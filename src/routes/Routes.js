import React from "react";
import About from "../pages/About/About";
import Notes from "../pages/Notes/Notes";
import Navbar from "../components/Navbar/Navbar";
import Myths from "../pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../style.css";

export default function Routes() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Myths} />
                    <Route path="/about" component={About} />
                    <Route path="/notes" component={Notes} />
                </Switch>
            </Router>
        </div>
    );

}
