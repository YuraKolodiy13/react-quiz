import React, {Component} from 'react'
import classes from './Drawer.scss'
import BackDrop from '../../UI/BackDrop/BackDrop'
import {NavLink} from  'react-router-dom'

const links = [
  {to: '/', label: 'List', exact: true},
  {to: '/auth', label: 'Auth', exact: false},
  {to: '/quiz-creator', label: 'Create test', exact: false}
];

class Drawer extends Component {

  renderLinks(){
   return  links.map((item, index) => {
     return (
         <li key={index}>
           <NavLink to={item.to} exact={item.exact} activeClassName={classes.active} onClick={this.props.onClose}>{item.label}</NavLink>
         </li>
     )
   });
  }
  render(){

    const cls = [classes.Drawer];

    if(!this.props.isOpen){
      cls.push(classes.close);
    }
    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
      </>
    )
  }
}
export default Drawer