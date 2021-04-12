import React, {useState, useEffect} from 'react';
import {Link, Route, useParams} from 'react-router-dom';
import quizService from '../../services/quiz-service';
import Quiz from './quiz';

const QuizzesList = ({setQuizTitle}) => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([]);
    // const [quizTitle, setQuizTitle] = useState("");

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
                <div className={"container"}>
                    <h2>Quizzes</h2>
                    <ul className={"list-group"}>
                        {
                            quizzes.map(quiz => {
                                return (
                                    <li className={"list-group-item-action"}
                                        key={quiz._id}>
                                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                            <button
                                                type={"button"}
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
        </>
    );
};

export default QuizzesList;