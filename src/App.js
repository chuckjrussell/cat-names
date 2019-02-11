import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as jQuery from  'jquery';
import {_} from 'underscore';
import CatPage from './components/cats/CatPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CatPage/>
      </div>
    );
  }
}

export default App;
