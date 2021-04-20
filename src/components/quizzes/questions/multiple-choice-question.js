import React, {useState} from 'react';

const MultipleChoiceQuestion = (
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
                    question.choices.map((choice, choiceIdx) => {
                        return (
                            <li className={`list-group-item ${highlightChoice(choice)}`}
                                key={choiceIdx}>
                                <label>
                                    <input type='radio'
                                           onClick={() => {
                                               setIsGraded(false);
                                               setUserAnswer(choice);
                                               recordUserAnswer(idx, choice);
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
            <p className={'my-2'}>
                Your answer: {userAnswer}
                <br/>
                {
                    isGraded &&
                        `Your score: ${score}`
                }
            </p>
            <button type={'button'}
                    onClick={() => {
                        userAnswer === question.correct ? setUserAnswerCorrect(true) : setUserAnswerCorrect(false);
                        setIsGraded(true);
                        submitQuiz();
                    }}
                    className={'btn btn-success my-2'}>
                {/*Grade*/}
                Submit
            </button>
        </>
    );
};

export default MultipleChoiceQuestion;