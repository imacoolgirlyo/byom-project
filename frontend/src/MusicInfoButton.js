import React ,{ Component } from 'react';
import { FaPlay, FaCheck } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';
import 'resource/sass/Music.scss';
// const MusicInfoButton = () => {

// }

class MusicInfoButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { isPlayed, isPlaying, onPlayButtonClick } = this.props;
    let button ;
    if(isPlaying){ button = <MdClear onClick={onPlayButtonClick}/> ;}
    else if(!isPlaying && !isPlayed){ button = <FaPlay onClick={onPlayButtonClick}/>;}
    else if(!isPlaying && isPlayed){button = <FaCheck onClick={onPlayButtonClick}/>}
    return(
      <div className="music-column">{button}</div>
    )
  }
}
export default MusicInfoButton;