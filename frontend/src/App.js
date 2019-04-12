import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import PlayList from './components/PlayList';
import MusicInputForm from './components/MusicInputForm';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm/>
        <PlayList/>
        <MusicInputForm />
      </div>
      
    );
  }
}

export default App;
