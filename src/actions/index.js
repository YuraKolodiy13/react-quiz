import axios from '../axios/axios-quiz'
import {FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "./actionType";

export const fetchQuizes = () => {
  return async dispatch => {
    dispatch(fetchQuizesStart());
    try{
      const response = await axios.get('/quizes.json');
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test №${index + 1}`
        })
      });

      dispatch(fetchQuizesSuccess(quizes));
    }catch (e) {
      dispatch(fetchQuizesError(e));
    }
  }
};

export const fetchQuizesStart = () => {
  return{
    type: FETCH_QUIZES_START
  }
};

export const fetchQuizesSuccess = (quizes) => {
  return{
    type: FETCH_QUIZES_SUCCESS,
    quizes
  }
};

export const fetchQuizesError = (e) => {
  return{
    type: FETCH_QUIZES_ERROR,
    error: e
  }
};