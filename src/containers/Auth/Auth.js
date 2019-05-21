import React, {Component} from 'react'
import classes from './Auth.scss'
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component{

  loginHandler = () => {
    console.log(1);
  }
  registerHandler = () => {
    console.log(2)
  }
  submitHandler = e => {
    e.preventDefault();
  }

  render(){
    return (
        <div className={classes.Auth}>
          <div>
            <h1>Auth</h1>
            <form onSubmit={this.submitHandler} className={classes.AuthForm}>
              <Input type='email' label='Email'/>
              <Input type='password' label='Password' errorMessage={'test'}/>
              <Button type='success' onClick={this.loginHandler}>Log In</Button>
              <Button type='primary' onClick={this.registerHandler}>Sign Up</Button>
            </form>
          </div>
        </div>
    )
  }
}