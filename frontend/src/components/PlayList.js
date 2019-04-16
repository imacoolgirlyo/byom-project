import React, { Component } from 'react';
import Music from './Music';

export default class PlayList extends Component{
    //user 이름이 dj 이면 선택, 수정 버튼 만들기 
    playList(){
        return this.props.musics.map(function(currentMusic, i){
            return <Music currentMusic={currentMusic} key={i}/>;
        })
    }
    render(){
        
        return(
            <div>
               {this.playList()}
            </div>
        )
    }
}