import React, { Component } from 'react';
import PlayList from './PlayList';
import axios from 'axios';
import MusicInputForm from './MusicInputForm';

export default class Container extends Component{
    constructor(props){
        super(props);

        this.state={
            musics: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3231/playlist')
        .then(res => {
            // 여기서 꼭 state로 받아야하나? 
            this.setState({musics : res.data});
        })
        .catch(function(err){
            console.log(err);
        })
    }
    render(){
        const { user, socket } = this.props;
        const { musics } = this.state;
        return(
            <div>
                <PlayList musics={musics} />
                <MusicInputForm socket={socket} user={user}/>
            </div>
        )
    }
}