import React, { Component }  from 'react';
import Input from 'Components/Input';
import SubmitBtn from 'Components/SubmitBtn';
import InputLabel from 'Components/InputLabel';
import SeperateLine from 'Components/SeperateLine';
import monitor from 'resource/image/monitor.png';
import './ByomLogin.scss';
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
      <WindowHeader name="BYOM.exe" handleClick={this.headerIconClick}/>
      <WindowContentWrapper>
        <div className="content_sub">
          <div className="sub">
            <img className="monitor" src={monitor} alt="monitor"/>
          </div>
        </div>
        <form className="content_form" onSubmit={onUserNameSubmit}>
          <div className="input_container">
            <InputLabel> 닉네임(A): </InputLabel>
            <Input
              type="text"
              value= {nickname}
              onChange= {this.handleUserNameChange}
            ></Input>
          </div>
          <SeperateLine/>
          <SubmitBtn> 다음 > </SubmitBtn>
        </form>
      </WindowContentWrapper>
      </WindowBox>
    )
  }

}

export default ByomLogin;