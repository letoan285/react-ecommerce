import React, { Component } from 'react';

class Child extends Component {
    constructor() {
        super();
        console.log('4. Child constructor');
    }
    componentWillMount() {
        console.log('5. Child componentWillMount');
    }
    componentDidMount() {
        console.log('7. Child componentDidMount');
    }
    render() {
        console.log('6. Child Render');
        return (
            <div>
                child
            </div>
        );
    }
}

export default Child;
