import React from 'react';
import TrueFalseQuestion from './true-false-question';
import MultipleChoiceQuestion from './multiple-choice-question';

const Question = (
    {
        question,
        idx,
        recordUserAnswer,
        submitQuiz,
        score
    }) => {
    return (
        <>
            {
                question.type === 'TRUE_FALSE' &&
                <TrueFalseQuestion question={question}
                                   idx={idx}
                                   recordUserAnswer={recordUserAnswer}
                                   submitQuiz={submitQuiz}
                                   score={score}/>
            }
            {
                question.type === 'MULTIPLE_CHOICE' &&
                <MultipleChoiceQuestion question={question}
                                        idx={idx}
                                        recordUserAnswer={recordUserAnswer}
                                        submitQuiz={submitQuiz}
                                        score={score}/>
            }
        </>
    );
};

export default Question;