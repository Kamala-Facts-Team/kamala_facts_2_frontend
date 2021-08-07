import React from 'react';
import MythsContainer from './Containers/MythsContainer'
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <center>
        <MythsContainer/>
        </center>
      </div>
    );
  } 
  
}

export default App;
