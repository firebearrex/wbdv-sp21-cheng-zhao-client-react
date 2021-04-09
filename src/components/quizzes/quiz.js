import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import questionService from '../../services/question-service';
import Question from './questions/question';

const Quiz = (quizTitle) => {
    const {quizId} = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => setQuestions(questions));
    }, [quizId]);

    return (
        <div>
            <h3>{quizTitle} (number of questions: {questions.length})</h3>
            <ul>
                {
                    questions.map(question => {
                        return (
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Quiz;