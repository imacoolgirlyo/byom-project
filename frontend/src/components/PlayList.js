import React, { Component } from 'react';
import Music from './Music';

// PlayList가 아닌 App이 musics라는 state를 가지고 있어야하나 ? App이 가지고 있어햐나는 이유는?

export default class PlayList extends Component{
    constructor(props){
        super(props);
    }

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