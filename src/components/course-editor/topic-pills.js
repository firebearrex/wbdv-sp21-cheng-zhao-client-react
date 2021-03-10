import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import topicService from "../../services/topic-service";
import lessonService from "../../services/lesson-service";

const TopicPills = (
    {
        myTopics = [],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log(`Loading Topics for Lesson: ${lessonId}`);
        if (typeof lessonId !== "undefined" && lessonId !== "undefined") {
            findTopicsForLesson(lessonId);
        }
    }, [lessonId]);
    return (
        <>
            <ul className={"nav nav-pills nav-fill"}>
                {
                    myTopics.map(topic =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${topic._id}`}
                            type={"topic"}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                            active={topic._id === topicId}
                            key={topic._id}
                        />)
                }
                <a className={"nav-item nav-link"}
                   aria-current={"true"}>
                    <i onClick={() => createTopic(lessonId)}
                       className={"fas fa-plus-circle"}></i>
                </a>
            </ul>
        </>
    )
}

const stpm = state => {
    return {
        ...state,
        myTopics: state.topicReducer.topics
    }
}

const dtpm = dispatch => {
    return {
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch({
                    type: 'FIND_TOPICS_FOR_LESSON',
                    topics: actualTopics
                })),
        createTopic: (lessonId) =>
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(theNewTopic => dispatch({
                    type: 'CREATE_TOPIC',
                    topic: theNewTopic
                })),
        deleteTopic: (topic) =>
            topicService.deleteTopic(topic._id)
                .then(status => dispatch({
                    type: 'DELETE_TOPIC',
                    topicToDelete: topic
                })),
        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: 'UPDATE_TOPIC',
                    topic
                }))
    }
}

export default connect(stpm, dtpm)(TopicPills);