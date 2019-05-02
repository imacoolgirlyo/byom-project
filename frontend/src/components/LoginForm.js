import React, { Component } from 'react';
import '../resource/sass/LoginForm.scss';
import LoginHeaderLogo from './atoms/LoginHeaderLogo';

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
            <div className="login">
                <div className="login-inner">
                    <div className="login-header">
                        {/* <div className="header-logo"></div> */}
                        <div className='login-header-column'>
                            <LoginHeaderLogo />
                            <div>BYOM.exe</div>
                        </div>
                        <div className='login-header-column'>
                            <div className="window-icon min"></div>
                            <div className="window-icon max"></div>
                            <div className="window-icon close"></div>
                        </div>
                        
                    </div>
                    <div className="login-content">
                        <div className="content-info">
                            <div> 중앙 초록 이미지</div>
                            <div> 사용자 정보</div>
                            <div> 사용자의 닉네임을 입력하여 주십시오</div>
                        </div>
                        <form className="content-form" onSubmit={this.handleSubmit}>
                            <div>닉네임(A) :</div>
                            <input
                                className="nickname-input"
                                type="text"
                                id="nickname"
                                value={this.state.nickname}
                                onChange ={this.handleChange}
                            />
                            <button
                            className="submit-Btn"
                            onTouchStart={this.handleTouch}
                            type="submit" > 다음 </button>
                        </form>
                    </div>
                </div>
                {/* <div className="login-header">
                    BYOM.exe
                </div>
                <div className="login-guide">
                    <div className="user-info"> 사용자 정보 </div>
                    <div className="user-info-detail"> 사용자의 닉네임을 입력하여 주십시오. </div>
                </div>
                <div className="form-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="nickname-detail">
                            <div> 닉네임(A) : </div>
                            <input
                                className="nickname-input"
                                type="text"
                                id="nickname"
                                value={this.state.nickname}
                                onChange ={this.handleChange}
                                />
                        </div>
                        <button
                        className="submit-Btn"
                        onTouchStart={this.handleTouch}
                         type="submit" > 다음 </button>
                    </form>
                </div> */}
               
            </div>
        )
    }
}