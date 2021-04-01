import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ParagraphWidget = (
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
                !editing &&
                <>
                    {/*<i onClick={() => setEditing(true)}*/}
                    {/*   className={"fas fa-2x fa-cog float-right"}></i>*/}
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
                    <form>
                        {/*<select className={"form-control"}*/}
                        {/*        value={cachedWidget.type}*/}
                        {/*        onChange={event => {*/}
                        {/*            setCachedWidget(prevState => ({*/}
                        {/*                ...widget,*/}
                        {/*                type: event.target.value*/}
                        {/*            }))*/}
                        {/*        }}>*/}
                        {/*    <option value={cachedWidget.type}>Current type: {cachedWidget.type}</option>*/}
                        {/*    <option value={"HEADING"}>*/}
                        {/*        Heading*/}
                        {/*    </option>*/}
                        {/*    <option value={"PARAGRAPH"}>*/}
                        {/*        Paragraph*/}
                        {/*    </option>*/}
                        {/*    <option value={"LIST"}>*/}
                        {/*        List*/}
                        {/*    </option>*/}
                        {/*    <option value={"IMAGE"}>*/}
                        {/*        Image*/}
                        {/*    </option>*/}
                        {/*    <option value={"HYPERLINK"}*/}
                        {/*            disabled>*/}
                        {/*        Hyperlink*/}
                        {/*    </option>*/}
                        {/*    <option value={"VIDEO"}*/}
                        {/*            disabled>*/}
                        {/*        Video*/}
                        {/*    </option>*/}
                        {/*</select>*/}
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
};

export default ParagraphWidget;