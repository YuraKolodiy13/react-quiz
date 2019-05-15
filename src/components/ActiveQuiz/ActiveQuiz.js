import React from 'react'
import classes from './ActiveQuiz.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>2.</strong>
          how are you
      </span>
      <small>
        4 from 12
      </small>
    </p>

    <ul>
      <AnswersList
        answers={props.answers}
      />
    </ul>
  </div>
);

export default ActiveQuiz