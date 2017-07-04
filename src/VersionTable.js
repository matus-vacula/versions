import React, { Component } from 'react';
import VersionCell from './VersionCell';

class VersionTable extends Component {
    render() {
        const applications = this.props.applications;

        const headers = applications.map((app) => {
            return (
                <th>{app.title}</th>
            );
        });

        const rows = this.props.countries.map((country) => {
            const cells = applications.map((app) => {
                return <td><VersionCell versionLoader={new VersionLoader(country.baseUrl + app.healthCheck, (data)=> data.version)}/></td>
            });

            return (
                <tr>
                    <th>{country.code}</th>
                    {cells}
                </tr>
            );
        });

        return (
            <div className="version-table">
                <table className="table table-condensed table-striped table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            {headers}
                        </tr>
                    </thead>
                    <tbody className="version-table-body">
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class VersionLoader {
    constructor(url, transformer) {
        this.url = url;
        this.transformer = transformer;
    }

    loadVersion() {
        return new Promise((resolve) => {
            fetch('/proxy/' + this.url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                resolve(dispatch({
                    type: 'LOAD_VERSION_SUCCESSFUL',
                    payload: {
                        version: this.transformer(data),
                        key: this.url,
                    }
                }));
            });
        });
    }
}

export default VersionTable;
