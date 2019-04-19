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
    handleSelected(e) {
        // selected : false (채크 되어 있지 않을 때)
        const { _id, selected } =this.props.currentMusic;
        if(selected === false){
        // server에 해당 id selected false -> true로 변경 callback은 playlist setState
            this.props.handleAddCheck(_id);
            this.setState({selected : true})
        }else{
            console.log('Remove Check');
            // selected: true (체크 해제 하고 싶을 때, remove seleted css)
            this.props.handleRemoveCheck(_id);
        }
        
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
                        checked={this.state.selected}
                        onChange={this.handleSelected}
                        /> 
                    :
                    null
                }
            </div>
        )
    }
}