import React, {useState} from 'react';
import {Link} from "react-router-dom";

const HeadingWidget = (
    {
        to,
        widget,
        updateWidget,
        deleteWidget
        // editingWidgets,
        // setEditingWidgets,
        // addEditingWidget
    }) => {
    const [editing, setEditing] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <>
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)}
                       className={"fas fa-2x fa-cog float-right"}></i>
                    <Link
                        to={to}>
                        {widget.size === 1 && <h1>{widget.text}</h1>}
                        {widget.size === 2 && <h2>{widget.text}</h2>}
                        {widget.size === 3 && <h3>{widget.text}</h3>}
                        {widget.size === 4 && <h4>{widget.text}</h4>}
                        {widget.size === 5 && <h5>{widget.text}</h5>}
                        {widget.size === 6 && <h6>{widget.text}</h6>}
                    </Link>
                </>
            }
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
                    <form>
                        <select className={"form-control"}>
                            <option selected>Current type: {widget.type}</option>
                            <option value={"HEADING"}>
                                Heading
                            </option>
                            <option value={"PARAGRAPH"}>
                                Paragraph
                            </option>
                            <option value={"LIST"}
                                    className={"disabled"}>
                                List
                            </option>
                            <option value={"IMAGE"}
                                    className={"disabled"}>
                                Image
                            </option>
                            <option value={"HYPERLINK"}
                                    className={"disabled"}>
                                Hyperlink
                            </option>
                            <option value={"VIDEO"}
                                    className={"disabled"}>
                                Video
                            </option>
                        </select>
                        <input type={"text"}
                               onChange={event => {
                                   setCachedWidget(prevState => ({
                                       ...widget,
                                       text: event.target.value
                                   }))
                               }}
                               className={"form-control"}
                               value={cachedWidget.text}/>
                        <select className={"form-control"}>
                            <option selected>Current size: Heading {widget.size}</option>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                            <option value={6}>Heading 6</option>
                        </select>
                    </form>
                </>
            }
        </>
    )
}

export default HeadingWidget;