import React from "react";
import CourseCard from "./course-card";

const CourseGrid = ({courses}) =>
    <div>
        {/*<Link to="/courses/table">*/}
        {/*    <i className="fas fa-list fa-2x float-right"></i>*/}
        {/*</Link>*/}
        <h2>Course Grid {courses.length}</h2>
        <div className="row">
            {
                courses.map((course, idx) =>
                    <CourseCard
                        key={idx}
                        course={course}/>
                )
            }
        </div>
    </div>;

export default CourseGrid