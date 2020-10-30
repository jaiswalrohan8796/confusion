import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Menu from './components/MenuComponent'
import Main from './components/MainComponent'
import { DISHES } from './shared/dishes';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Main/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
