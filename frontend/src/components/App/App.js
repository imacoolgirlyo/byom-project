import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import RouterAbout from './components/RouterAbout';
import RouterMain from './components/RouterMain';
import 'resource/sass/App.scss';
import { WindowBox } from './components/window/Window' 


class App extends Component {
  render() {
    return (
      <div className="app">
       <div className="route">
         <RouterAbout/>
         <RouterMain/>
       </div>
        <WindowBox>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </WindowBox>
      </div>
    );
  }
}

export default App;


