import React, { Component } from 'react';
import PlayList from './PlayList';


export default class Container extends Component{
    constructor(props){
        super(props);

        this.state={
            musics: []
        }
    }

    setActiveChat = (activeChat) => {
        this.setState({activeChat})
    }

    render(){
        const { user, logout } = this.props;
        const { musics } = this.state;
        return(
            <div>
                <PlayList musics={musics} />
            </div>
        )
    }
}