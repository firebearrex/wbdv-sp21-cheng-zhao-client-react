const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json());

export const createCourse = (course) => {}


export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateCourse = (courseId, course) => {}

const api = {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse
}

export default api;