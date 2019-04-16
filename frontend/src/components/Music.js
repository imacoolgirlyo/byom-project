import React, { Component } from 'react';

export default class Music extends Component{
    render(){
        const { sender, artist, title } = this.props.currentMusic
        return(
            <div>
                <span> {sender}</span>
                <span> {artist}</span>
                <span> {title}</span>
            </div>
        )
    }
}