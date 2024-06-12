import React from 'react'
import { Button, Divider, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GetQuestions,  nextQuestion } from '../store/question/question.slice';
import { QuestionProgress } from '../component/QuestionProgress';
import { QuestionAnswer } from '../component/QuestionAnswer';

function QuestionScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, index, currentQuestion, answer, questions } = useSelector((store) => store.questions);

  // Get Question Using APi Calling.
  React.useEffect(() => {
    dispatch(GetQuestions());
  }, [dispatch]);

  // Next Question Function
  const handleNext = () => {
    if (index < questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      navigate('/results');
    }
  };


  return (
    <main className="main">
      {status === 'loading' && <Spin size="large" />}
      {status === 'succeeded' && currentQuestion && (
        <>
          <QuestionProgress />
          <div className="question-cont">
            <h4>{currentQuestion.question}</h4>
            <QuestionAnswer />
          </div>
          <Divider />
          <div>
            {answer && <Button type="primary" size='large' style={{ float: 'right' }} onClick={handleNext}>Next</Button>}
          </div>
        </>
      )}
    </main>
  )
}

export default QuestionScreen