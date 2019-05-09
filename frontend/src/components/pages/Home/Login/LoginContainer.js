import React, { Component } from 'react';
import  LoginPresenter from './LoginPresenter';
// username 서버로 보내기, 아이디가 중복되지 않으면 setUser로 nickname 보내기
export default class LoginContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            nickname : "",
            error : ""
        }
        this.handleTouch = this.handleTouch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    setUser = (user, canSet) => {
        if(canSet){
            this.setError("");
            this.props.setUser(user);
        }else{
            this.setError('이미 있는 닉네임 입니다.')
        }
    }

    handleChange(e){
        this.setState({nickname : e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const { socket } = this.props
        const { nickname } = this.state
        console.log(nickname + " is submitted. ");
        socket.emit("VERIFY_USER", nickname, this.setUser);
    }

    setError = (error) => {
        console.log('이미 있는 닉네임입니다');
        console.log(error);
        this.setState({error})
    }
    handleTouch(e){
        const { socket } = this.props
        console.log('touch!');
        socket.emit('touch', 'nickname');
    }

    render(){
        return(
          <LoginPresenter 
            errMsg = {this.state.error}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            nickname={this.state.nickname}
          >
          </LoginPresenter>
        )
    }
}