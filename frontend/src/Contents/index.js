import React, { Component, Fragment } from 'react';
import About from './About';
import Byom from './Byom';
import ByomLogin from './ByomLogin';
import ByomMusic from './ByomMusic';

class ContentContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      nickname : ''
    }
  }

  handleUserNameChange = (nickname) => {
    this.setState({nickname});
  }

  setUser = (data) => {
    this.props.checkLogIn(data.nickname);
  }

  handleUserNameSubmit = (e) => { 
    e.preventDefault();
    const { nickname } = this.state;
    const { socket } = this.props;
    if(nickname){
      this.props.checkLogIn(nickname);
      console.log(nickname + " is submitted. ");
      socket.emit("NICKNAME_SAVED", nickname, this.setUser);
    }
  }

  render(){
    const {windowStatus, headerIconClick, socket, isLoggedIn} = this.props;
    const {nickname} = this.state;
    return(
      <Fragment>
        <Byom
          nickname={nickname}
          socket={socket}
          isLoggedIn={isLoggedIn}
          windowStatus={windowStatus}
          onUserNameSubmit={this.handleUserNameSubmit}
          onUserNameChange={this.handleUserNameChange}
          headerIconClick={headerIconClick}
        />
        <About 
          windowStatus={windowStatus}
          headerIconClick={headerIconClick}
          />
      </Fragment>
    )
  }
}

export default ContentContainer;