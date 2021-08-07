import React from 'react';
import SearchBar from '../Components/SearchBar';
import {Nav, NavLink, Bars, NavMenu,} from '../Navbar/NavbarElements';

class Navbar extends React.Component {
    render() {
      return (
        <div className="App">
          <center>
            <Nav>
              <Bars />
              <NavMenu>
                  <NavLink to='/' exact activeStyle> Home </NavLink>
                  <NavLink to='/about' activeStyle> About </NavLink>
              </NavMenu>
              <SearchBar/>
            </Nav>
          </center>
        </div>
      );
    } 
  }
  
  export default Navbar;
  