import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";

const EditableItem = (
    {
        to = "somewhere/to/go",
        type,
        deleteItem,
        updateItem,
        item = {title: "Some Title", _id: "ABC"},
        active,
        key
    }) => {
    const [editing, setEditing] = useState(false);
    const [cachedItem, setCachedItem] = useState(item);
    const {moduleId, lessonId, topicId} = useParams();
    return (
        <a className={`${type === 'module' ? "list-group-item list-group-item-action" : "nav-item nav-link"} 
        ${active || editing ? 'active' : ''}`}
           aria-current={"true"}
           key={key}>
            {
                !editing &&
                <>
                    <Link
                        // className={`nav-link ${active ? 'active' : ''}`}
                        to={to}>
                        {item.title}
                        <i
                            className={"fas fa-edit float-right"}
                            onClick={() => setEditing(true)}></i>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                    <input
                        type={"text"}
                        onChange={(event =>
                            setCachedItem({
                                // ...cachedItem,
                                ...item,
                                title: event.target.value
                            }))}
                        value={cachedItem.title}
                    />
                    <span className={"float-right"}>
                        <i
                            className={"fas fa-check mr-3"}
                            onClick={() => {
                                setEditing(false);
                                updateItem(cachedItem);
                            }}></i>
                        <i
                            className={"fas fa-trash"}
                            onClick={() => {
                                setEditing(false);
                                deleteItem(item);
                            }}></i>
                    </span>

                </>
            }
        </a>
    );
}

export default EditableItem;
