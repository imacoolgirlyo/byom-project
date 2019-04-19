import React, { Component } from 'react';
import './Music.css';

//DJ 인 경우, 선택 버튼, 해당 id 검색한 후 selected -> true 요청하기
export default class Music extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected : false
        }
        this.handleSelected = this.handleSelected.bind(this);
    }
    handleSelected() {
        const { _id } = this.props.currentMusic;
        // server에 해당 id selected false -> true로 변경 callback은 playlist setState
        this.props.handleSelectedMusic(_id);
    }
    render(){
        const { user } = this.props;
        const { sender, artist, title, selected} = this.props.currentMusic;
        return(
            <div className={selected ? 'selected' : ''}>
                <span> {sender}</span>
                <span> {artist}</span>
                <span> {title}</span>
                {
                    user === "DJ" ?
                        <input
                        name="selected"
                        type="checkbox"
                        value={this.state.selected}
                        onChange={this.handleSelected}
                        /> 
                    :
                    null
                }
            </div>
        )
    }
}