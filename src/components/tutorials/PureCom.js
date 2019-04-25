import React, { Component, PureComponent } from 'react';

class PureCom extends Component {
    render() {
        console.log('Pure component render')
        return (
            <div>
                Pure Component name {this.props.name}
            </div>
        );
    }
}

export default PureCom;
