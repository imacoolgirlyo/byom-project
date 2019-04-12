import React, { Component } from 'react';
import axios from 'axios';
import Music from './Music';

export default class PlayList extends Component{
    constructor(props){
        super(props);
        this.state= {
            musics : []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3231/playlist')
        .then(res => {
            this.setState({musics : res.data});
        })
        .catch(function(err){
            console.log(err);
        })
    }

    playList(){
        return this.state.musics.map(function(currentMusic, i){
            return <Music music={currentMusic} key={i}/>;
        })
    }
    render(){
        return(
            <div>
                This is PlayList
               {this.playList()}
            </div>
        )
    }
}