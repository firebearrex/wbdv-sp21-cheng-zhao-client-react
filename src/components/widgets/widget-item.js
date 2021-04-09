import React, {useState} from 'react';
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';
import ListWidget from './list-widget';
import ImageWidget from './image-widget';
import Select from 'react-select';

const WidgetItem = (
    {
        to,
        type,
        widget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false);
    const [cachedWidget, setCachedWidget] = useState(widget);

    const updateType = event => {
        setCachedWidget({
            ...widget,
            type: event.target.value
        });
        updateWidget(cachedWidget);
        setEditing(false);
    }

    let options = [
        {label: 'Heading', value: "HEADING"},
        {label: 'Paragraph', value: "PARAGRAPH"},
        {label: 'List', value: "LIST"},
        {label: 'Image', value: "IMAGE"}
    ]

    return (
        <li
            className={"list-group-item"}
            key={widget.id}>
            {
                !editing &&
                <i onClick={() => setEditing(true)}
                   className={"fas fa-2x fa-cog float-right"}></i>
            }
            {
                editing &&
                <>
                    <span className={"float-right"}>
                        <i className={"fas fa-check mr-3"}
                           onClick={() => {
                               updateWidget(cachedWidget);
                               setEditing(false);
                           }}></i>
                        <i className={"fas fa-trash"}
                           onClick={() => {
                               deleteWidget(widget);
                               setEditing(false);
                           }}></i>
                    </span>
                    <select className={"form-control"}
                        // onChange={event => {
                        //     setCachedWidget(prevState => ({
                        //         ...widget,
                        //         type: event.target.value
                        //     }));
                        //     updateWidget(cachedWidget);
                        //     setEditing(false);
                        // }}
                            onChange={event => updateType(event)}
                            defaultValue={cachedWidget.type}
                    >
                        <option value={cachedWidget.type} selected>Current type: {cachedWidget.type}</option>
                        <option value={"HEADING"}>
                            Heading
                        </option>
                        <option value={"PARAGRAPH"}>
                            Paragraph
                        </option>
                        <option value={"LIST"}>
                            List
                        </option>
                        <option value={"IMAGE"}>
                            Image
                        </option>
                        <option value={"HYPERLINK"}
                                disabled>
                            Hyperlink
                        </option>
                        <option value={"VIDEO"}
                                disabled>
                            Video
                        </option>
                    </select>
                    {/*<br/>*/}
                    {/*<Select*/}
                    {/*    options={options}*/}
                    {/*    onChange={value => updateType(value)}*/}
                    {/*/>*/}
                </>

            }
            {
                type === 'HEADING' &&
                <HeadingWidget
                    to={to}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    editing={editing}
                    setEditing={setEditing}
                    cachedWidget={cachedWidget}
                    setCachedWidget={setCachedWidget}
                />
            }
            {
                type === 'PARAGRAPH' &&
                <ParagraphWidget
                    to={to}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    editing={editing}
                    setEditing={setEditing}
                    cachedWidget={cachedWidget}
                    setCachedWidget={setCachedWidget}
                />
            }
            {
                type === 'LIST' &&
                <ListWidget
                    to={to}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    editing={editing}
                    setEditing={setEditing}
                    cachedWidget={cachedWidget}
                    setCachedWidget={setCachedWidget}
                />
            }
            {
                type === 'IMAGE' &&
                <ImageWidget
                    to={to}
                    widget={widget}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    editing={editing}
                    setEditing={setEditing}
                    cachedWidget={cachedWidget}
                    setCachedWidget={setCachedWidget}
                />
            }
        </li>
    )
}

export default WidgetItem;