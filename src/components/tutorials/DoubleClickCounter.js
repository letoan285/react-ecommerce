import React, { Component } from 'react';
import HOCCom from './HOCCom';

class DoubleClickCounter extends Component {

    render() {
        return (
            <div>
                <button onDoubleClick={this.props.doubleClic}>Double Click counter { this.props.counter } - {this.props.name}</button>
            </div>
        );
    }
}

export default HOCCom(DoubleClickCounter, 2);