import React, { Component } from 'react';
import io from 'socket.io-client';
import LoginForm from './LoginForm';
import Container from './Container';
import '../resource/sass/Layout.scss';

// socket과 초기 연결, pure 아이디 세팅 후 Container 로딩
const socketURL = "http://localhost:3231";
export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket : null,
            user : null
        };
    }
    componentDidMount(){
        // socket이 연결되지 않았을 때의 socket.on
        this.initSocket()
    }
    initSocket = () => {
        const socket = io(socketURL)
        socket.on('connect', ()=> {
            console.log('Connect');
        })
        this.setState({socket})
    }

   setUser = (user) => {
       const { socket } = this.state
       socket.emit('USER_CONNECTED' , user);
       this.setState({user})
   }

    render(){
        const { socket, user } = this.state
        return(
            <div>
                {
                    !user ?
                    <LoginForm socket={socket} setUser={this.setUser}/>
                    :
                    <Container socket={socket} user={user}/>
                }
            </div>
        )
    }
}