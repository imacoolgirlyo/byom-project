import React, { Component } from 'react';
import '../resource/sass/LoginForm.scss';
import { WindowHeader } from './LoginHeader';

import { SubmitBtn } from './atoms/SubmitBtn';
import { SeperateLine } from './atoms/SeperateLine';
import { Input } from './atoms/Input';
import { InputLabel} from './atoms/InputLabel';
import { WindowOutContainer, WindowInnerContainer} from './window/WindowContainer';

// username 서버로 보내기, 아이디가 중복되지 않으면 setUser로 nickname 보내기
export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            nickname : ""
        }
        this.handleTouch = this.handleTouch.bind(this);
    }
    // setUser = ({user, isUser}) => {
    //     console.log('After Creating User');
    //     if(isUser){
    //         this.setError('User name taken')
    //     }else{
    //         this.setError("");
    //         this.props.setUser(user);
    //     }
    // }

    setUser = (user) => {
        this.props.setUser(user);
    }

    handleChange = (e) => {
        this.setState({nickname : e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { socket } = this.props
        const { nickname } = this.state
        console.log(nickname + " is submitted. ");
        socket.emit("VERIFY_USER", nickname, this.setUser);
    }

    setError = (error) => {
        this.setState({error})
    }
    handleTouch(e){
        const { socket } = this.props
        console.log('touch!');
        socket.emit('touch', 'nickname');
    }

    render(){
        return(
					<WindowOutContainer>
						<WindowInnerContainer>
							<WindowHeader name="Bring Your Own Music.exe"/>
									<div className="login-content">
											<div className="content-info">
													<div className="content-green"> </div>
													<div className="content-user-info"> 사용자 정보</div>
													<div className="content-nickname-guide"> 사용자의 닉네임을 입력하여 주십시오</div>
											</div>
											<form className="content-form" onSubmit={this.handleSubmit}>
															<InputLabel> 닉네임(A): </InputLabel>
															<Input 
																type="text"
																id="nickname"
																value={this.state.nickname}
																onChange ={this.handleChange}
															></Input>
															<SeperateLine></SeperateLine>
															<SubmitBtn> 다음 > </SubmitBtn>
											</form>
									</div>
						</WindowInnerContainer>
					</WindowOutContainer>
        )
    }
}