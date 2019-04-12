import React, { Component } from 'react';


export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickname : '',
            error : ''
        };
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

    // handleChange = (e) => {
    //     this.setState({nickname : e.target.value})
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     //user 이름을 socket으로 보낼거임, props : socket, setUser 사용 
    //     const { socket } = this.props
    //     const { nickname } = this.state
    //     console.log(nickname + " is submitted. ");
    //     socket.emit("VERIFY_USER", nickname);
    //     // setUser는 emit 후, handler 
    // }

    // setError = (error) => {
    //     this.setState({error})
    // }

    render(){
        const { nickname, error } = this.state
        return(
            <div className="login">
                <form>
                    <input
                        type="text"
                        placeholder="Your Cool Nickname"
                        id="nickname"
                        />
                </form>
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