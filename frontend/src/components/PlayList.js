import React, { Component } from 'react';
import Music from './Music';

export default class PlayList extends Component{
    playList(){
        return this.props.musics.map(function(currentMusic, i){
            return <Music currentMusic={currentMusic} key={i}/>;
        })
    }
    render(){
        return(
            <div>
                this is playList
               {this.playList()}
            </div>
        )
    }
}