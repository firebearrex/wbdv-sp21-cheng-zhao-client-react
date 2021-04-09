const QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json());

const findQuizById = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json());

const findQuizForCourse = () => {

};

const createQuiz = () => {

};

const updateQuiz = () => {

};

const deleteQuiz = () => {

};

const quizService = {
    findAllQuizzes,
    findQuizById
}

export default quizService;