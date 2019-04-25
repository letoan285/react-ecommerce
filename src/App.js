import React, { Component } from 'react';
import './app.scss';
import TestCom from './components/tutorials/TestCom';
import Child from './components/tutorials/Child';
import ParentCom from './components/tutorials/PerentCom';
import ClickCounter from './components/tutorials/ClickCounter';
import DoubleClickCounter from './components/tutorials/DoubleClickCounter';

class App extends Component {
  name = 'Tung';
  constructor() {
    super();
    this.state = {
      name: 'tung',
      age: 10,
      posts: []
    }
    this.name = 'Toan';
    console.log('1. Patent Constructor');
  }
  // componentWillMount() {
  //   console.log('2. Patent component Will Mount');
   
  // }
  // componentDidMount() {
  //   console.log('8.  Patent component DidMount');
  //   // this.getPosts();
  //    setInterval(() => {
  //     console.log(this.setState({
  //       name: 'tung'
  //     }));
  //   }, 1000);
  // }


  // getPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(response => {
  //     this.setState({
  //       posts: response
  //     })
  //   });
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('9.  Patent shouldComponentUpdate');
  //   if(this.state === nextState) {
  //     return false;
  //   } else {
  //     return true;
  
  //   }
  // }
  // componentWillUpdate() {
  //   console.log('9.  Patent componentWillUpdate');
  // }
  // componentDidUpdate() {
  //   console.log('9.  Patent componentDidUpdate');
  // }

  // componentWillUnmount() {

  // }

  render() {
    // console.log('3. Patent render');
    // const postList = this.state.posts.map((post, index) => {
    //   return (
    //     <tr key={ post.id }>
    //       <td>{ index+1 }</td>
    //       <td>{ post.title }</td>
    //       <td>{ post.body }</td>
    //     </tr>
    //   );
    // });
    return (
      <div className="App container">
          {/* <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Title</th>
                  <th>B0dy</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
          </table> */}
          <ClickCounter myName="tung"/>
          <DoubleClickCounter />

      </div>
    );
  }
}

export default App;


// 1. initialization
// 2. mounting
// ==========render 
// 3. updating
// 4. unmounting

