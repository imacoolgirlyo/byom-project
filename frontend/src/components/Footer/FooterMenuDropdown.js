import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import { Icon } from './FooterMenuIcons';
import 'resource/sass/Footer/FooterMenu.scss';


const MenuDropdown = ({items}) => {
  let list = items.map( item => {
    return <div> {item.name}</div>
  } )
  return(
    <ul className="dropdown-content">
      {list}
    </ul>
  )
}

// class MenuDropdown extends Component {

//   componentDidMount(){
//     // archive data 불러오기
//     // DJ가 그날 플레이한 내용을 export 하면, 날짜에 맞춰서 해당 내용들이 /byom-archive에 날짜별로 저장되고  
//     // 가져온 뒤 해당 날짜 별로 dropdown 이 생김
//   }
//   makeDropdown = () => {
//     const { items } = this.props;
//     let list = items.map( item => {

//     })

//   }

//   render(){
//     return(
//       <ul className="dropdown-content">
//       {this.makeDropdown}
//     </ul>
//     )
//   }
// } 
//플레이된 음악들 가져와서 보여줌
// 아직 없다면 (비어있음) 이라고 표시해주기 

export default MenuDropdown;