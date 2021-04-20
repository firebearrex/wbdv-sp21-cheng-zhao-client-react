import React, {useState} from 'react';
import quizService from '../../../services/quiz-service';

const TrueFalseQuestion = (
    {
        question,
        idx,
        recordUserAnswer,
        submitQuiz,
        score,
    }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [userAnswerCorrect, setUserAnswerCorrect] = useState(false);
    const [isGraded, setIsGraded] = useState(false);

    const highlightTrue = () => {
        if (!isGraded || userAnswer === '') {
            return '';
        } else if (userAnswerCorrect) {
            if (userAnswer === 'true') {
                return 'list-group-item-success';
            } else {
                return '';
            }
        } else {
            if (userAnswer === 'true') {
                return 'list-group-item-danger';
            } else {
                return 'list-group-item-success';
            }
        }
    };

    const highlightFalse = () => {
        if (!isGraded || userAnswer === '') {
            return '';
        } else if (userAnswerCorrect) {
            if (userAnswer === 'false') {
                return 'list-group-item-success';
            } else {
                return '';
            }
        } else {
            if (userAnswer === 'false') {
                return 'list-group-item-danger';
            } else {
                return 'list-group-item-success';
            }
        }
    };

    const showCheckInTrue = () => {
        if (!isGraded || userAnswer === '') {
            return false;
        } else if (userAnswerCorrect && userAnswer === 'true') {
            return true;
        } else if (!userAnswerCorrect && userAnswer !== 'true') {
            return true;
        } else {
            return false;
        }
    };

    const showTimesInTrue = () => {
        if (!isGraded || userAnswer === '') {
            return false;
        } else if (!userAnswerCorrect && userAnswer === 'true') {
            return true;
        } else {
            return false;
        }
    };

    const showCheckInFalse = () => {
        if (!isGraded || userAnswer === '') {
            return false;
        } else if (userAnswerCorrect && userAnswer === 'false') {
            return true;
        } else if (!userAnswerCorrect && userAnswer !== 'false') {
            return true;
        } else {
            return false;
        }
    };

    const showTimesInFalse = () => {
        if (!isGraded || userAnswer === '') {
            return false;
        } else if (!userAnswerCorrect && userAnswer === 'false') {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <h5>
                {question.question}
                {
                    ((isGraded && userAnswer !== '') &&
                        userAnswerCorrect) &&
                    <i className={'fas fa-check ml-2'}></i>
                }
                {
                    ((isGraded && userAnswer !== '') &&
                        !userAnswerCorrect) &&
                    <i className={'fas fa-times ml-2'}></i>
                }
            </h5>
            <ul className={'list-group'}>
                <li className={`list-group-item ${highlightTrue()}`}>
                    <label>
                        <input type='radio'
                               onClick={() => {
                                   setIsGraded(false);
                                   setUserAnswer('true');
                                   recordUserAnswer(idx, 'true');
                               }}
                               name={question._id}
                               value={'true'}/>
                        TRUE
                    </label>
                    {
                        showCheckInTrue() &&
                        <i className={'fas fa-check float-right'}></i>
                    }
                    {
                        showTimesInTrue() &&
                        <i className={'fas fa-times float-right'}></i>
                    }
                </li>
                <li className={`list-group-item ${highlightFalse()}`}>
                    <label>
                        <input type='radio'
                               onClick={() => {
                                   setIsGraded(false);
                                   setUserAnswer('false');
                                   recordUserAnswer(idx, 'false');
                               }}
                               name={question._id}
                               value={'false'}/>
                        FALSE
                    </label>
                    {
                        showCheckInFalse() &&
                        <i className={'fas fa-check float-right'}></i>
                    }
                    {
                        showTimesInFalse() &&
                        <i className={'fas fa-times float-right'}></i>
                    }
                </li>
            </ul>
            <p className={'my-2'}>
                Your answer: {userAnswer}
                <br/>
                {
                    isGraded &&
                    `Your score: ${score}`
                }
            </p>
            <button type='button'
                    onClick={() => {
                        userAnswer === question.correct ? setUserAnswerCorrect(true) : setUserAnswerCorrect(false);
                        setIsGraded(true);
                        submitQuiz();
                    }}
                    className='btn btn-success my-2'>
                {/*Grade*/}
                Submit
            </button>
        </>
    );
};

export default TrueFalseQuestion;