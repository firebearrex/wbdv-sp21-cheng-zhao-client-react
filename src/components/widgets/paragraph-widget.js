import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ParagraphWidget = (
    {
        widget,
        editing,
        updateWidget,
        deleteWidget,
        setEditingWidgets
    }) => {
    const [cachedWidget, setCachedWidget] = useState(widget);

    return (
        <>
            <form className={"col-10"}>
                {
                    editing &&
                    <>
                        <select className={"form-control"}>
                            <option selected>Current type: ${widget.type}</option>
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
                        <textarea className={"form-control"}
                                  value={cachedWidget.text}
                                  onChange={event => {
                                      setCachedWidget(prevState => ({
                                          ...widget,
                                          text: event.target.value
                                      }))
                                  }}
                        ></textarea>
                    </>
                }
                {
                    !editing &&
                    <p>
                        {widget.text}
                    </p>
                }
            </form>
            <div className={"col-2"}>
                {
                    !editing &&
                    <i onClick={() => {
                        setEditingWidgets(prevState => [
                            ...prevState,
                            widget
                        ])
                    }}
                       className={"fas fa-2x fa-cog float-right"}></i>
                }
                {
                    editing &&
                    <>
                        <i onClick={() => {
                            // let editingWidget = thisEditingWidget(editingWidgets, widget.id);
                            // updateWidget(editingWidget);
                            updateWidget(cachedWidget);
                            setEditingWidgets(prevState =>
                                prevState.filter(prevEditingWidget =>
                                    prevEditingWidget.id !== widget.id
                                ))
                        }}
                           className={"fas fa-2x fa-check float-right mr-3"}></i>
                        <i onClick={() => {
                            // let editingWidget = thisEditingWidget(editingWidgets, widget.id);
                            // deleteWidget(editingWidget);
                            deleteWidget(widget);
                            setEditingWidgets(prevState =>
                                prevState.filter(prevEditingWidget =>
                                    prevEditingWidget.id !== widget.id
                                ))
                        }}
                           className={"fas fa-2x fa-trash float-right"}></i>
                    </>
                }
            </div>
        </>
    )
};

export default ParagraphWidget;