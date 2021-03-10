const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001013862/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json());

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());


export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const updateCourse = (courseId, updatedCourse) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedCourse),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json());

// const api = {
//     findAllCourses,
//     deleteCourse,
//     createCourse,
//     updateCourse
// }

// export default api;

export default {
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse,
    findCourseById
}