import React, { Component } from 'react';
import io from 'socket.io-client';
import LoginForm from './LoginForm';
import Container from './Container';
import '../resource/sass/Layout.scss';

// url 
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
        console.log('ipad hi');
        this.initSocket()
    }
    /*
	*	Initializes socket event callbacks
	*/
    initSocket = () => {
        console.log('ipad tried');
        const socket = io(socketURL)
        console.log(socket);
        socket.on('connect', ()=> {
            console.log('Connect');
        })
        this.setState({socket})
    }

    /*
    *	user info 다시 서버로 연결하기
    *   해당 user name이 login 되어있다면.
	*/

    /*
    *	현재 user login 시키기
    *   @param user an object {id:number ,name: string }
    */
   setUser = (user) => {
       const { socket } = this.state
       socket.emit('USER_CONNECTED' , user);
       this.setState({user})
   }

//    logout = () => {
//        const { socket } = this.state
//        socket.emit(LOG_OUT)
//        this.setState({user : null})
//    }

    render(){
        const { title } = this.props
        const { socket, user } = this.state
        return(
            <div className="container">
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