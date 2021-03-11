import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import lessonService from "../../services/lesson-service";

const LessonTabs = (
    {
        myLessons = [],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log(`Loading Lessons for Module: ${moduleId}`);
        if (typeof moduleId !== "undefined" && moduleId !== "undefined") {
            findLessonsForModule(moduleId);
        }
    }, [courseId,moduleId]);
    return (
        <div className={"row mt-3 mr-3"}>
            <ul className={"nav nav-pills col-11 {/*nav-fill*/}"}>
                {
                    myLessons.map(lesson =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            type={"lesson"}
                            updateItem={updateLesson}
                            deleteItem={deleteLesson}
                            item={lesson}
                            active={lesson._id === lessonId}
                            key={lesson._id}
                        />)
                }
            </ul>
            <a className={"{/*nav-item nav-link*/} col-1"}
               aria-current={"true"}>
                <i onClick={() => createLesson(moduleId)}
                className={"fas fa-plus-circle fa-2x"}></i>
            </a>
        </div>
    )
}

const stpm = state => {
    return {
        ...state,
        myLessons: state.lessonReducer.lessons
    }
}

const dtpm = dispatch => {
    return {
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch({
                    type: 'FIND_LESSONS_FOR_MODULE',
                    lessons: actualLessons
                })),
        createLesson: (moduleId) =>
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(theNewLesson => dispatch({
                    type: 'CREATE_LESSON',
                    lesson: theNewLesson
                })),
        deleteLesson: (lesson) =>
            lessonService.deleteLesson(lesson._id)
                .then(status => dispatch({
                    type: 'DELETE_LESSON',
                    lessonToDelete: lesson
                })),
        updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: 'UPDATE_LESSON',
                    lesson
                }))
    }
}

export default connect(stpm, dtpm)(LessonTabs);