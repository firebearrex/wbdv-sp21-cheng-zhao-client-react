import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ParagraphWidget = (
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
                        <p>
                            {widget.text}
                        </p>
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
                        <textarea
                            value={cachedWidget.text}
                            onChange={event => {
                                setCachedWidget(prevState => ({
                                    ...widget,
                                    text: event.target.value
                                }))
                            }}
                            className={"form-control"}></textarea>
                    </form>
                </>
            }
        </>
    )
}

export default ParagraphWidget;