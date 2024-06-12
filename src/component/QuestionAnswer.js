import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newAnswer } from '../store/question/question.slice';

export const QuestionAnswer = () => {
  const dispatch = useDispatch();
  const {  currentQuestion, answer, } = useSelector(store => store.questions)
  const Answer = answer !== null;

  return (
    <>
      <div className="question-cont">
        <h4>{currentQuestion.question}</h4>
        <div className="options">
          <div>
            {currentQuestion.options.map((option, index) => (
              <div style={{ marginBottom: 10 }} key={index}>
                <button
                  className={`btn btn-option ${answer === option ? 'answer' : ''} ${Answer ? (currentQuestion.correctAnswer === option ? 'correct' : '') : ''
                    }`}
                  disabled={Answer}
                  onClick={() => dispatch(newAnswer(option))}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
