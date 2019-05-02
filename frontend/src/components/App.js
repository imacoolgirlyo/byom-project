import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Layout from './Layout';

// 1. user가 바로 About으로 이동할 때 (nickname 없을때)
// 2. user가 로그인 후 About으로 이동할 때 
class App extends Component {
  render() {
    return (
      <div>
         <Route exact path="/" component={Layout}/>
         <Route path="/about" component={About}/>
      </div>
    );
  }
}

export default App;
