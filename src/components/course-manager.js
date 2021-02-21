import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";


class CourseManager extends React.Component {

    state = {
        courses: [
            {title: "CS0001", owner: "Apple", lastModified: "01/01/2021"},
            {title: "CS0002", owner: "Boy", lastModified: "02/01/2021"},
            {title: "CS0003", owner: "Cookie", lastModified: "03/01/2021"},
            {title: "CS0004", owner: "Duck", lastModified: "04/01/2021"}
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse);
        this.setState(this.state);
    }

    deleteCourse = (courseToDelete) => {
        // console.log(course);
        const newCourses = this.state.courses.filter(course => course !== courseToDelete)
        this.setState({
            courses: newCourses
        })
    }

    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path={"/courses/table"}>
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path={"/courses/grid"}>
                    <CourseGrid
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
                </Route>
                <Route path={"/courses/editor"}
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>
            </div>
        )
    }
}

export default CourseManager