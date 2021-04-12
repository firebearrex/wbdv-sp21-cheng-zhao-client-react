const QUIZZES_URL = 'https://wbdv-cheng-zhao-server-node.herokuapp.com/api/quizzes';
const QUESTIONS_URL = 'https://wbdv-cheng-zhao-server-node.herokuapp.com/api/questions';

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

