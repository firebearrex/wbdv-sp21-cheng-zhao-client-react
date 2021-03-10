import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../services/module-service"

const ModuleList = (
    {
        myModules = [],
        createModule = () => alert("Create New Module"),
        deleteModule = (item) => alert("delete" + item._id),
        updateModule,
        findModulesForCourse = (courseId) => console.log(courseId)
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <div className="list-group list-group-flush mt-3 editor-module-list">
            {
                myModules.map(module =>
                        <EditableItem
                        to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                        updateItem={updateModule}
                        deleteItem={deleteModule}
                        active={module._id === moduleId ? true : false}
                        item={module}
                        />
                    )
            }
            <a className={`list-group-item`}
               aria-current={"true"}>
                <i onClick={() => createModule(courseId)}
                className={"fas fa-plus-circle fa-2x float-right"}></i>
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
        createModule: (courseId) =>
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: 'CREATE_MODULE',
                    module: theActualModule
                })),
        deleteModule: (module) =>
            moduleService.deleteModule(module._id)
                .then(status => dispatch({
                    type: 'DELETE_MODULE',
                    moduleToDelete: module
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: 'UPDATE_MODULE',
                    module
                })),
        findModulesForCourse: (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                }))
    }
}

export default connect(stpm, dtpm)(ModuleList);