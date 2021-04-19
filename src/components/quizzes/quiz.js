import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service';
import questionService from '../../services/question-service';
import Question from './questions/question';

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [quizTitle, setQuizTitle] = useState();
    const [questions, setQuestions] = useState([]);
    const [attemptedQuestions, setAttemptedQuestions] = useState([]);

    const recordUserAnswer = (questionIdx, userAnswer) => {
        setAttemptedQuestions(prevState => {
            let newState = [...prevState];
            let attemptedQuestion = {
                ...prevState[questionIdx],
                answer: userAnswer
            };
            newState[questionIdx] = attemptedQuestion;
            return newState;
        });
    };

    const submitQuiz = () => {
        quizService.submitQuiz(quizId, attemptedQuestions);
    }

    useEffect(() => {
        if (typeof quizId !== 'undefined' && quizId !== 'undefined') {
            quizService.findQuizById(quizId)
                .then(quiz => setQuizTitle(quiz.title));
            console.log(`Loading questions for quizId: ${quizId}`);
            questionService.findQuestionsForQuiz(quizId)
                .then((questions) => {
                    setQuestions(questions);
                    setAttemptedQuestions(questions);
                });
        }
    }, [courseId, quizId]);

    return (
        <div className={'container'}>
            <h3>{quizTitle} (number of questions: {questions.length})</h3>
            <ul>
                {
                    questions.map((question, idx) => {
                        return (
                            <li key={question._id}>
                                <Question question={question}
                                          idx={idx}
                                          recordUserAnswer={recordUserAnswer}
                                          submitQuiz={submitQuiz}/>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Quiz;