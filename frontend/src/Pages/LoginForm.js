import React, { Component, Fragment }  from 'react';
import Input from 'Components/Input';
import SubmitBtn from 'Components/SubmitBtn';
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
      <form onSubmit={onUserNameSubmit}>
        <Input
          type="text"
          value= {nickname}
          onChange= {this.handleUserNameChange}
        ></Input>
        <SubmitBtn> 다음 > </SubmitBtn>
      </form>
    )
  }

}

export default LoginForm;