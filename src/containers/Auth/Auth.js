import React, {Component} from 'react'
import classes from './Auth.scss'
import Button from '../../components/UI/Button/Button'
import Input from "../../components/UI/Input/Input";
import {auth} from "../../actions/auth";

import {connect} from "react-redux";

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);

}

class Auth extends Component{

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Write correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Write correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };


  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    );
  };

  submitHandler = e => {
    e.preventDefault();
  };

  validateControl(value, validation){
    if(!validation){
      return true
    }
    let isValid = true;

    if(validation.required){
      isValid = value.trim() !== '' && isValid
    }
    if(validation.email){
      isValid = validateEmail(value) && isValid
    }
    if(validation.minLength){
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...this.state.formControls};
    const control = { ...formControls[controlName]};

    control.value = e.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls,
      isFormValid
    })
  }

  renderInputs(){
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
          <Input
              key={controlName + index}
              type={control.type}
              value={control.value}
              valid={control.valid}
              touched={control.touched}
              label={control.label}
              shouldValidate={!!control.validation}
              errorMessage={control.errorMessage}
              onChange={e => this.onChangeHandler(e, controlName)}
          />
      )
    })
  }

  render(){
    return (
        <div className={classes.Auth}>
          <div>
            <h1>Auth</h1>
            <form onSubmit={this.submitHandler} className={classes.AuthForm}>

              {this.renderInputs()}

              <Button type='success' disabled={!this.state.isFormValid} onClick={this.loginHandler}>Log In</Button>
              <Button type='primary' disabled={!this.state.isFormValid} onClick={this.registerHandler}>Sign Up</Button>
            </form>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  }
};

export default connect(null, mapDispatchToProps)(Auth)