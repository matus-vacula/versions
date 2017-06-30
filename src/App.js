import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VersionTable from "./VersionTable";
import {applications, stagingCountries} from './data';


class App extends Component {
  render() {
    return (
      <div className="App">
        <VersionTable applications={applications} countries={stagingCountries}/>
      </div>
    );
  }
}

export default App;
