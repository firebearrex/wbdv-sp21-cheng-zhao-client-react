import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <Link to={"/courses/grid"}>
                    <i className={"fas fa-2x fa-th float-right"}></i>
                </Link>
                <h2>Courses - Table</h2>
                {/*<button>Add Course</button>*/}
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="d-table-cell">Title</th>
                        <th className="d-none d-md-table-cell">Owned By</th>
                        <th className="d-none d-lg-table-cell">Last Modified</th>
                        <th className={"d-table-cell"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course, idx) =>
                            <CourseRow
                                key={idx}
                                course={course}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
};