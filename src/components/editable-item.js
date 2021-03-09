import React, {useState} from 'react';
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to = "somewhere/to/go",
        deleteItem,
        updateItem,
        item = {title: "Some Title", _id: "ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false);
    const [cachedItem, setCachedItem] = useState(item);
    return (
        <>
            {
                !editing &&
                <>
                    <Link
                        className={`nav-link ${active ? 'active' : ''}`}
                        to={to}>
                        {item.title}
                    </Link>
                    <i
                        className={"fas fa-edit"}
                        onClick={() => setEditing(true)}></i>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(event =>
                            setCachedItem({
                                ...cachedItem,
                                title: event.target.value
                            }))}
                        value={cachedItem.title}
                    />
                    <i
                        className={"fas fa-check"}
                        onClick={() => {
                            setEditing(false);
                            updateItem(cachedItem);
                        }}></i>
                    <i
                        className={"fas fa-trash"}
                        onClick={() => {
                            deleteItem(item);
                            setEditing(false);
                        }}></i>
                </>
            }
        </>
    );
}

export default EditableItem;
