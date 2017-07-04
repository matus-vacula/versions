import React, { Component } from 'react';
import './App.css';
import Cluster from "./Cluster";
import {
    applications,
    stagingCountries,
    productionApCountries,
    productionEuCountries,
    productionUsCountries,
    qaCountries,
} from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-6">
          <h1>Staging</h1>
          <Cluster applications={applications} countries={stagingCountries} region="eu-west-1" />
          <h1>QA</h1>
          <Cluster applications={applications} countries={qaCountries} region="eu-west-1" />
        </div>
        <div className="col-md-6">
          <h1>Production</h1>
          <Cluster applications={applications} countries={productionApCountries} region="ap-southeast-1" />
          <Cluster applications={applications} countries={productionEuCountries} region="eu-west-1" />
          <Cluster applications={applications} countries={productionUsCountries} region="us-east-1" />
        </div>
      </div>
    );
  }
}

export default App;
