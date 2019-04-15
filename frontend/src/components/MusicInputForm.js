import React, { Component } from 'react';

export default class MusicInputForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
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