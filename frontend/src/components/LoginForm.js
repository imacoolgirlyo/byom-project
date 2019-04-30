import React, { Component } from 'react';
import '../resource/sass/LoginForm.scss';

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
        //user 이름을 socket으로 보낼거임, props : socket, setUser 사용 
        const { socket } = this.props
        const { nickname } = this.state
        console.log(nickname + " is submitted. ");
        socket.emit("VERIFY_USER", nickname, this.setUser);
        // setUser는 emit 후, handler 
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
                <div className="login-header">
                    BYOM 설치 마법사
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
                </div>
               
                {/* <form onSubmit={this.handleSubmit} className="login__form">
                    <input 
                        type="text" 
                        placeholder="My Cool Nickname"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        />
                </form> */}
            </div>
        )
    }
}