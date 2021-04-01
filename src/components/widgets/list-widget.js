import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ListWidget = (
    {
        to,
        widget,
        updateWidget,
        deleteWidget,
        editing,
        setEditing,
        cachedWidget,
        setCachedWidget
    }) => {
    // const [editing, setEditing] = useState(false);
    // const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <>
            {
                editing &&
                <>
                    {/*<span className={"float-right"}>*/}
                    {/*    <i className={"fas fa-check mr-3"}*/}
                    {/*       onClick={() => {*/}
                    {/*           setEditing(false);*/}
                    {/*           updateWidget(cachedWidget);*/}
                    {/*       }}></i>*/}
                    {/*    <i className={"fas fa-trash"}*/}
                    {/*       onClick={() => {*/}
                    {/*           setEditing(false);*/}
                    {/*           deleteWidget(widget);*/}
                    {/*       }}></i>*/}
                    {/*</span>*/}
                    <input
                    type="checkbox"
                    checked={cachedWidget.widgetOrdered}
                    onChange={event => {
                        setCachedWidget(prevState => ({
                            ...widget,
                            widgetOrdered: event.target.checked
                        }));
                        // updateWidget(cachedWidget);
                        // setEditing(false);
                    }}
                    /> Ordered
                    <br/>
                    <br/>
                    <p>List items</p>
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
                    {/*<i onClick={() => setEditing(true)}*/}
                    {/*   className={"fas fa-2x fa-cog float-right"}></i>*/}
                    {
                        widget.widgetOrdered &&
                        <ol>
                            {
                                widget && widget.text && widget.text.split('\n').map(singleLine =>
                                    <li>
                                        {singleLine}
                                    </li>
                                )
                            }
                        </ol>
                    }
                    {
                        !widget.widgetOrdered &&
                        <ul>
                            {
                                widget && widget.text && widget.text.split('\n').map(singleLine =>
                                    <li>
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