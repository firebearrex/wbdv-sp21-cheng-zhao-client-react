import React, {useState} from "react";
import {Link} from "react-router-dom";
// import {useState} from "react/cjs/react.production.min";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [currCourse, setCurrCourse] = useState(course);

    const saveTitle = () => {
        setEditing(false);
        const updatedCourse = {
            ...currCourse,
            title: newTitle
        };
        updateCourse(updatedCourse);
        setCurrCourse(updatedCourse);
        setNewTitle('');
    }

    const editTitle = () => {
        setNewTitle(currCourse.title);
        setEditing(true);
    };

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
                            <span className={"col-10"}>
                                <Link to={`/courses/grid/edit/${course._id}`}>
                                    {title}
                                </Link>
                            </span>
                        }
                        {
                            editing &&
                            <input className={"col-10 form-control"}
                                   value={newTitle}
                                   onChange={(event) => setNewTitle(event.target.value)}/>
                        }
                        <span className={"row col-2 float-right"}>
                            {editing && <i
                                onClick={() => saveTitle()}
                                className="col-2 fas fa-check"></i>}
                            {editing && <i
                                onClick={() => {
                                    deleteCourse(course);
                                    setEditing(false);
                                }}
                                className="col-2 fas fa-trash"></i>}
                            {!editing && <i
                                onClick={() => editTitle()}
                                className="col fas fa-edit d-none d-lg-inline"></i>}
                        </span>
                    </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's
                        content.</p>
                    {/*<img src={``}/>*/}
                    <Link to="/editor" className="btn btn-primary">
                        {course.title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard