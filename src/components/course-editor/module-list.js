import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
// import moduleService from "../services/module-service"

const ModuleList = (
    {
        myModules = [],
        createModule = () => alert("Create New Module"),
        deleteModule = (item) => alert("delete" + item._id),
        updateModule,
        findModulesForCourse = (courseId) => console.log(courseId)
    }) => {
    const {courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <div className="list-group list-group-flush mt-3 editor-module-list">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Cras justo odio
                <i className="fas fa-minus-circle float-right"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                Dapibus ac facilisis in
                <i className="fas fa-minus-circle float-right"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                Morbi leo risus
                <i className="fas fa-minus-circle float-right"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                Porta ac consectetur ac
                <i className="fas fa-minus-circle float-right"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                Vestibulum at eros
                <i className="fas fa-minus-circle float-right"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <i className="fas fa-plus-circle float-right"></i>
            </a>
        </div>
    )
}

const stpm = state => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = dispatch => {
    return {
        createModule: createModuleForCourse(courseId, {title: "New Module"})
    }
}

const ModuleListContainer = connect()(ModuleList);

export default ModuleListContainer;