import React, { Component } from 'react';

export default class MusicInputForm extends Component{
    render(){
        console.log(this.props.nickname)
        return(
            <div>
                <form>
                    <input 
                    type="text"
                    placeholder="Artist"/>
                    <input 
                    type="text"
                    placeholder="Title"/>
                </form>
            </div>
        )
    }
}