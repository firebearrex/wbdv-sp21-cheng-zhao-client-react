import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import topicService from "../../services/topic-service";

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
        if (typeof lessonId !== "undefined" && lessonId !== "undefined") {
            console.log(`Loading Topics for Lesson: ${lessonId}`);
            findTopicsForLesson(lessonId);
        }
    }, [courseId,moduleId,lessonId]);
    return (
        <div className={"row mt-3 mr-3"}>
            <ul className={"nav nav-pills col-11 {/*nav-fill*/}"}>
                {
                    myTopics.map(topic =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                            type={"topic"}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                            active={topic._id === topicId}
                            key={topic._id}
                        />)
                }
            </ul>
            <a className={"{/*nav-item nav-link*/} col-1"}
               aria-current={"true"}>
                <i onClick={() => createTopic(lessonId)}
                   className={"fas fa-plus-circle fa-2x"}></i>
            </a>
        </div>
    )
}

const stpm = state => {
    return {
        // ...state,
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