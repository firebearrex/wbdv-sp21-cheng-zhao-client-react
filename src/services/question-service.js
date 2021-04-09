const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
const QUESTIONS_URL = 'http://localhost:4000/api/questions';

const findAllQuestions = () =>
    fetch(QUESTIONS_URL)
        .then(response => response.json());

const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json());

const createQuestion = () => {

};

const updateQuestion = () => {

};

const deleteQuestion = () => {

};

const questionService = {
    findAllQuestions,
    findQuestionsForQuiz
}

export default questionService;

