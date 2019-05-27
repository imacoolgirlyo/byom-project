import React, {Component, Fragment} from 'react';
import FooterMenuContent from './FooterMenuContent';
import 'resource/sass/Footer/FooterMenu.scss';

class FooterMenu extends Component{
  // consturctor(props){
  //   super(props);
  // }
  render(){
    return(
      <div className="footer_menu">
        <div className="sidebar"></div>
        <div className="headline"><b>Windows</b> 98</div>
        <ul className="menu">     
          <FooterMenuContent menuList={menuList}/>
        </ul>
      </div>
    )
  }
}

export default FooterMenu;

const menuList = [
  { id:1,
    name: "Shutdown"
  },
  { id:3,
    name: "Run"
  },
  { id:4,
    name: "Help"
  },
  { id:5,
    name: "Find"
  },
  { id:6,
    name: "Settings"
  },
  { id:7,
    name: "Archive",
    dropdown : [{id:10, name:"BYOM 0505"}]
  },
  { id:8,
    name: "Programs",
    dropdown : [{id: 9, name:"Notepad"}]
  }
]
