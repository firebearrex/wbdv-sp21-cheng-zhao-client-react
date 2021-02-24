import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import "../course-manager.css"

const CourseGrid = ({addCourse, deleteCourse, updateCourse, courses}) =>
    <div className={"container extra-top-padding"}>
        {/*<Link to="/courses/table">*/}
        {/*    <i className="fas fa-list fa-2x float-right"></i>*/}
        {/*</Link>*/}
        {/*<h2>Courses - Grid</h2>*/}

        <h2>
            Courses - Grid
            <span className={"row float-right"}>
                        <Link to={"/"}>
                            <i className={"col-1 fas fa-home"}></i>
                        </Link>
                        <Link to={"/courses/table"}>
                            <i className={"col-1 fas fa-list"}></i>
                        </Link>
                        <span className={"col-10"}></span>
                    </span>
        </h2>
        <div className="row">
            {
                courses.map((course, idx) =>
                    <CourseCard
                        key={idx}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        course={course}
                        title={course.title}
                        owner={course.owner}
                    />)
            }
        </div>
    </div>;

export default CourseGrid