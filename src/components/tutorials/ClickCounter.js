import React, { Component } from 'react';
import HOCCom from './HOCCom';

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <h1>My name: {this.props.myName }</h1>
                <button onClick={this.props.clickCounter}>Click counter -{ this.props.counter } -{ this.props.name }</button>
            </div>
        );
    }
}

export default HOCCom(ClickCounter, 1);