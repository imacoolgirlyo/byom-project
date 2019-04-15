import React, { Component } from 'react';
import PlayList from './PlayList';
import axios from 'axios';

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
        const { user, logout } = this.props;
        const { musics } = this.state;
        return(
            <div>
                Container
                <PlayList musics={musics} />
            </div>
        )
    }
}