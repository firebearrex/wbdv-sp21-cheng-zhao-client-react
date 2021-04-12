import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [userAnswerCorrect, setUserAnswerCorrect] = useState(false);
    const [isGraded, setIsGraded] = useState(false);

    const highlightTrue = () => {
        if (!isGraded) {
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
    }

    const highlightFalse = () => {
        if (!isGraded) {
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
                                   setUserAnswer('true');
                               }}
                               name={question._id}
                               value={'true'}/>
                        TRUE
                    </label>
                </li>
                <li className={`list-group-item ${highlightFalse()}`}>
                    <label>
                        <input type='radio'
                               onClick={() => {
                                   setUserAnswer('false');
                               }}
                               name={question._id}
                               value={'false'}/>
                        FALSE
                    </label>
                </li>
            </ul>
            <p>
                Your answer: {userAnswer}
            </p>
            <button type="button"
                    onClick={() => {
                        setIsGraded(true);
                        userAnswer === question.correct ? setUserAnswerCorrect(true) : setUserAnswerCorrect(false);
                    }}
                    class="btn btn-success">
                Grade
            </button>
        </>
    );
};

export default TrueFalseQuestion;