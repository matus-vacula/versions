import React from 'react';
import VersionTable from "./VersionTable";

export default class Cluster extends React.Component {
    render() {
        return (
          <div>
              <h2>{this.props.region}</h2>
              <VersionTable applications={this.props.applications} countries={this.props.countries}/>
          </div>
        );
    }
}
