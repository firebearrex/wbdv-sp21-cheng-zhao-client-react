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

    const saveTitle = () => {
        setEditing(false);
        const updatedCourse = {
            ...course,
            title: newTitle
        };
        updateCourse(updatedCourse);
    };

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={"/courses/editor"}>
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
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
            </td>
        </tr>

    );
}

export default CourseRow