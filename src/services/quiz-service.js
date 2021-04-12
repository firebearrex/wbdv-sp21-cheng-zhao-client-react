const QUIZZES_URL = 'https://wbdv-cheng-zhao-server-node.herokuapp.com/api/quizzes';

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