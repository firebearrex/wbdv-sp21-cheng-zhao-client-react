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
                <button>Add Course</button>
                <table className="table">
                    <tbody>
                    {/*<CourseRow title={"CS5610"} owner={"me"} lastModified={"1/1/2021"}/>*/}
                    {/*<CourseRow title={"CS1234"} owner={"you"} lastModified={"1/1/2021"}/>*/}
                    {/*<CourseRow title={"CS1234"} owner={"you"} lastModified={"1/1/2021"}/>*/}
                    {/*<CourseRow title={"CS1234"} owner={"you"} lastModified={"1/1/2021"}/>*/}
                    {
                        this.props.courses.map((course, idx) =>
                            <CourseRow
                                key={idx}
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