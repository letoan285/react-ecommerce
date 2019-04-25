import React, { Component, PureComponent } from 'react';
import PureCom from './PureCom';
import NormalCom from './NormalCom';

class ParentCom extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'tung'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'tung'
            })
        }, 1000)
    }
    render() {
        // console.log('======= Parent component render===================')
        return (
            <div>
                <h3>Parent Componet</h3>
                <PureCom name={this.state.name}/>
                <NormalCom name={this.state.name}/>
            </div>
        );
    }
}

export default ParentCom;
