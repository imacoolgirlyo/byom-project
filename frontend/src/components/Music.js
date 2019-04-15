import React, { Component } from 'react';

export default class Music extends Component{
    render(){
        return(
            <div>
                <span> {this.props.currentMusic.sender}</span>
                <span> {this.props.currentMusic.artist}</span>
                <span> {this.props.currentMusic.title}</span>
            </div>
        )
    }
}