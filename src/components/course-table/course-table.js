import React from "react";
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <h2>Course Table</h2>
                {/*<button>Add Course</button>*/}
                <table className="table">
                    <tbody>
                    {
                        this.props.courses.map((course, idx) =>
                            <CourseRow
                                key={idx}
                                course={course}
                                deleteCourse={this.props.deleteCourse}
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