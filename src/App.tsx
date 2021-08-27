import React, { Component } from 'react';
import './App.css';
import { Header } from './common'
import { Checking } from './checking'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header brand='Komodo Banking'/>
        <Checking />
      </div>
    );
  }
}

export default App;
