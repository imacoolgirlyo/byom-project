import React, { Component } from 'react';
import Music from './Music';

export default class PlayList extends Component{
    //user 이름이 dj 이면 선택, 수정 버튼 만들기 
    playList(){
        const { user, handleAddCheck, handleRemoveCheck } = this.props;
        return this.props.musics.map(function(currentMusic, i){
            return <Music
                    user={user} 
                    currentMusic={currentMusic}
                    handleAddCheck={handleAddCheck}
                    handleRemoveCheck = {handleRemoveCheck}
                    key={i}/>
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