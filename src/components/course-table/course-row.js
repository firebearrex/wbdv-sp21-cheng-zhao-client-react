import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
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
        <tr>
            <td className={"d-table-cell"}>
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        <i className="fas fa-file"></i>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input className={"form-control"}
                           value={newTitle}
                           onChange={(event) => setNewTitle(event.target.value)}/>
                }
            </td>
            <td className={"d-none d-md-table-cell"}>{owner}</td>
            <td className={"d-none d-lg-table-cell"}>{lastModified}</td>
            <td className={"row d-table-cell"}>
                {editing && <i onClick={() => saveTitle()} className="col-2 fas fa-check"></i>}
                {editing && <i
                    onClick={() => {
                        deleteCourse(course);
                        setEditing(false);
                    }}
                    className="col-2 fas fa-trash"></i>}
                {!editing && <i onClick={() => editTitle()} className="col fas fa-edit"></i>}
            </td>
        </tr>
    )
}

export default CourseRow