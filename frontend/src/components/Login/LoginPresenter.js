import React, { Component } from 'react';
import styled from 'styled-components'
import { WindowOutContainer, WindowInnerContainer, WindowHeaderContainer, WindowHeaderColumn  } from '../window/WindowContainer'
import LoginHeaderLogo from '../atoms/LoginHeaderLogo';
import { SubmitBtn } from '../atoms/SubmitBtn';
import { SeperateLine } from '../atoms/SeperateLine';
import { Input } from '../atoms/Input';
import { InputLabel} from '../atoms/InputLabel';


const LoginWrapper = styled.div`
  box-sizing: border-box;
  padding-top: 26px;
  height: calc( 100% - 32px);
  margin-top: 2px;
  border: 2px solid #808080;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
`;

const LoginForm = styled.form`
  position: relative;
  width: 240px;
  margin: auto;
`;

const WindowHeader = (props) => {
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

const LoginPresenter = (props) => {
  return (
    <WindowOutContainer>
			<WindowInnerContainer>
				<WindowHeader name="Bring Your Own Music.exe"/>
					<LoginWrapper>
            <div className="content-info">
                <div className="content-green"> </div>
                <div className="content-user-info"> 사용자 정보</div>
                <div className="content-nickname-guide"> 사용자의 닉네임을 입력하여 주십시오</div>
            </div>
            <LoginForm onSubmit={props.handleSubmit}>
              <InputLabel> 닉네임(A): </InputLabel>
              <Input 
                type="text"
                id="nickname"
                value={props.nickname}
                onChange ={props.handleChange}
              ></Input>
              <div> {props.errMsg} </div>
              <SeperateLine></SeperateLine>
              <SubmitBtn> 다음 > </SubmitBtn>
            </LoginForm>
					</LoginWrapper>
			</WindowInnerContainer>
		</WindowOutContainer>
  )
}

export default LoginPresenter;