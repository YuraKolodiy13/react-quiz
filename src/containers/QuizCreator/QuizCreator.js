import React, {Component} from 'react'
import classes from './QuizCreator.scss'
import Button from "../../components/UI/Button/Button";
import {createControl} from '../../form/formFramework'
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
  return createControl({
    label: `option ${number}`,
    errorMessage: 'value can"t be empty',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'write question',
      errorMessage: 'question can"t be empty'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export default class QuizCreator extends Component{

  state = {
    quiz: [],
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = e => {
    e.preventDefault();
  };

  addQuestionHandler = () => {

  }
  createQuizHandler = () => {

  }
  changeHandler = (value, controlName) => {

  }

  renderControls(){
    return Object.keys(this.state.formControls).map( (controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
          <Auxiliary key={controlName + index} >
            <Input
                label={control.label}
                value={control.value}
                valid={control.valid}
                shouldValidate={!!control.shouldValidate}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={e => this.changeHandler(e.target.value, controlName)}
            />

            {index === 0 ? <hr/> : null}
          </Auxiliary>
      )

    } )
  }

  selectChangeHandler = e => {
    this.setState({
      rightAnswerId: +e.target.value
    })
  }

  render(){

    const select = <Select
      label='chose right answer'
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: 1, value: 1},
        {text: 2, value: 2},
        {text: 3, value: 3},
        {text: 4, value: 4}
        ]}
    />

    return (
        <div className={classes.QuizCreator}>
          <div>
            <h1>create new test</h1>
            <form onSubmit={this.submitHandler}>

              {this.renderControls()}

              {select}


              <Button type="primary" onClick={this.addQuestionHandler}>Add question</Button>
              <Button type="success" onClick={this.createQuizHandler}>Create test</Button>
            </form>
          </div>

        </div>
    )
  }
}