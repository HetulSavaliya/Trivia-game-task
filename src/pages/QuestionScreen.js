  import React from 'react'
  import { Button,Divider,Spin } from 'antd';
  import { useDispatch, useSelector } from 'react-redux'
  import { useNavigate } from 'react-router-dom';
  import { GetQuestions, newAnswer, nextQuestion } from '../store/question/question.slice';
  import { QuestionProgress } from '../component/QuestionProgress';

  function QuestionScreen() {
    const navigate = useNavigate();
    const { status, index, currentQuestion, answer, questions } = useSelector((store) => store.questions);
    const dispatch = useDispatch();

    // Get Question Using APi Calling.
  React.useEffect(() => {
    dispatch(GetQuestions());
  }, []);

    // Next Question Function
    const handleNext = () => {
    if (index < questions.length -1) {  
      dispatch(nextQuestion());
    } else {
      navigate('/results');
    }
  };

  const Answer = answer !== null;
    
    return (
       <main className="main">
      {status === 'loading' && <Spin size="large" />}
      {status === 'succeeded' && currentQuestion && (
        <>
          <QuestionProgress />
          <div className="question-cont">
            <h4>{currentQuestion.question}</h4>
              <div className="options">
                <div>
              {currentQuestion.options.map((option) => (
                  <div style={{marginBottom:10}}>
                <button
                  key={option}
                  className={`btn btn-option ${answer === option ? 'answer' : ''} ${
                    Answer ? (currentQuestion.correctAnswer === option ? 'correct' : '') : ''
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
            <Divider/>
            <div>
              {answer && <Button type="primary" size='large' style={{float: 'right'}}  onClick={handleNext}>Next</Button>}
            </div>
        </>
      )}
    </main>
    )
  }

  export default QuestionScreen