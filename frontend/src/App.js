import React, { Component, Fragment } from 'react';
import io from 'socket.io-client';
import IconContainer from './IconContainer';
import ContentContainer from './Pages';
import 'resource/sass/App.scss';
// import { WindowBox } from './components/window/Window' 

const socketURL = "http://localhost:3231";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBYOM : true,
      isLoggedIn : false,
      socket: null,
      connectMsg : ''
    }
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
componentDidMount(){
  this.initSocket()
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
  // socket 으로 보내기. 자동으로 컴포넌트 알아서 렌더링, 
  if(nickname){
    this.setState({isLoggedIn : true})
  }
}

render() {
  const {socket, isBYOM, isLoggedIn} = this.state;
  return (
    <div className="app">
    <IconContainer changeViewBtnHandler={this.changeViewBtnHandler}/>
    <ContentContainer
      socket={socket}
      isLoggedIn={isLoggedIn} 
      isBYOM={isBYOM}
      checkLogIn={this.handleUserLoggedIn}
      />
    </div>
  );
  }
}

export default App;


