import {combineReducers} from 'redux'
import quizList from './quiz'
import createReducer from "./create";
import authReducer from "./auth";

export default combineReducers({
  quiz: quizList,
  create: createReducer,
  auth: authReducer
})