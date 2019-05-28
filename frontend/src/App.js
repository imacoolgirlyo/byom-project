 import React, { Component, Fragment } from 'react';
 import Draggable from 'react-draggable';
import Media from "react-media";
import io from 'socket.io-client';
import IconContainer from './IconContainer';
import ContentContainer from './Contents';
import Footer from 'Components/Footer';
import 'resource/sass/App.scss';

const socketURL = "http://localhost:3231";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBYOM : true,
      isLoggedIn : false,
      socket: null,
      connectMsg : '',
      programList: ["Bring Your Own Music.exe"]
    }
  }

  componentDidMount(){
    this.initSocket()
  }

  initSocket = () => {
    const socket = io(socketURL)
    socket.on('connect', ()=> {
        console.log('Connect');
        this.setState({socket})
    })
    socket.on('connect_error', () => {
        this.setState({connectMsg : '연결이 되지 않습니다.'})
        console.log('연결이 되지 않습니다.');
    })
  }

  changeViewBtnHandler = (name) => {
    if(name === "about"){
      this.setState({
        isBYOM : false
      })}
      else if(name === "byom"){
        this.setState({
        isBYOM : true
      })
      }
  }

  handleUserLoggedIn = (nickname) => { 
    if(nickname){
      this.setState({isLoggedIn : true})
    }
  }

  render() {
    const { socket, isBYOM, isLoggedIn, programList } = this.state;

    return (
      <div className="app">
        <IconContainer changeViewBtnHandler={this.changeViewBtnHandler}/>
        <ContentContainer
          socket={socket}
          isLoggedIn={isLoggedIn} 
          isBYOM={isBYOM}
          checkLogIn={this.handleUserLoggedIn}
        />
        <Media query="(max-width: 800px)">
        {matches =>
            matches ? 
            (<p> less than 800px wide</p>)
            :
            (<Footer programs={programList}/>)
          }
        </Media>
      </div>
    );
    }
}

export default App;


