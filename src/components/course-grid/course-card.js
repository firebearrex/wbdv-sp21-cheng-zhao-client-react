import React, {useState} from "react";
import {Link} from "react-router-dom";
// import {useState} from "react/cjs/react.production.min";

const CourseCard = ({deleteCourse, updateCourse, course, title, owner}) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const saveTitle = () => {
        setEditing(false);
        const updatedCourse = {
            ...course,
            title: newTitle
        };
        updateCourse(updatedCourse);
    }

    return (
        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top"
                     alt="..."/>
                <div className="card-body">
                    <h5 className="row card-title">
                        {
                            !editing &&
                            <span className={"col-10"}>{title}</span>
                        }
                        {
                            editing &&
                            <input className={"col-10 form-control"}
                                   value={newTitle}
                                   onChange={(event) => setNewTitle(event.target.value)}/>
                        }
                        <span className={"row col-2 float-right"}>
                        {editing && <i onClick={() => saveTitle()} className="col-2 fas fa-check"></i>}
                            {editing && <i
                                onClick={() => {
                                    deleteCourse(course);
                                    setEditing(false);
                                }}
                                className="col-2 fas fa-trash"></i>}
                            {!editing && <i onClick={() => setEditing(true)} className="col fas fa-edit"></i>}
                    </span>
                    </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's
                        content.</p>
                    {/*<img src={``}/>*/}
                    <Link to="/courses/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard