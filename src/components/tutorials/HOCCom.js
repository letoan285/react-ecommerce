import React, { Component } from 'react';


const HOCCom = (OriginalComponent, count) => {
    class NewComonent extends Component {
        constructor() {
            super();
            this.state = {
                count: 1,
                name: 'tung'
            }
        }
        onDoubleClick = () => {
            this.setState(preState => {
                return {
                    count: preState.count*2
                }
            })
        }
        handleCounter = () => {
            this.setState(preState => {
                return {
                    count: preState.count+count
                }
            })
        }
        render() {
            return <OriginalComponent {...this.props } doubleClic={this.onDoubleClick} clickCounter={ this.handleCounter } counter={ this.state.count } name="Nguyen Tung"/>
        }
    }
    return NewComonent;
}
export default HOCCom;