const QUIZZES_URL = 'https://wbdv-cheng-zhao-server-node.herokuapp.com/api/quizzes';
const LOCAL_QUIZZES_URL = 'http://localhost:4000/api/quizzes';

const findAllQuizzes = () =>
    fetch(QUIZZES_URL)
        .then(response => response.json());

const findQuizById = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json());

const submitQuiz = (quizId, questions) =>
    fetch(`${LOCAL_QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());


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
    findQuizById,
    submitQuiz
}

export default quizService;