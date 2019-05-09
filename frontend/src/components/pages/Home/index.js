import React, { Component, Fragment } from 'react';
import io from 'socket.io-client';
import LoginContainer from './Login';
import PlaylistContainer from './Playlist/PlaylistContainer';

// socket과 초기 연결, pure 아이디 세팅 후 Container 로딩
const socketURL = "http://localhost:3231";
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            socket : null,
            user : null,
            connectMsg : ''
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
            this.setState({socket})
        })

        socket.on('connect_error', () => {
            this.setState({connectMsg : '연결이 되지 않습니다.'})
            console.log('연결이 되지 않습니다.');
        })
        
    }
    // db에 저장할 차례

    setUserCallback =(data) => {
        console.log(data.nickname); // {id: , nickname:}
        this.setState({user : data.nickname});
    }
   setUser = (user) => {
       console.log(user);
       const { socket } = this.state
       socket.emit('NICKNAME_SAVED' , user, this.setUserCallback);
    //    this.setState({user})
   }

    render(){
        const { socket, user } = this.state
        return(
            <Fragment>
                {
                    !user ?
                    <LoginContainer socket={socket} setUser={this.setUser}/>
                    :
                    <PlaylistContainer socket={socket} user={user}/>
                    // <PlaylistContainer socket={socket} user={user}/>
                }
            </Fragment>
        )
    }
}