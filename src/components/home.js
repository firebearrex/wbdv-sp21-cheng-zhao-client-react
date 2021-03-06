import React from 'react'
import {Link} from "react-router-dom";

const Home = () =>
    <div className={"container"}>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/courses/table" className="list-group-item">
                Courses Table (Please use Table view for testing Quizzes feature)
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
            <a href="#" className={"list-group-item"}>
                Please select a course through Courses-Table or Courses-Grid to enter the CourseEditor
            </a>
            {/*<Link to="/editor" className="list-group-item">*/}
            {/*    Course Editor*/}
            {/*</Link>*/}
        </div>
    </div>

export default Home;
