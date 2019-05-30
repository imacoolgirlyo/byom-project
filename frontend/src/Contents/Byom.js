import React, { Component } from 'react';
import styled from 'styled-components'
import ByomLogin from './ByomLogin';
import ByomMusic from './ByomMusic';

const ByomWrapper = styled.div`
  display : ${props => props.windowStatus['Byom']==="open"? "block" : "none" }
`;

class Byom extends Component{

  render(){
    const {
      nickname, 
      socket, isLoggedIn, windowStatus, headerIconClick,onUserNameSubmit, onUserNameChange} = this.props;
    return(
      <ByomWrapper windowStatus={windowStatus}>
        {
          isLoggedIn ?
          <ByomMusic
            nickname={nickname}
            socket={socket}
            headerIconClick={headerIconClick}
          />
          :
          <ByomLogin
            nickname={nickname}
            headerIconClick={headerIconClick}
            onUserNameChange={onUserNameChange}
            onUserNameSubmit={onUserNameSubmit}
          />
        }
      </ByomWrapper>
    )
  }
}

export default Byom;