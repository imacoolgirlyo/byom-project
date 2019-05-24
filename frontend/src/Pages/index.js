import React, { Component, Fragment } from 'react';
import About from './About';
import LoginForm from './LoginForm';
import Main from './Main';
import { WindowBox } from '../Components/Window/Window'

class ContentContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      nickname : ''
    }
  }

  handleUserNameChange = (nickname) => {
    //props.함수로 닉네임 전달 
    this.setState({nickname})
  }

  setUser = (data) => {
    this.props.checkLogIn(data.nicknmae)
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
    const { isLoggedIn, isBYOM, socket } = this.props;
    const { nickname } = this.state;
    let content;

    if (!isLoggedIn && isBYOM) {
      // 아직 로그인 하기전, 처음 페이지
     content = <LoginForm 
      nickname={nickname} 
      onUserNameChange={this.handleUserNameChange}
      onUserNameSubmit={this.handleUserNameSubmit}
      />
      }
    if(!isBYOM){
     content = <About/>
    }
    if(isLoggedIn && isBYOM) {
      content = <Main nickname={nickname} socket={socket}/>
    }
  
    return(
    <WindowBox>
      {content}
    </WindowBox>
    )
  }
}

export default ContentContainer;