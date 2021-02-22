import React from "react";
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({deleteCourse, updateCourse, courses}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        <h2>Courses - Grid</h2>
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