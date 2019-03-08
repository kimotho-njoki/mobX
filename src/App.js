import React, { Component } from 'react';
import './App.css';

import TableComponent from './components/TableComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <TableComponent />
        </header>
      </div>
    );
  }
}

export default App;
