import React from 'react';
import About from '../Components/About';
import Navbar from '../Navbar/Navbar';
import Myths from '../Components/Myths';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style.css';

class MythsContainer extends React.Component {

// set up component-did-mount here while rendering the fetch request
// set up a different file 'FetchMyths' to fetch the myths to keep the code clean


render() {
    return (
      <div className="App">
        <center>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path='/' component={Myths}/>
          <Route path='/about' component={About} />
          </Switch>
        </Router>
        
        </center>
      </div>
    );
  } 
  
}

export default MythsContainer;