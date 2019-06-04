import React, { Component } from 'react';
import styled from 'styled-components'
import ByomLogin from './ByomLogin';
import ByomMusic from './ByomMusic';

const ByomWrapper = styled.div`
  display : ${props => props.BYOM=== "open"? "block" : "none" }
  zindex : ${props => props.topZ === "BYOM"? "1" : "0"}
`;

class Byom extends Component{

  render(){
    const {
      nickname, 
      socket,
      isLoggedIn,
      BYOM,
      topZ,
      onUserNameSubmit,
      headerIconClick,
      onUserNameChange
      } = this.props;
  
    return(
      <ByomWrapper BYOM={BYOM} topZ={topZ}>
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