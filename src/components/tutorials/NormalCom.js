import React, { Component } from 'react';

class NormalCom extends Component {
    render() {
        console.log('Normal component render')
        return (
            <div>
                Normal Com  {this.props.name}
            </div>
        );
    }
}

export default NormalCom;
// so sanh props/state cu va moi
// shadow comparition 3===3true
// [1,2,3] === [1,2,3] ==> false