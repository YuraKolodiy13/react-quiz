import React, {Component} from 'react'
import classes from './QuizList.scss'
import {NavLink} from  'react-router-dom'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from 'react-redux'
import {fetchQuizes} from "../../actions/quiz";

class QuizList extends Component{

  renderQuizes(){
    return this.props.quizes.map(quiz => {
      return (
          <li key={quiz.id}>
            <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
          </li>
      )
    })
  }

  componentDidMount(){
    this.props.fetchQuizes()
  }

  render(){
    return (
        <div className={classes.QuizList}>
         <div>
           <h1>List tests</h1>

           {
             this.props.loading
             ? <Loader/>
             : <ul>{this.renderQuizes()}</ul>
           }

         </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
};

const mapDispatchToProps = (dispatch) =>  {
  return{
    fetchQuizes: () => dispatch(fetchQuizes())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)