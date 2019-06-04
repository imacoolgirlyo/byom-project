import React, { Component, Fragment } from 'react';
import AboutContent from './About';
import Byom from './Byom';

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
    // server에서 user 닉네임 저장 후 callback 사용 (아니면 바로 App에서 socket.on?)
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
    
    const {
      socket,
      BYOM,
      About,
      topZ,
      headerIconClick,
      isLoggedIn
      } = this.props;

    const {nickname} = this.state;

    return(
      <Fragment>
        <Byom
          nickname={nickname}
          socket={socket}
          isLoggedIn={isLoggedIn}
          BYOM={BYOM}
          topZ={topZ}
          onUserNameSubmit={this.handleUserNameSubmit}
          onUserNameChange={this.handleUserNameChange}
          headerIconClick={headerIconClick}
        />
        <AboutContent
          About={About}
          topZ={topZ}
          headerIconClick={headerIconClick}
          />
      </Fragment>
    )
  }
}

export default ContentContainer;