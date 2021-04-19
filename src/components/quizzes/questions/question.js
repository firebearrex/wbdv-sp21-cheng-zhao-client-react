import React from 'react';
import TrueFalseQuestion from './true-false-question';
import MultipleChoiceQuestion from './multiple-choice-question';

const Question = (
    {
        question,
        idx,
        recordUserAnswer,
        submitQuiz
    }) => {
    return (
        <>
            {
                question.type === 'TRUE_FALSE' &&
                <TrueFalseQuestion question={question}
                                   idx={idx}
                                   recorUserAnswer={recordUserAnswer}
                                   submitQuiz={submitQuiz}/>
            }
            {
                question.type === 'MULTIPLE_CHOICE' &&
                <MultipleChoiceQuestion question={question}
                                        idx={idx}
                                        recorUserAnswer={recordUserAnswer}
                                        submitQuiz={submitQuiz}/>
            }
        </>
    );
};

export default Question;