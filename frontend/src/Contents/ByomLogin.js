import React, { Component }  from 'react';
import Input from 'Components/Input';
import SubmitBtn from 'Components/SubmitBtn';
import { WindowBox, WindowContentWrapper, WindowHeader } from 'Components/Window';

class ByomLogin extends Component {

  handleUserNameChange =  e => {
    this.props.onUserNameChange(e.target.value);
  }

  headerIconClick = (e) => {
    this.props.headerIconClick('BYOM', e.target.name);
  }
  render(){
    const { nickname, onUserNameSubmit} = this.props;
    return(
      <WindowBox>
      <WindowHeader handleClick={this.headerIconClick}/>
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

export default ByomLogin;