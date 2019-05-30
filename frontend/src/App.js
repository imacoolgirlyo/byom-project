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
      windowStatus : {About : 'close', Byom : 'open'},
      isBYOMOpen : true,
      isAboutOpen : false,
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

  windowProgramIconClick = (programName) => {
    let windowStatus = Object.assign({}, this.state.windowStatus);
    windowStatus[programName] = 'open';
    this.setState({windowStatus});
  }

  handleUserLoggedIn = (nickname) => { 
    if(nickname){
      this.setState({isLoggedIn : true})
    }
  }

  minimise = (window) => {
    let windowStatus = Object.assign({}, this.state.windowStatus);
    windowStatus[window] = 'min';
    this.setState({windowStatus});
  }

  close = (window) => {
    console.log('close');
    let windowStatus = Object.assign({}, this.state.windowStatus);
    windowStatus[window] = 'close';
    this.setState({windowStatus});
    // footer에서 사라지게 하기
  }
  
  headerIconClick = (iconName, windowName) => {
    // switch(iconName){
    //   case 'min': () => this.minimise(windowName);
    //   case 'close': () => this.close(windowName); 
    // }
    if(iconName === 'min'){
      this.minimise(windowName);
    }
    if(iconName === 'close'){
      this.close(windowName);
    }
  }

  render() {
    const { socket, windowStatus, isBYOMOpen, isAboutOpen, isLoggedIn, programList } = this.state;
    return (
      <div className="app">
        <IconContainer windowProgramIconClick={this.windowProgramIconClick}/>
        <ContentContainer
          socket={socket}
          isLoggedIn={isLoggedIn} 
          isBYOMOpen={isBYOMOpen}
          isAboutOpen={isAboutOpen}
          checkLogIn={this.handleUserLoggedIn}
          headerIconClick={this.headerIconClick}
          windowStatus={windowStatus}
        />
        <Media query="(max-width: 800px)">
        {matches =>
            matches ? 
            null
            :
            (<Footer
              windowStatus={windowStatus}
              programs={programList}/>
              )
          }
        </Media>
      </div>
    );
    }
}

export default App;


