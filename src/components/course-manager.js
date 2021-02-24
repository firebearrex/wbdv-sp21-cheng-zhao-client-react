import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses} from "../services/course-service";


class CourseManager extends React.Component {

    state = {
        courses: [
            // {title: "CS0001", owner: "Apple", lastModified: "01/01/2021"},
            // {title: "CS0002", owner: "Boy", lastModified: "02/01/2021"},
            // {title: "CS0003", owner: "Cookie", lastModified: "03/01/2021"},
            // {title: "CS0004", owner: "Duck", lastModified: "04/01/2021"}
        ],
        newCourseTitle: '',
        sdf: 456
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //         courses: actualCourses
        //     }));
        findAllCourses()
            .then(courses => this.setState({courses}))


    addCourse = () => {
        let newTitle;
        if (this.state.newCourseTitle === '') {
            newTitle = "New Course";
        } else {
            newTitle = this.state.newCourseTitle;
        }

        const newCourse = {
            title: newTitle,
            owner: "Me",
            lastModified: "01/01/2021"
        };
        // this.state.courses.push(newCourse);
        // this.setState(this.state);

        courseService.createCourse(newCourse)
            .then(course => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: [
                        course,
                        ...prevState.courses
                    ]
                }))
            })

        this.setState({
            newCourseTitle: ''
        })
    }

    deleteCourse = (courseToDelete) => {
        // console.log(course);
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //     courses: newCourses
                // })

                // this.setState((prevState) => {
                //     //     let nextState = {...prevState};
                //     //     nextState.courses =
                //     //         prevState
                //     //             .courses
                //     //             .filter(course => course !== courseToDelete);
                //
                //     let nextState = {
                //         ...prevState,
                //         courses: prevState.courses
                //             .filter(course => course !== courseToDelete)
                //     }
                //
                //     return nextState;
                // });

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses
                        .filter(course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (updatedCourse) => {
        // console.log(course);
        courseService.updateCourse(updatedCourse._id, updatedCourse)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses
                        .map(
                            course => course._id === updatedCourse._id ? updatedCourse : course
                        )
                }))
            })
    }

    updateNewCourseTitle = event =>
        this.setState({
            newCourseTitle: event.target.value
        });

    render() {
        return (
            <div>
                {/*<h1>Course Manager</h1>*/}
                {/*<button onClick={this.addCourse}>Add Course</button>*/}

                <nav className={"navbar navbar-expand-md navbar-dark bg-primary fixed-top"}>
                    <div className={"container-fluid row"}>
                        <span className={"col-1 col-lg-3"}>
                            <a className="navbar-brand fas fa-bars" href="#"></a>
                            <span className={"navbar-text h5 m-auto d-none d-lg-inline"}>Course Manager</span>
                        </span>
                        <span className={"input-group col-10 col-lg-8"}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Enter new course title here: </span>
                            </div>
                            <input type="text"
                                   className="form-control w-auto wbdv-new-title"
                                   placeholder="New Course Title"
                                   aria-label="Type your new course title here"
                                   value={this.state.newCourseTitle}
                                   onChange={event => this.updateNewCourseTitle(event)}/>
                        </span>
                        <button onClick={this.addCourse} className="btn col-1 fas fa-2x fa-plus-circle"></button>
                        {/*<span className={"col-1"}>*/}
                        {/*</span>*/}
                    </div>
                </nav>

                <Route path={"/courses/table"}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path={"/courses/grid"}>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
            </div>
        )
    }
}

export default CourseManager