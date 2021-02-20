import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";

class CourseManager extends React.Component {

    state = {
        courses: []
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
    }

    deleteCourse = () => {
        
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <CourseTable/>
                <CourseGrid/>
                <CourseEditor/>
            </div>
        )
    }
}

export default CourseManager