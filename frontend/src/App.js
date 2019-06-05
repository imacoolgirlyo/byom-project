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
      BYOM : 'open',
      About : 'close',
      topZ : 'BYOM',
      isLoggedIn : false,
      socket: null,
      connectMsg : '',
      programList: ["BYOM"]
    }
  }

  initSocket = () => {
    const socket = io(socketURL);
    socket.on('connect', ()=> {
      console.log('Connect');
      this.setState({socket})
    })
    socket.on('connect_error', () => {
      this.setState({connectMsg : '연결이 되지 않습니다.'})
      console.log('연결이 되지 않습니다.');
    })
  }

  componentDidMount(){
    this.initSocket()
  }

  checkUserLoginStatus = (nickname) => {
    if(nickname){
      this.setState({isLoggedIn : true});
    }
  }

  headerIconClick = (windowName, iconName) => {
    if(iconName === 'min'){
      this.setState({
        [windowName] : 'min'
      })}

    if(iconName === "close"){
      const filtered = this.state.programList.filter(pgm => pgm !== windowName);
      this.setState({
        [windowName] : 'close',
        programList : filtered
      });
      //immutable을 쓰면 이전 버전 기억
    };
  }

  makeWindowTopZ = (windowName) => {
    if(this.state[windowName] === 'min' || this.state[windowName] === 'open'){
      this.setState({
        [windowName] : 'open',
        topZ : windowName
      })
    }
    if(this.state[windowName] === 'close'){
      this.setState({
        [windowName] : 'open',
        topZ : windowName,
        programList : [...this.state.programList, windowName]
      })
    }
  }

  footerPgmButtonHandler = (windowName) => {
    if(this.state[windowName] === "open"){
      this.setState({
        [windowName] : "min"
      })
    }
    if(this.state[windowName] === "min"){
      this.setState({
        [windowName] : "open"
      })
    }
  }

  render() {
    const 
    { 
      socket,
      BYOM,
      About,
      topZ,
      isLoggedIn,
      programList 
    } = this.state;

    return (
      <div className="app">
        <IconContainer 
          windowProgramIconClick={this.windowProgramIconClick}
          makeWindowTopZ={this.makeWindowTopZ}
        />
        <ContentContainer
          socket={socket}
          BYOM={BYOM}
          About={About}
          topZ={topZ}
          isLoggedIn={isLoggedIn}
          checkLogIn={this.checkUserLoginStatus}
          headerIconClick={this.headerIconClick}
        />
        <Media query="(max-width: 800px)">
        {matches =>
            matches ? 
            null
            :
            (
            <Footer
              programs={programList}
              footerPgmButtonHandler={this.footerPgmButtonHandler}
            />
            )
          }
        </Media>
      </div>
    );
    }
}

export default App;


