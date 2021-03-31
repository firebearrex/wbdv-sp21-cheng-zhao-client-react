import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ListWidget = (
    {
        to,
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <>
            {
                editing &&
                <>
                        <span className={"float-right"}>
                            <i className={"fas fa-check mr-3"}
                               onClick={() => {
                                   setEditing(false);
                                   updateWidget(cachedWidget);
                               }}></i>
                            <i className={"fas fa-trash"}
                               onClick={() => {
                                   setEditing(false);
                                   deleteWidget(widget);
                               }}></i>
                        </span>
                    <input
                        type="checkbox"
                        checked={cachedWidget.widgetOrdered}
                        onChange={event => {
                            setCachedWidget(prevState => ({
                                ...widget,
                                widgetOrdered: event.target.value
                            }))
                        }}/> Ordered
                    List items
                    <textarea
                        value={cachedWidget.text}
                        onChange={event => {
                            setCachedWidget(prevState => ({
                                ...widget,
                                text: event.target.value
                            }))
                        }}
                        className={"form-control"}
                        cols="30"
                        rows="10">
                        </textarea>
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.widgetOrdered &&
                        <ol className={"list-group"}>
                            {
                                widget.text.split('\n').map(singleLine =>
                                    <li className={"list-group-item"}>
                                        {singleLine}
                                    </li>
                                )
                            }
                        </ol>
                    }
                    {
                        !widget.widgetOrdered &&
                        <ul className={"list-group"}>
                            {
                                widget.text.split('\n').map(singleLine =>
                                    <li className={"list-group-item"}>
                                        {singleLine}
                                    </li>
                                )
                            }
                        </ul>
                    }
                </>
            }
        </>
    )
};

export default ListWidget;