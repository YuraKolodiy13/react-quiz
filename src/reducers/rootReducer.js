import {combineReducers} from 'redux'
import quizList from './quizList'

export default combineReducers({
  quiz: quizList
})