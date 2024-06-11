import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetQuiz } from '../store/question/question.slice';
import { Button } from 'antd';

function ResultScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { answers, correctCount, wrongCount} = useSelector(store => store.questions)
  
  const handleRetry = () => {
      dispatch(resetQuiz());
      navigate('/');
  };
    
  return (
     <div className="result-screen">
      <h1 className="result-title">Quiz Results</h1>
      <div >
        <p className="correct-answers">Correct Answers: {correctCount}</p>
        <p className="wrong-answers">Wrong Answers: {wrongCount}</p>
      </div>
      <Button type="primary" size='large' style={{float: 'right'}} onClick={handleRetry}>Restart Quiz</Button>
      <div className="answers-list">
        {answers.map((answer, index) => (
          <div key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'wrong'}`}>
            <h3 className="question">{answer.question.question}</h3>
            <p className="selected-answer">Your Answer: {answer.answer}</p>
            {!answer.isCorrect && (
              <p className="correct-answer">Correct Answer: {answer.question.correctAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultScreen