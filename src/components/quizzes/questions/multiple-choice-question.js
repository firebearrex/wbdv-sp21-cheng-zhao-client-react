import React, {useState} from 'react';

const MultipleChoiceQuestion = ({question}) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [userAnswerCorrect, setUserAnswerCorrect] = useState(false);
    const [isGraded, setIsGraded] = useState(false);

    const highlightChoice = (choice) => {
        if (!isGraded || userAnswer === '') {
            return '';
        } else if (userAnswerCorrect) {
            if (choice === userAnswer) {
                return 'list-group-item-success';
            } else {
                return '';
            }
        } else {
            if (choice === userAnswer) {
                return 'list-group-item-danger';
            } else if (choice === question.correct) {
                return 'list-group-item-success';
            } else {
                return '';
            }
        }
    };

    const showCheckInChoice = (choice) => {
        if (!isGraded || userAnswer === '') {
            return false;
        } else if (userAnswerCorrect && choice === userAnswer) {
            return true;
        } else if (!userAnswerCorrect && choice === question.correct) {
            return true;
        } else {
            return false;
        }
    };

    const showTimesInChoice = (choice) => {
        if (!isGraded || userAnswer === '') {
            return false;
        } else if (!userAnswerCorrect && choice === userAnswer) {
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
                    // some logic to decide whether CHECK mark should be shown
                    ((isGraded && userAnswer !== '') &&
                        userAnswerCorrect) &&
                    <i className={'fas fa-check ml-2'}></i>
                }
                {
                    // some logic to decide whether TIMES mark should be shown
                    ((isGraded && userAnswer !== '') &&
                        !userAnswerCorrect) &&
                    <i className={'fas fa-times ml-2'}></i>
                }
            </h5>
            <ul className={'list-group'}>
                {
                    question.choices.map((choice, idx) => {
                        return (
                            <li className={`list-group-item ${highlightChoice(choice)}`}
                                key={idx}>
                                <label>
                                    <input type='radio'
                                           onClick={() => {
                                               setIsGraded(false);
                                               setUserAnswer(choice);
                                           }}
                                           name={question._id}
                                           value={choice}/>
                                    {choice}
                                </label>
                                {
                                    // some logic to decide whether CHECK mark should be shown
                                    showCheckInChoice(choice) &&
                                    <i className={'fas fa-check float-right'}></i>
                                }
                                {
                                    // some logic to decide whether TIMES mark should be shown
                                    showTimesInChoice(choice) &&
                                    <i className={'fas fa-times float-right'}></i>

                                }
                            </li>
                        );
                    })
                }
            </ul>
            <p>
                Your answer: {userAnswer}
            </p>
            <button type={'button'}
                    onClick={() => {
                        setIsGraded(true);
                        userAnswer === question.correct ? setUserAnswerCorrect(true) : setUserAnswerCorrect(false);
                    }}
                    className={'btn btn-success mb-2'}>
                Grade
            </button>
        </>
    );
};

export default MultipleChoiceQuestion;