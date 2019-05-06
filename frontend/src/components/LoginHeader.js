import React, { Component } from 'react';
import LoginHeaderLogo from './atoms/LoginHeaderLogo';
import { WindowHeaderContainer, WindowHeaderColumn } from './window/WindowHeader';
import '../resource/sass/LoginForm.scss';


export const WindowHeader = (props) => {
  return (
    <WindowHeaderContainer>
      <WindowHeaderColumn>
          <LoginHeaderLogo />
          <div>{props.name}</div>
      </WindowHeaderColumn>
      <WindowHeaderColumn>
          <div className="window-icon min"></div>
          <div className="window-icon max"></div>
          <div className="window-icon close"></div>
      </WindowHeaderColumn>
    </WindowHeaderContainer>
  )
}