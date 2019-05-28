import React, { Component, Fragment }  from 'react';
import Input from 'Components/Input';
import SubmitBtn from 'Components/SubmitBtn';
import { WindowBox, WindowContentWrapper, WindowHeader } from 'Components/Window';

class LoginForm extends Component {
  constructor(props){
    super(props)
  }

  handleUserNameChange =  e => {
    this.props.onUserNameChange(e.target.value);
  }

  render(){
    const { nickname, onUserNameSubmit } = this.props;
    return(
      <WindowBox>
      <WindowHeader/>
      <WindowContentWrapper>
        <form onSubmit={onUserNameSubmit}>
          <Input
            type="text"
            value= {nickname}
            onChange= {this.handleUserNameChange}
          ></Input>
          <SubmitBtn> 다음 > </SubmitBtn>
        </form>
      </WindowContentWrapper>
      </WindowBox>
    )
  }

}

export default LoginForm;