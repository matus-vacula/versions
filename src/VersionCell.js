import React, { Component } from 'react';

class VersionCell extends Component {

    constructor(props) {
        super(props);
        this.state = { data: '' };
        props.versionLoader.loadVersion().then((data) => {
            if (data) {
                this.setState({
                    data: data.toString(),
                });
            }
        });
    }

    onClick() {
        this.setState({
            data: 'reloading...',
        });
        this.props.versionLoader.loadVersion().then((data) => {
            if (data) {
                this.setState({
                    data: data.toString(),
                });
            }
        });
    }

    render() {
        return (
            <div className="cell" onClick={this.onClick.bind(this)}>
                {this.state.data}
            </div>
        );
    }
}


export default connect(map)(VersionCell);
