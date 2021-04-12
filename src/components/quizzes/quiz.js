import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service';
import questionService from '../../services/question-service';
import Question from './questions/question';

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quizTitle, setQuizTitle] = useState();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (typeof quizId !== 'undefined' && quizId !== 'undefined') {
            quizService.findQuizById(quizId)
                .then(quiz => setQuizTitle(quiz.title));
            console.log(`Loading questions for quizId: ${quizId}`);
            questionService.findQuestionsForQuiz(quizId)
                .then((questions) => setQuestions(questions));
        }
    }, [courseId, quizId]);

    return (
        <div className={'container'}>
            <h3>{quizTitle} (number of questions: {questions.length})</h3>
            <ul>
                {
                    questions.map(question => {
                        return (
                            <li key={question._id}>
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