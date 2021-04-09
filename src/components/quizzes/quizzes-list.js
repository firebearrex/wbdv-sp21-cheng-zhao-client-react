import React, {useState, useEffect} from 'react';
import {Link, Route, useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service';
import Quiz from './quiz';

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);
    const [quizTitle, setQuizTitle] = useState("");

    useEffect(() => {
        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes);
            })
    }, [courseId]);

    return (
        <>
            <Route path={[
                "/courses/:courseId/quizzes"
            ]}
                   exact={true}>
                <div>
                    <h2>Quizzes {quizzes.length}</h2>
                    <ul className={"list-group"}>
                        {
                            quizzes.map(quiz => {
                                return (
                                    <li className={"list-group-item-action"}>
                                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                            <button
                                                onClick={() => setQuizTitle(quiz.title)}
                                                className={"btn btn-primary float-right"}
                                            >
                                                Start
                                            </button>
                                            {quiz.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Route>
            <Route
                path={[
                    "/courses/:courseId/quizzes/:quizId"
                ]}
                exact={true}>
                <Quiz quizTitle={quizTitle}/>
            </Route>
        </>
    );
};

export default QuizzesList;