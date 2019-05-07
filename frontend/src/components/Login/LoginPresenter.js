import React, { Component } from 'react';
import styled from 'styled-components'
import { WindowBox, WindowHeader, WindowContentWrapper } from '../window/Window';
import { SubmitBtn } from '../atoms/SubmitBtn';
import { SeperateLine } from '../atoms/SeperateLine';
import { Input } from '../atoms/Input';
import { InputLabel} from '../atoms/InputLabel';

const LoginForm = styled.form`
  position: relative;
  width: 240px;
  margin: auto;
`;

const LoginPresenter = (props) => {
  return (
    <WindowBox>
			<WindowHeader name="Bring Your Own Music.exe"/>
				<WindowContentWrapper>
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
			</WindowContentWrapper>
		</WindowBox>
  )
}

export default LoginPresenter;